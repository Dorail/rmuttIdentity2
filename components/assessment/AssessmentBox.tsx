'use client';

import { useState, useEffect, useRef } from 'react';
import { maleQuestions, femaleQuestions, Question } from '../../data/questions';
import ResultCard from './ResultCard';
import { MessageCircle, Send, X, MoreHorizontal, User, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

interface AssessmentBoxProps {
    onClose: () => void;
}

type Gender = 'male' | 'female' | null;

export default function AssessmentBox({ onClose }: AssessmentBoxProps) {
    const [started, setStarted] = useState(false);
    const [gender, setGender] = useState<Gender>(null);
    const [activeQuestions, setActiveQuestions] = useState<Question[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [finished, setFinished] = useState(false);
    const [chatHistory, setChatHistory] = useState<{ type: 'bot' | 'user'; text: string }[]>([]);
    const [isTyping, setIsTyping] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    // Auto-scroll to bottom of chat
    useEffect(() => {
        if (scrollRef.current) {
            if (finished) {
                // Scroll to top when finished
                scrollRef.current.scrollTop = 0;
            } else {
                // Scroll to bottom during chat
                scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
            }
        }
    }, [chatHistory, isTyping, started, gender, finished]);

    const currentQuestion = activeQuestions[currentQuestionIndex];

    const handleStart = () => {
        setStarted(true);
        setIsTyping(true);
        setTimeout(() => {
            setIsTyping(false);
            setChatHistory([{ type: 'bot', text: "สวัสดีครับ ก่อนอื่นเพื่อให้คำแนะนำที่ถูกต้อง ขอทราบเพศของคุณหน่อยครับ" }]);
        }, 800);
    };

    const handleGenderSelect = (selectedGender: 'male' | 'female') => {
        setChatHistory(prev => [...prev, { type: 'user', text: selectedGender === 'male' ? 'ชาย' : 'หญิง' }]);
        setGender(selectedGender);
        setActiveQuestions(selectedGender === 'male' ? maleQuestions : femaleQuestions);

        setIsTyping(true);
        setTimeout(() => {
            setIsTyping(false);
            const firstQuestion = selectedGender === 'male' ? maleQuestions[0] : femaleQuestions[0];
            setChatHistory(prev => [...prev, { type: 'bot', text: firstQuestion.text }]);
        }, 800);
    };

    const handleAnswer = (optionText: string, optionScore: number) => {
        // Add user answer
        setChatHistory(prev => [...prev, { type: 'user', text: optionText }]);

        // Calculate Score
        const newScore = score + optionScore;
        setScore(newScore);

        // Prepare next step
        setIsTyping(true);

        setTimeout(() => {
            setIsTyping(false);
            if (currentQuestionIndex < activeQuestions.length - 1) {
                const nextIndex = currentQuestionIndex + 1;
                setCurrentQuestionIndex(nextIndex);
                setChatHistory(prev => [...prev, { type: 'bot', text: activeQuestions[nextIndex].text }]);
            } else {
                setFinished(true);
            }
        }, 800);
    };

    const handleReset = () => {
        setStarted(false);
        setFinished(false);
        setScore(0);
        setGender(null);
        setCurrentQuestionIndex(0);
        setChatHistory([]);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
        >
            <div className="absolute inset-0" onClick={onClose}></div>
            <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className={`w-full max-w-md bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col ${finished ? 'h-auto max-h-[85dvh]' : 'h-[600px] max-h-[85dvh]'} relative z-10 m-auto`}
            >
                {/* Header */}
                <div className="bg-white dark:bg-zinc-900 p-4 border-b border-zinc-100 dark:border-zinc-800 flex items-center justify-between shrink-0 z-50 relative">
                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-md">
                                <User className="w-5 h-5" />
                            </div>
                            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white dark:border-zinc-900 rounded-full"></span>
                        </div>
                        <div>
                            <h3 className="font-bold text-zinc-900 dark:text-zinc-100">ที่ปรึกษา SafeSex</h3>
                            <p className="text-xs text-zinc-500 dark:text-zinc-400">
                                {started && !finished ? 'กำลังพิมพ์...' : 'ออนไลน์'}
                            </p>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-3 -mr-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors active:scale-90"
                        aria-label="Close"
                    >
                        <X className="w-6 h-6 text-zinc-500" />
                    </button>
                </div>

                {/* Content Area */}
                <div className={`flex-1 min-h-0 overflow-x-hidden p-4 space-y-4 scroll-smooth overflow-y-auto bg-zinc-50 dark:bg-zinc-950/50 overscroll-contain touch-pan-y`} ref={scrollRef}>
                    {!started ? (
                        <div className="flex flex-col items-center justify-center h-full space-y-6 py-8 text-center px-4">
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ repeat: Infinity, duration: 2 }}
                                className="w-20 h-20 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center text-indigo-600 dark:text-indigo-400"
                            >
                                <Heart className="w-10 h-10 fill-current" />
                            </motion.div>
                            <div>
                                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">ยินดีต้อนรับครับ</h2>
                                <p className="text-zinc-600 dark:text-zinc-400">
                                    ผม "ที่ปรึกษา SafeSex" จะมาช่วยประเมินความเสี่ยงและให้คำแนะนำที่เหมาะกับคุณ ไม่ต้องกังวล ทุกอย่างเป็นความลับครับ
                                </p>
                            </div>
                            <button
                                onClick={handleStart}
                                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold shadow-lg shadow-indigo-500/20 active:scale-95 transition-transform"
                            >
                                เริ่มคุยเลย
                            </button>
                        </div>
                    ) : finished ? (
                        <div className="flex flex-col items-center justify-center h-full w-full">
                            <ResultCard score={score} onReset={handleReset} />
                        </div>
                    ) : (
                        <>
                            {chatHistory.map((msg, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`max-w-[80%] p-3.5 rounded-2xl text-sm leading-relaxed shadow-sm
                      ${msg.type === 'user'
                                                ? 'bg-indigo-600 text-white rounded-br-none'
                                                : 'bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 rounded-tl-none border border-zinc-100 dark:border-zinc-700'
                                            }`}
                                    >
                                        {msg.text}
                                    </div>
                                </motion.div>
                            ))}

                            {isTyping && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="flex justify-start"
                                >
                                    <div className="bg-white dark:bg-zinc-800 p-4 rounded-2xl rounded-tl-none border border-zinc-100 dark:border-zinc-700 flex gap-1 items-center">
                                        <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} className="w-2 h-2 bg-zinc-400 rounded-full" />
                                        <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} className="w-2 h-2 bg-zinc-400 rounded-full" />
                                        <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} className="w-2 h-2 bg-zinc-400 rounded-full" />
                                    </div>
                                </motion.div>
                            )}
                        </>
                    )}
                </div>

                {/* Footer / Input Area */}
                {started && !finished && !isTyping && (
                    <div className="p-4 bg-white dark:bg-zinc-900 border-t border-zinc-100 dark:border-zinc-800">
                        {!gender ? (
                            <div className="grid grid-cols-2 gap-3">
                                <button
                                    onClick={() => handleGenderSelect('male')}
                                    className="py-4 rounded-xl bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 font-bold border-2 border-blue-100 dark:border-blue-800 hover:bg-blue-100 transition-colors"
                                >
                                    🙋‍♂️ เพศชาย
                                </button>
                                <button
                                    onClick={() => handleGenderSelect('female')}
                                    className="py-4 rounded-xl bg-pink-50 dark:bg-pink-900/20 text-pink-700 dark:text-pink-300 font-bold border-2 border-pink-100 dark:border-pink-800 hover:bg-pink-100 transition-colors"
                                >
                                    🙋‍♀️ เพศหญิง
                                </button>
                            </div>
                        ) : (
                            <div className="flex flex-col gap-2">
                                {currentQuestion?.options.map((option, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => handleAnswer(option.text, option.score)}
                                        className="w-full text-left px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-800 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 text-zinc-700 dark:text-zinc-300 hover:text-indigo-700 dark:hover:text-indigo-400 transition-colors text-sm font-medium border border-zinc-200 dark:border-zinc-700"
                                    >
                                        {option.text}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                )}
            </motion.div>
        </motion.div>
    );
}
