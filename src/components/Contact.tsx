
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-md mx-auto text-center">
        <p className="font-mono text-highlight mb-2">04. What's Next?</p>
        <h2 className="text-4xl font-bold text-slate-light mb-4">Get In Touch</h2>
        <p className="text-slate mb-8">
          I'm currently looking for new opportunities and my inbox is always open. 
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        <Button 
          asChild
          className="border border-highlight text-highlight hover:bg-highlight/10 bg-transparent"
          size="lg"
        >
          <a href="mailto:your.email@example.com">Say Hello</a>
        </Button>
      </div>
    </section>
  );
};

export default Contact;
