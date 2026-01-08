// Questões de Direito Administrativo - 60 questões (6 temas x 10 questões)
// TEMAS 4-6: Licitações, Servidores e Improbidade

export const questionsAdministrativoExtra = {
  // TEMA 4: Licitações e Contratos (Lei 14.133/2021) (10 questões)
  "licitacoes-contratos": [
    {
      id: "adm-lic-01",
      enunciado: "Sobre a Lei 14.133/2021 (Nova Lei de Licitações e Contratos), é correto afirmar:",
      alternativas: {
        A: "Revogou imediatamente as Leis 8.666/93 e 10.520/2002.",
        B: "Estabeleceu período de transição de 2 anos para revogação das leis anteriores.",
        C: "Mantém as mesmas modalidades de licitação da Lei 8.666/93.",
        D: "Não se aplica às empresas estatais.",
        E: "É aplicável apenas à União."
      },
      gabarito: "B",
      explicacao: "Lei 14.133/2021, art. 191: estabeleceu vacatio legis especial, com período de transição. A lei entrou em vigor em 01/04/2021, mas as Leis 8.666/93 e 10.520/2002 foram revogadas apenas em 01/04/2023 (2 anos depois). Durante a transição, podia-se optar por qualquer das leis. A está incorreta - houve período de transição. C está incorreta - trouxe novas modalidades. D está incorreta - aplica-se também a estatais (salvo as sujeitas à Lei 13.303/16). E está incorreta - aplica-se a todos os entes federativos.",
      banca: "CESPE",
      ano: 2023,
      cargo: "Analista - TCU"
    },
    {
      id: "adm-lic-02",
      enunciado: "Em relação aos princípios da licitação previstos na Lei 14.133/2021, assinale a alternativa INCORRETA:",
      alternativas: {
        A: "Legalidade, impessoalidade, moralidade, publicidade e eficiência são princípios aplicáveis.",
        B: "O princípio do julgamento objetivo está previsto expressamente.",
        C: "A competitividade e a busca pela proposta mais vantajosa não são princípios da licitação.",
        D: "O desenvolvimento nacional sustentável é princípio da licitação.",
        E: "A segregação de funções é princípio específico das licitações."
      },
      gabarito: "C",
      explicacao: "Lei 14.133/2021, art. 5º: princípios da licitação incluem legalidade, impessoalidade, moralidade, publicidade, eficiência, interesse público, probidade, economicidade, desenvolvimento nacional sustentável, racionalização de contratações, competitividade, proposta mais vantajosa, segregação de funções, motivação, vinculação ao edital, julgamento objetivo, celeridade, razoabilidade, proporcionalidade, ampla defesa, contraditório, equidade, efetividade, integridade. C está INCORRETA - competitividade e proposta mais vantajosa SÃO princípios.",
      banca: "FCC",
      ano: 2023,
      cargo: "Procurador Municipal - SP"
    },
    {
      id: "adm-lic-03",
      enunciado: "Quanto às modalidades de licitação na Lei 14.133/2021, é correto afirmar:",
      alternativas: {
        A: "As modalidades são: concorrência, tomada de preços, convite, pregão e leilão.",
        B: "A modalidade diálogo competitivo foi extinta.",
        C: "Pregão deixou de existir como modalidade autônoma.",
        D: "As modalidades são: pregão, concorrência e leilão.",
        E: "Manteve todas as modalidades da Lei 8.666/93."
      },
      gabarito: "D",
      explicacao: "Lei 14.133/2021, art. 28: as modalidades de licitação são: I) PREGÃO (bens e serviços comuns); II) CONCORRÊNCIA (obras, serviços e compras especiais); III) CONCURSO (trabalhos técnicos); IV) LEILÃO (alienação de bens). Foram EXTINTAS: tomada de preços e convite. Foi CRIADA como critério: diálogo competitivo (não é modalidade). A, B, C, E estão incorretas.",
      banca: "VUNESP",
      ano: 2023,
      cargo: "Procurador do Estado - SP"
    },
    {
      id: "adm-lic-04",
      enunciado: "Sobre a dispensa e inexigibilidade de licitação na Lei 14.133/2021, assinale a alternativa correta:",
      alternativas: {
        A: "Dispensa: a licitação é impossível (inviabilidade de competição).",
        B: "Inexigibilidade: a licitação é possível mas a lei dispensa.",
        C: "Na inexigibilidade, há inviabilidade de competição (fornecedor exclusivo, serviços singulares, etc.).",
        D: "Não há diferença entre dispensa e inexigibilidade.",
        E: "A contratação direta independe de justificativa."
      },
      gabarito: "C",
      explicacao: "DISPENSA (art. 75): licitação é possível mas a lei autoriza a contratação direta (valor, emergência, etc.). INEXIGIBILIDADE (art. 74): inviabilidade de competição (fornecedor exclusivo, serviço técnico singular, artista consagrado, etc.). A e B estão invertidas. D está incorreta - há diferença. E está incorreta - exige processo de contratação direta com justificativa (art. 72).",
      banca: "FGV",
      ano: 2023,
      cargo: "Analista - AL/RJ"
    },
    {
      id: "adm-lic-05",
      enunciado: "Em relação aos critérios de julgamento na Lei 14.133/2021, é INCORRETO afirmar:",
      alternativas: {
        A: "Menor preço é um dos critérios de julgamento.",
        B: "Melhor técnica e preço pode ser adotado para serviços de natureza intelectual.",
        C: "Maior retorno econômico é critério aplicável.",
        D: "O único critério de julgamento é o menor preço.",
        E: "Maior desconto pode ser critério de julgamento."
      },
      gabarito: "D",
      explicacao: "Lei 14.133/2021, art. 34: critérios de julgamento: I) menor preço; II) maior desconto; III) melhor técnica ou conteúdo artístico; IV) técnica e preço; V) maior retorno econômico; VI) maior lance (leilão). D está INCORRETA - há diversos critérios além do menor preço. A, B, C, E estão corretas.",
      banca: "CESPE",
      ano: 2022,
      cargo: "Auditor - TCE/RJ"
    },
    {
      id: "adm-lic-06",
      enunciado: "Quanto ao planejamento da contratação previsto na Lei 14.133/2021, assinale a alternativa correta:",
      alternativas: {
        A: "O planejamento é dispensável para contratações de pequeno valor.",
        B: "A fase de planejamento inclui Estudo Técnico Preliminar e Termo de Referência ou Projeto Básico.",
        C: "O Estudo Técnico Preliminar não é obrigatório.",
        D: "O planejamento não precisa ser documentado.",
        E: "A análise de riscos não faz parte do planejamento."
      },
      gabarito: "B",
      explicacao: "Lei 14.133/2021, arts. 18-24: o planejamento é OBRIGATÓRIO (art. 11) e compreende: 1) Estudo Técnico Preliminar (ETP) - art. 18; 2) Gerenciamento de riscos - art. 19; 3) Termo de Referência (serviços e compras) ou Projeto Básico/Executivo (obras) - arts. 21-24. A está incorreta - planejamento é sempre obrigatório. C está incorreta - ETP é obrigatório. D e E estão incorretas.",
      banca: "FCC",
      ano: 2023,
      cargo: "Auditor Fiscal - SEFAZ/PE"
    },
    {
      id: "adm-lic-07",
      enunciado: "Sobre as garantias nos contratos administrativos (Lei 14.133/2021), é correto afirmar:",
      alternativas: {
        A: "A garantia é sempre obrigatória, em qualquer contrato.",
        B: "As modalidades de garantia são: caução em dinheiro, seguro-garantia ou fiança bancária.",
        C: "O valor da garantia pode ser de até 30% do valor do contrato.",
        D: "A garantia não pode ser complementada durante a execução.",
        E: "Obras e serviços de grande vulto não exigem garantia."
      },
      gabarito: "B",
      explicacao: "Lei 14.133/2021, art. 96: a Administração PODE exigir garantia (não é sempre obrigatória). Modalidades: I) caução em dinheiro; II) seguro-garantia; III) fiança bancária. Valor: até 5% para obras, serviços e fornecimentos em geral; até 10% para obras, serviços e fornecimentos de grande vulto. Pode ser complementada. A está incorreta - não é sempre obrigatória. C está incorreta - percentuais diferentes. D está incorreta. E está incorreta.",
      banca: "VUNESP",
      ano: 2022,
      cargo: "Procurador - PGM/Campinas"
    },
    {
      id: "adm-lic-08",
      enunciado: "Em relação às sanções administrativas na Lei 14.133/2021, assinale a alternativa INCORRETA:",
      alternativas: {
        A: "Advertência é uma das sanções previstas.",
        B: "Multa pode ser aplicada.",
        C: "Impedimento de licitar e contratar pode ser aplicado por até 3 anos.",
        D: "Declaração de inidoneidade não existe mais como sanção.",
        E: "As sanções são aplicadas em processo administrativo que assegure contraditório e ampla defesa."
      },
      gabarito: "D",
      explicacao: "Lei 14.133/2021, art. 156: sanções: I) advertência; II) multa; III) impedimento de licitar e contratar (até 3 anos); IV) declaração de inidoneidade (prazo indeterminado, enquanto perdurarem motivos ou até reabilitação). D está INCORRETA - declaração de inidoneidade continua existindo. A, B, C, E estão corretas. Art. 158: devido processo legal, contraditório e ampla defesa.",
      banca: "FGV",
      ano: 2023,
      cargo: "Advogado - Prefeitura de Salvador"
    },
    {
      id: "adm-lic-09",
      enunciado: "Quanto à duração dos contratos administrativos (Lei 14.133/2021), é correto afirmar:",
      alternativas: {
        A: "Contratos têm prazo máximo de 1 ano, sempre.",
        B: "Contratos podem ter duração compatível com a vigência dos créditos orçamentários.",
        C: "Não há limite de prazo para contratos de prestação contínua.",
        D: "O prazo máximo é sempre de 5 anos.",
        E: "Contratos não podem ultrapassar o exercício financeiro."
      },
      gabarito: "B",
      explicacao: "Lei 14.133/2021, art. 105: contratos têm duração compatível com a vigência dos créditos orçamentários, EXCETO: prestação contínua (até 5 anos, prorrogável até 10); aluguel de equipamentos e programas (até 5 anos); projetos contemplados no PPA (duração prevista nele); possibilidade de prorrogação prevista na lei. A, C, D, E estão incorretas.",
      banca: "CESPE",
      ano: 2023,
      cargo: "Procurador Federal - AGU"
    },
    {
      id: "adm-lic-10",
      enunciado: "Sobre a execução dos contratos administrativos na Lei 14.133/2021, assinale a alternativa correta:",
      alternativas: {
        A: "O contrato não pode ser alterado unilateralmente pela Administração.",
        B: "A Administração pode alterar unilateralmente o contrato para melhor adequação técnica ou modificação do projeto.",
        C: "O contratado pode suspender a execução por atraso de pagamento.",
        D: "Não há prerrogativas exorbitantes nos contratos administrativos.",
        E: "A teoria da imprevisão não se aplica."
      },
      gabarito: "B",
      explicacao: "Lei 14.133/2021, art. 124: a Administração PODE alterar unilateralmente o contrato para: modificação do projeto ou especificações para melhor adequação; acréscimo ou supressão (até 25% obras/serviços; até 50% reforma). Prerrogativas: fiscalizar, alterar, rescindir unilateralmente, aplicar sanções, ocupação provisória. C está incorreta - suspensão só após 2 meses de atraso (art. 137, III). A e D estão incorretas. E está incorreta - teoria da imprevisão/álea aplicável (art. 124, II, 'd').",
      banca: "FCC",
      ano: 2022,
      cargo: "Procurador - PGE/AM"
    }
  ],

  // TEMA 5: Servidores Públicos (10 questões)
  "servidores-publicos": [
    {
      id: "adm-serv-01",
      enunciado: "Sobre o conceito de agente público, é correto afirmar:",
      alternativas: {
        A: "Agente público é apenas o servidor estatutário concursado.",
        B: "É toda pessoa física que exerce função pública, temporária ou definitivamente, com ou sem remuneração.",
        C: "Agentes políticos não são considerados agentes públicos.",
        D: "Empregados públicos não são agentes públicos.",
        E: "Apenas os ocupantes de cargo efetivo são agentes públicos."
      },
      gabarito: "B",
      explicacao: "AGENTE PÚBLICO (conceito amplo): toda pessoa física que exerce função pública, de forma transitória ou permanente, com ou sem remuneração. Abrange: agentes políticos (Presidente, Governadores, Prefeitos, parlamentares); servidores estatutários (Lei 8.112/90); empregados públicos (CLT); temporários (art. 37, IX); militares; particulares em colaboração (mesários, jurados). A, C, D, E estão incorretas - conceito restritivo.",
      banca: "CESPE",
      ano: 2023,
      cargo: "Analista - STJ"
    },
    {
      id: "adm-serv-02",
      enunciado: "Em relação ao concurso público (CF/88, art. 37, II), assinale a alternativa INCORRETA:",
      alternativas: {
        A: "A investidura em cargo ou emprego público depende de aprovação prévia em concurso público de provas ou de provas e títulos.",
        B: "O prazo de validade do concurso será de até 2 anos, prorrogável uma vez por igual período.",
        C: "Nomeados em concurso anterior têm prioridade sobre novos concursados durante o prazo de validade.",
        D: "Cargos em comissão são exceção à regra do concurso público.",
        E: "Contratações temporárias dispensam concurso em qualquer hipótese."
      },
      gabarito: "E",
      explicacao: "CF/88, art. 37, II: exige concurso público de provas ou provas e títulos para cargo/emprego público. Prazo: até 2 anos, prorrogável uma vez (inciso III). Durante validade, aprovado tem prioridade sobre novos concursados (inciso IV). EXCEÇÕES: cargos em comissão (II); contratações temporárias por excepcional interesse público (IX - mas podem exigir processo seletivo simplificado). E está INCORRETA - contratações temporárias podem exigir seleção. A, B, C, D corretas.",
      banca: "FCC",
      ano: 2023,
      cargo: "Técnico Judiciário - TRT"
    },
    {
      id: "adm-serv-03",
      enunciado: "Quanto à acessibilidade aos cargos públicos, é correto afirmar:",
      alternativas: {
        A: "Apenas brasileiros natos podem ocupar cargos públicos.",
        B: "Brasileiros e estrangeiros têm acesso, na forma da lei.",
        C: "Estrangeiros estão sempre vedados de ocupar cargos públicos.",
        D: "Naturalizados não podem ser servidores públicos.",
        E: "A nacionalidade não é requisito para investidura."
      },
      gabarito: "B",
      explicacao: "CF/88, art. 37, I: 'os cargos, empregos e funções públicas são acessíveis aos brasileiros que preencham os requisitos estabelecidos em lei, assim como aos estrangeiros, na forma da lei'. Alguns cargos são privativos de brasileiros NATOS (CF, art. 12, §3º: Presidente, Vice, Presidente do Senado, Câmara e STF, Ministro de Estado da Defesa, carreira diplomática, oficial das Forças Armadas, Ministro do STF). A, C, D, E estão incorretas.",
      banca: "VUNESP",
      ano: 2022,
      cargo: "Analista - Prefeitura de SP"
    },
    {
      id: "adm-serv-04",
      enunciado: "Sobre cargos em comissão e funções de confiança (CF/88, art. 37, V), assinale a alternativa correta:",
      alternativas: {
        A: "Cargos em comissão e funções de confiança são destinados apenas às atribuições técnicas.",
        B: "Cargos em comissão são de livre nomeação e exoneração, destinados a atribuições de direção, chefia e assessoramento.",
        C: "Funções de confiança podem ser exercidas por qualquer pessoa.",
        D: "Não há percentual mínimo para servidores de carreira.",
        E: "Cargos em comissão exigem concurso público."
      },
      gabarito: "B",
      explicacao: "CF/88, art. 37, V: 'as funções de confiança, exercidas EXCLUSIVAMENTE por servidores ocupantes de cargo efetivo, e os cargos em comissão, a serem preenchidos por servidores de carreira nos casos, condições e percentuais mínimos previstos em lei, destinam-se APENAS às atribuições de direção, chefia e assessoramento'. Cargos em comissão: livre nomeação e exoneração. Funções de confiança: apenas efetivos. A está incorreta. C, D, E estão incorretas.",
      banca: "FGV",
      ano: 2023,
      cargo: "Técnico Legislativo - Câmara Municipal/RJ"
    },
    {
      id: "adm-serv-05",
      enunciado: "Em relação à estabilidade do servidor público, é INCORRETO afirmar:",
      alternativas: {
        A: "São estáveis após 3 anos de efetivo exercício os nomeados para cargo efetivo em virtude de concurso.",
        B: "A aquisição de estabilidade depende de avaliação de desempenho.",
        C: "O servidor estável pode ser demitido a qualquer tempo, sem processo.",
        D: "Servidor estável pode perder o cargo por sentença judicial transitada em julgado.",
        E: "Servidor estável pode perder o cargo mediante processo administrativo disciplinar com ampla defesa."
      },
      gabarito: "C",
      explicacao: "CF/88, art. 41: após 3 anos de efetivo exercício, adquire estabilidade o servidor nomeado para cargo efetivo em concurso, desde que aprovado em avaliação especial de desempenho. Perda do cargo (art. 41, §1º): I) sentença judicial transitada em julgado; II) processo administrativo disciplinar com ampla defesa; III) avaliação periódica de desempenho insuficiente (procedimento com ampla defesa). C está INCORRETA - não pode ser demitido sem processo. A, B, D, E corretas.",
      banca: "CESPE",
      ano: 2022,
      cargo: "Procurador do Estado - PGE/PE"
    },
    {
      id: "adm-serv-06",
      enunciado: "Quanto à acumulação de cargos públicos (CF/88, art. 37, XVI e XVII), assinale a alternativa correta:",
      alternativas: {
        A: "É vedada qualquer acumulação remunerada de cargos públicos.",
        B: "É permitida a acumulação de dois cargos de professor.",
        C: "Três cargos públicos podem ser acumulados livremente.",
        D: "A acumulação independe de compatibilidade de horários.",
        E: "Servidores podem acumular quantos cargos quiserem se não houver conflito de horário."
      },
      gabarito: "B",
      explicacao: "CF/88, art. 37, XVI: veda acumulação remunerada, EXCETO (quando houver compatibilidade de horários): a) dois cargos de professor; b) um de professor com outro técnico ou científico; c) dois cargos ou empregos privativos de profissionais de saúde com profissões regulamentadas. Art. 37, XVII: veda acumulação de proventos com remuneração (aposentado + cargo), salvo cargos acumuláveis. A está incorreta. C, D, E estão incorretas.",
      banca: "FCC",
      ano: 2023,
      cargo: "Analista Judiciário - TRF"
    },
    {
      id: "adm-serv-07",
      enunciado: "Sobre o teto remuneratório constitucional (CF/88, art. 37, XI), é correto afirmar:",
      alternativas: {
        A: "Não existe limite remuneratório para servidores públicos.",
        B: "O teto é o subsídio dos Ministros do Supremo Tribunal Federal.",
        C: "Vantagens pessoais não são computadas para fins de teto.",
        D: "O teto não se aplica a empresas públicas e sociedades de economia mista.",
        E: "Cada ente federativo define livremente seu teto."
      },
      gabarito: "B",
      explicacao: "CF/88, art. 37, XI (EC 41/03 e EC 47/05): teto remuneratório é o subsídio mensal dos Ministros do STF. Subtetos: Governadores e Desembargadores (Estados); Prefeitos (Municípios). Abrange vencimentos, vantagens pessoais e outras (exceto algumas como indenizações). Não se aplica a estatais que não recebam recursos públicos para custeio (art. 37, §9º). A, C, E estão incorretas. D está parcialmente incorreta.",
      banca: "VUNESP",
      ano: 2022,
      cargo: "Procurador - PGE/SP"
    },
    {
      id: "adm-serv-08",
      enunciado: "Em relação ao direito de greve dos servidores públicos, assinale a alternativa INCORRETA:",
      alternativas: {
        A: "O direito de greve será exercido nos termos e limites definidos em lei específica (CF, art. 37, VII).",
        B: "Na ausência de lei específica, o STF determinou aplicação analógica da lei de greve do setor privado.",
        C: "Servidores de atividades essenciais não podem fazer greve em nenhuma hipótese.",
        D: "O direito de greve é assegurado constitucionalmente.",
        E: "A falta de regulamentação não impede o exercício do direito."
      },
      gabarito: "C",
      explicacao: "CF/88, art. 37, VII: 'o direito de greve será exercido nos termos e nos limites definidos em lei específica'. STF (MI 670, 708, 712): na ausência de lei, aplica-se analogicamente a Lei 7.783/89 (greve setor privado). Atividades essenciais podem fazer greve, mas devem garantir atendimento mínimo (25%, 30% ou 50% conforme urgência). C está INCORRETA - podem fazer greve com garantia de serviço mínimo. A, B, D, E corretas.",
      banca: "FGV",
      ano: 2023,
      cargo: "Analista Legislativo - ALERJ"
    },
    {
      id: "adm-serv-09",
      enunciado: "Quanto ao regime previdenciário dos servidores públicos (CF/88, art. 40), é correto afirmar:",
      alternativas: {
        A: "Servidores efetivos têm regime próprio de previdência (RPPS).",
        B: "Todos os servidores são vinculados ao RGPS (INSS).",
        C: "Não há idade mínima para aposentadoria.",
        D: "A aposentadoria voluntária independe de tempo de contribuição.",
        E: "Aposentadoria compulsória não existe mais."
      },
      gabarito: "A",
      explicacao: "CF/88, art. 40 (EC 103/19 - Reforma da Previdência): servidores efetivos titulares de cargo têm RPPS (Regime Próprio de Previdência Social). Empregados públicos: RGPS. Aposentadoria voluntária: 62 anos (mulher) ou 65 anos (homem), com 25 anos de contribuição e 10 anos de serviço público e 5 anos no cargo. Aposentadoria COMPULSÓRIA aos 75 anos (EC 88/15). B, C, D, E estão incorretas.",
      banca: "CESPE",
      ano: 2023,
      cargo: "Auditor - TCU"
    },
    {
      id: "adm-serv-10",
      enunciado: "Sobre o processo administrativo disciplinar, assinale a alternativa correta:",
      alternativas: {
        A: "Pode resultar em penalidade sem assegurar contraditório e ampla defesa.",
        B: "A sindicância não é instrumento de apuração de irregularidades.",
        C: "A demissão exige processo administrativo disciplinar.",
        D: "Não há prazo para conclusão do processo disciplinar.",
        E: "A penalidade pode ser aplicada sem motivação."
      },
      gabarito: "C",
      explicacao: "CF/88, art. 5º, LV: 'aos litigantes, em processo judicial ou administrativo, e aos acusados em geral são assegurados o contraditório e ampla defesa, com os meios e recursos a ela inerentes'. Lei 8.112/90: penalidades (advertência, suspensão, demissão, cassação de aposentadoria, destituição de cargo em comissão). DEMISSÃO: exige PAD. Sindicância: procedimento investigatório. Prazo do PAD: 60 dias (prorrogável). A, B, D, E estão incorretas.",
      banca: "FCC",
      ano: 2022,
      cargo: "Analista - TRT/15"
    }
  ],

  // TEMA 6: Improbidade Administrativa (10 questões)
  "improbidade-administrativa": [
    {
      id: "adm-imp-01",
      enunciado: "Sobre a Lei de Improbidade Administrativa (Lei 8.429/92, alterada pela Lei 14.230/21), é correto afirmar:",
      alternativas: {
        A: "A improbidade é crime, sujeitando o agente à pena de prisão.",
        B: "A improbidade é ilícito civil-administrativo, não configurando crime.",
        C: "Apenas servidores públicos podem ser responsabilizados por improbidade.",
        D: "A lei não se aplica a agentes políticos.",
        E: "Empresas não podem ser responsabilizadas por improbidade."
      },
      gabarito: "B",
      explicacao: "Lei 8.429/92: improbidade administrativa é ILÍCITO CIVIL-ADMINISTRATIVO, não é crime (mas pode haver tipificação criminal paralela). Sujeitam-se: agentes públicos E particulares que induzam ou concorram. Sanções: perda de bens, ressarcimento, perda da função, suspensão de direitos políticos, multa, proibição de contratar. Aplica-se também a agentes políticos (STF: EC 85/15 não afastou aplicação). A está incorreta. C, D, E estão incorretas.",
      banca: "CESPE",
      ano: 2023,
      cargo: "Procurador Federal - AGU"
    },
    {
      id: "adm-imp-02",
      enunciado: "Em relação aos tipos de atos de improbidade administrativa (Lei 8.429/92), assinale a alternativa INCORRETA:",
      alternativas: {
        A: "Atos que importam enriquecimento ilícito (art. 9º).",
        B: "Atos que causam prejuízo ao erário (art. 10).",
        C: "Atos que atentam contra princípios da Administração Pública (art. 11).",
        D: "Atos que importam concessão de benefício financeiro (art. 10-A).",
        E: "A tipificação é exemplificativa, admitindo atos não listados."
      },
      gabarito: "E",
      explicacao: "Lei 8.429/92 (Lei 14.230/21): tipos de improbidade: I) Enriquecimento ilícito (art. 9º); II) Prejuízo ao erário (art. 10); III) Concessão ou aplicação indevida de benefício financeiro ou tributário (art. 10-A - incluído em 2021); IV) Atos contra princípios (art. 11). IMPORTANTE: após Lei 14.230/21, a tipificação é TAXATIVA (rol FECHADO), não mais exemplificativa. E está INCORRETA. A, B, C, D corretas.",
      banca: "FCC",
      ano: 2023,
      cargo: "Procurador Municipal - Recife"
    },
    {
      id: "adm-imp-03",
      enunciado: "Quanto ao elemento subjetivo necessário para configuração de improbidade (após Lei 14.230/21), é correto afirmar:",
      alternativas: {
        A: "A responsabilidade por improbidade é objetiva, independe de dolo ou culpa.",
        B: "Enriquecimento ilícito exige dolo; prejuízo ao erário admite dolo ou culpa.",
        C: "Violação a princípios exige apenas culpa.",
        D: "Todos os atos de improbidade admitem responsabilização por culpa.",
        E: "Não há exigência de elemento subjetivo."
      },
      gabarito: "B",
      explicacao: "Lei 8.429/92, art. 1º, §1º (incluído pela Lei 14.230/21): 'Consideram-se atos de improbidade administrativa as condutas dolosas tipificadas nos arts. 9º, 10 e 11 desta Lei, ressalvados tipos previstos em leis especiais'. Art. 10, caput: atos que causam prejuízo ao erário podem ser DOLOSOS ou CULPOSOS (única exceção). Art. 11: exige dolo. RESUMO: Enriquecimento (art. 9º) - DOLO. Prejuízo ao erário (art. 10) - DOLO ou CULPA. Princípios (art. 11) - DOLO. A, C, D, E incorretas.",
      banca: "VUNESP",
      ano: 2023,
      cargo: "Procurador do Estado - SP"
    },
    {
      id: "adm-imp-04",
      enunciado: "Sobre as sanções previstas na Lei de Improbidade Administrativa, assinale a alternativa correta:",
      alternativas: {
        A: "Pena de prisão é a sanção principal.",
        B: "Perda da função pública, suspensão dos direitos políticos e multa civil são sanções aplicáveis.",
        C: "Não há possibilidade de ressarcimento ao erário.",
        D: "A proibição de contratar com o Poder Público não é sanção prevista.",
        E: "As sanções são aplicadas cumulativamente em todos os casos."
      },
      gabarito: "B",
      explicacao: "Lei 8.429/92, arts. 12 e 12-A (Lei 14.230/21): sanções: I) perda dos bens ou valores acrescidos ilicitamente; II) perda da função pública; III) suspensão dos direitos políticos; IV) multa civil; V) proibição de contratar com Poder Público ou receber benefícios. Ressarcimento ao erário: obrigatório, imprescritível (CF, art. 37, §5º). Sanções variam conforme gravidade. A está incorreta - não há prisão. C, D, E incorretas.",
      banca: "FGV",
      ano: 2023,
      cargo: "Analista - MPE/RJ"
    },
    {
      id: "adm-imp-05",
      enunciado: "Em relação ao prazo prescricional da ação de improbidade, é INCORRETO afirmar:",
      alternativas: {
        A: "O ressarcimento ao erário é imprescritível (CF, art. 37, §5º).",
        B: "A prescrição para aplicação de sanções é de 8 anos.",
        C: "Não há prescrição para ações de improbidade.",
        D: "A prescrição é contada do término do exercício de mandato, cargo ou função de confiança.",
        E: "A Lei 14.230/21 alterou o regime de prescrição."
      },
      gabarito: "C",
      explicacao: "CF/88, art. 37, §5º: ressarcimento ao erário é IMPRESCRITÍVEL. Lei 8.429/92, art. 23 (Lei 14.230/21): prescrição da pretensão punitiva (aplicação de sanções, exceto ressarcimento): 8 anos, contados da ocorrência do fato ou, no caso de infrações permanentes, do dia em que cessou a permanência. Termo inicial: fim do exercício de mandato, cargo ou função. C está INCORRETA - há prescrição para sanções (exceto ressarcimento). A, B, D, E corretas.",
      banca: "CESPE",
      ano: 2022,
      cargo: "Procurador do Estado - PGE/RO"
    },
    {
      id: "adm-imp-06",
      enunciado: "Quanto ao acordo de não persecução cível na improbidade (Lei 14.230/21), assinale a alternativa correta:",
      alternativas: {
        A: "Não é possível celebrar acordo em ações de improbidade.",
        B: "O acordo pode ser celebrado em qualquer fase do processo, exigindo ressarcimento integral do dano.",
        C: "O acordo dispensa o ressarcimento ao erário.",
        D: "Apenas o Ministério Público pode propor o acordo.",
        E: "O acordo não precisa de homologação judicial."
      },
      gabarito: "B",
      explicacao: "Lei 8.429/92, art. 17, §1º (Lei 14.230/21): acordo de não persecução cível (ANPC) pode ser celebrado pela autoridade ou MP, a qualquer tempo, antes do recebimento da petição inicial. Requisitos: ressarcimento INTEGRAL do dano (se houver); reversão à pessoa jurídica lesada da vantagem indevida; pagamento de multa; outras condições. Homologação judicial obrigatória. A, C, D, E incorretas.",
      banca: "FCC",
      ano: 2023,
      cargo: "Procurador - PGE/AC"
    },
    {
      id: "adm-imp-07",
      enunciado: "Sobre a competência para julgar ações de improbidade, é correto afirmar:",
      alternativas: {
        A: "Compete à Justiça Federal julgar todas as ações de improbidade.",
        B: "Compete ao STF julgar originariamente ações de improbidade contra Presidente da República.",
        C: "A competência é da Justiça Comum (Estadual ou Federal, conforme origem dos recursos).",
        D: "Tribunais de Contas julgam ações de improbidade.",
        E: "Não há foro por prerrogativa de função em ações de improbidade."
      },
      gabarito: "C",
      explicacao: "Competência: Justiça Comum (art. 108, I, CF - Justiça Federal se envolve bens, serviços ou interesse da União; Justiça Estadual nos demais). STF (Recl. 2.138): NÃO há foro por prerrogativa de função em ações de improbidade (são ações cíveis, não criminais). Mesmo Presidente, Governadores, Prefeitos são julgados em 1ª instância. B está incorreta - não há prerrogativa. A, D, E incorretas ou incompletas.",
      banca: "VUNESP",
      ano: 2022,
      cargo: "Juiz Substituto - TJSP"
    },
    {
      id: "adm-imp-08",
      enunciado: "Em relação às medidas cautelares na ação de improbidade, assinale a alternativa INCORRETA:",
      alternativas: {
        A: "Sequestro de bens pode ser decretado para assegurar ressarcimento.",
        B: "Indisponibilidade de bens pode ser decretada.",
        C: "Afastamento do cargo pode ser determinado como medida cautelar.",
        D: "As medidas cautelares independem de fundamentação.",
        E: "Busca e apreensão de documentos pode ser determinada."
      },
      gabarito: "D",
      explicacao: "Lei 8.429/92, arts. 16 e 16-A (Lei 14.230/21): medidas cautelares: indisponibilidade de bens (exige fumus boni iuris qualificado e demonstração de perigo de dano), sequestro, busca e apreensão, afastamento do cargo (em casos excepcionais). TODAS as medidas exigem: fundamentação adequada (motivação), demonstração de elementos concretos. Art. 16, §2º: indisponibilidade limitada ao valor do dano + multa. D está INCORRETA - exigem fundamentação. A, B, C, E corretas.",
      banca: "FGV",
      ano: 2023,
      cargo: "Advogado Público - PGM/João Pessoa"
    },
    {
      id: "adm-imp-09",
      enunciado: "Quanto à legitimidade ativa para propor ação de improbidade, é correto afirmar:",
      alternativas: {
        A: "Apenas o Ministério Público pode propor ação de improbidade.",
        B: "Qualquer cidadão pode propor ação popular de improbidade.",
        C: "O Ministério Público e a pessoa jurídica interessada têm legitimidade.",
        D: "A União sempre tem legitimidade para propor ação de improbidade.",
        E: "Tribunais de Contas podem propor ação de improbidade."
      },
      gabarito: "C",
      explicacao: "Lei 8.429/92, art. 17: legitimidade ativa: I) Ministério Público; II) Pessoa jurídica interessada (União, Estados, Municípios, DF, entidades da administração indireta). Se a pessoa jurídica não propor a ação em 30 dias após representação do MP, este poderá fazê-lo. Art. 17, §12 (Lei 14.230/21): MP atuará sempre (como parte ou fiscal da lei). A está incorreta. B está incorreta - não é ação popular. D e E incorretas.",
      banca: "CESPE",
      ano: 2023,
      cargo: "Promotor de Justiça - MPE/CE"
    },
    {
      id: "adm-imp-10",
      enunciado: "Sobre a dosimetria das sanções de improbidade (Lei 14.230/21), assinale a alternativa correta:",
      alternativas: {
        A: "As sanções são fixadas em valores fixos, sem gradação.",
        B: "A dosimetria deve considerar gravidade do fato, vantagem auferida, dano causado e grau de lesão aos valores jurídicos tutelados.",
        C: "A suspensão de direitos políticos tem prazo fixo de 10 anos.",
        D: "A multa civil não pode ser inferior ao valor da vantagem auferida.",
        E: "Não há critérios legais para dosimetria."
      },
      gabarito: "B",
      explicacao: "Lei 8.429/92, art. 12-A (Lei 14.230/21): critérios para dosimetria: I) gravidade do fato; II) extensão do dano ou prejuízo patrimonial; III) proveito patrimonial obtido; IV) grau de lesão aos valores jurídicos tutelados; V) circunstâncias agravantes ou atenuantes; VI) reincidência. Prazos de suspensão de direitos políticos: 3 a 5 anos (princípios); 5 a 8 anos (prejuízo ao erário); 8 a 12 anos (enriquecimento ilícito). A, C, D, E incorretas.",
      banca: "FCC",
      ano: 2022,
      cargo: "Defensor Público - DPE/SP"
    }
  ]
};
