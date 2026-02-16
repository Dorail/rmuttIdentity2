import { QrCode } from 'lucide-react';

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
        status = "ควรติดตาม";
        description = "คุณมีความเสี่ยงต่ำ ถือว่ามีความรู้ความเข้าใจดีครับ แต่ก็อย่าประมาท! สามารถสแกน QR Code เข้าร่วม OpenChat (Line) เพื่อพูดคุยแลกเปลี่ยนประสบการณ์กับเพื่อนๆ ได้เลยครับ";
        colorClass = "text-green-600 dark:text-green-400";
        bgClass = "bg-green-50 dark:bg-green-900/10 border-green-200 dark:border-green-800";
    } else if (score <= 10) {
        status = "ควรติดตามอย่างใกล้ชิด";
        description = "คุณมีความเสี่ยงปานกลาง ควรเพิ่มความระมัดระวัง แนะนำให้สแกน QR Code เข้าร่วม OpenChat (Line) เพื่อปรึกษาพี่ๆ และผู้เชี่ยวชาญได้ตลอดเวลาครับ";
        colorClass = "text-yellow-600 dark:text-yellow-400";
        bgClass = "bg-yellow-50 dark:bg-yellow-900/10 border-yellow-200 dark:border-yellow-800";
    } else {
        status = "ควรติดตามเร่งด่วน";
        description = "คุณมีความเสี่ยงสูง อาจมีความเข้าใจคลาดเคลื่อนบางอย่าง แนะนำให้รีบสแกน QR Code เข้าร่วม OpenChat (Line) เพื่อปรึกษาเจ้าหน้าที่แบบส่วนตัวและเร่งด่วนครับ";
        colorClass = "text-red-600 dark:text-red-400";
        bgClass = "bg-red-50 dark:bg-red-900/10 border-red-200 dark:border-red-800";
    }

    return (
        <div className={`w-full max-w-md mx-auto p-6 md:p-8 rounded-3xl text-center space-y-4 md:space-y-6 border ${bgClass} animate-in fade-in zoom-in duration-300`}>
            <div className="space-y-2">
                <h3 className={`text-xl md:text-2xl font-bold ${colorClass}`}>{status}</h3>
                <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-300">{description}</p>
            </div>

            <div className="p-3 md:p-4 bg-white dark:bg-black rounded-2xl border border-zinc-100 dark:border-zinc-800 shadow-sm inline-block">
                {/* Placeholder for QR Code */}
                <div className="w-32 h-32 md:w-48 md:h-48 bg-zinc-100 dark:bg-zinc-800 rounded-xl flex items-center justify-center text-zinc-400">
                    <div className="text-center space-y-2">
                        <QrCode className="w-10 h-10 md:w-12 md:h-12 mx-auto" />
                        <span className="text-[10px] md:text-xs block">QR Code</span>
                    </div>
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
