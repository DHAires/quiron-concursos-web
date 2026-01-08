import React, { useState } from 'react';
import { X, UserPlus, Mail, Lock, User, AlertCircle, Phone, MapPin, Briefcase, Calendar, Gift, Zap } from 'lucide-react';
import { projectId, publicAnonKey } from '../../utils/supabase/info';
import { createClient } from '@supabase/supabase-js';

interface RegisterModalProps {
  onClose: () => void;
  onSwitchToLogin: () => void;
  onRegisterSuccess: (user: any, session: any) => void;
}

export function RegisterModal({ onClose, onSwitchToLogin, onRegisterSuccess }: RegisterModalProps) {
  // Campos obrigatórios básicos
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  
  // ⚡ CAMPOS OPCIONAIS - Cada um ganha +1 energia!
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [profession, setProfession] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [targetExam, setTargetExam] = useState('');
  
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showOptionalFields, setShowOptionalFields] = useState(false);

  const supabase = createClient(
    `https://${projectId}.supabase.co`,
    publicAnonKey
  );

  // ⚡ Calcula energia total baseada nos campos preenchidos
  const calculateEnergy = () => {
    let energy = 5; // Energia base
    
    // +1 para cada campo opcional preenchido
    if (phone.trim()) energy += 1;
    if (city.trim()) energy += 1;
    if (state.trim()) energy += 1;
    if (profession.trim()) energy += 1;
    if (birthDate.trim()) energy += 1;
    if (targetExam.trim()) energy += 1;
    
    return energy;
  };

  const totalEnergy = calculateEnergy();
  const bonusEnergy = totalEnergy - 5; // Bônus além da base

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    // Validar se as senhas coincidem
    if (password !== confirmPassword) {
      setError('As senhas não coincidem');
      return;
    }
    
    setLoading(true);

    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-50734795/signup`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${publicAnonKey}`,
          },
          body: JSON.stringify({
            email,
            password,
            name,
            energy: totalEnergy, // Energia total calculada
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || 'Erro ao criar conta');
        setLoading(false);
        return;
      }

      if (data.user && data.session) {
        onRegisterSuccess(data.user, data.session);
        onClose();
      }
    } catch (err: any) {
      setError(err.message || 'Erro ao criar conta');
      setLoading(false);
    }
  };

  const handleGoogleSignup = async () => {
    setError('');
    setLoading(true);

    try {
      // Do not forget to complete setup at https://supabase.com/docs/guides/auth/social-login/auth-google
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: window.location.origin
        }
      });

      if (error) {
        setError(error.message);
        setLoading(false);
        return;
      }
    } catch (err: any) {
      setError(err.message || 'Erro ao cadastrar com Google');
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-3">
      <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-red-500/30 rounded-xl max-w-xs w-full p-4 relative shadow-2xl shadow-red-500/20">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="text-center mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-500 rounded-full flex items-center justify-center mx-auto mb-2">
            <UserPlus className="w-6 h-6" />
          </div>
          <h2 className="text-xl mb-0.5">Cadastre-se</h2>
          <p className="text-xs text-gray-400">Junte-se à comunidade Quiron Concursos!</p>
          
          {/* Energy Indicator */}
          <div className="mt-2 inline-flex items-center gap-1.5 bg-yellow-500/20 px-3 py-1 rounded-full border border-yellow-500/30">
            <Zap className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
            <span className="text-yellow-300 font-bold text-xs">{totalEnergy} energia</span>
            {bonusEnergy > 0 && (
              <span className="text-yellow-200 text-[10px]">(+{bonusEnergy} bônus)</span>
            )}
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-3 p-2 bg-red-500/10 border border-red-500/30 rounded-lg flex items-start gap-2">
            <AlertCircle className="w-3.5 h-3.5 text-red-500 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-red-400">{error}</p>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-3">
          {/* Required Fields */}
          <div className="space-y-2.5">
            <h3 className="flex items-center gap-1.5 text-red-500 text-xs">
              <span className="text-base">*</span>
              Campos Obrigatórios
            </h3>

            {/* Name */}
            <div>
              <label className="block text-xs mb-1 text-gray-300">Nome Completo</label>
              <div className="relative">
                <User className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-500" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Seu nome completo"
                  required
                  className="w-full pl-8 pr-2.5 py-2 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-red-500 focus:outline-none transition-colors text-xs"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs mb-1 text-gray-300">Email</label>
              <div className="relative">
                <Mail className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-500" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seu@email.com"
                  required
                  className="w-full pl-8 pr-2.5 py-2 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-red-500 focus:outline-none transition-colors text-xs"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-xs mb-1 text-gray-300">Senha</label>
              <div className="relative">
                <Lock className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-500" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Mínimo 6 caracteres"
                  required
                  minLength={6}
                  className="w-full pl-8 pr-2.5 py-2 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-red-500 focus:outline-none transition-colors text-xs"
                />
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-xs mb-1 text-gray-300">Confirmar Senha</label>
              <div className="relative">
                <Lock className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-500" />
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Mínimo 6 caracteres"
                  required
                  minLength={6}
                  className="w-full pl-8 pr-2.5 py-2 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-red-500 focus:outline-none transition-colors text-xs"
                />
              </div>
            </div>
          </div>

          {/* Optional Fields */}
          {showOptionalFields && (
            <div className="space-y-2.5">
              <h3 className="flex items-center gap-1.5 text-red-500 text-xs">
                <span className="text-base">+</span>
                Campos Opcionais
              </h3>

              {/* Phone */}
              <div>
                <label className="block text-xs mb-1 text-gray-300">Telefone</label>
                <div className="relative">
                  <Phone className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-500" />
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(XX) XXXX-XXXX"
                    className="w-full pl-8 pr-2.5 py-2 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-red-500 focus:outline-none transition-colors text-xs"
                  />
                </div>
              </div>

              {/* City */}
              <div>
                <label className="block text-xs mb-1 text-gray-300">Cidade</label>
                <div className="relative">
                  <MapPin className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-500" />
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Sua cidade"
                    className="w-full pl-8 pr-2.5 py-2 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-red-500 focus:outline-none transition-colors text-xs"
                  />
                </div>
              </div>

              {/* State */}
              <div>
                <label className="block text-xs mb-1 text-gray-300">Estado</label>
                <div className="relative">
                  <MapPin className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-500" />
                  <input
                    type="text"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    placeholder="Seu estado"
                    className="w-full pl-8 pr-2.5 py-2 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-red-500 focus:outline-none transition-colors text-xs"
                  />
                </div>
              </div>

              {/* Profession */}
              <div>
                <label className="block text-xs mb-1 text-gray-300">Profissão</label>
                <div className="relative">
                  <Briefcase className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-500" />
                  <input
                    type="text"
                    value={profession}
                    onChange={(e) => setProfession(e.target.value)}
                    placeholder="Sua profissão"
                    className="w-full pl-8 pr-2.5 py-2 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-red-500 focus:outline-none transition-colors text-xs"
                  />
                </div>
              </div>

              {/* Birth Date */}
              <div>
                <label className="block text-xs mb-1 text-gray-300">Data de Nascimento</label>
                <div className="relative">
                  <Calendar className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-500" />
                  <input
                    type="date"
                    value={birthDate}
                    onChange={(e) => setBirthDate(e.target.value)}
                    className="w-full pl-8 pr-2.5 py-2 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-red-500 focus:outline-none transition-colors text-xs"
                  />
                </div>
              </div>

              {/* Target Exam */}
              <div>
                <label className="block text-xs mb-1 text-gray-300">Concurso Alvo</label>
                <div className="relative">
                  <Gift className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-500" />
                  <input
                    type="text"
                    value={targetExam}
                    onChange={(e) => setTargetExam(e.target.value)}
                    placeholder="Concurso que deseja concorrer"
                    className="w-full pl-8 pr-2.5 py-2 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-red-500 focus:outline-none transition-colors text-xs"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Show/Hide Optional Fields */}
          <button
            type="button"
            onClick={() => setShowOptionalFields(!showOptionalFields)}
            className="w-full py-1.5 bg-gray-800/50 hover:bg-gray-800/70 text-gray-400 hover:text-gray-300 rounded-lg transition-colors text-xs font-semibold"
          >
            {showOptionalFields ? 'Ocultar Campos Opcionais' : 'Mostrar Campos Opcionais'}
          </button>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-2.5 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 rounded-lg transition-all shadow-lg shadow-red-500/30 disabled:opacity-50 disabled:cursor-not-allowed text-xs font-semibold"
          >
            {loading ? 'Criando conta...' : 'Cadastrar'}
          </button>
        </form>

        {/* Divider */}
        <div className="relative my-3">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-700"></div>
          </div>
          <div className="relative flex justify-center text-xs">
            <span className="px-3 bg-gradient-to-br from-gray-900 to-black text-gray-400">ou</span>
          </div>
        </div>

        {/* Google Signup Button */}
        <button
          onClick={handleGoogleSignup}
          disabled={loading}
          className="w-full py-2.5 px-4 bg-white hover:bg-gray-100 text-gray-900 rounded-lg transition-all shadow-md flex items-center justify-center gap-2.5 disabled:opacity-50 disabled:cursor-not-allowed text-xs"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          <span className="font-medium">Continuar com Google</span>
        </button>

        {/* Footer */}
        <div className="mt-3 text-center">
          <p className="text-xs text-gray-400">
            Já tem uma conta?{' '}
            <button
              onClick={onSwitchToLogin}
              className="text-red-500 hover:text-red-400 transition-colors font-medium"
            >
              Entrar
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}