import { useState } from 'react';
import type { ReactNode } from 'react';
import { useParams, useNavigate } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, Info } from 'lucide-react';
import { getPrayer } from '../data/prayers';

const POSITION_VISUAL: Record<string, ReactNode> = {
  standing: (
    <svg viewBox="0 0 80 120" width="60" height="90" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="40" cy="14" r="10" fill="currentColor" opacity="0.7" />
      <line x1="40" y1="24" x2="40" y2="72" stroke="currentColor" strokeWidth="6" strokeLinecap="round" opacity="0.7" />
      <line x1="40" y1="44" x2="22" y2="62" stroke="currentColor" strokeWidth="5" strokeLinecap="round" opacity="0.6" />
      <line x1="40" y1="44" x2="58" y2="62" stroke="currentColor" strokeWidth="5" strokeLinecap="round" opacity="0.6" />
      <line x1="40" y1="72" x2="28" y2="108" stroke="currentColor" strokeWidth="5" strokeLinecap="round" opacity="0.7" />
      <line x1="40" y1="72" x2="52" y2="108" stroke="currentColor" strokeWidth="5" strokeLinecap="round" opacity="0.7" />
    </svg>
  ),
  bowing: (
    <svg viewBox="0 0 120 100" width="90" height="75" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="32" r="10" fill="currentColor" opacity="0.7" />
      <line x1="20" y1="42" x2="70" y2="52" stroke="currentColor" strokeWidth="6" strokeLinecap="round" opacity="0.7" />
      <line x1="20" y1="52" x2="20" y2="88" stroke="currentColor" strokeWidth="5" strokeLinecap="round" opacity="0.7" />
      <line x1="20" y1="52" x2="36" y2="88" stroke="currentColor" strokeWidth="5" strokeLinecap="round" opacity="0.7" />
      <line x1="70" y1="52" x2="80" y2="80" stroke="currentColor" strokeWidth="5" strokeLinecap="round" opacity="0.6" />
      <line x1="70" y1="52" x2="100" y2="68" stroke="currentColor" strokeWidth="5" strokeLinecap="round" opacity="0.6" />
    </svg>
  ),
  prostration: (
    <svg viewBox="0 0 130 80" width="100" height="60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="28" r="9" fill="currentColor" opacity="0.7" />
      <line x1="16" y1="37" x2="58" y2="55" stroke="currentColor" strokeWidth="5" strokeLinecap="round" opacity="0.6" />
      <line x1="58" y1="55" x2="78" y2="38" stroke="currentColor" strokeWidth="5" strokeLinecap="round" opacity="0.6" />
      <line x1="78" y1="38" x2="110" y2="55" stroke="currentColor" strokeWidth="5" strokeLinecap="round" opacity="0.6" />
      <line x1="58" y1="55" x2="42" y2="72" stroke="currentColor" strokeWidth="5" strokeLinecap="round" opacity="0.5" />
      <line x1="78" y1="38" x2="96" y2="72" stroke="currentColor" strokeWidth="5" strokeLinecap="round" opacity="0.5" />
    </svg>
  ),
  sitting: (
    <svg viewBox="0 0 100 100" width="70" height="70" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="40" cy="16" r="10" fill="currentColor" opacity="0.7" />
      <line x1="40" y1="26" x2="40" y2="60" stroke="currentColor" strokeWidth="6" strokeLinecap="round" opacity="0.7" />
      <line x1="40" y1="42" x2="20" y2="60" stroke="currentColor" strokeWidth="5" strokeLinecap="round" opacity="0.6" />
      <line x1="40" y1="42" x2="60" y2="60" stroke="currentColor" strokeWidth="5" strokeLinecap="round" opacity="0.6" />
      <line x1="40" y1="60" x2="20" y2="88" stroke="currentColor" strokeWidth="5" strokeLinecap="round" opacity="0.6" />
      <line x1="40" y1="60" x2="72" y2="72" stroke="currentColor" strokeWidth="5" strokeLinecap="round" opacity="0.5" />
    </svg>
  ),
};

