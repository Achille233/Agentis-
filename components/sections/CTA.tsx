"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function CTA() {
    return (
        <section className="py-32 relative overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[#0A0A0F]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,188,250,0.1)_0%,transparent_70%)]" />
            </div>

            <div className="container relative z-10 px-6 text-center">
                <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-7xl font-bold mb-8 tracking-tight"
                >
                    Ready to <span className="text-gradient-primary">Scale?</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12"
                >
                    Build your next AI infrastructure with Agentis.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <Button size="lg" className="h-16 px-12 text-lg shadow-[0_0_40px_rgba(0,188,250,0.4)] hover:shadow-[0_0_60px_rgba(0,188,250,0.6)] transition-shadow">
                        Start Your Project
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
