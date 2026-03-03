export type PrayerStep = {
  id: string;
  name: string;
  arabic: string;
  transliteration: string;
  translation: string;
  duration: number;
  meaning_note?: string;
  position?: 'standing' | 'bowing' | 'prostration' | 'sitting';
};

export type Prayer = {
  id: string;
  name: string;
  arabicName: string;
  time: string;
  timeLabel: string;
  rakats_sunnah: number;
  rakats_fard: number;
  total_duration_minutes: number;
  color: string;
  description: string;
  steps: PrayerStep[];
};

const SHARED_STEPS: PrayerStep[] = [
  {
    id: 'niyyah',
    name: 'Intention (Niyyah)',
    arabic: 'نَوَيْتُ أُصَلِّي',
    transliteration: 'Nawaytu an usalli...',
    translation: 'I intend to pray for the sake of Allah, the Most High.',
    duration: 5,
    position: 'standing',
    meaning_note: 'Intention is the foundation of every deed. Set your heart toward the prayer before you begin.',
  },
  {
    id: 'takbir',
    name: 'Opening Takbir',
    arabic: 'اللَّهُ أَكْبَرُ',
    transliteration: "Allāhu Akbar",
    translation: 'Allah is the Greatest.',
    duration: 3,
    position: 'standing',
    meaning_note: 'As you raise your hands, you are leaving the world behind — entering a private audience with your Creator.',
  },
  {
    id: 'thana',
    name: 'Opening Supplication (Thana)',
    arabic: 'سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ',
    transliteration: "Subhānakallahumma wa bihamdika wa tabārakasmuka wa ta'ālā jadduka wa lā ilāha ghairuk",
    translation: 'Glory be to You, O Allah, and praise. Blessed is Your name and exalted is Your majesty. There is no god but You.',
    duration: 8,
    position: 'standing',
  },
  {
    id: 'fatiha',
    name: 'Reciting Al-Fatiha',
    arabic: 'بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ',
    transliteration: "Bismillāhir-Rahmānir-Rahīm. Al-hamdu lillāhi Rabbil-'ālamīn...",
    translation: 'In the name of Allah, the Entirely Merciful, the Especially Merciful. All praise is due to Allah, Lord of all the worlds...',
    duration: 15,
    position: 'standing',
    meaning_note: 'Al-Fatiha is not just recitation — it is a conversation. Allah responds to each verse you recite.',
  },
  {
    id: 'ruku',
    name: 'Bowing (Ruku\')',
    arabic: 'سُبْحَانَ رَبِّيَ الْعَظِيمِ',
    transliteration: "Subhāna Rabbiyal-'Adhīm",
    translation: 'Glory be to my Lord, the Magnificent.',
    duration: 8,
    position: 'bowing',
    meaning_note: 'Bowing physically expresses the humility of the heart. The body follows what the soul already knows.',
  },
  {
    id: 'itidal',
    name: 'Rising from Ruku\'',
    arabic: 'سَمِعَ اللَّهُ لِمَنْ حَمِدَهُ',
    transliteration: "Sami'allāhu liman hamidah. Rabbanā wa lakal-hamd",
    translation: 'Allah hears those who praise Him. Our Lord, to You is all praise.',
    duration: 4,
    position: 'standing',
  },
  {
    id: 'sujood1',
    name: 'First Prostration (Sujood)',
    arabic: 'سُبْحَانَ رَبِّيَ الْأَعْلَى',
    transliteration: "Subhāna Rabbiyal-A'lā",
    translation: 'Glory be to my Lord, the Most High.',
    duration: 10,
    position: 'prostration',
    meaning_note: 'The closest a servant can be to their Lord is in sujood. Your forehead touches the earth — the highest position of the soul.',
  },
  {
    id: 'jalsa',
    name: 'Sitting between Prostrations',
    arabic: 'رَبِّ اغْفِرْ لِي',
    transliteration: 'Rabbighfir lī',
    translation: 'My Lord, forgive me.',
    duration: 4,
    position: 'sitting',
  },
  {
    id: 'sujood2',
    name: 'Second Prostration (Sujood)',
    arabic: 'سُبْحَانَ رَبِّيَ الْأَعْلَى',
    transliteration: "Subhāna Rabbiyal-A'lā",
    translation: 'Glory be to my Lord, the Most High.',
    duration: 10,
    position: 'prostration',
  },
  {
    id: 'tashahhud',
    name: 'Final Sitting (Tashahhud)',
    arabic: 'التَّحِيَّاتُ لِلَّهِ وَالصَّلَوَاتُ وَالطَّيِّبَاتُ',
    transliteration: "At-tahiyyātu lillāhi was-salawātu wat-tayyibāt. As-salāmu 'alayka ayyuhan-Nabiyyu...",
    translation: 'All compliments, prayers, and pure words are due to Allah. Peace be upon you, O Prophet...',
    duration: 12,
    position: 'sitting',
    meaning_note: 'In Tashahhud you bear witness to the oneness of Allah and send peace upon His final Prophet ﷺ.',
  },
  {
    id: 'taslim',
    name: 'Salutation (Taslim)',
    arabic: 'السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ',
    transliteration: 'As-salāmu alaykum wa rahmatullāh',
    translation: 'Peace and the mercy of Allah be upon you.',
    duration: 5,
    position: 'sitting',
    meaning_note: 'You exit the prayer carrying peace — spreading it to the world with a turn of your head.',
  },
];

export const PRAYERS: Prayer[] = [
  {
    id: 'fajr',
    name: 'Fajr',
    arabicName: 'الفَجْر',
    time: '05:12',
    timeLabel: 'Dawn',
    rakats_sunnah: 2,
    rakats_fard: 2,
    total_duration_minutes: 6,
    color: '#6B8FC4',
    description: 'The prayer of dawn — welcomed by angels who witnessed you choose worship over sleep.',
    steps: SHARED_STEPS,
  },
  {
    id: 'dhuhr',
    name: 'Dhuhr',
    arabicName: 'الظُّهْر',
    time: '12:30',
    timeLabel: 'Noon',
    rakats_sunnah: 4,
    rakats_fard: 4,
    total_duration_minutes: 12,
    color: '#C4A450',
    description: 'The midday prayer — a pause in the rhythm of your day to remember what truly matters.',
    steps: SHARED_STEPS,
  },
  {
    id: 'asr',
    name: 'Asr',
    arabicName: 'العَصْر',
    time: '15:42',
    timeLabel: 'Afternoon',
    rakats_sunnah: 0,
    rakats_fard: 4,
    total_duration_minutes: 8,
    color: '#C4825A',
    description: 'The afternoon prayer — sworn by in the Quran. A moment of clarity before the day fades.',
    steps: SHARED_STEPS,
  },
  {
    id: 'maghrib',
    name: 'Maghrib',
    arabicName: 'المَغْرِب',
    time: '18:15',
    timeLabel: 'Sunset',
    rakats_sunnah: 2,
    rakats_fard: 3,
    total_duration_minutes: 10,
    color: '#B05E8C',
    description: 'The sunset prayer — as the sky ignites with color, you turn your face toward the Divine.',
    steps: SHARED_STEPS,
  },
  {
    id: 'isha',
    name: 'Isha',
    arabicName: 'العِشَاء',
    time: '19:45',
    timeLabel: 'Night',
    rakats_sunnah: 2,
    rakats_fard: 4,
    total_duration_minutes: 15,
    color: '#7B6BC4',
    description: 'The night prayer — end your day in gratitude and surrender, meeting your Lord one last time.',
    steps: SHARED_STEPS,
  },
];

export const getPrayer = (id: string) => PRAYERS.find(p => p.id === id);
