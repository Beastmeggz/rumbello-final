const { createCanvas } = require('canvas');
const fs = require('fs');

// GRAPHIC 1: BEFORE/AFTER - The Problem/Solution
function createBeforeAfter() {
  const canvas = createCanvas(1080, 1080);
  const ctx = canvas.getContext('2d');

  // Background gradient effect - split
  ctx.fillStyle = '#1a1a1a';
  ctx.fillRect(0, 0, 540, 1080);
  ctx.fillStyle = '#ff6b35';
  ctx.fillRect(540, 0, 540, 1080);

  // LEFT SIDE - BEFORE (BAD)
  ctx.font = 'bold 48px Arial';
  ctx.fillStyle = 'rgba(255,255,255,0.9)';
  ctx.textAlign = 'center';
  ctx.fillText('BEFORE', 270, 150);

  ctx.font = '24px Arial';
  ctx.fillStyle = 'rgba(255,255,255,0.7)';
  ctx.fillText('Template Website', 270, 200);
  ctx.fillText('Looks Like Everyone Else', 270, 240);
  ctx.fillText('No Link Preview', 270, 280);
  ctx.fillText('Lost Sales', 270, 320);
  ctx.fillText('😴 Boring', 270, 380);

  // Draw a boring box
  ctx.strokeStyle = 'rgba(255,255,255,0.3)';
  ctx.lineWidth = 2;
  ctx.strokeRect(150, 450, 240, 300);
  ctx.fillStyle = 'rgba(255,255,255,0.1)';
  ctx.fillRect(150, 450, 240, 300);

  // RIGHT SIDE - AFTER (SICK)
  ctx.font = 'bold 48px Arial';
  ctx.fillStyle = 'white';
  ctx.textAlign = 'center';
  ctx.fillText('AFTER', 810, 150);

  ctx.font = '24px Arial';
  ctx.fillStyle = 'rgba(255,255,255,0.9)';
  ctx.fillText('Custom Website', 810, 200);
  ctx.fillText('Stands Out', 810, 240);
  ctx.fillText('Professional Link Preview', 810, 280);
  ctx.fillText('CONVERTS', 810, 320);
  ctx.fillText('🚀 SELLS', 810, 380);

  // Draw a premium box
  ctx.strokeStyle = 'white';
  ctx.lineWidth = 3;
  ctx.strokeRect(690, 450, 240, 300);
  ctx.fillStyle = 'rgba(255,255,255,0.15)';
  ctx.fillRect(690, 450, 240, 300);

  // Bottom CTA
  ctx.fillStyle = 'white';
  ctx.font = 'bold 40px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('Which One Are You?', 540, 950);

  fs.writeFileSync('apex_before_after.png', canvas.toBuffer('image/png'));
  console.log('✓ Before/After graphic created');
}

// GRAPHIC 2: RESULTS - What We Actually Build
function createResults() {
  const canvas = createCanvas(1080, 1080);
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = '#0a0a0a';
  ctx.fillRect(0, 0, 1080, 1080);

  // Gradient top
  const gradient = ctx.createLinearGradient(0, 0, 1080, 300);
  gradient.addColorStop(0, '#ff6b35');
  gradient.addColorStop(1, '#ff8c42');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 1080, 300);

  // Title
  ctx.fillStyle = 'white';
  ctx.font = 'bold 56px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('THIS IS WHAT WE BUILD', 540, 120);

  // Subheader
  ctx.font = '28px Arial';
  ctx.fillStyle = 'rgba(255,255,255,0.9)';
  ctx.fillText('Custom Websites That SELL', 540, 200);

  // Features list
  ctx.font = 'bold 24px Arial';
  ctx.fillStyle = '#ff6b35';
  ctx.textAlign = 'left';

  const features = [
    '✓ Custom Design (Not Templates)',
    '✓ Professional Link Previews',
    '✓ Mobile Optimized',
    '✓ SEO Ready',
    '✓ High Converting',
    '✓ Built for YOUR Business'
  ];

  features.forEach((feature, i) => {
    ctx.fillText(feature, 80, 400 + (i * 80));
  });

  // Bottom stats box
  ctx.fillStyle = '#ff6b35';
  ctx.fillRect(0, 850, 1080, 230);

  ctx.fillStyle = 'white';
  ctx.font = 'bold 48px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('Ready to Build?', 540, 950);

  ctx.font = '32px Arial';
  ctx.fillStyle = 'rgba(255,255,255,0.95)';
  ctx.fillText('DM Us Now • Link in Bio', 540, 1020);

  fs.writeFileSync('apex_results.png', canvas.toBuffer('image/png'));
  console.log('✓ Results graphic created');
}

