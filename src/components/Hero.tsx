import React from 'react';
import { Sparkles, ShieldCheck, HeartHandshake, ArrowRight, Lock } from 'lucide-react';

interface HeroProps {
  onDiscoverPlan: () => void;
  onStartQuiz: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onDiscoverPlan, onStartQuiz }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0D0507] via-[#1A0B0E] to-[#14070A] text-[#FCFCFC] pt-12 pb-18 lg:py-20 border-b border-[#D3AF37]/20">
      {/* Luxury ambient burgundy and gold glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-gradient-to-b from-[#722F37]/30 via-[#D3AF37]/5 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Title and Subtitle directly above the image as requested */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 mb-3 bg-black/40 backdrop-blur-md px-4 py-1 rounded-full border border-[#D3AF37]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#D3AF37]" />
            <span className="font-h3 text-[#D3AF37] tracking-[0.25em]">
              EDIÇÃO BIMESTRAL SURPRESA & EXCLUSIVA
            </span>
            <Sparkles className="w-3.5 h-3.5 text-[#D3AF37]" />
          </div>

          <h1 className="font-h1 text-[#FCFCFC] text-3xl sm:text-4xl md:text-5xl lg:text-[44px] leading-tight mb-4 tracking-[0.06em] drop-shadow-md">
            MAIS DO QUE UMA CAIXA, É UM SENTIMENTO
          </h1>

          <p className="font-desc text-[#E3BC9A] text-sm sm:text-base md:text-lg max-w-xl mx-auto tracking-wide">
            Uma surpresa escolhida para você
          </p>

          {/* Quick CTA right below text and above image */}
          <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={onDiscoverPlan}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#722F37] hover:bg-[#5b242b] text-[#FCFCFC] font-btn rounded-sm shadow-xl hover:shadow-2xl transition-all duration-200 cursor-pointer border border-[#D3AF37] group"
            >
              <span>Descubra seu plano</span>
              <ArrowRight className="w-4 h-4 text-[#D3AF37] group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onStartQuiz}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-black/50 hover:bg-[#722F37]/30 text-[#FCFCFC] font-btn rounded-sm border border-[#D3AF37]/40 transition-all duration-200 cursor-pointer backdrop-blur-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#D3AF37]" />
              <span>Personalizar Quiz de Estilo</span>
            </button>
          </div>
        </div>

        {/* High-Impact Product Image */}
        <div className="relative max-w-5xl mx-auto">
          <div className="relative rounded-sm overflow-hidden border border-[#D3AF37]/40 shadow-2xl bg-black">
            <img
              src="/src/assets/images/hero_mystery_box_1794508610899.jpg"
              alt="Caixa Misteriosa Amor & Mistério Edição Bimestral com Lingerie de Alta Costura"
              referrerPolicy="no-referrer"
              className="w-full h-auto max-h-[580px] object-cover object-center transform hover:scale-[1.01] transition-transform duration-700"
            />

            {/* Subtle Gradient Scrim at bottom of image for caption */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-6 sm:p-8 text-white">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div className="max-w-md">
                  <span className="font-h3 text-[#D3AF37] tracking-[0.2em] block mb-1">
                    Edição N° 14 · O Mistério Sensorial
                  </span>
                  <p className="font-desc text-[#FCFCFC]/90 text-xs sm:text-sm">
                    Peças selecionadas a dedo por consultoras de moda íntima de acordo com o seu perfil de estilo, medidas exatas e paleta de sensações.
                  </p>
                </div>
                <div className="flex items-center gap-2 text-[11px] font-desc text-[#E3BC9A] shrink-0 bg-black/60 backdrop-blur-md px-3.5 py-2 rounded-sm border border-[#D3AF37]/30">
                  <span className="w-2 h-2 rounded-full bg-[#D3AF37] animate-pulse" />
                  <span>Envios a cada 2 meses · Vagas limitadas</span>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Trust Pills below image */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-3.5 bg-black/50 backdrop-blur-sm border border-[#D3AF37]/20 rounded-sm">
              <ShieldCheck className="w-4 h-4 mx-auto text-[#D3AF37] mb-1" />
              <div className="font-btn text-[11px] text-[#FCFCFC]">Curadoria Sob Medida</div>
              <div className="font-desc text-[11px] text-[#E3BC9A]/80">Quiz de estilo detalhado</div>
            </div>
            <div className="p-3.5 bg-black/50 backdrop-blur-sm border border-[#D3AF37]/20 rounded-sm">
              <Sparkles className="w-4 h-4 mx-auto text-[#D3AF37] mb-1" />
              <div className="font-btn text-[11px] text-[#FCFCFC]">Tecidos Nobres</div>
              <div className="font-desc text-[11px] text-[#E3BC9A]/80">Seda, rendas e tule macio</div>
            </div>
            <div className="p-3.5 bg-black/50 backdrop-blur-sm border border-[#D3AF37]/20 rounded-sm">
              <HeartHandshake className="w-4 h-4 mx-auto text-[#D3AF37] mb-1" />
              <div className="font-btn text-[11px] text-[#FCFCFC]">Cobrança Recorrente</div>
              <div className="font-desc text-[11px] text-[#E3BC9A]/80">Sem travar o limite total</div>
            </div>
            <div className="p-3.5 bg-black/50 backdrop-blur-sm border border-[#D3AF37]/20 rounded-sm">
              <span className="text-[#D3AF37] font-serif text-sm block mb-1">100%</span>
              <div className="font-btn text-[11px] text-[#FCFCFC]">Mistério Inédito</div>
              <div className="font-desc text-[11px] text-[#E3BC9A]/80">Uma surpresa a cada 2 meses</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
