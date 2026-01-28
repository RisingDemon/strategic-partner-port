import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <button onClick={() => scrollToSection("home")} className="text-left">
              <h3 className="text-xl font-bold">
               <span className="text-primary">Anand Shaligram</span>
              </h3>
            </button>
            <p className="text-background/70 text-sm leading-relaxed">
              Transforming employee potential into substantive performance and contributions to business success.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-background/50">
              Quick Links
            </h4>
            <nav className="flex flex-col space-y-2">
              <button 
                onClick={() => scrollToSection("home")} 
                className="text-sm text-background/70 hover:text-primary transition-colors text-left"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection("about")} 
                className="text-sm text-background/70 hover:text-primary transition-colors text-left"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection("services")} 
                className="text-sm text-background/70 hover:text-primary transition-colors text-left"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection("success-stories")} 
                className="text-sm text-background/70 hover:text-primary transition-colors text-left"
              >
                Success Stories
              </button>
              <button 
                onClick={() => scrollToSection("contact")} 
                className="text-sm text-background/70 hover:text-primary transition-colors text-left"
              >
                Contact
              </button>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-background/50">
              Contact
            </h4>
            <div className="space-y-3">
              <a
                href="tel:+919881093405"
                className="flex items-center space-x-3 text-sm text-background/70 hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>+91 98810 93405</span>
              </a>
              <a
                href="mailto:27.anand@gmail.com"
                className="flex items-center space-x-3 text-sm text-background/70 hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>27.anand@gmail.com</span>
              </a>
              <div className="flex items-center space-x-3 text-sm text-background/70">
                <MapPin className="h-4 w-4" />
                <span>Pune, Maharashtra</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-background/10">
          <p className="text-center text-sm text-background/50">
            © {new Date().getFullYear()} Anand Shaligram. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
