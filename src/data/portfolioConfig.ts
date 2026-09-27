/**
 * =================================================================================
 * VIKASH PANDEY - PORTFOLIO CONFIGURATION FILE
 * =================================================================================
 * You can easily customize ALL portfolio items, pricing, testimonials,
 * contact details, and Google Form backend links directly in this file!
 * =================================================================================
 */

// Import generated studio assets
import heroWorkstationImg from '../assets/images/hero_cinematic_workstation_1790525777064.jpg';
import profileVikashImg from '../assets/images/profile_vikash_editor_1790525795248.jpg';
import featuredCinematicImg from '../assets/images/featured_project_cinematic_1790525809583.jpg';
import thumbnailReelMotionImg from '../assets/images/thumbnail_reel_motion_1790525823434.jpg';
import thumbnailYoutubeDocImg from '../assets/images/thumbnail_youtube_documentary_1790525835648.jpg';

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'REELS' | 'YOUTUBE' | 'SHORTS' | 'ADS' | 'PODCAST';
  description: string;
  duration?: string;
  client?: string;
  aspectRatio: '16:9' | '9:16' | '4:3';
  thumbnailUrl: string;
  /**
   * Video source configuration:
   * - 'youtube': paste standard YouTube URL or embed URL (e.g. 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' or 'https://www.youtube.com/embed/dQw4w9WgXcQ')
   * - 'instagram': paste Instagram Reel URL
   * - 'direct': direct MP4 / WebM video link (e.g. from Google Drive / Cloudinary / AWS S3)
   * - 'demo': plays interactive built-in cinematic showcase
   */
  videoType: 'youtube' | 'instagram' | 'direct' | 'demo';
  videoUrl?: string;
  tags: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  categoryLabel: string;
  description: string;
  deliverables: string[];
  recommendedFor: string;
}

export interface PricingPlan {
  id: string;
  title: string;
  priceLabel: string;
  currency: string;
  periodLabel?: string;
  subheading: string;
  features: string[];
  extraDetails?: string;
  highlighted?: boolean;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  clientName: string;
  channelOrRole: string;
  projectType: string;
}

export const PERSONAL_INFO = {
  name: 'Vikash Pandey',
  role: 'Freelance Video Editor & Content Creator',
  location: 'India',
  phone: '8839296833',
  phoneInternational: '+918839296833',
  whatsappUrl: 'https://wa.me/918839296833',
  instagramHandle: '___i.vikash___',
  instagramDisplay: 'i.vikash',
  instagramUrl: 'https://www.instagram.com/___i.vikash___/',
  email: 'vp42507@gmail.com',
  bio: `I'm Vikash Pandey, a freelance video editor and content creator focused on creating engaging videos for social media, YouTube and brands.

I transform raw footage into clean, engaging and professional content using storytelling, pacing, motion graphics, sound design and modern editing techniques.`,
  headline: {
    part1: 'YOUR VISION.',
    part2: 'MY EDITING.',
    part3: 'ONE POWERFUL STORY.',
  },
  subheadline:
    'Freelance Video Editor helping creators, brands and businesses turn raw footage into engaging, high-retention content.',
  profileImage: profileVikashImg,
  heroBackdrop: heroWorkstationImg,
  softwareTools: [
    { name: 'Adobe Premiere Pro', category: 'NLE Editing' },
    { name: 'DaVinci Resolve Studio', category: 'Color & Grading' },
    { name: 'After Effects', category: 'Motion Graphics' },
    { name: 'Audition', category: 'Sound Design' },
    { name: 'Photoshop', category: 'Thumbnails & Assets' },
    { name: 'CapCut Pro', category: 'Mobile & Social Cuts' },
  ],
};

/**
 * GOOGLE FORM / BACKEND CONFIGURATION
 * ------------------------------------------------------------------
 * If you have a Google Form or custom webhook, paste the URL below!
 * The contact form will submit to this URL or directly redirect to
 * WhatsApp with all details pre-filled.
 */
