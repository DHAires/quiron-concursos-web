import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Book, Target, TrendingUp, Scale, Shield, Brain, DollarSign, CheckCircle, Clock, Play, Trophy, Zap, Flame, Award, Star, ChevronDown, ChevronUp, BookOpen } from 'lucide-react';
import { QuestionPractice } from './QuestionPractice';
import { seedQuestionsConstitucional, seedQuestionsAdministrativo, seedQuestionsAdministrativoExtra, seedQuestionsAdministrativoFinal, seedQuestionsCivil1, seedQuestionsCivil2, seedQuestionsCivil3, seedQuestionsPenal1, seedQuestionsPenal2, seedQuestionsPenal3, seedQuestionsPenal4, seedQuestionsTrabalho1, seedQuestionsTrabalho2, seedQuestionsTrabalho3, seedQuestionsTributario1, seedQuestionsTributario2, seedQuestionsTributario3, seedQuestionsProcessualCivil1, seedQuestionsProcessualCivil2, seedQuestionsProcessualCivil3, seedQuestionsEleitoral, seedQuestionsLegislacaoPenal } from '../utils/seedQuestions';
import { seedAllCriminalisticaQuestions } from '../utils/seedQuestionsCriminalistica';
import { seedAllDireitosHumanosQuestions } from '../utils/seedQuestionsDireitosHumanos';
import { seedAllDesarmamentoQuestions } from '../utils/seedQuestionsDesarmamento';
import { seedAllLegislacaoPenalEspecialQuestions } from '../utils/seedQuestionsLegislacaoPenalEspecial';
import { seedAllMedicinaLegalQuestions } from '../utils/seedQuestionsMedicinaLegal';
import { seedAllEticaPolicialQuestions } from '../utils/seedQuestionsEticaPolicial';
import { seedAllUsoProgressivoForcaQuestions } from '../utils/seedQuestionsUsoProgressivoForca';
import { seedAllAbordagemTecnicasQuestions } from '../utils/seedQuestionsAbordagemTecnicas';
import { seedAllEconomiaQuestions } from '../utils/seedQuestionsEconomiaFiscal';
import { seedAllSistemaFinanceiroNacionalQuestions } from '../utils/seedQuestionsSistemaFinanceiroNacional';
import { seedAllCienciasTecnologiaQuestions } from '../utils/seedQuestionsCienciasTecnologia';
import { seedAllRaciocínioLogicoQuestions } from '../utils/seedQuestionsRaciocínioLogico';
import { projectId, publicAnonKey } from '../utils/supabase/info';
import { useQuestionProgress } from '../hooks/useQuestionProgress';

// Mapeamento de ID do subject para slug usado nas keys do KV
const SUBJECT_ID_TO_SLUG: Record<string, string> = {
  // Área Jurídica
  '1': 'direito-constitucional',
  '2': 'direito-administrativo',
  '3': 'direito-civil',
  '4': 'direito-penal',
  '5': 'direito-do-trabalho',
  '6': 'direito-tributario',
  '7': 'direito-processual-civil',
  '8': 'direito-processual-penal',
  '9': 'direito-eleitoral',
  '10': 'direito-empresarial',
  
  // Área Policial  
  '11': 'legislacao-penal',
  '12': 'processo-penal',
  '13': 'criminalistica',
  '14': 'direitos-humanos',
  '15': 'estatuto-do-desarmamento',
  '16': 'legislacao-penal-especial',
  '17': 'medicina-legal',
  '18': 'etica-policial',
  '19': 'uso-progressivo-da-forca',
  '20': 'abordagem-e-tecnicas',
  
  // Área Conhecimentos Gerais
  '21': 'portugues',
  '22': 'informatica',
  '23': 'atualidades',
  '24': 'historia-do-brasil',
  '25': 'geografia-do-brasil',
  '26': 'cultura-geral',
  '27': 'politica-e-cidadania',
  '28': 'meio-ambiente',
  '29': 'ciencias-e-tecnologia',
  '30': 'raciocinio-logico',
  
  // Área Fiscal-Bancária
  '31': 'economia',
  '32': 'matematica-financeira',
  '33': 'contabilidade-geral',
  '34': 'contabilidade-publica',
  '35': 'auditoria',
  '36': 'orcamento-publico',
  '37': 'administracao-financeira',
  '38': 'sistema-financeiro-nacional',
  '39': 'mercado-de-capitais',
  '40': 'produtos-bancarios'
};

// Função para converter nome de tópico para slug
const topicNameToSlug = (name: string): string => {
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove acentos
    .replace(/[^\w\s-]/g, '') // Remove caracteres especiais
    .replace(/\s+/g, '-') // Substitui espaços por hífens
    .replace(/-+/g, '-') // Remove hífens duplicados
    .trim();
};

interface QuestionsProps {
  onBack: () => void;
  areaId?: string;
  onNavigateToPractice?: (area: string, subject: string, topic: string, topicName: string) => void;
  practiceParams?: {
    area: string;
    subject: string;
    topic: string;
    topicName: string;
  } | null;
  onBackFromPractice?: () => void;
}

interface Topic {
  name: string;
  questions: number;
}

interface Subject {
  id: string;
  name: string;
  total: number;
  completed: number;
  accuracy: number;
  icon: string;
  topics: Topic[];
}

interface ThematicArea {
  id: string;
  name: string;
  icon: any;
  gradient: string;
  shadowColor: string;
  borderColor: string;
  subjects: Subject[];
}

