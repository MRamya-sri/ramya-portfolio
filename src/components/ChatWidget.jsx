import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Send, X } from 'lucide-react'

const WEBHOOK_URL = 'https://n8n.ramya23.codes/webhook/portfolio-chat'
const ERROR_REPLY =
  "Sorry, I couldn't reach Ramya's AI agent right now. Please try again in a moment."
const easeOutExpo = [0.16, 1, 0.3, 1]

const popupMessages = [
  "Hi! I'm Ramya's AI assistant ✨ Need help exploring her work?",
  "Looking for an AI/ML engineer? Ask me why Ramya's the one 💜",
  'Curious about her dissertation? I can tell you everything!',
  "Got questions about Ramya's projects? Try me!",
  'Hey there 👋 Ask me anything about Ramya!',
]

const initialMessages = [
  {
    role: 'assistant',
    content:
      "Hi! I'm Ramya's AI assistant ✨ Ask me anything about her experience, projects, or how she builds things.",
  },
]

function createSessionId() {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID()
  }

  return `portfolio-${Date.now()}-${Math.random().toString(16).slice(2)}`
}

async function parseWebhookReply(response) {
  const contentType = response.headers.get('content-type') || ''
  const responseText = await response.text()

  if (!response.ok) {
    throw new Error(`Webhook request failed with status ${response.status}`)
  }

  if (!responseText.trim()) {
    return ''
  }

  if (!contentType.includes('application/json')) {
    return responseText.trim()
  }

  const data = JSON.parse(responseText)
  const payload = Array.isArray(data) ? data[0] : data
  const reply =
    payload?.output ??
    payload?.response ??
    payload?.text ??
    payload?.message ??
    payload?.answer ??
    payload?.data?.output ??
    payload?.data?.response ??
    payload?.data?.text

  return typeof reply === 'string' ? reply.trim() : ''
}

