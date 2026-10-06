export const SOURCE_LANGUAGES = [
  { id: 'en', name: 'English', nativeName: 'English', flag: '🇬🇧', tag: 'Global' },
  { id: 'hi', name: 'Hindi', nativeName: 'हिंदी', flag: '🇮🇳', tag: 'Popular' },
  { id: 'ta', name: 'Tamil', nativeName: 'தமிழ்', flag: '🇮🇳', tag: 'Dravidian' },
  { id: 'te', name: 'Telugu', nativeName: 'తెలుగు', flag: '🇮🇳', tag: 'Dravidian' },
  { id: 'kn', name: 'Kannada', nativeName: 'ಕನ್ನಡ', flag: '🇮🇳', tag: 'Dravidian' },
  { id: 'ml', name: 'Malayalam', nativeName: 'മലയാളം', flag: '🇮🇳', tag: 'Dravidian' },
  { id: 'mr', name: 'Marathi', nativeName: 'मराठी', flag: '🇮🇳', tag: 'Indo-Aryan' },
  { id: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸', tag: 'International' },
  { id: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷', tag: 'International' },
  { id: 'de', name: 'German', nativeName: 'Deutsch', flag: '🇩🇪', tag: 'International' }
];

export const getLanguageName = (langId) => {
  const lang = SOURCE_LANGUAGES.find(l => l.id === langId);
  return lang ? `${lang.flag} ${lang.nativeName}` : '🇬🇧 English';
};
