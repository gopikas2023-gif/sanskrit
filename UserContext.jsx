import React, { createContext, useContext, useState, useEffect } from 'react';
import { playSound } from '../assets/audio';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // Saved user preferences & progress
  const [sourceLang, setSourceLang] = useState(() => {
    return localStorage.getItem('sanskrit_source_lang') || 'en';
  });

  const [streak, setStreak] = useState(() => {
    return parseInt(localStorage.getItem('sanskrit_streak') || '3', 10);
  });

  const [xp, setXp] = useState(() => {
    return parseInt(localStorage.getItem('sanskrit_xp') || '140', 10);
  });

  const [gems, setGems] = useState(() => {
    return parseInt(localStorage.getItem('sanskrit_gems') || '450', 10);
  });

  const [hearts, setHearts] = useState(() => {
    return parseInt(localStorage.getItem('sanskrit_hearts') || '5', 10);
  });

  const [unlockedUnits, setUnlockedUnits] = useState(() => {
    const saved = localStorage.getItem('sanskrit_unlocked_units');
    return saved ? JSON.parse(saved) : [1, 2];
  });

  const [activeTab, setActiveTab] = useState('learn'); // 'learn' | 'alphabet' | 'grammar' | 'subhashita' | 'leaderboard'
  const [isLangModalOpen, setIsLangModalOpen] = useState(false);

  // Persist to local storage
  useEffect(() => {
    localStorage.setItem('sanskrit_source_lang', sourceLang);
  }, [sourceLang]);

  useEffect(() => {
    localStorage.setItem('sanskrit_streak', streak.toString());
  }, [streak]);

  useEffect(() => {
    localStorage.setItem('sanskrit_xp', xp.toString());
  }, [xp]);

  useEffect(() => {
    localStorage.setItem('sanskrit_gems', gems.toString());
  }, [gems]);

  useEffect(() => {
    localStorage.setItem('sanskrit_hearts', hearts.toString());
  }, [hearts]);

  useEffect(() => {
    localStorage.setItem('sanskrit_unlocked_units', JSON.stringify(unlockedUnits));
  }, [unlockedUnits]);

  const addXp = (amount) => {
    setXp(prev => prev + amount);
    setGems(prev => prev + Math.floor(amount / 2));
  };

  const completeUnitLesson = (unitId) => {
    playSound('fanfare');
    addXp(30);
    
    // Unlock next unit if available
    if (!unlockedUnits.includes(unitId + 1)) {
      setUnlockedUnits(prev => [...prev, unitId + 1]);
    }
  };

  const deductHeart = () => {
    playSound('incorrect');
    setHearts(prev => Math.max(0, prev - 1));
  };

  const refillHearts = () => {
    if (gems >= 100) {
      setGems(prev => prev - 100);
      setHearts(5);
      playSound('pop');
    }
  };

  return (
    <UserContext.Provider value={{
      sourceLang,
      setSourceLang,
      streak,
      setStreak,
      xp,
      addXp,
      gems,
      setGems,
      hearts,
      deductHeart,
      refillHearts,
      unlockedUnits,
      completeUnitLesson,
      activeTab,
      setActiveTab,
      isLangModalOpen,
      setIsLangModalOpen
    }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within UserProvider');
  }
  return context;
};