function TypingIndicator() {
  return (
    <div className="flex justify-start">
      <div className="flex items-center gap-1 rounded-2xl rounded-bl-sm bg-zinc-800 px-4 py-3">
        {[0, 1, 2].map((dot) => (
          <motion.span
            key={dot}
            className="h-2 w-2 rounded-full bg-violet-300"
            animate={{ y: [0, -5, 0], opacity: [0.4, 1, 0.4] }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              delay: dot * 0.15,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
    </div>
  )
}

function RobotGirlCharacter({ isOpen, onToggle }) {
  const [eyesClosed, setEyesClosed] = useState(false)

  useEffect(() => {
    let blinkTimeout
    let openTimeout

    const scheduleBlink = () => {
      const delay = 4000 + Math.random() * 3000

      blinkTimeout = window.setTimeout(() => {
        setEyesClosed(true)
        openTimeout = window.setTimeout(() => {
          setEyesClosed(false)
          scheduleBlink()
        }, 150)
      }, delay)
    }

    scheduleBlink()

    return () => {
      window.clearTimeout(blinkTimeout)
      window.clearTimeout(openTimeout)
    }
  }, [])

  return (
    <motion.button
      type="button"
      role="button"
      aria-label="Open AI assistant chat with Ramya"
      onClick={onToggle}
      className={`group relative flex items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-violet-200 focus:ring-offset-2 focus:ring-offset-[#0a0a0f] ${
        isOpen ? 'h-20 w-20' : 'h-20 w-20 sm:h-[100px] sm:w-[100px] lg:h-[140px] lg:w-[140px]'
      }`}
      initial={{ opacity: 0, x: 70, scale: 0.7, rotate: 8 }}
      animate={{
        opacity: 1,
        x: 0,
        y: [0, -8, 0],
        scale: 1,
        rotate: isOpen ? 0 : [-3, 3, -3],
      }}
      whileHover={{
        scale: 1.08,
        rotate: 0,
      }}
      whileTap={{ scale: 0.96 }}
      transition={{
        opacity: { duration: 0.65, ease: easeOutExpo },
        x: { duration: 0.65, ease: easeOutExpo },
        scale: { duration: 0.28, ease: easeOutExpo },
        y: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
        rotate: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
      }}
    >
      <motion.span
        aria-hidden="true"
        className="absolute inset-0 rounded-full bg-violet-500/25 blur-xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.span
        aria-hidden="true"
        className="absolute inset-0 rounded-full border border-fuchsia-300/40 shadow-[0_0_60px_rgba(139,92,246,0.5)]"
        animate={{ scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      />

      <span className="absolute -top-[18%] left-1/2 h-[22%] w-1 -translate-x-1/2 rounded-full bg-violet-200/80 shadow-[0_0_14px_rgba(221,214,254,0.9)]" />
      <span className="absolute -top-[25%] left-1/2 h-[15%] w-[15%] -translate-x-1/2 rounded-full bg-white shadow-[0_0_18px_rgba(255,255,255,0.95)]" />

      <span className="absolute -left-[5%] top-[36%] h-[34%] w-[18%] rounded-l-full border-l-2 border-t-2 border-violet-200/45" />
      <span className="absolute -right-[5%] top-[36%] h-[34%] w-[18%] rounded-r-full border-r-2 border-t-2 border-violet-200/45" />

      <span className="relative flex h-[78%] w-[78%] items-center justify-center overflow-hidden rounded-full border border-white/35 bg-gradient-to-br from-violet-100 via-fuchsia-200 to-violet-500 shadow-[inset_0_-18px_30px_rgba(76,29,149,0.28),inset_0_12px_20px_rgba(255,255,255,0.42),0_0_48px_rgba(168,85,247,0.62)] transition group-hover:shadow-[inset_0_-18px_30px_rgba(76,29,149,0.28),inset_0_12px_20px_rgba(255,255,255,0.42),0_0_70px_rgba(217,70,239,0.8)]">
        <span className="absolute left-[17%] top-[22%] h-[42%] w-[16%] rounded-full border-l-2 border-violet-400/45" />
        <span className="absolute right-[17%] top-[22%] h-[42%] w-[16%] rounded-full border-r-2 border-violet-400/45" />

        <span
          className={`absolute left-[29%] top-[39%] w-[15%] rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,1),0_0_16px_rgba(96,165,250,0.8)] transition-all duration-150 ${
            eyesClosed ? 'h-[3%]' : 'h-[15%]'
          }`}
        />
        <span
          className={`absolute right-[29%] top-[39%] w-[15%] rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,1),0_0_16px_rgba(96,165,250,0.8)] transition-all duration-150 ${
            eyesClosed ? 'h-[3%]' : 'h-[15%]'
          }`}
        />

        <span className="absolute bottom-[25%] h-[10%] w-[28%] rounded-b-full border-b-[3px] border-white/95" />
        <span className="absolute left-[18%] top-[18%] h-[18%] w-[18%] rounded-full bg-white/30 blur-sm" />
      </span>
    </motion.button>
  )
}

function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState(initialMessages)
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [hasPopupBeenShown, setHasPopupBeenShown] = useState(false)
  const [showPopup, setShowPopup] = useState(false)
  const [popupMessage] = useState(
    () => popupMessages[Math.floor(Math.random() * popupMessages.length)]
  )
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)
  const sessionIdRef = useRef(createSessionId())

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 639px)')
    const updateIsMobile = () => setIsMobile(mediaQuery.matches)

    updateIsMobile()
    mediaQuery.addEventListener('change', updateIsMobile)

    return () => mediaQuery.removeEventListener('change', updateIsMobile)
  }, [])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isLoading])

  useEffect(() => {
    if (isOpen) {
      requestAnimationFrame(() => inputRef.current?.focus())
    }
  }, [isOpen])

  useEffect(() => {
    if (isMobile || hasPopupBeenShown || isOpen) {
      return undefined
    }

    const showTimer = window.setTimeout(() => {
      setShowPopup(true)
      setHasPopupBeenShown(true)
    }, 2000)

    return () => window.clearTimeout(showTimer)
  }, [hasPopupBeenShown, isMobile, isOpen])

  useEffect(() => {
    if (!showPopup) {
      return undefined
    }

    const dismissTimer = window.setTimeout(() => {
      setShowPopup(false)
    }, 8000)

    return () => window.clearTimeout(dismissTimer)
  }, [showPopup])

  const toggleChat = () => {
    setShowPopup(false)
    setHasPopupBeenShown(true)
    setIsOpen((current) => !current)
  }

  const openChat = () => {
    setShowPopup(false)
    setHasPopupBeenShown(true)
    setIsOpen(true)
  }

  const dismissPopup = (event) => {
    event.stopPropagation()
    setShowPopup(false)
    setHasPopupBeenShown(true)
  }

  const sendMessage = async () => {
    const trimmedInput = input.trim()

    if (!trimmedInput || isLoading) {
      return
    }

    setMessages((currentMessages) => [
      ...currentMessages,
      { role: 'user', content: trimmedInput },
    ])
    setInput('')
    setIsLoading(true)

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: trimmedInput,
          chatInput: trimmedInput,
          sessionId: sessionIdRef.current,
          source: 'ramya-portfolio',
        }),
      })

      const reply = (await parseWebhookReply(response)) || ERROR_REPLY

      setMessages((currentMessages) => [
        ...currentMessages,
        { role: 'assistant', content: reply },
      ])
    } catch {
      setMessages((currentMessages) => [
        ...currentMessages,
        {
          role: 'assistant',
          content: ERROR_REPLY,
        },
      ])
    } finally {
      setIsLoading(false)
      requestAnimationFrame(() => inputRef.current?.focus())
    }
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault()
      sendMessage()
    }
  }

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            role="dialog"
            aria-label="Ramya's AI Assistant chat"
            className="fixed bottom-4 left-4 right-4 z-50 flex h-[500px] max-h-[70vh] flex-col overflow-hidden rounded-2xl border border-violet-500/30 bg-[#0f0a1f] shadow-2xl shadow-violet-950/60 sm:bottom-auto sm:left-auto sm:right-32 sm:top-[calc(50%-250px)] sm:w-[360px] lg:right-48"
            initial={{ opacity: 0, scale: 0.88, x: 24, y: 24 }}
            animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, scale: 0.88, x: 24, y: 24 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            style={{ transformOrigin: 'center right' }}
          >
            <div className="flex items-center justify-between gap-4 border-b border-violet-500/20 bg-violet-900/30 px-4 py-4">
              <div>
                <h2 className="text-base font-bold text-white">
                  Ramya&apos;s AI Assistant ✨
                </h2>
                <p className="text-sm text-zinc-400">
                  Ask me anything about her work
                </p>
              </div>

              <button
                type="button"
                aria-label="Close chat"
                onClick={() => setIsOpen(false)}
                className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-zinc-300 transition hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-violet-400"
              >
                <X size={20} aria-hidden="true" />
              </button>
            </div>

            <div className="flex-1 space-y-4 overflow-y-auto px-4 py-4">
              {messages.map((message, index) => (
                <motion.div
                  key={`${message.role}-${index}-${message.content}`}
                  className={`flex ${
                    message.role === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.18, ease: 'easeOut' }}
                >
                  <div
                    className={`max-w-[82%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                      message.role === 'user'
                        ? 'rounded-br-sm bg-gradient-to-br from-violet-600 to-purple-700 text-white shadow-lg shadow-violet-950/30'
                        : 'rounded-bl-sm bg-zinc-800 text-zinc-100'
                    }`}
                  >
                    {message.content}
                  </div>
                </motion.div>
              ))}

              {isLoading && <TypingIndicator />}
              <div ref={messagesEndRef} />
            </div>

            <div className="border-t border-violet-500/20 bg-zinc-950/60 p-4">
              <div className="flex items-center gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  disabled={isLoading}
                  onChange={(event) => setInput(event.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type a message..."
                  className="min-w-0 flex-1 rounded-full border border-violet-500/20 bg-zinc-900 px-4 py-3 text-sm text-white placeholder:text-zinc-500 transition focus:border-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-500/30 disabled:cursor-not-allowed disabled:opacity-60"
                />
                <button
                  type="button"
                  aria-label="Send message"
                  onClick={sendMessage}
                  disabled={isLoading || !input.trim()}
                  className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-purple-700 text-white shadow-lg shadow-violet-950/40 transition hover:scale-105 hover:shadow-violet-500/30 focus:outline-none focus:ring-2 focus:ring-violet-400 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100"
                >
                  <Send size={18} aria-hidden="true" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="fixed right-4 top-1/2 z-50 -translate-y-1/2 sm:right-6">
        <div className="relative flex items-center justify-end">
          <AnimatePresence>
            {showPopup && !isOpen && !isMobile && (
              <motion.div
                role="status"
                aria-live="polite"
                tabIndex={0}
                onClick={openChat}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault()
                    openChat()
                  }
                }}
                className="absolute right-[180px] top-1/2 w-[280px] -translate-y-1/2 cursor-pointer rounded-2xl border border-violet-500/40 bg-zinc-900/95 p-4 pr-10 text-sm leading-relaxed text-white shadow-2xl shadow-violet-950/60 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-violet-300"
                initial={{ opacity: 0, x: 28, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 28, scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              >
                {popupMessage}
                <span
                  aria-hidden="true"
                  className="absolute -right-2 top-1/2 h-4 w-4 -translate-y-1/2 rotate-45 border-r border-t border-violet-500/40 bg-zinc-900/95"
                />
                <button
                  type="button"
                  aria-label="Dismiss popup"
                  onClick={dismissPopup}
                  className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full text-zinc-400 transition hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-violet-400"
                >
                  <X size={15} aria-hidden="true" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          <RobotGirlCharacter isOpen={isOpen} onToggle={toggleChat} />
        </div>
      </div>
    </>
  )
}

export default ChatWidget
