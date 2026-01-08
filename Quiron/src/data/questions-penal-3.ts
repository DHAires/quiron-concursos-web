// Questões de Direito Penal - TEMAS 7-9 (30 questões)
// Área Jurídica - Direito Penal

export const questionsPenal3 = {
  // TEMA 7: Penas (10 questões)
  "penas": [
    {
      id: "penal-penas-01",
      enunciado: "Sobre as espécies de penas previstas no Código Penal, é correto afirmar:",
      alternativas: {
        A: "CP prevê penas de morte, prisão e multa.",
        B: "CP prevê penas privativas de liberdade, restritivas de direitos e multa (art. 32). Penas privativas: reclusão e detenção.",
        C: "Prisão perpétua é permitida.",
        D: "Trabalhos forçados são permitidos.",
        E: "Banimento é espécie de pena."
      },
      gabarito: "B",
      explicacao: "CP, art. 32: ESPÉCIES DE PENAS: I) PRIVATIVAS DE LIBERDADE: a) RECLUSÃO (regime inicial fechado, semiaberto ou aberto); b) DETENÇÃO (regime inicial semiaberto ou aberto). II) RESTRITIVAS DE DIREITOS. III) MULTA. CF/88, art. 5º, XLVII: VEDADAS: morte (salvo guerra), perpétua, trabalhos forçados, banimento, cruéis. B correta. A, C, D, E incorretas - vedadas pela CF.",
      banca: "CESPE",
      ano: 2023,
      cargo: "Delegado - PCDF"
    },
    {
      id: "penal-penas-02",
      enunciado: "Em relação aos regimes de cumprimento de pena, assinale a alternativa INCORRETA:",
      alternativas: {
        A: "Regimes: fechado, semiaberto e aberto (art. 33).",
        B: "Reclusão: inicial pode ser fechado, semiaberto ou aberto. Detenção: semiaberto ou aberto.",
        C: "Detenção pode iniciar em regime fechado.",
        D: "Regime fechado: estabelecimento de segurança máxima ou média. Semiaberto: colônia agrícola/industrial. Aberto: casa de albergado.",
        E: "Progressão de regime é possível."
      },
      gabarito: "C",
      explicacao: "CP, art. 33: REGIMES: I) FECHADO (segurança máxima/média); II) SEMIABERTO (colônia agrícola/industrial/similar); III) ABERTO (casa de albergado/trabalho externo). RECLUSÃO: pode iniciar em QUALQUER regime (conforme pena e circunstâncias). DETENÇÃO: NÃO pode iniciar em regime FECHADO (só semiaberto ou aberto - §1º). Progressão: possível (art. 112 LEP). C INCORRETA - detenção NÃO inicia em fechado. A, B, D, E corretas.",
      banca: "FCC",
      ano: 2023,
      cargo: "Delegado - PCPE"
    },
    {
      id: "penal-penas-03",
      enunciado: "Quanto à fixação da pena (dosimetria), é correto afirmar:",
      alternativas: {
        A: "Pena é fixada em fase única.",
        B: "Sistema trifásico (art. 68): 1ª fase - circunstâncias judiciais (art. 59); 2ª fase - agravantes/atenuantes; 3ª fase - causas de aumento/diminuição.",
        C: "Agravantes são aplicadas na primeira fase.",
        D: "Causas de aumento são aplicadas na segunda fase.",
        E: "Circunstâncias judiciais não são analisadas."
      },
      gabarito: "B",
      explicacao: "CP, art. 68: SISTEMA TRIFÁSICO (dosimetria): 1ª FASE: PENA-BASE - circunstâncias JUDICIAIS (art. 59 - culpabilidade, antecedentes, conduta social, personalidade, motivos, circunstâncias, consequências, comportamento da vítima). 2ª FASE: AGRAVANTES (art. 61-62) e ATENUANTES (art. 65-66). 3ª FASE: CAUSAS DE AUMENTO e DIMINUIÇÃO (qualificadoras, privilégios, tentativa, etc.). B correta. A, C, D, E incorretas.",
      banca: "VUNESP",
      ano: 2023,
      cargo: "Delegado - PCSP"
    },
    {
      id: "penal-penas-04",
      enunciado: "Sobre as circunstâncias agravantes, assinale a alternativa correta:",
      alternativas: {
        A: "Agravantes aumentam sempre a pena além do máximo legal.",
        B: "Art. 61: agravantes SEMPRE presentes (reincidência). Art. 62: agravantes relativas ao crime. Agravantes NÃO podem elevar pena acima do máximo (art. 61, §ú, c/c Súmula 231 STJ).",
        C: "Reincidência não é agravante.",
        D: "Agravantes podem elevar acima do máximo.",
        E: "Motivo fútil não é agravante."
      },
      gabarito: "B",
      explicacao: "CP, art. 61-62: AGRAVANTES: I) Art. 61: SEMPRE (reincidência, motivo fútil/torpe, traição/emboscada, recurso que dificulte defesa, criança/velho/enfermo, sob autoridade/vigilância, coação/ordem, contra ascendente/descendente/irmão/cônjuge, abuso de poder/violação de dever, álcool/entorpecente preordenado, estado calamidade/desastre). II) Art. 62: relativas ao crime. Súmula 231 STJ: agravante NÃO pode elevar ACIMA do máximo. B correta. A, C, D, E incorretas.",
      banca: "FGV",
      ano: 2023,
      cargo: "Delegado - PCRJ"
    },
    {
      id: "penal-penas-05",
      enunciado: "Em relação às circunstâncias atenuantes, é INCORRETO afirmar:",
      alternativas: {
        A: "Atenuantes do art. 65-66: menoridade (< 21 ao fato), senilidade (> 70 ao sentença), confissão espontânea, coação resistível, relevante valor social/moral, arrependimento posterior, etc.",
        B: "Atenuantes podem reduzir pena abaixo do mínimo legal (Súmula 231 STJ).",
        C: "Confissão não é atenuante.",
        D: "Menoridade relativa (< 21 anos) é atenuante.",
        E: "Atenuantes são aplicadas na segunda fase."
      },
      gabarito: "C",
      explicacao: "CP, art. 65-66: ATENUANTES: menoridade relativa (< 21 ao FATO), senilidade (> 70 ao SENTENÇA), desconhecimento da lei, CONFISSÃO ESPONTÂNEA, coação resistível/ordem não manifestamente ilegal, influência multidão, relevante VALOR SOCIAL ou MORAL, procurado reparar dano/diminuir consequências, sob domínio emoção/paixão/embriaguez. Súmula 231 STJ: atenuante PODE reduzir ABAIXO do mínimo. C INCORRETA - confissão É atenuante (art. 65, III, d). A, B, D, E corretas.",
      banca: "CESPE",
      ano: 2022,
      cargo: "Delegado - PCDF"
    },
    {
      id: "penal-penas-06",
      enunciado: "Quanto à reincidência, assinale a alternativa correta:",
      alternativas: {
        A: "Reincidência não é agravante.",
        B: "Reincidência (art. 63): quem comete novo crime DEPOIS de transitar em julgado sentença que o tenha condenado por crime ANTERIOR no Brasil ou exterior.",
        C: "Contravenção gera reincidência para crime.",
        D: "Crime político gera reincidência.",
        E: "Condenação no exterior não gera reincidência."
      },
      gabarito: "B",
      explicacao: "CP, art. 63-64: REINCIDÊNCIA: comete novo crime DEPOIS de TRANSITAR EM JULGADO sentença que o condenou por crime anterior (Brasil ou exterior). Consequências: agravante (art. 61, I), impede sursis, aumenta prazo revogação sursis/livramento, etc. NÃO gera reincidência: contravenção (art. 63, §ú), crime POLÍTICO (art. 64, II), pena extinta/cumprida há + 5 anos (art. 64, I - período depurador). B correta. A, C, D, E incorretas.",
      banca: "FCC",
      ano: 2023,
      cargo: "Delegado - PCPE"
    },
    {
      id: "penal-penas-07",
      enunciado: "Sobre as penas restritivas de direitos, é correto afirmar:",
      alternativas: {
        A: "Penas restritivas não substituem privativas de liberdade.",
        B: "Art. 43-48: penas restritivas SUBSTITUEM privativas de liberdade (≤ 4 anos, não violência/grave ameaça ou qualquer se culposo). Espécies: prestação pecuniária, perda de bens, prestação serviços, interdição temporária de direitos, limitação de fim de semana.",
        C: "Violência impede sempre a substituição.",
        D: "Não há requisitos para substituição.",
        E: "Prestação de serviços não é espécie."
      },
      gabarito: "B",
      explicacao: "CP, art. 43-48: PENAS RESTRITIVAS DE DIREITOS: SUBSTITUEM privativas. REQUISITOS (art. 44): 1) pena ≤ 4 anos, não violento/grave ameaça OU qualquer se CULPOSO; 2) não reincidente crime doloso; 3) circunstâncias art. 59 favoráveis; 4) suficiente. ESPÉCIES (art. 43): I) prestação pecuniária; II) perda de bens/valores; III) prestação serviços comunidade; IV) interdição temporária direitos; V) limitação fim de semana. B correta. A, C, D, E incorretas.",
      banca: "VUNESP",
      ano: 2022,
      cargo: "Delegado - PCSP"
    },
    {
      id: "penal-penas-08",
      enunciado: "Em relação ao sursis (suspensão condicional da pena), assinale a alternativa INCORRETA:",
      alternativas: {
        A: "Sursis (art. 77-82): suspende execução da pena privativa ≤ 2 anos.",
        B: "Requisitos: não reincidente crime doloso, circunstâncias art. 59 favoráveis, reparação do dano (salvo impossibilidade).",
        C: "Período de prova: 2 a 4 anos (simples) ou 4 a 6 anos (especial - art. 78, §2º).",
        D: "Sursis pode ser concedido a reincidente em crime doloso.",
        E: "Condições: comparecimento, não frequentar lugares, não ausentar-se sem autorização, etc."
      },
      gabarito: "D",
      explicacao: "CP, art. 77-82: SURSIS (suspensão condicional da pena): suspende EXECUÇÃO de pena privativa ≤ 2 anos. REQUISITOS: 1) NÃO reincidente crime DOLOSO; 2) circunstâncias art. 59 favoráveis; 3) não indicada/cabível substituição art. 44; 4) reparação dano (salvo impossibilidade). PERÍODO: 2-4 anos (simples) ou 4-6 anos (especial/etário/humanitário - §2º). CONDIÇÕES: art. 78-79. D INCORRETA - reincidente doloso NÃO pode ter sursis. A, B, C, E corretas.",
      banca: "FGV",
      ano: 2023,
      cargo: "Delegado - PCRJ"
    },
    {
      id: "penal-penas-09",
      enunciado: "Quanto ao livramento condicional, é correto afirmar:",
      alternativas: {
        A: "Livramento condicional não existe no Brasil.",
        B: "Livramento condicional (art. 83-90): antecipação da liberdade após cumprimento de parte da pena. Requisitos objetivos: cumprido + 1/3 (primário) ou + 1/2 (reincidente). Subjetivos: bom comportamento, trabalho, reparação.",
        C: "Primário precisa cumprir metade da pena.",
        D: "Não há requisitos subjetivos.",
        E: "Crime hediondo não tem requisitos especiais."
      },
      gabarito: "B",
      explicacao: "CP, art. 83-90: LIVRAMENTO CONDICIONAL: liberdade antecipada. REQUISITOS OBJETIVOS: pena > 2 anos + cumprido: I) + 1/3 (PRIMÁRIO, bom comportamento); II) + 1/2 (REINCIDENTE); III) + 2/3 (crimes HEDIONDOS/equiparados - Lei 8.072/90). SUBJETIVOS: bom comportamento, trabalho (ou aptidão), reparação (salvo impossibilidade). PERÍODO DE PROVA: resto da pena. Revogação: art. 86-87. B correta. A, C, D, E incorretas.",
      banca: "CESPE",
      ano: 2023,
      cargo: "Delegado - PCDF"
    },
    {
      id: "penal-penas-10",
      enunciado: "Sobre a pena de multa, assinale a alternativa correta:",
      alternativas: {
        A: "Multa não é pena no Brasil.",
        B: "Multa (art. 49-52): calculada em dias-multa (mínimo 10, máximo 360). Valor do dia-multa: 1/30 salário mínimo (mínimo) a 5 salários mínimos (máximo), conforme situação econômica.",
        C: "Multa é fixada em valor fixo.",
        D: "Não há limites para dias-multa.",
        E: "Situação econômica não é considerada."
      },
      gabarito: "B",
      explicacao: "CP, art. 49-52: PENA DE MULTA: I) CÁLCULO: DIAS-MULTA (mín. 10, máx. 360 - art. 49). II) VALOR do dia-multa: mín. 1/30 salário mínimo, máx. 5 salários mínimos (art. 49, §1º - conforme situação ECONÔMICA). III) PAGAMENTO: 10 dias após trânsito (art. 50). IV) Descumprimento: dívida de valor, inscrição dívida ativa, execução (Lei 9.268/96 - não converte em prisão). B correta. A, C, D, E incorretas.",
      banca: "FCC",
      ano: 2022,
      cargo: "Delegado - PCPE"
    }
  ],

  // TEMA 8: Medidas de Segurança e Efeitos da Condenação (10 questões)
  "medidas-de-seguranca": [
    {
      id: "penal-med-01",
      enunciado: "Sobre o conceito e natureza das medidas de segurança, é correto afirmar:",
      alternativas: {
        A: "Medida de segurança é pena.",
        B: "Medida de segurança (art. 96-99): sanção penal imposta a INIMPUTÁVEL ou SEMI-IMPUTÁVEL que praticou fato típico e ilícito. Natureza: preventiva/curativa (não retributiva). Sistema vicariante: pena OU medida (não ambas).",
        C: "Medida de segurança é aplicada a imputáveis.",
        D: "Sistema duplo binário é adotado (pena + medida).",
        E: "Medida não é sanção penal."
      },
      gabarito: "B",
      explicacao: "CP, art. 96-99: MEDIDA DE SEGURANÇA: sanção penal com natureza PREVENTIVA/CURATIVA (tratamento). DESTINATÁRIOS: INIMPUTÁVEIS (art. 26, caput) ou SEMI-IMPUTÁVEIS (art. 26, §ú - se juiz substituir pena). SISTEMA VICARIANTE (Lei 7.209/84): pena OU medida (NÃO ambas - abandonou sistema duplo binário). PRESSUPOSTO: fato TÍPICO e ILÍCITO + periculosidade. B correta. A incorreta - não é pena. C, D, E incorretas.",
      banca: "CESPE",
      ano: 2023,
      cargo: "Delegado - PCDF"
    },
    {
      id: "penal-med-02",
      enunciado: "Em relação às espécies de medidas de segurança, assinale a alternativa INCORRETA:",
      alternativas: {
        A: "Espécies (art. 96): internação em hospital de custódia e tratamento ou tratamento ambulatorial.",
        B: "Crime com pena de reclusão: internação. Crime com pena de detenção: tratamento ambulatorial (juiz pode determinar internação se necessário).",
        C: "Ambas as espécies podem ser aplicadas a qualquer crime.",
        D: "Internação: estabelecimento adequado com características hospitalares.",
        E: "Tratamento ambulatorial: sem internação."
      },
      gabarito: "C",
      explicacao: "CP, art. 96-97: ESPÉCIES: I) INTERNAÇÃO em hospital de custódia e tratamento psiquiátrico (estabelecimento adequado). II) TRATAMENTO AMBULATORIAL. Art. 97: crime punido com RECLUSÃO - internação. Crime punido com DETENÇÃO - ambulatorial (juiz pode determinar internação se necessário). §4º: desinternação ou liberação após perícia cessar periculosidade. C INCORRETA - espécies dependem da pena do crime. A, B, D, E corretas.",
      banca: "FCC",
      ano: 2023,
      cargo: "Delegado - PCPE"
    },
    {
      id: "penal-med-03",
      enunciado: "Quanto ao prazo de duração da medida de segurança, é correto afirmar:",
      alternativas: {
        A: "Medida de segurança tem prazo máximo de 30 anos.",
        B: "Prazo mínimo: 1 a 3 anos (art. 97, §1º). Prazo máximo: STF fixou limite de 30 anos (não pode ser perpétua - HC 84.219/SP). Perícia obrigatória ao fim do prazo mínimo.",
        C: "Medida de segurança é perpétua.",
        D: "Não há prazo mínimo.",
        E: "Não se exige perícia para desinternação."
      },
      gabarito: "B",
      explicacao: "CP, art. 97, §1º: prazo MÍNIMO 1 a 3 anos. Art. 97, §2º: perícia ao fim do prazo mínimo e anualmente. PRAZO MÁXIMO: CP não prevê expressamente, mas STF (HC 84.219/SP): limite de 30 ANOS (analogia art. 75 - vedação perpetuidade - CF, art. 5º, XLVII, b). Desinternação: cessada periculosidade (§3º). B correta. C incorreta - não pode ser perpétua. A, D, E incorretas.",
      banca: "VUNESP",
      ano: 2023,
      cargo: "Delegado - PCSP"
    },
    {
      id: "penal-med-04",
      enunciado: "Sobre a desinternação e alta progressiva, assinale a alternativa correta:",
      alternativas: {
        A: "Desinternação é automática após prazo mínimo.",
        B: "Desinternação (art. 97, §3º): condicional se perícia atestar cessação de periculosidade. Alta progressiva: Lei 10.216/2001 - transição gradual (internação → semi-internação → ambulatorial). Supervisionamento: 1 ano (§4º).",
        C: "Não há supervisionamento após desinternação.",
        D: "Alta progressiva não é permitida.",
        E: "Perícia não é necessária."
      },
      gabarito: "B",
      explicacao: "CP, art. 97, §3º: DESINTERNAÇÃO ou LIBERAÇÃO (ambulatorial): condicional se perícia atestar cessação de periculosidade. §4º: será restabelecida se sobrevier perturbação mental. Lei 10.216/2001 (Reforma Psiquiátrica): ALTA PROGRESSIVA - transição gradual. SUPERVISIONAMENTO: durante 1 ano (§4º). B correta. A incorreta - não é automática. C, D, E incorretas.",
      banca: "FGV",
      ano: 2023,
      cargo: "Delegado - PCRJ"
    },
    {
      id: "penal-med-05",
      enunciado: "Em relação aos efeitos da condenação, é INCORRETO afirmar:",
      alternativas: {
        A: "Efeitos da condenação: penais e extrapenais (art. 91-92).",
        B: "Efeitos penais principais: cumprimento da pena, reincidência, antecedentes.",
        C: "Efeitos genéricos (art. 91): tornar certa obrigação de reparar dano e perda instrumentos do crime em favor da União.",
        D: "Efeitos específicos (art. 92) são automáticos.",
        E: "Perda de cargo público é efeito específico."
      },
      gabarito: "D",
      explicacao: "CP, art. 91-92: EFEITOS DA CONDENAÇÃO: I) PENAIS: cumprimento pena, reincidência, antecedentes, maus antecedentes. II) EXTRAPENAIS GENÉRICOS (art. 91 - AUTOMÁTICOS): tornar certa reparação dano (civil), perda instrumentos/produto crime (União). III) EXTRAPENAIS ESPECÍFICOS (art. 92 - NÃO AUTOMÁTICOS - exigem motivação expressa): perda cargo/função/mandato, incapacidade exercício pátrio poder/tutela/curatela, inabilitação dirigir. D INCORRETA - específicos NÃO são automáticos. A, B, C, E corretas.",
      banca: "CESPE",
      ano: 2022,
      cargo: "Delegado - PCDF"
    },
    {
      id: "penal-med-06",
      enunciado: "Quanto à perda de cargo, função pública ou mandato eletivo, é correto afirmar:",
      alternativas: {
        A: "Perda de cargo é efeito automático.",
        B: "Art. 92, I: perda de cargo, função pública ou mandato eletivo: a) pena ≥ 1 ano, crime praticado com violação de dever ou abuso; b) pena > 4 anos, crimes previstos. NÃO é automática - exige motivação expressa (parágrafo único).",
        C: "Não há requisitos para perda de cargo.",
        D: "Qualquer condenação gera perda de cargo.",
        E: "Motivação não é necessária."
      },
      gabarito: "B",
      explicacao: "CP, art. 92, I e §ú: PERDA de cargo/função pública/mandato eletivo: a) pena ≥ 1 ano por crime com VIOLAÇÃO DEVER ou ABUSO; b) pena > 4 anos nos demais. §único: efeitos art. 92 NÃO são AUTOMÁTICOS - devem ser MOTIVADAMENTE declarados na sentença. STF: automaticidade só para crimes contra Administração com condenação transitada (não é CP, é art. 15, III CF). B correta. A, C, D, E incorretas.",
      banca: "FCC",
      ano: 2023,
      cargo: "Delegado - PCPE"
    },
    {
      id: "penal-med-07",
      enunciado: "Sobre a incapacidade para o exercício do pátrio poder, tutela ou curatela, assinale a alternativa INCORRETA:",
      alternativas: {
        A: "Prevista no art. 92, II.",
        B: "Aplica-se a crimes praticados contra filho, tutelado ou curatelado.",
        C: "É efeito automático da condenação.",
        D: "Exige motivação expressa do juiz.",
        E: "Relaciona-se a crimes contra relações familiares."
      },
      gabarito: "C",
      explicacao: "CP, art. 92, II e §ú: INCAPACIDADE para exercício pátrio poder (hoje poder familiar), tutela ou curatela: crimes praticados contra FILHO, tutelado ou curatelado. §único: NÃO é AUTOMÁTICA - deve ser motivadamente declarada. Relaciona-se a crimes que violam deveres familiares (ex: crimes contra dignidade sexual, maus-tratos). C INCORRETA - NÃO é automática. A, B, D, E corretas.",
      banca: "VUNESP",
      ano: 2022,
      cargo: "Delegado - PCSP"
    },
    {
      id: "penal-med-08",
      enunciado: "Em relação à inabilitação para dirigir veículo, é correto afirmar:",
      alternativas: {
        A: "Inabilitação não está prevista no CP.",
        B: "Art. 92, III: inabilitação para dirigir quando utilizado veículo como meio para praticar crime doloso. Prazo: 2 meses a 5 anos. Não é automática.",
        C: "É efeito automático.",
        D: "Não há prazo para inabilitação.",
        E: "Só se aplica a crimes culposos."
      },
      gabarito: "B",
      explicacao: "CP, art. 92, III e §ú: INABILITAÇÃO para dirigir veículo quando utilizado como MEIO para praticar crime DOLOSO. PRAZO: facultativamente de 2 meses a 5 anos. §único: NÃO é automática - exige motivação. CTB, art. 292-293: suspensão/proibição de dirigir (autônoma para crimes de trânsito). B correta. A, C, D incorretas. E incorreta - aplica-se a dolosos.",
      banca: "FGV",
      ano: 2023,
      cargo: "Delegado - PCRJ"
    },
    {
      id: "penal-med-09",
      enunciado: "Quanto à reabilitação criminal, assinale a alternativa correta:",
      alternativas: {
        A: "Reabilitação não existe no Direito Penal brasileiro.",
        B: "Reabilitação (art. 93-95): assegura sigilo condenações após cumprida/extinta pena + 2 anos (sem nova condenação). Requisitos: reparação dano (salvo impossibilidade), bom comportamento, trabalho honesto. Efeitos: sigilo, restauração direitos.",
        C: "Prazo é de 5 anos.",
        D: "Não exige reparação do dano.",
        E: "Não pode ser revogada."
      },
      gabarito: "B",
      explicacao: "CP, art. 93-95: REABILITAÇÃO: assegura sigilo de condenações. REQUISITOS: 1) decorridos 2 ANOS após cumprida/extinta pena (sem condenação irrecorrível novo crime); 2) domicílio no país; 3) bom comportamento público/privado; 4) ressarcimento dano (salvo impossibilidade). EFEITOS: sigilo condenações (art. 93), restauração direitos perdidos (não cargo/patente/função pública - §2º). REVOGAÇÃO: nova condenação (art. 95). B correta. A, C, D, E incorretas.",
      banca: "CESPE",
      ano: 2023,
      cargo: "Delegado - PCDF"
    },
    {
      id: "penal-med-10",
      enunciado: "Sobre a prescrição da pretensão executória da medida de segurança, é correto afirmar:",
      alternativas: {
        A: "Medida de segurança prescreve como pena.",
        B: "Medida de segurança NÃO prescreve no CP (não tem prazo máximo legal). STF: limite de 30 anos (analogia). Doutrina diverge sobre prescrição. Entendimento: prescreve em 30 anos (prazo máximo fixado STF).",
        C: "Prescreve em 20 anos.",
        D: "Nunca prescreve.",
        E: "Prescreve em 10 anos."
      },
      gabarito: "B",
      explicacao: "PRESCRIÇÃO DA MEDIDA DE SEGURANÇA: CP não prevê expressamente (art. 96-99 silentes). DOUTRINA DIVERGE: 1) NÃO prescreve (não tem pena máxima cominada); 2) Prescreve (analogia art. 109 + prazo máximo de 30 anos fixado STF). ENTENDIMENTO DOMINANTE: prescreve em 30 ANOS (limite STF - HC 84.219/SP - analogia in bonam partem). B correta. A, C, D, E incorretas.",
      banca: "FCC",
      ano: 2022,
      cargo: "Delegado - PCPE"
    }
  ],

  // TEMA 9: Extinção da Punibilidade (10 questões)
  "extincao-punibilidade": [
    {
      id: "penal-ext-01",
      enunciado: "Sobre o conceito de extinção da punibilidade, é correto afirmar:",
      alternativas: {
        A: "Extinção da punibilidade não afeta a condenação.",
        B: "Extinção da punibilidade (art. 107-120): causas que fazem CESSAR o direito de punir do Estado (pretensão punitiva ou executória). Rol do art. 107 é exemplificativo (há causas em leis especiais).",
        C: "Rol do art. 107 é taxativo.",
        D: "Não há causas em leis especiais.",
        E: "Só extingue pretensão punitiva."
      },
      gabarito: "B",
      explicacao: "CP, art. 107-120: EXTINÇÃO DA PUNIBILIDADE: cessação do direito de PUNIR do Estado. PRETENSÃO PUNITIVA (antes trânsito): impede condenação. PRETENSÃO EXECUTÓRIA (após trânsito): impede execução. Art. 107: rol EXEMPLIFICATIVO (não taxativo). Causas: morte, anistia, graça, indulto, abolitio criminis, decadência, perempção, prescrição, renúncia, perdão, retratação, perdão judicial, outras. B correta. A, C, D, E incorretas.",
      banca: "CESPE",
      ano: 2023,
      cargo: "Delegado - PCDF"
    },
    {
      id: "penal-ext-02",
      enunciado: "Em relação à morte do agente, assinale a alternativa INCORRETA:",
      alternativas: {
        A: "Morte do agente extingue punibilidade (art. 107, I).",
        B: "Princípio: mors omnia solvit (morte tudo resolve).",
        C: "Extingue pretensão punitiva e executória.",
        D: "Efeitos civis persistem contra herdeiros (até limite herança).",
        E: "Morte do agente afeta responsabilidade civil de terceiros."
      },
      gabarito: "E",
      explicacao: "CP, art. 107, I: MORTE DO AGENTE extingue punibilidade. Fundamento: PRINCÍPIO DA PESSOALIDADE/INTRANSCENDÊNCIA (CF, art. 5º, XLV - pena não passa da pessoa do condenado). Mors omnia solvit (morte resolve tudo - âmbito penal). Prova: certidão de óbito. Efeitos CIVIS (reparação dano): PERSISTEM contra herdeiros até limite herança. E INCORRETA - não afeta responsabilidade civil de terceiros (cada qual responde). A, B, C, D corretas.",
      banca: "FCC",
      ano: 2023,
      cargo: "Delegado - PCPE"
    },
    {
      id: "penal-ext-03",
      enunciado: "Quanto à anistia, graça e indulto, é correto afirmar:",
      alternativas: {
        A: "Anistia é individual, graça é coletiva.",
        B: "Anistia (art. 107, II): lei, coletiva, antes trânsito, crimes políticos/contravenções. Graça (III): decreto PR, individual, após trânsito. Indulto (III): decreto PR, coletivo, após trânsito. Graça/indulto: só penais. Anistia: penais e civis.",
        C: "Indulto é individual.",
        D: "Presidente não concede graça/indulto.",
        E: "Anistia não extingue efeitos civis."
      },
      gabarito: "B",
      explicacao: "CP, art. 107, II-III: ANISTIA: LEI (CN), COLETIVA, geralmente ANTES trânsito, crimes POLÍTICOS ou de menor potencial. Efeitos: penais E civis. GRAÇA: decreto PR, INDIVIDUAL, APÓS trânsito, deve ser provocada. INDULTO: decreto PR, COLETIVO, APÓS trânsito. Graça/indulto: só efeitos PENAIS (não civis). B correta. A, C, D, E incorretas.",
      banca: "VUNESP",
      ano: 2023,
      cargo: "Delegado - PCSP"
    },
    {
      id: "penal-ext-04",
      enunciado: "Sobre a prescrição, assinale a alternativa correta:",
      alternativas: {
        A: "Prescrição não extingue punibilidade.",
        B: "Prescrição (art. 107, IV + 109-117): perda do direito de punir pelo DECURSO DO TEMPO. Espécies: pretensão punitiva (antes trânsito) - abstrata, superveniente, retroativa; pretensão executória (após trânsito).",
        C: "Prescrição só ocorre antes do trânsito.",
        D: "Não há prescrição da pretensão executória.",
        E: "Prescrição não tem espécies."
      },
      gabarito: "B",
      explicacao: "CP, art. 107, IV + 109-117: PRESCRIÇÃO: perda direito de punir pelo DECURSO DO TEMPO + inércia estatal. Fundamento: segurança jurídica, esquecimento social. ESPÉCIES: I) PRETENSÃO PUNITIVA: a) ABSTRATA (art. 109 - pena abstrata máxima); b) SUPERVENIENTE (art. 110, §1º - pena concreta); c) RETROATIVA (art. 110, §2º - pena concreta). II) PRETENSÃO EXECUTÓRIA (art. 110 caput - pena aplicada). B correta. A, C, D, E incorretas.",
      banca: "FGV",
      ano: 2023,
      cargo: "Delegado - PCRJ"
    },
    {
      id: "penal-ext-05",
      enunciado: "Em relação aos prazos de prescrição da pretensão punitiva, é INCORRETO afirmar:",
      alternativas: {
        A: "Prazos variam conforme pena máxima cominada (art. 109).",
        B: "Pena máxima ≥ 12 anos: 20 anos. De 8 a < 12: 16 anos. De 4 a < 8: 12 anos. De 2 a < 4: 8 anos. De 1 a < 2: 4 anos. < 1 ano: 3 anos (2 anos se contravenção).",
        C: "Contravenção prescreve em 5 anos.",
        D: "Menor de 21 ao fato ou maior de 70 ao sentença: prazo reduzido pela metade.",
        E: "Prescrição é calculada pela pena máxima em abstrato."
      },
      gabarito: "C",
      explicacao: "CP, art. 109: PRAZOS (pena máxima): I) ≥ 12 anos: 20 anos. II) 8 a < 12: 16 anos. III) 4 a < 8: 12 anos. IV) 2 a < 4: 8 anos. V) 1 a < 2: 4 anos. VI) < 1 ano: 3 anos (CONTRAVENÇÃO: 2 anos - art. 109, VI c/c LCP, art. 10). Art. 115: < 21 ao FATO ou > 70 ao SENTENÇA: prazo REDUZIDO PELA METADE. C INCORRETA - contravenção prescreve em 2 anos. A, B, D, E corretas.",
      banca: "CESPE",
      ano: 2022,
      cargo: "Delegado - PCDF"
    },
    {
      id: "penal-ext-06",
      enunciado: "Quanto às causas interruptivas da prescrição, é correto afirmar:",
      alternativas: {
        A: "Prescrição não pode ser interrompida.",
        B: "Art. 117: causas interruptivas (reinicia contagem): recebimento denúncia/queixa, pronúncia, sentença condenatória recorrível, início/continuação cumprimento pena, reincidência. Após interrupção, prazo recomeça INTEGRALMENTE.",
        C: "Após interrupção, conta-se pela metade.",
        D: "Sentença absolutória interrompe prescrição.",
        E: "Não há limite para interrupções."
      },
      gabarito: "B",
      explicacao: "CP, art. 117: CAUSAS INTERRUPTIVAS da prescrição: I) recebimento denúncia/queixa; II) pronúncia; III) sentença condenatória recorrível; IV) início ou continuação cumprimento pena; V) reincidência. Efeitos: interrompida, prazo recomeça INTEGRALMENTE (ZERA). Súmula 438 STJ: admite-se prescrição superveniente entre pronúncia e trânsito. B correta. A, C, D incorretas. E incorreta - há limite temporal.",
      banca: "FCC",
      ano: 2023,
      cargo: "Delegado - PCPE"
    },
    {
      id: "penal-ext-07",
      enunciado: "Sobre as causas suspensivas da prescrição, assinale a alternativa INCORRETA:",
      alternativas: {
        A: "Causas suspensivas: suspendem curso do prazo (art. 116).",
        B: "Suspensão durante suspensão condicional da pena (sursis).",
        C: "Não há suspensão por questões prejudiciais.",
        D: "Suspensão enquanto não resolvida questão de que dependa reconhecimento da existência do crime (art. 116, I).",
        E: "Prazo suspenso volta a correr do ponto em que parou."
      },
      gabarito: "C",
      explicacao: "CP, art. 116: CAUSAS SUSPENSIVAS (suspendem curso - não zera): I) enquanto não resolvida, em outro processo, questão de que dependa reconhecimento da existência do crime; II) durante suspensão condicional da pena (sursis); III) enquanto agente cumpre pena no exterior. Difere de interrupção (suspensão: pausa e retoma; interrupção: zera). C INCORRETA - HÁ suspensão por questão prejudicial (inciso I). A, B, D, E corretas.",
      banca: "VUNESP",
      ano: 2022,
      cargo: "Delegado - PCSP"
    },
    {
      id: "penal-ext-08",
      enunciado: "Em relação à prescrição retroativa, é correto afirmar:",
      alternativas: {
        A: "Prescrição retroativa não existe mais.",
        B: "Prescrição retroativa (art. 110, §2º): entre data do FATO e sentença recorrível ou entre data do FATO e acórdão confirmatório. Calculada pela pena CONCRETA. Lei 12.234/2010: vedou após acórdão condenatório.",
        C: "É calculada pela pena em abstrato.",
        D: "Pode ocorrer após acórdão condenatório confirmatório.",
        E: "Não é calculada entre fato e sentença."
      },
      gabarito: "B",
      explicacao: "CP, art. 110, §2º: PRESCRIÇÃO RETROATIVA: calculada pela pena CONCRETA aplicada. Regula: entre data do FATO e sentença recorrível OU entre data do fato e acórdão confirmatório (antes da reforma que aumentou pena). Lei 12.234/2010: VEDOU prescrição retroativa APÓS acórdão CONDENATÓRIO que mantém ou aumenta pena. B correta. A incorreta - existe mas com limitações. C, D, E incorretas.",
      banca: "FGV",
      ano: 2023,
      cargo: "Delegado - PCRJ"
    },
    {
      id: "penal-ext-09",
      enunciado: "Quanto à decadência e à perempção, assinale a alternativa correta:",
      alternativas: {
        A: "Decadência e perempção são o mesmo instituto.",
        B: "Decadência (art. 107, IV + 103): perda do direito de QUEIXA (ação privada) - 6 meses do conhecimento da autoria. Perempção (art. 107, V + 60 CPP): extinção por negligência do querelante em ação privada.",
        C: "Decadência aplica-se a ação pública.",
        D: "Perempção aplica-se a ação pública.",
        E: "Prazo de decadência é de 1 ano."
      },
      gabarito: "B",
      explicacao: "CP, art. 107, IV-V: DECADÊNCIA: perda do direito de REPRESENTAÇÃO/QUEIXA pelo decurso do prazo (6 MESES do conhecimento da autoria - art. 103). Só ação PRIVADA/pública condicionada. PEREMPÇÃO (art. 107, V + CPP art. 60): extinção punibilidade por NEGLIGÊNCIA do querelante (ex: não comparece audiência, não promove andamento). Só ação PRIVADA. B correta. A, C, D, E incorretas.",
      banca: "CESPE",
      ano: 2023,
      cargo: "Delegado - PCDF"
    },
    {
      id: "penal-ext-10",
      enunciado: "Sobre o perdão judicial, é correto afirmar:",
      alternativas: {
        A: "Perdão judicial não está previsto no CP.",
        B: "Perdão judicial (art. 107, IX): juiz DEIXA DE APLICAR PENA em casos excepcionais previstos em lei (ex: art. 121, §5º - homicídio culposo com consequências graves ao agente). Sentença: DECLARATÓRIA da extinção (não condenatória). Não gera reincidência.",
        C: "Perdão judicial gera condenação.",
        D: "Gera reincidência.",
        E: "Juiz não pode conceder se lei não prever."
      },
      gabarito: "B",
      explicacao: "CP, art. 107, IX: PERDÃO JUDICIAL: juiz DEIXA de aplicar pena em casos excepcionais previstos em LEI. Ex: art. 121, §5º (homicídio culposo - consequências atingem agente), art. 129, §8º (lesão culposa), art. 176, §ú (moeda falsa). Súmula 18 STJ: sentença de perdão judicial é DECLARATÓRIA da extinção (NÃO condenatória) - não gera reincidência/antecedentes. B correta. A, C, D incorretas. E correta mas B mais completa.",
      banca: "FCC",
      ano: 2022,
      cargo: "Delegado - PCPE"
    }
  ]
};
