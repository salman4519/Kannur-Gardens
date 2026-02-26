"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
    {
        question: "What is the best wedding venue in Kannur?",
        answer:
            "Kannur Gardens is widely regarded as one of the best wedding venues in Kannur. We offer a luxury AC banquet hall, a beautiful outdoor garden lawn, and a grand customisable event space — all within a single premium venue that can host 250 to 1000+ guests.",
    },
    {
        question: "How do I book Kannur Gardens for my wedding?",
        answer:
            "Booking is simple! You can call us at +91 90747 71838 or send a WhatsApp message. We recommend scheduling a venue visit to explore our spaces. Our event planning team will help customise every detail — from decor to catering — for a seamless experience.",
    },
    {
        question: "What is the guest capacity at Kannur Gardens?",
        answer:
            "We offer flexible capacity options: The Orchid Hall (AC banquet) seats up to 250 guests, the Jasmine Lawn (outdoor garden) seats 600–800 guests, and the Lotus Pavilion (grand event area) can accommodate up to 1000+ guests. We can tailor the setup to your specific requirements.",
    },
    {
        question: "Is there parking available at the venue?",
        answer:
            "Yes, Kannur Gardens provides spacious and secure parking facilities that can accommodate over 200 cars. This is one of the largest parking areas among wedding venues in Kannur, ensuring a hassle-free experience for your guests.",
    },
    {
        question: "Do you have indoor and outdoor wedding options?",
        answer:
            "Absolutely! We offer both indoor and outdoor venues. The Orchid Hall is a fully air-conditioned indoor banquet hall, while the Jasmine Lawn is a scenic outdoor garden space perfect for day and night weddings. You can even combine both for different ceremony segments.",
    },
    {
        question: "What is the approximate pricing for a wedding at Kannur Gardens?",
        answer:
            "Our pricing varies based on the space, number of guests, catering preferences, and decor requirements. We offer customisable packages to fit different budgets. Please contact us at +91 90747 71838 for a personalised quote tailored to your event needs.",
    },
    {
        question: "Do you offer in-house catering and decoration services?",
        answer:
            "Yes, Kannur Gardens provides premium in-house catering with multi-cuisine menu options crafted by experienced chefs. We also offer professional in-house decoration services with customisable themes. Our dedicated event planning team ensures every detail of your celebration is perfect.",
    },
];

const FAQSection = () => {
    const { ref, isVisible } = useScrollAnimation();
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="section-padding bg-secondary/50">
            <div ref={ref} className="max-w-3xl mx-auto">
                <div
                    className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                >
                    <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">
                        FAQ
                    </p>
                    <h2 className="section-title mb-4">
                        Frequently Asked Questions
                    </h2>
                    <div className="gold-separator mb-6" />
                    <p className="section-subtitle mx-auto">
                        Everything you need to know about hosting your event at Kannur Gardens.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div
                            key={i}
                            className={`border border-border rounded-sm bg-card transition-all duration-1000 ${isVisible
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-8"
                                }`}
                            style={{
                                transitionDelay: isVisible ? `${i * 100}ms` : "0ms",
                            }}
                        >
                            <button
                                onClick={() =>
                                    setOpenIndex(openIndex === i ? null : i)
                                }
                                className="w-full flex items-center justify-between p-6 text-left"
                                aria-expanded={openIndex === i}
                                id={`faq-btn-${i}`}
                            >
                                <span className="font-heading text-lg font-medium text-foreground pr-4">
                                    {faq.question}
                                </span>
                                {openIndex === i ? (
                                    <Minus className="w-5 h-5 text-primary shrink-0" />
                                ) : (
                                    <Plus className="w-5 h-5 text-primary shrink-0" />
                                )}
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === i
                                    ? "max-h-60 opacity-100"
                                    : "max-h-0 opacity-0"
                                    }`}
                            >
                                <p className="px-6 pb-6 font-body text-sm text-muted-foreground leading-relaxed">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
