import React from 'react';
import { ShieldCheck, CheckCircle2, Lock, RefreshCw, CalendarCheck } from 'lucide-react';

export const PaymentSecurity: React.FC = () => {
  return (
    <section id="pagamento" className="py-22 bg-[#0E0608] text-[#FCFCFC] border-b border-[#D3AF37]/20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header exact structure */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="font-h3 text-[#D3AF37] tracking-[0.25em] mb-2">
            Pagamento
          </p>

          <h2 className="font-h2 text-3xl sm:text-4xl text-[#FCFCFC] mb-4">
            Simples, seguro, e sem preocupações.
          </h2>

          <p className="font-desc text-[#E3BC9A] text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Para oferecer uma experiência prática e sem preocupações, todas as assinaturas da Amor & Mistério são realizadas por cartão de crédito com cobrança recorrente.
          </p>
        </div>

        {/* Benefits & Advantages Dual Column */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          {/* Column 1: Benefícios de um pagamento recorrente */}
          <div className="lg:col-span-7 bg-[#1A0C10]/90 p-8 rounded-sm border border-[#D3AF37]/30 shadow-xl">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#D3AF37]/20">
              <div className="w-10 h-10 rounded-sm bg-[#722F37]/50 flex items-center justify-center text-[#D3AF37] border border-[#D3AF37]/30">
                <RefreshCw className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-medium text-[#FCFCFC]">
                  Como funciona a Cobrança Recorrente
                </h3>
                <span className="font-desc text-[11px] text-[#E3BC9A]">
                  Transparência absoluta em cada ciclo bimestral
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#722F37] text-[#D3AF37] border border-[#D3AF37]/50 flex items-center justify-center text-xs font-semibold shrink-0 mt-0.5">
                  1
                </span>
                <p className="font-desc text-xs text-[#FCFCFC]/90 leading-relaxed">
                  No momento da contratação, você cadastra seu cartão de crédito.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#722F37] text-[#D3AF37] border border-[#D3AF37]/50 flex items-center justify-center text-xs font-semibold shrink-0 mt-0.5">
                  2
                </span>
                <p className="font-desc text-xs text-[#FCFCFC]/90 leading-relaxed">
                  A cobrança é realizada automaticamente <strong>a cada dois meses</strong>, conforme o plano escolhido.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#722F37] text-[#D3AF37] border border-[#D3AF37]/50 flex items-center justify-center text-xs font-semibold shrink-0 mt-0.5">
                  3
                </span>
                <p className="font-desc text-xs text-[#FCFCFC]/90 leading-relaxed">
                  Você não precisa realizar um novo pagamento a cada edição.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#722F37] text-[#D3AF37] border border-[#D3AF37]/50 flex items-center justify-center text-xs font-semibold shrink-0 mt-0.5">
                  4
                </span>
                <p className="font-desc text-xs text-[#FCFCFC]/90 leading-relaxed">
                  As próximas caixas serão preparadas e enviadas após a confirmação da cobrança recorrente.
                </p>
              </div>
            </div>
          </div>

          {/* Column 2: Vantagens da cobrança recorrente */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#2D1217] to-[#17080B] text-[#FCFCFC] p-8 rounded-sm border-2 border-[#D3AF37]/60 shadow-2xl flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#D3AF37]/30">
                <ShieldCheck className="w-6 h-6 text-[#D3AF37]" />
                <h3 className="font-serif text-xl font-medium text-[#FCFCFC]">
                  Vantagens para Você
                </h3>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#D3AF37] shrink-0 mt-0.5" />
                  <span className="font-desc text-xs text-[#FCFCFC]/90 leading-relaxed font-normal">
                    Mais praticidade para você.
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#D3AF37] shrink-0 mt-0.5" />
                  <span className="font-desc text-xs text-[#FCFCFC]/90 leading-relaxed font-normal">
                    Sem necessidade de lembrar de realizar pagamentos.
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#D3AF37] shrink-0 mt-0.5" />
                  <span className="font-desc text-xs text-[#FCFCFC]/90 leading-relaxed font-normal">
                    Garantia da continuidade da sua assinatura.
                  </span>
                </div>
              </div>
            </div>

            {/* Accepted Cards Badge */}
            <div className="pt-4 border-t border-[#D3AF37]/30 flex items-center justify-between text-[11px] font-desc text-[#E3BC9A]">
              <span>Bandeiras aceitas:</span>
              <div className="flex items-center gap-2 font-mono text-white text-[10px]">
                <span className="bg-white/10 px-2 py-0.5 rounded-sm border border-[#D3AF37]/30">Visa</span>
                <span className="bg-white/10 px-2 py-0.5 rounded-sm border border-[#D3AF37]/30">Mastercard</span>
                <span className="bg-white/10 px-2 py-0.5 rounded-sm border border-[#D3AF37]/30">Elo</span>
                <span className="bg-white/10 px-2 py-0.5 rounded-sm border border-[#D3AF37]/30">Amex</span>
              </div>
            </div>
          </div>
        </div>

        {/* Required Footnote Notice */}
        <div className="p-4 bg-black/60 border border-[#D3AF37]/30 rounded-sm text-center">
          <p className="font-desc text-xs text-[#E3BC9A] italic leading-relaxed">
            * Em muitas operadoras, a cobrança recorrente não compromete o limite total do cartão, apenas o valor de cada ciclo (isso pode variar conforme a administradora do cartão).
          </p>
        </div>

        {/* Bank Level Trust Badges */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-8 text-xs font-desc text-[#FCFCFC]/60">
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-[#D3AF37]" />
            <span>Ambiente Criptografado SSL 256 bits</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#D3AF37]" />
            <span>Gateway Certificado PCI-DSS Level 1</span>
          </div>
          <div className="flex items-center gap-2">
            <CalendarCheck className="w-4 h-4 text-[#D3AF37]" />
            <span>Cobrança Pontual a Cada 2 Meses</span>
          </div>
        </div>
      </div>
    </section>
  );
};
