'use client';



import { Pill, Syringe, Calendar, Anchor } from 'lucide-react';

import Reveal from "@/components/ui/Reveal";
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import StaggerText from "@/components/ui/StaggerText";

const methods = [
    {
        name: "ยาคุมกำเนิด (Pills)",
        type: "รายเดือน",
        desc: "มีทั้งแบบ 21 และ 28 เม็ด ต้องกินทุกวันเวลาเดิม เหมาะกับคนที่มีวินัย",
        pros: "ประจำเดือนมาปกติ, ลดสิวได้บางยี่ห้อ",
        icon: <Pill className="w-6 h-6" />,
        color: "bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-400"
    },
    {
        name: "ยาฉีดคุมกำเนิด",
        type: "1 หรือ 3 เดือน",
        desc: "ฉีดเข้ากล้ามเนื้อ สะดวกไม่ต้องกินยาทุกวัน แต่อาจทำให้ประจำเดือนมาไม่ปกติ",
        pros: "ราคาถูก, คุมได้นานกว่ากินยา",
        icon: <Syringe className="w-6 h-6" />,
        color: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
    },
    {
        name: "ยาฝังคุมกำเนิด",
        type: "3-5 ปี",
        desc: "แท่งเล็กๆ ฝังใต้ท้องแขน คุมได้ยาวนานที่สุด เหมาะสำหรับวัยรุ่น (ฝังฟรีใน รพ.รัฐ)",
        pros: "ประสิทธิภาพสูงมาก, ไม่ต้องกลัวลืม",
        icon: <Anchor className="w-6 h-6" />, // Using Anchor as metaphor for implant/staying put
        color: "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400"
    },
    {
        name: "ยาคุมฉุกเฉิน",
        type: "ฉุกเฉินเท่านั้น",
        desc: "กินภายใน 72 ชม. หลังมีเพศสัมพันธ์ที่ไม่ได้ป้องกัน ไม่ควรกินเกิน 2 ครั้งต่อเดือน",
        pros: "ช่วยลดความเสี่ยงได้เมื่อพลาด แต่ไม่ 100%",
        icon: <Calendar className="w-6 h-6" />,
        color: "bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400"
    }
];

export default function FemaleContraceptionPage() {
    return (
        <div className="min-h-screen bg-zinc-50 dark:bg-black font-sans">


            <main className="pt-32 pb-24 px-4">
                <div className="max-w-6xl mx-auto space-y-16">

                    <div className="text-center space-y-6">
                        <Reveal width="100%" direction="down">
                            <div className="w-20 h-20 mx-auto bg-pink-100 dark:bg-pink-900/30 rounded-3xl flex items-center justify-center text-pink-600 dark:text-pink-400">
                                <Pill className="w-10 h-10" />
                            </div>
                        </Reveal>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-white">
                            <StaggerText text="การคุมกำเนิดสำหรับผู้หญิง" />
                        </h1>
                        <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
                            ผู้หญิงมีทางเลือกที่หลากหลาย เลือกวิธีที่เหมาะกับไลฟ์สไตล์และสุขภาพของคุณ
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {methods.map((method, idx) => (
                            <Reveal key={idx} width="100%" delay={idx * 0.1}>
                                <motion.div
                                    whileHover={{ y: -8 }}
                                    className="bg-white dark:bg-zinc-900 rounded-3xl p-8 border border-zinc-100 dark:border-zinc-800 shadow-sm hover:shadow-xl transition-all duration-300"
                                >
                                    <div className="flex justify-between items-start mb-6">
                                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${method.color} shadow-sm`}>
                                            {method.icon}
                                        </div>
                                        <span className="px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-xs font-bold text-zinc-500 uppercase tracking-wide">
                                            {method.type}
                                        </span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">{method.name}</h3>
                                    <p className="text-zinc-600 dark:text-zinc-400 mb-4 h-18">{method.desc}</p>
                                    <div className="p-4 bg-zinc-50 dark:bg-zinc-950/50 rounded-2xl group">
                                        <span className="font-semibold text-zinc-900 dark:text-zinc-200 text-sm">ข้อดี: </span>
                                        <span className="text-zinc-600 dark:text-zinc-400 text-sm">{method.pros}</span>
                                    </div>
                                </motion.div>
                            </Reveal>
                        ))}
                    </div>

                </div>
            </main>


        </div>
    );
}
