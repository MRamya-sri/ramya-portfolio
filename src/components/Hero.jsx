import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt, FaRobot, FaBook } from 'react-icons/fa'
import { HiSparkles } from 'react-icons/hi'

function Hero({ data }) {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 md:px-6 pt-20 pb-10 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        
        {/* AI Geek Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/30 rounded-full px-3 py-1.5 md:px-4 md:py-2 mb-4 md:mb-6"
        >
          <motion.span animate={{ rotate: [0, 360] }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }}>
            <FaRobot className="w-3 h-3 md:w-4 md:h-4 text-violet-400" />
          </motion.span>
          <span className="text-violet-300 text-xs md:text-sm font-mono">AI GEEK</span>
          <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <HiSparkles className="w-3 h-3 md:w-4 md:h-4 text-yellow-400" />
          </motion.span>
        </motion.div>

        {/* Name */}
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-3 md:mb-4">
          <span className="bg-gradient-to-r from-white via-violet-200 to-violet-400 bg-clip-text text-transparent">{data.name}</span>
        </motion.h1>

        {/* Title */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="flex items-center justify-center gap-1 md:gap-2 mb-4 md:mb-6">
          <span className="text-violet-400 font-mono text-base sm:text-lg md:text-xl lg:text-2xl">{'<'}</span>
          <span className="text-base sm:text-lg md:text-xl lg:text-2xl text-violet-400 font-mono">{data.title}</span>
          <span className="text-violet-400 font-mono text-base sm:text-lg md:text-xl lg:text-2xl">{'/>'}</span>
        </motion.div>

        {/* Tagline */}
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 font-light mb-4 md:mb-6 italic px-2">
          "{data.tagline}"
        </motion.p>

        {/* Description */}
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto mb-6 md:mb-10 leading-relaxed px-2">
          {data.description}
        </motion.p>

        {/* Action Buttons */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }} className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 md:gap-4 mb-6 md:mb-8 px-4">
          <a href={data.resume} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center gap-2 bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600 text-white px-5 md:px-6 py-2.5 md:py-3 rounded-xl font-medium transition-all duration-300 shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 text-sm md:text-base">
            <FaFileAlt className="w-4 h-4 md:w-5 md:h-5 group-hover:rotate-12 transition-transform" />
            View Resume
          </a>
          <a href={`mailto:${data.email}`} className="group flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-5 md:px-6 py-2.5 md:py-3 rounded-xl font-medium transition-all duration-300 text-sm md:text-base">
            <FaEnvelope className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform" />
            Let's Talk
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 }} className="flex justify-center gap-3 md:gap-4">
          <a href={data.links.github} target="_blank" rel="noopener noreferrer" className="group p-2.5 md:p-3 bg-white/5 hover:bg-violet-500/20 border border-white/10 hover:border-violet-500/50 rounded-xl transition-all duration-300">
            <FaGithub className="w-5 h-5 md:w-6 md:h-6 text-gray-400 group-hover:text-violet-400 transition-colors" />
          </a>
          <a href={data.links.linkedin} target="_blank" rel="noopener noreferrer" className="group p-2.5 md:p-3 bg-white/5 hover:bg-blue-500/20 border border-white/10 hover:border-blue-500/50 rounded-xl transition-all duration-300">
            <FaLinkedin className="w-5 h-5 md:w-6 md:h-6 text-gray-400 group-hover:text-blue-400 transition-colors" />
          </a>
          <a href={`mailto:${data.email}`} className="group p-2.5 md:p-3 bg-white/5 hover:bg-green-500/20 border border-white/10 hover:border-green-500/50 rounded-xl transition-all duration-300">
            <FaEnvelope className="w-5 h-5 md:w-6 md:h-6 text-gray-400 group-hover:text-green-400 transition-colors" />
          </a>
          <a href="https://my-study-tracker-eight.vercel.app/" target="_blank" rel="noopener noreferrer" className="group p-2.5 md:p-3 bg-white/5 hover:bg-orange-500/20 border border-white/10 hover:border-orange-500/50 rounded-xl transition-all duration-300">
            <FaBook className="w-5 h-5 md:w-6 md:h-6 text-gray-400 group-hover:text-orange-400 transition-colors" />
          </a>
        </motion.div>

        {/* Scroll indicator - Hidden on mobile */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }} className="hidden md:block absolute bottom-10 left-1/2 -translate-x-1/2">
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="flex flex-col items-center gap-2">
            <span className="text-gray-500 text-xs font-mono">scroll down</span>
            <div className="w-6 h-10 border-2 border-violet-500/30 rounded-full flex justify-center">
              <motion.div animate={{ y: [0, 12, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-1.5 h-3 bg-violet-500 rounded-full mt-2" />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating elements - Smaller on mobile */}
      <motion.div animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute top-1/4 left-4 md:left-10 text-2xl md:text-4xl opacity-20">🤖</motion.div>
      <motion.div animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute top-1/3 right-4 md:right-10 text-2xl md:text-4xl opacity-20">🧠</motion.div>
      <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} className="absolute bottom-1/4 left-6 md:left-20 text-xl md:text-3xl opacity-20">💡</motion.div>
    </section>
  )
}

export default Hero