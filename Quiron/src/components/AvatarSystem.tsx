import React from 'react';
import { Trophy, Sparkles, Lock, Crown, Star, Zap } from 'lucide-react';

export interface AvatarData {
  level: number;
  name: string;
  nameFemale: string;
  requiredWins: number;
  totalWinsNeeded: number; // Acumulado
  specialAbility?: string;
  reward?: string;
  locked: boolean;
  mythologyDescription?: string;
  color?: string;
}

// Sistema de progressão: nível X = X vitórias
const calculateTotalWins = (level: number): number => {
  // Nível 1 = 0 vitórias (inicial)
  // Nível 2 = 1 vitória
  // Nível 3 = 1+2 = 3 vitórias
  // Nível 4 = 1+2+3 = 6 vitórias
  // Fórmula: soma de 1 até (level-1)
  return ((level - 1) * level) / 2;
};

export const avatarLevels: AvatarData[] = [
  {
    level: 1,
    name: 'Fidípides',
    nameFemale: 'Cinisca',
    requiredWins: 0,
    totalWinsNeeded: 0,
    locked: false,
    color: 'bronze',
    mythologyDescription: 'O mensageiro grego que correu de Atenas a Esparta / A primeira mulher a vencer nos Jogos Olímpicos'
  },
  {
    level: 2,
    name: 'Fidípides II',
    nameFemale: 'Cinisca II',
    requiredWins: 1,
    totalWinsNeeded: 1,
    locked: false,
    color: 'bronze'
  },
  {
    level: 3,
    name: 'Fidípides III',
    nameFemale: 'Cinisca III',
    requiredWins: 2,
    totalWinsNeeded: 3,
    locked: false,
    color: 'bronze'
  },
  {
    level: 4,
    name: 'Fidípides IV',
    nameFemale: 'Cinisca IV',
    requiredWins: 3,
    totalWinsNeeded: 6,
    locked: false,
    color: 'bronze'
  },
  {
    level: 5,
    name: 'Fidípides V',
    nameFemale: 'Cinisca V',
    requiredWins: 4,
    totalWinsNeeded: 10,
    locked: false,
    color: 'bronze'
  },
  {
    level: 6,
    name: 'Aristeu',
    nameFemale: 'Agnodice',
    requiredWins: 5,
    totalWinsNeeded: 15,
    locked: true,
    color: 'silver',
    mythologyDescription: 'O imortal guardião das abelhas / A primeira médica de Atenas'
  },
  {
    level: 10,
    name: 'Aristeu X',
    nameFemale: 'Agnodice X',
    requiredWins: 9,
    totalWinsNeeded: 45,
    locked: true,
    color: 'silver'
  },
  {
    level: 11,
    name: 'Jasão',
    nameFemale: 'Helena de Troia',
    requiredWins: 10,
    totalWinsNeeded: 55,
    locked: true,
    color: 'gold',
    mythologyDescription: 'O líder dos Argonautas / A mulher mais bela do mundo'
  },
  {
    level: 15,
    name: 'Jasão XV',
    nameFemale: 'Helena XV',
    requiredWins: 14,
    totalWinsNeeded: 105,
    locked: true,
    color: 'gold'
  },
  {
    level: 16,
    name: 'Etíope',
    nameFemale: 'Princesa Andrômeda',
    requiredWins: 15,
    totalWinsNeeded: 120,
    locked: true,
    color: 'emerald',
    mythologyDescription: 'O guerreiro da Etiópia / A princesa salva por Perseu'
  },
  {
    level: 20,
    name: 'Etíope XX',
    nameFemale: 'Andrômeda XX',
    requiredWins: 19,
    totalWinsNeeded: 190,
    locked: true,
    color: 'emerald'
  },
  {
    level: 21,
    name: 'Actéon',
    nameFemale: 'Friné',
    requiredWins: 20,
    totalWinsNeeded: 210,
    locked: true,
    specialAbility: 'Duplica Moedas',
    color: 'purple',
    mythologyDescription: 'O caçador transformado em cervo / A cortesã mais rica da Grécia'
  },
  {
    level: 25,
    name: 'Actéon XXV',
    nameFemale: 'Friné XXV',
    requiredWins: 24,
    totalWinsNeeded: 300,
    locked: true,
    specialAbility: 'Duplica Moedas',
    color: 'purple'
  },
  {
    level: 26,
    name: 'Mêmnon',
    nameFemale: 'Arete de Cirene',
    requiredWins: 25,
    totalWinsNeeded: 325,
    locked: true,
    specialAbility: '+15% Força Exatas',
    reward: '10.000 Moedas',
    color: 'red',
    mythologyDescription: 'O rei guerreiro da Etiópia / A filósofa e matemática'
  },
  {
    level: 30,
    name: 'Mêmnon XXX',
    nameFemale: 'Arete XXX',
    requiredWins: 29,
    totalWinsNeeded: 435,
    locked: true,
    specialAbility: '+15% Força Exatas',
    reward: '10.000 Moedas',
    color: 'red'
  },
  {
    level: 31,
    name: 'Enéias',
    nameFemale: 'Laskarina Bouboulina',
    requiredWins: 30,
    totalWinsNeeded: 465,
    locked: true,
    color: 'cyan',
    mythologyDescription: 'O herói troiano fundador de Roma / A almirante da revolução grega'
  },
  {
    level: 35,
    name: 'Enéias XXXV',
    nameFemale: 'Laskarina XXXV',
    requiredWins: 34,
    totalWinsNeeded: 595,
    locked: true,
    color: 'cyan'
  },
  {
    level: 36,
    name: 'Asclépio',
    nameFemale: 'Hipátia',
    requiredWins: 35,
    totalWinsNeeded: 630,
    locked: true,
    color: 'pink',
    mythologyDescription: 'O deus da medicina / A filósofa e matemática de Alexandria'
  },
  {
    level: 40,
    name: 'Asclépio XL',
    nameFemale: 'Hipátia XL',
    requiredWins: 39,
    totalWinsNeeded: 780,
    locked: true,
    color: 'pink'
  },
  {
    level: 41,
    name: 'Aquiles',
    nameFemale: 'Lisímaca',
    requiredWins: 40,
    totalWinsNeeded: 820,
    locked: true,
    color: 'indigo',
    mythologyDescription: 'O maior guerreiro grego / A heroína que defendeu Atenas'
  },
  {
    level: 45,
    name: 'Aquiles XLV',
    nameFemale: 'Lisímaca XLV',
    requiredWins: 44,
    totalWinsNeeded: 990,
    locked: true,
    color: 'indigo'
  },
  {
    level: 46,
    name: 'Hércules',
    nameFemale: 'Aspásia de Mileto',
    requiredWins: 45,
    totalWinsNeeded: 1035,
    locked: true,
    color: 'yellow',
    mythologyDescription: 'O semideus dos 12 trabalhos / A filósofa e conselheira de Péricles'
  },
  {
    level: 50,
    name: 'Hércules L',
    nameFemale: 'Aspásia L',
    requiredWins: 49,
    totalWinsNeeded: 1225,
    locked: true,
    specialAbility: 'Força Máxima',
    reward: '50.000 Moedas',
    color: 'yellow',
    mythologyDescription: 'O HERÓI SUPREMO / A MESTRA SUPREMA'
  }
];

