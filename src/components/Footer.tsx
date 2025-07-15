import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/20 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <div className="flex items-center gap-2 text-muted-foreground">
            <span>© 2025 TechSolutions Pro. Made with</span>
            <Heart className="w-4 h-4 text-accent fill-current" />
            <span>for innovation.</span>
          </div>

          {/* Credits */}
          <div className="text-muted-foreground text-sm">
            Crafted by AI Assistant | All rights reserved
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-4 pt-4 border-t border-border/10 text-center text-xs text-muted-foreground">
          Empowering businesses worldwide with cutting-edge technology solutions
        </div>
      </div>
    </footer>
  );
};

export default Footer;