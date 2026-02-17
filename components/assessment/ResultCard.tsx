import { QrCode, MessageCircle } from 'lucide-react';

type ResultCardProps = {
    score: number;
    onReset: () => void;
};

export default function ResultCard({ score, onReset }: ResultCardProps) {
    let status = "";
    let description = "";
    let colorClass = "";
    let bgClass = "";

    // Scoring Logic
    if (score <= 5) {
        status = "ยอดเยี่ยมมากครับ! 🛡️";
        description = "คุณมีความรู้ความเข้าใจเรื่องการป้องกันดีมากครับ ขอให้รักษามาตรฐานนี้ต่อไปนะ! แต่ถ้ามีข้อสงสัยหรืออยากแชร์ประสบการณ์ดีๆ ก็สแกน QR Code เข้ามาคุยกันใน OpenChat ได้เลยครับ";
        colorClass = "text-emerald-600 dark:text-emerald-400";
        bgClass = "bg-emerald-50 dark:bg-emerald-900/10 border-emerald-200 dark:border-emerald-800";
    } else if (score <= 10) {
        status = "ระวังอีกนิดนะครับ! ⚠️";
        description = "มีความเสี่ยงปานกลางครับ อาจจะมีบางจุดที่เผลอละเลยไปบ้าง ไม่ต้องกังวลนะ ลองเข้ามาปรึกษาพี่ๆ ใน OpenChat ดูไหมครับ มีคำแนะนำดีๆ และเพื่อนๆ รอซัพพอร์ตเพียบเลย";
        colorClass = "text-amber-600 dark:text-amber-400";
        bgClass = "bg-amber-50 dark:bg-amber-900/10 border-amber-200 dark:border-amber-800";
    } else {
        status = "ต้องดูแลเป็นพิเศษนะครับ 🚨";
        description = "มีความเสี่ยงสูงครับ อาจจะมีความเข้าใจที่คลาดเคลื่อนไปบ้าง แต่อย่าเพิ่งตกใจไปนะ อยากให้รีบเข้ามาคุยกับพวกเราใน OpenChat เลยครับ มีผู้เชี่ยวชาญพร้อมให้คำปรึกษาแบบส่วนตัวและเป็นกันเองสุดๆ ครับ";
        colorClass = "text-rose-600 dark:text-rose-400";
        bgClass = "bg-rose-50 dark:bg-rose-900/10 border-rose-200 dark:border-rose-800";
    }

    return (
        <div className={`w-full max-w-md mx-auto p-6 md:p-8 rounded-3xl text-center space-y-4 md:space-y-6 border ${bgClass} animate-in fade-in zoom-in duration-300`}>
            <div className="space-y-2">
                <h3 className={`text-xl md:text-2xl font-bold ${colorClass}`}>{status}</h3>
                <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-300">{description}</p>
            </div>

            <div className="flex flex-col items-center justify-center gap-6">
                <div className="p-3 bg-white dark:bg-black rounded-2xl border border-zinc-100 dark:border-zinc-800 shadow-sm">
                    {/* Placeholder for QR Code */}
                    <div className="w-32 h-32 md:w-40 md:h-40 bg-zinc-100 dark:bg-zinc-800 rounded-xl flex items-center justify-center text-zinc-400">
                        <div className="text-center space-y-2">
                            <QrCode className="w-10 h-10 md:w-12 md:h-12 mx-auto" />
                            <span className="text-[10px] md:text-xs block">QR Code</span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-3 w-full">
                    <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                        สแกน หรือ กดปุ่มด้านล่าง
                    </p>
                    <a
                        href="https://line.me" // Replace with actual Line URL
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#06C755] hover:bg-[#05b64d] text-white font-bold transition-all shadow-lg shadow-green-500/20 active:scale-95"
                    >
                        <MessageCircle className="w-5 h-5" />
                        <span>แอดไลน์ (OpenChat)</span>
                    </a>
                </div>
            </div>

            <button
                onClick={onReset}
                className="block w-full py-3 px-6 rounded-xl bg-zinc-900 dark:bg-zinc-100 text-white dark:text-black font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-transform active:scale-95 text-sm md:text-base"
            >
                ทำแบบประเมินอีกครั้ง
            </button>
        </div>
    );
}
