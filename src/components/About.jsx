import { Card, CardContent } from './ui/card';
import { Code, Palette, Lightbulb } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import headshot from '../assets/headshot.jpg';

export function About() {
  const highlights = [
    {
      icon: <Code className="h-6 w-6" />,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code that follows best practices and industry standards.'
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: 'Design-Focused',
      description: 'Creating intuitive user interfaces with attention to detail and user experience.'
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: 'Problem Solver',
      description: 'Approaching challenges with creativity and finding innovative solutions to complex problems.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <ImageWithFallback
                  src={headshot}
                  alt="Diya Desai - Professional Headshot"
                  className="w-[20vw] h-[20vw] max-w-32 max-h-32 min-w-12 min-h-12 rounded-full overflow-hidden shadow-md"
                />
                <div className="pointer-events-none absolute inset-0 rounded-full ring-2 ring-gray-500/70 scale-110" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl mb-4">About Me</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I’m currently pursuing a B.S. in Computer Science at UCLA and thrive on turning complex problems into simple, elegant designs. I’m all about increasing inclusivity in the tech field and am always eager to learn new sofware. When I’m not coding, you’ll find me attempting (keyword!) to go on runs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {highlights.map((h, i) => (
              <Card key={i} className="text-center">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4 text-primary">
                    {h.icon}
                  </div>
                  <h3 className="mb-2 font-medium">{h.title}</h3>
                  <p className="text-muted-foreground text-sm">{h.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">My Journey</h3>
              <p className="text-muted-foreground">
              Originally from the Bay Area, I grew up surrounded by technology. Appreciating the ubiquity of coding, I quickly fell in love with building digital experiences and seeing the real-life impact of my work.              </p>
              <p className="text-muted-foreground">
              I believe in continuous learning and staying up-to-date with the latest trends in web development. Every project is an opportunity to explore new technologies and push the boundaries of what’s possible.              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">What I Do</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Full-stack web application development</li>
                <li>• Responsive and mobile-first design</li>
                <li>• API design and integration</li>
                <li>• Database design and optimization</li>
                <li>• Performance optimization</li>
                <li>• Code review and mentoring</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
