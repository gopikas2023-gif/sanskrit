export const SANSKRIT_VOWELS = [
  {
    letter: 'अ',
    iast: 'a',
    sound: 'a (as in America)',
    example: 'अश्वः (Aśvaḥ)',
    translations: {
      en: 'Horse',
      hi: 'घोड़ा',
      ta: 'குதிரை',
      te: 'గుర్రం',
      es: 'Caballo',
      fr: 'Cheval',
      de: 'Pferd'
    }
  },
  {
    letter: 'आ',
    iast: 'ā',
    sound: 'ā (as in Father)',
    example: 'आम्रम् (Āmram)',
    translations: {
      en: 'Mango',
      hi: 'आम',
      ta: 'மாம்பழம்',
      te: 'మామిడి పండు',
      es: 'Mango',
      fr: 'Mangue',
      de: 'Mango'
    }
  },
  {
    letter: 'इ',
    iast: 'i',
    sound: 'i (as in Pin)',
    example: 'इक्षुः (Ikṣuḥ)',
    translations: {
      en: 'Sugarcane',
      hi: 'गन्ना',
      ta: 'கரும்பு',
      te: 'చెరకు',
      es: 'Caña de azúcar',
      fr: 'Canne à sucre',
      de: 'Zuckerrohr'
    }
  },
  {
    letter: 'ई',
    iast: 'ī',
    sound: 'ī (as in Feed)',
    example: 'ईश्वरः (Īśvaraḥ)',
    translations: {
      en: 'Divine / Lord',
      hi: 'भगवान / ईश्वर',
      ta: 'கடவுள்',
      te: 'దేవుడు',
      es: 'Dios / Señor',
      fr: 'Dieu / Seigneur',
      de: 'Gott / Herr'
    }
  },
  {
    letter: 'उ',
    iast: 'u',
    sound: 'u (as in Put)',
    example: 'उष्ट्रः (Uṣṭraḥ)',
    translations: {
      en: 'Camel',
      hi: 'ऊंट',
      ta: 'ஒட்டகம்',
      te: 'ఒంటె',
      es: 'Camello',
      fr: 'Chameau',
      de: 'Kamel'
    }
  },
  {
    letter: 'ऊ',
    iast: 'ū',
    sound: 'ū (as in Moon)',
    example: 'ऊर्णा (Ūrṇā)',
    translations: {
      en: 'Wool',
      hi: 'ऊन',
      ta: 'கம்பளி',
      te: 'ఉన్ని',
      es: 'Lana',
      fr: 'Laine',
      de: 'Wolle'
    }
  },
  {
    letter: 'ऋ',
    iast: 'ṛ',
    sound: 'ṛ (vocalic r as in Rhythm)',
    example: 'ऋषिः (Ṛṣiḥ)',
    translations: {
      en: 'Sage / Seer',
      hi: 'ऋषि',
      ta: 'முனிவர்',
      te: 'ఋషి',
      es: 'Sabio',
      fr: 'Sage',
      de: 'Weiser'
    }
  },
  {
    letter: 'ए',
    iast: 'e',
    sound: 'e (as in They)',
    example: 'एणः (Eṇaḥ)',
    translations: {
      en: 'Deer',
      hi: 'हिरण',
      ta: 'மான்',
      te: 'జింక',
      es: 'Ciervo',
      fr: 'Cerf',
      de: 'Hirsch'
    }
  },
  {
    letter: 'ऐ',
    iast: 'ai',
    sound: 'ai (as in Aisle)',
    example: 'ऐरावतः (Airāvataḥ)',
    translations: {
      en: 'Celestial Elephant',
      hi: 'ऐरावत हाथी',
      ta: 'ஐராவதம் யானை',
      te: 'ఐరావతం',
      es: 'Elefante celestial',
      fr: 'Éléphant céleste',
      de: 'Himmlischer Elefant'
    }
  },
  {
    letter: 'ओ',
    iast: 'o',
    sound: 'o (as in Go)',
    example: 'ओष्ठः (Oṣṭhaḥ)',
    translations: {
      en: 'Lip',
      hi: 'होठ',
      ta: 'உதடு',
      te: 'పెదవి',
      es: 'Labio',
      fr: 'Lèvre',
      de: 'Lippe'
    }
  },
  {
    letter: 'औ',
    iast: 'au',
    sound: 'au (as in Cow)',
    example: 'औषधम् (Auṣadham)',
    translations: {
      en: 'Medicine',
      hi: 'दवा / औषधि',
      ta: 'மருந்து',
      te: 'మందు',
      es: 'Medicina',
      fr: 'Médicament',
      de: 'Medizin'
    }
  }
];

