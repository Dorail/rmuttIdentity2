'use client';

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import FloatingHeart from "@/components/ui/FloatingHeart";
import AssessmentBox from "@/components/assessment/AssessmentBox";

export default function GlobalAssessment() {
    const [isAssessmentOpen, setIsAssessmentOpen] = useState(false);

    return (
        <>
            <FloatingHeart onClick={() => setIsAssessmentOpen(true)} />
            <AnimatePresence>
                {isAssessmentOpen && <AssessmentBox onClose={() => setIsAssessmentOpen(false)} />}
            </AnimatePresence>
        </>
    );
}
