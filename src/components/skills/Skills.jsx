const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Tailwind CSS",
  "Git & GitHub",
]

const Skills = () => {
  return (
    <section id="skills" className="max-w-5xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>

      <div className="flex flex-wrap gap-4">
        {skills.map((skill, i) => (
          <span
            key={i}
            className="px-5 py-2 rounded-full bg-blue-100 text-blue-700 dark:bg-gray-800 dark:text-gray-200 font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}

export default Skills
