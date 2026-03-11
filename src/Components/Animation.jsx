import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import birthdayAnimation from "../assets/happyBirthday.json";

export default function Animation({ onNext }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const show = setTimeout(() => setVisible(true), 100);
    const timer = setTimeout(() => onNext(), 5700);
    return () => { clearTimeout(show); clearTimeout(timer); };
  }, [onNext]);

  return (
    <div style={{
      minHeight: '100vh',
      background: 'radial-gradient(ellipse at 50% 40%, #ffe4ec 0%, #ffd6e7 40%, #f5b8d0 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Georgia, serif',
      overflow: 'hidden',
      position: 'relative',
    }}>

      {/* Floating dots background */}
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
        }} />
      ))}

      <style>{`
        @keyframes float0 { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-12px); } }
        @keyframes float1 { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-7px); } }
        @keyframes float2 { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-16px); } }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>

      {/* Lottie animation */}
      <div style={{ width: 500, zIndex: 1 }}>
        <Lottie animationData={birthdayAnimation} loop />
      </div>

      {/* Subtitle text */}
      {/* <p style={{
        marginTop: '0.5rem',
        fontStyle: 'italic',
        color: '#b04070',
        fontSize: '1.05rem',
        letterSpacing: '0.08em',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(12px)',
        transition: 'opacity 0.8s ease 0.4s, transform 0.8s ease 0.4s',
        zIndex: 1,
      }}>
        Just for you...
      </p> */}

      {/* Progress bar */}
      <div style={{
        position: 'absolute',
        bottom: '2.5rem',
        width: '120px',
        height: '3px',
        background: 'rgba(180,80,120,0.2)',
        borderRadius: '99px',
        overflow: 'hidden',
      }}>
        <div style={{
          height: '100%',
          background: 'linear-gradient(to right, #e07090, #c0406a)',
          borderRadius: '99px',
          animation: 'progressFill 5.7s linear forwards',
        }} />
      </div>
      <style>{`
        @keyframes progressFill { from { width: 0%; } to { width: 100%; } }
      `}</style>

    </div>
  );
}