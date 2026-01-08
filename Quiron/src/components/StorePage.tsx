import React, { useState } from 'react';
import { ArrowLeft, ShoppingBag, Package, Zap, Gamepad2, ShoppingCart, Sparkles, Flame, Cloud, Bolt, Info } from 'lucide-react';
import { Capacitor } from '@capacitor/core';
import { AdRewardButton } from './AdRewardButton';

interface StorePageProps {
  onBack?: () => void;
  userEnergy?: number;
  onEnergyGained?: (energy: number) => void;
}

type Department = 'physical' | 'virtual' | 'game';

// Avatar biographies
const avatarBios: Record<string, { male: string; female: string }> = {
  '1-5': {
    male: 'Fidípides - Lendário mensageiro ateniense que correu de Maratona a Atenas (42km) para anunciar a vitória contra os persas. Símbolo de resistência e determinação.',
    female: 'Cinisca - Primeira mulher a vencer nos Jogos Olímpicos antigos (corridas de bigas). Princesa espartana que quebrou barreiras e revolucionou o atletismo feminino.'
  },
  '6-10': {
    male: 'Aristeu - Deus menor da apicultura, caça e agricultura. Filho de Apolo, era conhecido por ensinar aos homens artes úteis e práticas de sobrevivência.',
    female: 'Agnodice - Primeira médica grega conhecida. Disfarçou-se de homem para estudar medicina em Atenas quando era proibido às mulheres, salvando inúmeras vidas.'
  },
  '11-15': {
    male: 'Jasão - Líder dos Argonautas na busca pelo Velocino de Ouro. Herói grego famoso por sua coragem, liderança e determinação em conquistas impossíveis.',
    female: 'Helena de Troia - Considerada a mulher mais bela do mundo antigo. Sua história inspirou a Guerra de Troia, tornando-se símbolo de beleza, poder e influência.'
  },
  '16-20': {
    male: 'Etíope - Guerreiro da Etiópia, terra de heróis poderosos. Representa a força, a sabedoria ancestral e a conexão com as antigas civilizações africanas.',
    female: 'Princesa Andrômeda - Salva por Perseu do monstro marinho. Símbolo de beleza, nobreza e resiliência diante de grandes desafios e adversidades.'
  },
  '21-25': {
    male: 'Actéon - Caçador habilidoso transformado em cervo por Ártemis. Representa as consequências do orgulho e a importância do respeito aos deuses e à natureza.',
    female: 'Friné - Célebre cortesã e modelo grega, conhecida por sua beleza extraordinária. Foi absolvida em julgamento ao revelar sua beleza aos juízes atenienses.'
  },
  '26-30': {
    male: 'Mêmnon - Rei da Etiópia e herói da Guerra de Troia. Filho da deusa Aurora, foi considerado um dos maiores guerreiros de sua época, rival de Aquiles.',
    female: 'Arete de Cirene - Filósofa grega que dirigiu a escola platônica de Cirene. Escreveu mais de 40 livros sobre filosofia, ética e pedagogia.'
  },
  '31-35': {
    male: 'Enéias - Herói troiano, ancestral dos romanos. Fugiu de Troia em chamas carregando o pai nas costas, símbolo de piedade filial e dever.',
    female: 'Laskarina Bouboulina - Almirante grega que lutou pela independência. Comandou sua própria frota naval, sendo uma das primeiras mulheres almirantes da história.'
  },
  '36-40': {
    male: 'Asclépio - Deus da medicina e cura. Filho de Apolo, era tão hábil que ressuscitava mortos. Representa conhecimento médico, cura e dedicação à saúde.',
    female: 'Hipátia - Matemática, astrônoma e filósofa de Alexandria. Uma das primeiras mulheres cientistas documentadas, mestre em geometria e astronomia.'
  },
  '41-45': {
    male: 'Aquiles - Maior guerreiro grego da Guerra de Troia. Praticamente invencível em combate, símbolo de coragem, força e excelência em batalha.',
    female: 'Lisímaca - Sacerdotisa de Atena em Atenas por 64 anos. Figura importante na religião grega, conhecida por sua sabedoria, longevidade e dedicação.'
  },
  '46-50': {
    male: 'Hércules - O mais forte de todos os heróis gregos. Realizou os 12 trabalhos impossíveis, símbolo de força sobre-humana, perseverança e redenção.',
    female: 'Aspásia de Mileto - Intelectual e companheira de Péricles. Filósofa e professora de retórica, influenciou profundamente a política e cultura ateniense.'
  }
};

