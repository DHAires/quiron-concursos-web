import React, { useState } from 'react';
import { Settings, Bell, Lock, Eye, Globe, Volume2, Moon, Sun, LogOut, AlertTriangle, X, KeyRound, UserX, Trash2 } from 'lucide-react';

interface ProfileConfigProps {
  onLogout?: () => void;
}

export function ProfileConfig({ onLogout }: ProfileConfigProps) {
  const [config, setConfig] = useState({
    notifications: true,
    emailAlerts: true,
    soundEffects: true,
    darkMode: true,
    language: 'pt-br',
    publicProfile: false,
  });

  const [showChangePasswordModal, setShowChangePasswordModal] = useState(false);
  const [showDeactivateModal, setShowDeactivateModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const handleChangePassword = () => {
    if (!passwordData.currentPassword || !passwordData.newPassword || !passwordData.confirmPassword) {
      alert('Preencha todos os campos!');
      return;
    }

    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert('As senhas não coincidem!');
      return;
    }

    if (passwordData.newPassword.length < 6) {
      alert('A senha deve ter pelo menos 6 caracteres!');
      return;
    }

    // TODO: Implement password change API call
    console.log('Alterando senha...');
    alert('Senha alterada com sucesso!');
    setShowChangePasswordModal(false);
    setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
  };

  const handleDeactivateAccount = () => {
    // TODO: Implement deactivate account API call
    console.log('Desativando conta...');
    alert('Conta desativada! Você pode reativá-la fazendo login novamente.');
    setShowDeactivateModal(false);
    if (onLogout) onLogout();
  };

  const handleDeleteAccount = () => {
    // TODO: Implement delete account API call
    console.log('Excluindo conta permanentemente...');
    alert('Conta excluída permanentemente! Todos os seus dados foram removidos.');
    setShowDeleteModal(false);
    if (onLogout) onLogout();
  };

  const handleLogout = () => {
    console.log('Saindo da conta...');
    localStorage.removeItem('quiron_session');
    setShowLogoutModal(false);
    if (onLogout) onLogout();
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-gray-700 rounded-3xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <Settings className="w-6 h-6 text-gray-400" />
          <h2 className="text-2xl">Configurações</h2>
        </div>
        <p className="text-gray-400">Personalize sua experiência no Quiron Concursos</p>
      </div>

      {/* Notificações */}
      <div className="bg-gradient-to-br from-blue-900/20 to-blue-800/20 border-2 border-blue-500/30 rounded-3xl p-6">
        <div className="flex items-center gap-3 mb-6">
          <Bell className="w-6 h-6 text-blue-400" />
          <h3 className="text-xl text-blue-400">Notificações</h3>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-xl">
            <div>
              <div className="mb-1">Notificações Push</div>
              <div className="text-sm text-gray-400">
                Receba notificações sobre novas questões e eventos
              </div>
            </div>
            <button
              onClick={() => setConfig({ ...config, notifications: !config.notifications })}
              className={`relative w-14 h-8 rounded-full transition-colors ${
                config.notifications ? 'bg-blue-500' : 'bg-gray-600'
              }`}
            >
              <div
                className={`absolute top-1 w-6 h-6 rounded-full bg-white transition-transform ${
                  config.notifications ? 'translate-x-7' : 'translate-x-1'
                }`}
              />
            </button>
          </div>

          <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-xl">
            <div>
              <div className="mb-1">Alertas por E-mail</div>
              <div className="text-sm text-gray-400">
                Receba resumos semanais e lembretes por e-mail
              </div>
            </div>
            <button
              onClick={() => setConfig({ ...config, emailAlerts: !config.emailAlerts })}
              className={`relative w-14 h-8 rounded-full transition-colors ${
                config.emailAlerts ? 'bg-blue-500' : 'bg-gray-600'
              }`}
            >
              <div
                className={`absolute top-1 w-6 h-6 rounded-full bg-white transition-transform ${
                  config.emailAlerts ? 'translate-x-7' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Privacidade */}
      <div className="bg-gradient-to-br from-purple-900/20 to-purple-800/20 border-2 border-purple-500/30 rounded-3xl p-6">
        <div className="flex items-center gap-3 mb-6">
          <Lock className="w-6 h-6 text-purple-400" />
          <h3 className="text-xl text-purple-400">Privacidade</h3>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-xl">
            <div>
              <div className="mb-1">Perfil Público</div>
              <div className="text-sm text-gray-400">
                Permitir que outros usuários vejam seu perfil
              </div>
            </div>
            <button
              onClick={() => setConfig({ ...config, publicProfile: !config.publicProfile })}
              className={`relative w-14 h-8 rounded-full transition-colors ${
                config.publicProfile ? 'bg-purple-500' : 'bg-gray-600'
              }`}
            >
              <div
                className={`absolute top-1 w-6 h-6 rounded-full bg-white transition-transform ${
                  config.publicProfile ? 'translate-x-7' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Aparência */}
      <div className="bg-gradient-to-br from-yellow-900/20 to-yellow-800/20 border-2 border-yellow-500/30 rounded-3xl p-6">
        <div className="flex items-center gap-3 mb-6">
          <Eye className="w-6 h-6 text-yellow-400" />
          <h3 className="text-xl text-yellow-400">Aparência</h3>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-xl">
            <div>
              <div className="mb-1">Modo Escuro</div>
              <div className="text-sm text-gray-400">Interface escura (recomendado)</div>
            </div>
            <button
              onClick={() => setConfig({ ...config, darkMode: !config.darkMode })}
              className={`relative w-14 h-8 rounded-full transition-colors ${
                config.darkMode ? 'bg-yellow-500' : 'bg-gray-600'
              }`}
            >
              <div
                className={`absolute top-1 w-6 h-6 rounded-full bg-white flex items-center justify-center transition-transform ${
                  config.darkMode ? 'translate-x-7' : 'translate-x-1'
                }`}
              >
                {config.darkMode ? (
                  <Moon className="w-4 h-4 text-yellow-500" />
                ) : (
                  <Sun className="w-4 h-4 text-gray-600" />
                )}
              </div>
            </button>
          </div>

          <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-xl">
            <div>
              <div className="mb-1">Efeitos Sonoros</div>
              <div className="text-sm text-gray-400">Sons de interação e notificação</div>
            </div>
            <button
              onClick={() => setConfig({ ...config, soundEffects: !config.soundEffects })}
              className={`relative w-14 h-8 rounded-full transition-colors ${
                config.soundEffects ? 'bg-yellow-500' : 'bg-gray-600'
              }`}
            >
              <div
                className={`absolute top-1 w-6 h-6 rounded-full bg-white transition-transform ${
                  config.soundEffects ? 'translate-x-7' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Idioma */}
      <div className="bg-gradient-to-br from-green-900/20 to-green-800/20 border-2 border-green-500/30 rounded-3xl p-6">
        <div className="flex items-center gap-3 mb-6">
          <Globe className="w-6 h-6 text-green-400" />
          <h3 className="text-xl text-green-400">Idioma e Região</h3>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block mb-2">Idioma do Sistema</label>
            <select
              value={config.language}
              onChange={(e) => setConfig({ ...config, language: e.target.value })}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl focus:border-green-500 focus:outline-none transition-colors"
            >
              <option value="pt-br">Português (Brasil)</option>
              <option value="en">English</option>
              <option value="es">Español</option>
            </select>
          </div>
        </div>
      </div>

      {/* Danger Zone */}
      <div className="bg-gradient-to-br from-red-900/20 to-red-800/20 border-2 border-red-500/30 rounded-3xl p-6">
        <div className="flex items-center gap-3 mb-6">
          <AlertTriangle className="w-6 h-6 text-red-400" />
          <h3 className="text-xl text-red-400">Zona de Perigo</h3>
        </div>

        <div className="space-y-3">
          <button 
            onClick={() => setShowChangePasswordModal(true)}
            className="w-full px-6 py-3 bg-red-950/50 hover:bg-red-900/50 border border-red-500/50 rounded-xl transition-colors text-red-400 flex items-center justify-center gap-2"
          >
            <KeyRound className="w-5 h-5" />
            Alterar Senha
          </button>
          
          <button 
            onClick={() => setShowDeactivateModal(true)}
            className="w-full px-6 py-3 bg-red-950/50 hover:bg-red-900/50 border border-red-500/50 rounded-xl transition-colors text-red-400 flex items-center justify-center gap-2"
          >
            <UserX className="w-5 h-5" />
            Desativar Conta
          </button>
          
          <button 
            onClick={() => setShowDeleteModal(true)}
            className="w-full px-6 py-3 bg-red-600 hover:bg-red-700 border border-red-500 rounded-xl transition-colors text-white flex items-center justify-center gap-2 font-bold"
          >
            <Trash2 className="w-5 h-5" />
            Excluir Conta Permanentemente
          </button>
        </div>
      </div>

      {/* Logout */}
      <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-gray-700 rounded-3xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <LogOut className="w-6 h-6 text-gray-400" />
          <h3 className="text-xl">Sessão</h3>
        </div>
        <p className="text-gray-400 mb-6">Encerre sua sessão atual</p>
        
        <button 
          onClick={() => setShowLogoutModal(true)}
          className="w-full px-6 py-4 bg-gray-700 hover:bg-gray-600 border border-gray-600 hover:border-gray-500 rounded-xl transition-all flex items-center justify-center gap-3 text-white"
        >
          <LogOut className="w-5 h-5" />
          <span className="text-lg">Sair da Conta</span>
        </button>
      </div>

      {/* Modal: Alterar Senha */}
      {showChangePasswordModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-yellow-500/50 rounded-3xl p-8 max-w-md w-full shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <KeyRound className="w-8 h-8 text-yellow-400" />
                <h3 className="text-2xl font-bold">Alterar Senha</h3>
              </div>
              <button 
                onClick={() => setShowChangePasswordModal(false)}
                className="p-2 hover:bg-gray-800 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Senha Atual</label>
                <input
                  type="password"
                  value={passwordData.currentPassword}
                  onChange={(e) => setPasswordData({ ...passwordData, currentPassword: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl focus:border-yellow-500 focus:outline-none transition-colors"
                  placeholder="Digite sua senha atual"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">Nova Senha</label>
                <input
                  type="password"
                  value={passwordData.newPassword}
                  onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl focus:border-yellow-500 focus:outline-none transition-colors"
                  placeholder="Digite a nova senha (mín. 6 caracteres)"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">Confirmar Nova Senha</label>
                <input
                  type="password"
                  value={passwordData.confirmPassword}
                  onChange={(e) => setPasswordData({ ...passwordData, confirmPassword: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl focus:border-yellow-500 focus:outline-none transition-colors"
                  placeholder="Confirme a nova senha"
                />
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setShowChangePasswordModal(false)}
                className="flex-1 px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-xl transition-colors"
              >
                Cancelar
              </button>
              <button
                onClick={handleChangePassword}
                className="flex-1 px-6 py-3 bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 rounded-xl transition-all font-bold"
              >
                Alterar Senha
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal: Desativar Conta */}
      {showDeactivateModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-orange-500/50 rounded-3xl p-8 max-w-md w-full shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <UserX className="w-8 h-8 text-orange-400" />
                <h3 className="text-2xl font-bold">Desativar Conta</h3>
              </div>
              <button 
                onClick={() => setShowDeactivateModal(false)}
                className="p-2 hover:bg-gray-800 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="mb-6">
              <p className="text-gray-300 mb-4">
                Ao desativar sua conta:
              </p>
              <ul className="space-y-2 text-sm text-gray-400 mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-orange-400">•</span>
                  <span>Seu perfil ficará invisível para outros usuários</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400">•</span>
                  <span>Seus dados serão preservados</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400">•</span>
                  <span>Você poderá reativar fazendo login novamente</span>
                </li>
              </ul>
              <p className="text-yellow-400 text-sm">
                ⚠️ Você será desconectado imediatamente
              </p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setShowDeactivateModal(false)}
                className="flex-1 px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-xl transition-colors"
              >
                Cancelar
              </button>
              <button
                onClick={handleDeactivateAccount}
                className="flex-1 px-6 py-3 bg-orange-600 hover:bg-orange-700 rounded-xl transition-all font-bold"
              >
                Desativar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal: Excluir Conta */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-red-500 rounded-3xl p-8 max-w-md w-full shadow-2xl shadow-red-500/20">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <Trash2 className="w-8 h-8 text-red-400" />
                <h3 className="text-2xl font-bold text-red-400">Excluir Conta</h3>
              </div>
              <button 
                onClick={() => setShowDeleteModal(false)}
                className="p-2 hover:bg-gray-800 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="mb-6">
              <p className="text-gray-300 mb-4 font-bold">
                ⚠️ ATENÇÃO: Esta ação é IRREVERSÍVEL!
              </p>
              <p className="text-gray-300 mb-4">
                Ao excluir sua conta permanentemente:
              </p>
              <ul className="space-y-2 text-sm text-gray-400 mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-red-400">•</span>
                  <span>Todos os seus dados serão excluídos definitivamente</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">•</span>
                  <span>Seu progresso, estatísticas e conquistas serão perdidos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">•</span>
                  <span>Você NÃO poderá recuperar esta conta</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">•</span>
                  <span>Não será possível criar outra conta com o mesmo e-mail</span>
                </li>
              </ul>
              <div className="bg-red-900/30 border border-red-500/50 rounded-xl p-4">
                <p className="text-red-400 text-sm font-bold text-center">
                  🚨 VOCÊ TEM CERTEZA ABSOLUTA? 🚨
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="flex-1 px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-xl transition-colors"
              >
                Cancelar
              </button>
              <button
                onClick={handleDeleteAccount}
                className="flex-1 px-6 py-3 bg-red-600 hover:bg-red-700 rounded-xl transition-all font-bold text-white"
              >
                Excluir Permanentemente
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal: Sair da Conta */}
      {showLogoutModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-gray-600 rounded-3xl p-8 max-w-md w-full shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <LogOut className="w-8 h-8 text-gray-400" />
                <h3 className="text-2xl font-bold">Sair da Conta</h3>
              </div>
              <button 
                onClick={() => setShowLogoutModal(false)}
                className="p-2 hover:bg-gray-800 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="mb-6">
              <p className="text-gray-300 mb-4">
                Você tem certeza que deseja sair da sua conta?
              </p>
              <p className="text-sm text-gray-400">
                Você precisará fazer login novamente para acessar o Quiron Concursos.
              </p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setShowLogoutModal(false)}
                className="flex-1 px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-xl transition-colors"
              >
                Cancelar
              </button>
              <button
                onClick={handleLogout}
                className="flex-1 px-6 py-3 bg-gray-600 hover:bg-gray-500 rounded-xl transition-all font-bold flex items-center justify-center gap-2"
              >
                <LogOut className="w-5 h-5" />
                Sair
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
