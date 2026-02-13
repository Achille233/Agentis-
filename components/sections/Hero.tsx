"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ChevronRight, Globe, Zap, Cpu } from "lucide-react";

export function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    // Particle animation logic could go here or in a separate component
    // For now, we use CSS animations defined in globals.css + Framer Motion

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-background selection:bg-primary/30"
        >
            {/* Background Grid & Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f2e_1px,transparent_1px),linear-gradient(to_bottom,#1f1f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
                <div className="absolute top-0 left-0 right-0 h-[500px] bg-primary/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />
            </div>

            {/* Floating Particles (Decorations) */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute bg-primary/30 rounded-full blur-sm"
                        initial={{
                            x: Math.random() * 100 + "%",
                            y: Math.random() * 100 + "%",
                            scale: Math.random() * 0.5 + 0.5,
                            opacity: Math.random() * 0.5 + 0.1,
                        }}
                        animate={{
                            y: [null, Math.random() * -100],
                        }}
                        transition={{
                            duration: Math.random() * 10 + 10,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        style={{
                            width: Math.random() * 4 + 1 + "px",
                            height: Math.random() * 4 + 1 + "px",
                        }}
                    />
                ))}
            </div>

            {/* Content */}
            <div className="container relative z-10 px-6 pt-20 flex flex-col items-center text-center">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-primary mb-8 backdrop-blur-sm"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                    System Online v2.4
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.1]"
                >
                    Engineering <br />
                    <span className="text-gradient-primary">Intelligent Automation</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 leading-relaxed"
                >
                    Agentis AI designs and deploys advanced AI systems and automation infrastructures for modern companies.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row items-center gap-4"
                >
                    <Button size="lg" className="w-full sm:w-auto group">
                        Book a Strategy Call
                        <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Button variant="outline" size="lg" className="w-full sm:w-auto">
                        View Our Work
                    </Button>
                </motion.div>

                {/* Floating Stats - Parallax */}
                <motion.div style={{ y: y1 }} className="absolute md:block hidden top-[20%] left-[5%] glass-card p-4 rounded-xl border-l-4 border-l-primary max-w-[200px] text-left">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-primary/10 rounded-lg text-primary"><Zap size={18} /></div>
                        <span className="text-3xl font-bold">2+</span>
                    </div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Years Experience</p>
                </motion.div>

                <motion.div style={{ y: y2 }} className="absolute md:block hidden bottom-[20%] right-[5%] glass-card p-4 rounded-xl border-l-4 border-l-secondary max-w-[200px] text-left">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-secondary/10 rounded-lg text-secondary"><Cpu size={18} /></div>
                        <span className="text-3xl font-bold">10+</span>
                    </div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Projects Delivered</p>
                </motion.div>

                {/* International Clients Tag */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 }}
                    className="absolute md:block hidden top-[30%] right-[10%] glass-card px-4 py-2 rounded-full flex items-center gap-2"
                >
                    <Globe size={14} className="text-primary" />
                    <span className="text-xs font-medium">International Clients</span>
                </motion.div>

            </div>

            {/* Scroll Indicator */}
            <motion.div
                style={{ opacity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Scroll to explore</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent"></div>
            </motion.div>
        </section>
    );
}
