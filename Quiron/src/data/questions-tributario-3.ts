// Questões de Direito Tributário - TEMAS 7-9 (30 questões)
// Área Jurídica - Direito Tributário

export const questionsTributario3 = {
  // TEMA 7: Obrigação Tributária (10 questões)
  "obrigacao-tributaria": [
    {
      id: "tributario-obrig-01",
      enunciado: "Sobre o conceito de obrigação tributária (CTN, art. 113), é correto afirmar:",
      alternativas: {
        A: "Só existe obrigação tributária principal.",
        B: "Obrigação tributária: relação jurídica entre credor (Fisco) e devedor (contribuinte/responsável). Espécies: I) PRINCIPAL (dar dinheiro - pagar tributo/penalidade); II) ACESSÓRIA (fazer/não fazer/tolerar - deveres instrumentais, ex: emitir nota, declarar). Acessória independe da principal (art. 113, §3º).",
        C: "Obrigação acessória depende da principal.",
        D: "Obrigação acessória é apenas emitir nota fiscal.",
        E: "Não há obrigação de fazer no direito tributário."
      },
      gabarito: "B",
      explicacao: "CTN, art. 113: OBRIGAÇÃO TRIBUTÁRIA. §1º: PRINCIPAL: dar (pagar) tributo ou penalidade pecuniária. Surge com fato gerador. §2º: ACESSÓRIA: prestações positivas (fazer)/negativas (não fazer)/tolerância (tolerar), no interesse arrecadação/fiscalização. Ex: emitir nota, escriturar livros, apresentar declarações, manter documentos. §3º: obrigação acessória INDEPENDE da existência da principal - descumprimento converte em principal (multa). B correta. A, C, D, E incorretas.",
      banca: "CESPE",
      ano: 2023,
      cargo: "Auditor Fiscal - RFB"
    },
    {
      id: "tributario-obrig-02",
      enunciado: "Em relação ao fato gerador da obrigação tributária (CTN, arts. 114-118), assinale a alternativa INCORRETA:",
      alternativas: {
        A: "Fato gerador: situação definida em lei como necessária e suficiente para surgimento da obrigação.",
        B: "Fato gerador da obrigação principal: situação prevista em lei que faz nascer obrigação de pagar tributo.",
        C: "Fato gerador da obrigação acessória: situação que, na forma da legislação, impõe prática/abstenção de ato.",
        D: "Fato gerador só ocorre com ato lícito.",
        E: "CTN, art. 118: fato gerador considera-se ocorrido e existentes seus efeitos mesmo se ato/negócio jurídico for nulo/anulável."
      },
      gabarito: "D",
      explicacao: "CTN, art. 114: FATO GERADOR - situação definida em LEI como necessária e suficiente ao surgimento da obrigação tributária. Art. 115: PRINCIPAL - situação prevista que faz nascer obrigação de PAGAR tributo/penalidade. Art. 116: ACESSÓRIA - situação que impõe prática ou abstenção de ato. Art. 118: fato gerador considera-se OCORRIDO e existentes seus efeitos mesmo se ato/negócio for NULO, ANULÁVEL, INEFICAZ. Art. 3º: tributo NÃO é sanção ato ilícito (mas pode incidir sobre renda ilícita - pecunia non olet). D INCORRETA - fato gerador ocorre independente licitude ato. A, B, C, E corretas.",
      banca: "FCC",
      ano: 2023,
      cargo: "Auditor Fiscal - SEFAZ"
    },
    {
      id: "tributario-obrig-03",
      enunciado: "Quanto ao sujeito ativo da obrigação tributária (CTN, art. 119), é correto afirmar:",
      alternativas: {
        A: "Sujeito ativo é sempre o contribuinte.",
        B: "Sujeito ativo: pessoa jurídica de direito público titular da COMPETÊNCIA para exigir seu cumprimento. Regra: ente tributante (União, Estados, DF, Municípios). Pode ser: ente competente ou pessoa delegada (capacidade tributária ativa - ex: INSS, OAB).",
        C: "Sujeito ativo não pode ser delegado.",
        D: "Só a União pode ser sujeito ativo.",
        E: "Pessoa delegada não pode ser sujeito ativo."
      },
      gabarito: "B",
      explicacao: "CTN, art. 119: SUJEITO ATIVO: pessoa jurídica de direito PÚBLICO titular da COMPETÊNCIA para exigir cumprimento da obrigação tributária. REGRA: ente tributante (União, Estados, DF, Municípios). Art. 7º: capacidade tributária ativa (arrecadar/fiscalizar) é DELEGÁVEL - pessoa delegada torna-se sujeito ativo (ex: INSS cobra contribuições sociais, OAB cobra anuidades). B correta. A, C, D, E incorretas.",
      banca: "VUNESP",
      ano: 2023,
      cargo: "Auditor Fiscal - SEFAZ"
    },
    {
      id: "tributario-obrig-04",
      enunciado: "Sobre o sujeito passivo da obrigação tributária (CTN, arts. 121-123), assinale a alternativa correta:",
      alternativas: {
        A: "Só existe uma espécie de sujeito passivo.",
        B: "Sujeito passivo: obrigado ao pagamento do tributo/penalidade. Espécies: I) CONTRIBUINTE (relação pessoal/direta com fato gerador - art. 121, §único, I); II) RESPONSÁVEL (sem relação com fato gerador, mas lei atribui obrigação - art. 121, §único, II - ex: substituto tributário, responsável solidário).",
        C: "Contribuinte e responsável são a mesma coisa.",
        D: "Responsável pratica o fato gerador.",
        E: "Não existe responsabilidade tributária."
      },
      gabarito: "B",
      explicacao: "CTN, arts. 121-123: SUJEITO PASSIVO - pessoa obrigada ao pagamento tributo/penalidade pecuniária. ESPÉCIES (art. 121, §único): I) CONTRIBUINTE (direto): tem relação PESSOAL e DIRETA com fato gerador; II) RESPONSÁVEL (indireto): SEM relação pessoal/direta com fato gerador, mas lei atribui obrigação. Exemplos responsável: substituto tributário (ICMS ST), fonte pagadora (IR-fonte), responsável solidário (grupo econômico), adquirente (sucessão). B correta. A, C, D, E incorretas.",
      banca: "FGV",
      ano: 2023,
      cargo: "Auditor Fiscal - RFB"
    },
    {
      id: "tributario-obrig-05",
      enunciado: "Em relação à capacidade tributária passiva (CTN, art. 126), é INCORRETO afirmar:",
      alternativas: {
        A: "Capacidade tributária passiva: aptidão para ser sujeito passivo da obrigação tributária.",
        B: "Independe de capacidade civil (art. 126, I).",
        C: "Independe de estar pessoa sujeita a medidas privativas/limitativas de capacidade civil (art. 126, II).",
        D: "Capacidade tributária passiva depende de capacidade civil plena.",
        E: "Incapazes podem ser sujeitos passivos de obrigação tributária."
      },
      gabarito: "D",
      explicacao: "CTN, art. 126: CAPACIDADE TRIBUTÁRIA PASSIVA - aptidão para ser sujeito passivo da obrigação tributária. INDEPENDE: I) da capacidade CIVIL das pessoas naturais (incapaz pode ser sujeito passivo); II) de achar-se pessoa sujeita a medidas que importem privação ou limitação do exercício de atividades civis/comerciais/profissionais, ou capacidade jurídica. III) estar pessoa natural sujeita a medidas de privação/limitação capacidade civil. Exemplo: menor proprietário imóvel deve IPTU. D INCORRETA - INDEPENDE de capacidade civil. A, B, C, E corretas.",
      banca: "CESPE",
      ano: 2022,
      cargo: "Auditor Fiscal - RFB"
    },
    {
      id: "tributario-obrig-06",
      enunciado: "Quanto ao domicílio tributário (CTN, arts. 127-127-A), é correto afirmar:",
      alternativas: {
        A: "Domicílio tributário não existe.",
        B: "Domicílio tributário: local escolhido pela pessoa natural/jurídica para fins tributários (art. 127). Pode ser diverso do domicílio civil. Se não eleger ou for impossível local eleito, considera-se: residência habitual (pessoa natural), sede/principal estabelecimento (pessoa jurídica), ou local do fato gerador. Fisco pode recusar domicílio eleito se impossibilitar arrecadação/fiscalização.",
        C: "Domicílio tributário deve ser sempre o civil.",
        D: "Pessoa não pode escolher domicílio tributário.",
        E: "Fisco não pode recusar domicílio eleito."
      },
      gabarito: "B",
      explicacao: "CTN, art. 127: DOMICÍLIO TRIBUTÁRIO - pessoa natural/jurídica pode ELEGER local para fins tributários (pode ser diverso do domicílio civil). Se não eleger ou for impossível: I) pessoa natural - residência habitual ou local fato gerador; II) pessoa jurídica - sede/principal estabelecimento/local fato gerador. Art. 127-A (LC 104/01): autoridade pode RECUSAR domicílio eleito se IMPOSSIBILITAR/DIFICULTAR arrecadação/fiscalização. B correta. A, C, D, E incorretas.",
      banca: "FCC",
      ano: 2023,
      cargo: "Auditor Fiscal - SEFAZ"
    },
    {
      id: "tributario-obrig-07",
      enunciado: "Sobre a solidariedade tributária (CTN, arts. 124-125), assinale a alternativa INCORRETA:",
      alternativas: {
        A: "Solidariedade: duas ou mais pessoas são responsáveis pelo mesmo tributo.",
        B: "Hipóteses (art. 124): I) interesse comum na situação que constitui fato gerador; II) expressamente designados por lei.",
        C: "Benefício de ordem: solidário pode exigir que Fisco cobre primeiro do outro.",
        D: "Pagamento por um aproveita aos demais (art. 125, I).",
        E: "Isenção/remissão a um não aproveita os outros, salvo se fundamentada em situação pessoal (art. 125, II)."
      },
      gabarito: "C",
      explicacao: "CTN, art. 124: SOLIDARIEDADE - duas ou mais pessoas são responsáveis. HIPÓTESES: I) interesse COMUM na situação que constitui fato gerador; II) expressamente DESIGNADAS por lei. Art. 125: EFEITOS: I) pagamento efetuado por um APROVEITA aos demais; II) isenção/remissão concedida a um NÃO APROVEITA outros, SALVO se fundamentada em condição PESSOAL do beneficiado; III) interrupção prescrição por um favorece/prejudica os demais. NÃO há benefício de ordem (pode cobrar de qualquer). C INCORRETA - NÃO há benefício de ordem na solidariedade tributária. A, B, D, E corretas.",
      banca: "VUNESP",
      ano: 2022,
      cargo: "Auditor Fiscal - SEFAZ"
    },
    {
      id: "tributario-obrig-08",
      enunciado: "Em relação à responsabilidade tributária (CTN, arts. 128-138), é correto afirmar:",
      alternativas: {
        A: "Responsabilidade tributária não existe no CTN.",
        B: "Responsabilidade tributária: lei atribui obrigação a terceiro (responsável) sem relação direta com fato gerador. Espécies: I) substituição tributária (art. 150, §7º CF); II) transferência (sucessão, terceiros - arts. 129-138); III) solidariedade (art. 124). Responsável responde como se fosse contribuinte.",
        C: "Responsável não pode ser cobrado pelo tributo.",
        D: "Substituição tributária é inconstitucional.",
        E: "Responsabilidade só pode ser do contribuinte."
      },
      gabarito: "B",
      explicacao: "CTN, arts. 128-138: RESPONSABILIDADE TRIBUTÁRIA - lei atribui obrigação de pagar tributo a terceiro (RESPONSÁVEL) sem relação pessoal e direta com fato gerador. ESPÉCIES: I) SUBSTITUIÇÃO tributária (art. 150, §7º CF - ex: ICMS-ST, IR-fonte); II) TRANSFERÊNCIA - sucessão (arts. 129-133 - adquirente bens, espólio, sucessores), terceiros (arts. 134-135 - pais, tutores, administradores); III) SOLIDARIEDADE (art. 124). Responsável responde INTEGRALMENTE (como se fosse contribuinte). B correta. A, C, D, E incorretas.",
      banca: "FGV",
      ano: 2023,
      cargo: "Auditor Fiscal - RFB"
    },
    {
      id: "tributario-obrig-09",
      enunciado: "Quanto à substituição tributária (CF/88, art. 150, §7º), assinale a alternativa correta:",
      alternativas: {
        A: "Substituição tributária é inconstitucional.",
        B: "Substituição tributária: lei atribui a terceiro (substituto) responsabilidade pelo tributo relativo a fato gerador praticado por outrem (substituído). CF, art. 150, §7º: autoriza. Espécies: progressiva/'para frente' (fato futuro - ICMS-ST); regressiva/'para trás' (fato passado); concomitante (fato simultâneo). ICMS-ST: fato presumido - se base cálculo > real, não devolve (Súmula 547 STJ); se < real, complementa.",
        C: "Substituição tributária não pode ser 'para frente'.",
        D: "Se base de cálculo presumida > real, deve devolver diferença.",
        E: "Substituição tributária só existe no IR."
      },
      gabarito: "B",
      explicacao: "CF/88, art. 150, §7º: lei pode atribuir a sujeito passivo de obrigação tributária condição de responsável pelo pagamento de tributo cujo fato gerador deva ocorrer posteriormente (SUBSTITUIÇÃO TRIBUTÁRIA). ESPÉCIES: I) PROGRESSIVA/'para frente': fato futuro presumido (ICMS-ST); II) REGRESSIVA/'para trás': fato passado; III) CONCOMITANTE: simultâneo. ICMS-ST (Lei 87/96, art. 10): pauta fiscal. Súmula 546 STJ: não devolve se BC > real; Tema 201 STF: complementa se BC < real. B correta. A, C, D, E incorretas.",
      banca: "CESPE",
      ano: 2023,
      cargo: "Auditor Fiscal - RFB"
    },
    {
      id: "tributario-obrig-10",
      enunciado: "Sobre a responsabilidade dos sucessores (CTN, arts. 129-133), é INCORRETO afirmar:",
      alternativas: {
        A: "Sucessão: transferência de responsabilidade tributária ao adquirente/sucessor.",
        B: "Art. 130: adquirente de imóvel responde pelos tributos do imóvel (IPTU, ITR) relativos ao bem.",
        C: "Art. 131: sucessores respondem pelos tributos do de cujus (espólio, herdeiros, legatários - até força herança).",
        D: "Adquirente de fundo de comércio/estabelecimento não responde por tributos do alienante.",
        E: "Art. 133: adquirente/remitente de estabelecimento responde integralmente se alienante continuar exploração ou cessar em 6 meses."
      },
      gabarito: "D",
      explicacao: "CTN, arts. 129-133: RESPONSABILIDADE DOS SUCESSORES. Art. 130: IMÓVEIS - adquirente responde por tributos do IMÓVEL (IPTU, ITR). Art. 131: de cujus - SUCESSORES (espólio, herdeiros, legatários) respondem até força da herança. Art. 132: UNIÃO/Estados/Municípios - sucessores respondem. Art. 133: adquirente/remitente FUNDO DE COMÉRCIO/ESTABELECIMENTO responde INTEGRALMENTE se alienante CONTINUAR exploração ou CESSAR em 6 MESES; SUBSIDIARIAMENTE se alienante cessar após 6 meses. D INCORRETA - adquirente SIM responde (art. 133). A, B, C, E corretas.",
      banca: "FCC",
      ano: 2022,
      cargo: "Auditor Fiscal - SEFAZ"
    }
  ],

  // TEMA 8: Crédito Tributário (10 questões)
  "credito-tributario": [
    {
      id: "tributario-cred-01",
      enunciado: "Sobre o conceito de crédito tributário (CTN, art. 139), é correto afirmar:",
      alternativas: {
        A: "Crédito tributário surge com o fato gerador.",
        B: "Crédito tributário: obrigação tributária LÍQUIDA E CERTA (art. 139). Surge com o LANÇAMENTO (art. 142). Fato gerador → obrigação tributária. Lançamento → crédito tributário (obrigação líquida, certa, exigível). Natureza declaratória (STJ) - declara obrigação preexistente.",
        C: "Crédito tributário e obrigação tributária são o mesmo.",
        D: "Lançamento cria a obrigação tributária.",
        E: "Crédito tributário não precisa de lançamento."
      },
      gabarito: "B",
      explicacao: "CTN, art. 139: CRÉDITO TRIBUTÁRIO: obrigação tributária principal LÍQUIDA E CERTA. Art. 142: surge com LANÇAMENTO. SEQUÊNCIA: 1) FATO GERADOR (hipótese de incidência realizada); 2) OBRIGAÇÃO TRIBUTÁRIA (dever de pagar); 3) LANÇAMENTO; 4) CRÉDITO TRIBUTÁRIO (obrigação líquida, certa, exigível - pode cobrar). NATUREZA do lançamento: DECLARATÓRIA (não constitutiva - STJ) - declara obrigação preexistente. Difere obrigação (abstrata) de crédito (concreta). B correta. A, C, D, E incorretas.",
      banca: "CESPE",
      ano: 2023,
      cargo: "Auditor Fiscal - RFB"
    },
    {
      id: "tributario-cred-02",
      enunciado: "Em relação ao lançamento tributário (CTN, arts. 142-150), assinale a alternativa INCORRETA:",
      alternativas: {
        A: "Lançamento: procedimento administrativo que verifica ocorrência fato gerador, determina matéria tributável, calcula montante, identifica sujeito passivo, propõe penalidade.",
        B: "Lançamento compete privativamente à autoridade administrativa (art. 142, §único).",
        C: "Natureza: declaratória (STJ - declara obrigação preexistente, não constitui).",
        D: "Lançamento pode ser feito pelo contribuinte.",
        E: "Modalidades: ofício, declaração, homologação."
      },
      gabarito: "D",
      explicacao: "CTN, art. 142: LANÇAMENTO - procedimento administrativo tendente a: I) verificar ocorrência fato gerador; II) determinar matéria tributável; III) calcular montante tributo devido; IV) identificar sujeito passivo; V) propor penalidade (se caso). §único: compete PRIVATIVAMENTE à AUTORIDADE ADMINISTRATIVA (não ao contribuinte - ele pode declarar, mas lançamento é do Fisco). MODALIDADES (arts. 147-150): ofício (Fisco faz tudo), declaração (contribuinte declara, Fisco lança), homologação (contribuinte antecipa/calcula, Fisco homologa). D INCORRETA - lançamento é privativo do Fisco. A, B, C, E corretas.",
      banca: "FCC",
      ano: 2023,
      cargo: "Auditor Fiscal - SEFAZ"
    },
    {
      id: "tributario-cred-03",
      enunciado: "Quanto ao lançamento por homologação (CTN, art. 150), é correto afirmar:",
      alternativas: {
        A: "Lançamento por homologação não existe.",
        B: "Lançamento por homologação (autolançamento): tributos cuja legislação atribui ao sujeito passivo o dever de ANTECIPAR pagamento sem prévio exame autoridade. Contribuinte calcula e paga. Fisco HOMOLOGA (expressa - ato formal, ou tácita - 5 anos - art. 150, §4º). Exemplos: IR, ICMS, IPI, ISS, PIS, COFINS.",
        C: "Fisco calcula o tributo no lançamento por homologação.",
        D: "Homologação sempre é expressa.",
        E: "Prazo de homologação tácita é de 10 anos."
      },
      gabarito: "B",
      explicacao: "CTN, art. 150: LANÇAMENTO POR HOMOLOGAÇÃO (autolançamento): legislação atribui ao sujeito passivo dever de ANTECIPAR pagamento SEM prévio exame autoridade administrativa. SUJEITO PASSIVO: apura matéria tributável, calcula, paga. FISCO: HOMOLOGA (confere). §1º: pagamento antecipado extingue crédito, sob condição resolutória de homologação. §4º: não homologando/não impugnando em 5 ANOS: HOMOLOGAÇÃO TÁCITA. EXEMPLOS: IR, ICMS, IPI, ISS, PIS, COFINS. B correta. A, C, D, E incorretas.",
      banca: "VUNESP",
      ano: 2023,
      cargo: "Auditor Fiscal - SEFAZ"
    },
    {
      id: "tributario-cred-04",
      enunciado: "Sobre as modalidades de suspensão do crédito tributário (CTN, art. 151), assinale a alternativa correta:",
      alternativas: {
        A: "Suspensão extingue o crédito tributário.",
        B: "Suspensão (art. 151): impede exigibilidade do crédito (Fisco não pode cobrar). Hipóteses: I) moratória; II) depósito integral; III) reclamações/recursos administrativos; IV) liminar/tutela antecipada; V) parcelamento. Crédito existe, mas não pode ser cobrado. Cessada suspensão: volta exigibilidade.",
        C: "Suspensão e extinção são o mesmo.",
        D: "Recurso administrativo não suspende exigibilidade.",
        E: "Suspensão elimina o crédito tributário."
      },
      gabarito: "B",
      explicacao: "CTN, art. 151: SUSPENSÃO DA EXIGIBILIDADE do crédito tributário (crédito existe mas não pode ser COBRADO). HIPÓTESES: I) MORATÓRIA; II) DEPÓSITO do montante INTEGRAL; III) reclamações e RECURSOS administrativos; IV) concessão de liminar/tutela ANTECIPADA; V) PARCELAMENTO. Efeitos: impede cobrança, inscrição dívida ativa, ajuizamento execução. Cessada causa suspensão: volta exigibilidade. DIFERE de EXTINÇÃO (art. 156 - elimina crédito). B correta. A, C, D, E incorretas.",
      banca: "FGV",
      ano: 2023,
      cargo: "Auditor Fiscal - RFB"
    },
    {
      id: "tributario-cred-05",
      enunciado: "Em relação às modalidades de extinção do crédito tributário (CTN, art. 156), é INCORRETO afirmar:",
      alternativas: {
        A: "Extinção: elimina o crédito tributário definitivamente.",
        B: "Hipóteses (art. 156): pagamento, compensação, transação, remissão, prescrição/decadência, conversão depósito em renda, consignação em pagamento, decisão administrativa irreformável, decisão judicial transitada, dação em pagamento em bens imóveis, pagamento antecipado/homologação (lançamento por homologação).",
        C: "Parcelamento extingue o crédito tributário.",
        D: "Pagamento é a forma mais comum de extinção.",
        E: "Prescrição e decadência extinguem o crédito."
      },
      gabarito: "C",
      explicacao: "CTN, art. 156: EXTINÇÃO do crédito tributário (elimina definitivamente). HIPÓTESES (11): I) PAGAMENTO; II) COMPENSAÇÃO; III) TRANSAÇÃO; IV) REMISSÃO; V) PRESCRIÇÃO e DECADÊNCIA; VI) conversão DEPÓSITO em renda; VII) CONSIGNAÇÃO em pagamento; VIII) decisão administrativa IRREFORMÁVEL favorável; IX) decisão JUDICIAL passada em julgado favorável; X) DAÇÃO EM PAGAMENTO em bens imóveis (LC 104/01); XI) pagamento ANTECIPADO + HOMOLOGAÇÃO (lançamento homologação - §único). PARCELAMENTO: SUSPENDE (art. 151, VI), não extingue. C INCORRETA. A, B, D, E corretas.",
      banca: "CESPE",
      ano: 2022,
      cargo: "Auditor Fiscal - RFB"
    },
    {
      id: "tributario-cred-06",
      enunciado: "Quanto à prescrição tributária (CTN, art. 174 e LC 118/2005), é correto afirmar:",
      alternativas: {
        A: "Prescrição tributária é de 10 anos.",
        B: "Prescrição: perda do direito de COBRAR (ação de execução fiscal) o crédito constituído. Prazo: 5 ANOS contados da constituição definitiva do crédito (art. 174 - LC 118/05). Interrupção: despacho que ordena citação (art. 174, §único, I); protesto judicial; atos inequívocos (confissão dívida, parcelamento). Prescrição intercorrente: Súmula 314 STJ.",
        C: "Prazo começa do fato gerador.",
        D: "Prescrição não pode ser interrompida.",
        E: "Prescrição intercorrente não existe."
      },
      gabarito: "B",
      explicacao: "CTN, art. 174 (LC 118/2005): PRESCRIÇÃO - perda direito de COBRAR judicialmente crédito (ação execução fiscal). PRAZO: 5 ANOS contados da constituição DEFINITIVA do crédito (lançamento notificado + fim prazo impugnação/recurso). §único: INTERRUPÇÃO: I) despacho JUIZ que ordena citação em execução fiscal; II) protesto judicial; III) atos inequívocos (reconhecimento dívida, parcelamento). Súmula 314 STJ: prescrição INTERCORRENTE (durante execução fiscal - arquivamento > 5 anos). B correta. A, C, D, E incorretas.",
      banca: "FCC",
      ano: 2023,
      cargo: "Auditor Fiscal - SEFAZ"
    },
    {
      id: "tributario-cred-07",
      enunciado: "Sobre a decadência tributária (CTN, art. 173 e 150, §4º), assinale a alternativa INCORRETA:",
      alternativas: {
        A: "Decadência: perda do direito de CONSTITUIR (lançar) o crédito tributário.",
        B: "Prazo: 5 anos. Art. 173, I: do 1º dia exercício seguinte ao que lançamento poderia ser efetuado (tributos lançamento ofício/declaração). Art. 150, §4º: do fato gerador (lançamento homologação, se não houver pagamento).",
        C: "Decadência ocorre após o lançamento.",
        D: "Decadência não se interrompe nem se suspende (salvo art. 173, II).",
        E: "Súmula 555 STJ: decadência conta do fato gerador se contribuinte não declara."
      },
      gabarito: "C",
      explicacao: "CTN: DECADÊNCIA - perda do direito de LANÇAR (constituir) o crédito. PRAZOS (5 anos): Art. 173, I: do 1º dia exercício SEGUINTE que lançamento poderia ser efetuado (ofício/declaração). Art. 150, §4º: do FATO GERADOR (homologação, se NÃO houve pagamento ou este inferior). Art. 173, II: data ato/fato que deu causa (anulação lançamento). Súmula 555 STJ: lançamento homologação sem declaração/pagamento: decadência conta do fato gerador (5 anos). NÃO se interrompe/suspende (regra). C INCORRETA - decadência ocorre ANTES do lançamento. A, B, D, E corretas.",
      banca: "VUNESP",
      ano: 2022,
      cargo: "Auditor Fiscal - SEFAZ"
    },
    {
      id: "tributario-cred-08",
      enunciado: "Em relação à compensação tributária (CTN, art. 170), é correto afirmar:",
      alternativas: {
        A: "Compensação tributária não é forma de extinção do crédito.",
        B: "Compensação: extinção de crédito tributário até montante de créditos líquidos/certos/vencidos que contribuinte tenha contra Fazenda (art. 170). Requisitos: lei específica, créditos líquidos/certos/vencidos, mesmo ente. Lei 10.637/02 e 10.833/03: PIS/COFINS não-cumulativos (sistema créditos). Súmula 213 TFR: compensação entre tributos diferentes, mesmo ente.",
        C: "Compensação pode ser feita entre tributos de entes diferentes.",
        D: "Compensação independe de lei.",
        E: "Só pode compensar tributos iguais."
      },
      gabarito: "B",
      explicacao: "CTN, art. 170: COMPENSAÇÃO - extinção de créditos tributários com créditos líquidos e certos, vencidos ou vincendos, do sujeito passivo contra Fazenda. REQUISITOS: lei autorizar, créditos líquidos/certos/vencidos, MESMO ente (não compensa federal com estadual). Art. 170-A (LC 104/01): vedada compensação mediante aproveitamento de tributo pago indevidamente quando VENCIDO prazo ressarcimento ou restituição. Súmula 213 TFR: pode compensar tributos DIFERENTES, mesmo ente. PIS/COFINS não-cumulativo: sistema créditos. B correta. A, C, D, E incorretas.",
      banca: "FGV",
      ano: 2023,
      cargo: "Auditor Fiscal - RFB"
    },
    {
      id: "tributario-cred-09",
      enunciado: "Quanto às garantias e privilégios do crédito tributário (CTN, arts. 183-193), assinale a alternativa correta:",
      alternativas: {
        A: "Crédito tributário não tem privilégios.",
        B: "Crédito tributário: preferências (arts. 186-188). Art. 186: prefere a qualquer outro, salvo: trabalhistas e acidentes trabalho (prioritários). Ordem: trabalhistas/acidente, tributários, demais (art. 186). Art. 185-A (LC 118/05): presunção de fraude alienação/oneração bens por sujeito passivo em débito inscrito dívida ativa.",
        C: "Crédito trabalhista não prefere ao tributário.",
        D: "Crédito tributário não tem preferência sobre créditos civis.",
        E: "Não há presunção de fraude em alienação de bens."
      },
      gabarito: "B",
      explicacao: "CTN, arts. 183-193: GARANTIAS E PRIVILÉGIOS DO CRÉDITO TRIBUTÁRIO. Art. 186: crédito tributário PREFERE a qualquer outro, SALVO: I) créditos decorrentes da legislação do TRABALHO; II) créditos com garantia REAL (até limite). ORDEM (art. 186): 1º) trabalhistas e acidente trabalho; 2º) tributários; 3º) demais. Art. 185-A (LC 118/05): PRESUNÇÃO DE FRAUDE - alienação/oneração de bens por sujeito passivo em débito para com Fazenda (inscrito dívida ativa). B correta. A, C, D, E incorretas.",
      banca: "CESPE",
      ano: 2023,
      cargo: "Auditor Fiscal - RFB"
    },
    {
      id: "tributario-cred-10",
      enunciado: "Sobre a exclusão do crédito tributário (CTN, arts. 175-182), é INCORRETO afirmar:",
      alternativas: {
        A: "Exclusão: impede constituição do crédito tributário.",
        B: "Modalidades (art. 175): isenção e anistia.",
        C: "Isenção: dispensa legal do pagamento do tributo (fato gerador ocorre, mas lei dispensa pagamento).",
        D: "Anistia: perdão da multa (penalidade pecuniária - não do tributo).",
        E: "Exclusão extingue o crédito tributário após constituído."
      },
      gabarito: "E",
      explicacao: "CTN, arts. 175-182: EXCLUSÃO do crédito tributário - IMPEDE constituição (lançamento) do crédito. MODALIDADES (art. 175): I) ISENÇÃO (arts. 176-179); II) ANISTIA (arts. 180-182). ISENÇÃO: dispensa LEGAL do pagamento do TRIBUTO - fato gerador OCORRE mas lei dispensa pagamento (não incidência - difere de imunidade: fato não ocorre). ANISTIA: perdão/exclusão de MULTA (penalidade pecuniária - não do tributo principal). Art. 182: não se aplica a infrações dolosas. E INCORRETA - exclusão impede constituição, NÃO extingue crédito já constituído (extinção: art. 156). A, B, C, D corretas.",
      banca: "FCC",
      ano: 2022,
      cargo: "Auditor Fiscal - SEFAZ"
    }
  ],

  // TEMA 9: Administração Tributária (10 questões)
  "administracao-tributaria": [
    {
      id: "tributario-adm-01",
      enunciado: "Sobre a fiscalização tributária (CTN, arts. 194-200), é correto afirmar:",
      alternativas: {
        A: "Fiscalização tributária é facultativa.",
        B: "Fiscalização: autoridade administrativa pode examinar livros, documentos, papéis, efeitos comerciais/mercadorias de comerciante/industrial/produtor/contribuinte (art. 195). Sigilo funcional (art. 198): vedada divulgação informações (exceções: troca com Fazendas, requisição judicial). Recusa exibição: presunção veracidade fatos/condições declarados pelo Fisco.",
        C: "Fisco não pode examinar documentos do contribuinte.",
        D: "Informações fiscais podem ser divulgadas livremente.",
        E: "Recusa de exibição não tem consequências."
      },
      gabarito: "B",
      explicacao: "CTN, arts. 194-200: FISCALIZAÇÃO TRIBUTÁRIA. Art. 195: autoridade administrativa pode EXAMINAR mercadorias, livros, arquivos, documentos, papéis, efeitos comerciais/mercadorias, cofres, caixas, depósitos do sujeito passivo/terceiros. Art. 198: SIGILO - vedada divulgação de informações, SALVO: I) requisição judicial; II) solicitação Ministério Público; III) troca entre Fazendas. Art. 195, §2º: recusa exibição: PRESUNÇÃO veracidade fatos declarados pelo Fisco. B correta. A, C, D, E incorretas.",
      banca: "CESPE",
      ano: 2023,
      cargo: "Auditor Fiscal - RFB"
    },
    {
      id: "tributario-adm-02",
      enunciado: "Em relação à dívida ativa tributária (CTN, arts. 201-204 e Lei 6.830/80), assinale a alternativa INCORRETA:",
      alternativas: {
        A: "Dívida ativa: crédito tributário não pago no prazo, inscrito após vencimento.",
        B: "Inscrição: ato de controle administrativo da legalidade (art. 202). Termo de inscrição: CDA - Certidão Dívida Ativa (título executivo extrajudicial).",
        C: "CDA dispensa prova do crédito (presunção relativa de certeza/liquidez - art. 204).",
        D: "Dívida ativa só pode ser cobrada administrativamente.",
        E: "Lei 6.830/80: Lei de Execuções Fiscais - regula cobrança judicial."
      },
      gabarito: "D",
      explicacao: "CTN, arts. 201-204 e Lei 6.830/80 (LEF): DÍVIDA ATIVA TRIBUTÁRIA - crédito tributário definitivamente constituído, não pago, INSCRITO após vencimento. Art. 202: INSCRIÇÃO - ato controle administrativo legalidade (requisitos: valor, origem, natureza, fundamentação legal, nome/domicílio devedor). Art. 201, §3º: CERTIDÃO DÍVIDA ATIVA (CDA) - título executivo EXTRAJUDICIAL (art. 204 CTN e 585, VII CPC). Goza PRESUNÇÃO RELATIVA certeza/liquidez (art. 204). LEF: regula EXECUÇÃO FISCAL (cobrança JUDICIAL). D INCORRETA - dívida ativa é cobrada JUDICIALMENTE (execução fiscal). A, B, C, E corretas.",
      banca: "FCC",
      ano: 2023,
      cargo: "Auditor Fiscal - SEFAZ"
    },
    {
      id: "tributario-adm-03",
      enunciado: "Quanto às certidões negativas (CTN, art. 205-208), é correto afirmar:",
      alternativas: {
        A: "Certidão negativa não é obrigatória.",
        B: "Certidão negativa: prova regularidade fiscal do contribuinte (art. 205). Autoridade deve fornecer em 10 DIAS (art. 205, §único). Certidão POSITIVA COM EFEITOS DE NEGATIVA (art. 206): quando há débitos com exigibilidade SUSPENSA ou GARANTIDOS (penhora, depósito). Tem mesmos efeitos de negativa.",
        C: "Prazo para fornecimento é de 30 dias.",
        D: "Débito suspenso impede certidão negativa.",
        E: "Certidão positiva com efeitos de negativa não existe."
      },
      gabarito: "B",
      explicacao: "CTN, arts. 205-208: CERTIDÕES NEGATIVAS. Art. 205: direito do contribuinte; autoridade deve fornecer em 10 DIAS da data de entrada do requerimento. Prova REGULARIDADE fiscal (quitação tributos). Art. 206: CERTIDÃO POSITIVA COM EFEITOS DE NEGATIVA - quando existirem créditos: I) com exigibilidade SUSPENSA (art. 151); II) GARANTIDOS (penhora, depósito). Produz MESMOS EFEITOS de certidão negativa. Art. 208: falsa certidão: responsabilidade funcionário. B correta. A, C, D, E incorretas.",
      banca: "VUNESP",
      ano: 2023,
      cargo: "Auditor Fiscal - SEFAZ"
    },
    {
      id: "tributario-adm-04",
      enunciado: "Sobre o sigilo bancário e fiscal (LC 105/2001 e CTN, art. 198), assinale a alternativa correta:",
      alternativas: {
        A: "Fisco não pode ter acesso a informações bancárias.",
        B: "LC 105/2001: autoridades/agentes fiscais podem examinar documentos, livros e registros de instituições financeiras (art. 5º), independente de autorização judicial (art. 6º). STF (RE 601.314): constitucional - não viola sigilo bancário (troca de sigilo - fiscal já tem sigilo art. 198 CTN). Uso exclusivo fiscalização/cobrança tributos.",
        C: "Quebra de sigilo bancário pelo Fisco exige autorização judicial.",
        D: "Informações bancárias transferidas ao Fisco podem ser divulgadas.",
        E: "LC 105/2001 foi declarada inconstitucional."
      },
      gabarito: "B",
      explicacao: "LC 105/2001: acesso do FISCO a informações bancárias. Art. 5º: autoridades/agentes fiscais podem examinar documentos, livros, registros de instituições financeiras. Art. 6º: INDEPENDE de autorização JUDICIAL (não é 'quebra' - é transferência sigilo). STF, RE 601.314 (repercussão geral - 2016): CONSTITUCIONAL - não viola sigilo bancário (há 'transferência' sigilo - Fisco tem dever sigilo art. 198 CTN). Uso: exclusivo fiscalização/cobrança tributos. Divulgação: vedada (art. 198). B correta. A, C, D, E incorretas.",
      banca: "FGV",
      ano: 2023,
      cargo: "Auditor Fiscal - RFB"
    },
    {
      id: "tributario-adm-05",
      enunciado: "Em relação ao processo administrativo fiscal (Decreto 70.235/72), é INCORRETO afirmar:",
      alternativas: {
        A: "Processo administrativo fiscal: inicia com lavratura de auto de infração ou notificação de lançamento.",
        B: "Contribuinte tem direito a impugnação/defesa (contraditório e ampla defesa).",
        C: "Julgamento: 1ª instância (Delegacia de Julgamento/DRJ), 2ª instância (CARF - Conselho Administrativo Recursos Fiscais).",
        D: "Decisão administrativa definitiva não pode ser revista judicialmente.",
        E: "Súmula Vinculante 21 STF: decisão admin. definitiva favorável ao contribuinte não impede União de discutir judicialmente mesma matéria."
      },
      gabarito: "D",
      explicacao: "PROCESSO ADMINISTRATIVO FISCAL: Decreto 70.235/72 (federal), leis estaduais/municipais. INÍCIO: lavratura AUTO DE INFRAÇÃO ou notificação lançamento. DEFESA: contribuinte tem 30 dias para IMPUGNAÇÃO (contraditório, ampla defesa - CF, art. 5º, LV). JULGAMENTO: 1ª instância - DRJ (Delegacia Receita Julgamento); 2ª instância - CARF (Conselho Administrativo Recursos Fiscais - ex-Câmaras). D INCORRETA - decisão administrativa NÃO impede revisão JUDICIAL (inafastabilidade jurisdição - art. 5º, XXXV CF). SV 21 STF: decisão favorável contribuinte não impede União discutir judicialmente. A, B, C, E corretas.",
      banca: "CESPE",
      ano: 2022,
      cargo: "Auditor Fiscal - RFB"
    },
    {
      id: "tributario-adm-06",
      enunciado: "Quanto ao lançamento por arbitramento (CTN, art. 148), é correto afirmar:",
      alternativas: {
        A: "Lançamento por arbitramento não existe.",
        B: "Lançamento por arbitramento: modalidade EXCEPCIONAL quando não é possível conhecer base de cálculo diretamente (art. 148). Hipóteses: recusa exibição livros/documentos, falta escrituração/documentos, livros/documentos imprestáveis, dolo/fraude/simulação. Fisco arbitra base de cálculo (presunções legais, indícios). Subsidiário.",
        C: "Arbitramento é modalidade comum de lançamento.",
        D: "Arbitramento ocorre quando contribuinte declara corretamente.",
        E: "Fisco não pode arbitrar base de cálculo."
      },
      gabarito: "B",
      explicacao: "CTN, art. 148: LANÇAMENTO POR ARBITRAMENTO - modalidade EXCEPCIONAL/SUBSIDIÁRIA quando não se conhecer/não merecer fé bases de cálculo expressas na declaração. HIPÓTESES (I-III): I) recusa exibição livros/documentos à fiscalização; II) não apresentação/apresentação deficiente de declaração; III) omissão/inadequação escrituração/documentos (dolo, fraude, simulação); IV) livros/documentos imprestáveis à fiscalização. FISCO: arbitra base de cálculo mediante presunções legais, indícios (pauta fiscal, margem lucro setor, consumo energia, etc.). B correta. A, C, D, E incorretas.",
      banca: "FCC",
      ano: 2023,
      cargo: "Auditor Fiscal - SEFAZ"
    },
    {
      id: "tributario-adm-07",
      enunciado: "Sobre a denúncia espontânea (CTN, art. 138), assinale a alternativa INCORRETA:",
      alternativas: {
        A: "Denúncia espontânea: contribuinte confessa débito e paga antes de qualquer procedimento fiscal.",
        B: "Efeito: exclui responsabilidade por infrações (não paga multa, só tributo + juros).",
        C: "Requisitos: espontaneidade (antes de fiscal chegar), pagamento integral ou depósito, ou parcelamento (Súmula 360 STJ - com Reforma 2017).",
        D: "Denúncia espontânea exclui responsabilidade pelo tributo principal.",
        E: "Iniciado procedimento fiscal: não cabe denúncia espontânea."
      },
      gabarito: "D",
      explicacao: "CTN, art. 138: DENÚNCIA ESPONTÂNEA - responsabilidade por INFRAÇÕES (multas) é EXCLUÍDA se contribuinte, antes de qualquer procedimento administrativo ou medida fiscalização, procura autoridade e confessa débito, pagando tributo + JUROS (ou deposita, ou parcela). EFEITO: NÃO paga MULTA. Mas paga: TRIBUTO + JUROS. Súmula 360 STJ (após Lei 13.496/17): 'Não impede denúncia espontânea parcelamento iniciado'. REQUISITOS: espontaneidade (antes de início fiscal), pagamento/depósito/parcelamento. D INCORRETA - exclui MULTA, não tributo principal. A, B, C, E corretas.",
      banca: "VUNESP",
      ano: 2022,
      cargo: "Auditor Fiscal - SEFAZ"
    },
    {
      id: "tributario-adm-08",
      enunciado: "Em relação à consulta tributária (CTN, art. 161, §2º), é correto afirmar:",
      alternativas: {
        A: "Consulta tributária não suspende exigibilidade do crédito.",
        B: "Consulta: contribuinte formula DÚVIDA sobre interpretação/aplicação da legislação tributária à autoridade administrativa (art. 161, §2º). Durante tramitação consulta: SUSPENDE prazo de recolhimento (se formulada antes vencimento). Resposta obriga Fisco. Se contribuinte age conforme resposta: não pode ser penalizado.",
        C: "Resposta da consulta não vincula o Fisco.",
        D: "Consulta não protege contribuinte de penalidades.",
        E: "Consulta só pode ser feita após lançamento."
      },
      gabarito: "B",
      explicacao: "CTN, art. 161, §2º e legislações (Decreto 70.235/72, art. 46, leis estaduais/municipais): CONSULTA TRIBUTÁRIA - contribuinte formula DÚVIDA sobre interpretação e aplicação legislação tributária. EFEITOS: I) SUSPENDE prazo inicial de recolhimento (se antes vencimento); II) resposta VINCULA o Fisco; III) contribuinte que age conforme resposta: NÃO pode ser PENALIZADO (mesmo se depois resposta for reformada - direito adquirido). Consulta: antes fiscalização (se após, não produz efeitos suspensivos). B correta. A, C, D, E incorretas.",
      banca: "FGV",
      ano: 2023,
      cargo: "Auditor Fiscal - RFB"
    },
    {
      id: "tributario-adm-09",
      enunciado: "Quanto à repetição de indébito tributário (CTN, arts. 165-169), assinale a alternativa correta:",
      alternativas: {
        A: "Tributo pago indevidamente não pode ser restituído.",
        B: "Repetição de indébito: direito à restituição de tributo pago indevida/excessivamente (art. 165). Legitimado: contribuinte (quem PAGA tributo - Súmula 546 STF: substituído não tem legitimidade se repercussão jurídica). Prazo: 5 ANOS da extinção do crédito (art. 168). Correção monetária + juros.",
        C: "Prazo para restituição é de 10 anos.",
        D: "Substituído tributário sempre pode pedir restituição.",
        E: "Restituição não inclui correção monetária."
      },
      gabarito: "B",
      explicacao: "CTN, arts. 165-169: REPETIÇÃO DE INDÉBITO - restituição de tributos pagos indevida/excessivamente. Art. 165: direito à restituição. LEGITIMADO: art. 166 - contribuinte (quem PAGA). Súmula 546 STF: substituído tributário NÃO tem legitimidade se houve repercussão jurídica (tributo transferido a preço). PRAZO: 5 ANOS da extinção do crédito (art. 168). Art. 167: CORREÇÃO MONETÁRIA + JUROS na restituição. B correta. A, C, D, E incorretas.",
      banca: "CESPE",
      ano: 2023,
      cargo: "Auditor Fiscal - RFB"
    },
    {
      id: "tributario-adm-10",
      enunciado: "Sobre a transação tributária (CTN, art. 171 e Lei 13.988/2020), é INCORRETO afirmar:",
      alternativas: {
        A: "Transação: acordo entre Fisco e contribuinte, com concessões mútuas, para terminar litígio/prevenir.",
        B: "Lei 13.988/2020: regulamentou transação tributária federal (PGFN). Pode incluir: descontos, parcelamento especial, dação em pagamento.",
        C: "Transação extingue o crédito tributário (art. 156, III CTN).",
        D: "Transação tributária não é permitida no Brasil.",
        E: "Transação pode ser individual ou por adesão (editais)."
      },
      gabarito: "D",
      explicacao: "CTN, art. 171: TRANSAÇÃO - Fazenda e sujeito passivo fazem CONCESSÕES MÚTUAS para terminar litígio ou prevenir. Lei 13.988/2020: regulamentou TRANSAÇÃO TRIBUTÁRIA federal (PGFN - Procuradoria Geral Fazenda Nacional). Pode incluir: descontos, parcelamentos especiais, dação em pagamento, uso créditos, novação. MODALIDADES: individual (caso a caso) ou por adesão (editais). Art. 156, III: transação EXTINGUE crédito tributário. D INCORRETA - transação É permitida (Lei 13.988/20). A, B, C, E corretas.",
      banca: "FCC",
      ano: 2022,
      cargo: "Auditor Fiscal - SEFAZ"
    }
  ]
};
