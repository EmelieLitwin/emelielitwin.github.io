import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'
import ScrollProgress from './components/ScrollProgress'
import Footer from './components/Footer'

function App() {
  return (
    <>
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
