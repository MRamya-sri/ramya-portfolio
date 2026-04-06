import { motion } from 'framer-motion'
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPaperPlane, FaRobot } from 'react-icons/fa'
import { useState } from 'react'

function Contact({ data }) {
  const [formData, setFormData] = useState({ email: '', message: '' })
  const [isSending, setIsSending] = useState(false)
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSending(true)
    
    // Create mailto link with the form data
    const subject = encodeURIComponent("Hello from your Portfolio!")
    const body = encodeURIComponent(`From: ${formData.email}\n\nMessage:\n${formData.message}`)
    
    setTimeout(() => {
      window.location.href = `mailto:${data.email}?subject=${subject}&body=${body}`
      setIsSending(false)
      setSent(true)
      setTimeout(() => setSent(false), 3000)
    }, 1000)
  }

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">Let's Connect</span>
          </h2>
          <p className="text-gray-400">Got an idea? Let's make it happen!</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Robot Animation */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <div className="relative">
              {/* Robot */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="text-center"
              >
                {/* Robot Head */}
                <motion.div 
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="text-9xl mb-4"
                >
                  🤖
                </motion.div>
                
                {/* Speech Bubble */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, type: "spring" }}
                  className="absolute -top-4 -right-4 bg-violet-500/20 border border-violet-500/30 rounded-2xl rounded-bl-none px-4 py-2"
                >
                  <p className="text-violet-300 text-sm font-mono">Beep boop! 👋</p>
                </motion.div>
              </motion.div>

              {/* Floating Elements around robot */}
              <motion.span
                animate={{ y: [0, -20, 0], x: [0, 10, 0], rotate: [0, 360] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute top-0 left-0 text-2xl"
              >✨</motion.span>
              <motion.span
                animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                className="absolute top-10 right-0 text-2xl"
              >💡</motion.span>
              <motion.span
                animate={{ y: [0, -15, 0], rotate: [0, -360] }}
                transition={{ duration: 6, repeat: Infinity, delay: 1 }}
                className="absolute bottom-10 left-10 text-2xl"
              >⚡</motion.span>

              {/* Info Cards */}
              <div className="mt-8 space-y-4">
                <motion.a
                  href={`mailto:${data.email}`}
                  whileHover={{ scale: 1.05, x: 10 }}
                  className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-4 hover:border-violet-500/30 transition-all"
                >
                  <div className="w-10 h-10 bg-violet-500/20 rounded-lg flex items-center justify-center">
                    <FaEnvelope className="w-5 h-5 text-violet-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs">Email me at</p>
                    <p className="text-white text-sm font-mono">{data.email}</p>
                  </div>
                </motion.a>

                <motion.div
                  whileHover={{ scale: 1.05, x: 10 }}
                  className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-4"
                >
                  <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <FaMapMarkerAlt className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs">Based in</p>
                    <p className="text-white text-sm font-mono">{data.location}</p>
                  </div>
                </motion.div>

                {/* Social Links */}
                <div className="flex gap-3 pt-4">
                  <motion.a
                    href={data.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:border-violet-500/30 transition-all"
                  >
                    <FaGithub className="w-6 h-6 text-gray-400 hover:text-violet-400" />
                  </motion.a>
                  <motion.a
                    href={data.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:border-blue-500/30 transition-all"
                  >
                    <FaLinkedin className="w-6 h-6 text-gray-400 hover:text-blue-400" />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="relative bg-gradient-to-br from-violet-500/10 to-purple-500/10 border border-violet-500/20 rounded-3xl p-8 shadow-2xl shadow-violet-500/10"
            >
              {/* Decorative Robot Arm */}
              <motion.div
                animate={{ rotate: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-6 -left-6 text-5xl"
              >
                🦾
              </motion.div>

              <div className="flex items-center gap-3 mb-6">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <FaRobot className="w-8 h-8 text-violet-400" />
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold text-white">Send me a message</h3>
                  <p className="text-gray-400 text-sm">I'll get back to you ASAP!</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Email Input */}
                <div>
                  <label className="block text-gray-400 text-sm mb-2 font-mono">Your Email</label>
                  <div className="relative">
                    <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-violet-400" />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="yourname@email.com"
                      className="w-full bg-black/30 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-violet-500/50 transition-all"
                    />
                  </div>
                </div>

                {/* Message Textarea */}
                <div>
                  <label className="block text-gray-400 text-sm mb-2 font-mono">Your Message</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hey Ramya! I wanted to reach out about..."
                    className="w-full bg-black/30 border border-white/10 rounded-xl py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-violet-500/50 transition-all resize-none"
                  />
                </div>

                {/* Send Button */}
                <motion.button
                  type="submit"
                  disabled={isSending}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 rounded-xl font-semibold flex items-center justify-center gap-3 transition-all duration-300 ${
                    sent 
                      ? 'bg-green-500 text-white' 
                      : 'bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600 text-white shadow-lg shadow-violet-500/25'
                  }`}
                >
                  {isSending ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      >
                        <FaRobot className="w-5 h-5" />
                      </motion.div>
                      Sending...
                    </>
                  ) : sent ? (
                    <>
                      ✅ Opening Mail App!
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>

              {/* Decorative Elements */}
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-3 -right-3 w-20 h-20 bg-violet-500/20 rounded-full blur-xl"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="flex justify-center gap-2 mb-4">
            <motion.span animate={{ rotate: [0, 360] }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }}>⚙️</motion.span>
            <span className="text-gray-500 text-sm">Built with React, Three.js & lots of curiosity</span>
            <motion.span animate={{ rotate: [0, -360] }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }}>⚙️</motion.span>
          </div>
          <p className="text-gray-600 text-sm">© {new Date().getFullYear()} {data.name} — The Nerdy Techy Girl 🤓💜</p>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact