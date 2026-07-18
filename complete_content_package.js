const { createCanvas } = require('canvas');
const fs = require('fs');

// COLOR VARIATIONS
function createColorVariations() {
  console.log('Creating color variations...');

  const themes = [
    { name: 'dark', bg: '#000000', accent: '#ff6b35', text: '#ffffff' },
    { name: 'premium', bg: '#1a1a2e', accent: '#00d4ff', text: '#ffffff' },
    { name: 'bold', bg: '#0f0f0f', accent: '#ff3333', text: '#ffffff' }
  ];

  themes.forEach(theme => {
    const canvas = createCanvas(1080, 1080);
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = theme.bg;
    ctx.fillRect(0, 0, 1080, 1080);

    ctx.fillStyle = theme.accent;
    ctx.fillRect(0, 0, 1080, 80);

    ctx.fillStyle = theme.text;
    ctx.font = 'bold 64px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('YOUR BUSINESS', 540, 180);
    ctx.fillText('DESERVES CUSTOM', 540, 270);

    ctx.font = '32px Arial';
    ctx.fillStyle = theme.accent;
    ctx.fillText('Not Templates. Not Excuses.', 540, 400);

    ctx.fillStyle = theme.text;
    ctx.font = '28px Arial';
    const features = [
      '✓ Custom Design',
      '✓ Professional Previews',
      '✓ Mobile First',
      '✓ High Converting'
    ];
    features.forEach((f, i) => {
      ctx.fillText(f, 540, 500 + (i * 60));
    });

    ctx.fillStyle = theme.accent;
    ctx.font = 'bold 48px Arial';
    ctx.fillText('DM for Free Audit', 540, 950);

    fs.writeFileSync(`apex_variation_${theme.name}.png`, canvas.toBuffer('image/png'));
  });

  console.log('✓ Color variations created');
}

// CAROUSEL POSTS (Multi-slide)
function createCarousels() {
  console.log('Creating carousel posts...');

  // Carousel 1: "5 Reasons Why"
  const reasons = [
    { num: '1', text: 'Templates Are Boring', sub: 'Everyone uses the same ones' },
    { num: '2', text: 'No Link Previews', sub: 'Lost sales when you share' },
    { num: '3', text: 'Not Mobile Optimized', sub: '60% traffic is mobile' },
    { num: '4', text: 'Poor SEO', sub: 'No one finds you' },
    { num: '5', text: 'Zero Conversion', sub: 'Traffic doesn\'t mean sales' },
    { num: '✓', text: 'Custom Fixes All Of It', sub: 'Let\'s build your site' }
  ];

  reasons.forEach((reason, i) => {
    const canvas = createCanvas(1080, 1350);
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = '#1a1a1a';
    ctx.fillRect(0, 0, 1080, 1350);

    ctx.fillStyle = '#ff6b35';
    ctx.fillRect(0, 0, 1080, 150);

    ctx.fillStyle = 'white';
    ctx.font = 'bold 72px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(reason.num, 540, 120);

    ctx.font = 'bold 56px Arial';
    ctx.fillText(reason.text, 540, 350);

    ctx.font = '32px Arial';
    ctx.fillStyle = '#ff6b35';
    ctx.fillText(reason.sub, 540, 450);

    ctx.fillStyle = 'white';
    ctx.font = '24px Arial';
    ctx.fillText(`Slide ${i + 1} of ${reasons.length}`, 540, 1250);

    if (i === reasons.length - 1) {
      ctx.fillStyle = '#ff6b35';
      ctx.fillRect(0, 1100, 1080, 250);
      ctx.fillStyle = 'white';
      ctx.font = 'bold 48px Arial';
      ctx.fillText('Ready?', 540, 1200);
      ctx.font = '32px Arial';
      ctx.fillText('DM Us Now', 540, 1280);
    }

    fs.writeFileSync(`apex_carousel_reasons_${i + 1}.png`, canvas.toBuffer('image/png'));
  });

  console.log('✓ Carousel posts created');
}

