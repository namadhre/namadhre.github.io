
import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-center">
          <div className="flex space-x-6 mb-6">
            <a 
              href="https://github.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate hover:text-highlight transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate hover:text-highlight transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://twitter.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate hover:text-highlight transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
          </div>
          <div className="font-mono text-xs text-slate">
            <p>Designed & Built with ❤️</p>
            <p className="mt-2">&copy; {new Date().getFullYear()} Your Name</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
