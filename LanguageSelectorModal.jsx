import React from 'react';
import { useUser } from '../context/UserContext';
import { SOURCE_LANGUAGES } from '../data/languages';
import { X, Check, Globe } from 'lucide-react';
import { playSound } from '../assets/audio';

export const LanguageSelectorModal = () => {
  const { sourceLang, setSourceLang, isLangModalOpen, setIsLangModalOpen } = useUser();

  if (!isLangModalOpen) return null;

  const handleSelectLanguage = (langId) => {
    playSound('click');
    setSourceLang(langId);
    setIsLangModalOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-xl bg-[#151D2A] border border-amber-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-amber-500/10">
        
        {/* Close Button */}
        <button
          onClick={() => setIsLangModalOpen(false)}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
            <Globe className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold font-display text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-500">
              Select Your Native / Preferred Language
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              All lesson instructions, translations, and explanations will adapt to your choice.
            </p>
          </div>
        </div>

        {/* Grid of Languages */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[60vh] overflow-y-auto pr-1">
          {SOURCE_LANGUAGES.map((lang) => {
            const isSelected = sourceLang === lang.id;
            return (
              <button
                key={lang.id}
                onClick={() => handleSelectLanguage(lang.id)}
                className={`flex items-center justify-between p-4 rounded-2xl border text-left transition-all ${
                  isSelected
                    ? 'bg-gradient-to-r from-amber-600/30 to-amber-500/10 border-amber-400 text-amber-200 shadow-lg shadow-amber-500/10 scale-[1.02]'
                    : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-amber-500/40 hover:bg-slate-800/80 hover:scale-[1.01]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{lang.flag}</span>
                  <div>
                    <div className="font-bold text-base text-slate-100">{lang.nativeName}</div>
                    <div className="text-xs text-slate-400">{lang.name}</div>
                  </div>
                </div>

                {isSelected ? (
                  <div className="w-6 h-6 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center font-bold">
                    <Check className="w-4 h-4" />
                  </div>
                ) : (
                  <span className="text-xs px-2.5 py-1 rounded-full bg-slate-800 text-slate-400 font-medium">
                    {lang.tag}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Footer info */}
        <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-500">
          <span>Target Language: <strong>संस्कृतम् (Sanskrit)</strong></span>
          <span>Switch anytime from top navbar</span>
        </div>

      </div>
    </div>
  );
};
