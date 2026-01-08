import React, { useState } from 'react';
import { AvatarProgression, avatarLevels } from './AvatarSystem';
import { LevelUpModal } from './LevelUpModal';
import { Trophy, Plus, Minus, Zap } from 'lucide-react';

export function AvatarDemo() {
  const [currentWins, setCurrentWins] = useState(0);
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [showLevelUp, setShowLevelUp] = useState(false);
  const [levelUpData, setLevelUpData] = useState<any>(null);

  // Encontra o nível atual
  const currentLevel = avatarLevels.reduce((level, avatar) => {
    if (!avatar.locked && currentWins >= avatar.totalWinsNeeded) {
      return avatar.level;
    }
    return level;
  }, 1);

  const handleAddWin = () => {
    const newWins = currentWins + 1;
    const oldLevel = currentLevel;
    
    // Verifica se subiu de nível
    const newLevel = avatarLevels.reduce((level, avatar) => {
      if (!avatar.locked && newWins >= avatar.totalWinsNeeded) {
        return avatar.level;
      }
      return level;
    }, 1);

    setCurrentWins(newWins);

    // Se subiu de nível, mostra modal
    if (newLevel > oldLevel && newLevel <= 5) {
      const newAvatar = avatarLevels.find(a => a.level === newLevel);
      if (newAvatar) {
        setLevelUpData({
          level: newLevel,
          name: gender === 'male' ? newAvatar.name : newAvatar.nameFemale,
          specialAbility: newAvatar.specialAbility,
          reward: newAvatar.reward
        });
        setShowLevelUp(true);
      }
    }
  };

  const handleRemoveWin = () => {
    setCurrentWins(Math.max(0, currentWins - 1));
  };

  const currentAvatar = avatarLevels.find(a => a.level === currentLevel);
  const nextAvatar = avatarLevels.find(a => a.level === currentLevel + 1 && !a.locked);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-yellow-400 via-red-500 to-purple-500 bg-clip-text text-transparent">
            Sistema de Avatares e Progressão
          </h1>
          <p className="text-xl text-gray-400">
            Baseado na Mitologia Grega - Heróis e Heroínas Lendários
          </p>
        </div>

        {/* Current Status Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Current Avatar */}
          <div className="p-6 rounded-3xl bg-gradient-to-br from-yellow-900/30 to-gray-900 border-2 border-yellow-500/50">
            <div className="text-center">
              <Trophy className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
              <h3 className="text-lg text-gray-400 mb-2">Avatar Atual</h3>
              <p className="text-3xl text-yellow-400">
                {gender === 'male' ? currentAvatar?.name : currentAvatar?.nameFemale}
              </p>
              <p className="text-sm text-gray-500 mt-2">Nível {currentLevel}</p>
            </div>
          </div>

          {/* Wins Counter */}
          <div className="p-6 rounded-3xl bg-gradient-to-br from-blue-900/30 to-gray-900 border-2 border-blue-500/50">
            <div className="text-center">
              <Zap className="w-12 h-12 mx-auto mb-4 text-blue-400" />
              <h3 className="text-lg text-gray-400 mb-2">Vitórias Totais</h3>
              <p className="text-5xl text-blue-400 mb-4">{currentWins}</p>
              
              {/* Win Controls */}
              <div className="flex justify-center gap-3">
                <button
                  onClick={handleRemoveWin}
                  className="w-12 h-12 rounded-full bg-red-600 hover:bg-red-500 transition-colors flex items-center justify-center"
                >
                  <Minus className="w-6 h-6" />
                </button>
                <button
                  onClick={handleAddWin}
                  className="w-12 h-12 rounded-full bg-green-600 hover:bg-green-500 transition-colors flex items-center justify-center"
                >
                  <Plus className="w-6 h-6" />
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-3">
                Clique + para simular vitória
              </p>
            </div>
          </div>

          {/* Next Level */}
          <div className="p-6 rounded-3xl bg-gradient-to-br from-purple-900/30 to-gray-900 border-2 border-purple-500/50">
            <div className="text-center">
              <Trophy className="w-12 h-12 mx-auto mb-4 text-purple-400" />
              <h3 className="text-lg text-gray-400 mb-2">Próximo Nível</h3>
              {nextAvatar ? (
                <>
                  <p className="text-3xl text-purple-400">
                    {gender === 'male' ? nextAvatar.name : nextAvatar.nameFemale}
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    Faltam {nextAvatar.totalWinsNeeded - currentWins} vitórias
                  </p>
                  <div className="mt-4 w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-purple-400 to-purple-600 transition-all duration-500"
                      style={{
                        width: `${Math.min(100, ((currentWins - (currentAvatar?.totalWinsNeeded || 0)) / (nextAvatar.requiredWins)) * 100)}%`
                      }}
                    />
                  </div>
                </>
              ) : (
                <p className="text-gray-500">Nível máximo disponível!</p>
              )}
            </div>
          </div>
        </div>

        {/* Info Box */}
        <div className="mb-8 p-6 rounded-3xl bg-gradient-to-r from-blue-900/20 to-purple-900/20 border-2 border-blue-500/30">
          <h3 className="text-xl mb-4 flex items-center gap-2">
            📊 Como Funciona a Progressão
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-300">
            <div>
              <strong className="text-blue-400">• Nível 1→2:</strong> 1 vitória (total: 1)
              <br />
              <strong className="text-blue-400">• Nível 2→3:</strong> 2 vitórias (total: 3)
              <br />
              <strong className="text-blue-400">• Nível 3→4:</strong> 3 vitórias (total: 6)
              <br />
              <strong className="text-blue-400">• Nível 4→5:</strong> 4 vitórias (total: 10)
            </div>
            <div>
              <strong className="text-purple-400">• Diversidade:</strong> Avatares masculinos e femininos
              <br />
              <strong className="text-purple-400">• Habilidades:</strong> Desbloqueie poderes especiais
              <br />
              <strong className="text-purple-400">• Recompensas:</strong> Moedas e bônus
              <br />
              <strong className="text-yellow-400">• Níveis 1-5:</strong> Disponíveis agora!
            </div>
          </div>
        </div>

        {/* Avatar Progression Component */}
        <AvatarProgression
          currentWins={currentWins}
          gender={gender}
          onGenderChange={setGender}
        />

        {/* Level Up Modal */}
        {levelUpData && (
          <LevelUpModal
            isOpen={showLevelUp}
            onClose={() => setShowLevelUp(false)}
            newLevel={levelUpData.level}
            avatarName={levelUpData.name}
            specialAbility={levelUpData.specialAbility}
            reward={levelUpData.reward}
            gender={gender}
          />
        )}

        {/* Future Levels Preview */}
        <div className="mt-12 p-8 rounded-3xl bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-gray-700">
          <h2 className="text-3xl mb-6 text-center">🔮 Avatares Futuros (Em Desenvolvimento)</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { level: '6-10', male: 'Aristeu', female: 'Agnodice', color: 'from-gray-300 to-gray-500' },
              { level: '11-15', male: 'Jasão', female: 'Helena de Troia', color: 'from-yellow-400 to-yellow-600' },
              { level: '16-20', male: 'Etíope', female: 'Princesa Andrômeda', color: 'from-emerald-400 to-emerald-600' },
              { level: '21-25', male: 'Actéon', female: 'Friné', color: 'from-purple-400 to-purple-600', ability: 'Duplica Moedas' },
              { level: '26-30', male: 'Mêmnon', female: 'Arete de Cirene', color: 'from-red-400 to-red-600', ability: '+15% Força Exatas', reward: '10k' }
            ].map((tier) => (
              <div key={tier.level} className="p-4 rounded-2xl bg-gray-900/50 border border-gray-700 opacity-60">
                <div className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${tier.color} text-white text-xs mb-3`}>
                  Nível {tier.level}
                </div>
                <p className="text-sm mb-1">♂️ {tier.male}</p>
                <p className="text-sm text-gray-500 mb-2">♀️ {tier.female}</p>
                {tier.ability && (
                  <p className="text-xs text-yellow-400">⚡ {tier.ability}</p>
                )}
                {tier.reward && (
                  <p className="text-xs text-green-400">🏆 {tier.reward}</p>
                )}
              </div>
            ))}
          </div>

          <p className="text-center text-gray-500 mt-6">
            Continue jogando e acumulando vitórias! Os avatares lendários estão chegando...
          </p>
        </div>
      </div>
    </div>
  );
}
