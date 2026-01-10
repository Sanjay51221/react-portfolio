const projects = [
  { title: "Todo App", desc: "Task manager using React" },
  { title: "Portfolio", desc: "Modern portfolio with Tailwind" },
  { title: "CRUD App", desc: "CRUD operations in React" },
]

const Project = () => {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <div
            key={i}
            className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow hover:scale-105 transition"
          >
            <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Project
