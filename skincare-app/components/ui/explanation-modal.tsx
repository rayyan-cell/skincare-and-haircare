'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, X } from 'lucide-react';
import { useState } from 'react';

interface ExplanationModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

export function ExplanationModal({ isOpen, onClose, title, content }: ExplanationModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white dark:bg-gray-800 rounded-3xl shadow-2xl z-50 p-6"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-2">
                <HelpCircle className="w-6 h-6 text-purple-500" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {title}
                </h3>
              </div>
              <button
                onClick={onClose}
                className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            <div className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {content}
            </div>

            <button
              onClick={onClose}
              className="mt-6 w-full py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-full hover:shadow-lg transition-all"
            >
              Got it!
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
