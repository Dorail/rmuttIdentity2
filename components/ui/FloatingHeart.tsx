'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';
import { useState, useEffect } from 'react';

interface FloatingHeartProps {
    onClick: () => void;
}

export default function FloatingHeart({ onClick }: FloatingHeartProps) {
    const [showLabel, setShowLabel] = useState(true);

    const handleClick = () => {
        onClick();
        setShowLabel(false);

        // Timer to show label again after 1 minute
        setTimeout(() => {
            setShowLabel(true);
        }, 120000); // 2 minute
    };

    return (
        <motion.div
            className="fixed bottom-6 right-6 z-50"
            initial={{ scale: 0, opacity: 0 }}
            animate={{
                scale: 1,
                opacity: 1,
                y: [0, -10, 0], // Floating effect on container
            }}
            transition={{
                y: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                },
                scale: { duration: 0.3 },
                opacity: { duration: 0.3 }
            }}
        >
            <motion.button
                onClick={handleClick}
                className="relative group p-4 bg-rose-500 text-white rounded-full shadow-lg shadow-rose-500/40 hover:bg-rose-600 focus:outline-none focus:ring-4 focus:ring-rose-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <Heart className="w-8 h-8 fill-current" />
                <span className="absolute -top-1 -right-1 flex h-4 w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-rose-500"></span>
                </span>
            </motion.button>

            <AnimatePresence>
                {showLabel && (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-20 top-1/2 -translate-y-1/2 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 px-4 py-2 rounded-xl shadow-md text-sm font-medium whitespace-nowrap pointer-events-none"
                    >
                        เช็คความพร้อมกันเถอะ ❤️
                        {/* Triangle pointer */}
                        <div className="absolute top-1/2 -right-2 -translate-y-1/2 w-0 h-0 border-t-8 border-t-transparent border-l-8 border-l-white dark:border-l-zinc-800 border-b-8 border-b-transparent"></div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
