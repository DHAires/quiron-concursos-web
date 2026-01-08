import React, { useState, useEffect } from 'react';
import { Users, Crown, Check, X, Loader, Swords, Clock, AlertCircle } from 'lucide-react';
import { useMultiplayer } from '../hooks/useMultiplayer';

interface MultiplayerLobbyProps {
  selectedArea: string;
  selectedSubjects: string[];
  userId: string;
  userName: string;
  userEnergy: number;
  onBack: () => void;
  onStartGame: (roomId: string, players: any[]) => void;
}

export function MultiplayerLobby({ 
  selectedArea, 
  selectedSubjects, 
  userId,
  userName,
  userEnergy,
  onBack, 
  onStartGame 
}: MultiplayerLobbyProps) {
  const {
    currentRoom,
    loading,
    error,
    findMatch,
    markAsReady,
    leaveRoom,
    clearError
  } = useMultiplayer();

  const [isReady, setIsReady] = useState(false);
  const [countdown, setCountdown] = useState<number | null>(null);

  // Buscar partida ao montar componente
  useEffect(() => {
    console.log('🎮 [LOBBY] Buscando partida...', {
      userId,
      userName,
      area: selectedArea,
      subjects: selectedSubjects
    });

    findMatch(userId, userName, selectedArea, selectedSubjects, userEnergy)
      .catch(err => {
        console.error('❌ [LOBBY] Erro ao buscar partida:', err);
      });

    // Cleanup: sair da sala ao desmontar
    return () => {
      if (currentRoom) {
        leaveRoom(currentRoom.id, userId).catch(console.error);
      }
    };
  }, []); // Executar apenas uma vez

  // Countdown quando sala estiver cheia
  useEffect(() => {
    if (currentRoom && currentRoom.players.length === currentRoom.maxPlayers && countdown === null) {
      console.log('🎯 [LOBBY] Sala cheia! Iniciando countdown...');
      setCountdown(10);
    }
  }, [currentRoom?.players.length, countdown]);

  // Processar countdown
  useEffect(() => {
    if (countdown !== null && countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
    
    if (countdown === 0) {
      console.log('⏰ [LOBBY] Countdown finalizado!');
      // Verificar se todos estão prontos
      const allReady = currentRoom?.players.every(p => p.ready) || false;
      
      if (allReady) {
        console.log('🚀 [LOBBY] Todos prontos! Iniciando partida...');
        if (currentRoom) {
          onStartGame(currentRoom.id, currentRoom.players);
        }
      } else {
        console.log('⚠️ [LOBBY] Nem todos confirmaram. Resetando countdown...');
        setCountdown(null);
      }
    }
  }, [countdown, currentRoom, onStartGame]);

  // Auto-iniciar quando todos estiverem prontos
  useEffect(() => {
    if (currentRoom?.status === 'starting') {
      console.log('🎮 [LOBBY] Status mudou para "starting". Iniciando jogo...');
      onStartGame(currentRoom.id, currentRoom.players);
    }
  }, [currentRoom?.status, onStartGame]);

  const handleToggleReady = async () => {
    if (!currentRoom) return;

    try {
      const newReadyState = !isReady;
      setIsReady(newReadyState);
      
      if (newReadyState) {
        console.log('✅ [LOBBY] Marcando como pronto...');
        await markAsReady(currentRoom.id, userId);
      }
    } catch (err) {
      console.error('❌ [LOBBY] Erro ao marcar pronto:', err);
      setIsReady(!isReady); // Reverter estado
    }
  };

  const handleLeaveRoom = async () => {
    if (!currentRoom) return;

    try {
      console.log('🚪 [LOBBY] Saindo da sala...');
      await leaveRoom(currentRoom.id, userId);
      onBack();
    } catch (err) {
      console.error('❌ [LOBBY] Erro ao sair:', err);
      onBack(); // Voltar mesmo com erro
    }
  };

  // Verificar se usuário atual está pronto
  const currentPlayer = currentRoom?.players.find(p => p.id === userId);
  const userIsReady = currentPlayer?.ready || false;

  const readyCount = currentRoom?.players.filter(p => p.ready).length || 0;
  const allReady = currentRoom && currentRoom.players.length === currentRoom.maxPlayers && readyCount === currentRoom.maxPlayers;

  // Estado de carregamento inicial
  if (!currentRoom && loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <Loader className="w-16 h-16 text-red-500 animate-spin mx-auto mb-4" />
          <h2 className="text-2xl mb-2">Procurando Sala...</h2>
          <p className="text-gray-400">Aguarde enquanto encontramos adversários dignos...</p>
        </div>
      </div>
    );
  }

  // Estado de erro
  if (error && !currentRoom) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center px-4">
        <div className="max-w-md w-full p-8 rounded-3xl bg-red-900/20 border-2 border-red-500/30">
          <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl text-center mb-4">Erro ao Conectar</h2>
          <p className="text-gray-400 text-center mb-6">{error}</p>
          <button
            onClick={() => {
              clearError();
              onBack();
            }}
            className="w-full py-3 rounded-2xl bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 transition-all"
          >
            Voltar
          </button>
        </div>
      </div>
    );
  }

  if (!currentRoom) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-400">Carregando sala...</p>
        </div>
      </div>
    );
  }

  const isHost = currentRoom.hostId === userId;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <button
          onClick={handleLeaveRoom}
          className="mb-6 text-gray-400 hover:text-white transition-colors flex items-center gap-2"
        >
          ← Sair da Sala
        </button>

        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Swords className="w-12 h-12 text-red-500 animate-pulse" />
            <h1 className="text-4xl md:text-5xl bg-gradient-to-r from-red-500 to-purple-500 bg-clip-text text-transparent">
              Sala de Batalha
            </h1>
            <Swords className="w-12 h-12 text-red-500 animate-pulse" />
          </div>
          <p className="text-gray-400">
            Área: <span className="text-red-400">{selectedArea}</span> • Matérias: {selectedSubjects.length}
          </p>
          <p className="text-sm text-gray-500 mt-1">
            ID da Sala: {currentRoom.id.slice(0, 16)}...
          </p>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="mb-6 p-4 rounded-2xl bg-red-900/20 border border-red-500/30 flex items-start gap-3">
            <AlertCircle className="w-6 h-6 text-red-400 flex-shrink-0" />
            <div className="flex-1">
              <p className="text-red-400">{error}</p>
              <button
                onClick={clearError}
                className="text-sm text-gray-400 hover:text-white mt-1"
              >
                Dispensar
              </button>
            </div>
          </div>
        )}

        {/* Lobby Status */}
        <div className="mb-8 p-6 rounded-3xl bg-gradient-to-r from-red-900/20 to-purple-900/20 border-2 border-red-500/30">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Users className="w-8 h-8 text-red-400" />
              <div>
                <h3 className="text-xl">
                  {currentRoom.players.length === currentRoom.maxPlayers ? 'Sala Completa!' : 'Procurando Heróis...'}
                </h3>
                <p className="text-sm text-gray-400">
                  {currentRoom.players.length}/{currentRoom.maxPlayers} jogadores • {readyCount} confirmados
                </p>
              </div>
            </div>
            
            {countdown !== null && (
              <div className="flex items-center gap-3">
                <Clock className="w-6 h-6 text-yellow-400 animate-pulse" />
                <div className="text-center">
                  <div className="text-3xl text-yellow-400">{countdown}s</div>
                  <div className="text-xs text-gray-400">para confirmar</div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Warning */}
        {countdown !== null && !userIsReady && (
          <div className="mb-6 p-4 rounded-2xl bg-yellow-900/20 border border-yellow-500/30 flex items-start gap-3 animate-pulse-slow">
            <div className="w-6 h-6 rounded-full bg-yellow-500 flex items-center justify-center flex-shrink-0">
              !
            </div>
            <div>
              <p className="text-yellow-400">
                <strong>Atenção!</strong> Você tem {countdown} segundos para confirmar sua participação.
              </p>
              <p className="text-sm text-gray-400 mt-1">
                Jogadores que não confirmarem serão removidos da sala.
              </p>
            </div>
          </div>
        )}

        {/* Players Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {currentRoom.players.map((player, index) => {
            const playerIsHost = player.id === currentRoom.hostId;
            const playerIsCurrentUser = player.id === userId;

            return (
              <div
                key={player.id}
                className={`relative p-6 rounded-2xl border-2 transition-all ${
                  player.ready 
                    ? 'border-green-500 bg-green-900/20' 
                    : 'border-gray-700 bg-gray-900/50'
                }`}
              >
                {/* Host Crown */}
                {playerIsHost && (
                  <div className="absolute top-2 right-2">
                    <Crown className="w-5 h-5 text-yellow-400" />
                  </div>
                )}

                <div className="flex items-center gap-4">
                  {/* Avatar */}
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center text-3xl ${
                    player.ready ? 'bg-green-600' : 'bg-gray-700'
                  }`}>
                    {player.avatar || '🦸'}
                  </div>

                  {/* Info */}
                  <div className="flex-1">
                    <h3 className="text-xl mb-1">
                      {player.name}
                      {playerIsCurrentUser && ' (Você)'}
                      {playerIsHost && ' 👑'}
                    </h3>
                    <div className="flex items-center gap-2">
                      {player.ready ? (
                        <div className="flex items-center gap-1 text-green-400 text-sm">
                          <Check className="w-4 h-4" />
                          <span>Pronto!</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-1 text-gray-400 text-sm">
                          <Loader className="w-4 h-4 animate-spin" />
                          <span>Aguardando...</span>
                        </div>
                      )}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      ⚡ Energia: {player.energy}
                    </div>
                  </div>

                  {/* Ready Status */}
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    player.ready ? 'bg-green-500' : 'bg-gray-700'
                  }`}>
                    {player.ready ? (
                      <Check className="w-6 h-6 text-white" />
                    ) : (
                      <X className="w-6 h-6 text-gray-400" />
                    )}
                  </div>
                </div>
              </div>
            );
          })}

          {/* Empty Slots */}
          {[...Array(currentRoom.maxPlayers - currentRoom.players.length)].map((_, index) => (
            <div
              key={`empty-${index}`}
              className="p-6 rounded-2xl border-2 border-dashed border-gray-700 bg-gray-900/30"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center">
                  <Loader className="w-8 h-8 text-gray-600 animate-spin" />
                </div>
                <div>
                  <h3 className="text-gray-600">Procurando...</h3>
                  <p className="text-sm text-gray-700">Aguardando jogador</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        {currentRoom.players.length === currentRoom.maxPlayers && (
          <div className="flex flex-col items-center gap-4">
            <button
              onClick={handleToggleReady}
              disabled={loading}
              className={`w-full max-w-md py-4 rounded-2xl transition-all shadow-lg text-xl flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed ${
                userIsReady
                  ? 'bg-gray-700 hover:bg-gray-600 text-white'
                  : 'bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 shadow-green-500/50 hover:scale-105'
              }`}
            >
              {loading ? (
                <>
                  <Loader className="w-6 h-6 animate-spin" />
                  <span>Processando...</span>
                </>
              ) : userIsReady ? (
                <>
                  <X className="w-6 h-6" />
                  <span>Cancelar Confirmação</span>
                </>
              ) : (
                <>
                  <Check className="w-6 h-6" />
                  <span>Estou Pronto!</span>
                </>
              )}
            </button>

            {allReady && (
              <div className="text-center animate-pulse-slow">
                <p className="text-2xl text-green-400 mb-2">
                  🎉 Todos prontos! A batalha começará em breve...
                </p>
                <p className="text-sm text-gray-400">
                  Preparando arena de combate...
                </p>
              </div>
            )}
          </div>
        )}

        {/* Info Box */}
        <div className="mt-8 p-4 rounded-2xl bg-blue-900/20 border border-blue-500/30">
          <h4 className="text-blue-400 mb-2 flex items-center gap-2">
            <Users className="w-5 h-5" />
            Como funciona
          </h4>
          <ul className="text-sm text-gray-400 space-y-1">
            <li>• Até {currentRoom.maxPlayers} jogadores competem simultaneamente</li>
            <li>• Quando a sala encher, você terá 10 segundos para confirmar</li>
            <li>• Todos devem confirmar para o jogo começar</li>
            <li>• Responda rápido e correto para ganhar mais pontos!</li>
            <li>• O 👑 indica o host da sala</li>
          </ul>
        </div>

        {/* Host Info */}
        {isHost && (
          <div className="mt-4 p-4 rounded-2xl bg-yellow-900/20 border border-yellow-500/30">
            <h4 className="text-yellow-400 mb-2 flex items-center gap-2">
              <Crown className="w-5 h-5" />
              Você é o Host
            </h4>
            <p className="text-sm text-gray-400">
              Você é o líder desta sala. O jogo iniciará automaticamente quando todos confirmarem.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
