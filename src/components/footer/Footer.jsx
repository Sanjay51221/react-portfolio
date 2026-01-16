// const Footer = () => {
//   return (
//     <footer className=" bg-gray-100 dark:bg-gray-950">
//       <div className="max-w-7xl mx-auto px-6 py-10">

//         {/* Top divider */}
//         <div className="border-2 h-px w-full border-blue-900 dark:bg-gray-700/40" />

//         {/* Content */}
//         <div className="flex flex-col md:flex-row items-center justify-between gap-6">

//           {/* Left */}
//           <p className="text-lg text-gray-600 dark:text-gray-400">
//             © {new Date().getFullYear()}{" "}
//             <span className="font-medium text-gray-900 dark:text-gray-100">
//               Sanjay
//             </span>
//           </p>

//           {/* Center */}
//           <p className="text-sm tracking-widest uppercase text-gray-500">
//             Frontend Developer
//           </p>

//           {/* Right */}
//           <div className="flex gap-6 text-base text-gray-600 dark:text-gray-400">
//             <a
//               href="#home"
//               className="hover:text-emerald-500 transition-colors"
//             >
//               Home
//             </a>
//             <a
//               href="#projects"
//               className="hover:text-emerald-500 transition-colors"
//             >
//               Projects
//             </a>
//             <a
//               href="#contact"
//               className="hover:text-emerald-500 transition-colors"
//             >
//               Contact
//             </a>
//           </div>

//         </div>
//       </div>
//     </footer>
//   )
// }

// export default Footer



const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        <p className="text-sm">© {new Date().getFullYear()} Sanjay</p>
        <p className="text-xs uppercase tracking-widest">Frontend Developer</p>
        <div className="flex gap-4 text-sm">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
