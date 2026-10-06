import React, { useState } from 'react';
import { useUser } from '../context/UserContext';
import { SANSKRIT_VOWELS, SANSKRIT_CONSONANTS } from '../data/alphabetData';
import { playSound, speakSanskrit } from '../assets/audio';
import { Volume2, Sparkles, BookOpen } from 'lucide-react';

export const AlphabetBoard = () => {
  const { sourceLang } = useUser();
  const [activeSubTab, setActiveSubTab] = useState('vowels'); // 'vowels' | 'consonants'

  const handlePlayLetter = (text) => {
    playSound('pop');
    speakSanskrit(text);
  };

  return (
    <div className="w-full max-w-5xl mx-auto py-6 px-4 pb-24">
      
      {/* Header Banner */}
      <div className="mb-8 text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-3">
          <BookOpen className="w-3.5 h-3.5 text-amber-400" />
          <span>Interactive Phonetics Guide</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-bold font-display text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-200 to-amber-400 mb-2">
          संस्कृत वर्णमाला (Sanskrit Alphabet)
        </h2>
        <p className="text-xs sm:text-sm text-slate-300">
          Tap any letter to hear authentic Sanskrit pronunciation along with IAST transliteration and word meanings.
        </p>
      </div>

      {/* Sub-tab Switcher */}
      <div className="flex justify-center mb-8">
        <div className="flex bg-slate-900/90 p-1.5 rounded-2xl border border-slate-800">
          <button
            onClick={() => {
              playSound('click');
              setActiveSubTab('vowels');
            }}
            className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
              activeSubTab === 'vowels'
                ? 'bg-gradient-to-r from-amber-600 to-amber-500 text-slate-950 shadow-lg shadow-amber-600/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            स्वर (Vowels - {SANSKRIT_VOWELS.length})
          </button>
          <button
            onClick={() => {
              playSound('click');
              setActiveSubTab('consonants');
            }}
            className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
              activeSubTab === 'consonants'
                ? 'bg-gradient-to-r from-amber-600 to-amber-500 text-slate-950 shadow-lg shadow-amber-600/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            व्यंजन (Consonants - {SANSKRIT_CONSONANTS.length})
          </button>
        </div>
      </div>

      {/* Cards Grid */}
      {activeSubTab === 'vowels' && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {SANSKRIT_VOWELS.map((item, idx) => {
            const translation = item.translations[sourceLang] || item.translations['en'];
            return (
              <div
                key={idx}
                onClick={() => handlePlayLetter(item.example)}
                className="group cursor-pointer glass-card rounded-3xl p-5 border border-amber-500/20 hover:border-amber-400 transition-all hover:scale-105 shadow-lg shadow-amber-500/5 flex flex-col items-center justify-between text-center"
              >
                <div className="w-full flex justify-end">
                  <div className="p-1.5 rounded-full bg-amber-500/10 text-amber-400 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                    <Volume2 className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div className="my-2">
                  <div className="font-sanskrit text-5xl font-bold text-amber-300 mb-1">
                    {item.letter}
                  </div>
                  <div className="text-xs font-semibold text-amber-400/90 uppercase tracking-wider font-mono">
                    /{item.iast}/
                  </div>
                </div>

                <div className="w-full pt-3 border-t border-slate-800/80 text-xs">
                  <div className="font-sanskrit font-bold text-slate-200">{item.example}</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">{translation}</div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {activeSubTab === 'consonants' && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {SANSKRIT_CONSONANTS.map((item, idx) => {
            const translation = item[sourceLang] || item.en;
            return (
              <div
                key={idx}
                onClick={() => handlePlayLetter(item.example)}
                className="group cursor-pointer glass-card rounded-3xl p-5 border border-amber-500/20 hover:border-amber-400 transition-all hover:scale-105 shadow-lg shadow-amber-500/5 flex flex-col items-center justify-between text-center"
              >
                <div className="w-full flex justify-between items-center text-[10px] text-amber-400/80">
                  <span className="truncate max-w-[100px]">{item.group}</span>
                  <div className="p-1.5 rounded-full bg-amber-500/10 text-amber-400 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                    <Volume2 className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div className="my-2">
                  <div className="font-sanskrit text-5xl font-bold text-amber-300 mb-1">
                    {item.letter}
                  </div>
                  <div className="text-xs font-semibold text-amber-400/90 uppercase tracking-wider font-mono">
                    /{item.iast}/
                  </div>
                </div>

                <div className="w-full pt-3 border-t border-slate-800/80 text-xs">
                  <div className="font-sanskrit font-bold text-slate-200">{item.example}</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">{translation}</div>
                </div>
              </div>
            );
          })}
        </div>
      )}

    </div>
  );
};
