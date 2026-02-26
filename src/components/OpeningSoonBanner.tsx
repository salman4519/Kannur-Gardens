"use client";

import { CalendarDays, Phone, Sparkles } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { motion } from "framer-motion";

const OpeningSoonBanner = () => {
    return (
        <section className="relative py-20 md:py-28 bg-foreground text-background overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-60" />
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-60" />

            {/* Subtle pattern overlay */}
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

            <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 px-5 py-2 bg-primary/15 border border-primary/25 rounded-full mb-8">
                        <Sparkles className="w-4 h-4 text-primary" />
                        <span className="font-body text-xs tracking-[0.3em] uppercase text-primary">
                            Coming Soon
                        </span>
                    </div>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="font-heading text-3xl md:text-5xl lg:text-6xl font-medium text-background leading-tight mb-6"
                >
                    Grand Opening <span className="text-primary italic">Soon</span>
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    whileInView={{ opacity: 1, scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-20 h-[2px] bg-primary mx-auto mb-8"
                />

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="font-body text-base md:text-lg text-background/70 max-w-2xl mx-auto leading-relaxed mb-10"
                >
                    Kannur Gardens is getting ready to host its first grand celebrations.
                    Be among the first to book your event at Kannur&apos;s most prestigious new venue.
                    Early bookings are now open — reserve your date today!
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <a
                        href="tel:+919074771838"
                        className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground font-body text-sm tracking-widest uppercase rounded-sm hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto justify-center"
                    >
                        <Phone className="w-4 h-4" />
                        Book Early
                    </a>
                    <a
                        href="https://wa.me/919074771838?text=Hello!%20I%20want%20to%20make%20an%20early%20booking%20at%20Kannur%20Gardens."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#25D366] text-white font-body text-sm tracking-widest uppercase rounded-sm hover:bg-[#20bd5a] transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto justify-center"
                    >
                        <WhatsAppIcon className="w-4 h-4 fill-current" />
                        WhatsApp Us
                    </a>
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 px-8 py-3.5 border border-background/30 text-background font-body text-sm tracking-widest uppercase rounded-sm hover:bg-background/10 transition-all duration-300 w-full sm:w-auto justify-center"
                    >
                        <CalendarDays className="w-4 h-4" />
                        Schedule Visit
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default OpeningSoonBanner;
