import React, { useState } from 'react';
import { UserProvider, useUser } from './context/UserContext';
import { Navbar } from './components/Navbar';
import { LanguageSelectorModal } from './components/LanguageSelectorModal';
import { LearningPath } from './components/LearningPath';
import { AlphabetBoard } from './components/AlphabetBoard';
import { GrammarCheatSheet } from './components/GrammarCheatSheet';
import { SubhashitaCard } from './components/SubhashitaCard';
import { Leaderboard } from './components/Leaderboard';
import { LessonScreen } from './components/LessonScreen';
import { LessonCompleteModal } from './components/LessonCompleteModal';

const MainContent = () => {
  const { activeTab, completeUnitLesson } = useUser();
  const [activeLessonUnitId, setActiveLessonUnitId] = useState(null);
  const [completedUnitId, setCompletedUnitId] = useState(null);

  const handleStartLesson = (unitId) => {
    setActiveLessonUnitId(unitId);
  };

  const handleLessonComplete = (unitId) => {
    setActiveLessonUnitId(null);
    completeUnitLesson(unitId);
    setCompletedUnitId(unitId);
  };

  return (
    <div className="min-h-screen bg-[#0F141C] text-slate-100 flex flex-col font-sans">
      
      {/* Top Navbar */}
      <Navbar />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6">
        {activeTab === 'learn' && <LearningPath onStartLesson={handleStartLesson} />}
        {activeTab === 'alphabet' && <AlphabetBoard />}
        {activeTab === 'grammar' && <GrammarCheatSheet />}
        {activeTab === 'subhashita' && <SubhashitaCard />}
        {activeTab === 'leaderboard' && <Leaderboard />}
      </main>

      {/* Language Selector Modal */}
      <LanguageSelectorModal />

      {/* Active Lesson Modal Screen */}
      {activeLessonUnitId !== null && (
        <LessonScreen
          unitId={activeLessonUnitId}
          onComplete={handleLessonComplete}
          onClose={() => setActiveLessonUnitId(null)}
        />
      )}

      {/* Lesson Completion Rewards Modal */}
      {completedUnitId !== null && (
        <LessonCompleteModal
          unitId={completedUnitId}
          onContinue={() => setCompletedUnitId(null)}
        />
      )}

    </div>
  );
};

export function App() {
  return (
    <UserProvider>
      <MainContent />
    </UserProvider>
  );
}

export default App;
