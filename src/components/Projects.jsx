import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import voteridersImg from '../assets/voteriders.png';
import osmosisImg from '../assets/osmosis.png';
import imageProcessingImg from '../assets/image-processing-project.png';
import g2g from '../assets/g2g.png';

export function Projects() {
  const profileUrl = 'https://github.com/diyadesai1';
  const projects = [
    {
      title: 'VoteRiders Internal App',
      description: 'Full-stack volunteer platform with authentication, admin dashboard, and workflow automation for VoteRiders. Manages voter assistance requests, prioritizes tasks, and standardizes volunteer operations with secure data access and role-based controls.',
      image: voteridersImg,
      tags: ['React', 'Node.js', 'Express', 'Firebase', 'Vercel'],
      liveUrl: 'https://vote-riders-internal-volunteer-app.vercel.app/',
      githubUrl: 'https://github.com/diyadesai1/VoteRiders-Internal-Volunteer-App'
    },
    {
      title: 'Pygame: G2G 2 Boardwalk',
      description: 'This Python maze game uses Pygame’s 2D engine with AABB collision detection for dynamic walls, collectibles, and NPCs. Player and AI sprites navigate the grid with discrete-frame motion at 60 FPS, handling wraparound and obstacle avoidance. Sprite animation, layered blitting, and event-driven input manage real-time scoring and state transitions.',
      image: g2g,
      tags: ['Python', 'Pygame', 'AABB Collision Detection', 'Sprite Animation'],
      liveUrl: 'https://replit.com/@DiyaDesai1/Final-COSMOS-Project',
      githubUrl: 'https://github.com/diyadesai1/Final-COSMOS-Project'
    },
    {
      title: 'Python Image Processing: Over the Hill and Filters Away',
      description: 'Python image processing project leveraging the Pillow (PIL) library for low-level pixel manipulation. Implements sequential image transformations including luminosity-based grayscale conversion, region-specific randomized RGB filters, and chroma key compositing for green-screen overlay.',
      image: imageProcessingImg,
      tags: ['Python', 'Pillow (PIL)', 'Low-Level Pixel Manipulation', 'Replit'],
      liveUrl: 'https://replit.com/@DiyaDesai1/ImageProcessingFinalProject#main.py',
      githubUrl: 'https://github.com/diyadesai1/Image_Processing_Final_Project'
    },
    {
      title: 'Osmosis: Mobile Sustainaibility App',
      description: 'Climate education website promoting sustainable shopping. Features mobile-responsive design, interactive maps, climate quizzes, blog posts, photo galleries, slideshows, and dynamic sign-up forms.',
      image: osmosisImg,
      tags: ['HTML', 'CSS', 'Javascript', 'Flexbox', 'Replit'],
      liveUrl: 'https://replit.com/@DiyaDesai1/Kode-With-Klossy-Final-Project-OSMOSIS',
      githubUrl: 'https://github.com/diyadesai1/Kode-With-Klossy-Final-Project-OSMOSIS'
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Here are some of the projects I've worked on recently. Each one represents a unique challenge and showcases different aspects of my development skills.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-video overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {project.title}
                    <div className="flex gap-2">
                      <Button variant="outline" size="icon" asChild className="h-8 w-8" aria-label="GitHub repository">
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"><Github className="h-4 w-4" /></a>
                      </Button>
                      <Button variant="outline" size="icon" asChild className="h-8 w-8" aria-label="Live demo">
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <a href={profileUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                View More on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
