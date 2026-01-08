import { questionsConstitucional } from '../data/questions-constitucional';
import { questionsAdministrativo } from '../data/questions-administrativo';
import { questionsAdministrativoExtra } from '../data/questions-administrativo-completo';
import { questionsAdministrativoFinal } from '../data/questions-administrativo-final';
import { questionsCivil1 } from '../data/questions-civil-1';
import { questionsCivil2 } from '../data/questions-civil-2';
import { questionsCivil3 } from '../data/questions-civil-3';
import { questionsPenal1 } from '../data/questions-penal-1';
import { questionsPenal2 } from '../data/questions-penal-2';
import { questionsPenal3 } from '../data/questions-penal-3';
import { questionsPenal4 } from '../data/questions-penal-4';
import { questionsTrabalho1 } from '../data/questions-trabalho-1';
import { questionsTrabalho2 } from '../data/questions-trabalho-2';
import { questionsTrabalho3 } from '../data/questions-trabalho-3';
import { questionsTributario1 } from '../data/questions-tributario-1';
import { questionsTributario2 } from '../data/questions-tributario-2';
import { questionsTributario3 } from '../data/questions-tributario-3';
import { questionsProcessualCivil1 } from '../data/questions-processual-civil-1';
import { questionsProcessualCivil2 } from '../data/questions-processual-civil-2';
import { questionsProcessualCivil3 } from '../data/questions-processual-civil-3';
import { questionsEleitoral } from '../data/questions-eleitoral';
import { questionsLegislacaoPenal } from '../data/questions-legislacao-penal';
import { questionsProcessoPenal } from '../data/questions-processo-penal';
import { projectId, publicAnonKey } from './supabase/info';

// Direito Constitucional
export async function seedQuestionsConstitucional() {
  const topics = [
    { key: 'direitos-garantias', name: 'Direitos e Garantias Fundamentais', slug: 'direitos-garantias' },
    { key: 'organizacao-estado', name: 'Organização do Estado', slug: 'organizacao-estado' },
    { key: 'poder-legislativo', name: 'Poder Legislativo', slug: 'poder-legislativo' },
    { key: 'poder-executivo', name: 'Poder Executivo', slug: 'poder-executivo' },
    { key: 'poder-judiciario', name: 'Poder Judiciário', slug: 'poder-judiciario' },
    { key: 'controle-constitucionalidade', name: 'Controle de Constitucionalidade', slug: 'controle-constitucionalidade' },
    { key: 'direitos-sociais', name: 'Direitos Sociais', slug: 'direitos-sociais' },
    { key: 'principios-fundamentais', name: 'Princípios Fundamentais', slug: 'principios-fundamentais' },
    { key: 'remedios-constitucionais', name: 'Remédios Constitucionais', slug: 'remedios-constitucionais' },
  ];

  for (const topic of topics) {
    const questions = questionsConstitucional[topic.key as keyof typeof questionsConstitucional];
    
    if (!questions || questions.length === 0) {
      console.log(`No questions for topic: ${topic.name}`);
      continue;
    }

    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-50734795/questions/seed`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            area: 'juridica',
            subject: 'direito-constitucional',
            topic: topic.slug,
            questions,
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log(`✅ Seeded ${data.count} questions for ${topic.name}`);
      } else {
        console.error(`❌ Failed to seed ${topic.name}`);
      }
    } catch (error) {
      console.error(`❌ Error seeding ${topic.name}:`, error);
    }
  }

  console.log('🎉 Direito Constitucional seeding completed!');
}

// Direito Administrativo (Parte 1)
export async function seedQuestionsAdministrativo() {
  const topics = [
    { key: 'principios', name: 'Princípios da Administração Pública', slug: 'principios' },
    { key: 'atos-administrativos', name: 'Atos Administrativos', slug: 'atos-administrativos' },
    { key: 'poderes-administrativos', name: 'Poderes Administrativos', slug: 'poderes-administrativos' },
  ];

  for (const topic of topics) {
    const questions = questionsAdministrativo[topic.key as keyof typeof questionsAdministrativo];
    
    if (!questions || questions.length === 0) {
      console.log(`No questions for topic: ${topic.name}`);
      continue;
    }

    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-50734795/questions/seed`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            area: 'juridica',
            subject: 'direito-administrativo',
            topic: topic.slug,
            questions,
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log(`✅ Seeded ${data.count} questions for ${topic.name}`);
      } else {
        console.error(`❌ Failed to seed ${topic.name}`);
      }
    } catch (error) {
      console.error(`❌ Error seeding ${topic.name}:`, error);
    }
  }

  console.log('🎉 Direito Administrativo (temas 1-3) seeding completed!');
}

