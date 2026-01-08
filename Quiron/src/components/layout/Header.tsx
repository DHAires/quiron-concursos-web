import React from 'react';
import { Menu, Trophy, LogIn, UserPlus, Zap, LogOut, User } from 'lucide-react';
import { Capacitor } from '@capacitor/core';
import { AdRewardButton } from '../AdRewardButton';

interface HeaderProps {
  onMenuClick?: () => void;
  onLoginClick?: () => void;
  onRegisterClick?: () => void;
  onLogoutClick?: () => void;
  user?: any;
  userEnergy?: number;
  onEnergyGained?: (energy: number) => void;
}

export function Header({ 
  onMenuClick, 
  onLoginClick, 
  onRegisterClick,
  onLogoutClick,
  user,
  userEnergy = 10,
  onEnergyGained 
}: HeaderProps) {
  return (
    <header className="bg-black border-b border-gray-800 sticky top-0 z-30">
      <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4 flex items-center justify-between gap-2">
        {/* Left: Hamburger + Logo + Title */}
        <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
          {/* Hamburger Menu Button */}
          {onMenuClick && (
            <button
              onClick={onMenuClick}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-red-600 hover:bg-red-500 flex items-center justify-center shadow-lg shadow-red-500/50 transition-all hover:scale-105 flex-shrink-0"
              aria-label="Menu"
            >
              <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </button>
          )}
          
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-red-600 flex items-center justify-center shadow-lg shadow-red-500/50 flex-shrink-0">
            <Trophy className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
          </div>
          <div className="min-w-0">
            <h1 className="text-base sm:text-xl md:text-2xl text-red-500 font-bold truncate">
              QUIRON CONCURSOS
            </h1>
            <p className="text-[10px] sm:text-xs text-gray-400 hidden sm:block">O Centauro da Aprovação</p>
          </div>
        </div>

        {/* Right: Energy + Ads + Auth Buttons */}
        <div className="flex items-center gap-2 flex-shrink-0">
          {/* Energy Counter */}
          <div className="flex items-center gap-1 bg-yellow-500/20 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full border border-yellow-500/30">
            <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-yellow-400" />
            <span className="text-yellow-300 font-bold text-xs sm:text-sm">{userEnergy}</span>
          </div>

          {/* Ad Reward Button (apenas em plataformas nativas) */}
          {Capacitor.isNativePlatform() && onEnergyGained && (
            <AdRewardButton
              onEnergyGained={onEnergyGained}
              variant="outline"
              size="sm"
              showLabel={false}
              className="border-yellow-500/50 hover:border-yellow-400 hover:bg-yellow-500/10"
            />
          )}
          
          {/* Auth Buttons - Condicional */}
          {!user ? (
            <>
              {/* Login Button */}
              {onLoginClick && (
                <button
                  onClick={onLoginClick}
                  className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full bg-transparent border-2 border-red-500/80 hover:border-red-400 hover:bg-red-500/10 transition-all text-sm"
                >
                  <LogIn className="w-4 h-4" />
                  <span className="hidden sm:inline">Entrar</span>
                </button>
              )}
              
              {/* Register Button */}
              {onRegisterClick && (
                <button
                  onClick={onRegisterClick}
                  className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full bg-red-600 hover:bg-red-500 transition-all shadow-lg shadow-red-500/50 text-sm"
                >
                  <UserPlus className="w-4 h-4" />
                  <span className="hidden sm:inline">Cadastre-se</span>
                </button>
              )}
            </>
          ) : (
            <>
              {/* User Info */}
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-red-600/20 border border-red-500/30">
                <User className="w-3.5 h-3.5 text-red-400" />
                <span className="text-xs text-red-300 max-w-[100px] truncate">{user.name}</span>
              </div>
              
              {/* Logout Button */}
              {onLogoutClick && (
                <button
                  onClick={onLogoutClick}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-gray-800 hover:bg-gray-700 border border-gray-700 transition-all text-xs"
                  title="Sair"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Sair</span>
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </header>
  );
}