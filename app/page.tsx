'use client'; // Needed for state layout

import { useState } from 'react';
import Reveal from "@/components/ui/Reveal";
import EducationContent from "@/components/content/EducationContent";
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import StaggerText from "@/components/ui/StaggerText";
import { useAssessment } from "../components/providers/AssessmentProvider";


export default function Home() {
  const { openAssessment } = useAssessment();
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div className="min-h-screen bg-white dark:bg-black font-sans selection:bg-rose-100 selection:text-rose-900 overflow-x-hidden">


      <main className="relative z-10 w-full">

        <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
          {/* Animated Background Gradients */}
          <div className="absolute inset-0 bg-white dark:bg-zinc-950">
            <motion.div
              animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] bg-gradient-to-br from-teal-200/40 to-blue-200/40 dark:from-teal-900/20 dark:to-blue-900/20 rounded-full blur-3xl will-change-transform backface-hidden"
            />
            <motion.div
              animate={{ scale: [1, 1.3, 1], x: [0, -50, 0] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-[20%] -left-[10%] w-[600px] h-[600px] bg-gradient-to-tr from-rose-200/40 to-orange-200/40 dark:from-rose-900/20 dark:to-orange-900/20 rounded-full blur-3xl will-change-transform backface-hidden"
            />
          </div>


          <motion.div
            style={{ y: y1, opacity }}
            className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-300 text-sm font-bold mb-6 border border-pink-200 dark:border-pink-800">
                Safe Sex, Safe Mind 💖 Rmutt University
              </span>
              <h1 className="text-5xl md:text-7xl font-black text-zinc-900 dark:text-white leading-tight mb-6 tracking-tight">
                <StaggerText text="รักให้เป็น..." className="block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-pink-500 to-purple-600">
                  อย่างปลอดภัย
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto leading-relaxed font-medium">
                พื้นที่ปลอดภัยสำหรับวัยรุ่น ยุคใหม่ เข้าใจเรื่องเพศ ป้องกันได้ และใช้ชีวิตอย่างมั่นใจ
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button
                onClick={openAssessment}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-zinc-900 to-zinc-700 dark:from-white dark:to-zinc-200 text-white dark:text-black font-bold text-lg hover:scale-105 transition-transform shadow-xl hover:shadow-2xl shadow-zinc-900/20 dark:shadow-white/10"
              >
                เช็คความเสี่ยงทันที
              </button>
              <a
                href="#education"
                className="px-8 py-4 rounded-full bg-white/50 dark:bg-white/10 backdrop-blur-md border border-white/50 dark:border-white/10 font-bold text-lg text-zinc-700 dark:text-white hover:bg-white/80 dark:hover:bg-white/20 transition-all shadow-lg"
              >
                เรียนรู้ก่อนสาย
              </a>
            </motion.div>
          </motion.div>
        </section>

        {/* Content Section */}
        <div className="max-w-6xl mx-auto px-4 pb-32">
          <EducationContent />
        </div>

      </main>

      {/* Floating Action Button */}

    </div >
  );
}
