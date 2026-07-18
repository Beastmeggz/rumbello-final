const { createCanvas } = require('canvas');
const fs = require('fs');

const width = 1200;
const height = 630;
const canvas = createCanvas(width, height);
const ctx = canvas.getContext('2d');

// Orange header
ctx.fillStyle = '#ff6b35';
ctx.fillRect(0, 0, width, 180);

// Blue body
ctx.fillStyle = '#1a3a52';
ctx.fillRect(0, 180, width, height - 180);

// Title
ctx.font = 'bold 52px Arial';
ctx.fillStyle = 'white';
ctx.fillText('Rumbello Auto Repair', 60, 110);

// Subtitle
ctx.font = '24px Arial';
ctx.fillStyle = 'rgba(255,255,255,0.95)';
ctx.fillText('Your Trusted Mechanic', 60, 155);

// Services (LEFT side)
ctx.font = 'bold 20px Arial';
ctx.fillStyle = '#ff6b35';
ctx.fillText('Expert Service', 60, 260);

const services = [
  '✓ 20+ Years Experience',
  '✓ ASE-Certified Technicians',
  '✓ 4.8-Star Rating (89 Reviews)',
  '✓ Free Estimates'
];

ctx.font = '16px Arial';
ctx.fillStyle = 'rgba(255,255,255,0.85)';
services.forEach((service, i) => {
  ctx.fillText(service, 60, 300 + (i * 30));
});

// Photo box (RIGHT side)
ctx.fillStyle = '#3a5a72';
ctx.strokeStyle = '#555';
ctx.lineWidth = 2;
const photoX = 920, photoY = 230, photoSize = 220;
ctx.fillRect(photoX, photoY, photoSize, photoSize);
ctx.strokeRect(photoX, photoY, photoSize, photoSize);

// Car emoji
ctx.font = '32px Arial';
ctx.fillStyle = '#999';
ctx.textAlign = 'center';
ctx.fillText('🚗', photoX + photoSize/2, photoY + photoSize/2 + 10);

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
