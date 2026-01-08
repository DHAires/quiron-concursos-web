// Questões de Direito Processual Civil - TEMAS 4-6 (30 questões)
// Área Jurídica - Direito Processual Civil - CPC/2015

export const questionsProcessualCivil2 = {
  // TEMA 4: Contestação (10 questões)
  "contestacao": [
    {
      id: "processual-civil-cont-01",
      enunciado: "Sobre o conceito e prazo da contestação (CPC/2015, arts. 335-337), é correto afirmar:",
      alternativas: {
        A: "Contestação não tem prazo definido.",
        B: "Contestação: resposta do réu à petição inicial (defesa). Prazo: 15 DIAS úteis contados da citação (art. 335). Litisconsórcio: prazo em DOBRO (art. 229 - defensores diferentes). Ministério Público e Fazenda Pública: prazo em dobro/quádruplo (prazos diferenciados).",
        C: "Prazo da contestação é sempre de 30 dias.",
        D: "Litisconsórcio não tem prazo diferenciado.",
        E: "Contestação pode ser apresentada a qualquer momento."
      },
      gabarito: "B",
      explicacao: "CPC/2015, arts. 335-337: CONTESTAÇÃO - resposta do réu (defesa) à petição inicial. PRAZO (art. 335): 15 DIAS ÚTEIS (Lei 13.105/15, art. 219 - prazo processual em dias úteis), contados da CITAÇÃO (pessoal) ou juntada aviso recebimento (correios/oficial). LITISCONSÓRCIO (art. 229): prazo em DOBRO se defensores diferentes, escritórios diferentes (mesmo município). MP/FAZENDA PÚBLICA: prazos diferenciados (em dobro/quádruplo conforme lei orgânica). B correta. A, C, D, E incorretas.",
      banca: "CESPE",
      ano: 2023,
      cargo: "Analista Judiciário - TRT"
    },
    {
      id: "processual-civil-cont-02",
      enunciado: "Em relação ao conteúdo da contestação (CPC/2015, art. 336-341), assinale a alternativa INCORRETA:",
      alternativas: {
        A: "Contestação: réu deve alegar toda matéria de defesa (art. 336 - ônus de impugnação especificada).",
        B: "Preliminares (art. 337): incompetência relativa, incorreção valor causa, inépcia, ilegitimidade, falta interesse, litispendência, coisa julgada, conexão, incapacidade, defeito representação, convenção arbitragem, carência ação.",
        C: "Mérito: impugnação dos fatos alegados pelo autor. Ônus de impugnação especificada (art. 341 - fato não impugnado presume-se verdadeiro).",
        D: "Réu pode deixar de impugnar fatos e eles não serão presumidos verdadeiros.",
        E: "Exceção: art. 341 - não se aplica quando não competir ao réu o ônus da prova, direito indisponível, etc."
      },
      gabarito: "D",
      explicacao: "CPC/2015, arts. 336-341: CONTEÚDO DA CONTESTAÇÃO. Art. 336: réu deve alegar toda matéria de DEFESA. PRELIMINARES (art. 337): matérias processuais (incompetência relativa, incorreção valor, inépcia, ilegitimidade, litispendência, coisa julgada, conexão, incapacidade, defeito representação, convenção arbitragem, carência). MÉRITO: impugnação FATOS. ÔNUS IMPUGNAÇÃO ESPECIFICADA (art. 341): fato NÃO impugnado presume-se VERDADEIRO (admissão tácita). Exceções §único: não competir ao réu ônus prova, versarem sobre direitos INDISPONÍVEIS, PI não estiver acompanhada de instrumento. D INCORRETA - fato não impugnado presume-se verdadeiro (art. 341). A, B, C, E corretas.",
      banca: "FCC",
      ano: 2023,
      cargo: "Analista Judiciário - TJ"
    },
    {
      id: "processual-civil-cont-03",
      enunciado: "Quanto às preliminares da contestação (CPC/2015, art. 337), é correto afirmar:",
      alternativas: {
        A: "Preliminares não têm ordem específica.",
        B: "Preliminares (art. 337): matérias processuais que devem ser alegadas ANTES do mérito. Ordem: I) incompetência (relativa); II) incorreção valor causa; III) inépcia PI; IV) ilegitimidade; V) interesse; VI) litispendência; VII) coisa julgada; VIII) conexão; IX) incapacidade/defeito representação; X) convenção arbitragem; XI) carência ação. Não alegadas: preclusão (salvo absolutas - §5º).",
        C: "Preliminares podem ser alegadas a qualquer momento.",
        D: "Preliminares não precluem.",
        E: "Incompetência absoluta é preliminar."
      },
      gabarito: "B",
      explicacao: "CPC/2015, art. 337: PRELIMINARES DA CONTESTAÇÃO - matérias processuais (objeções processuais). Devem ser alegadas em PRELIMINAR (antes mérito). ROL (I-XI): incompetência relativa, incorreção valor, inépcia, ilegitimidade, falta interesse, litispendência, coisa julgada, conexão, incapacidade/defeito representação, convenção arbitragem, carência. NÃO alegadas na contestação: PRECLUSÃO (§5º - não podem mais ser alegadas). EXCEÇÃO: matérias conhecidas de ofício (absolutas - art. 485). B correta. A, C, D incorretas. E: incompetência absoluta conhecida de ofício (art. 64), não é preliminar obrigatória.",
      banca: "VUNESP",
      ano: 2023,
      cargo: "Escrevente - TJ"
    },
    {
      id: "processual-civil-cont-04",
      enunciado: "Sobre a reconvenção (CPC/2015, arts. 343-345), assinale a alternativa correta:",
      alternativas: {
        A: "Reconvenção não existe no CPC/2015.",
        B: "Reconvenção: ação do RÉU contra o AUTOR, no mesmo processo (pedido contraposto). Requisitos (art. 343): competência, compatibilidade procedimento, conexão com ação principal/fundamento defesa. Prazo: mesmo da contestação. Natureza: ação (nova demanda). Autor: réu-reconvinte. Réu: autor-reconvindo.",
        C: "Reconvenção é igual à contestação.",
        D: "Reconvenção não precisa de conexão.",
        E: "Reconvenção pode ser proposta após sentença."
      },
      gabarito: "B",
      explicacao: "CPC/2015, arts. 343-345: RECONVENÇÃO - ação do RÉU contra o AUTOR, no mesmo processo. Natureza: AÇÃO (nova demanda autônoma). REQUISITOS (art. 343): I) competência do juízo para ambas; II) compatibilidade de PROCEDIMENTO; III) CONEXÃO com ação principal ou fundamento da defesa. PRAZO: mesmo da CONTESTAÇÃO (15 dias úteis - art. 335). Partes: réu = réu-reconvinte; autor = autor-reconvindo. Art. 344: autor-reconvindo será INTIMADO para contestar reconvenção (15 dias úteis). B correta. A, C, D, E incorretas.",
      banca: "FGV",
      ano: 2023,
      cargo: "Analista Judiciário - TJ"
    },
    {
      id: "processual-civil-cont-05",
      enunciado: "Em relação à revelia (CPC/2015, arts. 344-346), é INCORRETO afirmar:",
      alternativas: {
        A: "Revelia: não apresentação de contestação no prazo legal.",
        B: "Efeito material: presunção relativa de veracidade dos fatos (art. 344 - confissão ficta).",
        C: "Efeito processual: desnecessidade de intimação dos atos (art. 346 - salvo sentença/audiência).",
        D: "Revelia sempre gera presunção de veracidade dos fatos.",
        E: "Exceções à revelia (art. 345): havendo pluralidade réus (1 contesta), versarem sobre direitos indisponíveis, PI não instruída com documentos, fatos inverossímeis/contrários prova."
      },
      gabarito: "D",
      explicacao: "CPC/2015, arts. 344-346: REVELIA - não apresentação de contestação no prazo. EFEITOS: I) MATERIAL: presunção RELATIVA veracidade fatos (confissão ficta - art. 344); II) PROCESSUAL: réu não será INTIMADO dos atos (art. 346 - salvo sentença §único). EXCEÇÕES (art. 345): presunção NÃO ocorre se: I) havendo PLURALIDADE réus, 1 deles contesta; II) versarem sobre direitos INDISPONÍVEIS; III) PI NÃO instruída com documentos indispensáveis; IV) fatos INVEROSSÍMEIS/CONTRÁRIOS prova. D INCORRETA - revelia NEM SEMPRE gera presunção (art. 345 - exceções). A, B, C, E corretas.",
      banca: "CESPE",
      ano: 2022,
      cargo: "Analista Judiciário - TRT"
    },
    {
      id: "processual-civil-cont-06",
      enunciado: "Quanto às defesas do réu (CPC/2015), é correto afirmar:",
      alternativas: {
        A: "Réu só tem uma forma de defesa.",
        B: "Defesas do réu: I) CONTESTAÇÃO (art. 335 - defesa direta/indireta); II) RECONVENÇÃO (art. 343 - contraataque); III) EXCEÇÕES (art. 337 - preliminares: incompetência, impedimento, suspeição); IV) IMPUGNAÇÃO AO VALOR DA CAUSA (art. 293). Prazo: regra 15 dias úteis (art. 335).",
        C: "Impugnação ao valor da causa não é defesa.",
        D: "Exceção de incompetência não existe.",
        E: "Réu não pode reconvir."
      },
      gabarito: "B",
      explicacao: "CPC/2015: DEFESAS DO RÉU. MODALIDADES: 1) CONTESTAÇÃO (art. 335-342): resposta mérito/preliminares; 2) RECONVENÇÃO (art. 343-345): ação do réu contra autor; 3) EXCEÇÕES (art. 337): incompetência relativa, impedimento, suspeição (preliminares); 4) IMPUGNAÇÃO VALOR CAUSA (art. 293 - contestação). Prazo geral: 15 DIAS ÚTEIS (art. 335, 229 - dobro litisconsórcio defensores diferentes). Réu: pode cumular defesas (contestar + reconvir + impugnar valor). B correta. A, C, D, E incorretas.",
      banca: "FCC",
      ano: 2023,
      cargo: "Analista Judiciário - TJ"
    },
    {
      id: "processual-civil-cont-07",
      enunciado: "Sobre a audiência de conciliação ou mediação (CPC/2015, arts. 334, 695), assinale a alternativa INCORRETA:",
      alternativas: {
        A: "Audiência de conciliação/mediação: designada após citação do réu (art. 334 - antes da contestação).",
        B: "Dispensa de audiência (art. 334 §4º): ambas partes manifestam desinteresse, ou não admitir autocomposição.",
        C: "Não comparecimento injustificado: multa até 2% valor causa (§8º).",
        D: "Audiência de conciliação é sempre obrigatória.",
        E: "Prazo contestação: 15 dias úteis contados da audiência (se não houver acordo) ou da protocolo pedido cancelamento audiência (art. 335)."
      },
      gabarito: "D",
      explicacao: "CPC/2015, art. 334: AUDIÊNCIA DE CONCILIAÇÃO OU MEDIAÇÃO - designada após citação, ANTES da contestação. DISPENSA (§4º): I) AMBAS partes manifestam DESINTERESSE; II) direito NÃO admite autocomposição. §8º: não comparecimento INJUSTIFICADO: MULTA até 2% valor causa + indenização. Art. 335: prazo CONTESTAÇÃO - 15 dias úteis da audiência (se não houver acordo) ou protocolo pedido cancelamento audiência (§5º art. 334). D INCORRETA - audiência NÃO é sempre obrigatória (pode ser dispensada §4º). A, B, C, E corretas.",
      banca: "VUNESP",
      ano: 2022,
      cargo: "Escrevente - TJ"
    },
    {
      id: "processual-civil-cont-08",
      enunciado: "Em relação à providências preliminares (CPC/2015, arts. 347-353), é correto afirmar:",
      alternativas: {
        A: "Não há providências preliminares no CPC/2015.",
        B: "Providências preliminares (arts. 347-353): após contestação, antes de saneamento, juiz pode determinar: I) réplica (autor manifestar sobre documentos novos - art. 350); II) especificação provas (art. 348); III) dilação probatória (art. 349); IV) julgamento antecipado mérito (art. 355) ou parcial (art. 356). Flexibilização procedimento.",
        C: "Providências preliminares só podem ser requeridas pelas partes.",
        D: "Juiz não pode determinar providências de ofício.",
        E: "Réplica não existe no CPC/2015."
      },
      gabarito: "B",
      explicacao: "CPC/2015, arts. 347-353: PROVIDÊNCIAS PRELIMINARES - após contestação, antes saneamento e organização processo. HIPÓTESES: I) RÉPLICA (art. 350 - autor manifestar sobre documentos novos juntados pelo réu - 15 dias); II) especificação PROVAS (art. 348 - 10 dias); III) dilação probatória (art. 349); IV) julgamento ANTECIPADO mérito (art. 355 - desnecessária dilação) ou PARCIAL (art. 356). Juiz: pode determinar de OFÍCIO ou a requerimento. Flexibilização procedimento (gestão processual). B correta. A, C, D, E incorretas.",
      banca: "FGV",
      ano: 2023,
      cargo: "Analista Judiciário - TJ"
    },
    {
      id: "processual-civil-cont-09",
      enunciado: "Quanto ao julgamento conforme o estado do processo (CPC/2015, arts. 354-357), assinale a alternativa correta:",
      alternativas: {
        A: "Julgamento conforme estado do processo não existe.",
        B: "Julgamento conforme estado do processo (arts. 354-357): juiz pode julgar liminarmente sem produção provas. Hipóteses: I) extinção sem mérito (art. 354 - preliminar acolhida); II) julgamento antecipado MÉRITO (art. 355 - desnecessária dilação probatória); III) julgamento antecipado PARCIAL mérito (art. 356 - parte incontroversa). Celeridade.",
        C: "Juiz sempre deve produzir todas as provas requeridas.",
        D: "Julgamento antecipado viola contraditório.",
        E: "Julgamento parcial do mérito não é permitido."
      },
      gabarito: "B",
      explicacao: "CPC/2015, arts. 354-357: JULGAMENTO CONFORME ESTADO DO PROCESSO - juiz julga antes instrução. HIPÓTESES: 1) EXTINÇÃO SEM MÉRITO (art. 354 - acolhe preliminar que obsta mérito); 2) JULGAMENTO ANTECIPADO MÉRITO (art. 355 - desnecessária dilação probatória - revelia com efeitos, mérito questão direito/fatos provados por documentos); 3) JULGAMENTO ANTECIPADO PARCIAL MÉRITO (art. 356 - parte pedido/mérito incontroverso, possibilidade sentença parcial). Fundamento: celeridade, economia processual. B correta. A, C, D, E incorretas.",
      banca: "CESPE",
      ano: 2023,
      cargo: "Analista Judiciário - TRT"
    },
    {
      id: "processual-civil-cont-10",
      enunciado: "Sobre a impugnação à contestação, é INCORRETO afirmar:",
      alternativas: {
        A: "Impugnação à contestação não está prevista expressamente no CPC/2015 como peça autônoma obrigatória.",
        B: "Documentos novos juntados pelo réu: autor pode manifestar em réplica (art. 350 - 15 dias).",
        C: "Réplica não é obrigatória em todo caso.",
        D: "Autor deve sempre apresentar réplica à contestação.",
        E: "Art. 350: juiz pode facultar réplica sobre questões substanciais da defesa."
      },
      gabarito: "D",
      explicacao: "CPC/2015: RÉPLICA/IMPUGNAÇÃO À CONTESTAÇÃO. Art. 350: juiz determinará réplica quando réu juntar DOCUMENTOS NOVOS (15 dias para autor manifestar). CPC/2015 NÃO prevê réplica obrigatória em todo caso (diferente CPC/73). Réplica: facultativa (juiz pode facultar sobre questões substanciais defesa). Autor se manifesta sobre preliminares contestação no momento saneador (art. 357 §3º - partes manifestam sobre provas/preliminares). D INCORRETA - autor NÃO deve sempre apresentar réplica (só quando determinado - art. 350). A, B, C, E corretas.",
      banca: "FCC",
      ano: 2022,
      cargo: "Analista Judiciário - TJ"
    }
  ],

  // TEMA 5: Provas (10 questões)
  "provas": [
    {
      id: "processual-civil-prova-01",
      enunciado: "Sobre o conceito e princípios do direito probatório (CPC/2015, arts. 369-380), é correto afirmar:",
      alternativas: {
        A: "Prova não tem relevância no processo civil.",
        B: "Prova: meio de demonstração da verdade dos fatos alegados. Princípios: livre convencimento motivado do juiz (art. 371), contraditório (art. 9º), vedação prova ilícita (art. 369 parte final), licitude probatória, comunhão/aquisição prova. Atipicidade meios probatórios (art. 369 - qualquer meio moralmente legítimo).",
        C: "Juiz pode decidir sem fundamentar na prova dos autos.",
        D: "Prova ilícita pode ser utilizada.",
        E: "Rol de provas é taxativo (numerus clausus)."
      },
      gabarito: "B",
      explicacao: "CPC/2015, arts. 369-380: DIREITO PROBATÓRIO. CONCEITO: meio de demonstração da VERDADE dos fatos alegados. PRINCÍPIOS: 1) LIVRE CONVENCIMENTO MOTIVADO (art. 371 - juiz aprecia livremente, mas deve fundamentar); 2) CONTRADITÓRIO (art. 9º); 3) VEDAÇÃO PROVA ILÍCITA (art. 369 parte final - CF, art. 5º, LVI); 4) licitude, lealdade; 5) comunhão/aquisição prova (pertence ao processo). Art. 369: ATIPICIDADE - qualquer meio de prova moralmente legítimo (rol exemplificativo). B correta. A, C, D, E incorretas.",
      banca: "CESPE",
      ano: 2023,
      cargo: "Analista Judiciário - TRT"
    },
    {
      id: "processual-civil-prova-02",
      enunciado: "Em relação ao ônus da prova (CPC/2015, art. 373), assinale a alternativa INCORRETA:",
      alternativas: {
        A: "Ônus da prova: encargo de provar os fatos alegados.",
        B: "Distribuição (art. 373): I) autor: fato CONSTITUTIVO do direito (ônus de provar existência do direito); II) réu: fato IMPEDITIVO, MODIFICATIVO ou EXTINTIVO do direito do autor.",
        C: "Inversão ônus prova: possível por convenção (§§3º-4º - desde que não torne excessivamente difícil, direitos disponíveis) ou decisão judicial (ex: CDC, art. 6º, VIII - hipossuficiência).",
        D: "Ônus da prova sempre é do autor em qualquer caso.",
        E: "Teoria da distribuição dinâmica do ônus da prova: §1º - juiz pode redistribuir conforme facilidade probatória."
      },
      gabarito: "D",
      explicacao: "CPC/2015, art. 373: ÔNUS DA PROVA - encargo de demonstrar fatos alegados. DISTRIBUIÇÃO ESTÁTICA: I) AUTOR: fato CONSTITUTIVO do direito; II) RÉU: fatos IMPEDITIVO, MODIFICATIVO ou EXTINTIVO. INVERSÃO: §§3º-4º - convenção partes (direitos disponíveis, não tornar excessivamente difícil); CDC, art. 6º, VIII (consumidor - hipossuficiência/verossimilhança). DISTRIBUIÇÃO DINÂMICA (§1º): juiz pode redistribuir conforme maior facilidade obtenção prova. D INCORRETA - ônus NEM SEMPRE é só do autor (réu prova fatos impeditivos/modificativos/extintivos). A, B, C, E corretas.",
      banca: "FCC",
      ano: 2023,
      cargo: "Analista Judiciário - TJ"
    },
    {
      id: "processual-civil-prova-03",
      enunciado: "Quanto à prova documental (CPC/2015, arts. 405-441), é correto afirmar:",
      alternativas: {
        A: "Prova documental não é admitida no CPC/2015.",
        B: "Prova documental: documento (escrito, fotografia, reprodução mecânica/eletrônica). Espécies: público (art. 405-410 - cartório, órgão público, fé pública) e particular (art. 411 - sem fé pública). Documento público: presunção veracidade relativa (até prova contrário). Momento juntada: inicial/contestação (art. 434), até sentença se fatos novos (art. 435).",
        C: "Documento público não tem presunção de veracidade.",
        D: "Documentos só podem ser juntados na inicial.",
        E: "Documento particular tem fé pública."
      },
      gabarito: "B",
      explicacao: "CPC/2015, arts. 405-441: PROVA DOCUMENTAL. CONCEITO (art. 405): documento - qualquer escrito, instrumento, papel, fotografia, reprodução mecânica/eletrônica. ESPÉCIES: I) PÚBLICO (arts. 405-410): emanado de cartório/órgão público/oficial público (fé pública - presunção RELATIVA veracidade); II) PARTICULAR (art. 411): sem fé pública (prova quando assinado). MOMENTO JUNTADA: regra - inicial/contestação (art. 434); até SENTENÇA se fatos novos ou contrapor produzidas (art. 435). B correta. A, C, D, E incorretas.",
      banca: "VUNESP",
      ano: 2023,
      cargo: "Escrevente - TJ"
    },
    {
      id: "processual-civil-prova-04",
      enunciado: "Sobre a prova testemunhal (CPC/2015, arts. 442-463), assinale a alternativa correta:",
      alternativas: {
        A: "Prova testemunhal não é admitida no processo civil.",
        B: "Prova testemunhal: depoimento de terceiros sobre fatos. Rol (art. 450): até 10 testemunhas (3 por fato, Juizados: 3 no total). Compromisso (art. 458 - jurar dizer verdade). Inquirição: por videoconferência possível (art. 453 §1º). Impedidos/suspeitos (art. 447-448). Contradita (art. 457 - impugnação testemunha).",
        C: "Limite de testemunhas é de 50 por parte.",
        D: "Testemunhas não prestam compromisso.",
        E: "Contradita não é permitida."
      },
      gabarito: "B",
      explicacao: "CPC/2015, arts. 442-463: PROVA TESTEMUNHAL - depoimento terceiro sobre fatos. ROL (art. 450): até 10 TESTEMUNHAS (máximo 3 para prova de cada fato; Juizados Especiais: 3 no total - Lei 9.099/95). COMPROMISSO (art. 458): testemunha presta compromisso (jurar dizer verdade - falso testemunho: CP, art. 342). INQUIRIÇÃO: pode ser por VIDEOCONFERÊNCIA (art. 453 §1º). IMPEDIDOS (art. 447): incapazes, interessados, cônjuge/parentes. CONTRADITA (art. 457): impugnação testemunha (credibilidade). B correta. A, C, D, E incorretas.",
      banca: "FGV",
      ano: 2023,
      cargo: "Analista Judiciário - TJ"
    },
    {
      id: "processual-civil-prova-05",
      enunciado: "Em relação à prova pericial (CPC/2015, arts. 464-480), é INCORRETO afirmar:",
      alternativas: {
        A: "Prova pericial: exame técnico por expert (perito) sobre fato que depende conhecimento técnico/científico.",
        B: "Perito: auxiliar da justiça, nomeado pelo juiz, imparcial. Assistentes técnicos: indicados pelas partes (art. 465).",
        C: "Quesitos: perguntas formuladas pelas partes ao perito (art. 469). Prazo: 15 dias após intimação despacho nomeação perito.",
        D: "Perito não precisa ter conhecimento técnico especializado.",
        E: "Laudo pericial: prazo fixado pelo juiz (art. 477). Esclarecimentos: art. 477 §§2º-3º (complementação, audiência)."
      },
      gabarito: "D",
      explicacao: "CPC/2015, arts. 464-480: PROVA PERICIAL - exame TÉCNICO/CIENTÍFICO por expert (perito). PERITO (art. 465): auxiliar justiça, nomeado juiz, IMPARCIAL, conhecimento técnico/científico ESPECIALIZADO. ASSISTENTES TÉCNICOS: indicados partes (parciais). QUESITOS (art. 469): perguntas ao perito (15 dias após intimação despacho nomeação). LAUDO (art. 477): prazo juiz fixa. Esclarecimentos (§§2º-3º): complementação, audiência. Honorários periciais (art. 95). D INCORRETA - perito DEVE ter conhecimento técnico especializado (art. 465). A, B, C, E corretas.",
      banca: "CESPE",
      ano: 2022,
      cargo: "Analista Judiciário - TRT"
    },
    {
      id: "processual-civil-prova-06",
      enunciado: "Quanto à inspeção judicial (CPC/2015, arts. 481-484), é correto afirmar:",
      alternativas: {
        A: "Inspeção judicial não existe no CPC/2015.",
        B: "Inspeção judicial: juiz examina pessoas ou coisas, diretamente, para esclarecer fato. Hipótese: fato depende exame direto (art. 481). Procedimento: determinação de ofício/requerimento, intimação partes, acompanhamento peritos/assistentes técnicos (art. 483). Auto de inspeção: documento lavrado (art. 484).",
        C: "Inspeção judicial não pode ser determinada de ofício.",
        D: "Partes não são intimadas da inspeção.",
        E: "Inspeção judicial não gera documento."
      },
      gabarito: "B",
      explicacao: "CPC/2015, arts. 481-484: INSPEÇÃO JUDICIAL - juiz examina pessoa ou coisa DIRETAMENTE. HIPÓTESE (art. 481): esclarecer fato que dependa de exame DIRETO. PROCEDIMENTO: determinação de OFÍCIO ou REQUERIMENTO; intimação partes (art. 482); pode acompanhar peritos/assistentes técnicos (art. 483). AUTO DE INSPEÇÃO (art. 484): documento lavrado descrevendo exame (subscrito juiz). Exemplo: vistoria imóvel litígio. B correta. A, C, D, E incorretas.",
      banca: "FCC",
      ano: 2023,
      cargo: "Analista Judiciário - TJ"
    },
    {
      id: "processual-civil-prova-07",
      enunciado: "Sobre o depoimento pessoal (CPC/2015, arts. 385-388), assinale a alternativa INCORRETA:",
      alternativas: {
        A: "Depoimento pessoal: oitiva das próprias partes (autor/réu) pelo juiz.",
        B: "Finalidade: confissão (art. 389-395) ou esclarecer fatos (art. 139, VIII).",
        C: "Confissão: reconhecimento da verdade de fato contrário ao interesse/favorável ao adversário (art. 389).",
        D: "Confissão sempre pode ser revogada livremente.",
        E: "Pena de confesso: parte sem justo motivo não comparece ou recusa a depor (art. 385 §1º - presume-se confessados fatos). Não se aplica: direito indisponível, fatos inverossímeis, houver prova contrária."
      },
      gabarito: "D",
      explicacao: "CPC/2015, arts. 385-395: DEPOIMENTO PESSOAL - oitiva das PARTES. FINALIDADE: CONFISSÃO (reconhecimento fato contrário ao interesse - art. 389) ou esclarecer fatos (art. 139, VIII). PENA DE CONFESSO (art. 385 §1º): não comparece ou recusa depor SEM JUSTO MOTIVO - presume-se confessados fatos. NÃO se aplica (§2º): versarem sobre direitos INDISPONÍVEIS, fatos INVEROSSÍMEIS, houver prova contrária. CONFISSÃO (arts. 389-395): irrevogável (art. 392 - salvo erro, dolo, coação). D INCORRETA - confissão NÃO pode ser revogada livremente (irrevogável - art. 392). A, B, C, E corretas.",
      banca: "VUNESP",
      ano: 2022,
      cargo: "Escrevente - TJ"
    },
    {
      id: "processual-civil-prova-08",
      enunciado: "Em relação à ata notarial (CPC/2015, art. 384), é correto afirmar:",
      alternativas: {
        A: "Ata notarial não é meio de prova.",
        B: "Ata notarial (art. 384): documento PÚBLICO lavrado por TABELIÃO, sem caráter contencioso, para CONSTATAR FATOS. Finalidade: prova pré-constituída (ex: constatação site internet, estado imóvel, funcionamento estabelecimento). Natureza: documento público (fé pública). Uso: evitar perecimento/dificuldade futura produção prova.",
        C: "Ata notarial não tem fé pública.",
        D: "Ata notarial só pode ser usada após ajuizamento da ação.",
        E: "Tabelião não pode lavrar ata notarial."
      },
      gabarito: "B",
      explicacao: "CPC/2015, art. 384: ATA NOTARIAL - documento PÚBLICO lavrado por TABELIÃO (notário), sem caráter contencioso, que CONSTATA fatos. FINALIDADE: prova PRÉ-CONSTITUÍDA de fato (evidência). NATUREZA: documento público (fé pública - presunção veracidade). USO: constatação site internet (conteúdo em data certa), estado conservação imóvel, funcionamento estabelecimento. Evita perecimento ou dificuldade futura produção prova. Pode ser feita ANTES ou durante processo. B correta. A, C, D, E incorretas.",
      banca: "FGV",
      ano: 2023,
      cargo: "Analista Judiciário - TJ"
    },
    {
      id: "processual-civil-prova-09",
      enunciado: "Quanto à produção antecipada de prova (CPC/2015, arts. 381-383), assinale a alternativa correta:",
      alternativas: {
        A: "Produção antecipada de prova não existe.",
        B: "Produção antecipada de prova (arts. 381-383): procedimento AUTÔNOMO, ANTES da ação principal, para produzir prova cujo objeto pode desaparecer ou dificuldade futura produção. Hipóteses (art. 381): urgência, prova necessária viabilizar autocomposição/evitar processo. Procedimento: petição → citação interessado → produção prova → encerramento. Natureza: jurisdição voluntária (não contenciosa).",
        C: "Produção antecipada de prova só ocorre durante o processo principal.",
        D: "Produção antecipada não cita o interessado.",
        E: "Produção antecipada de prova é sempre contenciosa."
      },
      gabarito: "B",
      explicacao: "CPC/2015, arts. 381-383: PRODUÇÃO ANTECIPADA DE PROVA - procedimento AUTÔNOMO (ação), ANTES da ação principal. HIPÓTESES (art. 381): I) URGÊNCIA (objeto pode desaparecer/dificuldade futura produção); II) prova necessária VIABILIZAR autocomposição/EVITAR processo. PROCEDIMENTO: petição (fundamentada) → citação interessado (contraditório - art. 382) → produção prova (perícia, testemunhal, inspeção) → encerramento. NATUREZA: jurisdição voluntária (não contenciosa). Ação principal: deve ser proposta em 30 dias (se urgência - art. 383). B correta. A, C, D, E incorretas.",
      banca: "CESPE",
      ano: 2023,
      cargo: "Analista Judiciário - TRT"
    },
    {
      id: "processual-civil-prova-10",
      enunciado: "Sobre a valoração/apreciação da prova (CPC/2015, art. 371), é INCORRETO afirmar:",
      alternativas: {
        A: "Valoração da prova: apreciação pelo juiz do conjunto probatório para formar convicção.",
        B: "Sistema adotado: livre convencimento motivado/persuasão racional (art. 371 - juiz aprecia livremente, mas deve fundamentar).",
        C: "Juiz não está vinculado a hierarquia legal de provas.",
        D: "Juiz pode decidir sem fundamentar sua convicção na prova dos autos.",
        E: "Art. 371: juiz deve analisar prova conforme contraditório, regras da experiência, fatos notórios."
      },
      gabarito: "D",
      explicacao: "CPC/2015, art. 371: VALORAÇÃO/APRECIAÇÃO DA PROVA - formação convicção juiz. SISTEMA: LIVRE CONVENCIMENTO MOTIVADO (persuasão racional) - juiz aprecia livremente as provas (não há hierarquia legal de provas), mas DEVE FUNDAMENTAR sua decisão indicando razões que formaram convicção (art. 371, art. 93, IX CF). Juiz deve analisar conforme: contraditório, regras da experiência comum, fatos notórios. Difere: prova legal/tarifada (hierarquia rígida) x íntima convicção (sem fundamentar). D INCORRETA - juiz DEVE fundamentar (art. 371, 93 IX CF). A, B, C, E corretas.",
      banca: "FCC",
      ano: 2022,
      cargo: "Analista Judiciário - TJ"
    }
  ],

  // TEMA 6: Sentença (10 questões)
  "sentenca": [
    {
      id: "processual-civil-sent-01",
      enunciado: "Sobre o conceito e classificação de sentença (CPC/2015, arts. 203, 485-495), é correto afirmar:",
      alternativas: {
        A: "Sentença não tem conceito definido no CPC/2015.",
        B: "Sentença (art. 203 §1º): pronunciamento do juiz que põe FIM à fase cognitiva do procedimento COMUM (1º grau), com ou sem mérito. Classificação: definitiva (art. 487 - com mérito - resolve conflito) x terminativa (art. 485 - sem mérito - não resolve). Requisitos (art. 489): relatório, fundamentação, dispositivo.",
        C: "Sentença sempre resolve o mérito.",
        D: "Sentença não precisa de fundamentação.",
        E: "Sentença terminativa é igual a definitiva."
      },
      gabarito: "B",
      explicacao: "CPC/2015, art. 203 §1º: SENTENÇA - pronunciamento juiz que põe FIM à fase cognitiva do procedimento COMUM em 1º grau (com/sem mérito). CLASSIFICAÇÃO: 1) DEFINITIVA (art. 487 - COM mérito - resolve lide - produz coisa julgada material); 2) TERMINATIVA (art. 485 - SEM mérito - não resolve - coisa julgada formal). Art. 489: REQUISITOS: I) RELATÓRIO (resumo); II) FUNDAMENTAÇÃO (razões fato/direito); III) DISPOSITIVO (conclusão). CF, art. 93, IX: obrigatoriedade fundamentação. B correta. A, C, D, E incorretas.",
      banca: "CESPE",
      ano: 2023,
      cargo: "Analista Judiciário - TRT"
    },
    {
      id: "processual-civil-sent-02",
      enunciado: "Em relação aos requisitos da sentença (CPC/2015, art. 489), assinale a alternativa INCORRETA:",
      alternativas: {
        A: "Relatório: resumo do processo (partes, pedido, contestação, ocorrências relevantes).",
        B: "Fundamentação: razões de fato e direito que levaram à decisão. §1º: não se considera fundamentada decisão que: apenas confirma/reproduz precedente sem identificar fundamentos, emprega conceitos indeterminados sem explicar, invocar motivos não enfrentar argumentos deduzidos, não enfrentar todos argumentos.",
        C: "Dispositivo: conclusão (procedência/improcedência, parcial procedência).",
        D: "Sentença não precisa de relatório em nenhum caso.",
        E: "Fundamentação deficiente: vício que enseja nulidade (art. 93, IX CF, art. 489 §1º)."
      },
      gabarito: "D",
      explicacao: "CPC/2015, art. 489: REQUISITOS DA SENTENÇA. I) RELATÓRIO: resumo processo (partes, pedido, contestação, ocorrências). II) FUNDAMENTAÇÃO: razões fato e direito (CF, art. 93, IX - obrigatória). §1º: NÃO fundamentada - se apenas confirma precedente sem identificar fundamentos, emprega conceitos indeterminados sem explicar, invoca motivos sem enfrentar argumentos, não enfrenta todos argumentos. III) DISPOSITIVO: conclusão (procedência/improcedência). EXCEÇÃO relatório: Juizados Especiais (Lei 9.099/95). D INCORRETA - sentença PRECISA de relatório (regra - art. 489). A, B, C, E corretas.",
      banca: "FCC",
      ano: 2023,
      cargo: "Analista Judiciário - TJ"
    },
    {
      id: "processual-civil-sent-03",
      enunciado: "Quanto à sentença terminativa (CPC/2015, art. 485), é correto afirmar:",
      alternativas: {
        A: "Sentença terminativa resolve o mérito.",
        B: "Sentença terminativa (art. 485): extingue processo SEM resolução de MÉRITO. Hipóteses (I-VIII): indeferimento PI, abandono causa (autor), não promover atos/diligências, convenção arbitragem, desistência, intransmissibilidade, ausência pressupostos processuais/condições ação, não conciliadas questões prejudiciais, cumprimento integral acordo. Coisa julgada FORMAL (pode repropor ação).",
        C: "Sentença terminativa produz coisa julgada material.",
        D: "Sentença terminativa não pode ser proferida.",
        E: "Após sentença terminativa não pode ajuizar nova ação."
      },
      gabarito: "B",
      explicacao: "CPC/2015, art. 485: SENTENÇA TERMINATIVA - extingue processo SEM resolução de MÉRITO. HIPÓTESES (I-VIII): indeferimento PI, abandono causa (autor - art. 485, III - autor não promove atos/diligências que lhe compete), convenção arbitragem, desistência ação (art. 485, V), intransmissibilidade/morte parte/perda capacidade (art. 485, IX), ausência pressupostos processuais/condições ação, questões prejudiciais não conciliadas. Produz COISA JULGADA FORMAL (pode repropor ação corrigindo vício). B correta. A, C, D, E incorretas.",
      banca: "VUNESP",
      ano: 2023,
      cargo: "Escrevente - TJ"
    },
    {
      id: "processual-civil-sent-04",
      enunciado: "Sobre a sentença definitiva (CPC/2015, art. 487), assinale a alternativa correta:",
      alternativas: {
        A: "Sentença definitiva não resolve o mérito.",
        B: "Sentença definitiva (art. 487): extingue processo COM resolução de MÉRITO. Hipóteses (I-III): I) acolhe/rejeita PEDIDO (procedência/improcedência); II) decidir sobre decadência/prescrição; III) homologar autocomposição (transação, acordo). Produz COISA JULGADA MATERIAL (art. 502 - imutabilidade - não pode repropor).",
        C: "Sentença definitiva produz apenas coisa julgada formal.",
        D: "Sentença definitiva não pode homologar acordo.",
        E: "Após sentença definitiva pode repropor a ação sobre o mesmo pedido."
      },
      gabarito: "B",
      explicacao: "CPC/2015, art. 487: SENTENÇA DEFINITIVA - extingue processo COM resolução de MÉRITO. HIPÓTESES (I-III): I) acolhe ou REJEITA pedido formulado (procedência/improcedência); II) decidir sobre DECADÊNCIA/PRESCRIÇÃO (Enunciado 98 FPPC - com mérito); III) HOMOLOGAR autocomposição (transação, renúncia, reconhecimento). Produz COISA JULGADA MATERIAL (art. 502 - imutabilidade - art. 5º, XXXVI CF - NÃO pode repropor). B correta. A, C, D, E incorretas.",
      banca: "FGV",
      ano: 2023,
      cargo: "Analista Judiciário - TJ"
    },
    {
      id: "processual-civil-sent-05",
      enunciado: "Em relação aos efeitos da sentença (CPC/2015), é INCORRETO afirmar:",
      alternativas: {
        A: "Efeitos da sentença: principais (declaratório, constitutivo, condenatório) e secundários (executivo, mandamental).",
        B: "Sentença declaratória: declara existência/inexistência de relação jurídica (art. 19). Efeito ex tunc (retroativo).",
        C: "Sentença constitutiva: cria, modifica ou extingue relação jurídica (ex: divórcio, anulação contrato). Efeito ex nunc (prospectivo, salvo exceções).",
        D: "Sentença condenatória: impõe obrigação ao réu (fazer, não fazer, dar). Título executivo judicial (art. 515).",
        E: "Sentença sempre tem apenas um efeito, nunca pode ser mista."
      },
      gabarito: "E",
      explicacao: "CPC/2015: EFEITOS DA SENTENÇA. PRINCIPAIS: 1) DECLARATÓRIA (declara existência/inexistência relação jurídica - art. 19 - ex tunc); 2) CONSTITUTIVA (cria, modifica, extingue relação - ex: divórcio, rescisão contrato - ex nunc); 3) CONDENATÓRIA (impõe obrigação fazer/não fazer/dar - art. 515 - título executivo). SECUNDÁRIOS: executiva (não precisa nova ação para executar - art. 515), mandamental (ordem judicial coercitiva - art. 139, IV). Sentença pode ser MISTA (ex: declaratória + condenatória). E INCORRETA - sentença PODE ter efeitos mistos. A, B, C, D corretas.",
      banca: "CESPE",
      ano: 2022,
      cargo: "Analista Judiciário - TRT"
    },
    {
      id: "processual-civil-sent-06",
      enunciado: "Quanto à coisa julgada (CPC/2015, arts. 502-508), é correto afirmar:",
      alternativas: {
        A: "Coisa julgada não existe no CPC/2015.",
        B: "Coisa julgada (art. 502): imutabilidade da decisão (não mais sujeita a recurso). Formal (procedimento - sentença sem mérito) x material (mérito - art. 502 - torna imutável/indiscutível decisão mérito). CF, art. 5º, XXXVI: respeito coisa julgada. Limites objetivos (pedido/causa pedir - art. 503), subjetivos (partes - art. 506).",
        C: "Coisa julgada material não torna decisão imutável.",
        D: "Coisa julgada pode atingir terceiros livremente.",
        E: "Não há limites para coisa julgada."
      },
      gabarito: "B",
      explicacao: "CPC/2015, arts. 502-508: COISA JULGADA - imutabilidade/indiscutibilidade da decisão (não mais sujeita a recurso). FORMAL (art. 485 - sentença sem mérito - pode repropor) x MATERIAL (art. 502 - sentença com mérito - art. 487 - imutável, indiscutível - CF, art. 5º, XXXVI). LIMITES: I) OBJETIVOS (art. 503 - só decidido - pedido/causa pedir, não questões prejudiciais, fundamentos); II) SUBJETIVOS (art. 506 - PARTES - não atinge terceiros, salvo relação jurídica deduzida). B correta. A, C, D, E incorretas.",
      banca: "FCC",
      ano: 2023,
      cargo: "Analista Judiciário - TJ"
    },
    {
      id: "processual-civil-sent-07",
      enunciado: "Sobre a ação rescisória (CPC/2015, arts. 966-975), assinale a alternativa INCORRETA:",
      alternativas: {
        A: "Ação rescisória: ação autônoma para desconstituir coisa julgada material viciada.",
        B: "Hipóteses (art. 966): verificar prevaricação/concussão/corrupção juiz, provas falsas, dolo vencedor, colusão partes, violação norma jurídica, fundamento sentença declarado inconstitucional (STF), prova nova.",
        C: "Competência: tribunal que proferiu decisão rescindenda (art. 968).",
        D: "Prazo: 2 ANOS do trânsito em julgado (art. 975 - decadencial).",
        E: "Ação rescisória pode ser proposta a qualquer tempo, sem prazo."
      },
      gabarito: "E",
      explicacao: "CPC/2015, arts. 966-975: AÇÃO RESCISÓRIA - ação AUTÔNOMA para DESCONSTITUIR coisa julgada material VICIADA. HIPÓTESES (art. 966 - I-VIII - numerus clausus): prevaricação/concussão/corrupção juiz, provas falsas, dolo vencedor, colusão partes, violação norma jurídica, fundamento sentença declarado inconstitucional STF, prova nova. COMPETÊNCIA (art. 968): TRIBUNAL que proferiu decisão (STJ, TJ, TRF, TST, TRT). PRAZO (art. 975): 2 ANOS do trânsito em julgado (DECADENCIAL - não se suspende/interrompe). E INCORRETA - ação rescisória tem prazo de 2 anos (art. 975). A, B, C, D corretas.",
      banca: "VUNESP",
      ano: 2022,
      cargo: "Escrevente - TJ"
    },
    {
      id: "processual-civil-sent-08",
      enunciado: "Em relação à remessa necessária/reexame necessário (CPC/2015, art. 496), é correto afirmar:",
      alternativas: {
        A: "Remessa necessária não existe no CPC/2015.",
        B: "Remessa necessária (art. 496): duplo grau de jurisdição OBRIGATÓRIO. Hipótese: sentença contra União, Estados, DF, Municípios, autarquias, fundações públicas. EXCEÇÕES (§3º): I) condenação/direito controvertido inferior 1.000 salários mínimos (I) ou 500 SM municípios até 100 mil habitantes (II); III) fundamentada súmula/precedente (STF, STJ, plenário); IV) fundada jurisprudência TST/TNU; V) acórdão tribunal.",
        C: "Remessa necessária se aplica a qualquer sentença contra particular.",
        D: "Remessa necessária não tem exceções.",
        E: "Limite para dispensa remessa necessária é sempre R$ 1.000,00."
      },
      gabarito: "B",
      explicacao: "CPC/2015, art. 496: REMESSA NECESSÁRIA (reexame necessário) - duplo grau de jurisdição OBRIGATÓRIO (sem recurso voluntário). HIPÓTESE: sentença contra UNIÃO, ESTADOS, DF, MUNICÍPIOS, autarquias, fundações públicas. EXCEÇÕES (§3º - dispensa remessa): I) condenação/direito controvertido inferior 1.000 SALÁRIOS MÍNIMOS (União/Estados/DF) ou 500 SM (Municípios até 100 mil habitantes); II) sentença fundamentada em súmula/precedente (STF, STJ, plenário); III) fundada jurisprudência TST/TNU; IV) acórdão tribunal. B correta. A, C, D, E incorretas.",
      banca: "FGV",
      ano: 2023,
      cargo: "Analista Judiciário - TJ"
    },
    {
      id: "processual-civil-sent-09",
      enunciado: "Quanto aos vícios da sentença, assinale a alternativa correta:",
      alternativas: {
        A: "Sentença não pode ter vícios.",
        B: "Vícios da sentença: I) OMISSÃO (art. 489 §1º, IV - não enfrenta todos argumentos - embargos declaração art. 1.022); II) CONTRADIÇÃO (relatório/fundamentação/dispositivo conflitantes - embargos declaração); III) OBSCURIDADE (falta clareza - embargos declaração); IV) ERROR IN JUDICANDO (erro julgamento mérito - apelação); V) ERROR IN PROCEDENDO (erro processual - apelação/preliminar).",
        C: "Vícios da sentença não podem ser corrigidos.",
        D: "Omissão não é vício da sentença.",
        E: "Error in judicando não é vício."
      },
      gabarito: "B",
      explicacao: "CPC/2015: VÍCIOS DA SENTENÇA. I) OMISSÃO (art. 489 §1º, IV - não enfrenta argumentos - embargos declaração art. 1.022); II) CONTRADIÇÃO (entre relatório/fundamentação/dispositivo - embargos declaração); III) OBSCURIDADE (falta clareza/compreensão - embargos declaração); IV) ERROR IN JUDICANDO (erro julgamento MÉRITO - injustiça decisão - apelação art. 1.009); V) ERROR IN PROCEDENDO (erro PROCESSUAL - vício procedimento - apelação preliminar ou rescisória). Correção: embargos declaração (I-III), apelação (IV-V), ação rescisória (vícios graves - art. 966). B correta. A, C, D, E incorretas.",
      banca: "CESPE",
      ano: 2023,
      cargo: "Analista Judiciário - TRT"
    },
    {
      id: "processual-civil-sent-10",
      enunciado: "Sobre a eficácia da sentença (CPC/2015, art. 502-506), é INCORRETO afirmar:",
      alternativas: {
        A: "Sentença tem eficácia dentro do processo (endoprocessual).",
        B: "Sentença transitada em julgado tem eficácia extraprocessual (fora do processo - não pode rediscutir).",
        C: "Coisa julgada material impede: I) propositura nova ação (mesma causa pedir/pedido/partes - art. 508 §único); II) rediscussão do decidido.",
        D: "Sentença nunca tem eficácia fora do processo.",
        E: "Relativização coisa julgada: excepcional (STF - RE 363.889 - violação norma constitucional, situações extremas)."
      },
      gabarito: "D",
      explicacao: "CPC/2015, arts. 502-508: EFICÁCIA DA SENTENÇA. ENDOPROCESSUAL: dentro do processo (vincula juiz - art. 505). EXTRAPROCESSUAL: após trânsito em julgado - coisa julgada MATERIAL (art. 502) - não pode rediscutir decisão mérito (art. 5º, XXXVI CF). Efeitos coisa julgada: I) impede REPROPOSITURA ação (tríplice identidade - partes, causa pedir, pedido - art. 337 §§2º-3º); II) impede REDISCUSSÃO do decidido (imutabilidade). RELATIVIZAÇÃO: excepcional (STF - RE 363.889 - situações extremas: violação norma constitucional/direitos fundamentais). D INCORRETA - sentença transitada TEM eficácia extraprocessual (coisa julgada). A, B, C, E corretas.",
      banca: "FCC",
      ano: 2022,
      cargo: "Analista Judiciário - TJ"
    }
  ]
};
