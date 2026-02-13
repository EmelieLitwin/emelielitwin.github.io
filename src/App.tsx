import './App.css'

// Layout Components
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

// Section Components
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Projects from './components/sections/Projects'
import Skills from './components/sections/Skills'
import Education from './components/sections/Education'
import Contact from './components/sections/Contact'

// UI Components
import ScrollProgress from './components/ui/ScrollProgress'
import HudBackground from './components/ui/HudBackground'

function App() {
  return (
    <>
      <HudBackground />
      <ScrollProgress />
      <Header />
      <main id="main">
        <Hero />
        <Projects />
        <Skills />
        <Education />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