// Direito Administrativo (Parte 2)
export async function seedQuestionsAdministrativoExtra() {
  const topics = [
    { key: 'licitacoes-contratos', name: 'Licitações e Contratos', slug: 'licitacoes-contratos' },
    { key: 'servidores-publicos', name: 'Servidores Públicos', slug: 'servidores-publicos' },
    { key: 'improbidade', name: 'Improbidade Administrativa', slug: 'improbidade' },
  ];

  for (const topic of topics) {
    const questions = questionsAdministrativoExtra[topic.key as keyof typeof questionsAdministrativoExtra];
    
    if (!questions || questions.length === 0) {
      console.log(`No questions for topic: ${topic.name}`);
      continue;
    }

    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-50734795/questions/seed`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            area: 'juridica',
            subject: 'direito-administrativo',
            topic: topic.slug,
            questions,
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log(`✅ Seeded ${data.count} questions for ${topic.name}`);
      } else {
        console.error(`❌ Failed to seed ${topic.name}`);
      }
    } catch (error) {
      console.error(`❌ Error seeding ${topic.name}:`, error);
    }
  }

  console.log('🎉 Direito Administrativo (temas 4-6) seeding completed!');
}

// Direito Administrativo (Parte 3)
export async function seedQuestionsAdministrativoFinal() {
  const topics = [
    { key: 'responsabilidade-civil', name: 'Responsabilidade Civil do Estado', slug: 'responsabilidade-civil' },
    { key: 'servicos-publicos', name: 'Serviços Públicos', slug: 'servicos-publicos' },
    { key: 'processo-administrativo', name: 'Processo Administrativo', slug: 'processo-administrativo' },
  ];

  for (const topic of topics) {
    const questions = questionsAdministrativoFinal[topic.key as keyof typeof questionsAdministrativoFinal];
    
    if (!questions || questions.length === 0) {
      console.log(`No questions for topic: ${topic.name}`);
      continue;
    }

    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-50734795/questions/seed`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            area: 'juridica',
            subject: 'direito-administrativo',
            topic: topic.slug,
            questions,
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log(`✅ Seeded ${data.count} questions for ${topic.name}`);
      } else {
        console.error(`❌ Failed to seed ${topic.name}`);
      }
    } catch (error) {
      console.error(`❌ Error seeding ${topic.name}:`, error);
    }
  }

  console.log('🎉 Direito Administrativo (temas 7-9) seeding completed!');
}

// Direito Civil (Parte 1)
export async function seedQuestionsCivil1() {
  const topics = [
    { key: 'parte-geral', name: 'Parte Geral - Pessoas e Bens', slug: 'parte-geral' },
    { key: 'fatos-juridicos', name: 'Fatos Jurídicos', slug: 'fatos-juridicos' },
    { key: 'obrigacoes', name: 'Obrigações', slug: 'obrigacoes' },
  ];

  for (const topic of topics) {
    const questions = questionsCivil1[topic.key as keyof typeof questionsCivil1];
    
    if (!questions || questions.length === 0) {
      console.log(`No questions for topic: ${topic.name}`);
      continue;
    }

    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-50734795/questions/seed`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            area: 'juridica',
            subject: 'direito-civil',
            topic: topic.slug,
            questions,
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log(`✅ Seeded ${data.count} questions for ${topic.name}`);
      } else {
        console.error(`❌ Failed to seed ${topic.name}`);
      }
    } catch (error) {
      console.error(`❌ Error seeding ${topic.name}:`, error);
    }
  }

  console.log('🎉 Direito Civil (temas 1-3) seeding completed!');
}

// Direito Civil (Parte 2)
export async function seedQuestionsCivil2() {
  const topics = [
    { key: 'contratos', name: 'Contratos', slug: 'contratos' },
    { key: 'responsabilidade-civil', name: 'Responsabilidade Civil', slug: 'responsabilidade-civil' },
    { key: 'posse', name: 'Direito das Coisas - Posse', slug: 'posse' },
  ];

  for (const topic of topics) {
    const questions = questionsCivil2[topic.key as keyof typeof questionsCivil2];
    
    if (!questions || questions.length === 0) {
      console.log(`No questions for topic: ${topic.name}`);
      continue;
    }

    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-50734795/questions/seed`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            area: 'juridica',
            subject: 'direito-civil',
            topic: topic.slug,
            questions,
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log(`✅ Seeded ${data.count} questions for ${topic.name}`);
      } else {
        console.error(`❌ Failed to seed ${topic.name}`);
      }
    } catch (error) {
      console.error(`❌ Error seeding ${topic.name}:`, error);
    }
  }

  console.log('🎉 Direito Civil (temas 4-6) seeding completed!');
}

