'use client';


import { AlertCircle, Calendar, Beer, Users } from 'lucide-react';
import Reveal from "@/components/ui/Reveal";
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import StaggerText from "@/components/ui/StaggerText";


export default function RisksPage() {
    return (
        <div className="min-h-screen bg-zinc-50 dark:bg-black font-sans">


            <main className="pt-32 pb-24 px-4">
                <div className="max-w-4xl mx-auto space-y-16">

                    <div className="text-center space-y-6">
                        <Reveal width="100%" direction="down">
                            <div className="w-20 h-20 mx-auto bg-amber-100 dark:bg-amber-900/30 rounded-3xl flex items-center justify-center text-amber-600 dark:text-amber-400">
                                <AlertCircle className="w-10 h-10" />
                            </div>
                        </Reveal>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-white">
                            <StaggerText text="ความเสี่ยงที่ต้องรู้" />
                        </h1>
                        <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
                            ทำไมวัยรุ่นถึงเป็นวัยที่เสี่ยงต่อการตั้งครรภ์ไม่พร้อมมากที่สุด? มาทำความเข้าใจปัจจัยกระตุ้นเหล่านี้
                        </p>
                    </div>

                    <div className="space-y-8">

                        {/* Hormones */}
                        <Reveal width="100%" delay={0.2} direction="right">
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="bg-white dark:bg-zinc-900 rounded-3xl p-8 flex gap-6 items-start shadow-sm hover:shadow-xl transition-all duration-300 border border-zinc-100 dark:border-zinc-800"
                            >
                                <div className="w-12 h-12 shrink-0 bg-rose-100 dark:bg-rose-900/30 rounded-full flex items-center justify-center text-rose-600 dark:text-rose-400">
                                    <Users className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">ฮอร์โมนและความอยากรู้อยากเห็น</h3>
                                    <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                        วัยรุ่นเป็นช่วงที่ฮอร์โมนเพศเปลี่ยนแปลงสูง มีความสนใจในเรื่องเพศ และต้องการเรียนรู้สิ่งใหม่ๆ
                                        หากขาดความยั้งคิดหรือไม่มีทักษะในการปฏิเสธ ก็อาจเผลอไผลได้ง่าย
                                    </p>
                                </div>
                            </motion.div>
                        </Reveal>

                        {/* Alcohol */}
                        <Reveal width="100%" delay={0.3} direction="right">
                            <div className="bg-white dark:bg-zinc-900 rounded-3xl p-8 flex gap-6 items-start shadow-sm border border-zinc-100 dark:border-zinc-800">
                                <div className="w-12 h-12 shrink-0 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center text-yellow-600 dark:text-yellow-400">
                                    <Beer className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">อบายมุขและสารเสพติด</h3>
                                    <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                        แอลกอฮอล์ทำให้สติสัมปชัญญะลดลง ขาดความยับยั้งชั่งใจ แม้จะตั้งใจว่าจะป้องกัน แต่เมื่อเมาก็อาจเผลอไผลได้
                                        การอยู่ในสถานบันเทิงหรือปาร์ตี้ส่วนตัวสองต่อสองจึงเป็นสถานการณ์เสี่ยงสูง
                                    </p>
                                </div>
                            </div>
                        </Reveal>

                        {/* Cycle Myth */}
                        <Reveal width="100%" delay={0.4} direction="right">
                            <div className="bg-white dark:bg-zinc-900 rounded-3xl p-8 flex gap-6 items-start shadow-sm border border-zinc-100 dark:border-zinc-800">
                                <div className="w-12 h-12 shrink-0 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400">
                                    <Calendar className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">การนับระยะปลอดภัย (หน้า 7 หลัง 7)</h3>
                                    <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                        วัยรุ่นมักเข้าใจผิดว่าวิธีนี้ได้ผล 100% แต่ความจริงคือ **รอบเดือนของวัยรุ่นยังไม่คงที่**
                                        ไข่อาจตกไม่ตรงเวลา ทำให้การนับพลาดและท้องได้ง่ายมาก
                                    </p>
                                </div>
                            </div>
                        </Reveal>

                    </div>

                </div>
            </main>


        </div>
    );
}
