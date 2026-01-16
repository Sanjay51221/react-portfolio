import Hero from "../hero/Hero"
import About from "../about/About"
import Skills from "../skills/Skills"
import Project from "../project/Project"
import Contact from "../contact/Contact"
import GlobalBackground from "../background/GlobalBackground"
import useScrollReveal from "../../costumeHooks/useScrollReveal"
// import useScrollReveal from "../../hooks/useScrollReveal"

const Home = () => {
  useScrollReveal()

  return (
    <div className="relative">
      <GlobalBackground />

      {/* Hero stays static */}
      <Hero />

      {/* About → comes from bottom */}
      <div className="scroll-reveal reveal-up">
        <About />
      </div>

      {/* Skills → staggered cards */}
      <div className="stagger">
        <Skills />
      </div>

      {/* Projects → from left */}
      <div className="scroll-reveal reveal-left">
        <Project />
      </div>

      {/* Contact → from right */}
      <div className="scroll-reveal reveal-right">
        <Contact />
      </div>
    </div>
  )
}

export default Home
