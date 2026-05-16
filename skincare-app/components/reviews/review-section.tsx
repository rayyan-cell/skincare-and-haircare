'use client';

import { motion } from 'framer-motion';
import { Star, Quote, CheckCircle } from 'lucide-react';

interface Review {
  id: string;
  user: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
  avatar?: string;
}

const reviews: Review[] = [
  {
    id: 'rev-1',
    user: 'Ananya S.',
    rating: 5,
    comment: 'The recommendations for my oily skin during the Delhi monsoon were life-changing. I finally stopped breaking out!',
    date: 'April 2026',
    verified: true,
  },
  {
    id: 'rev-2',
    user: 'Zaid K.',
    rating: 5,
    comment: 'I never knew about hair porosity until I took the quiz. The suggested hair oils have made my curls so much more manageable.',
    date: 'May 2026',
    verified: true,
  },
  {
    id: 'rev-3',
    user: 'Priya M.',
    rating: 4,
    comment: 'Expert advice that actually understands South Asian hyperpigmentation. Very impressed with the science-backed approach.',
    date: 'May 2026',
    verified: true,
  },
  {
    id: 'rev-4',
    user: 'Rahul V.',
    rating: 5,
    comment: 'Finally a platform that addresses North Indian winters! My dry skin has never felt better. The moisturizer choice was spot on.',
    date: 'May 2026',
    verified: true,
  },
  {
    id: 'rev-5',
    user: 'Sana R.',
    rating: 5,
    comment: 'The blog articles are so informative. I learned so much about active ingredients without feeling overwhelmed.',
    date: 'May 2026',
    verified: true,
  },
  {
    id: 'rev-6',
    user: 'Meera J.',
    rating: 5,
    comment: 'Found the perfect sunscreen that doesnt leave a white cast on my skin tone. Thank you GlowGuide!',
    date: 'May 2026',
    verified: true,
  }
];

export function ReviewSection() {
  return (
    <section className="py-24 px-4 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center space-x-2 bg-primary/5 dark:bg-primary/20 px-4 py-2 rounded-full mb-4 border border-primary/10"
          >
            <Star className="w-4 h-4 text-secondary fill-secondary" />
            <span className="text-sm font-bold text-primary dark:text-secondary-light">Trusted by 10,000+ Users</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            The Wall of Love
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            See how GlowGuide is helping people across South Asia achieve their best skin and hair health.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-900 p-8 rounded-3xl relative border border-primary/5 shadow-sm hover:shadow-md transition-all"
            >
              <Quote className="absolute top-6 right-8 w-10 h-10 text-primary/10" />
              
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < review.rating ? 'text-secondary fill-secondary' : 'text-gray-300 dark:text-gray-700'
                    }`}
                  />
                ))}
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-6 italic">
                "{review.comment}"
              </p>

              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center space-x-1">
                    <span className="font-bold text-gray-900 dark:text-white">{review.user}</span>
                    {review.verified && <CheckCircle className="w-3 h-3 text-primary" />}
                  </div>
                  <span className="text-xs text-gray-500">{review.date}</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center border border-primary/20">
                  <span className="text-primary font-bold text-xs">{review.user[0]}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center border-t border-gray-100 dark:border-gray-800 pt-20">
          <div>
            <p className="text-4xl font-bold text-primary mb-2">98%</p>
            <p className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-widest font-semibold">User Satisfaction</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-primary mb-2">15k+</p>
            <p className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-widest font-semibold">Routines Created</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-primary mb-2">500+</p>
            <p className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-widest font-semibold">Curated Products</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-primary mb-2">24/7</p>
            <p className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-widest font-semibold">Expert Support</p>
          </div>
        </div>
      </div>
    </section>
  );
}
