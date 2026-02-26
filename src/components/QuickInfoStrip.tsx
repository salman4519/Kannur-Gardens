"use client";

import { Users, Car, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const infoItems = [
    { icon: Users, label: "Up to 1000 Guests", sub: "Multiple venue options" },
    { icon: Car, label: "200+ Car Parking", sub: "Spacious & secure" },
    { icon: MapPin, label: "Kannur, Kerala", sub: "Near South Railway Stn" },
];

const QuickInfoStrip = () => {
    return (
        <section id="quick-info" className="relative bg-foreground text-background overflow-hidden">
            {/* Subtle gold accent line top */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-60" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-6 md:py-8">
                <div className="flex items-center justify-center gap-8 md:gap-14">
                    {infoItems.map((item, i) => (
                        <motion.div
                            key={item.label}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="flex items-center gap-3"
                        >
                            <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
                                <item.icon className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                                <p className="font-heading text-sm font-medium text-background leading-tight">
                                    {item.label}
                                </p>
                                <p className="font-body text-xs text-background/50">{item.sub}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default QuickInfoStrip;
