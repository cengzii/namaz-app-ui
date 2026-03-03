import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { MosqueSilhouette } from '../components/MosqueSilhouette';

export function WelcomePage() {
  const navigate = useNavigate();

  const handleBegin = () => {
    localStorage.setItem('lp-onboarded', 'true');
    navigate('/home');
  };

  useEffect(() => {
    const onboarded = localStorage.getItem('lp-onboarded');
    if (onboarded) navigate('/home', { replace: true });
  }, [navigate]);

  return (
    <div
      className="min-h-screen w-full flex items-start justify-center"
      style={{ background: '#04040C' }}
    >
      <div
        className="relative w-full max-w-[390px] min-h-screen flex flex-col overflow-hidden"
        style={{ background: '#07070F' }}
      >
        {/* Star field */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(28)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                width: Math.random() * 2 + 1 + 'px',
                height: Math.random() * 2 + 1 + 'px',
                top: Math.random() * 65 + '%',
                left: Math.random() * 100 + '%',
                background: 'rgba(255,255,255,' + (Math.random() * 0.5 + 0.1) + ')',
                animation: `twinkle ${Math.random() * 3 + 2}s ease-in-out infinite`,
                animationDelay: Math.random() * 3 + 's',
              }}
            />
          ))}
        </div>

        {/* Subtle radial glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(196,164,80,0.08) 0%, transparent 70%)',
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-8 pt-16 pb-12">
          {/* Crescent & Star mark */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="mb-10"
          >
            <svg viewBox="0 0 80 80" width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M40 8 C22 8 8 22 8 40 C8 58 22 72 40 72 C50 72 58.5 67 64 59 C59 61 53 62 47 60 C33 55 25 41 28 27 C30 18 34 12 40 8Z"
                fill="#C4A450"
              />
              <polygon
                points="58,20 60,26 66,26 61,30 63,36 58,32 53,36 55,30 50,26 56,26"
                fill="#C4A450"
              />
            </svg>
          </motion.div>

          {/* Arabic inscription */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-center mb-2"
            style={{
              fontFamily: 'Amiri, serif',
              fontSize: '28px',
              color: '#C4A450',
              letterSpacing: '0.02em',
              lineHeight: 1.6,
            }}
          >
            بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-center mb-14"
            style={{ color: 'rgba(196,164,80,0.5)', fontSize: '11px', letterSpacing: '0.15em', fontFamily: 'Inter, sans-serif' }}
          >
            In the name of Allah, the Most Gracious, the Most Merciful
          </motion.p>

          {/* App name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' }}
            className="text-center mb-3"
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '52px',
              fontWeight: 300,
              color: '#EDE7D6',
              lineHeight: 1.1,
              letterSpacing: '-0.01em',
            }}
          >
            Learn<br />Prayer
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="text-center mb-16"
            style={{
              color: '#6A6A88',
              fontSize: '15px',
              letterSpacing: '0.03em',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 300,
              lineHeight: 1.6,
            }}
          >
            A calm, guided path to<br />the five daily prayers
          </motion.p>

          {/* Begin button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="w-full"
          >
            <button
              onClick={handleBegin}
              className="w-full py-5 rounded-2xl transition-all duration-300 active:scale-[0.98]"
              style={{
                background: 'linear-gradient(135deg, #C4A450 0%, #A8882E 100%)',
                color: '#07070F',
                fontFamily: 'Inter, sans-serif',
                fontSize: '16px',
                fontWeight: 500,
                letterSpacing: '0.06em',
                boxShadow: '0 8px 32px rgba(196,164,80,0.25)',
              }}
            >
              BEGIN YOUR JOURNEY
            </button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="mt-6 text-center"
            style={{ color: '#333348', fontSize: '12px', fontFamily: 'Inter, sans-serif' }}
          >
            No account required · Always free
          </motion.p>
        </div>

        {/* Mosque silhouette at bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1.2 }}
          className="absolute bottom-0 left-0 right-0 pointer-events-none"
          style={{ color: 'rgba(196,164,80,0.06)' }}
        >
          <MosqueSilhouette className="w-full" />
        </motion.div>
      </div>

      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.4); }
        }
      `}</style>
    </div>
  );
}
