// ======================================
// ÁREA POLICIAL - LEGISLAÇÃO PENAL ESPECIAL
// ======================================

import { GameQuestion } from './gameQuestions';

export const legislacaoPenalEspecialQuestions: GameQuestion[] = [
  // LEI DE DROGAS (LEI 11.343/2006)
  {
    id: 'lpe_001',
    area: 'policial',
    subject: 'Legislação Penal Especial',
    question: 'Adquirir droga para consumo pessoal é crime que não prevê pena de prisão.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 28 Lei 11.343/06 - penas de advertência, prestação de serviços ou medida educativa.',
    difficulty: 'facil'
  },
  {
    id: 'lpe_002',
    area: 'policial',
    subject: 'Legislação Penal Especial',
    question: 'O tráfico de drogas é crime hediondo.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 5º, XLIII, CF e Lei 8.072/90 - equiparado a hediondo.',
    difficulty: 'facil'
  },
  {
    id: 'lpe_003',
    area: 'policial',
    subject: 'Legislação Penal Especial',
    question: 'Plantar pequena quantidade de droga para consumo próprio tem a mesma pena do art. 28.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 28, §1º, Lei 11.343/06 - mesmas penas do usuário.',
    difficulty: 'medio'
  },
  {
    id: 'lpe_004',
    area: 'policial',
    subject: 'Legislação Penal Especial',
    question: 'É possível a aplicação da causa de diminuição de pena (art. 33, §4º) ao traficante primário.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 33, §4º, Lei 11.343/06 - redução de 1/6 a 2/3 se primário, bons antecedentes e não integrar organização.',
    difficulty: 'medio'
  },
  {
    id: 'lpe_005',
    area: 'policial',
    subject: 'Legislação Penal Especial',
    question: 'A pena do crime de tráfico privilegiado pode ser substituída por restritiva de direitos.',
    correctAnswer: true,
    explanation: 'CERTO. STF - com minorante, cabe substituição se preenchidos requisitos.',
    difficulty: 'dificil'
  },

  // CRIMES HEDIONDOS (LEI 8.072/90)
  {
    id: 'lpe_006',
    area: 'policial',
    subject: 'Legislação Penal Especial',
    question: 'Os crimes hediondos são insusceptíveis de anistia, graça e indulto.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 5º, XLIII, CF - vedações constitucionais.',
    difficulty: 'facil'
  },
  {
    id: 'lpe_007',
    area: 'policial',
    subject: 'Legislação Penal Especial',
    question: 'É possível liberdade provisória em crimes hediondos.',
    correctAnswer: true,
    explanation: 'CERTO. STF - vedação do art. 2º, II, Lei 8.072/90 foi declarada inconstitucional.',
    difficulty: 'dificil'
  },
  {
    id: 'lpe_008',
    area: 'policial',
    subject: 'Legislação Penal Especial',
    question: 'O latrocínio é crime hediondo.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 1º, II, Lei 8.072/90 - roubo com resultado morte.',
    difficulty: 'facil'
  },
  {
    id: 'lpe_009',
    area: 'policial',
    subject: 'Legislação Penal Especial',
    question: 'O estupro é crime hediondo independentemente de lesão grave ou morte.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 1º, V e VI, Lei 8.072/90 - após Lei 12.015/09 todas as formas são hediondas.',
    difficulty: 'medio'
  },
  {
    id: 'lpe_010',
    area: 'policial',
    subject: 'Legislação Penal Especial',
    question: 'A progressão de regime em crimes hediondos exige cumprimento de 2/5 da pena se primário.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 2º, §2º, Lei 8.072/90 - 2/5 primário, 3/5 reincidente.',
    difficulty: 'facil'
  },

  // ESTATUTO DO DESARMAMENTO (LEI 10.826/2003)
  {
    id: 'lpe_011',
    area: 'policial',
    subject: 'Legislação Penal Especial',
    question: 'Possuir arma de fogo de uso permitido sem autorização é crime.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 12 Lei 10.826/03 - posse irregular, pena 1 a 3 anos.',
    difficulty: 'facil'
  },
  {
    id: 'lpe_012',
    area: 'policial',
    subject: 'Legislação Penal Especial',
    question: 'Portar arma de fogo de uso permitido tem pena maior que possuir.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 14 - porte 2 a 4 anos; art. 12 - posse 1 a 3 anos.',
    difficulty: 'medio'
  },
  {
    id: 'lpe_013',
    area: 'policial',
    subject: 'Legislação Penal Especial',
    question: 'Disparar arma de fogo em via pública é crime.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 15 Lei 10.826/03 - disparo de arma, pena de reclusão.',
    difficulty: 'facil'
  },
  {
    id: 'lpe_014',
    area: 'policial',
    subject: 'Legislação Penal Especial',
    question: 'Possuir arma de uso restrito tem pena de 3 a 6 anos.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 16 Lei 10.826/03 - arma de uso restrito/proibido.',
    difficulty: 'facil'
  },
  {
    id: 'lpe_015',
    area: 'policial',
    subject: 'Legislação Penal Especial',
    question: 'Portar arma de fogo de uso restrito é crime hediondo.',
    correctAnswer: false,
    explanation: 'ERRADO. Lei 10.826/03 - crimes graves mas não são hediondos.',
    difficulty: 'medio'
  },

  // LEI MARIA DA PENHA (LEI 11.340/2006)
  {
    id: 'lpe_016',
    area: 'policial',
    subject: 'Legislação Penal Especial',
    question: 'A Lei Maria da Penha aplica-se a qualquer relação íntima de afeto.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 5º, III, Lei 11.340/06 - independe de coabitação.',
    difficulty: 'facil'
  },
  {
    id: 'lpe_017',
    area: 'policial',
    subject: 'Legislação Penal Especial',
    question: 'É vedada a aplicação de penas de cestas básicas em crimes sob Lei Maria da Penha.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 17 Lei 11.340/06 - vedação expressa.',
    difficulty: 'facil'
  },
  {
    id: 'lpe_018',
    area: 'policial',
    subject: 'Legislação Penal Especial',
    question: 'A retratação da vítima impede o prosseguimento da ação penal em lesão corporal leve.',
    correctAnswer: false,
    explanation: 'ERRADO. STJ - ação penal pública incondicionada, retratação não impede.',
    difficulty: 'medio'
  },
  {
    id: 'lpe_019',
    area: 'policial',
    subject: 'Legislação Penal Especial',
    question: 'Descumprir medida protetiva é crime.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 24-A Lei 11.340/06 - crime de desobediência à medida.',
    difficulty: 'facil'
  },
  {
    id: 'lpe_020',
    area: 'policial',
    subject: 'Legislação Penal Especial',
    question: 'A prisão preventiva pode ser decretada para garantir medidas protetivas.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 20 Lei 11.340/06 - cautelar para proteger a vítima.',
    difficulty: 'facil'
  },

  // CRIMES DE TRÂNSITO (LEI 9.503/97 - CTB)
  {
    id: 'lpe_021',
    area: 'policial',
    subject: 'Legislação Penal Especial',
    question: 'Dirigir sob influência de álcool em concentração superior a 0,34 mg/l no ar alveolar é crime.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 306 CTB - crime com pena de detenção.',
    difficulty: 'facil'
  },
  {
    id: 'lpe_022',
    area: 'policial',
    subject: 'Legislação Penal Especial',
    question: 'Homicídio culposo no trânsito admite suspensão condicional do processo.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 302 CTB - pena mínima de 2 anos, cabe sursis processual.',
    difficulty: 'medio'
  },
  {
    id: 'lpe_023',
    area: 'policial',
    subject: 'Legislação Penal Especial',
    question: 'A recusa do teste de alcoolemia configura crime.',
    correctAnswer: false,
    explanation: 'ERRADO. STF - nemo tenetur se detegere, recusa não é crime (só infração administrativa).',
    difficulty: 'dificil'
  },
  {
    id: 'lpe_024',
    area: 'policial',
    subject: 'Legislação Penal Especial',
    question: 'Participar de racha (corrida não autorizada) é crime.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 308 CTB - pena de detenção.',
    difficulty: 'facil'
  },
  {
    id: 'lpe_025',
    area: 'policial',
    subject: 'Legislação Penal Especial',
    question: 'Trafegar em velocidade incompatível com segurança é crime.',
    correctAnswer: false,
    explanation: 'ERRADO. CTB - é infração administrativa, não crime.',
    difficulty: 'medio'
  },

  // LEI DE TORTURA (LEI 9.455/97)
  {
    id: 'lpe_026',
    area: 'policial',
    subject: 'Legislação Penal Especial',
    question: 'A tortura é crime inafiançável e insusceptível de graça ou anistia.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 5º, XLIII, CF - previsão constitucional.',
    difficulty: 'facil'
  },
  {
    id: 'lpe_027',
    area: 'policial',
    subject: 'Legislação Penal Especial',
    question: 'O crime de tortura pode ser praticado por particular.',
    correctAnswer: true,
    explanation: 'CERTO. Lei 9.455/97 - não é crime próprio de funcionário público.',
    difficulty: 'facil'
  },
  {
    id: 'lpe_028',
    area: 'policial',
    subject: 'Legislação Penal Especial',
    question: 'Constranger mediante violência para obter confissão é tortura.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 1º, I, "a", Lei 9.455/97 - tortura-prova.',
    difficulty: 'facil'
  },
  {
    id: 'lpe_029',
    area: 'policial',
    subject: 'Legislação Penal Especial',
    question: 'A omissão em evitar tortura também é punível.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 1º, §2º, Lei 9.455/97 - omissão quando tinha dever de evitar.',
    difficulty: 'medio'
  },
  {
    id: 'lpe_030',
    area: 'policial',
    subject: 'Legislação Penal Especial',
    question: 'Se da tortura resulta morte, a pena é de 8 a 16 anos.',
    correctAnswer: false,
    explanation: 'ERRADO. Art. 1º, §3º, Lei 9.455/97 - pena de reclusão 4 a 12 anos.',
    difficulty: 'medio'
  },

  // CRIMES CONTRA CRIANÇAS E ADOLESCENTES (ECA - LEI 8.069/90)
  {
    id: 'lpe_031',
    area: 'policial',
    subject: 'Legislação Penal Especial',
    question: 'Vender bebida alcoólica a criança ou adolescente é crime.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 243 ECA - crime com pena de detenção.',
    difficulty: 'facil'
  },
  {
    id: 'lpe_032',
    area: 'policial',
    subject: 'Legislação Penal Especial',
    question: 'Produzir pornografia infantil é crime hediondo.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 1º, VIII, Lei 8.072/90 - incluído pela Lei 12.978/14.',
    difficulty: 'facil'
  },
  {
    id: 'lpe_033',
    area: 'policial',
    subject: 'Legislação Penal Especial',
    question: 'Armazenar pornografia infantil é crime.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 241-B ECA - posse de material pornográfico.',
    difficulty: 'facil'
  },
  {
    id: 'lpe_034',
    area: 'policial',
    subject: 'Legislação Penal Especial',
    question: 'A venda de fogos de artifício a criança é crime.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 244 ECA - venda de produtos causadores de dependência.',
    difficulty: 'medio'
  },
  {
    id: 'lpe_035',
    area: 'policial',
    subject: 'Legislação Penal Especial',
    question: 'Deixar de comunicar à autoridade maus-tratos contra criança é crime.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 245 ECA - omissão em comunicar crime.',
    difficulty: 'medio'
  },

  // LAVAGEM DE DINHEIRO (LEI 9.613/98)
  {
    id: 'lpe_036',
    area: 'policial',
    subject: 'Legislação Penal Especial',
    question: 'Ocultar bens provenientes de crime é lavagem de dinheiro.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 1º Lei 9.613/98 - ocultação ou dissimulação.',
    difficulty: 'facil'
  },
  {
    id: 'lpe_037',
    area: 'policial',
    subject: 'Legislação Penal Especial',
    question: 'A lavagem de dinheiro exige rol taxativo de crimes antecedentes.',
    correctAnswer: false,
    explanation: 'ERRADO. Lei 12.683/12 - qualquer infração penal pode ser antecedente.',
    difficulty: 'medio'
  },
  {
    id: 'lpe_038',
    area: 'policial',
    subject: 'Legislação Penal Especial',
    question: 'Quem praticou a infração penal antecedente pode responder por lavagem.',
    correctAnswer: true,
    explanation: 'CERTO. STJ - autoria simultânea é possível (autolavagem).',
    difficulty: 'dificil'
  },
  {
    id: 'lpe_039',
    area: 'policial',
    subject: 'Legislação Penal Especial',
    question: 'A lavagem de dinheiro permite busca e apreensão sem autorização judicial.',
    correctAnswer: false,
    explanation: 'ERRADO. Lei 9.613/98 - busca exige autorização judicial.',
    difficulty: 'medio'
  },
  {
    id: 'lpe_040',
    area: 'policial',
    subject: 'Legislação Penal Especial',
    question: 'A pena da lavagem de dinheiro é de 3 a 10 anos.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 1º Lei 9.613/98 - reclusão e multa.',
    difficulty: 'facil'
  },

  // ORGANIZAÇÃO CRIMINOSA (LEI 12.850/13)
  {
    id: 'lpe_041',
    area: 'policial',
    subject: 'Legislação Penal Especial',
    question: 'Organização criminosa exige ao menos 4 pessoas associadas.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 1º, §1º, Lei 12.850/13 - mínimo de 4 pessoas.',
    difficulty: 'facil'
  },
  {
    id: 'lpe_042',
    area: 'policial',
    subject: 'Legislação Penal Especial',
    question: 'Promover organização criminosa tem pena de 3 a 8 anos.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 2º Lei 12.850/13 - reclusão e multa.',
    difficulty: 'facil'
  },
  {
    id: 'lpe_043',
    area: 'policial',
    subject: 'Legislação Penal Especial',
    question: 'A colaboração premiada é direito subjetivo do acusado.',
    correctAnswer: false,
    explanation: 'ERRADO. STF - é negócio jurídico, depende de interesse e homologação.',
    difficulty: 'dificil'
  },
  {
    id: 'lpe_044',
    area: 'policial',
    subject: 'Legislação Penal Especial',
    question: 'A infiltração de agentes depende de autorização judicial.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 10 Lei 12.850/13 - decisão fundamentada do juiz.',
    difficulty: 'facil'
  },
  {
    id: 'lpe_045',
    area: 'policial',
    subject: 'Legislação Penal Especial',
    question: 'A ação controlada permite que a polícia retarde a intervenção.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 8º Lei 12.850/13 - técnica especial de investigação.',
    difficulty: 'facil'
  },

  // RACISMO (LEI 7.716/89)
  {
    id: 'lpe_046',
    area: 'policial',
    subject: 'Legislação Penal Especial',
    question: 'Os crimes de racismo são imprescritíveis e inafiançáveis.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 5º, XLII, CF - previsão constitucional.',
    difficulty: 'facil'
  },
  {
    id: 'lpe_047',
    area: 'policial',
    subject: 'Legislação Penal Especial',
    question: 'Injúria racial é a mesma coisa que crime de racismo.',
    correctAnswer: false,
    explanation: 'ERRADO. Injúria racial (art. 140, §3º, CP) é prescritível; racismo (Lei 7.716) é imprescritível.',
    difficulty: 'medio'
  },
  {
    id: 'lpe_048',
    area: 'policial',
    subject: 'Legislação Penal Especial',
    question: 'Impedir acesso a elevador por questão de raça é crime de racismo.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 4º Lei 7.716/89 - impedir acesso a local público.',
    difficulty: 'facil'
  },
  {
    id: 'lpe_049',
    area: 'policial',
    subject: 'Legislação Penal Especial',
    question: 'Fabricar material que incite discriminação racial é crime.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 20, §1º, Lei 7.716/89 - fabricação, comercialização ou veiculação.',
    difficulty: 'facil'
  },
  {
    id: 'lpe_050',
    area: 'policial',
    subject: 'Legislação Penal Especial',
    question: 'A injúria racial passou a ser imprescritível.',
    correctAnswer: true,
    explanation: 'CERTO. Lei 14.532/23 - STF equiparou injúria racial ao crime de racismo.',
    difficulty: 'medio'
  }
];
