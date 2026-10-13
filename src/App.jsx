import React, { useState } from 'react';
import { RefreshCw, Share2, Check, Calendar, MapPin, Sparkles, Heart, Printer } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';

export default function App() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [copied, setCopied] = useState(false);

  const photoGalleryUrl = "https://example.com/our-wedding-pictures";
  const venueMapUrl = "https://maps.google.com/?q=Intare+Arena+Rusororo+and+Jalia+Holy+Church";

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Fiston & Nancy Wedding Invitation',
        text: 'You are cordially invited to our wedding celebration.',
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handlePrintPDF = () => {
    window.print();
  };

  const handleAddToCalendar = (e) => {
    e.stopPropagation();
    const ICS_DATA = `BEGIN:VCALENDAR\nVERSION:2.0\nBEGIN:VEVENT\nSUMMARY:Fiston & Nancy Wedding Reception\nDESCRIPTION:Church & Reception Celebration\nLOCATION:Bethesda Holy Church & Intare Arena Rusororo\nDTSTART:20261226T140000Z\nEND:20261226T190000Z\nEND:VEVENT\nEND:VCALENDAR`;
    const blob = new Blob([ICS_DATA], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'wedding-invite.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Original Gradient SVG Divider
  const CopperDivider = () => (
    <div className="flex items-center justify-center my-3 opacity-90">
      <svg width="150" height="12" viewBox="0 0 150 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 6H55" stroke="url(#copper-line)" strokeWidth="0.75"/>
        <circle cx="67" cy="6" r="1.5" fill="#e0a96d"/>
        <circle cx="75" cy="6" r="2" fill="#f2d09b"/>
        <circle cx="83" cy="6" r="1.5" fill="#e0a96d"/>
        <path d="M95 6H150" stroke="url(#copper-line)" strokeWidth="0.75"/>
        <defs>
          <linearGradient id="copper-line" x1="0" y1="0" x2="150" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="#b87333" stopOpacity="0"/>
            <stop offset="0.35" stopColor="#e0a96d"/>
            <stop offset="0.65" stopColor="#e0a96d"/>
            <stop offset="1" stopColor="#b87333" stopOpacity="0"/>
          </linearGradient>
        </defs>
      </svg>
    </div>
  );

  const RoyalCrest = () => (
    <div className="flex flex-col items-center justify-center my-1">
      <svg width="44" height="44" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-95">
        <circle cx="50" cy="50" r="46" stroke="url(#crest-grad)" strokeWidth="1.25"/>
        <circle cx="50" cy="50" r="41" stroke="url(#crest-grad)" strokeWidth="0.5" strokeDasharray="2 2"/>
        <path d="M33 32H45M33 50H42M33 32V68" stroke="url(#crest-grad)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M57 68V32L71 68V32" stroke="url(#crest-grad)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <defs>
          <linearGradient id="crest-grad" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
            <stop stopColor="#f2d09b"/>
            <stop offset="0.5" stopColor="#d99852"/>
            <stop offset="1" stopColor="#a35e22"/>
          </linearGradient>
        </defs>
      </svg>
    </div>
  );

  // Luxurious Crown / Flourish Symbol replacing VIP text
  const LuxurySymbol = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-90">
      <path d="M12 2L14.5 8.5L21 9.5L16 14.5L17.5 21L12 17.5L6.5 21L8 14.5L3 9.5L9.5 8.5L12 2Z" fill="url(#star-grad)" stroke="#b87333" strokeWidth="0.75" strokeLinejoin="round"/>
      <defs>
        <linearGradient id="star-grad" x1="3" y1="2" x2="21" y2="21" gradientUnits="userSpaceOnUse">
          <stop stopColor="#f2d09b"/>
          <stop offset="0.5" stopColor="#d99852"/>
          <stop offset="1" stopColor="#a35e22"/>
        </linearGradient>
      </defs>
    </svg>
  );

  return (
    <div className="min-h-screen bg-[#121929] flex flex-col justify-between overflow-x-hidden relative">
      
      {/* Top-Left Ambient Spotlight */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-[#263556]/60 via-transparent to-transparent rounded-full blur-[130px] pointer-events-none print:hidden"></div>

      {/* ================= REFINED MINIMALIST LUXURY NAVIGATION BAR ================= */}
      <header className="w-full max-w-6xl mx-auto px-6 py-3.5 flex items-center justify-between border-b border-[#b87333]/20 bg-[#121929]/90 backdrop-blur-md z-20 print:hidden">
        <div className="flex items-center gap-2.5">
          <Heart className="w-3.5 h-3.5 text-[#e0a96d] opacity-90" />
          <span className="font-cinzel text-xs font-semibold tracking-[0.35em] bg-gradient-to-r from-[#f2d09b] via-[#e0a96d] to-[#f2d09b] bg-clip-text text-transparent">
            F & N
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button 
            onClick={handlePrintPDF}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#b87333]/30 bg-[#162036]/60 hover:bg-[#1c2946] text-[#e0a96d] text-[10px] font-cinzel tracking-widest transition-all cursor-pointer shadow-sm"
            title="Save as PDF / Print"
          >
            <Printer className="w-3 h-3 text-[#b87333]" />
            SAVE PDF
          </button>

          <button 
            onClick={() => setIsFlipped(!isFlipped)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#b87333]/30 bg-[#162036]/60 hover:bg-[#1c2946] text-[#e0a96d] text-[10px] font-cinzel tracking-widest transition-all cursor-pointer shadow-sm"
          >
            <RefreshCw className={`w-3 h-3 ${isFlipped ? 'rotate-180' : ''} transition-transform duration-500`} />
            {isFlipped ? 'SHOW FRONT' : 'FLIP CARD'}
          </button>

          <button 
            onClick={handleShare}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#b87333]/30 bg-[#162036]/60 hover:bg-[#1c2946] text-[#e0a96d] text-[10px] font-cinzel tracking-widest transition-all cursor-pointer shadow-sm"
          >
            {copied ? <Check className="w-3 h-3 text-green-400" /> : <Share2 className="w-3 h-3 text-[#b87333]" />}
            {copied ? 'COPIED' : 'INVITE'}
          </button>
        </div>
      </header>

      {/* ================= MAIN CARD STAGE (Interactive Flipping View) ================= */}
      <main className="flex-1 flex flex-col items-center justify-center p-6 my-auto z-10 print:hidden">
        <div 
          className="w-full max-w-[390px] h-[720px] perspective-1500 cursor-pointer group"
          onClick={() => setIsFlipped(!isFlipped)}
        >
          <div className={`w-full h-full relative transform-style-3d transition-transform duration-1000 shadow-[0_35px_70px_rgba(4,7,14,0.95),0_0_45px_rgba(184,115,51,0.15)] rounded-3xl ${isFlipped ? 'rotate-y-180' : ''}`}>
            
            {/* FRONT SIDE */}
            <div className="absolute inset-0 w-full h-full backface-hidden rounded-3xl border border-[#b87333]/40 bg-gradient-to-b from-[#1d2944] via-[#121929] to-[#0d1322] p-6 flex flex-col justify-between text-center overflow-hidden shadow-2xl">
              <div className="absolute inset-2.5 rounded-2xl border border-[#b87333]/20 pointer-events-none"></div>
              <div className="flex justify-between items-center text-[10px] font-cinzel tracking-[0.25em] text-[#b0c4de] uppercase opacity-90 pt-2 px-2">
                <span>EST. 2026</span>
                <LuxurySymbol />
              </div>
              <div className="my-auto py-2 flex flex-col items-center">
                <h1 className="font-cinzel text-xl font-medium tracking-[0.4em] bg-gradient-to-b from-[#f2d09b] via-[#d99852] to-[#a35e22] bg-clip-text text-transparent [writing-mode:vertical-lr] rotate-180 select-none drop-shadow-sm">
                  FISTON & NANCY
                </h1>
                <div className="mt-5 p-3 bg-[#0d1322]/95 border border-[#b87333]/50 rounded-2xl shadow-inner">
                  <QRCodeSVG value={photoGalleryUrl} size={76} bgColor="#0d1322" fgColor="#e0a96d" level="H" />
                  <span className="block text-[8px] font-cinzel tracking-[0.2em] text-[#b0c4de] mt-2 uppercase font-semibold">SCAN FOR PICTURES</span>
                </div>
              </div>
              <div className="text-[10px] font-cinzel tracking-[0.25em] text-[#b0c4de] uppercase opacity-85 pb-2 flex items-center justify-center gap-1.5 font-semibold">
                <Sparkles className="w-3 h-3 text-[#b87333]" />
                CLICK TO REVEAL INVITATION
                <Sparkles className="w-3 h-3 text-[#b87333]" />
              </div>
            </div>

            {/* BACK SIDE */}
            <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-3xl border border-[#b87333]/40 bg-gradient-to-b from-[#1d2944] via-[#121929] to-[#0d1322] px-6 py-6 flex flex-col justify-between overflow-y-auto shadow-2xl">
              <div className="absolute inset-2.5 rounded-2xl border border-[#b87333]/20 pointer-events-none"></div>
              
              <div className="text-center space-y-1 pt-1">
                <RoyalCrest />
                <p className="italic text-[9.5px] text-[#b0c4de] leading-tight font-light tracking-wide">“I have found the one whom my soul loves”</p>
                <p className="font-cinzel text-[6.5px] text-[#e0a96d] tracking-[0.25em] font-semibold">SONG OF SOLOMON 3:4</p>
                <div className="pt-1.5">
                  <p className="text-[6.5px] text-[#8fa3bf] tracking-[0.25em] uppercase">UMURYANGO WA</p>
                  <p className="font-cinzel text-[8.5px] font-semibold tracking-wide mt-0.5 bg-gradient-to-r from-[#f2d09b] via-[#d99852] to-[#a35e22] bg-clip-text text-transparent">RUDASINGWA J.BAPTISTE & SEBARERA FRANCOIS</p>
                </div>
                <p className="italic text-[9px] text-[#b0c4de] pt-0.5 font-light">Bishimiye kubatumira mu bukwe bw’ Abana babo</p>
              </div>

              <CopperDivider />

              <div className="text-center">
                <h2 className="font-cinzel text-sm font-bold tracking-[0.2em] bg-gradient-to-r from-[#f2d09b] via-[#d99852] to-[#a35e22] bg-clip-text text-transparent">FISTON</h2>
                <span className="font-serif italic text-[#e0a96d] text-[10px] leading-none block my-0.5 font-bold">&</span>
                <h2 className="font-cinzel text-sm font-bold tracking-[0.2em] bg-gradient-to-r from-[#f2d09b] via-[#d99852] to-[#a35e22] bg-clip-text text-transparent">NANCY</h2>
              </div>

              <CopperDivider />

              {/* Ceremony & Reception Schedule */}
              <div className="text-center py-1">
                <h3 className="font-cinzel text-[9px] tracking-[0.2em] text-[#e0a96d] font-bold mb-1">
                  WEDDING CELEBRATION
                </h3>
                <p className="text-[9.5px] text-[#f0f4f8] font-medium flex items-center justify-center gap-1.5 mb-1">
                  <Calendar className="w-2.5 h-2.5 text-[#b87333]" /> Saturday, December 26, 2026
                </p>
                <div className="space-y-1 mt-1.5">
                  <p className="text-[9px] text-[#f0f4f8]">Bethesda Holy Church — 2:00 PM</p>
                  <p className="text-[9px] text-[#b0c4de] italic flex items-center justify-center gap-1.5">
                    <MapPin className="w-2.5 h-2.5 text-[#b87333]" /> Intare Arena Rusororo — 4:00 PM
                  </p>
                </div>
              </div>

              <div className="pt-2 border-t border-[#b87333]/30 space-y-2">
                <div className="flex gap-2 justify-center">
                  <span onClick={handleAddToCalendar} className="px-3.5 py-1 rounded-full border border-[#b87333]/40 bg-[#162036] text-[8px] font-cinzel font-bold text-[#e0a96d] cursor-pointer hover:bg-[#1c2946]">ADD TO CALENDAR</span>
                  <a href={venueMapUrl} target="_blank" rel="noopener noreferrer" className="px-3.5 py-1 rounded-full border border-[#b87333]/40 bg-[#162036] text-[8px] font-cinzel font-bold text-[#e0a96d] hover:bg-[#1c2946]">VENUE MAP</a>
                </div>
                <div className="flex justify-between items-center text-[8.5px] px-1">
                  <span className="font-cinzel tracking-[0.2em] text-[#8fa3bf]">EST — 2026</span>
                  <span className="font-cinzel tracking-[0.2em] bg-gradient-to-r from-[#f2d09b] to-[#d99852] bg-clip-text text-transparent font-extrabold">FOREVER</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>

      {/* ================= PRINT-ONLY STATIC SPREAD (Front & Back Side-by-Side Landscape) ================= */}
      <div className="hidden print:flex print:flex-row print:justify-center print:items-center print:gap-16 print:w-screen print:h-screen print:bg-transparent" style={{ WebkitPrintColorAdjust: 'exact', printColorAdjust: 'exact' }}>
        
        {/* PRINT FRONT */}
        <div className="rounded-3xl border border-[#b87333]/50 p-6 flex flex-col justify-between text-center relative shadow-2xl shrink-0 z-10" style={{ width: '380px', height: '680px', background: 'linear-gradient(180deg, #1b2642 0%, #101726 50%, #0b101c 100%)', WebkitPrintColorAdjust: 'exact', printColorAdjust: 'exact' }}>
          <div className="absolute inset-2.5 rounded-2xl border border-[#b87333]/30 pointer-events-none"></div>
          <div className="flex justify-between items-center text-[10px] font-cinzel tracking-[0.25em] text-[#b0c4de] uppercase pt-2 px-2">
            <span>EST. 2026</span>
            <LuxurySymbol />
          </div>
          <div className="my-auto py-2 flex flex-col items-center">
            <h1 className="font-cinzel text-xl font-medium tracking-[0.4em] text-[#e0a96d] [writing-mode:vertical-lr] rotate-180 select-none drop-shadow-md">
              FISTON & NANCY
            </h1>
            <div className="mt-5 p-3 rounded-2xl shadow-inner" style={{ backgroundColor: '#0b101c', border: '1px solid rgba(184, 115, 51, 0.6)', WebkitPrintColorAdjust: 'exact', printColorAdjust: 'exact' }}>
              <QRCodeSVG value={photoGalleryUrl} size={76} bgColor="#0b101c" fgColor="#e0a96d" level="H" />
              <span className="block text-[8px] font-cinzel tracking-[0.2em] text-[#b0c4de] mt-2 uppercase font-semibold">SCAN FOR PICTURES</span>
            </div>
          </div>
          <div className="text-[10px] font-cinzel tracking-[0.25em] text-[#b0c4de] uppercase pb-2 flex items-center justify-center gap-1.5 font-semibold">
            <Sparkles className="w-3 h-3 text-[#b87333]" />
            FRONT SIDE
            <Sparkles className="w-3 h-3 text-[#b87333]" />
          </div>
        </div>

        {/* PRINT BACK */}
        <div className="rounded-3xl border border-[#b87333]/50 px-6 py-6 flex flex-col justify-between text-center relative shadow-2xl shrink-0 z-10" style={{ width: '380px', height: '680px', background: 'linear-gradient(180deg, #1b2642 0%, #101726 50%, #0b101c 100%)', WebkitPrintColorAdjust: 'exact', printColorAdjust: 'exact' }}>
          <div className="absolute inset-2.5 rounded-2xl border border-[#b87333]/30 pointer-events-none"></div>
          <div className="text-center space-y-1 pt-1">
            <RoyalCrest />
            <p className="italic text-[9.5px] text-[#b0c4de] leading-tight font-light">“I have found the one whom my soul loves”</p>
            <p className="font-cinzel text-[6.5px] text-[#e0a96d] tracking-[0.25em] font-semibold">SONG OF SOLOMON 3:4</p>
            <div className="pt-1.5">
              <p className="text-[6.5px] text-[#8fa3bf] tracking-[0.25em] uppercase">UMURYANGO WA</p>
              <p className="font-cinzel text-[8.5px] font-semibold text-[#e0a96d]">RUDASINGWA J.BAPTISTE & SEBARERA FRANCOIS</p>
            </div>
            <p className="italic text-[9px] text-[#b0c4de] pt-0.5">Bishimiye kubatumira mu bukwe bw’ Abana babo</p>
          </div>
          <CopperDivider />
          <div className="text-center">
            <h2 className="font-cinzel text-sm font-bold tracking-[0.2em] text-[#e0a96d]">FISTON</h2>
            <span className="font-serif italic text-[#e0a96d] text-[10px] leading-none block my-0.5">&</span>
            <h2 className="font-cinzel text-sm font-bold tracking-[0.2em] text-[#e0a96d]">NANCY</h2>
          </div>
          <CopperDivider />
          <div className="text-center space-y-1">
            <h3 className="font-cinzel text-[9px] tracking-[0.2em] text-[#e0a96d] font-bold mb-1">WEDDING CELEBRATION</h3>
            <p className="text-[9.5px] text-[#f0f4f8] font-medium flex items-center justify-center gap-1.5 mb-1">
              <svg className="w-2.5 h-2.5 inline-block" viewBox="0 0 24 24" fill="none" stroke="#b87333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
              Saturday, December 26, 2026
            </p>
            <p className="text-[9px] text-[#f0f4f8]">Bethesda Holy Church — 2:00 PM</p>
            <p className="text-[9px] text-[#b0c4de] italic flex items-center justify-center gap-1.5">
              <svg className="w-2.5 h-2.5 inline-block" viewBox="0 0 24 24" fill="none" stroke="#b87333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              Intare Arena Rusororo — 4:00 PM
            </p>
          </div>
          <div className="pt-2 border-t border-[#b87333]/30 space-y-2">
            <div className="flex justify-between items-center text-[8.5px] px-1">
              <span className="font-cinzel tracking-[0.2em] text-[#8fa3bf]">EST — 2026</span>
              <span className="font-cinzel tracking-[0.2em] text-[#e0a96d] font-extrabold">FOREVER</span>
            </div>
          </div>
        </div>

      </div>

      {/* ================= BOTTOM INDICATOR ================= */}
      <footer className="w-full py-4 text-center z-20 print:hidden">
        <div className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-[#b87333]/40 bg-[#162036] text-[#e0a96d] shadow-md animate-bounce">
          ↓
        </div>
      </footer>

    </div>
  );
}