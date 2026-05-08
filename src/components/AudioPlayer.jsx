import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute } from 'react-icons/fa'

export default function AudioPlayer() {
  const audioRef = useRef(null)
  const progressRef = useRef(null)

  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(0.8)
  const [isMuted, setIsMuted] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const handleTimeUpdate = () => setCurrentTime(audio.currentTime)
    const handleLoadedMetadata = () => {
      setDuration(audio.duration)
      setIsLoaded(true)
    }
    const handleEnded = () => setIsPlaying(false)
    const handleError = () => setHasError(true)

    audio.addEventListener('timeupdate', handleTimeUpdate)
    audio.addEventListener('loadedmetadata', handleLoadedMetadata)
    audio.addEventListener('ended', handleEnded)
    audio.addEventListener('error', handleError)

    audio.volume = volume

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate)
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata)
      audio.removeEventListener('ended', handleEnded)
      audio.removeEventListener('error', handleError)
    }
  }, [])

  const togglePlay = () => {
    const audio = audioRef.current
    if (!audio || hasError) return

    if (isPlaying) {
      audio.pause()
    } else {
      audio.play().catch(() => setHasError(true))
    }
    setIsPlaying(!isPlaying)
  }

  const handleProgressClick = (e) => {
    const audio = audioRef.current
    if (!audio || !isLoaded) return

    const bar = progressRef.current
    const rect = bar.getBoundingClientRect()
    const ratio = (e.clientX - rect.left) / rect.width
    const newTime = ratio * duration
    audio.currentTime = newTime
    setCurrentTime(newTime)
  }

  const handleVolumeChange = (e) => {
    const val = parseFloat(e.target.value)
    setVolume(val)
    if (audioRef.current) audioRef.current.volume = val
    setIsMuted(val === 0)
  }

  const toggleMute = () => {
    const audio = audioRef.current
    if (!audio) return

    if (isMuted) {
      audio.volume = volume || 0.8
      setIsMuted(false)
    } else {
      audio.volume = 0
      setIsMuted(true)
    }
  }

  const formatTime = (time) => {
    if (!time || isNaN(time)) return '0:00'
    const mins = Math.floor(time / 60)
    const secs = Math.floor(time % 60)
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0

  return (
    <section id="audio" className="py-20 bg-gradient-to-b from-dark via-accent/20 to-dark">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="section-subtitle">Audio</p>
          <h2 className="section-title">Mi Presentación Personal</h2>
          <p className="text-light/50 mt-2">
            Conóceme mejor escuchando mi presentación
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-dark border border-brown/30 rounded-2xl p-8 shadow-xl shadow-black/40"
        >
          {/* Hidden audio element */}
          <audio ref={audioRef} src="/assets/audio/presentacion-personal.mp3" preload="metadata" />

          {/* Speaker icon with pulse animation */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              {isPlaying && (
                <>
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gold/20"
                    animate={{ scale: [1, 1.8, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  />
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gold/10"
                    animate={{ scale: [1, 2.4, 1], opacity: [0.3, 0, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                  />
                </>
              )}
              <div className="relative z-10 w-20 h-20 rounded-full bg-gradient-to-br from-gold to-brown flex items-center justify-center">
                <FaVolumeUp
                  size={28}
                  className={`text-dark transition-all duration-300 ${isPlaying ? 'scale-110' : ''}`}
                />
              </div>
            </div>
          </div>

          {/* Track info */}
          <div className="text-center mb-6">
            <h3 className="text-light font-semibold text-lg">Presentación Personal</h3>
            <p className="text-gold/60 text-sm mt-1">Jullians Mauricio Amado Gutierrez</p>
          </div>

          {/* Error or not loaded state */}
          {hasError && (
            <div className="text-center mb-6 px-4 py-3 bg-accent/20 border border-accent/40 rounded-lg">
              <p className="text-gold/70 text-sm">
                El archivo de audio aún no está disponible. Agrega{' '}
                <code className="text-gold font-mono bg-dark/50 px-1 rounded">
                  presentacion-personal.mp3
                </code>{' '}
                en <code className="text-gold font-mono bg-dark/50 px-1 rounded">public/assets/audio/</code>
              </p>
            </div>
          )}

          {/* Progress bar */}
          <div className="mb-4">
            <div
              ref={progressRef}
              onClick={handleProgressClick}
              className="relative h-2 bg-brown/30 rounded-full cursor-pointer group"
              role="slider"
              aria-label="Progreso del audio"
              aria-valuenow={progressPercent}
            >
              <div
                className="absolute left-0 top-0 h-full bg-gradient-to-r from-gold to-brown rounded-full transition-all duration-100"
                style={{ width: `${progressPercent}%` }}
              />
              <div
                className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-gold rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                style={{ left: `calc(${progressPercent}% - 6px)` }}
              />
            </div>
            <div className="flex justify-between text-xs text-light/40 mt-2 font-mono">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6">
            {/* Volume */}
            <div className="flex items-center gap-2 flex-1 max-w-32">
              <button
                onClick={toggleMute}
                className="text-gold/60 hover:text-gold transition-colors duration-200"
                aria-label={isMuted ? 'Activar sonido' : 'Silenciar'}
              >
                {isMuted ? <FaVolumeMute size={16} /> : <FaVolumeUp size={16} />}
              </button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={isMuted ? 0 : volume}
                onChange={handleVolumeChange}
                className="flex-1 h-1 accent-gold cursor-pointer"
                aria-label="Volumen"
              />
            </div>

            {/* Play/Pause button */}
            <motion.button
              onClick={togglePlay}
              whileTap={{ scale: 0.92 }}
              whileHover={{ scale: 1.05 }}
              disabled={hasError}
              className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
                hasError
                  ? 'bg-brown/40 cursor-not-allowed'
                  : 'bg-gradient-to-br from-gold to-brown hover:shadow-gold/30 hover:shadow-xl cursor-pointer'
              }`}
              aria-label={isPlaying ? 'Pausar' : 'Reproducir'}
            >
              {isPlaying ? (
                <FaPause size={20} className="text-dark" />
              ) : (
                <FaPlay size={20} className="text-dark ml-1" />
              )}
            </motion.button>

            {/* Spacer to center the play button */}
            <div className="flex-1 max-w-32" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
