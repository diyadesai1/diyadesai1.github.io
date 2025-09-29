import { Separator } from './ui/separator';
import { Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-secondary/20 py-8">
      <div className="container mx-auto px-4">
        <Separator className="mb-8" />
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <span>© {currentYear} Diya Desai. Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>and lots of mocha lattes.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
