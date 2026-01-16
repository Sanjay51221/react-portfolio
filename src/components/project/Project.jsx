// import GlassSection from "../ui/GlassSection"

// const projects = [
//   {
//     title: "Todo App",
//     desc: "Task management app focused on speed and clean UI.",
//     tech: "React • Tailwind",
//     image: "/projects/todo.png",
//   },
//   {
//     title: "Portfolio Website",
//     desc: "Personal portfolio with animations and glass UI.",
//     tech: "React • Tailwind • GSAP",
//     image: "/projects/portfolio.png",
//   },
//   {
//     title: "CRUD Application",
//     desc: "Reusable CRUD components with modern state handling.",
//     tech: "React • JavaScript",
//     image: "/projects/crud.png",
//   },
// ]

// const Project = () => {
//   return (
//     <GlassSection id="projects" title="Projects">
//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

//         {projects.map((p, i) => (
//           <div
//             key={i}
//             className="
//               group relative
//               h-[360px]
//               rounded-3xl
//               overflow-hidden
//               cursor-pointer
//             "
//           >
//             {/* IMAGE */}
//             <img
//               src={p.image}
//               alt={p.title}
//               className="
//                 absolute inset-0 w-full h-full object-cover
//                 transition-transform duration-700
//                 group-hover:scale-110
//               "
//             />

//             {/* DARK OVERLAY */}
//             <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition" />

//             {/* CONTENT */}
//             <div className="absolute inset-0 p-6 flex flex-col justify-end">
//               <div
//                 className="
//                   backdrop-blur-xl
//                   bg-white/20
//                   border border-white/30
//                   rounded-2xl
//                   p-5
//                   translate-y-6
//                   opacity-0
//                   group-hover:translate-y-0
//                   group-hover:opacity-100
//                   transition-all duration-500
//                 "
//               >
//                 <h3 className="text-xl font-semibold text-white mb-2">
//                   {p.title}
//                 </h3>

//                 <p className="text-sm text-gray-200 mb-3">
//                   {p.desc}
//                 </p>

//                 <span className="text-xs text-emerald-300 tracking-wide">
//                   {p.tech}
//                 </span>
//               </div>
//             </div>
//           </div>
//         ))}

//       </div>
//     </GlassSection>
//   )
// }

// export default Project















import GlassSection from "../ui/GlassSection"

const projects = [
  {
    title: "Todo App",
    desc: "Task management app",
    image: "/projects/todo.png",
  },
  {
    title: "Portfolio",
    desc: "Personal website",
    image: "/projects/portfolio.png",
  },
  {
    title: "CRUD App",
    desc: "Reusable CRUD UI",
    image: "/projects/crud.png",
  },
]

const Project = () => {
  return (
    <GlassSection id="projects" title="Projects">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <div
            key={i}
            className="relative h-[260px] sm:h-[320px] md:h-[360px] rounded-3xl overflow-hidden"
          >
            <img src={p.image} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40 p-5 flex items-end">
              <div className="bg-white/20 backdrop-blur rounded-xl p-4 w-full">
                <h3 className="text-white font-semibold">{p.title}</h3>
                <p className="text-sm text-gray-200">{p.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </GlassSection>
  )
}

export default Project
