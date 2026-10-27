/**
 * Wedding Data & Configuration
 * ============================
 * Central module for all wedding content and configurable values.
 * Update this file to change any text, dates, images, or contact details.
 */

// ─── Wedding Date ───────────────────────────────────────────

export const WEDDING_DATE = new Date('2026-10-29T22:30:00+05:30');

// ─── Couple ─────────────────────────────────────────────────

export const COUPLE = {
  groom: {
    fullName: 'Potnuru Swamy Patnaik',
    firstName: 'Swamy',
    photo: '/images/groom.jpeg',
    optimizedPhoto: '/images/optimized/groom-640w.webp',
  },
  bride: {
    fullName: 'Pakki Susmitha',
    firstName: 'Susmitha',
    photo: '/images/bride.jpeg',
    optimizedPhoto: '/images/optimized/bride-640w.webp',
  },
} as const;

// ─── Hero Section ───────────────────────────────────────────

export const HERO = {
  openingText: 'Two hearts, one beautiful journey',
  dateDisplay: 'October 29, 2026',
  timeDisplay: '10:30 PM IST',
  image: {
    original: '/images/5 jpg.jpg.jpeg',
    optimized: {
      large: '/images/optimized/photo-5-1920w.webp',
      medium: '/images/optimized/photo-5-1024w.webp',
      small: '/images/optimized/photo-5-640w.webp',
    },
    alt: 'Swamy and Susmitha in a loving embrace with mountains in the background',
  },
} as const;

// ─── Our Story Timeline ─────────────────────────────────────

export interface TimelineMilestone {
  title: string;
  date: string;
  description: string;
  image?: {
    original: string;
    optimized: string;
    alt: string;
  };
}

export const TIMELINE: TimelineMilestone[] = [
  {
    title: 'First Meet',
    date: 'December 5, 2023',
    description:
      'Two paths crossed, and something beautiful quietly began to take shape.',
    image: {
      original: '/images/1 jpg.jpg.jpeg',
      optimized: '/images/optimized/photo-1-640w.webp',
      alt: 'Couple walking through a green field',
    },
  },
  {
    title: 'Friendship',
    date: '2023 – 2024',
    description:
      'What started as friendship slowly blossomed into something deeper and more meaningful.',
  },
  {
    title: 'The Proposal',
    date: '2024',
    description:
      'She asked the question that would change everything — and the answer was always yes.',
  },
  {
    title: 'In Relationship',
    date: '2024 – 2026',
    description:
      'Together through every season, growing closer with each passing day.',
    image: {
      original: '/images/4 jpg.jpg.jpeg',
      optimized: '/images/optimized/photo-4-640w.webp',
      alt: 'Couple seated together with misty mountains behind them',
    },
  },
  {
    title: 'Engagement',
    date: 'August 28, 2026',
    description:
      'A promise made before family, a future sealed with love and blessings.',
  },
  {
    title: 'Wedding Day',
    date: 'October 29, 2026',
    description: 'The day two hearts become one — forever and always.',
    image: {
      original: '/images/2 jpg.jpg.jpeg',
      optimized: '/images/optimized/photo-2-640w.webp',
      alt: 'Couple standing on a hilltop with a vast sky',
    },
  },
];

// ─── Wedding Events ─────────────────────────────────────────

export interface WeddingEvent {
  name: string;
  date: string;
  time: string;
  venue: string | null;
  mapUrl: string | null;
  isMain: boolean;
}

export const EVENTS: WeddingEvent[] = [
  {
    name: 'Engagement',
    date: 'August 28, 2026',
    time: '1:48 PM',
    venue: null,
    mapUrl: null,
    isMain: false,
  },
  {
    name: 'Ammayi Haldi',
    date: 'October 27, 2026',
    time: '3:30 PM',
    venue: null,
    mapUrl: `https://www.google.com/maps/place/17%C2%B040'33.6%22N+83%C2%B012'42.0%22E/@17.675994,83.209078,17z/data=!3m1!4b1!4m4!3m3!8m2!3d17.675994!4d83.2116529?hl=en&entry=ttu&g_ep=EgoyMDI2MTAwNC4wIKXMDSoASAFQAw%3D%3D`,
    isMain: false,
  },
  {
    name: 'Abbayi Haldi',
    date: 'October 28, 2026',
    time: '10:00 AM',
    venue: null,
    mapUrl: `https://www.google.com/maps/place/17%C2%B041'13.9%22N+83%C2%B012'05.0%22E/@17.6872259,83.1989103,17z/data=!4m4!3m3!8m2!3d17.6871848!4d83.201401?hl=en&entry=ttu&g_ep=EgoyMDI2MTAwNC4wIKXMDSoASAFQAw%3D%3D`,
    isMain: false,
  },
  {
    name: 'Wedding Ceremony',
    date: 'October 29, 2026',
    time: '10:30 PM IST',
    venue: 'Sri Thippala Chinna Apparo Kalyanamandapam',
    mapUrl: `https://www.google.com/maps/place/17%C2%B040'31.4%22N+83%C2%B012'44.2%22E/@17.6753856,83.2097088,17z/data=!3m1!4b1!4m4!3m3!8m2!3d17.6753856!4d83.2122837?hl=en&entry=ttu&g_ep=EgoyMDI2MTAwNC4wIKXMDSoASAFQAw%3D%3D`,
    isMain: true,
  },
];

