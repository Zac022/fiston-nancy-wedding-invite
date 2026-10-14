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

  const CopperDivider = () => (
    <div className="flex items-center justify-center my-2.5 opacity-90">
      <svg width="130" height="10" viewBox="0 0 150 12" fill="none" xmlns="http://www.w3.org/2000/svg">
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

  const EditorialMonogram = () => (
    <div className="flex flex-col items-center justify-center my-0.5">
      <svg width="42" height="32" viewBox="0 0 140 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[0_2px_6px_rgba(217,152,82,0.3)]">
        <path d="M25 18H62M25 18V82M25 48H54" stroke="url(#mono-grad)" strokeWidth="5" strokeLinecap="square"/>
        <path d="M20 18H30M20 82H30" stroke="url(#mono-grad)" strokeWidth="2.5"/>
        <path d="M56 82V18L92 82V18" stroke="url(#mono-grad)" strokeWidth="5" strokeLinejoin="miter" strokeLinecap="square"/>
        <path d="M51 18H61M87 18H97M51 82H61M87 82H97" stroke="url(#mono-grad)" strokeWidth="2.5"/>
        <defs>
          <linearGradient id="mono-grad" x1="20" y1="18" x2="97" y2="82" gradientUnits="userSpaceOnUse">
            <stop stopColor="#f2d09b"/>
            <stop offset="0.45" stopColor="#d99852"/>
            <stop offset="1" stopColor="#a35e22"/>
          </linearGradient>
        </defs>
      </svg>
    </div>
  );

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
    <div className="min-h-screen bg-[#18233c] flex flex-col justify-between overflow-x-hidden relative">
      
      {/* Comprehensive Print Stylesheet enforcing exact screen colors & layout */}
      <style dangerouslySetInnerHTML={{ __html: `
        @media print {
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          body, html {
            background-color: #18233c !important;
            width: 100% !important;
            height: 100% !important;
          }
          .print\\:hidden {
            display: none !important;
          }
          .print\\:flex {
            display: flex !important;
            background-color: #18233c !important;
            width: 100vw !important;
            height: 100vh !important;
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            margin: 0 !important;
            padding: 0 !important;
            justify-content: center !important;
            align-items: center !important;
            gap: 40px !important;
          }
          .print-card-front, .print-card-back {
            background: linear-gradient(180deg, #3a528c 0%, #2c4070 50%, #203159 100%) !important;
            border: 1px solid rgba(184, 115, 51, 0.7) !important;
            box-shadow: 0 30px 60px rgba(0,0,0,0.8) !important;
            width: 380px !important;
            height: 680px !important;
            border-radius: 1.5rem !important;
            position: relative !important;
            padding: 1.5rem !important;
            display: flex !important;
            flex-direction: column !important;
            justify-content: space-between !important;
            text-align: center !important;
          }
          .print-gold-text {
            background: linear-gradient(to right, #f2d09b, #d99852, #a35e22) !important;
            -webkit-background-clip: text !important;
            -webkit-text-fill-color: transparent !important;
          }
        }
      `}} />

      {/* Top-Left Ambient Spotlight */}
      <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-gradient-to-br from-[#4a6ba8]/50 via-transparent to-transparent rounded-full blur-[160px] pointer-events-none print:hidden"></div>

      {/* ================= REFINED MINIMALIST LUXURY NAVIGATION BAR ================= */}
      <header className="w-full max-w-6xl mx-auto px-6 py-3.5 flex items-center justify-between border-b border-[#b87333]/30 bg-[#18233c]/90 backdrop-blur-md z-20 print:hidden">
        <div className="flex items-center gap-2.5">
          <Heart className="w-3.5 h-3.5 text-[#e0a96d] opacity-90" />
          <span className="font-cinzel text-xs font-semibold tracking-[0.35em] bg-gradient-to-r from-[#f2d09b] via-[#e0a96d] to-[#f2d09b] bg-clip-text text-transparent">
            F & N
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button 
            onClick={handlePrintPDF}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#b87333]/40 bg-[#283b66]/80 hover:bg-[#354f85] text-[#e0a96d] text-[10px] font-cinzel tracking-widest transition-all cursor-pointer shadow-sm"
            title="Save as PDF / Print"
          >
            <Printer className="w-3 h-3 text-[#b87333]" />
            SAVE PDF
          </button>

          <button 
            onClick={() => setIsFlipped(!isFlipped)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#b87333]/40 bg-[#283b66]/80 hover:bg-[#354f85] text-[#e0a96d] text-[10px] font-cinzel tracking-widest transition-all cursor-pointer shadow-sm"
          >
            <RefreshCw className={`w-3 h-3 ${isFlipped ? 'rotate-180' : ''} transition-transform duration-500`} />
            {isFlipped ? 'SHOW FRONT' : 'FLIP CARD'}
          </button>

          <button 
            onClick={handleShare}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#b87333]/40 bg-[#283b66]/80 hover:bg-[#354f85] text-[#e0a96d] text-[10px] font-cinzel tracking-widest transition-all cursor-pointer shadow-sm"
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
          <div className={`w-full h-full relative transform-style-3d transition-transform duration-1000 shadow-[0_40px_90px_rgba(5,8,15,0.9),0_0_40px_rgba(184,115,51,0.25)] rounded-3xl ${isFlipped ? 'rotate-y-180' : ''}`}>
            
            {/* FRONT SIDE */}
            <div className="absolute inset-0 w-full h-full backface-hidden rounded-3xl border border-[#b87333]/70 bg-gradient-to-b from-[#3a528c] via-[#2c4070] to-[#203159] p-6 flex flex-col justify-between text-center overflow-hidden shadow-2xl">
              <div className="absolute inset-2.5 rounded-2xl border border-[#b87333]/40 pointer-events-none"></div>
              <div className="flex justify-between items-center text-[10px] font-cinzel tracking-[0.25em] text-[#e2e8f0] uppercase opacity-95 pt-2 px-2">
                <span>EST. 2026</span>
                <LuxurySymbol />
              </div>
              <div className="my-auto py-2 flex flex-col items-center">
                <h1 className="font-cinzel text-xl font-medium tracking-[0.4em] bg-gradient-to-b from-[#f2d09b] via-[#d99852] to-[#a35e22] bg-clip-text text-transparent [writing-mode:vertical-lr] rotate-180 select-none drop-shadow-sm">
                  FISTON & NANCY
                </h1>
                <div className="mt-5 p-3 bg-[#1e2c4f] border border-[#b87333]/70 rounded-2xl shadow-inner">
                  <QRCodeSVG value={photoGalleryUrl} size={76} bgColor="#1e2c4f" fgColor="#e0a96d" level="H" />
                  <span className="block text-[8px] font-cinzel tracking-[0.2em] bg-gradient-to-r from-[#f2d09b] to-[#d99852] bg-clip-text text-transparent mt-2 uppercase font-semibold">SCAN FOR CIVIL SNIPPETS</span>
                </div>
              </div>
              <div className="text-[10px] font-cinzel tracking-[0.25em] text-[#e2e8f0] uppercase opacity-95 pb-2 flex items-center justify-center gap-1.5 font-semibold">
                <Sparkles className="w-3 h-3 text-[#b87333]" />
                CLICK TO REVEAL INVITATION
                <Sparkles className="w-3 h-3 text-[#b87333]" />
              </div>
            </div>

            {/* BACK SIDE */}
            <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-3xl border border-[#b87333]/70 bg-gradient-to-b from-[#3a528c] via-[#2c4070] to-[#203159] px-6 py-6 flex flex-col justify-between overflow-y-auto shadow-2xl">
              <div className="absolute inset-2.5 rounded-2xl border border-[#b87333]/40 pointer-events-none"></div>
              
              <div className="text-center space-y-1 pt-1">
                <EditorialMonogram />
                <p className="italic text-[9.5px] text-[#e2e8f0] leading-tight font-light tracking-wide mt-1">“Ndi uw'umukunzi wanjye, Umukunzi wanjye na we ni uwanjye”</p>
                <p className="font-cinzel text-[6.5px] bg-gradient-to-r from-[#f2d09b] via-[#d99852] to-[#a35e22] bg-clip-text text-transparent tracking-[0.25em] font-semibold mt-0.5">Indirimbo ya Salomo 6:3</p>
                
                {/* Compact Umuryango Wa Section */}
                <div className="pt-2 space-y-1">
                  <p className="text-[5.5px] bg-gradient-to-r from-[#f2d09b] via-[#d99852] to-[#a35e22] bg-clip-text text-transparent tracking-[0.3em] uppercase font-semibold">UMURYANGO WA</p>
                  <p className="font-cinzel text-[7.5px] font-medium tracking-wide bg-gradient-to-r from-[#f2d09b] via-[#d99852] to-[#a35e22] bg-clip-text text-transparent">
                    Rudasingwa J. Baptiste (Vita)
                  </p>
                  <p className="text-[7px] text-[#e2e8f0] italic leading-none">&</p>
                  <p className="font-cinzel text-[7.5px] font-medium tracking-wide bg-gradient-to-r from-[#f2d09b] via-[#d99852] to-[#a35e22] bg-clip-text text-transparent">
                    Nkusi Ntaganda Célestin & Rwigimba Aline
                  </p>
                </div>

                <p className="italic text-[8.5px] text-[#e2e8f0] pt-1 font-light">Bishimiye kubatumira mu bukwe bw’ abana babo</p>
              </div>

              <CopperDivider />

              <div className="text-center">
                <h2 className="font-cinzel text-base font-bold tracking-[0.25em] bg-gradient-to-r from-[#f2d09b] via-[#d99852] to-[#a35e22] bg-clip-text text-transparent">FISTON</h2>
                <span className="font-serif italic text-[#e0a96d] text-[11px] leading-none block my-0.5 font-bold">&</span>
                <h2 className="font-cinzel text-base font-bold tracking-[0.25em] bg-gradient-to-r from-[#f2d09b] via-[#d99852] to-[#a35e22] bg-clip-text text-transparent">NANCY</h2>
              </div>

              <CopperDivider />

              {/* Ceremony & Reception Schedule */}
              <div className="text-center py-1">
                <h3 className="font-cinzel text-[9.5px] tracking-[0.25em] bg-gradient-to-r from-[#f2d09b] via-[#d99852] to-[#a35e22] bg-clip-text text-transparent font-bold mb-1">
                  RECEPTION
                </h3>
                <p className="text-[9.5px] text-[#ffffff] font-medium flex items-center justify-center gap-1.5 mb-1">
                  <Calendar className="w-2.5 h-2.5 text-[#f2d09b]" /> Saturday, December 26, 2026
                </p>
                <div className="space-y-1 mt-1">
                  <p className="text-[9px] text-[#ffffff]">Bethesda Holy Church — 2:00 PM</p>
                  <p className="text-[9px] text-[#e2e8f0] italic flex items-center justify-center gap-1.5">
                    <MapPin className="w-2.5 h-2.5 text-[#f2d09b]" /> Intare Arena Rusororo — 4:00 PM
                  </p>
                </div>
              </div>

              <div className="pt-2 border-t border-[#b87333]/50 space-y-2">
                <div className="flex gap-2 justify-center">
                  <span onClick={handleAddToCalendar} className="px-3.5 py-1 rounded-full border border-[#b87333]/60 bg-[#1e2c4f] text-[8px] font-cinzel font-bold text-[#f2d09b] cursor-pointer hover:bg-[#283b66]">ADD TO CALENDAR</span>
                  <a href={venueMapUrl} target="_blank" rel="noopener noreferrer" className="px-3.5 py-1 rounded-full border border-[#b87333]/60 bg-[#1e2c4f] text-[8px] font-cinzel font-bold text-[#f2d09b] hover:bg-[#283b66]">VENUE MAP</a>
                </div>
                <div className="flex justify-between items-center text-[8.5px] px-1">
                  <span className="font-cinzel tracking-[0.2em] text-[#93c5fd]">EST — 2026</span>
                  <span className="font-cinzel tracking-[0.2em] bg-gradient-to-r from-[#f2d09b] to-[#d99852] bg-clip-text text-transparent font-extrabold">FOREVER</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>

      {/* ================= PRINT-ONLY STATIC SPREAD (Front & Back Side-by-Side Landscape) ================= */}
      <div className="hidden print:flex">
        
        {/* PRINT FRONT */}
        <div className="print-card-front">
          <div className="absolute inset-2.5 rounded-2xl border border-[#b87333]/40 pointer-events-none"></div>
          <div className="flex justify-between items-center text-[10px] font-cinzel tracking-[0.25em] text-[#e2e8f0] uppercase pt-2 px-2">
            <span>EST. 2026</span>
            <LuxurySymbol />
          </div>
          <div className="my-auto py-2 flex flex-col items-center">
            <h1 className="font-cinzel text-xl font-medium tracking-[0.4em] print-gold-text [writing-mode:vertical-lr] rotate-180 select-none drop-shadow-md">
              FISTON & NANCY
            </h1>
            <div className="mt-5 p-3 rounded-2xl shadow-inner" style={{ backgroundColor: '#1e2c4f', border: '1px solid rgba(184, 115, 51, 0.7)' }}>
              <QRCodeSVG value={photoGalleryUrl} size={76} bgColor="#1e2c4f" fgColor="#e0a96d" level="H" />
              <span className="block text-[8px] font-cinzel tracking-[0.2em] text-[#f2d09b] mt-2 uppercase font-semibold">SCAN FOR CIVIL SNIPPETS</span>
            </div>
          </div>
          <div className="text-[10px] font-cinzel tracking-[0.25em] text-[#e2e8f0] uppercase pb-2 flex items-center justify-center gap-1.5 font-semibold">
            <Sparkles className="w-3 h-3 text-[#b87333]" />
            FRONT SIDE
            <Sparkles className="w-3 h-3 text-[#b87333]" />
          </div>
        </div>

        {/* PRINT BACK */}
        <div className="print-card-back">
          <div className="absolute inset-2.5 rounded-2xl border border-[#b87333]/40 pointer-events-none"></div>
          <div className="text-center space-y-1 pt-1">
            <EditorialMonogram />
            <p className="italic text-[9.5px] text-[#e2e8f0] leading-tight font-light mt-1">“Ndi uw'umukunzi wanjye, Umukunzi wanjye na we ni uwanjye”</p>
            <p className="font-cinzel text-[6.5px] tracking-[0.25em] font-semibold mt-0.5 print-gold-text">Indirimbo ya Salomo 6:3</p>
            
            <div className="pt-2 space-y-1">
              <p className="text-[5.5px] tracking-[0.3em] uppercase font-semibold print-gold-text">UMURYANGO WA</p>
              <p className="font-cinzel text-[7.5px] font-medium print-gold-text">
                Rudasingwa J. Baptiste (Vita)
              </p>
              <p className="text-[7px] text-[#e2e8f0] italic leading-none">&</p>
              <p className="font-cinzel text-[7.5px] font-medium print-gold-text">
                Nkusi Ntaganda Célestin & Rwigimba Aline
              </p>
            </div>

            <p className="italic text-[8.5px] text-[#e2e8f0] pt-1">Bishimiye kubatumira mu bukwe bw’ abana babo</p>
          </div>
          <CopperDivider />
          <div className="text-center">
            <h2 className="font-cinzel text-base font-bold tracking-[0.25em] print-gold-text">FISTON</h2>
            <span className="font-serif italic text-[#e0a96d] text-[11px] leading-none block my-0.5 font-bold">&</span>
            <h2 className="font-cinzel text-base font-bold tracking-[0.25em] print-gold-text">NANCY</h2>
          </div>
          <CopperDivider />
          <div className="text-center space-y-1">
            <h3 className="font-cinzel text-[9.5px] tracking-[0.25em] font-bold mb-1 print-gold-text">RECEPTION</h3>
            <p className="text-[9.5px] text-[#ffffff] font-medium flex items-center justify-center gap-1.5 mb-1">
              <svg className="w-2.5 h-2.5 inline-block" viewBox="0 0 24 24" fill="none" stroke="#f2d09b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
              Saturday, December 26, 2026
            </p>
            <p className="text-[9px] text-[#ffffff]">Bethesda Holy Church — 2:00 PM</p>
            <p className="text-[9px] text-[#e2e8f0] italic flex items-center justify-center gap-1.5">
              <svg className="w-2.5 h-2.5 inline-block" viewBox="0 0 24 24" fill="none" stroke="#f2d09b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              Intare Arena Rusororo — 4:00 PM
            </p>
          </div>
          <div className="pt-2 border-t border-[#b87333]/50 space-y-2">
            <div className="flex justify-between items-center text-[8.5px] px-1">
              <span className="font-cinzel tracking-[0.2em] text-[#93c5fd]">EST — 2026</span>
              <span className="font-cinzel tracking-[0.2em] font-extrabold print-gold-text">FOREVER</span>
            </div>
          </div>
        </div>

      </div>

      {/* ================= BOTTOM INDICATOR ================= */}
      <footer className="w-full py-4 text-center z-20 print:hidden">
        <div className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-[#b87333]/40 bg-[#283b66] text-[#e0a96d] shadow-md animate-bounce">
          ↓
        </div>
      </footer>

    </div>
  );
}