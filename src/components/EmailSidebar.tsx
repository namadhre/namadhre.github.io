
const EmailSidebar = () => {
  return (
    <div className="hidden lg:flex fixed right-6 bottom-0 flex-col items-center">
      <div className="flex flex-col items-center space-y-6 after:content-[''] after:block after:w-px after:h-24 after:bg-slate">
        <a 
          href="mailto:mahendrachinthamgar@gmail.com" 
          className="font-mono text-xs tracking-widest text-slate hover:text-highlight transition-colors transform hover:-translate-y-1 vertical-lr"
        >
          mahendrachinthamgar@gmail.com
        </a>
      </div>
    </div>
  );
};

export default EmailSidebar;
