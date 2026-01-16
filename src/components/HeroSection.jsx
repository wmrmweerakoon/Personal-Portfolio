import { ArrowDown } from "lucide-react";
import Tilt from 'react-parallax-tilt';

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="flex flex-col items-center space-y-6">
          {/* Profile Image with Tilt Effect */}
          <Tilt
            glareEnable={true}
            glareMaxOpacity={0.3}
            glareColor="#ffffff"
            glarePosition="all"
            glareBorderRadius="50%"
            scale={1.05}
            transitionSpeed={1000}
            perspective={1000}
            gyroscope={true}
          >
            <img
              src="/src/assets/my dp.png"
              alt="Ruvishan Maleesha"
              className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-primary shadow-xl mb-6"
            />
          </Tilt>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight font-unbounded">
            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Ruvishan
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Maleesha
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3 font-montserrat">
            I am a Software Engineering undergraduate actively seeking an internship where I can apply my skills in full-stack web development, AI-integrated systems, and user-centered design, while learning from real-world engineering practices and contributing meaningfully to a professional development team.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button font-montserrat">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
