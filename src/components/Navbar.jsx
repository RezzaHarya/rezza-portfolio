import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

function Navbar({ theme, setTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <nav className="nav-container">

        <a href="#home" className="nav-logo" onClick={closeMenu}>
          REZZA<span>.PAGE</span>
        </a>

        <div className={`nav-menu ${menuOpen ? "active" : ""}`}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="nav-link"
              onClick={closeMenu}
            >
              {link.name}
            </a>
          ))}

          <div className="mobile-socials">
            <a
              href="https://github.com/RezzaHarya"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub size={19} />
            </a>

            <a
              href="https://www.linkedin.com/in/rezzaalfat/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={19} />
            </a>
          </div>
        </div>

        <div className="nav-actions">

          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Ganti tema"
            title="Ganti tema"
          >
            {theme === "light" ? (
              <Moon size={19} />
            ) : (
              <Sun size={19} />
            )}
          </button>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>

      </nav>
    </header>
  );
}

export default Navbar;