export type SkinType = 'oily' | 'dry' | 'combination' | 'sensitive' | 'normal';
export type HairType = 'straight' | 'wavy' | 'curly' | 'coily';
export type HairPorosity = 'low' | 'medium' | 'high';
export type Region = 'north-india' | 'south-india' | 'pakistan' | 'bangladesh' | 'sri-lanka';
export type Season = 'summer' | 'monsoon' | 'winter';
export type ProductCategory = 'cleanser' | 'toner' | 'serum' | 'moisturizer' | 'sunscreen' | 'shampoo' | 'conditioner' | 'hair-oil' | 'hair-mask';

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: ProductCategory;
  price: number;
  currency: string;
  image: string;
  buyUrl?: string;
  description: string;
  keyIngredients: string[];
  benefits: string[];
  howToUse: string;
  bestFor: {
    skinTypes?: SkinType[];
    hairTypes?: HairType[];
    hairPorosity?: HairPorosity[];
    seasons?: Season[];
    regions?: Region[];
  };
  availableIn: string[];
  whyRecommended?: string;
}

export const skincareProducts: Product[] = [
  // CLEANSERS
  {
    id: 'cleanser-1',
    name: 'Salicylic Acid Face Wash',
    brand: 'Minimalist',
    category: 'cleanser',
    price: 349,
    currency: '₹',
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=800&h=600',
    buyUrl: 'https://www.beautyminimalist.com/products/salicylic-acid-2-lha-0-2-cleanser',
    description: 'Gentle foaming cleanser with 2% Salicylic Acid for oily and acne-prone skin',
    keyIngredients: ['Salicylic Acid 2%', 'Zinc PCA', 'Glycerin'],
    benefits: ['Unclogs pores', 'Reduces excess oil', 'Prevents breakouts'],
    howToUse: 'Apply on damp face, massage gently for 30 seconds, rinse with water. Use once daily (PM).',
    bestFor: {
      skinTypes: ['oily', 'combination'],
      seasons: ['summer', 'monsoon'],
      regions: ['north-india', 'south-india', 'pakistan', 'bangladesh']
    },
    availableIn: ['India', 'Pakistan'],
    whyRecommended: 'Perfect for humid climates where oily skin produces more sebum'
  },
  {
    id: 'cleanser-2',
    name: 'Hydrating Cleanser',
    brand: 'CeraVe',
    category: 'cleanser',
    price: 899,
    currency: '₹',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=800&h=600',
    buyUrl: 'https://www.nykaa.com/cerave-hydrating-facial-cleanser-for-normal-to-dry-skin/p/12470659',
    description: 'Non-foaming cleanser with ceramides for dry and sensitive skin',
    keyIngredients: ['Ceramides', 'Hyaluronic Acid', 'Glycerin'],
    benefits: ['Maintains skin barrier', 'Hydrates without stripping', 'Gentle formula'],
    howToUse: 'Apply on damp face, massage gently, rinse with lukewarm water. Use twice daily.',
    bestFor: {
      skinTypes: ['dry', 'sensitive', 'normal'],
      seasons: ['winter', 'summer'],
      regions: ['north-india', 'pakistan']
    },
    availableIn: ['India', 'Pakistan', 'Bangladesh'],
    whyRecommended: 'Gentle enough for sensitive South Asian skin, maintains natural moisture'
  },
  {
    id: 'cleanser-3',
    name: 'Green Tea Face Wash',
    brand: 'Plum',
    category: 'cleanser',
    price: 395,
    currency: '₹',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800&h=600',
    buyUrl: 'https://plumgoodness.com/products/green-tea-pore-cleansing-face-wash',
    description: 'Antioxidant-rich cleanser for all skin types',
    keyIngredients: ['Green Tea Extract', 'Glycolic Acid', 'Aloe Vera'],
    benefits: ['Removes pollution', 'Brightens skin', 'Gentle exfoliation'],
    howToUse: 'Massage onto wet face, rinse thoroughly. Use morning and night.',
    bestFor: {
      skinTypes: ['normal', 'combination', 'oily'],
      seasons: ['summer', 'monsoon', 'winter'],
      regions: ['north-india', 'south-india', 'bangladesh', 'sri-lanka']
    },
    availableIn: ['India', 'Bangladesh'],
    whyRecommended: 'Great for pollution-heavy cities, gentle enough for daily use'
  },

  // SERUMS
  {
    id: 'serum-1',
    name: 'Niacinamide 10% Serum',
    brand: 'Minimalist',
    category: 'serum',
    price: 599,
    currency: '₹',
    image: 'https://images.unsplash.com/photo-1620917670397-dc7bc43e813e?auto=format&fit=crop&q=80&w=800&h=600',
    buyUrl: 'https://www.beautyminimalist.com/products/niacinamide-10-euk-134-zinc',
    description: 'High-strength niacinamide for oil control and brightening',
    keyIngredients: ['Niacinamide 10%', 'Zinc 1%'],
    benefits: ['Reduces hyperpigmentation', 'Controls oil', 'Minimizes pores', 'Evens skin tone'],
    howToUse: 'Apply 2-3 drops on clean face before moisturizer. Use once daily (PM) initially.',
    bestFor: {
      skinTypes: ['oily', 'combination', 'normal'],
      seasons: ['summer', 'monsoon', 'winter'],
      regions: ['north-india', 'south-india', 'pakistan', 'bangladesh', 'sri-lanka']
    },
    availableIn: ['India', 'Pakistan'],
    whyRecommended: 'Excellent for treating post-acne marks common in melanin-rich skin'
  },
  {
    id: 'serum-2',
    name: 'Vitamin C 10% Serum',
    brand: 'Dot & Key',
    category: 'serum',
    price: 895,
    currency: '₹',
    image: 'https://images.unsplash.com/photo-1573461160327-b450ce3d8e7f?auto=format&fit=crop&q=80&w=800&h=600',
    buyUrl: 'https://www.dotandkey.com/products/glow-revealing-vitamin-c-serum',
    description: 'Stable Vitamin C for brightening and sun damage repair',
    keyIngredients: ['Ethyl Ascorbic Acid 10%', 'Kakadu Plum', 'Ferulic Acid'],
    benefits: ['Brightens skin', 'Fades dark spots', 'Boosts collagen', 'Antioxidant protection'],
    howToUse: 'Apply 3-4 drops on clean face in the morning before sunscreen.',
    bestFor: {
      skinTypes: ['normal', 'dry', 'combination'],
      seasons: ['winter', 'monsoon'],
      regions: ['north-india', 'south-india', 'pakistan', 'bangladesh']
    },
    availableIn: ['India'],
    whyRecommended: 'Stable formula works well in humid climates, targets hyperpigmentation'
  },
  {
    id: 'serum-3',
    name: 'Hyaluronic Acid 2% Serum',
    brand: 'The Ordinary',
    category: 'serum',
    price: 599,
    currency: '₹',
    image: 'https://images.unsplash.com/photo-1556228578-8c7c2f4a0050?auto=format&fit=crop&q=80&w=800&h=600',
    buyUrl: 'https://www.nykaa.com/the-ordinary-hyaluronic-acid-2percent-plus-b5/p/5003154',
    description: 'Multi-weight hyaluronic acid for deep hydration',
    keyIngredients: ['Hyaluronic Acid 2%', 'Vitamin B5'],
    benefits: ['Deep hydration', 'Plumps skin', 'Reduces fine lines'],
    howToUse: 'Apply on damp skin, follow with moisturizer. Use AM and PM.',
    bestFor: {
      skinTypes: ['dry', 'normal', 'combination'],
      seasons: ['winter', 'summer'],
      regions: ['north-india', 'pakistan']
    },
    availableIn: ['India', 'Pakistan', 'Bangladesh'],
    whyRecommended: 'Essential for dry winter months in North India/Pakistan'
  },

  // MOISTURIZERS
  {
    id: 'moisturizer-1',
    name: 'Lightweight Gel Moisturizer',
    brand: 'Neutrogena',
    category: 'moisturizer',
    price: 499,
    currency: '₹',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=800&h=600',
    buyUrl: 'https://www.nykaa.com/neutrogena-hydro-boost-water-gel/p/5387',
    description: 'Oil-free gel moisturizer for oily and combination skin',
    keyIngredients: ['Hyaluronic Acid', 'Glycerin', 'Dimethicone'],
    benefits: ['Non-greasy hydration', 'Absorbs quickly', 'Won\'t clog pores'],
    howToUse: 'Apply on damp skin after serum. Use AM and PM.',
    bestFor: {
      skinTypes: ['oily', 'combination'],
      seasons: ['summer', 'monsoon'],
      regions: ['south-india', 'bangladesh', 'sri-lanka']
    },
    availableIn: ['India', 'Pakistan', 'Bangladesh'],
    whyRecommended: 'Perfect for high humidity regions, won\'t feel heavy'
  },
  {
    id: 'moisturizer-2',
    name: 'Ceramide Moisturizing Cream',
    brand: 'CeraVe',
    category: 'moisturizer',
    price: 1099,
    currency: '₹',
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=800&h=600',
    buyUrl: 'https://www.nykaa.com/cerave-moisturising-cream-for-dry-to-very-dry-skin/p/12470663',
    description: 'Rich cream with ceramides for dry and sensitive skin',
    keyIngredients: ['Ceramides', 'Hyaluronic Acid', 'Niacinamide'],
    benefits: ['Repairs skin barrier', 'Long-lasting hydration', 'Soothes irritation'],
    howToUse: 'Apply generously on face and neck. Use AM and PM.',
    bestFor: {
      skinTypes: ['dry', 'sensitive', 'normal'],
      seasons: ['winter'],
      regions: ['north-india', 'pakistan']
    },
    availableIn: ['India', 'Pakistan', 'Bangladesh'],
    whyRecommended: 'Essential for harsh winter months, repairs compromised skin barrier'
  },
  {
    id: 'moisturizer-3',
    name: 'Sepicalm Moisturizer',
    brand: 'Minimalist',
    category: 'moisturizer',
    price: 449,
    currency: '₹',
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=800&h=600',
    buyUrl: 'https://www.beautyminimalist.com/products/sepicalm-3-oats-face-moisturizer',
    description: 'Soothing moisturizer for sensitive and irritated skin',
    keyIngredients: ['Sepicalm 3%', 'Ceramides', 'Oat Extract'],
    benefits: ['Calms redness', 'Reduces sensitivity', 'Strengthens barrier'],
    howToUse: 'Apply on clean, damp skin. Use twice daily.',
    bestFor: {
      skinTypes: ['sensitive', 'dry', 'combination'],
      seasons: ['summer', 'monsoon', 'winter'],
      regions: ['north-india', 'south-india', 'pakistan', 'bangladesh']
    },
    availableIn: ['India', 'Pakistan'],
    whyRecommended: 'Great for skin sensitized by pollution and harsh weather'
  },

  // SUNSCREENS
  {
    id: 'sunscreen-1',
    name: 'Aqua Gel Sunscreen SPF 50',
    brand: 'Minimalist',
    category: 'sunscreen',
    price: 449,
    currency: '₹',
    image: 'https://images.unsplash.com/photo-1556228578-8c7c2f4a0050?auto=format&fit=crop&q=80&w=800&h=600',
    buyUrl: 'https://www.beautyminimalist.com/products/sunscreen-spf-50',
    description: 'Lightweight gel sunscreen with no white cast',
    keyIngredients: ['Zinc Oxide', 'Titanium Dioxide', 'Niacinamide'],
    benefits: ['Broad spectrum protection', 'No white cast', 'Matte finish', 'Water resistant'],
    howToUse: 'Apply generously 15 minutes before sun exposure. Reapply every 2-3 hours.',
    bestFor: {
      skinTypes: ['oily', 'combination', 'normal'],
      seasons: ['summer', 'monsoon', 'winter'],
      regions: ['north-india', 'south-india', 'pakistan', 'bangladesh', 'sri-lanka']
    },
    availableIn: ['India', 'Pakistan'],
    whyRecommended: 'CRITICAL for melanin-rich skin to prevent hyperpigmentation. No white cast!'
  },
  {
    id: 'sunscreen-2',
    name: 'Ultra Light Sunscreen SPF 50+',
    brand: 'Neutrogena',
    category: 'sunscreen',
    price: 699,
    currency: '₹',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=800&h=600',
    buyUrl: 'https://www.nykaa.com/neutrogena-ultra-sheer-dry-touch-sunblock-spf-50-plus/p/5381',
    description: 'Ultra-light formula for daily use',
    keyIngredients: ['Avobenzone', 'Octinoxate', 'Helioplex Technology'],
    benefits: ['Broad spectrum', 'Non-greasy', 'Fast absorbing'],
    howToUse: 'Apply as the last step of skincare. Reapply every 2 hours when outdoors.',
    bestFor: {
      skinTypes: ['oily', 'combination', 'normal', 'dry'],
      seasons: ['summer', 'monsoon', 'winter'],
      regions: ['north-india', 'south-india', 'pakistan', 'bangladesh', 'sri-lanka']
    },
    availableIn: ['India', 'Pakistan', 'Bangladesh'],
    whyRecommended: 'Essential daily protection against harsh South Asian sun'
  },
  {
    id: 'sunscreen-3',
    name: 'Matte Finish Sunscreen SPF 50',
    brand: 'Derma Co',
    category: 'sunscreen',
    price: 499,
    currency: '₹',
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=800&h=600',
    buyUrl: 'https://thedermaco.com/product/ultra-matte-sunscreen-gel',
    description: 'Matte finish sunscreen for oily skin',
    keyIngredients: ['Zinc Oxide', 'Niacinamide', 'Vitamin E'],
    benefits: ['Controls oil', 'Matte finish', 'No white cast', 'Broad spectrum'],
    howToUse: 'Apply liberally 20 minutes before sun exposure. Reapply every 2-3 hours.',
    bestFor: {
      skinTypes: ['oily', 'combination'],
      seasons: ['summer', 'monsoon'],
      regions: ['south-india', 'bangladesh', 'sri-lanka']
    },
    availableIn: ['India'],
    whyRecommended: 'Perfect for humid climates, controls shine throughout the day'
  }
];

