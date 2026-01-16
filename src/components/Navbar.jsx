import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle active section highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1)); // Remove #
      let currentSection = "";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section;
            break;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once to set initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-sm" : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
          <a
            className="flex items-center justify-center font-unbounded"
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#hero')?.scrollIntoView({ behavior: 'smooth' });
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                document.querySelector('#hero')?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            tabIndex={0}
            aria-label="Go to homepage"
          >
            <img 
              src="/src/assets/logo.png" 
              alt="Logo" 
              className="h-10 w-auto object-contain"
            />
          </a>

        {/* desktop nav */}
        <div className="hidden md:flex items-center space-x-1" role="menubar">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className={cn(
                "px-4 py-2 rounded-full transition-all duration-300 relative",
                "text-foreground/80 hover:text-primary hover:bg-primary/10",
                activeSection === item.href.substring(1) 
                  ? "text-primary font-medium bg-primary/10" 
                  : "hover:scale-105",
                "focus:outline-none focus:ring-2 focus:ring-primary"
              )}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              tabIndex={0}
              role="menuitem"
              aria-current={activeSection === item.href.substring(1) ? "page" : undefined}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Theme Toggle and mobile menu */}
        <div className="flex items-center space-x-2">
          <div className="hidden md:block">
            <ThemeToggle />
          </div>
          
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="md:hidden p-2 text-foreground z-50 rounded-md hover:bg-foreground/5 transition-colors duration-300"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}{" "}
          </button>
        </div>


        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <button
            onClick={() => setIsMenuOpen(false)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                setIsMenuOpen(false);
              }
            }}
            className="absolute top-6 right-6 p-2 text-foreground z-50 rounded-md hover:bg-foreground/10 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Close Menu"
          >
            <X size={24} />
          </button>
          
          <div className="flex flex-col items-center space-y-8 text-xl mt-12" role="menu">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className={cn(
                  "px-6 py-3 rounded-full transition-all duration-300 relative overflow-hidden",
                  "text-foreground/80 hover:text-primary hover:bg-primary/10",
                  activeSection === item.href.substring(1) ? "text-primary font-medium bg-primary/10" : "",
                  "focus:outline-none focus:ring-2 focus:ring-primary"
                )}
                onClick={(e) => {
                  e.preventDefault();
                  setIsMenuOpen(false);
                  document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setIsMenuOpen(false);
                    document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                tabIndex={0}
                role="menuitem"
              >
                {item.name}
              </a>
            ))}
            
            <div className="pt-4 mt-4 border-t border-foreground/20 w-full max-w-xs">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
