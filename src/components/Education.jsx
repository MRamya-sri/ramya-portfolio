import { motion } from 'framer-motion'
import { FaGraduationCap, FaSchool, FaBook } from 'react-icons/fa'
import { HiAcademicCap } from 'react-icons/hi'

function Education({ data }) {
  
  const getIcon = (type) => {
    switch(type) {
      case 'masters': return <HiAcademicCap className="w-8 h-8 text-violet-400" />
      case 'bachelors': return <FaGraduationCap className="w-8 h-8 text-blue-400" />
      case 'intermediate': return <FaBook className="w-8 h-8 text-green-400" />
      case 'school': return <FaSchool className="w-8 h-8 text-orange-400" />
      default: return <FaGraduationCap className="w-8 h-8 text-violet-400" />
    }
  }

  const getGradient = (type) => {
    switch(type) {
      case 'masters': return 'from-violet-500/20 to-purple-500/20 border-violet-500/30'
      case 'bachelors': return 'from-blue-500/20 to-cyan-500/20 border-blue-500/30'
      case 'intermediate': return 'from-green-500/20 to-teal-500/20 border-green-500/30'
      case 'school': return 'from-orange-500/20 to-yellow-500/20 border-orange-500/30'
      default: return 'from-violet-500/20 to-purple-500/20 border-violet-500/30'
    }
  }

  return (
    <section id="education" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">Education</span>
          </h2>
          <p className="text-gray-400">My academic journey</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          
          {/* Education Timeline */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <FaGraduationCap className="text-violet-400" />
              Education Background
            </h3>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-violet-500 via-blue-500 via-green-500 to-orange-500"></div>
              
              {data.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="relative pl-16 pb-8 last:pb-0"
                >
                  {/* Timeline Dot */}
                  <div className={`absolute left-0 w-12 h-12 rounded-full bg-gradient-to-br ${getGradient(edu.type)} border-2 flex items-center justify-center`}>
                    {getIcon(edu.type)}
                  </div>
                  
                  {/* Card */}
                  <div className={`bg-gradient-to-br ${getGradient(edu.type)} border rounded-xl p-5 hover:scale-[1.02] transition-transform`}>
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <h4 className="text-lg font-bold text-white">{edu.degree}</h4>
                    </div>
                    <p className="text-violet-300 font-mono text-sm mb-1">{edu.institution}</p>
                    <div className="flex flex-wrap items-center gap-4 text-sm">
                      <span className="text-gray-400">{edu.period}</span>
                      <span className="px-2 py-0.5 bg-white/10 rounded text-white font-semibold">{edu.score}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side - Cute Animation - Centered vertically */}
          <div className="flex items-center justify-center h-full">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-violet-500/10 to-purple-500/10 border border-violet-500/20 rounded-2xl p-6 text-center w-full"
            >
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="text-8xl mb-4"
              >
                👩‍💻
              </motion.div>
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="flex justify-center gap-2 mb-3"
              >
                <span className="text-2xl">✨</span>
                <span className="text-2xl">🚀</span>
                <span className="text-2xl">✨</span>
              </motion.div>
              
              {/* Techy Signature Quote */}
              <div className="bg-black/30 rounded-lg p-4 mt-4 border border-violet-500/20">
                <p className="text-violet-300 font-mono text-sm italic">"Your girl codes multi-agent systems for fun — yes, I'm that nerdy"</p>
                <p className="text-gray-500 text-xs mt-2">— The Nerdy Techy Girl 🤓💜</p>
              </div>
              
              {/* Floating Elements */}
              <div className="relative h-12 mt-4">
                <motion.span animate={{ y: [0, -20, 0], x: [0, 10, 0] }} transition={{ duration: 4, repeat: Infinity, delay: 0 }} className="absolute left-1/4 text-xl">🤖</motion.span>
                <motion.span animate={{ y: [0, -15, 0], x: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity, delay: 0.5 }} className="absolute left-1/2 text-xl">💡</motion.span>
                <motion.span animate={{ y: [0, -25, 0], x: [0, 5, 0] }} transition={{ duration: 3.5, repeat: Infinity, delay: 1 }} className="absolute right-1/4 text-xl">🧠</motion.span>
              </div>

              {/* Extra nerdy touch */}
              <motion.p 
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-xs text-gray-500 mt-4 font-mono"
              >
                {'< building the future />'}
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education