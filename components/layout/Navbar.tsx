'use client';

import { HeartHandshake, ChevronDown, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, Variants } from 'framer-motion';
import { usePathname } from 'next/navigation';
import ThemeToggle from '../ui/ThemeToggle';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        return scrollY.onChange((latest) => {
            setIsScrolled(latest > 50);
        });
    }, [scrollY]);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsOpen(false);
        setActiveDropdown(null);
    }, [pathname]);

    return (
        <>
            <nav
                className={`fixed top-0 inset-x-0 z-[100] transition-all duration-300 ${isScrolled
                    ? 'bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-sm border-b border-zinc-200 dark:border-zinc-800 py-3'
                    : 'bg-transparent py-5'
                    }`}
            >
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center">

                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-2 group">
                            <motion.div
                                whileHover={{ scale: 1.1, rotate: 10 }}
                                whileTap={{ scale: 0.9 }}
                                className={`p-2 rounded-xl transition-colors ${isScrolled ? 'bg-teal-50 dark:bg-teal-900/30' : 'bg-white/20 backdrop-blur-sm'}`}
                            >
                                <HeartHandshake className={`w-8 h-8 transition-colors ${isScrolled ? 'text-teal-600 dark:text-teal-400' : 'text-zinc-900 dark:text-white'
                                    }`} />
                            </motion.div>
                            <div className="flex flex-col leading-none">
                                <span className={`block font-black tracking-tight text-lg transition-transform group-hover:translate-x-1 duration-300`}>
                                    <span className={`transition-colors ${isScrolled ? 'text-teal-600 dark:text-teal-400' : 'text-zinc-900 dark:text-white'}`}>Safe</span>
                                    <span className={`transition-colors ${isScrolled ? 'text-zinc-500 dark:text-white' : 'text-zinc-900 dark:text-white'}`}>Sex</span>
                                </span>
                                <span className={`block pl-4 font-black tracking-tight text-lg transition-transform group-hover:translate-x-1 duration-300 delay-75`}>
                                    <span className={`transition-colors ${isScrolled ? 'text-teal-600 dark:text-teal-400' : 'text-zinc-900 dark:text-white'}`}>Safe</span>
                                    <span className={`transition-colors ${isScrolled ? 'text-zinc-500 dark:text-white' : 'text-zinc-900 dark:text-white'}`}>Mind</span>
                                </span>
                            </div>
                        </Link>

                        {/* Desktop Nav */}
                        <div className="hidden md:flex items-center gap-6">
                            <Link href="/" className={`font-medium hover:text-teal-600 dark:hover:text-teal-400 transition-colors ${pathname === '/' ? 'text-teal-600 dark:text-teal-400' : 'text-zinc-600 dark:text-zinc-300'}`}>
                                หน้าแรก
                            </Link>

                            {/* Dropdown: Education */}
                            <div className="relative group">
                                <button
                                    onClick={() => setActiveDropdown(activeDropdown === 'education' ? null : 'education')}
                                    className={`flex items-center gap-1 font-medium hover:text-teal-600 dark:hover:text-teal-400 transition-colors ${pathname.includes('/education/basics') ? 'text-teal-600 dark:text-teal-400' : 'text-zinc-600 dark:text-zinc-300'}`}
                                >
                                    ความรู้เบืองต้น <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'education' ? 'rotate-180' : 'group-hover:rotate-180'}`} />
                                </button>
                                <div className={`absolute top-full left-0 mt-2 w-56 transition-all duration-200 bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-2xl shadow-xl p-2 z-50
                                    ${activeDropdown === 'education'
                                        ? 'opacity-100 translate-y-0 visible'
                                        : 'opacity-0 translate-y-2 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible'
                                    }`}>
                                    <Link href="/education/basics" className="block px-4 py-3 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                                        🛡️ การป้องกันเบื้องต้น
                                    </Link>
                                    <Link href="/education/types" className="block px-4 py-3 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                                        💊 ประเภทการคุมกำเนิด
                                    </Link>
                                </div>
                            </div>

                            {/* Dropdown: Contraception */}
                            <div className="relative group">
                                <button
                                    onClick={() => setActiveDropdown(activeDropdown === 'contraception' ? null : 'contraception')}
                                    className={`flex items-center gap-1 font-medium hover:text-teal-600 dark:hover:text-teal-400 transition-colors ${pathname.includes('/education/contraception') ? 'text-teal-600 dark:text-teal-400' : 'text-zinc-600 dark:text-zinc-300'}`}
                                >
                                    คุมกำเนิด <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'contraception' ? 'rotate-180' : 'group-hover:rotate-180'}`} />
                                </button>
                                <div className={`absolute top-full left-0 mt-2 w-56 transition-all duration-200 bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-2xl shadow-xl p-2 z-50
                                    ${activeDropdown === 'contraception'
                                        ? 'opacity-100 translate-y-0 visible'
                                        : 'opacity-0 translate-y-2 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible'
                                    }`}>
                                    <Link href="/education/contraception/male" className="block px-4 py-3 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                                        👨 สำหรับผู้ชาย
                                    </Link>
                                    <Link href="/education/contraception/female" className="block px-4 py-3 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                                        👩 สำหรับผู้หญิง
                                    </Link>
                                </div>
                            </div>

                            {/* Dropdown: Unplanned Pregnancy */}
                            <div className="relative group">
                                <button
                                    onClick={() => setActiveDropdown(activeDropdown === 'pregnancy' ? null : 'pregnancy')}
                                    className={`flex items-center gap-1 font-medium hover:text-teal-600 dark:hover:text-teal-400 transition-colors ${pathname.includes('/education/pregnancy') ? 'text-teal-600 dark:text-teal-400' : 'text-zinc-600 dark:text-zinc-300'}`}
                                >
                                    ท้องไม่พร้อม <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'pregnancy' ? 'rotate-180' : 'group-hover:rotate-180'}`} />
                                </button>
                                <div className={`absolute top-full left-0 mt-2 w-56 transition-all duration-200 bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-2xl shadow-xl p-2 z-50
                                    ${activeDropdown === 'pregnancy'
                                        ? 'opacity-100 translate-y-0 visible'
                                        : 'opacity-0 translate-y-2 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible'
                                    }`}>
                                    <Link href="/education/pregnancy/risks" className="block px-4 py-3 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                                        ⚠️ ความเสี่ยง
                                    </Link>
                                    <Link href="/education/pregnancy/impact" className="block px-4 py-3 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                                        🛑 ผลกระทบ
                                    </Link>
                                    <Link href="/education/pregnancy/guidance" className="block px-4 py-3 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                                        🤝 ทางออก
                                    </Link>
                                </div>
                            </div>

                            <ThemeToggle />

                            <a href="/#assessment" className="px-5 py-2.5 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-black font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors shadow-lg shadow-zinc-900/10 dark:shadow-white/10">
                                ประเมินความเสี่ยง
                            </a>
                        </div>

                        {/* Mobile Menu Button - Minimalist Animated Toggle */}
                        <div className="flex items-center gap-2 md:hidden">
                            <ThemeToggle />
                            <motion.button
                                onClick={() => setIsOpen(!isOpen)}
                                className="md:hidden p-2 text-zinc-900 dark:text-white z-[110] relative focus:outline-none"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.8 }}
                                transition={{ duration: 0.2 }}
                            >
                                <svg width="23" height="23" viewBox="0 0 23 23">
                                    <motion.path
                                        fill="transparent"
                                        strokeWidth="3"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        variants={{
                                            closed: { d: "M 2 2.5 L 20 2.5" },
                                            open: { d: "M 3 16.5 L 17 2.5" }
                                        }}
                                        initial="closed"
                                        animate={isOpen ? "open" : "closed"}
                                    />
                                    <motion.path
                                        d="M 2 9.423 L 20 9.423"
                                        fill="transparent"
                                        strokeWidth="3"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        variants={{
                                            closed: { opacity: 1 },
                                            open: { opacity: 0 }
                                        }}
                                        initial="closed"
                                        animate={isOpen ? "open" : "closed"}
                                        transition={{ duration: 0.1 }}
                                    />
                                    <motion.path
                                        fill="transparent"
                                        strokeWidth="3"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        variants={{
                                            closed: { d: "M 2 16.346 L 20 16.346" },
                                            open: { d: "M 3 2.5 L 17 16.5" }
                                        }}
                                        initial="closed"
                                        animate={isOpen ? "open" : "closed"}
                                    />
                                </svg>
                            </motion.button>
                        </div>
                    </div>
                </div>

            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        key="mobile-nav-overlay"
                        initial={{ y: "-100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-[105] bg-white/95 dark:bg-black/95 backdrop-blur-xl md:hidden flex flex-col"
                    >
                        {/* Mobile Header */}
                        <div className="flex justify-between items-center p-4 border-b border-zinc-100 dark:border-zinc-800">
                            <div className="flex items-center gap-2">
                                <div className="p-2 rounded-xl bg-teal-50 dark:bg-teal-900/30">
                                    <HeartHandshake className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                                </div>
                                <div className="flex flex-col leading-none">
                                    <div className="block font-black tracking-tight text-lg">
                                        <span className="text-teal-600 dark:text-teal-400">Safe</span>
                                        <span className="text-zinc-500 dark:text-white">Sex</span>
                                    </div>
                                    <div className="block pl-4 font-black tracking-tight text-lg">
                                        <span className="text-teal-600 dark:text-teal-400">Safe</span>
                                        <span className="text-zinc-500 dark:text-white">Mind</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <ThemeToggle />
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors group"
                                >
                                    <motion.div
                                        whileHover={{ rotate: 90 }}
                                        whileTap={{ rotate: 90, scale: 0.9 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <X className="w-6 h-6 text-zinc-900 dark:text-white" />
                                    </motion.div>
                                </button>
                            </div>
                        </div>

                        {/* Mobile Content */}
                        <motion.div
                            className="flex-1 overflow-y-auto p-6 space-y-8"
                            initial="closed"
                            animate="open"
                            variants={{
                                open: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
                                closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
                            }}
                        >

                            <motion.div variants={{ open: { opacity: 1, y: 0 }, closed: { opacity: 0, y: 20 } }}>
                                <Link href="/" onClick={() => setIsOpen(false)} className="text-2xl font-bold text-zinc-900 dark:text-white block">
                                    หน้าแรก
                                </Link>
                            </motion.div>

                            {/* Section: Education */}
                            <motion.div variants={{ open: { opacity: 1, y: 0 }, closed: { opacity: 0, y: 20 } }} className="space-y-4">
                                <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-wider">ความรู้เบื้องต้น (Basic Knowledge)</h3>
                                <div className="grid gap-3">
                                    <Link href="/education/basics" onClick={() => setIsOpen(false)} className="flex items-center gap-3 p-3 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50">
                                        <span className="text-xl">🛡️</span>
                                        <span className="font-medium text-zinc-700 dark:text-zinc-200">การป้องกันเบื้องต้น</span>
                                    </Link>
                                    <Link href="/education/types" onClick={() => setIsOpen(false)} className="flex items-center gap-3 p-3 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50">
                                        <span className="text-xl">💊</span>
                                        <span className="font-medium text-zinc-700 dark:text-zinc-200">ประเภทการคุมกำเนิด</span>
                                    </Link>
                                </div>
                            </motion.div>

                            {/* Section: Contraception */}
                            <motion.div variants={{ open: { opacity: 1, y: 0 }, closed: { opacity: 0, y: 20 } }} className="space-y-4">
                                <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-wider">การคุมกำเนิด (Contraception)</h3>
                                <div className="grid grid-cols-2 gap-3">
                                    <Link href="/education/contraception/male" onClick={() => setIsOpen(false)} className="p-4 rounded-2xl bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-800 text-center">
                                        <span className="text-2xl block mb-2">👨</span>
                                        <span className="font-bold text-blue-700 dark:text-blue-300">สำหรับผู้ชาย</span>
                                    </Link>
                                    <Link href="/education/contraception/female" onClick={() => setIsOpen(false)} className="p-4 rounded-2xl bg-pink-50 dark:bg-pink-900/10 border border-pink-100 dark:border-pink-800 text-center">
                                        <span className="text-2xl block mb-2">👩</span>
                                        <span className="font-bold text-pink-700 dark:text-pink-300">สำหรับผู้หญิง</span>
                                    </Link>
                                </div>
                            </motion.div>

                            {/* Section: Unplanned Pregnancy */}
                            <motion.div variants={{ open: { opacity: 1, y: 0 }, closed: { opacity: 0, y: 20 } }} className="space-y-4">
                                <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-wider">ท้องไม่พร้อม (Unplanned Pregnancy)</h3>
                                <div className="space-y-2">
                                    <Link href="/education/pregnancy/risks" onClick={() => setIsOpen(false)} className="flex items-center justify-between p-3 rounded-2xl hover:bg-zinc-50 dark:hover:bg-zinc-900/50 border-b border-zinc-100 dark:border-zinc-800">
                                        <span className="font-medium text-zinc-700 dark:text-zinc-200">⚠️ ความเสี่ยง</span>
                                        <ChevronDown className="-rotate-90 w-4 h-4 text-zinc-400" />
                                    </Link>
                                    <Link href="/education/pregnancy/impact" onClick={() => setIsOpen(false)} className="flex items-center justify-between p-3 rounded-2xl hover:bg-zinc-50 dark:hover:bg-zinc-900/50 border-b border-zinc-100 dark:border-zinc-800">
                                        <span className="font-medium text-zinc-700 dark:text-zinc-200">🛑 ผลกระทบ</span>
                                        <ChevronDown className="-rotate-90 w-4 h-4 text-zinc-400" />
                                    </Link>
                                    <Link href="/education/pregnancy/guidance" onClick={() => setIsOpen(false)} className="flex items-center justify-between p-3 rounded-2xl hover:bg-zinc-50 dark:hover:bg-zinc-900/50 border-b border-zinc-100 dark:border-zinc-800">
                                        <span className="font-medium text-zinc-700 dark:text-zinc-200">🤝 ทางออก</span>
                                        <ChevronDown className="-rotate-90 w-4 h-4 text-zinc-400" />
                                    </Link>
                                </div>
                            </motion.div>

                            <motion.div variants={{ open: { opacity: 1, y: 0 }, closed: { opacity: 0, y: 20 } }} className="pt-8 pb-10">
                                <a href="/#assessment" onClick={() => setIsOpen(false)} className="block w-full py-4 rounded-2xl bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-bold text-center text-lg shadow-lg shadow-teal-500/30">
                                    ทำแบบประเมินความเสี่ยง
                                </a>
                            </motion.div>

                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence >
        </>
    );
}
