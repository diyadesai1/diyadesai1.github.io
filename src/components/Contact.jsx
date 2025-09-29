import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Mail, MapPin, Phone, Github, Linkedin } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent('Portfolio Contact Form Submission');
    const body = encodeURIComponent([
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      'Message:',
      formData.message,
    ].join('\n'));
    window.location.href = `mailto:diyadesai@ucla.edu?subject=${subject}&body=${body}`;
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    { icon: <Mail className="h-5 w-5" />, label: 'Email', value: 'diyadesai@ucla.edu', href: 'mailto:diyadesai@ucla.edu' },
    { icon: <Phone className="h-5 w-5" />, label: 'Phone', value: 'This field intentionally left mysterious.' },
    { icon: <MapPin className="h-5 w-5" />, label: 'Location', value: 'Los Angeles, CA'},
  ];

  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, label: 'GitHub', href: 'https://github.com/diyadesai1' },
    { icon: <Linkedin className="h-5 w-5" />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/diya-desai' },
    { icon: <Mail className="h-5 w-5" />, label: 'Email', href: 'mailto:diyadesai@ucla.edu' },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Get In Touch</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm always interested in new opportunities and collaborations. Feel free to reach out if you'd like to work together or just say hello!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card>
              <CardHeader>
                <CardTitle>Send Me a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" name="name" value={formData.name} onChange={handleInputChange} placeholder="Your name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="your.email@example.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" name="message" value={formData.message} onChange={handleInputChange} placeholder="Tell me about your project or just say hello!" className="min-h-[120px]" required />
                  </div>
                  <Button type="submit" className="w-full bg-black text-white hover:bg-black/80">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {contactInfo.map((info, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <div className="text-primary">{info.icon}</div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        <a href={info.href} className="hover:text-primary transition-colors">{info.value}</a>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Follow Me</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, i) => (
                      <Button key={i} variant="outline" size="icon" asChild aria-label={social.label}>
                        <a href={social.href} target="_blank" rel="noopener noreferrer">{social.icon}</a>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-2">Let's Collaborate</h3>
                  <p className="text-muted-foreground text-sm">
                    I'm currently available for freelance projects and full-time internships. Whether you have a project in mind or just want to connect, I'd love to hear from you.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
