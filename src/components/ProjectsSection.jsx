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
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-unbounded">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-montserrat">
            Here are some of my recent projects. Each project was carefully
            crafted with attention to detail, performance, and user experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: key * 0.1 }}
            >
              <Tilt
                glareEnable={true}
                glareMaxOpacity={0.3}
                glareColor="#ffffff"
                glarePosition="all"
                glareBorderRadius="12px"
                scale={1.05}
                transitionSpeed={1500}
                gyroscope={true}
              >
                <div
                  className="group bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-border flex flex-col h-full cursor-pointer transform hover:-translate-y-2"
                >
                  <div className="overflow-hidden rounded-t-xl border-b border-border flex items-center justify-center bg-muted p-2">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-contain max-h-[200px] max-w-[95%] transition-transform duration-500 group-hover:scale-105 rounded-lg"
                    />
                  </div>

                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold mb-3 text-foreground"> {project.title}</h3>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.slice(0, 4).map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20 whitespace-nowrap transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-105"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 4 && (
                        <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-secondary/20 text-secondary-foreground border border-secondary/30 whitespace-nowrap">
                          +{project.tags.length - 4} more
                        </span>
                      )}
                    </div>

                    <p className="text-muted-foreground mb-6 flex-grow leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex justify-between items-center pt-2">
                      <div className="flex space-x-4">
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors duration-300 p-2 rounded-full hover:bg-primary/10 hover:scale-110"
                        >
                          <ExternalLink size={20} />
                        </a>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors duration-300 p-2 rounded-full hover:bg-primary/10 hover:scale-110"
                        >
                          <Github size={20} />
                        </a>
                      </div>
                      
                      <div className="flex space-x-2">
                        {project.id !== 3 && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                          >
                            Live Demo
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-16"
        >
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2 px-8 py-3 text-base"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/wmrmweerakoon"
          >
            View More Projects <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
