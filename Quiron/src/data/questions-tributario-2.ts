// Questões de Direito Tributário - TEMAS 4-6 (30 questões)
// Área Jurídica - Direito Tributário

export const questionsTributario2 = {
  // TEMA 4: Impostos (10 questões)
  "impostos": [
    {
      id: "tributario-imp-01",
      enunciado: "Sobre o Imposto de Renda - IR (CF/88, art. 153, III e CTN, arts. 43-45), é correto afirmar:",
      alternativas: {
        A: "IR não observa anterioridade.",
        B: "IR: competência União. Fato gerador: aquisição da disponibilidade econômica/jurídica de renda (produto capital, trabalho ou ambos) ou proventos de qualquer natureza. Critérios: generalidade, universalidade, progressividade (art. 153, §2º, I). Observa anterioridade anual (não nonagesimal - exceção art. 150, §1º).",
        C: "IR é proporcional, não progressivo.",
        D: "IR não respeita anterioridade anual.",
        E: "Fato gerador do IR é a propriedade."
      },
      gabarito: "B",
      explicacao: "CF/88, art. 153, III e CTN, arts. 43-45: IMPOSTO DE RENDA (IR). COMPETÊNCIA: União. FATO GERADOR: aquisição da disponibilidade econômica/jurídica: I) RENDA (produto capital, trabalho ou ambos); II) PROVENTOS de qualquer natureza. Art. 153, §2º, I: informado pelos critérios: GENERALIDADE (todos), UNIVERSALIDADE (todas rendas), PROGRESSIVIDADE (alíquotas crescentes - capacidade contributiva). ANTERIORIDADE: só ANUAL (exceção nonagesimal - art. 150, §1º). B correta. A, C, D, E incorretas.",
      banca: "CESPE",
      ano: 2023,
      cargo: "Auditor Fiscal - RFB"
    },
    {
      id: "tributario-imp-02",
      enunciado: "Em relação ao ICMS (CF/88, art. 155, II e LC 87/96), assinale a alternativa INCORRETA:",
      alternativas: {
        A: "ICMS: competência Estados e DF. Incide sobre circulação de mercadorias + serviços transporte interestadual/intermunicipal + comunicação.",
        B: "ICMS: não-cumulativo, seletividade facultativa.",
        C: "ICMS incide sobre energia elétrica, petróleo, combustíveis, minerais (art. 155, §3º).",
        D: "ICMS é tributo municipal.",
        E: "Alíquotas: internas (cada Estado) e interestaduais (Senado - art. 155, §2º, IV)."
      },
      gabarito: "D",
      explicacao: "CF/88, art. 155, II e LC 87/96 (Lei Kandir): ICMS - COMPETÊNCIA Estados e DF. Incide sobre: I) CIRCULAÇÃO DE MERCADORIAS; II) serviços TRANSPORTE interestadual/intermunicipal; III) COMUNICAÇÃO (telefonia); IV) energia elétrica, petróleo, combustíveis, minerais (§3º - incidência única). NÃO-CUMULATIVO (obrigatório). SELETIVIDADE: facultativa (essencialidade). Alíquotas: INTERNAS (cada Estado) e INTERESTADUAIS (Senado - Resolução). D INCORRETA - ICMS é ESTADUAL/DF, não municipal. A, B, C, E corretas.",
      banca: "FCC",
      ano: 2023,
      cargo: "Auditor Fiscal - SEFAZ"
    },
    {
      id: "tributario-imp-03",
      enunciado: "Quanto ao IPI - Imposto sobre Produtos Industrializados (CF/88, art. 153, IV), é correto afirmar:",
      alternativas: {
        A: "IPI incide sobre qualquer produto.",
        B: "IPI: competência União. Fato gerador: desembaraço aduaneiro (importado), saída estabelecimento industrial/equiparado (nacional). Não-cumulativo obrigatório. Seletividade obrigatória (essencialidade). Não observa anterioridades (exceção art. 150, §1º). Alíquotas: Executivo pode alterar (extrafiscalidade).",
        C: "IPI é seletivo facultativamente.",
        D: "IPI observa anterioridade anual.",
        E: "IPI não pode ter alíquotas alteradas por decreto."
      },
      gabarito: "B",
      explicacao: "CF/88, art. 153, IV e CTN, arts. 46-51: IPI. COMPETÊNCIA: União. FATO GERADOR: I) desembaraço aduaneiro (produto industrializado IMPORTADO); II) saída de produto industrializado do estabelecimento industrial/equiparado (nacional). NÃO-CUMULATIVO: obrigatório (§3º, II). SELETIVIDADE: OBRIGATÓRIA (§3º, I - essencialidade). ANTERIORIDADES: NÃO observa (exceção art. 150, §1º - extrafiscal). ALÍQUOTAS: Executivo pode alterar por decreto (§1º). B correta. A, C, D, E incorretas.",
      banca: "VUNESP",
      ano: 2023,
      cargo: "Auditor Fiscal - SEFAZ"
    },
    {
      id: "tributario-imp-04",
      enunciado: "Sobre o IPTU - Imposto Predial e Territorial Urbano (CF/88, art. 156, I), assinale a alternativa correta:",
      alternativas: {
        A: "IPTU: competência Estados.",
        B: "IPTU: competência Municípios. Fato gerador: propriedade, domínio útil ou posse de bem imóvel localizado em zona urbana. Progressividade: fiscal (art. 156, §1º, I - EC 29/2000 - capacidade contributiva) e extrafiscal (art. 182, §4º - função social propriedade). Base de cálculo: valor venal do imóvel.",
        C: "IPTU não pode ter progressividade fiscal.",
        D: "IPTU incide sobre imóvel rural.",
        E: "Base de cálculo do IPTU é a área do imóvel."
      },
      gabarito: "B",
      explicacao: "CF/88, art. 156, I e CTN, arts. 32-34: IPTU. COMPETÊNCIA: Municípios. FATO GERADOR: propriedade, domínio útil ou posse de bem imóvel localizado em ZONA URBANA (CTN, art. 32, §1º: critérios urbanização). PROGRESSIVIDADE: I) FISCAL (art. 156, §1º, I - EC 29/2000 - capacidade contributiva - valor imóvel); II) EXTRAFISCAL (art. 182, §4º - função social propriedade - imóvel não edificado/subutilizado/não utilizado). BASE CÁLCULO: valor VENAL do imóvel. B correta. A, C, D, E incorretas.",
      banca: "FGV",
      ano: 2023,
      cargo: "Auditor Fiscal - RFB"
    },
    {
      id: "tributario-imp-05",
      enunciado: "Em relação ao ISS - Imposto sobre Serviços (CF/88, art. 156, III e LC 116/2003), é INCORRETO afirmar:",
      alternativas: {
        A: "ISS: competência Municípios e DF. Incide sobre serviços de qualquer natureza definidos em lei complementar.",
        B: "LC 116/2003: lista taxativa de serviços tributáveis pelo ISS.",
        C: "Alíquota máxima: 5% (LC 116/2003). Alíquota mínima: 2% (LC 157/2016).",
        D: "ISS incide sobre qualquer serviço, mesmo os não previstos na LC 116/2003.",
        E: "Local da incidência: regras do art. 3º LC 116/2003 (estabelecimento prestador ou local prestação)."
      },
      gabarito: "D",
      explicacao: "CF/88, art. 156, III e LC 116/2003: ISS/ISSQN. COMPETÊNCIA: Municípios e DF. INCIDÊNCIA: serviços de qualquer natureza DEFINIDOS EM LEI COMPLEMENTAR (não compreendidos no art. 155, II - ICMS, nem art. 153, V - IOF). LC 116/2003: LISTA de serviços (TAXATIVA - numerus clausus). ALÍQUOTAS: máxima 5% (LC 116), mínima 2% (LC 157/2016 - combate guerra fiscal). Local: art. 3º LC (estabelecimento prestador ou local prestação). D INCORRETA - só incide sobre serviços DA LISTA. A, B, C, E corretas.",
      banca: "CESPE",
      ano: 2022,
      cargo: "Auditor Fiscal - RFB"
    },
    {
      id: "tributario-imp-06",
      enunciado: "Quanto ao ITCMD - Imposto Transmissão Causa Mortis e Doação (CF/88, art. 155, I), é correto afirmar:",
      alternativas: {
        A: "ITCMD: competência Municípios.",
        B: "ITCMD: competência Estados e DF. Fato gerador: transmissão não onerosa de bens/direitos por: causa mortis (herança) ou doação. Progressividade: possível (art. 155, §1º, I). Alíquota máxima: 8% (Resolução Senado 9/92). Não incide sobre transmissão onerosa (compra-venda: ITBI).",
        C: "ITCMD incide sobre compra e venda de imóveis.",
        D: "Alíquota máxima do ITCMD é 20%.",
        E: "ITCMD não pode ser progressivo."
      },
      gabarito: "B",
      explicacao: "CF/88, art. 155, I: ITCMD (Imposto Transmissão Causa Mortis e Doação). COMPETÊNCIA: Estados e DF. FATO GERADOR: transmissão NÃO ONEROSA de quaisquer bens ou direitos: I) causa mortis (herança, legado); II) doação. §1º: PROGRESSIVIDADE possível conforme valor/quinhão. Resolução Senado 9/92: alíquota MÁXIMA 8% (art. 155, §1º, IV). Transmissão ONEROSA (compra-venda) imóvel: ITBI (municipal). B correta. A, C, D, E incorretas.",
      banca: "FCC",
      ano: 2023,
      cargo: "Auditor Fiscal - SEFAZ"
    },
    {
      id: "tributario-imp-07",
      enunciado: "Sobre o II - Imposto de Importação (CF/88, art. 153, I e Decreto-Lei 37/66), assinale a alternativa INCORRETA:",
      alternativas: {
        A: "II: competência União. Fato gerador: entrada de produto estrangeiro no território nacional.",
        B: "Extrafiscal: não observa legalidade (alíquotas), anterioridades.",
        C: "Alíquotas: alteradas por ato Executivo (Camex - Câmara Comércio Exterior).",
        D: "II observa anterioridade anual e nonagesimal.",
        E: "Base de cálculo: valor aduaneiro (CIF - custo + seguro + frete)."
      },
      gabarito: "D",
      explicacao: "CF/88, art. 153, I e DL 37/66: II (IMPOSTO DE IMPORTAÇÃO). COMPETÊNCIA: União. FATO GERADOR: entrada de PRODUTO ESTRANGEIRO no território nacional (desembaraço aduaneiro). EXTRAFISCAL: §1º - Executivo pode ALTERAR ALÍQUOTAS (não observa legalidade - exceção art. 150, I), NÃO observa ANTERIORIDADES (exceção art. 150, §1º). Alíquotas: ato Executivo (CAMEX). BASE CÁLCULO: valor ADUANEIRO (CIF - cost, insurance, freight). D INCORRETA - NÃO observa anterioridades. A, B, C, E corretas.",
      banca: "VUNESP",
      ano: 2022,
      cargo: "Auditor Fiscal - SEFAZ"
    },
    {
      id: "tributario-imp-08",
      enunciado: "Em relação ao IOF - Imposto Operações Financeiras (CF/88, art. 153, V), é correto afirmar:",
      alternativas: {
        A: "IOF observa anterioridade anual.",
        B: "IOF: competência União. Incide sobre operações: crédito, câmbio, seguro, títulos/valores mobiliários. Extrafiscal: não observa legalidade (alíquotas) e anterioridades. Alíquotas: Executivo pode alterar. Função: regulação economia (política monetária). Ouro ativo financeiro/cambial: 1% (art. 153, §5º).",
        C: "IOF não é imposto extrafiscal.",
        D: "IOF incide sobre circulação de mercadorias.",
        E: "Executivo não pode alterar alíquotas do IOF."
      },
      gabarito: "B",
      explicacao: "CF/88, art. 153, V e CTN, arts. 63-67: IOF (Imposto Operações Financeiras). COMPETÊNCIA: União. INCIDÊNCIA: operações: I) CRÉDITO; II) CÂMBIO; III) SEGURO; IV) títulos/valores MOBILIÁRIOS. EXTRAFISCAL: §1º - Executivo pode ALTERAR alíquotas, NÃO observa anterioridades (exceção art. 150, §1º). Função: regulação ECONOMIA, política MONETÁRIA (controle crédito/inflação). §5º: OURO ativo financeiro/cambial - alíquota mínima 1%. B correta. A, C, D, E incorretas.",
      banca: "FGV",
      ano: 2023,
      cargo: "Auditor Fiscal - RFB"
    },
    {
      id: "tributario-imp-09",
      enunciado: "Quanto ao IPVA - Imposto Propriedade Veículos Automotores (CF/88, art. 155, III), assinale a alternativa correta:",
      alternativas: {
        A: "IPVA: competência Municípios.",
        B: "IPVA: competência Estados e DF. Fato gerador: propriedade de veículo automotor (terrestre - STF: não embarcações/aeronaves). Alíquotas: podem ser diferenciadas conforme tipo/utilização (art. 155, §6º, II). Repartição: 50% Município onde veículo licenciado (art. 158, III).",
        C: "IPVA incide sobre embarcações e aeronaves.",
        D: "IPVA não pode ter alíquotas diferenciadas.",
        E: "Município não recebe parte da arrecadação do IPVA."
      },
      gabarito: "B",
      explicacao: "CF/88, art. 155, III: IPVA (Imposto Propriedade Veículos Automotores). COMPETÊNCIA: Estados e DF. FATO GERADOR: propriedade de VEÍCULO AUTOMOTOR. STF (RE 379.572): veículos TERRESTRES (não embarcações/aeronaves). §6º, II: alíquotas podem ser DIFERENCIADAS conforme tipo e utilização. Art. 158, III: REPARTIÇÃO - 50% pertencem ao MUNICÍPIO onde veículo licenciado. B correta. A, C, D, E incorretas.",
      banca: "CESPE",
      ano: 2023,
      cargo: "Auditor Fiscal - RFB"
    },
    {
      id: "tributario-imp-10",
      enunciado: "Sobre o ITR - Imposto Territorial Rural (CF/88, art. 153, VI e Lei 9.393/96), é INCORRETO afirmar:",
      alternativas: {
        A: "ITR: competência União. Fato gerador: propriedade, domínio útil ou posse de imóvel rural.",
        B: "Extrafiscal: desestimular latifúndios improdutivos. Alíquotas progressivas (área e grau utilização).",
        C: "Não incide sobre pequenas glebas rurais exploradas por proprietário sem outro imóvel (art. 153, §4º, II).",
        D: "ITR pode ser fiscalizado/cobrado por Município que optar (art. 153, §4º, III) - fica com 100% arrecadação.",
        E: "ITR incide sobre imóveis urbanos."
      },
      gabarito: "E",
      explicacao: "CF/88, art. 153, VI e Lei 9.393/96: ITR (Imposto Territorial Rural). COMPETÊNCIA: União. FATO GERADOR: propriedade, domínio útil ou posse de IMÓVEL RURAL (localização/destinação - CTN, art. 29). EXTRAFISCAL: desestimular latifúndios improdutivos - alíquotas PROGRESSIVAS (área + grau utilização - §4º, I). §4º, II: NÃO incide sobre pequenas glebas rurais (exploradas proprietário sem outro imóvel). §4º, III: Município que optar fiscalizar/cobrar fica com 100% (senão 50% - art. 158, II). E INCORRETA - ITR incide sobre RURAL, não urbano (urbano: IPTU). A, B, C, D corretas.",
      banca: "FCC",
      ano: 2022,
      cargo: "Auditor Fiscal - SEFAZ"
    }
  ],

  // TEMA 5: Taxas (10 questões)
  "taxas": [
    {
      id: "tributario-taxa-01",
      enunciado: "Sobre o conceito e características das taxas (CF/88, art. 145, II e CTN, art. 77), é correto afirmar:",
      alternativas: {
        A: "Taxas são tributos não vinculados.",
        B: "Taxas: tributos VINCULADOS. Fato gerador: exercício regular PODER DE POLÍCIA, ou utilização (efetiva ou potencial) de SERVIÇO PÚBLICO específico e divisível, prestado/posto à disposição do contribuinte. Não podem ter base de cálculo/fato gerador idênticos aos de impostos (Súmula 595 STF).",
        C: "Taxa pode ter o mesmo fato gerador de imposto.",
        D: "Serviço público para taxa não precisa ser específico.",
        E: "Taxa não pode ser cobrada por serviço potencial."
      },
      gabarito: "B",
      explicacao: "CF/88, art. 145, II e CTN, art. 77: TAXAS - tributos VINCULADOS. FATO GERADOR: I) exercício regular do PODER DE POLÍCIA; II) utilização, efetiva ou POTENCIAL, de SERVIÇO PÚBLICO específico e divisível, prestado ao contribuinte ou posto à sua disposição. §2º: taxas NÃO podem ter base de cálculo ou fato gerador IDÊNTICOS aos de IMPOSTOS. Súmula 595 STF: razoável semelhança é inconstitucional. B correta. A, C, D, E incorretas.",
      banca: "CESPE",
      ano: 2023,
      cargo: "Auditor Fiscal - RFB"
    },
    {
      id: "tributario-taxa-02",
      enunciado: "Em relação à taxa de polícia (CTN, art. 78), assinale a alternativa INCORRETA:",
      alternativas: {
        A: "Poder de polícia: atividade que limita/disciplina direito, interesse ou liberdade, regula prática de ato/abstenção de fato.",
        B: "Exercício deve ser regular (competência, forma legal, limites).",
        C: "Exemplos: taxa fiscalização vigilância sanitária, taxa fiscalização ambiental, taxa fiscalização funcionamento estabelecimento.",
        D: "Taxa de polícia pode ser cobrada sem qualquer atividade estatal.",
        E: "Poder de polícia: interesse público (segurança, higiene, ordem, costumes, disciplina produção/mercado, etc.)."
      },
      gabarito: "D",
      explicacao: "CTN, art. 78: PODER DE POLÍCIA: atividade da Administração que, limitando ou disciplinando direito, interesse ou liberdade, regula prática de ato ou abstenção de fato, em razão de interesse público (segurança, higiene, ordem, costumes, disciplina produção e mercado, exercício atividades econômicas dependentes concessão/autorização, tranquilidade pública, respeito propriedade/direitos individuais/coletivos). Parágrafo único: REGULAR - exercido nos limites da lei (competência, forma, limites). EXEMPLOS: taxa vigilância sanitária, taxa fiscalização ambiental (TCFA), taxa localização/funcionamento. D INCORRETA - exige ATIVIDADE estatal (fiscalização). A, B, C, E corretas.",
      banca: "FCC",
      ano: 2023,
      cargo: "Auditor Fiscal - SEFAZ"
    },
    {
      id: "tributario-taxa-03",
      enunciado: "Quanto à taxa de serviço público (CTN, art. 79), é correto afirmar:",
      alternativas: {
        A: "Qualquer serviço público gera taxa.",
        B: "Taxa de serviço: serviço deve ser ESPECÍFICO (destinatário determinado/determinável) e DIVISÍVEL (quantificar utilização - usuário ou unidade). Utilização: efetiva (usa) ou POTENCIAL (posto à disposição). Exemplos: taxa coleta lixo domiciliar, taxa esgoto, taxa expedição/renovação documentos.",
        C: "Serviço inespecífico pode ser remunerado por taxa.",
        D: "Utilização deve ser sempre efetiva.",
        E: "Serviço não divisível pode gerar taxa."
      },
      gabarito: "B",
      explicacao: "CTN, art. 79: TAXA DE SERVIÇO PÚBLICO. Requisitos do serviço: I) ESPECÍFICOS: quando possam ser destacados em unidades autônomas de intervenção, utilidade ou necessidade públicas (destinatário DETERMINADO ou determinável); II) DIVISÍVEIS: quando suscetíveis de utilização, separadamente, por parte de cada usuário. Art. 79-A: utilização EFETIVA (realmente usa) ou POTENCIAL (serviço posto à disposição). EXEMPLOS: taxa coleta lixo, taxa esgoto, taxa expedição documentos. Serviços gerais universais (uti universi - segurança, iluminação pública): impostos. B correta. A, C, D, E incorretas.",
      banca: "VUNESP",
      ano: 2023,
      cargo: "Auditor Fiscal - SEFAZ"
    },
    {
      id: "tributario-taxa-04",
      enunciado: "Sobre a base de cálculo das taxas (Súmula 595 STF e Súmula Vinculante 29), assinale a alternativa correta:",
      alternativas: {
        A: "Taxa pode ter base de cálculo igual a imposto.",
        B: "Súmula 595 STF: inconstitucional taxa com base de cálculo ou fato gerador idênticos aos de imposto. Súmula Vinculante 29 STF: inconstitucional taxa de segurança pública (serviço uti universi - não específico/divisível). Base de cálculo: deve refletir custo da atividade estatal ou intensidade uso serviço.",
        C: "Taxa de segurança pública é constitucional.",
        D: "Base de cálculo da taxa não tem limites.",
        E: "Qualquer semelhança com imposto é permitida."
      },
      gabarito: "B",
      explicacao: "Súmula 595 STF: 'É inconstitucional a taxa que tenha base de cálculo ou fato gerador idênticos aos que correspondam a IMPOSTO, nem se identifique com este'. Súmula Vinculante 29 STF: 'É inconstitucional a adoção, no cálculo do valor de taxa, de um ou mais elementos da base de cálculo própria de determinado imposto'. Taxa segurança pública: inconstitucional (serviço uti universi - não específico/divisível). BASE CÁLCULO taxa: custo atividade estatal ou intensidade uso. B correta. A, C, D, E incorretas.",
      banca: "FGV",
      ano: 2023,
      cargo: "Auditor Fiscal - RFB"
    },
    {
      id: "tributario-taxa-05",
      enunciado: "Em relação à diferença entre taxa e preço público (tarifa), é INCORRETO afirmar:",
      alternativas: {
        A: "Taxa: tributo, compulsória, regime público, prescritibilidade tributária.",
        B: "Preço público/tarifa: não é tributo, facultativa (contratual), regime privado, prescritibilidade civil/comercial.",
        C: "Taxa e preço público são a mesma coisa.",
        D: "Serviços públicos facultativos: remunerados por tarifa (ex: telefonia, energia).",
        E: "STF: água/esgoto podem ser remunerados por tarifa (não obrigatórios para todos)."
      },
      gabarito: "C",
      explicacao: "TAXA vs PREÇO PÚBLICO (tarifa): TAXA: 1) TRIBUTO; 2) COMPULSÓRIA (lei); 3) regime PÚBLICO (direito público); 4) prescritibilidade TRIBUTÁRIA (art. 174 CTN - 5 anos). PREÇO PÚBLICO: 1) NÃO é tributo (receita originária); 2) FACULTATIVA (contratual - usuário escolhe usar); 3) regime PRIVADO (direito privado); 4) prescrição CIVIL (CC/02). Serviços FACULTATIVOS: tarifa (ex: telefonia, energia, água/esgoto - STF). Serviços OBRIGATÓRIOS: taxa (ex: coleta lixo). C INCORRETA - são institutos DIFERENTES. A, B, D, E corretas.",
      banca: "CESPE",
      ano: 2022,
      cargo: "Auditor Fiscal - RFB"
    },
    {
      id: "tributario-taxa-06",
      enunciado: "Quanto à competência para instituir taxas, é correto afirmar:",
      alternativas: {
        A: "Só a União pode instituir taxas.",
        B: "CF/88, art. 145, II: União, Estados, DF, Municípios podem instituir taxas em razão do exercício do PODER DE POLÍCIA ou pela utilização de SERVIÇOS PÚBLICOS de sua competência. Competência segue atribuição constitucional do serviço/poder de polícia.",
        C: "Municípios não podem instituir taxas.",
        D: "Ente pode cobrar taxa por serviço de competência de outro ente.",
        E: "Taxas são sempre federais."
      },
      gabarito: "B",
      explicacao: "CF/88, art. 145, II: União, Estados, DF e Municípios podem instituir TAXAS. COMPETÊNCIA: segue a atribuição constitucional do SERVIÇO PÚBLICO ou PODER DE POLÍCIA. Ex: União - taxa passaporte (serviço federal); Estados - taxa vigilância sanitária estadual; Municípios - taxa alvará funcionamento (polícia municipal), taxa coleta lixo (serviço municipal). Ente só pode cobrar taxa por serviço/polícia de SUA competência constitucional. B correta. A, C, D, E incorretas.",
      banca: "FCC",
      ano: 2023,
      cargo: "Auditor Fiscal - SEFAZ"
    },
    {
      id: "tributario-taxa-07",
      enunciado: "Sobre a taxa judiciária (custas judiciais), assinale a alternativa INCORRETA:",
      alternativas: {
        A: "Custas judiciais: taxa de serviço (utilização serviço judiciário).",
        B: "Estados: competência instituir custas Justiça Estadual. União: Justiça Federal.",
        C: "Assistência judiciária gratuita: CF, art. 5º, LXXIV - Estado prestará aos necessitados.",
        D: "Custas judiciais não são taxas, são tarifas.",
        E: "Súmula 667 STF: viola garantia acesso à Justiça taxa judiciária calculada sem limite sobre valor causa."
      },
      gabarito: "D",
      explicacao: "CUSTAS JUDICIAIS: natureza de TAXA de serviço (utilização do Poder Judiciário). COMPETÊNCIA: Estados (Justiça Estadual), União (Justiça Federal). CF, art. 5º, LXXIV: Estado prestará ASSISTÊNCIA JURÍDICA INTEGRAL E GRATUITA aos que comprovarem insuficiência de recursos. Súmula 667 STF: 'Viola a garantia constitucional de acesso à jurisdição a taxa judiciária calculada sem limite sobre o valor da causa'. Lei 1.060/50: benefício justiça gratuita. D INCORRETA - custas SÃO taxas. A, B, C, E corretas.",
      banca: "VUNESP",
      ano: 2022,
      cargo: "Auditor Fiscal - SEFAZ"
    },
    {
      id: "tributario-taxa-08",
      enunciado: "Em relação ao princípio da retributividade das taxas, é correto afirmar:",
      alternativas: {
        A: "Taxa não precisa ter relação com atividade estatal.",
        B: "Retributividade: taxa deve ser CONTRAPRESTAÇÃO (retribuição) por atividade estatal específica (serviço ou polícia) relativa ao contribuinte. Não pode ser mera arrecadação geral. Base de cálculo: deve refletir CUSTO da atividade ou intensidade de USO. Relação comutativa (bilateral).",
        C: "Taxa pode ser cobrada sem prestação de serviço.",
        D: "Retributividade não é característica das taxas.",
        E: "Taxa tem natureza confiscatória."
      },
      gabarito: "B",
      explicacao: "RETRIBUTIVIDADE (princípio das taxas): taxa deve ser CONTRAPRESTAÇÃO por atividade estatal ESPECÍFICA referível ao contribuinte (serviço ou poder de polícia). NÃO é mera arrecadação geral (como impostos). BASE DE CÁLCULO: deve refletir CUSTO da atividade estatal ou intensidade de UTILIZAÇÃO do serviço. Relação BILATERAL/COMUTATIVA (há contraprestação). STF: taxa não pode ter caráter confiscatório. B correta. A, C, D, E incorretas.",
      banca: "FGV",
      ano: 2023,
      cargo: "Auditor Fiscal - RFB"
    },
    {
      id: "tributario-taxa-09",
      enunciado: "Quanto à taxa de fiscalização dos mercados de títulos e valores mobiliários (CVM), assinale a alternativa correta:",
      alternativas: {
        A: "Taxa CVM não existe.",
        B: "Taxa CVM: taxa de polícia (fiscalização mercado capitais). Competência: União. Fato gerador: exercício poder de polícia pela CVM (fiscalização mercado valores mobiliários). Lei 7.940/89. Base de cálculo: patrimônio líquido (sociedades), valor emissão (valores mobiliários). STJ: constitucional.",
        C: "Taxa CVM é estadual.",
        D: "Base de cálculo da taxa CVM viola Súmula 595 STF.",
        E: "Taxa CVM não é taxa de polícia."
      },
      gabarito: "B",
      explicacao: "TAXA DE FISCALIZAÇÃO CVM: Lei 7.940/89. NATUREZA: taxa de POLÍCIA (fiscalização mercado de valores mobiliários). COMPETÊNCIA: União (CVM - autarquia federal). FATO GERADOR: exercício do poder de polícia pela CVM. BASE CÁLCULO: I) patrimônio líquido (sociedades); II) valor da emissão (valores mobiliários). STJ (REsp Repetitivo): constitucional - base de cálculo NÃO coincide com imposto. Custeio atividade fiscalizatória. B correta. A, C, D, E incorretas.",
      banca: "CESPE",
      ano: 2023,
      cargo: "Auditor Fiscal - RFB"
    },
    {
      id: "tributario-taxa-10",
      enunciado: "Sobre a taxa de coleta de lixo domiciliar, é INCORRETO afirmar:",
      alternativas: {
        A: "Taxa de coleta de lixo: taxa de serviço público.",
        B: "Serviço: específico (destinatário determinável) e divisível (quantificável).",
        C: "Utilização pode ser potencial (serviço posto à disposição).",
        D: "Base de cálculo pode ser o valor venal do imóvel (igual IPTU).",
        E: "Competência: Municípios (serviço local)."
      },
      gabarito: "D",
      explicacao: "TAXA DE COLETA DE LIXO: taxa de SERVIÇO PÚBLICO (art. 145, II). Serviço: ESPECÍFICO (destinatário determinável - proprietário imóvel) e DIVISÍVEL (quantificável - por imóvel/volume). Utilização: POTENCIAL (serviço posto à disposição - não precisa usar efetivamente). COMPETÊNCIA: Municípios (serviço interesse local - art. 30 CF). BASE CÁLCULO: NÃO pode ser igual a imposto (valor venal IPTU - Súmula 595 STF). Pode: metragem, testada, frequência coleta. D INCORRETA - base IPTU viola Súmula 595. A, B, C, E corretas.",
      banca: "FCC",
      ano: 2022,
      cargo: "Auditor Fiscal - SEFAZ"
    }
  ],

  // TEMA 6: Contribuições (10 questões)
  "contribuicoes": [
    {
      id: "tributario-contrib-01",
      enunciado: "Sobre as contribuições especiais (CF/88, art. 149), é correto afirmar:",
      alternativas: {
        A: "Contribuições não são tributos.",
        B: "Contribuições especiais: espécie tributária (STF - teoria pentapartida). Competência: União (regra). Espécies: sociais (seguridade social, outras), intervenção domínio econômico (CIDE), interesse categorias profissionais/econômicas. Destinação específica (afetação receita). §1º: Estados/DF/Municípios - contribuição previdência servidores.",
        C: "Contribuições não têm destinação específica.",
        D: "Municípios podem criar contribuições sociais gerais.",
        E: "Contribuições são impostos."
      },
      gabarito: "B",
      explicacao: "CF/88, art. 149: CONTRIBUIÇÕES ESPECIAIS - espécie TRIBUTÁRIA (STF). COMPETÊNCIA: UNIÃO (regra). ESPÉCIES: I) SOCIAIS (seguridade social - saúde/previdência/assistência - art. 195; outras sociais - ex: salário-educação); II) CIDE (Contribuição Intervenção Domínio Econômico); III) categorias PROFISSIONAIS/ECONÔMICAS (interesse - ex: OAB, CRM, Sistema S). Característica: DESTINAÇÃO específica (vinculação receita). §1º: Estados/DF/Municípios podem instituir contribuição PREVIDENCIÁRIA servidores (RPPS). B correta. A, C, D, E incorretas.",
      banca: "CESPE",
      ano: 2023,
      cargo: "Auditor Fiscal - RFB"
    },
    {
      id: "tributario-contrib-02",
      enunciado: "Em relação às contribuições sociais para a seguridade social (CF/88, art. 195), assinale a alternativa INCORRETA:",
      alternativas: {
        A: "Seguridade social: saúde, previdência social, assistência social.",
        B: "Financiamento: contribuições sociais do empregador (folha salários, receita/faturamento, lucro), trabalhador, receitas concursos prognósticos.",
        C: "PIS e COFINS: contribuições sobre faturamento/receita.",
        D: "Contribuições sociais não observam anterioridade nonagesimal.",
        E: "Art. 195, §6º: contribuições sociais só podem ser exigidas após 90 dias da publicação da lei que as instituiu/modificou (anterioridade nonagesimal específica)."
      },
      gabarito: "D",
      explicacao: "CF/88, art. 195: SEGURIDADE SOCIAL (saúde + previdência + assistência). FINANCIAMENTO: contribuições sociais. Incidências (I-IV): empregador (folha salários, receita/faturamento, lucro), trabalhador, receita concursos prognósticos, importador. PIS (Lei 9.718/98) e COFINS (LC 70/91): faturamento/receita. §6º: contribuições sociais só exigidas após 90 DIAS da publicação lei (ANTERIORIDADE NONAGESIMAL específica - não se aplica exceção art. 150, §1º). D INCORRETA - OBSERVAM nonagesimal (§6º). A, B, C, E corretas.",
      banca: "FCC",
      ano: 2023,
      cargo: "Auditor Fiscal - SEFAZ"
    },
    {
      id: "tributario-contrib-03",
      enunciado: "Quanto à CIDE - Contribuição de Intervenção no Domínio Econômico, é correto afirmar:",
      alternativas: {
        A: "CIDE não é tributo.",
        B: "CIDE: contribuição especial (art. 149). Finalidade: intervenção no domínio econômico (regular setores econômicos). Exemplo: CIDE-Combustíveis (Lei 10.336/01 - importação/comercialização combustíveis). Receita vinculada (subsídios transporte, infraestrutura, programas ambientais). Art. 177, §4º: alíquotas podem ser reduzidas/restabelecidas por ato Executivo.",
        C: "CIDE-Combustíveis observa anterioridade anual.",
        D: "Receita da CIDE não tem destinação específica.",
        E: "Qualquer ente pode criar CIDE."
      },
      gabarito: "B",
      explicacao: "CIDE: Contribuição Intervenção Domínio Econômico (art. 149). COMPETÊNCIA: União. FINALIDADE: INTERVENÇÃO em setores econômicos (regulação). Exemplo: CIDE-COMBUSTÍVEIS (Lei 10.336/01): importação/comercialização petróleo/derivados, gás natural, álcool. Art. 177, §4º: receita VINCULADA (subsídios preços/transporte, infraestrutura transporte, programas ambientais). ALÍQUOTAS: podem ser REDUZIDAS/RESTABELECIDAS por ato Executivo (não observa anterioridade - §4º, I, b). B correta. A, C, D, E incorretas.",
      banca: "VUNESP",
      ano: 2023,
      cargo: "Auditor Fiscal - SEFAZ"
    },
    {
      id: "tributario-contrib-04",
      enunciado: "Sobre o PIS - Programa de Integração Social, assinale a alternativa correta:",
      alternativas: {
        A: "PIS não é contribuição social.",
        B: "PIS: contribuição social seguridade (art. 195, I, b). Incide sobre faturamento/receita empresas. Regimes: cumulativo (Lei 9.718/98 - alíquota 0,65%) e não-cumulativo (Lei 10.637/02 - alíquota 1,65% com créditos). PIS-Importação (Lei 10.865/04). Destinação: financiar seguro-desemprego, abono salarial.",
        C: "PIS só tem regime cumulativo.",
        D: "PIS incide sobre folha de salários.",
        E: "Alíquota do PIS cumulativo é 1,65%."
      },
      gabarito: "B",
      explicacao: "PIS (Programa Integração Social - LC 7/70, Lei 9.718/98, Lei 10.637/02): contribuição SOCIAL para seguridade (art. 195, I, b). INCIDÊNCIA: faturamento/RECEITA bruta empresas. REGIMES: I) CUMULATIVO (Lei 9.718/98): alíquota 0,65%, sem créditos; II) NÃO-CUMULATIVO (Lei 10.637/02): alíquota 1,65%, com créditos (sistema de débito-crédito). PIS-IMPORTAÇÃO (Lei 10.865/04). DESTINAÇÃO: financiar seguro-desemprego, abono salarial trabalhador. B correta. A, C, D, E incorretas.",
      banca: "FGV",
      ano: 2023,
      cargo: "Auditor Fiscal - RFB"
    },
    {
      id: "tributario-contrib-05",
      enunciado: "Em relação à COFINS - Contribuição para Financiamento da Seguridade Social, é INCORRETO afirmar:",
      alternativas: {
        A: "COFINS: contribuição social seguridade (art. 195, I, b).",
        B: "Incide sobre faturamento/receita empresas.",
        C: "Regimes: cumulativo (LC 70/91 - 3%) e não-cumulativo (Lei 10.833/03 - 7,6% com créditos).",
        D: "COFINS incide sobre importação de bens (COFINS-Importação - Lei 10.865/04).",
        E: "COFINS tem alíquota única de 3% para todos."
      },
      gabarito: "E",
      explicacao: "COFINS (Contribuição Financiamento Seguridade Social - LC 70/91, Lei 10.833/03): contribuição SOCIAL seguridade (art. 195, I, b). INCIDÊNCIA: faturamento/RECEITA bruta empresas. REGIMES: I) CUMULATIVO (LC 70/91): alíquota 3%, sem créditos; II) NÃO-CUMULATIVO (Lei 10.833/03): alíquota 7,6%, com créditos. COFINS-IMPORTAÇÃO (Lei 10.865/04). Destinação: financiar SEGURIDADE SOCIAL. E INCORRETA - há regimes cumulativo (3%) e não-cumulativo (7,6%). A, B, C, D corretas.",
      banca: "CESPE",
      ano: 2022,
      cargo: "Auditor Fiscal - RFB"
    },
    {
      id: "tributario-contrib-06",
      enunciado: "Quanto à CSLL - Contribuição Social sobre o Lucro Líquido, é correto afirmar:",
      alternativas: {
        A: "CSLL não é contribuição social.",
        B: "CSLL (Lei 7.689/88): contribuição social seguridade (art. 195, I, c). Incide sobre LUCRO LÍQUIDO empresas. Alíquotas: regra 9% (15% instituições financeiras/equiparadas - Lei 11.727/08). Base de cálculo: resultado do exercício (lucro real/presumido/arbitrado - regras similares IRPJ).",
        C: "CSLL incide sobre faturamento.",
        D: "Alíquota da CSLL é sempre 15%.",
        E: "CSLL não observa anterioridade nonagesimal."
      },
      gabarito: "B",
      explicacao: "CSLL - Contribuição Social sobre Lucro Líquido (Lei 7.689/88): contribuição SOCIAL seguridade (art. 195, I, c). INCIDÊNCIA: LUCRO LÍQUIDO das pessoas jurídicas. ALÍQUOTAS: I) regra: 9%; II) instituições FINANCEIRAS e equiparadas: 15% (Lei 11.727/08 - mais tarde 20% - Lei 13.169/15). BASE CÁLCULO: resultado do exercício (lucro real, presumido ou arbitrado - regras similares IRPJ). Anterioridade: nonagesimal (art. 195, §6º). B correta. A, C, D, E incorretas.",
      banca: "FCC",
      ano: 2023,
      cargo: "Auditor Fiscal - SEFAZ"
    },
    {
      id: "tributario-contrib-07",
      enunciado: "Sobre as contribuições de interesse de categorias profissionais/econômicas (art. 149), assinale a alternativa INCORRETA:",
      alternativas: {
        A: "Contribuições para entidades fiscalizadoras exercício profissional: OAB, CRM, CREA, CRC, etc.",
        B: "Natureza: contribuições especiais (art. 149). Finalidade: custeio atividades fiscalizatórias/regulatórias categorias.",
        C: "Chamadas 'contribuições corporativas' ou 'parafiscais'.",
        D: "Qualquer entidade pode instituir contribuições corporativas.",
        E: "STF: OAB tem natureza sui generis (não autarquia) mas cobra contribuição (anuidade)."
      },
      gabarito: "D",
      explicacao: "CF/88, art. 149: contribuições de interesse de categorias PROFISSIONAIS ou ECONÔMICAS. Finalidade: custeio atividades de fiscalização/regulação. EXEMPLOS: OAB (anuidade), CRM, CREA, CRC, CRO. Natureza: contribuições ESPECIAIS (parafiscais/corporativas). STF (ADI 3.026): OAB tem natureza SUI GENERIS (não é autarquia, mas exerce fiscalização profissão), cobrança constitucional. Sistema S (SESI, SENAI, SESC, SENAC): contribuições categorias econômicas. D INCORRETA - só entidades autorizadas por lei podem instituir (não qualquer entidade). A, B, C, E corretas.",
      banca: "VUNESP",
      ano: 2022,
      cargo: "Auditor Fiscal - SEFAZ"
    },
    {
      id: "tributario-contrib-08",
      enunciado: "Em relação ao Sistema S (SESI, SENAI, SESC, SENAC, etc.), é correto afirmar:",
      alternativas: {
        A: "Sistema S não cobra contribuições.",
        B: "Sistema S: entidades de serviço social/formação profissional (SESI, SENAI, SESC, SENAC, SENAR, SEBRAE, etc.). Custeio: contribuições sobre FOLHA DE SALÁRIOS empresas (categorias econômicas - art. 149). Natureza: contribuições especiais de interesse categorias econômicas. Destinação: educação, saúde, lazer trabalhadores/familiares.",
        C: "Contribuições do Sistema S incidem sobre faturamento.",
        D: "Sistema S é financiado por impostos federais.",
        E: "Contribuições do Sistema S não são tributos."
      },
      gabarito: "B",
      explicacao: "SISTEMA S: entidades de serviço social e formação profissional de categorias econômicas (SESI, SENAI, SESC, SENAC, SENAR, SEST, SENAT, SEBRAE, etc.). CUSTEIO: contribuições sobre FOLHA DE SALÁRIOS das empresas (art. 149 - categorias econômicas). NATUREZA: contribuições especiais. DESTINAÇÃO: educação, saúde, cultura, lazer trabalhadores e familiares. Alíquotas: variam (ex: SESI 1,5%, SENAI 1%, SESC 1,5%, SENAC 1%). B correta. A, C, D, E incorretas.",
      banca: "FGV",
      ano: 2023,
      cargo: "Auditor Fiscal - RFB"
    },
    {
      id: "tributario-contrib-09",
      enunciado: "Quanto à contribuição previdenciária dos servidores públicos (CF/88, art. 149, §1º), assinale a alternativa correta:",
      alternativas: {
        A: "Só a União pode instituir contribuição previdenciária de servidores.",
        B: "Art. 149, §1º: Estados, DF, Municípios podem instituir contribuição previdenciária de seus SERVIDORES, para custeio RPPS (Regime Próprio Previdência Social). Base de cálculo: não pode ser inferior à União (art. 40, §3º-C - no mínimo 11%). EC 41/03 e 103/19: reformas previdência.",
        C: "Contribuição incide sobre proventos aposentados (não pode).",
        D: "Servidor inativo não paga contribuição previdenciária.",
        E: "RPPS não pode ter contribuição previdenciária."
      },
      gabarito: "B",
      explicacao: "CF/88, art. 149, §1º (EC 41/03): Estados, DF, Municípios instituem contribuição previdenciária de seus SERVIDORES para custeio RPPS (Regime Próprio Previdência Social - art. 40). §1º-A: não pode ter base cálculo/alíquotas INFERIORES às contribuições UNIÃO (mínimo 11% - art. 40, §18). Art. 40, §§: INATIVOS (aposentados) e pensionistas pagam contribuição sobre parcela que exceda teto RGPS (EC 41/03). B correta. A, C (incompleta), D, E incorretas.",
      banca: "CESPE",
      ano: 2023,
      cargo: "Auditor Fiscal - RFB"
    },
    {
      id: "tributario-contrib-10",
      enunciado: "Sobre o salário-educação (CF/88, art. 212, §5º), é INCORRETO afirmar:",
      alternativas: {
        A: "Salário-educação: contribuição social (art. 212, §5º).",
        B: "Fonte adicional de financiamento da educação básica pública.",
        C: "Incide sobre folha de salários (empregadores).",
        D: "Alíquota: 2,5% sobre folha de salários.",
        E: "Salário-educação incide sobre faturamento das empresas."
      },
      gabarito: "E",
      explicacao: "CF/88, art. 212, §5º: SALÁRIO-EDUCAÇÃO - contribuição SOCIAL (fonte adicional financiamento educação básica pública). Lei 9.424/96, Decreto 6.003/06: incide sobre FOLHA DE SALÁRIOS das empresas. ALÍQUOTA: 2,5% sobre total remunerações pagas/creditadas empregados (segurados INSS). Repartição: quotas federal (FNDE), estadual, municipal. Natureza: contribuição social (não intervenção domínio econômico). E INCORRETA - incide sobre FOLHA, não faturamento. A, B, C, D corretas.",
      banca: "FCC",
      ano: 2022,
      cargo: "Auditor Fiscal - SEFAZ"
    }
  ]
};
