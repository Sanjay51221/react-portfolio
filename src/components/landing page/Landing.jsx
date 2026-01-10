import { useEffect } from "react"

const Landing = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(onFinish, 2500)
    return () => clearTimeout(timer)
  }, [onFinish])

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        Welcome to My Portfolio
      </h1>

      <div className="w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>

      <p className="mt-6 text-gray-400">Loading experience...</p>
    </section>
  )
}

export default Landing
