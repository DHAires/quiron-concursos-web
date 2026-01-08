// Questões de Direito Civil - TEMAS 4-6 (30 questões)
// Área Jurídica - Direito Civil

export const questionsCivil2 = {
  // TEMA 4: Contratos (10 questões)
  "contratos": [
    {
      id: "civil-cont-01",
      enunciado: "Sobre os princípios contratuais no Código Civil de 2002, é correto afirmar:",
      alternativas: {
        A: "Vigora apenas o princípio da autonomia da vontade, sem limitações.",
        B: "Os princípios aplicáveis são: autonomia da vontade, função social do contrato e boa-fé objetiva.",
        C: "O princípio da força obrigatória (pacta sunt servanda) é absoluto.",
        D: "A função social do contrato não está prevista no Código Civil.",
        E: "Boa-fé subjetiva é o único tipo de boa-fé nos contratos."
      },
      gabarito: "B",
      explicacao: "CC/02: PRINCÍPIOS CONTRATUAIS: 1) AUTONOMIA DA VONTADE (art. 421 - limitada pela função social); 2) FUNÇÃO SOCIAL DO CONTRATO (art. 421 - contrato deve respeitar interesse social); 3) BOA-FÉ OBJETIVA (art. 422 - dever de lealdade, probidade); 4) FORÇA OBRIGATÓRIA/PACTA SUNT SERVANDA (relativizada - onerosidade excessiva, teoria da imprevisão). A incorreta - há limites. C incorreta - não é absoluto. D incorreta - art. 421. E incorreta - boa-fé objetiva é principal.",
      banca: "CESPE",
      ano: 2023,
      cargo: "Juiz de Direito - TJDFT"
    },
    {
      id: "civil-cont-02",
      enunciado: "Em relação à formação dos contratos, assinale a alternativa INCORRETA:",
      alternativas: {
        A: "A proposta de contrato obriga o proponente se não houver retratação.",
        B: "A aceitação fora do prazo com adições, restrições ou modificações importa nova proposta.",
        C: "O contrato se reputa celebrado no lugar onde foi proposto.",
        D: "A proposta pode ser revogada livremente, mesmo sem prazo para aceitação.",
        E: "Proposta feita a pessoa ausente sem prazo obriga por tempo suficiente."
      },
      gabarito: "D",
      explicacao: "CC/02, arts. 427-435: FORMAÇÃO DO CONTRATO: PROPOSTA (oferta, policitação) + ACEITAÇÃO. Art. 427: proposta OBRIGA o proponente, SALVO: I) contrário resultar dos termos dela, natureza do negócio ou circunstâncias; II) feita sem prazo a pessoa presente, não aceita imediatamente; III) a pessoa ausente, tiver decorrido tempo suficiente. Art. 431: aceitação FORA DO PRAZO ou com MODIFICAÇÕES = NOVA PROPOSTA. Art. 435: contrato celebrado no LUGAR da proposta. D INCORRETA - proposta obriga. A, B, C, E corretas.",
      banca: "FCC",
      ano: 2023,
      cargo: "Juiz de Direito - TJPE"
    },
    {
      id: "civil-cont-03",
      enunciado: "Quanto à classificação dos contratos, é correto afirmar:",
      alternativas: {
        A: "Contrato bilateral é aquele em que apenas uma parte se obriga.",
        B: "Contrato oneroso é aquele em que ambas as partes auferem vantagens com correspondentes sacrifícios.",
        C: "Contrato consensual exige forma solene para se aperfeiçoar.",
        D: "Contrato comutativo é aquele em que as prestações dependem de evento incerto.",
        E: "Contrato típico não está previsto em lei."
      },
      gabarito: "B",
      explicacao: "CLASSIFICAÇÃO DOS CONTRATOS: 1) BILATERAL/SINALAGMÁTICO: ambas as partes se obrigam; UNILATERAL: só uma se obriga. 2) ONEROSO: vantagens e sacrifícios mútuos; GRATUITO: só uma parte aufere vantagem. 3) CONSENSUAL: se aperfeiçoa pelo consentimento; REAL: exige entrega da coisa; SOLENE: exige forma. 4) COMUTATIVO: prestações certas e determinadas; ALEATÓRIO: prestação depende de evento incerto. 5) TÍPICO: previsto em lei; ATÍPICO: não previsto. B correta. A, C, D, E incorretas.",
      banca: "VUNESP",
      ano: 2023,
      cargo: "Juiz de Direito - TJSP"
    },
    {
      id: "civil-cont-04",
      enunciado: "Sobre a extinção dos contratos, assinale a alternativa correta:",
      alternativas: {
        A: "Resilição é extinção por sentença judicial.",
        B: "Resolução é extinção por vontade das partes.",
        C: "Rescisão é extinção por inexecução voluntária; resolução por inadimplemento.",
        D: "Distrato é forma de resilição bilateral.",
        E: "Contratos não podem ser extintos antes do prazo."
      },
      gabarito: "D",
      explicacao: "CC/02: EXTINÇÃO DOS CONTRATOS: 1) RESILIÇÃO (dissolução voluntária): a) BILATERAL/DISTRATO (art. 472): acordo de vontades; b) UNILATERAL: denúncia, revogação, renúncia. 2) RESOLUÇÃO (arts. 474-475): por INADIMPLEMENTO (culpa), onerosidade excessiva, cláusula resolutiva. 3) RESCISÃO: vício (lesão, erro, dolo, coação). D correta - distrato é resilição bilateral. A incorreta - resilição é vontade. B incorreta. C incorreta - conceitos invertidos. E incorreta.",
      banca: "FGV",
      ano: 2023,
      cargo: "Analista Judiciário - TJ/RJ"
    },
    {
      id: "civil-cont-05",
      enunciado: "Em relação à exceptio non adimpleti contractus (exceção de contrato não cumprido), é INCORRETO afirmar:",
      alternativas: {
        A: "Permite que parte recuse cumprimento enquanto a outra não cumprir sua obrigação.",
        B: "Aplica-se a contratos bilaterais.",
        C: "Está prevista no art. 476 do Código Civil.",
        D: "Pode ser aplicada em contrrato unilateral.",
        E: "É aplicação da teoria da onerosidade excessiva."
      },
      gabarito: "E",
      explicacao: "CC/02, art. 476: EXCEPTIO NON ADIMPLETI CONTRACTUS (exceção de contrato não cumprido): nos contratos BILATERAIS, nenhum dos contratantes, antes de cumprida sua obrigação, pode exigir o implemento da do outro. Fundamento: sinalagma (reciprocidade). Requisitos: contrato bilateral, simultaneidade das prestações. E INCORRETA - não é teoria da onerosidade excessiva (art. 478 - resolução por fatos supervenientes). A, B, C corretas. D incorreta - só bilateral.",
      banca: "CESPE",
      ano: 2022,
      cargo: "Procurador Federal - AGU"
    },
    {
      id: "civil-cont-06",
      enunciado: "Quanto aos vícios redibitórios, assinale a alternativa correta:",
      alternativas: {
        A: "Vício redibitório é defeito oculto que torna a coisa imprópria ao uso ou diminui seu valor.",
        B: "Comprador não pode exigir redução do preço (abatimento - quanti minoris).",
        C: "Prazo decadencial para reclamar é de 10 anos.",
        D: "Vício aparente gera direito a redibição.",
        E: "Não se aplica a bens móveis."
      },
      gabarito: "A",
      explicacao: "CC/02, arts. 441-446: VÍCIOS REDIBITÓRIOS: defeitos OCULTOS da coisa que a tornam IMPRÓPRIA ao uso a que se destina ou lhe DIMINUEM o valor. Direitos do adquirente: 1) REDIBIÇÃO (rejeitar a coisa, desfazer negócio - ação redibitória); 2) ABATIMENTO no preço (quanti minoris - ação estimatória). PRAZO DECADENCIAL (art. 445): MÓVEL: 30 dias; IMÓVEL: 1 ano (reduzido à metade se adquirente já estava na posse). A correta. B, C, D, E incorretas.",
      banca: "FCC",
      ano: 2023,
      cargo: "Procurador Municipal - SP"
    },
    {
      id: "civil-cont-07",
      enunciado: "Sobre a evicção, é correto afirmar:",
      alternativas: {
        A: "Evicção é perda da coisa por sentença judicial em favor de terceiro.",
        B: "Evicção só se aplica a contratos gratuitos.",
        C: "Cláusula de exclusão de garantia contra evicção é sempre nula.",
        D: "Evicto não tem direito a ser indenizado.",
        E: "Evicção é o mesmo que vício redibitório."
      },
      gabarito: "A",
      explicacao: "CC/02, arts. 447-457: EVICÇÃO: perda da COISA (total ou parcial) por força de SENTENÇA que a atribui a TERCEIRO. Requisitos: 1) aquisição onerosa; 2) perda judicial; 3) fato anterior à alienação. Direitos do EVICTO: 1) denunciar lide ao alienante; 2) ser indenizado (restituição integral + perdas e danos). CLÁUSULA DE EXCLUSÃO: válida, mas não afasta dever de devolver preço (art. 449). A correta. B incorreta - onerosos. C, D, E incorretas.",
      banca: "VUNESP",
      ano: 2022,
      cargo: "Juiz de Direito - TJSP"
    },
    {
      id: "civil-cont-08",
      enunciado: "Em relação ao contrato de compra e venda, assinale a alternativa INCORRETA:",
      alternativas: {
        A: "Compra e venda é contrato bilateral, oneroso, consensual e comutativo (em regra).",
        B: "Venda de ascendente a descendente exige consentimento dos demais descendentes e cônjuge.",
        C: "Cláusula de retrovenda permite ao vendedor reaver o imóvel em até 3 anos.",
        D: "Vendedor não pode vender coisa alheia.",
        E: "Pacto de melhor comprador permite ao vendedor desfazer venda se aparecer melhor oferta."
      },
      gabarito: "D",
      explicacao: "CC/02, arts. 481-532: COMPRA E VENDA: um se obriga a transferir domínio de coisa, outro a pagar preço em dinheiro. Bilateral, oneroso, consensual, comutativo. VENDA DE ASCENDENTE A DESCENDENTE (art. 496): exige consentimento dos demais e cônjuge (salvo se for pagar dívida). RETROVENDA (art. 505): vendedor pode reaver imóvel, até 3 anos. VENDA DE COISA ALHEIA (art. 1.268): VÁLIDA, mas ineficaz se verdadeiro dono não ratificar. D INCORRETA - pode, mas é ineficaz. A, B, C corretas. E incorreta - não existe pacto de melhor comprador (confusão).",
      banca: "FGV",
      ano: 2023,
      cargo: "Analista - TJ/AM"
    },
    {
      id: "civil-cont-09",
      enunciado: "Quanto ao contrato de locação de imóveis urbanos (Lei 8.245/91), é correto afirmar:",
      alternativas: {
        A: "Locação por prazo determinado não pode ser denunciada antes do término.",
        B: "Locação residencial com garantia permite denúncia imotivada após 30 meses.",
        C: "Fiador pode exonerar-se da fiança a qualquer tempo.",
        D: "Benfeitorias necessárias não são indenizáveis.",
        E: "Locatário tem direito de preferência na compra."
      },
      gabarito: "B",
      explicacao: "Lei 8.245/91 (Lei do Inquilinato): DENÚNCIA (art. 46): locação RESIDENCIAL por prazo determinado igual ou superior a 30 meses com garantia: locador pode denunciar IMOTIVADAMENTE após 30 meses (retomada). FIANÇA (art. 40): fiador responde até entrega das chaves (STJ: Súmula 214). BENFEITORIAS (art. 35): necessárias são indenizáveis. DIREITO DE PREFERÊNCIA (art. 27): locatário tem preferência na compra. B correta. A incorreta - pode em alguns casos. C incorreta. D incorreta. E correta mas B é mais específica.",
      banca: "CESPE",
      ano: 2023,
      cargo: "Procurador do Estado - PGE/PE"
    },
    {
      id: "civil-cont-10",
      enunciado: "Sobre a teoria da imprevisão (onerosidade excessiva), assinale a alternativa correta:",
      alternativas: {
        A: "Onerosidade excessiva não resolve contratos.",
        B: "Requisitos: contrato de execução continuada ou diferida, fato superveniente extraordinário e imprevisível, onerosidade excessiva para uma parte e extrema vantagem para outra.",
        C: "Aplica-se a contratos já executados.",
        D: "Álea normal do contrato gera resolução.",
        E: "Juiz não pode revisar contrato, apenas resolver."
      },
      gabarito: "B",
      explicacao: "CC/02, arts. 478-480: TEORIA DA IMPREVISÃO/ONEROSIDADE EXCESSIVA: possibilita RESOLUÇÃO do contrato. Requisitos (art. 478): 1) contrato de EXECUÇÃO CONTINUADA ou DIFERIDA; 2) acontecimento EXTRAORDINÁRIO e IMPREVISÍVEL; 3) ONEROSIDADE EXCESSIVA para uma parte; 4) EXTREMA VANTAGEM para outra. Art. 479: parte beneficiada pode EVITAR resolução oferecendo MODIFICAÇÃO EQUITATIVA. Art. 480: se pedido de resolução, parte ré pode modificar. B correta. A, C, D, E incorretas.",
      banca: "FCC",
      ano: 2022,
      cargo: "Defensor Público - DPE/SP"
    }
  ],

  // TEMA 5: Responsabilidade Civil (10 questões)
  "responsabilidade-civil": [
    {
      id: "civil-resp-01",
      enunciado: "Sobre a responsabilidade civil no Código Civil de 2002, é correto afirmar:",
      alternativas: {
        A: "Responsabilidade civil é sempre subjetiva.",
        B: "Responsabilidade civil pode ser subjetiva (exige culpa) ou objetiva (independe de culpa).",
        C: "Não existe responsabilidade objetiva no direito civil.",
        D: "Dano não é elemento essencial da responsabilidade civil.",
        E: "Nexo causal é dispensável."
      },
      gabarito: "B",
      explicacao: "CC/02: RESPONSABILIDADE CIVIL: dever de reparar danos causados a outrem. ESPÉCIES: 1) SUBJETIVA (art. 186 - regra): exige CULPA (ação/omissão, culpa/dolo, dano, nexo causal). 2) OBJETIVA (art. 927, §ú - exceção): INDEPENDE de culpa (atividade de risco, previsão legal). ELEMENTOS: conduta, dano (patrimonial ou moral), nexo causal (+ culpa na subjetiva). B correta. A, C, D, E incorretas.",
      banca: "CESPE",
      ano: 2023,
      cargo: "Juiz de Direito - TJDFT"
    },
    {
      id: "civil-resp-02",
      enunciado: "Em relação aos elementos da responsabilidade civil subjetiva, assinale a alternativa INCORRETA:",
      alternativas: {
        A: "Conduta: ação ou omissão humana.",
        B: "Culpa em sentido amplo: dolo (intenção) ou culpa stricto sensu (negligência, imprudência, imperícia).",
        C: "Dano: lesão a bem jurídico (patrimonial ou extrapatrimonial).",
        D: "Nexo causal: relação de causa e efeito entre conduta e dano.",
        E: "Culpa é dispensável na responsabilidade subjetiva."
      },
      gabarito: "E",
      explicacao: "RESPONSABILIDADE CIVIL SUBJETIVA (art. 186): ELEMENTOS: 1) CONDUTA (ação/omissão voluntária); 2) CULPA LATO SENSU (dolo - intenção ou culpa stricto sensu - negligência, imprudência, imperícia); 3) DANO (patrimonial - material ou moral - extrapatrimonial); 4) NEXO CAUSAL (relação causa-efeito). E INCORRETA - culpa é ESSENCIAL na responsabilidade SUBJETIVA. A, B, C, D corretas.",
      banca: "FCC",
      ano: 2023,
      cargo: "Juiz de Direito - TJPE"
    },
    {
      id: "civil-resp-03",
      enunciado: "Quanto à responsabilidade civil objetiva, é correto afirmar:",
      alternativas: {
        A: "Responsabilidade objetiva sempre exige culpa.",
        B: "Responsabilidade objetiva independe de culpa, fundando-se no risco da atividade ou em previsão legal.",
        C: "Código Civil não prevê responsabilidade objetiva.",
        D: "Teoria do risco não se aplica no Brasil.",
        E: "Atividade de risco não gera responsabilidade objetiva."
      },
      gabarito: "B",
      explicacao: "CC/02, art. 927, §ú: RESPONSABILIDADE OBJETIVA: 'Haverá obrigação de reparar o dano, independentemente de culpa, nos casos especificados em lei, ou quando a atividade normalmente desenvolvida pelo autor do dano implicar, por sua natureza, RISCO para os direitos de outrem'. TEORIA DO RISCO: quem aufere lucros deve arcar com riscos. ELEMENTOS: conduta, dano, nexo causal (SEM culpa). Exemplos: acidentes de consumo (CDC), danos ambientais, danos nucleares. B correta. A, C, D, E incorretas.",
      banca: "VUNESP",
      ano: 2023,
      cargo: "Juiz de Direito - TJSP"
    },
    {
      id: "civil-resp-04",
      enunciado: "Sobre as excludentes de responsabilidade civil, assinale a alternativa correta:",
      alternativas: {
        A: "Caso fortuito e força maior nunca excluem responsabilidade.",
        B: "Culpa exclusiva da vítima exclui nexo causal e afasta responsabilidade.",
        C: "Fato de terceiro não exclui responsabilidade.",
        D: "Estado de necessidade sempre gera responsabilidade.",
        E: "Legítima defesa não afasta responsabilidade civil."
      },
      gabarito: "B",
      explicacao: "EXCLUDENTES DE RESPONSABILIDADE (rompem nexo causal): 1) CULPA EXCLUSIVA DA VÍTIMA: exclui totalmente; culpa CONCORRENTE: reduz indenização. 2) CASO FORTUITO/FORÇA MAIOR: evento imprevisível ou inevitável (excluem, salvo responsabilidade objetiva legal - ex: CDC). 3) FATO DE TERCEIRO: pode excluir. 4) ESTADO DE NECESSIDADE, LEGÍTIMA DEFESA, ESTRITO CUMPRIMENTO DO DEVER LEGAL, EXERCÍCIO REGULAR DE DIREITO: excludentes de ilicitude (afastam responsabilidade em regra). B correta. A, C, D, E incorretas.",
      banca: "FGV",
      ano: 2023,
      cargo: "Analista Judiciário - TJ/RJ"
    },
    {
      id: "civil-resp-05",
      enunciado: "Em relação ao dano moral, é INCORRETO afirmar:",
      alternativas: {
        A: "Dano moral é lesão a direito da personalidade (honra, imagem, intimidade, vida privada).",
        B: "Dano moral não é passível de indenização.",
        C: "Súmula 37 do STJ: cumulação de danos morais e materiais é possível.",
        D: "Pessoa jurídica pode sofrer dano moral (Súmula 227 do STJ).",
        E: "Dano moral in re ipsa dispensa prova (danos evidentes)."
      },
      gabarito: "B",
      explicacao: "DANO MORAL (extrapatrimonial): lesão a direitos da PERSONALIDADE. CF/88, art. 5º, V e X: indenização por dano moral. CC/02, art. 186: dano, ainda que exclusivamente moral. STJ Súmula 37: cumulação de dano moral e material. STJ Súmula 227: PJ pode sofrer dano moral. DANO MORAL IN RE IPSA: presumido, dispensa prova (ex: inscrição indevida em cadastro de inadimplentes). B INCORRETA - é indenizável. A, C, D, E corretas.",
      banca: "CESPE",
      ano: 2022,
      cargo: "Procurador Federal - AGU"
    },
    {
      id: "civil-resp-06",
      enunciado: "Quanto à responsabilidade civil por ato de terceiro, assinale a alternativa correta:",
      alternativas: {
        A: "Pais não respondem por atos de filhos menores.",
        B: "Empregador ou comitente responde por atos de empregados/prepostos (responsabilidade objetiva).",
        C: "Tutor não responde por atos do tutelado.",
        D: "Responsabilidade do patrão exclui a do empregado.",
        E: "Não há direito de regresso."
      },
      gabarito: "B",
      explicacao: "CC/02, art. 932: RESPONSABILIDADE POR ATO DE TERCEIRO: I) pais, pelos filhos menores sob autoridade e companhia; II) tutor e curador; III) empregador ou comitente, por empregados/prepostos no exercício do trabalho; IV) donos de hotéis/estabelecimentos por atos de hóspedes/moradores; V) que gratuitamente houver participado dos produtos do crime. Art. 933: responsabilidade OBJETIVA (independe de culpa). Art. 934: direito de REGRESSO contra causador direto (culpa). B correta. A, C, D, E incorretas.",
      banca: "FCC",
      ano: 2023,
      cargo: "Procurador Municipal - SP"
    },
    {
      id: "civil-resp-07",
      enunciado: "Sobre a responsabilidade civil por fato da coisa ou animal, é correto afirmar:",
      alternativas: {
        A: "Dono de animal não responde por danos causados.",
        B: "Dono ou detentor de animal responde pelos danos que causar (responsabilidade objetiva), salvo culpa da vítima ou força maior.",
        C: "Dono de edifício não responde por ruína.",
        D: "Quem habita prédio não responde por objeto que cair.",
        E: "Responsabilidade por animal sempre exige culpa."
      },
      gabarito: "B",
      explicacao: "CC/02: RESPONSABILIDADE POR COISA/ANIMAL: art. 936: DONO ou DETENTOR de ANIMAL responde por danos (responsabilidade OBJETIVA), SALVO: culpa da vítima ou força maior. Art. 937: dono de EDIFÍCIO ou construção responde por danos de RUÍNA (falta de reparos), salvo prova de não resultar de falta de reparos. Art. 938: habita PRÉDIO ou parte dele responde por DANOS de coisas que CAÍREM ou forem lançadas. B correta. A, C, D, E incorretas.",
      banca: "VUNESP",
      ano: 2022,
      cargo: "Juiz de Direito - TJSP"
    },
    {
      id: "civil-resp-08",
      enunciado: "Em relação ao abuso de direito, assinale a alternativa INCORRETA:",
      alternativas: {
        A: "Abuso de direito ocorre quando titular excede manifestamente limites impostos por seu fim econômico/social, boa-fé ou bons costumes.",
        B: "Abuso de direito é ato ilícito.",
        C: "Abuso de direito não gera responsabilidade civil.",
        D: "Venire contra factum proprium (proibição de comportamento contraditório) é aplicação da boa-fé.",
        E: "Supressio e surrectio são institutos relacionados à boa-fé."
      },
      gabarito: "C",
      explicacao: "CC/02, art. 187: ABUSO DE DIREITO: 'Também comete ATO ILÍCITO o titular de um direito que, ao exercê-lo, excede manifestamente os limites impostos pelo seu fim econômico ou social, pela boa-fé ou pelos bons costumes'. É ATO ILÍCITO (ilicitude objetiva) que GERA RESPONSABILIDADE CIVIL. Institutos: venire contra factum proprium, supressio (perda de direito não exercido), surrectio (aquisição de direito pelo exercício), tu quoque. C INCORRETA - gera responsabilidade. A, B, D, E corretas.",
      banca: "FGV",
      ano: 2023,
      cargo: "Analista - TJ/AM"
    },
    {
      id: "civil-resp-09",
      enunciado: "Quanto à indenização e liquidação do dano, é correto afirmar:",
      alternativas: {
        A: "Indenização não abrange lucros cessantes.",
        B: "Indenização mede-se pela extensão do dano (art. 944).",
        C: "Culpa grave do ofendido nunca reduz indenização.",
        D: "Dano futuro não é indenizável.",
        E: "Juros moratórios não são devidos."
      },
      gabarito: "B",
      explicacao: "CC/02, art. 944: 'A indenização mede-se pela EXTENSÃO DO DANO'. §ú: se CULPA CONCORRENTE da vítima, juiz pode REDUZIR indenização equitativamente. Art. 402: perdas e danos = danos emergentes + lucros cessantes. Art. 403: dano direto e imediato. DANO FUTURO: indenizável se certo (perda de chance - STJ). JUROS MORATÓRIOS: devidos (art. 407). B correta. A, C, D, E incorretas.",
      banca: "CESPE",
      ano: 2023,
      cargo: "Procurador do Estado - PGE/PE"
    },
    {
      id: "civil-resp-10",
      enunciado: "Sobre a responsabilidade civil nas relações de consumo (CDC), assinale a alternativa correta:",
      alternativas: {
        A: "Responsabilidade do fornecedor é sempre subjetiva.",
        B: "Responsabilidade pelo fato do produto/serviço (acidente de consumo) é objetiva.",
        C: "Fornecedor pode se exonerar provando ausência de defeito.",
        D: "Não há solidariedade entre fornecedores.",
        E: "Inversão do ônus da prova não é possível."
      },
      gabarito: "B",
      explicacao: "CDC (Lei 8.078/90): RESPONSABILIDADE DO FORNECEDOR: 1) FATO do produto/serviço (arts. 12-14 - acidente de consumo): OBJETIVA, por defeito. Excludentes: não colocou no mercado, defeito inexistente, culpa exclusiva consumidor/terceiro. 2) VÍCIO do produto/serviço (arts. 18-25): OBJETIVA. SOLIDARIEDADE: todos da cadeia respondem (art. 7º, §ú). INVERSÃO do ônus da prova: possível (art. 6º, VIII). B correta. A, C, D, E incorretas ou incompletas.",
      banca: "FCC",
      ano: 2022,
      cargo: "Defensor Público - DPE/SP"
    }
  ],

  // TEMA 6: Direito das Coisas - Posse (10 questões)
  "direito-das-coisas-posse": [
    {
      id: "civil-posse-01",
      enunciado: "Sobre o conceito e teorias da posse, é correto afirmar:",
      alternativas: {
        A: "Teoria subjetiva (Savigny): posse é corpus (poder físico) + animus domini (intenção de dono).",
        B: "Teoria objetiva (Ihering) exige animus domini.",
        C: "Código Civil adotou teoria subjetiva.",
        D: "Detenção é o mesmo que posse.",
        E: "Servidor da posse tem proteção possessória."
      },
      gabarito: "A",
      explicacao: "TEORIAS DA POSSE: 1) TEORIA SUBJETIVA (Savigny): posse = CORPUS (poder físico sobre coisa) + ANIMUS DOMINI (intenção de ser dono). 2) TEORIA OBJETIVA (Ihering - ADOTADA pelo CC/02): posse = CORPUS (visibilidade do domínio - comportamento de dono), NÃO exige animus domini. DETENÇÃO (art. 1.198): em nome alheio, sem proteção possessória (caseiro, empregado). A correta (descreve Savigny). B incorreta. C incorreta - adotou objetiva. D, E incorretas.",
      banca: "CESPE",
      ano: 2023,
      cargo: "Juiz de Direito - TJDFT"
    },
    {
      id: "civil-posse-02",
      enunciado: "Em relação à classificação da posse, assinale a alternativa INCORRETA:",
      alternativas: {
        A: "Posse direta: exercida diretamente pelo possuidor (ex: locatário).",
        B: "Posse indireta: exercida por meio de outrem (ex: locador).",
        C: "Posse de boa-fé: possuidor ignora vício ou obstáculo que impede aquisição da coisa.",
        D: "Posse de má-fé: possuidor conhece vício.",
        E: "Posse direta e indireta não podem coexistir."
      },
      gabarito: "E",
      explicacao: "CC/02: CLASSIFICAÇÃO DA POSSE: 1) DIRETA x INDIRETA (art. 1.197): COEXISTEM (ex: proprietário = indireta; locatário = direta). 2) BOA-FÉ x MÁ-FÉ (art. 1.201): boa-fé = ignora vício; má-fé = conhece. Boa-fé presume-se. Cessa quando citado em ação (art. 1.202). 3) JUSTA x INJUSTA (art. 1.200): justa = sem violência, clandestinidade, precariedade; injusta = com vícios. 4) NOVA x VELHA: nova = menos de ano e dia; velha = mais de ano e dia. E INCORRETA - coexistem. A, B, C, D corretas.",
      banca: "FCC",
      ano: 2023,
      cargo: "Juiz de Direito - TJPE"
    },
    {
      id: "civil-posse-03",
      enunciado: "Quanto à aquisição e perda da posse, é correto afirmar:",
      alternativas: {
        A: "Posse se adquire apenas pela apreensão da coisa.",
        B: "Posse se adquire: pela apreensão, exercício do direito, fato de disposição da coisa, por qualquer modo de aquisição em geral.",
        C: "Constituto possessório não transfere posse.",
        D: "Traditio brevi manu não existe.",
        E: "Posse nunca se perde."
      },
      gabarito: "B",
      explicacao: "CC/02: AQUISIÇÃO DA POSSE (art. 1.204): I) APREENSÃO (ocupação); II) EXERCÍCIO DO DIREITO; III) fato de DISPOSIÇÃO da coisa (sucessão). FORMAS: a) TRADITIO (entrega efetiva); b) TRADITIO BREVI MANU (quem tinha detenção passa a ter posse); c) CONSTITUTO POSSESSÓRIO/CLÁUSULA CONSTITUTI (quem tinha posse passa a ter detenção). PERDA (art. 1.223): abandono, tradição, perda/destruição, posse de outrem (> ano e dia), proibição por lei. B correta. A, C, D, E incorretas.",
      banca: "VUNESP",
      ano: 2023,
      cargo: "Juiz de Direito - TJSP"
    },
    {
      id: "civil-posse-04",
      enunciado: "Sobre os efeitos da posse quanto aos frutos e benfeitorias, assinale a alternativa correta:",
      alternativas: {
        A: "Possuidor de má-fé tem direito a todos os frutos.",
        B: "Possuidor de boa-fé tem direito aos frutos percebidos e pendentes ao tempo da citação.",
        C: "Possuidor de má-fé nunca tem direito a benfeitorias.",
        D: "Benfeitorias voluptuárias sempre são indenizáveis.",
        E: "Possuidor de boa-fé não tem direito de retenção."
      },
      gabarito: "B",
      explicacao: "CC/02: FRUTOS: art. 1.214: possuidor BOA-FÉ tem direito aos frutos PERCEBIDOS (colhidos) e aos PENDENTES ao tempo da citação (proporcional ao tempo de posse). Possuidor MÁ-FÉ: restituir frutos colhidos e pendentes, responde por deterioração. BENFEITORIAS: BOA-FÉ (art. 1.219): indenização de necessárias e úteis, retenção. Levanta voluptuárias se não danificar. MÁ-FÉ (art. 1.220): só necessárias. B correta. A, C, D, E incorretas.",
      banca: "FGV",
      ano: 2023,
      cargo: "Analista Judiciário - TJ/RJ"
    },
    {
      id: "civil-posse-05",
      enunciado: "Em relação à responsabilidade do possuidor pela perda ou deterioração da coisa, é INCORRETO afirmar:",
      alternativas: {
        A: "Possuidor de boa-fé não responde pela perda ou deterioração sem culpa.",
        B: "Possuidor de má-fé responde pela perda/deterioração, ainda que sem culpa.",
        C: "Possuidor de boa-fé responde pelos prejuízos após citação.",
        D: "Possuidor de má-fé nunca responde por caso fortuito ou força maior.",
        E: "Boa-fé cessa com citação em ação reivindicatória."
      },
      gabarito: "D",
      explicacao: "CC/02, art. 1.217: RESPONSABILIDADE: possuidor BOA-FÉ NÃO responde pela perda/deterioração SEM CULPA (responde após citação). Possuidor MÁ-FÉ responde pela perda/deterioração, AINDA QUE sem culpa (até caso fortuito/força maior, SALVO se provasse que pereceria também com reivindicante). Art. 1.202: boa-fé cessa com CITAÇÃO. D INCORRETA - má-fé responde até por caso fortuito (com ressalva). A, B, C, E corretas.",
      banca: "CESPE",
      ano: 2022,
      cargo: "Procurador Federal - AGU"
    },
    {
      id: "civil-posse-06",
      enunciado: "Quanto à proteção possessória (defesa da posse), assinale a alternativa correta:",
      alternativas: {
        A: "Autotutela (legítima defesa da posse) não é permitida.",
        B: "Possuidor pode usar meios necessários para manter ou restituir posse (desforço imediato).",
        C: "Ações possessórias não existem.",
        D: "Interditos proibitórios protegem contra turbação consumada.",
        E: "Embargos de terceiro não se relacionam com posse."
      },
      gabarito: "B",
      explicacao: "CC/02, art. 1.210: PROTEÇÃO POSSESSÓRIA: 1) AUTOTUTELA/DESFORÇO IMEDIATO (§1º): possuidor turbado/esbulhado pode MANTER-SE ou RESTITUIR-SE por PRÓPRIA FORÇA, usando meios necessários, LOGO (sem excesso). 2) TUTELA JURISDICIONAL: ações possessórias (CPC, arts. 554-568): a) REINTEGRAÇÃO DE POSSE (esbulho); b) MANUTENÇÃO DE POSSE (turbação); c) INTERDITO PROIBITÓRIO (ameaça). B correta. A, C incorretas. D incorreta - interdito é para ameaça. E incorreta - embargos protegem posse.",
      banca: "FCC",
      ano: 2023,
      cargo: "Procurador Municipal - SP"
    },
    {
      id: "civil-posse-07",
      enunciado: "Sobre as ações possessórias, é correto afirmar:",
      alternativas: {
        A: "Reintegração de posse é cabível em caso de turbação.",
        B: "Manutenção de posse é cabível em caso de esbulho.",
        C: "Interdito proibitório é cabível em caso de ameaça de turbação ou esbulho.",
        D: "Fungibilidade entre ações possessórias não é permitida.",
        E: "Não se pode cumular pedido possessório com indenização."
      },
      gabarito: "C",
      explicacao: "CPC, arts. 554-568: AÇÕES POSSESSÓRIAS: 1) REINTEGRAÇÃO: ESBULHO (perda total da posse); 2) MANUTENÇÃO: TURBAÇÃO (embaraço no exercício da posse); 3) INTERDITO PROIBITÓRIO: AMEAÇA de turbação/esbulho. FUNGIBILIDADE (art. 554): permitida (pode conceder tutela adequada se pediu errada). CUMULAÇÃO (art. 555): indenização + perdas e danos + cominação de pena. C correta. A e B invertidas. D incorreta. E incorreta.",
      banca: "VUNESP",
      ano: 2022,
      cargo: "Juiz de Direito - TJSP"
    },
    {
      id: "civil-posse-08",
      enunciado: "Em relação aos requisitos das ações possessórias, assinale a alternativa INCORRETA:",
      alternativas: {
        A: "Prova da posse (atual ou anterior).",
        B: "Turbação, esbulho ou ameaça.",
        C: "Data da turbação/esbulho (para liminar em posse nova).",
        D: "Legitimidade ativa: possuidor direto ou indireto.",
        E: "Possuidor de má-fé nunca tem proteção possessória."
      },
      gabarito: "E",
      explicacao: "AÇÕES POSSESSÓRIAS - Requisitos: 1) POSSE (atual ou anterior); 2) TURBAÇÃO, ESBULHO ou AMEAÇA; 3) DATA (para liminar: posse NOVA - menos de ano e dia); 4) AUTORIA. LEGITIMIDADE ATIVA: possuidor DIRETO ou INDIRETO, inclusive DETENTOR em algumas hipóteses (art. 1.208 - série possessória). LEGITIMIDADE PASSIVA: turbador/esbulhador. ATENÇÃO: POSSUIDOR DE MÁ-FÉ TEM proteção possessória contra terceiros (não contra legítimo possuidor). E INCORRETA - má-fé tem proteção. A, B, C, D corretas.",
      banca: "FGV",
      ano: 2023,
      cargo: "Analista - TJ/AM"
    },
    {
      id: "civil-posse-09",
      enunciado: "Quanto ao desdobramento da posse e a possibilidade de ação possessória, é correto afirmar:",
      alternativas: {
        A: "Possuidor direto não pode ajuizar ação contra indireto.",
        B: "Possuidor indireto não pode ajuizar ação contra direto.",
        C: "Possuidor direto e indireto podem defender sua posse contra terceiros.",
        D: "Locatário (possuidor direto) não tem legitimidade para ação possessória.",
        E: "Proprietário (possuidor indireto) perdeu direito à ação possessória."
      },
      gabarito: "C",
      explicacao: "CC/02, art. 1.197: DESDOBRAMENTO DA POSSE: possuidor DIRETO e INDIRETO podem defender sua posse contra TERCEIROS. Possuidor DIRETO pode defender contra INDIRETO (ex: locatário contra proprietário que turba indevidamente). Possuidor INDIRETO pode ajuizar contra DIRETO (ex: proprietário contra locatário em esbulho). Ambos têm LEGITIMIDADE para ações possessórias. C correta. A, B, D, E incorretas.",
      banca: "CESPE",
      ano: 2023,
      cargo: "Procurador do Estado - PGE/PE"
    },
    {
      id: "civil-posse-10",
      enunciado: "Sobre a composse (posse conjunta) e suas características, assinale a alternativa correta:",
      alternativas: {
        A: "Composse não existe no Código Civil.",
        B: "Composse é posse exercida por duas ou mais pessoas simultaneamente sobre a mesma coisa.",
        C: "Compossuidores não podem defender posse.",
        D: "Composse pró-indiviso significa que há divisão física.",
        E: "Composse pró-diviso significa que não há divisão."
      },
      gabarito: "B",
      explicacao: "CC/02, art. 1.199: COMPOSSE: posse exercida por DUAS OU MAIS PESSOAS simultaneamente sobre MESMA COISA. ESPÉCIES: 1) PRÓ-INDIVISO: SEM divisão física (ex: herdeiros antes de partilha); 2) PRÓ-DIVISO: COM divisão física (cada um tem posse de parte). Compossuidores podem DEFENDER posse (art. 1.199). Presume-se igual (exceto prova contrária - art. 1.199, §ú). B correta. A, C incorretas. D e E invertidas.",
      banca: "FCC",
      ano: 2022,
      cargo: "Defensor Público - DPE/SP"
    }
  ]
};