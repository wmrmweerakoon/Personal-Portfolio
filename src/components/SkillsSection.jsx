import { useState } from "react";
import { cn } from "@/lib/utils";
import { FaBolt, FaCloud, FaBrain, FaMobileAlt, FaPencilRuler, FaProjectDiagram, FaUniversalAccess, FaRobot, FaLightbulb, FaRocket, FaWrench, FaServer } from "react-icons/fa";
import { SiVite, SiRender } from "react-icons/si";

// Define our skills with react-icons
const skills = [
  // Programming & Development
 { name: "JavaScript (ES6+)", level: 90, category: "programming", icon: "devicon-javascript-plain" },
  { name: "TypeScript", level: 85, category: "programming", icon: "devicon-typescript-plain" },
  { name: "React", level: 90, category: "programming", icon: "devicon-react-original" },
 { name: "Vite", level: 80, category: "programming", icon: "react-icon", reactIcon: SiVite }, // Using SiVite for Vite
 { name: "TailwindCSS", level: 90, category: "programming", icon: "devicon-tailwindcss-plain" },
  { name: "Node.js", level: 80, category: "programming", icon: "devicon-nodejs-plain" },
  { name: "Express", level: 75, category: "programming", icon: "devicon-express-original" },
  { name: "REST APIs", level: 85, category: "programming", icon: "devicon-api-plain" },
  { name: "SQLite", level: 70, category: "programming", icon: "devicon-sqlite-plain" },
  { name: "MongoDB", level: 75, category: "programming", icon: "devicon-mongodb-plain" },
  { name: "Firebase Hosting", level: 75, category: "programming", icon: "devicon-firebase-plain" },
 { name: "Render", level: 70, category: "programming", icon: "react-icon", reactIcon: SiRender }, // Using SiRender for Render
 { name: "Git & GitHub", level: 90, category: "programming", icon: "devicon-git-plain devicon-github-original" },

  // AI & Automation
  { name: "Google Gemini API", level: 80, category: "ai", icon: "devicon-google-plain" },
  { name: "AI-driven document analysis", level: 75, category: "ai", icon: "react-icon", reactIcon: FaLightbulb }, // Lightbulb representing AI insights
  { name: "Prompt engineering", level: 85, category: "ai", icon: "react-icon", reactIcon: FaLightbulb }, // Lightbulb representing AI insights
  { name: "AI-powered Q&A systems", level: 80, category: "ai", icon: "react-icon", reactIcon: FaRobot }, // Robot representing AI/Q&A

  // UI/UX & Design
  { name: "Figma", level: 85, category: "design", icon: "devicon-figma-plain" },
  { name: "Responsive Design", level: 90, category: "design", icon: "react-icon", reactIcon: FaMobileAlt }, // Mobile icon for responsive design
  { name: "Wireframing & Prototyping", level: 85, category: "design", icon: "react-icon", reactIcon: FaPencilRuler }, // Pencil ruler for wireframing
  { name: "Design Systems", level: 80, category: "design", icon: "react-icon", reactIcon: FaProjectDiagram }, // Project diagram for design systems
  { name: "Accessibility-aware UI", level: 85, category: "design", icon: "react-icon", reactIcon: FaUniversalAccess }, // Universal access for accessibility
];

const categories = ["all", "programming", "ai", "design"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover flex flex-col"
            >
              <div className="flex items-center mb-4">
                {skill.icon === "react-icon" && skill.reactIcon ? (
                  <skill.reactIcon className="text-2xl mr-3 text-primary" />
                ) : skill.icon ? (
                  <i className={`${skill.icon} text-2xl mr-3 text-primary`}></i>
                ) : (
                  <i className="devicon-react-original text-2xl mr-3 text-primary"></i> // fallback icon
                )}
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
