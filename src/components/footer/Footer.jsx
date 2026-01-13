const Footer = () => {
  return (
    <footer className=" bg-gray-100 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Top divider */}
        <div className="mb-8 border-2 h-px w-full border-blue-900 dark:bg-gray-700/40" />

        {/* Content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Left */}
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()}{" "}
            <span className="font-medium text-gray-900 dark:text-gray-100">
              Sanjay
            </span>
          </p>

          {/* Center */}
          <p className="text-xs tracking-widest uppercase text-gray-500">
            Frontend Developer
          </p>

          {/* Right */}
          <div className="flex gap-6 text-sm text-gray-600 dark:text-gray-400">
            <a
              href="#home"
              className="hover:text-emerald-500 transition-colors"
            >
              Home
            </a>
            <a
              href="#projects"
              className="hover:text-emerald-500 transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="hover:text-emerald-500 transition-colors"
            >
              Contact
            </a>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer
