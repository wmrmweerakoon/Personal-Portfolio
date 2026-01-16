import { ArrowRight, ExternalLink, Github } from "lucide-react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

const projects = [
 {
    id: 1,
    title: "LeafLink – Plant Marketplace",
    description: "Full-stack MERN e-commerce platform for buying and selling plants. Features secure JWT authentication, Stripe payments, seller & admin dashboards, Cloudinary image storage, and an AI-powered plant care assistant using the Gemini API.",
    image: "/projects/Plant MarketPlace.png",
    tags: ["React", "Vite", "TailwindCSS", "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "Stripe", "Cloudinary", "Gemini API", "React Toastify"],
    demoUrl: "#",
    githubUrl: "https://github.com/wmrmweerakoon/Plant-Marketplace.git",
  },
  {
    id: 4,
    title: "Personal Portfolio Website",
    description: "Modern, interactive portfolio website featuring animated elements, dark/light mode toggle, and responsive design. Showcases projects with detailed tech stacks and includes an interactive hero section with tilt effect on the profile image.",
    image: "/projects/Portfolio.png",
    tags: ["React", "Vite", "Tailwind CSS", "JavaScript", "HTML5", "CSS3", "Framer Motion", "React Parallax Tilt", "Responsive Design"],
    demoUrl: "#",
    githubUrl: "https://github.com/wmrmweerakoon/Personal-Portfolio",
  },
  {
    id: 5,
    title: "YouCalm Mobile UI Prototype",
    description: "Mobile app UI/UX prototype designed in Figma to promote mindfulness and stress relief.",
    image: "/projects/Youcalm.png",
    tags: ["Figma", "UI/UX", "Prototyping", "Mindfulness", "Mobile Design"],
    demoUrl: "#",
    githubUrl: "https://github.com/wmrmweerakoon/YouCalm-Mobile-UI-Prototype",
 },
  {
    id: 2,
    title: "AI PDF Content Finder",
    description: "Full-stack AI web application that extracts PDF content and answers user questions using Google Gemini. Includes database storage, deployment, and a responsive UI.",
    image: "/projects/AI_PDF.png",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Node.js", "Express.js", "PDF.js", "Gemini API"],
    demoUrl: "#",
    githubUrl: "https://github.com/wmrmweerakoon/AskMyPDF.git",
  },
  {
    id: 3,
    title: "AI Student Assistant",
    description: "Educational AI chatbot with a conversational interface and intelligent response handling.",
    image: "/projects/AIStudent.png",
    tags: ["React", "Vite", "TypeScript", "Google Gemini API", "AI", "Chatbot"],
    demoUrl: "#",
    githubUrl: "https://github.com/wmrmweerakoon/ai-student-assistant",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center font-unbounded">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto font-montserrat">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <Tilt
              key={key}
              glareEnable={true}
              glareMaxOpacity={0.3}
              glareColor="#ffffff"
              glarePosition="all"
              glareBorderRadius="8px"
              scale={1.05}
              transitionSpeed={1500}
              gyroscope={true}
            >
              <div
                className="group bg-card rounded-lg overflow-hidden shadow-xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 backdrop-blur-sm border border-white/20 dark:border-gray-700/50 rounded-xl flex flex-col h-full"
              >
                <div className="h-52 overflow-hidden rounded-t-lg border-b border-gray-200 dark:border-gray-700/50 flex items-center justify-center bg-gray-100 dark:bg-gray-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-contain max-h-[95%] max-w-[95%] transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-5 flex-grow flex flex-col min-h-[180px]">
                  <h3 className="text-lg font-semibold mb-3 leading-tight"> {project.title}</h3>
                  
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary/50 text-secondary-foreground backdrop-blur-sm whitespace-nowrap"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="text-muted-foreground text-sm mb-3 flex-grow leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex justify-between items-center mt-auto pt-1">
                    <div className="flex space-x-3">
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <ExternalLink size={18} />
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <Github size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Tilt>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/wmrmweerakoon"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
