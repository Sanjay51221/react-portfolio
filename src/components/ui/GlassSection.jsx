const GlassSection = ({ id, title, children }) => {
  return (
    <section
      id={id}
      className="relative py-24 px-6"
    >
      <div
        className="
          max-w-6xl mx-auto
          bg-white/60 dark:bg-gray-900/60
          backdrop-blur-xl
          border border-white/30 dark:border-gray-700/40
          rounded-3xl
          shadow-[0_20px_50px_rgba(0,0,0,0.15)]
          p-10 md:p-14
        "
      >
        {title && (
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
            {title}
          </h2>
        )}

        {children}
      </div>
    </section>
  )
}

export default GlassSection

