'use client';

import { AnimatePresence } from 'framer-motion';
import FloatingHeart from "@/components/ui/FloatingHeart";
import AssessmentBox from "@/components/assessment/AssessmentBox";
import { useAssessment } from "../providers/AssessmentProvider";

export default function GlobalAssessment() {
    const { isAssessmentOpen, openAssessment, closeAssessment } = useAssessment();

    return (
        <>
            <FloatingHeart onClick={openAssessment} />
            <AnimatePresence>
                {isAssessmentOpen && <AssessmentBox onClose={closeAssessment} />}
            </AnimatePresence>
        </>
    );
}
