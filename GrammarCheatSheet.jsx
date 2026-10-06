import React, { useState } from 'react';
import { useUser } from '../context/UserContext';
import { Scroll, Sparkles } from 'lucide-react';
import { playSound, speakSanskrit } from '../assets/audio';

export const GrammarCheatSheet = () => {
  const { sourceLang } = useUser();
  const [activeGrammarTab, setActiveGrammarTab] = useState('vibhakti'); // 'vibhakti' | 'dhatu'

  const VIBHAKTI_DATA = [
    { caseName: 'Prathamā (प्रथमा - Nominative)', usage: { en: 'Subject (The Rama)', hi: 'कर्ता (राम ने / राम)', ta: 'எழுவாய் (ராமன்)', te: 'కర్త (రాముడు)' }, singular: 'रामः (Rāmaḥ)', dual: 'रामौ (Rāmau)', plural: 'रामाः (Rāmāḥ)' },
    { caseName: 'Dvitīyā (द्वितीया - Accusative)', usage: { en: 'Object (To Rama)', hi: 'कर्म (राम को)', ta: 'செயப்படுபொருள் (ராமனை)', te: 'కర్మ (రాముడిని)' }, singular: 'रामम् (Rāmam)', dual: 'रामौ (Rāmau)', plural: 'रामान् (Rāmān)' },
    { caseName: 'Tṛtīyā (तृतीया - Instrumental)', usage: { en: 'By/With Rama', hi: 'करण (राम के द्वारा / से)', ta: 'கருவி (ராமனால்)', te: 'కరణము (రామునిచే)' }, singular: 'रामेण (Rāmeṇa)', dual: 'रामाभ्याम् (Rāmābhyām)', plural: 'रामैः (Rāmaiḥ)' },
    { caseName: 'Caturthī (चतुर्थी - Dative)', usage: { en: 'For Rama', hi: 'सम्प्रदान (राम के लिए)', ta: 'கொடை (ராமனுக்காக)', te: 'సంప్రదానము (రాముడి కొరకు)' }, singular: 'रामाय (Rāmāya)', dual: 'रामाभ्याम् (Rāmābhyām)', plural: 'रामेभ्यः (Rāmebhyaḥ)' },
    { caseName: 'Pañcamī (पञ्चमी - Ablative)', usage: { en: 'From Rama', hi: 'अपादान (राम से अलग होना)', ta: 'நீக்கம் (ராமனிலிருந்து)', te: 'అపాధానము (రాముని నుండి)' }, singular: 'रामात् (Rāmāt)', dual: 'रामाभ्याम् (Rāmābhyām)', plural: 'रामेभ्यः (Rāmebhyaḥ)' },
    { caseName: 'Ṣaṣṭhī (षष्ठी - Genitive)', usage: { en: 'Of Rama / Rama\'s', hi: 'सम्बन्ध (राम का / की / के)', ta: 'உடைமை (ராமனுடைய)', te: 'సంబంధము (రాముని యొక్క)' }, singular: 'रामस्य (Rāmasya)', dual: 'रामयोः (Rāmayoḥ)', plural: 'रामाणाम् (Rāmāṇām)' },
    { caseName: 'Saptamī (सप्तमी - Locative)', usage: { en: 'In/On Rama', hi: 'अधिकरण (राम में / पर)', ta: 'இடம் (ராமனில் / மேல்)', te: 'అధికరణము (రాముని యందు)' }, singular: 'रामे (Rāme)', dual: 'रामयोः (Rāmayoḥ)', plural: 'रामेषु (Rāmeṣu)' },
    { caseName: 'Sambodhana (सम्बोधन - Vocative)', usage: { en: 'O Rama!', hi: 'सम्बोधन (हे राम!)', ta: 'விளி (ஹே ராமா!)', te: 'సంబోధన (ఓ రామా!)' }, singular: 'हे राम (He Rāma)', dual: 'हे रामौ (He Rāmau)', plural: 'हे रामाः (He Rāmāḥ)' }
  ];

  const DHATU_DATA = [
    { person: 'Prathama Puruṣa (Third Person - He/She/They)', singular: 'पठति (Paṭhati)', dual: 'पठतः (Paṭhataḥ)', plural: 'पठन्ति (Paṭhanti)' },
    { person: 'Madhyama Puruṣa (Second Person - You)', singular: 'पठसि (Paṭhasi)', dual: 'पठथः (Paṭhathaḥ)', plural: 'पठथ (Paṭhatha)' },
    { person: 'Uttama Puruṣa (First Person - I/We)', singular: 'पठामि (Paṭhāmi)', dual: 'पठावः (Paṭhāvaḥ)', plural: 'पठामः (Paṭhāmaḥ)' }
  ];

  return (
    <div className="w-full max-w-5xl mx-auto py-6 px-4 pb-24">
      
      {/* Header Banner */}
      <div className="mb-8 text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-3">
          <Scroll className="w-3.5 h-3.5 text-amber-400" />
          <span>Grammar Cheat Tables</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-bold font-display text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-200 to-amber-400 mb-2">
          संस्कृत व्याकरणम् (Sanskrit Grammar)
        </h2>
        <p className="text-xs sm:text-sm text-slate-300">
          Master Vibhakti (Noun Declension Cases) and Dhatu (Verb Conjugations) at a glance.
        </p>
      </div>

      {/* Tab Switcher */}
      <div className="flex justify-center mb-8">
        <div className="flex bg-slate-900/90 p-1.5 rounded-2xl border border-slate-800">
          <button
            onClick={() => {
              playSound('click');
              setActiveGrammarTab('vibhakti');
            }}
            className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
              activeGrammarTab === 'vibhakti'
                ? 'bg-gradient-to-r from-amber-600 to-amber-500 text-slate-950 shadow-lg shadow-amber-600/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            विभक्तिः (Noun Cases - राम)
          </button>
          <button
            onClick={() => {
              playSound('click');
              setActiveGrammarTab('dhatu');
            }}
            className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
              activeGrammarTab === 'dhatu'
                ? 'bg-gradient-to-r from-amber-600 to-amber-500 text-slate-950 shadow-lg shadow-amber-600/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            धातु रूप (Verbs - पठ् Present Tense)
          </button>
        </div>
      </div>

      {/* Vibhakti Table */}
      {activeGrammarTab === 'vibhakti' && (
        <div className="glass-card rounded-3xl p-4 sm:p-6 border border-amber-500/30 shadow-xl overflow-x-auto">
          <table className="w-full text-left text-sm border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b border-amber-500/30 text-amber-300 font-bold uppercase text-xs tracking-wider">
                <th className="py-3 px-4">Case (विभक्तिः)</th>
                <th className="py-3 px-4">Meaning / Usage</th>
                <th className="py-3 px-4">एकवचनम् (Singular)</th>
                <th className="py-3 px-4">द्विवचनम् (Dual)</th>
                <th className="py-3 px-4">बहुवचनम् (Plural)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80">
              {VIBHAKTI_DATA.map((row, idx) => (
                <tr key={idx} className="hover:bg-amber-500/5 transition-colors">
                  <td className="py-3.5 px-4 font-semibold text-slate-200">{row.caseName}</td>
                  <td className="py-3.5 px-4 text-xs text-amber-400 font-medium">
                    {row.usage[sourceLang] || row.usage.en}
                  </td>
                  <td 
                    onClick={() => speakSanskrit(row.singular)}
                    className="py-3.5 px-4 font-sanskrit text-amber-300 font-bold hover:underline cursor-pointer"
                  >
                    {row.singular}
                  </td>
                  <td 
                    onClick={() => speakSanskrit(row.dual)}
                    className="py-3.5 px-4 font-sanskrit text-slate-300 cursor-pointer"
                  >
                    {row.dual}
                  </td>
                  <td 
                    onClick={() => speakSanskrit(row.plural)}
                    className="py-3.5 px-4 font-sanskrit text-slate-300 cursor-pointer"
                  >
                    {row.plural}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Dhatu Table */}
      {activeGrammarTab === 'dhatu' && (
        <div className="glass-card rounded-3xl p-4 sm:p-6 border border-amber-500/30 shadow-xl overflow-x-auto">
          <table className="w-full text-left text-sm border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b border-amber-500/30 text-amber-300 font-bold uppercase text-xs tracking-wider">
                <th className="py-3 px-4">Person (पुरुषः)</th>
                <th className="py-3 px-4">एकवचनम् (Singular)</th>
                <th className="py-3 px-4">द्विवचनम् (Dual)</th>
                <th className="py-3 px-4">बहुवचनम् (Plural)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80">
              {DHATU_DATA.map((row, idx) => (
                <tr key={idx} className="hover:bg-amber-500/5 transition-colors">
                  <td className="py-4 px-4 font-semibold text-slate-200">{row.person}</td>
                  <td 
                    onClick={() => speakSanskrit(row.singular)}
                    className="py-4 px-4 font-sanskrit text-amber-300 font-bold text-base hover:underline cursor-pointer"
                  >
                    {row.singular}
                  </td>
                  <td 
                    onClick={() => speakSanskrit(row.dual)}
                    className="py-4 px-4 font-sanskrit text-slate-300 cursor-pointer"
                  >
                    {row.dual}
                  </td>
                  <td 
                    onClick={() => speakSanskrit(row.plural)}
                    className="py-4 px-4 font-sanskrit text-slate-300 cursor-pointer"
                  >
                    {row.plural}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

    </div>
  );
};
