import React from 'react';
import { Sparkles, Shield, Heart } from 'lucide-react';

export const VideoSection: React.FC = () => {
  const vimeoUrl =
    'https://player.vimeo.com/video/1243351563?background=1&autoplay=1&loop=1&muted=1&controls=0&title=0&byline=0&portrait=0';

  return (
    <section id="experiencia" className="relative w-full overflow-hidden bg-[#0A0507] text-[#FCFCFC] py-24 sm:py-32">
      {/* Background Fullscreen Video Container */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none">
        <iframe
          src={vimeoUrl}
          title="Amor & Mistério Experiência do Cliente"
          allow="autoplay; fullscreen; picture-in-picture"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[115vw] h-[65vw] min-h-[115vh] min-w-[185vh] object-cover opacity-60 filter brightness-90 contrast-105 pointer-events-none"
          style={{ border: 'none' }}
        />
        {/* Cinematic Vignette and Dark Mystery Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0507] via-[#0A0507]/40 to-[#0A0507] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0507]/90 via-transparent to-[#0A0507]/90 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#0A0507_90%)] pointer-events-none" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 mb-4 bg-black/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#D3AF37]/40">
          <Sparkles className="w-3.5 h-3.5 text-[#D3AF37]" />
          <span className="font-h3 text-[11px] text-[#D3AF37] tracking-[0.25em]">
            EXPERIÊNCIA EXCLUSIVA DO CLIENTE
          </span>
          <Sparkles className="w-3.5 h-3.5 text-[#D3AF37]" />
        </div>

        <h2 className="font-h2 text-3xl sm:text-4xl md:text-5xl text-[#FCFCFC] mb-6 tracking-wide drop-shadow-lg">
          O ritual de desembalar o inesperado.
        </h2>

        <p className="font-desc text-[#E3BC9A] text-sm sm:text-base max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow">
          Cada edição é um filme particular que você vive em casa: a fita de cetim deslizando, o aroma misterioso de notas florais e peças de alta costura que parecem ter sido esculpidas para o seu corpo.
        </p>

        {/* 3 Pillars of Emotion */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto text-left">
          <div className="bg-black/60 backdrop-blur-md p-6 rounded-sm border border-[#D3AF37]/30 hover:border-[#D3AF37] transition-all">
            <div className="w-8 h-8 rounded-full bg-[#722F37]/50 flex items-center justify-center text-[#D3AF37] mb-3 border border-[#D3AF37]/40">
              <Sparkles className="w-4 h-4" />
            </div>
            <h3 className="font-serif text-lg text-white mb-1">Surpresa Inédita</h3>
            <p className="font-desc text-xs text-[#FCFCFC]/80 leading-relaxed">
              Você nunca saberá exatamente o modelo ou o tema antes de abrir. O mistério renova sua relação com o espelho a cada 2 meses.
            </p>
          </div>

          <div className="bg-black/60 backdrop-blur-md p-6 rounded-sm border border-[#D3AF37]/30 hover:border-[#D3AF37] transition-all">
            <div className="w-8 h-8 rounded-full bg-[#722F37]/50 flex items-center justify-center text-[#D3AF37] mb-3 border border-[#D3AF37]/40">
              <Shield className="w-4 h-4" />
            </div>
            <h3 className="font-serif text-lg text-white mb-1">Curadoria de Alfaiataria</h3>
            <p className="font-desc text-xs text-[#FCFCFC]/80 leading-relaxed">
              Rendas francesas, tules hipoalergênicos e acabamentos com aviamentos dourados, sempre alinhados às suas medidas.
            </p>
          </div>

          <div className="bg-black/60 backdrop-blur-md p-6 rounded-sm border border-[#D3AF37]/30 hover:border-[#D3AF37] transition-all">
            <div className="w-8 h-8 rounded-full bg-[#722F37]/50 flex items-center justify-center text-[#D3AF37] mb-3 border border-[#D3AF37]/40">
              <Heart className="w-4 h-4" />
            </div>
            <h3 className="font-serif text-lg text-white mb-1">Mimos Sensoriais</h3>
            <p className="font-desc text-xs text-[#FCFCFC]/80 leading-relaxed">
              Brindes autorais em todas as edições: perfumaria íntima, óleos aveludados, velas de massagem ou máscaras em seda pura.
            </p>
          </div>
        </div>

        <div className="mt-10">
          <a
            href="#planos"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#722F37] hover:bg-[#592229] text-[#FCFCFC] font-btn rounded-sm border border-[#D3AF37] shadow-xl hover:scale-105 transition-all duration-300"
          >
            <span>Quero Viver Esta Experiência</span>
            <Sparkles className="w-4 h-4 text-[#D3AF37]" />
          </a>
        </div>
      </div>
    </section>
  );
};
