import { Product, SkinType, HairType, HairPorosity, Region, Season, skincareProducts, haircareProducts } from './products';

export interface UserProfile {
  skinType?: SkinType;
  hairType?: HairType;
  hairPorosity?: HairPorosity;
  region?: Region;
  season?: Season;
  currentRoutine?: string;
  focusArea: 'skincare' | 'haircare' | 'both';
}

export interface Recommendation {
  product: Product;
  reason: string;
  priority: number;
  timeOfDay: 'AM' | 'PM' | 'Weekly' | 'As needed';
}

export function getRecommendations(profile: UserProfile): Recommendation[] {
  const recommendations: Recommendation[] = [];

  if (profile.focusArea === 'skincare' || profile.focusArea === 'both') {
    recommendations.push(...getSkincareRecommendations(profile));
  }

  if (profile.focusArea === 'haircare' || profile.focusArea === 'both') {
    recommendations.push(...getHaircareRecommendations(profile));
  }

  return recommendations.sort((a, b) => b.priority - a.priority);
}

function getSkincareRecommendations(profile: UserProfile): Recommendation[] {
  const recommendations: Recommendation[] = [];

  // CLEANSER
  const cleanser = skincareProducts
    .filter(p => p.category === 'cleanser')
    .find(p =>
      p.bestFor.skinTypes?.includes(profile.skinType!) &&
      p.bestFor.seasons?.includes(profile.season!) &&
      p.bestFor.regions?.includes(profile.region!)
    ) || skincareProducts.find(p => p.category === 'cleanser' && p.id === 'cleanser-3');

  if (cleanser) {
    recommendations.push({
      product: cleanser,
      reason: `Perfect for ${profile.skinType} skin in ${profile.season} season. ${cleanser.whyRecommended}`,
      priority: 10,
      timeOfDay: 'AM'
    });
  }

  // SERUM
  let serum: Product | undefined;
  if (profile.skinType === 'oily' || profile.skinType === 'combination') {
    serum = skincareProducts.find(p => p.id === 'serum-1'); // Niacinamide
  } else if (profile.skinType === 'dry') {
    serum = skincareProducts.find(p => p.id === 'serum-3'); // Hyaluronic Acid
  } else {
    serum = skincareProducts.find(p => p.id === 'serum-2'); // Vitamin C
  }

  if (serum) {
    recommendations.push({
      product: serum,
      reason: `${serum.whyRecommended}. Targets common concerns for ${profile.skinType} skin.`,
      priority: 9,
      timeOfDay: serum.id === 'serum-2' ? 'AM' : 'PM'
    });
  }

  // MOISTURIZER
  const moisturizer = skincareProducts
    .filter(p => p.category === 'moisturizer')
    .find(p =>
      p.bestFor.skinTypes?.includes(profile.skinType!) &&
      p.bestFor.seasons?.includes(profile.season!)
    ) || skincareProducts.find(p => p.id === 'moisturizer-3');

  if (moisturizer) {
    recommendations.push({
      product: moisturizer,
      reason: `Ideal hydration for ${profile.skinType} skin during ${profile.season}. ${moisturizer.whyRecommended}`,
      priority: 8,
      timeOfDay: 'AM'
    });
  }

  // SUNSCREEN (CRITICAL!)
  const sunscreen = skincareProducts
    .filter(p => p.category === 'sunscreen')
    .find(p =>
      p.bestFor.skinTypes?.includes(profile.skinType!) &&
      p.bestFor.regions?.includes(profile.region!)
    ) || skincareProducts.find(p => p.id === 'sunscreen-1');

  if (sunscreen) {
    recommendations.push({
      product: sunscreen,
      reason: `ESSENTIAL for preventing hyperpigmentation in South Asian skin. ${sunscreen.whyRecommended}`,
      priority: 10,
      timeOfDay: 'AM'
    });
  }

  return recommendations;
}

function getHaircareRecommendations(profile: UserProfile): Recommendation[] {
  const recommendations: Recommendation[] = [];

  // SHAMPOO
  const shampoo = haircareProducts
    .filter(p => p.category === 'shampoo')
    .find(p =>
      p.bestFor.hairTypes?.includes(profile.hairType!) &&
      p.bestFor.hairPorosity?.includes(profile.hairPorosity!) &&
      p.bestFor.seasons?.includes(profile.season!)
    ) || haircareProducts.find(p => p.id === 'shampoo-1');

  if (shampoo) {
    recommendations.push({
      product: shampoo,
      reason: `Perfect for ${profile.hairType} hair with ${profile.hairPorosity} porosity. ${shampoo.whyRecommended}`,
      priority: 7,
      timeOfDay: 'As needed'
    });
  }

  // CONDITIONER
  const conditioner = haircareProducts
    .filter(p => p.category === 'conditioner')
    .find(p =>
      p.bestFor.hairTypes?.includes(profile.hairType!) &&
      p.bestFor.hairPorosity?.includes(profile.hairPorosity!)
    ) || haircareProducts.find(p => p.id === 'conditioner-2');

  if (conditioner) {
    recommendations.push({
      product: conditioner,
      reason: `Complements your shampoo routine. ${conditioner.whyRecommended}`,
      priority: 6,
      timeOfDay: 'As needed'
    });
  }

  // HAIR OIL
  const hairOil = haircareProducts
    .filter(p => p.category === 'hair-oil')
    .find(p =>
      p.bestFor.hairTypes?.includes(profile.hairType!) &&
      p.bestFor.hairPorosity?.includes(profile.hairPorosity!) &&
      p.bestFor.seasons?.includes(profile.season!)
    ) || haircareProducts.find(p => p.id === 'hair-oil-1');

  if (hairOil) {
    recommendations.push({
      product: hairOil,
      reason: `Traditional South Asian hair care. ${hairOil.whyRecommended}`,
      priority: 8,
      timeOfDay: 'Weekly'
    });
  }

  // HAIR MASK (if high porosity)
  if (profile.hairPorosity === 'high' || profile.hairType === 'curly' || profile.hairType === 'coily') {
    const hairMask = haircareProducts
      .filter(p => p.category === 'hair-mask')
      .find(p =>
        p.bestFor.hairTypes?.includes(profile.hairType!) &&
        p.bestFor.hairPorosity?.includes(profile.hairPorosity!)
      ) || haircareProducts.find(p => p.id === 'hair-mask-2');

    if (hairMask) {
      recommendations.push({
        product: hairMask,
        reason: `Deep conditioning treatment for ${profile.hairType} hair. ${hairMask.whyRecommended}`,
        priority: 5,
        timeOfDay: 'Weekly'
      });
    }
  }

  return recommendations;
}
