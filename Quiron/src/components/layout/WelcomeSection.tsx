import React, { memo } from 'react';
import { Flame } from 'lucide-react';

export const WelcomeSection = memo(function WelcomeSection() {
  return (
    <div className="mb-8">
      <h2 className="text-4xl mb-4">
        Bem-vindo, Herói! <span className="inline-block animate-bounce">👍</span>
      </h2>
      <p className="text-xl text-gray-300 mb-2">
        Pronto para conquistar sua aprovação hoje? Interaja com a{' '}
        <span className="text-yellow-400">Prometheus IA</span>, enfrente o game épico{' '}
        <span className="text-red-400">A Corrida dos Heróis</span>, resolva questões desafiadoras, participe do{' '}
        <span className="text-purple-400">chat da comunidade</span>, debate no{' '}
        <span className="text-cyan-400">fórum</span> e muito mais...
      </p>
      <p className="text-yellow-400 flex items-center gap-2 text-xl">
        <Flame className="w-5 h-5" /> Quiron, o caminho da aprovação!
      </p>
    </div>
  );
});