// Direito Civil (Parte 3)
export async function seedQuestionsCivil3() {
  const topics = [
    { key: 'propriedade', name: 'Propriedade', slug: 'propriedade' },
    { key: 'familia', name: 'Direito de Família', slug: 'familia' },
    { key: 'sucessoes', name: 'Direito das Sucessões', slug: 'sucessoes' },
  ];

  for (const topic of topics) {
    const questions = questionsCivil3[topic.key as keyof typeof questionsCivil3];
    
    if (!questions || questions.length === 0) {
      console.log(`No questions for topic: ${topic.name}`);
      continue;
    }

    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-50734795/questions/seed`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            area: 'juridica',
            subject: 'direito-civil',
            topic: topic.slug,
            questions,
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log(`✅ Seeded ${data.count} questions for ${topic.name}`);
      } else {
        console.error(`❌ Failed to seed ${topic.name}`);
      }
    } catch (error) {
      console.error(`❌ Error seeding ${topic.name}:`, error);
    }
  }

  console.log('🎉 Direito Civil (temas 7-9) seeding completed!');
}

// Direito Penal (Parte 1)
export async function seedQuestionsPenal1() {
  const topics = [
    { key: 'aplicacao-lei', name: 'Aplicação da Lei Penal', slug: 'aplicacao-lei' },
    { key: 'crime-elementos', name: 'Crime - Conceito e Elementos', slug: 'crime-elementos' },
    { key: 'excludentes-ilicitude', name: 'Excludentes de Ilicitude', slug: 'excludentes-ilicitude' },
    { key: 'culpabilidade', name: 'Culpabilidade', slug: 'culpabilidade' },
  ];

  for (const topic of topics) {
    const questions = questionsPenal1[topic.key as keyof typeof questionsPenal1];
    
    if (!questions || questions.length === 0) {
      console.log(`No questions for topic: ${topic.name}`);
      continue;
    }

    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-50734795/questions/seed`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            area: 'juridica',
            subject: 'direito-penal',
            topic: topic.slug,
            questions,
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log(`✅ Seeded ${data.count} questions for ${topic.name}`);
      } else {
        console.error(`❌ Failed to seed ${topic.name}`);
      }
    } catch (error) {
      console.error(`❌ Error seeding ${topic.name}:`, error);
    }
  }

  console.log('🎉 Direito Penal (temas 1-4) seeding completed!');
}

