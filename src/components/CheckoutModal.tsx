import React, { useState } from 'react';
import { X, Lock, ShieldCheck, CheckCircle2, CreditCard, Sparkles, Edit3, ArrowRight } from 'lucide-react';
import { PlanId, QuizProfile } from '../types';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan: PlanId;
  quizProfile: QuizProfile;
  onChangePlan: (plan: PlanId) => void;
  onOpenQuiz: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  selectedPlan,
  quizProfile,
  onChangePlan,
  onOpenQuiz,
}) => {
  const [submitting, setSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Requested Contact Fields
  const [fullName, setFullName] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  // Requested Address Fields
  const [cep, setCep] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [complement, setComplement] = useState('');
  const [referencePoint, setReferencePoint] = useState('');

  // Payment Fields
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvv, setCardCvv] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(true);

  if (!isOpen) return null;

  const planDetails: Record<
    PlanId,
    { name: string; price: string; cycle: string; editions: string; desc: string }
  > = {
    descoberta: {
      name: 'Plano Descoberta — 1 edição',
      price: 'R$ 189,90',
      cycle: 'Cobrança única',
      editions: '1 caixa exclusiva',
      desc: 'Ideal para conhecer a experiência sem fidelidade.',
    },
    encanto: {
      name: 'Plano Encanto — Semestral',
      price: 'R$ 169,90',
      cycle: 'Cobrança bimestral recorrente',
      editions: '3 edições (1 a cada 2 meses)',
      desc: 'Economia real de R$ 60,00 e prioridade em lançamentos.',
    },
    paixao: {
      name: 'Plano Paixão — Anual VIP',
      price: 'R$ 159,90',
      cycle: 'Cobrança bimestral recorrente',
      editions: '6 edições (1 a cada 2 meses)',
      desc: 'Caixa Premium na 1ª entrega + Presente de aniversário exclusivo.',
    },
  };

  const currentPlan = planDetails[selectedPlan];

  // Helper formatting
  const handleCpfChange = (val: string) => {
    const raw = val.replace(/\D/g, '').slice(0, 11);
    let formatted = raw;
    if (raw.length > 9) {
      formatted = `${raw.slice(0, 3)}.${raw.slice(3, 6)}.${raw.slice(6, 9)}-${raw.slice(9)}`;
    } else if (raw.length > 6) {
      formatted = `${raw.slice(0, 3)}.${raw.slice(3, 6)}.${raw.slice(6)}`;
    } else if (raw.length > 3) {
      formatted = `${raw.slice(0, 3)}.${raw.slice(3)}`;
    }
    setCpf(formatted);
  };

  const handlePhoneChange = (val: string) => {
    const raw = val.replace(/\D/g, '').slice(0, 11);
    let formatted = raw;
    if (raw.length > 10) {
      formatted = `(${raw.slice(0, 2)}) ${raw.slice(2, 7)}-${raw.slice(7)}`;
    } else if (raw.length > 6) {
      formatted = `(${raw.slice(0, 2)}) ${raw.slice(2, 6)}-${raw.slice(6)}`;
    } else if (raw.length > 2) {
      formatted = `(${raw.slice(0, 2)}) ${raw.slice(2)}`;
    }
    setPhone(formatted);
  };

  const handleCepChange = (value: string) => {
    const raw = value.replace(/\D/g, '').slice(0, 8);
    let formatted = raw;
    if (raw.length > 5) {
      formatted = `${raw.slice(0, 5)}-${raw.slice(5)}`;
    }
    setCep(formatted);

    // Auto-fill mock for smooth UX
    if (raw.length === 8) {
      if (!street) setStreet('Avenida Paulista');
      if (!neighborhood) setNeighborhood('Bela Vista');
      if (!city) setCity('São Paulo');
      if (!state) setState('SP');
    }
  };

  const handleCardNumber = (val: string) => {
    const raw = val.replace(/\D/g, '').slice(0, 16);
    const parts = raw.match(/.{1,4}/g);
    setCardNumber(parts ? parts.join(' ') : raw);
  };

  const handleExpiry = (val: string) => {
    const raw = val.replace(/\D/g, '').slice(0, 4);
    if (raw.length >= 2) {
      setCardExpiry(`${raw.slice(0, 2)}/${raw.slice(2)}`);
    } else {
      setCardExpiry(raw);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setIsSuccess(true);
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-[#14080A] text-[#FCFCFC] border border-[#D3AF37]/60 rounded-sm shadow-2xl my-8 overflow-hidden">
        {/* Header */}
        <div className="bg-[#240D12] text-white p-6 relative border-b border-[#D3AF37]/30">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-white/70 hover:text-white transition-colors cursor-pointer"
            aria-label="Fechar checkout"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-1">
            <Lock className="w-4 h-4 text-[#D3AF37]" />
            <span className="font-h3 text-[11px] text-[#D3AF37] tracking-[0.2em]">
              CHECKOUT SEGURO COM CRIPTOGRAFIA DE 256 BITS
            </span>
          </div>

          <h3 className="font-serif text-2xl font-medium text-[#FCFCFC]">
            Finalize sua Assinatura Amor & Mistério
          </h3>
          <p className="font-desc text-xs text-[#E3BC9A] mt-1">
            Cobrança no cartão a cada 2 meses · Sem comprometer o limite total
          </p>
        </div>

        {/* Success View */}
        {isSuccess ? (
          <div className="p-8 sm:p-12 text-center bg-[#14080A]">
            <div className="w-16 h-16 rounded-full bg-[#722F37] text-[#D3AF37] flex items-center justify-center mx-auto mb-4 border border-[#D3AF37]">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <span className="font-btn text-xs text-[#D3AF37] tracking-widest block mb-1">
              PARABÉNS! ASSINATURA CONFIRMADA
            </span>

            <h4 className="font-serif text-3xl font-medium text-[#FCFCFC] mb-3">
              Bem-vinda ao Amor & Mistério, {fullName || 'Assinante'}!
            </h4>

            <p className="font-desc text-xs sm:text-sm text-[#FCFCFC]/80 max-w-lg mx-auto mb-6 leading-relaxed">
              Sua primeira caixa da <strong>Edição Rouge & Veludo</strong> já foi reservada. Nossa curadora está separando suas peças com base nas suas medidas de <strong>Sutiã {quizProfile.braSize}</strong>, <strong>Calcinha {quizProfile.pantySize}</strong>, <strong>Camisola {quizProfile.nightgownSize}</strong> e <strong>Pijama {quizProfile.pyjamaSize}</strong>.
            </p>

            {/* Receipt Summary Box */}
            <div className="bg-black/60 border border-[#D3AF37]/40 p-6 rounded-sm max-w-md mx-auto text-left mb-8 text-xs font-desc space-y-2.5">
              <div className="flex justify-between border-b border-[#D3AF37]/20 pb-2">
                <span className="text-[#FCFCFC]/60">Código do Pedido:</span>
                <span className="font-mono font-semibold text-[#D3AF37]">AM-2026-89421</span>
              </div>
              <div className="flex justify-between border-b border-[#D3AF37]/20 pb-2">
                <span className="text-[#FCFCFC]/60">Plano Selecionado:</span>
                <span className="font-medium text-[#FCFCFC]">{currentPlan.name}</span>
              </div>
              <div className="flex justify-between border-b border-[#D3AF37]/20 pb-2">
                <span className="text-[#FCFCFC]/60">Valor por ciclo bimestral:</span>
                <span className="font-semibold text-[#D3AF37]">{currentPlan.price}</span>
              </div>
              <div className="flex justify-between border-b border-[#D3AF37]/20 pb-2">
                <span className="text-[#FCFCFC]/60">Endereço de Entrega:</span>
                <span className="text-[#FCFCFC] text-right truncate max-w-[220px]">
                  {street}, {number} - {neighborhood}, {city}/{state}
                </span>
              </div>
              <div className="flex justify-between pt-1">
                <span className="text-[#FCFCFC]/60">Próxima Cobrança:</span>
                <span className="text-[#FCFCFC]">Em 60 dias (automática)</span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="px-8 py-3.5 bg-[#722F37] hover:bg-[#5b242b] text-white font-btn rounded-sm border border-[#D3AF37] shadow-lg cursor-pointer"
            >
              Concluir e Voltar ao Site
            </button>
          </div>
        ) : (
          /* Checkout Form */
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto bg-[#14080A]">
            {/* Top Plan Selector Bar */}
            <div className="mb-8 p-4 bg-black/60 border border-[#D3AF37]/50 rounded-sm flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="font-btn text-[10px] text-[#D3AF37] tracking-wider block">
                  PLANO SELECIONADO:
                </span>
                <h4 className="font-serif text-lg font-semibold text-[#FCFCFC]">
                  {currentPlan.name}
                </h4>
                <p className="font-desc text-xs text-[#E3BC9A]">
                  {currentPlan.desc} · <strong>{currentPlan.price}</strong> a cada 2 meses
                </p>
              </div>

              {/* Quick Switch Plan Pills */}
              <div className="flex items-center gap-1.5 shrink-0">
                {(['descoberta', 'encanto', 'paixao'] as PlanId[]).map((pid) => (
                  <button
                    key={pid}
                    type="button"
                    onClick={() => onChangePlan(pid)}
                    className={`px-3 py-1 text-[11px] font-btn rounded-sm border cursor-pointer transition-colors ${
                      selectedPlan === pid
                        ? 'bg-[#722F37] text-white border-[#D3AF37]'
                        : 'bg-black/50 text-[#FCFCFC]/70 border-[#D3AF37]/30 hover:border-[#D3AF37]'
                    }`}
                  >
                    {pid === 'descoberta' ? '1 Edição' : pid === 'encanto' ? '6 Meses' : '12 Meses'}
                  </button>
                ))}
              </div>
            </div>

            {/* Quiz Profile Measurements Connected (With fast edit button!) */}
            <div className="mb-8 p-4 bg-[#200D12] border border-[#D3AF37]/50 rounded-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-2 mb-1 text-[#D3AF37]">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span className="font-btn text-xs">
                    {quizProfile?.personaName || 'Perfil de Estilo Conectado'}
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 font-desc text-xs text-[#FCFCFC]/90">
                  <span><strong>Sutiã:</strong> {quizProfile?.braSize || '42 (M)'}</span>
                  <span><strong>Calcinha:</strong> {quizProfile?.pantySize || 'M (38-40)'}</span>
                  <span><strong>Camisola:</strong> {quizProfile?.nightgownSize || 'M (40-42)'}</span>
                  <span><strong>Pijama:</strong> {quizProfile?.pyjamaSize || 'M (38-40)'}</span>
                </div>
              </div>

              <button
                type="button"
                onClick={onOpenQuiz}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#722F37] hover:bg-[#592229] text-[#FCFCFC] text-[11px] font-btn rounded-sm border border-[#D3AF37]/60 cursor-pointer shrink-0 transition-colors"
                title="Editar suas medidas de sutiã, calcinha, camisola ou pijama"
              >
                <Edit3 className="w-3.5 h-3.5 text-[#D3AF37]" />
                <span>Editar Medidas</span>
              </button>
            </div>

            {/* Bloco 1: Identificação & Contato (Nome Completo, CPF, Email, Telefone) */}
            <div className="mb-8">
              <h4 className="font-serif text-lg font-medium text-[#D3AF37] mb-3 flex items-center gap-2">
                <span>1. Quem vai receber a surpresa?</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-desc text-[#FCFCFC]/90 mb-1">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Como prefere ser chamada? Ex: Gabriela Medeiros"
                    className="w-full p-2.5 text-xs font-desc border border-[#D3AF37]/40 rounded-sm focus:outline-none focus:border-[#D3AF37] bg-black/50 text-[#FCFCFC] placeholder:text-[#FCFCFC]/40"
                  />
                </div>

                <div>
                  <label className="block text-xs font-desc text-[#FCFCFC]/90 mb-1">
                    CPF *
                  </label>
                  <input
                    type="text"
                    required
                    value={cpf}
                    onChange={(e) => handleCpfChange(e.target.value)}
                    placeholder="000.000.000-00 (para emissão da nota fiscal)"
                    className="w-full p-2.5 text-xs font-mono border border-[#D3AF37]/40 rounded-sm focus:outline-none focus:border-[#D3AF37] bg-black/50 text-[#FCFCFC] placeholder:text-[#FCFCFC]/40"
                  />
                </div>

                <div>
                  <label className="block text-xs font-desc text-[#FCFCFC]/90 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Seu melhor e-mail para acompanhar o rastreio"
                    className="w-full p-2.5 text-xs font-desc border border-[#D3AF37]/40 rounded-sm focus:outline-none focus:border-[#D3AF37] bg-black/50 text-[#FCFCFC] placeholder:text-[#FCFCFC]/40"
                  />
                </div>

                <div>
                  <label className="block text-xs font-desc text-[#FCFCFC]/90 mb-1">
                    Telefone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => handlePhoneChange(e.target.value)}
                    placeholder="(11) 98765-4321 (para avisos do seu concierge)"
                    className="w-full p-2.5 text-xs font-desc border border-[#D3AF37]/40 rounded-sm focus:outline-none focus:border-[#D3AF37] bg-black/50 text-[#FCFCFC] placeholder:text-[#FCFCFC]/40"
                  />
                </div>
              </div>
            </div>

            {/* Bloco 2: Endereço de Entrega (CEP, Estado, Cidade, Bairro, Rua, Número, Complemento, Ponto de Referência) */}
            <div className="mb-8">
              <h4 className="font-serif text-lg font-medium text-[#D3AF37] mb-3 flex items-center gap-2">
                <span>2. Onde devemos entregar sua caixa a cada 2 meses?</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-4">
                <div>
                  <label className="block text-xs font-desc text-[#FCFCFC]/90 mb-1">
                    CEP *
                  </label>
                  <input
                    type="text"
                    required
                    value={cep}
                    onChange={(e) => handleCepChange(e.target.value)}
                    placeholder="01310-100"
                    className="w-full p-2.5 text-xs font-mono border border-[#D3AF37]/40 rounded-sm focus:outline-none focus:border-[#D3AF37] bg-black/50 text-[#FCFCFC] placeholder:text-[#FCFCFC]/40"
                  />
                </div>

                <div>
                  <label className="block text-xs font-desc text-[#FCFCFC]/90 mb-1">
                    Estado (UF) *
                  </label>
                  <input
                    type="text"
                    required
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    placeholder="Ex: SP"
                    className="w-full p-2.5 text-xs font-desc border border-[#D3AF37]/40 rounded-sm focus:outline-none focus:border-[#D3AF37] bg-black/50 text-[#FCFCFC] placeholder:text-[#FCFCFC]/40"
                  />
                </div>

                <div>
                  <label className="block text-xs font-desc text-[#FCFCFC]/90 mb-1">
                    Cidade *
                  </label>
                  <input
                    type="text"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Ex: São Paulo"
                    className="w-full p-2.5 text-xs font-desc border border-[#D3AF37]/40 rounded-sm focus:outline-none focus:border-[#D3AF37] bg-black/50 text-[#FCFCFC] placeholder:text-[#FCFCFC]/40"
                  />
                </div>

                <div>
                  <label className="block text-xs font-desc text-[#FCFCFC]/90 mb-1">
                    Bairro *
                  </label>
                  <input
                    type="text"
                    required
                    value={neighborhood}
                    onChange={(e) => setNeighborhood(e.target.value)}
                    placeholder="Ex: Jardins"
                    className="w-full p-2.5 text-xs font-desc border border-[#D3AF37]/40 rounded-sm focus:outline-none focus:border-[#D3AF37] bg-black/50 text-[#FCFCFC] placeholder:text-[#FCFCFC]/40"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-4">
                <div className="sm:col-span-3">
                  <label className="block text-xs font-desc text-[#FCFCFC]/90 mb-1">
                    Rua / Avenida *
                  </label>
                  <input
                    type="text"
                    required
                    value={street}
                    onChange={(e) => setStreet(e.target.value)}
                    placeholder="Ex: Rua Oscar Freire"
                    className="w-full p-2.5 text-xs font-desc border border-[#D3AF37]/40 rounded-sm focus:outline-none focus:border-[#D3AF37] bg-black/50 text-[#FCFCFC] placeholder:text-[#FCFCFC]/40"
                  />
                </div>

                <div>
                  <label className="block text-xs font-desc text-[#FCFCFC]/90 mb-1">
                    Número *
                  </label>
                  <input
                    type="text"
                    required
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    placeholder="Ex: 840"
                    className="w-full p-2.5 text-xs font-desc border border-[#D3AF37]/40 rounded-sm focus:outline-none focus:border-[#D3AF37] bg-black/50 text-[#FCFCFC] placeholder:text-[#FCFCFC]/40"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-desc text-[#FCFCFC]/90 mb-1">
                    Complemento (Opcional)
                  </label>
                  <input
                    type="text"
                    value={complement}
                    onChange={(e) => setComplement(e.target.value)}
                    placeholder="Ex: Apto 72, Bloco C"
                    className="w-full p-2.5 text-xs font-desc border border-[#D3AF37]/40 rounded-sm focus:outline-none focus:border-[#D3AF37] bg-black/50 text-[#FCFCFC] placeholder:text-[#FCFCFC]/40"
                  />
                </div>

                <div>
                  <label className="block text-xs font-desc text-[#FCFCFC]/90 mb-1">
                    Ponto de referência (Opcional)
                  </label>
                  <input
                    type="text"
                    value={referencePoint}
                    onChange={(e) => setReferencePoint(e.target.value)}
                    placeholder="Ex: Em frente à praça, portaria de visitantes"
                    className="w-full p-2.5 text-xs font-desc border border-[#D3AF37]/40 rounded-sm focus:outline-none focus:border-[#D3AF37] bg-black/50 text-[#FCFCFC] placeholder:text-[#FCFCFC]/40"
                  />
                </div>
              </div>
            </div>

            {/* Bloco 3: Cartão de Crédito com Cobrança Recorrente */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-serif text-lg font-medium text-[#D3AF37] flex items-center gap-2">
                  <span>3. Dados do Cartão (Cobrança Recorrente a Cada 2 Meses)</span>
                </h4>
                <div className="flex items-center gap-1.5 text-[11px] font-desc text-[#E3BC9A]">
                  <CreditCard className="w-3.5 h-3.5" />
                  <span>Não consome o limite total</span>
                </div>
              </div>

              <div className="bg-black/60 border border-[#D3AF37]/40 p-5 rounded-sm space-y-4">
                <div>
                  <label className="block text-xs font-desc text-[#FCFCFC]/90 mb-1">
                    Número do Cartão de Crédito *
                  </label>
                  <input
                    type="text"
                    required
                    value={cardNumber}
                    onChange={(e) => handleCardNumber(e.target.value)}
                    placeholder="0000 0000 0000 0000"
                    className="w-full p-2.5 text-xs font-mono border border-[#D3AF37]/40 rounded-sm focus:outline-none focus:border-[#D3AF37] bg-black/70 text-[#FCFCFC] placeholder:text-[#FCFCFC]/40"
                  />
                </div>

                <div>
                  <label className="block text-xs font-desc text-[#FCFCFC]/90 mb-1">
                    Nome Completo Impresso no Cartão *
                  </label>
                  <input
                    type="text"
                    required
                    value={cardHolder}
                    onChange={(e) => setCardHolder(e.target.value)}
                    placeholder="Ex: GABRIELA M OLIVEIRA"
                    className="w-full p-2.5 text-xs font-desc uppercase border border-[#D3AF37]/40 rounded-sm focus:outline-none focus:border-[#D3AF37] bg-black/70 text-[#FCFCFC] placeholder:text-[#FCFCFC]/40"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-desc text-[#FCFCFC]/90 mb-1">
                      Validade (MM/AA) *
                    </label>
                    <input
                      type="text"
                      required
                      value={cardExpiry}
                      onChange={(e) => handleExpiry(e.target.value)}
                      placeholder="Ex: 08/29"
                      className="w-full p-2.5 text-xs font-mono border border-[#D3AF37]/40 rounded-sm focus:outline-none focus:border-[#D3AF37] bg-black/70 text-[#FCFCFC] placeholder:text-[#FCFCFC]/40"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-desc text-[#FCFCFC]/90 mb-1">
                      Código de Segurança (CVV) *
                    </label>
                    <input
                      type="password"
                      required
                      maxLength={4}
                      value={cardCvv}
                      onChange={(e) => setCardCvv(e.target.value.replace(/\D/g, ''))}
                      placeholder="123"
                      className="w-full p-2.5 text-xs font-mono border border-[#D3AF37]/40 rounded-sm focus:outline-none focus:border-[#D3AF37] bg-black/70 text-[#FCFCFC] placeholder:text-[#FCFCFC]/40"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Terms checkbox */}
            <div className="mb-6 p-4 bg-black/40 border border-[#D3AF37]/30 rounded-sm">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  required
                  checked={termsAccepted}
                  onChange={(e) => setTermsAccepted(e.target.checked)}
                  className="mt-1 accent-[#722F37]"
                />
                <span className="font-desc text-[11px] text-[#FCFCFC]/80 leading-relaxed">
                  Declaro estar ciente de que a Amor & Mistério comercializa uma experiência personalizada e surpresa, com envios bimestrais, seleção conforme minhas medidas e preferências, e cobrança recorrente a cada 2 meses no cartão de crédito.
                </span>
              </label>
            </div>

            {/* Submit CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#D3AF37]/30">
              <div className="text-left">
                <span className="font-desc text-xs text-[#E3BC9A] block">Valor deste ciclo bimestral:</span>
                <span className="font-serif text-2xl font-bold text-[#D3AF37]">
                  {currentPlan.price}
                </span>
                <span className="text-[11px] font-desc text-[#FCFCFC]/60 ml-2">
                  (próxima cobrança daqui a 60 dias)
                </span>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full sm:w-auto px-8 py-3.5 bg-[#722F37] hover:bg-[#5b242b] disabled:opacity-60 text-[#FCFCFC] font-btn rounded-sm border border-[#D3AF37] shadow-xl flex items-center justify-center gap-2 cursor-pointer transition-all"
              >
                {submitting ? (
                  <span>Processando com Criptografia...</span>
                ) : (
                  <>
                    <span>Confirmar Assinatura e Garantir Edição</span>
                    <ArrowRight className="w-4 h-4 text-[#D3AF37]" />
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
