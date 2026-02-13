"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const features = [
    "Intelligent Workflows",
    "Scalable AI Infrastructures",
    "Precision Engineering",
    "Business Impact Analysis",
];

export function About() {
    return (
        <section id="about" className="py-24 relative overflow-hidden">
            <div className="container px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            Beyond customization. <br />
                            <span className="text-gradient">True Engineering.</span>
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                            Agentis is an automation and artificial intelligence agency specialized in building intelligent workflows,
                            AI systems, and scalable infrastructures. We don't just use tools; we engineer solutions.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <CheckCircle2 className="text-primary w-5 h-5" />
                                    <span className="text-sm font-medium">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Glass Panel Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 blur-[80px] rounded-full pointer-events-none" />

                        <div className="glass p-8 rounded-2xl relative z-10 border-t border-white/10">
                            <div className="flex items-center gap-4 mb-8 border-b border-white/5 pb-4">
                                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold">
                                    AI
                                </div>
                                <div>
                                    <h3 className="font-bold">System Architecture</h3>
                                    <p className="text-xs text-muted-foreground">Status: Optimal</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "85%" }}
                                        transition={{ duration: 1.5, delay: 0.5 }}
                                        className="h-full bg-primary"
                                    />
                                </div>
                                <div className="flex justify-between text-xs text-muted-foreground">
                                    <span>Processing Efficiency</span>
                                    <span>98.5%</span>
                                </div>

                                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "92%" }}
                                        transition={{ duration: 1.5, delay: 0.7 }}
                                        className="h-full bg-secondary"
                                    />
                                </div>
                                <div className="flex justify-between text-xs text-muted-foreground">
                                    <span>Automation Integrity</span>
                                    <span>99.9%</span>
                                </div>
                            </div>

                            <div className="mt-8 grid grid-cols-3 gap-2">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="h-16 bg-white/5 rounded-md animate-pulse" style={{ animationDelay: `${i * 0.2}s` }}></div>
                                ))}
                            </div>
                        </div>

                        {/* Decoding Effect Decoration */}
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 border border-white/5 rounded-full flex items-center justify-center animate-[spin_10s_linear_infinite]">
                            <div className="w-2 h-2 bg-primary rounded-full absolute top-0" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
