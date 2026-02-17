'use client';

import { Heart, ArrowUp } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="relative bg-zinc-50 dark:bg-black pt-20 pb-10 overflow-hidden border-t border-zinc-200 dark:border-zinc-800">
            {/* Decorative Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[50%] -left-[10%] w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-3xl opacity-50" />
                <div className="absolute -bottom-[50%] -right-[10%] w-[500px] h-[500px] bg-rose-500/5 rounded-full blur-3xl opacity-50" />
            </div>

            <div className="relative max-w-6xl mx-auto px-4 z-10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-start gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="space-y-4 text-left md:text-left">
                        <Link href="/" className="inline-block">
                            <h2 className="text-3xl font-black leading-none tracking-tight bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent">
                                <span className="block">SafeSex</span>
                                <span className="block pl-6">SafeMind</span>
                            </h2>
                        </Link>
                        <p className="text-zinc-500 dark:text-zinc-400 max-w-sm leading-relaxed">
                            พื้นที่ให้ความรู้เรื่องการตั้งครรภ์ไม่พร้อม สำหรับนักศึกษา <strong>มหาวิทยาลัยเทคโนโลยีราชมงคลธัญบุรี</strong>
                        </p>
                    </div>

                    {/* Social / Contact */}
                    <div className="space-y-4 flex flex-col items-start md:items-start">
                        <h3 className="font-bold text-zinc-900 dark:text-white">ติดต่อเรา</h3>
                        <div className="flex gap-4">
                            <motion.a
                                whileHover={{ y: -5, scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="https://line.me/" // Placeholder or actual link if known
                                target="_blank"
                                rel="noopener noreferrer"
                                className="h-12 px-6 rounded-full bg-[#00C300] text-white flex items-center gap-3 hover:bg-[#00b300] transition-colors shadow-lg shadow-green-500/30 hover:shadow-green-500/50"
                            >
                                {/* Line Logo SVG */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    <path d="M12 2C6.5 2 2 5.6 2 10.1c0 2.2 1.2 4.2 3.2 5.5-.3 1-.7 2.4-1.2 3.1-.2.3 0 .7.4.7.7 0 3.7-2.3 4.2-2.7.2.1 3.4.4 3.4.4C17.5 17.1 22 13.6 22 9.1 22 4.6 17.5 2 12 2zM9.8 12.8H7.3c-.3 0-.5-.2-.5-.5V8c0-.3.2-.5.5-.5s.5.2.5.5v3.8h2c.3 0 .5.2.5.5s-.3.5-.5.5zm2.7-2.5c0 .3-.2.5-.5.5s-.5-.2-.5-.5V8c0-.3.2-.5.5-.5s.5.2.5.5v2.3zm4.5 2.5h-2.5c-.3 0-.5-.2-.5-.5V8c0-.3.2-.5.5-.5s.5.2.5.5v3.8h2c.3 0 .5.2.5.5s-.3.5-.5.5zm2.5-2.5c0 .3-.2.5-.5.5s-.5-.2-.5-.5V8c0-.3.2-.5.5-.5s.5.2.5.5v2.3z" />
                                </svg>
                                <span className="font-bold text-base">Line OpenChat</span>
                            </motion.a>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-zinc-200 dark:border-zinc-800 mb-8" />

                {/* Bottom Bar - The Gimmick */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <motion.div
                        className="flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-zinc-900 shadow-sm border border-zinc-100 dark:border-zinc-800"
                        whileHover={{ scale: 1.02 }}
                    >
                        <span className="text-sm font-medium bg-gradient-to-r from-rose-500 to-orange-500 bg-clip-text text-transparent flex items-center gap-2">
                            Made with <Heart className="w-4 h-4 text-rose-500 fill-current animate-heartbeat" /> Rmutt Identity By Sec 1
                        </span>
                    </motion.div>

                    <button
                        onClick={scrollToTop}
                        className="flex items-center gap-2 text-sm font-bold text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition-colors group"
                    >
                        กลับขึ้นบนสุด
                        <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-1" />
                    </button>
                </div>
            </div>

            <style jsx global>{`
                @keyframes heartbeat {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.1); }
                }
                .animate-heartbeat {
                    animation: heartbeat 1s ease-in-out infinite;
                }
            `}</style>
        </footer>
    );
}
