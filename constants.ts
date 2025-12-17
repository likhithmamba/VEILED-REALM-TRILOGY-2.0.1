
import { Book, Epoch, LoreItem, Character, Download } from './types';

// --- CHAPTER CONTENT DEFINITIONS ---

const BOOK_1_CHAPTERS = [
  {
    id: "b1-prologue",
    title: "Prologue — The World Before the Rewrite",
    content: "\"Every world ends twice — first in memory, then in belief.\"\n\nBefore the silence took root.\n\nBefore the Voice began curating truth.\n\nBefore the Council traded fear for obedience… there was a boy with eyes that saw too far, and a girl who remembered what no one dared to."
  },
  {
    id: "b1-ch1",
    title: "Chapter 1 — Veiled Awakening",
    content: "The shrill, synthetic chirp of his smart ceiling pierced the early silence.\n\n“Aiden, it’s 8:30 AM. Your lab starts in 30 minutes. Current temperature: 65°F. Air quality is optimal. You are late.”"
  }
];

const BOOK_2_CHAPTERS = [
  {
    id: "b2-prologue",
    title: "Prologue — The Memory That Never Was",
    content: "Cycle Year 312 After The Rewrite | Thread Integrity Index: 82%\n\nThe world had forgotten how to dream.\n\nEvery night the Halo Witness shone above the clouds like a silver pupil—silent, perfect, unblinking."
  }
];

const BOOK_3_CHAPTERS = [
  {
    id: "b3-ch1",
    title: "Chapter 1 — The Fracture Beneath Heaven",
    content: "I. The Shattering Sky\n\nThe sky broke before Kael heard it scream.\n\nIt began with a tremor—subtle as breath, yet unmistakable, as though the heavens exhaled a memory it no longer wished to carry."
  }
];

export const BOOKS: Book[] = [
  {
    id: 1,
    title: "Threads of the Forgotten",
    subtitle: "Book I",
    description: "In a realm of curated silence, the Dreadful Eye awakens to see the truth hidden beneath the rewrite.",
    coverUrl: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop", 
    excerpt: "Every world ends twice — first in memory, then in belief.",
    buyUrl: "https://example.com/book1",
    chapters: BOOK_1_CHAPTERS
  },
  {
    id: 2,
    title: "Echoes of the Abyss",
    subtitle: "Book II",
    description: "The vortex of memory pulls harder as the Echoes of the Abyss scream for a world that refuses to remember.",
    coverUrl: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=2022&auto=format&fit=crop",
    excerpt: "The world had forgotten how to dream.",
    buyUrl: "https://example.com/book2",
    chapters: BOOK_2_CHAPTERS
  },
  {
    id: 3,
    title: "The Shadow's Embrace",
    subtitle: "Book III",
    description: "As the core of existence fractures, only those lost in the Shadow's Embrace can rebuild what was stolen.",
    coverUrl: "https://images.unsplash.com/photo-1614728263952-84ea206f25ab?q=80&w=1974&auto=format&fit=crop",
    excerpt: "The sky broke before Kael heard it scream.",
    buyUrl: "https://example.com/book3",
    chapters: BOOK_3_CHAPTERS
  }
];

export const STARTER_PACK: Book = {
  id: 99,
  title: "Veiled Realm: The Starter Pack",
  subtitle: "The Complete Collection Preview",
  description: "Experience the beginning of the end. Contains the Prologues and first chapters of all three books.",
  coverUrl: "https://images.unsplash.com/photo-1532012197367-bb83d53ba547?q=80&w=1000&auto=format&fit=crop",
  excerpt: "Three eras. One truth.",
  buyUrl: "https://imperialx.com/bundle",
  chapters: [
    { id: "sep-b1", title: "BOOK I", content: "", isSeparator: true },
    ...BOOK_1_CHAPTERS,
    { id: "sep-b2", title: "BOOK II", content: "", isSeparator: true },
    ...BOOK_2_CHAPTERS,
    { id: "sep-b3", title: "BOOK III", content: "", isSeparator: true },
    ...BOOK_3_CHAPTERS
  ]
};

export const TIMELINE_EPOCHS: Epoch[] = [
  { id: 1, title: "The Rewrite", year: "Age I", description: "The world ends in memory. The Voice begins curating truth." },
  { id: 2, title: "Age of Reverence", year: "Age II", description: "A world built on belief. Citizens pray to the Halo Witness." },
  { id: 3, title: "The Fracture", year: "Age III", description: "The sky breaks. The Veil falls. Kael awakens." },
  { id: 4, title: "The Memory War", year: "Age IV", description: "Faith becomes a battlefield clashing with Truth." },
  { id: 5, title: "Eclipsed Dawn", year: "Current Era", description: "Centuries later. 'We are who remembers us.'" }
];

export const LORE_ITEMS: LoreItem[] = [
  { id: 'l1', term: 'The Veil', definition: 'A membrane between truth and memory.' },
  { id: 'l2', term: 'The Oath', definition: 'A sentient system binding all creation.' },
  { id: 'l3', term: 'The Eclipser', definition: 'A primordial entity destroyer of memory.' },
  { id: 'l4', term: 'Riftborn', definition: 'Creatures birthed from forgotten truths.' },
  { id: 'l5', term: 'Mirrorseed', definition: 'A witness left behind to observe the fall.' },
];

export const CHARACTERS: Character[] = [
  { id: 'ch1', name: 'Kael Vevryn', role: 'The Marked', quote: "Once erased from existence. Now marked by the Oath." },
  { id: 'ch2', name: 'Lyra / Lyris', role: 'The Witness', quote: "The First Witness reborn." },
  { id: 'ch3', name: 'Nyra', role: 'The Shadow', quote: "Kael’s shadow and his unchosen consequence." },
  { id: 'ch4', name: 'Eryndor', role: 'The Architect', quote: "Kael’s former mentor—half flesh, half shadow." },
];

export const DOWNLOADS: Download[] = [
  { id: 'd1', title: 'Free Sample eBook', type: 'PDF', size: '2.4 MB' },
  { id: 'd2', title: 'Wallpaper Pack (Mobile)', type: 'HD Image', size: '12 MB' },
  { id: 'd3', title: 'Wallpaper Pack (Desktop)', type: '4K Image', size: '28 MB' },
];

export const BIO_TEXT = "ImperialX crafts worlds where memory is weapon and silence is survival. His writing blends epic scale with emotional weight. Off the page, he studies myth structures and dream logic.";
export const BIO_QUOTE = "I don’t write about heroes. I write about people who survive when the world forgets them.";
