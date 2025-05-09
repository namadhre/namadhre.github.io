
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const SocialSidebar = () => {
  return (
    <div className="hidden lg:flex fixed left-6 bottom-0 flex-col items-center">
      <ul className="flex flex-col items-center space-y-6 after:content-[''] after:block after:w-px after:h-24 after:bg-slate">
        <li>
          <a 
            href="https://github.com/namadhre" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate hover:text-highlight transition-colors transform hover:-translate-y-1"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
        </li>
        <li>
          <a 
            href="https://linkedin.com/in/namadhre" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate hover:text-highlight transition-colors transform hover:-translate-y-1"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
        </li>
        <li>
          <a 
            href="https://twitter.com/namadhre" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate hover:text-highlight transition-colors transform hover:-translate-y-1"
            aria-label="Twitter"
          >
            <Twitter size={20} />
          </a>
        </li>
        <li>
          <a 
            href="mailto:mahendrachinthamgar@gmail.com" 
            className="text-slate hover:text-highlight transition-colors transform hover:-translate-y-1"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialSidebar;
