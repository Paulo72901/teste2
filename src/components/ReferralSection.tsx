import React, { useState } from 'react';
import { Gift, Share2, Copy, Check, Sparkles } from 'lucide-react';

export const ReferralSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const referralLink = 'https://amoremisterio.com.br/convite/sua-amiga-vip';

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const shareWhatsApp = () => {
    const text = encodeURIComponent(
      'Oi amiga! Descobri a Amor & Mistério, um clube de caixas misteriosas de lingerie com curadoria sob medida a cada 2 meses. Consegui um benefício especial para você entrar comigo: ' +
        referralLink
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  return (
    <section id="indique" className="relative py-24 bg-[#0F0709] text-white overflow-hidden border-b border-[#D3AF37]/30">
      {/* Background Image of Luxury Romantic Boudoir */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <img
          src="/src/assets/images/referral_bg_mystery_1794509971636.jpg"
          alt="Ambiente Amor & Mistério"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-45 filter brightness-75 contrast-110"
        />
        {/* Dark Scrim and Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F0709] via-[#0F0709]/70 to-[#0F0709]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#0F0709_85%)]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="bg-[#1A0C10]/85 backdrop-blur-md rounded-sm border-2 border-[#D3AF37]/60 p-8 sm:p-14 shadow-2xl relative overflow-hidden">
          {/* Subtle decorative ribbons */}
          <div className="absolute -top-12 -right-12 w-44 h-44 bg-[#722F37]/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-12 -left-12 w-44 h-44 bg-[#D3AF37]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative text-center max-w-2xl mx-auto">
            {/* Header in ALL CAPS as explicitly requested */}
            <div className="inline-flex items-center gap-2 mb-3 text-[#D3AF37]">
              <Sparkles className="w-4 h-4 text-[#D3AF37]" />
              <span className="font-h3 text-xs tracking-[0.25em] text-[#D3AF37]">
                CLUBE DE VANTAGENS COMPARTILHADAS
              </span>
              <Sparkles className="w-4 h-4 text-[#D3AF37]" />
            </div>

            <h2 className="font-h1 text-3xl sm:text-4xl md:text-5xl text-[#FCFCFC] mb-6 tracking-wider drop-shadow-md">
              INDIQUE UMA AMIGA!
            </h2>

            {/* Exact Copy Requested */}
            <p className="font-desc text-sm sm:text-base text-[#FCFCFC]/90 mb-8 leading-relaxed">
              Cada amiga indicada que contratar uma assinatura gera para você:
            </p>

            {/* 2 Reward Cards with "ou" in between */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center mb-8 text-left">
              {/* Option A */}
              <div className="p-6 bg-black/60 border border-[#D3AF37]/40 rounded-sm text-center shadow-lg hover:border-[#D3AF37] transition-all">
                <div className="w-12 h-12 rounded-full bg-[#722F37]/60 text-[#D3AF37] flex items-center justify-center mx-auto mb-3 font-serif font-bold text-xl border border-[#D3AF37]/40">
                  R$
                </div>
                <div className="font-serif text-2xl font-bold text-[#D3AF37] mb-1">
                  R$30 em créditos
                </div>
                <div className="font-desc text-xs text-[#FCFCFC]/80">
                  Descontados automaticamente na sua próxima fatura bimestral.
                </div>
              </div>

              {/* Option B */}
              <div className="p-6 bg-black/60 border border-[#D3AF37]/40 rounded-sm text-center shadow-lg hover:border-[#D3AF37] transition-all relative">
                {/* Centered badge between cards on larger screens */}
                <span className="hidden sm:block absolute -left-4 top-1/2 -translate-y-1/2 bg-[#722F37] text-[#D3AF37] text-[10px] font-btn px-2.5 py-1 rounded-full border border-[#D3AF37] shadow-md">
                  OU
                </span>

                <div className="w-12 h-12 rounded-full bg-[#D3AF37]/20 text-[#D3AF37] flex items-center justify-center mx-auto mb-3 border border-[#D3AF37]/40">
                  <Gift className="w-6 h-6 text-[#D3AF37]" />
                </div>
                <div className="font-serif text-2xl font-bold text-[#D3AF37] mb-1">
                  Um presente exclusivo
                </div>
                <div className="font-desc text-xs text-[#FCFCFC]/80">
                  Adicionado como mimo de alta costura na sua próxima caixa.
                </div>
              </div>
            </div>

            {/* Interactive Link Share Box */}
            <div className="max-w-xl mx-auto bg-black/70 p-3 sm:p-4 rounded-sm border border-[#D3AF37]/50 flex flex-col sm:flex-row items-center gap-3">
              <input
                type="text"
                readOnly
                value={referralLink}
                className="w-full bg-white/10 px-3 py-2 text-xs font-mono text-[#FCFCFC] border border-[#D3AF37]/40 rounded-sm focus:outline-none select-all"
              />
              <div className="flex items-center gap-2 w-full sm:w-auto shrink-0">
                <button
                  onClick={handleCopy}
                  className="w-full sm:w-auto px-4 py-2.5 bg-[#722F37] hover:bg-[#5b242b] text-[#FCFCFC] text-xs font-btn rounded-sm flex items-center justify-center gap-1.5 transition-colors cursor-pointer whitespace-nowrap border border-[#D3AF37]/50"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-300" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copiado!' : 'Copiar Link'}</span>
                </button>
                <button
                  onClick={shareWhatsApp}
                  className="w-full sm:w-auto px-4 py-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-btn rounded-sm flex items-center justify-center gap-1.5 transition-colors cursor-pointer whitespace-nowrap shadow-md"
                  title="Compartilhar pelo WhatsApp"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </button>
              </div>
            </div>

            <p className="font-desc text-[11px] text-[#E3BC9A]/80 mt-5">
              Não há limite de indicações: quanto mais amigas você presentear com o clube, mais você acumula.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
