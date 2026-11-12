import React, { useState } from 'react';
import { X, ArrowRight, ArrowLeft, Check, Sparkles, Crown, Shield, Edit3 } from 'lucide-react';
import { PlanId, QuizProfile } from '../types';

interface StyleQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCompleteQuiz: (profileSummary: QuizProfile, suggestedPlan: PlanId) => void;
  initialProfile?: Partial<QuizProfile>;
}

export const StyleQuizModal: React.FC<StyleQuizModalProps> = ({
  isOpen,
  onClose,
  onCompleteQuiz,
  initialProfile,
}) => {
  // Steps: 1 = Medidas (Sutiã, Calcinha, Camisola, Pijama), 2 = Estilo & Modelagens Específicas, 3 = Preferências de Peças & Restrições, 4 = Resultado do Arquétipo
  const [step, setStep] = useState(1);
  const totalSteps = 3;

  // Measurement states
  const [braSize, setBraSize] = useState(initialProfile?.braSize || '42 (M)');
  const [pantySize, setPantySize] = useState(initialProfile?.pantySize || 'M (38-40)');
  const [nightgownSize, setNightgownSize] = useState(initialProfile?.nightgownSize || 'M (40-42)');
  const [pyjamaSize, setPyjamaSize] = useState(initialProfile?.pyjamaSize || 'M (38-40)');

  // Specific preferences (Humanized & Specific)
  const [supportPreference, setSupportPreference] = useState(
    initialProfile?.supportPreference || 'Sem bojo, com aro suave de sustentação'
  );
  const [pantyStylePreference, setPantyStylePreference] = useState(
    initialProfile?.pantyStylePreference || 'Fio duplo macio e anatômico'
  );

  const [selectedStyles, setSelectedStyles] = useState<string[]>(
    initialProfile?.selectedStyles || ['Sensual e Marcante', 'Romântico e Delicado']
  );

  const [favoritePieces, setFavoritePieces] = useState<string[]>(
    initialProfile?.favoritePieces || [
      'Conjuntos completos de lingerie',
      'Sutiãs com renda francesa delicada',
      'Calcinhas de cintura alta modeladora',
      'Robes e camisolas em cetim toque de seda',
    ]
  );

  const [avoidNotes, setAvoidNotes] = useState(
    initialProfile?.avoidNotes || ''
  );

  // Allow fast inline editing of measurements from the archetype screen
  const [isEditingMeasurementsInline, setIsEditingMeasurementsInline] = useState(false);

  if (!isOpen) return null;

  const toggleStyle = (style: string) => {
    setSelectedStyles((prev) =>
      prev.includes(style) ? prev.filter((s) => s !== style) : [...prev, style]
    );
  };

  const togglePiece = (piece: string) => {
    setFavoritePieces((prev) =>
      prev.includes(piece) ? prev.filter((p) => p !== piece) : [...prev, piece]
    );
  };

  // Determine Persona & Suggested Plan
  const getPersona = () => {
    if (selectedStyles.includes('Sensual e Marcante') && selectedStyles.includes('Romântico e Delicado')) {
      return {
        name: 'Sensual Romântica & Envolvente',
        desc: 'Você aprecia o encanto das rendas florais francesas com a sedução das transparências refinadas, caimento perfeito e toques de cetim.',
        plan: 'encanto' as PlanId,
        planTitle: 'Plano Encanto (Semestral · 3 Edições)',
        reason: 'O equilíbrio perfeito para renovar suas gavetas ao longo das estações com economia real de R$ 60 e mimos em todas as caixas.',
      };
    } else if (selectedStyles.includes('Moderno e Minimalista')) {
      return {
        name: 'Moderna Minimalista & Elegante',
        desc: 'Para você, o luxo está na sutileza: cortes a laser sem costuras, toque suave aveludado e peças versáteis que abraçam o corpo.',
        plan: 'paixao' as PlanId,
        planTitle: 'Plano Paixão (Anual VIP · 6 Edições)',
        reason: 'A experiência mais sofisticada para receber todas as edições do ano com Caixa Premium especial e presente de aniversário.',
      };
    } else {
      return {
        name: 'Curadoria Sob Medida Clássica',
        desc: 'Você valoriza qualidade indiscutível, conforto térmico e a surpresa encantadora de receber peças de alta costura selecionadas a dedo.',
        plan: 'encanto' as PlanId,
        planTitle: 'Plano Encanto (Semestral · 3 Edições)',
        reason: 'O plano mais celebrado pelas nossas assinantes para viver a magia bimestral sem preocupações.',
      };
    }
  };

  const persona = getPersona();

  const handleFinish = () => {
    const summary: QuizProfile = {
      braSize,
      pantySize,
      nightgownSize,
      pyjamaSize,
      supportPreference,
      pantyStylePreference,
      selectedStyles,
      favoritePieces,
      avoidNotes,
      personaName: persona.name,
      personaDesc: persona.desc,
    };
    onCompleteQuiz(summary, persona.plan);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#180C0F] text-[#FCFCFC] border border-[#D3AF37]/50 rounded-sm shadow-2xl my-8 overflow-hidden">
        {/* Header with progress */}
        <div className="bg-[#2B1015] p-6 relative border-b border-[#D3AF37]/30">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-[#FCFCFC]/70 hover:text-white transition-colors cursor-pointer"
            aria-label="Fechar quiz"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-1">
            <Sparkles className="w-4 h-4 text-[#D3AF37]" />
            <span className="font-h3 text-[11px] text-[#D3AF37] tracking-[0.2em]">
              QUIZ DE MEDIDAS & ESTILO PESSOAL
            </span>
          </div>

          <h3 className="font-serif text-2xl font-medium text-[#FCFCFC]">
            {step <= totalSteps ? 'Conte-nos sobre o que faz você se sentir maravilhosa' : 'Seu Perfil de Estilo Revelado'}
          </h3>

          {/* Progress Bar */}
          {step <= totalSteps && (
            <div className="mt-4 flex items-center gap-2">
              <div className="flex-1 h-1.5 bg-black/40 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#D3AF37] to-[#E3BC9A] transition-all duration-300"
                  style={{ width: `${(step / totalSteps) * 100}%` }}
                />
              </div>
              <span className="text-[11px] font-mono text-[#E3BC9A] tabular-nums">
                Etapa {step} de {totalSteps}
              </span>
            </div>
          )}
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[70vh] overflow-y-auto bg-[#180C0F]">
          {/* STEP 1: Medidas (Sutiã, Calcinha, Camisola, Pijama) */}
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <h4 className="font-serif text-xl text-[#FCFCFC] mb-1">
                  1. Quais são suas medidas ideais?
                </h4>
                <p className="font-desc text-xs text-[#E3BC9A]/80 mb-5">
                  Cada peça da sua caixa surpresa será rigorosamente separada por nossas costureiras com base nessas 4 referências.
                </p>

                <div className="space-y-5">
                  {/* Sutiã */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-xs font-btn text-[#D3AF37]">
                        Qual é o seu tamanho de sutiã habitual?
                      </label>
                      <span className="text-[11px] font-mono text-[#FCFCFC]/60">Busto</span>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                      {['40 (P)', '42 (M)', '44 (G)', '46 (GG)', '48 (XG)'].map((size) => (
                        <button
                          key={size}
                          type="button"
                          onClick={() => setBraSize(size)}
                          className={`py-2 px-3 text-xs font-desc rounded-sm border cursor-pointer text-center transition-all ${
                            braSize === size
                              ? 'bg-[#722F37] text-white border-[#D3AF37] font-semibold shadow-xs'
                              : 'bg-black/40 border-[#D3AF37]/30 text-[#FCFCFC]/80 hover:border-[#D3AF37]'
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Calcinha */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-xs font-btn text-[#D3AF37]">
                        Como prefere a numeração da sua calcinha?
                      </label>
                      <span className="text-[11px] font-mono text-[#FCFCFC]/60">Quadril</span>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {['P (34-36)', 'M (38-40)', 'G (42-44)', 'GG (46-48)'].map((size) => (
                        <button
                          key={size}
                          type="button"
                          onClick={() => setPantySize(size)}
                          className={`py-2 px-3 text-xs font-desc rounded-sm border cursor-pointer text-center transition-all ${
                            pantySize === size
                              ? 'bg-[#722F37] text-white border-[#D3AF37] font-semibold shadow-xs'
                              : 'bg-black/40 border-[#D3AF37]/30 text-[#FCFCFC]/80 hover:border-[#D3AF37]'
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Camisola */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-xs font-btn text-[#D3AF37]">
                        Tamanho para camisolas e slips fluidos:
                      </label>
                      <span className="text-[11px] font-mono text-[#FCFCFC]/60">Caimento fluído</span>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {['P (36-38)', 'M (40-42)', 'G (44-46)', 'GG (48-50)'].map((size) => (
                        <button
                          key={size}
                          type="button"
                          onClick={() => setNightgownSize(size)}
                          className={`py-2 px-3 text-xs font-desc rounded-sm border cursor-pointer text-center transition-all ${
                            nightgownSize === size
                              ? 'bg-[#722F37] text-white border-[#D3AF37] font-semibold shadow-xs'
                              : 'bg-black/40 border-[#D3AF37]/30 text-[#FCFCFC]/80 hover:border-[#D3AF37]'
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Pijama */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-xs font-btn text-[#D3AF37]">
                        Tamanho para pijamas, short-dolls e loungewear:
                      </label>
                      <span className="text-[11px] font-mono text-[#FCFCFC]/60">Conforto ao vestir</span>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {['P (36-38)', 'M (40-42)', 'G (44-46)', 'GG (48-50)'].map((size) => (
                        <button
                          key={size}
                          type="button"
                          onClick={() => setPyjamaSize(size)}
                          className={`py-2 px-3 text-xs font-desc rounded-sm border cursor-pointer text-center transition-all ${
                            pyjamaSize === size
                              ? 'bg-[#722F37] text-white border-[#D3AF37] font-semibold shadow-xs'
                              : 'bg-black/40 border-[#D3AF37]/30 text-[#FCFCFC]/80 hover:border-[#D3AF37]'
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: Estilos Predominantes & Preferências Específicas */}
          {step === 2 && (
            <div className="space-y-6">
              <div>
                <h4 className="font-serif text-xl text-[#FCFCFC] mb-1">
                  2. Qual clima você gosta de sentir ao se vestir?
                </h4>
                <p className="font-desc text-xs text-[#E3BC9A]/80 mb-5">
                  Selecione os estilos que mais combinam com a sua personalidade íntima.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {[
                    {
                      id: 'Sensual e Marcante',
                      tag: 'Transparências em tule, recortes sedutores, detalhes strappy e presença marcante.',
                    },
                    {
                      id: 'Romântico e Delicado',
                      tag: 'Rendas florais chantilly, laços em cetim nobre, decotes suaves e delicadeza poética.',
                    },
                    {
                      id: 'Moderno e Minimalista',
                      tag: 'Cortes limpos a laser, toque imperceptível sob roupas finas e sofisticação pura.',
                    },
                    {
                      id: 'Conforto Sofisticado & Loungewear',
                      tag: 'Seda, cetim térmico, robes envolventes e peças para se mimar em casa com elegância.',
                    },
                  ].map((style) => {
                    const isSelected = selectedStyles.includes(style.id);
                    return (
                      <div
                        key={style.id}
                        onClick={() => toggleStyle(style.id)}
                        className={`p-4 rounded-sm border cursor-pointer transition-all flex items-start gap-3 ${
                          isSelected
                            ? 'bg-[#722F37]/40 border-[#D3AF37] shadow-md'
                            : 'bg-black/40 border-[#D3AF37]/20 hover:border-[#D3AF37]/50'
                        }`}
                      >
                        <div
                          className={`w-4 h-4 rounded-sm border flex items-center justify-center shrink-0 mt-0.5 ${
                            isSelected
                              ? 'bg-[#D3AF37] border-[#D3AF37] text-black font-bold'
                              : 'border-zinc-500'
                          }`}
                        >
                          {isSelected && <Check className="w-3 h-3 text-black" />}
                        </div>
                        <div>
                          <div className="font-btn text-xs text-[#D3AF37] mb-1">{style.id}</div>
                          <div className="font-desc text-[11px] text-[#FCFCFC]/80 leading-relaxed">
                            {style.tag}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Preferência de sustentação e modelagem de calcinha específicas */}
                <div className="space-y-4 pt-2">
                  <div>
                    <label className="block text-xs font-btn text-[#D3AF37] mb-2">
                      Sua preferência de sustentação no sutiã:
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {[
                        'Sem bojo, com aro suave de sustentação',
                        'Bralette macio 100% sem aro',
                        'Com bojo estruturado para realçar',
                      ].map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setSupportPreference(opt)}
                          className={`p-2.5 text-xs font-desc rounded-sm border text-left transition-all cursor-pointer ${
                            supportPreference === opt
                              ? 'bg-[#722F37] text-white border-[#D3AF37]'
                              : 'bg-black/40 border-[#D3AF37]/30 text-[#FCFCFC]/70 hover:border-[#D3AF37]'
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-btn text-[#D3AF37] mb-2">
                      Sua modelagem predileta de calcinha:
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {[
                        'Fio duplo macio e anatômico',
                        'Caleçon / biquíni com renda delicada',
                        'Cintura alta elegante / hot pant',
                      ].map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setPantyStylePreference(opt)}
                          className={`p-2.5 text-xs font-desc rounded-sm border text-left transition-all cursor-pointer ${
                            pantyStylePreference === opt
                              ? 'bg-[#722F37] text-white border-[#D3AF37]'
                              : 'bg-black/40 border-[#D3AF37]/30 text-[#FCFCFC]/70 hover:border-[#D3AF37]'
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: Tipos de Peças Favoritas & Observações de Restrições */}
          {step === 3 && (
            <div className="space-y-6">
              <div>
                <h4 className="font-serif text-xl text-[#FCFCFC] mb-1">
                  3. Quais peças fazem seu coração bater mais forte?
                </h4>
                <p className="font-desc text-xs text-[#E3BC9A]/80 mb-5">
                  Selecione tudo o que gostaria de encontrar em suas caixas bimestrais.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                  {[
                    'Conjuntos completos de lingerie',
                    'Sutiãs com renda francesa delicada',
                    'Calcinhas de cintura alta modeladora',
                    'Bralettes anatômicos para usar no dia a dia',
                    'Robes e camisolas em cetim toque de seda',
                    'Bodies refinados para compor looks externos',
                    'Pijamas de toque aveludado e short doll',
                    'Acessórios e rituais perfumados de autocuidado',
                  ].map((piece) => {
                    const isSelected = favoritePieces.includes(piece);
                    return (
                      <button
                        key={piece}
                        type="button"
                        onClick={() => togglePiece(piece)}
                        className={`p-3 text-left rounded-sm border flex items-center justify-between transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[#722F37]/50 border-[#D3AF37] font-semibold text-white'
                            : 'bg-black/40 border-[#D3AF37]/20 text-[#FCFCFC]/70 hover:border-[#D3AF37]/60'
                        }`}
                      >
                        <span className="font-desc text-xs">{piece}</span>
                        {isSelected && <Check className="w-4 h-4 text-[#D3AF37]" />}
                      </button>
                    );
                  })}
                </div>

                <div>
                  <label className="block text-xs font-btn text-[#D3AF37] mb-2">
                    Alguma recomendação especial ou algo que prefere NÃO receber?
                  </label>
                  <textarea
                    rows={2}
                    value={avoidNotes}
                    onChange={(e) => setAvoidNotes(e.target.value)}
                    placeholder="Ex: Não gosto de bojo muito volumoso, prefiro calcinhas sem elástico apertando na cintura, tenho pele sensível..."
                    className="w-full p-3 text-xs font-desc border border-[#D3AF37]/40 rounded-sm focus:outline-none focus:border-[#D3AF37] bg-black/50 text-[#FCFCFC] placeholder:text-[#FCFCFC]/40"
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: RESULTADO DO ARQUÉTIPO COM CONTROLE TOTAL PARA EDITAR MEDIDAS */}
          {step > totalSteps && (
            <div className="space-y-6">
              {/* Persona Showcase */}
              <div className="p-6 bg-gradient-to-br from-[#2B1015] via-[#1F0B0F] to-[#120608] border-2 border-[#D3AF37] rounded-sm relative overflow-hidden">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2 text-[#D3AF37]">
                    <Crown className="w-5 h-5 text-[#D3AF37]" />
                    <span className="font-h3 text-xs tracking-[0.2em]">
                      SEU ARQUÉTIPO EXCLUSIVO
                    </span>
                  </div>

                  {/* PROMINENT BUTTON TO EDIT MEASUREMENTS RESOLVING PAIN POINT */}
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#722F37] hover:bg-[#5b242b] text-[#FCFCFC] text-[11px] font-btn rounded-sm border border-[#D3AF37]/60 cursor-pointer transition-all shadow-xs"
                    title="Editar ou alterar suas medidas"
                  >
                    <Edit3 className="w-3.5 h-3.5 text-[#D3AF37]" />
                    <span>Editar Minhas Medidas</span>
                  </button>
                </div>

                <h4 className="font-serif text-2xl sm:text-3xl text-[#FCFCFC] font-medium mb-2">
                  {persona.name}
                </h4>

                <p className="font-desc text-xs sm:text-sm text-[#FCFCFC]/90 leading-relaxed mb-5">
                  {persona.desc}
                </p>

                {/* Current Saved Measurements Summary Table with fast inline edit toggle */}
                <div className="bg-black/50 p-4 rounded-sm border border-[#D3AF37]/40">
                  <div className="flex items-center justify-between mb-3 border-b border-[#D3AF37]/20 pb-2">
                    <span className="font-btn text-[11px] text-[#D3AF37] tracking-wider">
                      MEDIDAS SALVAS PARA SUA CAIXA:
                    </span>
                    <button
                      type="button"
                      onClick={() => setIsEditingMeasurementsInline(!isEditingMeasurementsInline)}
                      className="text-[11px] font-desc text-[#E3BC9A] hover:underline cursor-pointer flex items-center gap-1"
                    >
                      <Edit3 className="w-3 h-3" />
                      <span>{isEditingMeasurementsInline ? 'Fechar Ajuste Rápido' : 'Ajustar Agora'}</span>
                    </button>
                  </div>

                  {/* Inline quick adjuster or view */}
                  {isEditingMeasurementsInline ? (
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
                      <div>
                        <label className="text-[10px] font-btn text-[#D3AF37] block mb-1">Sutiã:</label>
                        <select
                          value={braSize}
                          onChange={(e) => setBraSize(e.target.value)}
                          className="w-full bg-zinc-900 border border-[#D3AF37]/50 rounded-sm text-xs p-1.5 text-white"
                        >
                          {['40 (P)', '42 (M)', '44 (G)', '46 (GG)', '48 (XG)'].map((s) => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="text-[10px] font-btn text-[#D3AF37] block mb-1">Calcinha:</label>
                        <select
                          value={pantySize}
                          onChange={(e) => setPantySize(e.target.value)}
                          className="w-full bg-zinc-900 border border-[#D3AF37]/50 rounded-sm text-xs p-1.5 text-white"
                        >
                          {['P (34-36)', 'M (38-40)', 'G (42-44)', 'GG (46-48)'].map((s) => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="text-[10px] font-btn text-[#D3AF37] block mb-1">Camisola:</label>
                        <select
                          value={nightgownSize}
                          onChange={(e) => setNightgownSize(e.target.value)}
                          className="w-full bg-zinc-900 border border-[#D3AF37]/50 rounded-sm text-xs p-1.5 text-white"
                        >
                          {['P (36-38)', 'M (40-42)', 'G (44-46)', 'GG (48-50)'].map((s) => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="text-[10px] font-btn text-[#D3AF37] block mb-1">Pijama:</label>
                        <select
                          value={pyjamaSize}
                          onChange={(e) => setPyjamaSize(e.target.value)}
                          className="w-full bg-zinc-900 border border-[#D3AF37]/50 rounded-sm text-xs p-1.5 text-white"
                        >
                          {['P (36-38)', 'M (40-42)', 'G (44-46)', 'GG (48-50)'].map((s) => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-desc text-[#FCFCFC]">
                      <div>
                        <span className="text-[#D3AF37] font-btn block text-[10px]">Sutiã:</span>
                        <span className="font-semibold">{braSize}</span>
                      </div>
                      <div>
                        <span className="text-[#D3AF37] font-btn block text-[10px]">Calcinha:</span>
                        <span className="font-semibold">{pantySize}</span>
                      </div>
                      <div>
                        <span className="text-[#D3AF37] font-btn block text-[10px]">Camisola:</span>
                        <span className="font-semibold">{nightgownSize}</span>
                      </div>
                      <div>
                        <span className="text-[#D3AF37] font-btn block text-[10px]">Pijama:</span>
                        <span className="font-semibold">{pyjamaSize}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Recommended Plan Recommendation */}
              <div className="p-6 bg-black/60 border border-[#D3AF37]/50 rounded-sm">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-btn text-[11px] bg-[#722F37] text-white px-3 py-1 rounded-sm border border-[#D3AF37]">
                    PLANO RECOMENDADO PARA VOCÊ
                  </span>
                  <Sparkles className="w-4 h-4 text-[#D3AF37]" />
                </div>

                <h5 className="font-serif text-xl font-medium text-[#FCFCFC] mb-1">
                  {persona.planTitle}
                </h5>

                <p className="font-desc text-xs text-[#E3BC9A] mb-5">
                  {persona.reason}
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#D3AF37]/30">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="text-xs font-desc text-[#E3BC9A] hover:text-white underline cursor-pointer"
                  >
                    ← Voltar e alterar preferências
                  </button>

                  <button
                    onClick={handleFinish}
                    className="w-full sm:w-auto px-8 py-3.5 bg-[#722F37] hover:bg-[#5b242b] text-[#FCFCFC] font-btn rounded-sm border border-[#D3AF37] shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Contratar com Meu Perfil Salvo</span>
                    <ArrowRight className="w-4 h-4 text-[#D3AF37]" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Controls */}
        <div className="bg-[#2B1015] p-4 px-6 sm:px-8 border-t border-[#D3AF37]/30 flex items-center justify-between">
          {step > 1 && step <= totalSteps ? (
            <button
              onClick={() => setStep(step - 1)}
              className="inline-flex items-center gap-1.5 text-xs font-btn text-[#D3AF37] hover:text-white cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Voltar</span>
            </button>
          ) : (
            <div />
          )}

          {step <= totalSteps && (
            <button
              onClick={() => setStep(step + 1)}
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#722F37] hover:bg-[#5b242b] text-[#FCFCFC] font-btn rounded-sm border border-[#D3AF37]/60 shadow-xs cursor-pointer ml-auto"
            >
              <span>{step === totalSteps ? 'Concluir & Ver Arquétipo' : 'Próxima Etapa'}</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#D3AF37]" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