// Direito Penal (Parte 2)
export async function seedQuestionsPenal2() {
  const topics = [
    { key: 'concurso-pessoas', name: 'Concurso de Pessoas', slug: 'concurso-pessoas' },
    { key: 'tentativa-consumacao', name: 'Tentativa e Consumação', slug: 'tentativa-consumacao' },
    { key: 'penas', name: 'Penas', slug: 'penas' },
  ];

  for (const topic of topics) {
    const questions = questionsPenal2[topic.key as keyof typeof questionsPenal2];
    
    if (!questions || questions.length === 0) {
      console.log(`No questions for topic: ${topic.name}`);
      continue;
    }

    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-50734795/questions/seed`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            area: 'juridica',
            subject: 'direito-penal',
            topic: topic.slug,
            questions,
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log(`✅ Seeded ${data.count} questions for ${topic.name}`);
      } else {
        console.error(`❌ Failed to seed ${topic.name}`);
      }
    } catch (error) {
      console.error(`❌ Error seeding ${topic.name}:`, error);
    }
  }

  console.log('🎉 Direito Penal (temas 5-7) seeding completed!');
}

// Direito Penal (Parte 3)
export async function seedQuestionsPenal3() {
  const topics = [
    { key: 'medidas-seguranca', name: 'Medidas de Segurança', slug: 'medidas-seguranca' },
    { key: 'extincao-punibilidade', name: 'Extinção da Punibilidade', slug: 'extincao-punibilidade' },
    { key: 'crimes-pessoa', name: 'Crimes contra a Pessoa', slug: 'crimes-pessoa' },
  ];

  for (const topic of topics) {
    const questions = questionsPenal3[topic.key as keyof typeof questionsPenal3];
    
    if (!questions || questions.length === 0) {
      console.log(`No questions for topic: ${topic.name}`);
      continue;
    }

    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-50734795/questions/seed`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            area: 'juridica',
            subject: 'direito-penal',
            topic: topic.slug,
            questions,
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log(`✅ Seeded ${data.count} questions for ${topic.name}`);
      } else {
        console.error(`❌ Failed to seed ${topic.name}`);
      }
    } catch (error) {
      console.error(`❌ Error seeding ${topic.name}:`, error);
    }
  }

  console.log('🎉 Direito Penal (temas 8-10) seeding completed!');
}

// Direito Penal (Parte 4)
export async function seedQuestionsPenal4() {
  const topics = [
    { key: 'crimes-patrimonio', name: 'Crimes contra o Patrimônio', slug: 'crimes-patrimonio' },
    { key: 'crimes-administracao', name: 'Crimes contra a Administração Pública', slug: 'crimes-administracao' },
    { key: 'prescricao-decadencia', name: 'Prescrição e Decadência', slug: 'prescricao-decadencia' },
  ];

  for (const topic of topics) {
    const questions = questionsPenal4[topic.key as keyof typeof questionsPenal4];
    
    if (!questions || questions.length === 0) {
      console.log(`No questions for topic: ${topic.name}`);
      continue;
    }

    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-50734795/questions/seed`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            area: 'juridica',
            subject: 'direito-penal',
            topic: topic.slug,
            questions,
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log(`✅ Seeded ${data.count} questions for ${topic.name}`);
      } else {
        console.error(`❌ Failed to seed ${topic.name}`);
      }
    } catch (error) {
      console.error(`❌ Error seeding ${topic.name}:`, error);
    }
  }

  console.log('🎉 Direito Penal (temas 11-13) seeding completed!');
}

// Direito do Trabalho (Parte 1)
export async function seedQuestionsTrabalho1() {
  const topics = [
    { key: 'relacao-emprego', name: 'Relação de Emprego', slug: 'relacao-emprego' },
    { key: 'contrato-trabalho', name: 'Contrato de Trabalho', slug: 'contrato-trabalho' },
    { key: 'jornada-trabalho', name: 'Jornada de Trabalho', slug: 'jornada-trabalho' },
  ];

  for (const topic of topics) {
    const questions = questionsTrabalho1[topic.key as keyof typeof questionsTrabalho1];
    
    if (!questions || questions.length === 0) {
      console.log(`No questions for topic: ${topic.name}`);
      continue;
    }

    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-50734795/questions/seed`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            area: 'juridica',
            subject: 'direito-trabalho',
            topic: topic.slug,
            questions,
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log(`✅ Seeded ${data.count} questions for ${topic.name}`);
      } else {
        console.error(`❌ Failed to seed ${topic.name}`);
      }
    } catch (error) {
      console.error(`❌ Error seeding ${topic.name}:`, error);
    }
  }

  console.log('🎉 Direito do Trabalho (temas 1-3) seeding completed!');
}

