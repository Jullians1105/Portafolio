import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AudioPlayer from './components/AudioPlayer'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <div className="min-h-screen bg-dark font-poppins">
      <Navbar />
      <main>
        <Hero />
        <AudioPlayer />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App
