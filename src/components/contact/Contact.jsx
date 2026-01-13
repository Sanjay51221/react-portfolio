import { useEffect, useState } from "react"
import GlassSection from "../ui/GlassSection"

const typingTexts = [
  "Have an idea?",
  "Looking for collaboration?",
  "Got an opportunity?",
]

const Contact = () => {
  const [text, setText] = useState("")
  const [textIndex, setTextIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  // ✅ Typing + backspace animation (same as Hero)
  useEffect(() => {
    const current = typingTexts[textIndex]
    const speed = isDeleting ? 50 : 100
    const pause = 1200

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setText(current.slice(0, text.length + 1))

        if (text === current) {
          setTimeout(() => setIsDeleting(true), pause)
        }
      } else {
        setText(current.slice(0, text.length - 1))

        if (text === "") {
          setIsDeleting(false)
          setTextIndex((prev) => (prev + 1) % typingTexts.length)
        }
      }
    }, speed)

    return () => clearTimeout(timer)
  }, [text, isDeleting, textIndex])

  return (
    <GlassSection id="contact" title="Contact">
      <div className="relative overflow-hidden">

        {/* ===== CONTENT ===== */}
        <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT SIDE */}
          <div className="space-y-8">
            <img
              src="./2761902.jpg"
              alt="Contact"
              className="
                w-full max-w-md
                rounded-3xl
                object-cover
                shadow-2xl
              "
            />

            <div className="space-y-3">
              <p className="text-sm uppercase tracking-widest text-gray-500">
                Get in touch
              </p>

              {/* ✅ Typing text */}
              <p className="text-lg text-gray-700 dark:text-gray-300 h-7">
                {text}
                <span className="animate-pulse ml-1">▍</span>
              </p>

              <p className="text-gray-600 dark:text-gray-400">
                I’m always open to meaningful conversations.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE – FORM */}
          <form
            className="
              bg-white/55 dark:bg-gray-900/55
              backdrop-blur-2xl
              border border-white/30 dark:border-gray-700/40
              rounded-3xl
              p-10
              space-y-8
              shadow-[0_30px_80px_rgba(0,0,0,0.18)]
            "
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="relative">
              <input
                className="
                  w-full bg-transparent
                  border-b border-gray-300 dark:border-gray-600
                  py-3 focus:outline-none
                "
                placeholder="Your Name"
              />
            </div>

            <div className="relative">
              <input
                className="
                  w-full bg-transparent
                  border-b border-gray-300 dark:border-gray-600
                  py-3 focus:outline-none
                "
                placeholder="Your Email"
              />
            </div>

            <div className="relative">
              <textarea
                rows="4"
                className="
                  w-full bg-transparent
                  border-b border-gray-300 dark:border-gray-600
                  py-3 resize-none focus:outline-none
                "
                placeholder="Your Message"
              />
            </div>

            <button
              className="
                w-full py-4 rounded-xl
                bg-gradient-to-r from-emerald-500 to-blue-500
                text-white font-medium
                tracking-wide
                hover:scale-[1.02]
                transition
              "
            >
              Send Message →
            </button>
          </form>

        </div>
      </div>
    </GlassSection>
  )
}

export default Contact