interface AvatarCardProps {
  avatar: AvatarData;
  gender: 'male' | 'female';
  currentWins: number;
  isCurrentLevel?: boolean;
  onClick?: () => void;
}

export function AvatarCard({ avatar, gender, currentWins, isCurrentLevel, onClick }: AvatarCardProps) {
  const name = gender === 'male' ? avatar.name : avatar.nameFemale;
  const progress = avatar.locked ? 0 : Math.min(100, (currentWins / avatar.totalWinsNeeded) * 100);
  
  const colorClasses: Record<string, any> = {
    bronze: {
      gradient: 'from-orange-600 to-orange-800',
      border: 'border-orange-500',
      bg: 'bg-orange-900/20',
      text: 'text-orange-400'
    },
    silver: {
      gradient: 'from-gray-300 to-gray-500',
      border: 'border-gray-400',
      bg: 'bg-gray-900/20',
      text: 'text-gray-300'
    },
    gold: {
      gradient: 'from-yellow-400 to-yellow-600',
      border: 'border-yellow-500',
      bg: 'bg-yellow-900/20',
      text: 'text-yellow-400'
    },
    emerald: {
      gradient: 'from-emerald-400 to-emerald-600',
      border: 'border-emerald-500',
      bg: 'bg-emerald-900/20',
      text: 'text-emerald-400'
    },
    purple: {
      gradient: 'from-purple-400 to-purple-600',
      border: 'border-purple-500',
      bg: 'bg-purple-900/20',
      text: 'text-purple-400'
    },
    red: {
      gradient: 'from-red-400 to-red-600',
      border: 'border-red-500',
      bg: 'bg-red-900/20',
      text: 'text-red-400'
    },
    cyan: {
      gradient: 'from-cyan-400 to-cyan-600',
      border: 'border-cyan-500',
      bg: 'bg-cyan-900/20',
      text: 'text-cyan-400'
    },
    pink: {
      gradient: 'from-pink-400 to-pink-600',
      border: 'border-pink-500',
      bg: 'bg-pink-900/20',
      text: 'text-pink-400'
    },
    indigo: {
      gradient: 'from-indigo-400 to-indigo-600',
      border: 'border-indigo-500',
      bg: 'bg-indigo-900/20',
      text: 'text-indigo-400'
    },
    yellow: {
      gradient: 'from-yellow-300 to-yellow-500',
      border: 'border-yellow-400',
      bg: 'bg-yellow-900/20',
      text: 'text-yellow-300'
    }
  };

  const colors = colorClasses[avatar.color || 'bronze'];

  return (
    <div
      onClick={!avatar.locked ? onClick : undefined}
      className={`relative p-6 rounded-3xl border-2 transition-all ${
        avatar.locked 
          ? 'bg-gray-900/50 border-gray-700 opacity-60 cursor-not-allowed' 
          : `${colors.bg} ${colors.border} ${isCurrentLevel ? 'ring-4 ring-yellow-400 ring-opacity-50 shadow-2xl shadow-yellow-500/50 scale-105' : 'hover:scale-105 cursor-pointer'}`
      }`}
    >
      {/* Lock Icon */}
      {avatar.locked && (
        <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center border-2 border-gray-600">
          <Lock className="w-5 h-5 text-gray-500" />
        </div>
      )}

      {/* Current Level Badge */}
      {isCurrentLevel && !avatar.locked && (
        <div className="absolute -top-3 -right-3 px-4 py-1 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 shadow-lg flex items-center gap-2 animate-pulse-slow">
          <Crown className="w-4 h-4 text-white" />
          <span className="text-sm text-white">Atual</span>
        </div>
      )}

      {/* Level */}
      <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${
        avatar.locked ? 'bg-gray-800' : `bg-gradient-to-r ${colors.gradient}`
      } mb-4`}>
        <Star className="w-4 h-4 text-white" />
        <span className="text-sm text-white">Nível {avatar.level}</span>
      </div>

      {/* Avatar Name */}
      <h3 className={`text-2xl mb-2 ${avatar.locked ? 'text-gray-500' : colors.text}`}>
        {name}
      </h3>

      {/* Description */}
      {avatar.mythologyDescription && !avatar.locked && (
        <p className="text-xs text-gray-400 mb-4 line-clamp-2">
          {avatar.mythologyDescription}
        </p>
      )}

      {/* Special Abilities */}
      {avatar.specialAbility && (
        <div className="mb-3 flex items-center gap-2">
          <Zap className={`w-4 h-4 ${avatar.locked ? 'text-gray-600' : 'text-yellow-400'}`} />
          <span className={`text-sm ${avatar.locked ? 'text-gray-600' : 'text-yellow-400'}`}>
            {avatar.specialAbility}
          </span>
        </div>
      )}

      {/* Reward */}
      {avatar.reward && (
        <div className="mb-3 flex items-center gap-2">
          <Trophy className={`w-4 h-4 ${avatar.locked ? 'text-gray-600' : 'text-green-400'}`} />
          <span className={`text-sm ${avatar.locked ? 'text-gray-600' : 'text-green-400'}`}>
            {avatar.reward}
          </span>
        </div>
      )}

      {/* Progress Bar */}
      {!avatar.locked && (
        <div className="mt-4">
          <div className="flex justify-between text-xs mb-2">
            <span className="text-gray-400">
              {currentWins}/{avatar.totalWinsNeeded} vitórias
            </span>
            <span className={colors.text}>
              {Math.round(progress)}%
            </span>
          </div>
          <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
            <div
              className={`h-full bg-gradient-to-r ${colors.gradient} transition-all duration-500`}
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}

      {/* Locked Info */}
      {avatar.locked && (
        <div className="mt-4 text-center">
          <p className="text-xs text-gray-500">
            Desbloqueie com {avatar.totalWinsNeeded} vitórias totais
          </p>
        </div>
      )}
    </div>
  );
}

interface AvatarProgressionProps {
  currentWins: number;
  gender: 'male' | 'female';
  onGenderChange?: (gender: 'male' | 'female') => void;
}

export function AvatarProgression({ currentWins, gender, onGenderChange }: AvatarProgressionProps) {
  // Encontra o nível atual baseado nas vitórias
  const currentLevel = avatarLevels.reduce((level, avatar) => {
    if (!avatar.locked && currentWins >= avatar.totalWinsNeeded) {
      return avatar.level;
    }
    return level;
  }, 1);

  const currentAvatar = avatarLevels.find(a => a.level === currentLevel);
  const nextAvatar = avatarLevels.find(a => a.level === currentLevel + 1);

  return (
    <div className="space-y-8">
      {/* Gender Selector */}
      {onGenderChange && (
        <div className="flex justify-center gap-4">
          <button
            onClick={() => onGenderChange('male')}
            className={`px-6 py-3 rounded-2xl border-2 transition-all ${
              gender === 'male'
                ? 'bg-blue-600 border-blue-500 shadow-lg shadow-blue-500/50'
                : 'bg-gray-800 border-gray-700 hover:border-gray-600'
            }`}
          >
            ♂️ Masculino
          </button>
          <button
            onClick={() => onGenderChange('female')}
            className={`px-6 py-3 rounded-2xl border-2 transition-all ${
              gender === 'female'
                ? 'bg-pink-600 border-pink-500 shadow-lg shadow-pink-500/50'
                : 'bg-gray-800 border-gray-700 hover:border-gray-600'
            }`}
          >
            ♀️ Feminino
          </button>
        </div>
      )}

      {/* Current Progress */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gray-800 border-2 border-gray-700 mb-4">
          <Trophy className="w-6 h-6 text-yellow-400" />
          <div className="text-left">
            <div className="text-xs text-gray-400">Vitórias Totais</div>
            <div className="text-2xl">{currentWins}</div>
          </div>
        </div>

        {nextAvatar && !nextAvatar.locked && (
          <p className="text-gray-400">
            Faltam <span className="text-yellow-400">{nextAvatar.totalWinsNeeded - currentWins}</span> vitórias para o nível {nextAvatar.level}
          </p>
        )}
      </div>

      {/* Avatar Grid - Showing only unlocked (1-5) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {avatarLevels.filter(a => a.level <= 5).map((avatar) => (
          <AvatarCard
            key={avatar.level}
            avatar={avatar}
            gender={gender}
            currentWins={currentWins}
            isCurrentLevel={avatar.level === currentLevel}
          />
        ))}
      </div>

      {/* Coming Soon Message */}
      <div className="mt-8 p-6 rounded-3xl bg-gradient-to-r from-purple-900/20 to-blue-900/20 border-2 border-purple-500/30 text-center">
        <Sparkles className="w-12 h-12 mx-auto mb-4 text-purple-400" />
        <h3 className="text-2xl mb-2">Mais Avatares em Breve!</h3>
        <p className="text-gray-400 mb-4">
          Estamos criando avatares épicos para os níveis 6-50. Continue jogando e acumulando vitórias!
        </p>
        <div className="flex items-center justify-center gap-8 text-sm text-gray-500">
          <div>Nível 6-10: Aristeu/Agnodice 🔒</div>
          <div>Nível 11-15: Jasão/Helena 🔒</div>
          <div>Nível 16-20: Etíope/Andrômeda 🔒</div>
        </div>
      </div>
    </div>
  );
}