// GRAPHIC 3: URGENCY - Social Proof + CTA
function createUrgency() {
  const canvas = createCanvas(1080, 1080);
  const ctx = canvas.getContext('2d');

  // Bold black background
  ctx.fillStyle = '#000000';
  ctx.fillRect(0, 0, 1080, 1080);

  // Red accent line
  ctx.fillStyle = '#ff6b35';
  ctx.fillRect(0, 0, 1080, 12);

  // Main headline - AGGRESSIVE
  ctx.fillStyle = 'white';
  ctx.font = 'bold 64px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('YOUR COMPETITORS', 540, 150);
  ctx.fillText('ARE BEATING YOU', 540, 240);

  // The reason why
  ctx.font = '32px Arial';
  ctx.fillStyle = '#ff6b35';
  ctx.fillText('...With Better Websites', 540, 320);

  // Middle section
  ctx.fillStyle = 'white';
  ctx.font = '28px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('While you\'re using templates,', 540, 450);
  ctx.fillText('they\'re converting customers', 540, 510);
  ctx.fillText('with custom websites.', 540, 570);

  // The wake up call
  ctx.fillStyle = '#ff6b35';
  ctx.font = 'bold 48px Arial';
  ctx.fillText('How Much Are You Losing?', 540, 700);

  // CTA Box
  ctx.fillStyle = '#ff6b35';
  ctx.fillRect(100, 780, 880, 200);

  ctx.fillStyle = 'white';
  ctx.font = 'bold 56px Arial';
  ctx.fillText('LET\'S FIX THIS', 540, 880);

  ctx.font = '28px Arial';
  ctx.fillStyle = '#000000';
  ctx.fillText('Custom Build • Free Consultation', 540, 945);
  ctx.fillText('DM @ApexAI or Click Link', 540, 1000);

  fs.writeFileSync('apex_urgency.png', canvas.toBuffer('image/png'));
  console.log('✓ Urgency graphic created');
}

// GRAPHIC 4: PORTFOLIO - Show Off Results
function createPortfolio() {
  const canvas = createCanvas(1080, 1080);
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, 1080, 1080);

  // Top section - Title
  ctx.fillStyle = '#ff6b35';
  ctx.fillRect(0, 0, 1080, 200);

  ctx.fillStyle = 'white';
  ctx.font = 'bold 56px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('RECENT BUILD', 540, 130);

  // Portfolio showcase
  ctx.fillStyle = '#1a1a1a';
  ctx.fillRect(80, 250, 920, 500);

  ctx.fillStyle = '#ff6b35';
  ctx.font = 'bold 36px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('Rumbello Auto Repair', 540, 380);

  ctx.fillStyle = 'white';
  ctx.font = '24px Arial';
  ctx.fillText('Custom Website Build', 540, 430);

  ctx.fillStyle = '#ff6b35';
  ctx.font = 'bold 20px Arial';
  ctx.fillText('Link Preview Card • Mobile Optimized', 540, 480);
  ctx.fillText('Professional Design • High Converting', 540, 520);
  ctx.fillText('SEO Ready • Custom Branding', 540, 560);

  // Bottom CTA
  ctx.fillStyle = '#ff6b35';
  ctx.font = 'bold 48px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('Your Business Could Be Next', 540, 800);

  ctx.font = '32px Arial';
  ctx.fillStyle = '#1a1a1a';
  ctx.fillText('DM for Free Website Audit', 540, 900);

  ctx.fillStyle = '#ff6b35';
  ctx.font = 'bold 28px Arial';
  ctx.fillText('Link in Bio • Limited Spots Available', 540, 980);

  fs.writeFileSync('apex_portfolio.png', canvas.toBuffer('image/png'));
  console.log('✓ Portfolio graphic created');
}

// Create all graphics
createBeforeAfter();
createResults();
createUrgency();
createPortfolio();

console.log('✓ All sales graphics created!');
