'use client';


import { motion } from 'framer-motion';
import StaggerText from "@/components/ui/StaggerText";
import { Pill, ShieldCheck, Syringe, Clock, Info } from 'lucide-react';
import Reveal from "@/components/ui/Reveal";
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

const methods = [
    {
        id: 1,
        name: "ถุงยางอนามัยชาย",
        desc: "หาซื้อง่าย ป้องกันได้ทั้งท้องและโรคติดต่อทางเพศสัมพันธ์ ควรใช้ทุกครั้งที่มีเพศสัมพันธ์",
        pros: "ป้องกันโรคได้, ราคาถูก, ไม่มีผลข้างเคียงต่อฮอร์โมน",
        icon: <ShieldCheck className="w-8 h-8" />,
        color: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
        effectiveness: "98%",
    },
    {
        id: 2,
        name: "ยาคุมกำเนิด (แบบกิน)",
        desc: "ต้องกินทุกวันในเวลาเดียวกันเพื่อประสิทธิภาพสูงสุด มีทั้งแบบ 21 และ 28 เม็ด",
        pros: "ประจำเดือนมาปกติ, ลดอาการปวดท้องเมนส์ได้",
        icon: <Pill className="w-8 h-8" />,
        color: "bg-rose-100 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400",
        effectiveness: "91-99%",
    },
    {
        id: 3,
        name: "ยาฝังคุมกำเนิด",
        desc: "ฝังที่ใต้ท้องแขน คุมได้นาน 3-5 ปี เหมาะสำหรับคนที่ขี้ลืมกินยา",
        pros: "คุมได้นาน, ไม่ต้องกลัวลืม, รัฐบาลมีสวัสดิการให้วัยรุ่นฝังฟรี",
        icon: <Syringe className="w-8 h-8" />,
        color: "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400",
        effectiveness: "99.9%",
    },
    {
        id: 4,
        name: "ยาคุมฉุกเฉิน",
        desc: "ใช้เมื่อมีความเสี่ยงเท่านั้น (เช่น ถุงแตก) ควรกินภายใน 72 ชม. ไม่ใช่ยาวิเศษ",
        pros: "ใช้แก้สถานการณ์คับขันได้",
        icon: <Clock className="w-8 h-8" />,
        color: "bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400",
        effectiveness: "75-85%",
    },
    {
        id: 5,
        name: "ถุงยางอนามัยหญิง",
        desc: "เป็นถุงโพลียูรีเทนสอดใส่เข้าไปในช่องคลอดก่อนมีเพศสัมพันธ์ ปลายด้านหนึ่งปิด อีกด้านเป็นวงแหวน",
        pros: "ผู้หญิงสามารถป้องกันตัวเองได้, ป้องกันโรคติดต่อได้",
        icon: <ShieldCheck className="w-8 h-8" />, // Reusing shield check but style it differently
        color: "bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-400",
        effectiveness: "95%",
    },
    {
        id: 6,
        name: "ยาฉีดคุมกำเนิด",
        desc: "ฉีดเข้ากล้ามเนื้อทุก 1 หรือ 3 เดือน สะดวกสำหรับคนที่ไม่ชอบกินยา",
        pros: "ไม่ต้องกินทุกวัน, ประสิทธิภาพสูง",
        icon: <Syringe className="w-8 h-8" />,
        color: "bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400",
        effectiveness: "94%",
    },
];

export default function PreventionTypesPage() {
    return (
        <div className="min-h-screen bg-zinc-50 dark:bg-black font-sans">


            <main className="pt-32 pb-24 px-4">
                <div className="max-w-6xl mx-auto space-y-16">

                    <div className="text-center space-y-6">
                        <Reveal width="100%" direction="down">
                            <div className="w-20 h-20 mx-auto bg-purple-100 dark:bg-purple-900/30 rounded-3xl flex items-center justify-center text-purple-600 dark:text-purple-400">
                                <Pill className="w-10 h-10" />
                            </div>
                        </Reveal>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-white">
                            <StaggerText text="ประเภทการคุมกำเนิด" />
                        </h1>
                        <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
                            การคุมกำเนิดมีหลายวิธี แต่ละวิธีมีข้อดีและข้อจำกัดต่างกัน เลือกวิธีที่ "ใช่" สำหรับคู่ของคุณ
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {methods.map((method, idx) => (
                            <Reveal key={method.id} width="100%" delay={idx * 0.1}>
                                <motion.div
                                    whileHover={{ y: -5 }}
                                    className="bg-white dark:bg-zinc-900 rounded-3xl p-6 border border-zinc-100 dark:border-zinc-800 shadow-sm hover:shadow-xl transition-all group"
                                >
                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${method.color}`}>
                                        {method.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">{method.name}</h3>

                                    <div className="flex items-center gap-2 mb-4">
                                        <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">ประสิทธิภาพ</span>
                                        <span className="px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white font-bold text-sm">
                                            {method.effectiveness}
                                        </span>
                                    </div>

                                    <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6 h-20">
                                        {method.desc}
                                    </p>

                                    <div className="p-4 bg-zinc-50 dark:bg-zinc-950/50 rounded-2xl">
                                        <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-200 mb-1 flex items-center gap-2">
                                            <Info className="w-4 h-4 text-teal-500" /> ข้อดี
                                        </p>
                                        <p className="text-sm text-zinc-500 dark:text-zinc-400">{method.pros}</p>
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