export function PrayerFlowPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const prayer = getPrayer(id ?? '');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [showMeaning, setShowMeaning] = useState(false);
  const [completed, setCompleted] = useState(false);

  if (!prayer) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ background: '#07070F' }}
      >
        <p style={{ color: '#4A4A68', fontFamily: 'Inter, sans-serif' }}>Prayer not found.</p>
      </div>
    );
  }

  const steps = prayer.steps;
  const step = steps[currentIndex];
  const progress = (currentIndex + 1) / steps.length;

  const goNext = () => {
    if (currentIndex < steps.length - 1) {
      setDirection(1);
      setShowMeaning(false);
      setCurrentIndex(i => i + 1);
    } else {
      setCompleted(true);
    }
  };

  const goPrev = () => {
    if (currentIndex > 0) {
      setDirection(-1);
      setShowMeaning(false);
      setCurrentIndex(i => i - 1);
    }
  };

  if (completed) {
    return (
      <div
        className="min-h-screen flex flex-col items-center justify-center px-8"
        style={{ background: '#07070F' }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          {/* Gold star */}
          <div className="mb-8">
            <svg viewBox="0 0 80 80" width="72" height="72" fill="none" xmlns="http://www.w3.org/2000/svg">
              <polygon
                points="40,6 48,28 72,28 53,43 60,66 40,52 20,66 27,43 8,28 32,28"
                fill="#C4A450"
                opacity="0.9"
              />
            </svg>
          </div>

          <p
            style={{ fontFamily: 'Amiri, serif', fontSize: '32px', color: '#C4A450', marginBottom: '8px' }}
          >
            الحَمْدُ لِلَّهِ
          </p>
          <p
            style={{ color: '#6A6A88', fontFamily: 'Inter, sans-serif', fontSize: '13px', marginBottom: '32px' }}
          >
            Alhamdulillah · All praise is for Allah
          </p>

          <h2
            style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '38px', fontWeight: 300, color: '#EDE7D6', lineHeight: 1.2, marginBottom: '12px' }}
          >
            {prayer.name} Complete
          </h2>
          <p
            style={{ color: '#6A6A88', fontFamily: 'Inter, sans-serif', fontSize: '14px', lineHeight: 1.6, maxWidth: '280px' }}
          >
            You have completed one rakat of {prayer.name}. May Allah accept your prayer.
          </p>

          <div className="mt-10 space-y-3">
            <button
              onClick={() => { setCompleted(false); setCurrentIndex(0); }}
              className="w-full py-4 rounded-2xl"
              style={{
                background: `linear-gradient(135deg, ${prayer.color}CC 0%, ${prayer.color}88 100%)`,
                color: '#07070F',
                fontFamily: 'Inter, sans-serif',
                fontSize: '15px',
                fontWeight: 500,
                letterSpacing: '0.08em',
              }}
            >
              PRACTICE AGAIN
            </button>
            <button
              onClick={() => navigate(`/prayers/${prayer.id}`)}
              className="w-full py-4 rounded-2xl"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                color: '#9090A8',
                fontFamily: 'Inter, sans-serif',
                fontSize: '15px',
              }}
            >
              Back to {prayer.name}
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ background: '#07070F' }}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between px-6 pt-14 pb-6">
        <button
          onClick={() => navigate(`/prayers/${prayer.id}`)}
          className="p-2 rounded-xl"
          style={{ background: 'rgba(255,255,255,0.04)', color: '#6A6A88' }}
        >
          <X size={20} />
        </button>

        <div className="text-center">
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#4A4A68', letterSpacing: '0.1em' }}>
            {prayer.name.toUpperCase()}
          </p>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#9090A8' }}>
            Step {currentIndex + 1} of {steps.length}
          </p>
        </div>

        <button
          onClick={() => setShowMeaning(!showMeaning)}
          className="p-2 rounded-xl"
          style={{
            background: showMeaning ? 'rgba(196,164,80,0.15)' : 'rgba(255,255,255,0.04)',
            color: showMeaning ? '#C4A450' : '#6A6A88',
          }}
        >
          <Info size={20} />
        </button>
      </div>

      {/* Progress bar */}
      <div className="px-6 mb-8">
        <div className="h-0.5 w-full rounded-full" style={{ background: 'rgba(255,255,255,0.06)' }}>
          <motion.div
            className="h-full rounded-full"
            style={{ background: prayer.color }}
            animate={{ width: `${progress * 100}%` }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          />
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col items-center justify-start px-6 overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={step.id}
            custom={direction}
            initial={{ opacity: 0, x: direction * 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -40 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="w-full flex flex-col items-center"
          >
            {/* Position illustration */}
            <div
              className="mb-6 flex items-center justify-center"
              style={{ color: prayer.color, opacity: 0.5 }}
            >
              {POSITION_VISUAL[step.position ?? 'standing']}
            </div>

            {/* Step name */}
            <p
              className="mb-6 text-center"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '13px',
                color: '#6A6A88',
                letterSpacing: '0.12em',
                fontWeight: 500,
              }}
            >
              {step.name.toUpperCase()}
            </p>

            {/* Arabic text */}
            <p
              className="text-center mb-4 leading-relaxed"
              style={{
                fontFamily: 'Amiri, serif',
                fontSize: '36px',
                color: '#EDE7D6',
                lineHeight: 1.8,
                direction: 'rtl',
              }}
            >
              {step.arabic}
            </p>

            {/* Transliteration */}
            <p
              className="text-center mb-4 px-4"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '15px',
                color: prayer.color,
                fontStyle: 'italic',
                fontWeight: 300,
                lineHeight: 1.6,
              }}
            >
              {step.transliteration}
            </p>

            {/* Translation */}
            <p
              className="text-center px-6"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '14px',
                color: '#7070A0',
                lineHeight: 1.7,
                fontWeight: 300,
              }}
            >
              {step.translation}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Meaning card */}
        <AnimatePresence>
          {showMeaning && step.meaning_note && (
            <motion.div
              initial={{ opacity: 0, y: 20, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              exit={{ opacity: 0, y: 20, height: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full mt-8 p-5 rounded-2xl overflow-hidden"
              style={{
                background: 'rgba(196,164,80,0.06)',
                border: '1px solid rgba(196,164,80,0.15)',
              }}
            >
              <p
                style={{ color: '#4A4A68', fontFamily: 'Inter, sans-serif', fontSize: '10px', letterSpacing: '0.12em', marginBottom: '8px', fontWeight: 500 }}
                className="uppercase"
              >
                Reflection
              </p>
              <p
                style={{ color: '#9090A8', fontFamily: 'Inter, sans-serif', fontSize: '14px', lineHeight: 1.7, fontStyle: 'italic', fontWeight: 300 }}
              >
                {step.meaning_note}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="px-6 pb-12 pt-8">
        <div className="flex gap-4">
          <button
            onClick={goPrev}
            disabled={currentIndex === 0}
            className="flex items-center justify-center w-14 h-14 rounded-2xl flex-shrink-0 transition-all duration-200 disabled:opacity-20"
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.06)',
              color: '#9090A8',
            }}
          >
            <ChevronLeft size={22} />
          </button>

          <button
            onClick={goNext}
            className="flex-1 h-14 rounded-2xl flex items-center justify-center gap-2 transition-all duration-200 active:scale-[0.98]"
            style={{
              background:
                currentIndex === steps.length - 1
                  ? `linear-gradient(135deg, ${prayer.color}CC 0%, ${prayer.color}88 100%)`
                  : '#141426',
              border: currentIndex < steps.length - 1 ? `1px solid ${prayer.color}30` : 'none',
              color: currentIndex === steps.length - 1 ? '#07070F' : prayer.color,
              fontFamily: 'Inter, sans-serif',
              fontSize: '14px',
              fontWeight: 500,
              letterSpacing: '0.08em',
            }}
          >
            {currentIndex === steps.length - 1 ? (
              'COMPLETE'
            ) : (
              <>
                Next
                <ChevronRight size={18} />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}