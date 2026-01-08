import React from 'react';
import { Package, Trophy, Star, Zap, Crown, Shield, Sword } from 'lucide-react';

export function ProfileInventory() {
  const items = [
    {
      name: 'Avatar Épico: Quíron',
      type: 'Avatar',
      rarity: 'Lendário',
      icon: Crown,
      color: 'from-yellow-600 to-yellow-500',
      iconColor: 'text-yellow-400',
      bgColor: 'bg-yellow-500/20',
      owned: true,
    },
    {
      name: 'Energia Boost x10',
      type: 'Consumível',
      rarity: 'Comum',
      icon: Zap,
      color: 'from-orange-600 to-orange-500',
      iconColor: 'text-orange-400',
      bgColor: 'bg-orange-500/20',
      owned: true,
      quantity: 10,
    },
    {
      name: 'Escudo de Estudos',
      type: 'Item',
      rarity: 'Raro',
      icon: Shield,
      color: 'from-blue-600 to-blue-500',
      iconColor: 'text-blue-400',
      bgColor: 'bg-blue-500/20',
      owned: true,
    },
    {
      name: 'Espada da Sabedoria',
      type: 'Item',
      rarity: 'Épico',
      icon: Sword,
      color: 'from-purple-600 to-purple-500',
      iconColor: 'text-purple-400',
      bgColor: 'bg-purple-500/20',
      owned: false,
    },
    {
      name: 'Troféu de Campeão',
      type: 'Conquista',
      rarity: 'Lendário',
      icon: Trophy,
      color: 'from-amber-600 to-amber-500',
      iconColor: 'text-amber-400',
      bgColor: 'bg-amber-500/20',
      owned: false,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-br from-purple-900/20 to-purple-800/20 border-2 border-purple-500/30 rounded-3xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <Package className="w-6 h-6 text-purple-400" />
          <h2 className="text-2xl text-purple-400">Meu Inventário</h2>
        </div>
        <p className="text-gray-300">
          Gerencie seus itens, avatares, conquistas e recompensas
        </p>
      </div>

      {/* Inventory Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {items.map((item, index) => (
          <div
            key={index}
            className={`relative bg-gradient-to-br ${item.color} bg-opacity-10 border-2 ${
              item.owned ? 'border-gray-600' : 'border-gray-700 opacity-50'
            } rounded-xl p-4 transition-all hover:scale-[1.02]`}
          >
            {/* Rarity Badge */}
            <div
              className={`absolute top-2 right-2 px-2 py-0.5 rounded-full text-xs ${
                item.rarity === 'Lendário'
                  ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/50'
                  : item.rarity === 'Épico'
                  ? 'bg-purple-500/20 text-purple-400 border border-purple-500/50'
                  : item.rarity === 'Raro'
                  ? 'bg-blue-500/20 text-blue-400 border border-blue-500/50'
                  : 'bg-gray-500/20 text-gray-400 border border-gray-500/50'
              }`}
            >
              {item.rarity}
            </div>

            {/* Icon */}
            <div className={`w-12 h-12 rounded-xl ${item.bgColor} flex items-center justify-center mb-3`}>
              <item.icon className={`w-6 h-6 ${item.iconColor}`} />
            </div>

            {/* Info */}
            <div>
              <h3 className={`text-sm mb-1 ${item.iconColor}`}>{item.name}</h3>
              <p className="text-xs text-gray-400 mb-2">{item.type}</p>

              {item.quantity && (
                <div className="flex items-center gap-2 text-xs mb-2">
                  <span className="text-gray-400">Quantidade:</span>
                  <span className={item.iconColor}>{item.quantity}x</span>
                </div>
              )}

              {/* Status */}
              {item.owned ? (
                <div className="mt-2 px-3 py-1 bg-green-500/20 border border-green-500/50 rounded-lg text-xs text-green-400 text-center">
                  ✓ Desbloqueado
                </div>
              ) : (
                <div className="mt-2 px-3 py-1 bg-gray-700/50 border border-gray-600 rounded-lg text-xs text-gray-400 text-center">
                  🔒 Bloqueado
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Empty State for More */}
      <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-gray-700 rounded-3xl p-8 text-center">
        <Star className="w-16 h-16 text-gray-600 mx-auto mb-4" />
        <h3 className="text-2xl text-gray-400 mb-2">Continue Jogando!</h3>
        <p className="text-gray-500">
          Complete desafios e suba no ranking para desbloquear mais itens
        </p>
      </div>
    </div>
  );
}