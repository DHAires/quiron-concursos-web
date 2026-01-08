import React, { useState, useEffect } from 'react';
import { ArrowLeft, User, BarChart3, Package, Trophy, Settings, Zap } from 'lucide-react';
import { ProfilePersonalData } from './ProfilePersonalData';
import { ProfileStats } from './ProfileStats';
import { ProfileInventory } from './ProfileInventory';
import { ProfileConfig } from './ProfileConfig';
import { projectId, publicAnonKey } from '../utils/supabase/info';

type ProfileTab = 'dados' | 'stats' | 'inventory' | 'ranking' | 'config';

interface EnergyProgress {
  earned: number;
  total: number;
  fields: Record<string, boolean>;
}

export function ProfilePage({ onBack, onLogout }: { onBack: () => void; onLogout?: () => void }) {
  const [activeTab, setActiveTab] = useState<ProfileTab>('dados');
  const [energyProgress, setEnergyProgress] = useState<EnergyProgress>({
    earned: 0,
    total: 9,
    fields: {},
  });

  const tabs = [
    {
      id: 'dados' as ProfileTab,
      label: 'Meus Dados',
      icon: User,
      color: 'from-blue-600 to-blue-500',
      iconColor: 'text-blue-400',
      bgActive: 'bg-blue-500/20',
      borderActive: 'border-blue-500',
    },
    {
      id: 'stats' as ProfileTab,
      label: 'Estatísticas',
      icon: BarChart3,
      color: 'from-purple-600 to-purple-500',
      iconColor: 'text-purple-400',
      bgActive: 'bg-purple-500/20',
      borderActive: 'border-purple-500',
    },
    {
      id: 'inventory' as ProfileTab,
      label: 'Inventário',
      icon: Package,
      color: 'from-yellow-600 to-yellow-500',
      iconColor: 'text-yellow-400',
      bgActive: 'bg-yellow-500/20',
      borderActive: 'border-yellow-500',
    },
    {
      id: 'ranking' as ProfileTab,
      label: 'Ranking',
      icon: Trophy,
      color: 'from-amber-600 to-amber-500',
      iconColor: 'text-amber-400',
      bgActive: 'bg-amber-500/20',
      borderActive: 'border-amber-500',
    },
    {
      id: 'config' as ProfileTab,
      label: 'Configuração',
      icon: Settings,
      color: 'from-gray-600 to-gray-500',
      iconColor: 'text-gray-400',
      bgActive: 'bg-gray-500/20',
      borderActive: 'border-gray-500',
    },
  ];

  useEffect(() => {
    loadEnergyProgress();
  }, []);

  const loadEnergyProgress = async () => {
    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-50734795/profile/energy-progress`,
        {
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
          },
        }
      );

      const data = await response.json();
      if (data.progress) {
        setEnergyProgress(data.progress);
      }
    } catch (error) {
      console.error('Error loading energy progress:', error);
    }
  };

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    } else {
      // Fallback se onLogout não for fornecido
      localStorage.removeItem('quiron_session');
      console.log('🚪 Sessão encerrada - redirecionando...');
      onBack();
    }
  };

  const currentTab = tabs.find(t => t.id === activeTab);
  const progressPercentage = (energyProgress.earned / energyProgress.total) * 100;

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Voltar ao Dashboard
          </button>

          <div className="flex items-center gap-6">
            {/* Avatar */}
            <div className="relative">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-red-600 to-orange-600 flex items-center justify-center shadow-lg shadow-red-500/50">
                <User className="w-10 h-10 text-white" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-green-500 border-2 border-black" />
            </div>

            {/* Title */}
            <div className="flex-1">
              <h1 className="text-4xl mb-1">Meu Perfil</h1>
              <p className="text-gray-400">Gerencie suas informações e configurações</p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 mb-8">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative p-3 rounded-xl border-2 transition-all hover:scale-[1.02] ${
                  isActive
                    ? `${tab.bgActive} ${tab.borderActive}`
                    : 'bg-gray-900/50 border-gray-700 hover:border-gray-600'
                }`}
              >
                <tab.icon
                  className={`w-5 h-5 mx-auto mb-1 ${
                    isActive ? tab.iconColor : 'text-gray-400'
                  }`}
                />
                <div className={`text-xs ${isActive ? 'text-white' : 'text-gray-400'}`}>
                  {tab.label}
                </div>
              </button>
            );
          })}
        </div>

        {/* Energy Card */}
        <div className="mb-8 bg-gradient-to-br from-yellow-900/20 via-orange-900/20 to-red-900/20 border-2 border-yellow-500/30 rounded-3xl p-6">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-2xl bg-yellow-500/20 flex items-center justify-center flex-shrink-0">
              <Zap className="w-8 h-8 text-yellow-400" />
            </div>

            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <h3 className="text-xl text-yellow-400 mb-1">Pontos de Energia Ganhos</h3>
                  <p className="text-sm text-gray-300">Complete campos opcionais para ganhar energia</p>
                </div>
                <div className="text-right">
                  <div className="text-5xl text-yellow-400">{energyProgress.earned}</div>
                  <div className="text-sm text-gray-400">/ {energyProgress.total} pontos</div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="relative h-3 bg-gray-800 rounded-full overflow-hidden">
                <div
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-yellow-500 to-orange-500 transition-all duration-500"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>

              {/* Info */}
              <p className="text-xs text-gray-400 mt-2">
                ⚡ Use energia no Chat IA Prometheus, Game Épico e mais!
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div>
          {activeTab === 'dados' && (
            <ProfilePersonalData onEnergyUpdate={loadEnergyProgress} />
          )}
          {activeTab === 'stats' && <ProfileStats />}
          {activeTab === 'inventory' && <ProfileInventory />}
          {activeTab === 'ranking' && (
            <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-gray-700 rounded-3xl p-8 text-center">
              <Trophy className="w-16 h-16 text-amber-400 mx-auto mb-4" />
              <h3 className="text-2xl mb-2">Rankings</h3>
              <p className="text-gray-400 mb-6">
                Veja suas estatísticas de ranking na página principal de Rankings
              </p>
              <button
                onClick={onBack}
                className="px-6 py-3 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-600 rounded-xl transition-all"
              >
                Ir para Rankings
              </button>
            </div>
          )}
          {activeTab === 'config' && <ProfileConfig onLogout={handleLogout} />}
        </div>
      </div>
    </div>
  );
}