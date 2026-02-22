import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
    {
        question: "Which is the best wedding venue in Kannur?",
        answer: "Kannur Gardens is a top-rated wedding venue with an elegant AC hall, a beautiful garden lawn, and a grand customisable event space, making it the premier choice for luxury celebrations.",
    },
    {
        question: "Do you have parking facilities?",
        answer: "Yes, we provide spacious and secure parking for up to 200 cars, ensuring a hassle-free experience for large-scale weddings and events.",
    },
    {
        question: "What types of events can be hosted here?",
        answer: "We host a wide range of events including grand weddings, engagement ceremonies, receptions, corporate meetings, birthday celebrations, and cultural events.",
    },
    {
        question: "Do you offer in-house catering and decor?",
        answer: "Yes, we offer premium in-house decor and multi-cuisine catering services. Our expert teams work closely with you to bring your vision to life.",
    },
];

const FAQSection = () => {
    const { ref, isVisible } = useScrollAnimation();
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="section-padding bg-secondary/50">
            <div ref={ref} className="max-w-3xl mx-auto">
                <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                    <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">FAQ</p>
                    <h2 className="section-title mb-4">Common Questions</h2>
                    <div className="gold-separator mb-6" />
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div
                            key={i}
                            className={`border border-border rounded-sm bg-card transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                                }`}
                            style={{ transitionDelay: isVisible ? `${i * 100}ms` : "0ms" }}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full flex items-center justify-between p-6 text-left"
                            >
                                <span className="font-heading text-lg font-medium text-foreground">{faq.question}</span>
                                {openIndex === i ? (
                                    <Minus className="w-5 h-5 text-primary shrink-0" />
                                ) : (
                                    <Plus className="w-5 h-5 text-primary shrink-0" />
                                )}
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === i ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
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
