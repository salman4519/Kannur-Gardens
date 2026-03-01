"use client";

import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { MapPin, Phone, Mail, Send } from "lucide-react";

const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `*New Wedding Inquiry*%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Message:* ${formData.message}`;

    window.open(`https://wa.me/919074771838?text=${message}`, "_blank");

    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding bg-secondary/50">
      <div ref={ref} className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">Get In Touch</p>
          <h2 className="section-title mb-4">Plan Your Celebration</h2>
          <div className="gold-separator mb-6" />
          <p className="section-subtitle mx-auto">
            Let us help you create the wedding of your dreams. Reach out today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info & Map */}
          <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            <div className="space-y-8 mb-10">
              {[
                { icon: MapPin, label: "Address", value: "Kannur Garden Luxury Event Venue, Thekilepeedika, Thazhe Chovva, Kannur, Kerala 670007 (Near South Railway Station)" },
                { icon: Phone, label: "Phone", value: "+91 90747 71838", href: "tel:+919074771838" },
                { icon: Mail, label: "Email", value: "kannurgardens@gmail.com", href: "mailto:kannurgardens@gmail.com" },
              ].map((item) => (
                <div key={item.label} className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-1">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="font-body text-foreground hover:text-primary transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-body text-foreground">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="rounded-sm overflow-hidden border border-border h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3904.54804614942!2d75.40147017505826!3d11.866876588356062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDUyJzAwLjgiTiA3NcKwMjQnMTQuNiJF!5e0!3m2!1sen!2sin!4v1771763579712!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kannur Gardens Location"
              />
            </div>
          </div>

          {/* Form */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            <form onSubmit={handleSubmit} className="space-y-6">
              {[
                { name: "name" as const, label: "Your Name", type: "text", placeholder: "Full name" },
                { name: "email" as const, label: "Email Address", type: "email", placeholder: "your@email.com" },
                { name: "phone" as const, label: "Phone Number", type: "tel", placeholder: "+91 XXXXX XXXXX" },
              ].map((field) => (
                <div key={field.name}>
                  <label className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-2 block">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    value={formData[field.name]}
                    onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                    className="w-full px-4 py-3 bg-card border border-border rounded-sm font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary transition-colors"
                    required
                  />
                </div>
              ))}
              <div>
                <label className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-2 block">
                  Your Message
                </label>
                <textarea
                  placeholder="Tell us about your event — date, guest count, preferences..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 bg-card border border-border rounded-sm font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary transition-colors resize-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-primary text-primary-foreground font-body text-sm tracking-widest uppercase rounded-sm hover:bg-primary/90 transition-all duration-300 w-full justify-center"
              >
                <Send className="w-4 h-4" />
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
