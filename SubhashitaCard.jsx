import React from 'react';
import { useUser } from '../context/UserContext';
import { Sparkles, Volume2, Quote, BookOpen } from 'lucide-react';
import { playSound, speakSanskrit } from '../assets/audio';

export const SubhashitaCard = () => {
  const { sourceLang } = useUser();

  const verse = "विद्या ददाति विनयं विनयाद् याति पात्रताम्। पात्रत्वाद्धनमाप्नोति धनाद्धर्मं ततः सुखम्॥";
  const iast = "Vidyā dadāti vinayaṃ vinayād yāti pātratām | Pātratvāddhanamāpnoti dhanāddharmaṃ tataḥ sukham ||";

  const translations = {
    en: 'True knowledge imparts humility; from humility comes worthiness; from worthiness comes wealth; from wealth comes righteousness (Dharma), and from Dharma comes true happiness.',
    hi: 'विद्या नम्रता प्रदान करती है; नम्रता से योग्यता आती है; योग्यता से धन प्राप्त होता है; धन से धर्म होता है और धर्म से ही सच्चा सुख मिलता है।',
    ta: 'கல்வி அடக்கத்தை தருகிறது; அடக்கத்தால் தகுதி கிடைக்கிறது; தகுதியால் செல்வம் பெறப்படுகிறது; செல்வத்தால் தர்மம் உருவாகிறது, தர்மத்தால் உண்மையான இன்பம் கிடைக்கிறது.',
    te: 'విద్య వినయాన్ని ఇస్తుంది; వినయంతో అర్హత వస్తుంది; అర్హతతో ధనం లభిస్తుంది; ధనంతో ధర్మం జరుగుతుంది, ధర్మంతోనే నిశ్చలమైన సుఖం లభిస్తుంది.',
    es: 'El verdadero conocimiento otorga humildad; de la humildad viene la dignidad; de la dignidad viene la riqueza; de la riqueza viene la rectitud (Dharma), y del Dharma viene la verdadera felicidad.',
    fr: 'La vraie connaissance donne l\'humilité; de l\'humilité vient la valeur; de la valeur vient la richesse; de la richesse vient la vertu (Dharma), et du Dharma vient le vrai bonheur.',
    de: 'Wahres Wissen verleiht Demut; aus Demut entsteht Würde; aus Würde entsteht Wohlstand; aus Wohlstand entsteht Dharma (Rechtschaffenheit), und aus Dharma entsteht wahres Glück.'
  };

  const wordBreakdown = [
    { word: 'विद्या (Vidyā)', meaning: { en: 'Knowledge', hi: 'ज्ञान / शिक्षा', ta: 'கல்வி' } },
    { word: 'ददाति (Dadāti)', meaning: { en: 'Gives / Bestows', hi: 'देती है', ta: 'தருகிறது' } },
    { word: 'विनयम् (Vinayam)', meaning: { en: 'Humility', hi: 'विनम्रता', ta: 'அடக்கம்' } },
    { word: 'पात्रताम् (Pātratām)', meaning: { en: 'Worthiness / Capability', hi: 'योग्यता / पात्रता', ta: 'தகுதி' } },
    { word: 'सुखम् (Sukham)', meaning: { en: 'True Joy & Peace', hi: 'सच्चा सुख', ta: 'இன்பம்' } }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto py-6 px-4 pb-24">
      
      {/* Header Banner */}
      <div className="mb-8 text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-3">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Ancient Wisdom Verse</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-bold font-display text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-200 to-amber-400 mb-2">
          अद्यतन सुभाषितानि (Daily Subhashita)
        </h2>
        <p className="text-xs sm:text-sm text-slate-300">
          Timeless Sanskrit verses decoded into your native language with word-by-word philosophical insights.
        </p>
      </div>

      {/* Main Verse Card */}
      <div className="relative overflow-hidden glass-card rounded-3xl p-6 sm:p-10 border border-amber-500/40 shadow-2xl mb-8">
        
        <Quote className="absolute right-6 top-6 w-20 h-20 text-amber-500/10 pointer-events-none" />

        <div className="flex items-center justify-between gap-4 mb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30">
            Hitopadesha Shloka
          </span>

          <button
            onClick={() => {
              playSound('pop');
              speakSanskrit(verse);
            }}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500 text-slate-950 hover:bg-amber-400 font-bold text-xs shadow-lg transition-all"
          >
            <Volume2 className="w-4 h-4" />
            <span>Recite Verse</span>
          </button>
        </div>

        {/* Verse Text */}
        <div className="text-center my-6 space-y-4">
          <p className="font-sanskrit text-2xl sm:text-4xl font-bold text-amber-300 leading-relaxed tracking-wide">
            {verse}
          </p>
          <p className="text-xs sm:text-sm text-amber-400/80 font-mono italic">
            "{iast}"
          </p>
        </div>

        {/* Translation Box */}
        <div className="mt-8 p-5 rounded-2xl bg-slate-900/90 border border-slate-800 text-slate-200 text-sm sm:text-base leading-relaxed">
          <div className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
            Meaning ({sourceLang.toUpperCase()}):
          </div>
          {translations[sourceLang] || translations.en}
        </div>

      </div>

      {/* Word-by-Word Breakdown */}
      <div className="glass-card rounded-3xl p-6 border border-amber-500/30">
        <h3 className="text-lg font-bold text-slate-100 mb-4 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-amber-400" />
          <span>Word Breakdown (पद विश्लेषणम्)</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {wordBreakdown.map((item, idx) => (
            <div key={idx} className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800">
              <div className="font-sanskrit text-amber-300 font-bold text-base">{item.word}</div>
              <div className="text-xs text-slate-300 mt-1">{item.meaning[sourceLang] || item.meaning.en}</div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
