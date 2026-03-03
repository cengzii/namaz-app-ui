import React, { useState } from 'react';
import { useParams, Link } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';

const mockSteps = {
  wudu: [
    { title: 'Intention (Niyyah)', description: 'Make the intention in your heart to perform Wudu for the sake of Allah.', image: '🤲' },
    { title: 'Hands', description: 'Wash your hands three times, ensuring water reaches between fingers.', image: '👐' },
    { title: 'Mouth', description: 'Rinse your mouth three times with water.', image: '👄' },
    { title: 'Nose', description: 'Inhale water into your nose and blow it out three times.', image: '👃' },
    { title: 'Face', description: 'Wash your entire face three times, from hairline to chin and ear to ear.', image: '😶' },
    { title: 'Arms', description: 'Wash your arms up to the elbows three times, starting with the right.', image: '💪' },
    { title: 'Head', description: 'Wipe your head with wet hands once, from forehead to nape and back.', image: '💆‍♂️' },
    { title: 'Ears', description: 'Wipe the inside and outside of your ears with wet fingers.', image: '👂' },
    { title: 'Feet', description: 'Wash your feet up to the ankles three times, starting with the right.', image: '🦶' },
  ],
  salah: [
    { title: 'Stand (Qiyam)', description: 'Stand facing the Qibla with intention.', image: '🚶' },
    { title: 'Takbir', description: 'Raise hands to ears and say "Allahu Akbar".', image: '🙌' },
    { title: 'Recitation', description: 'Recite Surah Al-Fatiha and another surah.', image: '📖' },
    { title: 'Ruku', description: 'Bow down with hands on knees, back straight.', image: '🙇‍♂️' },
    { title: 'Rise', description: 'Rise from Ruku saying "Sami Allahu Liman Hamidah".', image: '🚶' },
    { title: 'Sujood', description: 'Prostrate with forehead, nose, palms, knees, and toes on ground.', image: '🙇‍♂️' },
    { title: 'Sit', description: 'Sit between the two prostrations.', image: '🧎‍♂️' },
    { title: 'Sujood', description: 'Perform the second prostration.', image: '🙇‍♂️' },
  ]
};

export function LearnDetail() {
  const { id } = useParams();
  const steps = mockSteps[id as keyof typeof mockSteps] || mockSteps.wudu;
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(curr => curr + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(curr => curr - 1);
    }
  };

  return (
    <div className="flex flex-col h-full bg-slate-950 text-slate-50">
      {/* Header */}
      <header className="flex items-center justify-between p-6">
        <Link to="/learn" className="p-2 -ml-2 text-slate-400 hover:text-slate-100 transition-colors">
          <ChevronLeft size={24} />
        </Link>
        <h1 className="text-lg font-medium tracking-wide uppercase text-slate-300">
          {id?.charAt(0).toUpperCase() + id?.slice(1)} Guide
        </h1>
        <div className="w-8" /> {/* Spacer */}
      </header>

      {/* Progress Bar */}
      <div className="px-6 mb-8">
        <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            className="h-full bg-emerald-500"
          />
        </div>
        <div className="flex justify-between mt-2 text-xs text-slate-500 uppercase tracking-widest">
          <span>Step {currentStep + 1}</span>
          <span>{steps.length} Steps</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 pb-24 text-center max-w-md mx-auto w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center gap-8 w-full"
          >
            <div className="w-48 h-48 rounded-full bg-slate-900 border-2 border-slate-800 flex items-center justify-center text-8xl shadow-2xl shadow-emerald-900/10 mb-4 relative">
                {/* Decorative ring */}
                <div className="absolute inset-0 border border-slate-700/30 rounded-full scale-110" />
                {steps[currentStep].image}
            </div>
            
            <div className="space-y-4">
              <h2 className="text-4xl font-light font-serif text-slate-50">
                {steps[currentStep].title}
              </h2>
              <p className="text-lg text-slate-400 leading-relaxed font-light">
                {steps[currentStep].description}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer Navigation */}
      <div className="fixed bottom-0 left-0 right-0 p-6 bg-slate-950/80 backdrop-blur-md border-t border-slate-800">
        <div className="max-w-md mx-auto flex justify-between gap-4">
          <button
            onClick={prevStep}
            disabled={currentStep === 0}
            className={`flex-1 py-4 rounded-xl font-medium tracking-wide transition-colors ${
              currentStep === 0
                ? 'bg-slate-900 text-slate-600 cursor-not-allowed'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            Back
          </button>
          <button
            onClick={nextStep}
            disabled={currentStep === steps.length - 1}
            className={`flex-[2] py-4 rounded-xl font-medium tracking-wide transition-colors flex items-center justify-center gap-2 ${
              currentStep === steps.length - 1
                ? 'bg-emerald-600 text-white' // Last step done style could be different
                : 'bg-emerald-500 text-slate-950 hover:bg-emerald-400'
            }`}
          >
            {currentStep === steps.length - 1 ? (
              <>
                <Check size={20} /> Complete
              </>
            ) : (
              <>
                Next Step <ChevronRight size={20} />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
