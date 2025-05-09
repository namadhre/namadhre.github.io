
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SocialSidebar from "@/components/SocialSidebar";
import EmailSidebar from "@/components/EmailSidebar";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "Namadhre | Software Development Engineer";
    
    // Scroll restoration on page load
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-navy-dark text-slate font-sans">
      <NavBar />
      <main className="pt-16">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <SocialSidebar />
      <EmailSidebar />
      <Footer />
    </div>
  );
};

export default Index;
