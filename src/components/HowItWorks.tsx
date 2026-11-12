import React from 'react';
import { Package, SlidersHorizontal, Truck, Eye, ArrowRight } from 'lucide-react';

interface HowItWorksProps {
  onStartQuiz: () => void;
  onChoosePlan: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onStartQuiz, onChoosePlan }) => {
  const steps = [
    {
      number: '1',
      title: 'Escolha seu plano',
      description: 'Selecione a assinatura que melhor combine com você;',
      icon: Package,
      actionText: 'Ver planos disponíveis',
      onAction: onChoosePlan,
    },
    {
      number: '2',
      title: 'Personalize seu perfil',
      description:
        'Preencha suas medidas, preferências e estilo. Assim conseguimos selecionar produtos que realmente façam sentido para você.',
      icon: SlidersHorizontal,
      actionText: 'Preencher meu Quiz de Estilo',
      onAction: onStartQuiz,
    },
    {
      number: '3',
      title: 'Receba sua caixa',
      description:
        'A cada dois meses uma nova edição exclusiva será enviada para sua casa. Cada caixa possui um tema diferente.',
      icon: Truck,
    },
    {
      number: '4',
      title: 'Surpreenda-se',
      description:
        'Você nunca saberá exatamente o que encontrará. O mistério faz parte da experiência.',
      icon: Eye,
    },
  ];

  return (
    <section id="como-funciona" className="py-22 bg-[#0F0709] text-[#FCFCFC] border-b border-[#D3AF37]/20 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header exact structure: 1 subtitle above, 1 title, 1 subtitle below */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="font-h3 text-[#D3AF37] tracking-[0.25em] mb-2">
            Como funciona
          </p>

          <h2 className="font-h2 text-3xl sm:text-4xl text-[#FCFCFC] mb-3">
            Uma experiência a cada 2 meses.
          </h2>

          <p className="font-h3 text-[#E3BC9A] tracking-[0.2em]">
            É simples
          </p>
        </div>

        {/* 4 Steps Grid with dark mystery styling */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative bg-[#1A0B0E]/80 backdrop-blur-sm p-7 rounded-sm border border-[#D3AF37]/30 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group hover:border-[#D3AF37]"
              >
                {/* Step indicator watermark number */}
                <div className="absolute top-4 right-5 text-4xl font-serif text-[#D3AF37]/15 font-bold select-none group-hover:text-[#D3AF37]/30 transition-colors">
                  0{step.number}
                </div>

                <div>
                  <div className="w-12 h-12 rounded-sm bg-[#722F37]/40 flex items-center justify-center text-[#D3AF37] mb-6 group-hover:bg-[#722F37] group-hover:text-[#FCFCFC] transition-colors duration-300 border border-[#D3AF37]/30">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="font-h3 text-[#D3AF37] text-sm mb-3">
                    {step.number}. {step.title}
                  </h3>

                  <p className="font-desc text-[#FCFCFC]/80 leading-relaxed text-xs">
                    {step.description}
                  </p>
                </div>

                {step.actionText && (
                  <div className="mt-6 pt-4 border-t border-[#D3AF37]/20">
                    <button
                      onClick={step.onAction}
                      className="inline-flex items-center gap-1.5 font-btn text-[11px] text-[#E3BC9A] hover:text-[#D3AF37] transition-colors cursor-pointer"
                    >
                      <span>{step.actionText}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
