import { Heart } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Kannur Gardens" className="h-10 w-10 rounded-full object-cover" />
              <span className="font-heading text-xl text-background">Kannur Gardens</span>
            </div>
            <p className="font-body text-sm text-background/60 leading-relaxed">
              Luxury Event Venue in Kannur, Kerala. Creating timeless celebrations since 2015.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-background/40 mb-4">Quick Links</p>
            <div className="space-y-3">
              {["About", "Spaces", "Amenities", "Gallery", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block font-body text-sm text-background/70 hover:text-primary transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-background/40 mb-4">Contact</p>
            <div className="space-y-3 font-body text-sm text-background/70">
              <p>NH 66, Kannur, Kerala 670001</p>
              <a href="tel:+919876543210" className="block hover:text-primary transition-colors">+91 98765 43210</a>
              <a href="mailto:info@kannurgardens.com" className="block hover:text-primary transition-colors">info@kannurgardens.com</a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-background/40">
            © 2026 Kannur Gardens. All rights reserved.
          </p>
          <p className="font-body text-xs text-background/40 flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-primary fill-primary" /> in Kerala
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
