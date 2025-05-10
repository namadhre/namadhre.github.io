import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center section-padding pt-32">
      <div className="max-w-4xl w-full">
        <p className="font-mono text-highlight mb-4 opacity-0 animate-fade-in animated-delay-1">
          Hi, my name is
        </p>
        <h1 className="text-5xl md:text-7xl font-bold text-slate-light mb-4 opacity-0 animate-fade-in animated-delay-2">
          Mahendra Chinthamgari.
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold text-slate mb-6 opacity-0 animate-fade-in animated-delay-3">
          I build purposeful software.
        </h2>
        <p className="text-lg text-slate max-w-xl mb-8 opacity-0 animate-fade-in animated-delay-4">
          With over two years of hands-on experience as a Software Development Engineer, I bring ideas to
          life through clean code, intuitive interfaces, and scalable architecture. My work blends engineering
          precision with a user-first mindset — crafting fast, accessible, and meaningful digital experiences that make
          a difference.
        </p>
        <h3 className="text-2xl md:text-4xl font-bold text-slate mb-6 opacity-0 animate-fade-in animated-delay-5">
          Let's build something impactful together.
        </h3>
        <div className="opacity-0 animate-fade-in" style={{ animationDelay: '500ms' }}>
          <Button 
            asChild
            className="text-highlight border border-highlight hover:bg-highlight/10 bg-transparent"
            size="lg"
          >
            <a 
              href="#projects" 
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('projects');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Check out my work
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
