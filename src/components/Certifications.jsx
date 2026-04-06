import { motion } from 'framer-motion'
import { FaCertificate, FaEye } from 'react-icons/fa'
import { useState } from 'react'

function Certifications({ data }) {
  
  const getGradient = (color) => {
    switch(color) {
      case 'blue': return 'from-blue-500/20 to-cyan-500/20 border-blue-500/30'
      case 'green': return 'from-green-500/20 to-teal-500/20 border-green-500/30'
      case 'purple': return 'from-purple-500/20 to-violet-500/20 border-purple-500/30'
      case 'orange': return 'from-orange-500/20 to-yellow-500/20 border-orange-500/30'
      default: return 'from-violet-500/20 to-purple-500/20 border-violet-500/30'
    }
  }

  const getIconColor = (color) => {
    switch(color) {
      case 'blue': return 'text-blue-400'
      case 'green': return 'text-green-400'
      case 'purple': return 'text-purple-400'
      case 'orange': return 'text-orange-400'
      default: return 'text-violet-400'
    }
  }

  return (
    <section id="certifications" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Certifications</span>
          </h2>
          <p className="text-gray-400">Credentials that validate my skills</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.map((cert, index) => (
            <CertificateCard key={index} cert={cert} index={index} getGradient={getGradient} getIconColor={getIconColor} />
          ))}
        </div>
      </div>
    </section>
  )
}

function CertificateCard({ cert, index, getGradient, getIconColor }) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="relative h-64 cursor-pointer perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        
        {/* FRONT */}
        <div className={`absolute inset-0 backface-hidden rounded-2xl bg-gradient-to-br ${getGradient(cert.color)} border p-6 flex flex-col`}>
          <div className="flex items-start gap-4">
            <div className={`w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0`}>
              <FaCertificate className={`w-7 h-7 ${getIconColor(cert.color)}`} />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-white mb-1">{cert.name}</h3>
              <p className="text-gray-400 text-sm">{cert.issuer}</p>
              <p className="text-gray-500 text-xs">{cert.platform} • {cert.year}</p>
            </div>
          </div>
          
          <div className="mt-auto flex items-center justify-between">
            <div className="flex items-center gap-2">
              <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }} className="text-2xl">🏆</motion.div>
              <span className="text-gray-400 text-xs">Verified Credential</span>
            </div>
            <div className="flex items-center gap-1 text-gray-500 text-xs">
              <FaEye className="w-3 h-3" />
              <span>Hover to view</span>
            </div>
          </div>
        </div>

        {/* BACK - Certificate Image */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-2xl overflow-hidden border border-white/20">
          <iframe
            src={cert.image}
            className="w-full h-full"
            allow="autoplay"
            title={cert.name}
          ></iframe>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
            <p className="text-white text-sm font-medium">{cert.name}</p>
            <p className="text-gray-400 text-xs">{cert.issuer}</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Certifications