import React, { useState, useEffect } from 'react';

const Envelope = ({ onNext }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div style={{
      minHeight: '100vh',
      background: 'radial-gradient(ellipse at 50% 40%, #fdeaf0 0%, #f9d9e7 40%, #f0c4d8 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      fontFamily: 'Georgia, serif',
      overflow: 'hidden',
      position: 'relative',
    }}>

      <style>{`
        @keyframes float0 { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-12px); } }
        @keyframes float1 { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-7px); } }
        @keyframes float2 { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-16px); } }
      `}</style>

      {/* Floating dots — same as CakeScene */}
      {[...Array(18)].map((_, i) => (
        <div key={i} style={{
          position: 'absolute',
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

      {/* Envelope card */}
      <div style={{
        width: '100%',
        maxWidth: '400px',
        background: '#fdf8f0',
        border: '2px solid #e8a0b8',
        borderRadius: '3px',
        padding: '2.5rem',
        boxShadow: '4px 6px 24px rgba(180, 80, 120, 0.15)',
        textAlign: 'center',
        position: 'relative',
        zIndex: 1,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.7s ease, transform 0.7s ease',
      }}>

        {/* Inner border */}
        <div style={{
          border: '1px solid #f0c0d0',
          borderRadius: '1px',
          padding: '2rem 1.5rem',
        }}>

          {/* Corner diamonds */}
          {[
            { top: -6, left: -6 },
            { top: -6, right: -6 },
            { bottom: -6, left: -6 },
            { bottom: -6, right: -6 },
          ].map((pos, i) => (
            <div key={i} style={{
              position: 'absolute',
              ...pos,
              width: 10, height: 10,
              background: '#fdf8f0',
              border: '1px solid #e8a0b8',
              transform: 'rotate(45deg)',
            }} />
          ))}

          <p style={{
            fontStyle: 'italic',
            color: '#b06080',
            fontSize: '0.9rem',
            marginBottom: '0.6rem',
          }}>
            To my bestfriend,
          </p>

          {/* <h1 style={{
            fontSize: '2rem',
            color: '#3e2210',
            fontWeight: 'normal',
            marginBottom: '2rem',
            lineHeight: 1.4,
          }}>
            Short and Heartfelt.
          </h1> */}

          {/* Divider */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: '0.5rem',
            marginBottom: '1.8rem',
          }}>
            <div style={{ flex: 1, height: '1px', background: '#f0c0d0' }} />
            <span style={{ fontSize: '0.7rem', color: '#e8a0b8' }}>✦</span>
            <div style={{ flex: 1, height: '1px', background: '#f0c0d0' }} />
          </div>

          {/* Wax seal button */}
          <button
            onClick={onNext}
            style={{
              width: 90, height: 90,
              borderRadius: '50%',
              background: 'radial-gradient(circle at 35% 35%, #e03030, #9b0000)',
              border: '3px solid #7a0000',
              color: '#fde8e8',
              fontSize: '1.4rem',
              cursor: 'pointer',
              boxShadow: '0 4px 16px rgba(120, 0, 0, 0.4)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '2px',
              margin: '0 auto',
              transition: 'transform 0.15s, box-shadow 0.15s',
              outline: 'none',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'scale(1.08)';
              e.currentTarget.style.boxShadow = '0 6px 22px rgba(120,0,0,0.5)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(120,0,0,0.4)';
            }}
            onMouseDown={e => e.currentTarget.style.transform = 'scale(0.95)'}
            onMouseUp={e => e.currentTarget.style.transform = 'scale(1.08)'}
          >
            <span>✉️</span>
            <span style={{ fontSize: '0.6rem', fontStyle: 'italic', letterSpacing: '0.05em' }}>open</span>
          </button>

        </div>
      </div>
    </div>
  );
};

export default Envelope;