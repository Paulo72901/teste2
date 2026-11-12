import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MarqueeRibbon } from './components/MarqueeRibbon';
import { HowItWorks } from './components/HowItWorks';
import { ShowcaseCurator } from './components/ShowcaseCurator';
import { VideoSection } from './components/VideoSection';
import { PlansSection } from './components/PlansSection';
import { PaymentSecurity } from './components/PaymentSecurity';
import { ReferralSection } from './components/ReferralSection';
import { NoticeSection } from './components/NoticeSection';
import { Footer } from './components/Footer';
import { StyleQuizModal } from './components/StyleQuizModal';
import { CheckoutModal } from './components/CheckoutModal';
import { PlanId, QuizProfile } from './types';

export default function App() {
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<PlanId>('encanto');

  const [quizProfile, setQuizProfile] = useState<QuizProfile>({
    braSize: '42 (M)',
    pantySize: 'M (38-40)',
    nightgownSize: 'M (40-42)',
    pyjamaSize: 'M (38-40)',
    supportPreference: 'Sem bojo, com aro suave de sustentação',
    pantyStylePreference: 'Fio duplo macio e anatômico',
    selectedStyles: ['Sensual e Marcante', 'Romântico e Delicado'],
    favoritePieces: [
      'Conjuntos completos de lingerie',
      'Sutiãs com renda francesa delicada',
      'Calcinhas de cintura alta modeladora',
      'Robes e camisolas em cetim toque de seda',
    ],
    avoidNotes: '',
    personaName: 'Sensual Romântica & Envolvente',
    personaDesc:
      'Você aprecia o encanto das rendas florais francesas com a sedução das transparências refinadas, caimento perfeito e toques de cetim.',
  });

  const handleOpenPlan = (planId?: string) => {
    if (planId && (planId === 'descoberta' || planId === 'encanto' || planId === 'paixao')) {
      setSelectedPlan(planId as PlanId);
      setIsCheckoutOpen(true);
    } else {
      const section = document.getElementById('planos');
      section?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleStartQuiz = () => {
    setIsQuizOpen(true);
  };

  const handleCompleteQuiz = (profileSummary: QuizProfile, suggestedPlan: PlanId) => {
    setQuizProfile(profileSummary);
    setSelectedPlan(suggestedPlan);
    setIsQuizOpen(false);
    setIsCheckoutOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0A0507] text-[#FCFCFC] selection:bg-[#722F37] selection:text-[#D3AF37]">
      {/* 3-Zone Header with Countdown Banner */}
      <Header
        onOpenQuiz={handleStartQuiz}
        onSelectPlan={() => handleOpenPlan()}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onDiscoverPlan={() => handleOpenPlan()}
          onStartQuiz={handleStartQuiz}
        />

        {/* Tarja com o logo indo da esquerda para a direita (com logo oficial da Amor & Mistério) */}
        <MarqueeRibbon />

        {/* Como Funciona (1 title, 2 subtitles, 4 steps) */}
        <HowItWorks
          onStartQuiz={handleStartQuiz}
          onChoosePlan={() => handleOpenPlan()}
        />

        {/* O que você pode receber (Vitrine elegante sem quebrar mistério) */}
        <ShowcaseCurator onOpenQuiz={handleStartQuiz} />

        {/* Vídeo de propaganda na seção central (Vimeo fullscreen sem controles em loop e mudo) */}
        <VideoSection />

        {/* Seleção de Planos (3 cards) */}
        <PlansSection onSelectPlan={(planId) => handleOpenPlan(planId)} />

        {/* Formas de Pagamentos (Cobrança recorrente no cartão sem travar limite) */}
        <PaymentSecurity />

        {/* Indicação de Amigos (INDIQUE UMA AMIGA! com imagem de fundo) */}
        <ReferralSection />

        {/* Avisos Importantes */}
        <NoticeSection />
      </main>

      {/* Rodapé Completo */}
      <Footer
        onOpenQuiz={handleStartQuiz}
        onSelectPlan={() => handleOpenPlan()}
      />

      {/* Style Quiz Modal com medidas de sutiã, calcinha, camisola e pijama + edição pós-arquétipo */}
      <StyleQuizModal
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
        onCompleteQuiz={handleCompleteQuiz}
        initialProfile={quizProfile}
      />

      {/* Checkout Modal com campos completos de endereço, contato e cartão recorrente */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        selectedPlan={selectedPlan}
        quizProfile={quizProfile}
        onChangePlan={(p) => setSelectedPlan(p)}
        onOpenQuiz={() => {
          setIsCheckoutOpen(false);
          setIsQuizOpen(true);
        }}
      />
    </div>
  );
}
