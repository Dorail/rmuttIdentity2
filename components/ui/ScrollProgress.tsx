'use client';

import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-600 via-teal-400 to-white origin-left z-[100] shadow-[0_0_15px_rgba(255,255,255,0.8)]"
            style={{ scaleX }}
        />
    );
}
