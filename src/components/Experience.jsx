import { motion } from 'framer-motion'
import { FaPlay, FaPython, FaReact, FaWhatsapp, FaDatabase, FaRobot, FaChartLine, FaCode, FaLaptopCode } from 'react-icons/fa'
import { SiSupabase, SiPostgresql, SiJavascript, SiTailwindcss } from 'react-icons/si'
import { useState } from 'react'

function Experience({ data }) {
  const [showVideo, setShowVideo] = useState(false)

  const techStack = [
  { icon: FaPython, name: 'Python', color: '#3776AB' },
  { icon: FaReact, name: 'React', color: '#61DAFB' },
  { icon: FaRobot, name: 'n8n', color: '#EA4B71' },
  { icon: SiSupabase, name: 'Supabase', color: '#3ECF8E' },
  { icon: FaWhatsapp, name: 'WhatsApp API', color: '#25D366' },
  { icon: SiPostgresql, name: 'PostgreSQL', color: '#4169E1' },
  { icon: SiJavascript, name: 'JavaScript', color: '#F7DF1E' },
  { icon: SiTailwindcss, name: 'Tailwind', color: '#06B6D4' },
  { icon: FaRobot, name: 'LLMs', color: '#8B5CF6' },
  { icon: FaChartLine, name: 'Analytics', color: '#F59E0B' },
]

  const llmModels = ['Ollama', 'Qwen', 'Mistral', 'Nemotron', 'Gemini', 'DeepSeek']

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-gray-400">Where I've applied my AI skills</p>
        </motion.div>

        {data.map((exp, index) => (
          <motion.div key={exp.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="relative bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-6 md:p-8 overflow-hidden">
            
            {/* Animated Developer Icon - Top Right */}
            <div className="absolute top-4 right-4 md:top-6 md:right-6">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-violet-500/20 to-purple-500/20 rounded-full flex items-center justify-center border-2 border-violet-500/30">
                  <FaLaptopCode className="w-8 h-8 md:w-10 md:h-10 text-violet-400" />
                </div>
                {/* Floating particles around icon */}
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }} className="absolute inset-0">
                  <div className="absolute -top-1 left-1/2 w-2 h-2 bg-violet-400 rounded-full"></div>
                  <div className="absolute top-1/2 -right-1 w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                  <div className="absolute -bottom-1 left-1/4 w-1 h-1 bg-blue-400 rounded-full"></div>
                </motion.div>
              </motion.div>
            </div>

            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6 pr-20">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">{exp.role}</h3>
                <p className="text-violet-400 font-mono text-lg">{exp.company}</p>
                <p className="text-gray-500 text-sm">{exp.location}</p>
              </div>
              <span className="text-gray-400 font-mono text-sm bg-white/5 px-4 py-2 rounded-lg border border-white/10">{exp.period}</span>
            </div>

            {/* Main Highlights */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <span className="text-violet-400">⚡</span> Key Achievements
              </h4>
              <ul className="space-y-3">
                {exp.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <span className="text-violet-400 mt-1">▹</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            {/* Detailed Work Section */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Multi-Agent Architecture */}
              <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <FaRobot className="text-violet-400" /> Multi-Agent System
                </h4>
                <p className="text-gray-400 text-sm mb-3">Built a sophisticated n8n workflow with interconnected AI agents handling:</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2 text-gray-300">
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    Customer Query Processing
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    Automated Invoice Generation
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                    Analytical Report PDFs
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                    Form Processing & Validation
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
                    Memory Retention for Context
                  </li>
                </ul>
              </div>

              {/* LLM Models Used */}
              <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <FaRobot className="text-violet-400" />
                </h4>
                <p className="text-gray-400 text-sm mb-3">Experimented and deployed multiple large language models:</p>
                <div className="flex flex-wrap gap-2">
                  {llmModels.map((model) => (
                    <motion.span 
                      key={model} 
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1.5 bg-gradient-to-r from-violet-500/20 to-purple-500/20 border border-violet-400/30 rounded-full text-sm text-violet-300 font-mono"
                    >
                      {model}
                    </motion.span>
                  ))}
                </div>
                <p className="text-gray-500 text-xs mt-3">Each model fine-tuned for specific tasks within the workflow</p>
              </div>
            </div>

            {/* Video Section */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <FaPlay className="text-violet-400" /> Workflow Demo
              </h4>
              <div className="relative rounded-xl overflow-hidden bg-black/50 aspect-video max-w-3xl border border-white/10">
                {showVideo ? (
                  <iframe
                    src="https://drive.google.com/file/d/13X_9EZDDaKo_TdTK_dyAkNO09XKhd36u/preview"
                    width="100%"
                    height="100%"
                    allow="autoplay"
                    className="absolute inset-0 w-full h-full"
                  ></iframe>
                ) : (
                  <button onClick={() => setShowVideo(true)} className="w-full h-full flex items-center justify-center group bg-gradient-to-br from-violet-900/30 to-purple-900/30">
                    <motion.div 
                      whileHover={{ scale: 1.1 }}
                      className="w-20 h-20 bg-violet-500/20 border-2 border-violet-500/50 rounded-full flex items-center justify-center group-hover:bg-violet-500/30 transition-all"
                    >
                      <FaPlay className="w-8 h-8 text-violet-400 ml-1" />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                    <span className="absolute bottom-4 left-4 text-white font-medium">Watch n8n Multi-Agent Workflow Demo</span>
                  </button>
                )}
              </div>
            </div>

            {/* Rotating Tech Stack */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <FaCode className="text-violet-400" /> Tech Stack & Tools
              </h4>
              <div className="relative overflow-hidden py-4">
                <motion.div 
                  animate={{ x: [0, -1000] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="flex gap-6"
                >
                  {[...techStack, ...techStack].map((tech, i) => (
                    <div key={i} className="flex flex-col items-center gap-2 min-w-[80px]">
                      <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center group hover:bg-white/10 transition-colors">
                        <tech.icon className="w-7 h-7" style={{ color: tech.color }} />
                      </div>
                      <span className="text-xs text-gray-400">{tech.name}</span>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>

          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Experience