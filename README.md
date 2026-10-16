# Ariya Sinhala Traditional Sri Lankan Wedding Invitation Website

A digital wedding invitation inspired by traditional Sri Lankan Kandyan wedding aesthetics, page structure, illustrations, typography, and interactive ceremony elements. Inspired by the **Ariya Sinhala** design from [invitation.lk](https://invitation.lk/samples/ariya-sinhala).

---

## 🌟 Key Features

1. **Traditional Kandyan Aesthetics**:
   - Palette: Warm Ivory (`#F7F2E7` / `#FFF9EF`), Antique Gold (`#B49A55`), Champagne (`#D3BD86`), Dark Brown (`#3F3B29`), Kandyan Forest Green (`#1F3E2F` / `#2F5A45`), and Ruby Maroon (`#963A30`).
   - Authentic Sri Lankan SVG Ornaments: Chandra Mandala, Liyawel scroll dividers, Floral corners, Traditional Poruwa icon, and floating gold dust particles.

2. **Opening Invitation Card Experience**:
   - Traditional card framing with couple names, wedding date, and illustrated Kandyan couple artwork.
   - Prominent **"ආරාධනය විවෘත කරන්න" / "Open Invitation"** button with a smooth card-reveal transition into the invitation.

3. **Hero Section — "ශ්‍රී සුභ මංගලම්"**:
   - Couple introduction in Sinhala and English (සඳුනි සහ රවින්දු / Sanduni & Ravindu).
   - Bride's and groom's parents' blessing details.
   - Distinctive wedding date ribbon (12th December 2026).
   - Illustrated Kandyan wedding couple in traditional ceremonial attire.

4. **Bilingual Sinhala-First Design**:
   - Loaded with Google Unicode fonts `Noto Serif Sinhala` & `Noto Sans Sinhala` alongside `Playfair Display` and `Cormorant Garamond`.
   - Floating language toggle (`සිංහල` / `ENG`) that updates headings, event labels, countdown units, venue details, and RSVP form fields in real-time.

5. **Our Story — Relationship Timeline**:
   - 5 editable milestones with year badges, gold connecting lines, romantic descriptions, and featured couple artwork.

6. **Live Wedding Countdown**:
   - Real-time countdown configured to **Asia/Colombo** time zone (Days, Hours, Minutes, Seconds).
   - Gracefully transitions to a celebratory message once the wedding date arrives.

7. **Wedding Events & Poruwa Ceremony**:
   - Registration (විවාහ ලියාපදිංචිය)
   - Traditional Poruwa ceremony (පෝරුවේ චාරිත්‍ර)
   - Reception & fellowship (මංගල ප්‍රීති සාදය)
   - One-click **"Save to Calendar"** downloading a generated `.ics` calendar file with correct Sri Lanka time zone, location, and description + Google Calendar direct link.

8. **Photo Gallery with Full-Screen Lightbox**:
   - Responsive masonry grid with zoom-on-hover effects.
   - Full-screen modal lightbox supporting next, previous, close, keyboard arrow keys, and Escape key.

9. **Wedding Venue & Interactive Map**:
   - Araliya Grand, Nuwara Eliya location details.
   - Embedded Google Map iframe + direct "Google Maps ඔස්සේ බලන්න" navigation button.

10. **Functional RSVP System & Persistence**:
    - Full name, attendance selection (Joyfully Accept / Regretfully Decline), guest count counter with max guest caps, contact number, and heartfelt blessings.
    - Confetti celebration upon accepting!
    - **Server-side persistence**: Saves to local `data/rsvps.json` with deduplication and summary stats (`GET /api/rsvp`).
    - Optional forward to Google Sheets via `GOOGLE_SHEET_WEBHOOK_URL` environment variable.

11. **Ambient Traditional Music Player**:
    - Floating top-right volume toggle.
    - Plays a calming traditional flute melody synthesized with Web Audio API or fallback audio track.

---

## 🛠️ Project Structure

```
├── data/
│   └── rsvps.json                   # Server-persisted RSVP responses
├── public/
│   ├── images/
│   │   ├── hero-couple.jpg          # Main traditional Kandyan couple illustration
│   │   ├── story-couple.jpg         # Love story artwork
│   │   ├── poruwa-ceremony.jpg      # Sacred Poruwa ceremony photography
│   │   ├── gallery-1.jpg to 6.jpg   # Gallery photography assets
│   │   └── venue.jpg                # Venue photography
│   └── music.mp3                    # Ambient background audio fallback
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── rsvp/route.ts        # POST (submit RSVP) & GET (RSVP summary)
│   │   ├── globals.css              # Custom color palette & gold particle animations
│   │   ├── layout.tsx               # Noto Serif Sinhala font & SEO OpenGraph metadata
│   │   └── page.tsx                 # Main wedding invitation page
│   ├── components/
│   │   ├── ornaments/
│   │   │   ├── SriLankanMandala.tsx # Traditional Chandra Mandala SVG
│   │   │   ├── LiyawelDivider.tsx   # Liyawel scroll & floral corners
│   │   │   └── PoruwaIcon.tsx       # Traditional Poruwa canopy & Punkalasa SVGs
│   │   ├── AudioPlayer.tsx          # Ambient music toggle & Web Audio synthesizer
│   │   ├── InvitationCover.tsx      # Opening card reveal screen
│   │   ├── LanguageSwitcher.tsx     # Sinhala / English bilingual switcher
│   │   ├── Navigation.tsx           # Floating bottom glass dock
│   │   ├── PhotoGallery.tsx         # Interactive gallery & modal lightbox
│   │   ├── RelationshipTimeline.tsx # 5 editable story milestones
│   │   ├── RSVPForm.tsx             # Validated RSVP form with confetti
│   │   ├── WeddingCountdown.tsx     # Real-time countdown (Asia/Colombo)
│   │   ├── WeddingEvents.tsx        # Event schedule & .ICS calendar download
│   │   ├── WeddingFooter.tsx        # Closing benediction in forest green & gold
│   │   ├── WeddingHero.tsx          # Couple introduction & date ribbon
│   │   └── WeddingVenue.tsx         # Venue details & Google Maps
│   └── config/
│       └── wedding.ts               # Centralized configuration (Names, Dates, Events, Content)
```

---

## ⚙️ Centralized Customization

To customize the wedding details for another couple, simply edit:
👉 `src/config/wedding.ts`

You can change:
- Couple names in Sinhala & English
- Parents' names
- Wedding date & time
- Venue address and Google Maps links
- Event schedule and Poruwa timings
- Relationship milestones (years, titles, descriptions)
- Gallery photo list
- RSVP limits and contact numbers

---

## 🚀 Running the Project

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Or run production server (currently running on port 3005)
npm run build
npm run start -- -p 3005
```

Open [http://localhost:3005](http://localhost:3005) in your browser.
