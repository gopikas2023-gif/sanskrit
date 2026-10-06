import React from 'react';
import { useUser } from '../context/UserContext';
import { UNITS } from '../data/lessonsData';
import { Play, Lock, CheckCircle2, Star, Sparkles, Flame } from 'lucide-react';
import { playSound } from '../assets/audio';

export const LearningPath = ({ onStartLesson }) => {
  const { sourceLang, unlockedUnits, xp, streak } = useUser();

  const handleNodeClick = (unit) => {
    if (unlockedUnits.includes(unit.id)) {
      playSound('click');
      onStartLesson(unit.id);
    } else {
      playSound('incorrect');
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto py-6 px-4 pb-24">
      
      {/* Welcome Banner */}
      <div className="relative overflow-hidden mb-10 rounded-3xl bg-gradient-to-r from-amber-900/60 via-amber-800/40 to-slate-900 border border-amber-500/30 p-6 sm:p-8 shadow-2xl shadow-amber-900/20">
        <div className="absolute right-0 top-0 translate-x-8 -translate-y-8 text-9xl opacity-10 pointer-events-none font-sanskrit text-amber-300">
          ॐ
        </div>

        <div className="relative z-10 max-w-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Interactive Sanskrit Path</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold font-display text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-200 to-amber-400 mb-2">
            तव संस्कृतयात्रा (Your Sanskrit Journey)
          </h2>
          <p className="text-sm text-slate-300">
            Step by step, master authentic Sanskrit grammar, vocabulary, and ancient wisdom through interactive gamified bite-sized lessons.
          </p>
        </div>
      </div>

      {/* Vertical Path Tree */}
      <div className="space-y-12 relative">
        
        {UNITS.map((unit, index) => {
          const isUnlocked = unlockedUnits.includes(unit.id);
          const isCurrent = isUnlocked && (!unlockedUnits.includes(unit.id + 1) || unit.id === 5);
          const title = unit.title[sourceLang] || unit.title['en'];
          const desc = unit.description[sourceLang] || unit.description['en'];

          return (
            <div key={unit.id} className="relative flex flex-col items-center">
              
              {/* Unit Header Card */}
              <div className={`w-full max-w-2xl rounded-3xl p-6 border transition-all shadow-lg mb-8 ${
                isUnlocked 
                  ? 'glass-card border-amber-500/40 shadow-amber-500/5' 
                  : 'bg-slate-900/50 border-slate-800/80 opacity-75'
              }`}>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shadow-inner ${unit.bgColor} border ${unit.borderColor}`}>
                      {unit.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                          Unit {unit.id}
                        </span>
                        {isUnlocked && (
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                            Active Path
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-100">
                        {title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-400 mt-1">
                        {desc}
                      </p>
                    </div>
                  </div>

                  {!isUnlocked && (
                    <div className="p-2.5 rounded-2xl bg-slate-800/80 text-slate-500 border border-slate-700">
                      <Lock className="w-5 h-5" />
                    </div>
                  )}
                </div>
              </div>

              {/* Node Buttons Snake Sequence */}
              <div className="flex flex-col items-center gap-6 relative">
                
                {/* Node 1 */}
                <div className="relative group">
                  <button
                    onClick={() => handleNodeClick(unit)}
                    disabled={!isUnlocked}
                    className={`relative w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isUnlocked
                        ? 'bg-gradient-to-tr from-amber-600 via-amber-500 to-yellow-400 text-slate-950 shadow-xl shadow-amber-500/30 hover:scale-110 active:scale-95 animate-pulse-gold'
                        : 'bg-slate-800 text-slate-600 border border-slate-700 cursor-not-allowed'
                    }`}
                  >
                    {isUnlocked ? (
                      <div className="flex flex-col items-center">
                        <Play className="w-8 h-8 fill-slate-950 ml-1" />
                        <span className="text-[10px] font-extrabold uppercase tracking-tighter">Start</span>
                      </div>
                    ) : (
                      <Lock className="w-7 h-7" />
                    )}
                  </button>

                  {/* Floating tooltip */}
                  {isUnlocked && (
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap bg-amber-400 text-slate-950 font-bold text-xs px-3 py-1 rounded-full shadow-lg pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                      Start Lesson {unit.id}!
                    </div>
                  )}
                </div>

                {/* Connecting Line */}
                {index < UNITS.length - 1 && (
                  <div className="w-1 h-12 rounded-full bg-gradient-to-b from-amber-500/50 to-slate-800 my-1" />
                )}

              </div>

            </div>
          );
        })}

      </div>
    </div>
  );
};
