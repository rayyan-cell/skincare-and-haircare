'use client';

import { useState, useEffect } from 'react';
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Quiz } from "@/components/quiz/quiz";
import { Results } from "@/components/results/results";
import { UserProfile, getRecommendations, Recommendation } from "@/lib/data/recommendations";

export default function Home() {
  const [currentView, setCurrentView] = useState<'home' | 'quiz' | 'results' | 'blog' | 'about'>('home');
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);

  useEffect(() => {
    const handleNavigate = (e: Event) => {
      const customEvent = e as CustomEvent;
      const section = customEvent.detail;
      if (section === 'quiz') {
        setCurrentView('quiz');
      } else if (section === 'about') {
        setCurrentView('about');
      }
    };

    window.addEventListener('navigate', handleNavigate);
    return () => window.removeEventListener('navigate', handleNavigate);
  }, []);

  const handleQuizComplete = (profile: UserProfile) => {
    console.log('Quiz completed with profile:', profile);
    setUserProfile(profile);
    const recs = getRecommendations(profile);
    console.log('Generated recommendations:', recs);
    setRecommendations(recs);
    setCurrentView('results');
  };

  const handleNavigation = (section: string) => {
    if (section === 'home') {
      setCurrentView('home');
    } else if (section === 'quiz') {
      setCurrentView('quiz');
    } else if (section === 'blog') {
      setCurrentView('blog');
    } else if (section === 'about') {
      setCurrentView('about');
    }
  };

  const handleStartQuiz = () => {
    setCurrentView('quiz');
  };

  return (
    <div className="min-h-screen">
      <Header onNavigate={handleNavigation} />

      {currentView === 'home' && (
        <div id="home">
          <Hero />
          {/* Quick start button overlay */}
          <div className="fixed bottom-8 right-8 z-40">
            <button
              onClick={handleStartQuiz}
              className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-full shadow-2xl hover:shadow-3xl transition-all hover:scale-105"
            >
              Start Quiz
            </button>
          </div>
        </div>
      )}

      {currentView === 'quiz' && (
        <div id="quiz" className="pt-16">
          <Quiz onComplete={handleQuizComplete} />
        </div>
      )}

      {currentView === 'results' && userProfile && (
        <div id="results" className="pt-16">
          <Results
            recommendations={recommendations}
            profile={userProfile}
          />
        </div>
      )}

      {currentView === 'blog' && (
        <div id="blog" className="pt-16 min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-indigo-900/20">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Blog Coming Soon</h1>
            <p className="text-gray-600 dark:text-gray-300">We're working on amazing skincare & haircare content for you!</p>
          </div>
        </div>
      )}

      {currentView === 'about' && (
        <div id="about" className="pt-16 min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-indigo-900/20">
          <div className="max-w-2xl mx-auto text-center px-4">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">About GlowGuide</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
              GlowGuide is your personalized skincare and haircare companion, designed specifically for South Asian skin tones and climates.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              We understand that South Asian skin has unique needs - from dealing with hyperpigmentation to managing humidity and pollution. Our recommendations are science-backed, beginner-friendly, and affordable.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
