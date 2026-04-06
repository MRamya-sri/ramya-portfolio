import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import content from './data/content.json'
import Hero from './components/Hero'
import ParticleField from './components/ParticleField'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Certifications from './components/Certifications'

function App() {
  return (
    <div className="bg-[#0a0a0f] text-white min-h-screen overflow-x-hidden">
      {/* 3D Background - Fixed */}
      <div className="fixed inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <Suspense fallback={null}>
            <ParticleField />
          </Suspense>
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar data={content.personal} />
        <Hero data={content.personal} />
        <Skills data={content.skills} />
        <Projects data={content.projects} />
        <Experience data={content.experience} />
        <Education data={content.education} />
        <Certifications data={content.certifications} />
        <Contact data={content.personal} />
      </div>
    </div>
  )
}

export default App