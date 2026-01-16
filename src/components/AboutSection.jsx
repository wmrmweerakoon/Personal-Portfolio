import { GraduationCap, Code, Sparkles, Puzzle, Palette, Flower2 } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-unbounded">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold font-unbounded">
              Software Engineering Undergraduate
            </h3>

            <ul className="space-y-3 text-muted-foreground font-montserrat">
              <li className="flex items-start gap-2">
                <GraduationCap className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Software Engineering Undergraduate at SLIIT</span>
              </li>
              <li className="flex items-start gap-2">
                <Code className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Passionate about building real-world, scalable web applications</span>
              </li>
              <li className="flex items-start gap-2">
                <Sparkles className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Experienced in AI-powered applications using Google Gemini</span>
              </li>
              <li className="flex items-start gap-2">
                <Puzzle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Strong interest in problem-solving, system design, and clean architecture</span>
              </li>
              <li className="flex items-start gap-2">
                <Palette className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span>UI/UX-focused engineer who values usability, performance, and accessibility</span>
              </li>
              <li className="flex items-start gap-2">
                <Flower2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Currently learning advanced React patterns, backend optimization, and cloud deployment</span>
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <div className="gradient-border p-6 card-hover text-center">
              <div className="p-3 rounded-full bg-primary/10 mx-auto w-fit mb-3">
                <GraduationCap className="h-6 w-6 text-primary mx-auto" />
              </div>
              <h4 className="font-semibold text-lg">Education</h4>
              <p className="text-muted-foreground">Software Engineering Undergraduate at SLIIT</p>
            </div>
            <div className="gradient-border p-6 card-hover text-center">
              <div className="p-3 rounded-full bg-primary/10 mx-auto w-fit mb-3">
                <Code className="h-6 w-6 text-primary mx-auto" />
              </div>
              <h4 className="font-semibold text-lg">Web Development</h4>
              <p className="text-muted-foreground">Building scalable web applications</p>
            </div>
            <div className="gradient-border p-6 card-hover text-center">
              <div className="p-3 rounded-full bg-primary/10 mx-auto w-fit mb-3">
                <Sparkles className="h-6 w-6 text-primary mx-auto" />
              </div>
              <h4 className="font-semibold text-lg">AI Integration</h4>
              <p className="text-muted-foreground">Experienced with Google Gemini API</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
