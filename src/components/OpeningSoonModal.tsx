"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, CalendarDays } from "lucide-react";
import Image from "next/image";

const OpeningSoonModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Show the modal after a short delay so the user experiences the initial page load first
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
                    />

                    {/* Modal Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 10 }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        className="relative w-full max-w-lg overflow-hidden bg-background border border-primary/20 rounded-xl shadow-2xl z-10"
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-4 right-4 z-20 p-2 bg-background/50 hover:bg-background/80 backdrop-blur text-foreground rounded-full transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        {/* Content Cover Image */}
                        <div className="relative h-48 sm:h-56 w-full">
                            <Image
                                src="/images/hero-wedding.jpg"
                                alt="Kannur Gardens Opening Soon"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background to-background/20" />
                        </div>

                        {/* Modal Body */}
                        <div className="relative px-6 pb-8 pt-2 sm:px-8 text-center sm:text-left">
                            <div className="flex justify-center sm:justify-start -mt-12 mb-4">
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border border-primary/30 shadow-[0_0_20px_rgba(212,175,55,0.2)] backdrop-blur-md">
                                    <Sparkles className="w-8 h-8 text-primary" />
                                </div>
                            </div>

                            <h2 className="font-heading text-3xl sm:text-4xl text-foreground mb-3">
                                Opening Soon <span className="text-primary italic">!</span>
                            </h2>

                            <p className="font-body text-base text-muted-foreground mb-6 leading-relaxed">
                                We are thrilled to announce that Kannur Gardens, the most luxurious event venue in Kerala, will be opening its doors soon taking bookings now.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-3">
                                <a
                                    href="https://wa.me/919074771838?text=Hello!%20I%20am%20interested%20in%20booking%20Kannur%20Gardens%20for%20my%20event."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-body text-sm tracking-widest uppercase rounded-sm hover:bg-primary/90 transition-colors shadow-md hover:shadow-lg"
                                >
                                    <CalendarDays className="w-4 h-4" />
                                    Pre-Book Now
                                </a>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground font-body text-sm tracking-widest uppercase rounded-sm hover:bg-secondary/80 transition-colors"
                                >
                                    Explore Site
                                </button>
                            </div>
                        </div>

                        {/* Decorative line */}
                        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-60" />
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default OpeningSoonModal;
