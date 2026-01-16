import { useEffect, useState } from "react"

const Landing = ({ onFinish }) => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setTimeout(onFinish, 3000)

    const interval = setInterval(() => {
      setProgress((p) => (p >= 100 ? 100 : p + 4))
    }, 100)

    return () => {
      clearTimeout(timer)
      clearInterval(interval)
    }
  }, [onFinish])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white">

      {/* BACKGROUND GLOWS */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-emerald-500/30 rounded-full blur-[160px]" />
      <div className="absolute bottom-0 -right-40 w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-[160px]" />

      {/* GLASS CARD */}
      <div
        className="
          relative z-10
          w-[90%] max-w-md
          rounded-3xl
          bg-white/10 backdrop-blur-2xl
          border border-white/20
          shadow-[0_40px_120px_rgba(0,0,0,0.4)]
          px-10 py-14
          text-center
        "
      >
        {/* LOGO / NAME */}
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3">
          <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
            Sanjay
          </span>
        </h1>

        <p className="text-sm uppercase tracking-widest text-gray-400 mb-10">
          Frontend Developer
        </p>

        {/* LOADER */}
        <div className="relative w-20 h-20 mx-auto mb-10">
          <div className="absolute inset-0 rounded-full border border-white/20" />
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-emerald-400 animate-spin" />
          <div className="absolute inset-0 flex items-center justify-center text-sm text-gray-300">
            {progress}%
          </div>
        </div>

        {/* TEXT */}
        <p className="text-gray-400 tracking-wide">
          Loading experience
        </p>
      </div>
    </section>
  )
}

export default Landing