export const FORM_BACKEND_CONFIG = {
  // Paste your Google Form action URL here, e.g. "https://docs.google.com/forms/d/e/.../formResponse"
  googleFormActionUrl: '',
  // If true, will also offer the user an immediate 1-click WhatsApp message with the filled inquiry
  allowDirectWhatsAppDispatch: true,
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'reels',
    title: 'Instagram Reels',
    categoryLabel: 'Short-Form Viral',
    description:
      'High-energy, thumb-stopping 9:16 vertical cuts designed to trigger algorithmic distribution and organic viewer retention.',
    deliverables: [
      'Short-form content tailored for 15s-60s retention',
      'Fast narrative pacing with beat-synchronized cuts',
      'Dynamic animated captions & highlighted keywords',
      'Subtle kinetic motion graphics & sound effects',
      'Trending-style edits matched to audience audio',
    ],
    recommendedFor: 'Creators, Influencers, Coaches, D2C Founders',
  },
  {
    id: 'youtube',
    title: 'YouTube Videos',
    categoryLabel: 'Long-Form Storytelling',
    description:
      'Engaging long-form video editing crafted to skyrocket average view duration (AVD) and click-through rates with narrative flow.',
    deliverables: [
      'Long-form editing for 5 to 30+ minute videos',
      'Compelling story arcs & chapter markers',
      'Curated cinematic B-roll selection & sync',
      'Multi-layer sound design, risers & whooshes',
      'Retention-focused hooks & viewer pacing patterns',
    ],
    recommendedFor: 'YouTubers, Educators, Tech Reviewers, Documentarians',
  },
  {
    id: 'shorts',
    title: 'YouTube Shorts',
    categoryLabel: 'Rapid Engagement',
    description:
      'Snappy, zero-friction short videos built to maximize view-through percentage and subscriber conversion on the Shorts feed.',
    deliverables: [
      'High-retention first 3-second hook structure',
      'Word-by-word synced kinetic captions',
      'Custom motion graphics & visual pop-ups',
      'Fast seamless camera transitions & sound punches',
    ],
    recommendedFor: 'Channels scaling fast with daily shorts & repurposing',
  },
  {
    id: 'ads',
    title: 'Brand / Advertisement Videos',
    categoryLabel: 'Commercial & Sales',
    description:
      'Polished commercial videos that showcase brand authority, highlight core value propositions, and drive qualified purchases.',
    deliverables: [
      'E-commerce & SaaS product demo videos',
      'High-converting social media promotional ads',
      'Cinematic color grading & LUT optimization',
      'Brand logo animation, lower thirds & typography',
    ],
    recommendedFor: 'Startups, Agencies, E-commerce, Corporate Brands',
  },
  {
    id: 'ai-video',
    title: 'AI Video Editing',
    categoryLabel: 'Next-Gen Workflow',
    description:
      'Modern AI-assisted video production blending avatar generation, voice cloning, automatic b-roll generation, and smart enhancements.',
    deliverables: [
      'AI talking head videos & avatar animation',
      'AI-generated cinematic visuals & b-roll plates',
      'Automated high-precision captions & translations',
      'Custom motion graphics & social media optimization',
    ],
    recommendedFor: 'Agencies, Solopreneurs, Fast-paced content teams',
  },
  {
    id: 'podcast',
    title: 'Podcast Editing',
    categoryLabel: 'Audio & Visual Multi-Cam',
    description:
      'Seamless multi-camera switching, audio cleanup, and viral snackable short clip extraction for audio-visual podcasts.',
    deliverables: [
      'Dynamic multi-camera angle switching',
      'Short-form viral clip extraction for TikTok & Reels',
      'Clean broadcast subtitles & speaker identification',
      'Noise reduction, EQ balance & audio mastering',
    ],
    recommendedFor: 'Podcasters, Interview shows, Masterminds, Webinars',
  },
];

export const FEATURED_PROJECT = {
  title: 'TURNING RAW FOOTAGE INTO CONTENT THAT CONNECTS',
  tagline: 'High-Impact Brand Showcase & Visual Narrative',
  description:
    'A masterclass in visual pacing, precise color grading, layered sound design, and kinetic motion. Created to stop the scroll and hold attention from frame one.',
  videoType: 'demo' as const,
  thumbnailUrl: featuredCinematicImg,
  videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // easily replaceable by user
  pillars: [
    { title: 'Editing', detail: 'Rhythm, pacing, and retention engineering' },
    { title: 'Color', detail: 'Cinematic tone, skin-tone balance, and mood' },
    { title: 'Sound Design', detail: 'Foley, risers, atmosphere, and punch' },
    { title: 'Motion Graphics', detail: 'Kinetic text, callouts, and clean 2D/3D elements' },
  ],
};

/**
 * PORTFOLIO GALLERY ITEMS
 * ==========================================================================
 * To add your own videos:
 * 1. Change `videoType` to 'youtube', 'instagram', or 'direct'.
 * 2. Put your URL in `videoUrl`.
 * 3. Change `thumbnailUrl` to your image or keep the high-fidelity placeholder!
 * ==========================================================================
 */
