// Questões de Direito Administrativo - TEMAS 7-9 (30 questões finais)
// Completando 90 questões totais

export const questionsAdministrativoFinal = {
  // TEMA 7: Responsabilidade Civil do Estado (10 questões)
  "responsabilidade-civil-estado": [
    {
      id: "adm-resp-01",
      enunciado: "Sobre a responsabilidade civil do Estado (CF/88, art. 37, §6º), é correto afirmar:",
      alternativas: {
        A: "A responsabilidade do Estado é subjetiva, dependendo de comprovação de culpa.",
        B: "A responsabilidade objetiva do Estado se aplica apenas a atos comissivos.",
        C: "As pessoas jurídicas de direito público respondem pelos danos causados por seus agentes, independentemente de culpa.",
        D: "Não há direito de regresso contra o agente causador do dano.",
        E: "A responsabilidade objetiva exige nexo causal entre a conduta e o dano, mas não precisa haver dano."
      },
      gabarito: "C",
      explicacao: "CF/88, art. 37, §6º: 'As pessoas jurídicas de direito público e as de direito privado prestadoras de serviços públicos responderão pelos danos que seus agentes, nessa qualidade, causarem a terceiros, assegurado o direito de regresso contra o responsável nos casos de dolo ou culpa'. RESPONSABILIDADE OBJETIVA: não depende de culpa (teoria do risco administrativo). Requisitos: conduta estatal, dano e nexo causal. Direito de regresso contra agente: dolo ou culpa. A está incorreta. B está incorreta - também se aplica a omissões em alguns casos. D está incorreta. E está incorreta - dano é essencial.",
      banca: "CESPE",
      ano: 2023,
      cargo: "Procurador Federal - AGU"
    },
    {
      id: "adm-resp-02",
      enunciado: "Em relação às teorias sobre responsabilidade civil do Estado, assinale a alternativa INCORRETA:",
      alternativas: {
        A: "Teoria da irresponsabilidade: Estado não responde por danos (The King can do no wrong).",
        B: "Teoria civilista: Estado responde como particular, com base no Código Civil.",
        C: "Teoria da culpa do serviço (faute du service): Estado responde se houver falha no serviço.",
        D: "Teoria do risco integral: Estado responde sempre, mesmo sem nexo causal.",
        E: "Teoria do risco administrativo: Estado responde objetivamente, mas admite excludentes."
      },
      gabarito: "D",
      explicacao: "TEORIAS: 1) Irresponsabilidade (superada); 2) Civilista (superada); 3) Culpa do serviço/faute du service (responsabilidade subjetiva); 4) Risco administrativo (ADOTADA no Brasil - CF, art. 37, §6º): objetiva, mas admite EXCLUDENTES (culpa exclusiva da vítima, caso fortuito, força maior); 5) Risco integral: responsabilidade sem excludentes (EXCEPCIONAL: danos nucleares, atos de guerra). D está INCORRETA - teoria do risco integral NÃO exige nexo causal e não admite excludentes, mas não é a regra geral. A, B, C, E corretas.",
      banca: "FCC",
      ano: 2023,
      cargo: "Procurador do Estado - SP"
    },
    {
      id: "adm-resp-03",
      enunciado: "Quanto à responsabilidade civil do Estado por omissão, é correto afirmar:",
      alternativas: {
        A: "A responsabilidade por omissão é sempre objetiva.",
        B: "Na omissão, a responsabilidade é subjetiva, exigindo culpa anônima do serviço.",
        C: "O Estado nunca responde por omissão.",
        D: "A responsabilidade por omissão independe de dever jurídico específico.",
        E: "Omissão e comissão têm o mesmo tratamento jurídico."
      },
      gabarito: "B",
      explicacao: "RESPONSABILIDADE POR OMISSÃO: entendimento majoritário é que é SUBJETIVA (teoria da culpa do serviço/faute du service). Requisitos: 1) dever jurídico específico de agir; 2) omissão (não atuação quando havia dever); 3) culpa anônima (falha no serviço); 4) dano; 5) nexo causal. Exemplos: falta de fiscalização, demora na prestação de socorro, buraco em via pública (falta de manutenção). STF: responsabilidade subjetiva na omissão. A está incorreta. C está incorreta. D está incorreta - exige dever específico. E está incorreta.",
      banca: "VUNESP",
      ano: 2023,
      cargo: "Procurador - PGE/SP"
    },
    {
      id: "adm-resp-04",
      enunciado: "Sobre as excludentes de responsabilidade civil do Estado, assinale a alternativa correta:",
      alternativas: {
        A: "Culpa concorrente da vítima exclui totalmente a responsabilidade do Estado.",
        B: "Caso fortuito e força maior nunca excluem a responsabilidade estatal.",
        C: "Culpa exclusiva da vítima exclui a responsabilidade do Estado.",
        D: "Fato de terceiro sempre mantém a responsabilidade do Estado.",
        E: "Não existem excludentes na responsabilidade objetiva."
      },
      gabarito: "C",
      explicacao: "EXCLUDENTES (rompem nexo causal): 1) CULPA EXCLUSIVA DA VÍTIMA: exclui totalmente a responsabilidade; 2) CASO FORTUITO/FORÇA MAIOR: podem excluir (depende do caso); 3) FATO DE TERCEIRO: pode excluir (Estado pode responder e ter regresso contra terceiro). CULPA CONCORRENTE: reduz indenização proporcionalmente. ATENÇÃO: teoria do risco administrativo (Brasil) ADMITE excludentes. Risco integral NÃO admite (excepcional). A está incorreta - culpa concorrente reduz. B está incorreta. D está incorreta. E está incorreta.",
      banca: "FGV",
      ano: 2023,
      cargo: "Advogado - Prefeitura de Salvador"
    },
    {
      id: "adm-resp-05",
      enunciado: "Em relação ao direito de regresso do Estado contra o agente público, é INCORRETO afirmar:",
      alternativas: {
        A: "O direito de regresso é assegurado pela Constituição Federal.",
        B: "O regresso depende de dolo ou culpa do agente.",
        C: "A ação de regresso é imprescritível.",
        D: "O Estado pode descontar valores dos vencimentos do servidor, respeitado o contraditório.",
        E: "O agente responde subjetivamente na ação de regresso."
      },
      gabarito: "C",
      explicacao: "CF/88, art. 37, §6º: 'assegurado o direito de regresso contra o responsável nos casos de dolo ou culpa'. DIREITO DE REGRESSO: Estado indeniza vítima (responsabilidade objetiva) e depois cobra do agente (responsabilidade SUBJETIVA - dolo ou culpa). STF: direito de regresso NÃO é imprescritível (prazo prescricional ordinário - 5 anos, Lei 8.112/90 ou 3 anos Código Civil). C está INCORRETA - há prescrição. A, B, D, E corretas. Desconto: possível, com PAD e contraditório (Lei 8.112/90, art. 46).",
      banca: "CESPE",
      ano: 2022,
      cargo: "Procurador do Município - PGM/BH"
    },
    {
      id: "adm-resp-06",
      enunciado: "Quanto à responsabilidade civil por atos legislativos, assinale a alternativa correta:",
      alternativas: {
        A: "Leis inconstitucionais nunca geram responsabilidade do Estado.",
        B: "Leis de efeitos concretos podem gerar responsabilidade se causarem danos específicos e anormais.",
        C: "O Estado sempre responde por danos causados por leis.",
        D: "Não há possibilidade de responsabilização por atos legislativos.",
        E: "A responsabilidade por ato legislativo independe de declaração de inconstitucionalidade."
      },
      gabarito: "B",
      explicacao: "RESPONSABILIDADE POR ATOS LEGISLATIVOS: regra é NÃO haver responsabilidade (soberania legislativa). EXCEÇÕES: 1) Leis INCONSTITUCIONAIS que causem danos (após declaração de inconstitucionalidade); 2) Leis de EFEITOS CONCRETOS que causem danos anormais e específicos a determinadas pessoas; 3) Omissão legislativa quando houver dever constitucional de legislar. Requisitos: dano específico, anormal, e nexo causal. A está incorreta - podem gerar. C está incorreta - não é sempre. D está incorreta. E está incorreta - geralmente exige.",
      banca: "FCC",
      ano: 2023,
      cargo: "Analista Judiciário - TRF"
    },
    {
      id: "adm-resp-07",
      enunciado: "Sobre a responsabilidade civil por atos judiciais, é correto afirmar:",
      alternativas: {
        A: "Juízes nunca respondem por seus atos jurisdicionais.",
        B: "O Estado responde objetivamente por erro judiciário em processos criminais.",
        C: "Não há responsabilidade do Estado por atos judiciais.",
        D: "A responsabilidade por prisão além do tempo fixado na sentença independe de previsão legal.",
        E: "Demora na prestação jurisdicional nunca gera responsabilidade."
      },
      gabarito: "B",
      explicacao: "CF/88, art. 5º, LXXV: 'o Estado indenizará o condenado por erro judiciário, assim como o que ficar preso além do tempo fixado na sentença'. RESPONSABILIDADE POR ATOS JUDICIAIS: 1) ERRO JUDICIÁRIO PENAL: expressamente previsto na CF (condenação indevida); 2) PRISÃO ALÉM DO TEMPO: também prevista na CF; 3) OUTROS CASOS: doutrina admite se houver dolo/fraude ou violação manifesta da lei. Regra: atos jurisdicionais típicos não geram responsabilidade (independência). A está incorreta - podem em casos excepcionais. C, D, E incorretas.",
      banca: "VUNESP",
      ano: 2022,
      cargo: "Juiz Substituto - TJSP"
    },
    {
      id: "adm-resp-08",
      enunciado: "Em relação aos danos causados por multidões, assinale a alternativa INCORRETA:",
      alternativas: {
        A: "O Estado pode responder por danos causados por multidões se ficar caracterizada omissão.",
        B: "A responsabilidade por danos de multidão é sempre objetiva.",
        C: "É necessário demonstrar que havia dever estatal de evitar o dano.",
        D: "A ausência de policiamento adequado pode caracterizar omissão.",
        E: "A responsabilidade depende de culpa do serviço."
      },
      gabarito: "B",
      explicacao: "DANOS POR MULTIDÕES: entendimento majoritário é de responsabilidade SUBJETIVA (omissão estatal). Requisitos: 1) dever de garantir segurança; 2) omissão (falta de policiamento adequado, falta de fiscalização); 3) culpa anônima do serviço; 4) nexo causal; 5) dano. Exemplos: quebra-quebra, depredações, saques. Se houve omissão na garantia da ordem: Estado responde. B está INCORRETA - é subjetiva, não objetiva. A, C, D, E corretas.",
      banca: "FGV",
      ano: 2023,
      cargo: "Analista - MPE/RJ"
    },
    {
      id: "adm-resp-09",
      enunciado: "Quanto à responsabilidade civil das empresas públicas e sociedades de economia mista, é correto afirmar:",
      alternativas: {
        A: "Empresas estatais nunca respondem objetivamente.",
        B: "Empresas públicas prestadoras de serviços públicos respondem objetivamente (CF, art. 37, §6º).",
        C: "Sociedades de economia mista exploradoras de atividade econômica respondem sempre objetivamente.",
        D: "Não se aplica o art. 37, §6º da CF às empresas estatais.",
        E: "A natureza da atividade não influencia o regime de responsabilidade."
      },
      gabarito: "B",
      explicacao: "CF/88, art. 37, §6º: 'as pessoas jurídicas de direito público e as de direito privado PRESTADORAS DE SERVIÇOS PÚBLICOS responderão...'. EMPRESAS ESTATAIS: 1) PRESTADORAS DE SERVIÇO PÚBLICO (ex: Correios, Sabesp): responsabilidade OBJETIVA (art. 37, §6º); 2) EXPLORADORAS DE ATIVIDADE ECONÔMICA (ex: Banco do Brasil, Petrobras): responsabilidade SUBJETIVA (Código Civil - competem com particulares). STF: diferenciação pela natureza da atividade. A, C, D, E incorretas.",
      banca: "CESPE",
      ano: 2023,
      cargo: "Advogado - CAIXA"
    },
    {
      id: "adm-resp-10",
      enunciado: "Sobre a denunciação à lide na responsabilidade civil do Estado, assinale a alternativa correta:",
      alternativas: {
        A: "A denunciação à lide do agente público é obrigatória.",
        B: "A vítima deve acionar diretamente o agente público.",
        C: "A denunciação à lide do agente é facultativa para o Estado.",
        D: "O agente público responde solidariamente com o Estado perante a vítima.",
        E: "A vítima não pode processar diretamente o Estado."
      },
      gabarito: "C",
      explicacao: "AÇÃO DA VÍTIMA: deve ser proposta contra o ESTADO (pessoa jurídica), não contra o agente. Estado responde objetivamente. DENUNCIAÇÃO À LIDE do agente público: STF entende que é FACULTATIVA (não obrigatória), para não prejudicar vítima com demora. Estado indeniza vítima e depois, se quiser, ajuíza ação de regresso autônoma contra agente (responsabilidade subjetiva - dolo/culpa). Vítima NÃO deve acionar agente diretamente (salvo exceções). A está incorreta - facultativa. B, D, E incorretas.",
      banca: "FCC",
      ano: 2022,
      cargo: "Procurador - PGE/AM"
    }
  ],

  // TEMA 8: Serviços Públicos (10 questões)
  "servicos-publicos": [
    {
      id: "adm-serv-01",
      enunciado: "Sobre o conceito e características dos serviços públicos, é correto afirmar:",
      alternativas: {
        A: "Serviço público é toda atividade econômica exercida pelo Estado.",
        B: "Serviço público é atividade administrativa prestada pelo Estado para satisfazer necessidades coletivas.",
        C: "Apenas a União pode prestar serviços públicos.",
        D: "Serviços públicos não podem ser delegados a particulares.",
        E: "A prestação de serviços públicos é sempre gratuita."
      },
      gabarito: "B",
      explicacao: "SERVIÇO PÚBLICO (conceito): atividade material prestada pelo Estado ou por seus delegatários, sob regime predominantemente público, com o objetivo de satisfazer necessidades coletivas. CARACTERÍSTICAS: 1) continuidade; 2) generalidade/universalidade; 3) eficiência; 4) modicidade tarifária; 5) atualidade; 6) cortesia. Pode ser delegado (concessão, permissão). Pode ser remunerado (tarifa/taxa). Competência: todos os entes. A, C, D, E incorretas.",
      banca: "CESPE",
      ano: 2023,
      cargo: "Analista - TCU"
    },
    {
      id: "adm-serv-02",
      enunciado: "Em relação aos princípios dos serviços públicos, assinale a alternativa INCORRETA:",
      alternativas: {
        A: "Continuidade: serviço não pode ser interrompido.",
        B: "Generalidade/Universalidade: serviço deve ser prestado a todos de forma isonômica.",
        C: "Modicidade tarifária: preço do serviço deve ser acessível.",
        D: "Mutabilidade: o serviço pode ser alterado conforme interesse público.",
        E: "O direito de greve dos servidores públicos prevalece sobre a continuidade do serviço."
      },
      gabarito: "E",
      explicacao: "PRINCÍPIOS DOS SERVIÇOS PÚBLICOS (Leis do Serviço Público - Duguit): 1) CONTINUIDADE: não pode ser interrompido arbitrariamente (exceções: emergência, inadimplência após aviso, manutenção técnica); 2) GENERALIDADE/UNIVERSALIDADE: acessível a todos sem discriminação; 3) EFICIÊNCIA: serviço adequado; 4) MODICIDADE TARIFÁRIA: tarifa justa; 5) MUTABILIDADE/ATUALIZAÇÃO: adaptação às necessidades; 6) CORTESIA. E está INCORRETA - em greve de serviço essencial, deve-se garantir atendimento mínimo (continuidade). A, B, C, D corretas.",
      banca: "FCC",
      ano: 2023,
      cargo: "Técnico Judiciário - TRT"
    },
    {
      id: "adm-serv-03",
      enunciado: "Quanto à classificação dos serviços públicos, é correto afirmar:",
      alternativas: {
        A: "Serviços uti universi são prestados individualmente e divisíveis.",
        B: "Serviços uti singuli são prestados coletivamente e indivisíveis.",
        C: "Serviços uti universi (gerais) são remunerados por taxa.",
        D: "Serviços uti singuli (individuais) podem ser remunerados por tarifa.",
        E: "Não há diferença entre serviços uti universi e uti singuli."
      },
      gabarito: "D",
      explicacao: "CLASSIFICAÇÃO: 1) UTI UNIVERSI (gerais/indivisíveis): prestados à coletividade, não mensuráveis individualmente. Remuneração: IMPOSTOS. Ex: iluminação pública, segurança, limpeza urbana. 2) UTI SINGULI (individuais/divisíveis): prestados individualmente, mensuráveis. Remuneração: TAXA ou TARIFA. Ex: água, energia, telefone, transporte. Outras classificações: próprios/impróprios; exclusivos/não exclusivos; essenciais/não essenciais. A e B invertidas. C incorreta - impostos. E incorreta.",
      banca: "VUNESP",
      ano: 2023,
      cargo: "Procurador - Prefeitura de SP"
    },
    {
      id: "adm-serv-04",
      enunciado: "Sobre as formas de prestação de serviços públicos, assinale a alternativa correta:",
      alternativas: {
        A: "Serviços públicos só podem ser prestados diretamente pelo Estado.",
        B: "Concessão é forma de prestação direta.",
        C: "Prestação indireta ocorre por delegação (concessão, permissão, autorização).",
        D: "Empresas estatais não podem prestar serviços públicos.",
        E: "Particulares nunca podem prestar serviços públicos."
      },
      gabarito: "C",
      explicacao: "FORMAS DE PRESTAÇÃO: 1) DIRETA: pela própria Administração (órgãos públicos, autarquias, fundações públicas, empresas estatais); 2) INDIRETA/DELEGADA: por particulares mediante: a) CONCESSÃO (licitação, contrato, prazo determinado, remuneração por tarifa); b) PERMISSÃO (licitação, ato unilateral, precariedade); c) AUTORIZAÇÃO (ato unilateral, atividade de menor relevância, precariedade). CF, art. 175: delegação mediante licitação. A, B, D, E incorretas.",
      banca: "FGV",
      ano: 2023,
      cargo: "Analista - AL/RJ"
    },
    {
      id: "adm-serv-05",
      enunciado: "Em relação à concessão de serviços públicos, é INCORRETO afirmar:",
      alternativas: {
        A: "Concessão é formalizada por contrato administrativo.",
        B: "Exige prévia licitação na modalidade concorrência.",
        C: "A remuneração do concessionário é feita, em regra, por tarifa paga pelo usuário.",
        D: "A concessão é ato unilateral e precário do Poder Público.",
        E: "O prazo da concessão é determinado."
      },
      gabarito: "D",
      explicacao: "CONCESSÃO DE SERVIÇO PÚBLICO (Lei 8.987/95, CF art. 175): delegação contratual da prestação de serviço público. Características: 1) CONTRATO administrativo (bilateral); 2) Licitação prévia (concorrência); 3) Prazo DETERMINADO; 4) Remuneração por TARIFA (usuário); 5) Risco do concessionário; 6) Fiscalização estatal; 7) Reversão dos bens. D está INCORRETA - concessão é CONTRATUAL, não unilateral; não é precária (tem prazo). Autorização é unilateral e precária. A, B, C, E corretas.",
      banca: "CESPE",
      ano: 2023,
      cargo: "Procurador Federal - AGU"
    },
    {
      id: "adm-serv-06",
      enunciado: "Quanto à permissão de serviços públicos, assinale a alternativa correta:",
      alternativas: {
        A: "Permissão é contrato bilateral de prazo indeterminado.",
        B: "Permissão é ato unilateral, discricionário e precário.",
        C: "Permissão não exige licitação.",
        D: "Permissão e concessão são institutos idênticos.",
        E: "Permissão é sempre gratuita."
      },
      gabarito: "B",
      explicacao: "PERMISSÃO (CF, art. 175, Lei 8.987/95): delegação de serviço público. Características: 1) ATO UNILATERAL (não é contrato, apesar da Lei 8.987 usar termo 'contrato de adesão'); 2) DISCRICIONÁRIO; 3) PRECÁRIO (pode ser revogado); 4) EXIGE licitação; 5) Remuneração por tarifa; 6) Prazo indeterminado (em regra). Diferença da concessão: precariedade, natureza unilateral. Usa-se para serviços menos complexos ou por prazo menor. A, C, D, E incorretas.",
      banca: "FCC",
      ano: 2022,
      cargo: "Procurador Municipal - Recife"
    },
    {
      id: "adm-serv-07",
      enunciado: "Sobre a autorização de serviços públicos, é correto afirmar:",
      alternativas: {
        A: "Autorização exige sempre licitação.",
        B: "Autorização é ato bilateral e solene.",
        C: "Autorização é ato unilateral, discricionário e precário, para atividades de menor relevância.",
        D: "Autorização e concessão têm o mesmo regime jurídico.",
        E: "Autorização é sempre por prazo determinado."
      },
      gabarito: "C",
      explicacao: "AUTORIZAÇÃO: delegação de serviço público. Características: 1) ATO UNILATERAL; 2) DISCRICIONÁRIO; 3) PRECÁRIO (revogável); 4) NÃO exige licitação (em regra); 5) Para atividades de MENOR RELEVÂNCIA ou TRANSITÓRIAS; 6) Atende interesse predominante do particular. Ex: autorização de despejo de lixo, autorização de fechamento de rua. STF: se for atividade relevante, exige licitação. A está incorreta - não exige. B, D, E incorretas.",
      banca: "VUNESP",
      ano: 2023,
      cargo: "Advogado - Prefeitura de Campinas"
    },
    {
      id: "adm-serv-08",
      enunciado: "Em relação à Parceria Público-Privada (PPP), assinale a alternativa INCORRETA:",
      alternativas: {
        A: "PPP é modalidade de concessão especial (Lei 11.079/2004).",
        B: "As modalidades de PPP são: concessão patrocinada e concessão administrativa.",
        C: "PPP pode ser usada para valores inferiores a R$ 10 milhões.",
        D: "O contrato de PPP tem prazo mínimo de 5 anos e máximo de 35 anos.",
        E: "Na concessão patrocinada, há tarifa do usuário + contraprestação pública."
      },
      gabarito: "C",
      explicacao: "PARCERIA PÚBLICO-PRIVADA - PPP (Lei 11.079/2004): modalidade de concessão especial. Modalidades: 1) CONCESSÃO PATROCINADA: tarifa + contraprestação pública; 2) CONCESSÃO ADMINISTRATIVA: sem tarifa, só contraprestação (ex: presídio, hospital). Requisitos: valor superior a R$ 10 milhões; prazo entre 5 e 35 anos; não pode ser só fornecimento de mão-de-obra/equipamentos. Garantias: fundo especial, empresa privada. C está INCORRETA - valor MÍNIMO é R$ 10 milhões. A, B, D, E corretas.",
      banca: "FGV",
      ano: 2023,
      cargo: "Advogado - Prefeitura de Salvador"
    },
    {
      id: "adm-serv-09",
      enunciado: "Quanto aos direitos dos usuários de serviços públicos, é correto afirmar:",
      alternativas: {
        A: "Usuários não têm direito a serviço adequado.",
        B: "A Lei 8.987/95 não trata de direitos dos usuários.",
        C: "Usuários têm direito a serviço adequado, informações, não interrupção arbitrária e participação na fiscalização.",
        D: "Código de Defesa do Consumidor não se aplica a serviços públicos.",
        E: "Interrupção do serviço por inadimplência pode ser feita sem aviso prévio."
      },
      gabarito: "C",
      explicacao: "Lei 8.987/95, art. 7º: DIREITOS DOS USUÁRIOS: I) serviço adequado; II) receber informações; III) não sofrer interrupção arbitrária; IV) participar da fiscalização; V) levar ao conhecimento do poder público irregularidades. CDC (Lei 8.078/90): aplica-se a serviços públicos. Interrupção: possível por inadimplência, mas com aviso prévio. STJ: aplica CDC. A, B, D, E incorretas.",
      banca: "CESPE",
      ano: 2022,
      cargo: "Analista - TCE/RJ"
    },
    {
      id: "adm-serv-10",
      enunciado: "Sobre a remuneração dos serviços públicos, assinale a alternativa correta:",
      alternativas: {
        A: "Serviços públicos são sempre gratuitos.",
        B: "Taxa e tarifa são institutos idênticos.",
        C: "Taxa é tributo; tarifa é preço público, não é tributo.",
        D: "Tarifa não pode ser alterada sem lei.",
        E: "Taxa pode ser cobrada por concessionária privada."
      },
      gabarito: "C",
      explicacao: "REMUNERAÇÃO: 1) TAXA (tributo - CF, art. 145, II): instituída por lei, regime tributário, compulsória, pelo Estado. Serviço público específico e divisível ou poder de polícia. 2) TARIFA/PREÇO PÚBLICO (não é tributo): regime contratual, facultativa (quem usa paga), pode ser alterada sem lei, cobrada por concessionária. STF: distinção pela compulsoriedade e regime jurídico. A incorreta - podem ser remunerados. B incorreta. D incorreta - tarifa pode ser alterada contratualmente. E incorreta - taxa é tributo, só pelo Estado.",
      banca: "FCC",
      ano: 2023,
      cargo: "Procurador - PGE/AC"
    }
  ],

  // TEMA 9: Processo Administrativo (10 questões)
  "processo-administrativo": [
    {
      id: "adm-proc-01",
      enunciado: "Sobre o processo administrativo federal (Lei 9.784/99), é correto afirmar:",
      alternativas: {
        A: "Não se aplica aos Estados e Municípios.",
        B: "Aplica-se apenas aos órgãos da Administração Direta da União.",
        C: "Aplica-se à Administração Direta e Indireta da União.",
        D: "Não se aplica às empresas públicas e sociedades de economia mista.",
        E: "É uma lei estadual."
      },
      gabarito: "C",
      explicacao: "Lei 9.784/99 (Processo Administrativo Federal): aplica-se à Administração DIRETA e INDIRETA da UNIÃO (autarquias, fundações, empresas públicas, sociedades de economia mista no exercício de função administrativa). Estados e Municípios podem ter leis próprias (muitos adotam lei semelhante). Lei de âmbito FEDERAL. A, B, D, E incorretas.",
      banca: "CESPE",
      ano: 2023,
      cargo: "Analista - STJ"
    },
    {
      id: "adm-proc-02",
      enunciado: "Em relação aos princípios do processo administrativo (Lei 9.784/99, art. 2º), assinale a alternativa INCORRETA:",
      alternativas: {
        A: "Legalidade, finalidade, motivação, razoabilidade e proporcionalidade.",
        B: "Moralidade, ampla defesa, contraditório e segurança jurídica.",
        C: "Interesse público, eficiência e oficialidade.",
        D: "O sigilo é princípio fundamental do processo administrativo.",
        E: "A observância das formalidades essenciais à garantia de direitos é princípio."
      },
      gabarito: "D",
      explicacao: "Lei 9.784/99, art. 2º: princípios: legalidade, finalidade, motivação, razoabilidade, proporcionalidade, moralidade, ampla defesa, contraditório, segurança jurídica, interesse público, eficiência. Outros: oficialidade, gratuidade (em regra), informalismo moderado, verdade material, PUBLICIDADE. D está INCORRETA - PUBLICIDADE é princípio, não sigilo (salvo casos de sigilo legal). A, B, C, E corretas.",
      banca: "FCC",
      ano: 2023,
      cargo: "Analista Judiciário - TRF"
    },
    {
      id: "adm-proc-03",
      enunciado: "Quanto aos direitos dos administrados no processo administrativo, é correto afirmar:",
      alternativas: {
        A: "O administrado não tem direito a ser informado.",
        B: "É vedada a representação por advogado.",
        C: "O administrado tem direito a ser tratado com respeito, ter vista dos autos, fazer-se assistir por advogado e formular alegações.",
        D: "O administrado não pode requerer provas.",
        E: "A obtenção de cópias de documentos é proibida."
      },
      gabarito: "C",
      explicacao: "Lei 9.784/99, art. 3º: DIREITOS DOS ADMINISTRADOS: I) ser tratado com respeito; II) ter ciência da tramitação; III) ter vista dos autos; IV) obter cópias; V) fazer-se representar por advogado (facultativo, salvo quando obrigatório); VI) formular alegações e apresentar documentos; VII) requerer perícia. Princípios: ampla defesa, contraditório, publicidade. A, B, D, E incorretas.",
      banca: "VUNESP",
      ano: 2023,
      cargo: "Procurador - Prefeitura de Campinas"
    },
    {
      id: "adm-proc-04",
      enunciado: "Sobre os impedimentos e suspeições no processo administrativo, assinale a alternativa INCORRETA:",
      alternativas: {
        A: "Servidor que tenha interesse direto no processo está impedido.",
        B: "Cônjuge ou parente até terceiro grau de parte está impedido.",
        C: "Impedimento e suspeição não geram consequências no processo.",
        D: "Amizade íntima ou inimizade notória é causa de suspeição.",
        E: "O interessado pode arguir impedimento ou suspeição."
      },
      gabarito: "C",
      explicacao: "Lei 9.784/99, arts. 18-21: IMPEDIMENTO (causas objetivas): interesse direto ou indireta; parentesco até 3º grau; participação anterior. SUSPEIÇÃO (causas subjetivas): amizade/inimizade; interesse indireto; aconselhamento. Servidor impedido/suspeito deve comunicar e abster-se. Se não o fizer, interessado pode arguir. Consequência: atos são ANULADOS se prejudicarem parte. C está INCORRETA - geram anulação de atos. A, B, D, E corretas.",
      banca: "FGV",
      ano: 2023,
      cargo: "Analista Legislativo - ALERJ"
    },
    {
      id: "adm-proc-05",
      enunciado: "Em relação à competência no processo administrativo, é correto afirmar:",
      alternativas: {
        A: "A competência é sempre renunciável.",
        B: "A competência pode ser delegada, salvo quando se tratar de ato normativo ou decisão de recurso.",
        C: "A avocação de competência pode ser feita sem qualquer limitação.",
        D: "Não é possível delegar competência no processo administrativo.",
        E: "Competência pode ser delegada a órgão subordinado a outro Poder."
      },
      gabarito: "B",
      explicacao: "Lei 9.784/99, arts. 11-17: COMPETÊNCIA: irrenunciável, exercida pelo órgão competente (hierarquia). DELEGAÇÃO (art. 12): possível, SALVO: I) edição de atos normativos; II) decisão de recursos; III) matérias de competência exclusiva. Delegação a subordinado ou outro órgão (mesmo poder). AVOCAÇÃO (art. 15): excepcional, temporária, motivos relevantes, só entre subordinados. A, C, D, E incorretas.",
      banca: "CESPE",
      ano: 2022,
      cargo: "Procurador Federal - AGU"
    },
    {
      id: "adm-proc-06",
      enunciado: "Quanto à instrução do processo administrativo, assinale a alternativa correta:",
      alternativas: {
        A: "É vedada a realização de perícia.",
        B: "A Administração não pode determinar diligências de ofício.",
        C: "Os atos de instrução independem de requerimento do interessado; autoridade pode ordenar de ofício.",
        D: "Não se admite prova oral no processo administrativo.",
        E: "Documentos supervenientes não podem ser juntados."
      },
      gabarito: "C",
      explicacao: "Lei 9.784/99, arts. 29-37: INSTRUÇÃO: fase de coleta de provas e informações. Autoridade pode determinar de OFÍCIO ou a requerimento: provas, perícias, inspeções, documentos, depoimentos. Princípios: verdade material, oficialidade, impulso oficial. Admite-se qualquer meio de prova (documentos, perícia, inspeção, testemunhas). Documentos supervenientes podem ser juntados. A, B, D, E incorretas.",
      banca: "FCC",
      ano: 2023,
      cargo: "Analista - TRT/15"
    },
    {
      id: "adm-proc-07",
      enunciado: "Sobre a decisão no processo administrativo, é INCORRETO afirmar:",
      alternativas: {
        A: "A decisão deve ser motivada.",
        B: "A motivação pode ser feita por declaração de concordância com fundamentos de pareceres.",
        C: "A decisão pode ser totalmente imotivada.",
        D: "A autoridade deve decidir todos os assuntos de sua competência.",
        E: "O desatendimento de prazo pela Administração não implica preclusão."
      },
      gabarito: "C",
      explicacao: "Lei 9.784/99, arts. 38-51: DECISÃO: deve ser MOTIVADA (art. 50), indicando fatos e fundamentos jurídicos. Motivação pode ser: expressa, por referência a pareceres (art. 50, §1º), relatórios. Autoridade tem DEVER DE DECIDIR (art. 48). Prazo para Administração: não há preclusão (pode decidir a qualquer tempo). C está INCORRETA - decisão DEVE ser motivada. A, B, D, E corretas.",
      banca: "VUNESP",
      ano: 2022,
      cargo: "Procurador - PGE/SP"
    },
    {
      id: "adm-proc-08",
      enunciado: "Em relação aos recursos administrativos, assinale a alternativa correta:",
      alternativas: {
        A: "Recurso administrativo não é gratuito.",
        B: "Recurso tem efeito suspensivo automático.",
        C: "O recurso administrativo tramita por no máximo 3 instâncias, salvo disposição legal diversa.",
        D: "Reforma prejudicial (reformatio in pejus) é sempre possível.",
        E: "Não há prazo para interposição de recurso administrativo."
      },
      gabarito: "C",
      explicacao: "Lei 9.784/99, arts. 56-67: RECURSO ADMINISTRATIVO: gratuito (art. 2º), prazo de 10 dias (art. 59), salvo disposição legal. EFEITO: em regra, NÃO suspensivo (art. 61), salvo se autoridade conceder ou lei prever. INSTÂNCIAS: máximo de 3 (art. 57), salvo lei. REFORMATIO IN PEJUS: VEDADA (art. 64, §ú) - não pode piorar situação do recorrente. A, B, D, E incorretas.",
      banca: "FGV",
      ano: 2023,
      cargo: "Analista - MPE/RJ"
    },
    {
      id: "adm-proc-09",
      enunciado: "Quanto aos prazos no processo administrativo, é correto afirmar:",
      alternativas: {
        A: "Prazos contam-se em dias úteis.",
        B: "Não se admite prorrogação de prazos.",
        C: "Prazos começam a contar da data de publicação oficial do ato.",
        D: "Não há prazo fatal para o administrado.",
        E: "Todos os prazos são de 30 dias."
      },
      gabarito: "C",
      explicacao: "Lei 9.784/99, arts. 22-28: PRAZOS: 1) Contam-se de forma CONTÍNUA (não param em feriados); 2) Início: data de PUBLICAÇÃO oficial (art. 66); 3) Prorrogação: possível por igual período (art. 24); 4) Para administrado: FATAL (art. 66); 5) Para Administração: NÃO precluem. Prazo geral: 5 dias (art. 23). Em dias corridos. A está incorreta. B, D, E incorretas.",
      banca: "CESPE",
      ano: 2023,
      cargo: "Procurador do Município - PGM/BH"
    },
    {
      id: "adm-proc-10",
      enunciado: "Sobre a revisão do processo administrativo, assinale a alternativa correta:",
      alternativas: {
        A: "Não existe possibilidade de revisão de processo encerrado.",
        B: "A Administração pode rever seus atos quando eivados de ilegalidade, mas deve respeitar direitos adquiridos.",
        C: "A revisão pode piorar a situação do interessado.",
        D: "Não há prazo decadencial para anular atos administrativos.",
        E: "Atos favoráveis podem ser anulados a qualquer tempo."
      },
      gabarito: "B",
      explicacao: "Lei 9.784/99, arts. 53-54: REVISÃO: Administração pode ANULAR atos ilegais (autotutela - Súmula 473 STF) e REVOGAR atos inconvenientes. Anulação: prazo DECADENCIAL de 5 anos para atos favoráveis (art. 54), salvo má-fé. Deve respeitar: direitos adquiridos, boa-fé, segurança jurídica. REFORMATIO IN PEJUS: vedada (não pode piorar). A está incorreta. C está incorreta. D está incorreta - 5 anos. E está incorreta - 5 anos.",
      banca: "FCC",
      ano: 2022,
      cargo: "Defensor Público - DPE/SP"
    }
  ]
};
