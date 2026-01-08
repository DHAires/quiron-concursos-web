// Questões de Direito Penal - TEMAS 4-6 (30 questões)
// Área Jurídica - Direito Penal

export const questionsPenal2 = {
  // TEMA 4: Culpabilidade (10 questões)
  "culpabilidade": [
    {
      id: "penal-culp-01",
      enunciado: "Sobre o conceito de culpabilidade, é correto afirmar:",
      alternativas: {
        A: "Culpabilidade não é elemento do crime.",
        B: "Culpabilidade é juízo de reprovabilidade sobre a conduta típica e ilícita. Elementos: imputabilidade, potencial consciência da ilicitude, exigibilidade de conduta diversa.",
        C: "Imputabilidade não é elemento da culpabilidade.",
        D: "Culpabilidade está no fato típico.",
        E: "Consciência da ilicitude não é necessária."
      },
      gabarito: "B",
      explicacao: "CULPABILIDADE (teoria tripartite): juízo de REPROVABILIDADE sobre conduta típica e ilícita. ELEMENTOS: 1) IMPUTABILIDADE (capacidade de entender caráter ilícito e determinar-se conforme esse entendimento); 2) POTENCIAL CONSCIÊNCIA DA ILICITUDE (possibilidade de conhecer que o fato é ilícito); 3) EXIGIBILIDADE DE CONDUTA DIVERSA (poder agir de modo diverso). Excludentes de culpabilidade afastam reprovabilidade. B correta. A, C, D, E incorretas.",
      banca: "CESPE",
      ano: 2023,
      cargo: "Delegado - PCDF"
    },
    {
      id: "penal-culp-02",
      enunciado: "Em relação à imputabilidade penal, assinale a alternativa INCORRETA:",
      alternativas: {
        A: "Imputável é quem tem capacidade de entender o caráter ilícito do fato e determinar-se conforme esse entendimento.",
        B: "Menores de 18 anos são penalmente imputáveis.",
        C: "Doença mental que retire completamente a capacidade de entendimento torna o agente inimputável.",
        D: "Embriaguez completa proveniente de caso fortuito ou força maior pode excluir imputabilidade.",
        E: "Critério biopsicológico é adotado para doença mental."
      },
      gabarito: "B",
      explicacao: "CP, art. 26-28: IMPUTABILIDADE: capacidade de entender + autodeterminação. INIMPUTÁVEIS (art. 27): MENORES DE 18 ANOS (critério biológico - presunção absoluta). Art. 26: doença mental/desenvolvimento mental incompleto/retardado que retire capacidade (critério biopsicológico) - inimputável - medida de segurança. Art. 28, §1º: embriaguez COMPLETA, FORTUITA ou FORÇA MAIOR pode excluir. B INCORRETA - menores de 18 são INIMPUTÁVEIS. A, C, D, E corretas.",
      banca: "FCC",
      ano: 2023,
      cargo: "Delegado - PCPE"
    },
    {
      id: "penal-culp-03",
      enunciado: "Quanto à embriaguez e responsabilidade penal, é correto afirmar:",
      alternativas: {
        A: "Embriaguez voluntária ou culposa sempre exclui imputabilidade.",
        B: "Embriaguez voluntária ou culposa: agente é imputável (teoria da actio libera in causa). Embriaguez completa, fortuita ou força maior: pode excluir imputabilidade.",
        C: "Embriaguez patológica não é tratada como doença mental.",
        D: "Embriaguez preordenada não é circunstância agravante.",
        E: "Emoção e paixão excluem imputabilidade."
      },
      gabarito: "B",
      explicacao: "CP, art. 28: EMBRIAGUEZ: I) VOLUNTÁRIA ou CULPOSA: NÃO exclui imputabilidade (actio libera in causa - §II). II) COMPLETA, CASO FORTUITO ou FORÇA MAIOR: pode excluir (§1º). III) PATOLÓGICA: equipara-se a doença mental (art. 26). IV) PREORDENADA: AGRAVANTE (art. 61, II, l). Art. 28, I: emoção/paixão NÃO excluem imputabilidade. B correta. A, C, D, E incorretas.",
      banca: "VUNESP",
      ano: 2023,
      cargo: "Delegado - PCSP"
    },
    {
      id: "penal-culp-04",
      enunciado: "Sobre a semi-imputabilidade (responsabilidade diminuída), assinale a alternativa correta:",
      alternativas: {
        A: "Semi-imputável é inimputável.",
        B: "Semi-imputável (art. 26, §ú): perturbação mental/desenvolvimento incompleto que REDUZ (não retira) capacidade - pena reduzida de 1/3 a 2/3 ou medida de segurança (sistema vicariante).",
        C: "Semi-imputável sempre recebe medida de segurança.",
        D: "Redução de pena não é possível.",
        E: "Critério é biológico."
      },
      gabarito: "B",
      explicacao: "CP, art. 26, §ú: SEMI-IMPUTABILIDADE (responsabilidade diminuída): perturbação mental/desenvolvimento incompleto/retardado que REDUZ (não retira completamente) capacidade de entendimento/autodeterminação. Consequências: pena REDUZIDA de 1/3 a 2/3 OU substituição por medida de segurança (sistema VICARIANTE - Lei 7.209/84). Critério: BIOPSICOLÓGICO. B correta. A incorreta - é imputável com responsabilidade diminuída. C, D, E incorretas.",
      banca: "FGV",
      ano: 2023,
      cargo: "Delegado - PCRJ"
    },
    {
      id: "penal-culp-05",
      enunciado: "Em relação ao erro de proibição, é INCORRETO afirmar:",
      alternativas: {
        A: "Erro de proibição é falsa percepção sobre a ilicitude da conduta.",
        B: "Erro de proibição inevitável (escusável) isenta de pena.",
        C: "Erro de proibição evitável (inescusável) reduz pena de 1/6 a 1/3.",
        D: "Erro de proibição é o mesmo que erro de tipo.",
        E: "Erro de proibição recai sobre ilicitude."
      },
      gabarito: "D",
      explicacao: "CP, art. 21: ERRO DE PROIBIÇÃO (erro sobre a ilicitude): falsa percepção sobre a ILICITUDE da conduta. Agente sabe o que faz (conhece fato), mas pensa erroneamente que é LÍCITO. INEVITÁVEL/ESCUSÁVEL: isenta de pena (exclui culpabilidade). EVITÁVEL/INESCUSÁVEL: pena reduzida de 1/6 a 1/3. Difere de ERRO DE TIPO (recai sobre FATO - art. 20). D INCORRETA - são diferentes (tipo = fato; proibição = ilicitude). A, B, C, E corretas.",
      banca: "CESPE",
      ano: 2022,
      cargo: "Delegado - PCDF"
    },
    {
      id: "penal-culp-06",
      enunciado: "Quanto às excludentes de culpabilidade (dirimentes), assinale a alternativa correta:",
      alternativas: {
        A: "Excludentes de culpabilidade não afastam o crime.",
        B: "Excludentes de culpabilidade: inimputabilidade, erro de proibição inevitável, inexigibilidade de conduta diversa (coação moral irresistível, obediência hierárquica).",
        C: "Coação física irresistível exclui culpabilidade.",
        D: "Legítima defesa exclui culpabilidade.",
        E: "Erro de tipo exclui culpabilidade."
      },
      gabarito: "B",
      explicacao: "EXCLUDENTES DE CULPABILIDADE (dirimentes): afastam REPROVABILIDADE. I) INIMPUTABILIDADE (art. 26-28): menoridade, doença mental, embriaguez fortuita completa. II) ERRO DE PROIBIÇÃO INEVITÁVEL (art. 21). III) INEXIGIBILIDADE DE CONDUTA DIVERSA: a) COAÇÃO MORAL IRRESISTÍVEL (art. 22, 1ª parte); b) OBEDIÊNCIA HIERÁRQUICA a ordem não manifestamente ilegal (art. 22, 2ª parte). Coação FÍSICA: exclui CONDUTA. Legítima defesa: exclui ILICITUDE. Erro de tipo: exclui DOLO. B correta. A, C, D, E incorretas.",
      banca: "FCC",
      ano: 2023,
      cargo: "Delegado - PCPE"
    },
    {
      id: "penal-culp-07",
      enunciado: "Sobre a coação irresistível, é correto afirmar:",
      alternativas: {
        A: "Coação física irresistível exclui culpabilidade.",
        B: "Coação moral irresistível exclui culpabilidade do coagido; coagidor responde pelo crime.",
        C: "Coação resistível exclui crime.",
        D: "Coação não precisa ser irresistível.",
        E: "Ambos respondem em caso de coação moral irresistível."
      },
      gabarito: "B",
      explicacao: "CP, art. 22, 1ª parte: COAÇÃO IRRESISTÍVEL: 'Se o fato é cometido sob coação irresistível, só é punível o autor da coação'. COAÇÃO FÍSICA (vis absoluta): exclui CONDUTA (não há crime). COAÇÃO MORAL IRRESISTÍVEL (vis compulsiva): exclui CULPABILIDADE do coagido (inexigibilidade de conduta diversa); COAGIDOR responde. RESISTÍVEL: não exclui (pode ser atenuante - art. 65, III, c). B correta. A incorreta - física exclui conduta. C, D, E incorretas.",
      banca: "VUNESP",
      ano: 2022,
      cargo: "Delegado - PCSP"
    },
    {
      id: "penal-culp-08",
      enunciado: "Em relação à obediência hierárquica, assinale a alternativa INCORRETA:",
      alternativas: {
        A: "Obediência hierárquica exige relação de direito público.",
        B: "Ordem não manifestamente ilegal: subordinado não responde (excludente de culpabilidade).",
        C: "Ordem manifestamente ilegal: ambos respondem.",
        D: "Obediência hierárquica se aplica a qualquer relação hierárquica privada.",
        E: "Superior hierárquico responde sempre se ordem for ilegal."
      },
      gabarito: "D",
      explicacao: "CP, art. 22, 2ª parte: OBEDIÊNCIA HIERÁRQUICA: 'quem, em estrita obediência a ordem, não manifestamente ilegal, de superior hierárquico, comete o fato, só é punível o autor da ordem'. Requisitos: 1) relação hierárquica de DIREITO PÚBLICO (não privada); 2) ordem NÃO MANIFESTAMENTE ILEGAL; 3) estrita obediência. Ordem MANIFESTAMENTE ILEGAL: ambos respondem. D INCORRETA - só relação pública. A, B, C, E corretas.",
      banca: "FGV",
      ano: 2023,
      cargo: "Delegado - PCRJ"
    },
    {
      id: "penal-culp-09",
      enunciado: "Quanto às causas supralegais de exclusão da culpabilidade, é correto afirmar:",
      alternativas: {
        A: "Não existem causas supralegais.",
        B: "Inexigibilidade de conduta diversa pode ser aplicada em situações não previstas expressamente em lei (cláusula geral de exclusão da culpabilidade).",
        C: "Causas supralegais são proibidas.",
        D: "Só as causas legais excluem culpabilidade.",
        E: "Analogia in malam partem é permitida."
      },
      gabarito: "B",
      explicacao: "INEXIGIBILIDADE DE CONDUTA DIVERSA: cláusula geral (supralegal). Além das hipóteses legais (coação moral irresistível, obediência hierárquica), admite-se aplicação em casos EXCEPCIONAIS não previstos, desde que demonstrada real impossibilidade de exigir conduta conforme o direito. Ex: mãe furta remédio para salvar filho (situação extrema). Doutrina e jurisprudência admitem (analogia in bonam partem). B correta. A, C, D incorretas. E incorreta - in malam partem proibida.",
      banca: "CESPE",
      ano: 2023,
      cargo: "Delegado - PCDF"
    },
    {
      id: "penal-culp-10",
      enunciado: "Sobre a distinção entre erro de tipo e erro de proibição, assinale a alternativa correta:",
      alternativas: {
        A: "Ambos recaem sobre o fato.",
        B: "Erro de tipo: recai sobre elemento do tipo (fato) - exclui dolo; inevitável exclui culpa. Erro de proibição: recai sobre ilicitude - inevitável isenta, evitável reduz pena.",
        C: "Erro de tipo exclui culpabilidade.",
        D: "Erro de proibição exclui dolo.",
        E: "Não há diferença prática."
      },
      gabarito: "B",
      explicacao: "ERRO DE TIPO (art. 20): recai sobre ELEMENTO DO TIPO (fato/elementar). Agente NÃO sabe o que faz. Inevitável: exclui DOLO e CULPA. Evitável: exclui dolo, responde por CULPA se prevista. ERRO DE PROIBIÇÃO (art. 21): recai sobre ILICITUDE. Agente sabe o que faz, mas pensa que é LÍCITO. Inevitável: ISENTA (exclui culpabilidade). Evitável: REDUZ pena 1/6 a 1/3. B correta. A, C, D, E incorretas.",
      banca: "FCC",
      ano: 2022,
      cargo: "Delegado - PCPE"
    }
  ],

  // TEMA 5: Concurso de Pessoas (10 questões)
  "concurso-de-pessoas": [
    {
      id: "penal-conc-01",
      enunciado: "Sobre o conceito de concurso de pessoas, é correto afirmar:",
      alternativas: {
        A: "Concurso de pessoas não existe no Direito Penal brasileiro.",
        B: "Concurso de pessoas (coautoria e participação): pluralidade de agentes concorrendo para o mesmo crime.",
        C: "Apenas uma pessoa pode praticar crime.",
        D: "Não há diferença entre autor e partícipe.",
        E: "Participação não é punível."
      },
      gabarito: "B",
      explicacao: "CP, art. 29: CONCURSO DE PESSOAS: pluralidade de agentes concorrendo para o MESMO crime. Requisitos: 1) PLURALIDADE de agentes; 2) RELEVÂNCIA CAUSAL (nexo causal); 3) LIAME SUBJETIVO (vínculo psicológico - acordo, ainda que tácito); 4) UNIDADE de infração. TEORIAS: monista (CP adota - todos respondem pelo mesmo crime), pluralista, dualista. MODALIDADES: coautoria (todos autores), participação (partícipe auxilia). B correta. A, C, D, E incorretas.",
      banca: "CESPE",
      ano: 2023,
      cargo: "Delegado - PCDF"
    },
    {
      id: "penal-conc-02",
      enunciado: "Em relação à autoria e à participação, assinale a alternativa INCORRETA:",
      alternativas: {
        A: "Autor: realiza o núcleo do tipo (verbo). Teoria do domínio do fato: quem tem controle final do fato.",
        B: "Partícipe: auxilia ou instiga, mas não realiza núcleo do tipo (participação moral ou material).",
        C: "Autor e partícipe recebem a mesma pena sempre.",
        D: "Participação de menor importância: pena reduzida de 1/6 a 1/3 (art. 29, §1º).",
        E: "Coautor realiza o núcleo do tipo juntamente com outros."
      },
      gabarito: "C",
      explicacao: "AUTORIA: quem realiza NÚCLEO DO TIPO (verbo). TEORIA DO DOMÍNIO DO FATO (Roxin): autor é quem tem CONTROLE FINAL sobre realização do tipo. COAUTORIA: divisão de tarefas, todos autores. PARTICIPAÇÃO: auxílio/instigação SEM realizar núcleo. MORAL (instigação, induzimento) ou MATERIAL (cumplicidade - auxílio). Art. 29, §1º: participação de MENOR IMPORTÂNCIA - pena reduzida 1/6 a 1/3. C INCORRETA - penas podem ser diferentes (participação menor importância). A, B, D, E corretas.",
      banca: "FCC",
      ano: 2023,
      cargo: "Delegado - PCPE"
    },
    {
      id: "penal-conc-03",
      enunciado: "Quanto à teoria adotada pelo Código Penal brasileiro, é correto afirmar:",
      alternativas: {
        A: "CP adota teoria pluralista.",
        B: "CP adota teoria monista (unitária): todos os que concorrem para o crime respondem pelo mesmo crime (art. 29, caput).",
        C: "CP adota teoria dualista.",
        D: "Cada participante responde por crime diferente.",
        E: "Não há teoria específica."
      },
      gabarito: "B",
      explicacao: "CP, art. 29, caput: 'Quem, de qualquer modo, concorre para o crime incide nas penas a este cominadas, na medida de sua culpabilidade'. TEORIA MONISTA/UNITÁRIA: todos os concorrentes respondem pelo MESMO CRIME (causa única). Exceções: casos de concurso com CIRCUNSTÂNCIAS PESSOAIS incomunicáveis, participação de menor importância. Teoria pluralista: cada um responde por crime diferente. Dualista: autores/partícipes respondem diferente. B correta. A, C, D, E incorretas.",
      banca: "VUNESP",
      ano: 2023,
      cargo: "Delegado - PCSP"
    },
    {
      id: "penal-conc-04",
      enunciado: "Sobre as circunstâncias no concurso de pessoas, assinale a alternativa correta:",
      alternativas: {
        A: "Todas as circunstâncias são comunicáveis.",
        B: "Circunstâncias objetivas (relacionadas ao fato) comunicam-se; subjetivas/pessoais (motivos, condições) NÃO se comunicam, salvo se elementares (art. 30).",
        C: "Circunstâncias pessoais sempre se comunicam.",
        D: "Motivos sempre se comunicam.",
        E: "Art. 30 não trata de comunicabilidade."
      },
      gabarito: "B",
      explicacao: "CP, art. 30: 'Não se comunicam as circunstâncias e as condições de caráter pessoal, salvo quando elementares do crime'. ELEMENTARES (elementos do tipo): COMUNICAM-SE se conhecidas. CIRCUNSTÂNCIAS: I) OBJETIVAS (modo de execução, tempo, lugar): COMUNICAM-SE. II) SUBJETIVAS/PESSOAIS (motivos, qualidades pessoais): NÃO se comunicam, SALVO se elementares. Ex: funcionário público + particular em peculato - qualidade é elementar (comunica se conhecido). B correta. A, C, D, E incorretas.",
      banca: "FGV",
      ano: 2023,
      cargo: "Delegado - PCRJ"
    },
    {
      id: "penal-conc-05",
      enunciado: "Em relação à autoria mediata, é INCORRETO afirmar:",
      alternativas: {
        A: "Autoria mediata: agente se serve de pessoa sem culpabilidade como instrumento.",
        B: "Ex: usa inimputável, coage irresistivelmente, provoca erro de tipo.",
        C: "Autor mediato não responde pelo crime.",
        D: "Pessoa instrumentalizada não responde (não há culpabilidade).",
        E: "Autor mediato tem domínio do fato através de outrem."
      },
      gabarito: "C",
      explicacao: "AUTORIA MEDIATA: autor realiza crime valendo-se de OUTRA PESSOA como INSTRUMENTO (sem culpabilidade). Hipóteses: usa inimputável, coage moralmente irresistível, provoca erro de tipo escusável, dá ordem hierárquica não manifestamente ilegal. AUTOR MEDIATO: responde como AUTOR (tem domínio do fato através de terceiro). INSTRUMENTO: NÃO responde (sem culpabilidade). C INCORRETA - autor mediato RESPONDE. A, B, D, E corretas.",
      banca: "CESPE",
      ano: 2022,
      cargo: "Delegado - PCDF"
    },
    {
      id: "penal-conc-06",
      enunciado: "Quanto à participação, assinale a alternativa correta:",
      alternativas: {
        A: "Participação é atípica e precisa de fato principal punível (teoria da acessoriedade limitada).",
        B: "Participação é crime autônomo.",
        C: "Partícipe responde mesmo sem crime principal.",
        D: "Instigação não é forma de participação.",
        E: "Cumplicidade é autoria."
      },
      gabarito: "A",
      explicacao: "PARTICIPAÇÃO: conduta ATÍPICA que concorre para crime alheio. TEORIA DA ACESSORIEDADE LIMITADA (adotada): participação depende de fato principal TÍPICO e ILÍCITO (não precisa ser culpável). Sem crime principal: não há participação. MODALIDADES: 1) MORAL: induzimento (faz nascer ideia), instigação (reforça ideia); 2) MATERIAL: cumplicidade (auxílio material). Art. 31: impunidade de desistência/arrependimento. A correta. B, C, D, E incorretas.",
      banca: "FCC",
      ano: 2023,
      cargo: "Delegado - PCPE"
    },
    {
      id: "penal-conc-07",
      enunciado: "Sobre a cooperação dolosamente distinta (desvio subjetivo de conduta), é correto afirmar:",
      alternativas: {
        A: "Não existe no Código Penal brasileiro.",
        B: "Art. 29, §2º: se um dos concorrentes quis participar de crime MENOS grave, responde por esse, salvo se era PREVISÍVEL o resultado mais grave.",
        C: "Todos respondem sempre pelo crime mais grave.",
        D: "Previsibilidade não é relevante.",
        E: "Agente sempre responde pelo resultado mais grave."
      },
      gabarito: "B",
      explicacao: "CP, art. 29, §2º: COOPERAÇÃO/PARTICIPAÇÃO DOLOSAMENTE DISTINTA (desvio subjetivo de conduta/aberratio criminis): 'Se algum dos concorrentes quis participar de crime MENOS grave, ser-lhe-á aplicada a pena deste; essa pena será aumentada até metade, na hipótese de ter sido PREVISÍVEL o resultado mais grave'. Ex: A e B vão furtar, B mata vigia. A: furto (se morte imprevisível) ou furto com aumento (se previsível). B: roubo seguido de morte. B correta. A, C, D, E incorretas.",
      banca: "VUNESP",
      ano: 2022,
      cargo: "Delegado - PCSP"
    },
    {
      id: "penal-conc-08",
      enunciado: "Em relação à autoria colateral, assinale a alternativa INCORRETA:",
      alternativas: {
        A: "Autoria colateral: dois ou mais agentes, sem vínculo subjetivo, atuam contra a mesma vítima.",
        B: "Não há concurso de pessoas (falta liame subjetivo).",
        C: "Se ambos causam resultado: ambos respondem.",
        D: "Se apenas um causa resultado identificável: só ele responde (tentativa para o outro).",
        E: "Sempre há concurso de pessoas na autoria colateral."
      },
      gabarito: "E",
      explicacao: "AUTORIA COLATERAL: dois ou mais agentes, SEM VÍNCULO (liame) SUBJETIVO, atuam simultaneamente contra mesma vítima. NÃO há CONCURSO DE PESSOAS (falta acordo). Soluções: 1) Se AMBOS causam resultado: ambos respondem (concurso formal impróprio ou dois crimes). 2) Se APENAS UM causa resultado IDENTIFICÁVEL: só ele responde (consumado), outro tentativa. 3) Se NÃO IDENTIFICÁVEL quem causou: ambos tentativa. E INCORRETA - NÃO há concurso (falta liame). A, B, C, D corretas.",
      banca: "FGV",
      ano: 2023,
      cargo: "Delegado - PCRJ"
    },
    {
      id: "penal-conc-09",
      enunciado: "Quanto à participação em cadeia (participação da participação), é correto afirmar:",
      alternativas: {
        A: "É impossível no Direito Penal.",
        B: "É possível: partícipe pode auxiliar outro partícipe (ambos respondem como partícipes do crime principal).",
        C: "Segundo partícipe não responde.",
        D: "Não há previsão legal.",
        E: "Só autor pode ter partícipe."
      },
      gabarito: "B",
      explicacao: "PARTICIPAÇÃO EM CADEIA (participação da participação): partícipe auxilia/instiga OUTRO PARTÍCIPE. Doutrina majoritária: POSSÍVEL. Ex: A instiga B a induzir C a cometer crime. A e B: partícipes do crime de C (desde que haja liame subjetivo e relevância causal). Fundamento: art. 29 ('quem, de qualquer modo, concorre'). B correta. A, C, D, E incorretas.",
      banca: "CESPE",
      ano: 2023,
      cargo: "Delegado - PCDF"
    },
    {
      id: "penal-conc-10",
      enunciado: "Sobre o concurso de pessoas em crimes omissivos, assinale a alternativa correta:",
      alternativas: {
        A: "Não é possível concurso em crimes omissivos.",
        B: "Concurso em crime omissivo próprio: possível se vários têm dever de agir e se omitem (coautoria omissiva).",
        C: "Crime omissivo impróprio não admite concurso.",
        D: "Dever de agir não é relevante.",
        E: "Só crimes comissivos admitem concurso."
      },
      gabarito: "B",
      explicacao: "CONCURSO EM CRIMES OMISSIVOS: I) OMISSIVOS PRÓPRIOS: possível se VÁRIOS têm DEVER de agir e se OMITEM conjuntamente (coautoria omissiva). Ex: vários médicos omitem socorro. II) OMISSIVOS IMPRÓPRIOS (comissivos por omissão): possível se vários são GARANTIDORES. Ex: mãe e padrasto omitem alimentos, criança morre (coautores de homicídio omissivo impróprio). PARTICIPAÇÃO: possível (instiga/auxilia omissão). B correta. A, C, D, E incorretas.",
      banca: "FCC",
      ano: 2022,
      cargo: "Delegado - PCPE"
    }
  ],

  // TEMA 6: Tentativa e Consumação (10 questões)
  "tentativa-e-consumacao": [
    {
      id: "penal-tent-01",
      enunciado: "Sobre o conceito de tentativa (conatus), é correto afirmar:",
      alternativas: {
        A: "Tentativa não é punível no Brasil.",
        B: "Tentativa (art. 14, II): iniciados os atos de execução, não se consuma por circunstâncias alheias à vontade do agente. Pena reduzida de 1/3 a 2/3.",
        C: "Tentativa tem a mesma pena do crime consumado.",
        D: "Não há redução de pena na tentativa.",
        E: "Tentativa não precisa iniciar execução."
      },
      gabarito: "B",
      explicacao: "CP, art. 14, II: TENTATIVA (conatus): 'Diz-se o crime tentado quando, iniciada a execução, não se consuma por circunstâncias alheias à vontade do agente'. REQUISITOS: 1) início de EXECUÇÃO (não meros atos preparatórios); 2) NÃO CONSUMAÇÃO; 3) circunstâncias ALHEIAS à vontade do agente. Art. 14, §ú: pena do crime tentado REDUZIDA de 1/3 a 2/3. B correta. A, C, D, E incorretas.",
      banca: "CESPE",
      ano: 2023,
      cargo: "Delegado - PCDF"
    },
    {
      id: "penal-tent-02",
      enunciado: "Em relação aos atos preparatórios e atos de execução, assinale a alternativa INCORRETA:",
      alternativas: {
        A: "Atos preparatórios: em regra, impuníveis (salvo se configurarem crime autônomo).",
        B: "Atos de execução: puníveis a título de tentativa.",
        C: "Teoria objetiva-formal: execução inicia com atos que realizam núcleo do tipo.",
        D: "Teoria objetivo-individual (Welzel - adotada): considera plano do agente e início de realização do tipo.",
        E: "Atos preparatórios sempre são puníveis."
      },
      gabarito: "E",
      explicacao: "ATOS PREPARATÓRIOS: antecedem execução, em regra IMPUNÍVEIS (salvo crime autônomo - ex: petrechos para falsificação). ATOS DE EXECUÇÃO: iniciam realização do tipo, PUNÍVEIS (tentativa). TEORIAS: 1) OBJETIVA-FORMAL: execução = núcleo do tipo. 2) OBJETIVO-INDIVIDUAL (Welzel - majoritária): considera PLANO DO AGENTE + atos que iniciam tipo. Ex: entrar na casa para furtar é execução (não mera aproximação). E INCORRETA - atos preparatórios IMPUNÍVEIS em regra. A, B, C, D corretas.",
      banca: "FCC",
      ano: 2023,
      cargo: "Delegado - PCPE"
    },
    {
      id: "penal-tent-03",
      enunciado: "Quanto aos crimes que não admitem tentativa, é correto afirmar:",
      alternativas: {
        A: "Todos os crimes admitem tentativa.",
        B: "NÃO admitem tentativa: crimes culposos, preterdolosos, habituais, omissivos próprios, mera conduta, contravenções (art. 4º LCP).",
        C: "Crimes dolosos não admitem tentativa.",
        D: "Contravenções admitem tentativa.",
        E: "Crimes culposos admitem tentativa."
      },
      gabarito: "B",
      explicacao: "NÃO ADMITEM TENTATIVA: 1) CULPOSOS (ausência de dolo, exceto culpa imprópria); 2) PRETERDOLOSOS (resultado agravador culposo); 3) HABITUAIS (exigem reiteração); 4) OMISSIVOS PRÓPRIOS (consumação instantânea com omissão); 5) MERA CONDUTA (sem resultado naturalístico divisível); 6) CONTRAVENÇÕES (art. 4º LCP); 7) atentado, crimes unissubsistentes. Admitem: crimes DOLOSOS, MATERIAIS, PLURISSUBSISTENTES. B correta. A, C, D, E incorretas.",
      banca: "VUNESP",
      ano: 2023,
      cargo: "Delegado - PCSP"
    },
    {
      id: "penal-tent-04",
      enunciado: "Sobre a tentativa perfeita (acabada) e imperfeita (inacabada), assinale a alternativa correta:",
      alternativas: {
        A: "Não há distinção entre tentativa perfeita e imperfeita.",
        B: "Tentativa perfeita/acabada (crime falho): agente esgota todos os atos executórios, mas resultado não ocorre. Imperfeita/inacabada: interrompida antes de esgotar atos.",
        C: "Tentativa perfeita é consumação.",
        D: "Pena é diferente para perfeita e imperfeita.",
        E: "Crime falho não existe."
      },
      gabarito: "B",
      explicacao: "TENTATIVA PERFEITA/ACABADA/CRIME FALHO: agente ESGOTA todos os atos executórios, mas resultado NÃO ocorre por circunstâncias alheias. Ex: atira todos os tiros, mas vítima sobrevive. TENTATIVA IMPERFEITA/INACABADA: execução é INTERROMPIDA antes de esgotar atos. Ex: atira uma vez e é desarmado. CP: mesma redução de pena (1/3 a 2/3) para ambas. Doutrina: juiz pode considerar na dosimetria. B correta. A, C, D, E incorretas.",
      banca: "FGV",
      ano: 2023,
      cargo: "Delegado - PCRJ"
    },
    {
      id: "penal-tent-05",
      enunciado: "Em relação à desistência voluntária e ao arrependimento eficaz, é INCORRETO afirmar:",
      alternativas: {
        A: "Desistência voluntária (art. 15, 1ª parte): agente desiste voluntariamente de prosseguir na execução.",
        B: "Arrependimento eficaz (art. 15, 2ª parte): agente esgota execução mas impede resultado por ato voluntário.",
        C: "Em ambos os casos, agente responde pelos atos até então praticados.",
        D: "Agente não responde pela tentativa do crime visado.",
        E: "Desistência e arrependimento são causas de aumento de pena."
      },
      gabarito: "E",
      explicacao: "CP, art. 15: DESISTÊNCIA VOLUNTÁRIA (1ª parte): agente DESISTE voluntariamente de prosseguir na execução. ARREPENDIMENTO EFICAZ (2ª parte): agente esgota execução mas IMPEDE resultado por ato voluntário. Consequência: agente NÃO responde pela TENTATIVA do crime visado, mas responde por ATOS até então praticados (ex: lesões causadas). Natureza: causas de EXTINÇÃO da punibilidade da tentativa (ponte de ouro). E INCORRETA - não são causas de aumento, mas de exclusão da tentativa. A, B, C, D corretas.",
      banca: "CESPE",
      ano: 2022,
      cargo: "Delegado - PCDF"
    },
    {
      id: "penal-tent-06",
      enunciado: "Quanto ao arrependimento posterior, assinale a alternativa correta:",
      alternativas: {
        A: "Arrependimento posterior é o mesmo que arrependimento eficaz.",
        B: "Arrependimento posterior (art. 16): crime consumado SEM violência/grave ameaça, se agente repara dano ou restitui coisa até recebimento denúncia, pena reduzida de 1/3 a 2/3.",
        C: "Aplica-se a qualquer crime.",
        D: "Não há prazo para arrependimento posterior.",
        E: "Redução é de metade."
      },
      gabarito: "B",
      explicacao: "CP, art. 16: ARREPENDIMENTO POSTERIOR: 'Nos crimes cometidos SEM violência ou grave ameaça à pessoa, reparado o dano ou restituída a coisa, até o recebimento da denúncia ou da queixa, por ato voluntário do agente, a pena será reduzida de um a dois terços'. REQUISITOS: 1) crime SEM violência/grave ameaça; 2) reparação/restituição ATÉ recebimento denúncia; 3) ato VOLUNTÁRIO. Causa de REDUÇÃO de pena (não excludente). B correta. A, C, D, E incorretas.",
      banca: "FCC",
      ano: 2023,
      cargo: "Delegado - PCPE"
    },
    {
      id: "penal-tent-07",
      enunciado: "Sobre o crime impossível (tentativa inidônea), é correto afirmar:",
      alternativas: {
        A: "Crime impossível é punível.",
        B: "Crime impossível (art. 17): não se pune tentativa quando, pela ineficácia ABSOLUTA do meio ou ABSOLUTA impropriedade do objeto, é impossível consumar-se o crime.",
        C: "Ineficácia relativa do meio gera crime impossível.",
        D: "Impropriedade relativa do objeto gera crime impossível.",
        E: "Crime impossível não está previsto no CP."
      },
      gabarito: "B",
      explicacao: "CP, art. 17: CRIME IMPOSSÍVEL (tentativa inidônea/quase-crime): 'Não se pune a tentativa quando, por ineficácia ABSOLUTA do meio ou por ABSOLUTA impropriedade do objeto, é impossível consumar-se o crime'. MEIO ABSOLUTAMENTE INEFICAZ: jamais produziria resultado (arma de brinquedo, pó de arroz como veneno). OBJETO ABSOLUTAMENTE IMPRÓPRIO: inexiste ou não pode ser atingido (cadáver em homicídio, mulher não grávida em aborto). Ineficácia/impropriedade RELATIVA: tentativa punível. B correta. A, C, D, E incorretas.",
      banca: "VUNESP",
      ano: 2022,
      cargo: "Delegado - PCSP"
    },
    {
      id: "penal-tent-08",
      enunciado: "Em relação à consumação do crime, assinale a alternativa INCORRETA:",
      alternativas: {
        A: "Crime consumado: quando nele se reúnem todos os elementos de sua definição legal (art. 14, I).",
        B: "Crime material: consuma com resultado naturalístico.",
        C: "Crime formal: consuma com conduta, independente do resultado.",
        D: "Crime permanente consuma instantaneamente.",
        E: "Momento da consumação é relevante para prescrição e tentativa."
      },
      gabarito: "D",
      explicacao: "CP, art. 14, I: CONSUMAÇÃO: 'quando nele se reúnem todos os elementos de sua definição legal'. CRIME MATERIAL: resultado naturalístico (homicídio - morte). FORMAL: conduta (extorsão mediante sequestro - sequestro). MERA CONDUTA: só conduta (violação domicílio). CRIME PERMANENTE: consumação se PROLONGA no tempo (enquanto durar situação - sequestro, cárcere privado). Consumação instantânea: não se prolonga. D INCORRETA - crime permanente NÃO consuma instantaneamente, prolonga-se. A, B, C, E corretas.",
      banca: "FGV",
      ano: 2023,
      cargo: "Delegado - PCRJ"
    },
    {
      id: "penal-tent-09",
      enunciado: "Quanto à tentativa branca e tentativa cruenta, é correto afirmar:",
      alternativas: {
        A: "Tentativa branca e cruenta têm penas diferentes no CP.",
        B: "Tentativa branca (incruenta): vítima não é atingida. Tentativa cruenta (vermelha): vítima é atingida. CP não distingue expressamente (mesma redução), mas pode influenciar dosimetria.",
        C: "Tentativa cruenta não existe.",
        D: "Tentativa branca é consumação.",
        E: "Termos não são usados na doutrina."
      },
      gabarito: "B",
      explicacao: "TENTATIVA BRANCA/INCRUENTA: objeto material NÃO é atingido. Ex: dispara contra vítima mas erra todos os tiros. TENTATIVA CRUENTA/VERMELHA: objeto material é ATINGIDO, mas crime não se consuma. Ex: fere vítima mas não mata. CP: mesma redução (1/3 a 2/3) para ambas. Doutrina: distinção pode influenciar na DOSIMETRIA (maior proximidade da consumação na cruenta). B correta. A, C, D, E incorretas.",
      banca: "CESPE",
      ano: 2023,
      cargo: "Delegado - PCDF"
    },
    {
      id: "penal-tent-10",
      enunciado: "Sobre o iter criminis (caminho do crime), assinale a alternativa correta:",
      alternativas: {
        A: "Iter criminis não tem relevância jurídica.",
        B: "Iter criminis: cogitação (impunível) → preparação (impunível, salvo crime autônomo) → execução (tentativa punível) → consumação (crime perfeito) → exaurimento (pode ser qualificadora/agravante).",
        C: "Cogitação é punível.",
        D: "Preparação é sempre punível.",
        E: "Exaurimento não tem relevância."
      },
      gabarito: "B",
      explicacao: "ITER CRIMINIS (caminho do crime): 1) COGITAÇÃO: ideia do crime (IMPUNÍVEL - cogitationis poenam nemo patitur). 2) PREPARAÇÃO: atos preparatórios (IMPUNÍVEIS, salvo crime autônomo - art. 288, 291). 3) EXECUÇÃO: inicia realização do tipo (TENTATIVA - art. 14, II). 4) CONSUMAÇÃO: reunidos todos elementos (art. 14, I). 5) EXAURIMENTO: atos posteriores (pode ser qualificadora/agravante). B correta. A, C, D, E incorretas.",
      banca: "FCC",
      ano: 2022,
      cargo: "Delegado - PCPE"
    }
  ]
};
