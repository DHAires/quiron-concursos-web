// Questões de Direito Tributário - TEMAS 1-3 (30 questões)
// Área Jurídica - Direito Tributário

export const questionsTributario1 = {
  // TEMA 1: Sistema Tributário Nacional (10 questões)
  "sistema-tributario-nacional": [
    {
      id: "tributario-stn-01",
      enunciado: "Sobre o Sistema Tributário Nacional previsto na CF/88 (arts. 145-162), é correto afirmar:",
      alternativas: {
        A: "Sistema Tributário Nacional não está na Constituição.",
        B: "CF/88, arts. 145-162: Sistema Tributário Nacional (STN) - conjunto de normas constitucionais sobre tributos. União, Estados, DF e Municípios podem instituir: impostos, taxas e contribuição de melhoria (art. 145). Empréstimos compulsórios e contribuições especiais: só União (arts. 148-149).",
        C: "Estados podem instituir empréstimos compulsórios.",
        D: "Municípios podem criar contribuições sociais.",
        E: "Não há diferença entre tributos federais, estaduais e municipais."
      },
      gabarito: "B",
      explicacao: "CF/88, arts. 145-162: SISTEMA TRIBUTÁRIO NACIONAL. Art. 145: União, Estados, DF, Municípios podem instituir: I) IMPOSTOS; II) TAXAS (poder de polícia ou serviço público); III) CONTRIBUIÇÃO DE MELHORIA (valorização imobiliária por obra pública). Art. 148: EMPRÉSTIMOS COMPULSÓRIOS - só UNIÃO (guerra/calamidade ou investimento urgente). Art. 149: CONTRIBUIÇÕES ESPECIAIS (sociais, intervenção domínio econômico, categorias profissionais) - só UNIÃO (exceto §1º - Estados/DF/Municípios contribuição previdência servidores). B correta. A, C, D, E incorretas.",
      banca: "CESPE",
      ano: 2023,
      cargo: "Auditor Fiscal - RFB"
    },
    {
      id: "tributario-stn-02",
      enunciado: "Em relação ao conceito de tributo (CTN, art. 3º), assinale a alternativa INCORRETA:",
      alternativas: {
        A: "Tributo: prestação pecuniária compulsória, em moeda ou valor que nela se possa exprimir.",
        B: "Tributo não constitui sanção de ato ilícito.",
        C: "Tributo é instituído em lei e cobrado mediante atividade administrativa plenamente vinculada.",
        D: "Tributo pode ser sanção por ato ilícito.",
        E: "Prestação é compulsória (obrigatória)."
      },
      gabarito: "D",
      explicacao: "CTN, art. 3º: TRIBUTO: 'prestação PECUNIÁRIA COMPULSÓRIA, em moeda ou valor que nela se possa exprimir, que NÃO constitua SANÇÃO DE ATO ILÍCITO, instituída em LEI e cobrada mediante atividade administrativa PLENAMENTE VINCULADA'. ELEMENTOS: 1) prestação pecuniária (dinheiro); 2) compulsória (obrigatória); 3) NÃO é sanção/multa (tributo ≠ penalidade); 4) lei (legalidade); 5) vinculada (sem discricionariedade). D INCORRETA - tributo NÃO PODE ser sanção de ato ilícito. A, B, C, E corretas.",
      banca: "FCC",
      ano: 2023,
      cargo: "Auditor Fiscal - SEFAZ"
    },
    {
      id: "tributario-stn-03",
      enunciado: "Quanto às espécies tributárias, é correto afirmar:",
      alternativas: {
        A: "Existem apenas 3 espécies de tributos.",
        B: "STF (teoria pentapartida): 5 espécies tributárias - impostos, taxas, contribuição de melhoria, empréstimos compulsórios, contribuições especiais. CTN: 3 espécies (teoria tripartida - arts. 145). Classificação: vinculados (taxas, contribuição melhoria) x não vinculados (impostos).",
        C: "Todas as espécies tributárias são vinculadas a contraprestação estatal.",
        D: "Empréstimos compulsórios não são tributos.",
        E: "Contribuições especiais são impostos."
      },
      gabarito: "B",
      explicacao: "ESPÉCIES TRIBUTÁRIAS: CTN (teoria TRIPARTIDA): impostos, taxas, contribuição melhoria (art. 145 CF). STF (RE 138.284 e jurisprudência): teoria PENTAPARTIDA (5 espécies): 1) IMPOSTOS; 2) TAXAS; 3) CONTRIBUIÇÃO DE MELHORIA; 4) EMPRÉSTIMOS COMPULSÓRIOS; 5) CONTRIBUIÇÕES ESPECIAIS. CLASSIFICAÇÃO: VINCULADOS (contraprestação estatal - taxas, contribuição melhoria) x NÃO VINCULADOS (independe contraprestação - impostos). B correta. A, C, D, E incorretas.",
      banca: "VUNESP",
      ano: 2023,
      cargo: "Auditor Fiscal - SEFAZ"
    },
    {
      id: "tributario-stn-04",
      enunciado: "Sobre os impostos (CF/88, art. 145, I), assinale a alternativa correta:",
      alternativas: {
        A: "Impostos são tributos vinculados a contraprestação estatal.",
        B: "Impostos: tributos NÃO VINCULADOS - independem de contraprestação estatal específica. Fato gerador: situação independente de qualquer atividade estatal. Destinação: despesas gerais (não afetados). Exemplos: IR, ICMS, IPTU, IPVA. Art. 167, IV CF: vedada vinculação de impostos a órgão/fundo/despesa (exceto saúde, educação, administração tributária, garantias operações crédito).",
        C: "Impostos têm destinação específica obrigatória.",
        D: "Fato gerador de imposto depende de atividade estatal.",
        E: "Impostos podem ser vinculados a taxas."
      },
      gabarito: "B",
      explicacao: "CF/88, art. 145, I e CTN, art. 16: IMPOSTOS - tributos NÃO VINCULADOS. Fato gerador: situação INDEPENDENTE de qualquer atividade estatal específica relativa ao contribuinte. Destinação: DESPESAS GERAIS (não afetados). Exemplos: IR (renda), ICMS (circulação mercadorias), IPTU (propriedade urbana), IPVA (veículos). Art. 167, IV CF: VEDADA vinculação de receita de impostos a órgão/fundo/despesa, SALVO: saúde, educação, administração tributária, garantias operações crédito. B correta. A, C, D, E incorretas.",
      banca: "FGV",
      ano: 2023,
      cargo: "Auditor Fiscal - RFB"
    },
    {
      id: "tributario-stn-05",
      enunciado: "Em relação às taxas (CF/88, art. 145, II e CTN, art. 77-80), é INCORRETO afirmar:",
      alternativas: {
        A: "Taxas: tributos vinculados - contraprestação por serviço público ou exercício poder de polícia.",
        B: "Base de cálculo de taxa não pode ser igual a de imposto (Súmula 595 STF).",
        C: "Taxa pode ter como fato gerador o mesmo de imposto.",
        D: "Taxas: espécies - taxa de serviço público, taxa de polícia.",
        E: "Serviço público deve ser específico e divisível ou potencialmente utilizado."
      },
      gabarito: "C",
      explicacao: "CF/88, art. 145, II: TAXAS - poder de POLÍCIA ou utilização (efetiva/potencial) de SERVIÇOS PÚBLICOS específicos e divisíveis. CTN, art. 77-80: tributos VINCULADOS. §1º: taxas NÃO podem ter base de cálculo ou fato gerador IDÊNTICOS aos de IMPOSTOS (Súmula 595 STF). Espécies: taxa de SERVIÇO (ex: coleta lixo) e taxa de POLÍCIA (fiscalização - ex: vigilância sanitária). Serviço: específico (destinatário determinado) e divisível (quantificar utilização). C INCORRETA - taxa NÃO pode ter fato gerador igual a imposto. A, B, D, E corretas.",
      banca: "CESPE",
      ano: 2022,
      cargo: "Auditor Fiscal - RFB"
    },
    {
      id: "tributario-stn-06",
      enunciado: "Quanto à contribuição de melhoria (CF/88, art. 145, III), é correto afirmar:",
      alternativas: {
        A: "Contribuição de melhoria não existe no Brasil.",
        B: "Contribuição de melhoria: tributo vinculado à valorização imobiliária decorrente de obra pública. Fato gerador: valorização do imóvel por obra pública. Limite total: custo da obra. Limite individual: valorização do imóvel. Finalidade: recuperar custo da obra.",
        C: "Contribuição de melhoria independe de valorização imobiliária.",
        D: "Limite total pode superar custo da obra.",
        E: "Qualquer obra pública gera contribuição de melhoria."
      },
      gabarito: "B",
      explicacao: "CF/88, art. 145, III: CONTRIBUIÇÃO DE MELHORIA - obra pública que resulte em VALORIZAÇÃO IMOBILIÁRIA. CTN, art. 81-82: tributo VINCULADO. Fato gerador: VALORIZAÇÃO do imóvel decorrente de OBRA PÚBLICA. LIMITES: 1) TOTAL: não pode exceder CUSTO da obra; 2) INDIVIDUAL: acréscimo de valor do imóvel (valorização). Finalidade: recuperar custo da obra com quem se beneficiou. Não basta obra, necessária VALORIZAÇÃO. B correta. A, C, D, E incorretas.",
      banca: "FCC",
      ano: 2023,
      cargo: "Auditor Fiscal - SEFAZ"
    },
    {
      id: "tributario-stn-07",
      enunciado: "Sobre empréstimos compulsórios (CF/88, art. 148), assinale a alternativa INCORRETA:",
      alternativas: {
        A: "Empréstimos compulsórios: competência exclusiva da União.",
        B: "Instituídos por lei complementar.",
        C: "Hipóteses: guerra externa/calamidade pública, ou investimento público urgente e relevante interesse nacional.",
        D: "Estados podem instituir empréstimos compulsórios em calamidade estadual.",
        E: "Aplicação dos recursos vinculada à despesa que fundamentou instituição."
      },
      gabarito: "D",
      explicacao: "CF/88, art. 148: EMPRÉSTIMOS COMPULSÓRIOS - competência EXCLUSIVA da UNIÃO. Instituição: LEI COMPLEMENTAR. HIPÓTESES: I) guerra externa ou iminência, calamidade pública (restituição sem prazo); II) investimento público URGENTE e de RELEVANTE INTERESSE NACIONAL (restituição com prazo - observa art. 150, III, b). Parágrafo único: aplicação dos recursos VINCULADA à despesa que fundamentou instituição. Natureza: tributo restituível. D INCORRETA - só União pode instituir. A, B, C, E corretas.",
      banca: "VUNESP",
      ano: 2022,
      cargo: "Auditor Fiscal - SEFAZ"
    },
    {
      id: "tributario-stn-08",
      enunciado: "Em relação às contribuições especiais (CF/88, art. 149), é correto afirmar:",
      alternativas: {
        A: "Contribuições especiais podem ser instituídas por todos os entes.",
        B: "Contribuições especiais (art. 149): competência União (regra). Espécies: sociais (seguridade social, outras), intervenção no domínio econômico (CIDE), interesse categorias profissionais/econômicas. §1º: Estados/DF/Municípios podem instituir contribuição previdenciária de seus servidores (RPPS). Exemplos: PIS, COFINS, CSLL, CIDE-Combustíveis.",
        C: "Contribuições sociais são impostos.",
        D: "Municípios não podem instituir contribuição previdenciária de servidores.",
        E: "CIDE pode ser instituída por Estados."
      },
      gabarito: "B",
      explicacao: "CF/88, art. 149: CONTRIBUIÇÕES ESPECIAIS - competência da UNIÃO (regra). ESPÉCIES: 1) SOCIAIS (seguridade social - saúde/previdência/assistência, outras sociais - ex: salário-educação); 2) CIDE (Contribuição Intervenção Domínio Econômico - ex: combustíveis); 3) categorias PROFISSIONAIS/ECONÔMICAS (ex: OAB, CRM). §1º: Estados/DF/Municípios podem instituir contribuição PREVIDENCIÁRIA de seus SERVIDORES (RPPS - regime próprio). Exemplos União: PIS, COFINS, CSLL. B correta. A, C, D, E incorretas.",
      banca: "FGV",
      ano: 2023,
      cargo: "Auditor Fiscal - RFB"
    },
    {
      id: "tributario-stn-09",
      enunciado: "Quanto às limitações ao poder de tributar (CF/88, art. 150-152), assinale a alternativa correta:",
      alternativas: {
        A: "Poder de tributar é ilimitado.",
        B: "CF/88, art. 150-152: limitações ao poder de tributar (direitos fundamentais do contribuinte). Princípios: legalidade (art. 150, I), isonomia (II), irretroatividade (III, a), anterioridade anual e nonagesimal (III, b e c), vedação confisco (IV), liberdade tráfego (V), imunidades (VI). Garantem segurança jurídica e proteção patrimônio.",
        C: "Não há limites constitucionais ao poder de tributar.",
        D: "Princípios tributários não são limitações.",
        E: "Imunidades não são limitações constitucionais."
      },
      gabarito: "B",
      explicacao: "CF/88, arts. 150-152: LIMITAÇÕES AO PODER DE TRIBUTAR - direitos fundamentais do contribuinte (proteção contra arbítrio). PRINCÍPIOS: legalidade (150, I), isonomia (II), irretroatividade/anterioridade (III), vedação tributo confiscatório (IV), liberdade tráfego (V). IMUNIDADES (150, VI): recíproca, templos, partidos/sindicatos/entidades, livros/jornais/periódicos. Finalidade: SEGURANÇA JURÍDICA, proteção propriedade, Estado Democrático Direito. B correta. A, C, D, E incorretas.",
      banca: "CESPE",
      ano: 2023,
      cargo: "Auditor Fiscal - RFB"
    },
    {
      id: "tributario-stn-10",
      enunciado: "Sobre a repartição de receitas tributárias (CF/88, art. 157-162), é INCORRETO afirmar:",
      alternativas: {
        A: "Repartição de receitas: transferência de recursos entre entes federados.",
        B: "Pertencem aos Estados: 100% IPVA, 50% IPVA dos veículos licenciados em seus territórios, 50% ITR imóveis neles situados.",
        C: "Municípios recebem 50% IPVA veículos licenciados, 50% ITR, 25% ICMS.",
        D: "União repassa 49% IR e IPI para FPE (Estados) e FPM (Municípios).",
        E: "Repartição não existe no Sistema Tributário Nacional."
      },
      gabarito: "E",
      explicacao: "CF/88, arts. 157-162: REPARTIÇÃO DE RECEITAS TRIBUTÁRIAS - transferências constitucionais obrigatórias. ESTADOS: 100% ITCMD, 100% ICMS, 50% IPVA veículos licenciados neles, 50% ITR imóveis neles, parcela IR/IPI. MUNICÍPIOS: 100% IPTU, 100% ISS, 100% ITBI, 50% IPVA veículos licenciados, 50% ITR (ou 100% se fiscalizar), 25% ICMS, parcela IR. FUNDOS: FPE (21,5% IR+IPI → Estados), FPM (23,5% IR+IPI → Municípios). E INCORRETA - repartição EXISTE e é fundamental. A, B, C, D corretas.",
      banca: "FCC",
      ano: 2022,
      cargo: "Auditor Fiscal - SEFAZ"
    }
  ],

  // TEMA 2: Competência Tributária (10 questões)
  "competencia-tributaria": [
    {
      id: "tributario-comp-01",
      enunciado: "Sobre o conceito de competência tributária, é correto afirmar:",
      alternativas: {
        A: "Competência tributária é o poder de cobrar tributos.",
        B: "Competência tributária: aptidão para CRIAR (instituir) tributos por lei. Dada pela Constituição aos entes federados (União, Estados, DF, Municípios). Difere de capacidade tributária ativa (arrecadar/fiscalizar - delegável). Características: indelegável, irrenunciável, imprescritível, facultativa (não obrigatória).",
        C: "Competência tributária é delegável.",
        D: "Competência tributária é igual a capacidade tributária ativa.",
        E: "Competência tributária pode prescrever."
      },
      gabarito: "B",
      explicacao: "COMPETÊNCIA TRIBUTÁRIA: aptidão (poder) constitucional para CRIAR (instituir) tributos por LEI. CF atribui aos entes. DIFERE de capacidade tributária ATIVA (art. 7º CTN): arrecadar, fiscalizar (DELEGÁVEL - ex: INSS arrecada contribuições). CARACTERÍSTICAS (CTN, arts. 6º-8º): INDELEGÁVEL (só lei do ente cria), IRRENUNCIÁVEL, IMPRESCRITÍVEL (não se perde pelo não uso), FACULTATIVA (não obrigatória - ente pode não exercer). B correta. A (incompleta), C, D, E incorretas.",
      banca: "CESPE",
      ano: 2023,
      cargo: "Auditor Fiscal - RFB"
    },
    {
      id: "tributario-comp-02",
      enunciado: "Em relação à competência privativa da União (CF/88, art. 153), assinale a alternativa INCORRETA:",
      alternativas: {
        A: "União: competência privativa para impostos de importação, exportação, renda, produtos industrializados, operações financeiras, propriedade territorial rural, grandes fortunas.",
        B: "Impostos da União: II, IE, IR, IPI, IOF, ITR, IGF.",
        C: "Estados podem instituir imposto de renda estadual.",
        D: "IGF (grandes fortunas): previsto na CF, mas não foi instituído (depende de lei complementar).",
        E: "II e IE são impostos extrafiscais (regulatórios)."
      },
      gabarito: "C",
      explicacao: "CF/88, art. 153: COMPETÊNCIA PRIVATIVA DA UNIÃO (7 impostos): I) II (Importação); II) IE (Exportação); III) IR (Renda e proventos); IV) IPI (Produtos Industrializados); V) IOF (Operações financeiras); VI) ITR (Propriedade Territorial Rural); VII) IGF (Grandes Fortunas - NÃO instituído, depende LC). Extrafiscais: II, IE, IPI, IOF (exceções anterioridade). C INCORRETA - Estados NÃO podem criar IR (competência privativa União). A, B, D, E corretas.",
      banca: "FCC",
      ano: 2023,
      cargo: "Auditor Fiscal - SEFAZ"
    },
    {
      id: "tributario-comp-03",
      enunciado: "Quanto à competência dos Estados e DF (CF/88, art. 155), é correto afirmar:",
      alternativas: {
        A: "Estados têm competência para 5 impostos.",
        B: "Estados e DF: competência privativa para 3 impostos - ITCMD (transmissão causa mortis e doação), ICMS (circulação mercadorias e serviços transporte/comunicação), IPVA (propriedade veículos automotores). ICMS: principal receita estadual (maior arrecadação). Lei Complementar 87/96 (Lei Kandir) regulamenta ICMS.",
        C: "Municípios podem instituir ICMS municipal.",
        D: "ITCMD incide sobre transmissão onerosa.",
        E: "IPVA é tributo municipal."
      },
      gabarito: "B",
      explicacao: "CF/88, art. 155: COMPETÊNCIA PRIVATIVA ESTADOS E DF (3 impostos): I) ITCMD (Transmissão Causa Mortis e Doação - heranças e doações); II) ICMS (Circulação Mercadorias + Serviços transporte interestadual/intermunicipal + comunicação); III) IPVA (Propriedade Veículos Automotores). ICMS: maior arrecadação estadual (LC 87/96 - Lei Kandir). DF: acumula competências estaduais + municipais. B correta. A, C, D, E incorretas.",
      banca: "VUNESP",
      ano: 2023,
      cargo: "Auditor Fiscal - SEFAZ"
    },
    {
      id: "tributario-comp-04",
      enunciado: "Sobre a competência dos Municípios (CF/88, art. 156), assinale a alternativa correta:",
      alternativas: {
        A: "Municípios têm competência para 5 impostos.",
        B: "Municípios: competência privativa para 3 impostos - IPTU (Propriedade Predial e Territorial Urbana), ITBI (Transmissão Inter Vivos Bens Imóveis, onerosamente), ISS (Serviços de Qualquer Natureza). ISS: LC 116/2003 (lista serviços). IPTU: progressividade fiscal e extrafiscal. ITBI: transmissão onerosa (compra e venda).",
        C: "IPTU só pode ter progressividade extrafiscal.",
        D: "ISS incide sobre qualquer serviço, inclusive os da LC 116/2003.",
        E: "ITBI incide sobre doações."
      },
      gabarito: "B",
      explicacao: "CF/88, art. 156: COMPETÊNCIA PRIVATIVA MUNICÍPIOS (3 impostos): I) IPTU (Propriedade Predial e Territorial Urbana); II) ITBI (Transmissão Inter Vivos, onerosamente, Bens Imóveis - compra/venda); III) ISS/ISSQN (Serviços de Qualquer Natureza). ISS: LC 116/2003 lista serviços tributáveis. IPTU: progressividade FISCAL (capacidade contributiva - EC 29/2000) + extrafiscal (função social propriedade). ITBI: transmissão ONEROSA (doação: ITCMD estadual). B correta. A, C, D, E incorretas.",
      banca: "FGV",
      ano: 2023,
      cargo: "Auditor Fiscal - RFB"
    },
    {
      id: "tributario-comp-05",
      enunciado: "Em relação à competência residual da União (CF/88, art. 154, I), é INCORRETO afirmar:",
      alternativas: {
        A: "Competência residual: União pode criar impostos não previstos na CF.",
        B: "Requisitos: lei complementar, não-cumulativos, fato gerador e base de cálculo diversos dos já discriminados.",
        C: "União pode criar imposto residual por lei ordinária.",
        D: "Impostos residuais devem ser não-cumulativos.",
        E: "Não pode ter fato gerador ou base de cálculo igual a imposto já existente."
      },
      gabarito: "C",
      explicacao: "CF/88, art. 154, I: COMPETÊNCIA RESIDUAL - UNIÃO pode instituir IMPOSTOS NÃO PREVISTOS na CF. REQUISITOS: 1) LEI COMPLEMENTAR (não ordinária); 2) impostos NÃO-CUMULATIVOS; 3) fato gerador e base de cálculo DIVERSOS dos já discriminados na CF (não pode ser igual aos existentes). Finalidade: flexibilidade tributação (novas realidades econômicas). C INCORRETA - exige LC, não lei ordinária. A, B, D, E corretas.",
      banca: "CESPE",
      ano: 2022,
      cargo: "Auditor Fiscal - RFB"
    },
    {
      id: "tributario-comp-06",
      enunciado: "Quanto à competência extraordinária da União (CF/88, art. 154, II), é correto afirmar:",
      alternativas: {
        A: "Competência extraordinária não existe.",
        B: "Competência extraordinária (art. 154, II): União pode instituir, na iminência ou no caso de guerra externa, IMPOSTOS EXTRAORDINÁRIOS, compreendidos ou não em sua competência, os quais serão suprimidos gradativamente, cessadas as causas de sua criação. Podem ser cumulativos. Não exigem anterioridade.",
        C: "Impostos extraordinários são permanentes.",
        D: "Estados podem instituir impostos extraordinários.",
        E: "Impostos extraordinários exigem lei complementar."
      },
      gabarito: "B",
      explicacao: "CF/88, art. 154, II: COMPETÊNCIA EXTRAORDINÁRIA - UNIÃO pode criar IMPOSTOS EXTRAORDINÁRIOS de GUERRA. HIPÓTESE: guerra externa ou iminência. CARACTERÍSTICAS: 1) podem incidir sobre fatos geradores já tributados (invade competências); 2) podem ser CUMULATIVOS; 3) NÃO se sujeitam a ANTERIORIDADE (art. 150, §1º); 4) SUPRIMIDOS gradativamente cessadas causas (temporários). Instituição: lei ordinária. B correta. A, C, D, E incorretas.",
      banca: "FCC",
      ano: 2023,
      cargo: "Auditor Fiscal - SEFAZ"
    },
    {
      id: "tributario-comp-07",
      enunciado: "Sobre as características da competência tributária (CTN, arts. 6º-8º), assinale a alternativa INCORRETA:",
      alternativas: {
        A: "Indelegável: ente não pode delegar poder de criar tributo.",
        B: "Irrenunciável: ente não pode renunciar à competência.",
        C: "Imprescritível: não uso não faz perder competência.",
        D: "Obrigatória: ente é obrigado a exercer competência.",
        E: "Facultativa: exercício é facultativo (ente pode não instituir tributo)."
      },
      gabarito: "D",
      explicacao: "CTN, arts. 6º-8º: CARACTERÍSTICAS DA COMPETÊNCIA TRIBUTÁRIA: 1) INDELEGÁVEL (art. 7º): ente não pode delegar poder de CRIAR tributo (só pode delegar arrecadação/fiscalização - capacidade ativa); 2) IRRENUNCIÁVEL (art. 8º): ente não pode renunciar; 3) IMPRESCRITÍVEL: não uso não extingue competência; 4) FACULTATIVA: exercício é FACULTATIVO (ente NÃO é obrigado a instituir tributo - ex: IGF não foi criado). D INCORRETA - competência é FACULTATIVA, não obrigatória. A, B, C, E corretas.",
      banca: "VUNESP",
      ano: 2022,
      cargo: "Auditor Fiscal - SEFAZ"
    },
    {
      id: "tributario-comp-08",
      enunciado: "Em relação ao conflito de competência, é correto afirmar:",
      alternativas: {
        A: "Não há conflito de competência no Sistema Tributário Nacional.",
        B: "Conflito de competência: bitributação (dois entes tributam mesmo fato). CF delimitou competências para evitar. Se ocorrer: inconstitucionalidade da lei invasora (ADI no STF). Competência: CF → rigidez. Lei não pode invadir competência de outro ente. Princípio federativo.",
        C: "Bitributação é sempre permitida.",
        D: "Ente pode invadir competência de outro por lei ordinária.",
        E: "Conflito de competência é resolvido administrativamente."
      },
      gabarito: "B",
      explicacao: "CONFLITO DE COMPETÊNCIA: situação em que dois entes pretendem tributar o MESMO fato gerador (bitributação). CF/88 DELIMITOU competências (arts. 153-156) para EVITAR conflitos. Se ocorrer invasão: INCONSTITUCIONALIDADE da lei invasora (controle: ADI - STF, art. 102, I, a). Competências são RÍGIDAS (CF) - lei infraconstitucional não pode alterar. Fundamento: PRINCÍPIO FEDERATIVO (art. 1º CF). B correta. A, C, D, E incorretas.",
      banca: "FGV",
      ano: 2023,
      cargo: "Auditor Fiscal - RFB"
    },
    {
      id: "tributario-comp-09",
      enunciado: "Quanto à capacidade tributária ativa (CTN, art. 7º), assinale a alternativa correta:",
      alternativas: {
        A: "Capacidade tributária ativa é o poder de criar tributos.",
        B: "Capacidade tributária ativa: aptidão para ARRECADAR e FISCALIZAR tributos. Delegável por lei (difere de competência - indelegável). Titular: sujeito ativo da obrigação tributária. Exemplos: INSS arrecada contribuições sociais (capacidade delegada pela União), OAB/CRM arrecadam anuidades (contribuições).",
        C: "Capacidade tributária ativa é indelegável.",
        D: "Só o ente competente pode arrecadar tributo.",
        E: "Capacidade ativa não pode ser delegada por lei."
      },
      gabarito: "B",
      explicacao: "CTN, art. 7º: CAPACIDADE TRIBUTÁRIA ATIVA: atribuição das funções de ARRECADAR e FISCALIZAR tributos. DELEGÁVEL por LEI (difere de competência - criar - indelegável). Pessoa que recebe: sujeito ATIVO da obrigação tributária. EXEMPLOS: 1) INSS arrecada contribuições previdenciárias (capacidade delegada pela União); 2) OAB, CRM arrecadam anuidades (contribuições categorias profissionais). Ente criador pode delegar arrecadação/fiscalização. B correta. A, C, D, E incorretas.",
      banca: "CESPE",
      ano: 2023,
      cargo: "Auditor Fiscal - RFB"
    },
    {
      id: "tributario-comp-10",
      enunciado: "Sobre a função da lei complementar no Direito Tributário (CF/88, art. 146), é INCORRETO afirmar:",
      alternativas: {
        A: "Lei complementar: normas gerais de direito tributário (art. 146, III).",
        B: "Lei complementar: dispor sobre conflitos de competência, regular limitações ao poder de tributar, estabelecer normas gerais (fato gerador, base cálculo, contribuinte, obrigação/lançamento/crédito/prescrição/decadência).",
        C: "Qualquer lei pode regular normas gerais de direito tributário.",
        D: "CTN foi recepcionado como lei complementar.",
        E: "Lei complementar: aprovação por maioria absoluta."
      },
      gabarito: "C",
      explicacao: "CF/88, art. 146: LEI COMPLEMENTAR cabe: I) dispor sobre conflitos de competência; II) regular limitações ao poder de tributar; III) estabelecer NORMAS GERAIS (art. 146, III): definição tributos/espécies, fatos geradores, base de cálculo, contribuintes, obrigação/lançamento/crédito/prescrição/decadência, adequado tratamento tributário cooperativas. CTN (Lei 5.172/66): recepcionado como LC (materialmente complementar). Aprovação: MAIORIA ABSOLUTA (art. 69 CF). C INCORRETA - só LC pode regular normas gerais. A, B, D, E corretas.",
      banca: "FCC",
      ano: 2022,
      cargo: "Auditor Fiscal - SEFAZ"
    }
  ],

  // TEMA 3: Princípios Tributários (10 questões)
  "principios-tributarios": [
    {
      id: "tributario-princ-01",
      enunciado: "Sobre o princípio da legalidade tributária (CF/88, art. 150, I), é correto afirmar:",
      alternativas: {
        A: "Tributos podem ser criados por decreto.",
        B: "Princípio da legalidade (art. 150, I): vedado exigir ou aumentar tributo SEM LEI que o estabeleça. CTN, art. 97: só lei pode criar, majorar, definir fato gerador, fixar alíquota/base cálculo, cominar penalidades. Exceções (art. 153, §1º): II, IE, IPI, IOF - alíquotas por decreto (extrafiscalidade).",
        C: "Qualquer aspecto do tributo pode ser regulado por decreto.",
        D: "Não há exceções ao princípio da legalidade.",
        E: "Presidente pode criar tributo por medida provisória sem limites."
      },
      gabarito: "B",
      explicacao: "CF/88, art. 150, I: PRINCÍPIO DA LEGALIDADE TRIBUTÁRIA: vedado exigir ou aumentar tributo SEM LEI. CTN, art. 97: só LEI pode: instituir/extinguir tributos, majorar/reduzir, definir fato gerador, fixar alíquota/base cálculo, cominar penalidades, excluir/suspender/extinguir crédito, conceder isenção, definir infrações. EXCEÇÕES (art. 153, §1º): II, IE, IPI, IOF - Executivo pode ALTERAR ALÍQUOTAS por decreto (extrafiscalidade). CIDE-combustíveis e ICMS-combustíveis: redução/restabelecimento alíquotas. B correta. A, C, D, E incorretas.",
      banca: "CESPE",
      ano: 2023,
      cargo: "Auditor Fiscal - RFB"
    },
    {
      id: "tributario-princ-02",
      enunciado: "Em relação ao princípio da isonomia tributária (CF/88, art. 150, II), assinale a alternativa INCORRETA:",
      alternativas: {
        A: "Isonomia: vedado tratamento desigual entre contribuintes em situação equivalente.",
        B: "Proibida distinção em razão de ocupação profissional ou função, ou denominação jurídica dos rendimentos/títulos/direitos.",
        C: "Isonomia tributária permite tratamento diferenciado para situações desiguais.",
        D: "Qualquer diferenciação tributária viola isonomia.",
        E: "Progressividade de alíquotas conforme capacidade contributiva: compatível com isonomia."
      },
      gabarito: "D",
      explicacao: "CF/88, art. 150, II: PRINCÍPIO DA ISONOMIA TRIBUTÁRIA: vedado instituir tratamento DESIGUAL entre contribuintes em SITUAÇÃO EQUIVALENTE. Proibida distinção por ocupação profissional/função, ou denominação jurídica rendimentos/títulos/direitos. Aristóteles: tratar IGUAIS igualmente, DESIGUAIS desigualmente (medida desigualdade). Isonomia permite diferenciações JUSTIFICADAS (ex: progressividade IR - capacidade contributiva). D INCORRETA - diferenciação é permitida se justificada. A, B, C, E corretas.",
      banca: "FCC",
      ano: 2023,
      cargo: "Auditor Fiscal - SEFAZ"
    },
    {
      id: "tributario-princ-03",
      enunciado: "Quanto ao princípio da irretroatividade (CF/88, art. 150, III, a), é correto afirmar:",
      alternativas: {
        A: "Lei tributária pode retroagir livremente.",
        B: "Irretroatividade (art. 150, III, a): vedado cobrar tributo em relação a fatos geradores ocorridos ANTES da vigência da lei que os instituiu ou aumentou. Lei mais benéfica (CTN, art. 106): retroage (reduz/isenta). Lei mais gravosa: não retroage. Segurança jurídica.",
        C: "Lei que aumenta tributo pode retroagir.",
        D: "Lei mais benéfica não pode retroagir.",
        E: "Irretroatividade não se aplica a direito tributário."
      },
      gabarito: "B",
      explicacao: "CF/88, art. 150, III, a: PRINCÍPIO DA IRRETROATIVIDADE: vedado cobrar tributos relativos a fatos geradores ocorridos ANTES da vigência da lei que os instituiu ou aumentou. CTN, art. 106: lei tributária aplica-se a ato/fato pretérito se for: I) expressamente interpretativa; II) deixe de definir como infração; III) comine penalidade menos sevosa (retroatividade BENÉFICA - in dubio pro reo). Lei GRAVOSA: não retroage. Fundamento: SEGURANÇA JURÍDICA. B correta. A, C, D, E incorretas.",
      banca: "VUNESP",
      ano: 2023,
      cargo: "Auditor Fiscal - SEFAZ"
    },
    {
      id: "tributario-princ-04",
      enunciado: "Sobre o princípio da anterioridade (CF/88, art. 150, III, b e c), assinale a alternativa correta:",
      alternativas: {
        A: "Tributos podem ser cobrados imediatamente após publicação da lei.",
        B: "Anterioridade anual (b): vedado cobrar tributo no mesmo exercício financeiro da lei que instituiu/aumentou. Anterioridade nonagesimal/noventena (c): vedado antes de 90 dias da publicação da lei. Regra: observância CUMULATIVA (ano + 90 dias). Exceções: art. 150, §1º.",
        C: "Só existe anterioridade anual.",
        D: "Todos os tributos devem observar as duas anterioridades.",
        E: "Anterioridade nonagesimal é de 60 dias."
      },
      gabarito: "B",
      explicacao: "CF/88, art. 150, III: PRINCÍPIO DA ANTERIORIDADE. Alínea B) ANUAL: vedado cobrar tributo no mesmo EXERCÍCIO FINANCEIRO (ano) da publicação da lei que instituiu/aumentou. Alínea C) NONAGESIMAL/NOVENTENA (EC 42/2003): vedado antes de 90 DIAS da publicação. REGRA: observância CUMULATIVA (ano + 90 dias - ex: lei publicada 01/12/2023, só cobra em 2024 após 90 dias = 01/03/2024). EXCEÇÕES (§1º): II, IE, IOF, IEG, EC, IR (só anual), BC fixação CIDE/ICMS-combustíveis. B correta. A, C, D, E incorretas.",
      banca: "FGV",
      ano: 2023,
      cargo: "Auditor Fiscal - RFB"
    },
    {
      id: "tributario-princ-05",
      enunciado: "Em relação ao princípio da vedação ao confisco (CF/88, art. 150, IV), é INCORRETO afirmar:",
      alternativas: {
        A: "Vedado utilizar tributo com efeito de confisco.",
        B: "Confisco: absorção substancial do patrimônio/renda do contribuinte.",
        C: "Conceito indeterminado: análise caso a caso (razoabilidade/proporcionalidade).",
        D: "Qualquer tributação elevada é confiscatória.",
        E: "Multa tributária também não pode ser confiscatória (STF)."
      },
      gabarito: "D",
      explicacao: "CF/88, art. 150, IV: vedado utilizar tributo com EFEITO DE CONFISCO. CONFISCO: tributação que absorve substancial/totalmente patrimônio/renda do contribuinte (inviabiliza atividade, direito propriedade). Conceito jurídico INDETERMINADO: análise CASO A CASO - razoabilidade, proporcionalidade, capacidade contributiva. STF: não há percentual fixo; depende conjunto da carga tributária, natureza tributo. Multas: também não podem ser confiscatórias (STF). D INCORRETA - nem toda tributação elevada é confisco. A, B, C, E corretas.",
      banca: "CESPE",
      ano: 2022,
      cargo: "Auditor Fiscal - RFB"
    },
    {
      id: "tributario-princ-06",
      enunciado: "Quanto ao princípio da liberdade de tráfego (CF/88, art. 150, V), é correto afirmar:",
      alternativas: {
        A: "Tributos podem limitar tráfego de pessoas/bens sem restrições.",
        B: "Liberdade de tráfego (art. 150, V): vedado estabelecer limitações ao tráfego de pessoas ou bens por meio de tributos interestaduais ou intermunicipais. Exceção: pedágio (taxa pela utilização de vias conservadas). Protege livre circulação (mercado interno nacional).",
        C: "Pedágio não é permitido pela Constituição.",
        D: "Estados podem criar tributo para limitar circulação de mercadorias.",
        E: "Princípio não protege circulação interestadual."
      },
      gabarito: "B",
      explicacao: "CF/88, art. 150, V: PRINCÍPIO DA LIBERDADE DE TRÁFEGO: vedado estabelecer LIMITAÇÕES ao tráfego de pessoas ou bens por meio de tributos interestaduais ou intermunicipais. EXCEÇÃO: cobrança de PEDÁGIO pela utilização de vias conservadas pelo Poder Público. Fundamento: livre circulação, mercado interno nacional, federalismo. Impede criação de 'barreiras fiscais'. Pedágio: natureza tributária controvertida (STF: taxa de serviço ou preço público). B correta. A, C, D, E incorretas.",
      banca: "FCC",
      ano: 2023,
      cargo: "Auditor Fiscal - SEFAZ"
    },
    {
      id: "tributario-princ-07",
      enunciado: "Sobre o princípio da capacidade contributiva (CF/88, art. 145, §1º), assinale a alternativa INCORRETA:",
      alternativas: {
        A: "Impostos devem ter caráter pessoal e ser graduados conforme capacidade econômica do contribuinte.",
        B: "Capacidade contributiva: quem tem mais paga mais (justiça distributiva).",
        C: "Progressividade é instrumento de efetivação da capacidade contributiva.",
        D: "Capacidade contributiva aplica-se a todos os tributos igualmente.",
        E: "Pessoalidade: considerar características pessoais do contribuinte."
      },
      gabarito: "D",
      explicacao: "CF/88, art. 145, §1º: CAPACIDADE CONTRIBUTIVA: sempre que possível, IMPOSTOS terão caráter PESSOAL e serão graduados segundo CAPACIDADE ECONÔMICA do contribuinte. Administração pode identificar patrimônio/rendimentos/atividades para conferir efetividade. Justiça DISTRIBUTIVA: quem pode mais, paga mais. PROGRESSIVIDADE: alíquotas crescentes (instrumento). PESSOALIDADE: considerar situação pessoal (ex: IR - dependentes, despesas médicas). D INCORRETA - aplica-se principalmente a IMPOSTOS (§1º), não todos tributos igualmente. A, B, C, E corretas.",
      banca: "VUNESP",
      ano: 2022,
      cargo: "Auditor Fiscal - SEFAZ"
    },
    {
      id: "tributario-princ-08",
      enunciado: "Em relação ao princípio da uniformidade geográfica (CF/88, art. 151, I), é correto afirmar:",
      alternativas: {
        A: "União pode instituir tributo diferente entre Estados.",
        B: "Uniformidade geográfica (art. 151, I): vedado à União instituir tributo que NÃO seja UNIFORME em todo território nacional ou implique distinção/preferência em relação a Estado/DF/Município. Admite incentivos fiscais regionais (desenvolvimento). Igualdade entre entes.",
        C: "União pode dar tratamento preferencial a um Estado.",
        D: "Princípio impede qualquer incentivo fiscal regional.",
        E: "Uniformidade não se aplica a tributos federais."
      },
      gabarito: "B",
      explicacao: "CF/88, art. 151, I: PRINCÍPIO DA UNIFORMIDADE GEOGRÁFICA: vedado à UNIÃO instituir tributo que NÃO seja UNIFORME em todo território nacional ou implique distinção ou preferência em relação a Estado, DF ou Município, em detrimento de outro. EXCEÇÃO: admitida concessão de INCENTIVOS FISCAIS destinados a promover EQUILÍBRIO desenvolvimento socioeconômico entre REGIÕES (ex: Zona Franca Manaus, SUDENE, SUDAM). Igualdade federativa. B correta. A, C, D, E incorretas.",
      banca: "FGV",
      ano: 2023,
      cargo: "Auditor Fiscal - RFB"
    },
    {
      id: "tributario-princ-09",
      enunciado: "Quanto ao princípio da não discriminação baseada em procedência/destino (CF/88, art. 152), assinale a alternativa correta:",
      alternativas: {
        A: "Estados podem tributar mais produtos de outros Estados.",
        B: "Art. 152: vedado a Estados/DF/Municípios estabelecer diferença tributária entre bens e serviços de qualquer natureza, em razão de sua PROCEDÊNCIA ou DESTINO. Protege mercado interno nacional (livre concorrência). Guerra fiscal: vedada.",
        C: "Municípios podem criar tributo maior para produtos de fora.",
        D: "Princípio permite discriminação baseada em origem.",
        E: "Guerra fiscal é permitida pela Constituição."
      },
      gabarito: "B",
      explicacao: "CF/88, art. 152: vedado a Estados, DF, Municípios estabelecer DIFERENÇA TRIBUTÁRIA entre bens/serviços de qualquer natureza em razão de PROCEDÊNCIA ou DESTINO. Fundamento: MERCADO INTERNO NACIONAL, livre concorrência, federalismo cooperativo. Impede: 1) tributação maior de produto vindo de outro Estado; 2) GUERRA FISCAL (benefícios fiscais unilaterais ICMS - vedados sem convênio CONFAZ). Súmula 575 STJ/Tema 490 STF: guerra fiscal gera responsabilidade subsidiária. B correta. A, C, D, E incorretas.",
      banca: "CESPE",
      ano: 2023,
      cargo: "Auditor Fiscal - RFB"
    },
    {
      id: "tributario-princ-10",
      enunciado: "Sobre o princípio da não cumulatividade, é INCORRETO afirmar:",
      alternativas: {
        A: "Não cumulatividade: evita 'efeito cascata' (tributo sobre tributo).",
        B: "Técnica: compensação do tributo cobrado nas operações anteriores.",
        C: "IPI e ICMS: obrigatoriamente não-cumulativos (CF/88).",
        D: "Todos os tributos devem ser não-cumulativos.",
        E: "PIS/COFINS: foram tornados não-cumulativos parcialmente (Leis 10.637/02 e 10.833/03)."
      },
      gabarito: "D",
      explicacao: "PRINCÍPIO DA NÃO CUMULATIVIDADE: evita 'efeito cascata' (tributo sobre tributo em cadeia produtiva). TÉCNICA: COMPENSAÇÃO - abate-se o tributo cobrado nas etapas anteriores (crédito). CF/88 impõe: IPI (art. 153, §3º, II) e ICMS (art. 155, §2º, I) - OBRIGATORIAMENTE não-cumulativos. PIS/COFINS: Lei 10.637/02 e 10.833/03 - regime NÃO-cumulativo (parcial - coexiste com cumulativo). Impostos residuais (art. 154, I): devem ser não-cumulativos. D INCORRETA - NEM TODOS tributos são não-cumulativos (ex: ISS, IPTU, IPVA - cumulativos/monofásicos). A, B, C, E corretas.",
      banca: "FCC",
      ano: 2022,
      cargo: "Auditor Fiscal - SEFAZ"
    }
  ]
};
