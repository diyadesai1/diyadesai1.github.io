import { Button } from './ui/button';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';

export function Hero() {
  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-secondary/20 px-6">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl  tracking-tight">
              Hi, I'm <span className="text-primary">Diya Desai</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 semi-font-bold">
            Full Stack Developer & Social Impact Strategist
            </h2>
          </div>

          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          I build web applications that bring ideas to life, driven by a passion for human-centered design and accessibility. My work fosters civic engagement and promotes equity through inclusive technology.          </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button onClick={scrollToProjects} size="lg" className="w-full sm:w-auto bg-black text-white hover:bg-black/80">
                View My Work
              </Button>
              <div className="flex items-center gap-4">
                <Button aschild="true" variant="outline" size="icon" aria-label="GitHub" className="text-black hover:text-black">
                  <a href="https://github.com/diyadesai1" target="_blank" rel="noopener noreferrer"><Github className="h-5 w-5 text-black" /></a>
                </Button>
                <Button aschild="true" variant="outline" size="icon" aria-label="LinkedIn" className="text-black hover:text-black">
                  <a href="https://www.linkedin.com/in/diya-desai" target="_blank" rel="noopener noreferrer"><Linkedin className="h-5 w-5 text-black" /></a>
                </Button>
                <Button aschild="true" variant="outline" size="icon" aria-label="Email" className="text-black hover:text-black">
                  <a href="mailto:diyadesai@ucla.edu"><Mail className="h-5 w-5 text-black" /></a>
                </Button>
              </div>
            </div>

          <div className="pt-12 animate-bounce" aria-hidden="true">
            <ArrowDown className="h-6 w-6 mx-auto text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  );
}