// Direito do Trabalho (Parte 2)
export async function seedQuestionsTrabalho2() {
  const topics = [
    { key: 'salario-remuneracao', name: 'Salário e Remuneração', slug: 'salario-remuneracao' },
    { key: 'ferias', name: 'Férias', slug: 'ferias' },
    { key: 'fgts', name: 'FGTS', slug: 'fgts' },
  ];

  for (const topic of topics) {
    const questions = questionsTrabalho2[topic.key as keyof typeof questionsTrabalho2];
    
    if (!questions || questions.length === 0) {
      console.log(`No questions for topic: ${topic.name}`);
      continue;
    }

    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-50734795/questions/seed`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            area: 'juridica',
            subject: 'direito-trabalho',
            topic: topic.slug,
            questions,
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log(`✅ Seeded ${data.count} questions for ${topic.name}`);
      } else {
        console.error(`❌ Failed to seed ${topic.name}`);
      }
    } catch (error) {
      console.error(`❌ Error seeding ${topic.name}:`, error);
    }
  }

  console.log('🎉 Direito do Trabalho (temas 4-6) seeding completed!');
}

// Direito do Trabalho (Parte 3)
export async function seedQuestionsTrabalho3() {
  const topics = [
    { key: 'aviso-previo', name: 'Aviso Prévio', slug: 'aviso-previo' },
    { key: 'rescisao', name: 'Rescisão Contratual', slug: 'rescisao' },
    { key: 'estabilidade', name: 'Estabilidade', slug: 'estabilidade' },
  ];

  for (const topic of topics) {
    const questions = questionsTrabalho3[topic.key as keyof typeof questionsTrabalho3];
    
    if (!questions || questions.length === 0) {
      console.log(`No questions for topic: ${topic.name}`);
      continue;
    }

    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-50734795/questions/seed`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            area: 'juridica',
            subject: 'direito-trabalho',
            topic: topic.slug,
            questions,
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log(`✅ Seeded ${data.count} questions for ${topic.name}`);
      } else {
        console.error(`❌ Failed to seed ${topic.name}`);
      }
    } catch (error) {
      console.error(`❌ Error seeding ${topic.name}:`, error);
    }
  }

  console.log('🎉 Direito do Trabalho (temas 7-9) seeding completed!');
}

// Direito Tributário (Parte 1)
export async function seedQuestionsTributario1() {
  const topics = [
    { key: 'sistema-tributario', name: 'Sistema Tributário Nacional', slug: 'sistema-tributario' },
    { key: 'competencia-tributaria', name: 'Competência Tributária', slug: 'competencia-tributaria' },
    { key: 'principios-tributarios', name: 'Princípios Tributários', slug: 'principios-tributarios' },
  ];

  for (const topic of topics) {
    const questions = questionsTributario1[topic.key as keyof typeof questionsTributario1];
    
    if (!questions || questions.length === 0) {
      console.log(`No questions for topic: ${topic.name}`);
      continue;
    }

    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-50734795/questions/seed`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            area: 'juridica',
            subject: 'direito-tributario',
            topic: topic.slug,
            questions,
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log(`✅ Seeded ${data.count} questions for ${topic.name}`);
      } else {
        console.error(`❌ Failed to seed ${topic.name}`);
      }
    } catch (error) {
      console.error(`❌ Error seeding ${topic.name}:`, error);
    }
  }

  console.log('🎉 Direito Tributário (temas 1-3) seeding completed!');
}

// Direito Tributário (Parte 2)
export async function seedQuestionsTributario2() {
  const topics = [
    { key: 'impostos', name: 'Impostos', slug: 'impostos' },
    { key: 'taxas', name: 'Taxas', slug: 'taxas' },
    { key: 'contribuicoes', name: 'Contribuições', slug: 'contribuicoes' },
  ];

  for (const topic of topics) {
    const questions = questionsTributario2[topic.key as keyof typeof questionsTributario2];
    
    if (!questions || questions.length === 0) {
      console.log(`No questions for topic: ${topic.name}`);
      continue;
    }

    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-50734795/questions/seed`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            area: 'juridica',
            subject: 'direito-tributario',
            topic: topic.slug,
            questions,
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log(`✅ Seeded ${data.count} questions for ${topic.name}`);
      } else {
        console.error(`❌ Failed to seed ${topic.name}`);
      }
    } catch (error) {
      console.error(`❌ Error seeding ${topic.name}:`, error);
    }
  }

  console.log('🎉 Direito Tributário (temas 4-6) seeding completed!');
}

