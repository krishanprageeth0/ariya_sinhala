export interface WeddingConfig {
  couple: {
    groom: {
      nameSi: string;
      nameEn: string;
      fullNameSi: string;
      fullNameEn: string;
      parentsSi: string;
      parentsEn: string;
    };
    bride: {
      nameSi: string;
      nameEn: string;
      fullNameSi: string;
      fullNameEn: string;
      parentsSi: string;
      parentsEn: string;
    };
  };
  weddingDate: string; // ISO 8601 string for countdown
  displayDate: {
    si: {
      day: string;
      month: string;
      year: string;
      full: string;
    };
    en: {
      day: string;
      month: string;
      year: string;
      full: string;
    };
  };
  timeZone: string;
  venue: {
    nameSi: string;
    nameEn: string;
    citySi: string;
    cityEn: string;
    addressSi: string;
    addressEn: string;
    googleMapsUrl: string;
    embedMapUrl: string;
  };
  events: Array<{
    id: string;
    titleSi: string;
    titleEn: string;
    timeSi: string;
    timeEn: string;
    venueSi: string;
    venueEn: string;
    descriptionSi?: string;
    descriptionEn?: string;
    startTime: string; // "08:30"
    endTime: string; // "10:00"
    iconType: "signature" | "poruwa" | "reception";
  }>;
  timeline: Array<{
    year: string;
    titleSi: string;
    titleEn: string;
    descriptionSi: string;
    descriptionEn: string;
  }>;
  gallery: Array<{
    id: string;
    src: string;
    altSi: string;
    altEn: string;
    captionSi?: string;
    captionEn?: string;
    span?: "tall" | "wide" | "normal";
  }>;
  rsvp: {
    deadlineSi: string;
    deadlineEn: string;
    maxGuestsPerSubmission: number;
    phoneSi: string;
    phoneEn: string;
    contactNumber: string;
  };
  messages: {
    invitationGreetingSi: string;
    invitationGreetingEn: string;
    heroSubheadingSi: string;
    heroSubheadingEn: string;
    storyHeadingSi: string;
    storyHeadingEn: string;
    storyDescriptionSi: string;
    storyDescriptionEn: string;
    countdownHeadingSi: string;
    countdownHeadingEn: string;
    eventsHeadingSi: string;
    eventsHeadingEn: string;
    galleryHeadingSi: string;
    galleryHeadingEn: string;
    venueHeadingSi: string;
    venueHeadingEn: string;
    rsvpHeadingSi: string;
    rsvpHeadingEn: string;
    closingBlessingSi: string;
    closingBlessingEn: string;
  };
}