export const haircareProducts: Product[] = [
  // SHAMPOOS
  {
    id: 'shampoo-1',
    name: 'Onion Shampoo',
    brand: 'Mamaearth',
    category: 'shampoo',
    price: 399,
    currency: '₹',
    image: 'https://images.unsplash.com/photo-1519735811561-9c1737f9403a?auto=format&fit=crop&q=80&w=800&h=600',
    buyUrl: 'https://mamaearth.in/product/onion-shampoo-for-hair-fall-control-and-hair-growth-with-onion-and-plant-keratin-250-ml',
    description: 'Sulfate-free shampoo for hair growth and strength',
    keyIngredients: ['Onion Oil', 'Plant Keratin', 'Biotin'],
    benefits: ['Promotes hair growth', 'Reduces hair fall', 'Strengthens roots'],
    howToUse: 'Apply on wet hair, massage scalp for 2 minutes, rinse thoroughly.',
    bestFor: {
      hairTypes: ['straight', 'wavy', 'curly', 'coily'],
      hairPorosity: ['low', 'medium', 'high'],
      seasons: ['summer', 'monsoon', 'winter'],
      regions: ['north-india', 'south-india', 'pakistan', 'bangladesh', 'sri-lanka']
    },
    availableIn: ['India', 'Bangladesh'],
    whyRecommended: 'Popular choice for addressing hair fall common in South Asian hair'
  },
  {
    id: 'shampoo-2',
    name: 'Argan Oil Shampoo',
    brand: 'St. Botanica',
    category: 'shampoo',
    price: 595,
    currency: '₹',
    image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=800&h=600',
    buyUrl: 'https://www.stbotanica.com/product/moroccan-argan-hair-shampoo',
    description: 'Moisturizing shampoo for dry and frizzy hair',
    keyIngredients: ['Argan Oil', 'Jojoba Oil', 'Vitamin E'],
    benefits: ['Deep moisture', 'Reduces frizz', 'Adds shine'],
    howToUse: 'Lather on wet hair, leave for 1-2 minutes, rinse well.',
    bestFor: {
      hairTypes: ['wavy', 'curly', 'coily'],
      hairPorosity: ['medium', 'high'],
      seasons: ['winter', 'summer'],
      regions: ['north-india', 'pakistan']
    },
    availableIn: ['India', 'Pakistan'],
    whyRecommended: 'Great for dry winter months, combats frizz from humidity'
  },
  {
    id: 'shampoo-3',
    name: 'Tea Tree Shampoo',
    brand: 'The Body Shop',
    category: 'shampoo',
    price: 895,
    currency: '₹',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800&h=600',
    buyUrl: 'https://www.thebodyshop.in/tea-tree-purifying-balancing-shampoo.html',
    description: 'Clarifying shampoo for oily scalp',
    keyIngredients: ['Tea Tree Oil', 'Peppermint', 'Salicylic Acid'],
    benefits: ['Controls oil', 'Soothes scalp', 'Removes buildup'],
    howToUse: 'Massage into wet scalp, leave for 1 minute, rinse. Use 2-3 times weekly.',
    bestFor: {
      hairTypes: ['straight', 'wavy'],
      hairPorosity: ['low', 'medium'],
      seasons: ['summer', 'monsoon'],
      regions: ['south-india', 'bangladesh', 'sri-lanka']
    },
    availableIn: ['India', 'Pakistan', 'Bangladesh'],
    whyRecommended: 'Perfect for humid climates causing oily scalp'
  },

  // CONDITIONERS
  {
    id: 'conditioner-1',
    name: 'Argan Oil Conditioner',
    brand: 'St. Botanica',
    category: 'conditioner',
    price: 595,
    currency: '₹',
    image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=800&h=600',
    buyUrl: 'https://www.stbotanica.com/product/moroccan-argan-hair-conditioner',
    description: 'Deep conditioning for dry, damaged hair',
    keyIngredients: ['Argan Oil', 'Shea Butter', 'Keratin'],
    benefits: ['Intense hydration', 'Detangles', 'Repairs damage'],
    howToUse: 'Apply mid-length to ends, leave for 2-3 minutes, rinse thoroughly.',
    bestFor: {
      hairTypes: ['wavy', 'curly', 'coily'],
      hairPorosity: ['medium', 'high'],
      seasons: ['winter', 'summer'],
      regions: ['north-india', 'pakistan']
    },
    availableIn: ['India', 'Pakistan'],
    whyRecommended: 'Essential for chemically treated or heat-damaged hair'
  },
  {
    id: 'conditioner-2',
    name: 'Onion Conditioner',
    brand: 'Mamaearth',
    category: 'conditioner',
    price: 399,
    currency: '₹',
    image: 'https://images.unsplash.com/photo-1519735811561-9c1737f9403a?auto=format&fit=crop&q=80&w=800&h=600',
    buyUrl: 'https://mamaearth.in/product/onion-conditioner-for-hair-fall-control-with-onion-and-coconut-250-ml',
    description: 'Strengthening conditioner for all hair types',
    keyIngredients: ['Onion Oil', 'Coconut Oil', 'Biotin'],
    benefits: ['Strengthens hair', 'Adds shine', 'Reduces breakage'],
    howToUse: 'Apply after shampooing, leave for 2 minutes, rinse well.',
    bestFor: {
      hairTypes: ['straight', 'wavy', 'curly', 'coily'],
      hairPorosity: ['low', 'medium', 'high'],
      seasons: ['summer', 'monsoon', 'winter'],
      regions: ['north-india', 'south-india', 'pakistan', 'bangladesh', 'sri-lanka']
    },
    availableIn: ['India', 'Bangladesh'],
    whyRecommended: 'Lightweight formula suitable for South Asian climate'
  },

  // HAIR OILS
  {
    id: 'hair-oil-1',
    name: 'Bhringraj Hair Oil',
    brand: 'Kama Ayurveda',
    category: 'hair-oil',
    price: 695,
    currency: '₹',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800&h=600',
    buyUrl: 'https://www.kamaayurveda.com/bringadi-intensive-hair-treatment-oil.html',
    description: 'Ayurvedic oil for hair growth and scalp health',
    keyIngredients: ['Bhringraj', 'Amla', 'Sesame Oil', 'Coconut Oil'],
    benefits: ['Promotes growth', 'Prevents premature graying', 'Nourishes scalp'],
    howToUse: 'Massage into scalp, leave for 1-2 hours or overnight, wash with shampoo.',
    bestFor: {
      hairTypes: ['straight', 'wavy', 'curly', 'coily'],
      hairPorosity: ['low', 'medium', 'high'],
      seasons: ['winter', 'monsoon'],
      regions: ['north-india', 'south-india', 'pakistan', 'bangladesh', 'sri-lanka']
    },
    availableIn: ['India', 'Pakistan'],
    whyRecommended: 'Traditional Ayurvedic remedy trusted for generations in South Asia'
  },
  {
    id: 'hair-oil-2',
    name: 'Castor Oil',
    brand: 'Organic Harvest',
    category: 'hair-oil',
    price: 349,
    currency: '₹',
    image: 'https://images.unsplash.com/photo-1556228578-8c7c2f4a0050?auto=format&fit=crop&q=80&w=800&h=600',
    buyUrl: 'https://www.organicharvest.in/product/organic-castor-oil',
    description: 'Pure cold-pressed castor oil for hair thickness',
    keyIngredients: ['100% Pure Castor Oil', 'Ricinoleic Acid'],
    benefits: ['Thickens hair', 'Promotes growth', 'Conditions deeply'],
    howToUse: 'Mix with coconut oil, apply to scalp and hair, leave overnight, wash next morning.',
    bestFor: {
      hairTypes: ['wavy', 'curly', 'coily'],
      hairPorosity: ['medium', 'high'],
      seasons: ['winter'],
      regions: ['north-india', 'pakistan']
    },
    availableIn: ['India', 'Pakistan', 'Bangladesh'],
    whyRecommended: 'Excellent for thick South Asian hair, especially in dry winter'
  },
  {
    id: 'hair-oil-3',
    name: 'Rosemary Hair Growth Oil',
    brand: 'Minimalist',
    category: 'hair-oil',
    price: 499,
    currency: '₹',
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=800&h=600',
    buyUrl: 'https://www.beautyminimalist.com/products/rosemary-hair-growth-oil',
    description: 'Lightweight oil for hair growth and scalp health',
    keyIngredients: ['Rosemary Oil', 'Redensyl', 'Anagain'],
    benefits: ['Stimulates growth', 'Improves circulation', 'Non-greasy'],
    howToUse: 'Apply to scalp, massage for 5 minutes, leave for 2-3 hours, wash.',
    bestFor: {
      hairTypes: ['straight', 'wavy', 'curly'],
      hairPorosity: ['low', 'medium'],
      seasons: ['summer', 'monsoon', 'winter'],
      regions: ['north-india', 'south-india', 'pakistan', 'bangladesh']
    },
    availableIn: ['India', 'Pakistan'],
    whyRecommended: 'Modern formula backed by science, suitable for all seasons'
  },

  // HAIR MASKS
  {
    id: 'hair-mask-1',
    name: 'Argan Oil Hair Mask',
    brand: 'St. Botanica',
    category: 'hair-mask',
    price: 795,
    currency: '₹',
    image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=800&h=600',
    buyUrl: 'https://www.stbotanica.com/product/moroccan-argan-hair-mask',
    description: 'Deep conditioning mask for damaged hair',
    keyIngredients: ['Argan Oil', 'Keratin', 'Collagen'],
    benefits: ['Repairs damage', 'Intense moisture', 'Restores shine'],
    howToUse: 'Apply on damp hair after shampooing, leave for 10-15 minutes, rinse. Use weekly.',
    bestFor: {
      hairTypes: ['wavy', 'curly', 'coily'],
      hairPorosity: ['high'],
      seasons: ['winter', 'summer'],
      regions: ['north-india', 'pakistan']
    },
    availableIn: ['India', 'Pakistan'],
    whyRecommended: 'Essential weekly treatment for chemically treated or heat-damaged hair'
  },
  {
    id: 'hair-mask-2',
    name: 'Banana Hair Mask',
    brand: 'Mamaearth',
    category: 'hair-mask',
    price: 449,
    currency: '₹',
    image: 'https://images.unsplash.com/photo-1519735811561-9c1737f9403a?auto=format&fit=crop&q=80&w=800&h=600',
    buyUrl: 'https://mamaearth.in/product/banana-hair-mask-with-banana-and-milk-protein-for-frizz-free-hair-200ml',
    description: 'Nourishing mask for dry and frizzy hair',
    keyIngredients: ['Banana Extract', 'Coconut Milk', 'Vitamin E'],
    benefits: ['Deep nourishment', 'Reduces frizz', 'Softens hair'],
    howToUse: 'Apply generously on damp hair, leave for 15 minutes, rinse well. Use weekly.',
    bestFor: {
      hairTypes: ['wavy', 'curly', 'coily'],
      hairPorosity: ['medium', 'high'],
      seasons: ['monsoon', 'winter'],
      regions: ['south-india', 'bangladesh', 'sri-lanka']
    },
    availableIn: ['India', 'Bangladesh'],
    whyRecommended: 'Natural ingredients perfect for frizz control in humid weather'
  },
  {
    id: 'hair-mask-3',
    name: 'Protein Hair Mask',
    brand: 'Plum',
    category: 'hair-mask',
    price: 595,
    currency: '₹',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800&h=600',
    buyUrl: 'https://plumgoodness.com/products/olive-macadamia-mega-moisturizing-hair-mask',
    description: 'Strengthening mask for weak, brittle hair',
    keyIngredients: ['Hydrolyzed Wheat Protein', 'Keratin', 'Argan Oil'],
    benefits: ['Strengthens hair', 'Reduces breakage', 'Improves elasticity'],
    howToUse: 'Apply on clean, damp hair, leave for 10 minutes, rinse. Use bi-weekly.',
    bestFor: {
      hairTypes: ['straight', 'wavy', 'curly', 'coily'],
      hairPorosity: ['high'],
      seasons: ['summer', 'monsoon', 'winter'],
      regions: ['north-india', 'south-india', 'pakistan', 'bangladesh']
    },
    availableIn: ['India'],
    whyRecommended: 'Perfect for high porosity hair that loses protein quickly'
  }
];

export const allProducts = [...skincareProducts, ...haircareProducts];
