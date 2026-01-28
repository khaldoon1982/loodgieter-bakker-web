'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function FAQAccordion({ question, answer }: { question: string, answer: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={cn("border border-gray-200 rounded-xl overflow-hidden bg-white mb-3 transition-colors", isOpen ? "border-blue-200 shadow-sm" : "")}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center p-5 text-left font-semibold text-slate-800 hover:bg-gray-50 transition-colors"
            >
                <span className="pr-4">{question}</span>
                <ChevronDown className={cn("text-gray-400 flex-shrink-0 transition-transform duration-300", isOpen && "rotate-180 text-blue-500")} />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                    >
                        <div className="p-5 pt-0 text-gray-600 text-sm leading-relaxed border-t border-gray-50/0">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
