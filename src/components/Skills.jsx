import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

export function Skills() {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: ['React', 'Node.js', 'TypeScript','JavaScript', 'HTML/CSS']
    },
    {
      title: 'Backend Development',
      skills: ['Node.js', 'Python', 'Express', 'REST APIs']
    },
    {
      title: 'Database & Cloud',
      skills: ['MongoDB', 'Firebase', 'AWS', 'Vercel', 'Docker']
    },
    {
      title: 'Languages & Tools',
      skills: ['C++/C','Python', 'Java', 'SQL', 'Git/GitHub']
    }
  ];

  const technologies = [
    'React', 'Node.js', 'TypeScript', 'JavaScript', 'HTML/CSS',
    'Node.js', 'Python', 'Express', 'REST APIs',
    'MongoDB', 'Firebase', 'AWS', 'Vercel', 'Docker',
    'C++/C', 'Python', 'Java', 'SQL', 'Git/GitHub'
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Skills & Technologies</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and the technologies I work with to build amazing digital experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {skillCategories.map((category, index) => (
              <div key={index} className="space-y-4">
                <h3 className="border-b border-border pb-2">{category.title}</h3>
                <div className="space-y-2">
                  {category.skills.map(skill => (
                    <div key={skill} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Technologies I Work With</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {technologies.map(tech => (
                  <Badge key={tech} variant="outline" className="transition-colors cursor-default hover:bg-black hover:text-white">{tech}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
