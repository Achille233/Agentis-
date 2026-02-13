"use client";

import { motion } from "framer-motion";

const steps = [
    {
        number: "01",
        title: "Audit & Strategy",
        description: "We analyze your current infrastructure, identifying bottlenecks and automation opportunities."
    },
    {
        number: "02",
        title: "Architecture Design",
        description: "Our engineers design a scalable, secure AI blueprint tailored to your operational needs."
    },
    {
        number: "03",
        title: "Development",
        description: "We build custom models and workflows using state-of-the-art frameworks and proprietary tools."
    },
    {
        number: "04",
        title: "Deployment",
        description: "Seamless integration into your existing stack with minimal downtime and maximum security."
    },
    {
        number: "05",
        title: "Optimization",
        description: "Continuous monitoring and fine-tuning to ensure your systems evolve with your business."
    }
];

export function Process() {
    return (
        <section id="process" className="py-24 bg-background relative">
            <div className="container px-6">
                <div className="mb-16">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold mb-4"
                    >
                        The Protocol
                    </motion.h2>
                    <div className="h-1 w-20 bg-primary rounded-full" />
                </div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-primary/50 to-transparent" />

                    <div className="space-y-12">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`flex flex-col md:flex-row items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} gap-8 relative`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-0 md:left-1/2 -translate-x-[5px] md:-translate-x-1/2 w-10 h-10 flex items-center justify-center bg-background border border-primary/30 rounded-full z-10 shadow-[0_0_15px_rgba(0,188,250,0.3)]">
                                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                                </div>

                                {/* Content */}
                                <div className={`w-full md:w-[calc(50%-40px)] pl-12 md:pl-0 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                                    <div className="glass-card p-6 rounded-xl border-l-2 border-l-primary/50">
                                        <span className="text-4xl font-bold text-white/5 absolute top-4 right-4">{step.number}</span>
                                        <h3 className="text-xl font-bold mb-2 text-primary">{step.title}</h3>
                                        <p className="text-muted-foreground text-sm">{step.description}</p>
                                    </div>
                                </div>

                                {/* Spacer for the other side */}
                                <div className="hidden md:block w-[calc(50%-40px)]" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
