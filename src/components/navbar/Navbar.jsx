import { useState } from "react"
import { useTheme } from "../../costumeHooks/useTheme"

const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
]

const Navbar = () => {
  const { theme, toggleTheme } = useTheme()
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 h-[72px] bg-white/70 dark:bg-gray-900/80 backdrop-blur shadow-sm">
      
      {/* MAIN BAR */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-full flex items-center justify-between">

        {/* LOGO */}
        <h1 className="group text-xl font-mono font-bold cursor-pointer select-none">
          <span className="text-gray-400 group-hover:text-blue-600 transition">
            &lt;
          </span>
          <span className="mx-1 bg-gradient-to-r from-yellow-500 via-green-500 to-blue-500 bg-clip-text text-transparent">
            Sanjay
          </span>
          <span className="text-gray-400 group-hover:text-blue-600 transition">
            /&gt;
          </span>
        </h1>

        {/* DESKTOP NAV */}
        <ul className="hidden md:flex gap-6 font-medium text-green-700">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="hover:text-blue-600 transition"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* RIGHT ACTIONS */}
        <div className="flex items-center gap-3">
          
         {/* THEME TOGGLE */}
                
        {/* Desktop → Text */}
        <button
          onClick={toggleTheme}
          className="
            hidden md:inline-flex
            px-3 py-1 text-sm rounded
            bg-blue-600 text-white
          "
        >
          {theme === "light" ? "Dark🌙" : "Light☀️"}
        </button>
                
        {/* Mobile → Icon */}
        <button
          onClick={toggleTheme}
          className="
            md:hidden
            px-2 py-1 text-lg rounded
            bg-blue-600 text-white
          "
        >
          {theme === "light" ? "🌙" : "☀️"}
        </button>


          {/* HAMBURGER */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col justify-center gap-[5px]"
          >
            <span className="w-6 h-[2px] bg-gray-800 dark:bg-white" />
            <span className="w-6 h-[2px] bg-gray-800 dark:bg-white" />
            <span className="w-6 h-[2px] bg-gray-800 dark:bg-white" />
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white/90 dark:bg-gray-900/95 backdrop-blur border-t">
          <ul className="flex flex-col items-center gap-6 py-6">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className="text-lg font-medium hover:text-blue-600 transition"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar
