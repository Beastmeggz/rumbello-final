const { createCanvas, loadImage } = require('canvas');
const fs = require('fs');
const path = require('path');

async function generateCard() {
  const width = 1200;
  const height = 630;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Load shop photo
  let shopImg = null;
  try {
    shopImg = await loadImage('shop1.png');
  } catch (e) {
    console.log('Shop image not found, using placeholder');
  }

  // Orange header
  ctx.fillStyle = '#ff6b35';
  ctx.fillRect(0, 0, width, 180);

  // Blue body
  ctx.fillStyle = '#1a3a52';
  ctx.fillRect(0, 180, width, height - 180);

  // Title (centered)
  ctx.textAlign = 'center';
  ctx.font = 'bold 90px Arial';
  ctx.fillStyle = 'white';
  ctx.fillText('Rumbello Auto Repair', width / 2, 110);

  // Subtitle (centered)
  ctx.font = '42px Arial';
  ctx.fillStyle = 'rgba(255,255,255,0.95)';
  ctx.fillText('Your Trusted Mechanic', width / 2, 170);

  ctx.textAlign = 'left';

  // Services (shifted toward middle)
  ctx.font = 'bold 56px Arial';
  ctx.fillStyle = '#ff6b35';
  ctx.fillText('Expert Service', 100, 290);

  const services = [
    '✓ 20+ Years Experience',
    '✓ ASE-Certified Technicians',
    '✓ 4.8-Star Rating (89 Reviews)',
    '✓ Free Estimates'
  ];

  ctx.font = '22px Arial';
  ctx.fillStyle = 'rgba(255,255,255,0.85)';
  services.forEach((service, i) => {
    ctx.fillText(service, 100, 340 + (i * 40));
  });

  // Photo box (WIDE, stretching to right edge, even smaller)
  const photoX = 655, photoY = 205, photoWidth = 505, photoHeight = 275;

  if (shopImg) {
    ctx.drawImage(shopImg, photoX, photoY, photoWidth, photoHeight);
  } else {
    ctx.fillStyle = '#3a5a72';
    ctx.fillRect(photoX, photoY, photoWidth, photoHeight);
  }

  ctx.strokeStyle = '#555';
  ctx.lineWidth = 2;
  ctx.strokeRect(photoX, photoY, photoWidth, photoHeight);

  ctx.textAlign = 'left';

  // Contact (centered, enlarged)
  ctx.textAlign = 'center';
  ctx.font = 'bold 20px Arial';
  ctx.fillStyle = 'white';
  ctx.fillText('📞 (973) 515-8818', width / 2, 520);

  ctx.font = '18px Arial';
  ctx.fillStyle = 'rgba(255,255,255,0.8)';
  ctx.fillText('📍 Whippany, NJ | Mon-Sat: 8am-5:30pm', width / 2, 560);

  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync('og-card.png', buffer);
  console.log('✓ PNG created: og-card.png');
}

generateCard().catch(console.error);
