'use client';

import { motion } from 'framer-motion';
import { HelpCircle, ArrowRight, ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import { ExplanationModal } from '../ui/explanation-modal';
import { SwipeCard } from '../ui/swipe-card';
import {
  quizExplanations,
  skinTypeOptions,
  hairTypeOptions,
  hairPorosityOptions,
  regionOptions,
  seasonOptions
} from '@/lib/data/quiz-data';
import { UserProfile } from '@/lib/data/recommendations';

interface QuizProps {
  onComplete: (profile: UserProfile) => void;
}

export function Quiz({ onComplete }: QuizProps) {
  const [step, setStep] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [profile, setProfile] = useState<Partial<UserProfile>>({});

  const steps = [
    {
      id: 'focusArea',
      title: 'What brings you here today?',
      subtitle: 'Choose your focus area',
      explanation: null,
      options: [
        { value: 'skincare', label: 'Skincare', emoji: '✨', description: 'Face care routine' },
        { value: 'haircare', label: 'Haircare', emoji: '💇', description: 'Hair care routine' },
        { value: 'both', label: 'Both', emoji: '🌟', description: 'Complete routine' }
      ]
    },
    {
      id: 'skinType',
      title: "What's your skin type?",
      subtitle: 'This helps us recommend the right products',
      explanation: quizExplanations.skinType,
      options: skinTypeOptions,
      skip: (p: Partial<UserProfile>) => p.focusArea === 'haircare'
    },
    {
      id: 'hairType',
      title: "What's your hair type?",
      subtitle: 'Natural texture matters',
      explanation: quizExplanations.hairType,
      options: hairTypeOptions,
      skip: (p: Partial<UserProfile>) => p.focusArea === 'skincare'
    },
    {
      id: 'hairPorosity',
      title: "What's your hair porosity?",
      subtitle: 'How well does your hair absorb moisture?',
      explanation: quizExplanations.hairPorosity,
      options: hairPorosityOptions,
      skip: (p: Partial<UserProfile>) => p.focusArea === 'skincare'
    },
    {
      id: 'region',
      title: 'Where do you live?',
      subtitle: 'Climate affects your skin and hair',
      explanation: quizExplanations.region,
      options: regionOptions
    },
    {
      id: 'season',
      title: "What's the current season?",
      subtitle: 'Your routine changes with weather',
      explanation: quizExplanations.season,
      options: seasonOptions
    },
    {
      id: 'routine',
      title: 'Current routine? (Optional)',
      subtitle: 'Tell us what you already use',
      explanation: null,
      isTextInput: true
    }
  ];

  const currentStep = steps[step];
  const shouldSkip = currentStep.skip?.(profile);

  const handleNext = (value?: string) => {
    let updatedProfile = { ...profile };

    if (currentStep.isTextInput) {
      updatedProfile.currentRoutine = value || '';
    } else if (value) {
      updatedProfile[currentStep.id as keyof UserProfile] = value as any;
    }

    setProfile(updatedProfile);

    if (step < steps.length - 1) {
      let nextStep = step + 1;
      // Use updatedProfile instead of profile for skip logic
      while (nextStep < steps.length && steps[nextStep].skip?.(updatedProfile)) {
        nextStep++;
      }
      setStep(nextStep);
    } else {
      onComplete(updatedProfile as UserProfile);
    }
  };

  const handleBack = () => {
    if (step > 0) {
      let prevStep = step - 1;
      while (prevStep >= 0 && steps[prevStep].skip?.(profile)) {
        prevStep--;
      }
      setStep(prevStep);
    }
  };

  if (shouldSkip) {
    handleNext();
    return null;
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-gray-50 dark:from-gray-950 dark:via-primary/10 dark:to-gray-900 py-20 px-4">
      <div className="max-w-2xl w-full">
        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Step {step + 1} of {steps.length}
            </span>
            <span className="text-sm font-medium text-primary dark:text-secondary-light">
              {Math.round(((step + 1) / steps.length) * 100)}%
            </span>
          </div>
          <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${((step + 1) / steps.length) * 100}%` }}
              transition={{ duration: 0.5 }}
              className="h-full bg-gradient-to-r from-primary to-primary-light"
            />
          </div>
        </div>

        {/* Question card */}
        <motion.div
          key={step}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 border border-primary/10"
        >
          <div className="flex items-start justify-between mb-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {currentStep.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                {currentStep.subtitle}
              </p>
            </div>
            {currentStep.explanation && (
              <button
                onClick={() => setShowExplanation(true)}
                className="p-2 rounded-full hover:bg-emerald-100 dark:hover:bg-emerald-900/30 transition-colors"
              >
                <HelpCircle className="w-6 h-6 text-primary" />
              </button>
            )}
          </div>

          {/* Text input */}
          {currentStep.isTextInput ? (
            <div className="space-y-4">
              <textarea
                placeholder="e.g., I use a basic cleanser and moisturizer..."
                className="w-full h-32 px-4 py-3 rounded-2xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:border-primary focus:outline-none resize-none"
                onChange={(e) => setProfile({ ...profile, currentRoutine: e.target.value })}
              />
              <button
                onClick={() => handleNext(profile.currentRoutine)}
                className="w-full py-4 bg-gradient-to-r from-primary to-primary-light text-white font-semibold rounded-full hover:shadow-lg transition-all flex items-center justify-center space-x-2"
              >
                <span>Continue</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          ) : (
            /* Option cards */
            <div className="grid grid-cols-1 gap-4">
              {currentStep.options?.map((option) => (
                <motion.button
                  key={option.value}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleNext(option.value)}
                  className="p-6 rounded-2xl border-2 border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary bg-white dark:bg-gray-900 transition-all text-left group"
                >
                  <div className="flex items-center space-x-4">
                    <span className="text-4xl">{option.emoji}</span>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-primary dark:group-hover:text-secondary-light transition-colors">
                        {option.label}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {option.description}
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
                  </div>
                </motion.button>
              ))}
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between items-center mt-6">
            {step > 0 ? (
              <button
                onClick={handleBack}
                className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-secondary-light transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Back</span>
              </button>
            ) : (
              <div />
            )}
            {currentStep.isTextInput && (
              <button
                onClick={() => handleNext('')}
                className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-secondary-light transition-colors"
              >
                Skip
              </button>
            )}
          </div>
        </motion.div>
      </div>

      {/* Explanation modal */}
      {currentStep.explanation && (
        <ExplanationModal
          isOpen={showExplanation}
          onClose={() => setShowExplanation(false)}
          title={currentStep.explanation.title}
          content={currentStep.explanation.content}
        />
      )}
    </section>
  );
}
