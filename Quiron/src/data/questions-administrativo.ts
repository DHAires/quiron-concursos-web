// Questões de Direito Administrativo - 90 questões totais (9 temas x 10 questões)

export const questionsAdministrativo = {
  // TEMA 1: Princípios da Administração Pública (10 questões)
  "principios-administracao": [
    {
      id: "adm-princ-01",
      enunciado: "Sobre os princípios da Administração Pública previstos no art. 37 da Constituição Federal, é correto afirmar:",
      alternativas: {
        A: "Os princípios expressos são: legalidade, impessoalidade, moralidade, publicidade e eficiência.",
        B: "O princípio da eficiência não tem previsão constitucional.",
        C: "Apenas a legalidade é princípio expresso.",
        D: "A moralidade não é princípio constitucional da Administração Pública.",
        E: "A publicidade pode ser absoluta, permitindo qualquer forma de divulgação."
      },
      gabarito: "A",
      explicacao: "Art. 37, caput: 'A administração pública direta e indireta de qualquer dos Poderes da União, dos Estados, do Distrito Federal e dos Municípios obedecerá aos princípios de legalidade, impessoalidade, moralidade, publicidade e eficiência'. Mnemônico: LIMPE. O princípio da eficiência foi incluído pela EC 19/98 (Reforma Administrativa). B está incorreta. C está incorreta - são cinco. D está incorreta. E está incorreta - publicidade não pode ser usada para promoção pessoal.",
      banca: "CESPE",
      ano: 2023,
      cargo: "Técnico Administrativo - ANATEL"
    },
    {
      id: "adm-princ-02",
      enunciado: "Em relação ao princípio da legalidade administrativa, assinale a alternativa INCORRETA:",
      alternativas: {
        A: "O administrador público só pode fazer o que a lei permite ou autoriza.",
        B: "Difere do princípio da legalidade aplicado aos particulares.",
        C: "O administrador pode fazer tudo o que a lei não proíbe.",
        D: "A atuação administrativa deve ter fundamento legal.",
        E: "É um dos pilares do Estado de Direito."
      },
      gabarito: "C",
      explicacao: "No Direito Administrativo, vigora a 'legalidade estrita': o administrador SÓ pode fazer o que a lei permite ou autoriza. Diferentemente dos particulares, que podem fazer tudo que a lei não proíbe (autonomia da vontade), o administrador público está vinculado à lei. A está correta. B está correta - há diferença entre legalidade pública e privada. D e E estão corretas.",
      banca: "FCC",
      ano: 2023,
      cargo: "Analista Judiciário - TRT"
    },
    {
      id: "adm-princ-03",
      enunciado: "Quanto ao princípio da impessoalidade, é correto afirmar:",
      alternativas: {
        A: "Permite que o administrador escolha livremente quem será beneficiado pelos atos administrativos.",
        B: "A publicidade dos atos deve conter nomes, símbolos ou imagens que caracterizem promoção pessoal de autoridades ou servidores públicos.",
        C: "A atividade administrativa deve ser impessoal, sem favorecimentos ou perseguições.",
        D: "Não se aplica aos processos licitatórios.",
        E: "Autoriza discriminações não previstas em lei."
      },
      gabarito: "C",
      explicacao: "Art. 37, §1º: 'A publicidade dos atos, programas, obras, serviços e campanhas dos órgãos públicos deverá ter caráter educativo, informativo ou de orientação social, dela não podendo constar nomes, símbolos ou imagens que caracterizem promoção pessoal de autoridades ou servidores públicos'. O princípio da impessoalidade veda favorecimentos, discriminações, promoção pessoal. A e B estão incorretas. D está incorreta - aplica-se sim às licitações. E está incorreta.",
      banca: "VUNESP",
      ano: 2022,
      cargo: "Procurador do Município"
    },
    {
      id: "adm-princ-04",
      enunciado: "Sobre o princípio da moralidade administrativa, assinale a alternativa correta:",
      alternativas: {
        A: "Confunde-se com a legalidade, sendo conceitos idênticos.",
        B: "Exige que a Administração atue com ética, probidade, boa-fé e honestidade.",
        C: "Não tem relevância jurídica, sendo apenas recomendação moral.",
        D: "Permite atos legais mas imorais.",
        E: "Não pode ser controlado judicialmente."
      },
      gabarito: "B",
      explicacao: "A moralidade administrativa exige observância de padrões éticos de probidade, decoro e boa-fé. É princípio AUTÔNOMO em relação à legalidade: um ato pode ser legal mas imoral (ofende a moralidade administrativa). A CF prevê como causa de invalidade (art. 37, §4º - improbidade) e como fundamento para ação popular (art. 5º, LXXIII). A está incorreta. C está incorreta - tem relevância jurídica. D está incorreta - atos imorais são inválidos. E está incorreta - pode ser controlado.",
      banca: "FGV",
      ano: 2023,
      cargo: "Advogado - BNDES"
    },
    {
      id: "adm-princ-05",
      enunciado: "Em relação ao princípio da publicidade, é INCORRETO afirmar:",
      alternativas: {
        A: "A publicidade é requisito de eficácia dos atos administrativos.",
        B: "Todos os atos administrativos devem ser publicados, sem exceção.",
        C: "A publicidade pode ser restringida quando a segurança da sociedade ou do Estado exigir sigilo.",
        D: "Permite o controle dos atos administrativos pelos cidadãos.",
        E: "Relaciona-se ao direito à informação (art. 5º, XXXIII)."
      },
      gabarito: "B",
      explicacao: "Art. 5º, XXXIII: 'todos têm direito a receber dos órgãos públicos informações de seu interesse particular, ou de interesse coletivo ou geral, que serão prestadas no prazo da lei, sob pena de responsabilidade, ressalvadas aquelas cujo sigilo seja imprescindível à segurança da sociedade e do Estado'. Nem todos os atos precisam ser publicados: há exceções como atos internos preparatórios, atos que envolvam segurança nacional, etc. A publicidade pode ser restrita. A, C, D, E estão corretas.",
      banca: "CESPE",
      ano: 2022,
      cargo: "Analista - TCU"
    },
    {
      id: "adm-princ-06",
      enunciado: "Quanto ao princípio da eficiência, assinale a alternativa correta:",
      alternativas: {
        A: "Não tem previsão constitucional, sendo apenas doutrinário.",
        B: "Foi incluído na CF pela EC 19/1998 (Reforma Administrativa).",
        C: "Autoriza o descumprimento da legalidade em nome da eficiência.",
        D: "Aplica-se apenas à Administração Federal.",
        E: "Não tem aplicação prática."
      },
      gabarito: "B",
      explicacao: "O princípio da EFICIÊNCIA foi incluído no art. 37, caput, pela Emenda Constitucional 19/1998. Exige que a Administração atue com presteza, perfeição e rendimento funcional. A está incorreta - tem previsão constitucional. C está incorreta - eficiência não se sobrepõe à legalidade. D está incorreta - aplica-se a todos os entes federativos. E está incorreta - tem diversas aplicações práticas.",
      banca: "FCC",
      ano: 2023,
      cargo: "Auditor Fiscal - ISS/SP"
    },
    {
      id: "adm-princ-07",
      enunciado: "Sobre o princípio da supremacia do interesse público, é correto afirmar:",
      alternativas: {
        A: "É um princípio implícito que fundamenta diversos institutos de direito administrativo.",
        B: "Está expressamente previsto no art. 37 da Constituição.",
        C: "Significa que o interesse público sempre prevalece absolutamente sobre o privado.",
        D: "Não tem qualquer relação com as prerrogativas da Administração Pública.",
        E: "Foi revogado pela Constituição de 1988."
      },
      gabarito: "A",
      explicacao: "A supremacia do interesse público sobre o privado é princípio IMPLÍCITO, não expresso no art. 37. Fundamenta as prerrogativas da Administração (poder expropriatório, cláusulas exorbitantes em contratos, etc.). Porém, NÃO é absoluto - deve haver ponderação com direitos fundamentais. B está incorreta - é implícito. C está incorreta - não é absoluto. D está incorreta - fundamenta prerrogativas. E está incorreta.",
      banca: "VUNESP",
      ano: 2022,
      cargo: "Procurador do Estado - PGSP"
    },
    {
      id: "adm-princ-08",
      enunciado: "Em relação ao princípio da indisponibilidade do interesse público, assinale a alternativa INCORRETA:",
      alternativas: {
        A: "Os bens e interesses públicos não pertencem à Administração nem aos agentes públicos.",
        B: "O administrador não pode dispor livremente do patrimônio público.",
        C: "É um princípio implícito que fundamenta diversas restrições à atuação administrativa.",
        D: "Permite que o administrador renuncie a receitas públicas sem autorização legal.",
        E: "Fundamenta a necessidade de concurso público e licitação."
      },
      gabarito: "D",
      explicacao: "O princípio da INDISPONIBILIDADE significa que o administrador é mero gestor da coisa pública, não podendo dela dispor livremente. Deve atuar nos limites legais. NÃO pode renunciar a receitas sem autorização legal, não pode contratar sem licitação (salvo exceções legais), não pode admitir sem concurso, etc. A, B, C, E estão corretas. D está incorreta - contraria o princípio.",
      banca: "FGV",
      ano: 2023,
      cargo: "Analista - CGU"
    },
    {
      id: "adm-princ-09",
      enunciado: "Quanto ao princípio da autotutela administrativa, é correto afirmar:",
      alternativas: {
        A: "A Administração não pode anular seus próprios atos, dependendo sempre do Judiciário.",
        B: "A Administração pode anular seus atos ilegais e revogar os inconvenientes ou inoportunos.",
        C: "Está previsto expressamente no art. 37 da Constituição Federal.",
        D: "Aplica-se apenas aos atos vinculados.",
        E: "Foi superado pela Constituição de 1988."
      },
      gabarito: "B",
      explicacao: "Súmulas 346 e 473 do STF: a Administração pode anular seus próprios atos quando ilegais (controle de legalidade) e pode revogá-los quando inconvenientes ou inoportunos (controle de mérito), respeitados os direitos adquiridos. É manifestação da autotutela administrativa. A está incorreta - pode anular independente do Judiciário. C está incorreta - é princípio implícito. D está incorreta - revogação se aplica a discricionários. E está incorreta.",
      banca: "CESPE",
      ano: 2023,
      cargo: "Procurador Federal - AGU"
    },
    {
      id: "adm-princ-10",
      enunciado: "Sobre o princípio da motivação dos atos administrativos, assinale a alternativa correta:",
      alternativas: {
        A: "Apenas atos discricionários devem ser motivados.",
        B: "A motivação é dispensável para atos vinculados.",
        C: "A Administração deve indicar os fundamentos de fato e de direito de suas decisões.",
        D: "Não está previsto na Lei 9.784/99 (Lei do Processo Administrativo Federal).",
        E: "A motivação é facultativa em qualquer hipótese."
      },
      gabarito: "C",
      explicacao: "Lei 9.784/99, art. 50: 'Os atos administrativos deverão ser motivados, com indicação dos fatos e dos fundamentos jurídicos'. A motivação é a indicação das razões de fato e de direito que levaram à prática do ato. É obrigatória para atos vinculados E discricionários (especialmente estes). A está incorreta. B está incorreta - vinculados também devem ser motivados. D está incorreta - está prevista na Lei 9.784/99. E está incorreta - é obrigatória.",
      banca: "FCC",
      ano: 2022,
      cargo: "Defensor Público - DPE/RS"
    }
  ],

  // TEMA 2: Atos Administrativos (10 questões)
  "atos-administrativos": [
    {
      id: "adm-atos-01",
      enunciado: "Sobre o conceito de ato administrativo, é correto afirmar:",
      alternativas: {
        A: "É toda manifestação de vontade do Estado, incluindo atos legislativos e jurisdicionais.",
        B: "É manifestação unilateral de vontade da Administração Pública que cria, modifica ou extingue direitos.",
        C: "Atos administrativos são sempre bilaterais.",
        D: "Não se submete ao regime jurídico de direito público.",
        E: "É sinônimo de fato administrativo."
      },
      gabarito: "B",
      explicacao: "Ato administrativo (conceito predominante): manifestação UNILATERAL de vontade da Administração Pública que, no exercício de prerrogativas públicas e sob regime jurídico de direito público, visa produzir efeitos jurídicos imediatos. A está incorreta - exclui atos legislativos e jurisdicionais. C está incorreta - são unilaterais. D está incorreta - submete-se ao direito público. E está incorreta - ato administrativo (jurídico) difere de fato administrativo (material).",
      banca: "CESPE",
      ano: 2023,
      cargo: "Analista - CNJ"
    },
    {
      id: "adm-atos-02",
      enunciado: "Em relação aos atributos dos atos administrativos, assinale a alternativa INCORRETA:",
      alternativas: {
        A: "Presunção de legitimidade e veracidade significa que os atos se presumem verdadeiros e conforme a lei.",
        B: "Imperatividade é a capacidade de criar obrigações unilateralmente.",
        C: "Todos os atos administrativos têm autoexecutoriedade.",
        D: "Tipicidade é a correspondência do ato a uma previsão legal.",
        E: "A presunção de legitimidade é relativa (juris tantum), admitindo prova em contrário."
      },
      gabarito: "C",
      explicacao: "ATRIBUTOS dos atos administrativos: 1) Presunção de legitimidade/veracidade (relativa); 2) Imperatividade (poder de impor obrigações); 3) Autoexecutoriedade (execução sem Judiciário - MAS NEM TODOS têm); 4) Tipicidade (previsão legal). A autoexecutoriedade NÃO é universal - p.ex., cobrança de multa não paga não tem autoexecutoriedade, exige execução fiscal. A, B, D, E estão corretas.",
      banca: "FCC",
      ano: 2023,
      cargo: "Procurador Municipal - Campinas"
    },
    {
      id: "adm-atos-03",
      enunciado: "Quanto aos elementos/requisitos do ato administrativo, é correto afirmar:",
      alternativas: {
        A: "São cinco: competência, finalidade, forma, motivo e objeto.",
        B: "A competência é elemento discricionário.",
        C: "A finalidade pode ser livremente escolhida pelo administrador.",
        D: "A forma não é elemento essencial do ato administrativo.",
        E: "O motivo nunca é vinculado."
      },
      gabarito: "A",
      explicacao: "Os cinco elementos do ato administrativo (doutrina clássica - Hely Lopes Meirelles): 1) COMPETÊNCIA (quem pode praticar); 2) FINALIDADE (objetivo); 3) FORMA (exteriorização); 4) MOTIVO (razão de fato e de direito); 5) OBJETO (conteúdo/efeito). Mnemônico: Co-Fi-For-Mo-Ob. B está incorreta - competência é sempre VINCULADA. C está incorreta - finalidade também é vinculada. D está incorreta - forma é essencial. E está incorreta - em atos vinculados o motivo é vinculado.",
      banca: "VUNESP",
      ano: 2022,
      cargo: "Analista Judiciário - TJSP"
    },
    {
      id: "adm-atos-04",
      enunciado: "Sobre a classificação dos atos administrativos quanto à liberdade de atuação, assinale a alternativa correta:",
      alternativas: {
        A: "Atos vinculados são aqueles em que a lei deixa margem de escolha ao administrador.",
        B: "Atos discricionários são aqueles em que a lei estabelece todos os elementos sem margem de escolha.",
        C: "Em atos vinculados, o administrador não tem liberdade quanto a nenhum dos elementos.",
        D: "A discricionariedade é absoluta e não pode ser controlada.",
        E: "Não existe ato vinculado no direito brasileiro."
      },
      gabarito: "C",
      explicacao: "Atos VINCULADOS: todos os elementos são definidos em lei, não há margem de escolha (ex: licença para construir, aposentadoria compulsória). Atos DISCRICIONÁRIOS: a lei deixa margem de escolha quanto ao MOTIVO e/ou OBJETO (mérito administrativo) - mas competência, finalidade e forma são sempre vinculados (ex: autorização, permissão). A e B estão invertidas. D está incorreta - discricionariedade não é absoluta, pode ser controlada nos limites (legalidade, razoabilidade, proporcionalidade). E está incorreta.",
      banca: "FGV",
      ano: 2023,
      cargo: "Analista - TJ/SC"
    },
    {
      id: "adm-atos-05",
      enunciado: "Em relação à invalidação dos atos administrativos, é INCORRETO afirmar:",
      alternativas: {
        A: "Anulação é a retirada de ato ilegal, com efeitos retroativos (ex tunc).",
        B: "Revogação é a retirada de ato legal mas inconveniente ou inoportuno, com efeitos ex nunc.",
        C: "A anulação pode ser feita pela Administração ou pelo Judiciário.",
        D: "A revogação pode ser feita pelo Poder Judiciário de ofício.",
        E: "Atos que geram direitos adquiridos não podem ser revogados."
      },
      gabarito: "D",
      explicacao: "ANULAÇÃO: ato ilegal, efeitos ex tunc (retroativos), pode ser pela Administração (autotutela) ou Judiciário. REVOGAÇÃO: ato legal mas inconveniente/inoportuno, efeitos ex nunc (prospectivos), APENAS pela Administração (mérito administrativo - Judiciário não pode revogar de ofício atos de outros Poderes). D está INCORRETA - Judiciário não pode revogar atos administrativos de ofício por razões de mérito. A, B, C, E estão corretas.",
      banca: "CESPE",
      ano: 2022,
      cargo: "Procurador do Estado - PGE/CE"
    },
    {
      id: "adm-atos-06",
      enunciado: "Quanto à convalidação (saneamento) de atos administrativos, assinale a alternativa correta:",
      alternativas: {
        A: "Todos os atos viciados podem ser convalidados.",
        B: "A convalidação é a correção de vício sanável de ato administrativo, com efeitos retroativos.",
        C: "Vícios de competência e forma nunca podem ser convalidados.",
        D: "A convalidação tem sempre efeitos ex nunc.",
        E: "É sinônimo de conversão."
      },
      gabarito: "B",
      explicacao: "CONVALIDAÇÃO (Lei 9.784/99, art. 55): correção de vícios SANÁVEIS, com efeitos EX TUNC (retroativos). Podem ser convalidados: vícios de COMPETÊNCIA (se não exclusiva) e FORMA (se não essencial). NÃO podem ser convalidados: vícios de FINALIDADE, MOTIVO e OBJETO. A está incorreta - nem todos. C está incorreta - competência não exclusiva e forma não essencial podem ser convalidados. D está incorreta - efeitos são ex tunc. E está incorreta - conversão é instituto diferente.",
      banca: "FCC",
      ano: 2023,
      cargo: "Procurador - PGE/AM"
    },
    {
      id: "adm-atos-07",
      enunciado: "Sobre a teoria dos motivos determinantes, é correto afirmar:",
      alternativas: {
        A: "Aplica-se apenas a atos vinculados.",
        B: "A validade do ato vincula-se aos motivos declarados, mesmo que a motivação não seja obrigatória.",
        C: "Os motivos declarados não têm relevância para a validade do ato.",
        D: "Só se aplica quando há motivação obrigatória por lei.",
        E: "Foi superada pela doutrina moderna."
      },
      gabarito: "B",
      explicacao: "TEORIA DOS MOTIVOS DETERMINANTES: quando a Administração declara/indica os motivos do ato (mesmo que a motivação não seja obrigatória), a validade do ato fica vinculada à existência e legitimidade desses motivos. Se os motivos declarados forem inexistentes ou falsos, o ato é inválido. Aplica-se a atos vinculados E discricionários. A está incorreta. C está incorreta. D está incorreta - aplica-se mesmo quando motivação não é obrigatória. E está incorreta - é teoria vigente.",
      banca: "VUNESP",
      ano: 2022,
      cargo: "Procurador do Município - Santos"
    },
    {
      id: "adm-atos-08",
      enunciado: "Em relação aos atos administrativos negociais, assinale a alternativa INCORRETA:",
      alternativas: {
        A: "Licença é ato vinculado que reconhece direito preexistente.",
        B: "Autorização é ato discricionário e precário.",
        C: "Permissão é sempre ato vinculado.",
        D: "Aprovação é ato de controle que verifica a conformidade de outro ato.",
        E: "Homologação confirma a legalidade de ato já praticado."
      },
      gabarito: "C",
      explicacao: "ATOS NEGOCIAIS: LICENÇA (vinculado, definitivo - ex: licença para construir). AUTORIZAÇÃO (discricionário, precário - ex: porte de arma). PERMISSÃO (discricionário, precário - ex: permissão de uso de bem público). APROVAÇÃO (controle prévio). HOMOLOGAÇÃO (controle posterior). C está INCORRETA - permissão é discricionária, não vinculada. A, B, D, E estão corretas.",
      banca: "FGV",
      ano: 2023,
      cargo: "Advogado - Prefeitura de Niterói"
    },
    {
      id: "adm-atos-09",
      enunciado: "Quanto ao silêncio administrativo, é correto afirmar:",
      alternativas: {
        A: "O silêncio sempre significa deferimento do pedido.",
        B: "O silêncio nunca gera efeitos jurídicos.",
        C: "A regra no Brasil é que o silêncio não tem efeito de deferimento ou indeferimento, salvo previsão legal.",
        D: "O silêncio impede qualquer medida judicial.",
        E: "A Lei 9.784/99 estabelece que o silêncio sempre significa indeferimento."
      },
      gabarito: "C",
      explicacao: "No direito brasileiro, o SILÊNCIO ADMINISTRATIVO, em regra, NÃO tem efeito positivo (deferimento) nem negativo (indeferimento) automático, SALVO PREVISÃO LEGAL específica. Lei 9.784/99, art. 48: prazo máximo de 30 dias para decidir, podendo ser prorrogado. O silêncio pode ensejar: mandado de segurança, ação de obrigação de fazer, responsabilização do agente. A está incorreta. B está incorreta - pode gerar efeitos se lei previr. D está incorreta. E está incorreta.",
      banca: "CESPE",
      ano: 2023,
      cargo: "Analista - IBAMA"
    },
    {
      id: "adm-atos-10",
      enunciado: "Sobre os atos administrativos punitivos, assinale a alternativa correta:",
      alternativas: {
        A: "Multa administrativa não pode ser aplicada sem processo judicial.",
        B: "Interdição de atividade é ato punitivo que pode ser aplicado pela Administração.",
        C: "Atos punitivos dispensam motivação.",
        D: "Não se aplicam os princípios do contraditório e ampla defesa.",
        E: "Apenas o Poder Judiciário pode aplicar sanções."
      },
      gabarito: "B",
      explicacao: "ATOS PUNITIVOS: aplicam sanções (multa, interdição de atividade, apreensão de bens, destruição de objetos, etc.). Podem ser aplicados pela ADMINISTRAÇÃO no exercício do poder de polícia ou disciplinar. DEVEM respeitar: motivação, contraditório, ampla defesa (CF, art. 5º, LV). A está incorreta - pode ser aplicada administrativamente. C está incorreta - exigem motivação. D está incorreta - devem observar contraditório e ampla defesa. E está incorreta - Administração também pode.",
      banca: "FCC",
      ano: 2022,
      cargo: "Fiscal de Rendas - SEFAZ/SP"
    }
  ],

  // TEMA 3: Poderes Administrativos (10 questões)
  "poderes-administrativos": [
    {
      id: "adm-pod-01",
      enunciado: "Sobre os poderes administrativos, é correto afirmar:",
      alternativas: {
        A: "São poderes de soberania, idênticos aos Poderes Legislativo, Executivo e Judiciário.",
        B: "São prerrogativas conferidas à Administração para cumprir suas finalidades.",
        C: "Seu exercício é facultativo para o administrador.",
        D: "Não estão sujeitos a controle judicial.",
        E: "Confundem-se com os direitos subjetivos dos particulares."
      },
      gabarito: "B",
      explicacao: "Os poderes administrativos são PRERROGATIVAS (instrumentos) conferidos à Administração para que possa cumprir suas finalidades de interesse público. NÃO são faculdades, mas PODER-DEVER (seu exercício é obrigatório). São distintos dos Poderes Estatais (Legislativo, Executivo, Judiciário). Estão sujeitos a controle judicial (legalidade). A está incorreta. C está incorreta - é poder-dever. D está incorreta. E está incorreta.",
      banca: "CESPE",
      ano: 2023,
      cargo: "Auditor Federal de Controle Externo - TCU"
    },
    {
      id: "adm-pod-02",
      enunciado: "Em relação ao poder vinculado e poder discricionário, assinale a alternativa INCORRETA:",
      alternativas: {
        A: "Poder vinculado: a lei estabelece todos os elementos do ato sem margem de escolha.",
        B: "Poder discricionário: a lei deixa margem de escolha quanto à conveniência e oportunidade.",
        C: "A discricionariedade administrativa é absoluta e não pode ser controlada pelo Judiciário.",
        D: "Mesmo em atos discricionários, competência, finalidade e forma são vinculados.",
        E: "O Judiciário pode controlar os limites da discricionariedade (legalidade, razoabilidade, proporcionalidade)."
      },
      gabarito: "C",
      explicacao: "PODER VINCULADO: sem margem de escolha. PODER DISCRICIONÁRIO: margem de escolha no MÉRITO (motivo e objeto). MAS a discricionariedade NÃO é absoluta: 1) Competência, finalidade e forma são sempre vinculados; 2) Judiciário pode controlar os LIMITES: legalidade, desvio de poder/finalidade, razoabilidade, proporcionalidade, moralidade. Súmula 473 STF reconhece controle. C está INCORRETA. A, B, D, E estão corretas.",
      banca: "FCC",
      ano: 2023,
      cargo: "Procurador Judicial - PGM/SP"
    },
    {
      id: "adm-pod-03",
      enunciado: "Quanto ao poder hierárquico, é correto afirmar:",
      alternativas: {
        A: "Existe hierarquia entre União, Estados, Distrito Federal e Municípios.",
        B: "Permite ao superior rever, delegar, avocar e fiscalizar atos dos subordinados.",
        C: "Não permite delegação de competências.",
        D: "Existe hierarquia entre Poderes (Executivo, Legislativo e Judiciário).",
        E: "Não há relação entre hierarquia e organização administrativa."
      },
      gabarito: "B",
      explicacao: "PODER HIERÁRQUICO: estrutura escalonada de órgãos dentro de cada Poder. Decorrências: ordenar, fiscalizar, rever atos, delegar, avocar competências, aplicar sanções disciplinares. NÃO HÁ hierarquia: entre entes federativos (União, Estados, DF, Municípios); entre Poderes (Executivo, Legislativo, Judiciário); entre Administração Direta e Indireta (há vinculação, não hierarquia). A e D estão incorretas. C está incorreta - permite delegação. E está incorreta.",
      banca: "VUNESP",
      ano: 2022,
      cargo: "Analista Administrativo - UNESP"
    },
    {
      id: "adm-pod-04",
      enunciado: "Sobre o poder disciplinar, assinale a alternativa correta:",
      alternativas: {
        A: "Permite punir infrações funcionais de servidores e particulares vinculados à Administração.",
        B: "Confunde-se com o poder de polícia.",
        C: "As sanções disciplinares podem ser aplicadas sem processo administrativo.",
        D: "Não exige motivação dos atos punitivos.",
        E: "É discricionário quanto à aplicação ou não da punição."
      },
      gabarito: "A",
      explicacao: "PODER DISCIPLINAR: apurar e punir infrações funcionais de servidores e particulares com vínculo específico com a Administração (ex: alunos de escola pública, contratados). Exige: processo administrativo, contraditório, ampla defesa, motivação. É VINCULADO quanto ao dever de punir (se há infração comprovada, deve punir), mas pode ter discricionariedade na escolha da penalidade (dentro dos limites legais). B está incorreta - são distintos. C e D estão incorretas. E está incorreta - é vinculado quanto ao dever de punir.",
      banca: "FGV",
      ano: 2023,
      cargo: "Técnico Judiciário - TJ/RJ"
    },
    {
      id: "adm-pod-05",
      enunciado: "Em relação ao poder regulamentar (ou normativo), é INCORRETO afirmar:",
      alternativas: {
        A: "É a prerrogativa de editar atos normativos para dar fiel execução à lei.",
        B: "O decreto regulamentar não pode inovar no ordenamento jurídico.",
        C: "Regulamentos autônomos podem ser editados em qualquer matéria.",
        D: "O decreto é a forma típica de exercício do poder regulamentar.",
        E: "CF/88, art. 84, IV: compete privativamente ao Presidente da República 'sancionar, promulgar e fazer publicar as leis, bem como expedir decretos e regulamentos para sua fiel execução'."
      },
      gabarito: "C",
      explicacao: "PODER REGULAMENTAR: CF/88, art. 84, IV e VI. Tipos: 1) REGULAMENTOS DE EXECUÇÃO (ou executivos): complementam a lei, não inovam; 2) REGULAMENTOS AUTÔNOMOS: apenas nas hipóteses do art. 84, VI (organização e funcionamento da administração federal; extinção de cargos vagos). C está INCORRETA - regulamentos autônomos só em hipóteses específicas do art. 84, VI (EC 32/01). A, B, D, E estão corretas.",
      banca: "CESPE",
      ano: 2022,
      cargo: "Consultor Legislativo - Câmara dos Deputados"
    },
    {
      id: "adm-pod-06",
      enunciado: "Quanto ao poder de polícia, assinale a alternativa correta:",
      alternativas: {
        A: "É a atividade da Administração que limita direitos individuais em benefício do interesse público.",
        B: "Não pode impor obrigações de fazer ou não fazer.",
        C: "Confunde-se com a polícia judiciária.",
        D: "Não admite delegação a particulares em nenhuma hipótese.",
        E: "Não está previsto no Código Tributário Nacional."
      },
      gabarito: "A",
      explicacao: "PODER DE POLÍCIA (CTN, art. 78): atividade da Administração que condiciona/restringe o exercício de direitos e liberdades em prol do interesse público (segurança, saúde, ordem, etc.). Ciclo: ordem de polícia (legislativa), consentimento de polícia (fiscalização preventiva), fiscalização de polícia, sanção de polícia. B está incorreta - pode impor obrigações. C está incorreta - polícia administrativa difere de judiciária. D está incorreta - atos materiais podem ser delegados, mas atos coercitivos não. E está incorreta - está no CTN, art. 78.",
      banca: "FCC",
      ano: 2023,
      cargo: "Fiscal Tributário - SEFAZ/PE"
    },
    {
      id: "adm-pod-07",
      enunciado: "Sobre os atributos do poder de polícia, é correto afirmar:",
      alternativas: {
        A: "Discricionariedade: a lei sempre estabelece todos os elementos do ato de polícia.",
        B: "Autoexecutoriedade: permite execução coercitiva sem prévia autorização judicial.",
        C: "Coercibilidade: as medidas de polícia são sempre facultativas para o administrado.",
        D: "A autoexecutoriedade é absoluta e existe em todos os atos de polícia.",
        E: "Não há presunção de legitimidade nos atos de polícia."
      },
      gabarito: "B",
      explicacao: "ATRIBUTOS do poder de polícia: 1) DISCRICIONARIEDADE (em regra, mas pode ser vinculado); 2) AUTOEXECUTORIEDADE (execução direta, sem Judiciário - MAS NEM SEMPRE: cobrança de multa não paga exige execução fiscal); 3) COERCIBILIDADE (obrigatoriedade, não é facultativo). A está incorreta - pode haver discricionariedade. C está incorreta - são obrigatórias. D está incorreta - autoexecutoriedade não é absoluta. E está incorreta - há presunção de legitimidade.",
      banca: "VUNESP",
      ano: 2022,
      cargo: "Procurador - PGM/Guarulhos"
    },
    {
      id: "adm-pod-08",
      enunciado: "Em relação à delegação e avocação de competências, assinale a alternativa INCORRETA:",
      alternativas: {
        A: "Delegação é a transferência de competência de um órgão para outro.",
        B: "Avocação é o chamamento para si de competência atribuída a subordinado.",
        C: "Competências exclusivas podem ser delegadas.",
        D: "A Lei 9.784/99 disciplina a delegação e avocação.",
        E: "Atos normativos não podem ser objeto de delegação."
      },
      gabarito: "C",
      explicacao: "Lei 9.784/99, arts. 11-15: DELEGAÇÃO: transferência de competência (deve ser justificada, publicada). NÃO podem ser delegados (art. 13): competências EXCLUSIVAS, atos normativos, decisão de recursos. AVOCAÇÃO (art. 15): temporária, excepcional, motivos relevantes. C está INCORRETA - competências exclusivas NÃO podem ser delegadas. A, B, D, E estão corretas.",
      banca: "FGV",
      ano: 2023,
      cargo: "Analista - ALERJ"
    },
    {
      id: "adm-pod-09",
      enunciado: "Quanto ao poder-dever de agir da Administração, é correto afirmar:",
      alternativas: {
        A: "Os poderes administrativos são meras faculdades.",
        B: "O exercício dos poderes administrativos é obrigatório (poder-dever).",
        C: "O administrador pode escolher se exerce ou não seus poderes.",
        D: "Não há responsabilização pela omissão no exercício dos poderes.",
        E: "O poder-dever só se aplica a atos vinculados."
      },
      gabarito: "B",
      explicacao: "Os poderes administrativos são também DEVERES: o agente TEM O DEVER de exercê-los quando a situação exigir, sob pena de responsabilização por omissão. Não são faculdades. A omissão pode gerar: responsabilidade civil do Estado, responsabilidade administrativa do agente (improbidade, falta disciplinar), responsabilidade penal (prevaricação, condescendência criminosa). A e C estão incorretas. D está incorreta. E está incorreta - aplica-se também a discricionários.",
      banca: "CESPE",
      ano: 2023,
      cargo: "Analista - MPU"
    },
    {
      id: "adm-pod-10",
      enunciado: "Sobre o abuso de poder, assinale a alternativa correta:",
      alternativas: {
        A: "Ocorre apenas quando há excesso de poder.",
        B: "Pode se manifestar por excesso de poder (exorbitância) ou desvio de poder/finalidade.",
        C: "Desvio de poder é o uso de competências além dos limites legais.",
        D: "Excesso de poder é o uso do poder para fim diverso do interesse público.",
        E: "Não há controle judicial sobre abuso de poder."
      },
      gabarito: "B",
      explicacao: "ABUSO DE PODER: gênero com duas espécies: 1) EXCESSO DE PODER: agente atua além de sua competência, ultrapassa limites legais (vício de competência); 2) DESVIO DE PODER/FINALIDADE: agente usa competência legítima mas para fim diverso do interesse público (vício de finalidade). Ambos geram invalidade do ato e responsabilização. Há controle judicial. A está incorreta. C e D estão invertidas. E está incorreta.",
      banca: "FCC",
      ano: 2022,
      cargo: "Juiz de Direito - TJ/AL"
    }
  ]
};