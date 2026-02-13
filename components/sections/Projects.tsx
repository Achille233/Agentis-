"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
    {
        title: "FinTech Automated Compliance",
        category: "Finance",
        stats: { efficiency: "+400%", time: "-20h/week" },
        image: "linear-gradient(to bottom right, #0F2027, #203A43, #2C5364)" // Placeholder
    },
    {
        title: "Healthcare Diagnostic AI",
        category: "Healthcare",
        stats: { accuracy: "99.8%", speed: "Real-time" },
        image: "linear-gradient(to bottom right, #373B44, #4286f4)" // Placeholder
    },
    {
        title: "Logistics Route Optimization",
        category: "Supply Chain",
        stats: { cost: "-25%", delivery: "2x Faster" },
        image: "linear-gradient(to bottom right, #232526, #414345)" // Placeholder
    },
    {
        title: "Customer Support Neural Net",
        category: "SaaS",
        stats: { resolution: "Automation 85%", csat: "4.8/5" },
        image: "linear-gradient(to bottom right, #141E30, #243B55)" // Placeholder
    }
];

export function Projects() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

    return (
        <section id="projects" className="py-24 overflow-hidden bg-[#0A0A0F]" ref={containerRef}>
            <div className="container px-6 mb-16 flex justify-between items-end">
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Case Studies</h2>
                    <p className="text-muted-foreground">Engineering outcomes, not just outputs.</p>
                </div>
                <div className="hidden md:flex gap-2">
                    <button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors">←</button>
                    <button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors">→</button>
                </div>
            </div>

            <div className="w-full">
                {/* Simple horizontal scroll for mobile, transform for desktop effect if we had more time to perfect it. 
            For now, let's use a horizontal scroll container. */}
                <div className="flex gap-8 overflow-x-auto px-6 pb-10 snap-x hide-scrollbar">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 w-[300px] md:w-[450px] snap-center group relative cursor-pointer"
                        >
                            <div
                                className="h-[500px] rounded-2xl overflow-hidden relative border border-white/5"
                                style={{ background: project.image }}
                            >
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />

                                {/* Overlay Content */}
                                <div className="absolute bottom-0 left-0 right-0 p-8 pt-20 bg-gradient-to-t from-[#0A0A0F] to-transparent">
                                    <div className="flex justify-between items-end mb-4">
                                        <div>
                                            <span className="text-xs font-mono text-primary mb-2 block">{project.category}</span>
                                            <h3 className="text-2xl font-bold leading-tight group-hover:text-primary transition-colors">{project.title}</h3>
                                        </div>
                                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                                            <ArrowUpRight size={20} />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-4">
                                        {Object.entries(project.stats).map(([key, value]) => (
                                            <div key={key}>
                                                <p className="text-xs text-muted-foreground uppercase">{key}</p>
                                                <p className="text-lg font-bold">{value}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
