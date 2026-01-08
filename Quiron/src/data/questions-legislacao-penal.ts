// Questões de Legislação Penal - 9 TEMAS (45 questões)
// Área Policial - Legislação Penal

export const questionsLegislacaoPenal = {
  // TEMA 1: Código Penal - Parte Geral (5 questões)
  "codigo-penal-parte-geral": [
    {
      id: "leg-penal-cp-01",
      enunciado: "Sobre a aplicação da lei penal no tempo (Código Penal, arts. 1º-2º), é correto afirmar:",
      alternativas: {
        A: "Lei penal mais grave retroage.",
        B: "Lei posterior mais benéfica retroage aos fatos anteriores (lex mitior), mesmo após sentença transitada em julgado.",
        C: "Lei penal nunca retroage.",
        D: "Combinação de leis é permitida.",
        E: "Legalidade não é princípio penal."
      },
      gabarito: "B",
      explicacao: "CP, arts. 1º-2º: APLICAÇÃO DA LEI PENAL NO TEMPO. PRINCÍPIO DA LEGALIDADE (art. 1º): nullum crimen, nulla poena sine lege (não há crime sem lei anterior que o defina, não há pena sem prévia cominação legal). Desdobramentos: reserva legal, anterioridade, taxatividade, irretroatividade da lei prejudicial. Art. 2º: lei posterior que FAVORECE o réu (lex mitior): RETROAGE aos fatos anteriores, MESMO se sentença transitada. Lei MAIS GRAVE: NÃO retroage. ABOLITIO CRIMINIS (art. 2º, caput): fato deixa de ser crime, cessa execução/efeitos penais. COMBINAÇÃO DE LEIS: VEDADA (Súmula 501 STF). B correta. A, C, D, E incorretas.",
      banca: "CESPE",
      ano: 2023,
      cargo: "Delegado de Polícia"
    },
    {
      id: "leg-penal-cp-02",
      enunciado: "Em relação ao conceito analítico de crime (fato típico, ilícito e culpável), assinale a alternativa INCORRETA:",
      alternativas: {
        A: "Crime: fato típico (adequação da conduta ao tipo penal), ilícito/antijurídico (contrário ao ordenamento, sem causas excludentes), culpável (reprovabilidade).",
        B: "Fato típico: conduta (ação/omissão), resultado (crimes materiais), nexo causal, tipicidade (formal + conglobante).",
        C: "Ilicitude: contrariedade ao direito. Excludentes (art. 23): estado de necessidade, legítima defesa, estrito cumprimento do dever legal, exercício regular de direito.",
        D: "Crime é apenas fato típico, não precisa ser ilícito.",
        E: "Culpabilidade: imputabilidade, potencial consciência da ilicitude, exigibilidade de conduta diversa. Excludentes: menoridade, doença mental (art. 26), coação irresistível, obediência hierárquica (art. 22)."
      },
      gabarito: "D",
      explicacao: "CONCEITO ANALÍTICO DE CRIME (teoria tripartida - majoritária): I) FATO TÍPICO: conduta humana (ação/omissão), resultado (crimes materiais), nexo causal, tipicidade; II) ILICITUDE (antijuridicidade): contrariedade ao ordenamento jurídico, ausência de causas excludentes (art. 23 - estado necessidade, legítima defesa, estrito cumprimento dever legal, exercício regular direito); III) CULPABILIDADE: reprovabilidade - imputabilidade, potencial consciência ilicitude, exigibilidade conduta diversa. Excludentes culpabilidade: menoridade (art. 27), doença mental (art. 26), coação irresistível, obediência hierárquica (art. 22). D INCORRETA - crime exige FATO TÍPICO + ILÍCITO + CULPÁVEL. A, B, C, E corretas.",
      banca: "FCC",
      ano: 2023,
      cargo: "Investigador de Polícia"
    },
    {
      id: "leg-penal-cp-03",
      enunciado: "Quanto às penas privativas de liberdade (CP, arts. 33-42), é correto afirmar:",
      alternativas: {
        A: "Penas privativas de liberdade não existem.",
        B: "As penas são reclusão e detenção, com regimes fechado, semiaberto e aberto. Progressão exige 1/6 da pena ou 2/5 (primário) / 3/5 (reincidente) em crimes hediondos.",
        C: "Progressão exige cumprimento de metade da pena.",
        D: "Detração não existe no Código Penal.",
        E: "Remição é de 1 dia trabalho para 1 dia de pena."
      },
      gabarito: "B",
      explicacao: "CP, arts. 33-42: PENAS PRIVATIVAS DE LIBERDADE. ESPÉCIES: I) RECLUSÃO (crimes mais graves); II) DETENÇÃO (crimes menos graves). REGIMES DE CUMPRIMENTO (art. 33): I) FECHADO (penitenciária - segurança máxima/média); II) SEMI-ABERTO (colônia agrícola, industrial ou similar); III) ABERTO (casa albergado ou prisão domiciliar - art. 117, LEP). PROGRESSÃO (art. 112, LEP): 1/6 da pena (crimes comuns) OU 2/5 (primário)/3/5 (reincidente) se hediondo + bom comportamento + mérito. DETRAÇÃO (art. 42): desconta tempo prisão provisória. REMIÇÃO (art. 126, LEP): 3 dias TRABALHO = 1 dia pena. B correta. A, C, D, E incorretas.",
      banca: "VUNESP",
      ano: 2023,
      cargo: "Investigador de Polícia"
    },
    {
      id: "leg-penal-cp-04",
      enunciado: "Sobre as excludentes de ilicitude (CP, art. 23), assinale a alternativa correta:",
      alternativas: {
        A: "Excludentes de ilicitude não existem.",
        B: "São excludentes: estado de necessidade, legítima defesa, estrito cumprimento do dever legal e exercício regular de direito. O excesso é punível.",
        C: "Legítima defesa permite excesso sempre.",
        D: "Estado de necessidade exige agressão injusta.",
        E: "Exercício regular de direito não é excludente."
      },
      gabarito: "B",
      explicacao: "CP, art. 23: EXCLUDENTES DE ILICITUDE (causas de justificação - afastam o crime). I) ESTADO DE NECESSIDADE (art. 24): perigo ATUAL, ameaça a direito próprio/alheio, sacrifício de bem de MENOR ou IGUAL valor, situação NÃO provocada voluntariamente, inexistência dever legal de enfrentar perigo. II) LEGÍTIMA DEFESA (art. 25): agressão INJUSTA, ATUAL ou IMINENTE, usando meios NECESSÁRIOS com MODERAÇÃO. III) ESTRITO CUMPRIMENTO DEVER LEGAL (1ª parte, III): funcionário cumpre dever imposto por lei. IV) EXERCÍCIO REGULAR DIREITO (2ª parte, III): ex. cirurgião, boxeador. EXCESSO: punível (doloso ou culposo - art. 23, parágrafo único). B correta. A, C, D, E incorretas.",
      banca: "FGV",
      ano: 2023,
      cargo: "Delegado de Polícia"
    },
    {
      id: "leg-penal-cp-05",
      enunciado: "Em relação ao concurso de pessoas (CP, arts. 29-31), é INCORRETO afirmar:",
      alternativas: {
        A: "Concurso de pessoas: pluralidade de agentes concorrendo para o mesmo crime.",
        B: "Teorias: monista (teoria unitária - art. 29, caput: todos respondem pelo mesmo crime), pluralista (cada um responde por crime próprio).",
        C: "Requisitos: pluralidade agentes/condutas, relevância causal, liame subjetivo (vínculo psicológico), identidade infração penal.",
        D: "Concurso de pessoas exige acordo prévio.",
        E: "Formas participação: autoria (executa), coautoria (executa junto), participação (instiga/auxilia sem executar - art. 29). Participação de menor importância: pena reduzida 1/6 a 1/3 (art. 29, §1º)."
      },
      gabarito: "D",
      explicacao: "CP, arts. 29-31: CONCURSO DE PESSOAS (concursus delinquentium). CONCEITO: pluralidade de agentes concorrendo para o mesmo crime. TEORIA ADOTADA: MONISTA (teoria unitária - art. 29, caput): todos respondem pelo mesmo crime (crime único). REQUISITOS: I) pluralidade agentes e condutas; II) relevância causal de cada conduta; III) liame SUBJETIVO (vínculo psicológico - NÃO exige acordo PRÉVIO, pode ser ADESÃO POSTERIOR); IV) identidade infração penal. FORMAS: autoria (executor), coautoria (execução conjunta), participação (instiga/auxilia sem executar). Art. 29, §1º: participação MENOR importância, pena reduzida 1/6 a 1/3. D INCORRETA - NÃO exige acordo prévio (basta adesão). A, B, C, E corretas.",
      banca: "CESPE",
      ano: 2022,
      cargo: "Delegado de Polícia"
    }
  ],

  // TEMA 2: Crimes contra a Pessoa (5 questões)
  "crimes-contra-pessoa": [
    {
      id: "leg-penal-pessoa-01",
      enunciado: "Sobre o crime de homicídio simples (CP, art. 121, caput), é correto afirmar:",
      alternativas: {
        A: "Homicídio simples não existe no Código Penal.",
        B: "Matar alguém. Pena: reclusão 6-20 anos. Crime doloso, material, admite tentativa. Ação penal pública incondicionada. Competência do Júri.",
        C: "Homicídio simples tem pena de detenção.",
        D: "Homicídio culposo é julgado pelo Júri.",
        E: "Tentativa de homicídio não é possível."
      },
      gabarito: "B",
      explicacao: "CP, art. 121, caput: HOMICÍDIO SIMPLES (homicídio privilegiado - §1º; qualificado - §2º). CONDUTA: matar alguém. PENA: reclusão 6-20 anos. TIPO OBJETIVO: I) conduta: matar (suprimir vida); II) sujeito ativo: qualquer pessoa (crime COMUM); III) sujeito passivo: pessoa viva (vida intrauterina até morte encefálica); IV) objeto material: corpo humano. TIPO SUBJETIVO: DOLO (direto ou eventual - assume risco). CONSUMAÇÃO: morte (crime MATERIAL). TENTATIVA: possível (iter criminis interrompido). AÇÃO PENAL: pública INCONDICIONADA. COMPETÊNCIA: Tribunal do JÚRI (art. 5º, XXXVIII, CF). B correta. A, C, D, E incorretas.",
      banca: "CESPE",
      ano: 2023,
      cargo: "Investigador de Polícia"
    },
    {
      id: "leg-penal-pessoa-02",
      enunciado: "Em relação ao homicídio qualificado (CP, art. 121, §2º), assinale a alternativa INCORRETA:",
      alternativas: {
        A: "Qualificadoras (art. 121, §2º): I) mediante paga/promessa recompensa (I - sicário); II) motivo torpe (II); III) motivo fútil (II); IV) traição/emboscada/dissimulação (IV - modo execução); V) recurso que dificulte/impossibilite defesa vítima (IV); VI) meio cruel (III); VII) veneno/fogo/explosivo/asfixia/tortura (III - meio execução).",
        B: "Feminicídio (VI - Lei 13.104/15): homicídio contra mulher por razões da condição de sexo feminino (violência doméstica/familiar ou menosprezo/discriminação à condição de mulher). Pena: reclusão 12-30 anos.",
        C: "Homicídio qualificado pode ter privilégio (§1º).",
        D: "Qualificadoras são sempre objetivas.",
        E: "Meio cruel: veneno, fogo, explosivo, asfixia, tortura."
      },
      gabarito: "D",
      explicacao: "CP, art. 121, §2º: HOMICÍDIO QUALIFICADO (pena reclusão 12-30 anos). QUALIFICADORAS: I) mediante PAGA/promessa recompensa (I - sicariato - SUBJETIVA); II) motivo TORPE (II - vil, repugnante - SUBJETIVA); III) motivo FÚTIL (II - desproporção - SUBJETIVA); IV) TRAIÇÃO/emboscada/dissimulação (IV - OBJETIVA); V) recurso que dificulte/impossibilite DEFESA (IV - OBJETIVA); VI) meio CRUEL (III - sofrimento - OBJETIVA); VII) VENENO/fogo/explosivo/asfixia/tortura (III - OBJETIVA). FEMINICÍDIO (VI - Lei 13.104/15): homicídio contra MULHER por razão sexo feminino. Qualificadora OBJETIVA (prevalece). Homicídio QUALIFICADO-PRIVILEGIADO: possível (STF/STJ). D INCORRETA - qualificadoras podem ser SUBJETIVAS ou OBJETIVAS. A, B, C, E corretas.",
      banca: "FCC",
      ano: 2023,
      cargo: "Delegado de Polícia"
    },
    {
      id: "leg-penal-pessoa-03",
      enunciado: "Quanto ao crime de lesão corporal (CP, art. 129), é correto afirmar:",
      alternativas: {
        A: "Lesão corporal não é crime.",
        B: "Ofender integridade corporal ou saúde. Simples: detenção 3 meses-1 ano. Grave: reclusão 1-5 anos. Gravíssima: reclusão 2-8 anos. Admite forma culposa.",
        C: "Lesão corporal grave tem pena de detenção.",
        D: "Lesão culposa não existe.",
        E: "Violência doméstica não qualifica lesão corporal."
      },
      gabarito: "B",
      explicacao: "CP, art. 129: LESÃO CORPORAL - ofender integridade corporal ou saúde de outrem. LESÃO SIMPLES (caput): detenção 3 meses - 1 ano. LESÃO GRAVE (§1º - reclusão 1-5 anos): I) incapacidade atividades habituais > 30 dias; II) perigo de VIDA; III) debilidade PERMANENTE membro/sentido/função; IV) aceleração parto. LESÃO GRAVÍSSIMA (§2º - reclusão 2-8 anos): I) incapacidade PERMANENTE para trabalho/membro/sentido/função; II) enfermidade INCURÁVEL; III) deformidade PERMANENTE; IV) aborto. LESÃO CULPOSA (§6º): detenção 2 meses - 1 ano. §§9º-13 (Lei Maria da Penha): violência doméstica. B correta. A, C, D, E incorretas.",
      banca: "VUNESP",
      ano: 2023,
      cargo: "Investigador de Polícia"
    },
    {
      id: "leg-penal-pessoa-04",
      enunciado: "Sobre o crime de ameaça (CP, art. 147), assinale a alternativa correta:",
      alternativas: {
        A: "Ameaça não é crime.",
        B: "Ameaçar alguém de mal injusto e grave. Pena: detenção 1-6 meses ou multa. Ação penal condicionada (salvo violência doméstica). Crime de menor potencial ofensivo.",
        C: "Mal ameaçado pode ser presente.",
        D: "Ação penal da ameaça é sempre incondicionada.",
        E: "Ameaça não é crime de menor potencial ofensivo."
      },
      gabarito: "B",
      explicacao: "CP, art. 147: AMEAÇA - ameaçar alguem, por palavra, escrito, gesto ou meio simbólico, de causar-lhe MAL INJUSTO e GRAVE. PENA: detenção 1-6 meses ou multa. TIPO OBJETIVO: mal deve ser: I) INJUSTO (contrário ao direito); II) GRAVE (significativo - mal leve não configura); III) FUTURO (não presente/iminente); IV) POSSÍVEL (verossímil); V) DETERMINADO (certo). TIPO SUBJETIVO: dolo (intenção intimidar). CONSUMAÇÃO: quando vítima toma conhecimento (crime FORMAL). AÇÃO PENAL: pública CONDICIONADA à representação (regra) - EXCEÇÃO: violência doméstica (INCONDICIONADA). Crime de MENOR POTENCIAL ofensivo (pena máxima até 2 anos). B correta. A, C, D, E incorretas.",
      banca: "FGV",
      ano: 2023,
      cargo: "Investigador de Polícia"
    },
    {
      id: "leg-penal-pessoa-05",
      enunciado: "Em relação ao crime de periclitação da vida e saúde (omissão de socorro - CP, art. 135), é INCORRETO afirmar:",
      alternativas: {
        A: "Omissão de socorro (art. 135): deixar de prestar assistência, quando possível fazê-lo sem risco pessoal, à criança abandonada ou extraviada, ou pessoa inválida ou ferida, ao desamparo ou em grave e iminente perigo; ou não pedir socorro da autoridade pública.",
        B: "Pena: detenção 1-6 meses ou multa. §Parágrafo único: se resulta lesão grave, pena aumenta metade; se morte, triplica.",
        C: "Requisitos: I) vítima em perigo; II) possibilidade de prestar socorro; III) ausência de risco pessoal para socorrista.",
        D: "Omissão de socorro exige que o agente tenha causado o perigo.",
        E: "Crime omissivo puro (basta omissão, não exige resultado). Consumação: omissão do socorro (não exige resultado lesivo). Ação penal: pública incondicionada."
      },
      gabarito: "D",
      explicacao: "CP, art. 135: OMISSÃO DE SOCORRO - deixar de prestar assistência, quando possível sem risco pessoal, à criança abandonada/extraviada, pessoa inválida/ferida, ao desamparo ou grave e iminente perigo; ou não pedir socorro autoridade pública. PENA: detenção 1-6 meses ou multa. Parágrafo único: resulta lesão GRAVE, pena aumenta METADE; morte, TRIPLICA. REQUISITOS: I) vítima em perigo; II) possibilidade prestar socorro; III) ausência risco pessoal socorrista. Crime OMISSIVO PURO (basta omissão). NÃO exige que agente tenha CAUSADO o perigo (diferente de art. 304, CTB). CONSUMAÇÃO: omissão (não exige resultado). AÇÃO PENAL: pública incondicionada. D INCORRETA - NÃO exige causação do perigo. A, B, C, E corretas.",
      banca: "CESPE",
      ano: 2022,
      cargo: "Delegado de Polícia"
    },
    {
      id: "leg-penal-pessoa-06",
      enunciado: "Sobre o homicídio privilegiado (CP, art. 121, §1º), é correto afirmar:",
      alternativas: {
        A: "Homicídio privilegiado não existe no Código Penal brasileiro.",
        B: "Se o agente comete homicídio impelido por motivo de relevante valor social ou moral, ou sob domínio de violenta emoção logo em seguida a injusta provocação da vítima, o juiz pode reduzir a pena de 1/6 a 1/3.",
        C: "O privilégio é obrigatório e aumenta a pena.",
        D: "Homicídio privilegiado não pode coexistir com qualificadoras.",
        E: "A pena do homicídio privilegiado é sempre fixada no mínimo legal."
      },
      gabarito: "B",
      explicacao: "CP, art. 121, §1º: HOMICÍDIO PRIVILEGIADO - causas de diminuição de pena. HIPÓTESES: I) RELEVANTE VALOR SOCIAL: benefício coletividade (ex: morte de traidor da pátria); II) RELEVANTE VALOR MORAL: sentimento altruísta (ex: eutanásia, morte de estuprador da filha); III) DOMÍNIO VIOLENTA EMOÇÃO, logo em seguida INJUSTA PROVOCAÇÃO da vítima. EFEITO: juiz PODE reduzir pena 1/6 a 1/3 (faculdade judicial). HOMICÍDIO PRIVILEGIADO-QUALIFICADO: possível coexistência (STF HC 95900, STJ). Súmula 722 STF (revogada 2018): admite concurso. Privilegiadoras = SUBJETIVAS (animus do agente). Qualificadoras OBJETIVAS prevalecem sobre privilegiadoras, mas podem coexistir (reduz após fixar qualificada). B correta. A, C, D, E incorretas.",
      banca: "FCC",
      ano: 2024,
      cargo: "Delegado de Polícia"
    },
    {
      id: "leg-penal-pessoa-07",
      enunciado: "Em relação ao infanticídio (CP, art. 123), assinale a alternativa INCORRETA:",
      alternativas: {
        A: "Infanticídio: matar, sob influência do estado puerperal, o próprio filho, durante o parto ou logo após.",
        B: "Pena: detenção 2-6 anos. Sujeito ativo: mãe (crime próprio). Estado puerperal: perturbação psicológica pós-parto.",
        C: "Infanticídio é julgado pelo Tribunal do Júri.",
        D: "Se terceiro mata sob ordem da mãe em estado puerperal, responde por homicídio.",
        E: "Momento: durante parto ou logo após (até primeiras horas/dias - caso concreto)."
      },
      gabarito: "C",
      explicacao: "CP, art. 123: INFANTICÍDIO - matar, sob influência ESTADO PUERPERAL, o PRÓPRIO FILHO, durante parto ou logo após. PENA: detenção 2-6 anos. ELEMENTOS: I) sujeito ativo: MÃE (crime PRÓPRIO); II) sujeito passivo: filho (nascente ou neonato); III) temporal: DURANTE parto ou LOGO APÓS (primeiras horas/dias); IV) estado PUERPERAL (perturbação psíquica/fisiológica pós-parto - elementar). COMPETÊNCIA: Juiz SINGULAR (NÃO é Júri - posição majoritária doutrina, pois pena é detenção, não crime doloso contra vida de pena reclusão). COAUTORIA: terceiro que mata sob ordem mãe responde HOMICÍDIO (não pode estar em estado puerperal). C INCORRETA - NÃO é Júri. A, B, D, E corretas.",
      banca: "CESPE",
      ano: 2024,
      cargo: "Investigador de Polícia"
    },
    {
      id: "leg-penal-pessoa-08",
      enunciado: "Quanto ao aborto provocado pela gestante (CP, art. 124), é correto afirmar:",
      alternativas: {
        A: "Aborto provocado pela gestante não é crime no Brasil.",
        B: "Provocar aborto em si mesma ou consentir que outrem lho provoque. Pena: detenção 1-3 anos. Aborto sem consentimento (art. 125): reclusão 3-10 anos.",
        C: "Aborto é sempre permitido no Brasil.",
        D: "Não existe excludente de ilicitude para aborto.",
        E: "Aborto consensual tem pena maior que aborto sem consentimento."
      },
      gabarito: "B",
      explicacao: "CP, art. 124: ABORTO PROVOCADO PELA GESTANTE - provocar aborto em si mesma ou consentir que outrem lhe provoque. PENA: detenção 1-3 anos. Art. 125: aborto SEM consentimento gestante - reclusão 3-10 anos. Art. 126: aborto COM consentimento - reclusão 1-4 anos. Art. 127: forma qualificada (lesão grave +1/3; morte duplica). ABORTO NÃO PUNÍVEL (art. 128): I) necessário/terapêutico: risco vida gestante; II) sentimental/humanitário: gravidez resultante ESTUPRO. ADPF 54 (STF): anencefalia (antecipação terapêutica parto). Aborto é CRIME contra vida, mas competência JÚRI só arts. 125-127 (terceiro). Art. 124: juiz singular. B correta. A, C, D, E incorretas.",
      banca: "VUNESP",
      ano: 2024,
      cargo: "Delegado de Polícia"
    },
    {
      id: "leg-penal-pessoa-09",
      enunciado: "Sobre as lesões corporais qualificadas (CP, art. 129, §§9º-11), assinale a alternativa correta:",
      alternativas: {
        A: "Lesão corporal contra mulher não tem qualificadora específica.",
        B: "Se lesão é praticada contra ascendente, descendente, irmão, cônjuge ou companheiro, ou com quem conviva ou tenha convivido, ou prevalecendo-se de relações domésticas/familiares/íntimas/hospitalidade, a pena aumenta 1/3. Lei Maria da Penha aplica-se.",
        C: "Violência doméstica não é qualificadora de lesão corporal.",
        D: "Lesão corporal doméstica tem pena menor que lesão simples.",
        E: "Lei Maria da Penha só se aplica a crimes de homicídio."
      },
      gabarito: "B",
      explicacao: "CP, art. 129, §§9º-13: LESÃO CORPORAL - formas qualificadas Lei Maria da Penha (Lei 11.340/2006). §9º: lesão praticada contra ascendente, descendente, irmão, cônjuge/companheiro, ou com quem conviva/tenha convivido, ou prevalecendo relações domésticas/familiares/íntimas/hospitalidade - pena aumentada 1/3 (se lesão SIMPLES ou CULPOSA). §10: lesão §9º, pena TRIPLICADA se crime contra pessoa portadora deficiência. §11: contexto violência doméstica/familiar, ação penal PÚBLICA INCONDICIONADA (STF ADI 4424/2012 - vítima não pode renunciar). §13: lesão §§1º-2º (grave/gravíssima), violência doméstica, causa aumento 1/3. Lei 11.340/06: cria mecanismos proteção mulher. B correta. A, C, D, E incorretas.",
      banca: "FGV",
      ano: 2024,
      cargo: "Investigador de Polícia"
    },
    {
      id: "leg-penal-pessoa-10",
      enunciado: "Em relação ao crime de rixa (CP, art. 137), é INCORRETO afirmar:",
      alternativas: {
        A: "Rixa: participar de rixa (luta entre 3 ou mais pessoas). Pena: detenção 15 dias - 2 meses ou multa.",
        B: "Parágrafo único: se morte ou lesão grave, pena reclusão 6 meses - 2 anos (se não identificado autor específico).",
        C: "Rixa exige no mínimo 2 pessoas.",
        D: "Crime de perigo abstrato (pune participação, não resultado). Sujeitos: mínimo 3 pessoas (luta recíproca).",
        E: "Se identificado autor morte/lesão, responde por homicídio/lesão (não rixa qualificada)."
      },
      gabarito: "C",
      explicacao: "CP, art. 137: RIXA - participar de RIXA, salvo para separar contendores. PENA: detenção 15 dias - 2 meses ou multa. RIXA: luta entre MÍNIMO 3 PESSOAS, com violência recíproca (todos contra todos ou grupos). Parágrafo único: se MORTE ou LESÃO GRAVE, e não é possível identificar autor, pena reclusão 6 meses - 2 anos. Crime de PERIGO ABSTRATO (pune participação). Se identificado autor morte/lesão, responde HOMICÍDIO/LESÃO + RIXA (concurso formal). Absorve vias de fato, não absorve crimes graves. Excludente: separar contendores. CONSUMAÇÃO: início luta (formal). TENTATIVA: controversa (maioria entende inadmissível). C INCORRETA - exige MÍNIMO 3 PESSOAS, não 2. A, B, D, E corretas.",
      banca: "CESPE",
      ano: 2023,
      cargo: "Investigador de Polícia"
    },
    {
      id: "leg-penal-pessoa-11",
      enunciado: "Quanto aos crimes de calúnia, difamação e injúria (CP, arts. 138-140), é correto afirmar:",
      alternativas: {
        A: "Calúnia, difamação e injúria não se diferenciam.",
        B: "Calúnia: imputar falsamente fato definido como crime. Difamação: imputar fato ofensivo à reputação. Injúria: ofender dignidade/decoro. Exceção da verdade admitida em calúnia (regra) e difamação (exceção).",
        C: "Injúria permite exceção da verdade sempre.",
        D: "Difamação permite exceção da verdade em qualquer caso.",
        E: "Calúnia nunca admite exceção da verdade."
      },
      gabarito: "B",
      explicacao: "CRIMES CONTRA HONRA: I) CALÚNIA (art. 138): imputar FALSAMENTE fato definido como CRIME - detenção 6 meses - 2 anos + multa. Bem jurídico: honra OBJETIVA (reputação). EXCEÇÃO VERDADE: admitida (salvo se crime foi julgado improcedente/réu absolvido, ou crime é de ação privada e não houve condenação). II) DIFAMAÇÃO (art. 139): imputar fato OFENSIVO à reputação - detenção 3 meses - 1 ano + multa. Honra OBJETIVA. Exceção verdade: NÃO admitida (salvo funcionário público/ato função). III) INJÚRIA (art. 140): ofender dignidade/decoro - detenção 1-6 meses ou multa. Honra SUBJETIVA (dignidade). Exceção verdade: NUNCA. Injúria RACIAL (§3º): raça/cor/etnia/religião/origem - reclusão 2-5 anos. B correta. A, C, D, E incorretas.",
      banca: "FCC",
      ano: 2024,
      cargo: "Delegado de Polícia"
    },
    {
      id: "leg-penal-pessoa-12",
      enunciado: "Sobre o crime de constrangimento ilegal (CP, art. 146), assinale a alternativa correta:",
      alternativas: {
        A: "Constrangimento ilegal não é crime.",
        B: "Constranger alguém, mediante violência ou grave ameaça, ou depois de lhe haver reduzido por qualquer meio a capacidade de resistência, a não fazer o que a lei permite ou fazer o que ela não manda. Pena: detenção 3 meses-1 ano ou multa.",
        C: "Constrangimento ilegal exige violência física sempre.",
        D: "Constrangimento ilegal tem pena de reclusão.",
        E: "Ação penal é sempre privada no constrangimento ilegal."
      },
      gabarito: "B",
      explicacao: "CP, art. 146: CONSTRANGIMENTO ILEGAL - constranger alguém, mediante VIOLÊNCIA ou GRAVE AMEAÇA, ou depois reduzir por qualquer meio capacidade resistência, a NÃO FAZER o que lei PERMITE, ou FAZER o que ela NÃO MANDA. PENA: detenção 3 meses - 1 ano ou multa. ELEMENTOS: I) constranger (coagir); II) meio: violência/grave ameaça/redução capacidade resistência; III) finalidade: não fazer permitido OU fazer não obrigatório. Subsidiariedade: se meio para outro crime (roubo, estupro), absorvido (crime-meio). §3º: não constitui crime se coação para impedir suicídio. AÇÃO PENAL: pública CONDICIONADA à representação (regra). Crime subsidiário. B correta. A, C, D, E incorretas.",
      banca: "VUNESP",
      ano: 2024,
      cargo: "Investigador de Polícia"
    },
    {
      id: "leg-penal-pessoa-13",
      enunciado: "Em relação ao crime de sequestro e cárcere privado (CP, art. 148), é INCORRETO afirmar:",
      alternativas: {
        A: "Sequestro/cárcere privado: privar alguém de sua liberdade, mediante sequestro ou cárcere privado. Pena: reclusão 1-3 anos.",
        B: "§1º: pena aumenta metade se: I) vítima ascendente/descendente/cônjuge; II) se crime praticado mediante internação vítima em casa saúde/hospital; III) se privação liberdade dura > 15 dias. §2º: se resulta vítima grave sofrimento físico/moral, pena reclusão 2-5 anos.",
        C: "§3º: se resulta lesão grave, pena reclusão 4-10 anos; morte, 8-16 anos (sem prejuízo homicídio doloso).",
        D: "Sequestro/cárcere privado não se diferencia do art. 159 (extorsão mediante sequestro).",
        E: "Crime instantâneo de efeitos permanentes. Consumação: privação liberdade (não exige tempo mínimo). Tentativa: possível."
      },
      gabarito: "D",
      explicacao: "CP, art. 148: SEQUESTRO/CÁRCERE PRIVADO - privar alguém liberdade, mediante sequestro ou cárcere privado. PENA: reclusão 1-3 anos. DIFERENÇA: I) SEQUESTRO: conduzir/deslocar vítima; II) CÁRCERE: confinar/manter presa. §1º: aumenta metade se vítima ascendente/descendente/cônjuge/internação casa saúde/privação > 15 dias. §2º: grave sofrimento físico/moral - reclusão 2-5 anos. §3º: lesão grave (reclusão 4-10 anos); morte (reclusão 8-16 anos - não absorve homicídio doloso). DIFERENÇA ART. 159 (extorsão mediante sequestro): art. 148 não há finalidade ECONÔMICA/resgate. Crime instantâneo efeitos PERMANENTES. Consumação: privação liberdade. Flagrante: permanente. D INCORRETA - art. 148 SEM fim econômico, art. 159 COM resgate. A, B, C, E corretas.",
      banca: "FGV",
      ano: 2023,
      cargo: "Delegado de Polícia"
    },
    {
      id: "leg-penal-pessoa-14",
      enunciado: "Quanto ao crime de violação de domicílio (CP, art. 150), é correto afirmar:",
      alternativas: {
        A: "Violação de domicílio não é crime no Brasil.",
        B: "Entrar ou permanecer clandestina ou astuciosamente, ou contra vontade expressa/tácita de quem de direito, em casa alheia ou dependências. Pena: detenção 1-3 meses ou multa. Qualificada: detenção 6 meses-2 anos + multa (noturno ou violência).",
        C: "Casa não abrange estabelecimento comercial.",
        D: "Funcionário público pode violar domicílio livremente.",
        E: "Violação de domicílio tem pena de reclusão."
      },
      gabarito: "B",
      explicacao: "CP, art. 150: VIOLAÇÃO DE DOMICÍLIO - entrar ou permanecer, clandestina ou astuciosamente, ou contra vontade expressa/tácita de quem de direito, em CASA ALHEIA ou suas DEPENDÊNCIAS. PENA: detenção 1-3 meses ou multa. §1º: QUALIFICADA - detenção 6 meses - 2 anos + multa se: I) durante NOITE; II) lugar ERMO; III) VIOLÊNCIA/grave ameaça. §2º: aumenta 1/3 se funcionário público fora casos lei. CASA (§4º): I) compartimento habitado; II) aposento ocupado habitação coletiva; III) compartimento NÃO aberto público, onde alguém exerce profissão/atividade. §5º: não crime se entrada/permanência durante dia (6h-18h), observadas formalidades legais: I) desastre/prestar socorro; II) ordem judicial. CF, art. 5º, XI: inviolabilidade. B correta. A, C, D, E incorretas.",
      banca: "CESPE",
      ano: 2024,
      cargo: "Investigador de Polícia"
    },
    {
      id: "leg-penal-pessoa-15",
      enunciado: "Sobre o crime de abandono de incapaz (CP, art. 133), assinale a alternativa INCORRETA:",
      alternativas: {
        A: "Abandono de incapaz: abandonar pessoa que está sob cuidado, guarda, vigilância ou autoridade, e por qualquer motivo incapaz de defender-se dos riscos do abandono.",
        B: "Pena: detenção 6 meses-3 anos. §1º: se resulta lesão grave, pena reclusão 1-5 anos; morte, reclusão 4-12 anos. §2º: penas aumentadas 1/3 se abandono em lugar ermo ou se autor é ascendente/descendente/cônjuge/irmão/tutor/curador.",
        C: "Abandono de incapaz exige que a vítima seja menor de idade sempre.",
        D: "Crime de perigo concreto (exige efetiva situação de risco). Sujeito passivo: pessoa incapaz defender-se (criança, doente, idoso).",
        E: "Diferença omissão socorro (art. 135): no abandono incapaz (art. 133), agente tinha DEVER JURÍDICO de cuidado/guarda/vigilância/autoridade."
      },
      gabarito: "C",
      explicacao: "CP, art. 133: ABANDONO DE INCAPAZ - abandonar pessoa que está sob cuidado, guarda, vigilância ou autoridade, e por qualquer motivo incapaz defender-se riscos abandono. PENA: detenção 6 meses - 3 anos. §1º: lesão GRAVE (reclusão 1-5 anos); MORTE (reclusão 4-12 anos - preterdoloso). §2º: aumenta 1/3 se lugar ERMO ou autor ascendente/descendente/cônjuge/irmão/tutor/curador. ELEMENTOS: I) dever jurídico cuidado/guarda/vigilância/autoridade; II) incapacidade vítima defender-se (não precisa ser menor - pode ser doente, idoso, pessoa com deficiência). Crime de PERIGO CONCRETO. DIFERENÇA ART. 135 (omissão socorro): art. 133 exige DEVER JURÍDICO prévio; art. 135 dever genérico solidariedade. C INCORRETA - vítima NÃO precisa ser menor (basta incapacidade). A, B, D, E corretas.",
      banca: "FCC",
      ano: 2023,
      cargo: "Delegado de Polícia"
    }
  ],

  // TEMA 3: Crimes contra o Patrimônio (5 questões)
  "crimes-contra-patrimonio": [
    {
      id: "leg-penal-patrim-01",
      enunciado: "Sobre o crime de furto (CP, art. 155), é correto afirmar:",
      alternativas: {
        A: "Furto não é crime contra o patrimônio.",
        B: "Subtrair coisa alheia móvel. Pena: reclusão 1-4 anos e multa. Consuma-se com a posse (Súmula 582 STF). Admite princípio da insignificância.",
        C: "Furto consuma-se com a saída do bem do local.",
        D: "Princípio da insignificância não se aplica ao furto.",
        E: "Furto de coisa imóvel é possível."
      },
      gabarito: "B",
      explicacao: "CP, art. 155: FURTO - subtrair, para si ou outrem, coisa alheia MÓVEL. PENA: reclusão 1-4 anos + multa. TIPO OBJETIVO: I) subtrair (tirar, apoderar-se); II) coisa (bem MÓVEL, corpóreo); III) alheia (pertence outrem); IV) sem consentimento, clandestinamente. TIPO SUBJETIVO: dolo + animus furandi (intenção apropriação definitiva). CONSUMAÇÃO: quando agente obtém POSSE da coisa (teoria da amotio/apprehensio - Súmula 582 STF), mesmo que breve. TENTATIVA: possível (iter interrompido). PRINCÍPIO DA INSIGNIFICÂNCIA: STF admite (valor < R$200,00 orientação). FURTO PRIVILEGIADO (§2º): coisa pequeno valor, primário, pena 1/3 a 2/3 reduzida. B correta. A, C, D, E incorretas.",
      banca: "CESPE",
      ano: 2023,
      cargo: "Investigador de Polícia"
    },
    {
      id: "leg-penal-patrim-02",
      enunciado: "Em relação ao crime de roubo (CP, art. 157), assinale a alternativa INCORRETA:",
      alternativas: {
        A: "Roubo (art. 157): subtrair coisa móvel alheia, mediante GRAVE AMEAÇA ou VIOLÊNCIA à pessoa, ou depois de havê-la, por qualquer meio, reduzido à impossibilidade de resistência.",
        B: "Pena: reclusão 4-10 anos + multa. Majorantes (§2º): I) arma (2-A - 1/3 a 1/2); II) concurso 2+ pessoas (II - 1/3 a 1/2); III) restrição liberdade vítima (V - 2/3); IV) arma de fogo (I - metade).",
        C: "Roubo qualificado (§3º): resulta LESÃO GRAVE, reclusão 7-18 anos + multa; resulta MORTE (latrocínio), reclusão 20-30 anos + multa.",
        D: "Latrocínio é julgado pelo Tribunal do Júri.",
        E: "Roubo próprio: violência/ameaça ANTES ou DURANTE subtração. Roubo impróprio (§1º): violência/ameaça DEPOIS, para assegurar impunidade ou detenção da coisa."
      },
      gabarito: "D",
      explicacao: "CP, art. 157: ROUBO - subtrair coisa móvel alheia, mediante GRAVE AMEAÇA ou VIOLÊNCIA à pessoa, ou reduzindo-a à impossibilidade resistência. PENA: reclusão 4-10 anos + multa. MAJORANTES (§2º): I) arma (2-A - 1/3 a 1/2); II) concurso 2+ pessoas (II - 1/3 a 1/2); III) restrição liberdade vítima (V - 2/3); IV) arma FOGO (I - METADE). ROUBO QUALIFICADO (§3º): I) resulta lesão GRAVE: reclusão 7-18 anos + multa; II) resulta MORTE (LATROCÍNIO): reclusão 20-30 anos + multa. LATROCÍNIO: competência JUIZ SINGULAR (NÃO é Júri - crime contra PATRIMÔNIO, não contra vida - Súmula 603 STF). Roubo PRÓPRIO: violência ANTES/DURANTE. IMPRÓPRIO (§1º): violência DEPOIS. D INCORRETA - latrocínio NÃO é Júri (juiz singular). A, B, C, E corretas.",
      banca: "FCC",
      ano: 2023,
      cargo: "Delegado de Polícia"
    },
    {
      id: "leg-penal-patrim-03",
      enunciado: "Quanto ao crime de extorsão (CP, art. 158), é correto afirmar:",
      alternativas: {
        A: "Extorsão não existe no Código Penal.",
        B: "Constranger alguém mediante violência ou grave ameaça a fazer, tolerar ou deixar de fazer algo para obter vantagem econômica. Pena: reclusão 4-10 anos e multa.",
        C: "Extorsão é o mesmo que roubo.",
        D: "Extorsão consuma-se com a ameaça.",
        E: "Extorsão não admite tentativa."
      },
      gabarito: "B",
      explicacao: "CP, art. 158: EXTORSÃO - constranger alguém, mediante VIOLÊNCIA ou GRAVE AMEAÇA, com intuito obter INDEVIDA vantagem econômica, a fazer, tolerar que se faça ou deixar fazer alguma coisa. PENA: reclusão 4-10 anos + multa. DIFERENÇA ROUBO: I) EXTORSÃO: vítima COOPERA/age (entrega bem, faz algo, tolera); II) ROUBO: agente SUBTRAI diretamente. CONSUMAÇÃO: quando vítima age conforme exigido OU agente obtém vantagem (crime MATERIAL). TENTATIVA: possível. MAJORANTES (§§1º-3º): mesmos do roubo (arma, concurso pessoas, etc.). EXTORSÃO MEDIANTE SEQUESTRO (art. 159): crime autônomo, pena reclusão 8-15 anos. B correta. A, C, D, E incorretas.",
      banca: "VUNESP",
      ano: 2023,
      cargo: "Investigador de Polícia"
    },
    {
      id: "leg-penal-patrim-04",
      enunciado: "Sobre o crime de estelionato (CP, art. 171), assinale a alternativa correta:",
      alternativas: {
        A: "Estelionato não é crime patrimonial.",
        B: "Obter vantagem ilícita em prejuízo alheio, induzindo ou mantendo alguém em erro mediante fraude. Pena: reclusão 1-5 anos e multa. Crime material.",
        C: "Estelionato é crime formal.",
        D: "Erro da vítima não é elemento do estelionato.",
        E: "Estelionato não tem formas equiparadas."
      },
      gabarito: "B",
      explicacao: "CP, art. 171: ESTELIONATO - obter, para si ou outrem, VANTAGEM ILÍCITA, em PREJUÍZO ALHEIO, induzindo ou mantendo alguém em ERRO, mediante ARTIFÍCIO, ARDIL ou meio FRAUDULENTO. PENA: reclusão 1-5 anos + multa. ELEMENTARES: I) vantagem ilícita (econômica); II) prejuízo alheio (patrimonial); III) ERRO da vítima (engano); IV) FRAUDE (artifício, ardil - meio enganoso); V) nexo causal. TIPO SUBJETIVO: dolo + especial fim de agir (obter vantagem). CONSUMAÇÃO: quando obtém vantagem E causa prejuízo (crime MATERIAL). FORMAS EQUIPARADAS (§2º): I) dispor coisa alheia como própria; II) alienação/oneração fraudulenta; III) defraudação penhor; IV) fraude execução. B correta. A, C, D, E incorretas.",
      banca: "FGV",
      ano: 2023,
      cargo: "Investigador de Polícia"
    },
    {
      id: "leg-penal-patrim-05",
      enunciado: "Em relação ao crime de receptação (CP, art. 180), é INCORRETO afirmar:",
      alternativas: {
        A: "Receptação (art. 180): adquirir, receber, transportar, conduzir ou ocultar, em proveito próprio ou alheio, coisa que SABE SER produto de crime, ou INFLUIR para que terceiro, de boa-fé, a adquira, receba ou oculte.",
        B: "Pena: reclusão 1-4 anos + multa. Receptação DOLOSA (caput): agente SABE que coisa é produto de crime. Receptação CULPOSA (§3º): deveria saber (indícios, circunstâncias). Pena: detenção 1 mês - 1 ano ou multa.",
        C: "Receptação própria: adquirir, receber, transportar, conduzir, ocultar. Receptação imprópria (§1º): influir para terceiro boa-fé adquira/receba/oculte.",
        D: "Receptação exige que o agente tenha participado do crime anterior.",
        E: "Bem jurídico: patrimônio + administração da justiça (crime acessório). Qualificadora (§6º): receptação de veículo automotor (reclusão 3-8 anos)."
      },
      gabarito: "D",
      explicacao: "CP, art. 180: RECEPTAÇÃO - adquirir, receber, transportar, conduzir ou ocultar, em proveito próprio/alheio, coisa que SABE ser produto de crime, ou influir para terceiro boa-fé adquira/receba/oculte. PENA: reclusão 1-4 anos + multa. ESPÉCIES: I) RECEPTAÇÃO DOLOSA (caput): agente SABE que coisa é produto crime; II) RECEPTAÇÃO CULPOSA (§3º): deveria saber (indícios) - detenção 1 mês - 1 ano ou multa. RECEPTAÇÃO PRÓPRIA: adquirir, receber, transportar, conduzir, ocultar. IMPRÓPRIA (§1º): influir para terceiro. Agente NÃO pode ter PARTICIPADO do crime anterior (senão responde por crime antecedente). QUALIFICADORA (§6º): veículo (reclusão 3-8 anos). D INCORRETA - agente NÃO pode ter participado crime anterior. A, B, C, E corretas.",
      banca: "CESPE",
      ano: 2022,
      cargo: "Delegado de Polícia"
    },
    {
      id: "leg-penal-patrim-06",
      enunciado: "Sobre o furto qualificado (CP, art. 155, §§4º-5º), é correto afirmar:",
      alternativas: {
        A: "Furto qualificado não existe no Código Penal.",
        B: "Pena aumenta 1/3 se furto praticado durante repouso noturno. §4º: furto qualificado (reclusão 2-8 anos + multa) se: I) com destruição/rompimento obstáculo (furto com escalada/chave falsa); II) abuso confiança/mediante fraude/escalada/destreza; III) com emprego explosivo/artefato similar; IV) furto de veículo automotor.",
        C: "Furto noturno é furto qualificado.",
        D: "Furto de veículo tem pena de detenção.",
        E: "Furto qualificado tem mesma pena do furto simples."
      },
      gabarito: "B",
      explicacao: "CP, art. 155: FURTO - §1º: pena aumenta 1/3 se crime praticado durante REPOUSO NOTURNO (22h-6h - majorante, não qualificadora). §4º: FURTO QUALIFICADO - reclusão 2-8 anos + multa se: I) destruição/rompimento OBSTÁCULO à subtração coisa; II) abuso CONFIANÇA ou mediante FRAUDE, ESCALADA ou DESTREZA; III) emprego EXPLOSIVO ou artefato análogo que cause perigo comum; IV) furto de VEÍCULO automotor transportado para outro Estado/exterior (§5º). §4º-A: furto qualificado se furto de SEMOVENTE domesticável, produção pecuária (gado). Furto de ENERGIA elétrica ou sinal TV a cabo (furto impróprio - §3º). FURTO PRIVILEGIADO (§2º): coisa pequeno valor, primário - pena reduzida. B correta. A, C, D, E incorretas.",
      banca: "FCC",
      ano: 2024,
      cargo: "Delegado de Polícia"
    },
    {
      id: "leg-penal-patrim-07",
      enunciado: "Em relação ao crime de roubo circunstanciado (CP, art. 157, §2º), assinale a alternativa INCORRETA:",
      alternativas: {
        A: "Pena aumenta de 1/3 até metade se: I) violência/grave ameaça exercida com emprego arma (inciso I - 1/3 a 1/2); II) concurso de 2 ou mais pessoas (inciso II - 1/3 a 1/2).",
        B: "Pena aumenta de 2/3 se: I) vítima em serviço transporte valores e agente conhece circunstância (inciso III); II) subtração veículo automotor que venha ser transportado outro Estado/exterior (inciso IV); III) agente mantém vítima em seu poder restringindo liberdade (inciso V).",
        C: "§2º-A: pena aumenta 2/3 se violência/grave ameaça exercida com emprego arma de FOGO (antes era 1/2 do inciso I).",
        D: "Roubo com arma de fogo tem aumento de 1/3.",
        E: "Roubo majorado pelo emprego de arma de fogo tem causa de aumento especial (§2º-A: 2/3)."
      },
      gabarito: "D",
      explicacao: "CP, art. 157, §2º: ROUBO CIRCUNSTANCIADO (majorantes). Pena aumenta: I) 1/3 a 1/2: emprego ARMA (inciso I); concurso 2+ pessoas (II). II) 2/3: vítima transporte valores (III); veículo transportado outro Estado (IV); restrição liberdade vítima (V). §2º-A (Lei 13.654/18): emprego ARMA DE FOGO - aumenta 2/3 (revogou aumento metade do inciso I para arma fogo). §2º-B: roubo seguido LESÃO GRAVE ou MORTE, aplica §3º (qualificadora), não §2º. Súmula 443 STJ: concurso pessoas (aumento) compatível com participação menor importância (redução art. 29, §1º CP). Arma DESMUNICIADA: aumento (Súmula 174 STJ - revogada Súmula 582). Arma BRANCA: não aumenta. D INCORRETA - arma fogo aumenta 2/3 (§2º-A), não 1/3. A, B, C, E corretas.",
      banca: "CESPE",
      ano: 2024,
      cargo: "Delegado de Polícia"
    },
    {
      id: "leg-penal-patrim-08",
      enunciado: "Quanto ao crime de extorsão mediante sequestro (CP, art. 159), é correto afirmar:",
      alternativas: {
        A: "Extorsão mediante sequestro não é crime.",
        B: "Sequestrar pessoa com fim de obter vantagem, como condição ou preço do resgate. Pena: reclusão 8-15 anos. §§1º-3º: qualificadoras se resulta lesão grave (reclusão 16-24 anos) ou morte (reclusão 24-30 anos).",
        C: "Extorsão mediante sequestro tem pena de detenção.",
        D: "Se a vítima é liberada sem pagamento, o crime não se consuma.",
        E: "Extorsão mediante sequestro é crime formal que não admite tentativa."
      },
      gabarito: "B",
      explicacao: "CP, art. 159: EXTORSÃO MEDIANTE SEQUESTRO - sequestrar pessoa com fim obter, para si/outrem, qualquer VANTAGEM, como CONDIÇÃO ou PREÇO do RESGATE. PENA: reclusão 8-15 anos. §1º: se sequestro dura > 24 HORAS, ou vítima < 18 anos ou > 60 anos, ou se crime cometido por quadrilha/bando, pena reclusão 12-20 anos. §2º: se resulta LESÃO GRAVE, reclusão 16-24 anos. §3º: se resulta MORTE, reclusão 24-30 anos. §4º: se crime cometido em concurso, concorrente que denunciar facilitando libertação vítima tem pena reduzida 1/3 a 2/3 (delação premiada/colaboração). Crime FORMAL (consuma-se com sequestro + exigência resgate, independe pagamento). TENTATIVA: possível. Crime hediondo (Lei 8.072/90). B correta. A, C, D, E incorretas.",
      banca: "VUNESP",
      ano: 2024,
      cargo: "Investigador de Polícia"
    },
    {
      id: "leg-penal-patrim-09",
      enunciado: "Sobre o crime de dano (CP, art. 163), assinale a alternativa correta:",
      alternativas: {
        A: "Dano não é crime contra o patrimônio.",
        B: "Destruir, inutilizar ou deteriorar coisa alheia. Pena: detenção 1-6 meses ou multa. Ação penal condicionada à representação (salvo dano qualificado). Parágrafo único: dano qualificado (detenção 6 meses-3 anos + multa) se: I) violência/grave ameaça/explosivo; II) patrimônio público/social/cultural; III) emprego substância inflamável.",
        C: "Dano qualificado tem pena de reclusão.",
        D: "Ação penal do dano é sempre pública incondicionada.",
        E: "Dano ao patrimônio público é crime de menor potencial ofensivo."
      },
      gabarito: "B",
      explicacao: "CP, art. 163: DANO - destruir, inutilizar ou deteriorar coisa ALHEIA. PENA: detenção 1-6 meses ou multa. AÇÃO PENAL: pública CONDICIONADA à representação (crime de menor potencial ofensivo - caput). Parágrafo único: DANO QUALIFICADO - detenção 6 meses - 3 anos + multa (ação penal PÚBLICA INCONDICIONADA) se: I) com VIOLÊNCIA à pessoa ou GRAVE AMEAÇA ou EXPLOSIVO; II) patrimônio PÚBLICO, SOCIAL ou CULTURAL; III) emprego substância INFLAMÁVEL ou explosiva (se não há perigo comum - senão art. 250). CONSUMAÇÃO: destruição/inutilização/deterioração efetiva (crime MATERIAL). TENTATIVA: possível. Absorve vias de fato, mas não absorve lesão/ameaça. Princípio insignificância: possível (caso concreto). B correta. A, C, D, E incorretas.",
      banca: "FGV",
      ano: 2024,
      cargo: "Investigador de Polícia"
    },
    {
      id: "leg-penal-patrim-10",
      enunciado: "Em relação ao crime de apropriação indébita (CP, art. 168), é INCORRETO afirmar:",
      alternativas: {
        A: "Apropriação indébita: apropriar-se de coisa alheia móvel, de que tem posse ou detenção. Pena: reclusão 1-4 anos + multa.",
        B: "§1º: pena aumentada 1/3 se crime praticado contra idoso/pessoa deficiência/alguém sob curatela. Apropriação indébita previdenciária (art. 168-A): deixar repassar INSS contribuições recolhidas - reclusão 2-5 anos + multa.",
        C: "Diferença furto: apropriação indébita, agente tem POSSE LÍCITA da coisa (não subtrai); furto, agente SUBTRAI (não tinha posse).",
        D: "Apropriação indébita consuma-se com a subtração.",
        E: "Apropriação indébita é crime material (exige inversão do título da posse). Tentativa: controversa (maioria entende possível). Ação penal: pública incondicionada."
      },
      gabarito: "D",
      explicacao: "CP, art. 168: APROPRIAÇÃO INDÉBITA - apropriar-se coisa ALHEIA MÓVEL, de que tem POSSE ou DETENÇÃO. PENA: reclusão 1-4 anos + multa. §1º: aumenta 1/3 se contra idoso/deficiente. Art. 168-A: APROPRIAÇÃO INDÉBITA PREVIDENCIÁRIA - deixar repassar INSS contribuições recolhidas contribuintes - reclusão 2-5 anos + multa. DIFERENÇA FURTO: I) APROPRIAÇÃO: agente tem POSSE LÍCITA (recebeu legitimamente), depois inverte título (animus rem sibi habendi - torna sua); II) FURTO: agente SUBTRAI (não tinha posse). CONSUMAÇÃO: inversão título posse (momento difícil determinar - ato inequívoco). Crime INSTANTÂNEO. TENTATIVA: controversa. AÇÃO PENAL: pública incondicionada. D INCORRETA - consuma-se com INVERSÃO título posse, não subtração (não há subtração). A, B, C, E corretas.",
      banca: "FCC",
      ano: 2023,
      cargo: "Delegado de Polícia"
    },
    {
      id: "leg-penal-patrim-11",
      enunciado: "Quanto ao crime de estelionato e suas formas equiparadas (CP, art. 171, §§2º-3º), é correto afirmar:",
      alternativas: {
        A: "Estelionato não tem formas equiparadas.",
        B: "§2º: formas equiparadas (mesma pena art. 171 - reclusão 1-5 anos + multa): I) dispor de coisa alheia como própria; II) alienação/oneração fraudulenta de coisa própria gravada; III) defraudação penhor/anticrese; IV) fraude execução; V) fraude para recebimento indevido seguro/indenização; VI) fraude pagamento meio eletrônico.",
        C: "Fraude em seguro tem pena maior que estelionato.",
        D: "Estelionato equiparado é crime culposo.",
        E: "Formas equiparadas têm ação penal privada."
      },
      gabarito: "B",
      explicacao: "CP, art. 171, §2º: ESTELIONATO - formas EQUIPARADAS (mesma pena caput: reclusão 1-5 anos + multa): I) dispor coisa ALHEIA como PRÓPRIA (vender coisa que não lhe pertence); II) alienação/oneração FRAUDULENTA (vende/onera coisa própria GRAVADA - penhor, hipoteca); III) defraudação PENHOR/ANTICRESE (credor pignoratício/anticrético que aliena coisa empenhada sem consentimento dono); IV) fraude EXECUÇÃO (devedor que aliena/onera bens para frustrar execução); V) fraude para recebimento INDEVIDO valor seguro/indenização/pensão (simula sinistro); VI) fraude PAGAMENTO meio ELETRÔNICO (§2º-A - Lei 14.155/21). §3º: pena aumenta 1/3 se crime contra idoso/vulnerável. §5º: ação penal PÚBLICA INCONDICIONADA. Crime MATERIAL. B correta. A, C, D, E incorretas.",
      banca: "CESPE",
      ano: 2024,
      cargo: "Delegado de Polícia"
    },
    {
      id: "leg-penal-patrim-12",
      enunciado: "Sobre os crimes de duplicata simulada e outras fraudes (CP, art. 172), assinale a alternativa correta:",
      alternativas: {
        A: "Duplicata simulada não é crime.",
        B: "Emitir fatura, duplicata ou nota de venda que não corresponda mercadoria vendida, em quantidade ou qualidade, ou ao serviço prestado. Pena: detenção 2-4 anos + multa. Crime material que tutela a fé pública e o patrimônio.",
        C: "Duplicata simulada tem pena de reclusão.",
        D: "Crime se consuma com a emissão, independente de prejuízo.",
        E: "Duplicata simulada é crime culposo."
      },
      gabarito: "B",
      explicacao: "CP, art. 172: DUPLICATA SIMULADA - emitir FATURA, DUPLICATA ou NOTA DE VENDA que não corresponda mercadoria vendida, em quantidade/qualidade, ou ao serviço prestado. PENA: detenção 2-4 anos + multa. Parágrafo único: mesma pena se há falsificação/alteração escritura de título/documento representativo de contrato cambial com fim utilizá-los. BEM JURÍDICO: patrimônio + FÉ PÚBLICA (documentos mercantis). Crime MATERIAL (exige emissão efetiva do documento, mas não exige prejuízo patrimonial consumado - basta potencialidade lesiva). CONSUMAÇÃO: emissão documento. TENTATIVA: possível. AÇÃO PENAL: pública incondicionada. Diferença estelionato: duplicata simulada tutela FÉ PÚBLICA documentos mercantis especialmente. B correta. A, C, D (parcialmente), E incorretas.",
      banca: "VUNESP",
      ano: 2024,
      cargo: "Investigador de Polícia"
    },
    {
      id: "leg-penal-patrim-13",
      enunciado: "Em relação ao crime de abuso de incapazes (CP, art. 173), é INCORRETO afirmar:",
      alternativas: {
        A: "Abuso de incapazes: abusar, em proveito próprio ou alheio, de necessidade, paixão ou inexperiência de menor, ou da alienação/debilidade mental de outrem, induzindo qualquer deles à prática de ato suscetível produzir efeito jurídico, em prejuízo próprio/terceiro.",
        B: "Pena: reclusão 2-6 anos + multa. Crime de forma livre (pode ser praticado por qualquer meio). Exige dolo + especial fim de agir (obter proveito).",
        C: "Sujeito passivo: menor, alienado mental, pessoa com debilidade mental. Crime material (exige prejuízo efetivo).",
        D: "Abuso de incapazes tem pena de detenção.",
        E: "Diferença estelionato: no abuso incapazes, vítima é VULNERÁVEL (menor/alienado/débil mental) e não há FRAUDE, mas sim abuso da condição."
      },
      gabarito: "D",
      explicacao: "CP, art. 173: ABUSO DE INCAPAZES - abusar, em proveito próprio/alheio, de necessidade, paixão ou inexperiência MENOR, ou alienação/debilidade MENTAL outrem, induzindo qualquer deles à prática ato suscetível produzir efeito jurídico, em PREJUÍZO próprio/terceiro. PENA: reclusão 2-6 anos + multa. ELEMENTOS: I) vítima vulnerável (menor ou alienado/débil mental); II) abuso condição (não é fraude - vítima vulnerável consente, mas sem pleno discernimento); III) ato com efeito jurídico (contrato, doação, negócio); IV) prejuízo. Crime MATERIAL (exige prejuízo). TIPO SUBJETIVO: dolo + especial fim (proveito). CONSUMAÇÃO: prejuízo. DIFERENÇA ESTELIONATO: estelionato usa FRAUDE (vítima capaz); abuso incapazes usa VULNERABILIDADE. D INCORRETA - pena é RECLUSÃO, não detenção. A, B, C, E corretas.",
      banca: "FGV",
      ano: 2023,
      cargo: "Delegado de Polícia"
    },
    {
      id: "leg-penal-patrim-14",
      enunciado: "Quanto ao crime de fraude no comércio (CP, art. 175), é correto afirmar:",
      alternativas: {
        A: "Fraude no comércio não é tipificada no Código Penal.",
        B: "Enganar no exercício atividade comercial, o adquirente ou consumidor: I) vendendo como verdadeira mercadoria falsificada/adulterada; II) entregando uma mercadoria por outra. Pena: detenção 6 meses-2 anos ou multa. Crime próprio (comerciante/industrial).",
        C: "Fraude no comércio tem pena de reclusão.",
        D: "Qualquer pessoa pode cometer fraude no comércio.",
        E: "Fraude no comércio é crime contra a Administração Pública."
      },
      gabarito: "B",
      explicacao: "CP, art. 175: FRAUDE NO COMÉRCIO - enganar, no exercício atividade COMERCIAL, o adquirente ou consumidor: I) vendendo como VERDADEIRA mercadoria FALSIFICADA ou ADULTERADA; II) entregando uma MERCADORIA por OUTRA. PENA: detenção 6 meses - 2 anos ou multa. Crime PRÓPRIO (só comerciante/industrial/fabricante - quem exerce atividade comercial). §1º-A: aumenta 1/3 se crime contra idoso/vulnerável. BEM JURÍDICO: patrimônio + fé pública + relações consumo. Crime MATERIAL (exige efetiva venda/entrega). CONSUMAÇÃO: entrega mercadoria. TENTATIVA: possível. CDC (Lei 8.078/90): tipos penais específicos consumeristas podem ser aplicados (especialidade). B correta. A, C, D, E incorretas.",
      banca: "FCC",
      ano: 2024,
      cargo: "Investigador de Polícia"
    },
    {
      id: "leg-penal-patrim-15",
      enunciado: "Sobre o crime de alteração de limites (CP, art. 161), assinale a alternativa INCORRETA:",
      alternativas: {
        A: "Alteração de limites (esbulho possessório): suprimir ou deslocar tapume, marco ou qualquer sinal indicativo de linha divisória, para apropriar-se, no todo ou em parte, de coisa imóvel alheia.",
        B: "Pena: detenção 1-6 meses + multa. §1º: mesma pena se arranca/danifica marcos divisórios para confundir limites prédios contíguos. Usurpação de águas (art. 161, §1º, II): desvio/represamento águas alheias.",
        C: "Crime de esbulho possessório (art. 161, §1º, III): invasão, mediante violência/grave ameaça/concurso 2+ pessoas, terreno/edifício alheio, para ocupação - detenção 6 meses-3 anos + multa.",
        D: "Alteração de limites tem pena de reclusão de 4-10 anos.",
        E: "Bem jurídico: patrimônio (propriedade imóvel e posse). Ação penal: pública incondicionada. Crimes subsidiários (absorvidos se houver crime mais grave)."
      },
      gabarito: "D",
      explicacao: "CP, art. 161: ALTERAÇÃO DE LIMITES (esbulho possessório) - suprimir ou deslocar tapume, marco ou sinal indicativo linha divisória, para apropriar-se, total/parcial, de coisa IMÓVEL alheia. PENA: detenção 1-6 meses + multa. §1º: mesma pena se: I) arranca/danifica marcos para confundir limites prédios; II) USURPAÇÃO ÁGUAS (desvio/represamento águas alheias em proveito próprio/alheio). §1º, II (renumerado): ESBULHO POSSESSÓRIO - invasão, mediante violência/grave ameaça/concurso 2+ pessoas, terreno/edifício alheio para efeitos POSSESSÓRIOS - detenção 6 meses - 3 anos + multa. BEM JURÍDICO: patrimônio (propriedade/posse imobiliária). Crimes SUBSIDIÁRIOS (absorvidos por mais graves). AÇÃO PENAL: pública incondicionada. D INCORRETA - pena é DETENÇÃO 1-6 meses (ou 6 meses-3 anos §1º, II), NÃO reclusão 4-10 anos. A, B, C, E corretas.",
      banca: "CESPE",
      ano: 2023,
      cargo: "Delegado de Polícia"
    }
  ],

  // TEMA 4: Crimes contra a Administração (5 questões)
  "crimes-contra-administracao": [
    {
      id: "leg-penal-adm-01",
      enunciado: "Sobre o crime de peculato (CP, art. 312), é correto afirmar:",
      alternativas: {
        A: "Peculato não é crime contra a Administração.",
        B: "Funcionário público se apropria ou desvia bem de que tem posse em razão do cargo. Pena: reclusão 2-12 anos e multa. Crime próprio. Admite forma culposa.",
        C: "Peculato é crime comum (qualquer pessoa pode cometer).",
        D: "Peculato culposo tem pena de reclusão.",
        E: "Reparação do dano extingue punibilidade em qualquer peculato."
      },
      gabarito: "B",
      explicacao: "CP, art. 312: PECULATO - funcionário público se APROPRIA (peculato-apropriação) ou DESVIA (peculato-desvio), em proveito próprio/alheio, de dinheiro, valor ou bem móvel, público ou particular, de que tem POSSE em razão do cargo. PENA: reclusão 2-12 anos + multa. SUJEITO ATIVO: funcionário público (crime PRÓPRIO). PECULATO CULPOSO (§2º): funcionário concorre CULPOSAMENTE para apropriação/desvio por outrem - detenção 3 meses - 1 ano. REPARAÇÃO DANO (§3º): até sentença 1ª instância, extingue punibilidade (só PECULATO CULPOSO). PECULATO MEDIANTE ERRO (§1º): apropria-se bem vindo à posse por ERRO outrem. B correta. A, C, D, E incorretas.",
      banca: "CESPE",
      ano: 2023,
      cargo: "Delegado de Polícia"
    },
    {
      id: "leg-penal-adm-02",
      enunciado: "Em relação ao crime de concussão (CP, art. 316), assinale a alternativa INCORRETA:",
      alternativas: {
        A: "Concussão (art. 316): funcionário público EXIGIR, para si ou outrem, direta ou indiretamente, ainda que fora da função ou antes de assumi-la, mas em razão dela, VANTAGEM INDEVIDA.",
        B: "Pena: reclusão 2-12 anos + multa. Diferença corrupção passiva: na concussão, funcionário EXIGE (impõe, constrange); na corrupção passiva, funcionário SOLICITA ou RECEBE (não há constrangimento).",
        C: "Concussão consuma-se com a entrega da vantagem.",
        D: "Sujeito ativo: funcionário público (crime próprio). Bem jurídico: moralidade administrativa, probidade.",
        E: "Tipo subjetivo: dolo + especial fim (obter vantagem indevida para si ou outrem). Crime FORMAL (consuma-se com exigência, independe entrega)."
      },
      gabarito: "C",
      explicacao: "CP, art. 316: CONCUSSÃO - funcionário público EXIGIR, para si ou outrem, direta ou indiretamente, ainda que fora função ou antes assumi-la, mas em razão dela, VANTAGEM INDEVIDA. PENA: reclusão 2-12 anos + multa. DIFERENÇA CORRUPÇÃO PASSIVA (art. 317): I) CONCUSSÃO: funcionário EXIGE (impõe, constrange - grave ameaça implícita); II) CORRUPÇÃO PASSIVA: funcionário SOLICITA (pede) ou RECEBE (aceita) - não há constrangimento. CONSUMAÇÃO: com EXIGÊNCIA (crime FORMAL - não exige entrega vantagem). SUJEITO ATIVO: funcionário público (crime PRÓPRIO). BEM JURÍDICO: moralidade administrativa. TIPO SUBJETIVO: dolo + especial fim (obter vantagem). C INCORRETA - consuma-se com EXIGÊNCIA, NÃO com entrega. A, B, D, E corretas.",
      banca: "FCC",
      ano: 2023,
      cargo: "Delegado de Polícia"
    },
    {
      id: "leg-penal-adm-03",
      enunciado: "Quanto ao crime de corrupção passiva (CP, art. 317), é correto afirmar:",
      alternativas: {
        A: "Corrupção passiva não é crime.",
        B: "Funcionário público solicitar ou receber vantagem indevida em razão da função. Pena: reclusão 2-12 anos e multa. Crime formal. Admite causas de aumento de pena.",
        C: "Corrupção passiva exige entrega da vantagem.",
        D: "Corrupção passiva é crime comum.",
        E: "Pena de corrupção passiva não tem causa de aumento."
      },
      gabarito: "B",
      explicacao: "CP, art. 317: CORRUPÇÃO PASSIVA - funcionário público SOLICITAR ou RECEBER, para si/outrem, direta ou indiretamente, ainda que fora função ou antes assumi-la, mas em razão dela, VANTAGEM INDEVIDA, ou ACEITAR PROMESSA tal vantagem. PENA: reclusão 2-12 anos + multa. §1º: pena aumentada 1/3 se, em razão vantagem/promessa, funcionário retarda/omite ato ofício ou pratica infringindo dever. §2º: aumenta METADE se ato praticado/omitido infringe dever decorrente cargo. Crime FORMAL (consuma-se com solicitação/recebimento/aceitação promessa - não exige entrega). CORRUPÇÃO ATIVA (art. 333): particular oferece/promete. Crime BILATERAL. B correta. A, C, D, E incorretas.",
      banca: "VUNESP",
      ano: 2023,
      cargo: "Investigador de Polícia"
    },
    {
      id: "leg-penal-adm-04",
      enunciado: "Sobre o crime de prevaricação (CP, art. 319), assinale a alternativa correta:",
      alternativas: {
        A: "Prevaricação não existe no Código Penal.",
        B: "Funcionário retardar ou deixar de praticar ato de ofício indevidamente para satisfazer interesse ou sentimento pessoal. Pena: detenção 3 meses-1 ano e multa. Crime formal.",
        C: "Prevaricação exige vantagem econômica.",
        D: "Prevaricação tem pena de reclusão.",
        E: "Prevaricação é crime material."
      },
      gabarito: "B",
      explicacao: "CP, art. 319: PREVARICAÇÃO - funcionário público retardar ou deixar praticar, INDEVIDAMENTE, ato de ofício, ou praticá-lo CONTRA disposição expressa lei, para SATISFAZER INTERESSE ou SENTIMENTO PESSOAL. PENA: detenção 3 meses - 1 ano + multa. ELEMENTARES: I) funcionário público (crime PRÓPRIO); II) retardar/omitir/praticar contra lei ato ofício; III) INDEVIDAMENTE; IV) INTERESSE ou SENTIMENTO PESSOAL (elemento subjetivo específico - amizade, ódio, vingança, amor). DIFERENÇA CORRUPÇÃO: prevaricação NÃO há vantagem INDEVIDA (econômica), só interesse/sentimento pessoal. Crime FORMAL (consuma-se com conduta). B correta. A, C, D, E incorretas.",
      banca: "FGV",
      ano: 2023,
      cargo: "Delegado de Polícia"
    },
    {
      id: "leg-penal-adm-05",
      enunciado: "Em relação ao crime de resistência (CP, art. 329), é INCORRETO afirmar:",
      alternativas: {
        A: "Resistência (art. 329): opor-se à execução de ato legal, mediante VIOLÊNCIA ou AMEAÇA a funcionário competente para executá-lo ou a quem lhe esteja prestando auxílio.",
        B: "Pena: detenção 2 meses - 2 anos. §1º: pena aplicada em dobro se ato legalmente executado é destinado a PRISÃO. §2º: penas cumulam-se com as correspondentes a VIOLÊNCIA (concurso material obrigatório).",
        C: "Requisitos: I) ato deve ser LEGAL; II) funcionário COMPETENTE; III) ato em EXECUÇÃO (não basta anúncio); IV) violência/ameaça contra funcionário/auxiliar.",
        D: "Resistência pode ocorrer antes do início da execução do ato.",
        E: "Diferença desobediência (art. 330): resistência tem violência/ameaça; desobediência não tem. Crime FORMAL (não exige que funcionário desista do ato)."
      },
      gabarito: "D",
      explicacao: "CP, art. 329: RESISTÊNCIA - opor-se à EXECUÇÃO de ato LEGAL, mediante VIOLÊNCIA ou AMEAÇA a funcionário competente para executá-lo ou quem lhe preste auxílio. PENA: detenção 2 meses - 2 anos. §1º: pena DOBRO se ato é destinado a PRISÃO. §2º: penas CUMULAM-SE com violência (concurso MATERIAL obrigatório - não absorve lesão/ameaça). REQUISITOS: I) ato deve ser LEGAL; II) funcionário COMPETENTE; III) ato em EXECUÇÃO (não basta anúncio futuro); IV) violência/ameaça. DIFERENÇA DESOBEDIÊNCIA (art. 330): resistência tem VIOLÊNCIA/AMEAÇA; desobediência NÃO tem. Crime FORMAL. D INCORRETA - ato deve estar em EXECUÇÃO, não antes. A, B, C, E corretas.",
      banca: "CESPE",
      ano: 2022,
      cargo: "Investigador de Polícia"
    }
  ],

  // TEMA 5: Lei de Drogas (Lei 11.343/2006) (5 questões)
  "lei-drogas": [
    {
      id: "leg-penal-drogas-01",
      enunciado: "Sobre o crime de tráfico de drogas (Lei 11.343/2006, art. 33, caput), é correto afirmar:",
      alternativas: {
        A: "Tráfico de drogas não é crime hediondo.",
        B: "Tráfico de drogas (art. 33, caput, Lei 11.343/06): importar, exportar, remeter, preparar, produzir, fabricar, adquirir, vender, expor à venda, oferecer, ter em depósito, transportar, trazer consigo, guardar, prescrever, ministrar, entregar a consumo ou fornecer drogas, AINDA QUE GRATUITAMENTE, sem autorização ou em desacordo com determinação legal/regulamentar. Pena: reclusão 5-15 anos + 500-1.500 dias-multa. Crime HEDIONDO (Lei 8.072/90, art. 2º). Regime inicial: FECHADO. Não cabe: fiança, anistia, graça, indulto, liberdade provisória (art. 44, Lei 11.343). Tráfico privilegiado (§4º): primário, bons antecedentes, não integrar organização, não dedicar atividades criminosas - pena reduzida 1/6 a 2/3.",
        C: "Tráfico privilegiado permite regime inicial semiaberto.",
        D: "Liberdade provisória é cabível no tráfico.",
        E: "Tráfico exige finalidade lucrativa."
      },
      gabarito: "B",
      explicacao: "Lei 11.343/2006, art. 33: TRÁFICO DE DROGAS - importar, exportar, remeter, preparar, produzir, fabricar, adquirir, vender, expor à venda, oferecer, ter em depósito, transportar, trazer consigo, guardar, prescrever, ministrar, entregar consumo ou fornecer drogas, AINDA QUE GRATUITAMENTE, sem autorização ou desacordo determinação legal/regulamentar. PENA: reclusão 5-15 anos + 500-1.500 dias-multa. Crime HEDIONDO (Lei 8.072/90). REGIME INICIAL: FECHADO. NÃO CABE: fiança, anistia, graça, indulto, liberdade provisória (art. 44). TRÁFICO PRIVILEGIADO (§4º): primário, bons antecedentes, não integrar organização, não dedicar atividades criminosas - pena 1/6 a 2/3 reduzida. STF: regime inicial pode ser SEMIABERTO (tráfico privilegiado). B correta. A, C, D, E incorretas.",
      banca: "CESPE",
      ano: 2023,
      cargo: "Investigador de Polícia"
    },
    {
      id: "leg-penal-drogas-02",
      enunciado: "Em relação ao crime de porte de drogas para consumo pessoal (Lei 11.343/2006, art. 28), assinale a alternativa INCORRETA:",
      alternativas: {
        A: "Porte para consumo pessoal (art. 28): adquirir, guardar, ter em depósito, transportar ou trazer consigo, para CONSUMO PESSOAL, drogas sem autorização ou desacordo com determinação legal/regulamentar.",
        B: "Penas (não há pena privativa de liberdade): I) advertência sobre efeitos das drogas; II) prestação serviços à comunidade; III) medida educativa de comparecimento a programa ou curso educativo.",
        C: "Crime de MENOR potencial ofensivo (Lei 9.099/95). Não cabe prisão em flagrante (art. 48, §2º - deve comparecer imediatamente ao juízo competente ou assumir compromisso comparecer).",
        D: "Porte de drogas para consumo pessoal admite prisão em flagrante.",
        E: "Distinção tráfico x uso: art. 28, §2º: natureza/quantidade droga, local/condições apreensão, circunstâncias sociais/pessoais, conduta/antecedentes do agente."
      },
      gabarito: "D",
      explicacao: "Lei 11.343/2006, art. 28: PORTE DE DROGAS PARA CONSUMO PESSOAL - adquirir, guardar, ter em depósito, transportar ou trazer consigo, para CONSUMO PESSOAL, drogas sem autorização ou desacordo determinação legal/regulamentar. PENAS (NÃO há pena PRIVATIVA DE LIBERDADE): I) advertência efeitos drogas; II) prestação serviços comunidade; III) medida educativa comparecimento programa/curso educativo. Crime de MENOR POTENCIAL ofensivo (Lei 9.099/95). Art. 48, §2º: NÃO CABE PRISÃO EM FLAGRANTE (autor deve comparecer imediatamente juízo ou assumir compromisso comparecer). DISTINÇÃO tráfico x uso (§2º): natureza/quantidade, local/condições, circunstâncias sociais/pessoais, conduta/antecedentes. D INCORRETA - NÃO cabe prisão flagrante. A, B, C, E corretas.",
      banca: "FCC",
      ano: 2023,
      cargo: "Investigador de Polícia"
    },
    {
      id: "leg-penal-drogas-03",
      enunciado: "Quanto às causas de aumento de pena no tráfico (Lei 11.343/2006, art. 40), é correto afirmar:",
      alternativas: {
        A: "Não existem causas de aumento no tráfico.",
        B: "Causas de aumento de pena (art. 40 - pena aumentada 1/6 a 2/3): I) transnacionalidade (I - droga transportada/armazenada com intuito transpor fronteira); II) menores, adolescentes ou pessoa vulnerável (VI - participação/indução/facilitação); III) estabelecimento ensino (III - proximidade, facilitação); IV) transporte público (IV); V) violência, grave ameaça, arma (II); VI) estabelecimentos prisionais (V); VII) aproveitamento situações vulnerabilidade (VII - doença, deficiência). Pluralidade causas: não incide mais de uma (STF - exasperação única pela mais grave).",
        C: "Causas de aumento podem ser cumuladas.",
        D: "Transnacionalidade não é causa de aumento.",
        E: "Envolvimento de menores não aumenta pena."
      },
      gabarito: "B",
      explicacao: "Lei 11.343/2006, art. 40: CAUSAS DE AUMENTO DE PENA NO TRÁFICO (pena aumentada 1/6 a 2/3): I) TRANSNACIONALIDADE (I - droga transportada/armazenada intuito transpor fronteira); II) MENORES, adolescentes ou vulneráveis (VI - participação/indução); III) estabelecimento ENSINO (III - proximidade); IV) TRANSPORTE PÚBLICO (IV); V) VIOLÊNCIA, grave ameaça, ARMA (II); VI) estabelecimentos PRISIONAIS (V); VII) aproveitamento VULNERABILIDADE (VII - doença, deficiência, tratamento). STF: pluralidade causas: incide APENAS UMA (mais grave) - não cumulam. Fundamentação concreta obrigatória. B correta. A, C, D, E incorretas.",
      banca: "VUNESP",
      ano: 2023,
      cargo: "Investigador de Polícia"
    },
    {
      id: "leg-penal-drogas-04",
      enunciado: "Sobre o delator colaborador na Lei de Drogas (art. 41), assinale a alternativa correta:",
      alternativas: {
        A: "Lei de Drogas não prevê colaboração premiada.",
        B: "Colaboração premiada (art. 41, Lei 11.343): indiciado ou acusado que COLABORAR VOLUNTARIAMENTE com investigação policial e processo criminal na identificação demais coautores/partícipes do crime e na recuperação total/parcial do produto do crime, pode ter PENA REDUZIDA de 1/3 a 2/3. Requisitos: I) colaboração VOLUNTÁRIA; II) colaboração EFETIVA (identificação coautores/recuperação produto); III) resultado útil. Benefícios: redução pena (1/3 a 2/3), perdão judicial (se resultados extraordinários), substituição regime. Acordo: entre MP e colaborador, homologado pelo juiz. Sigilo das negociações (art. 7º, Lei 12.850/13).",
        C: "Redução de pena é de 1/6 a 1/3.",
        D: "Colaboração não precisa ser voluntária.",
        E: "Perdão judicial não é possível na Lei de Drogas."
      },
      gabarito: "B",
      explicacao: "Lei 11.343/2006, art. 41: COLABORAÇÃO PREMIADA (delação premiada) - indiciado ou acusado que COLABORAR VOLUNTARIAMENTE com investigação policial e processo criminal na IDENTIFICAÇÃO demais coautores/partícipes do crime e na RECUPERAÇÃO total/parcial produto do crime, pode ter PENA REDUZIDA de 1/3 a 2/3. REQUISITOS: I) colaboração VOLUNTÁRIA (espontânea); II) colaboração EFETIVA (identificação coautores/recuperação produto); III) resultado ÚTIL. BENEFÍCIOS: I) redução pena (1/3 a 2/3); II) perdão judicial (resultados extraordinários); III) substituição regime. ACORDO: MP e colaborador, homologado juiz. Aplica-se Lei 12.850/13 (organização criminosa) subsidiariamente. B correta. A, C, D, E incorretas.",
      banca: "FGV",
      ano: 2023,
      cargo: "Delegado de Polícia"
    },
    {
      id: "leg-penal-drogas-05",
      enunciado: "Em relação ao procedimento penal na Lei de Drogas (arts. 48-59), é INCORRETO afirmar:",
      alternativas: {
        A: "Prisão em flagrante: art. 48, §1º - preso deve ser apresentado ao juiz em até 24 horas.",
        B: "Liberdade provisória: art. 44 - vedada aos crimes dos arts. 33, caput e §1º (tráfico) e 34 a 37 (tráfico equiparados).",
        C: "Oitiva do acusado: art. 57 - na audiência de instrução, procede-se oitiva testemunhas arroladas pela acusação e pela defesa, nessa ordem, interrogatório acusado e diligências requeridas.",
        D: "Lei de Drogas permite liberdade provisória em todos os casos.",
        E: "Sentença: art. 56 - sentença de procedência DESCLASSIFICA (art. 28 - consumo pessoal), ABSOLVE ou CONDENA. Apelação (art. 59): 5 dias. Não recolhimento ao cárcere: recorre em liberdade (§2º)."
      },
      gabarito: "D",
      explicacao: "Lei 11.343/2006, arts. 48-59: PROCEDIMENTO PENAL. PRISÃO FLAGRANTE (art. 48, §1º): preso apresentado ao juiz em até 24h. LIBERDADE PROVISÓRIA (art. 44): VEDADA aos crimes arts. 33, caput e §1º (tráfico) e 34-37 (equiparados). Porte consumo pessoal (art. 28): não cabe prisão flagrante (§2º). OITIVA ACUSADO (art. 57): audiência instrução - testemunhas acusação, testemunhas defesa, interrogatório acusado, diligências. SENTENÇA (art. 56): desclassifica (art. 28), absolve ou condena. APELAÇÃO (art. 59): prazo 5 dias. §2º: se não recolhido ao cárcere, recorre em LIBERDADE. D INCORRETA - liberdade provisória VEDADA no tráfico (art. 44). A, B, C, E corretas.",
      banca: "CESPE",
      ano: 2022,
      cargo: "Investigador de Polícia"
    }
  ],

  // TEMA 6: Crimes Hediondos (Lei 8.072/90) (5 questões)
  "crimes-hediondos": [
    {
      id: "leg-penal-hed-01",
      enunciado: "Sobre a Lei dos Crimes Hediondos (Lei 8.072/90), é correto afirmar:",
      alternativas: {
        A: "Crimes hediondos não têm previsão legal.",
        B: "Lei 8.072/90 - CRIMES HEDIONDOS. Art. 1º: crimes hediondos (rol taxativo - art. 1º, I-VIII): I) homicídio qualificado/simples (atividade típica grupo extermínio); II) latrocínio; III) extorsão qualificada pela morte; IV) extorsão mediante sequestro qualificada; V) estupro; VI) estupro de vulnerável; VII) epidemia com morte; VIII) falsificação/corrupção/adulteração de produtos terapêuticos/medicinais. Parágrafo único: EQUIPARADOS a hediondos: tráfico de drogas (Lei 11.343), tortura (Lei 9.455), terrorismo (Lei 13.260). Regime inicial: PROGRESSÃO após 2/5 (primário) ou 3/5 (reincidente) da pena (art. 2º, §2º).",
        C: "Crimes hediondos têm rol exemplificativo.",
        D: "Tráfico de drogas não é equiparado a hediondo.",
        E: "Progressão de regime é vedada nos crimes hediondos."
      },
      gabarito: "B",
      explicacao: "Lei 8.072/90: CRIMES HEDIONDOS. Art. 1º: rol TAXATIVO de crimes hediondos: I) homicídio QUALIFICADO (art. 121, §2º) ou SIMPLES em atividade grupo extermínio; II) LATROCÍNIO (art. 157, §3º, 2ª parte); III) extorsão QUALIFICADA pela morte (art. 158, §2º); IV) extorsão mediante sequestro QUALIFICADA (art. 159, §§1º-3º); V) ESTUPRO (art. 213); VI) estupro VULNERÁVEL (art. 217-A); VII) epidemia com MORTE (art. 267, §1º); VIII) falsificação/corrupção produtos terapêuticos (art. 273, caput e §§1º, 1º-A, 1º-B). EQUIPARADOS (parágrafo único): tráfico drogas, tortura, terrorismo. PROGRESSÃO: 2/5 (primário) / 3/5 (reincidente) da pena (art. 2º, §2º). B correta. A, C, D, E incorretas.",
      banca: "CESPE",
      ano: 2023,
      cargo: "Delegado de Polícia"
    },
    {
      id: "leg-penal-hed-02",
      enunciado: "Em relação ao regime de cumprimento de pena nos crimes hediondos (Lei 8.072/90, art. 2º), assinale a alternativa INCORRETA:",
      alternativas: {
        A: "Regime inicial: obrigatoriamente FECHADO (art. 2º, §1º).",
        B: "Progressão de regime: após cumprimento 2/5 (primário) ou 3/5 (reincidente) da pena (§2º).",
        C: "Livramento condicional: após cumprimento MAIS de 2/3 da pena (art. 5º), se não reincidente específico em crime hediondo.",
        D: "Prisão temporária pode ser decretada nos crimes hediondos.",
        E: "Liberdade provisória é sempre cabível nos crimes hediondos."
      },
      gabarito: "E",
      explicacao: "Lei 8.072/90, art. 2º: REGIME DE CUMPRIMENTO NOS CRIMES HEDIONDOS. REGIME INICIAL: obrigatoriamente FECHADO (§1º). PROGRESSÃO (§2º): após cumprimento 2/5 da pena (PRIMÁRIO) ou 3/5 (REINCIDENTE em crime COMUM) + bom comportamento + exame criminológico favorável. Reincidente ESPECÍFICO (crime hediondo): progressão NÃO vedada (STF). LIVRAMENTO CONDICIONAL (art. 5º): após MAIS de 2/3 da pena, se não reincidente específico. PRISÃO TEMPORÁRIA: Lei 7.960/89, art. 2º, III - crimes hediondos admitem prisão temporária. LIBERDADE PROVISÓRIA: vedada nos crimes hediondos (art. 2º, II - Lei 8.072). E INCORRETA - liberdade provisória VEDADA. A, B, C, D corretas.",
      banca: "FCC",
      ano: 2023,
      cargo: "Investigador de Polícia"
    },
    {
      id: "leg-penal-hed-03",
      enunciado: "Quanto ao crime de latrocínio (roubo seguido de morte - CP, art. 157, §3º, 2ª parte), é correto afirmar:",
      alternativas: {
        A: "Latrocínio não é crime hediondo.",
        B: "Latrocínio (art. 157, §3º, in fine): roubo com RESULTADO MORTE. Pena: reclusão 20-30 anos + multa. Natureza: crime HEDIONDO (Lei 8.072/90). Competência: Juiz SINGULAR (não Júri - Súmula 603 STF - crime contra PATRIMÔNIO, não contra vida). Consumação: com MORTE (crime complexo). Se morte TENTADA: roubo qualificado (art. 157, §3º, 1ª parte - lesão grave). TENTATIVA de latrocínio: possível (subtração patrimônio + tentativa homicídio). Latrocínio: dolo patrimônio + dolo/culpa morte (dolo eventual/preterdolo). STF: dolo eventual admitido.",
        C: "Latrocínio é julgado pelo Tribunal do Júri.",
        D: "Latrocínio não admite tentativa.",
        E: "Morte culposa não configura latrocínio."
      },
      gabarito: "B",
      explicacao: "CP, art. 157, §3º, 2ª parte: LATROCÍNIO (roubo seguido de morte). PENA: reclusão 20-30 anos + multa. NATUREZA: crime HEDIONDO (Lei 8.072/90, art. 1º, II). COMPETÊNCIA: Juiz SINGULAR (NÃO Júri - Súmula 603 STF - crime contra PATRIMÔNIO com resultado morte, não crime contra vida). CONSUMAÇÃO: com MORTE da vítima (crime COMPLEXO - roubo + homicídio). Se morte TENTADA: roubo qualificado por lesão GRAVE (§3º, 1ª parte). TENTATIVA latrocínio: possível (subtração + tentativa homicídio). ELEMENTO SUBJETIVO: dolo quanto ao patrimônio + dolo (direto ou EVENTUAL) ou CULPA quanto à morte (STF admite dolo eventual). B correta. A, C, D, E incorretas.",
      banca: "VUNESP",
      ano: 2023,
      cargo: "Delegado de Polícia"
    },
    {
      id: "leg-penal-hed-04",
      enunciado: "Sobre o crime de estupro (CP, art. 213), assinale a alternativa correta:",
      alternativas: {
        A: "Estupro não é crime hediondo.",
        B: "Estupro (art. 213 - redação Lei 12.015/09): constranger alguém, mediante VIOLÊNCIA ou GRAVE AMEAÇA, a ter CONJUNÇÃO CARNAL ou praticar/permitir que com ele se pratique OUTRO ATO LIBIDINOSO. Pena: reclusão 6-10 anos. Crime HEDIONDO (Lei 8.072/90). Sujeito ativo: qualquer pessoa (homem ou mulher). Sujeito passivo: qualquer pessoa (homem ou mulher - crime COMUM). §1º: pena aumentada 1/4 se vítima 14-18 anos. §2º: pena aumentada METADE se resulta lesão GRAVE; 8-12 anos se resulta MORTE. Ação penal: pública CONDICIONADA à representação (regra - art. 225); INCONDICIONADA se vítima menor 18 anos ou vulnerável (STJ).",
        C: "Sujeito passivo do estupro é apenas mulher.",
        D: "Ação penal do estupro é sempre incondicionada.",
        E: "Estupro não admite resultado morte."
      },
      gabarito: "B",
      explicacao: "CP, art. 213 (Lei 12.015/09): ESTUPRO - constranger alguém, mediante VIOLÊNCIA ou GRAVE AMEAÇA, a ter CONJUNÇÃO CARNAL ou praticar/permitir pratique OUTRO ATO LIBIDINOSO. PENA: reclusão 6-10 anos. Crime HEDIONDO (Lei 8.072/90). SUJEITOS: ativo e passivo podem ser homem ou mulher (crime COMUM - antes era próprio/específico). §1º: pena aumentada 1/4 se vítima 14-18 anos. §2º: aumenta METADE se resulta lesão GRAVE; reclusão 8-12 anos se resulta MORTE. AÇÃO PENAL (art. 225): pública CONDICIONADA representação (regra); INCONDICIONADA se vítima menor 18 ou vulnerável (STJ). B correta. A, C, D, E incorretas.",
      banca: "FGV",
      ano: 2023,
      cargo: "Delegado de Polícia"
    },
    {
      id: "leg-penal-hed-05",
      enunciado: "Em relação ao crime de estupro de vulnerável (CP, art. 217-A), é INCORRETO afirmar:",
      alternativas: {
        A: "Estupro de vulnerável (art. 217-A - Lei 12.015/09): ter conjunção carnal ou praticar outro ato libidinoso com menor de 14 anos.",
        B: "Pena: reclusão 8-15 anos. Crime HEDIONDO (Lei 8.072/90). Vulnerável (§1º): I) menor 14 anos; II) enfermidade/deficiência mental sem discernimento; III) pessoa que não pode oferecer resistência.",
        C: "STJ: crime FORMAL (consuma-se com ato libidinoso, independe resultado). PRESUNÇÃO ABSOLUTA de violência se menor 14 anos (não admite prova contrário - Súmula 593 STJ).",
        D: "Estupro de vulnerável admite consentimento do menor de 14 anos.",
        E: "§§3º-4º: penas aumentadas metade (lesão grave) ou 8-12 anos (morte). §5º: causas aumento (art. 226): I) pena aumentada 1/2 se ascendente, padrasto, tio, irmão; II) metade se prevalece relações domésticas, coabitação, hospitalidade, autoridade; III) 1/4 se concurso 2+ pessoas."
      },
      gabarito: "D",
      explicacao: "CP, art. 217-A (Lei 12.015/09): ESTUPRO DE VULNERÁVEL - ter conjunção carnal ou praticar outro ato libidinoso com MENOR de 14 ANOS. PENA: reclusão 8-15 anos. Crime HEDIONDO (Lei 8.072/90). VULNERÁVEL (§1º): I) menor 14 anos; II) enfermidade/deficiência mental sem discernimento; III) pessoa que não pode oferecer resistência. STJ: crime FORMAL (consuma-se com ato, não exige resultado). PRESUNÇÃO ABSOLUTA violência se menor 14 anos (Súmula 593 STJ - NÃO admite prova contrário - consentimento IRRELEVANTE). §§3º-4º: aumentos (lesão grave/morte). §5º: causas aumento (art. 226). D INCORRETA - consentimento menor 14 é IRRELEVANTE (presunção absoluta). A, B, C, E corretas.",
      banca: "CESPE",
      ano: 2022,
      cargo: "Delegado de Polícia"
    }
  ],

  // TEMA 7: Organização Criminosa (Lei 12.850/2013) (5 questões)
  "organizacao-criminosa": [
    {
      id: "leg-penal-org-01",
      enunciado: "Sobre o conceito de organização criminosa (Lei 12.850/2013, art. 1º, §1º), é correto afirmar:",
      alternativas: {
        A: "Organização criminosa não tem conceito legal.",
        B: "Organização criminosa (art. 1º, §1º, Lei 12.850/13): associação de 4 OU MAIS pessoas ESTRUTURALMENTE ORDENADA e CARACTERIZADA pela DIVISÃO DE TAREFAS, ainda que informalmente, com objetivo obter, direta ou indiretamente, VANTAGEM de qualquer natureza, mediante prática de INFRAÇÕES PENAIS cujas penas máximas sejam SUPERIORES a 4 ANOS, ou que sejam de CARÁTER TRANSNACIONAL. Elementos: I) 4+ pessoas; II) estrutura ordenada; III) divisão tarefas; IV) objetivo: vantagem; V) infrações pena > 4 anos ou transnacionais. Diferença quadrilha/bando (art. 288, CP - revogado - agora 'associação criminosa'): mínimo 3 pessoas, não exige estrutura ordenada.",
        C: "Organização criminosa exige apenas 2 pessoas.",
        D: "Infrações podem ter pena de até 2 anos.",
        E: "Estrutura ordenada não é elemento da organização."
      },
      gabarito: "B",
      explicacao: "Lei 12.850/2013, art. 1º, §1º: ORGANIZAÇÃO CRIMINOSA - associação de 4 OU MAIS pessoas ESTRUTURALMENTE ORDENADA e CARACTERIZADA pela DIVISÃO DE TAREFAS, ainda que informalmente, com objetivo obter, direta/indiretamente, VANTAGEM de qualquer natureza, mediante prática INFRAÇÕES PENAIS cujas penas máximas sejam SUPERIORES a 4 ANOS, ou que sejam de CARÁTER TRANSNACIONAL. ELEMENTOS: I) 4+ pessoas; II) estrutura ORDENADA; III) divisão TAREFAS; IV) objetivo: vantagem; V) infrações pena > 4 anos OU transnacionais. DIFERENÇA ASSOCIAÇÃO CRIMINOSA (art. 288, CP): 3+ pessoas, não exige estrutura ordenada. B correta. A, C, D, E incorretas.",
      banca: "CESPE",
      ano: 2023,
      cargo: "Delegado de Polícia"
    },
    {
      id: "leg-penal-org-02",
      enunciado: "Em relação ao crime de constituir organização criminosa (Lei 12.850/2013, art. 2º), assinale a alternativa INCORRETA:",
      alternativas: {
        A: "Promover, constituir, financiar ou integrar organização criminosa (art. 2º, caput): pena reclusão 3-8 anos + multa.",
        B: "Formas de participação: I) PROMOVER (criar, fundar); II) CONSTITUIR (organizar, estabelecer); III) FINANCIAR (custear, prover recursos); IV) INTEGRAR (fazer parte, participar).",
        C: "§§1º-2º: penas aumentadas até METADE se participação criança/adolescente.",
        D: "Crime de organização criminosa é crime permanente.",
        E: "§4º: pena AUMENTADA 1/6 a 2/3 se: I) arma de fogo; II) envolvimento criança/adolescente; III) concurso funcionário público; IV) produto/proveito oculta investido capital social; V) atividade terrorismo; VI) crimes hediondos/tortura."
      },
      gabarito: "D",
      explicacao: "Lei 12.850/2013, art. 2º: CRIME DE ORGANIZAÇÃO CRIMINOSA. CONDUTA: promover (criar), constituir (organizar), financiar (custear) ou integrar (participar) organização criminosa. PENA: reclusão 3-8 anos + multa. FORMAS PARTICIPAÇÃO: promover, constituir, financiar, integrar. §§1º-2º: penas aumentadas até METADE se participação criança/adolescente. §4º: CAUSAS AUMENTO (1/6 a 2/3): I) arma fogo; II) criança/adolescente; III) funcionário público; IV) lavagem capitais; V) terrorismo; VI) hediondos/tortura. Crime FORMAL (consuma-se com constituição/integração - não exige prática crimes fins). NÃO é permanente (é instantâneo de efeitos permanentes). D INCORRETA - crime não é PERMANENTE (é instantâneo). A, B, C, E corretas.",
      banca: "FCC",
      ano: 2023,
      cargo: "Delegado de Polícia"
    },
    {
      id: "leg-penal-org-03",
      enunciado: "Quanto à colaboração premiada na Lei de Organização Criminosa (art. 4º), é correto afirmar:",
      alternativas: {
        A: "Colaboração premiada não existe na Lei 12.850/13.",
        B: "Colaboração premiada (art. 4º): juiz pode, a requerimento das partes, conceder PERDÃO JUDICIAL, reduzir pena até 2/3 ou substituir pena por restritiva de direitos se colaborador: I) identificar coautores/partícipes e infrações penais por eles praticadas; II) revelar estrutura hierárquica e divisão tarefas organização; III) prevenir infrações decorrentes organização; IV) recuperar total/parcial produto/proveito infrações; V) localizar vítima com integridade preservada. Requisitos: colaboração VOLUNTÁRIA, EFETIVA, resultado ÚTIL. Acordo: celebrado entre MP/delegado (manifestação MP) e colaborador, homologado juiz (§§5º-6º).",
        C: "Colaboração premiada não pode gerar perdão judicial.",
        D: "Acordo é celebrado apenas entre juiz e colaborador.",
        E: "Redução de pena é de até 1/3."
      },
      gabarito: "B",
      explicacao: "Lei 12.850/2013, art. 4º: COLABORAÇÃO PREMIADA - juiz pode, a requerimento partes, conceder PERDÃO JUDICIAL, reduzir pena até 2/3 ou substituir por restritiva direitos se colaborador: I) identificar coautores/partícipes e infrações; II) revelar estrutura hierárquica e divisão tarefas; III) prevenir infrações decorrentes organização; IV) recuperar total/parcial produto/proveito; V) localizar vítima integridade preservada. REQUISITOS: colaboração VOLUNTÁRIA, EFETIVA, resultado ÚTIL. ACORDO (§§5º-6º): celebrado entre MP/delegado (com manifestação MP) e colaborador, HOMOLOGADO pelo juiz. BENEFÍCIOS: perdão judicial, redução até 2/3, substituição pena. B correta. A, C, D, E incorretas.",
      banca: "VUNESP",
      ano: 2023,
      cargo: "Investigador de Polícia"
    },
    {
      id: "leg-penal-org-04",
      enunciado: "Sobre a infiltração de agentes (Lei 12.850/2013, arts. 10-14), assinale a alternativa correta:",
      alternativas: {
        A: "Infiltração de agentes não é permitida.",
        B: "Infiltração de agentes (arts. 10-14): investigação com atuação policial não ostensiva (disfarçada) para obter prova, mediante infiltração de agentes policiais em tarefa investigação, representada por delegado ou requerida por MP, após oitiva MP. Autorização: juiz competente (circunstanciada). Prazo: até 6 meses, renovável (§3º). Infiltrado: agente policial (delegado/investigador escolhe - §1º), NÃO responde pelos crimes NECESSÁRIOS à investigação (art. 13 - excludente ilicitude). Relatório circunstanciado: ao término (§5º). Preservação identidade (art. 14). Princípio proporcionalidade: medida EXCEPCIONAL.",
        C: "Infiltração pode ser autorizada pela autoridade policial.",
        D: "Prazo da infiltração é de 12 meses.",
        E: "Agente infiltrado responde pelos crimes praticados."
      },
      gabarito: "B",
      explicacao: "Lei 12.850/2013, arts. 10-14: INFILTRAÇÃO DE AGENTES - investigação com atuação policial NÃO ostensiva (disfarçada) para obter prova, mediante infiltração agentes policiais em tarefa investigação, representada delegado ou requerida MP, após oitiva MP. AUTORIZAÇÃO: JUIZ competente (circunstanciada). PRAZO: até 6 MESES, renovável (§3º). INFILTRADO: agente POLICIAL (delegado/investigador escolhe), NÃO responde pelos crimes NECESSÁRIOS à investigação (art. 13 - excludente ilicitude - estrito cumprimento dever legal). RELATÓRIO circunstanciado ao término (§5º). PRESERVAÇÃO identidade (art. 14). Medida EXCEPCIONAL (proporcionalidade). B correta. A, C, D, E incorretas.",
      banca: "FGV",
      ano: 2023,
      cargo: "Delegado de Polícia"
    },
    {
      id: "leg-penal-org-05",
      enunciado: "Em relação aos meios de obtenção da prova na Lei 12.850/13 (arts. 3º-9º), é INCORRETO afirmar:",
      alternativas: {
        A: "Meios de obtenção prova (art. 3º): I) colaboração premiada; II) captação ambiental de sinais eletromagnéticos/ópticos/acústicos; III) ação controlada; IV) acesso a registros/dados cadastrais/documentos/informações; V) infiltração agentes; VI) cooperação entre instituições/órgãos federais/estaduais/municipais.",
        B: "Ação controlada (art. 8º): retardamento da intervenção policial/administrativa relativa à ação praticada por organização criminosa, desde que mantida sob observação/acompanhamento, para que ocorra em momento mais eficaz à formação provas/obtenção informações. Autorização: delegado/MP (circunstanciada).",
        C: "Captação ambiental (art. 9º): autorização judicial para captação de sinais (gravações). Requisitos: indícios organização, prévia autorização judicial.",
        D: "Ação controlada exige autorização judicial.",
        E: "Acesso a dados (art. 15): mediante ordem judicial, autoridade policial/MP podem requisitar dados cadastrais (qualificação pessoal, filiação, endereço) DIRETAMENTE de empresas prestadoras serviços (telefonia, informática, bancos). Dados cadastrais NÃO são protegidos por sigilo (STF)."
      },
      gabarito: "D",
      explicacao: "Lei 12.850/2013, arts. 3º-9º: MEIOS OBTENÇÃO PROVA. Art. 3º: colaboração premiada, captação ambiental, ação controlada, acesso dados, infiltração, cooperação. AÇÃO CONTROLADA (art. 8º): retardamento intervenção policial/administrativa para ação organização, mantida sob observação, momento mais eficaz à prova. AUTORIZAÇÃO: delegado/MP (circunstanciada) - NÃO exige autorização JUDICIAL. CAPTAÇÃO AMBIENTAL (art. 9º): autorização JUDICIAL para captação sinais. ACESSO DADOS (art. 15): ordem judicial, requisita DIRETAMENTE de empresas. Dados CADASTRAIS: não protegidos por sigilo (STF - RE 1.055.941). D INCORRETA - ação controlada NÃO exige autorização judicial (só delegado/MP). A, B, C, E corretas.",
      banca: "CESPE",
      ano: 2022,
      cargo: "Delegado de Polícia"
    }
  ],

  // TEMA 8: Violência Doméstica (Lei Maria da Penha - Lei 11.340/2006) (5 questões)
  "violencia-domestica": [
    {
      id: "leg-penal-vd-01",
      enunciado: "Sobre a Lei Maria da Penha (Lei 11.340/2006), é correto afirmar:",
      alternativas: {
        A: "Lei Maria da Penha não cria novos crimes.",
        B: "Lei 11.340/2006 (Lei MARIA DA PENHA): cria mecanismos para coibir VIOLÊNCIA DOMÉSTICA e FAMILIAR contra a MULHER. Art. 5º: violência doméstica/familiar contra mulher: qualquer ação/omissão baseada no GÊNERO que cause morte, lesão, sofrimento físico/sexual/psicológico/dano moral/patrimonial: I) no âmbito UNIDADE DOMÉSTICA; II) no âmbito FAMÍLIA; III) em qualquer RELAÇÃO ÍNTIMA DE AFETO (independe orientação sexual). Formas violência (art. 7º): I) FÍSICA; II) PSICOLÓGICA; III) SEXUAL; IV) PATRIMONIAL; V) MORAL. NÃO cria novos crimes, mas AGRAVA penas crimes existentes (ex: lesão corporal - art. 129, §§9º-13, CP).",
        C: "Lei Maria da Penha só protege mulheres casadas.",
        D: "Violência doméstica só ocorre no âmbito doméstico.",
        E: "Lei Maria da Penha cria novos tipos penais."
      },
      gabarito: "B",
      explicacao: "Lei 11.340/2006 (Lei MARIA DA PENHA): cria mecanismos coibir VIOLÊNCIA DOMÉSTICA e FAMILIAR contra MULHER. Art. 5º: violência doméstica/familiar contra mulher: qualquer ação/omissão baseada GÊNERO que cause morte, lesão, sofrimento físico/sexual/psicológico/dano moral/patrimonial: I) âmbito UNIDADE DOMÉSTICA (independe laços família/coabitação); II) âmbito FAMÍLIA (laços naturais/afinidade/vontade); III) qualquer RELAÇÃO ÍNTIMA AFETO (independe orientação sexual/coabitação). FORMAS VIOLÊNCIA (art. 7º): física, psicológica, sexual, patrimonial, moral. NÃO CRIA NOVOS CRIMES, mas AGRAVA penas existentes (ex: lesão corporal - art. 129, §§9º-13). B correta. A, C, D, E incorretas.",
      banca: "CESPE",
      ano: 2023,
      cargo: "Investigador de Polícia"
    },
    {
      id: "leg-penal-vd-02",
      enunciado: "Em relação às medidas protetivas de urgência (Lei 11.340/2006, arts. 18-24), assinale a alternativa INCORRETA:",
      alternativas: {
        A: "Medidas protetivas (arts. 18-24): determinações judiciais para PROTEÇÃO da vítima, podendo ser requeridas pela ofendida, MP, Defensoria, delegado.",
        B: "Medidas protetivas que obrigam o agressor (art. 22): I) suspensão posse/restrição porte armas; II) afastamento do lar; III) proibição aproximação; IV) proibição contato; V) restrição/suspensão visitas; VI) prestação alimentos provisionais.",
        C: "Medidas protetivas à ofendida (art. 23): I) encaminhamento à programa proteção; II) recondução ao domicílio (após afastamento agressor); III) afastamento agressor do lar.",
        D: "Medidas protetivas exigem audiência prévia do agressor.",
        E: "Prazo: juiz deve decidir em até 48 HORAS (art. 18, I). Fixação: independe audiência das partes (inaudita altera pars) e de manifestação MP. Descumprimento: CRIME (art. 24-A - detenção 3 meses - 2 anos)."
      },
      gabarito: "D",
      explicacao: "Lei 11.340/2006, arts. 18-24: MEDIDAS PROTETIVAS DE URGÊNCIA - determinações judiciais para PROTEÇÃO vítima, requeridas pela ofendida, MP, Defensoria, delegado. MEDIDAS QUE OBRIGAM AGRESSOR (art. 22): I) suspensão posse/restrição porte armas; II) afastamento lar; III) proibição aproximação; IV) proibição contato; V) restrição/suspensão visitas; VI) alimentos provisionais. MEDIDAS À OFENDIDA (art. 23): I) encaminhamento programa proteção; II) recondução domicílio; III) afastamento agressor. PRAZO: juiz decide em até 48 HORAS (art. 18, I). FIXAÇÃO: INDEPENDE audiência partes (inaudita altera pars) e manifestação MP. DESCUMPRIMENTO: crime (art. 24-A - detenção 3 meses - 2 anos). D INCORRETA - NÃO exige audiência prévia. A, B, C, E corretas.",
      banca: "FCC",
      ano: 2023,
      cargo: "Investigador de Polícia"
    },
    {
      id: "leg-penal-vd-03",
      enunciado: "Quanto ao atendimento pela autoridade policial (Lei 11.340/2006, arts. 10-12), é correto afirmar:",
      alternativas: {
        A: "Autoridade policial não tem atribuições específicas na Lei Maria da Penha.",
        B: "Atribuições da autoridade policial (art. 12): I) ouvir ofendida, lavrar B.O., tomar representação a termo; II) colher provas, ouvir agressor e testemunhas; III) determinar exame corpo delito/perícias; IV) ouvir equipe multidisciplinar; V) providenciar ofendida seja acompanhada até domicílio para retirar pertences; VI) informar ofendida sobre direitos (medidas protetivas, programas assistência, delegacia mulher); VII) fornecer transporte ofendida/dependentes para abrigo/local seguro; VIII) acompanhar ofendida para assegurar retirada pertences; IX) informar ao juiz/MP/Defensoria. Art. 11: autoridade policial deve GARANTIR proteção à vítima. Prisão em flagrante: possível (art. 20). Representação: registrada imediatamente.",
        C: "Autoridade policial não pode conceder medidas protetivas.",
        D: "Informações à vítima são facultativas.",
        E: "Prisão em flagrante não é cabível na Lei Maria da Penha."
      },
      gabarito: "B",
      explicacao: "Lei 11.340/2006, arts. 10-12: ATENDIMENTO PELA AUTORIDADE POLICIAL. Art. 12: atribuições autoridade policial: I) ouvir ofendida, lavrar B.O., tomar representação; II) colher provas, ouvir agressor/testemunhas; III) determinar exame corpo delito/perícias; IV) ouvir equipe multidisciplinar; V) providenciar acompanhamento ofendida até domicílio retirar pertences; VI) INFORMAR ofendida direitos (medidas protetivas, programas, delegacia mulher); VII) fornecer transporte ofendida/dependentes abrigo; VIII) acompanhar retirada pertences; IX) informar juiz/MP/Defensoria. Art. 11: garantir proteção. PRISÃO FLAGRANTE: possível (art. 20). MEDIDAS PROTETIVAS: delegado pode REQUERER ao juiz (não concede). B correta. A, C, D, E incorretas.",
      banca: "VUNESP",
      ano: 2023,
      cargo: "Investigador de Polícia"
    },
    {
      id: "leg-penal-vd-04",
      enunciado: "Sobre as qualificadoras da lesão corporal na Lei Maria da Penha (CP, art. 129, §§9º-13), assinale a alternativa correta:",
      alternativas: {
        A: "Lei Maria da Penha não altera o crime de lesão corporal.",
        B: "Lesão corporal em violência doméstica (art. 129, CP): §9º: lesão corporal praticada contra ascendente, descendente, irmão, cônjuge/companheiro, ou com quem conviva/tenha convivido, ou prevalecendo-se agente das relações domésticas, coabitação, hospitalidade: DETENÇÃO 3 meses - 3 anos. §10º: nos casos §9º, se lesão é de natureza GRAVE ou GRAVÍSSIMA: aumenta-se 1/3. §11º: na hipótese §9º, a ação penal é pública INCONDICIONADA (não depende representação). §13: lesão corporal CULPOSA em violência doméstica: pena aumentada 1/3 se ocorre circunstâncias §9º. STF (ADI 4.424): §9º é CONSTITUCIONAL.",
        C: "Lesão doméstica tem pena de reclusão.",
        D: "Ação penal é condicionada à representação.",
        E: "Lesão culposa não tem qualificadora doméstica."
      },
      gabarito: "B",
      explicacao: "CP, art. 129, §§9º-13 (Lei 11.340/2006): LESÃO CORPORAL EM VIOLÊNCIA DOMÉSTICA. §9º: lesão praticada contra ascendente, descendente, irmão, cônjuge/companheiro, ou com quem conviva/tenha convivido, ou prevalecendo relações domésticas, coabitação, hospitalidade: DETENÇÃO 3 meses - 3 anos. §10º: se lesão GRAVE ou GRAVÍSSIMA (circunstâncias §9º): aumenta-se 1/3. §11º: hipótese §9º, ação penal é pública INCONDICIONADA (não depende representação - STF). §13: lesão CULPOSA em contexto §9º: pena aumentada 1/3. STF (ADI 4.424/2012): §9º é CONSTITUCIONAL (proteção especial à mulher). B correta. A, C, D, E incorretas.",
      banca: "FGV",
      ano: 2023,
      cargo: "Investigador de Polícia"
    },
    {
      id: "leg-penal-vd-05",
      enunciado: "Em relação à competência e procedimento na Lei Maria da Penha (arts. 13-17 e 33), é INCORRETO afirmar:",
      alternativas: {
        A: "Competência: Juizados de Violência Doméstica e Familiar contra a Mulher (art. 14 - onde não houver, Varas Criminais).",
        B: "NÃO se aplica Lei 9.099/95 (Juizados Especiais Criminais - art. 41): vedada aplicação institutos despenalizadores (transação penal, composição civil, suspensão condicional processo - STJ).",
        C: "Renúncia representação (art. 16): somente perante JUIZ, em audiência especialmente designada, antes recebimento denúncia, ouvido MP.",
        D: "Lei 9.099/95 pode ser aplicada nos crimes da Lei Maria da Penha.",
        E: "Prisão preventiva (art. 20): cabível para garantir execução medidas protetivas. Decretação: ofício juiz, representação autoridade policial, requerimento MP. Art. 313, III, CPP: prisão preventiva em violência doméstica/descumprimento medidas protetivas."
      },
      gabarito: "D",
      explicacao: "Lei 11.340/2006, arts. 13-17 e 33: COMPETÊNCIA E PROCEDIMENTO. COMPETÊNCIA: Juizados VIOLÊNCIA DOMÉSTICA e FAMILIAR contra Mulher (art. 14 - onde não houver, Varas Criminais). Art. 41: NÃO SE APLICA Lei 9.099/95 (Juizados Especiais): VEDADA aplicação institutos despenalizadores (transação penal, composição civil, suspensão condicional processo - STJ). RENÚNCIA REPRESENTAÇÃO (art. 16): somente perante JUIZ, em audiência especialmente designada, ANTES recebimento denúncia, ouvido MP. PRISÃO PREVENTIVA (art. 20): cabível para garantir medidas protetivas. Decretação: ofício, representação delegado, requerimento MP. CPP, art. 313, III: preventiva em violência doméstica/descumprimento medidas. D INCORRETA - Lei 9.099/95 NÃO se aplica (art. 41). A, B, C, E corretas.",
      banca: "CESPE",
      ano: 2022,
      cargo: "Investigador de Polícia"
    }
  ],

  // TEMA 9: Crimes de Trânsito (CTB, arts. 302-312) (5 questões)
  "crimes-transito": [
    {
      id: "leg-penal-trans-01",
      enunciado: "Sobre o crime de homicídio culposo no trânsito (CTB, art. 302), é correto afirmar:",
      alternativas: {
        A: "Homicídio culposo no trânsito não é crime.",
        B: "Homicídio culposo no trânsito (art. 302, CTB - Lei 9.503/97): praticar homicídio CULPOSO na direção de veículo automotor. Pena: detenção 2-4 anos + suspensão/proibição direito dirigir. Parágrafo único: pena aumentada 1/3 a 1/2 se: I) não possuir PERMISSÃO ou HABILITAÇÃO; II) praticá-lo em FAIXA DE PEDESTRES; III) deixar prestar SOCORRO; IV) estar sob influência ÁLCOOL/substância psicoativa; V) participar RACHA/velocidade incompatível; VI) transportar CARGA EXCESSIVA/inadequada; VII) conduzir TRANSPORTE PASSAGEIROS. Ação penal: pública INCONDICIONADA (após Lei 13.281/16). Perdão judicial (art. 300, parágrafo único): consequências graves, juiz pode deixar aplicar pena.",
        C: "Homicídio culposo no trânsito tem pena de reclusão.",
        D: "Ação penal é condicionada à representação.",
        E: "Perdão judicial não é possível."
      },
      gabarito: "B",
      explicacao: "CTB, art. 302 (Lei 9.503/97): HOMICÍDIO CULPOSO NO TRÂNSITO - praticar homicídio CULPOSO na direção veículo automotor. PENA: detenção 2-4 anos + suspensão/proibição direito dirigir. Parágrafo único: pena aumentada 1/3 a 1/2 se: I) não possuir PERMISSÃO ou HABILITAÇÃO; II) praticá-lo em FAIXA PEDESTRES; III) deixar prestar SOCORRO; IV) sob influência ÁLCOOL/psicoativa; V) racha/velocidade incompatível; VI) CARGA EXCESSIVA; VII) transporte PASSAGEIROS. AÇÃO PENAL: pública INCONDICIONADA (Lei 13.281/16 - antes era condicionada). PERDÃO JUDICIAL (art. 300, parágrafo único): consequências graves, juiz pode deixar aplicar pena. B correta. A, C, D, E incorretas.",
      banca: "CESPE",
      ano: 2023,
      cargo: "Investigador de Polícia"
    },
    {
      id: "leg-penal-trans-02",
      enunciado: "Em relação ao crime de lesão corporal culposa no trânsito (CTB, art. 303), assinale a alternativa INCORRETA:",
      alternativas: {
        A: "Lesão corporal culposa no trânsito (art. 303): praticar lesão corporal CULPOSA na direção de veículo automotor.",
        B: "Pena: detenção 6 meses - 2 anos + suspensão/proibição direito dirigir. Parágrafo único: pena aumentada 1/3 a 1/2 nas mesmas hipóteses do art. 302 (sem habilitação, álcool, faixa pedestres, não prestar socorro, racha, carga excessiva, transporte passageiros).",
        C: "Ação penal: pública CONDICIONADA à representação (regra - art. 291). Se resulta lesão GRAVE ou GRAVÍSSIMA: ação pública INCONDICIONADA (STJ).",
        D: "Lesão culposa no trânsito tem ação penal sempre incondicionada.",
        E: "Crime de menor potencial ofensivo (pena máxima 2 anos). Lei 9.099/95: aplica-se aos crimes trânsito (transação penal, suspensão condicional processo). Competência: Juizado Especial Criminal."
      },
      gabarito: "D",
      explicacao: "CTB, art. 303: LESÃO CORPORAL CULPOSA NO TRÂNSITO - praticar lesão corporal CULPOSA na direção veículo automotor. PENA: detenção 6 meses - 2 anos + suspensão/proibição direito dirigir. Parágrafo único: aumenta 1/3 a 1/2 nas mesmas hipóteses art. 302 (sem habilitação, álcool, faixa pedestres, não socorro, racha, carga, passageiros). AÇÃO PENAL (art. 291): pública CONDICIONADA à representação (REGRA). Se lesão GRAVE ou GRAVÍSSIMA: ação pública INCONDICIONADA (STJ - interesse público). Crime MENOR POTENCIAL ofensivo. Lei 9.099/95: APLICA-SE (transação penal, suspensão condicional processo). COMPETÊNCIA: Juizado Especial Criminal. D INCORRETA - ação é CONDICIONADA (regra), salvo lesão grave/gravíssima. A, B, C, E corretas.",
      banca: "FCC",
      ano: 2023,
      cargo: "Investigador de Polícia"
    },
    {
      id: "leg-penal-trans-03",
      enunciado: "Quanto ao crime de omissão de socorro no trânsito (CTB, art. 304), é correto afirmar:",
      alternativas: {
        A: "Omissão de socorro no trânsito não é crime.",
        B: "Omissão de socorro no trânsito (art. 304): deixar o condutor do veículo, na ocasião do acidente, de prestar IMEDIATO SOCORRO à vítima, ou, não podendo fazê-lo diretamente, por justa causa, deixar de SOLICITAR AUXÍLIO da autoridade pública. Pena: detenção 6 meses - 1 ano ou multa. Parágrafo único: crime aumentado 1/2 se condutor estiver sob influência ÁLCOOL/substância psicoativa. Requisitos: I) acidente de trânsito; II) vítima necessita socorro; III) condutor tem possibilidade prestar socorro (não justa causa); IV) omissão. Crime OMISSIVO PRÓPRIO (basta omissão). Ação penal: pública INCONDICIONADA. Diferença CP art. 135: CTB exige que condutor tenha CAUSADO acidente.",
        C: "Omissão de socorro no trânsito tem pena de reclusão.",
        D: "Crime é comissivo.",
        E: "Não há diferença entre art. 304 CTB e art. 135 CP."
      },
      gabarito: "B",
      explicacao: "CTB, art. 304: OMISSÃO DE SOCORRO NO TRÂNSITO - deixar condutor veículo, na ocasião acidente, de prestar IMEDIATO SOCORRO à vítima, ou, não podendo fazê-lo diretamente por justa causa, deixar SOLICITAR AUXÍLIO autoridade pública. PENA: detenção 6 meses - 1 ano ou multa. Parágrafo único: aumenta 1/2 se condutor sob influência ÁLCOOL/psicoativa. REQUISITOS: I) acidente trânsito; II) vítima necessita socorro; III) condutor tem possibilidade prestar (não justa causa); IV) omissão. Crime OMISSIVO PRÓPRIO. AÇÃO PENAL: pública INCONDICIONADA. DIFERENÇA CP art. 135: CTB exige condutor tenha CAUSADO acidente. B correta. A, C, D, E incorretas.",
      banca: "VUNESP",
      ano: 2023,
      cargo: "Investigador de Polícia"
    },
    {
      id: "leg-penal-trans-04",
      enunciado: "Sobre o crime de embriaguez ao volante (CTB, art. 306), assinale a alternativa correta:",
      alternativas: {
        A: "Embriaguez ao volante não é crime.",
        B: "Embriaguez ao volante (art. 306 - redação Lei 12.760/12): conduzir veículo automotor com CAPACIDADE PSICOMOTORA ALTERADA em razão da influência de ÁLCOOL ou de outra substância PSICOATIVA que determine dependência. Pena: detenção 6 meses - 3 anos + multa + suspensão/proibição dirigir. §1º: condutor sob influência álcool: concentração igual/superior a 6 decigramas/litro de sangue OU igual/superior 0,3 miligrama/litro ar alveolar; sinais que indiquem alteração capacidade psicomotora. §2º: medidas probatórias: I) etilômetro; II) exame sangue; III) vídeo; IV) prova testemunhal; V) outros meios. Crime de PERIGO ABSTRATO (não exige resultado). Ação penal: pública INCONDICIONADA.",
        C: "Embriaguez ao volante exige resultado lesivo.",
        D: "Só etilômetro pode provar embriaguez.",
        E: "Pena máxima é de 2 anos."
      },
      gabarito: "B",
      explicacao: "CTB, art. 306 (Lei 12.760/12): EMBRIAGUEZ AO VOLANTE - conduzir veículo automotor com CAPACIDADE PSICOMOTORA ALTERADA em razão influência ÁLCOOL ou substância PSICOATIVA que determine dependência. PENA: detenção 6 meses - 3 anos + multa + suspensão/proibição dirigir. §1º: condutor sob influência álcool: concentração igual/superior 6 decigramas/litro sangue OU 0,3 miligrama/litro ar alveolar; sinais que indiquem alteração capacidade psicomotora. §2º: meios prova: etilômetro, exame sangue, vídeo, prova testemunhal, outros. Crime PERIGO ABSTRATO (não exige resultado). AÇÃO PENAL: pública INCONDICIONADA. B correta. A, C, D, E incorretas.",
      banca: "FGV",
      ano: 2023,
      cargo: "Investigador de Polícia"
    },
    {
      id: "leg-penal-trans-05",
      enunciado: "Em relação ao crime de participar de corrida não autorizada (racha - CTB, art. 308), é INCORRETO afirmar:",
      alternativas: {
        A: "Racha (art. 308 - redação Lei 13.281/16): participar, na direção de veículo automotor, em via pública, de CORRIDA, DISPUTA ou COMPETIÇÃO AUTOMOBILÍSTICA ou ainda de EXIBIÇÃO ou DEMONSTRAÇÃO de perícia em manobra de veículo, NÃO AUTORIZADA pela autoridade competente, gerando situação de RISCO à incolumidade pública/privada.",
        B: "Pena: detenção 6 meses - 3 anos + multa + suspensão/proibição dirigir.",
        C: "§1º: agente que INCITAR ou INSTIGAR prática: pena mesma pena do condutor.",
        D: "Racha é crime de menor potencial ofensivo.",
        E: "§2º: pena privativa aumentada 1/3 a 1/2 se resulta lesão corporal GRAVE; 1/2 a 2/3 se resulta MORTE. Crime de PERIGO CONCRETO (exige situação de risco). Ação penal: pública INCONDICIONADA. Diferença infração administrativa (art. 173, CTB): crime exige situação de risco."
      },
      gabarito: "D",
      explicacao: "CTB, art. 308 (Lei 13.281/16): RACHA (participar corrida não autorizada) - participar, na direção veículo automotor, em via pública, de CORRIDA, DISPUTA ou COMPETIÇÃO automobilística ou EXIBIÇÃO/DEMONSTRAÇÃO perícia manobra veículo, NÃO AUTORIZADA autoridade competente, gerando situação RISCO à incolumidade pública/privada. PENA: detenção 6 meses - 3 anos + multa + suspensão/proibição dirigir. §1º: agente que INCITAR ou INSTIGAR: mesma pena. §2º: aumenta 1/3 a 1/2 se lesão GRAVE; 1/2 a 2/3 se MORTE. Crime PERIGO CONCRETO (exige risco). AÇÃO PENAL: pública INCONDICIONADA. Pena máxima 3 anos: NÃO é menor potencial ofensivo (> 2 anos). D INCORRETA - NÃO é menor potencial (pena máxima 3 anos). A, B, C, E corretas.",
      banca: "CESPE",
      ano: 2022,
      cargo: "Investigador de Polícia"
    }
  ]
};
