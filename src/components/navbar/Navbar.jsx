import { useTheme } from "../../costumeHooks/useTheme";

const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="group text-xl font-mono font-bold cursor-pointer select-none">
          <span className="text-gray-400 group-hover:text-blue-600 transition-colors duration-300">
            &lt;
          </span>
          <span className="mx- bg-gradient-to-r from-yellow-500 via-green-500 to-blue-500 bg-clip-text text-transparent">
            Sanjay
          </span>
          <span className="text-gray-400 group-hover:text-blue-600 transition-colors duration-300">
            /&gt;
          </span>
        </h1>

        <ul className="flex gap-6 text-sm font-medium">
          {navItems.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`} className="hover:text-blue-600">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={toggleTheme}
          className="px-3 py-1 text-sm rounded bg-blue-600 text-white"
        >
          {theme === "light" ? "Dark" : "Light"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