export const SANSKRIT_CONSONANTS = [
  { letter: 'क', iast: 'ka', group: 'Guttural (कण्ठ्य)', example: 'कमलम् (Kamalam)', en: 'Lotus', hi: 'कमल' },
  { letter: 'ख', iast: 'kha', group: 'Guttural (कण्ठ्य)', example: 'खगः (Khagaḥ)', en: 'Bird', hi: 'पक्षी' },
  { letter: 'ग', iast: 'ga', group: 'Guttural (कण्ठ्य)', example: 'गजः (Gajaḥ)', en: 'Elephant', hi: 'हाथी' },
  { letter: 'घ', iast: 'gha', group: 'Guttural (कण्ठ्य)', example: 'घटः (Ghaṭaḥ)', en: 'Pot', hi: 'घड़ा' },
  { letter: 'च', iast: 'ca', group: 'Palatal (तालव्य)', example: 'चन्द्रः (Candraḥ)', en: 'Moon', hi: 'चंद्रमा' },
  { letter: 'छ', iast: 'cha', group: 'Palatal (तालव्य)', example: 'छत्त्रम् (Chattram)', en: 'Umbrella', hi: 'छाता' },
  { letter: 'ज', iast: 'ja', group: 'Palatal (तालव्य)', example: 'जलम् (Jalam)', en: 'Water', hi: 'जल / पानी' },
  { letter: 'झ', iast: 'jha', group: 'Palatal (तालव्य)', example: 'झषः (Jhaṣaḥ)', en: 'Fish', hi: 'मछली' },
  { letter: 'ट', iast: 'ṭa', group: 'Retroflex (मूर्धन्य)', example: 'टङ्कः (Ṭaṅkaḥ)', en: 'Chisel', hi: 'छैनी' },
  { letter: 'ड', iast: 'ḍa', group: 'Retroflex (मूर्धन्य)', example: 'डमरुः (Ḍamaruḥ)', en: 'Small Drum', hi: 'डमरू' },
  { letter: 'त', iast: 'ta', group: 'Dental (दन्त्य)', example: 'तरुः (Taruḥ)', en: 'Tree', hi: 'पेड़' },
  { letter: 'द', iast: 'da', group: 'Dental (दन्त्य)', example: 'दीपः (Dīpaḥ)', en: 'Lamp', hi: 'दीपक' },
  { letter: 'प', iast: 'pa', group: 'Labial (ओष्ठ्य)', example: 'पुष्पम् (Puṣpam)', en: 'Flower', hi: 'फूल' },
  { letter: 'ब', iast: 'ba', group: 'Labial (ओष्ठ्य)', example: 'बकः (Bakaḥ)', en: 'Heron / Crane', hi: 'बगुला' },
  { letter: 'म', iast: 'ma', group: 'Labial (ओष्ठ्य)', example: 'मयूरः (Mayūraḥ)', en: 'Peacock', hi: 'मोर' },
  { letter: 'र', iast: 'ra', group: 'Semi-vowel', example: 'रथः (Rathaḥ)', en: 'Chariot', hi: 'रथ' },
  { letter: 'स', iast: 'sa', group: 'Sibilant', example: 'सूर्यः (Sūryaḥ)', en: 'Sun', hi: 'सूर्य' },
  { letter: 'ह', iast: 'ha', group: 'Glottal', example: 'हस्तः (Hastaḥ)', en: 'Hand', hi: 'हाथ' }
];
