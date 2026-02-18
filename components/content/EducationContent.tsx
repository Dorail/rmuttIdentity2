'use client';

import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { ShieldCheck, AlertCircle, Phone, Heart, Users, CheckCircle, ChevronDown } from 'lucide-react';
import { useRef, useState } from 'react';
import BrandTicker from '../ui/BrandTicker';

export default function EducationContent() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <section id="education" className="space-y-24 py-12">


            <BrandTicker />

            {/* Intro Section */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
                className="text-center space-y-6"
            >
                <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600 dark:from-teal-400 dark:to-blue-400">
                    รู้ทัน... ป้องกันได้
                </motion.h2>
                <motion.p variants={itemVariants} className="text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
                    การมีความรักในวัยเรียนและมหาวิทยาลัยเป็นเรื่องสวยงาม แต่ "ความพร้อม" คือสิ่งที่ทำให้ความรักยั่งยืน มาเรียนรู้วิธีรักให้เป็นและปลอดภัยกันเถอะ
                </motion.p>
            </motion.div>

            {/* Myths vs Facts Cards */}
            <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-rose-50 dark:bg-rose-900/10 p-8 rounded-3xl border border-rose-100 dark:border-rose-900/30 relative overflow-hidden group"
                >
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <AlertCircle className="w-32 h-32 text-rose-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-rose-600 dark:text-rose-400 mb-4 flex items-center gap-2">
                        <AlertCircle /> ความเชื่อผิดๆ
                    </h3>
                    <ul className="space-y-4 text-zinc-700 dark:text-zinc-300">
                        <li className="flex gap-3">
                            <span className="text-rose-500 font-bold">❌</span>
                            <span>"ครั้งเดียวไม่ท้องหรอก"</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="text-rose-500 font-bold">❌</span>
                            <span>"หลั่งนอกปลอดภัย 100%"</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="text-rose-500 font-bold">❌</span>
                            <span>"กินยาสตรีขับเลือดช่วยคุมกำเนิดได้"</span>
                        </li>
                    </ul>
                </motion.div>

                <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-emerald-50 dark:bg-emerald-900/10 p-8 rounded-3xl border border-emerald-100 dark:border-emerald-900/30 relative overflow-hidden group"
                >
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <ShieldCheck className="w-32 h-32 text-emerald-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-4 flex items-center gap-2">
                        <ShieldCheck /> ความจริงที่ต้องรู้
                    </h3>
                    <ul className="space-y-4 text-zinc-700 dark:text-zinc-300">
                        <li className="flex gap-3">
                            <span className="text-emerald-500 font-bold">✅</span>
                            <span>"ท้องได้ตั้งแต่ครั้งแรก ถ้าไม่ป้องกัน"</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="text-emerald-500 font-bold">✅</span>
                            <span>"ถุงยางอนามัยป้องกันทั้งท้องและโรค"</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="text-emerald-500 font-bold">✅</span>
                            <span>"ยาคุมกำเนิดต้องกินให้ถูกวิธีถึงจะเห็นผล"</span>
                        </li>
                    </ul>
                </motion.div>
            </div>

            {/* Scrollable Action Steps */}
            <ScrollableActionSteps />
        </section>
    );
}

function ScrollableActionSteps() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [currentStep, setCurrentStep] = useState(0);
    const [direction, setDirection] = useState(0);

    const steps = [
        {
            icon: <Users className="w-12 h-12" />,
            style: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
            title: "1. ปรึกษาคนใกล้ชิด",
            desc: "พ่อแม่ ผู้ปกครอง หรือครูแนะแนว คือคนที่หวังดีที่สุด อย่ากลัวที่จะขอคำปรึกษา"
        },
        {
            icon: <Heart className="w-12 h-12" />,
            style: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
            title: "2. เข้าใจและยอมรับ",
            desc: "ตั้งสติ และยอมรับความจริง ทุกปัญหามีทางออกเสมอหากเราเปิดใจ"
        },
        {
            icon: <Phone className="w-12 h-12" />,
            style: "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400",
            title: "3. สายด่วน 1663",
            desc: "ปรึกษาปัญหาการตั้งครรภ์ไม่พร้อม โทรฟรี ปลอดภัย และเก็บเป็นความลับ"
        }
    ];

    const paginate = (newDirection: number) => {
        setDirection(newDirection);
        let nextStep = currentStep + newDirection;
        if (nextStep < 0) nextStep = steps.length - 1;
        if (nextStep >= steps.length) nextStep = 0;
        setCurrentStep(nextStep);
    };

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.5,
            rotateY: direction > 0 ? 45 : -45
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1,
            rotateY: 0
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.5,
            rotateY: direction < 0 ? 45 : -45
        })
    };

    return (
        <div ref={containerRef} className="relative h-[90vh] -mt-24 pt-24 flex items-center justify-center">
            <div className="w-full flex items-center justify-center overflow-hidden perspective-[1000px]">
                <div className="relative w-full max-w-2xl px-4">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-4">ถ้าไม่พร้อม... ต้องทำไง?</h3>
                        {/* Subtitle removed as requested */}
                    </div>

                    <div className="relative h-[400px]">
                        <AnimatePresence mode="popLayout" custom={direction} initial={false}>
                            <motion.div
                                key={currentStep}
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "spring", stiffness: 300, damping: 30 },
                                    opacity: { duration: 0.2 },
                                    rotateY: { duration: 0.3 }
                                }}
                                className="absolute bg-white dark:bg-zinc-900 rounded-3xl p-8 md:p-12 shadow-xl shadow-zinc-200/50 dark:shadow-none border border-zinc-100 dark:border-zinc-800 flex flex-col items-center justify-center text-center gap-6 w-full max-w-2xl"
                            >
                                <div className={`w-24 h-24 rounded-full flex items-center justify-center ${steps[currentStep].style}`}>
                                    {steps[currentStep].icon}
                                </div>
                                <h4 className="text-3xl font-bold text-zinc-900 dark:text-white">
                                    {steps[currentStep].title}
                                </h4>
                                <p className="text-xl text-zinc-500 dark:text-zinc-400 max-w-md">
                                    {steps[currentStep].desc}
                                </p>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex justify-center gap-4 mt-8 z-10 relative">
                        <button
                            onClick={() => paginate(-1)}
                            className="p-4 rounded-full bg-white dark:bg-zinc-800 shadow-lg hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors border border-zinc-100 dark:border-zinc-700 group"
                        >
                            <ChevronDown className="w-6 h-6 rotate-90 text-zinc-600 dark:text-zinc-300 group-hover:text-teal-600 dark:group-hover:text-teal-400" />
                        </button>
                        <div className="flex gap-2 items-center">
                            {steps.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => {
                                        setDirection(idx > currentStep ? 1 : -1);
                                        setCurrentStep(idx);
                                    }}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === currentStep ? 'w-8 bg-teal-600 dark:bg-teal-400' : 'bg-zinc-300 dark:bg-zinc-700 hover:bg-teal-200 dark:hover:bg-teal-900'}`}
                                />
                            ))}
                        </div>
                        <button
                            onClick={() => paginate(1)}
                            className="p-4 rounded-full bg-white dark:bg-zinc-800 shadow-lg hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors border border-zinc-100 dark:border-zinc-700 group"
                        >
                            <ChevronDown className="w-6 h-6 -rotate-90 text-zinc-600 dark:text-zinc-300 group-hover:text-teal-600 dark:group-hover:text-teal-400" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
