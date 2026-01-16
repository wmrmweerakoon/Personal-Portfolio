import { useState } from "react";
import { cn } from "@/lib/utils";
import { FaBolt, FaCloud, FaBrain, FaMobileAlt, FaPencilRuler, FaProjectDiagram, FaUniversalAccess, FaRobot, FaLightbulb, FaRocket, FaWrench, FaServer } from "react-icons/fa";
import { SiVite, SiRender } from "react-icons/si";

// Define our skills with react-icons and specific colors for each icon
const skills = [
  // Programming & Development
 { name: "JavaScript (ES6+)", level: 90, category: "programming", icon: "devicon-javascript-plain", color: "text-yellow-400" },
  { name: "TypeScript", level: 85, category: "programming", icon: "devicon-typescript-plain", color: "text-blue-500" },
  { name: "React", level: 90, category: "programming", icon: "devicon-react-original", color: "text-cyan-400" },
 { name: "Vite", level: 80, category: "programming", icon: "react-icon", reactIcon: SiVite, color: "text-purple-500" }, // Using SiVite for Vite
 { name: "TailwindCSS", level: 90, category: "programming", icon: "devicon-tailwindcss-plain", color: "text-cyan-600" },
  { name: "Node.js", level: 80, category: "programming", icon: "devicon-nodejs-plain", color: "text-green-500" },
  { name: "Express", level: 75, category: "programming", icon: "devicon-express-original", color: "text-gray-600" },
  { name: "REST APIs", level: 85, category: "programming", icon: "react-icon", reactIcon: FaBolt, color: "text-yellow-500" }, // Bolt icon for APIs
  { name: "SQLite", level: 70, category: "programming", icon: "devicon-sqlite-plain", color: "text-blue-600" },
  { name: "MongoDB", level: 75, category: "programming", icon: "devicon-mongodb-plain", color: "text-green-600" },
  { name: "Firebase Hosting", level: 75, category: "programming", icon: "devicon-firebase-plain", color: "text-orange-400" },
 { name: "Render", level: 70, category: "programming", icon: "react-icon", reactIcon: SiRender, color: "text-indigo-500" }, // Using SiRender for Render
 { name: "Git & GitHub", level: 90, category: "programming", icon: "devicon-git-plain devicon-github-original", color: "text-orange-600" },

  // AI & Automation
  { name: "Google Gemini API", level: 80, category: "ai", icon: "devicon-google-plain", color: "text-blue-400" },
  { name: "AI-driven document analysis", level: 75, category: "ai", icon: "react-icon", reactIcon: FaLightbulb, color: "text-yellow-300" }, // Lightbulb representing AI insights
  { name: "Prompt engineering", level: 85, category: "ai", icon: "react-icon", reactIcon: FaLightbulb, color: "text-yellow-300" }, // Lightbulb representing AI insights
  { name: "AI-powered Q&A systems", level: 80, category: "ai", icon: "react-icon", reactIcon: FaRobot, color: "text-gray-500" }, // Robot representing AI/Q&A

  // UI/UX & Design
  { name: "Figma", level: 85, category: "design", icon: "devicon-figma-plain", color: "text-purple-400" },
  { name: "Responsive Design", level: 90, category: "design", icon: "react-icon", reactIcon: FaMobileAlt, color: "text-blue-400" }, // Mobile icon for responsive design
  { name: "Wireframing & Prototyping", level: 85, category: "design", icon: "react-icon", reactIcon: FaPencilRuler, color: "text-amber-500" }, // Pencil ruler for wireframing
  { name: "Design Systems", level: 80, category: "design", icon: "react-icon", reactIcon: FaProjectDiagram, color: "text-emerald-500" }, // Project diagram for design systems
  { name: "Accessibility-aware UI", level: 85, category: "design", icon: "react-icon", reactIcon: FaUniversalAccess, color: "text-violet-500" }, // Universal access for accessibility
];

const categories = ["all", "programming", "ai", "design"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30 overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-unbounded">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize font-sora",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-16 xl:gap-20">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="relative group flex flex-col items-center"
              style={{ animationDelay: `${key * 0.1}s` }}
            >
              {/* Floating Sphere Container */}
              <div className={`
                w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full flex items-center justify-center
                ${skill.color.replace('text-', 'text-')} bg-current/10 backdrop-blur-sm
                shadow-[inset_0_0_20px_rgba(255,0.2),0_0_20px_-5px_currentColor]
                transition-all duration-500 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)] group-hover:scale-110
                animate-float-sphere
                border border-current/20
              `}
              style={{ animationDelay: `${key * 0.3}s` }}>
                {/* Inner glow effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent via-current/5 to-transparent"></div>
                
                {/* Icon inside sphere */}
                {skill.icon === "react-icon" && skill.reactIcon ? (
                  <skill.reactIcon className={`text-3xl md:text-4xl relative z-10 ${skill.color}`} />
                ) : skill.icon ? (
                  <i className={`${skill.icon} text-3xl md:text-4xl relative z-10 ${skill.color}`}></i>
                ) : (
                  <i className="devicon-react-original text-3xl md:text-4xl relative z-10 text-primary"></i> // fallback icon
                )}
              </div>

              {/* Skill name always visible */}
              <div className="mt-4 text-center font-sora">
                <p className="text-sm font-medium">{skill.name}</p>
                <p className="text-xs text-muted-foreground mt-1 font-mono">{skill.level}%</p>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
