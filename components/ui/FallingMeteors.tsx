"use client";

import { useEffect, useState, memo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface Meteor {
    id: number;
    x: number;
    drift: number; // Pre-calculated drift
    delay: number;
    duration: number;
    imageSrc: string;
    rotation: number;
    scale: number;
}

// Memoized Meteor Item Component to prevent re-renders
const MeteorItem = memo(({ meteor, onComplete }: { meteor: Meteor; onComplete: (id: number) => void }) => {
    return (
        <motion.div
            initial={{
                y: -150,
                x: `${meteor.x}vw`,
                opacity: 0,
                rotate: 0,
                scale: meteor.scale,
            }}
            animate={{
                y: "120vh",
                x: [`${meteor.x}vw`, `calc(${meteor.x}vw + ${meteor.drift}vw)`], // Use pre-calculated drift
                opacity: [0, 1, 1, 0],
                rotate: meteor.rotation + 360,
            }}
            transition={{
                duration: meteor.duration,
                delay: meteor.delay,
                ease: "linear",
            }}
            onAnimationComplete={() => onComplete(meteor.id)} // Remove from state when done
            className="absolute top-0 will-change-transform"
            style={{ left: 0 }} // Ensure absolute positioning starts from left edge
        >
            {/* Wrapper for the image and the glow/trail effect */}
            <div className="relative group">
                {/* Glow Effect - Optimized: Reduced blur radius slightly if needed via simpler class, but keeping visual same */}
                <div className="absolute inset-0 bg-white/30 blur-xl rounded-full scale-150 animate-pulse" />

                {/* Trail/Comet Tail Effect */}
                <div className="absolute top-1/2 left-1/2 w-[2px] h-[100px] -translate-x-1/2 -translate-y-full bg-gradient-to-t from-transparent via-white/40 to-transparent blur-[1px] rotate-[20deg] origin-bottom -z-10" />

                <div className="relative w-16 h-16 md:w-24 md:h-24 drop-shadow-[0_0_15px_rgba(255,255,255,0.6)]">
                    <Image
                        src={meteor.imageSrc}
                        alt="Falling Item"
                        fill // Using fill + sizes is generally better than width/height for responsive
                        sizes="(max-width: 768px) 64px, 96px"
                        className="object-contain"
                    // Removed priority to prevent network congestion if many spawn, 
                    // but added loading="eager" effectively via default if needed, 
                    // though for these small assets 'priority' is okay if count is low. 
                    // Let's stick to default (lazy) for performance, or priority={false}.
                    />
                </div>
            </div>
        </motion.div>
    );
});

MeteorItem.displayName = "MeteorItem";

export default function FallingMeteors() {
    const [meteors, setMeteors] = useState<Meteor[]>([]);

    const removeMeteor = useCallback((id: number) => {
        setMeteors((prev) => prev.filter((m) => m.id !== id));
    }, []);

    useEffect(() => {
        const checkMeteorShower = () => {
            const now = Date.now();
            const lastTriggerTime = localStorage.getItem("lastMeteorTime");

            // Should match interval cycle roughly (e.g., 6s)
            const timeSinceLast = lastTriggerTime ? now - parseInt(lastTriggerTime, 10) : Infinity;

            if (timeSinceLast < 10000) return;

            localStorage.setItem("lastMeteorTime", now.toString());

            // 60% chance
            if (Math.random() > 0.6) return;

            const count = Math.floor(Math.random() * 3) + 1; // 1-3 meteors
            const newMeteors: Meteor[] = [];

            const images = [
                "/condomItems/condom1.png",
                "/condomItems/condom2.png",
                "/condomItems/condom3.png",
            ];

            for (let i = 0; i < count; i++) {
                let startX = 0;
                let drift = 0;
                let attempts = 0;
                let isValid = false;

                // Attempt to find a non-overlapping position
                while (!isValid && attempts < 10) {
                    startX = Math.random() * 80 + 10; // 10-90vw (safer from edges)
                    drift = Math.random() * 10 - 5; // -5vw to +5vw

                    // Check if too close to existing meteors in this batch
                    const tooClose = newMeteors.some((m) => Math.abs(m.x - startX) < 15); // Require 15vw gap
                    if (!tooClose) {
                        isValid = true;
                    }
                    attempts++;
                }

                // Fallback if no valid position found
                if (!isValid) {
                    startX = Math.random() * 80 + 10;
                }

                newMeteors.push({
                    id: now + i,
                    x: startX,
                    drift: drift,
                    delay: Math.random() * 5, // 0-5s delay
                    duration: Math.random() * 4 + 4, // 4-8s duration
                    imageSrc: images[Math.floor(Math.random() * images.length)],
                    rotation: Math.random() * 360,
                    scale: Math.random() * 0.4 + 0.6,
                });
            }

            // Append new meteors instead of replacing, to allow overlap
            setMeteors((prev) => [...prev, ...newMeteors]);
        };

        const interval = setInterval(checkMeteorShower, 1000);
        checkMeteorShower();

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-[40] overflow-hidden">
            <AnimatePresence mode="popLayout">
                {meteors.map((meteor) => (
                    <MeteorItem key={meteor.id} meteor={meteor} onComplete={removeMeteor} />
                ))}
            </AnimatePresence>
        </div>
    );
}
