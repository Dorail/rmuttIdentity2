'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const brands = [
    { src: '/brands/brand1.png', alt: 'Brand 1', width: 200, height: 80 },
    { src: '/brands/brand2.png', alt: 'Brand 2', width: 200, height: 80 },
    { src: '/brands/brand3.png', alt: 'Brand 3', width: 200, height: 80 },
    { src: '/brands/brand4.png', alt: 'Brand 4', width: 200, height: 80 },
    { src: '/brands/brand5.png', alt: 'Brand 5', width: 200, height: 80 },
    { src: '/brands/brand6.png', alt: 'Brand 6', width: 200, height: 80 },
    { src: '/brands/brand7.png', alt: 'Brand 7', width: 200, height: 80 },
];

export default function BrandTicker() {
    return (
        <div className="w-full py-16 bg-transparent flex justify-center overflow-hidden">
            <div className="flex w-full max-w-[100vw] relative [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                <motion.div
                    initial={{ x: 0 }}
                    animate={{ x: "-50%" }}
                    transition={{
                        duration: 40,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                    className="flex flex-shrink-0"
                >
                    {[...brands, ...brands].map((brand, index) => (
                        <div
                            key={index}
                            className="relative h-16 md:h-20 w-48 md:w-72 flex-shrink-0 flex items-center justify-center px-8"
                        >
                            <Image
                                src={brand.src}
                                alt={brand.alt}
                                width={brand.width}
                                height={brand.height}
                                className="h-full w-auto object-contain brightness-0 dark:invert"
                            />
                        </div>
                    ))}
                </motion.div>
                <motion.div
                    initial={{ x: 0 }}
                    animate={{ x: "-50%" }}
                    transition={{
                        duration: 40,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                    className="flex flex-shrink-0"
                >
                    {[...brands, ...brands].map((brand, index) => (
                        <div
                            key={`duplicate-${index}`}
                            className="relative h-16 md:h-20 w-48 md:w-72 flex-shrink-0 flex items-center justify-center px-8"
                        >
                            <Image
                                src={brand.src}
                                alt={brand.alt}
                                width={brand.width}
                                height={brand.height}
                                className="h-full w-auto object-contain brightness-0 dark:invert"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
