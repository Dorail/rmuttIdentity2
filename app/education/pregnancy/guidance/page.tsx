'use client';


import { Phone, HelpingHand, Scale, ArrowRight } from 'lucide-react';
import Reveal from "@/components/ui/Reveal";
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import StaggerText from "@/components/ui/StaggerText";



export default function GuidancePage() {
    return (
        <div className="min-h-screen bg-zinc-50 dark:bg-black font-sans">


            <main className="pt-32 pb-24 px-4">
                <div className="max-w-4xl mx-auto space-y-16">

                    <div className="text-center space-y-6">
                        <Reveal width="100%" direction="down">
                            <div className="w-20 h-20 mx-auto bg-green-100 dark:bg-green-900/30 rounded-3xl flex items-center justify-center text-green-600 dark:text-green-400">
                                <HelpingHand className="w-10 h-10" />
                            </div>
                        </Reveal>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-white">
                            <StaggerText text="ทางออกและการช่วยเหลือ" />
                        </h1>
                        <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
                            "ท้องไม่พร้อม" ไม่ใช่จุดจบ อย่าเก็บปัญหาไว้คนเดียว มีหน่วยงานที่พร้อมเข้าใจและช่วยเหลือคุณ
                        </p>
                    </div>

                    <div className="space-y-6">

                        {/* 1663 */}
                        <Reveal width="100%" delay={0.2}>
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="bg-teal-50 dark:bg-teal-900/10 border border-teal-100 dark:border-teal-800 p-8 rounded-3xl flex flex-col md:flex-row items-center gap-8 justify-between shadow-sm hover:shadow-lg transition-all duration-300"
                            >
                                <div className="flex gap-6 items-center">
                                    <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center text-white shrink-0 shadow-lg shadow-teal-600/30">
                                        <Phone className="w-8 h-8 animate-pulse" />
                                    </div>
                                    <div>
                                        <h2 className="text-3xl font-bold text-teal-800 dark:text-teal-400">สายด่วน 1663</h2>
                                        <p className="text-teal-700 dark:text-teal-300">ปรึกษาปัญหาท้องไม่พร้อม ฟรี! ปลอดภัย! เป็นความลับ!</p>
                                    </div>
                                </div>
                                <a className="px-8 py-4 rounded-xl bg-teal-600 text-white font-bold hover:bg-teal-700 shadow-lg cursor-pointer transform hover:scale-105 transition-all">
                                    โทร 1663
                                </a>
                            </motion.div>
                        </Reveal>

                        {/* Steps */}
                        <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-zinc-100 dark:border-zinc-800 space-y-6">
                            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">สิ่งที่ควรทำเมื่อสงสัยว่า "ท้อง"</h3>
                            <ul className="space-y-4">
                                <li className="flex gap-4 items-start">
                                    <span className="w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center font-bold text-zinc-600">1</span>
                                    <p className="text-zinc-600 dark:text-zinc-400 pt-1">ซื้อที่ตรวจครรภ์มาตรวจทันที (ควรตรวจตอนเช้าหลังตื่นนอน)</p>
                                </li>
                                <li className="flex gap-4 items-start">
                                    <span className="w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center font-bold text-zinc-600">2</span>
                                    <p className="text-zinc-600 dark:text-zinc-400 pt-1">ถ้าผลเป็นบวก (2 ขีด) ให้ตั้งสติ อย่าเพิ่งทำอะไรวู่วาม</p>
                                </li>
                                <li className="flex gap-4 items-start">
                                    <span className="w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center font-bold text-zinc-600">3</span>
                                    <p className="text-zinc-600 dark:text-zinc-400 pt-1">หาคนที่ไว้ใจได้ที่สุดเพื่อปรึกษา หรือโทร 1663</p>
                                </li>
                            </ul>
                        </div>

                        {/* Laws */}
                        <Reveal width="100%" delay={0.3}>
                            <div className="p-8">
                                <div className="flex items-center gap-3 mb-4 text-zinc-900 dark:text-white">
                                    <Scale className="w-6 h-6" />
                                    <h3 className="text-xl font-bold">สิทธิและกฎหมาย</h3>
                                </div>
                                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                    ปัจจุบันประเทศไทยมี พ.ร.บ. การป้องกันและแก้ไขปัญหาการตั้งครรภ์ในวัยรุ่น
                                    ซึ่งคุ้มครองสิทธิในการตัดสินใจในเนื้อตัวร่างกายของตนเอง
                                    และมีบริการยุติการตั้งครรภ์ที่ปลอดภัย (RSA) ในสถานพยาบาลที่ขึ้นทะเบียนถูกต้อง
                                </p>
                            </div>
                        </Reveal>

                    </div>

                </div>
            </main>


        </div>
    );
}
