
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

interface NavLink {
  name: string;
  url: string;
}

const resumeUrl = "https://drive.google.com/file/d/1VZ9lzP45iUEr-V_7LvNoa-b87DUvvL84/view?usp=sharing";

const navLinks: NavLink[] = [
  { name: "About", url: "#about" },
  { name: "Experience", url: "#experience" },
  { name: "Projects", url: "#projects" },
  { name: "Contact", url: "#contact" },
];

const NavBar = () => {
  const isMobile = useIsMobile();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full px-4 md:px-12 py-4 transition-all duration-300 ${
        scrolled ? "bg-navy-dark/90 backdrop-blur shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold text-highlight">SDE</div>

        {isMobile ? (
          <>
            <button
              className="text-slate-light z-50"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span 
                  className={`bg-highlight h-0.5 w-full transition-all duration-300 ${
                    menuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span 
                  className={`bg-highlight h-0.5 w-full transition-all duration-300 ${
                    menuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span 
                  className={`bg-highlight h-0.5 w-full transition-all duration-300 ${
                    menuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </div>
            </button>
            
            <div
              className={`fixed inset-0 bg-navy-dark/90 backdrop-blur-lg flex flex-col items-center justify-center transition-all duration-300 ${
                menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              <nav className="flex flex-col items-center gap-8">
                {navLinks.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    onClick={() => setMenuOpen(false)}
                    className="text-xl font-mono text-slate-light hover:text-highlight"
                  >
                    <span className="text-highlight">0{i + 1}.</span> {link.name}
                  </a>
                ))}
                <Button
                  asChild
                  className="mt-4 border border-highlight text-highlight hover:bg-highlight/10 bg-transparent"
                >
                  <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
                    Resume
                  </a>
                </Button>
              </nav>
            </div>
          </>
        ) : (
          <nav className="flex items-center gap-8">
            <ol className="flex gap-8">
              {navLinks.map((link, i) => (
                <li key={i} className="font-mono text-sm">
                  <a
                    href={link.url}
                    className="text-slate hover:text-highlight link-underline"
                  >
                    <span className="text-highlight">0{i + 1}.</span> {link.name}
                  </a>
                </li>
              ))}
            </ol>
            <Button
              asChild
              className="border border-highlight text-highlight hover:bg-highlight/10 bg-transparent"
            >
              <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
                Resume
              </a>
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default NavBar;
