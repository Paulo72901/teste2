import React from 'react';
import { Sparkles } from 'lucide-react';

export const MarqueeRibbon: React.FC = () => {
  const logoUrl = 'https://i.ibb.co/Ngk6nG0T/Amor-e-Misterio-logo-Horizontal-sem-Fundo.png';
  const localLogoFallback = '/src/assets/images/amor_misterio_logo_horizontal.png';

  const banners = [
    { text: 'EDIÇÃO BIMESTRAL SURPRESA' },
    { text: 'CURADORIA DE ALTA COSTURA ÍNTIMA' },
    { text: 'O MISTÉRIO FAZ PARTE DO SENTIMENTO' },
    { text: 'PEÇAS SOB MEDIDA NO SEU QUIZ' },
    { text: 'COBRANÇA RECORRENTE SEM TRAVAR LIMITE' },
  ];

  return (
    <div className="relative w-full overflow-hidden bg-[#1A0A0D] border-y border-[#D3AF37]/50 py-3 shadow-2xl select-none">
      {/* Soft gradient masks at edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#1A0A0D] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#1A0A0D] to-transparent z-10 pointer-events-none" />

      {/* Marquee container moving left to right as requested */}
      <div className="animate-marquee-ltr flex items-center gap-10 text-[#FCFCFC] whitespace-nowrap">
        {/* Render twice for seamless continuous scroll */}
        {[...Array(6)].map((_, index) => (
          <div key={index} className="inline-flex items-center gap-10 shrink-0">
            {/* Official Logo from the requested link */}
            <a
              href="https://ibb.co/ymMnBxz4"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center shrink-0 hover:opacity-90 transition-opacity"
              title="Amor & Mistério"
            >
              <img
                src={logoUrl}
                alt="Amor & Mistério Logo Oficial"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = localLogoFallback;
                }}
                className="h-9 sm:h-11 w-auto object-contain filter brightness-110 drop-shadow-[0_2px_8px_rgba(211,175,55,0.25)]"
              />
            </a>

            <span className="text-[#D3AF37] text-sm font-serif">✧</span>

            <span className="font-btn text-[11px] tracking-[0.22em] text-[#E3BC9A] flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#D3AF37]" />
              {banners[index % banners.length].text}
            </span>

            <span className="text-[#D3AF37]/60 text-xs font-serif">✧</span>
          </div>
        ))}
      </div>
    </div>
  );
};