export function StorePage({ onBack, userEnergy, onEnergyGained }: StorePageProps) {
  const [activeDepartment, setActiveDepartment] = useState<Department>('physical');
  const [selectedEffect, setSelectedEffect] = useState<string | null>(null);
  const [expandedBio, setExpandedBio] = useState<string | null>(null);

  const departments = [
    { id: 'physical' as Department, label: 'Produtos Físicos', icon: Package, color: 'blue' },
    { id: 'virtual' as Department, label: 'Produtos Virtuais', icon: Zap, color: 'purple' },
    { id: 'game' as Department, label: 'Produtos Game', icon: Gamepad2, color: 'red' }
  ];

  // Physical products
  const physicalProducts = {
    'Estudo Inteligente': [
      { name: 'Mochila térmica', price: 89, image: '🎒' },
      { name: 'Estojo organizador', price: 39, image: '✏️' },
      { name: 'Garrafa térmica', price: 49, image: '🥤' },
      { name: 'Pasta organizadora', price: 59, image: '📁' }
    ],
    'Conforto': [
      { name: 'Almofada cervical', price: 59, altPrice: { value: 12, bonus: '3 vidas extras' }, image: '💺' },
      { name: 'Suporte celular', price: 29, altPrice: { value: 6, bonus: 'Modo concentração' }, image: '📱' },
      { name: 'Abafador de ruído', price: 79, image: '🎧' },
      { name: 'Luz LED regulável', price: 69, image: '💡' }
    ],
    'Motivação': [
      { name: 'Camiseta "Futuro Servidor" / "Eu sou Quiron"', price: 75, image: '👕' },
      { name: 'Caneta tática "Cajado de Quiron"', price: 50, image: '🖊️' },
      { name: 'Agenda concurseiro', price: 35, image: '📔' },
      { name: 'Kit sobrevivência', price: 99, image: '🎁' }
    ]
  };

  // Virtual products
  const virtualProducts = [
    { name: 'Assistir Anúncio Grátis', price: 0, icon: Zap, color: 'green', quantity: 5, isAd: true },
    { name: 'Pacote 50 Energias', price: 15, icon: Zap, color: 'yellow', quantity: 50 },
    { name: 'Pacote 100 Energias', price: 25, icon: Zap, color: 'yellow', quantity: 100 },
    { name: 'Pacote 250 Energias', price: 50, icon: Zap, color: 'yellow', quantity: 250 },
    { name: '1000 Moedas de Ouro', price: 20, icon: Sparkles, color: 'amber', quantity: 1000 },
    { name: '5000 Moedas de Ouro', price: 80, icon: Sparkles, color: 'amber', quantity: 5000 },
    { name: '10000 Moedas de Ouro', price: 150, icon: Sparkles, color: 'amber', quantity: 10000 },
    { name: 'Apostila Digital - Direito Constitucional', price: 45, icon: Package, color: 'blue', pages: '350 páginas' },
    { name: 'Apostila Digital - Direito Administrativo', price: 45, icon: Package, color: 'blue', pages: '280 páginas' },
    { name: 'Livro Digital - Português para Concursos', price: 60, icon: Package, color: 'purple', pages: '450 páginas' },
    { name: 'Livro Digital - Raciocínio Lógico Completo', price: 55, icon: Package, color: 'purple', pages: '380 páginas' }
  ];

  // Game avatars
  const gameAvatars = [
    { level: '1-5', male: 'Fidípides', female: 'Cinisca', price: 0, unlocked: true },
    { level: '6-10', male: 'Aristeu', female: 'Agnodice', price: 50 },
    { level: '11-15', male: 'Jasão', female: 'Helena de Troia', price: 100 },
    { level: '16-20', male: 'Etíope', female: 'Princesa Andrômeda', price: 150 },
    { level: '21-25', male: 'Actéon', female: 'Friné', price: 200 },
    { level: '26-30', male: 'Mêmnon', female: 'Arete de Cirene', price: 300 },
    { level: '31-35', male: 'Enéias', female: 'Laskarina Bouboulina', price: 400 },
    { level: '36-40', male: 'Asclépio', female: 'Hipátia', price: 500 },
    { level: '41-45', male: 'Aquiles', female: 'Lisímaca', price: 700 },
    { level: '46-50', male: 'Hércules', female: 'Aspásia de Mileto', price: 1000 }
  ];

  // Game effects
  const gameEffects = [
    { name: 'Fogo nos Pés', icon: Flame, color: 'red', price: 150, emoji: '🔥' },
    { name: 'Fumaça Mística', icon: Cloud, color: 'gray', price: 100, emoji: '💨' },
    { name: 'Raio Divino', icon: Bolt, color: 'yellow', price: 200, emoji: '⚡' },
    { name: 'Brilho Celestial', icon: Sparkles, color: 'blue', price: 180, emoji: '✨' }
  ];

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          {onBack && (
            <button
              onClick={onBack}
              className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-xl transition-all"
            >
              <ArrowLeft className="w-5 h-5" />
              Voltar
            </button>
          )}
          
          {/* Cart Button */}
          <button className="ml-auto flex items-center gap-2 px-4 py-2 bg-pink-600 hover:bg-pink-500 border border-pink-500 rounded-xl transition-all">
            <ShoppingCart className="w-5 h-5" />
            <span className="hidden md:inline">Carrinho</span>
            <span className="bg-white text-pink-600 px-2 py-0.5 rounded-full text-xs">0</span>
          </button>
        </div>

        {/* Coming Soon Banner */}
        <div className="mb-6 p-4 bg-gradient-to-r from-pink-600/20 to-purple-600/20 border-2 border-pink-500/40 rounded-xl text-center">
          <div className="flex items-center justify-center gap-2">
            <Sparkles className="w-5 h-5 text-pink-400" />
            <span className="text-pink-400">EM BREVE - Loja em Desenvolvimento</span>
            <Sparkles className="w-5 h-5 text-pink-400" />
          </div>
        </div>

        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <ShoppingBag className="w-12 h-12 text-pink-400" />
            <h1 className="text-4xl">Loja Quiron</h1>
          </div>
          <p className="text-gray-400">Produtos exclusivos para sua jornada de estudos</p>
        </div>

        {/* Department Tabs */}
        <div className="grid grid-cols-3 gap-3 mb-8">
          {departments.map((dept) => {
            const Icon = dept.icon;
            const isActive = activeDepartment === dept.id;
            const colorClasses = {
              blue: 'from-blue-600 to-blue-500',
              purple: 'from-purple-600 to-purple-500',
              red: 'from-red-600 to-red-500'
            };
            
            return (
              <button
                key={dept.id}
                onClick={() => setActiveDepartment(dept.id)}
                className={`p-4 rounded-xl border-2 transition-all ${
                  isActive
                    ? `bg-gradient-to-br ${colorClasses[dept.color]} border-${dept.color}-400`
                    : 'bg-gray-900/50 border-gray-700 hover:border-gray-600'
                }`}
              >
                <Icon className={`w-6 h-6 mx-auto mb-2 ${isActive ? 'text-white' : 'text-gray-400'}`} />
                <div className={`text-sm ${isActive ? 'text-white' : 'text-gray-400'}`}>
                  {dept.label}
                </div>
              </button>
            );
          })}
        </div>

        {/* Physical Products */}
        {activeDepartment === 'physical' && (
          <div className="space-y-8">
            {Object.entries(physicalProducts).map(([collection, products]) => (
              <div key={collection}>
                <h2 className="text-2xl mb-4 text-blue-400">Coleção {collection}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {products.map((product, idx) => (
                    <div
                      key={idx}
                      className="bg-gradient-to-br from-gray-900 to-black border-2 border-gray-700 hover:border-blue-500 rounded-xl p-4 transition-all hover:scale-[1.02]"
                    >
                      <div className="text-5xl text-center mb-3">{product.image}</div>
                      <h3 className="text-sm mb-3 text-center h-10">{product.name}</h3>
                      <div className="text-center">
                        <div className="text-2xl text-blue-400 mb-1">R$ {product.price}</div>
                        {product.altPrice && (
                          <div className="text-xs text-gray-400 mb-2">
                            ou R$ {product.altPrice.value} + {product.altPrice.bonus}
                          </div>
                        )}
                        <button className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg transition-all flex items-center justify-center gap-2">
                          <ShoppingCart className="w-4 h-4" />
                          Comprar
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Virtual Products */}
        {activeDepartment === 'virtual' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {virtualProducts.map((product, idx) => {
              const Icon = product.icon;
              const colorClasses = {
                yellow: 'from-yellow-600 to-yellow-500',
                amber: 'from-amber-600 to-amber-500',
                blue: 'from-blue-600 to-blue-500',
                purple: 'from-purple-600 to-purple-500',
                green: 'from-green-600 to-green-500'
              };
              
              // Card especial para anúncio premiado
              if (product.isAd && Capacitor.isNativePlatform()) {
                return (
                  <div
                    key={idx}
                    className="bg-gradient-to-br from-green-900/40 to-green-800/40 border-2 border-green-500/50 rounded-xl p-6 transition-all hover:scale-[1.02] hover:border-green-400 relative overflow-hidden"
                  >
                    {/* Badge GRÁTIS */}
                    <div className="absolute top-2 right-2 px-3 py-1 bg-green-500 rounded-full text-xs font-bold text-white animate-pulse">
                      100% GRÁTIS
                    </div>

                    {/* Ícone animado */}
                    <div className="flex items-center justify-center mb-4">
                      <div className="relative">
                        <div className="absolute inset-0 bg-green-400/20 rounded-full animate-ping"></div>
                        <div className="relative w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center border-2 border-green-500/50">
                          <Icon className="w-8 h-8 text-green-400 animate-pulse" />
                        </div>
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-center mb-2 text-green-300">{product.name}</h3>
                    <p className="text-center text-sm text-green-200 mb-4">
                      Ganhe +{product.quantity}⚡ assistindo um vídeo curto
                    </p>

                    {/* Botão de anúncio premiado */}
                    <AdRewardButton
                      onEnergyGained={(energy) => {
                        if (onEnergyGained) {
                          onEnergyGained(energy);
                        }
                      }}
                      variant="default"
                      size="lg"
                      showLabel={true}
                      className="w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white font-bold shadow-lg shadow-green-500/50"
                    />

                    <p className="text-center text-xs text-green-300/70 mt-3">
                      ⭐ Ilimitado para usuários gratuitos
                    </p>
                  </div>
                );
              }

              // Cards normais
              return (
                <div
                  key={idx}
                  className={`bg-gradient-to-br ${colorClasses[product.color]} bg-opacity-10 border-2 border-${product.color}-500/30 rounded-xl p-4 transition-all hover:scale-[1.02]`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-12 h-12 rounded-lg bg-${product.color}-500/20 flex items-center justify-center`}>
                      <Icon className={`w-6 h-6 text-${product.color}-400`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm mb-1">{product.name}</h3>
                      {product.quantity && (
                        <div className={`text-xs text-${product.color}-400`}>{product.quantity} unidades</div>
                      )}
                      {product.pages && (
                        <div className={`text-xs text-${product.color}-400`}>{product.pages}</div>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className={`text-2xl text-${product.color}-400`}>R$ {product.price}</div>
                    <button className={`px-4 py-2 bg-${product.color}-600 hover:bg-${product.color}-500 rounded-lg transition-all flex items-center gap-2`}>
                      <ShoppingCart className="w-4 h-4" />
                      Comprar
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Game Products */}
        {activeDepartment === 'game' && (
          <div className="space-y-8">
            {/* Avatars */}
            <div>
              <h2 className="text-2xl mb-4 text-red-400">Avatares Épicos</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {gameAvatars.map((avatar, idx) => (
                  <div
                    key={idx}
                    className={`bg-gradient-to-br from-gray-900 to-black border-2 rounded-xl p-4 transition-all ${
                      avatar.unlocked 
                        ? 'border-green-500 hover:border-green-400' 
                        : 'border-red-500/30 hover:border-red-500'
                    }`}
                  >
                    <div className="flex items-start gap-4 mb-3">
                      <div className="flex-1">
                        <div className="text-xs text-gray-400 mb-1">Níveis {avatar.level}</div>
                        <div className="grid grid-cols-2 gap-2 mb-2">
                          <div className="text-center p-2 bg-blue-500/10 rounded-lg border border-blue-500/30">
                            <div className="text-2xl mb-1">⚔️</div>
                            <div className="text-xs text-blue-400">{avatar.male}</div>
                          </div>
                          <div className="text-center p-2 bg-pink-500/10 rounded-lg border border-pink-500/30">
                            <div className="text-2xl mb-1">🏛️</div>
                            <div className="text-xs text-pink-400">{avatar.female}</div>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        {avatar.unlocked ? (
                          <div className="px-3 py-1 bg-green-500/20 border border-green-500 rounded-lg text-xs text-green-400">
                            GRÁTIS
                          </div>
                        ) : (
                          <div className="text-2xl text-red-400">R$ {avatar.price}</div>
                        )}
                      </div>
                    </div>

                    {/* Biography Toggle */}
                    <button
                      onClick={() => setExpandedBio(expandedBio === avatar.level ? null : avatar.level)}
                      className="w-full mb-3 px-3 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all flex items-center justify-center gap-2 text-sm"
                    >
                      <Info className="w-4 h-4" />
                      {expandedBio === avatar.level ? 'Ocultar' : 'Ver'} Biografias
                    </button>

                    {/* Biography Content */}
                    {expandedBio === avatar.level && (
                      <div className="mb-3 space-y-2">
                        <div className="p-3 bg-blue-500/5 border border-blue-500/20 rounded-lg">
                          <div className="text-xs text-blue-400 mb-1">⚔️ {avatar.male}</div>
                          <div className="text-xs text-gray-300">{avatarBios[avatar.level].male}</div>
                        </div>
                        <div className="p-3 bg-pink-500/5 border border-pink-500/20 rounded-lg">
                          <div className="text-xs text-pink-400 mb-1">🏛️ {avatar.female}</div>
                          <div className="text-xs text-gray-300">{avatarBios[avatar.level].female}</div>
                        </div>
                      </div>
                    )}

                    {!avatar.unlocked && (
                      <button className="w-full px-4 py-2 bg-red-600 hover:bg-red-500 rounded-lg transition-all flex items-center justify-center gap-2">
                        <ShoppingCart className="w-4 h-4" />
                        Comprar Avatar
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Effects */}
            <div>
              <h2 className="text-2xl mb-4 text-red-400">Efeitos Especiais</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {gameEffects.map((effect, idx) => {
                  const Icon = effect.icon;
                  return (
                    <div
                      key={idx}
                      className={`bg-gradient-to-br from-gray-900 to-black border-2 border-${effect.color}-500/30 hover:border-${effect.color}-500 rounded-xl p-4 transition-all hover:scale-[1.02]`}
                    >
                      <div className="text-center mb-3">
                        <div className="text-4xl mb-2">{effect.emoji}</div>
                        <Icon className={`w-8 h-8 mx-auto text-${effect.color}-400`} />
                      </div>
                      <h3 className="text-sm text-center mb-3">{effect.name}</h3>
                      <div className="text-center mb-3">
                        <div className={`text-2xl text-${effect.color}-400`}>R$ {effect.price}</div>
                      </div>
                      <button className={`w-full px-4 py-2 bg-${effect.color}-600 hover:bg-${effect.color}-500 rounded-lg transition-all flex items-center justify-center gap-2`}>
                        <ShoppingCart className="w-4 h-4" />
                        Comprar
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}