import React, { createContext, useContext, useEffect, useState } from 'react';

export type Language = 'tr' | 'en';
export type Mode = 'simple' | 'deep';

export interface PrayerRecord {
  id: string;
  prayerName: string;
  timestamp: number;
  mode: Mode;
}

export interface Settings {
  audioSpeed: number;
  showTransliteration: boolean;
  darkData: boolean;
  keepScreenOn: boolean;
  notifications: {
    prayerTime: boolean;
    preparation: boolean;
  };
}

interface AppState {
  language: Language;
  mode: Mode;
  completedPrayers: PrayerRecord[];
  settings: Settings;
  hasOnboarded: boolean;
}

interface AppContextType extends AppState {
  setLanguage: (lang: Language) => void;
  setMode: (mode: Mode) => void;
  addCompletedPrayer: (record: PrayerRecord) => void;
  updateSettings: (settings: Partial<Settings>) => void;
  completeOnboarding: () => void;
  resetProgress: () => void;
}

const defaultSettings: Settings = {
  audioSpeed: 1.0,
  showTransliteration: true,
  darkData: true,
  keepScreenOn: true,
  notifications: {
    prayerTime: false,
    preparation: false,
  },
};

const defaultState: AppState = {
  language: 'en',
  mode: 'simple',
  completedPrayers: [],
  settings: defaultSettings,
  hasOnboarded: false,
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<AppState>(() => {
    // Load from local storage
    try {
      const stored = localStorage.getItem('prayer-app-state');
      if (stored) {
        return { ...defaultState, ...JSON.parse(stored) };
      }
    } catch (e) {
      console.error('Failed to load state', e);
    }
    return defaultState;
  });

  useEffect(() => {
    // Save to local storage
    try {
      localStorage.setItem('prayer-app-state', JSON.stringify(state));
    } catch (e) {
      console.error('Failed to save state', e);
    }
  }, [state]);

  const setLanguage = (language: Language) => setState(prev => ({ ...prev, language }));
  const setMode = (mode: Mode) => setState(prev => ({ ...prev, mode }));
  
  const addCompletedPrayer = (record: PrayerRecord) => {
    setState(prev => ({
      ...prev,
      completedPrayers: [...prev.completedPrayers, record]
    }));
  };

  const updateSettings = (newSettings: Partial<Settings>) => {
    setState(prev => ({
      ...prev,
      settings: { ...prev.settings, ...newSettings }
    }));
  };

  const completeOnboarding = () => setState(prev => ({ ...prev, hasOnboarded: true }));
  
  const resetProgress = () => setState(prev => ({ ...prev, completedPrayers: [] }));

  return (
    <AppContext.Provider value={{
      ...state,
      setLanguage,
      setMode,
      addCompletedPrayer,
      updateSettings,
      completeOnboarding,
      resetProgress
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
