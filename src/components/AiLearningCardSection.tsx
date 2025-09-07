"use client";

import AiLearningCard from "./AiLearningCard";

const aiLearningBenefits = [
  {
    number: "01/04",
    title: "Aprendizado Personalizado",
    subtitle: "ADAPTIVE INTELLIGENCE",
    description: "A IA adapta-se ao seu ritmo e estilo...",
    japanese: "個人に合わせた学習",
    japaneseTranslation: "Kojin ni awaseta gakushū",
  },
  {
    number: "02/04",
    title: "Disponibilidade 24/7",
    subtitle: "ALWAYS ACCESSIBLE",
    description: "Diferente de professores tradicionais...",
    japanese: "いつでも利用可能",
    japaneseTranslation: "Itsu demo riyō kanō",
  },
  {
    number: "03/04",
    title: "Feedback Instantâneo",
    subtitle: "IMMEDIATE RESPONSE",
    description: "Receba correções e sugestões em tempo real...",
    japanese: "即座のフィードバック",
    japaneseTranslation: "Sokuza no fīdobakku",
  },
  {
    number: "04/04",
    title: "Conhecimento Infinito",
    subtitle: "BOUNDLESS WISDOM",
    description: "Acesso a uma biblioteca infinita de conhecimento...",
    japanese: "無限の知識",
    japaneseTranslation: "Mugen no chishiki",
  },
];

export default function AILearningCardListSection() {
  return (
    <div className="space-y-12 sm:space-y-16 lg:space-y-20">
      {aiLearningBenefits.map((benefit, index) => (
        <AiLearningCard
          aiLearningBenefits={aiLearningBenefits}
          benefit={benefit}
          index={index}
        />
      ))}
    </div>
  );
}
