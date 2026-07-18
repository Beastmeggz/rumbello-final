import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'edge',
};

export default function handler(req) {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '100%',
          backgroundColor: '#1a3a52',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          color: 'white',
          padding: '40px',
        }}
      >
        {/* Left Content (85%) */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            width: '85%',
            paddingRight: '30px',
          }}
        >
          {/* Logo */}
          <div
            style={{
              fontSize: '48px',
              marginBottom: '20px',
            }}
          >
            🔧
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: '14px',
              color: '#64b5f6',
              fontWeight: '600',
              letterSpacing: '1px',
              marginBottom: '12px',
              textTransform: 'uppercase',
            }}
          >
            Expert Auto Repair
          </div>

          {/* Headline */}
          <div
            style={{
              fontSize: '52px',
              fontWeight: '700',
              lineHeight: '1.2',
              marginBottom: '20px',
            }}
          >
            Expert Auto Repair{' '}
            <span style={{ color: '#ff6b35' }}>You Can Trust</span>
          </div>

          {/* Description */}
          <div
            style={{
              fontSize: '18px',
              color: 'rgba(255,255,255,0.8)',
              marginBottom: '20px',
              lineHeight: '1.4',
            }}
          >
            Full-Service Mechanic Shop • Whippany, NJ
          </div>

          {/* Services */}
          <div
            style={{
              fontSize: '16px',
              color: 'rgba(255,255,255,0.7)',
              marginBottom: '20px',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '16px',
            }}
          >
            <span>✓ 20+ Years</span>
            <span>✓ ASE-Certified</span>
            <span>✓ 4.8★ Rating</span>
          </div>

          {/* Contact */}
          <div
            style={{
              fontSize: '16px',
              color: 'rgba(255,255,255,0.7)',
              marginTop: '20px',
            }}
          >
            📞 (973) 515-8818
          </div>
        </div>

        {/* Right Side - Image (15%) */}
        <div
          style={{
            display: 'flex',
            width: '15%',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#2a4a62',
            borderRadius: '8px',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              fontSize: '14px',
              color: '#999',
              textAlign: 'center',
              padding: '10px',
            }}
          >
            🚗
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