// TESTIMONIAL/CASE STUDY GRAPHICS
function createTestimonials() {
  console.log('Creating testimonial graphics...');

  const testimonials = [
    {
      business: 'Rumbello Auto Repair',
      quote: 'Professional. Converts. Worth Every Penny.',
      metric: '+40% More Inquiries',
      author: 'Owner, Auto Shop'
    },
    {
      business: 'Your Business Here',
      quote: 'Finally a website that actually sells.',
      metric: 'Ready for your story?',
      author: 'Could be you'
    }
  ];

  testimonials.forEach((testimonial, i) => {
    const canvas = createCanvas(1080, 1080);
    const ctx = canvas.getContext('2d');

    const gradient = ctx.createLinearGradient(0, 0, 1080, 1080);
    gradient.addColorStop(0, '#1a1a1a');
    gradient.addColorStop(1, '#2d2d2d');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 1080, 1080);

    ctx.fillStyle = '#ff6b35';
    ctx.font = 'bold 48px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(testimonial.business, 540, 150);

    ctx.fillStyle = 'white';
    ctx.font = '42px Arial';
    ctx.fillStyle = 'rgba(255,255,255,0.95)';

    const quote = testimonial.quote;
    const words = quote.split(' ');
    let line = '';
    let y = 300;

    words.forEach(word => {
      if (line.length + word.length > 20) {
        ctx.fillText(line, 540, y);
        y += 60;
        line = word + ' ';
      } else {
        line += word + ' ';
      }
    });
    ctx.fillText(line, 540, y);

    ctx.fillStyle = '#ff6b35';
    ctx.font = 'bold 48px Arial';
    ctx.fillText(testimonial.metric, 540, 750);

    ctx.fillStyle = 'rgba(255,255,255,0.7)';
    ctx.font = '28px Arial';
    ctx.fillText(testimonial.author, 540, 850);

    ctx.fillStyle = '#ff6b35';
    ctx.font = 'bold 32px Arial';
    ctx.fillText('DM for Your Case Study', 540, 980);

    fs.writeFileSync(`apex_testimonial_${i + 1}.png`, canvas.toBuffer('image/png'));
  });

  console.log('✓ Testimonial graphics created');
}

// STATS/METRICS GRAPHICS
function createStatsGraphics() {
  console.log('Creating stats graphics...');

  const stats = [
    { stat: '60%', label: 'of traffic is mobile', color: '#ff6b35' },
    { stat: '3 sec', label: 'to make first impression', color: '#00d4ff' },
    { stat: '40%+', label: 'more inquiries average', color: '#ff3333' },
    { stat: '80%', label: 'of users judge by design', color: '#00ff88' }
  ];

  stats.forEach((stat, i) => {
    const canvas = createCanvas(1080, 1080);
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = '#0a0a0a';
    ctx.fillRect(0, 0, 1080, 1080);

    ctx.fillStyle = stat.color;
    ctx.fillRect(0, 0, 1080, 300);

    ctx.fillStyle = 'white';
    ctx.font = 'bold 160px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(stat.stat, 540, 250);

    ctx.fillStyle = stat.color;
    ctx.font = 'bold 48px Arial';
    ctx.fillText(stat.label, 540, 450);

    ctx.fillStyle = 'white';
    ctx.font = '32px Arial';
    ctx.fillText('Your website needs to be', 540, 600);
    ctx.fillText('optimized for THIS.', 540, 660);

    ctx.fillStyle = stat.color;
    ctx.font = 'bold 40px Arial';
    ctx.fillText('We build sites that convert.', 540, 850);

    ctx.font = '28px Arial';
    ctx.fillStyle = 'white';
    ctx.fillText('DM for free audit', 540, 950);

    fs.writeFileSync(`apex_stats_${i + 1}.png`, canvas.toBuffer('image/png'));
  });

  console.log('✓ Stats graphics created');
}