// Direito Tributário (Parte 3)
export async function seedQuestionsTributario3() {
  const topics = [
    { key: 'obrigacao-tributaria', name: 'Obrigação Tributária', slug: 'obrigacao-tributaria' },
    { key: 'credito-tributario', name: 'Crédito Tributário', slug: 'credito-tributario' },
    { key: 'administracao-tributaria', name: 'Administração Tributária', slug: 'administracao-tributaria' },
  ];

  for (const topic of topics) {
    const questions = questionsTributario3[topic.key as keyof typeof questionsTributario3];
    
    if (!questions || questions.length === 0) {
      console.log(`No questions for topic: ${topic.name}`);
      continue;
    }

    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-50734795/questions/seed`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            area: 'juridica',
            subject: 'direito-tributario',
            topic: topic.slug,
            questions,
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log(`✅ Seeded ${data.count} questions for ${topic.name}`);
      } else {
        console.error(`❌ Failed to seed ${topic.name}`);
      }
    } catch (error) {
      console.error(`❌ Error seeding ${topic.name}:`, error);
    }
  }

  console.log('🎉 Direito Tributário (temas 7-9) seeding completed!');
}

// Direito Processual Civil (Parte 1)
export async function seedQuestionsProcessualCivil1() {
  const topics = [
    { key: 'jurisdicao-competencia', name: 'Jurisdição e Competência', slug: 'jurisdicao-competencia' },
    { key: 'partes-procuradores', name: 'Partes e Procuradores', slug: 'partes-procuradores' },
    { key: 'peticao-inicial', name: 'Petição Inicial', slug: 'peticao-inicial' },
  ];

  for (const topic of topics) {
    const questions = questionsProcessualCivil1[topic.key as keyof typeof questionsProcessualCivil1];
    
    if (!questions || questions.length === 0) {
      console.log(`No questions for topic: ${topic.name}`);
      continue;
    }

    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-50734795/questions/seed`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            area: 'juridica',
            subject: 'direito-processual-civil',
            topic: topic.slug,
            questions,
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log(`✅ Seeded ${data.count} questions for ${topic.name}`);
      } else {
        console.error(`❌ Failed to seed ${topic.name}`);
      }
    } catch (error) {
      console.error(`❌ Error seeding ${topic.name}:`, error);
    }
  }

  console.log('🎉 Direito Processual Civil (temas 1-3) seeding completed!');
}

// Direito Processual Civil (Parte 2)
export async function seedQuestionsProcessualCivil2() {
  const topics = [
    { key: 'contestacao', name: 'Contestação', slug: 'contestacao' },
    { key: 'provas', name: 'Provas', slug: 'provas' },
    { key: 'sentenca', name: 'Sentença', slug: 'sentenca' },
  ];

  for (const topic of topics) {
    const questions = questionsProcessualCivil2[topic.key as keyof typeof questionsProcessualCivil2];
    
    if (!questions || questions.length === 0) {
      console.log(`No questions for topic: ${topic.name}`);
      continue;
    }

    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-50734795/questions/seed`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            area: 'juridica',
            subject: 'direito-processual-civil',
            topic: topic.slug,
            questions,
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log(`✅ Seeded ${data.count} questions for ${topic.name}`);
      } else {
        console.error(`❌ Failed to seed ${topic.name}`);
      }
    } catch (error) {
      console.error(`❌ Error seeding ${topic.name}:`, error);
    }
  }

  console.log('🎉 Direito Processual Civil (temas 4-6) seeding completed!');
}

// Direito Processual Civil (Parte 3)
export async function seedQuestionsProcessualCivil3() {
  const topics = [
    { key: 'recursos', name: 'Recursos', slug: 'recursos' },
    { key: 'execucao', name: 'Execução', slug: 'execucao' },
    { key: 'tutelas-provisorias', name: 'Tutelas Provisórias', slug: 'tutelas-provisorias' },
  ];

  for (const topic of topics) {
    const questions = questionsProcessualCivil3[topic.key as keyof typeof questionsProcessualCivil3];
    
    if (!questions || questions.length === 0) {
      console.log(`No questions for topic: ${topic.name}`);
      continue;
    }

    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-50734795/questions/seed`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            area: 'juridica',
            subject: 'direito-processual-civil',
            topic: topic.slug,
            questions,
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log(`✅ Seeded ${data.count} questions for ${topic.name}`);
      } else {
        console.error(`❌ Failed to seed ${topic.name}`);
      }
    } catch (error) {
      console.error(`❌ Error seeding ${topic.name}:`, error);
    }
  }

  console.log('🎉 Direito Processual Civil (temas 7-9) seeding completed!');
}

