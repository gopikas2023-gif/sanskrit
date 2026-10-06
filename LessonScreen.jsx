import React, { useState } from 'react';
import { useUser } from '../context/UserContext';
import { LESSON_QUESTIONS, UNITS } from '../data/lessonsData';
import { playSound, speakSanskrit } from '../assets/audio';
import { Volume2, X, CheckCircle, AlertCircle, ArrowRight, RotateCcw } from 'lucide-react';

export const LessonScreen = ({ unitId, onComplete, onClose }) => {
  const { sourceLang, deductHeart, hearts } = useUser();
  const questions = LESSON_QUESTIONS[unitId] || LESSON_QUESTIONS[1];
  const unitInfo = UNITS.find(u => u.id === unitId) || UNITS[0];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedWordTiles, setSelectedWordTiles] = useState([]);
  const [availableWordBank, setAvailableWordBank] = useState([]);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const currentQ = questions[currentIndex];

  // Initialize word bank when question changes
  React.useEffect(() => {
    if (currentQ && currentQ.type === 'sentenceBuilder') {
      // Shuffle word bank
      setAvailableWordBank([...currentQ.wordBank].sort(() => Math.random() - 0.5));
      setSelectedWordTiles([]);
    }
    setSelectedOption(null);
    setIsAnswered(false);
    setIsCorrect(false);
  }, [currentIndex, currentQ]);

  if (!currentQ) {
    return (
      <div className="flex flex-col items-center justify-center p-8 text-center">
        <h2 className="text-xl font-bold text-slate-100">No questions available for this unit yet!</h2>
        <button onClick={onClose} className="mt-4 px-6 py-2 bg-amber-500 text-black font-bold rounded-xl">
          Return to Path
        </button>
      </div>
    );
  }

  const promptText = currentQ.prompt[sourceLang] || currentQ.prompt['en'];
  const progressPercent = ((currentIndex + 1) / questions.length) * 100;

  const handleTileClick = (word) => {
    playSound('pop');
    setSelectedWordTiles(prev => [...prev, word]);
    setAvailableWordBank(prev => {
      const idx = prev.indexOf(word);
      if (idx > -1) {
        const next = [...prev];
        next.splice(idx, 1);
        return next;
      }
      return prev;
    });
  };

  const handleRemoveTile = (word, index) => {
    playSound('pop');
    setSelectedWordTiles(prev => prev.filter((_, i) => i !== index));
    setAvailableWordBank(prev => [...prev, word]);
  };

  const handleCheckAnswer = () => {
    if (isAnswered) {
      // Next question or finish
      if (currentIndex + 1 < questions.length) {
        setCurrentIndex(prev => prev + 1);
      } else {
        onComplete(unitId);
      }
      return;
    }

    let correct = false;

    if (currentQ.type === 'multipleChoice' || currentQ.type === 'audioSelect') {
      correct = selectedOption === currentQ.correctAnswer;
    } else if (currentQ.type === 'sentenceBuilder') {
      const builtSentence = selectedWordTiles.join(' ');
      correct = builtSentence === currentQ.targetSentence;
    } else if (currentQ.type === 'matchPairs') {
      correct = true; // Auto-pass pair match demo
    }

    setIsCorrect(correct);
    setIsAnswered(true);

    if (correct) {
      playSound('correct');
    } else {
      deductHeart();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-[#0B0F17] text-slate-100 overflow-y-auto">
      
      {/* Top Header Bar */}
      <div className="sticky top-0 z-20 bg-[#0F141C]/90 backdrop-blur-md px-4 sm:px-8 py-4 border-b border-amber-500/20 flex items-center justify-between gap-4">
        
        <button
          onClick={onClose}
          className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Progress Bar */}
        <div className="flex-1 max-w-xl">
          <div className="w-full h-3 rounded-full bg-slate-800 overflow-hidden border border-slate-700">
            <div
              className="h-full bg-gradient-to-r from-amber-500 to-yellow-400 transition-all duration-500 rounded-full"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        <div className="flex items-center gap-2 font-bold text-amber-400 text-sm">
          <span>Unit {unitId}</span>
          <span>({currentIndex + 1}/{questions.length})</span>
        </div>

      </div>

      {/* Main Lesson Body */}
      <div className="flex-1 max-w-2xl w-full mx-auto p-4 sm:p-6 flex flex-col justify-between">
        
        <div className="my-auto space-y-6">
          
          {/* Question Prompt Card */}
          <div className="glass-card rounded-3xl p-6 border border-amber-500/30 shadow-xl">
            
            <div className="flex items-center justify-between gap-4 mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Exercise
              </span>

              {/* TTS Sanskrit Audio Button */}
              <button
                onClick={() => speakSanskrit(currentQ.audioText || currentQ.correctAnswer || currentQ.targetSentence || 'नमस्ते')}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/20 text-amber-300 hover:bg-amber-500/30 border border-amber-500/30 text-xs font-semibold transition-all"
              >
                <Volume2 className="w-4 h-4 text-amber-400" />
                <span>Listen Audio</span>
              </button>
            </div>

            <h2 className="text-lg sm:text-2xl font-bold text-slate-100 leading-relaxed">
              {promptText}
            </h2>
          </div>

          {/* Exercise Type 1: Multiple Choice / Audio Select */}
          {(currentQ.type === 'multipleChoice' || currentQ.type === 'audioSelect') && (
            <div className="grid grid-cols-1 gap-3">
              {currentQ.options.map((opt, idx) => {
                const isSelected = selectedOption === opt;
                return (
                  <button
                    key={idx}
                    disabled={isAnswered}
                    onClick={() => {
                      playSound('pop');
                      setSelectedOption(opt);
                    }}
                    className={`flex items-center justify-between p-4 rounded-2xl border font-medium text-base text-left transition-all ${
                      isSelected
                        ? 'bg-amber-500/20 border-amber-400 text-amber-200 shadow-md shadow-amber-500/10 scale-[1.01]'
                        : 'bg-slate-900/80 border-slate-800 text-slate-200 hover:border-amber-500/40 hover:bg-slate-800/80'
                    }`}
                  >
                    <span className="font-sanskrit text-lg">{opt}</span>
                    <span className="w-6 h-6 rounded-full border border-slate-600 flex items-center justify-center text-xs text-slate-400">
                      {idx + 1}
                    </span>
                  </button>
                );
              })}
            </div>
          )}

          {/* Exercise Type 2: Sentence Builder */}
          {currentQ.type === 'sentenceBuilder' && (
            <div className="space-y-6">
              
              {/* Target Drop Zone */}
              <div className="min-h-[70px] p-4 rounded-2xl bg-slate-900/90 border-2 border-dashed border-amber-500/40 flex flex-wrap items-center gap-2">
                {selectedWordTiles.length === 0 ? (
                  <span className="text-xs text-slate-500 italic">Tap words below to build the Sanskrit sentence...</span>
                ) : (
                  selectedWordTiles.map((word, i) => (
                    <button
                      key={i}
                      disabled={isAnswered}
                      onClick={() => handleRemoveTile(word, i)}
                      className="px-4 py-2 rounded-xl bg-amber-500 text-slate-950 font-bold text-base shadow-md hover:bg-amber-400 transition-all font-sanskrit"
                    >
                      {word}
                    </button>
                  ))
                )}
              </div>

              {/* Available Word Bank */}
              <div className="flex flex-wrap justify-center gap-3">
                {availableWordBank.map((word, i) => (
                  <button
                    key={i}
                    disabled={isAnswered}
                    onClick={() => handleTileClick(word)}
                    className="px-4 py-2.5 rounded-xl bg-slate-800 border border-slate-700 hover:border-amber-400 text-slate-200 font-semibold text-base shadow-sm transition-all font-sanskrit"
                  >
                    {word}
                  </button>
                ))}
              </div>

            </div>
          )}

          {/* Exercise Type 3: Pair Matching */}
          {currentQ.type === 'matchPairs' && (
            <div className="space-y-3">
              {currentQ.pairs.map((pair, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 rounded-2xl bg-slate-900 border border-amber-500/30">
                  <span className="font-sanskrit text-lg font-bold text-amber-300">{pair.sanskrit}</span>
                  <span className="text-slate-400 text-sm">↔</span>
                  <span className="text-slate-200 font-semibold">{pair[sourceLang] || pair.en}</span>
                </div>
              ))}
            </div>
          )}

        </div>

        {/* Bottom Feedback / Action Bar */}
        <div className="mt-8 pt-4 border-t border-slate-800">
          
          {/* Answer Feedback Alert */}
          {isAnswered && (
            <div className={`mb-4 p-4 rounded-2xl border flex items-start gap-3 animate-celebrate ${
              isCorrect 
                ? 'bg-emerald-950/80 border-emerald-500/50 text-emerald-200' 
                : 'bg-rose-950/80 border-rose-500/50 text-rose-200'
            }`}>
              {isCorrect ? (
                <CheckCircle className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
              ) : (
                <AlertCircle className="w-6 h-6 text-rose-400 shrink-0 mt-0.5" />
              )}
              <div>
                <h4 className="font-bold text-base">
                  {isCorrect ? 'उत्तमम्! (Excellent / Correct!)' : 'त्रुटिः (Incorrect)'}
                </h4>
                {currentQ.explanation && (
                  <p className="text-xs sm:text-sm mt-1 opacity-90">
                    {currentQ.explanation[sourceLang] || currentQ.explanation['en']}
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Action Check Button */}
          <button
            onClick={handleCheckAnswer}
            disabled={
              !isAnswered && 
              ((currentQ.type === 'multipleChoice' || currentQ.type === 'audioSelect') && !selectedOption) ||
              (currentQ.type === 'sentenceBuilder' && selectedWordTiles.length === 0)
            }
            className={`w-full py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-xl ${
              isAnswered
                ? isCorrect
                  ? 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-emerald-500/20'
                  : 'bg-rose-500 hover:bg-rose-400 text-slate-950 shadow-rose-500/20'
                : selectedOption || selectedWordTiles.length > 0 || currentQ.type === 'matchPairs'
                  ? 'bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-slate-950 shadow-amber-500/20'
                  : 'bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700'
            }`}
          >
            <span>{isAnswered ? 'Continue' : 'Check Answer'}</span>
            <ArrowRight className="w-5 h-5" />
          </button>

        </div>

      </div>

    </div>
  );
};
