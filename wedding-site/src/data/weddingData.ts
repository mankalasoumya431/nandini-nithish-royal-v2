import type { WeddingData } from '../types/wedding';

/**
 * Single source of truth for all wedding-specific content.
 * Swap the values in this file to reuse the site for a different wedding —
 * no component code needs to change.
 */
const HOME_ADDRESS =
  'H No. 3-310/3, Plot No. 33, Road No. 1, Thirumala Hills Colony, Meerpet, Hyderabad 500097';
const KL_ADDRESS = 'K.L. Convention, Beside Delhi Public School, Nadargul, Hyderabad';
const DHANVI_ADDRESS =
  'Dhanvi Conventions, Chinna Adiserlapally, Sagar Road, Kondamallepally, Nalgonda';

export const weddingData: WeddingData = {
  couple: {
    groom: {
      personName: 'Nithish',
      personTelugu: 'నితీష్',
      parents: 'Younger son of Smt. Gouru Nagamani & Sri Gouru Venkateshwarlu',
      parentsTelugu: 'శ్రీమతి గౌరు నాగమణి - శ్రీ గౌరు వెంకటేశ్వర్లు గార్ల కనిష్ఠ పుత్రుడు',
    },
    bride: {
      personName: 'Nandini',
      personTelugu: 'నందిని',
      parents: 'Younger daughter of Smt. Pola Lavanya (Ramadevi) & Sri Pola Rajaiah',
      parentsTelugu: 'శ్రీమతి పోల లావణ్య (రమాదేవి) - శ్రీ పోల రాజయ్య గార్ల కనిష్ఠ పుత్రిక',
    },
  },

  familyName: "Pola's",
  hosts: 'Smt. Pola Lavanya (Ramadevi) & Sri Pola Rajaiah',
  hostsTelugu: 'శ్రీమతి పోల లావణ్య (రమాదేవి) - శ్రీ పోల రాజయ్య',
  monogram: ['N', 'N'],

  invitationHeading: "Pola's family solicits your gracious presence at the marriage of",
  invitationHeadingLines: ['solicits your gracious presence', 'at the auspicious marriage of'],

  sacredText: 'శ్రీరస్తు · శుభమస్తు · అవిఘ్నమస్తు',
  sacredTransliteration: 'Srirasthu · Shubhamasthu · Avighnamasthu',

  invitationMessage:
    'We solicit your gracious presence with family and friends on the auspicious occasion of the marriage of our younger daughter.',

  shloka:
    'శ్రీరామ పత్ని జనకన్యపుత్రీ సీతాంగనా సుందర కోమలాంగీ ।\nభూగర్భజాతా భువనైక మాతా వధూ వరాభ్యాం వరదా భవంతు ॥',

  weddingDate: '2026-10-30',
  weddingDisplayDate: '30th October 2026',
  weddingDay: 'Friday',
  weddingTime: '10:59 AM',
  muhurthamNote: 'Dhanur Lagnam',
  panchangamTelugu:
    'శ్రీ పరాభవ నామ సంవత్సర ఆశ్వీయుజ మాస బహుళ పంచమి శుక్రవారము · మృగశిర నక్షత్రయుక్త ధనుర్ లగ్న పుష్కరాంశ శుభముహూర్తమున',

  events: [
    {
      id: 'haldi',
      title: 'Haldi',
      teluguTitle: 'హల్దీ',
      description:
        'Turmeric, laughter and blessings from family and loved ones to begin the celebrations.',
      audience: 'All invited guests',
      date: '2026-10-28',
      startTime: '10:00',
      displayDate: '28th October 2026 · Wednesday',
      displayTime: '10:00 AM onwards',
      location: 'At home · Meerpet, Hyderabad',
      mapQuery: HOME_ADDRESS,
    },
    {
      id: 'mehendi',
      title: 'Mehendi',
      teluguTitle: 'మెహందీ',
      description: 'An evening of henna, music and joy as the bride-to-be is adorned.',
      audience: 'All invited guests',
      date: '2026-10-28',
      startTime: '16:00',
      displayDate: '28th October 2026 · Wednesday',
      displayTime: '4:00 PM onwards',
      location: 'At home · Meerpet, Hyderabad',
      mapQuery: HOME_ADDRESS,
    },
    {
      id: 'pellikuthuru',
      title: 'Pellikuthuru',
      teluguTitle: 'పెళ్లికూతురు',
      description:
        'A traditional ceremony celebrating the bride-to-be with family, blessings and cherished customs.',
      audience: 'All invited guests',
      date: '2026-10-29',
      startTime: '13:00',
      displayDate: '29th October 2026 · Thursday',
      displayTime: 'After 2:00 PM',
      location: 'At home · Meerpet, Hyderabad',
      mapQuery: HOME_ADDRESS,
    },
    {
      id: 'muhurtham',
      title: 'Wedding Muhurtham',
      teluguTitle: 'వివాహ ముహూర్తం',
      description:
        'The sacred wedding rites at the auspicious Dhanur Lagnam, in the presence of family and loved ones.',
      audience: 'All invited guests',
      date: '2026-10-30',
      startTime: '10:59',
      displayDate: '30th October 2026 · Friday',
      displayTime: '10:59 AM',
      location: 'K.L. Convention · Nadargul, Hyderabad',
      mapQuery: KL_ADDRESS,
    },
    {
      id: 'reception',
      title: 'Reception & Dinner',
      teluguTitle: 'రిసెప్షన్ & విందు',
      description: 'An evening of celebration and dinner as we honour the newly married couple.',
      audience: 'All invited guests',
      date: '2026-11-01',
      startTime: '19:00',
      displayDate: '1st November 2026 · Sunday',
      displayTime: '7:00 PM onwards',
      location: 'Dhanvi Conventions · Kondamallepally, Nalgonda',
      mapQuery: DHANVI_ADDRESS,
    },
  ],

  // No dress code for this wedding (section is not rendered).
  dressCode: [],

  venue: [
    {
      venue: 'Haldi · Mehendi · Pellikuthuru',
      name: 'Our Home',
      teluguName: 'మా ఇల్లు',
      addressLines: [
        'H No. 3-310/3, Plot No. 33, Road No. 1',
        'Thirumala Hills Colony, Meerpet',
        'Hyderabad – 500097',
      ],
      mapQuery: HOME_ADDRESS,
      mapEmbedQuery: HOME_ADDRESS,
      mapUrl: 'https://maps.app.goo.gl/z1J4muDpKCUfsU7A7?g_st=ic',
    },
    {
      venue: 'Wedding Muhurtham',
      name: 'K.L. Convention',
      teluguName: 'కె.ఎల్. కన్వెన్షన్',
      addressLines: ['Beside Delhi Public School', 'Nadargul, Hyderabad'],
      mapQuery: KL_ADDRESS,
      mapEmbedQuery: KL_ADDRESS,
    },
    {
      venue: 'Reception & Dinner',
      name: 'Dhanvi Conventions',
      teluguName: 'ధాన్వి కన్వెన్షన్స్',
      addressLines: ['Chinna Adiserlapally, Sagar Road', 'Kondamallepally, Nalgonda'],
      mapQuery: DHANVI_ADDRESS,
      mapEmbedQuery: DHANVI_ADDRESS,
    },
  ],

  // Set a real stream URL to show the live-stream section; leave null to hide it.
  youtubeUrl: null,

  hashtag: '#NandiniWedsNithish',

  // Drop a couple photo in public/images/ and set e.g. 'images/couple.jpg'.
  // Until then the hero shows an elegant lettered frame.
  heroPhotoUrl: 'images/WA_1792208739977.jpg'

};

export default weddingData;
