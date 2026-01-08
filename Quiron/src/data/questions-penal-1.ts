// Questões de Direito Penal - TEMAS 1-3 (30 questões)
// Área Jurídica - Direito Penal

export const questionsPenal1 = {
  // TEMA 1: Aplicação da Lei Penal (10 questões)
  "aplicacao-da-lei-penal": [
    {
      id: "penal-apl-01",
      enunciado: "Sobre os princípios fundamentais do Direito Penal, é correto afirmar:",
      alternativas: {
        A: "Princípio da legalidade permite punição sem lei anterior que defina o crime.",
        B: "Nullum crimen, nulla poena sine praevia lege: não há crime sem lei anterior que o defina, nem pena sem prévia cominação legal.",
        C: "Princípio da anterioridade não se aplica ao Direito Penal.",
        D: "Lei penal pode retroagir para prejudicar o réu.",
        E: "Analogia in malam partem é permitida."
      },
      gabarito: "B",
      explicacao: "CP, art. 1º + CF/88, art. 5º, XXXIX: PRINCÍPIO DA LEGALIDADE/RESERVA LEGAL: 'Não há crime sem lei anterior que o defina. Não há pena sem prévia cominação legal' (nullum crimen, nulla poena sine praevia lege). PRINCÍPIO DA ANTERIORIDADE: lei deve ser anterior ao fato. IRRETROATIVIDADE DA LEI MAIS GRAVOSA: lei não retroage para prejudicar. ANALOGIA IN MALAM PARTEM: proibida (só in bonam partem). B correta. A, C, D, E incorretas.",
      banca: "CESPE",
      ano: 2023,
      cargo: "Delegado - PCDF"
    },
    {
      id: "penal-apl-02",
      enunciado: "Em relação à lei penal no tempo, assinale a alternativa INCORRETA:",
      alternativas: {
        A: "Lei penal não retroage, salvo para beneficiar o réu.",
        B: "Lei posterior que não mais considera o fato como criminoso retroage (abolitio criminis).",
        C: "Lei posterior mais benéfica retroage mesmo após trânsito em julgado.",
        D: "Lei excepcional ou temporária, mesmo revogada, aplica-se ao fato praticado durante sua vigência (ultratividade).",
        E: "Lei penal sempre retroage."
      },
      gabarito: "E",
      explicacao: "CP, arts. 2º-3º: LEI PENAL NO TEMPO: Art. 2º: lei posterior NÃO RETROAGE, SALVO para BENEFICIAR o réu (lex mitior). ABOLITIO CRIMINIS (§ú): lei que não mais considera fato como criminoso RETROAGE (cessa execução/efeitos). NOVATIO LEGIS IN MELLIUS: lei mais benéfica retroage (mesmo após trânsito). Art. 3º: lei EXCEPCIONAL ou TEMPORÁRIA (ultratividade): aplica-se ao fato durante vigência, embora revogada. E INCORRETA - não sempre retroage. A, B, C, D corretas.",
      banca: "FCC",
      ano: 2023,
      cargo: "Delegado - PCPE"
    },
    {
      id: "penal-apl-03",
      enunciado: "Quanto à lei penal no espaço, é correto afirmar:",
      alternativas: {
        A: "Princípio da territorialidade não se aplica ao Brasil.",
        B: "Aplica-se a lei brasileira ao crime cometido no território nacional (princípio da territorialidade temperada).",
        C: "Território nacional não inclui embarcações e aeronaves brasileiras.",
        D: "Lei penal estrangeira sempre prevalece sobre a brasileira.",
        E: "Extraterritorialidade não existe."
      },
      gabarito: "B",
      explicacao: "CP, arts. 5º-7º: LEI PENAL NO ESPAÇO: Art. 5º: PRINCÍPIO DA TERRITORIALIDADE TEMPERADA: aplica-se lei brasileira ao crime cometido no TERRITÓRIO NACIONAL (ressalvados tratados/convenções). TERRITÓRIO POR EXTENSÃO (§1º): embarcações/aeronaves brasileiras públicas ou privadas a serviço do governo onde quer que estejam; privadas em alto-mar ou espaço aéreo. EXTRATERRITORIALIDADE (art. 7º): lei brasileira aplica-se a crimes no exterior em hipóteses. B correta. A, C, D, E incorretas.",
      banca: "VUNESP",
      ano: 2023,
      cargo: "Delegado - PCSP"
    },
    {
      id: "penal-apl-04",
      enunciado: "Sobre a extraterritorialidade da lei penal, assinale a alternativa correta:",
      alternativas: {
        A: "Lei brasileira não se aplica a crimes cometidos no exterior.",
        B: "Lei brasileira aplica-se a crimes contra a vida/liberdade do Presidente da República praticados no exterior (extraterritorialidade incondicionada).",
        C: "Extraterritorialidade não depende de condições.",
        D: "Crime contra brasileiro no exterior nunca é punido no Brasil.",
        E: "Genocídio no exterior não pode ser punido no Brasil."
      },
      gabarito: "B",
      explicacao: "CP, art. 7º: EXTRATERRITORIALIDADE: I) INCONDICIONADA (independe de condições): crimes contra vida/liberdade Presidente; contra patrimônio/fé pública da União/DF/Estados/Municípios; contra administração pública por quem está a seu serviço; genocídio quando agente brasileiro/domiciliado no Brasil. II) CONDICIONADA (art. 7º, II e §§): exige condições (entrada agente Brasil, fato punível Brasil e país onde praticado, não absolvido no exterior, não cumprida pena, não extinto punibilidade). B correta. A, C, D, E incorretas.",
      banca: "FGV",
      ano: 2023,
      cargo: "Delegado - PCRJ"
    },
    {
      id: "penal-apl-05",
      enunciado: "Em relação à contagem de prazo no Direito Penal, é INCORRETO afirmar:",
      alternativas: {
        A: "Desprezam-se as frações de dia no Direito Penal.",
        B: "Conta-se o dia do começo.",
        C: "Mês e ano são contados pelo calendário comum.",
        D: "Dia do início é excluído.",
        E: "Ano tem 365 dias."
      },
      gabarito: "B",
      explicacao: "CP, art. 10: CONTAGEM DE PRAZO: desprezam-se as FRAÇÕES DE DIA. Conta-se o dia do COMEÇO no DIREITO PENAL (diferente do Direito Civil/Processual). Art. 10: 'O dia do começo inclui-se no cômputo do prazo'. Mês = calendário comum (Janeiro = 31 dias, Fevereiro 28/29). Ano = calendário comum. B INCORRETA - conta-se o dia do começo (inclui-se). A, C corretas. D incorreta - dia inicial incluído. E correta.",
      banca: "CESPE",
      ano: 2022,
      cargo: "Delegado - PCDF"
    },
    {
      id: "penal-apl-06",
      enunciado: "Quanto à interpretação da lei penal, assinale a alternativa correta:",
      alternativas: {
        A: "Analogia in malam partem é permitida.",
        B: "Interpretação analógica (intra legem) é permitida quando a própria lei autoriza (ex: 'ou outro meio insidioso').",
        C: "Analogia e interpretação analógica são a mesma coisa.",
        D: "Leis penais incriminadoras podem ser interpretadas extensivamente sempre.",
        E: "Interpretação restritiva nunca é aplicada."
      },
      gabarito: "B",
      explicacao: "INTERPRETAÇÃO DA LEI PENAL: 1) ANALOGIA (extra legem): aplicar lei de caso semelhante. IN BONAM PARTEM: permitida (beneficia réu). IN MALAM PARTEM: PROIBIDA (prejudica réu). 2) INTERPRETAÇÃO ANALÓGICA/INTRA LEGEM: lei traz fórmula casuística seguida de fórmula genérica (ex: CP 121 §2º, III - veneno, fogo, explosivo 'ou outro meio insidioso'). PERMITIDA. 3) INTERPRETAÇÃO EXTENSIVA: ampliar sentido da lei. 4) RESTRITIVA: restringir. B correta. A, C, D, E incorretas.",
      banca: "FCC",
      ano: 2023,
      cargo: "Delegado - PCPE"
    },
    {
      id: "penal-apl-07",
      enunciado: "Sobre o conflito aparente de normas penais, é correto afirmar:",
      alternativas: {
        A: "Princípio da especialidade: lei especial prevalece sobre lei geral.",
        B: "Não há princípios para resolver conflito aparente.",
        C: "Lei geral sempre prevalece sobre especial.",
        D: "Subsidiariedade não é princípio de conflito aparente.",
        E: "Consunção não existe."
      },
      gabarito: "A",
      explicacao: "CONFLITO APARENTE DE NORMAS: aplicação de mais de uma norma ao mesmo fato (só aparente - aplica-se uma). PRINCÍPIOS: 1) ESPECIALIDADE: lei ESPECIAL prevalece sobre GERAL (lex specialis derogat legi generali). Ex: infanticídio (especial) vs homicídio (geral). 2) SUBSIDIARIEDADE: lei subsidiária (menor gravidade) só se aplica se principal não aplicada (lex primaria derogat legi subsidiariae). 3) CONSUNÇÃO/ABSORÇÃO: crime maior absorve menor (crime-meio, antefactum/postfactum impunível). A correta. B, C, D, E incorretas.",
      banca: "VUNESP",
      ano: 2022,
      cargo: "Delegado - PCSP"
    },
    {
      id: "penal-apl-08",
      enunciado: "Em relação ao lugar do crime, assinale a alternativa INCORRETA:",
      alternativas: {
        A: "Código Penal adota teoria da ubiquidade/mista.",
        B: "Considera-se praticado o crime no lugar da ação/omissão e no do resultado.",
        C: "Teoria da atividade considera apenas o lugar da conduta.",
        D: "Teoria do resultado considera apenas o lugar do resultado.",
        E: "CP adota teoria da atividade."
      },
      gabarito: "E",
      explicacao: "CP, art. 6º: LUGAR DO CRIME (locus delicti): 'Considera-se praticado o crime no lugar em que ocorreu a AÇÃO ou OMISSÃO, no todo ou em parte, bem como onde se produziu ou deveria produzir-se o RESULTADO'. TEORIA DA UBIQUIDADE/MISTA: lugar da conduta (ação/omissão) OU do resultado. CP ADOTA UBIQUIDADE. Teoria atividade: só conduta. Teoria resultado: só resultado. E INCORRETA - CP adota ubiquidade, não atividade. A, B corretas. C, D corretas (teorias alternativas).",
      banca: "FGV",
      ano: 2023,
      cargo: "Delegado - PCRJ"
    },
    {
      id: "penal-apl-09",
      enunciado: "Quanto ao tempo do crime, é correto afirmar:",
      alternativas: {
        A: "CP adota teoria do resultado.",
        B: "Considera-se praticado o crime no momento da ação ou omissão, ainda que outro seja o do resultado (teoria da atividade).",
        C: "Tempo do crime é irrelevante para imputabilidade.",
        D: "Teoria da ubiquidade é adotada para tempo do crime.",
        E: "Resultado é que importa."
      },
      gabarito: "B",
      explicacao: "CP, art. 4º: TEMPO DO CRIME (tempus delicti): 'Considera-se praticado o crime no momento da AÇÃO ou OMISSÃO, ainda que outro seja o momento do RESULTADO'. TEORIA DA ATIVIDADE: momento da conduta. Importância: verificar lei vigente, imputabilidade, reincidência, prescrição. B correta. A incorreta - atividade. C incorreta - relevante para imputabilidade. D incorreta - atividade. E incorreta.",
      banca: "CESPE",
      ano: 2023,
      cargo: "Delegado - PCDF"
    },
    {
      id: "penal-apl-10",
      enunciado: "Sobre a imunidade diplomática, assinale a alternativa correta:",
      alternativas: {
        A: "Embaixadores estrangeiros podem ser processados no Brasil.",
        B: "Imunidade diplomática impede aplicação da lei penal brasileira a agentes diplomáticos estrangeiros (Convenção de Viena sobre Relações Diplomáticas).",
        C: "Imunidade diplomática não existe no Brasil.",
        D: "Cônsules têm imunidade penal ampla.",
        E: "Imunidade diplomática abrange todos os crimes."
      },
      gabarito: "B",
      explicacao: "IMUNIDADE DIPLOMÁTICA: Convenção de Viena sobre Relações Diplomáticas (1961 - Decreto 56.435/65): agentes diplomáticos (embaixadores, cônsules em atos de função) têm IMUNIDADE DE JURISDIÇÃO PENAL. Não podem ser processados/julgados no Brasil. Não é impunidade - podem ser julgados no país de origem ou com renúncia expressa pelo Estado acreditante. CÔNSULES: imunidade relativa (só atos de função). B correta. A, C, D, E incorretas.",
      banca: "FCC",
      ano: 2022,
      cargo: "Delegado - PCPE"
    }
  ],

  // TEMA 2: Crime - Conceito e Elementos (10 questões)
  "crime-conceito-e-elementos": [
    {
      id: "penal-crime-01",
      enunciado: "Sobre o conceito de crime, é correto afirmar:",
      alternativas: {
        A: "Crime tem apenas conceito formal.",
        B: "Conceito analítico/dogmático: crime é fato típico + ilícito/antijurídico + culpável.",
        C: "Tipicidade não é elemento do crime.",
        D: "Culpabilidade é elemento do fato típico.",
        E: "Ilicitude e antijuridicidade são diferentes."
      },
      gabarito: "B",
      explicacao: "CONCEITO DE CRIME: 1) FORMAL: o que a lei define como crime. 2) MATERIAL: ação/omissão que viola bem jurídico. 3) ANALÍTICO/DOGMÁTICO (teoria tripartite - majoritária): CRIME = FATO TÍPICO + ILICITUDE (antijuridicidade) + CULPABILIDADE. FATO TÍPICO: conduta, resultado, nexo causal, tipicidade. ILICITUDE: contrariedade ao ordenamento (ausência de excludentes). CULPABILIDADE: reprovabilidade (imputabilidade, potencial consciência ilicitude, exigibilidade conduta diversa). B correta. A, C, D, E incorretas.",
      banca: "CESPE",
      ano: 2023,
      cargo: "Delegado - PCDF"
    },
    {
      id: "penal-crime-02",
      enunciado: "Em relação ao fato típico, assinale a alternativa INCORRETA:",
      alternativas: {
        A: "Fato típico é composto por: conduta, resultado (crimes materiais), nexo causal, tipicidade.",
        B: "Conduta é comportamento humano voluntário (ação ou omissão).",
        C: "Resultado naturalístico ocorre em todos os crimes.",
        D: "Tipicidade é adequação do fato à norma penal incriminadora.",
        E: "Nexo causal liga conduta ao resultado."
      },
      gabarito: "C",
      explicacao: "FATO TÍPICO - Elementos: 1) CONDUTA (ação/omissão voluntária); 2) RESULTADO (crimes MATERIAIS - modificação mundo exterior; crimes FORMAIS/MERA CONDUTA - não exigem resultado naturalístico); 3) NEXO CAUSAL (crimes materiais); 4) TIPICIDADE (adequação fato à norma). C INCORRETA - resultado naturalístico SÓ em crimes MATERIAIS (homicídio). Crimes FORMAIS (extorsão mediante sequestro) e MERA CONDUTA (porte de arma) NÃO exigem. A, B, D, E corretas.",
      banca: "FCC",
      ano: 2023,
      cargo: "Delegado - PCPE"
    },
    {
      id: "penal-crime-03",
      enunciado: "Quanto à relação de causalidade, é correto afirmar:",
      alternativas: {
        A: "CP adota teoria da equivalência dos antecedentes causais (conditio sine qua non).",
        B: "CP adota teoria da causalidade adequada.",
        C: "Causa é apenas a condição mais importante.",
        D: "Concausas não existem.",
        E: "Nexo causal é irrelevante."
      },
      gabarito: "A",
      explicacao: "CP, art. 13: NEXO CAUSAL: relação causa-efeito entre conduta e resultado. TEORIA DA EQUIVALÊNCIA DOS ANTECEDENTES/CONDITIO SINE QUA NON (adotada): causa é toda CONDIÇÃO sem a qual o resultado NÃO teria ocorrido (juízo hipotético de eliminação). Todas as condições são equivalentes. CONCAUSAS (causas que concorrem): a) ABSOLUTAMENTE INDEPENDENTES (preexistentes, concomitantes, supervenientes que por si só produzem resultado - rompem nexo); b) RELATIVAMENTE INDEPENDENTES (não rompem nexo). A correta. B, C, D, E incorretas.",
      banca: "VUNESP",
      ano: 2023,
      cargo: "Delegado - PCSP"
    },
    {
      id: "penal-crime-04",
      enunciado: "Sobre a superveniência de causa independente, assinale a alternativa correta:",
      alternativas: {
        A: "Causa superveniente absolutamente independente que por si só produz resultado não exclui imputação.",
        B: "Causa superveniente relativamente independente que por si só produz resultado exclui imputação dos anteriores (responde por atos até então praticados - art. 13, §1º).",
        C: "Superveniência de causa nunca exclui imputação.",
        D: "Todas as causas supervenientes excluem nexo.",
        E: "Código Penal não trata de superveniência."
      },
      gabarito: "B",
      explicacao: "CP, art. 13, §1º: SUPERVENIÊNCIA DE CAUSA INDEPENDENTE: 'A superveniência de causa RELATIVAMENTE INDEPENDENTE exclui a imputação quando, por si só, produziu o resultado; os fatos anteriores, entretanto, imputam-se a quem os praticou'. Ex: A fere B; ambulância que leva B sofre acidente (causa relativamente independente que por si só produz morte) - A responde por lesão corporal, não homicídio. Causa ABSOLUTAMENTE independente: sempre exclui. B correta. A, C, D, E incorretas.",
      banca: "FGV",
      ano: 2023,
      cargo: "Delegado - PCRJ"
    },
    {
      id: "penal-crime-05",
      enunciado: "Em relação à conduta, é INCORRETO afirmar:",
      alternativas: {
        A: "Conduta é comportamento humano voluntário.",
        B: "Conduta pode ser comissiva (ação) ou omissiva (omissão).",
        C: "Atos reflexos, coação física irresistível e movimentos involuntários configuram conduta.",
        D: "Conduta pressupõe voluntariedade (consciência e vontade).",
        E: "Pessoa jurídica não pratica conduta em crimes comuns."
      },
      gabarito: "C",
      explicacao: "CONDUTA: comportamento humano VOLUNTÁRIO (ação/omissão) dirigido a finalidade. Elementos: CONSCIÊNCIA + VONTADE. NÃO HÁ CONDUTA: atos reflexos, coação física irresistível (vis absoluta), movimentos involuntários, sonambulismo, hipnose. Pessoas jurídicas: em regra não praticam conduta (exceção: crimes ambientais - Lei 9.605/98). C INCORRETA - atos reflexos/coação física/movimentos involuntários NÃO configuram conduta (ausência de voluntariedade). A, B, D, E corretas.",
      banca: "CESPE",
      ano: 2022,
      cargo: "Delegado - PCDF"
    },
    {
      id: "penal-crime-06",
      enunciado: "Quanto ao dolo, assinale a alternativa correta:",
      alternativas: {
        A: "Dolo não é elemento da conduta.",
        B: "Dolo é a vontade livre e consciente de realizar a conduta típica (teoria finalista da ação).",
        C: "Dolo eventual não existe.",
        D: "Dolo direto exige que o agente apenas aceite o resultado.",
        E: "Culpa e dolo são iguais."
      },
      gabarito: "B",
      explicacao: "CP, art. 18, I: DOLO (elemento SUBJETIVO do tipo): vontade LIVRE e CONSCIENTE de realizar a CONDUTA TÍPICA. Elementos: CONSCIÊNCIA (representação) + VONTADE. ESPÉCIES: 1) DOLO DIRETO/DETERMINADO: vontade dirigida ao resultado; 2) DOLO INDIRETO: a) ALTERNATIVO (vontade dirigida a resultados alternativos); b) EVENTUAL (agente prevê resultado, não quer diretamente, mas ASSUME O RISCO - art. 18, I, parte final). Teoria finalista: dolo no tipo. B correta. A, C, D, E incorretas.",
      banca: "FCC",
      ano: 2023,
      cargo: "Delegado - PCPE"
    },
    {
      id: "penal-crime-07",
      enunciado: "Sobre a culpa, é correto afirmar:",
      alternativas: {
        A: "Culpa é a conduta voluntária que produz resultado ilícito não querido, mas previsível, por inobservância de dever de cuidado.",
        B: "Culpa sempre é punida.",
        C: "Culpa consciente é o mesmo que dolo eventual.",
        D: "Imperícia não é modalidade de culpa.",
        E: "Não há distinção entre culpa consciente e inconsciente."
      },
      gabarito: "A",
      explicacao: "CP, art. 18, II: CULPA (elemento NORMATIVO do tipo): conduta VOLUNTÁRIA que produz resultado ILÍCITO NÃO QUERIDO mas PREVISÍVEL, por inobservância de DEVER DE CUIDADO objetivo. MODALIDADES: NEGLIGÊNCIA (inação), IMPRUDÊNCIA (ação), IMPERÍCIA (falta de aptidão técnica). CULPA CONSCIENTE (com previsão): prevê resultado mas confia que não ocorrerá. INCONSCIENTE (sem previsão): não prevê resultado previsível. Culpa: excepcional (só quando lei prevê). A correta. B, C, D, E incorretas.",
      banca: "VUNESP",
      ano: 2022,
      cargo: "Delegado - PCSP"
    },
    {
      id: "penal-crime-08",
      enunciado: "Em relação ao erro de tipo, assinale a alternativa INCORRETA:",
      alternativas: {
        A: "Erro de tipo é falsa percepção da realidade sobre elemento do tipo penal.",
        B: "Erro de tipo essencial inevitável (escusável) exclui dolo e culpa.",
        C: "Erro de tipo essencial evitável (inescusável) exclui dolo, responde por culpa se previsto.",
        D: "Erro de tipo sempre exclui crime.",
        E: "Erro de tipo está previsto no art. 20 do CP."
      },
      gabarito: "D",
      explicacao: "CP, art. 20: ERRO DE TIPO: falsa percepção da REALIDADE sobre ELEMENTO do tipo penal (elementar, circunstância). Recai sobre FATO. ERRO DE TIPO ESSENCIAL: I) INEVITÁVEL/ESCUSÁVEL/INVENCÍVEL: exclui DOLO e CULPA (agiu com diligência). II) EVITÁVEL/INESCUSÁVEL/VENCÍVEL: exclui DOLO, responde por CULPA se houver previsão. Ex: caçador mata pessoa pensando ser animal (evitável: homicídio culposo; inevitável: isento). D INCORRETA - erro evitável não exclui crime (culposo). A, B, C, E corretas.",
      banca: "FGV",
      ano: 2023,
      cargo: "Delegado - PCRJ"
    },
    {
      id: "penal-crime-09",
      enunciado: "Quanto à classificação dos crimes, é correto afirmar:",
      alternativas: {
        A: "Crime material exige apenas conduta.",
        B: "Crime formal consuma-se com a conduta, dispensando resultado naturalístico (mas não o exclui).",
        C: "Crime de mera conduta exige resultado naturalístico.",
        D: "Crime instantâneo é aquele que se prolonga no tempo.",
        E: "Crime permanente não existe."
      },
      gabarito: "B",
      explicacao: "CLASSIFICAÇÃO DOS CRIMES (quanto ao resultado): 1) MATERIAL: exige RESULTADO NATURALÍSTICO (homicídio - morte). 2) FORMAL/CONSUMAÇÃO ANTECIPADA: DISPENSA resultado naturalístico para consumação, mas não o exclui (extorsão mediante sequestro - consuma com sequestro, mas crime continua com cárcere). 3) MERA CONDUTA: NÃO ADMITE resultado naturalístico (violação de domicílio). CRIMES INSTANTÂNEO, PERMANENTE, INSTANTÂNEO DE EFEITOS PERMANENTES. B correta. A, C, D, E incorretas.",
      banca: "CESPE",
      ano: 2023,
      cargo: "Delegado - PCDF"
    },
    {
      id: "penal-crime-10",
      enunciado: "Sobre crimes dolosos contra a vida, assinale a alternativa correta:",
      alternativas: {
        A: "Júri não julga crimes dolosos contra a vida.",
        B: "São crimes dolosos contra a vida de competência do Tribunal do Júri: homicídio, induzimento/instigação/auxílio ao suicídio, infanticídio, aborto (consumados ou tentados).",
        C: "Homicídio culposo é da competência do Júri.",
        D: "Infanticídio não é julgado pelo Júri.",
        E: "Tentativa de aborto não é da competência do Júri."
      },
      gabarito: "B",
      explicacao: "CF/88, art. 5º, XXXVIII, d: Tribunal do JÚRI julga crimes DOLOSOS CONTRA A VIDA. CP: 1) HOMICÍDIO (art. 121); 2) INDUZIMENTO, INSTIGAÇÃO ou AUXÍLIO AO SUICÍDIO (art. 122); 3) INFANTICÍDIO (art. 123); 4) ABORTO (arts. 124-127). Consumados ou TENTADOS. Júri julga crimes DOLOSOS contra vida e conexos. Homicídio CULPOSO: juiz singular. B correta. A, C, D, E incorretas.",
      banca: "FCC",
      ano: 2022,
      cargo: "Delegado - PCPE"
    }
  ],

  // TEMA 3: Excludentes de Ilicitude (10 questões)
  "excludentes-de-ilicitude": [
    {
      id: "penal-excl-01",
      enunciado: "Sobre as excludentes de ilicitude (causas de justificação), é correto afirmar:",
      alternativas: {
        A: "Excludentes de ilicitude não afastam o crime.",
        B: "Excludentes de ilicitude afastam a antijuridicidade/ilicitude, tornando o fato atípico (tipicidade material) ou lícito.",
        C: "Estrito cumprimento do dever legal não é excludente.",
        D: "Legítima defesa não exclui ilicitude.",
        E: "Estado de necessidade não existe."
      },
      gabarito: "B",
      explicacao: "CP, art. 23: EXCLUDENTES DE ILICITUDE (causas de justificação): afastam a ILICITUDE (antijuridicidade), tornando fato LÍCITO. I) ESTADO DE NECESSIDADE; II) LEGÍTIMA DEFESA; III) ESTRITO CUMPRIMENTO DO DEVER LEGAL; IV) EXERCÍCIO REGULAR DE DIREITO. Outras: consentimento do ofendido (disponibilidade do bem). Consequências: afasta crime, legítima defesa contra, participação. Teoria: constitutivas negativas - excluem tipicidade material (Roxin). B correta. A, C, D, E incorretas.",
      banca: "CESPE",
      ano: 2023,
      cargo: "Delegado - PCDF"
    },
    {
      id: "penal-excl-02",
      enunciado: "Em relação ao estado de necessidade, assinale a alternativa INCORRETA:",
      alternativas: {
        A: "Estado de necessidade: sacrifica-se bem jurídico para salvar outro de perigo atual não causado voluntariamente.",
        B: "Requisitos: perigo atual, não causado voluntariamente pelo agente, inevitabilidade, razoabilidade (proporcionalidade).",
        C: "Estado de necessidade pode ser agressivo (contra terceiro inocente) ou defensivo (contra causador do perigo).",
        D: "Estado de necessidade sempre exclui crime e responsabilidade civil.",
        E: "Estado de necessidade de terceiro: posso sacrificar bem de terceiro para salvar outro."
      },
      gabarito: "D",
      explicacao: "CP, art. 24: ESTADO DE NECESSIDADE: 'Considera-se em estado de necessidade quem pratica o fato para salvar de perigo atual, que não provocou por sua vontade, nem podia de outro modo evitar, direito próprio ou alheio, cujo sacrifício, nas circunstâncias, não era razoável exigir-se'. Requisitos: perigo ATUAL, NÃO PROVOCADO voluntariamente, INEVITABILIDADE, razoabilidade. AGRESSIVO (terceiro) ou DEFENSIVO (causador). NÃO exclui responsabilidade CIVIL (art. 929 CC). D INCORRETA - não exclui responsabilidade civil. A, B, C, E corretas.",
      banca: "FCC",
      ano: 2023,
      cargo: "Delegado - PCPE"
    },
    {
      id: "penal-excl-03",
      enunciado: "Quanto à legítima defesa, é correto afirmar:",
      alternativas: {
        A: "Legítima defesa não exige moderação.",
        B: "Legítima defesa: repulsa a agressão injusta, atual ou iminente, a direito próprio ou alheio, usando meios necessários com moderação.",
        C: "Legítima defesa pode ser contra agressão passada.",
        D: "Legítima defesa não protege direito de terceiro.",
        E: "Legítima defesa putativa não existe."
      },
      gabarito: "B",
      explicacao: "CP, art. 25: LEGÍTIMA DEFESA: 'Entende-se em legítima defesa quem, usando moderadamente dos meios necessários, repele injusta agressão, atual ou iminente, a direito seu ou de outrem'. Requisitos: 1) AGRESSÃO INJUSTA (ilícita); 2) ATUAL ou IMINENTE (não passada/futura); 3) direito PRÓPRIO ou ALHEIO; 4) MEIOS NECESSÁRIOS (menos lesivos disponíveis); 5) MODERAÇÃO (proporcionalidade). PUTATIVA: erro sobre excludente (art. 20, §1º). B correta. A, C, D, E incorretas.",
      banca: "VUNESP",
      ano: 2023,
      cargo: "Delegado - PCSP"
    },
    {
      id: "penal-excl-04",
      enunciado: "Sobre o excesso nas excludentes de ilicitude, assinale a alternativa correta:",
      alternativas: {
        A: "Excesso não é punível.",
        B: "Excesso punível: agente usa meio ou intensidade desnecessários. Excesso doloso: dolo; excesso culposo: culpa.",
        C: "Excesso intensivo não existe.",
        D: "Excesso exculpante não é possível.",
        E: "CP não trata de excesso."
      },
      gabarito: "B",
      explicacao: "CP, art. 23, §ú: EXCESSO: 'O agente, em qualquer das hipóteses deste artigo, responderá pelo excesso doloso ou culposo'. EXCESSO ocorre quando agente ULTRAPASSA limites das excludentes. ESPÉCIES: 1) EXTENSIVO (após cessar agressão); 2) INTENSIVO (meio/intensidade desnecessários). EXCESSO DOLOSO: responde por crime doloso. CULPOSO: crime culposo (se previsto). EXCESSO EXCULPANTE: medo, surpresa, perturbação (isento - art. 28, I). B correta. A, C, D, E incorretas.",
      banca: "FGV",
      ano: 2023,
      cargo: "Delegado - PCRJ"
    },
    {
      id: "penal-excl-05",
      enunciado: "Em relação ao estrito cumprimento do dever legal, é INCORRETO afirmar:",
      alternativas: {
        A: "Estrito cumprimento do dever legal: agente público age no exercício de função prevista em lei.",
        B: "Ex: policial efetua prisão em flagrante.",
        C: "Particular pode invocar estrito cumprimento do dever legal em qualquer situação.",
        D: "Dever deve ser estrito (não pode haver excesso).",
        E: "É excludente de ilicitude."
      },
      gabarito: "C",
      explicacao: "CP, art. 23, III: ESTRITO CUMPRIMENTO DO DEVER LEGAL: agente (público ou particular com dever legal) age no ESTRITO cumprimento de DEVER imposto por LEI. Ex: policial prende em flagrante, oficial de justiça cumpre mandado. REQUISITOS: dever LEGAL (lei), ESTRITO cumprimento (sem excesso). Particular: só quando LEI impõe dever. Funcionário público: dever funcional. C INCORRETA - particular SÓ quando lei impõe dever específico. A, B, D, E corretas.",
      banca: "CESPE",
      ano: 2022,
      cargo: "Delegado - PCDF"
    },
    {
      id: "penal-excl-06",
      enunciado: "Quanto ao exercício regular de direito, assinale a alternativa correta:",
      alternativas: {
        A: "Exercício regular de direito não é excludente.",
        B: "Exercício regular de direito: agente age no exercício de direito reconhecido pelo ordenamento jurídico (violência esportiva, intervenções médicas, ofendículos).",
        C: "Direito de correção dos filhos é ilimitado.",
        D: "Ofendículos são sempre crime.",
        E: "Intervenções médicas não se enquadram."
      },
      gabarito: "B",
      explicacao: "CP, art. 23, III: EXERCÍCIO REGULAR DE DIREITO: agente age no exercício de DIREITO reconhecido pelo ordenamento. Exemplos: 1) VIOLÊNCIA ESPORTIVA (boxe, MMA - dentro das regras); 2) INTERVENÇÕES MÉDICAS/CIRÚRGICAS (consentimento); 3) OFENDÍCULOS (cerca elétrica, cacos de vidro - ostensivos); 4) DIREITO DE CORREÇÃO (pais - moderado). Não abrange vingança privada. B correta. A incorreta. C incorreta - limitado (moderação). D, E incorretas.",
      banca: "FCC",
      ano: 2023,
      cargo: "Delegado - PCPE"
    },
    {
      id: "penal-excl-07",
      enunciado: "Sobre o consentimento do ofendido, é correto afirmar:",
      alternativas: {
        A: "Consentimento do ofendido sempre exclui crime.",
        B: "Consentimento do ofendido pode ser excludente de ilicitude quando: bem jurídico disponível, consentimento válido (capacidade, ausência de vício), anterior ou concomitante.",
        C: "Consentimento não precisa ser válido.",
        D: "Vida é bem disponível.",
        E: "Consentimento posterior ao crime exclui ilicitude."
      },
      gabarito: "B",
      explicacao: "CONSENTIMENTO DO OFENDIDO (excludente supralegal): titular de bem jurídico DISPONÍVEL consente na lesão. Requisitos: 1) BEM JURÍDICO DISPONÍVEL (patrimônio - SIM; vida, integridade física grave - NÃO); 2) capacidade do consentente; 3) consentimento VÁLIDO (sem vício - coação, erro); 4) ANTERIOR ou CONCOMITANTE ao fato. Ex: furto com consentimento não é crime. Vida: indisponível (eutanásia é crime). B correta. A, C, D, E incorretas.",
      banca: "VUNESP",
      ano: 2022,
      cargo: "Delegado - PCSP"
    },
    {
      id: "penal-excl-08",
      enunciado: "Em relação às descriminantes putativas (erro sobre excludentes), assinale a alternativa INCORRETA:",
      alternativas: {
        A: "Descriminante putativa: agente supõe erroneamente estar amparado por excludente de ilicitude.",
        B: "Descriminante putativa por erro de tipo: erro sobre situação fática (art. 20, §1º) - exclui dolo, responde por culpa se evitável.",
        C: "Descriminante putativa por erro de proibição: erro sobre existência/limites da excludente - sempre isento.",
        D: "Ex de erro de tipo: agente pensa que está sendo agredido (não está) e reage.",
        E: "CP trata de descriminantes putativas."
      },
      gabarito: "C",
      explicacao: "CP, art. 20, §1º: DESCRIMINANTE PUTATIVA: agente supõe situação de fato que tornaria ação legítima. ESPÉCIES: 1) ERRO DE TIPO (situação fática): §1º - isento se inevitável, culpa se evitável. Ex: imagina agressão inexistente. 2) ERRO DE PROIBIÇÃO (permissão): erro sobre existência/limites - isento se inevitável, pena reduzida se evitável (art. 21). 3) ERRO DE TIPO PERMISSIVO (STF): erro sobre PRESSUPOSTO FÁTICO - art. 20, §1º. C INCORRETA - nem sempre isento (erro proibição evitável = pena reduzida). A, B, D, E corretas.",
      banca: "FGV",
      ano: 2023,
      cargo: "Delegado - PCRJ"
    },
    {
      id: "penal-excl-09",
      enunciado: "Quanto à legítima defesa putativa, é correto afirmar:",
      alternativas: {
        A: "Legítima defesa putativa não existe.",
        B: "Legítima defesa putativa: agente imagina erroneamente estar sendo agredido e reage (descriminante putativa por erro de tipo).",
        C: "Legítima defesa putativa sempre exclui crime.",
        D: "Não há diferença entre legítima defesa real e putativa.",
        E: "CP não prevê legítima defesa putativa."
      },
      gabarito: "B",
      explicacao: "LEGÍTIMA DEFESA PUTATIVA (descriminante putativa): agente IMAGINA erroneamente estar sendo AGREDIDO e reage. É ERRO DE TIPO sobre excludente (art. 20, §1º). Consequências: INEVITÁVEL - isento (exclui dolo e culpa). EVITÁVEL - responde por crime CULPOSO se previsto. Ex: pessoa põe mão no bolso para pegar documento, agente acha que vai sacar arma e atira. Diferente de legítima defesa REAL (agressão existe). B correta. A, C, D, E incorretas.",
      banca: "CESPE",
      ano: 2023,
      cargo: "Delegado - PCDF"
    },
    {
      id: "penal-excl-10",
      enunciado: "Sobre a distinção entre estado de necessidade e legítima defesa, assinale a alternativa correta:",
      alternativas: {
        A: "Estado de necessidade e legítima defesa são iguais.",
        B: "Estado de necessidade: perigo (situação); legítima defesa: agressão humana. Estado de necessidade: pode atingir inocente; legítima defesa: só agressor.",
        C: "Legítima defesa pode atingir inocente.",
        D: "Estado de necessidade exige agressão humana.",
        E: "Não há distinção."
      },
      gabarito: "B",
      explicacao: "DISTINÇÃO: ESTADO DE NECESSIDADE: 1) PERIGO (situação - incêndio, animal); 2) pode atingir BEM DE TERCEIRO inocente (agressivo); 3) razoabilidade dos bens. LEGÍTIMA DEFESA: 1) AGRESSÃO HUMANA injusta; 2) só contra AGRESSOR; 3) pode ser superior ao bem agredido. Ambas exigem atualidade/iminência. Legítima defesa: repulsa. Estado necessidade: pode ser fuga. B correta. A, C, D, E incorretas.",
      banca: "FCC",
      ano: 2022,
      cargo: "Delegado - PCPE"
    }
  ]
};
