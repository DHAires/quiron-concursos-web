// Questões de Criminalística - 9 TEMAS (45 questões)
// Área Policial - Criminalística

export const questionsCriminalistica = {
  // TEMA 1: Perícia Criminal (5 questões)
  'pericia-criminal': [
    {
      id: 'crim-pericia-01',
      enunciado: 'Sobre a perícia criminal e sua natureza jurídica, é correto afirmar:',
      alternativas: {
        A: 'Perícia é meio de prova exclusivo do juiz.',
        B: 'Perito é auxiliar da justiça sem imparcialidade.',
        C: 'Perícia criminal é meio de prova técnico-científico previsto no CPP, realizada por perito para esclarecer fato de interesse da justiça.',
        D: 'Juiz está vinculado às conclusões do laudo pericial.',
        E: 'Perícia indireta não tem valor probatório.',
      },
      gabarito: 'C',
      explicacao: 'PERÍCIA CRIMINAL: meio de prova técnico-científico previsto no CPP (arts. 158-184) que consiste no exame realizado por PERITO (profissional com conhecimento técnico especializado) para esclarecer fato de interesse da justiça criminal. Natureza jurídica: MEIO DE PROVA (não é elemento de prova, mas método para obtenção de prova). Perito: é AUXILIAR DA JUSTIÇA (não é parte), deve ser IMPARCIAL, TECNICAMENTE HABILITADO (formação específica). Classificação: I) Perícia DIRETA: exame direto do objeto, vestígio, corpo de delito (ex: exame cadavérico, exame em arma); II) Perícia INDIRETA: exame de documentos, fotografias, laudos anteriores (quando objeto não está disponível). Princípios: imparcialidade, cientificidade, completude, clareza, objetividade. Laudo pericial (art. 160): documento escrito contendo descrição, metodologia e conclusões. Valor probatório: juiz NÃO está VINCULADO às conclusões (livre convencimento motivado - art. 182 CPP), mas deve fundamentar se discordar.',
      banca: 'Elaboração Própria',
      ano: 2024,
      cargo: 'Concursos Policiais',
    },
    {
      id: 'crim-pericia-02',
      enunciado: 'Quanto ao exame de corpo de delito, assinale a alternativa correta:',
      alternativas: {
        A: 'Exame de corpo de delito é facultativo.',
        B: 'Confissão do réu supre falta de exame de corpo de delito.',
        C: 'Exame de corpo de delito é indispensável quando a infração deixar vestígios, não podendo ser suprido por confissão do acusado.',
        D: 'Crimes sem vestígios também exigem corpo de delito.',
        E: 'Prova testemunhal nunca supre exame de corpo de delito.',
      },
      gabarito: 'C',
      explicacao: 'EXAME DE CORPO DE DELITO (CPP, art. 158): "Quando a infração deixar vestígios, será indispensável o exame de corpo de delito, direto ou indireto, não podendo supri-lo a confissão do acusado". Corpo de delito: conjunto de elementos MATERIAIS, SENSÍVEIS, VISÍVEIS que comprovam a MATERIALIDADE da infração (res delinquendi). Natureza: INDISPENSÁVEL em crimes NÃO TRANSEUNTES (que deixam vestígios materiais - ex: homicídio, lesão corporal, furto qualificado por arrombamento, incêndio, dano, violação de domicílio com arrombamento). NÃO pode ser suprido pela CONFISSÃO do acusado (art. 158 - princípio da obrigatoriedade). EXCEÇÃO: se vestígios DESAPARECEREM (ação do tempo, intempéries), a prova TESTEMUNHAL pode suprir (art. 167 CPP). Realização: por PERITO OFICIAL (preferência) ou, na falta, por 2 PERITOS NÃO OFICIAIS nomeados pelo juiz (art. 159). Crimes TRANSEUNTES (sem vestígios): não exigem corpo de delito (ex: ameaça verbal, injúria verbal).',
      banca: 'Elaboração Própria',
      ano: 2024,
      cargo: 'Concursos Policiais',
    },
    {
      id: 'crim-pericia-03',
      enunciado: 'Sobre os peritos e o laudo pericial, é correto afirmar:',
      alternativas: {
        A: 'Laudo pericial não precisa ser fundamentado.',
        B: 'Peritos oficiais devem ser em número de dois.',
        C: 'Perito oficial: basta 1. Perito não oficial: devem ser 2. Laudo pericial deve conter descrição minuciosa, respostas aos quesitos e conclusão fundamentada.',
        D: 'Assistente técnico não pode ser nomeado pela defesa.',
        E: 'Quesitos não podem ser complementados após perícia.',
      },
      gabarito: 'C',
      explicacao: 'PERITOS (CPP, arts. 159-179): profissionais com conhecimento técnico que realizam perícia. Classificação: I) Peritos OFICIAIS: servidores públicos vinculados ao Estado (Polícia Científica, IML, POLITEC, IC) - BASTA 1 PERITO (art. 159, caput); II) Peritos NÃO OFICIAIS: particulares com conhecimento técnico, nomeados pelo juiz quando não há perito oficial disponível - DEVEM SER 2 PERITOS (art. 159, §1º). LAUDO PERICIAL (art. 160 CPP): documento escrito que materializa a perícia. Conteúdo OBRIGATÓRIO: I) PREÂMBULO (qualificação dos peritos, objeto); II) DESCRIÇÃO MINUCIOSA do exame realizado e do que foi examinado; III) RESPOSTAS aos QUESITOS formulados (autoridade policial, MP, juiz, defesa, assistente acusação); IV) CONCLUSÃO fundamentada (com embasamento científico/técnico). Prazo: CPP não estabelece prazo geral (juiz pode fixar). Quesitos: podem ser complementados na audiência (art. 176). Assistente técnico (art. 159, §3º): partes podem nomear para acompanhar perícia e apresentar parecer.',
      banca: 'Elaboração Própria',
      ano: 2024,
      cargo: 'Concursos Policiais',
    },
    {
      id: 'crim-pericia-04',
      enunciado: 'Quanto à cadeia de custódia da prova, assinale a alternativa correta:',
      alternativas: {
        A: 'Cadeia de custódia é dispensável em crimes graves.',
        B: 'Quebra da cadeia de custódia não afeta validade da prova.',
        C: 'Cadeia de custódia é o conjunto de procedimentos para preservar a integridade do vestígio desde a coleta até o descarte, devendo cada etapa ser documentada.',
        D: 'Cadeia de custódia tem apenas 3 fases.',
        E: 'Não é necessário documentar cada etapa da custódia.',
      },
      gabarito: 'C',
      explicacao: 'CADEIA DE CUSTÓDIA DA PROVA (Lei 13.964/19 - Pacote Anticrime - inseriu arts. 158-A a 158-F no CPP): conjunto de procedimentos para garantir a PRESERVAÇÃO DA INTEGRIDADE, autenticidade e rastreabilidade do vestígio/prova, desde sua coleta no local de crime até o descarte final. Objetivo: assegurar que o vestígio analisado é o MESMO coletado no local (evitar contaminação, adulteração, troca, perda). ETAPAS/FASES (art. 158-A): I) RECONHECIMENTO: identificação do vestígio; II) ISOLAMENTO: preservação do local de crime; III) FIXAÇÃO: documentação do vestígio (fotografia, vídeo, croqui, descrição escrita, GPS); IV) COLETA: recolhimento do vestígio com técnica adequada; V) ACONDICIONAMENTO: embalagem que preserve características (lacre, identificação); VI) TRANSPORTE seguro; VII) RECEBIMENTO na unidade de perícia (registro); VIII) PROCESSAMENTO/ANÁLISE (perícia propriamente dita); IX) ARMAZENAMENTO; X) DESCARTE final. REGISTRO: cada etapa deve ser DOCUMENTADA com identificação de quem manuseou (rastreabilidade). VIOLAÇÃO: pode gerar NULIDADE da prova (se comprometer confiabilidade - art. 157, §5º CPP).',
      banca: 'Elaboração Própria',
      ano: 2024,
      cargo: 'Concursos Policiais',
    },
    {
      id: 'crim-pericia-05',
      enunciado: 'Sobre a exumação para exame necroscópico, é correto afirmar:',
      alternativas: {
        A: 'Exumação sempre depende de autorização da família.',
        B: 'Exumação só pode ocorrer após 5 anos do sepultamento.',
        C: 'Exumação pode ser determinada por juiz ou autoridade policial, a qualquer tempo, não podendo a família vetar quando determinada pela autoridade competente.',
        D: 'Somente o juiz pode determinar exumação.',
        E: 'Exumação não pode ser feita para complementar exame.',
      },
      gabarito: 'C',
      explicacao: 'EXUMAÇÃO para exame necroscópico (CPP, art. 163): ato de DESENTERRAR cadáver já sepultado para realização de exame pericial (necropsia) ou COMPLEMENTAÇÃO de exame anterior incompleto. Autorização: pode ser determinada pelo JUIZ (durante processo) ou pela AUTORIDADE POLICIAL (durante inquérito policial - art. 6º, VII CPP). Família: NÃO tem direito de VETAR exumação determinada por autoridade competente (interesse PÚBLICO da investigação/processo prevalece sobre interesse PRIVADO/familiar). Prazo: pode ser realizada a QUALQUER TEMPO após o sepultamento, desde que NECESSÁRIA à elucidação do crime (não há prazo mínimo nem máximo legal). Realização: por PERITO OFICIAL (médico legista ou perito criminal). Finalidades: I) esclarecer causa da morte (se no foi possível antes); II) verificar existência de lesões não detectadas; III) identificação do cadáver; IV) coleta de material para exames complementares (toxicológico, DNA, histopatológico). Laudo de exumação e necropsia: juntado aos autos. Intimação da família: recomendável (respeito) mas não OBRIGATÓRIA.',
      banca: 'Elaboração Própria',
      ano: 2024,
      cargo: 'Concursos Policiais',
    },
  ],
};