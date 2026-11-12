import React, { useState } from 'react';
import { Sparkles, Check, Shield, Sliders } from 'lucide-react';

interface ShowcaseCuratorProps {
  onOpenQuiz: () => void;
}

export const ShowcaseCurator: React.FC<ShowcaseCuratorProps> = ({ onOpenQuiz }) => {
  const [activeFilter, setActiveFilter] = useState<'todos' | 'sensual' | 'loungewear' | 'romantico'>('todos');

  const curationItems = [
    {
      id: 'renda',
      title: 'Conjuntos em Renda Francesa & Bralettes',
      category: 'sensual',
      tag: 'Alta Costura Íntima',
      image: '/src/assets/images/lingerie_curation_lace_1794508612319.jpg',
      description:
        'Sutiãs com sustentação anatômica ou bralettes sem aro de extrema leveza, combinados a calcinhas em modelagens sofisticadas (fio duplo suave, caleçon floral ou cintura alta). Rendas hipoalergênicas e toques de cetim.',
      itemsInside: [
        'Conjunto completo de 2 a 3 peças',
        'Modelagens respeitando sua preferência de bojo e aro',
        'Acabamento com aviamentos banhados a ouro 24k hipoalergênicos',
      ],
      mysteryNote: 'As modelagens e rendas são reveladas ao abrir sua caixa.',
    },
    {
      id: 'seda',
      title: 'Slips, Robes Sensoriais & Camisolas Nobres',
      category: 'loungewear',
      tag: 'Toque de Seda & Cetim',
      image: '/src/assets/images/lingerie_curation_silk_1794508613484.jpg',
      description:
        'Peças fluidas para momentos de autocuidado e sensualidade requintada. Tecidos acetinados que acariciam a pele, decotes delicadamente debruados em renda e caimento impecável que valoriza a silhueta.',
      itemsInside: [
        'Robes envolventes ou slips de dormir',
        'Tecido acetinado térmico com caimento fluido',
        'Detalhes artesanais de alta costura',
      ],
      mysteryNote: 'Temas temáticos sazonais conforme a estação do ano.',
    },
    {
      id: 'acessorios',
      title: 'Brindes Especiais, Perfumaria & Rituais',
      category: 'romantico',
      tag: 'Mimos Exclusivos da Edição',
      image: '/src/assets/images/lingerie_curation_accessories_1794508613802.jpg',
      description:
        'Cada edição vem acompanhada de uma experiência multissensorial: velas de massagem aromáticas, óleos aveludados para o corpo, máscaras de dormir em seda ou sachês perfumados para o seu closet íntimo.',
      itemsInside: [
        'Brinde surpresa exclusivo em toda edição',
        'Perfumaria autoral desenvolvida para a marca',
        'Guia impresso da edição com dicas de styling e cuidados',
      ],
      mysteryNote: 'Um presente complementar nunca repetido.',
    },
  ];

  const filteredItems =
    activeFilter === 'todos'
      ? curationItems
      : curationItems.filter((item) => item.category === activeFilter);

  return (
    <section id="curadoria" className="py-22 bg-[#12070A] text-[#FCFCFC] border-b border-[#D3AF37]/20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="font-h3 text-[#D3AF37] tracking-[0.25em] mb-2">
            Curadoria Exclusiva
          </p>

          <h2 className="font-h2 text-3xl sm:text-4xl text-[#FCFCFC] mb-4">
            O que você pode receber em cada edição.
          </h2>

          <p className="font-desc text-[#E3BC9A] text-sm max-w-2xl mx-auto leading-relaxed">
            O mistério mora nos detalhes e modelos que preparamos para você, mas a excelência, o caimento sob medida e a nobreza dos tecidos são absolutos e garantidos.
          </p>

          {/* Interactive Filter Controls */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {[
              { id: 'todos', label: 'Toda a Curadoria' },
              { id: 'sensual', label: 'Rendas & Conjuntos' },
              { id: 'loungewear', label: 'Robes & Slips de Seda' },
              { id: 'romantico', label: 'Brindes & Rituais' },
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={() => setActiveFilter(btn.id as any)}
                className={`px-4 py-2 text-xs font-btn rounded-sm transition-all cursor-pointer border ${
                  activeFilter === btn.id
                    ? 'bg-[#722F37] text-[#FCFCFC] border-[#D3AF37] shadow-md'
                    : 'bg-black/50 text-[#FCFCFC]/70 border-[#D3AF37]/30 hover:text-white hover:border-[#D3AF37]'
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        {/* Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-[#1A0B0E]/90 rounded-sm border border-[#D3AF37]/30 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group hover:border-[#D3AF37]"
            >
              <div>
                {/* Image Container with Hover zoom */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-black">
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-95 group-hover:brightness-100"
                  />
                  <div className="absolute top-3 left-3 bg-[#1A0B0E]/95 backdrop-blur-xs text-[#D3AF37] px-3 py-1 text-[11px] font-btn rounded-sm border border-[#D3AF37]/50 shadow-md">
                    {item.tag}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-serif text-xl font-medium text-[#FCFCFC] mb-3">
                    {item.title}
                  </h3>

                  <p className="font-desc text-[#FCFCFC]/80 text-xs mb-5 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Bullet points of items */}
                  <div className="space-y-2 mb-5">
                    {item.itemsInside.map((bullet, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs font-desc text-[#FCFCFC]/80">
                        <Check className="w-3.5 h-3.5 text-[#D3AF37] shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mystery Box Guarantee Footnote on Card */}
              <div className="p-4 bg-black/60 border-t border-[#D3AF37]/20 flex items-center justify-between text-[11px]">
                <div className="flex items-center gap-1.5 text-[#E3BC9A] font-desc">
                  <Sparkles className="w-3.5 h-3.5 text-[#D3AF37]" />
                  <span>{item.mysteryNote}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Security & Reassurance Callout Box */}
        <div className="mt-12 bg-gradient-to-r from-[#210D12] via-[#17090C] to-[#210D12] border border-[#D3AF37]/40 rounded-sm p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-sm bg-[#722F37] text-white flex items-center justify-center shrink-0 border border-[#D3AF37]">
              <Shield className="w-5 h-5 text-[#D3AF37]" />
            </div>
            <div>
              <h4 className="font-h3 text-[#D3AF37] text-sm mb-1">
                Zero Insegurança: Como garantimos o tamanho e o estilo certos?
              </h4>
              <p className="font-desc text-xs text-[#FCFCFC]/80 max-w-2xl leading-relaxed">
                Antes de qualquer envio, você preenche nosso <strong>Quiz de Estilo</strong>. Nele, você nos informa suas medidas exatas de <strong>sutiã, calcinha, camisola e pijama</strong>, além de preferências de sustentação e modelagem. Nossa curadora monta sua edição estritamente dentro das suas escolhas.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenQuiz}
            className="shrink-0 px-6 py-3 bg-[#722F37] hover:bg-[#592229] text-[#FCFCFC] font-btn rounded-sm border border-[#D3AF37] shadow-lg cursor-pointer flex items-center gap-2"
          >
            <Sliders className="w-4 h-4 text-[#D3AF37]" />
            <span>Fazer Meu Quiz de Estilo</span>
          </button>
        </div>
      </div>
    </section>
  );
};
