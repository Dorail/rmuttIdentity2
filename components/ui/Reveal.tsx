'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation, Variant } from 'framer-motion';

interface RevealProps {
    children: React.ReactNode;
    width?: 'fit-content' | '100%';
    delay?: number;
    duration?: number;
    direction?: 'up' | 'down' | 'left' | 'right' | 'none';
    className?: string;
}

export default function Reveal({
    children,
    width = 'fit-content',
    delay = 0.25,
    duration = 0.5,
    direction = 'up',
    className = ""
}: RevealProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start('visible');
        }
    }, [isInView, mainControls]);

    const getVariants = (): { hidden: Variant; visible: Variant } => {
        let hidden: any = { opacity: 0 };
        const visible: any = { opacity: 1, x: 0, y: 0 };

        switch (direction) {
            case 'up':
                hidden.y = 75;
                break;
            case 'down':
                hidden.y = -75;
                break;
            case 'left':
                hidden.x = 75;
                break;
            case 'right':
                hidden.x = -75;
                break;
            case 'none':
                break;
        }

        return {
            hidden,
            visible: {
                ...visible,
                transition: { duration, delay, ease: "easeOut" }
            }
        };
    };

    return (
        <div ref={ref} style={{ position: 'relative', width }} className={className}>
            <motion.div
                variants={getVariants()}
                initial="hidden"
                animate={mainControls}
            >
                {children}
            </motion.div>
        </div>
    );
}