// VIDEO SCENE GRAPHICS (For Reels)
function createVideoScenes() {
  console.log('Creating video scene graphics...');

  const scenes = [
    { title: 'HOOK', text: 'Your Website Is Costing You Sales', bgColor: '#000000', accentColor: '#ff6b35' },
    { title: 'PROBLEM', text: 'Template Sites Don\'t Convert', bgColor: '#1a1a1a', accentColor: '#ff3333' },
    { title: 'SOLUTION', text: 'We Build Custom Websites', bgColor: '#0a0a0a', accentColor: '#00d4ff' },
    { title: 'PROOF', text: 'See The Difference', bgColor: '#2d2d2d', accentColor: '#ff6b35' },
    { title: 'CTA', text: 'DM Us Now • Limited Spots', bgColor: '#ff6b35', accentColor: '#000000' }
  ];

  scenes.forEach((scene, i) => {
    const canvas = createCanvas(1080, 1920);
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = scene.bgColor;
    ctx.fillRect(0, 0, 1080, 1920);

    ctx.fillStyle = scene.accentColor;
    ctx.fillRect(0, 0, 1080, 200);

    ctx.fillStyle = scene.bgColor === '#ff6b35' ? 'black' : 'white';
    ctx.font = 'bold 60px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(scene.title, 540, 140);

    ctx.font = 'bold 80px Arial';
    ctx.fillText(scene.text, 540, 900);

    ctx.font = '40px Arial';
    if (scene.title === 'CTA') {
      ctx.fillStyle = 'black';
      ctx.fillText('First Consultation Free', 540, 1100);
    }

    fs.writeFileSync(`apex_reels_scene_${i + 1}_${scene.title.toLowerCase()}.png`, canvas.toBuffer('image/png'));
  });

  console.log('✓ Video scene graphics created');
}

// ENHANCED VERSIONS
function createEnhancedVersions() {
  console.log('Creating enhanced versions...');

  const canvas = createCanvas(1080, 1080);
  const ctx = canvas.getContext('2d');

  // Enhanced urgency with limited spots
  ctx.fillStyle = '#000000';
  ctx.fillRect(0, 0, 1080, 1080);

  ctx.fillStyle = '#ff3333';
  ctx.fillRect(0, 0, 1080, 100);
  ctx.fillStyle = 'white';
  ctx.font = 'bold 36px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('🚨 LIMITED SPOTS AVAILABLE 🚨', 540, 70);

  ctx.fillStyle = 'white';
  ctx.font = 'bold 72px Arial';
  ctx.fillText('CUSTOM WEBSITE', 540, 250);
  ctx.fillText('BUILD', 540, 350);

  ctx.fillStyle = '#ff6b35';
  ctx.font = '36px Arial';
  ctx.fillText('Only 3 Spots Left This Month', 540, 450);

  ctx.fillStyle = 'white';
  ctx.font = '28px Arial';
  const benefits = [
    'Custom Design + Setup',
    'Link Preview Card',
    'Mobile Optimization',
    'SEO Ready',
    'Free Consultation'
  ];
  benefits.forEach((b, i) => {
    ctx.fillText('✓ ' + b, 540, 550 + (i * 50));
  });

  ctx.fillStyle = '#ff6b35';
  ctx.fillRect(100, 850, 880, 150);
  ctx.fillStyle = 'white';
  ctx.font = 'bold 52px Arial';
  ctx.fillText('BOOK NOW', 540, 935);

  ctx.font = '28px Arial';
  ctx.fillStyle = '#000000';
  ctx.fillText('DM @ApexAI • Link in Bio', 540, 1000);

  fs.writeFileSync('apex_enhanced_limited_spots.png', canvas.toBuffer('image/png'));

  console.log('✓ Enhanced versions created');
}

// Run all
createColorVariations();
createCarousels();
createTestimonials();
createStatsGraphics();
createVideoScenes();
createEnhancedVersions();

console.log('\n✅ COMPLETE CONTENT PACKAGE CREATED!\n');
console.log('Generated Files:');
console.log('- 3 Color Variations');
console.log('- 6 Carousel Slides (5 Reasons Why)');
console.log('- 2 Testimonial Graphics');
console.log('- 4 Stats Graphics');
console.log('- 5 Video Scene Graphics (for Reels)');
console.log('- 1 Enhanced Limited Spots Graphic');
console.log('\nTotal: 21 High-Converting Graphics Ready to Post!\n');