export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'proj-1',
    title: 'Urban Kinetic Lifestyle Reel',
    category: 'REELS',
    description:
      'Fast-paced visual edit with dynamic speed ramps, sound-synced kinetic text, and trending audio transitions.',
    duration: '0:34',
    client: 'Streetwear Creator',
    aspectRatio: '9:16',
    thumbnailUrl: thumbnailReelMotionImg,
    videoType: 'demo',
    tags: ['Speed Ramps', 'Sound FX', 'Kinetic Text'],
  },
  {
    id: 'proj-2',
    title: 'The Solitude of the Himalayas — Mini Doc',
    category: 'YOUTUBE',
    description:
      'Long-form travel documentary featuring cinematic color grading, custom soundscapes, and immersive pacing.',
    duration: '11:42',
    client: 'Travel Explorer Channel',
    aspectRatio: '16:9',
    thumbnailUrl: thumbnailYoutubeDocImg,
    videoType: 'demo',
    tags: ['Documentary', 'Color Grade', 'Atmospheric Foley'],
  },
  {
    id: 'proj-3',
    title: 'High-Retention Finance Breakdown',
    category: 'SHORTS',
    description:
      'High-contrast graphics, continuous visual hooks, and zero-dead-air editing for finance educators.',
    duration: '0:58',
    client: 'FinTech Educator',
    aspectRatio: '9:16',
    thumbnailUrl: thumbnailReelMotionImg,
    videoType: 'demo',
    tags: ['Pop-up Graphs', 'Word-by-word Subtitles', 'Sound Design'],
  },
  {
    id: 'proj-4',
    title: 'Aura Performance Brand Commercial',
    category: 'ADS',
    description:
      'Commercial advertisement for high-end fitness brand emphasizing cinematic motion blur, punchy cuts, and bold grading.',
    duration: '0:45',
    client: 'Athletic Wear Brand',
    aspectRatio: '16:9',
    thumbnailUrl: featuredCinematicImg,
    videoType: 'demo',
    tags: ['Commercial', 'Teal & Orange', 'Brand Identity'],
  },
  {
    id: 'proj-5',
    title: 'The Modern Mindset Podcast — Multi-Cam Ep. 42',
    category: 'PODCAST',
    description:
      'Dynamic multi-camera switching with crisp dialogue cleanup and visual speaker emphasis for a weekly video podcast.',
    duration: '48:15',
    client: 'Modern Mindset Show',
    aspectRatio: '16:9',
    thumbnailUrl: heroWorkstationImg,
    videoType: 'demo',
    tags: ['Multi-Cam', 'Audio Mastering', 'Video Podcast'],
  },
  {
    id: 'proj-6',
    title: 'Viral Fitness Transformation Reel',
    category: 'REELS',
    description:
      'High-energy transformation reel with split screens, beat-matched jump cuts, and bold highlighted captions.',
    duration: '0:28',
    client: 'Elite Fitness Coach',
    aspectRatio: '9:16',
    thumbnailUrl: thumbnailReelMotionImg,
    videoType: 'demo',
    tags: ['Split Screens', 'High Energy', 'Pacing'],
  },
  {
    id: 'proj-7',
    title: 'Next-Gen AI Talking Head & Motion Graphics',
    category: 'ADS',
    description:
      'AI-enhanced talking head video synchronized with dynamic b-roll plates, UI animations, and automated subtitles.',
    duration: '1:12',
    client: 'SaaS Startup',
    aspectRatio: '16:9',
    thumbnailUrl: heroWorkstationImg,
    videoType: 'demo',
    tags: ['AI Video', 'UI Animations', 'Product Walkthrough'],
  },
  {
    id: 'proj-8',
    title: 'Top 5 Tech Gadgets That Changed 2026',
    category: 'YOUTUBE',
    description:
      'High-retention tech review format with smooth 3D product zooms, crisp graphics, and engaging chapter hooks.',
    duration: '14:20',
    client: 'Hardware Insight',
    aspectRatio: '16:9',
    thumbnailUrl: thumbnailYoutubeDocImg,
    videoType: 'demo',
    tags: ['Tech Review', 'AVD Optimization', 'B-Roll'],
  },
];

export const EDITING_PROCESS_STEPS = [
  {
    stepNumber: '01',
    title: 'SEND YOUR FOOTAGE',
    description:
      'Client sends raw footage, references, script/brief, and specific visual requirements via Google Drive, Dropbox, or WeTransfer.',
    details: 'Quick briefing call or WhatsApp alignment on tone, pacing, and target audience.',
  },
  {
    stepNumber: '02',
    title: 'EDITING',
    description:
      'I edit the footage according to the content style and objective — cutting dead air, crafting hooks, adding music, sound FX, and graphics.',
    details: 'Color balancing, audio normalization, and seamless motion graphics implementation.',
  },
  {
    stepNumber: '03',
    title: 'REVIEW',
    description:
      'Client reviews the first version and provides feedback. Timecoded notes and revisions are integrated with rapid turnaround.',
    details: 'Dedicated review rounds to ensure every transition and visual element matches your standard.',
  },
  {
    stepNumber: '04',
    title: 'FINAL DELIVERY',
    description:
      'Final polished video is delivered in the required format (4K/1080p, MP4, ProRes, vertical 9:16 or horizontal 16:9) ready to publish.',
    details: 'Optimized export settings for maximum compression efficiency without quality loss on Instagram or YouTube.',
  },
];

