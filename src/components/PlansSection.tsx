import React from 'react';
import { Sparkles, Check, Crown, Heart, ArrowRight } from 'lucide-react';
import { PlanId } from '../types';

interface PlansSectionProps {
  onSelectPlan: (planId: PlanId) => void;
}

export const PlansSection: React.FC<PlansSectionProps> = ({ onSelectPlan }) => {
  return (
    <section id="planos" className="py-22 bg-gradient-to-b from-[#0A0507] via-[#17090C] to-[#0E0608] text-[#FCFCFC] border-b border-[#D3AF37]/20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="font-h3 text-[#D3AF37] tracking-[0.25em] mb-2">
            Assinaturas Bimestrais
          </p>

          <h2 className="font-h1 text-3xl sm:text-4xl md:text-5xl text-[#FCFCFC] mb-4">
            ESCOLHA SEU PLANO
          </h2>

          <p className="font-desc text-[#E3BC9A] text-sm max-w-xl mx-auto">
            Escolha o ciclo ideal para você. Todas as assinaturas incluem curadoria personalizada via Quiz de Estilo e entregas a cada 2 meses com cobrança recorrente no cartão.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {/* Card 1: Plano Descoberta */}
          <div className="bg-[#14080B]/90 backdrop-blur-sm rounded-sm border border-[#D3AF37]/30 p-8 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between relative group hover:border-[#D3AF37]">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-serif text-xs uppercase tracking-widest text-[#D3AF37] bg-black/60 px-3 py-1 rounded-sm border border-[#D3AF37]/30">
                  Entrega Única
                </span>
                <Heart className="w-4 h-4 text-[#D3AF37]" />
              </div>

              <h3 className="font-serif text-2xl font-medium text-[#FCFCFC] mb-1">
                Plano Descoberta
              </h3>
              <p className="font-desc text-[#E3BC9A]/80 text-xs mb-6">
                1 edição (entrega única)
              </p>

              {/* Price */}
              <div className="mb-6 pb-6 border-b border-[#D3AF37]/20">
                <div className="text-xs font-desc text-[#FCFCFC]/60 mb-1">1 edição</div>
                <div className="flex items-baseline gap-1">
                  <span className="text-xs font-desc text-[#D3AF37] font-semibold">R$</span>
                  <span className="font-serif text-4xl font-semibold text-[#FCFCFC] tabular-nums">
                    189,90
                  </span>
                </div>
                <div className="font-desc text-[11px] text-[#E3BC9A] mt-1">
                  Ideal para conhecer a experiência.
                </div>
              </div>

              {/* Features List */}
              <div className="mb-8">
                <div className="font-btn text-[11px] text-[#D3AF37] mb-4">
                  Inclui:
                </div>
                <ul className="space-y-3 font-desc text-xs text-[#FCFCFC]/80">
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#D3AF37] shrink-0" />
                    <span>1 caixa exclusiva</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#D3AF37] shrink-0" />
                    <span>Brinde surpresa</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#D3AF37] shrink-0" />
                    <span>Personalização completa</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#D3AF37] shrink-0" />
                    <span>Sem fidelidade</span>
                  </li>
                </ul>
              </div>
            </div>

            <button
              onClick={() => onSelectPlan('descoberta')}
              className="w-full py-3.5 px-4 bg-black/60 hover:bg-[#722F37] text-[#FCFCFC] font-btn rounded-sm border border-[#D3AF37]/50 transition-all duration-200 cursor-pointer shadow-md text-center"
            >
              Assinar Descoberta
            </button>
          </div>

          {/* Card 2: Plano Encanto (Most Popular / Highlighted) */}
          <div className="bg-[#1F0C10] rounded-sm border-2 border-[#D3AF37] p-8 shadow-2xl relative flex flex-col justify-between group transform lg:-translate-y-2">
            {/* Best Value Badge */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#722F37] text-[#D3AF37] border border-[#D3AF37] px-4 py-1 rounded-sm text-[11px] font-btn tracking-wider shadow-lg flex items-center gap-1.5 whitespace-nowrap">
              <Sparkles className="w-3.5 h-3.5 fill-[#D3AF37]" />
              MAIS ESCOLHIDO · ECONOMIA REAL
            </div>

            <div>
              <div className="flex items-center justify-between mb-4 mt-2">
                <span className="font-serif text-xs uppercase tracking-widest text-[#D3AF37] bg-black/60 px-3 py-1 rounded-sm border border-[#D3AF37]/40">
                  Semestral (3 Edições)
                </span>
                <Sparkles className="w-4 h-4 text-[#D3AF37]" />
              </div>

              <h3 className="font-serif text-2xl font-medium text-[#FCFCFC] mb-1">
                Plano Encanto
              </h3>
              <p className="font-desc text-[#E3BC9A]/80 text-xs mb-6">
                6 meses (3 edições a cada 2 meses)
              </p>

              {/* Price */}
              <div className="mb-6 pb-6 border-b border-[#D3AF37]/20">
                <div className="text-xs font-desc text-[#FCFCFC]/80 mb-1 font-medium">
                  6 meses · Receba 3 edições
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-xs font-desc text-[#D3AF37] font-semibold">R$</span>
                  <span className="font-serif text-4xl font-semibold text-[#D3AF37] tabular-nums">
                    169,90
                  </span>
                  <span className="text-xs font-desc text-[#FCFCFC]/70">/ por edição</span>
                </div>
                <div className="font-desc text-[11px] text-[#E3BC9A] font-medium mt-1">
                  Você economiza em relação à compra avulsa.
                </div>
              </div>

              {/* Features List */}
              <div className="mb-8">
                <div className="font-btn text-[11px] text-[#D3AF37] mb-4">
                  Inclui:
                </div>
                <ul className="space-y-3 font-desc text-xs text-[#FCFCFC]/90">
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#D3AF37] shrink-0" />
                    <span>3 edições exclusivas</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#D3AF37] shrink-0" />
                    <span>Brinde surpresa em todas</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#D3AF37] shrink-0" />
                    <span>Personalização completa</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#D3AF37] shrink-0" />
                    <span>Prioridade em lançamentos</span>
                  </li>
                </ul>
              </div>
            </div>

            <button
              onClick={() => onSelectPlan('encanto')}
              className="w-full py-4 px-4 bg-[#722F37] hover:bg-[#5b242b] text-[#FCFCFC] font-btn rounded-sm border border-[#D3AF37] transition-all duration-200 cursor-pointer shadow-xl text-center flex items-center justify-center gap-2"
            >
              <span>Assinar Plano Encanto</span>
              <ArrowRight className="w-4 h-4 text-[#D3AF37]" />
            </button>
          </div>

          {/* Card 3: Plano Paixão (Annual VIP Experience) */}
          <div className="bg-[#14080B]/90 backdrop-blur-sm rounded-sm border border-[#D3AF37]/30 p-8 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between relative group hover:border-[#D3AF37]">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-serif text-xs uppercase tracking-widest text-[#D3AF37] bg-black/60 px-3 py-1 rounded-sm border border-[#D3AF37]/30">
                  Experiência VIP
                </span>
                <Crown className="w-4 h-4 text-[#D3AF37]" />
              </div>

              <h3 className="font-serif text-2xl font-medium text-[#FCFCFC] mb-1">
                Plano Paixão
              </h3>
              <p className="font-desc text-[#E3BC9A]/80 text-xs mb-6">
                12 meses (6 edições a cada 2 meses)
              </p>

              {/* Price */}
              <div className="mb-6 pb-6 border-b border-[#D3AF37]/20">
                <div className="text-xs font-desc text-[#FCFCFC]/80 mb-1 font-medium">
                  12 meses · Receba 6 edições
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-xs font-desc text-[#D3AF37] font-semibold">R$</span>
                  <span className="font-serif text-4xl font-semibold text-[#FCFCFC] tabular-nums">
                    159,90
                  </span>
                  <span className="text-xs font-desc text-[#FCFCFC]/70">/ por edição</span>
                </div>
                <div className="font-desc text-[11px] text-[#E3BC9A] font-medium mt-1">
                  A experiência mais completa da Amor & Mistério.
                </div>
              </div>

              {/* Features List */}
              <div className="mb-8">
                <div className="font-btn text-[11px] text-[#D3AF37] mb-4">
                  Você recebe:
                </div>
                <ul className="space-y-2.5 font-desc text-xs text-[#FCFCFC]/80">
                  <li className="flex items-start gap-2">
                    <span className="text-[#D3AF37] text-sm shrink-0">✨</span>
                    <span>6 edições</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D3AF37] text-sm shrink-0">✨</span>
                    <span>Brindes exclusivos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D3AF37] text-sm shrink-0">✨</span>
                    <span>Caixa Premium personalizada na primeira entrega</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D3AF37] text-sm shrink-0">✨</span>
                    <span>Presente de aniversário</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D3AF37] text-sm shrink-0">✨</span>
                    <span>Acesso antecipado às novidades</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D3AF37] text-sm shrink-0">✨</span>
                    <span>5% de desconto na renovação anual</span>
                  </li>
                </ul>
              </div>
            </div>

            <button
              onClick={() => onSelectPlan('paixao')}
              className="w-full py-3.5 px-4 bg-black/60 hover:bg-[#722F37] text-[#FCFCFC] font-btn rounded-sm border border-[#D3AF37]/50 transition-all duration-200 cursor-pointer shadow-md text-center"
            >
              Assinar Plano Paixão
            </button>
          </div>
        </div>

        {/* Security & Recurrence Reassurance strip */}
        <div className="mt-12 text-center text-xs font-desc text-[#E3BC9A]/80 max-w-2xl mx-auto">
          💳 Pagamento por cartão de crédito com cobrança recorrente segura a cada 2 meses. Sem travar o limite total e com total tranquilidade.
        </div>
      </div>
    </section>
  );
};
