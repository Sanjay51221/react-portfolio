import { useEffect, useState } from "react"

const roles = [
  "Frontend Engineer",
  "React Specialist",
  "UI / UX Focused Developer",
]

// ✅ ADD IMAGES ARRAY
const images = [
  // "./photo1.jpeg",
  "./photo2.jpeg",
  // "./photo3.jpeg",
  "./photo4.jpeg",
]

const Hero = () => {
  const [text, setText] = useState("")
  const [roleIndex, setRoleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  // ✅ IMAGE INDEX STATE
  const [imageIndex, setImageIndex] = useState(0)

  // 🔹 TYPING EFFECT (UNCHANGED)
  useEffect(() => {
    const current = roles[roleIndex]
    const typingSpeed = isDeleting ? 50 : 110
    const pauseTime = 1200

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(current.substring(0, text.length + 1))

        if (text === current) {
          setTimeout(() => setIsDeleting(true), pauseTime)
        }
      } else {
        setText(current.substring(0, text.length - 1))

        if (text === "") {
          setIsDeleting(false)
          setRoleIndex((prev) => (prev + 1) % roles.length)
        }
      }
    }, typingSpeed)

    return () => clearTimeout(timeout)
  }, [text, isDeleting, roleIndex])

  // 🔥 IMAGE AUTO CHANGE EVERY 3 SECONDS
  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % images.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* GLOW BACKDROP */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-emerald-500/30 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 -right-32 w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-[120px]" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-widest text-emerald-500">
            Welcome to my portfolio
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            I’m{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-blue-500 bg-clip-text text-transparent">
              Sanjay
            </span>
          </h1>

          <h2 className="text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-300 h-8">
            {text}
            <span className="animate-pulse">▍</span>
          </h2>

          <p className="max-w-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            I design and build modern, performant web experiences with a strong
            focus on clean UI, smooth interactions, and scalable frontend
            architecture.
          </p>

          <div className="flex gap-4 pt-4">
            <a
              href="#projects"
              className="px-7 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-blue-500 text-white font-medium shadow-lg hover:scale-105 transition"
            >
              View Work
            </a>

            <a
              href="#contact"
              className="px-7 py-3 rounded-xl border border-gray-300 dark:border-gray-700 backdrop-blur hover:bg-white/40 dark:hover:bg-gray-800/40 transition"
            >
              Contact
            </a>
          </div>
        </div>

        {/* RIGHT (IMAGE) */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative group">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-emerald-400 to-blue-500 animate-spin-slow opacity-70" />

            <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full bg-white/60 dark:bg-gray-900/60 backdrop-blur border border-white/40 dark:border-gray-700/40 shadow-2xl overflow-hidden">
              {/* ✅ ONLY THIS LINE CHANGED */}
              <img
                src={images[imageIndex]}
                alt="Sanjay"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero
