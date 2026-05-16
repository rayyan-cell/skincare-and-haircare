export const quizExplanations = {
  skinType: {
    title: "What is Skin Type?",
    content: "Your skin type is determined by how much oil (sebum) your skin produces. Oily skin feels greasy and shiny, especially in the T-zone. Dry skin feels tight and may flake. Combination skin is oily in the T-zone but dry on cheeks. Sensitive skin gets irritated easily. Normal skin is balanced with no major concerns."
  },
  hairType: {
    title: "What is Hair Type?",
    content: "Hair type refers to your natural hair texture. Straight hair has no curl pattern. Wavy hair forms loose S-shaped waves. Curly hair forms defined spiral curls. Coily hair has tight, springy coils or zig-zag patterns. Knowing your hair type helps choose the right products."
  },
  hairPorosity: {
    title: "What is Hair Porosity?",
    content: "Hair porosity is how well your hair absorbs and retains moisture. Low porosity: cuticles are tightly closed, products sit on top. Medium porosity: balanced moisture retention. High porosity: cuticles have gaps, hair absorbs quickly but loses moisture fast. Test: drop a clean hair strand in water - if it floats (low), sinks slowly (medium), or sinks fast (high)."
  },
  region: {
    title: "Why Does Region Matter?",
    content: "Climate affects your skin and hair! Humid regions (South India, Bangladesh) need lightweight, oil-controlling products. Dry regions (North India, Pakistan winters) need more hydration. Coastal areas have salt air affecting hair. Pollution levels in cities also impact product choices."
  },
  season: {
    title: "Why Does Season Matter?",
    content: "Your skin and hair needs change with seasons! Summer: need oil control and strong sun protection. Monsoon: combat humidity and fungal issues. Winter: need extra hydration as air is dry. South Asian seasons are intense, so seasonal adjustments are crucial for healthy skin and hair."
  }
};

export const skinTypeOptions = [
  {
    value: 'oily',
    label: 'Oily',
    description: 'Shiny, greasy, prone to acne',
    emoji: '💧'
  },
  {
    value: 'dry',
    label: 'Dry',
    description: 'Tight, flaky, rough texture',
    emoji: '🏜️'
  },
  {
    value: 'combination',
    label: 'Combination',
    description: 'Oily T-zone, dry cheeks',
    emoji: '🌓'
  },
  {
    value: 'sensitive',
    label: 'Sensitive',
    description: 'Easily irritated, red, reactive',
    emoji: '🌸'
  },
  {
    value: 'normal',
    label: 'Normal',
    description: 'Balanced, no major concerns',
    emoji: '✨'
  }
];

export const hairTypeOptions = [
  {
    value: 'straight',
    label: 'Straight',
    description: 'No curl pattern, sleek',
    emoji: '➖'
  },
  {
    value: 'wavy',
    label: 'Wavy',
    description: 'Loose S-shaped waves',
    emoji: '〰️'
  },
  {
    value: 'curly',
    label: 'Curly',
    description: 'Defined spiral curls',
    emoji: '🌀'
  },
  {
    value: 'coily',
    label: 'Coily',
    description: 'Tight coils or zig-zags',
    emoji: '🔄'
  }
];

export const hairPorosityOptions = [
  {
    value: 'low',
    label: 'Low Porosity',
    description: 'Products sit on top, hard to absorb',
    emoji: '🔒'
  },
  {
    value: 'medium',
    label: 'Medium Porosity',
    description: 'Balanced moisture retention',
    emoji: '⚖️'
  },
  {
    value: 'high',
    label: 'High Porosity',
    description: 'Absorbs fast, loses moisture quickly',
    emoji: '🌊'
  }
];

export const regionOptions = [
  {
    value: 'north-india',
    label: 'North India',
    description: 'Delhi, Punjab, Rajasthan - Extreme seasons',
    emoji: '🏔️'
  },
  {
    value: 'south-india',
    label: 'South India',
    description: 'Chennai, Bangalore, Kerala - Humid & warm',
    emoji: '🌴'
  },
  {
    value: 'pakistan',
    label: 'Pakistan',
    description: 'Karachi, Lahore, Islamabad - Hot & dry',
    emoji: '🏜️'
  },
  {
    value: 'bangladesh',
    label: 'Bangladesh',
    description: 'Dhaka, Chittagong - Very humid',
    emoji: '🌧️'
  },
  {
    value: 'sri-lanka',
    label: 'Sri Lanka',
    description: 'Colombo - Tropical & humid',
    emoji: '🏝️'
  }
];

export const seasonOptions = [
  {
    value: 'summer',
    label: 'Summer',
    description: 'Hot, sunny, high UV',
    emoji: '☀️'
  },
  {
    value: 'monsoon',
    label: 'Monsoon',
    description: 'Humid, rainy, sticky',
    emoji: '🌧️'
  },
  {
    value: 'winter',
    label: 'Winter',
    description: 'Cold, dry air',
    emoji: '❄️'
  }
];
