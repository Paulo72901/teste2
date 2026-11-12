import React from 'react';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

export const NoticeSection: React.FC = () => {
  return (
    <section className="py-16 bg-[#0A0507] text-[#FCFCFC] border-b border-[#D3AF37]/30">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-[#17090C] p-8 sm:p-10 rounded-sm border border-[#D3AF37]/40 shadow-xl">
          {/* Exact Title Requested */}
          <div className="flex items-center gap-2.5 mb-4 text-[#D3AF37]">
            <AlertCircle className="w-5 h-5 text-[#D3AF37]" />
            <h3 className="font-h3 text-sm tracking-[0.2em] text-[#D3AF37]">
              IMPORTANTE
            </h3>
          </div>

          {/* Exact Lead Copy */}
          <p className="font-serif text-lg sm:text-xl text-[#FCFCFC] mb-2 font-medium">
            A Amor & Mistério comercializa uma experiência personalizada e surpresa.
          </p>

          <p className="font-desc text-xs sm:text-sm text-[#E3BC9A] mb-6">
            Ao contratar a assinatura, o cliente declara estar ciente de que:
          </p>

          {/* 4 Bullet Points */}
          <ul className="space-y-3 font-desc text-xs sm:text-sm text-[#FCFCFC]/85">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-[#D3AF37] shrink-0 mt-0.5" />
              <span>o conteúdo varia a cada edição;</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-[#D3AF37] shrink-0 mt-0.5" />
              <span>as imagens do site são ilustrativas;</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-[#D3AF37] shrink-0 mt-0.5" />
              <span>não há garantia de produtos específicos;</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-[#D3AF37] shrink-0 mt-0.5" />
              <span>os itens enviados serão selecionados conforme o perfil informado pelo assinante.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
