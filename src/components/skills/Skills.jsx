import GlassSection from "../ui/GlassSection"
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa"
import { SiTailwindcss } from "react-icons/si"

import "./skill.css"

const mainSkills = [
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "React", icon: <FaReact /> },
]

const scrollSkills = [
  <FaHtml5 />,
  <FaCss3Alt />,
  <FaJs />,
  <FaReact />,
  <SiTailwindcss />,
  <FaGitAlt />,
  <FaGithub />,
]

const Skills = () => {
  return (
    <GlassSection id="skills" title="Skills">
      <div className="space-y-20">

        {/* ===== MAIN SKILLS ===== */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {mainSkills.map((skill, i) => (
            <div
              key={i}
              className="
                group flex flex-col items-center justify-center
                h-48 rounded-3xl
                bg-gradient-to-br from-white/60 to-white/30
                dark:from-gray-900/60 dark:to-gray-900/30
                backdrop-blur-xl
                border border-white/30 dark:border-gray-700/40
                shadow-[0_30px_80px_rgba(0,0,0,0.15)]
                transition-all duration-500
                hover:-translate-y-2
              "
            >
              <div className="text-5xl text-emerald-500 group-hover:scale-110 transition">
                {skill.icon}
              </div>

              <p className="mt-4 text-lg font-semibold tracking-wide">
                {skill.name}
              </p>
            </div>
          ))}
        </div>

        {/* ===== ICON MARQUEE ===== */}
        <div className="relative overflow-hidden py-8">

          {/* fade edges */}
          
          {/* <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white dark:from-gray-900 to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white dark:from-gray-900 to-transparent z-10" /> */}

          <div className="group overflow-hidden">
            <div className="flex gap-14 animate-marquee group-hover:[animation-play-state:paused]">
              {[...scrollSkills, ...scrollSkills].map((Icon, i) => (
                <span
                  key={i}
                  className="
                    text-4xl text-gray-600 dark:text-gray-400
                    hover:text-emerald-500 transition
                  "
                >
                  {Icon}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </GlassSection>
  )
}

export default Skills
