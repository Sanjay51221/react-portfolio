import Hero from "../hero/Hero"
import About from "../about/About"
import Skills from "../skills/Skills"
import Project from "../project/Project"
import Contact from "../contact/Contact"
import GlobalBackground from "../background/GlobalBackground"

// import GlobalBackground from "../../background/GlobalBackground.jsx"

const Home = () => {
  return (
    <div className="relative">
      {/* ✅ Background starts AFTER landing */}
      <GlobalBackground />

      {/* Portfolio content */}
      <Hero />
      <About />
      <Skills />
      <Project />
      <Contact />
    </div>
  )
}

export default Home
