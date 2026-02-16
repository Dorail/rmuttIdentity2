'use client';


import { motion } from 'framer-motion';
import StaggerText from "@/components/ui/StaggerText";
import { Shield, Heart, AlertTriangle, CheckCircle } from 'lucide-react';
import Reveal from "@/components/ui/Reveal";
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

export default function BasicPreventionPage() {
    return (
        <div className="min-h-screen bg-zinc-50 dark:bg-black font-sans">


            <main className="pt-32 pb-24 px-4">
                <div className="max-w-4xl mx-auto space-y-16">

                    {/* Header */}
                    <div className="text-center space-y-6">
                        <Reveal width="100%" direction="down">
                            <div className="w-20 h-20 mx-auto bg-green-100 dark:bg-green-900/30 rounded-3xl flex items-center justify-center text-green-600 dark:text-green-400">
                                <Shield className="w-10 h-10" />
                            </div>
                        </Reveal>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-white">
                            <StaggerText text="การป้องกันเบื้องต้น" />
                        </h1>
                        <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
                            รู้ทัน ป้องกันได้! รวมวิธีป้องกันการตั้งครรภ์และโรคติดต่อที่วัยรุ่นควรรู้
                        </p>
                    </div>

                    {/* Content Steps */}
                    <div className="grid gap-12">

                        {/* Step 1: Consent */}
                        <Reveal width="100%" delay={0.2}>
                            <motion.div
                                whileHover={{ y: -5 }}
                                className="bg-white dark:bg-zinc-900 rounded-3xl p-8 md:p-12 shadow-sm hover:shadow-xl transition-all duration-300 border border-zinc-100 dark:border-zinc-800 flex flex-col md:flex-row gap-8 items-center"
                            >
                                <div className="flex-1 space-y-4">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 font-bold text-sm">
                                        <Heart className="w-4 h-4" /> ข้อที่ 1
                                    </div>
                                    <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">Consent (ความยินยอม)</h2>
                                    <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
                                        เป็นหัวใจสำคัญที่สุด เซ็กส์ต้องเกิดจากความยินยอมของทั้งสองฝ่าย **"ไม่ใช่แค่การไม่ปฏิเสธ แต่คือการตอบตกลงอย่างเต็มใจ"**
                                        ถ้าฝ่ายใดฝ่ายหนึ่งไม่พร้อม, เมา, หรือถูกบังคับ นั่นไม่ใช่ความยินยอม
                                    </p>
                                </div>
                                <div className="w-full md:w-1/3 aspect-video bg-rose-50 dark:bg-rose-900/10 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                                    {/* Placeholder Image */}
                                    <span className="text-rose-300 dark:text-rose-700 font-bold text-3xl opacity-50">YES MEANS YES</span>
                                </div>
                            </motion.div>
                        </Reveal>

                        {/* Step 2: Protection Mindset */}
                        <Reveal width="100%" delay={0.3}>
                            <div className="bg-white dark:bg-zinc-900 rounded-3xl p-8 md:p-12 shadow-sm border border-zinc-100 dark:border-zinc-800 flex flex-col md:flex-row-reverse gap-8 items-center">
                                <div className="flex-1 space-y-4">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 font-bold text-sm">
                                        <AlertTriangle className="w-4 h-4" /> ข้อที่ 2
                                    </div>
                                    <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">ไม่ประมาท</h2>
                                    <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
                                        อย่าคิดว่า "ครั้งเดียวไม่เป็นไร" หรือ "หลั่งนอกก็พอ" เพราะอสุจิสามารถปนเปื้อนมากับน้ำหล่อลื่นได้
                                        และการนับหน้า 7 หลัง 7 ก็มีความคลาดเคลื่อนสูงมากในวัยรุ่นที่ฮอร์โมนยังไม่คงที่
                                    </p>
                                </div>
                                <div className="w-full md:w-1/3 aspect-video bg-amber-50 dark:bg-amber-900/10 rounded-2xl flex items-center justify-center">
                                    <span className="text-amber-300 dark:text-amber-700 font-bold text-6xl opacity-50">!</span>
                                </div>
                            </div>
                        </Reveal>

                        {/* Step 3: Hygiene */}
                        <Reveal width="100%" delay={0.4}>
                            <div className="bg-white dark:bg-zinc-900 rounded-3xl p-8 md:p-12 shadow-sm border border-zinc-100 dark:border-zinc-800 flex flex-col md:flex-row gap-8 items-center">
                                <div className="flex-1 space-y-4">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 font-bold text-sm">
                                        <CheckCircle className="w-4 h-4" /> ข้อที่ 3
                                    </div>
                                    <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">ความสะอาด</h2>
                                    <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
                                        ดูแลความสะอาดของร่างกายและอวัยวะเพศทั้งก่อนและหลังมีเพศสัมพันธ์ เพื่อลดความเสี่ยงของการติดเชื้อ
                                        และการใช้ถุงยางอนามัยก็เป็นวิธีเดียวที่ช่วยป้องกันโรคติดต่อทางเพศสัมพันธ์ได้
                                    </p>
                                </div>
                                <div className="w-full md:w-1/3 aspect-video bg-teal-50 dark:bg-teal-900/10 rounded-2xl flex items-center justify-center">
                                    <span className="text-teal-300 dark:text-teal-700 font-bold text-3xl opacity-50">CLEAN & SAFE</span>
                                </div>
                            </div>
                        </Reveal>

                    </div>
                </div>
            </main>


        </div>
    );
}
