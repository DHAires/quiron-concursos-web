import React, { useState, useEffect } from 'react';
import { Camera, Lock, Star, Zap, Save, CheckCircle } from 'lucide-react';
import { projectId, publicAnonKey } from '../utils/supabase/info';

interface ProfileData {
  // Required
  fullName: string;
  email: string;
  birthDate: {
    day: string;
    month: string;
    year: string;
  };

  // Optional (+1 energia each)
  nickname: string; // +1
  sex: string; // +1
  address: string; // +1
  cep: string; // +1
  phone: string; // +1
  occupation: string; // +1
  education: string; // +1
  studyTime: string; // +1
  monthlyExpenses: string; // +1
}

const OPTIONAL_FIELDS = [
  'nickname',
  'sex',
  'address',
  'cep',
  'phone',
  'occupation',
  'education',
  'studyTime',
  'monthlyExpenses',
];

export function ProfilePersonalData({ onEnergyUpdate }: { onEnergyUpdate: () => void }) {
  const [profile, setProfile] = useState<ProfileData>({
    fullName: '',
    email: '',
    birthDate: { day: '01', month: '01', year: '1990' },
    nickname: '',
    sex: '',
    address: '',
    cep: '',
    phone: '',
    occupation: '',
    education: '',
    studyTime: '',
    monthlyExpenses: '',
  });

  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-50734795/profile/get`,
        {
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
          },
        }
      );

      const data = await response.json();
      if (data.profile) {
        setProfile(data.profile);
      }
    } catch (error) {
      console.error('Error loading profile:', error);
    }
  };

  const handleSave = async () => {
    setIsSaving(true);
    setSaveSuccess(false);

    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-50734795/profile/update`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${publicAnonKey}`,
          },
          body: JSON.stringify({ profile }),
        }
      );

      const data = await response.json();
      
      if (data.success) {
        setSaveSuccess(true);
        onEnergyUpdate();
        
        setTimeout(() => setSaveSuccess(false), 3000);
      }
    } catch (error) {
      console.error('Error saving profile:', error);
    } finally {
      setIsSaving(false);
    }
  };

  const calculateEnergyFromProfile = () => {
    let count = 0;
    OPTIONAL_FIELDS.forEach(field => {
      if (profile[field as keyof ProfileData]) {
        count++;
      }
    });
    return count;
  };

  const energyEarned = calculateEnergyFromProfile();

  return (
    <div className="space-y-6">
      {/* Informações Pessoais */}
      <div className="bg-gradient-to-br from-blue-900/20 to-blue-800/20 border-2 border-blue-500/30 rounded-3xl p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
            <Star className="w-5 h-5 text-blue-400" />
          </div>
          <h2 className="text-2xl text-blue-400">Informações Pessoais</h2>
        </div>

        {/* Profile Photo */}
        <div className="mb-6">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gray-700 to-gray-600 flex items-center justify-center">
                <Camera className="w-8 h-8 text-gray-400" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-green-500 border-2 border-black" />
            </div>

            <div className="flex-1">
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/50 rounded-xl transition-colors">
                <Camera className="w-4 h-4" />
                <span>Bloqueado</span>
                <Lock className="w-4 h-4 text-yellow-400" />
              </button>
              <p className="text-xs text-gray-400 mt-1">
                Freemium+ • Até 15MB • JPG, PNG, WEBP
              </p>
            </div>
          </div>
        </div>

        {/* Nickname (Optional +1) */}
        <div className="mb-6 p-4 bg-purple-500/10 border-2 border-purple-500/30 rounded-2xl">
          <label className="flex items-center gap-2 mb-2">
            <Star className="w-4 h-4 text-purple-400" />
            <span className="text-purple-400">Apelido / Nome de Usuário</span>
            <span className="text-sm text-purple-300">(Opcional - +1 energia)</span>
          </label>
          <input
            type="text"
            value={profile.nickname}
            onChange={(e) => setProfile({ ...profile, nickname: e.target.value })}
            placeholder="Ex: CentauroSabio, HeroiJuridico, QuironMaster..."
            maxLength={20}
            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
          />
          <div className="flex items-center justify-between mt-2">
            <p className="text-xs text-gray-400">
              Escolha um apelido único para ser exibido no ranking
            </p>
            <span className="text-xs text-gray-500">{profile.nickname.length}/20</span>
          </div>
        </div>

        {/* Full Name (Required) */}
        <div className="mb-4">
          <label className="flex items-center gap-2 mb-2">
            <span>Nome Completo</span>
            <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            value={profile.fullName}
            onChange={(e) => setProfile({ ...profile, fullName: e.target.value })}
            placeholder="Herói Mitológico"
            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
          />
        </div>

        {/* Email and Birth Date */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Email */}
          <div>
            <label className="flex items-center gap-2 mb-2">
              <span>E-mail</span>
              <span className="text-red-400">*</span>
            </label>
            <input
              type="email"
              value={profile.email}
              onChange={(e) => setProfile({ ...profile, email: e.target.value })}
              placeholder="heroi@quironconcursos.com.br"
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
            />
          </div>

          {/* Birth Date */}
          <div>
            <label className="flex items-center gap-2 mb-2">
              <span>Data de Nascimento</span>
              <span className="text-red-400">*</span>
            </label>
            <div className="grid grid-cols-3 gap-2">
              <input
                type="text"
                value={profile.birthDate.day}
                onChange={(e) =>
                  setProfile({
                    ...profile,
                    birthDate: { ...profile.birthDate, day: e.target.value },
                  })
                }
                placeholder="01"
                maxLength={2}
                className="px-3 py-3 bg-gray-800 border border-gray-700 rounded-xl focus:border-blue-500 focus:outline-none text-center transition-colors"
              />
              <input
                type="text"
                value={profile.birthDate.month}
                onChange={(e) =>
                  setProfile({
                    ...profile,
                    birthDate: { ...profile.birthDate, month: e.target.value },
                  })
                }
                placeholder="01"
                maxLength={2}
                className="px-3 py-3 bg-gray-800 border border-gray-700 rounded-xl focus:border-blue-500 focus:outline-none text-center transition-colors"
              />
              <input
                type="text"
                value={profile.birthDate.year}
                onChange={(e) =>
                  setProfile({
                    ...profile,
                    birthDate: { ...profile.birthDate, year: e.target.value },
                  })
                }
                placeholder="1990"
                maxLength={4}
                className="px-3 py-3 bg-gray-800 border border-gray-700 rounded-xl focus:border-blue-500 focus:outline-none text-center transition-colors"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Campos Opcionais */}
      <div className="bg-gradient-to-br from-yellow-900/20 to-orange-900/20 border-2 border-yellow-500/30 rounded-3xl p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center">
            <Zap className="w-5 h-5 text-yellow-400" />
          </div>
          <h2 className="text-2xl text-yellow-400">Campos Opcionais</h2>
          <span className="text-sm text-yellow-300">(+1 ponto de energia cada)</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Sexo */}
          <div>
            <label className="flex items-center gap-2 mb-2">
              <span>Sexo</span>
              <Zap className="w-3 h-3 text-yellow-400" />
            </label>
            <select
              value={profile.sex}
              onChange={(e) => setProfile({ ...profile, sex: e.target.value })}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl focus:border-yellow-500 focus:outline-none transition-colors"
            >
              <option value="">Selecione...</option>
              <option value="masculino">Masculino</option>
              <option value="feminino">Feminino</option>
              <option value="outro">Outro</option>
              <option value="prefiro-nao-dizer">Prefiro não dizer</option>
            </select>
          </div>

          {/* CEP */}
          <div>
            <label className="flex items-center gap-2 mb-2">
              <span>CEP</span>
              <Zap className="w-3 h-3 text-yellow-400" />
            </label>
            <input
              type="text"
              value={profile.cep}
              onChange={(e) => setProfile({ ...profile, cep: e.target.value })}
              placeholder="00000-000"
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl focus:border-yellow-500 focus:outline-none transition-colors"
            />
          </div>

          {/* Endereço */}
          <div className="md:col-span-2">
            <label className="flex items-center gap-2 mb-2">
              <span>Endereço</span>
              <Zap className="w-3 h-3 text-yellow-400" />
            </label>
            <input
              type="text"
              value={profile.address}
              onChange={(e) => setProfile({ ...profile, address: e.target.value })}
              placeholder="Rua, número, bairro, cidade, estado"
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl focus:border-yellow-500 focus:outline-none transition-colors"
            />
          </div>

          {/* Telefone */}
          <div className="md:col-span-2">
            <label className="flex items-center gap-2 mb-2">
              <span>Telefone/WhatsApp</span>
              <Zap className="w-3 h-3 text-yellow-400" />
            </label>
            <input
              type="text"
              value={profile.phone}
              onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
              placeholder="(00) 00000-0000"
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl focus:border-yellow-500 focus:outline-none transition-colors"
            />
          </div>

          {/* Ocupação */}
          <div>
            <label className="flex items-center gap-2 mb-2">
              <span>Ocupação Profissional</span>
              <Zap className="w-3 h-3 text-yellow-400" />
            </label>
            <input
              type="text"
              value={profile.occupation}
              onChange={(e) => setProfile({ ...profile, occupation: e.target.value })}
              placeholder="Ex: Estudante, Servidor Público..."
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl focus:border-yellow-500 focus:outline-none transition-colors"
            />
          </div>

          {/* Escolaridade */}
          <div>
            <label className="flex items-center gap-2 mb-2">
              <span>Escolaridade</span>
              <Zap className="w-3 h-3 text-yellow-400" />
            </label>
            <select
              value={profile.education}
              onChange={(e) => setProfile({ ...profile, education: e.target.value })}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl focus:border-yellow-500 focus:outline-none transition-colors"
            >
              <option value="">Selecione...</option>
              <option value="fundamental">Ensino Fundamental</option>
              <option value="medio">Ensino Médio</option>
              <option value="superior-cursando">Superior Cursando</option>
              <option value="superior-completo">Superior Completo</option>
              <option value="pos-graduacao">Pós-Graduação</option>
              <option value="mestrado">Mestrado</option>
              <option value="doutorado">Doutorado</option>
            </select>
          </div>

          {/* Tempo de Estudos */}
          <div>
            <label className="flex items-center gap-2 mb-2">
              <span>Tempo de Estudos para Concursos</span>
              <Zap className="w-3 h-3 text-yellow-400" />
            </label>
            <select
              value={profile.studyTime}
              onChange={(e) => setProfile({ ...profile, studyTime: e.target.value })}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl focus:border-yellow-500 focus:outline-none transition-colors"
            >
              <option value="">Selecione...</option>
              <option value="menos-6-meses">Menos de 6 meses</option>
              <option value="6-12-meses">6 a 12 meses</option>
              <option value="1-2-anos">1 a 2 anos</option>
              <option value="2-3-anos">2 a 3 anos</option>
              <option value="mais-3-anos">Mais de 3 anos</option>
            </select>
          </div>

          {/* Gastos Mensais */}
          <div>
            <label className="flex items-center gap-2 mb-2">
              <span>Gastos Mensais com Estudos</span>
              <Zap className="w-3 h-3 text-yellow-400" />
            </label>
            <select
              value={profile.monthlyExpenses}
              onChange={(e) => setProfile({ ...profile, monthlyExpenses: e.target.value })}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl focus:border-yellow-500 focus:outline-none transition-colors"
            >
              <option value="">Selecione...</option>
              <option value="0-100">R$ 0 - R$ 100</option>
              <option value="100-300">R$ 100 - R$ 300</option>
              <option value="300-500">R$ 300 - R$ 500</option>
              <option value="500-1000">R$ 500 - R$ 1.000</option>
              <option value="mais-1000">Mais de R$ 1.000</option>
            </select>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <button
        onClick={handleSave}
        disabled={isSaving}
        className={`w-full py-4 rounded-2xl transition-all flex items-center justify-center gap-3 ${
          saveSuccess
            ? 'bg-green-600 hover:bg-green-700'
            : 'bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-600'
        } ${isSaving ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        {saveSuccess ? (
          <>
            <CheckCircle className="w-5 h-5" />
            <span>Alterações Salvas com Sucesso!</span>
          </>
        ) : (
          <>
            <Save className="w-5 h-5" />
            <span>{isSaving ? 'Salvando...' : 'Salvar Alterações'}</span>
          </>
        )}
      </button>
    </div>
  );
}
