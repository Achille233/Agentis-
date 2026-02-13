"use client";

import { motion } from "framer-motion";
import { Bot, Database, Workflow, Cloud, Code2, LineChart } from "lucide-react";

const services = [
    {
        icon: <Bot size={24} />,
        title: "AI Automation Systems",
        description: "Custom neural networks and automated decision-making engines tailored to your business logic."
    },
    {
        icon: <Code2 size={24} />,
        title: "Custom AI Tools",
        description: "Proprietary internal tools powered by LLMs to accelerate workforce productivity."
    },
    {
        icon: <Workflow size={24} />,
        title: "Workflow Orchestration",
        description: "End-to-end process automation connecting your entire software stack."
    },
    {
        icon: <Database size={24} />,
        title: "Data Pipelines",
        description: "Robust ETL processes and data warehousing for real-time intelligence."
    },
    {
        icon: <LineChart size={24} />,
        title: "Intelligent Assistants",
        description: "Customer-facing or internal chatbots with context-aware capabilities."
    },
    {
        icon: <Cloud size={24} />,
        title: "SaaS Architecture",
        description: "Scalable cloud infrastructure design for high-load AI applications."
    }
];

export function Services() {
    return (
        <section id="services" className="py-24 bg-[#0F0F16]">
            <div className="container px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-4"
                    >
                        Engineering <span className="text-primary">Intelligence</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-muted-foreground max-w-2xl mx-auto"
                    >
                        Our core competencies lie in building robust, scalable, and intelligent systems that drive autonomy.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card p-8 rounded-xl group relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10">
                                <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