// Direito Eleitoral
export async function seedQuestionsEleitoral() {
  const topics = [
    { key: 'direitos-politicos', name: 'Direitos Políticos', slug: 'direitos-politicos' },
    { key: 'partidos-politicos', name: 'Partidos Políticos', slug: 'partidos-politicos' },
    { key: 'elegibilidade-inelegibilidades', name: 'Elegibilidade e Inelegibilidades', slug: 'elegibilidade-inelegibilidades' },
    { key: 'registro-candidatura', name: 'Registro de Candidatura', slug: 'registro-candidatura' },
    { key: 'propaganda-eleitoral', name: 'Propaganda Eleitoral', slug: 'propaganda-eleitoral' },
    { key: 'crimes-eleitorais', name: 'Crimes Eleitorais', slug: 'crimes-eleitorais' },
    { key: 'processo-eleitoral', name: 'Processo Eleitoral', slug: 'processo-eleitoral' },
    { key: 'justica-eleitoral', name: 'Justiça Eleitoral', slug: 'justica-eleitoral' },
    { key: 'recursos-eleitorais', name: 'Recursos Eleitorais', slug: 'recursos-eleitorais' },
  ];

  for (const topic of topics) {
    const questions = questionsEleitoral[topic.key as keyof typeof questionsEleitoral];
    
    if (!questions || questions.length === 0) {
      console.log(`No questions for topic: ${topic.name}`);
      continue;
    }

    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-50734795/questions/seed`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            area: 'juridica',
            subject: 'direito-eleitoral',
            topic: topic.slug,
            questions,
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log(`✅ Seeded ${data.count} questions for ${topic.name}`);
      } else {
        console.error(`❌ Failed to seed ${topic.name}`);
      }
    } catch (error) {
      console.error(`❌ Error seeding ${topic.name}:`, error);
    }
  }

  console.log('🎉 Direito Eleitoral seeding completed!');
}

// Legislação Penal (Área Policial)
export async function seedQuestionsLegislacaoPenal() {
  console.log('🚔 [LEGISLAÇÃO PENAL] Iniciando seed...');
  console.log('📦 [LEGISLAÇÃO PENAL] Objeto importado:', questionsLegislacaoPenal);
  console.log('🔑 [LEGISLAÇÃO PENAL] Keys disponíveis:', Object.keys(questionsLegislacaoPenal));
  
  const topics = [
    { key: 'codigo-penal-parte-geral', name: 'Código Penal - Parte Geral', slug: 'codigo-penal-parte-geral' },
    { key: 'crimes-contra-pessoa', name: 'Crimes contra a Pessoa', slug: 'crimes-contra-pessoa' },
    { key: 'crimes-contra-patrimonio', name: 'Crimes contra o Patrimônio', slug: 'crimes-contra-patrimonio' },
    { key: 'crimes-contra-administracao', name: 'Crimes contra a Administração', slug: 'crimes-contra-administracao' },
    { key: 'lei-drogas', name: 'Lei de Drogas (Lei 11.343/2006)', slug: 'lei-drogas' },
    { key: 'crimes-hediondos', name: 'Crimes Hediondos (Lei 8.072/90)', slug: 'crimes-hediondos' },
    { key: 'organizacao-criminosa', name: 'Organização Criminosa (Lei 12.850/2013)', slug: 'organizacao-criminosa' },
    { key: 'violencia-domestica', name: 'Violência Doméstica (Lei Maria da Penha)', slug: 'violencia-domestica' },
    { key: 'crimes-transito', name: 'Crimes de Trânsito', slug: 'crimes-transito' },
  ];

  for (const topic of topics) {
    console.log(`🔍 [LEGISLAÇÃO PENAL] Processando tema: ${topic.name} (key: ${topic.key})`);
    
    const questions = questionsLegislacaoPenal[topic.key as keyof typeof questionsLegislacaoPenal];
    
    console.log(`📊 [LEGISLAÇÃO PENAL] Questões encontradas para ${topic.key}:`, questions ? questions.length : 0);
    
    if (!questions || questions.length === 0) {
      console.log(`⚠️ [LEGISLAÇÃO PENAL] No questions for topic: ${topic.name}`);
      continue;
    }

    console.log(`✅ [LEGISLAÇÃO PENAL] ${questions.length} questões para ${topic.name}`);

    try {
      const url = `https://${projectId}.supabase.co/functions/v1/make-server-50734795/questions/seed`;
      console.log(`🌐 [LEGISLAÇÃO PENAL] Enviando para: ${url}`);
      
      const payload = {
        area: 'policial',
        subject: 'legislacao-penal',
        topic: topic.slug,
        questions,
      };
      
      console.log(`📤 [LEGISLAÇÃO PENAL] Payload:`, JSON.stringify(payload, null, 2).substring(0, 500));
      
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${publicAnonKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      console.log(`📡 [LEGISLAÇÃO PENAL] Response status:`, response.status);
      
      if (response.ok) {
        const data = await response.json();
        console.log(`✅ [LEGISLAÇÃO PENAL] Seeded ${data.count} questions for ${topic.name}`);
      } else {
        const errorText = await response.text();
        console.error(`❌ [LEGISLAÇÃO PENAL] Failed to seed ${topic.name}. Status: ${response.status}, Error: ${errorText}`);
      }
    } catch (error) {
      console.error(`❌ [LEGISLAÇÃO PENAL] Error seeding ${topic.name}:`, error);
    }
  }

  console.log('🎉 Legislação Penal (Área Policial) seeding completed!');
}