export const WHY_WORK_WITH_ME = [
  {
    title: 'Fast & Reliable Delivery',
    description:
      'Deadlines are non-negotiable. Consistent turnarounds ensure your publishing calendar stays ahead without last-minute panic.',
    metric: 'Prompt Turnaround',
  },
  {
    title: 'Clean Professional Editing',
    description:
      'No amateur transitions or messy timelines. Every cut, audio layer, and color node is polished to broadcast-level precision.',
    metric: 'Studio Grade',
  },
  {
    title: 'Social Media Focused',
    description:
      'Deep understanding of platform algorithms, thumb-stopping hooks, watch time optimization, and viewer psychology.',
    metric: 'Retention Engineered',
  },
  {
    title: 'Attention to Detail',
    description:
      'Frame-accurate pacing, custom sound design, color-corrected skin tones, and subtle typographic finesse that elevates brand value.',
    metric: 'Frame Accuracy',
  },
  {
    title: 'Client-Focused Workflow',
    description:
      'Smooth, transparent communication via WhatsApp or Email. Clear revision cycles and zero guesswork throughout production.',
    metric: 'Zero Friction',
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'plan-reels',
    title: 'REELS / SHORTS',
    priceLabel: '500',
    currency: '₹',
    subheading: 'Perfect for short-form creators looking to grow their reach with viral vertical content.',
    features: [
      'Up to 60 seconds of edited footage',
      'Professional cuts & dead-air removal',
      'Animated captions & highlighted words',
      'Basic motion graphics & pop-ups',
      'Sound effects & trending background music',
      'Extra 10 seconds: ₹50 only',
    ],
    extraDetails: 'Delivery within 24-48 hours. Formats: 9:16 vertical MP4.',
    highlighted: false,
  },
  {
    id: 'plan-youtube',
    title: 'YOUTUBE VIDEOS',
    priceLabel: '800',
    currency: '₹',
    subheading: 'Engineered for high average view duration (AVD), clean narrative flow, and brand retention.',
    features: [
      '5 Minute Video — ₹800',
      '10 Minute Video — ₹1,500',
      'Hook retention optimization in first 30 seconds',
      'Curated B-roll selection & sync',
      'Sound design with risers, impacts & atmos',
      'Color correction & audio level normalization',
    ],
    extraDetails: 'Pricing can vary depending on project complexity & raw footage volume.',
    highlighted: true,
  },
  {
    id: 'plan-monthly',
    title: 'MONTHLY SOCIAL MEDIA EDITING',
    priceLabel: '10,000',
    currency: '₹',
    periodLabel: '/month',
    subheading: 'Dedicated editor retainer for creators and businesses demanding consistent high-volume output.',
    features: [
      'Full monthly coverage across Instagram, YouTube & Facebook',
      'Multiple videos per month tailored to your calendar',
      'Consistent editing style & brand visual identity',
      'Priority turnaround & dedicated queue',
      'Batch production workflow',
      'Direct WhatsApp access & strategic feedback',
    ],
    extraDetails: 'Custom monthly packages can be tailored to your exact publishing frequency.',
    highlighted: false,
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    quote:
      'Great editing and very professional communication. The videos became much more engaging and retention noticeably went up on our channel.',
    clientName: 'Aarav Sharma',
    channelOrRole: 'Tech & Lifestyle Creator',
    projectType: 'YouTube Long-form & Shorts',
  },
  {
    id: 'test-2',
    quote:
      'Fast delivery and excellent attention to detail. Vikash understands exactly what works on Instagram Reels without needing constant hand-holding.',
    clientName: 'Priya Mehra',
    channelOrRole: 'Fitness & Wellness Coach',
    projectType: 'Instagram Reels & Carousels',
  },
  {
    id: 'test-3',
    quote:
      'Exactly the editing style we were looking for. Clean cuts, high-quality audio mastering, and very responsive throughout the entire revision cycle.',
    clientName: 'Rohan Kapoor',
    channelOrRole: 'E-commerce Brand Lead',
    projectType: 'Commercial Video Ads',
  },
];
