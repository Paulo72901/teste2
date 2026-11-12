import React from 'react';
import { MessageCircle, Mail, Clock, ShieldCheck, Download, FileCode, CheckCircle2 } from 'lucide-react';

interface FooterProps {
  onOpenQuiz: () => void;
  onSelectPlan: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuiz, onSelectPlan }) => {
  return (
    <footer className="bg-[#080305] text-[#FCFCFC] pt-16 pb-12 border-t border-[#D3AF37]/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Project Files Download Banner Card */}
        <div className="mb-14 p-6 sm:p-8 bg-gradient-to-r from-[#1F0C10] via-[#14070A] to-[#1F0C10] border-2 border-[#D3AF37]/60 rounded-sm shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-sm bg-[#722F37] text-[#D3AF37] flex items-center justify-center shrink-0 border border-[#D3AF37]/50 shadow-md">
              <Download className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-btn text-[11px] bg-[#D3AF37]/20 text-[#D3AF37] px-2 py-0.5 rounded-sm border border-[#D3AF37]/40">
                  ARQUIVOS DO PROJETO PRONTOS
                </span>
                <span className="text-xs font-mono text-[#FCFCFC]/60">~7.6 MB (.ZIP)</span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl text-[#FCFCFC] font-medium mb-1">
                Baixar Código Fonte & Imagens Completas
              </h3>
              <p className="font-desc text-xs text-[#E3BC9A] max-w-xl leading-relaxed">
                Inclui todos os componentes React, TypeScript, estilos Tailwind CSS, imagens de alta resolução, tipos, quiz interativo, checkout e o manual de execução no README.md.
              </p>
            </div>
          </div>

          <a
            href="/amor-e-misterio-landing-page.zip"
            download="amor-e-misterio-landing-page.zip"
            className="w-full md:w-auto px-7 py-3.5 bg-[#722F37] hover:bg-[#5b242b] text-[#FCFCFC] font-btn rounded-sm border border-[#D3AF37] shadow-xl flex items-center justify-center gap-2 shrink-0 cursor-pointer transition-all hover:scale-105"
          >
            <Download className="w-4 h-4 text-[#D3AF37]" />
            <span>Baixar Projeto Completo (.ZIP)</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <a
              href="#"
              className="text-2xl font-serif tracking-[0.2em] font-semibold text-[#D3AF37] block mb-4"
            >
              AMOR & MISTÉRIO
            </a>
            <p className="font-desc text-xs text-[#FCFCFC]/70 max-w-sm leading-relaxed mb-6">
              O clube de assinatura bimestral pioneiro em caixas misteriosas de lingerie e moda íntima feminina de alta costura. Uma experiência sensorial sob medida para elevar sua autoestima a cada dois meses.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-4 text-xs font-desc text-[#E3BC9A]">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#D3AF37] transition-colors"
              >
                Instagram
              </a>
              <span>·</span>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#D3AF37] transition-colors"
              >
                Pinterest
              </a>
              <span>·</span>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#D3AF37] transition-colors"
              >
                TikTok
              </a>
              <span>·</span>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#D3AF37] transition-colors"
              >
                YouTube
              </a>
            </div>
          </div>

          {/* Experiência */}
          <div>
            <h4 className="font-h3 text-xs text-[#D3AF37] tracking-[0.2em] mb-4">
              EXPERIÊNCIA
            </h4>
            <ul className="space-y-2.5 text-xs font-desc text-[#FCFCFC]/70">
              <li>
                <a href="#como-funciona" className="hover:text-white transition-colors">
                  Como Funciona
                </a>
              </li>
              <li>
                <a href="#curadoria" className="hover:text-white transition-colors">
                  A Curadoria Exclusiva
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenQuiz}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Quiz de Medidas & Estilo
                </button>
              </li>
              <li>
                <a href="#experiencia" className="hover:text-white transition-colors">
                  Filme da Experiência
                </a>
              </li>
            </ul>
          </div>

          {/* Assinaturas */}
          <div>
            <h4 className="font-h3 text-xs text-[#D3AF37] tracking-[0.2em] mb-4">
              ASSINATURAS
            </h4>
            <ul className="space-y-2.5 text-xs font-desc text-[#FCFCFC]/70">
              <li>
                <a href="#planos" className="hover:text-white transition-colors">
                  Plano Descoberta (1 edição)
                </a>
              </li>
              <li>
                <a href="#planos" className="hover:text-white transition-colors">
                  Plano Encanto (Semestral)
                </a>
              </li>
              <li>
                <a href="#planos" className="hover:text-white transition-colors">
                  Plano Paixão (Anual VIP)
                </a>
              </li>
              <li>
                <a href="#pagamento" className="hover:text-white transition-colors">
                  Cobrança Recorrente Segura
                </a>
              </li>
              <li>
                <a href="#indique" className="hover:text-white transition-colors">
                  Indique uma Amiga (R$ 30)
                </a>
              </li>
            </ul>
          </div>

          {/* Atendimento e Suporte */}
          <div>
            <h4 className="font-h3 text-xs text-[#D3AF37] tracking-[0.2em] mb-4">
              SUPORTE & CONCIERGE
            </h4>
            <ul className="space-y-3 text-xs font-desc text-[#FCFCFC]/75">
              <li className="flex items-start gap-2">
                <MessageCircle className="w-4 h-4 text-[#D3AF37] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-white font-medium">WhatsApp Concierge:</span>
                  <a
                    href="https://wa.me/5511999999999"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline text-[#E3BC9A]"
                  >
                    (11) 99841-8930
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-[#D3AF37] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-white font-medium">E-mail de Suporte:</span>
                  <a href="mailto:concierge@amoremisterio.com.br" className="hover:underline">
                    concierge@amoremisterio.com.br
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#D3AF37] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-white font-medium">Horário de Atendimento:</span>
                  <span>Segunda a Sexta das 09h às 18h</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Security Seals & Legal Info */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-desc text-[#FCFCFC]/50">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-[#E3BC9A]">
              <ShieldCheck className="w-4 h-4 text-[#D3AF37]" />
              <span>Compra 100% Blindada</span>
            </span>
            <span>·</span>
            <span>Criptografia SSL SHA-256</span>
            <span>·</span>
            <span>Processamento PCI-DSS</span>
          </div>

          <div className="text-center md:text-right">
            <span>Amor & Mistério Moda Íntima Ltda. · CNPJ: 48.912.842/0001-95</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-[11px] font-desc text-[#FCFCFC]/40 flex items-center justify-center gap-1">
          <span>© 2026 Amor & Mistério. Todos os direitos reservados. Mais do que uma caixa, é um sentimento.</span>
        </div>
      </div>
    </footer>
  );
};
