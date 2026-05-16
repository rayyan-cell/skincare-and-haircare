'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Heart, Leaf } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-gray-50 dark:from-gray-950 dark:via-primary/10 dark:to-gray-900">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg mb-6 border border-primary/10"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Personalized for South Asian Skin
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-primary via-primary-light to-secondary bg-clip-text text-transparent">
                Glow Naturally.
              </span>
              <br />
              <span className="text-gray-900 dark:text-white">
                Feel Confident.
              </span>
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Get personalized skincare and haircare recommendations designed specifically for South Asian skin tones and climate. Science-backed, beginner-friendly, and affordable.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                onClick={() => {
                  const event = new CustomEvent('navigate', { detail: 'quiz' });
                  window.dispatchEvent(event);
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary to-primary-light text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.button>

              <motion.button
                onClick={() => {
                  const event = new CustomEvent('navigate', { detail: 'about' });
                  window.dispatchEvent(event);
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-primary/20"
              >
                How It Works
              </motion.button>
            </div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-12 flex items-center space-x-8"
            >
              <div className="flex items-center space-x-2">
                <Heart className="w-5 h-5 text-secondary" />
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  10,000+ Routines Created
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Leaf className="w-5 h-5 text-primary" />
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Beginner Friendly
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right content - Image/Video placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800">
              {/* Placeholder for hero image/video */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary-light/10 to-secondary/20 dark:from-primary/40 dark:via-primary-light/20 dark:to-secondary/40">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Sparkles className="w-24 h-24 text-primary/30 mx-auto mb-4" />
                    <p className="text-primary/70 dark:text-primary-light/70 text-lg font-medium">Expert Curation</p>
                  </div>
                </div>
              </div>

              {/* Floating cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-10 right-10 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-4 rounded-2xl shadow-xl"
              >
                <p className="text-sm font-semibold text-gray-900 dark:text-white">✨ Personalized</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">Just for you</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute bottom-10 left-10 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-4 rounded-2xl shadow-xl"
              >
                <p className="text-sm font-semibold text-gray-900 dark:text-white">🌿 Natural</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">Science-backed</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
