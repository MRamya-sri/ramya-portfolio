import { motion } from 'framer-motion'
import { 
  FaPython, FaReact, FaJs, FaDatabase, FaGitAlt, FaDocker, FaRobot, FaBrain, FaChartLine, FaCode, FaServer, FaCogs
} from 'react-icons/fa'
import { 
  SiSupabase, SiPostgresql, SiTailwindcss, SiJupyter, SiPowerbi, SiFlask, SiTensorflow, SiPandas, SiNumpy, SiScikitlearn, SiReact
} from 'react-icons/si'
import { HiSparkles } from 'react-icons/hi'
import { BsLightningChargeFill } from 'react-icons/bs'

function Skills({ data }) {
  
  const skillsWithIcons = {
    ai_ml: {
      label: 'AI & Machine Learning',
      icon: <FaBrain className="w-6 h-6" />,
      color: 'violet',
      gradient: 'from-violet-500 to-purple-500',
      skills: [
        { name: 'Multi-Agent Systems', icon: <FaRobot /> },
        { name: 'LSTM Networks', icon: <FaBrain /> },
        { name: 'Reinforcement Learning', icon: <BsLightningChargeFill /> },
        { name: 'NLP', icon: <HiSparkles /> },
        { name: 'LLM Integration', icon: <FaRobot /> },
        { name: 'Neural Networks', icon: <FaBrain /> },
      ]
    },
    llms: {
      label: 'LLMs I Work With',
      icon: <FaRobot className="w-6 h-6" />,
      color: 'purple',
      gradient: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Llama', icon: <FaRobot /> },
        { name: 'Gemini', icon: <HiSparkles /> },
        { name: 'DeepSeek', icon: <FaBrain /> },
        { name: 'Mistral', icon: <FaRobot /> },
        { name: 'Qwen', icon: <FaRobot /> },
        { name: 'Ollama', icon: <FaCogs /> },
      ]
    },
    automation: {
      label: 'Automation & APIs',
      icon: <FaCogs className="w-6 h-6" />,
      color: 'blue',
      gradient: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'n8n Workflows', icon: <FaCogs /> },
        { name: 'Flask API', icon: <SiFlask /> },
        { name: 'Real-Time Pipelines', icon: <FaServer /> },
        { name: 'API Integration', icon: <FaCode /> },
      ]
    },
    technical: {
      label: 'Programming Languages',
      icon: <FaCode className="w-6 h-6" />,
      color: 'cyan',
      gradient: 'from-cyan-500 to-teal-500',
      skills: [
        { name: 'Python', icon: <FaPython /> },
        { name: 'JavaScript', icon: <FaJs /> },
        { name: 'SQL', icon: <FaDatabase /> },
        { name: 'React.js', icon: <FaReact /> },
        { name: 'React Native', icon: <SiReact /> },
      ]
    },
    tools: {
      label: 'Tools & Platforms',
      icon: <FaCogs className="w-6 h-6" />,
      color: 'teal',
      gradient: 'from-teal-500 to-green-500',
      skills: [
        { name: 'Supabase', icon: <SiSupabase /> },
        { name: 'ThingsBoard', icon: <FaServer /> },
        { name: 'Docker', icon: <FaDocker /> },
        { name: 'Git', icon: <FaGitAlt /> },
        { name: 'Jupyter', icon: <SiJupyter /> },
        { name: 'Power BI', icon: <SiPowerbi /> },
      ]
    },
  }

  const colorClasses = {
    violet: {
      bg: 'bg-violet-500/10',
      border: 'border-violet-500/30',
      text: 'text-violet-400',
      glow: 'shadow-violet-500/20',
    },
    purple: {
      bg: 'bg-purple-500/10',
      border: 'border-purple-500/30',
      text: 'text-purple-400',
      glow: 'shadow-purple-500/20',
    },
    blue: {
      bg: 'bg-blue-500/10',
      border: 'border-blue-500/30',
      text: 'text-blue-400',
      glow: 'shadow-blue-500/20',
    },
    cyan: {
      bg: 'bg-cyan-500/10',
      border: 'border-cyan-500/30',
      text: 'text-cyan-400',
      glow: 'shadow-cyan-500/20',
    },
    teal: {
      bg: 'bg-teal-500/10',
      border: 'border-teal-500/30',
      text: 'text-teal-400',
      glow: 'shadow-teal-500/20',
    },
  }

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="inline-block mb-4"
          >
            <HiSparkles className="w-10 h-10 text-violet-400" />
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <p className="text-gray-400">The tools I use to build intelligent systems</p>
        </motion.div>

        <div className="space-y-8">
          {Object.entries(skillsWithIcons).map(([key, category], catIndex) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
              className={`${colorClasses[category.color].bg} ${colorClasses[category.color].border} border rounded-2xl p-6 shadow-lg ${colorClasses[category.color].glow}`}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center text-white`}>
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-white">{category.label}</h3>
              </div>

              {/* Skills Grid */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: catIndex * 0.1 + index * 0.05 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className={`group flex items-center gap-2 px-4 py-2 rounded-xl border ${colorClasses[category.color].border} bg-black/20 hover:bg-black/40 cursor-default transition-all duration-300`}
                  >
                    <span className={`${colorClasses[category.color].text} text-lg group-hover:scale-110 transition-transform`}>
                      {skill.icon}
                    </span>
                    <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating Background Icons */}
        <div className="relative h-20 mt-12 overflow-hidden">
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute flex gap-16 text-4xl opacity-10"
          >
            {[FaPython, FaReact, FaBrain, FaRobot, FaDatabase, FaDocker, FaCode, FaChartLine, FaPython, FaReact, FaBrain, FaRobot, FaDatabase, FaDocker, FaCode, FaChartLine].map((Icon, i) => (
              <Icon key={i} className="text-violet-400" />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Skills