// Processo Penal (Área Policial)
export async function seedQuestionsProcessoPenal() {
  console.log('📋 [PROCESSO PENAL] Iniciando seed...');
  console.log('📦 [PROCESSO PENAL] Objeto importado:', questionsProcessoPenal);
  
  const topicKeys = Object.keys(questionsProcessoPenal);
  console.log('🔑 [PROCESSO PENAL] Keys disponíveis:', topicKeys);
  
  const topicNames: { [key: string]: string } = {
    'inquerito-policial': 'Inquérito Policial',
    'provas': 'Provas',
    'prisoes-flagrante-preventiva-temporaria': 'Prisões (Flagrante, Preventiva, Temporária)',
    'medidas-cautelares': 'Medidas Cautelares',
    'busca-e-apreensao': 'Busca e Apreensão',
    'interceptacao-telefonica': 'Interceptação Telefônica',
    'acao-penal': 'Ação Penal',
    'competencia': 'Competência',
    'procedimentos': 'Procedimentos',
  };

  for (const topicKey of topicKeys) {
    console.log(`🔍 [PROCESSO PENAL] Processando tema: ${topicNames[topicKey]} (key: ${topicKey})`);
    
    const questions = (questionsProcessoPenal as any)[topicKey];
    console.log(`📊 [PROCESSO PENAL] Questões encontradas para ${topicKey}:`, questions?.length || 0);
    
    if (questions && questions.length > 0) {
      console.log(`✅ [PROCESSO PENAL] ${questions.length} questões para ${topicNames[topicKey]}`);
      
      const url = `https://${projectId}.supabase.co/functions/v1/make-server-50734795/questions/seed`;
      console.log(`🌐 [PROCESSO PENAL] Enviando para: ${url}`);
      
      const payload = {
        area: 'policial',
        subject: 'processo-penal',
        topic: topicKey,
        questions: questions,
      };
      
      console.log(`📤 [PROCESSO PENAL] Payload:`, payload);
      
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${publicAnonKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      
      console.log(`📡 [PROCESSO PENAL] Response status: ${response.status}`);
      
      if (response.ok) {
        console.log(`✅ [PROCESSO PENAL] Seeded ${questions.length} questions for ${topicNames[topicKey]}`);
      } else {
        const errorText = await response.text();
        console.error(`❌ [PROCESSO PENAL] Failed to seed ${topicNames[topicKey]}:`, errorText);
      }
    }
  }

  console.log('🎉 Processo Penal (Área Policial) seeding completed!');
}