import { lazy, Suspense } from 'react'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import ScrollProgress from './components/ui/ScrollProgress'
import HudBackground from './components/ui/HudBackground'
import { TranslationProvider } from './contexts/TranslationContext'

const About = lazy(() => import('./components/sections/About'))
const Projects = lazy(() => import('./components/sections/Projects'))
const Skills = lazy(() => import('./components/sections/Skills'))
const Education = lazy(() => import('./components/sections/Education'))
const Contact = lazy(() => import('./components/sections/Contact'))

function App() {
  return (
    <TranslationProvider>
      <HudBackground />
      <ScrollProgress />
      <Header />
      <main id="main">
        <Hero />
        <Suspense fallback={<div style={{ minHeight: '100vh' }} />}>
          <Projects />
          <Skills />
          <Education />
          <About />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </TranslationProvider>
  )
}

export default App
