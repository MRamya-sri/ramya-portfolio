import { motion } from 'framer-motion'
import { FaGithub, FaMobileAlt } from 'react-icons/fa'
import { useState } from 'react'
import tflLogo from '../assets/ontime_london_logo_transparent.png'

function Projects({ data }) {
  const featuredProject = data.find(p => p.id === 'ontimeLondon')
  const otherProjects = data.filter(p => p.id !== 'ontimeLondon' && p.id !== 'smart-health')

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-gray-400">Things I've built that actually work</p>
        </motion.div>

        {/* HERO PROJECT - OnTimeLondon with Flip */}
        {featuredProject && <OnTimeLondonCard project={featuredProject} />}

        {/* OTHER PROJECTS - Flip Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <FlipCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function OnTimeLondonCard({ project }) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-12 cursor-pointer perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={`relative w-full transition-transform duration-700 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        
        {/* FRONT */}
        <div className="backface-hidden rounded-2xl bg-gradient-to-br from-blue-900/40 via-violet-900/30 to-red-900/20 border-2 border-blue-500/30 p-6 md:p-8">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            {/* TfL Logo */}
            <div className="flex-shrink-0">
              <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-4 border-red-500/50 flex items-center justify-center">
                <img src={tflLogo} alt="OnTimeLondon Logo" className="w-full h-full object-contain" />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <div className="flex items-center gap-2 bg-blue-500/20 border border-blue-400/50 rounded-full px-3 py-1">
                  <span className="text-lg">🚇</span>
                  <span className="text-blue-300 text-xs font-mono font-bold">MAJOR PROJECT</span>
                </div>
                <div className="flex items-center gap-2 bg-green-500/10 border border-green-500/30 rounded-full px-3 py-1">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  <span className="text-green-400 text-xs font-mono">CURRENT</span>
                </div>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">{project.title}</h3>
              <p className="text-blue-300 font-mono text-sm mb-3">{project.subtitle}</p>
              <p className="text-gray-300 mb-4 text-sm md:text-base">{project.description}</p>

              {/* App Coming Soon */}
              <div className="flex items-center gap-2 bg-orange-500/20 border border-orange-400/30 rounded-lg px-4 py-2 mb-4 w-fit">
                <FaMobileAlt className="text-orange-400" />
                <span className="text-orange-300 text-sm">📱 Mobile App in Progress — Can't wait to contribute to London commuters!</span>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.slice(0, 6).map((t) => (
                  <span key={t} className="px-2 py-1 bg-blue-500/20 border border-blue-400/30 rounded-full text-xs text-blue-200 font-mono">{t}</span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-3">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                  <FaGithub className="w-4 h-4" />
                  View Code
                </a>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-violet-500/20 hover:bg-violet-500/40 border border-violet-400/30 text-violet-300 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                  📄 Research
                </a>
              </div>
            </div>
          </div>
          
          {/* Flip Hint */}
          <div className="text-center mt-4 text-gray-500 text-xs">
            <span>Hover to see the vision ↻</span>
          </div>
        </div>

        {/* BACK */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-2xl bg-gradient-to-br from-blue-900/60 to-violet-900/60 border-2 border-blue-400/30 backdrop-blur-sm flex flex-col items-center justify-center p-8">
          {/* Large TfL Logo */}
          <div className="w-44 h-44 md:w-56 md:h-56 rounded-full overflow-hidden mb-6 flex items-center justify-center">
            <img src={tflLogo} alt="OnTimeLondon Logo" className="w-full h-full object-contain" />
          </div>
          
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 text-center">OnTimeLondon AI</h3>
          <p className="text-blue-200 text-center mb-2">Transforming London's Commute</p>
          <p className="text-gray-300 text-sm text-center mb-4 max-w-md">Real-time delay predictions powered by LSTM neural networks, serving 471 stations across the TfL network.</p>
          
          {/* Highlights */}
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            <span className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-white text-sm">471 Stations</span>
            <span className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-white text-sm">1,154 Connections</span>
            <span className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-white text-sm">97% Accuracy</span>
          </div>

          <p className="text-white/80 text-sm text-center">🚀 Real-time predictions for every Londoner</p>
        </div>
      </div>
    </motion.div>
  )
}

function FlipCard({ project, index }) {
  const [isFlipped, setIsFlipped] = useState(false)

  const gradients = [
    'from-violet-500/20 to-purple-500/20',
    'from-blue-500/20 to-cyan-500/20',
    'from-green-500/20 to-teal-500/20',
    'from-orange-500/20 to-red-500/20',
    'from-pink-500/20 to-rose-500/20',
    'from-indigo-500/20 to-blue-500/20',
  ]

  const gradient = gradients[index % gradients.length]

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="relative h-72 cursor-pointer perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        
        {/* FRONT */}
        <div className={`absolute inset-0 backface-hidden rounded-2xl bg-gradient-to-br ${gradient} border border-white/10 p-5 flex flex-col items-center justify-center text-center`}>
          {/* Circle Icon */}
          <div className="w-16 h-16 rounded-full bg-white/10 border-2 border-white/20 flex items-center justify-center mb-3 text-3xl">
            {project.emoji || '🚀'}
          </div>
          
          <h3 className="text-lg font-bold text-white mb-1">{project.title}</h3>
          <p className="text-violet-400 font-mono text-xs mb-2">{project.subtitle}</p>
          <p className="text-gray-400 text-xs line-clamp-2">{project.description}</p>
          
          <div className="absolute bottom-3 flex items-center gap-1 text-gray-500 text-xs">
            <span>Hover to flip</span>
            <span className="animate-bounce">↻</span>
          </div>
        </div>

        {/* BACK */}
        <div className={`absolute inset-0 backface-hidden rotate-y-180 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-white/20 p-5 flex flex-col`}>
          <div className="absolute inset-0 flex items-center justify-center opacity-10 text-8xl">
            {project.emoji || '🚀'}
          </div>
          
          <div className="relative z-10 flex flex-col h-full">
            <h3 className="text-base font-bold text-white mb-2">{project.title}</h3>
            
            <div className="flex flex-wrap gap-1 mb-3">
              {project.tech.slice(0, 4).map((t) => (
                <span key={t} className="px-2 py-0.5 bg-violet-500/20 border border-violet-400/30 rounded text-xs text-violet-300 font-mono">{t}</span>
              ))}
            </div>
            
            <ul className="space-y-1 flex-1 overflow-hidden">
              {project.highlights.slice(0, 2).map((highlight, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-gray-300">
                  <span className="text-violet-400">▹</span>
                  <span className="line-clamp-2">{highlight}</span>
                </li>
              ))}
            </ul>
            
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="mt-auto flex items-center justify-center gap-2 bg-violet-500/20 hover:bg-violet-500/40 border border-violet-400/30 text-violet-300 px-3 py-2 rounded-lg text-xs font-medium transition-colors">
              <FaGithub className="w-3 h-3" />
              View Code
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Projects