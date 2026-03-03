import { useNavigate } from 'react-router';
import { motion } from 'motion/react';

export function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-8 text-center"
      style={{ background: '#07070F' }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <p
          style={{ fontFamily: 'Amiri, serif', fontSize: '64px', color: 'rgba(196,164,80,0.2)', marginBottom: '16px', lineHeight: 1 }}
        >
          ٤٠٤
        </p>
        <h1
          style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '36px', fontWeight: 300, color: '#EDE7D6', marginBottom: '12px' }}
        >
          Page Not Found
        </h1>
        <p
          style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#4A4A68', lineHeight: 1.6, marginBottom: '32px' }}
        >
          This page does not exist.<br />Return to your journey.
        </p>
        <button
          onClick={() => navigate('/home')}
          className="px-8 py-4 rounded-2xl"
          style={{
            background: 'rgba(196,164,80,0.08)',
            border: '1px solid rgba(196,164,80,0.2)',
            color: '#C4A450',
            fontFamily: 'Inter, sans-serif',
            fontSize: '14px',
            letterSpacing: '0.06em',
          }}
        >
          Return Home
        </button>
      </motion.div>
    </div>
  );
}
