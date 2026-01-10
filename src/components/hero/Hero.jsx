const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <div className="text-center max-w-3xl px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
          Hi, I’m <span className="text-blue-600">Sanjay</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
          Frontend Developer building modern, responsive web experiences.
        </p>

        <a
          href="#projects"
          className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium shadow hover:scale-105 transition"
        >
          View Projects
        </a>
      </div>
    </section>
  )
}

export default Hero