// ─── Family Members ─────────────────────────────────────────

export interface FamilyMember {
  name: string;
  relationship: string;
  quote: string;
  side: 'bride' | 'groom';
}

export const FAMILY: FamilyMember[] = [
  // Bride's family
  {
    name: 'Pakki Shankrao',
    relationship: 'Father',
    quote: 'Father — the calm in every storm',
    side: 'bride',
  },
  {
    name: 'Pakki Sunitha',
    relationship: 'Mother',
    quote: 'Mother — the heartbeat of the home',
    side: 'bride',
  },
  {
    name: 'Pakki Sai Ganesh',
    relationship: 'Brother',
    quote: 'Brother — the best man, always',
    side: 'bride',
  },
  {
    name: 'Pakki Satyavathi',
    relationship: 'Grandma',
    quote: 'Grandma — the pillar of everything',
    side: 'bride',
  },
  // Groom's family
  {
    name: 'Potnuru Purana Chandara Joshi Patnaik',
    relationship: 'Father',
    quote: 'Father — the quiet strength',
    side: 'groom',
  },
  {
    name: 'Potnuru Rani Patnaik',
    relationship: 'Mother',
    quote: 'Mother — the keeper of love',
    side: 'groom',
  },
  {
    name: 'Potnuru Laxmi Narsing rao',
    relationship: 'Grand father',
    quote: 'Mother — the keeper of love',
    side: 'groom',
  },
  {
    name: 'Potnuru kameswaramma(ratnam)',
    relationship: 'Grand mother',
    quote: 'Mother — the keeper of love',
    side: 'groom',
  },
];

// ─── Gallery ────────────────────────────────────────────────

export interface GalleryImage {
  src: string;
  optimized: {
    large: string;
    medium: string;
    small: string;
  };
  alt: string;
}

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    src: '/images/1 jpg.jpg.jpeg',
    optimized: {
      large: '/images/optimized/photo-1-1920w.webp',
      medium: '/images/optimized/photo-1-1024w.webp',
      small: '/images/optimized/photo-1-640w.webp',
    },
    alt: 'Couple walking through a lush green field with birch trees',
  },
  {
    src: '/images/2 jpg.jpg.jpeg',
    optimized: {
      large: '/images/optimized/photo-2-1920w.webp',
      medium: '/images/optimized/photo-2-1024w.webp',
      small: '/images/optimized/photo-2-640w.webp',
    },
    alt: 'Couple standing on a hilltop with a vast sky and mountains',
  },
  {
    src: '/images/3 jpg.jpg.jpeg',
    optimized: {
      large: '/images/optimized/photo-3-1920w.webp',
      medium: '/images/optimized/photo-3-1024w.webp',
      small: '/images/optimized/photo-3-640w.webp',
    },
    alt: 'Couple sitting by a warm bonfire under the night sky',
  },
  {
    src: '/images/4 jpg.jpg.jpeg',
    optimized: {
      large: '/images/optimized/photo-4-1920w.webp',
      medium: '/images/optimized/photo-4-1024w.webp',
      small: '/images/optimized/photo-4-640w.webp',
    },
    alt: 'Couple seated in a green valley with misty mountains',
  },
  {
    src: '/images/5 jpg.jpg.jpeg',
    optimized: {
      large: '/images/optimized/photo-5-1920w.webp',
      medium: '/images/optimized/photo-5-1024w.webp',
      small: '/images/optimized/photo-5-640w.webp',
    },
    alt: 'Intimate close-up embrace with blue mountains in the background',
  },
  {
    src: '/images/DSC09870.jpg.jpeg',
    optimized: {
      large: '/images/optimized/save-the-date-1920w.webp',
      medium: '/images/optimized/save-the-date-1024w.webp',
      small: '/images/optimized/save-the-date-640w.webp',
    },
    alt: 'Save the Date — golden hour couple portrait',
  },
];

// ─── RSVP ───────────────────────────────────────────────────

export const RSVP_CONFIG = {
  phone: '+919398845414',
  phoneDisplay: '+91 93988 45414',
  whatsappMessage:
    "Hello! I'd like to confirm my attendance at Swamy & Susmitha's wedding on October 29, 2026. Looking forward to celebrating with you!",
} as const;

// ─── Pre-Wedding Video ──────────────────────────────────────

const PRE_WEDDING_YOUTUBE_ID = 'COsJD09t3qY';

export const VIDEO_CONFIG = {
  /** YouTube video ID */
  youtubeVideoId: PRE_WEDDING_YOUTUBE_ID,
  shortsUrl: `https://youtube.com/shorts/${PRE_WEDDING_YOUTUBE_ID}`,
  embedUrl: `https://www.youtube.com/embed/${PRE_WEDDING_YOUTUBE_ID}`,
  thumbnailUrl: `https://img.youtube.com/vi/${PRE_WEDDING_YOUTUBE_ID}/hqdefault.jpg`,
  channelUrl: 'https://www.youtube.com/@Rudraclicks-c3j',
  title: 'Our Pre-Wedding Film',
  subtitle: 'A glimpse into our love story',
} as const;

// ─── Background Audio ───────────────────────────────────────

export const AUDIO_CONFIG = {
  /** Configured with the supplied wedding song */
  src: '/audio/kalyanam-vybhogam.mp3',
} as const;
