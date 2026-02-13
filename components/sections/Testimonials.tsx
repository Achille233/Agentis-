"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
    {
        quote: "Agentis transformed our legacy data infrastructure into a predictive engine. The efficiency gains were immediate and measurable.",
        author: "Elena V.",
        role: "CTO, FinCorp Global",
        company: "FinCorp"
    },
    {
        quote: "The level of engineering precision Agentis brings is unmatched. They don't just build automations; they build reliable systems.",
        author: "Marcus J.",
        role: "Director of Operations",
        company: "LogiTech Solutions"
    },
    {
        quote: "We scaled our customer support with their AI agents, reducing response times by 80% while maintaining high satisfaction scores.",
        author: "Sarah K.",
        role: "VP of Product",
        company: "SaaSify"
    }
];

export function Testimonials() {
    return (
        <section id="testimonials" className="py-24 bg-background relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl opacity-20 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-[100px]" />
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/20 rounded-full blur-[100px]" />
            </div>

            <div className="container px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Trusted by Innovators</h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass p-8 rounded-2xl border border-white/5 relative group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                            <div className="relative z-10">
                                <div className="flex gap-1 mb-6 text-primary">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={16} fill="currentColor" />
                                    ))}
                                </div>

                                <p className="text-lg mb-8 leading-relaxed text-muted-foreground">
                                    "{testimonial.quote}"
                                </p>

                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary" />
                                    <div>
                                        <h4 className="font-bold text-sm">{testimonial.author}</h4>
                                        <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
