import { useState } from "react"

import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"
import Landing from "./components/landing page/Landing"
import Home from "./components/landing page/Home"

const App = () => {
  const [showPortfolio, setShowPortfolio] = useState(false)

  return (
    <>
      {!showPortfolio ? (
        <Landing onFinish={() => setShowPortfolio(true)} />
      ) : (
        <>
          <Navbar />
          <Home />
          <Footer />
        </>
      )}
    </>
  )
}

export default App
