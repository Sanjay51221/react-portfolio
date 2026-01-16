import { useEffect, useState } from "react"
import GlassSection from "../ui/GlassSection"

// ✅ ADD IMAGES ARRAY
const images = [
  "/photo1.jpeg",
  // "/photo2.jpeg",
  "/photo3.jpeg",
  // "/photo4.jpeg",
]

const About = () => {
  // ✅ IMAGE INDEX STATE
  const [imageIndex, setImageIndex] = useState(0)

  // ✅ AUTO CHANGE IMAGE EVERY 3 SECONDS
  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % images.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <GlassSection id="about" title="About Me">
      <div className="relative grid lg:grid-cols-2 gap-16 items-center">

        {/* FLOATING DECOR */}
        <div className="absolute -top-16 -left-16 w-64 h-64 bg-emerald-400/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 -right-16 w-64 h-64 bg-blue-500/20 rounded-full blur-[120px]" />

        {/* IMAGE BLOCK */}
        <div className="relative flex justify-center">
          <div className="relative group">
            {/* layered cards */}
            <div className="absolute -top-6 -left-6 w-full h-full rounded-3xl bg-gradient-to-tr from-emerald-400/30 to-blue-500/30 blur-xl" />
            <div className="absolute top-6 left-6 w-full h-full rounded-3xl bg-white/20 dark:bg-gray-900/20 backdrop-blur-xl" />

            {/* ✅ ONLY THIS LINE CHANGED */}
            <img
              src={images[imageIndex]}
              alt="Sanjay"
              className="
                w-full h-full object-cover object-top
                relative z-10
                md:w-80 md:h-[460px]
                rounded-3xl
                border border-white/40 dark:border-gray-700/40
                shadow-2xl
                transition-transform duration-500
                group-hover:scale-[1.03]
              "
            />
          </div>
        </div>

        {/* TEXT BLOCK */}
        <div className="relative space-y-6">
          <p className="text-sm uppercase tracking-widest text-emerald-500">
            Who I am
          </p>

          <h3 className="text-3xl md:text-4xl font-bold leading-tight">
            Building interfaces that feel <br />
            <span className="bg-gradient-to-r from-emerald-500 to-blue-500 bg-clip-text text-transparent">
              fast, clean & human
            </span>
          </h3>

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            I’m a frontend developer focused on crafting modern, high-quality web
            interfaces. I enjoy transforming ideas into elegant digital
            experiences using React, Tailwind CSS, and thoughtful design.
          </p>

          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            My approach blends performance, usability, and visual clarity. I pay
            close attention to spacing, motion, and interaction details that
            elevate a product from “working” to “delightful.”
          </p>

          {/* SIGNATURE */}
          <div className="pt-4 flex items-center gap-4">
            {/* <div className="h-px w-12 bg-gradient-to-r from-emerald-500 to-blue-500" /> */}
            <span className="text-sm text-gray-500">
              Sanjay • Frontend Developer
            </span>
          </div>
        </div>

      </div>
    </GlassSection>
  )
}

export default About