export const weddingConfig: WeddingConfig = {
  couple: {
    groom: {
      nameSi: "රවින්දු",
      nameEn: "Ravindu",
      fullNameSi: "රවින්දු ප්‍රනාන්දු",
      fullNameEn: "Ravindu Fernando",
      parentsSi: "ප්‍රනාන්දු මහතා සහ මහත්මියගේ ආදරණීය පුතණුවන්",
      parentsEn: "Son of Mr. & Mrs. Fernando",
    },
    bride: {
      nameSi: "සඳුනි",
      nameEn: "Sanduni",
      fullNameSi: "සඳුනි රාජපක්ෂ",
      fullNameEn: "Sanduni Rajapaksha",
      parentsSi: "රාජපක්ෂ මහතා සහ මහත්මියගේ ආදරණීය දියණිය",
      parentsEn: "Daughter of Mr. & Mrs. Rajapaksha",
    },
  },
  weddingDate: "2026-12-12T08:30:00+05:30",
  displayDate: {
    si: {
      day: "12",
      month: "දෙසැම්බර්",
      year: "2026",
      full: "2026 දෙසැම්බර් මස 12 වැනි සෙනසුරාදා",
    },
    en: {
      day: "12",
      month: "DECEMBER",
      year: "2026",
      full: "Saturday, 12th December 2026",
    },
  },
  timeZone: "Asia/Colombo",
  venue: {
    nameSi: "අරලිය ග්‍රෑන්ඩ් හෝටලය",
    nameEn: "Araliya Grand",
    citySi: "නුවරඑළිය, ශ්‍රී ලංකාව",
    cityEn: "Nuwara Eliya, Sri Lanka",
    addressSi: "අංක 42, වැව පාර, නුවරඑළිය, ශ්‍රී ලංකාව",
    addressEn: "No. 42, Lake Road, Nuwara Eliya, Sri Lanka",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Araliya+Grand+Nuwara+Eliya+Sri+Lanka",
    embedMapUrl: "https://maps.google.com/maps?q=Araliya%20Grand%2C%20Nuwara%20Eliya%2C%20Sri%20Lanka&z=14&output=embed",
  },
  events: [
    {
      id: "registration",
      titleSi: "විවාහ ලියාපදිංචිය",
      titleEn: "Wedding Registration",
      timeSi: "පෙරවරු 08:30 ට",
      timeEn: "08:30 AM",
      venueSi: "අරලිය ග්‍රෑන්ඩ්, නුවරඑළිය",
      venueEn: "Araliya Grand, Nuwara Eliya",
      descriptionSi: "නෛතික විවාහ ලියාපදිංචි අත්සන් තැබීමේ චාරිත්‍රය",
      descriptionEn: "Official legal wedding registration and signing ceremony",
      startTime: "08:30",
      endTime: "09:30",
      iconType: "signature",
    },
    {
      id: "poruwa",
      titleSi: "චාරිත්‍රානුකූල පෝරුවේ චාරිත්‍ර",
      titleEn: "Traditional Poruwa Ceremony",
      timeSi: "පෙරවරු 10:00 ට",
      timeEn: "10:00 AM",
      venueSi: "ප්‍රධාන මංගල ශාලාව, අරලිය ග්‍රෑන්ඩ්",
      venueEn: "Grand Ballroom, Araliya Grand",
      descriptionSi: "සම්ප්‍රදායික උඩරට චාරිත්‍ර වාරිත්‍ර මධ්‍යයේ සෙත් පැතීම",
      descriptionEn: "Traditional Kandyan Poruwa rituals and blessings with Jayamangala Gatha",
      startTime: "10:00",
      endTime: "11:30",
      iconType: "poruwa",
    },
    {
      id: "reception",
      titleSi: "මංගල ප්‍රීති සාදය",
      titleEn: "Wedding Reception & Fellowship",
      timeSi: "පස්වරු 12:30 සිට",
      timeEn: "12:30 PM Onwards",
      venueSi: "අරලිය ග්‍රෑන්ඩ්, නුවරඑළිය",
      venueEn: "Araliya Grand, Nuwara Eliya",
      descriptionSi: "සුහද පිළිසඳර, සංගීතය සහ දිවා භෝජන සංග්‍රහය",
      descriptionEn: "Celebration, lunch buffet, music and joyous fellowship",
      startTime: "12:30",
      endTime: "16:00",
      iconType: "reception",
    },
  ],
  timeline: [
    {
      year: "2019",
      titleSi: "මුල්ම හමුවීම",
      titleEn: "The Beginning",
      descriptionSi: "සාමාන්‍ය දිනයක අපගේ දෑස් එකිනෙක ගැටුණු මොහොත. එතැන් පටන් මුළු ජීවිතයම අලුත් වර්ණයන්ගෙන් බබළන්නට විය.",
      descriptionEn: "Two paths crossed on an ordinary day, and somehow nothing felt ordinary after that.",
    },
    {
      year: "2021",
      titleSi: "සෙනෙහසින් බැඳී",
      titleEn: "Growing Together",
      descriptionSi: "සිනහව, සතුට මෙන්ම දුෂ්කර මොහොතවලදීද එකිනෙකාට ශක්තියක් වෙමින් අපේ මිත්‍රත්වය ගැඹුරු ආදරයක් බවට පත්විය.",
      descriptionEn: "Through seasons of laughter and quiet moments alike, a friendship blossomed into something deeper.",
    },
    {
      year: "2023",
      titleSi: "පොරොන්දුව",
      titleEn: "The Promise",
      descriptionSi: "තරු පිරි අහස් කුස යට, එකිනෙකාගේ අත් අල්ලාගත් අප සදාකල් එකට සිටින්නට සුන්දර පොරොන්දුවක් දුනිමු.",
      descriptionEn: "Under a sky full of stars, one question changed everything, and the answer was a joyful yes.",
    },
    {
      year: "2025",
      titleSi: "අනාගත සිහින",
      titleEn: "Building a Future",
      descriptionSi: "එක්ව ගොඩනැගූ බලාපොරොත්තු සහ හෙට දවස පිළිබඳ සුන්දර සිහින ජීවිතයේ සැබෑ අරමුණක් බවට පත් කරගතිමු.",
      descriptionEn: "Side by side, we turned shared dreams into plans and plans into a life we cherish.",
    },
    {
      year: "2026",
      titleSi: "සදාතනික බැඳීම",
      titleEn: "Forever Begins",
      descriptionSi: "දෙමාපිය, හිතමිතුරන්ගේ ආශිර්වාදය මැද අපගේ ජීවිතයේ අතිශය සුන්දරම පරිච්ඡේදය ආරම්භ කිරීමට සූදානම් වෙමු.",
      descriptionEn: "Now, surrounded by the people we love, we are ready for our most beautiful chapter yet: becoming husband and wife.",
    },
  ],
  gallery: [
    {
      id: "hero-1",
      src: "/images/hero-couple.jpg",
      altSi: "සඳුනි සහ රවින්දු සම්ප්‍රදායික උඩරට මංගල ඇඳුමින් සැරසී",
      altEn: "Sanduni and Ravindu in traditional Kandyan wedding attire",
      captionSi: "උඩරට සම්ප්‍රදායික මංගල ශ්‍රී විභූතිය",
      captionEn: "Traditional Kandyan Wedding Splendor",
      span: "tall",
    },
    {
      id: "gallery-1",
      src: "/images/gallery-1.jpg",
      altSi: "මංගල මුදු සහ මල් කළඹ",
      altEn: "Wedding rings and white floral bouquet",
      captionSi: "ප්‍රේමයේ පූජනීය සලකුණ",
      captionEn: "Sacred Tokens of Love",
      span: "normal",
    },
    {
      id: "gallery-2",
      src: "/images/gallery-2.jpg",
      altSi: "සුන්දර සිනහවෙන් පිරි ප්‍රීතිමත් මොහොතක්",
      altEn: "Joyful pre-wedding laughter together",
      captionSi: "හදවතින් නැඟෙන ප්‍රීතිය",
      captionEn: "Laughter From the Heart",
      span: "normal",
    },
    {
      id: "poruwa-main",
      src: "/images/poruwa-ceremony.jpg",
      altSi: "සාම්ප්‍රදායික පෝරුවේ චාරිත්‍ර සහ පැන් වත් කිරීම",
      altEn: "Traditional Poruwa sacred water pouring ceremony",
      captionSi: "සෙත් පිරිත් මැද පෝරුවේ චාරිත්‍ර",
      captionEn: "Sacred Poruwa Blessing Rituals",
      span: "tall",
    },
    {
      id: "story-art",
      src: "/images/story-couple.jpg",
      altSi: "නුවරඑළිය කඳුකර පසුබිමේ අපේ ආදර කතාව",
      altEn: "Romantic couple illustration at misty Nuwara Eliya",
      captionSi: "කඳුකර මීදුම මැද ආදරය",
      captionEn: "Love in the Hills",
      span: "normal",
    },
    {
      id: "gallery-5",
      src: "/images/gallery-5.jpg",
      altSi: "සදාතනික බැඳීමේ සෙනෙහස",
      altEn: "Walking together towards forever",
      captionSi: "අත්වැල් බැඳ හෙට දිනට",
      captionEn: "Hand in Hand Into Forever",
      span: "normal",
    },
  ],
  rsvp: {
    deadlineSi: "2026 දෙසැම්බර් 01 වන දිනට පෙර",
    deadlineEn: "Kindly respond by 1st December 2026",
    maxGuestsPerSubmission: 5,
    phoneSi: "+94 77 123 4567",
    phoneEn: "+94 77 123 4567",
    contactNumber: "+94771234567",
  },
  messages: {
    invitationGreetingSi: "ශ්‍රී සුභ මංගලම්!",
    invitationGreetingEn: "SRI SUBA MANGALAM!",
    heroSubheadingSi: "අපගේ මංගල දිනය සඳහා ඔබට ගෞරවයෙන් ආරාධනා කරමු",
    heroSubheadingEn: "You are Invited to the Wedding of",
    storyHeadingSi: "අපේ ආදර කතාව",
    storyHeadingEn: "Our Story",
    storyDescriptionSi: "අපගේ ජීවිතයේ අමතක නොවන සුන්දරම දිනය ඔබ සැමගේ ආදරණීය ආශිර්වාදය මැද සමරන්නට මහත් ප්‍රීතියෙන් ඇරයුම් කරමු.",
    storyDescriptionEn: "We are delighted to invite you to celebrate the beginning of our forever as we exchange vows surrounded by our loved ones. Your presence will make our special day even more memorable.",
    countdownHeadingSi: "ඒ සුන්දර දිනයට තව...",
    countdownHeadingEn: "Counting Down",
    eventsHeadingSi: "මංගල උත්සව විස්තර",
    eventsHeadingEn: "Wedding Events",
    galleryHeadingSi: "අපගේ මතකයන්",
    galleryHeadingEn: "Captured Moments",
    venueHeadingSi: "උත්සව ස්ථානය",
    venueHeadingEn: "Wedding Venue",
    rsvpHeadingSi: "ඔබගේ පැමිණීම තහවුරු කරන්න",
    rsvpHeadingEn: "Kindly Reply",
    closingBlessingSi: "අපගේ මංගල ප්‍රීතිය බෙදාගැනීමට ඔබ සැමට ආයුබෝවන්!",
    closingBlessingEn: "Thank you for sharing in the joy of our wedding day.",
  },
};
