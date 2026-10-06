import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Trophy, Sparkles, Gem, ArrowRight, RotateCcw } from 'lucide-react';
import { playSound } from '../assets/audio';

export const LessonCompleteModal = ({ unitId, onContinue }) => {
  useEffect(() => {
    playSound('fanfare');
    // Launch celebratory confetti burst
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#f59e0b', '#fbbf24', '#d97706', '#ef4444', '#10b981']
    });
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="w-full max-w-md bg-[#151D2A] border border-amber-500/40 rounded-3xl p-6 sm:p-8 text-center shadow-2xl shadow-amber-500/20 animate-celebrate">
        
        {/* Trophy Mascot Emblem */}
        <div className="relative w-24 h-24 mx-auto mb-6 flex items-center justify-center rounded-3xl bg-gradient-to-tr from-amber-600 via-amber-500 to-yellow-400 p-1 shadow-xl shadow-amber-500/30">
          <div className="w-full h-full bg-[#0F141C] rounded-[22px] flex items-center justify-center text-amber-400">
            <Trophy className="w-12 h-12 text-amber-400 animate-bounce" />
          </div>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold font-display text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-200 to-amber-400 mb-1">
          अभिनन्दनानि! (Congratulations!)
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 mb-6">
          You have successfully completed Unit {unitId} Sanskrit Lesson!
        </p>

        {/* Reward Stats Grid */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-300 flex flex-col items-center">
            <Sparkles className="w-6 h-6 text-amber-400 mb-1" />
            <span className="text-xl font-bold">+30 XP</span>
            <span className="text-[10px] text-amber-400/80 uppercase tracking-wider">Experience</span>
          </div>

          <div className="p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 flex flex-col items-center">
            <Gem className="w-6 h-6 text-cyan-400 mb-1" />
            <span className="text-xl font-bold">+15 Gems</span>
            <span className="text-[10px] text-cyan-400/80 uppercase tracking-wider">Rewards</span>
          </div>
        </div>

        {/* Continue Button */}
        <button
          onClick={onContinue}
          className="w-full py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-slate-950 font-bold text-lg shadow-xl shadow-amber-500/20 flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
        >
          <span>Continue Journey</span>
          <ArrowRight className="w-5 h-5" />
        </button>

      </div>
    </div>
  );
};
