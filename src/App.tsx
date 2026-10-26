import React from 'react'
import { Footer } from './components/layout/Footer'
import { Navbar } from './components/layout/Navbar'
import { Contact } from './components/sections/Contact'
import { Experience } from './components/sections/Experience'
import { Hero } from './components/sections/Hero'
import { Intro } from './components/sections/Intro'
import { Skills } from './components/sections/Skills'
import { Work } from './components/sections/Work'
import { AmbientGlow } from './components/ui/AmbientGlow'

function App() {
  return (
    <div className="site-shell">
      <AmbientGlow />
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <Work />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
