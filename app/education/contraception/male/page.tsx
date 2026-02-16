'use client';


import { ShieldCheck, Ban, Scissors, AlertTriangle } from 'lucide-react';
import Reveal from "@/components/ui/Reveal";
import { AnimatePresence, motion } from 'framer-motion';
import StaggerText from "@/components/ui/StaggerText";

export default function MaleContraceptionPage() {
    return (
        <div className="min-h-screen bg-zinc-50 dark:bg-black font-sans">


            <main className="pt-32 pb-24 px-4">
                <div className="max-w-5xl mx-auto space-y-16">

                    <div className="text-center space-y-6">
                        <Reveal width="100%" direction="down">
                            <div className="w-20 h-20 mx-auto bg-blue-100 dark:bg-blue-900/30 rounded-3xl flex items-center justify-center text-blue-600 dark:text-blue-400">
                                <ShieldCheck className="w-10 h-10" />
                            </div>
                        </Reveal>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-white">
                            <StaggerText text="การคุมกำเนิดสำหรับผู้ชาย" />
                        </h1>
                        <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
                            วิธีที่ง่ายและมีประสิทธิภาพที่สุดเริ่มที่ "ฝ่ายชาย" มาดูกันว่ามีวิธีไหนบ้าง
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">

                        {/* Condoms */}
                        <Reveal width="100%" delay={0.2}>
                            <motion.div
                                whileHover={{ y: -5 }}
                                className="bg-white dark:bg-zinc-900 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-zinc-100 dark:border-zinc-800"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-xl flex items-center justify-center text-teal-600 dark:text-teal-400">
                                        <ShieldCheck className="w-6 h-6" />
                                    </div>
                                    <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">ถุงยางอนามัย (Condom)</h2>
                                </div>
                                <div className="space-y-4 text-zinc-600 dark:text-zinc-300">
                                    <p>
                                        เป็นวิธีเดียวที่ป้องกันได้ทั้ง **การตั้งครรภ์** และ **โรคติดต่อทางเพศสัมพันธ์ (STIs)**
                                        หาซื้อง่าย ราคาไม่แพง และไม่มีผลข้างเคียง
                                    </p>
                                    <ul className="list-disc pl-5 space-y-2">
                                        <li>ควรสวมตอนอวัยวะเพศแข็งตัวเต็มที่</li>
                                        <li>บีบปลายถุงไล่ลมก่อนสวม</li>
                                        <li>ใช้สารหล่อลื่นสูตรน้ำเท่านั้น (ห้ามใช้น้ำมันเพราะจะทำให้ถุงแตก)</li>
                                    </ul>
                                </div>
                            </motion.div>
                        </Reveal>

                        {/* Vasectomy */}
                        <Reveal width="100%" delay={0.3}>
                            <div className="bg-white dark:bg-zinc-900 rounded-3xl p-8 shadow-sm border border-zinc-100 dark:border-zinc-800">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center text-purple-600 dark:text-purple-400">
                                        <Scissors className="w-6 h-6" />
                                    </div>
                                    <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">การทำหมันชาย (Vasectomy)</h2>
                                </div>
                                <div className="space-y-4 text-zinc-600 dark:text-zinc-300">
                                    <p>
                                        เป็นการคุมกำเนิดถาวร โดยการตัดท่อนำอสุจิ ทำง่าย เจ็บน้อยกว่าทำหมันหญิง และไม่มีผลต่อสมรรถภาพทางเพศ
                                    </p>
                                    <div className="bg-purple-50 dark:bg-purple-900/10 p-4 rounded-xl text-sm text-purple-800 dark:text-purple-300">
                                        <strong>เหมาะสำหรับ:</strong> ผู้ที่มีบุตรพอแล้ว หรือมั่นใจว่าจะไม่มีบุตร
                                    </div>
                                </div>
                            </div>
                        </Reveal>

                    </div>

                    {/* Withdrawal Myth */}
                    <Reveal width="100%" delay={0.4} direction="up">
                        <div className="bg-rose-50 dark:bg-rose-900/10 rounded-3xl p-8 border border-rose-100 dark:border-rose-800">
                            <div className="flex flex-col md:flex-row gap-8 items-center">
                                <div className="flex-1 space-y-4">
                                    <h3 className="text-2xl font-bold text-rose-600 dark:text-rose-400 flex items-center gap-2">
                                        <AlertTriangle /> ความเข้าใจผิด: การหลั่งนอก
                                    </h3>
                                    <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                                        การหลั่งนอก **ไม่ใช่** วิธีคุมกำเนิดที่มีประสิทธิภาพ เพราะในน้ำหล่อลื่นที่ออกมาก่อนหลั่งจริง
                                        อาจมีอสุจิปนเปื้อนอยู่ ซึ่งเพียงพอที่จะทำให้ตั้งครรภ์ได้ นอกจากนี้ยังไม่สามารถป้องกันโรคติดต่อได้เลย
                                    </p>
                                    <div className="inline-block px-4 py-2 bg-rose-200 dark:bg-rose-800 text-rose-800 dark:text-rose-200 rounded-full font-bold text-sm">
                                        เสี่ยงสูงมาก! 🚨
                                    </div>
                                </div>
                                <div className="w-32 h-32 bg-rose-100 dark:bg-rose-900/30 rounded-full flex items-center justify-center text-rose-500">
                                    <Ban className="w-16 h-16" />
                                </div>
                            </div>
                        </div>
                    </Reveal>

                </div>
            </main>


        </div>
    );
}
