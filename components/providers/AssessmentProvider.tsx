'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AssessmentContextType {
    isAssessmentOpen: boolean;
    openAssessment: () => void;
    closeAssessment: () => void;
}

const AssessmentContext = createContext<AssessmentContextType | undefined>(undefined);

export function AssessmentProvider({ children }: { children: ReactNode }) {
    const [isAssessmentOpen, setIsAssessmentOpen] = useState(false);

    const openAssessment = () => setIsAssessmentOpen(true);
    const closeAssessment = () => setIsAssessmentOpen(false);

    return (
        <AssessmentContext.Provider value={{ isAssessmentOpen, openAssessment, closeAssessment }}>
            {children}
        </AssessmentContext.Provider>
    );
}

export function useAssessment() {
    const context = useContext(AssessmentContext);
    if (context === undefined) {
        throw new Error('useAssessment must be used within an AssessmentProvider');
    }
    return context;
}
