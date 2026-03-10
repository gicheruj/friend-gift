import React, { useEffect, useState } from 'react';

const Letter = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <div style={{
      minHeight: '100vh',
      background: 'radial-gradient(ellipse at 50% 40%, #fdeaf0 0%, #f9d9e7 40%, #f0c4d8 100%)',
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
      padding: '3rem 1.5rem',
      fontFamily: 'Georgia, serif',
      overflow: 'hidden',
      position: 'relative',
    }}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;1,400;1,500&display=swap');
        @keyframes float0 { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-12px); } }
        @keyframes float1 { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-7px); } }
        @keyframes float2 { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-16px); } }

        .letter-wrap {
          opacity: 0;
          transform: translateY(30px) rotate(-1deg);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .letter-wrap.show {
          opacity: 1;
          transform: translateY(0) rotate(-0.5deg);
        }

        .letter-p {
          margin: 0 0 1.15rem 0;
          line-height: 1.85;
          color: #3a2510;
          font-size: 1.02rem;
        }
      `}</style>

      {/* Floating dots — same as other pages */}
      {[...Array(18)].map((_, i) => (
        <div key={i} style={{
          position: 'fixed',
          width: i % 3 === 0 ? 10 : i % 2 === 0 ? 6 : 8,
          height: i % 3 === 0 ? 10 : i % 2 === 0 ? 6 : 8,
          borderRadius: '50%',
          background: i % 4 === 0 ? 'rgba(220,80,120,0.18)' : i % 3 === 0 ? 'rgba(255,180,200,0.35)' : 'rgba(200,80,130,0.12)',
          top: `${(i * 17 + 5) % 90}%`,
          left: `${(i * 23 + 8) % 92}%`,
          animation: `float${i % 3} ${3 + (i % 4)}s ease-in-out infinite`,
          animationDelay: `${i * 0.3}s`,
          pointerEvents: 'none',
        }} />
      ))}

      <div
        className={`letter-wrap ${visible ? 'show' : ''}`}
        style={{
          width: '100%',
          maxWidth: '520px',
          background: '#fefaf2',
          boxShadow: '4px 6px 24px rgba(180, 80, 120, 0.15)',
          border: '1.5px solid #e8a0b8',
          borderRadius: '2px',
          padding: '3rem 3rem 2.5rem',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Fold lines */}
        <div style={{ position: 'absolute', top: '33%', left: 0, right: 0, height: '1px', background: 'rgba(220,140,170,0.13)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: '66%', left: 0, right: 0, height: '1px', background: 'rgba(220,140,170,0.13)', pointerEvents: 'none' }} />

        {/* Date */}
        <p style={{
          textAlign: 'right',
          fontStyle: 'italic',
          color: '#b06080',
          fontSize: '0.85rem',
          marginBottom: '2rem',
          fontFamily: 'Lora, Georgia, serif',
        }}>
          {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>

        {/* Salutation */}
        <p style={{
          fontFamily: 'Lora, Georgia, serif',
          fontStyle: 'italic',
          fontSize: '1.15rem',
          color: '#b06080',
          marginBottom: '1.5rem',
        }}>
          Dear Bestie,
        </p>

        {/* Body */}
        <div style={{ fontFamily: 'Lora, Georgia, serif' }}>
          <p className="letter-p">
            Happy Birthday! Another year older, another year of me having to put up with you and somehow still choosing to. That's love. You're chaotic, occasionally unhinged, and the funniest person I know, and I genuinely don't know what I'd do without you. (Probably be way more boring, honestly.) Here's to you, to this year, and to whatever ridiculous thing we'll laugh about next. I'm so glad you exist.
          </p>
        </div>

        {/* Closing */}
        <div style={{ marginTop: '2rem' }}>
          <p style={{
            fontFamily: 'Lora, Georgia, serif',
            fontStyle: 'italic',
            color: '#b06080',
            fontSize: '1rem',
            marginBottom: '0.3rem',
          }}>
            Hope you have a blast!!
          </p>

          <p style={{
            fontFamily: '"Brush Script MT", "Segoe Script", cursive',
            fontSize: '2rem',
            color: '#4a2c10',
            lineHeight: 1.2,
            marginTop: '0.5rem',
            letterSpacing: '0.02em',
          }}>
            Brayo ♡
          </p>
        </div>

        {/* Bottom divider */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: '0.5rem',
          marginTop: '2rem',
        }}>
          <div style={{ flex: 1, height: '1px', background: '#e8a0b8' }} />
          <span style={{ fontSize: '0.65rem', color: '#e8a0b8' }}>✦</span>
          <div style={{ flex: 1, height: '1px', background: '#e8a0b8' }} />
        </div>

      </div>
    </div>
  );
};

export default Letter;