export function Questions({ onBack, areaId, onNavigateToPractice, practiceParams, onBackFromPractice }: QuestionsProps) {
  const [selectedArea, setSelectedArea] = useState<string>(areaId || 'juridica');
  const [expandedSubject, setExpandedSubject] = useState<string | null>(null);
  const [isSeeding, setIsSeeding] = useState(false);
  const { getAreaStats, getTotalStats } = useQuestionProgress();
  const [isSeedingCriminalistica, setIsSeedingCriminalistica] = useState(false);
  const [isDeletingCriminalistica, setIsDeletingCriminalistica] = useState(false);
  const [isSeedingDireitosHumanos, setIsSeedingDireitosHumanos] = useState(false);
  const [isDeletingDireitosHumanos, setIsDeletingDireitosHumanos] = useState(false);
  const [isSeedingDesarmamento, setIsSeedingDesarmamento] = useState(false);
  const [isDeletingDesarmamento, setIsDeletingDesarmamento] = useState(false);
  const [isSeedingLegislacaoPenalEspecial, setIsSeedingLegislacaoPenalEspecial] = useState(false);
  const [isDeletingLegislacaoPenalEspecial, setIsDeletingLegislacaoPenalEspecial] = useState(false);
  const [isSeedingLegislacaoPenal, setIsSeedingLegislacaoPenal] = useState(false);
  const [isDeletingLegislacaoPenal, setIsDeletingLegislacaoPenal] = useState(false);
  const [isSeedingMedicinaLegal, setIsSeedingMedicinaLegal] = useState(false);
  const [isDeletingMedicinaLegal, setIsDeletingMedicinaLegal] = useState(false);
  const [isSeedingEticaPolicial, setIsSeedingEticaPolicial] = useState(false);
  const [isDeletingEticaPolicial, setIsDeletingEticaPolicial] = useState(false);
  const [isSeedingUsoProgressivoForca, setIsSeedingUsoProgressivoForca] = useState(false);
  const [isDeletingUsoProgressivoForca, setIsDeletingUsoProgressivoForca] = useState(false);
  const [isSeedingAbordagemTecnicas, setIsSeedingAbordagemTecnicas] = useState(false);
  const [isDeletingAbordagemTecnicas, setIsDeletingAbordagemTecnicas] = useState(false);
  const [isSeedingEconomia, setIsSeedingEconomia] = useState(false);
  const [isDeletingEconomia, setIsDeletingEconomia] = useState(false);
  const [isSeedingSFN, setIsSeedingSFN] = useState(false);
  const [isSeedingCienciasTecnologia, setIsSeedingCienciasTecnologia] = useState(false);
  const [isSeedingRaciocínioLogico, setIsSeedingRaciocínioLogico] = useState(false);

  const handleDeleteCriminalisticaQuestions = async () => {
    if (!confirm('🗑️ Confirma a exclusão de TODAS as questões de Criminalística?\n\nIsso vai apagar APENAS da Área Policial:\n• Perícia Criminal (5)\n• Local de Crime (5)\n• Documentoscopia (5)\n• Balística Forense (5)\n• Papiloscopia (5)\n• Genética Forense (5)\n• Fotografia Forense (5)\n• Toxicologia Forense (5)\n• Informática Forense (5)\n\n⚠️ TOTAL: 45 questões de CRIMINALÍSTICA serão DELETADAS!\n✅ Outras questões NÃO serão afetadas!')) {
      return;
    }

    setIsDeletingCriminalistica(true);
    try {
      console.log('🗑️ Deleting all Criminalística questions...');
      
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-50734795/questions/policial/criminalistica`,
        {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
            'Content-Type': 'application/json',
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to delete: ${response.status}`);
      }

      const result = await response.json();
      console.log('✅ Delete result:', result);

      alert(`✅ Questões de Criminalística deletadas com sucesso!\n\n${result.message}\n\n🔒 Outras questões foram preservadas!\n🔄 Agora você pode importar novamente no formato correto! 🔥`);
    } catch (error) {
      console.error('❌ Error deleting questions:', error);
      alert('❌ Erro ao deletar questões. Verifique o console para mais detalhes.');
    } finally {
      setIsDeletingCriminalistica(false);
    }
  };

  const handleSeedCriminalisticaOnly = async () => {
    setIsSeedingCriminalistica(true);
    try {
      await seedAllCriminalisticaQuestions();
      alert('✅ Questões de Criminalística importadas com sucesso!\n\n🔬 CRIMINALÍSTICA (45 questões):\n\n• Perícia Criminal (5)\n• Local de Crime (5)\n• Documentoscopia (5)\n• Balística Forense (5)\n• Papiloscopia (5)\n• Genética Forense (DNA) (5)\n• Fotografia Forense (5)\n• Toxicologia Forense (5)\n• Informática Forense (5)\n\nTOTAL: 45 QUESTÕES! 🎯🔥\n\nQuestões comentadas de concursos: CESPE, FCC, FGV, VUNESP!\n\nAgora você pode praticar! 🚀');
    } catch (error) {
      console.error('Error seeding Criminalística questions:', error);
      alert('❌ Erro ao importar questões de Criminalística. Verifique o console para mais detalhes.');
    } finally {
      setIsSeedingCriminalistica(false);
    }
  };

  const handleDeleteDireitosHumanosQuestions = async () => {
    if (!confirm('🗑️ Confirma a exclusão de TODAS as questões de Direitos Humanos?\n\nIsso vai apagar APENAS da Área Policial:\n• Teoria Geral (5)\n• Declaração Universal (5)\n• Pactos Internacionais (5)\n• Convenção Americana (5)\n• Sistema Interamericano (5)\n• DH na Constituição (5)\n• Tortura (5)\n• Minorias (5)\n• Segurança Pública e DH (5)\n\n⚠️ TOTAL: 45 questões de DIREITOS HUMANOS serão DELETADAS!\n✅ Outras questões NÃO serão afetadas!')) {
      return;
    }

    setIsDeletingDireitosHumanos(true);
    try {
      console.log('🗑️ Deleting all Direitos Humanos questions...');
      
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-50734795/questions/policial/direitos-humanos`,
        {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
            'Content-Type': 'application/json',
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to delete: ${response.status}`);
      }

      const result = await response.json();
      console.log('✅ Delete result:', result);

      alert(`✅ Questões de Direitos Humanos deletadas com sucesso!\n\n${result.message}\n\n🔒 Outras questões foram preservadas!\n🔄 Agora você pode importar novamente no formato correto! 🔥`);
    } catch (error) {
      console.error('❌ Error deleting questions:', error);
      alert('❌ Erro ao deletar questões. Verifique o console para mais detalhes.');
    } finally {
      setIsDeletingDireitosHumanos(false);
    }
  };

  const handleSeedDireitosHumanosOnly = async () => {
    setIsSeedingDireitosHumanos(true);
    try {
      await seedAllDireitosHumanosQuestions();
      alert('✅ Questões de Direitos Humanos importadas com sucesso!\n\n⚖️ DIREITOS HUMANOS (45 questões):\n\n• Teoria Geral dos DH (5)\n• Declaração Universal (5)\n• Pactos Internacionais (5)\n• Convenção Americana (5)\n• Sistema Interamericano (5)\n• DH na Constituição (5)\n• Tortura e Tratamento Desumano (5)\n• Direitos das Minorias (5)\n• Segurança Pública e DH (5)\n\nTOTAL: 45 QUESTÕES! 🎯🔥\n\nQuestões comentadas de concursos: CESPE, FCC, FGV, VUNESP!\n\nAgora você pode praticar! 🚀');
    } catch (error) {
      console.error('Error seeding Direitos Humanos questions:', error);
      alert('❌ Erro ao importar questões de Direitos Humanos. Verifique o console para mais detalhes.');
    } finally {
      setIsSeedingDireitosHumanos(false);
    }
  };

  const handleDeleteDesarmamento = async () => {
    setIsDeletingDesarmamento(true);
    try {
      console.log('🗑️ Deleting all Desarmamento questions...');
      
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-50734795/questions/policial/estatuto-do-desarmamento`,
        {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
            'Content-Type': 'application/json',
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to delete: ${response.status}`);
      }

      const result = await response.json();
      console.log('✅ Delete result:', result);

      alert(`✅ Questões de Estatuto do Desarmamento deletadas com sucesso!\n\n${result.message}\n\n🔒 Outras questões foram preservadas!\n🔄 Agora você pode importar novamente! 🔥`);
    } catch (error) {
      console.error('❌ Error deleting questions:', error);
      alert('❌ Erro ao deletar questões. Verifique o console para mais detalhes.');
    } finally {
      setIsDeletingDesarmamento(false);
    }
  };

  const handleSeedDesarmamentoOnly = async () => {
    setIsSeedingDesarmamento(true);
    try {
      await seedAllDesarmamentoQuestions();
      alert('✅ Questões de Estatuto do Desarmamento importadas com sucesso!\n\n🔫 ESTATUTO DO DESARMAMENTO (45 questões):\n\n• Sistema Nacional de Armas (SINARM) (5)\n• Registro de Armas (5)\n• Porte de Arma (5)\n• Crimes e Penas (5)\n• Competência (5)\n• Exceções ao Desarmamento (5)\n• Coleta de Armas (5)\n• Armas de Uso Restrito (5)\n• Disposições Gerais (5)\n\nTOTAL: 45 QUESTÕES! 🎯🔥\n\nQuestões comentadas de concursos: CESPE, FCC, FGV, VUNESP!\n\nAgora você pode praticar! 🚀');
    } catch (error) {
      console.error('Error seeding Desarmamento questions:', error);
      alert('❌ Erro ao importar questões de Estatuto do Desarmamento. Verifique o console para mais detalhes.');
    } finally {
      setIsSeedingDesarmamento(false);
    }
  };

  const handleDeleteLegislacaoPenalEspecial = async () => {
    setIsDeletingLegislacaoPenalEspecial(true);
    try {
      console.log('🗑️ Deleting all Legislação Penal Especial questions...');
      
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-50734795/questions/policial/legislacao-penal-especial`,
        {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
            'Content-Type': 'application/json',
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to delete: ${response.status}`);
      }

      const result = await response.json();
      console.log('✅ Delete result:', result);

      alert(`✅ Questões de Legislação Penal Especial deletadas com sucesso!\n\n${result.message}\n\n🔒 Outras questões foram preservadas!\n🔄 Agora você pode importar novamente! 🔥`);
    } catch (error) {
      console.error('❌ Error deleting questions:', error);
      alert('❌ Erro ao deletar questões. Verifique o console para mais detalhes.');
    } finally {
      setIsDeletingLegislacaoPenalEspecial(false);
    }
  };

  const handleSeedLegislacaoPenalEspecialOnly = async () => {
    setIsSeedingLegislacaoPenalEspecial(true);
    try {
      await seedAllLegislacaoPenalEspecialQuestions();
      alert('✅ Questões de Legislação Penal Especial importadas com sucesso!\n\n📕 LEGISLAÇÃO PENAL ESPECIAL (45 questões):\n\n• Crimes de Trânsito (CTB) (5)\n• Lei de Tortura (5)\n• Lei de Lavagem de Dinheiro (5)\n• Lei de Abuso de Autoridade (5)\n• Crimes Ambientais (5)\n• Estatuto do Idoso - Crimes (5)\n• ECA - Crimes (5)\n• Lei de Interceptação Telefônica (5)\n• Crimes Raciais (5)\n\nTOTAL: 45 QUESTÕES! 🎯🔥\n\nQuestões comentadas de concursos: CESPE, FCC, FGV, VUNESP!\n\nAgora você pode praticar! 🚀');
    } catch (error) {
      console.error('Error seeding Legislação Penal Especial questions:', error);
      alert('❌ Erro ao importar questões de Legislação Penal Especial. Verifique o console para mais detalhes.');
    } finally {
      setIsSeedingLegislacaoPenalEspecial(false);
    }
  };

  const handleDeleteLegislacaoPenal = async () => {
    setIsDeletingLegislacaoPenal(true);
    try {
      console.log('🗑️ Deleting all Legislação Penal questions...');
      
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-50734795/questions/policial/legislacao-penal`,
        {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
            'Content-Type': 'application/json',
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log('✅ Delete result:', result);

      alert(`✅ Questões de Legislação Penal deletadas com sucesso!\\n\\n${result.message}\\n\\n🔒 Outras questões foram preservadas!\\n🔄 Agora você pode importar novamente! 🔥`);
    } catch (error) {
      console.error('❌ Error deleting questions:', error);
      alert('❌ Erro ao deletar questões. Verifique o console para mais detalhes.');
    } finally {
      setIsDeletingLegislacaoPenal(false);
    }
  };

  const handleSeedLegislacaoPenalOnly = async () => {
    setIsSeedingLegislacaoPenal(true);
    try {
      await seedQuestionsLegislacaoPenal();
      alert('✅ Questões de Legislação Penal importadas com sucesso!\\n\\n🚔 LEGISLAÇÃO PENAL (65 questões - ATUALIZADO! 🔥):\\n\\n• Código Penal - Parte Geral (5)\\n• Crimes contra a Pessoa (15 - EXPANDIDO!)\\n• Crimes contra o Patrimônio (15 - EXPANDIDO!)\\n• Crimes contra a Administração (5)\\n• Lei de Drogas (5)\\n• Crimes Hediondos (5)\\n• Organização Criminosa (5)\\n• Violência Doméstica (5)\\n• Crimes de Trânsito (5)\\n\\nTOTAL: 65 QUESTÕES! 🎯🔥\\n\\nQuestões comentadas de concursos: CESPE, FCC, FGV, VUNESP!\\n\\nAgora você pode praticar! 🚀');
    } catch (error) {
      console.error('Error seeding Legislação Penal questions:', error);
      alert('❌ Erro ao importar questões de Legislação Penal. Verifique o console para mais detalhes.');
    } finally {
      setIsSeedingLegislacaoPenal(false);
    }
  };

  const handleDeleteMedicinaLegal = async () => {
    setIsDeletingMedicinaLegal(true);
    try {
      console.log('🗑️ Deleting all Medicina Legal questions...');
      
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-50734795/questions/policial/medicina-legal`,
        {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
            'Content-Type': 'application/json',
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to delete: ${response.status}`);
      }

      const result = await response.json();
      console.log('✅ Delete result:', result);

      alert(`✅ Questões de Medicina Legal deletadas com sucesso!\n\n${result.message}\n\n🔒 Outras questões foram preservadas!\n🔄 Agora você pode importar novamente! 🔥`);
    } catch (error) {
      console.error('❌ Error deleting questions:', error);
      alert('❌ Erro ao deletar questões. Verifique o console para mais detalhes.');
    } finally {
      setIsDeletingMedicinaLegal(false);
    }
  };

  const handleSeedMedicinaLegalOnly = async () => {
    setIsSeedingMedicinaLegal(true);
    try {
      await seedAllMedicinaLegalQuestions();
      alert('✅ Questões de Medicina Legal importadas com sucesso!\n\n🩺 MEDICINA LEGAL (45 questões):\n\n• Traumatologia Forense (5)\n• Tanatologia (Morte) (5)\n• Lesões Corporais (5)\n• Asfixias (5)\n• Sexologia Forense (5)\n• Toxicologia (5)\n• Antropologia Forense (5)\n• Documentos Médico-Legais (5)\n• Imputabilidade (5)\n\nTOTAL: 45 QUESTÕES! 🎯🔥\n\nQuestões comentadas de concursos: CESPE, FCC, FGV, VUNESP!\n\nAgora você pode praticar! 🚀');
    } catch (error) {
      console.error('Error seeding Medicina Legal questions:', error);
      alert('❌ Erro ao importar questões de Medicina Legal. Verifique o console para mais detalhes.');
    } finally {
      setIsSeedingMedicinaLegal(false);
    }
  };

  const handleDeleteEticaPolicial = async () => {
    setIsDeletingEticaPolicial(true);
    try {
      console.log('🗑️ Deleting all Ética Policial questions...');
      
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-50734795/questions/policial/etica-policial`,
        {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
            'Content-Type': 'application/json',
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to delete: ${response.status}`);
      }

      const result = await response.json();
      console.log('✅ Delete result:', result);

      alert(`✅ Questões de Ética Policial deletadas com sucesso!\\n\\n${result.message}\\n\\n🔒 Outras questões foram preservadas!\\n🔄 Agora você pode importar novamente! 🔥`);
    } catch (error) {
      console.error('❌ Error deleting questions:', error);
      alert('❌ Erro ao deletar questões. Verifique o console para mais detalhes.');
    } finally {
      setIsDeletingEticaPolicial(false);
    }
  };

  const handleSeedEticaPolicialOnly = async () => {
    setIsSeedingEticaPolicial(true);
    try {
      await seedAllEticaPolicialQuestions();
      alert('✅ Questões de Ética Policial importadas com sucesso!\\n\\n⚖️ ÉTICA POLICIAL (45 questões):\\n\\n• Código de Ética Policial (5)\\n• Princípios Éticos (5)\\n• Deveres do Policial (5)\\n• Proibições (5)\\n• Uso da Força (5)\\n• Abuso de Poder (5)\\n• Relacionamento com Comunidade (5)\\n• Direitos Humanos na Atividade Policial (5)\\n• Condutas Vedadas (5)\\n\\nTOTAL: 45 QUESTÕES! 🎯🔥\\n\\nQuestões comentadas de concursos: CESPE, FCC, FGV, VUNESP!\\n\\nAgora você pode praticar! 🚀');
    } catch (error) {
      console.error('Error seeding Ética Policial questions:', error);
      alert('❌ Erro ao importar questões de Ética Policial. Verifique o console para mais detalhes.');
    } finally {
      setIsSeedingEticaPolicial(false);
    }
  };

  const handleDeleteUsoProgressivoForca = async () => {
    setIsDeletingUsoProgressivoForca(true);
    try {
      console.log('🗑️ Deleting all Uso Progressivo da Força questions...');
      
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-50734795/questions/policial/uso-progressivo-da-forca`,
        {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
            'Content-Type': 'application/json',
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to delete: ${response.status}`);
      }

      const result = await response.json();
      console.log('✅ Delete result:', result);

      alert(`✅ Questões de Uso Progressivo da Força deletadas com sucesso!\\n\\n${result.message}\\n\\n🔒 Outras questões foram preservadas!\\n🔄 Agora você pode importar novamente! 🔥`);
    } catch (error) {
      console.error('❌ Error deleting questions:', error);
      alert('❌ Erro ao deletar questões. Verifique o console para mais detalhes.');
    } finally {
      setIsDeletingUsoProgressivoForca(false);
    }
  };

  const handleSeedUsoProgressivoForcaOnly = async () => {
    setIsSeedingUsoProgressivoForca(true);
    try {
      await seedAllUsoProgressivoForcaQuestions();
      alert('✅ Questões de Uso Progressivo da Força importadas com sucesso!\\n\\n⚡ USO PROGRESSIVO DA FORÇA (45 questões):\\n\\n• Princípios do Uso da Força (5)\\n• Níveis de Força (5)\\n• Presença Policial (5)\\n• Verbalização (5)\\n• Controle de Contato (5)\\n• Técnicas de Imobilização (5)\\n• Força Menos Letal (5)\\n• Força Letal (5)\\n• Relatório de Uso da Força (5)\\n\\nTOTAL: 45 QUESTÕES! 🎯🔥\\n\\nQuestões comentadas de concursos: CESPE, FCC, FGV, VUNESP!\\n\\nAgora você pode praticar! 🚀');
    } catch (error) {
      console.error('Error seeding Uso Progressivo da Força questions:', error);
      alert('❌ Erro ao importar questões de Uso Progressivo da Força. Verifique o console para mais detalhes.');
    } finally {
      setIsSeedingUsoProgressivoForca(false);
    }
  };

  const handleDeleteAbordagemTecnicas = async () => {
    setIsDeletingAbordagemTecnicas(true);
    try {
      console.log('🗑️ Deleting all Abordagem e Técnicas questions...');
      
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-50734795/questions/policial/abordagem-e-tecnicas`,
        {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
            'Content-Type': 'application/json',
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to delete: ${response.status}`);
      }

      const result = await response.json();
      console.log('✅ Delete result:', result);

      alert(`✅ Questões de Abordagem e Técnicas deletadas com sucesso!\\n\\n${result.message}\\n\\n🔒 Outras questões foram preservadas!\\n🔄 Agora você pode importar novamente! 🔥`);
    } catch (error) {
      console.error('❌ Error deleting questions:', error);
      alert('❌ Erro ao deletar questões. Verifique o console para mais detalhes.');
    } finally {
      setIsDeletingAbordagemTecnicas(false);
    }
  };

  const handleSeedAbordagemTecnicasOnly = async () => {
    setIsSeedingAbordagemTecnicas(true);
    try {
      await seedAllAbordagemTecnicasQuestions();
      alert('✅ Questões de Abordagem e Técnicas importadas com sucesso!\\n\\n👮 ABORDAGEM E TÉCNICAS (45 questões):\\n\\n• Abordagem a Pessoas (5)\\n• Abordagem a Veículos (5)\\n• Revista Pessoal (5)\\n• Algemação (5)\\n• Condução de Presos (5)\\n• Técnicas de Patrulhamento (5)\\n• Comunicação Operacional (5)\\n• Segurança em Ocorrências (5)\\n• Preservação de Local de Crime (5)\\n\\nTOTAL: 45 QUESTÕES! 🎯🔥\\n\\nQuestões comentadas de concursos: CESPE, FCC, FGV, VUNESP!\\n\\nAgora você pode praticar! 🚀');
    } catch (error) {
      console.error('Error seeding Abordagem e Técnicas questions:', error);
      alert('❌ Erro ao importar questões de Abordagem e Técnicas. Verifique o console para mais detalhes.');
    } finally {
      setIsSeedingAbordagemTecnicas(false);
    }
  };

  const handleDeleteEconomia = async () => {
    setIsDeletingEconomia(true);
    try {
      console.log('🗑️ Deleting all Economia questions...');
      
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-50734795/questions/fiscal/economia`,
        {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
            'Content-Type': 'application/json',
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to delete: ${response.status}`);
      }

      const result = await response.json();
      console.log('✅ Delete result:', result);

      alert(`✅ Questões de Economia deletadas com sucesso!\\n\\n${result.message}\\n\\n🔒 Outras questões foram preservadas!\\n🔄 Agora você pode importar novamente! 🔥`);
    } catch (error) {
      console.error('❌ Error deleting questions:', error);
      alert('❌ Erro ao deletar questões. Verifique o console para mais detalhes.');
    } finally {
      setIsDeletingEconomia(false);
    }
  };

  const handleSeedEconomiaOnly = async () => {
    setIsSeedingEconomia(true);
    try {
      await seedAllEconomiaQuestions();
      alert('✅ Questões de Economia importadas com sucesso!\\n\\n📊 ECONOMIA (45 questões):\\n\\n• Microeconomia (5)\\n• Macroeconomia (5)\\n• Política Fiscal e Monetária (5)\\n• Inflação (5)\\n• PIB e Crescimento Econômico (5)\\n• Comércio Internacional (5)\\n• Taxa de Câmbio (5)\\n• Mercado de Trabalho (5)\\n• Desenvolvimento Econômico (5)\\n\\nTOTAL: 45 QUESTÕES! 🎯🔥\\n\\nQuestões comentadas de concursos: CESPE, FCC, FGV, VUNESP!\\n\\nAgora você pode praticar! 🚀');
    } catch (error) {
      console.error('Error seeding Economia questions:', error);
      alert('❌ Erro ao importar questões de Economia. Verifique o console para mais detalhes.');
    } finally {
      setIsSeedingEconomia(false);
    }
  };

  const handleSeedSFN = async () => {
    setIsSeedingSFN(true);
    try {
      // PASSO 1: Deletar questões antigas (que não têm campo banca)
      console.log('🗑️ Deletando questões antigas de SFN...');
      const deleteTopics = [
        'conselho-monetario-nacional',
        'banco-central-do-brasil',
        'comissao-de-valores-mobiliarios',
        'bancos-comerciais',
        'bancos-de-investimento',
        'cooperativas-de-credito',
        'corretoras-e-distribuidoras',
        'sistema-de-pagamentos-brasileiro',
        'politica-monetaria'
      ];
      
      for (const topic of deleteTopics) {
        const deleteUrl = `https://${projectId}.supabase.co/functions/v1/make-server-50734795/questions/fiscal/sistema-financeiro-nacional/${topic}`;
        await fetch(deleteUrl, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
            'Content-Type': 'application/json',
          },
        });
      }
      
      console.log('✅ Questões antigas deletadas!');
      
      // PASSO 2: Importar questões novas (com campo banca)
      await seedAllSistemaFinanceiroNacionalQuestions();
      alert('✅ Questões de Sistema Financeiro Nacional importadas com sucesso!\\n\\n🏛️ SISTEMA FINANCEIRO NACIONAL (45 questões):\\n\\n• CMN - Conselho Monetário Nacional (5)\\n• BACEN - Banco Central do Brasil (5)\\n• CVM - Comissão de Valores Mobiliários (5)\\n• Bancos Comerciais (5)\\n• Bancos de Investimento (5)\\n• Cooperativas de Crédito (5)\\n• Corretoras e Distribuidoras (5)\\n• Sistema de Pagamentos Brasileiro (5)\\n• Política Monetária (5)\\n\\nTOTAL: 45 QUESTÕES! 🎯🔥\\n\\nQuestões comentadas baseadas em: CESPE, FCC, FGV, VUNESP!\\n\\nAgora você pode praticar! 🚀');
    } catch (error) {
      console.error('Error seeding SFN questions:', error);
      alert('❌ Erro ao importar questões de Sistema Financeiro Nacional. Verifique o console para mais detalhes.');
    } finally {
      setIsSeedingSFN(false);
    }
  };

  const handleSeedCienciasTecnologia = async () => {
    setIsSeedingCienciasTecnologia(true);
    try {
      await seedAllCienciasTecnologiaQuestions();
      alert('✅ Questões de CIÊNCIAS E TECNOLOGIA importadas com sucesso!\n\n🔬 CIÊNCIAS E TECNOLOGIA (45 questões):\n\n• Biologia e Saúde (5) - DNA, Vacinas, CRISPR, Células-tronco\n• Física e Química (5) - Relatividade, Bóson de Higgs, Ozônio\n• Astronomia e Espaço (5) - Sistema Solar, Buracos negros, James Webb\n• Inovações Tecnológicas (5) - 5G, Computação quântica, Blockchain\n• Inteligência Artificial (5) - Machine Learning, ChatGPT, Carros autônomos\n• Biotecnologia (5) - OGMs, Clonagem, PCR, Bioimpressão 3D\n• Energia e Sustentabilidade (5) - Hidrogênio verde, Economia circular\n• Pesquisa Científica (5) - Método científico, Big Data\n• Descobertas Recentes (5) - Ondas gravitacionais, Vacinas mRNA\n\nTOTAL: 45 QUESTÕES! 🎯🔥\n\nQuestões comentadas baseadas em:\nCESPE, FCC, FGV, VUNESP!\n\nCom Nobel laureados e descobertas de 2015-2024! 🚀🏆');
    } catch (error) {
      console.error('Error seeding Ciências e Tecnologia questions:', error);
      alert('❌ Erro ao importar questões de Ciências e Tecnologia. Verifique o console para mais detalhes.');
    } finally {
      setIsSeedingCienciasTecnologia(false);
    }
  };

  const handleSeedRaciocínioLogico = async () => {
    setIsSeedingRaciocínioLogico(true);
    try {
      await seedAllRaciocínioLogicoQuestions();
      alert('✅ Questões de RACIOCÍNIO LÓGICO importadas com sucesso!\n\n🧩 RACIOCÍNIO LÓGICO (45 questões):\n\n• Lógica Proposicional (5) - Negações, Equivalências, Tabelas-verdade\n• Lógica de Argumentação (5) - Modus Ponens/Tollens, Silogismos, Falácias\n• Sequências e Padrões (5) - PA, PG, Fibonacci, Padrões numéricos\n• Problemas Aritméticos (5) - Torneiras, Regra de três, Porcentagens\n• Raciocínio Quantitativo (5) - Conjuntos, Análise Combinatória, Médias\n• Análise Combinatória Básica (5) - Arranjo, Combinação, Permutação\n• Probabilidade (5) - Dados, Eventos independentes, Prob. condicional\n• Verdades e Mentiras (5) - Enigmas clássicos, Paradoxos lógicos\n• Diagramas Lógicos (5) - Venn, Silogismos visuais, Relações\n\nTOTAL: 45 QUESTÕES! 🎯🔥\n\nQuestões comentadas baseadas em:\nCESPE, FCC, FGV, VUNESP!\n\nCom explicações detalhadas e dicas! 🚀🧠');
    } catch (error) {
      console.error('Error seeding Raciocínio Lógico questions:', error);
      alert('❌ Erro ao importar questões de Raciocínio Lógico. Verifique o console para mais detalhes.');
    } finally {
      setIsSeedingRaciocínioLogico(false);
    }
  };

  const handleSeedDatabase = async () => {
    setIsSeeding(true);
    try {
      await seedQuestionsConstitucional();
      await seedQuestionsAdministrativo();
      await seedQuestionsAdministrativoExtra();
      await seedQuestionsAdministrativoFinal();
      await seedQuestionsCivil1();
      await seedQuestionsCivil2();
      await seedQuestionsCivil3();
      await seedQuestionsPenal1();
      await seedQuestionsPenal2();
      await seedQuestionsPenal3();
      await seedQuestionsPenal4();
      await seedQuestionsTrabalho1();
      await seedQuestionsTrabalho2();
      await seedQuestionsTrabalho3();
      await seedQuestionsTributario1();
      await seedQuestionsTributario2();
      await seedQuestionsTributario3();
      await seedQuestionsProcessualCivil1();
      await seedQuestionsProcessualCivil2();
      await seedQuestionsProcessualCivil3();
      await seedQuestionsEleitoral();
      await seedQuestionsLegislacaoPenal();
      await seedAllCriminalisticaQuestions();
      alert('✅ Banco de dados populado com sucesso!\n\n📚 DIREITO CONSTITUCIONAL (90 questões)\n🏛️ DIREITO ADMINISTRATIVO (90 questões)\n📜 DIREITO CIVIL (90 questões)\n⚔️ DIREITO PENAL (130 questões)\n👷 DIREITO DO TRABALHO (90 questões)\n💰 DIREITO TRIBUTÁRIO (90 questões)\n⚖️ DIREITO PROCESSUAL CIVIL (90 questões)\n🗳️ DIREITO ELEITORAL (40 questões)\n🚔 LEGISLAÇÃO PENAL ESPECIAL (45 questões)\n\n🔬 CRIMINALÍSTICA (45 questões - NOVO!):\n• Perícia Criminal (5)\n• Local de Crime (5)\n• Documentoscopia (5)\n• Balística Forense (5)\n• Papiloscopia (5)\n• Genética Forense (DNA) (5)\n• Fotografia Forense (5)\n• Toxicologia Forense (5)\n• Informática Forense (5)\n\nTOTAL: 710 QUESTÕES! 🎯🔥\n\nQuestões comentadas de concursos: CESPE, FCC, FGV, VUNESP!');
    } catch (error) {
      console.error('Error seeding database:', error);
      alert('❌ Erro ao popular banco de dados. Verifique o console para mais detalhes.');
    } finally {
      setIsSeeding(false);
    }
  };

  const areas: ThematicArea[] = [
    {
      id: 'juridica',
      name: 'Área Jurídica',
      icon: Scale,
      gradient: 'from-blue-600 via-blue-500 to-cyan-500',
      shadowColor: 'shadow-blue-500/50',
      borderColor: 'border-blue-400/30',
      subjects: [
        { 
          id: '1', 
          name: 'Direito Constitucional', 
          total: 300, 
          completed: 250, 
          accuracy: 85, 
          icon: '⚖️',
          topics: [
            { name: 'Direitos e Garantias Fundamentais', questions: 10 },
            { name: 'Organização do Estado', questions: 10 },
            { name: 'Poder Legislativo', questions: 10 },
            { name: 'Poder Executivo', questions: 10 },
            { name: 'Poder Judiciário', questions: 10 },
            { name: 'Controle de Constitucionalidade', questions: 10 },
            { name: 'Direitos Sociais', questions: 10 },
            { name: 'Princípios Fundamentais', questions: 10 },
            { name: 'Remédios Constitucionais', questions: 10 }
          ]
        },
        { 
          id: '2', 
          name: 'Direito Administrativo', 
          total: 280, 
          completed: 200, 
          accuracy: 78, 
          icon: '🏛️',
          topics: [
            { name: 'Princípios da Administração Pública', questions: 40 },
            { name: 'Atos Administrativos', questions: 38 },
            { name: 'Licitações e Contratos (Lei 14.133/2021)', questions: 45 },
            { name: 'Servidores Públicos', questions: 35 },
            { name: 'Poderes Administrativos', questions: 30 },
            { name: 'Improbidade Administrativa', questions: 32 },
            { name: 'Responsabilidade Civil do Estado', questions: 28 },
            { name: 'Serviços Públicos', questions: 22 },
            { name: 'Processo Administrativo', questions: 10 }
          ]
        },
        { 
          id: '3', 
          name: 'Direito Civil', 
          total: 350, 
          completed: 280, 
          accuracy: 82, 
          icon: '📜',
          topics: [
            { name: 'Parte Geral - Pessoas e Bens', questions: 10 },
            { name: 'Fatos Jurídicos', questions: 10 },
            { name: 'Obrigações', questions: 10 },
            { name: 'Contratos', questions: 10 },
            { name: 'Responsabilidade Civil', questions: 10 },
            { name: 'Direito das Coisas - Posse', questions: 10 },
            { name: 'Propriedade', questions: 10 },
            { name: 'Direito de Família', questions: 10 },
            { name: 'Direito das Sucessões', questions: 10 }
          ]
        },
        { 
          id: '4', 
          name: 'Direito Penal', 
          total: 290, 
          completed: 230, 
          accuracy: 88, 
          icon: '⚔️',
          topics: [
            { name: 'Aplicação da Lei Penal', questions: 30 },
            { name: 'Crime - Conceito e Elementos', questions: 35 },
            { name: 'Excludentes de Ilicitude', questions: 32 },
            { name: 'Concurso de Pessoas', questions: 28 },
            { name: 'Penas', questions: 38 },
            { name: 'Crimes contra a Pessoa', questions: 40 },
            { name: 'Crimes contra o Patrimônio', questions: 42 },
            { name: 'Crimes contra a Administração Pública', questions: 25 },
            { name: 'Prescrição e Decadência', questions: 20 }
          ]
        },
        { 
          id: '5', 
          name: 'Direito do Trabalho', 
          total: 220, 
          completed: 180, 
          accuracy: 80, 
          icon: '👷',
          topics: [
            { name: 'Relação de Emprego', questions: 28 },
            { name: 'Contrato de Trabalho', questions: 32 },
            { name: 'Jornada de Trabalho', questions: 30 },
            { name: 'Salário e Remuneração', questions: 25 },
            { name: 'Férias', questions: 22 },
            { name: 'FGTS', questions: 20 },
            { name: 'Aviso Prévio', questions: 18 },
            { name: 'Rescisão Contratual', questions: 25 },
            { name: 'Estabilidade', questions: 20 }
          ]
        },
        { 
          id: '6', 
          name: 'Direito Tributário', 
          total: 260, 
          completed: 210, 
          accuracy: 76, 
          icon: '💰',
          topics: [
            { name: 'Sistema Tributário Nacional', questions: 32 },
            { name: 'Competência Tributária', questions: 28 },
            { name: 'Princípios Tributários', questions: 30 },
            { name: 'Impostos', questions: 35 },
            { name: 'Taxas', questions: 25 },
            { name: 'Contribuições', questions: 28 },
            { name: 'Obrigação Tributária', questions: 30 },
            { name: 'Crédito Tributário', questions: 27 },
            { name: 'Administração Tributária', questions: 25 }
          ]
        },
        { 
          id: '7', 
          name: 'Direito Processual Civil', 
          total: 310, 
          completed: 240, 
          accuracy: 79, 
          icon: '⚖️',
          topics: [
            { name: 'Jurisdição e Competência', questions: 38 },
            { name: 'Partes e Procuradores', questions: 32 },
            { name: 'Petição Inicial', questions: 30 },
            { name: 'Contestação', questions: 28 },
            { name: 'Provas', questions: 42 },
            { name: 'Sentença', questions: 35 },
            { name: 'Recursos', questions: 45 },
            { name: 'Execução', questions: 38 },
            { name: 'Tutelas Provisórias', questions: 22 }
          ]
        },
        { 
          id: '8', 
          name: 'Direito Processual Penal', 
          total: 270, 
          completed: 220, 
          accuracy: 84, 
          icon: '🔍',
          topics: [
            { name: 'Inquérito Policial', questions: 32 },
            { name: 'Ação Penal', questions: 35 },
            { name: 'Competência', questions: 30 },
            { name: 'Provas', questions: 40 },
            { name: 'Prisões e Liberdade Provisória', questions: 38 },
            { name: 'Procedimentos', questions: 35 },
            { name: 'Júri', questions: 25 },
            { name: 'Recursos', questions: 22 },
            { name: 'Execução Penal', questions: 13 }
          ]
        },
        { 
          id: '9', 
          name: 'Direito Eleitoral', 
          total: 180, 
          completed: 150, 
          accuracy: 86, 
          icon: '🗳️',
          topics: [
            { name: 'Direitos Políticos', questions: 25 },
            { name: 'Partidos Políticos', questions: 22 },
            { name: 'Elegibilidade e Inelegibilidades', questions: 28 },
            { name: 'Registro de Candidatura', questions: 20 },
            { name: 'Propaganda Eleitoral', questions: 25 },
            { name: 'Crimes Eleitorais', questions: 22 },
            { name: 'Processo Eleitoral', questions: 18 },
            { name: 'Justiça Eleitoral', questions: 12 },
            { name: 'Recursos Eleitorais', questions: 8 }
          ]
        },
        { 
          id: '10', 
          name: 'Direito Empresarial', 
          total: 240, 
          completed: 190, 
          accuracy: 77, 
          icon: '🏢',
          topics: [
            { name: 'Empresa e Empresário', questions: 30 },
            { name: 'Sociedades', questions: 35 },
            { name: 'Sociedade Anônima', questions: 32 },
            { name: 'Sociedade Limitada', questions: 28 },
            { name: 'Títulos de Crédito', questions: 30 },
            { name: 'Falência e Recuperação', questions: 32 },
            { name: 'Contratos Empresariais', questions: 25 },
            { name: 'Propriedade Industrial', questions: 18 },
            { name: 'Direito do Consumidor', questions: 10 }
          ]
        },
      ]
    },
    {
      id: 'policial',
      name: 'Área Policial',
      icon: Shield,
      gradient: 'from-red-600 via-red-500 to-rose-600',
      shadowColor: 'shadow-red-500/50',
      borderColor: 'border-red-400/30',
      subjects: [
        { 
          id: '11', 
          name: 'Legislação Penal', 
          total: 250, 
          completed: 200, 
          accuracy: 82, 
          icon: '⚔️',
          topics: [
            { name: 'Código Penal - Parte Geral', questions: 40 },
            { name: 'Crimes contra a Pessoa', questions: 35 },
            { name: 'Crimes contra o Patrimônio', questions: 38 },
            { name: 'Crimes contra a Administração', questions: 32 },
            { name: 'Lei de Drogas (Lei 11.343/2006)', questions: 30 },
            { name: 'Crimes Hediondos (Lei 8.072/90)', questions: 25 },
            { name: 'Organização Criminosa (Lei 12.850/2013)', questions: 22 },
            { name: 'Violência Doméstica (Lei Maria da Penha)', questions: 18 },
            { name: 'Crimes de Trânsito', questions: 10 }
          ]
        },
        { 
          id: '12', 
          name: 'Processo Penal', 
          total: 230, 
          completed: 180, 
          accuracy: 79, 
          icon: '📋',
          topics: [
            { name: 'Inquérito Policial', questions: 35 },
            { name: 'Provas', questions: 40 },
            { name: 'Prisões (Flagrante, Preventiva, Temporária)', questions: 42 },
            { name: 'Medidas Cautelares', questions: 28 },
            { name: 'Busca e Apreensão', questions: 25 },
            { name: 'Interceptação Telefônica', questions: 20 },
            { name: 'Ação Penal', questions: 22 },
            { name: 'Competência', questions: 12 },
            { name: 'Procedimentos', questions: 6 }
          ]
        },
        { 
          id: '13', 
          name: 'Criminalística', 
          total: 180, 
          completed: 140, 
          accuracy: 85, 
          icon: '🔬',
          topics: [
            { name: 'Perícia Criminal', questions: 25 },
            { name: 'Local de Crime', questions: 28 },
            { name: 'Documentoscopia', questions: 22 },
            { name: 'Balística Forense', questions: 20 },
            { name: 'Papiloscopia', questions: 18 },
            { name: 'Genética Forense (DNA)', questions: 22 },
            { name: 'Fotografia Forense', questions: 15 },
            { name: 'Toxicologia Forense', questions: 18 },
            { name: 'Informática Forense', questions: 12 }
          ]
        },
        { 
          id: '14', 
          name: 'Direitos Humanos', 
          total: 160, 
          completed: 130, 
          accuracy: 88, 
          icon: '✊',
          topics: [
            { name: 'Declaração Universal dos Direitos Humanos', questions: 25 },
            { name: 'Pacto de San José da Costa Rica', questions: 22 },
            { name: 'Direitos Civis e Políticos', questions: 20 },
            { name: 'Direitos Econômicos, Sociais e Culturais', questions: 18 },
            { name: 'Sistema Global de Proteção', questions: 20 },
            { name: 'Sistema Interamericano', questions: 18 },
            { name: 'Grupos Vulneráveis', questions: 15 },
            { name: 'Mecanismos de Proteção', questions: 12 },
            { name: 'Tortura e Tratamento Cruel', questions: 10 }
          ]
        },
        { 
          id: '15', 
          name: 'Estatuto do Desarmamento', 
          total: 140, 
          completed: 110, 
          accuracy: 76, 
          icon: '🔫',
          topics: [
            { name: 'Sistema Nacional de Armas (SINARM)', questions: 20 },
            { name: 'Registro de Armas', questions: 18 },
            { name: 'Porte de Arma', questions: 22 },
            { name: 'Crimes e Penas', questions: 25 },
            { name: 'Competência', questions: 15 },
            { name: 'Exceções ao Desarmamento', questions: 12 },
            { name: 'Coleta de Armas', questions: 10 },
            { name: 'Armas de Uso Restrito', questions: 12 },
            { name: 'Disposições Gerais', questions: 6 }
          ]
        },
        { 
          id: '16', 
          name: 'Legislação Penal Especial', 
          total: 200, 
          completed: 160, 
          accuracy: 81, 
          icon: '📕',
          topics: [
            { name: 'Crimes de Trânsito (CTB)', questions: 28 },
            { name: 'Lei de Tortura', questions: 22 },
            { name: 'Lei de Lavagem de Dinheiro', questions: 25 },
            { name: 'Lei de Abuso de Autoridade', questions: 24 },
            { name: 'Crimes Ambientais', questions: 20 },
            { name: 'Estatuto do Idoso - Crimes', questions: 18 },
            { name: 'ECA - Crimes', questions: 22 },
            { name: 'Lei de Interceptação Telefônica', questions: 16 },
            { name: 'Crimes Raciais', questions: 25 }
          ]
        },
        { 
          id: '17', 
          name: 'Medicina Legal', 
          total: 170, 
          completed: 135, 
          accuracy: 83, 
          icon: '🩺',
          topics: [
            { name: 'Traumatologia Forense', questions: 25 },
            { name: 'Tanatologia (Morte)', questions: 28 },
            { name: 'Lesões Corporais', questions: 22 },
            { name: 'Asfixias', questions: 20 },
            { name: 'Sexologia Forense', questions: 18 },
            { name: 'Toxicologia', questions: 20 },
            { name: 'Antropologia Forense', questions: 15 },
            { name: 'Documentos Médico-Legais', questions: 12 },
            { name: 'Imputabilidade', questions: 10 }
          ]
        },
        { 
          id: '18', 
          name: 'Ética Policial', 
          total: 150, 
          completed: 125, 
          accuracy: 90, 
          icon: '🎖️',
          topics: [
            { name: 'Código de Ética Policial', questions: 25 },
            { name: 'Princípios Éticos', questions: 22 },
            { name: 'Deveres do Policial', questions: 20 },
            { name: 'Proibições', questions: 18 },
            { name: 'Uso da Força', questions: 20 },
            { name: 'Abuso de Poder', questions: 15 },
            { name: 'Relacionamento com a Comunidade', questions: 12 },
            { name: 'Direitos Humanos na Atividade Policial', questions: 10 },
            { name: 'Condutas Vedadas', questions: 8 }
          ]
        },
        { 
          id: '19', 
          name: 'Uso Progressivo da Força', 
          total: 130, 
          completed: 100, 
          accuracy: 77, 
          icon: '🛡️',
          topics: [
            { name: 'Princípios do Uso da Força', questions: 20 },
            { name: 'Níveis de Força', questions: 22 },
            { name: 'Presença Policial', questions: 15 },
            { name: 'Verbalização', questions: 16 },
            { name: 'Controle de Contato', questions: 14 },
            { name: 'Técnicas de Imobilização', questions: 12 },
            { name: 'Força Menos Letal', questions: 15 },
            { name: 'Força Letal', questions: 10 },
            { name: 'Relatório de Uso da Força', questions: 6 }
          ]
        },
        { 
          id: '20', 
          name: 'Abordagem e Técnicas', 
          total: 190, 
          completed: 155, 
          accuracy: 84, 
          icon: '👮',
          topics: [
            { name: 'Abordagem a Pessoas', questions: 28 },
            { name: 'Abordagem a Veículos', questions: 25 },
            { name: 'Revista Pessoal', questions: 22 },
            { name: 'Algemação', questions: 20 },
            { name: 'Condução de Presos', questions: 18 },
            { name: 'Técnicas de Patrulhamento', questions: 20 },
            { name: 'Comunicação Operacional', questions: 16 },
            { name: 'Segurança em Ocorrências', questions: 24 },
            { name: 'Preservação de Local de Crime', questions: 17 }
          ]
        },
      ]
    },
    {
      id: 'gerais',
      name: 'Conhecimentos Gerais',
      icon: Brain,
      gradient: 'from-purple-600 via-fuchsia-500 to-pink-600',
      shadowColor: 'shadow-purple-500/50',
      borderColor: 'border-purple-400/30',
      subjects: [
        { 
          id: '21', 
          name: 'Português', 
          total: 300, 
          completed: 280, 
          accuracy: 92, 
          icon: '📝',
          topics: [
            { name: 'Interpretação de Texto', questions: 40 },
            { name: 'Gramática', questions: 38 },
            { name: 'Sintaxe', questions: 35 },
            { name: 'Morfologia', questions: 32 },
            { name: 'Ortografia e Acentuação', questions: 30 },
            { name: 'Pontuação', questions: 25 },
            { name: 'Concordância Verbal e Nominal', questions: 35 },
            { name: 'Regência Verbal e Nominal', questions: 30 },
            { name: 'Crase', questions: 35 }
          ]
        },
        { 
          id: '22', 
          name: 'Informática', 
          total: 280, 
          completed: 240, 
          accuracy: 90, 
          icon: '💻',
          topics: [
            { name: 'Windows e Linux', questions: 35 },
            { name: 'Microsoft Office (Word, Excel, PowerPoint)', questions: 40 },
            { name: 'Internet e Navegadores', questions: 32 },
            { name: 'E-mail e Webmail', questions: 25 },
            { name: 'Segurança da Informação', questions: 38 },
            { name: 'Backup e Armazenamento', questions: 25 },
            { name: 'Redes de Computadores', questions: 30 },
            { name: 'Hardware e Software', questions: 28 },
            { name: 'Cloud Computing', questions: 27 }
          ]
        },
        { 
          id: '23', 
          name: 'Atualidades', 
          total: 270, 
          completed: 245, 
          accuracy: 88, 
          icon: '📰',
          topics: [
            { name: 'Política Nacional', questions: 35 },
            { name: 'Economia Brasileira', questions: 32 },
            { name: 'Política Internacional', questions: 30 },
            { name: 'Questões Sociais', questions: 28 },
            { name: 'Meio Ambiente e Sustentabilidade', questions: 30 },
            { name: 'Ciência e Tecnologia', questions: 32 },
            { name: 'Cultura e Esportes', questions: 25 },
            { name: 'Saúde Pública', questions: 30 },
            { name: 'Segurança Pública', questions: 28 }
          ]
        },
        { 
          id: '24', 
          name: 'História do Brasil', 
          total: 250, 
          completed: 220, 
          accuracy: 86, 
          icon: '🇧🇷',
          topics: [
            { name: 'Brasil Colônia', questions: 30 },
            { name: 'Brasil Império', questions: 28 },
            { name: 'Primeira República', questions: 25 },
            { name: 'Era Vargas', questions: 32 },
            { name: 'Ditadura Militar', questions: 35 },
            { name: 'Redemocratização', questions: 30 },
            { name: 'Brasil Contemporâneo', questions: 28 },
            { name: 'Movimentos Sociais', questions: 22 },
            { name: 'Formação Territorial', questions: 20 }
          ]
        },
        { 
          id: '25', 
          name: 'Geografia do Brasil', 
          total: 230, 
          completed: 195, 
          accuracy: 84, 
          icon: '🗺️',
          topics: [
            { name: 'Aspectos Físicos', questions: 30 },
            { name: 'Clima e Vegetação', questions: 28 },
            { name: 'Hidrografia', questions: 25 },
            { name: 'População Brasileira', questions: 32 },
            { name: 'Urbanização', questions: 28 },
            { name: 'Indústria', questions: 25 },
            { name: 'Agropecuária', questions: 27 },
            { name: 'Energia e Recursos Naturais', questions: 20 },
            { name: 'Regiões Brasileiras', questions: 15 }
          ]
        },
        { 
          id: '26', 
          name: 'Cultura Geral', 
          total: 280, 
          completed: 250, 
          accuracy: 89, 
          icon: '🎭',
          topics: [
            { name: 'Literatura Brasileira', questions: 35 },
            { name: 'Literatura Mundial', questions: 32 },
            { name: 'Artes Plásticas', questions: 28 },
            { name: 'Música', questions: 30 },
            { name: 'Cinema', questions: 32 },
            { name: 'Teatro', questions: 25 },
            { name: 'Arquitetura', questions: 22 },
            { name: 'Manifestações Culturais', questions: 40 },
            { name: 'Patrimônio Cultural', questions: 36 }
          ]
        },
        { 
          id: '27', 
          name: 'Política e Cidadania', 
          total: 210, 
          completed: 180, 
          accuracy: 85, 
          icon: '🏛️',
          topics: [
            { name: 'Sistema Político Brasileiro', questions: 28 },
            { name: 'Partidos Políticos', questions: 22 },
            { name: 'Eleições', questions: 25 },
            { name: 'Políticas Públicas', questions: 27 },
            { name: 'Direitos e Deveres do Cidadão', questions: 30 },
            { name: 'Democracia e Participação', questions: 25 },
            { name: 'Organizações Internacionais', questions: 23 },
            { name: 'Movimentos Sociais', questions: 18 },
            { name: 'Ética e Cidadania', questions: 12 }
          ]
        },
        { 
          id: '28', 
          name: 'Meio Ambiente', 
          total: 200, 
          completed: 170, 
          accuracy: 83, 
          icon: '🌳',
          topics: [
            { name: 'Ecologia', questions: 25 },
            { name: 'Biomas Brasileiros', questions: 28 },
            { name: 'Mudanças Climáticas', questions: 30 },
            { name: 'Desmatamento', questions: 22 },
            { name: 'Recursos Hídricos', questions: 20 },
            { name: 'Energia Renovável', questions: 18 },
            { name: 'Desenvolvimento Sustentável', questions: 22 },
            { name: 'Legislação Ambiental', questions: 20 },
            { name: 'Conferências Ambientais', questions: 15 }
          ]
        },
        { 
          id: '29', 
          name: 'Ciências e Tecnologia', 
          total: 240, 
          completed: 210, 
          accuracy: 87, 
          icon: '🔬',
          topics: [
            { name: 'Biologia e Saúde', questions: 30 },
            { name: 'Física e Química', questions: 28 },
            { name: 'Astronomia e Espaço', questions: 25 },
            { name: 'Inovações Tecnológicas', questions: 32 },
            { name: 'Inteligência Artificial', questions: 28 },
            { name: 'Biotecnologia', questions: 22 },
            { name: 'Energia e Sustentabilidade', questions: 25 },
            { name: 'Pesquisa Científica', questions: 20 },
            { name: 'Descobertas Recentes', questions: 30 }
          ]
        },
        { 
          id: '30', 
          name: 'Raciocínio Lógico', 
          total: 260, 
          completed: 235, 
          accuracy: 90, 
          icon: '🧩',
          topics: [
            { name: 'Lógica Proposicional', questions: 32 },
            { name: 'Lógica de Argumentação', questions: 28 },
            { name: 'Sequências e Padrões', questions: 30 },
            { name: 'Problemas Aritméticos', questions: 35 },
            { name: 'Raciocínio Quantitativo', questions: 30 },
            { name: 'Análise Combinatória Básica', questions: 25 },
            { name: 'Probabilidade', questions: 22 },
            { name: 'Verdades e Mentiras', questions: 28 },
            { name: 'Diagramas Lógicos', questions: 30 }
          ]
        },
      ]
    },
    {
      id: 'fiscal',
      name: 'Fiscal-Bancária',
      icon: DollarSign,
      gradient: 'from-yellow-500 via-amber-500 to-orange-500',
      shadowColor: 'shadow-yellow-500/50',
      borderColor: 'border-yellow-400/30',
      subjects: [
        { 
          id: '31', 
          name: 'Economia', 
          total: 270, 
          completed: 220, 
          accuracy: 81, 
          icon: '📊',
          topics: [
            { name: 'Microeconomia', questions: 35 },
            { name: 'Macroeconomia', questions: 38 },
            { name: 'Política Fiscal e Monetária', questions: 32 },
            { name: 'Inflação', questions: 28 },
            { name: 'PIB e Crescimento Econômico', questions: 30 },
            { name: 'Comércio Internacional', questions: 25 },
            { name: 'Taxa de Câmbio', questions: 22 },
            { name: 'Mercado de Trabalho', questions: 35 },
            { name: 'Desenvolvimento Econômico', questions: 25 }
          ]
        },
        { 
          id: '32', 
          name: 'Matemática Financeira', 
          total: 300, 
          completed: 250, 
          accuracy: 83, 
          icon: '🧮',
          topics: [
            { name: 'Porcentagem', questions: 35 },
            { name: 'Juros Simples', questions: 38 },
            { name: 'Juros Compostos', questions: 40 },
            { name: 'Descontos', questions: 32 },
            { name: 'Taxas de Juros', questions: 30 },
            { name: 'Amortização', questions: 35 },
            { name: 'Sistema Price e SAC', questions: 28 },
            { name: 'Equivalência de Capitais', questions: 32 },
            { name: 'Rendas e Anuidades', questions: 30 }
          ]
        },
        { 
          id: '33', 
          name: 'Contabilidade Geral', 
          total: 320, 
          completed: 270, 
          accuracy: 84, 
          icon: '📒',
          topics: [
            { name: 'Patrimônio', questions: 40 },
            { name: 'Contas Contábeis', questions: 38 },
            { name: 'Balanço Patrimonial', questions: 42 },
            { name: 'DRE - Demonstração do Resultado', questions: 40 },
            { name: 'Lançamentos Contábeis', questions: 35 },
            { name: 'Depreciação', questions: 30 },
            { name: 'Regime de Competência e Caixa', questions: 28 },
            { name: 'Provisões', questions: 32 },
            { name: 'Análise de Balanços', questions: 35 }
          ]
        },
        { 
          id: '34', 
          name: 'Contabilidade Pública', 
          total: 280, 
          completed: 230, 
          accuracy: 82, 
          icon: '🏦',
          topics: [
            { name: 'Princípios da Contabilidade Pública', questions: 35 },
            { name: 'Receita Pública', questions: 38 },
            { name: 'Despesa Pública', questions: 40 },
            { name: 'Lei de Responsabilidade Fiscal', questions: 42 },
            { name: 'Balanço Orçamentário', questions: 32 },
            { name: 'Balanço Financeiro', questions: 28 },
            { name: 'Balanço Patrimonial Público', questions: 30 },
            { name: 'Dívida Ativa', questions: 20 },
            { name: 'Restos a Pagar', questions: 15 }
          ]
        },
        { 
          id: '35', 
          name: 'Auditoria', 
          total: 260, 
          completed: 210, 
          accuracy: 80, 
          icon: '🔍',
          topics: [
            { name: 'Conceitos e Objetivos da Auditoria', questions: 30 },
            { name: 'Auditoria Interna', questions: 32 },
            { name: 'Auditoria Externa', questions: 35 },
            { name: 'Auditoria Governamental', questions: 38 },
            { name: 'Normas de Auditoria', questions: 30 },
            { name: 'Procedimentos de Auditoria', questions: 32 },
            { name: 'Papéis de Trabalho', questions: 25 },
            { name: 'Relatório de Auditoria', questions: 23 },
            { name: 'Controle Interno', questions: 15 }
          ]
        },
        { 
          id: '36', 
          name: 'Orçamento Público', 
          total: 240, 
          completed: 200, 
          accuracy: 78, 
          icon: '💵',
          topics: [
            { name: 'Princípios Orçamentários', questions: 35 },
            { name: 'Ciclo Orçamentário', questions: 30 },
            { name: 'PPA - Plano Plurianual', questions: 28 },
            { name: 'LDO - Lei de Diretrizes Orçamentárias', questions: 30 },
            { name: 'LOA - Lei Orçamentária Anual', questions: 32 },
            { name: 'Créditos Adicionais', questions: 25 },
            { name: 'Classificação Orçamentária', questions: 28 },
            { name: 'Execução Orçamentária', questions: 20 },
            { name: 'Controle e Fiscalização', questions: 12 }
          ]
        },
        { 
          id: '37', 
          name: 'Administração Financeira', 
          total: 250, 
          completed: 205, 
          accuracy: 82, 
          icon: '💼',
          topics: [
            { name: 'Análise de Investimentos', questions: 32 },
            { name: 'Valor Presente Líquido (VPL)', questions: 30 },
            { name: 'Taxa Interna de Retorno (TIR)', questions: 28 },
            { name: 'Payback', questions: 25 },
            { name: 'Estrutura de Capital', questions: 30 },
            { name: 'Custo de Capital', questions: 28 },
            { name: 'Administração do Capital de Giro', questions: 32 },
            { name: 'Risco e Retorno', questions: 25 },
            { name: 'Alavancagem Financeira', questions: 20 }
          ]
        },
        { 
          id: '38', 
          name: 'Sistema Financeiro Nacional', 
          total: 230, 
          completed: 190, 
          accuracy: 83, 
          icon: '🏛️',
          topics: [
            { name: 'Conselho Monetário Nacional (CMN)', questions: 28 },
            { name: 'Banco Central do Brasil (BACEN)', questions: 35 },
            { name: 'Comissão de Valores Mobiliários (CVM)', questions: 30 },
            { name: 'Bancos Comerciais', questions: 25 },
            { name: 'Bancos de Investimento', questions: 22 },
            { name: 'Cooperativas de Crédito', questions: 20 },
            { name: 'Corretoras e Distribuidoras', questions: 25 },
            { name: 'Sistema de Pagamentos Brasileiro', questions: 28 },
            { name: 'Política Monetária', questions: 17 }
          ]
        },
        { 
          id: '39', 
          name: 'Mercado de Capitais', 
          total: 220, 
          completed: 180, 
          accuracy: 81, 
          icon: '📈',
          topics: [
            { name: 'Ações', questions: 35 },
            { name: 'Debêntures', questions: 28 },
            { name: 'Fundos de Investimento', questions: 32 },
            { name: 'Bolsa de Valores', questions: 30 },
            { name: 'Títulos Públicos', questions: 25 },
            { name: 'Derivativos (Opções, Futuros)', questions: 22 },
            { name: 'Análise Fundamentalista', questions: 18 },
            { name: 'Análise Técnica', questions: 20 },
            { name: 'Risco e Diversificação', questions: 10 }
          ]
        },
        { 
          id: '40', 
          name: 'Produtos Bancários', 
          total: 210, 
          completed: 175, 
          accuracy: 83, 
          icon: '💳',
          topics: [
            { name: 'Conta Corrente', questions: 25 },
            { name: 'Poupança', questions: 22 },
            { name: 'Cartão de Crédito', questions: 28 },
            { name: 'Cartão de Débito', questions: 20 },
            { name: 'Empréstimos e Financiamentos', questions: 30 },
            { name: 'Cheque Especial', questions: 18 },
            { name: 'Câmbio', questions: 20 },
            { name: 'Capitalização', questions: 22 },
            { name: 'Previdência Privada', questions: 25 }
          ]
        },
      ]
    }
  ];

  const currentArea = areas.find(area => area.id === selectedArea) || areas[0];
  
  // Calcular estatísticas totais da área usando dados reais do usuário
  const areaStats = getAreaStats(selectedArea);
  const totalStats = getTotalStats();
  
  // Total de questões disponíveis na área (estático do banco)
  const totalQuestions = currentArea.subjects.reduce((sum, s) => sum + s.total, 0);
  
  // Questões resolvidas pelo usuário (dinâmico)
  const completedQuestions = areaStats.completed || 0;
  
  // Acurácia média do usuário (dinâmico)
  const avgAccuracy = areaStats.avgAccuracy || 0;

  const AreaIcon = currentArea.icon;

  const toggleSubject = (subjectId: string) => {
    setExpandedSubject(expandedSubject === subjectId ? null : subjectId);
  };

  // If we have practice params, render QuestionPractice component
  if (practiceParams) {
    return (
      <QuestionPractice
        onBack={onBackFromPractice || onBack}
        area={practiceParams.area}
        subject={practiceParams.subject}
        topic={practiceParams.topic}
        topicName={practiceParams.topicName}
      />
    );
  }

  return (
    <div className="min-h-screen pb-12">
      {/* Header com Botão Voltar */}
      <div className="mb-6">
        <button
          onClick={onBack}
          className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 transition-all shadow-lg hover:shadow-xl hover:scale-105 border border-gray-600"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Voltar</span>
        </button>
      </div>

      {/* Título Animado com Ícone */}
      <div className="flex items-center gap-4 mb-6 animate-fade-in">
        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${currentArea.gradient} flex items-center justify-center shadow-2xl ${currentArea.shadowColor} animate-pulse-slow`}>
          <AreaIcon className="w-9 h-9 text-white" />
        </div>
        <div>
          <h2 className="text-4xl bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent animate-gradient">
            Questões por Matéria e Tema
          </h2>
          <p className="text-gray-400 mt-1">Pratique por área temática, matéria e tópicos específicos</p>
        </div>
      </div>

      {/* Cards de Estatísticas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
        {/* Total de Questões */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 p-4 shadow-xl shadow-blue-500/20 border border-blue-400/20 hover:scale-105 transition-all duration-300 animate-slide-in-left">
          <div className="absolute top-0 right-0 w-20 h-20 bg-white/5 rounded-full -mr-10 -mt-10"></div>
          <div className="relative">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                <Book className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm text-blue-200">Total de Questões</span>
            </div>
            <div className="text-4xl mt-1 animate-count-up">{totalQuestions}</div>
          </div>
        </div>

        {/* Resolvidas */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-600 to-emerald-700 p-4 shadow-xl shadow-green-500/20 border border-green-400/20 hover:scale-105 transition-all duration-300 animate-slide-in-up">
          <div className="absolute top-0 right-0 w-20 h-20 bg-white/5 rounded-full -mr-10 -mt-10"></div>
          <div className="relative">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                <Target className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm text-green-200">Resolvidas</span>
            </div>
            <div className="text-4xl mt-1 animate-count-up">{completedQuestions}</div>
          </div>
        </div>

        {/* Acurácia Média */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-600 to-fuchsia-700 p-4 shadow-xl shadow-purple-500/20 border border-purple-400/20 hover:scale-105 transition-all duration-300 animate-slide-in-right">
          <div className="absolute top-0 right-0 w-20 h-20 bg-white/5 rounded-full -mr-10 -mt-10"></div>
          <div className="relative">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm text-purple-200">Acurácia Média</span>
            </div>
            <div className="text-4xl mt-1 animate-count-up">{avgAccuracy}%</div>
          </div>
        </div>
      </div>

      {/* Filtros de Área */}
      <div className="mb-6">
        <div className="flex flex-wrap gap-2">
          {areas.map((area) => {
            const Icon = area.icon;
            const isActive = area.id === selectedArea;
            return (
              <button
                key={area.id}
                onClick={() => {
                  setSelectedArea(area.id);
                  setExpandedSubject(null);
                }}
                className={`px-4 py-2 text-sm rounded-full transition-all duration-300 flex items-center gap-2 border-2 ${
                  isActive
                    ? `bg-gradient-to-r ${area.gradient} shadow-xl ${area.shadowColor} scale-105 border-white/30`
                    : 'bg-gray-800/50 hover:bg-gray-700/50 border-gray-600 hover:scale-105'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className={isActive ? '' : 'text-gray-300'}>{area.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Lista de Matérias com Temas */}
      <div className="grid grid-cols-1 gap-4">
        {currentArea.subjects.map((subject, index) => {
          const progress = (subject.completed / subject.total) * 100;
          const isCompleted = progress === 100;
          const isExpanded = expandedSubject === subject.id;
          
          return (
            <div
              key={subject.id}
              className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br ${currentArea.gradient} p-6 shadow-xl ${currentArea.shadowColor} border ${currentArea.borderColor} transition-all duration-300 animate-fade-in-up ${
                isExpanded ? 'scale-[1.02]' : 'hover:scale-[1.01]'
              }`}
              style={{ animationDelay: `${index * 0.03}s` }}
            >
              {/* Shimmer Effect */}
              <div className="absolute inset-0 shimmer-effect opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-24 h-24 bg-white/5 rounded-full blur-2xl"></div>
              
              <div className="relative">
                {/* Header - Clicável para expandir */}
                <div 
                  className="cursor-pointer"
                  onClick={() => toggleSubject(subject.id)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3 flex-1">
                      <div className="text-4xl">{subject.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h3 className="text-2xl tracking-tight">{subject.name}</h3>
                          {isCompleted && (
                            <span className="ml-2 px-2 py-1 rounded-lg bg-green-500/20 text-green-300 text-xs">
                              ✓ Completo
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-400 mt-1">
                          {subject.total} questões disponíveis
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div className="text-2xl mb-1">
                          <span className={`${isCompleted ? 'text-green-400' : 'text-blue-400'}`}>
                            {subject.completed}
                          </span>
                          <span className="text-gray-500">/{subject.total}</span>
                        </div>
                        <div className="text-xs text-gray-400">Questões</div>
                      </div>
                      <div className="text-right">
                        <div className={`text-2xl mb-1 ${
                          subject.accuracy >= 80 ? 'text-green-400' : 
                          subject.accuracy >= 60 ? 'text-yellow-400' : 'text-red-400'
                        }`}>
                          {subject.accuracy}%
                        </div>
                        <div className="text-xs text-gray-400">Acertos</div>
                      </div>
                      <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                        {isExpanded ? (
                          <ChevronUp className="w-5 h-5" />
                        ) : (
                          <ChevronDown className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="mt-4 bg-gray-800/50 rounded-full h-2 overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        isCompleted ? 'bg-green-500' : 'bg-blue-500'
                      }`}
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                </div>
                
                {/* Topics List - Expansível */}
                {isExpanded && (
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <h4 className="text-sm uppercase tracking-wider text-gray-400 mb-4">
                      Temas Disponíveis
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                      {subject.topics && subject.topics.map((topic, topicIndex) => {
                        const topicProgress = Math.floor(Math.random() * 100);
                        
                        return (
                          <button
                            key={topicIndex}
                            onClick={() => {
                              if (onNavigateToPractice) {
                                const topicSlug = topicNameToSlug(topic.name);
                                const subjectSlug = SUBJECT_ID_TO_SLUG[subject.id] || subject.id;
                                onNavigateToPractice(selectedArea, subjectSlug, topicSlug, topic.name);
                              }
                            }}
                            className="group relative p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all text-left overflow-hidden"
                          >
                            <div className="absolute inset-0 shimmer-effect opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            
                            <div className="relative">
                              <div className="flex items-center justify-between mb-2">
                                <h5 className="text-sm">{topic.name}</h5>
                                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                              </div>
                              <div className="flex items-center gap-2 text-xs text-gray-400">
                                <span>{topic.questions} questões</span>
                                <span>•</span>
                                <span className={`${
                                  topicProgress >= 80 ? 'text-green-400' : 
                                  topicProgress >= 50 ? 'text-yellow-400' : 'text-gray-400'
                                }`}>
                                  {topicProgress}% concluído
                                </span>
                              </div>
                              
                              <div className="mt-2 bg-gray-800/50 rounded-full h-1 overflow-hidden">
                                <div 
                                  className={`h-full rounded-full ${
                                    topicProgress >= 80 ? 'bg-green-500' : 
                                    topicProgress >= 50 ? 'bg-yellow-500' : 'bg-blue-500'
                                  }`}
                                  style={{ width: `${topicProgress}%` }}
                                ></div>
                              </div>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}