'use client';

import { motion } from 'framer-motion';
import { BookOpen, Calendar, Clock, ArrowRight, Search, Filter } from 'lucide-react';
import { useState } from 'react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: 'Skincare' | 'Haircare' | 'South Asian Tips' | 'Sun Protection';
  date: string;
  readTime: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 'post-1',
    title: 'Understanding South Asian Skin: Why Hyperpigmentation Happens',
    excerpt: 'Melanin-rich skin has unique needs. Learn why hyperpigmentation is more common and how to treat it safely using science-backed ingredients.',
    category: 'Skincare',
    date: 'May 10, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'post-2',
    title: 'The Ultimate Monsoon Haircare Guide',
    excerpt: 'High humidity can lead to frizz and scalp issues. Here are 5 expert tips to keep your hair healthy and strong during the rainy season.',
    category: 'Haircare',
    date: 'May 12, 2026',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1519735811561-9c1737f9403a?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'post-3',
    title: 'Sunscreen Myths Debunked: Do You Need It Indoors?',
    excerpt: 'Think you only need SPF when you go out? Think again. We explore why indoor sun protection is crucial for long-term skin health in South Asian climates.',
    category: 'Sun Protection',
    date: 'May 15, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1556228578-8c7c2f4a0050?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'post-4',
    title: 'Ancient Wisdom Meets Modern Science: Ayurvedic Ingredients for Glow',
    excerpt: 'From Turmeric to Ashwagandha, discover how traditional South Asian ingredients are being redefined by modern dermatology.',
    category: 'South Asian Tips',
    date: 'May 16, 2026',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1617503792322-3f931d8f3ed1?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'post-5',
    title: 'Double Cleansing: Is It Necessary for Oily Skin?',
    excerpt: 'The K-beauty trend has hit South Asia, but does it work for our humid climate? We break down the pros and cons for different skin types.',
    category: 'Skincare',
    date: 'May 18, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1556228578-567ba9fbb8d5?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'post-6',
    title: 'Managing Scalp Health in Hot & Humid Weather',
    excerpt: 'Sweat and pollution can wreak havoc on your scalp. Learn how to maintain a healthy environment for hair growth in tropical regions.',
    category: 'Haircare',
    date: 'May 20, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13df772ad5?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'post-7',
    title: 'Vitamin C vs. Niacinamide: Which One Do You Need?',
    excerpt: 'Both are powerhouses for brightening, but they work differently. Find out which one fits your skin concerns better.',
    category: 'Skincare',
    date: 'May 22, 2026',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'post-8',
    title: 'The Truth About Natural Skincare: DIY vs. Formulated',
    excerpt: 'Kitchen ingredients can be great, but they can also be irritating. We compare homemade masks with science-backed formulations.',
    category: 'South Asian Tips',
    date: 'May 24, 2026',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'post-9',
    title: 'Pollution Protection: A Shield for Urban Skin',
    excerpt: 'City smog can accelerate aging and dullness. Learn how to create a routine that acts as a barrier against environmental damage.',
    category: 'Skincare',
    date: 'May 26, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'post-10',
    title: 'Retinol 101 for Beginners',
    excerpt: 'Start your anti-aging journey safely. We explain how to introduce retinoids without the dreaded "purge" or irritation.',
    category: 'Skincare',
    date: 'May 28, 2026',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'post-11',
    title: 'The Secret to Glass Skin in Humidity',
    excerpt: 'Achieving that glow without looking greasy is an art. Discover the lightweight layering techniques for tropical climates.',
    category: 'South Asian Tips',
    date: 'May 30, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'post-12',
    title: 'Essential Pre-Wedding Skincare Timeline',
    excerpt: 'Planning for the big day? Here is your 6-month countdown to achieving a healthy, bridal glow the right way.',
    category: 'Skincare',
    date: 'June 2, 2026',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'post-13',
    title: 'Managing Acne Scars: Targeted Treatments',
    excerpt: 'Post-inflammatory hyperpigmentation (PIH) is common in melanin-rich skin. Learn how to fade scars effectively.',
    category: 'Skincare',
    date: 'June 5, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1594465919760-441fe5908ab0?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'post-14',
    title: 'The Humidity Factor: Moisturization in Heat',
    excerpt: 'Think you dont need moisturizer in 90% humidity? Think again. We help you choose the right texture for your climate.',
    category: 'Skincare',
    date: 'June 8, 2026',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1556228578-8c7c2f4a0050?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'post-15',
    title: 'K-Beauty for Brown Skin: What Works?',
    excerpt: 'From snail mucin to ginseng, we test popular Korean trends to see which ones are actually compatible with South Asian skin.',
    category: 'South Asian Tips',
    date: 'June 10, 2026',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'post-16',
    title: 'Seasonal Hair Loss: Why It Happens',
    excerpt: 'Notice more hair in your brush during seasonal changes? We explain the science of shedding and how to nourish your roots.',
    category: 'Haircare',
    date: 'June 12, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1519735811561-9c1737f9403a?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'post-17',
    title: 'Gentle Exfoliation: Ditching the Scrubs',
    excerpt: 'Physical scrubs can cause micro-tears. Discover the world of chemical exfoliants (AHAs/BHAs) for a smoother complexion.',
    category: 'Skincare',
    date: 'June 15, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'post-18',
    title: 'Hydration from Within: The Diet-Skin Link',
    excerpt: 'What you eat affects your glow. We explore how South Asian diets can be optimized for better skin and hair health.',
    category: 'South Asian Tips',
    date: 'June 18, 2026',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800'
  }
];

export function BlogSection() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const categories = ['All', 'Skincare', 'Haircare', 'South Asian Tips', 'Sun Protection'];

  const filteredPosts = activeCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <div className="py-24 px-4 bg-gradient-to-br from-emerald-50 via-white to-gray-50 dark:from-gray-950 dark:via-primary/5 dark:to-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg mb-4 border border-primary/10">
            <BookOpen className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Expert Insights
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            The GlowGuide Journal
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Deep-dives into ingredients, climate-specific guides, and the science of South Asian beauty.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 border border-primary/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all group border border-primary/5 flex flex-col h-full"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800';
                  }}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm text-primary dark:text-secondary-light text-[10px] font-bold rounded-full uppercase tracking-widest border border-primary/10">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center space-x-4 mb-3 text-xs text-gray-500 dark:text-gray-400">
                  <div className="flex items-center">
                    <Calendar className="w-3 h-3 mr-1 text-primary/60" />
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-3 h-3 mr-1 text-primary/60" />
                    {post.readTime}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
                  <a
                    href={`#blog-${post.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      alert('Full article coming soon! This is a demo of the blog section.');
                    }}
                    className="flex items-center text-primary dark:text-secondary font-bold text-sm hover:translate-x-1 transition-transform group cursor-pointer"
                  >
                    Read Full Article
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Newsletter / Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 relative overflow-hidden bg-primary rounded-3xl p-8 md:p-16 text-center text-white shadow-2xl"
        >
          {/* Decorative background element */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-secondary/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Stay Ahead in Your Skin Journey</h3>
            <p className="text-emerald-50 mb-8 text-lg">
              Subscribe to get seasonal guides and expert science-backed tips delivered straight to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-8 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder:text-emerald-100/60 focus:outline-none focus:ring-2 focus:ring-secondary/50"
              />
              <button className="px-10 py-4 bg-secondary hover:bg-secondary-light text-primary font-bold rounded-full transition-all shadow-xl hover:shadow-secondary/20">
                Subscribe
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
