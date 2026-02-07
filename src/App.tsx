import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'
import ThemeToggle from './components/ThemeToggle'
import ScrollProgress from './components/ScrollProgress'
import BlueprintOverlay from './components/BlueprintOverlay'

function App() {
  return (
    <>
      <ScrollProgress />
      <BlueprintOverlay />
      <Header />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <ThemeToggle />
    </>
  )
}

export default App
