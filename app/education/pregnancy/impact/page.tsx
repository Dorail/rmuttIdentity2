'use client';


import { BookOpen, Home, Wallet, HeartCrack } from 'lucide-react';
import Reveal from "@/components/ui/Reveal";
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import StaggerText from "@/components/ui/StaggerText";



export default function ImpactPage() {
    return (
        <div className="min-h-screen bg-zinc-50 dark:bg-black font-sans">


            <main className="pt-32 pb-24 px-4">
                <div className="max-w-4xl mx-auto space-y-16">

                    <div className="text-center space-y-6">
                        <Reveal width="100%" direction="down">
                            <div className="w-20 h-20 mx-auto bg-red-100 dark:bg-red-900/30 rounded-3xl flex items-center justify-center text-red-600 dark:text-red-400">
                                <HeartCrack className="w-10 h-10" />
                            </div>
                        </Reveal>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-white">
                            <StaggerText text="ผลกระทบที่ตามมา" />
                        </h1>
                        <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
                            การตั้งครรภ์ไม่พร้อมเปลี่ยนชีวิตไปตลอดกาล นี่คือสิ่งที่อาจเกิดขึ้น
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <Reveal width="100%" delay={0.1}>
                            <motion.div
                                whileHover={{ y: -5 }}
                                className="bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-zinc-100 dark:border-zinc-800 shadow-sm hover:shadow-xl transition-all duration-300"
                            >
                                <BookOpen className="w-10 h-10 text-teal-600 mb-4" />
                                <h3 className="text-xl font-bold mb-2 text-zinc-900 dark:text-white">ด้านการศึกษา</h3>
                                <p className="text-zinc-600 dark:text-zinc-400">อาจต้องพักการเรียน หรือออกจากโรงเรียนกลางคัน ทำให้เสียโอกาสทางการศึกษาและอาชีพในอนาคตที่ใฝ่ฝัน</p>
                            </motion.div>
                        </Reveal>

                        <Reveal width="100%" delay={0.2}>
                            <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-zinc-100 dark:border-zinc-800">
                                <Home className="w-10 h-10 text-orange-600 mb-4" />
                                <h3 className="text-xl font-bold mb-2 text-zinc-900 dark:text-white">ครอบครัวและสังคม</h3>
                                <p className="text-zinc-600 dark:text-zinc-400">เกิดความขัดแย้งในครอบครัว พ่อแม่เสียใจ ถูกมองด้วยสายตาไม่ดีจากคนรอบข้าง ซึ่งเป็นแรงกดดันทางจิตใจมหาศาล</p>
                            </div>
                        </Reveal>

                        <Reveal width="100%" delay={0.3}>
                            <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-zinc-100 dark:border-zinc-800">
                                <Wallet className="w-10 h-10 text-green-600 mb-4" />
                                <h3 className="text-xl font-bold mb-2 text-zinc-900 dark:text-white">ภาระค่าใช้จ่าย</h3>
                                <p className="text-zinc-600 dark:text-zinc-400">การเลี้ยงดูเด็กหนึ่งคนต้องใช้เงินจำนวนมาก ทั้งค่าคลอด ค่าอาหาร ค่าเล่าเรียน ในขณะที่พ่อแม่วัยรุ่นยังไม่มีรายได้ที่มั่นคง</p>
                            </div>
                        </Reveal>

                        <Reveal width="100%" delay={0.4}>
                            <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-zinc-100 dark:border-zinc-800">
                                <HeartCrack className="w-10 h-10 text-rose-600 mb-4" />
                                <h3 className="text-xl font-bold mb-2 text-zinc-900 dark:text-white">ปัญหาสุขภาพจิต</h3>
                                <p className="text-zinc-600 dark:text-zinc-400">ความเครียด ภาวะซึมเศร้าหลังคลอด และความรู้สึกผิด เป็นสิ่งที่พบได้บ่อยในคุณแม่วัยใส</p>
                            </div>
                        </Reveal>
                    </div>

                </div>
            </main>


        </div>
    );
}
