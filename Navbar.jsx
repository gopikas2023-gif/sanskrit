import React from 'react';
import { useUser } from '../context/UserContext';
import { getLanguageName } from '../data/languages';
import { Flame, Gem, Heart, BookOpen, Compass, Award, Scroll, Sparkles, Volume2 } from 'lucide-react';

export const Navbar = () => {
  const {
    sourceLang,
    streak,
    xp,
    gems,
    hearts,
    refillHearts,
    activeTab,
    setActiveTab,
    setIsLangModalOpen
  } = useUser();

  return (
    <header className="sticky top-0 z-40 bg-[#0F141C]/90 backdrop-blur-md border-b border-amber-500/20 px-4 lg:px-8 py-3 transition-all shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        {/* Brand Identity */}
        <div className="flex items-center gap-3 cursor-pointer group" onClick={() => setActiveTab('learn')}>
          <div className="relative flex items-center justify-center w-11 h-11 rounded-2xl bg-gradient-to-tr from-amber-600 via-amber-500 to-yellow-400 p-[2px] shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-[#0F141C] rounded-[14px] flex items-center justify-center font-sanskrit text-2xl text-amber-400">
              ॐ
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-display text-2xl tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-500">
                Samskritam
              </h1>
              <span className="text-xs px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 font-medium">
                संस्कृतम्
              </span>
            </div>
            <p className="text-[11px] text-slate-400 font-sans hidden sm:block">
              Learn Sanskrit in your native language
            </p>
          </div>
        </div>

        {/* Desktop Navigation Tabs */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-2xl border border-slate-800">
          <button
            onClick={() => setActiveTab('learn')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
              activeTab === 'learn'
                ? 'bg-gradient-to-r from-amber-600 to-amber-500 text-slate-950 shadow-md shadow-amber-600/30'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <Compass className="w-4 h-4" />
            <span>Path</span>
          </button>

          <button
            onClick={() => setActiveTab('alphabet')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
              activeTab === 'alphabet'
                ? 'bg-gradient-to-r from-amber-600 to-amber-500 text-slate-950 shadow-md shadow-amber-600/30'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Alphabet</span>
          </button>

          <button
            onClick={() => setActiveTab('grammar')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
              activeTab === 'grammar'
                ? 'bg-gradient-to-r from-amber-600 to-amber-500 text-slate-950 shadow-md shadow-amber-600/30'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <Scroll className="w-4 h-4" />
            <span>Grammar</span>
          </button>

          <button
            onClick={() => setActiveTab('subhashita')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
              activeTab === 'subhashita'
                ? 'bg-gradient-to-r from-amber-600 to-amber-500 text-slate-950 shadow-md shadow-amber-600/30'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>Wisdom</span>
          </button>

          <button
            onClick={() => setActiveTab('leaderboard')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
              activeTab === 'leaderboard'
                ? 'bg-gradient-to-r from-amber-600 to-amber-500 text-slate-950 shadow-md shadow-amber-600/30'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <Award className="w-4 h-4" />
            <span>Ranks</span>
          </button>
        </nav>

        {/* User Stats & Language Selector */}
        <div className="flex items-center gap-2 sm:gap-4">
          
          {/* Source Language Switch Button */}
          <button
            onClick={() => setIsLangModalOpen(true)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-800/90 border border-amber-500/30 hover:border-amber-400 text-xs sm:text-sm font-medium text-amber-200 transition-all hover:scale-105 active:scale-95 shadow-sm"
            title="Change instruction language"
          >
            <span>{getLanguageName(sourceLang)}</span>
            <span className="text-[10px] text-amber-400/80">▼</span>
          </button>

          {/* Streak Badge */}
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-orange-500/10 border border-orange-500/30 text-orange-400 font-bold text-sm" title={`${streak} Day Streak!`}>
            <Flame className="w-4 h-4 fill-orange-500 text-orange-500 animate-pulse" />
            <span>{streak}</span>
          </div>

          {/* XP Badge */}
          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 font-bold text-sm" title={`${xp} Total XP`}>
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>{xp} XP</span>
          </div>

          {/* Gems Badge */}
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-bold text-sm" title={`${gems} Gems`}>
            <Gem className="w-4 h-4 text-cyan-400" />
            <span>{gems}</span>
          </div>

          {/* Hearts Badge */}
          <div 
            onClick={hearts < 5 ? refillHearts : undefined}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-sm font-bold transition-all ${
              hearts > 0 
                ? 'bg-rose-500/10 border-rose-500/30 text-rose-400' 
                : 'bg-rose-950/60 border-rose-500/60 text-rose-300 animate-bounce cursor-pointer'
            }`}
            title={hearts < 5 ? 'Click to refill hearts with 100 Gems' : `${hearts} Hearts Remaining`}
          >
            <Heart className={`w-4 h-4 ${hearts > 0 ? 'fill-rose-500 text-rose-500' : 'text-slate-600'}`} />
            <span>{hearts}</span>
          </div>

        </div>

      </div>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0F141C]/95 backdrop-blur-lg border-t border-amber-500/20 px-4 py-2 flex justify-around items-center">
        <button
          onClick={() => setActiveTab('learn')}
          className={`flex flex-col items-center gap-1 text-xs ${activeTab === 'learn' ? 'text-amber-400 font-bold' : 'text-slate-400'}`}
        >
          <Compass className="w-5 h-5" />
          <span>Path</span>
        </button>
        <button
          onClick={() => setActiveTab('alphabet')}
          className={`flex flex-col items-center gap-1 text-xs ${activeTab === 'alphabet' ? 'text-amber-400 font-bold' : 'text-slate-400'}`}
        >
          <BookOpen className="w-5 h-5" />
          <span>Alphabet</span>
        </button>
        <button
          onClick={() => setActiveTab('grammar')}
          className={`flex flex-col items-center gap-1 text-xs ${activeTab === 'grammar' ? 'text-amber-400 font-bold' : 'text-slate-400'}`}
        >
          <Scroll className="w-5 h-5" />
          <span>Grammar</span>
        </button>
        <button
          onClick={() => setActiveTab('subhashita')}
          className={`flex flex-col items-center gap-1 text-xs ${activeTab === 'subhashita' ? 'text-amber-400 font-bold' : 'text-slate-400'}`}
        >
          <Sparkles className="w-5 h-5" />
          <span>Wisdom</span>
        </button>
        <button
          onClick={() => setActiveTab('leaderboard')}
          className={`flex flex-col items-center gap-1 text-xs ${activeTab === 'leaderboard' ? 'text-amber-400 font-bold' : 'text-slate-400'}`}
        >
          <Award className="w-5 h-5" />
          <span>Ranks</span>
        </button>
      </div>
    </header>
  );
};
