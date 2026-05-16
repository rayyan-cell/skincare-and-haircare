'use client';

import { motion } from 'framer-motion';
import { Sparkles, Clock, Info, ShoppingBag } from 'lucide-react';
import { Recommendation } from '@/lib/data/recommendations';
import { useState } from 'react';

interface ResultsProps {
  recommendations: Recommendation[];
  profile: any;
}

export function Results({ recommendations, profile }: ResultsProps) {
  const [expandedProduct, setExpandedProduct] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);

  const routineByTime = {
    AM: recommendations.filter(r => r.timeOfDay === 'AM'),
    PM: recommendations.filter(r => r.timeOfDay === 'PM'),
    Weekly: recommendations.filter(r => r.timeOfDay === 'Weekly'),
    'As needed': recommendations.filter(r => r.timeOfDay === 'As needed')
  };

  const handleSaveRoutine = () => {
    // Save to localStorage for now
    const routineData = {
      profile,
      recommendations,
      savedAt: new Date().toISOString()
    };
    localStorage.setItem('glowguide-routine', JSON.stringify(routineData));
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-indigo-900/20 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg mb-4">
            <Sparkles className="w-5 h-5 text-purple-500" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Your Personalized Routine
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Here's Your Perfect Routine
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Based on your {profile.skinType} skin, {profile.hairType} hair, and {profile.region} climate
          </p>
        </motion.div>

        {/* Routine sections */}
        <div className="space-y-8">
          {Object.entries(routineByTime).map(([timeOfDay, items], index) => {
            if (items.length === 0) return null;

            return (
              <motion.div
                key={timeOfDay}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="w-6 h-6 text-purple-500" />
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {timeOfDay} Routine
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {items.map((rec, idx) => (
                    <motion.div
                      key={rec.product.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 + idx * 0.05 }}
                      className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all"
                    >
                      {/* Product image placeholder */}
                      <div className="h-48 bg-gradient-to-br from-pink-200 to-purple-200 dark:from-pink-900/50 dark:to-purple-900/50 flex items-center justify-center">
                        <div className="text-center">
                          <Sparkles className="w-16 h-16 text-white/50 mx-auto mb-2" />
                          <p className="text-white/70 text-sm">Product Image</p>
                        </div>
                      </div>

                      <div className="p-6">
                        {/* Brand & Name */}
                        <div className="mb-3">
                          <p className="text-sm font-medium text-purple-600 dark:text-purple-400">
                            {rec.product.brand}
                          </p>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                            {rec.product.name}
                          </h3>
                        </div>

                        {/* Price */}
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-2xl font-bold text-gray-900 dark:text-white">
                            {rec.product.currency}{rec.product.price}
                          </span>
                          <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-medium rounded-full">
                            Affordable
                          </span>
                        </div>

                        {/* Why recommended */}
                        <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-4 mb-4">
                          <div className="flex items-start space-x-2">
                            <Info className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                                Why this?
                              </p>
                              <p className="text-sm text-gray-700 dark:text-gray-300">
                                {rec.reason}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Expandable details */}
                        <button
                          onClick={() => setExpandedProduct(
                            expandedProduct === rec.product.id ? null : rec.product.id
                          )}
                          className="w-full text-left text-purple-600 dark:text-purple-400 font-medium text-sm hover:underline mb-3"
                        >
                          {expandedProduct === rec.product.id ? 'Hide details' : 'Show details'}
                        </button>

                        {expandedProduct === rec.product.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="space-y-3 mb-4"
                          >
                            {/* Key ingredients */}
                            <div>
                              <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                                Key Ingredients:
                              </p>
                              <div className="flex flex-wrap gap-2">
                                {rec.product.keyIngredients.map((ingredient) => (
                                  <span
                                    key={ingredient}
                                    className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                                  >
                                    {ingredient}
                                  </span>
                                ))}
                              </div>
                            </div>

                            {/* Benefits */}
                            <div>
                              <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                                Benefits:
                              </p>
                              <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1">
                                {rec.product.benefits.map((benefit) => (
                                  <li key={benefit}>{benefit}</li>
                                ))}
                              </ul>
                            </div>

                            {/* How to use */}
                            <div>
                              <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                                How to Use:
                              </p>
                              <p className="text-sm text-gray-700 dark:text-gray-300">
                                {rec.product.howToUse}
                              </p>
                            </div>
                          </motion.div>
                        )}

                        {/* CTA button */}
                        <button className="w-full py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-full hover:shadow-lg transition-all flex items-center justify-center space-x-2">
                          <ShoppingBag className="w-5 h-5" />
                          <span>Find This Product</span>
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Save routine CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Love your routine?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Create an account to save your personalized routine and get reminders!
            </p>
            <button
              onClick={handleSaveRoutine}
              className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-full hover:shadow-lg transition-all"
            >
              {saved ? '✓ Routine Saved!' : 'Save My Routine'}
            </button>
            {saved && (
              <p className="text-sm text-green-600 dark:text-green-400 mt-2">
                Your routine has been saved locally!
              </p>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
