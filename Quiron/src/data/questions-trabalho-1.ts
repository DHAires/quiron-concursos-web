// Questões de Direito do Trabalho - TEMAS 1-3 (30 questões)
// Área Jurídica - Direito do Trabalho

export const questionsTrabalho1 = {
  // TEMA 1: Relação de Emprego (10 questões)
  "relacao-de-emprego": [
    {
      id: "trabalho-relacao-01",
      enunciado: "Sobre os requisitos caracterizadores da relação de emprego, é correto afirmar:",
      alternativas: {
        A: "Relação de emprego exige apenas subordinação.",
        B: "CLT, art. 3º: Empregado é pessoa física que presta serviços de natureza não eventual a empregador, sob dependência e mediante salário. Requisitos: pessoa física, pessoalidade, não eventualidade, subordinação jurídica, onerosidade (salário).",
        C: "Pessoa jurídica pode ser empregado.",
        D: "Subordinação não é requisito.",
        E: "Trabalho gratuito pode ser relação de emprego."
      },
      gabarito: "B",
      explicacao: "CLT, art. 3º: EMPREGADO: 'toda pessoa física que prestar serviços de natureza não eventual a empregador, sob a dependência deste e mediante salário'. REQUISITOS (PNPSO): 1) PESSOA FÍSICA (não PJ); 2) PESSOALIDADE (intuitu personae); 3) NÃO EVENTUALIDADE (habitualidade); 4) SUBORDINAÇÃO jurídica (poder diretivo do empregador); 5) ONEROSIDADE (salário - não gratuito). B correta. A, C, D, E incorretas.",
      banca: "CESPE",
      ano: 2023,
      cargo: "Auditor Fiscal do Trabalho"
    },
    {
      id: "trabalho-relacao-02",
      enunciado: "Em relação ao conceito de empregador (CLT, art. 2º), assinale a alternativa INCORRETA:",
      alternativas: {
        A: "Empregador é a empresa individual ou coletiva que assume os riscos da atividade econômica, admite, assalaria e dirige a prestação pessoal de serviço.",
        B: "Equiparam-se ao empregador os profissionais liberais, instituições de beneficência, associações recreativas.",
        C: "Empregador não assume riscos da atividade - princípio da alteridade.",
        D: "Grupo econômico: responsabilidade solidária.",
        E: "Pode ser pessoa física ou jurídica."
      },
      gabarito: "C",
      explicacao: "CLT, art. 2º: EMPREGADOR: 'empresa, individual ou coletiva, que, assumindo os RISCOS da atividade econômica, admite, assalaria e dirige a prestação pessoal de serviço'. §1º: EQUIPARAM-SE: profissionais liberais, instituições beneficência, associações recreativas ou outras que admitirem trabalhadores como empregados. §2º: GRUPO ECONÔMICO: responsabilidade solidária. ALTERIDADE: empregador assume RISCOS (não o empregado). C INCORRETA - empregador SIM assume riscos. A, B, D, E corretas.",
      banca: "FCC",
      ano: 2023,
      cargo: "Auditor Fiscal do Trabalho"
    },
    {
      id: "trabalho-relacao-03",
      enunciado: "Quanto à subordinação jurídica como requisito da relação de emprego, é correto afirmar:",
      alternativas: {
        A: "Subordinação é econômica, não jurídica.",
        B: "Subordinação jurídica: empregado submete-se ao poder diretivo do empregador (horário, forma de execução, fiscalização). Não se confunde com subordinação econômica. Pode ser presencial, à distância (teletrabalho) ou por objetivos.",
        C: "Autônomo tem subordinação jurídica.",
        D: "Subordinação não é elemento essencial.",
        E: "Teletrabalho não tem subordinação."
      },
      gabarito: "B",
      explicacao: "SUBORDINAÇÃO JURÍDICA: empregado se submete ao PODER DIRETIVO do empregador (direção, controle, fiscalização). Art. 6º CLT: não se distingue trabalho realizado no estabelecimento, domicílio ou à distância (teletrabalho). TIPOS: presencial, à distância, por objetivos. DIFERE: subordinação ECONÔMICA (dependência financeira - não é requisito); AUTÔNOMO não tem subordinação jurídica. B correta. A, C, D, E incorretas.",
      banca: "VUNESP",
      ano: 2023,
      cargo: "Auditor Fiscal do Trabalho"
    },
    {
      id: "trabalho-relacao-04",
      enunciado: "Sobre o trabalho autônomo e suas diferenças em relação ao empregado, assinale a alternativa correta:",
      alternativas: {
        A: "Autônomo tem subordinação jurídica.",
        B: "Autônomo: trabalha por conta própria, sem subordinação jurídica, assume riscos, possui autonomia na execução. Empregado: subordinado, não assume riscos (alteridade), pessoalidade. Lei 13.467/17 (Reforma): autônomo exclusivo não caracteriza vínculo.",
        C: "Exclusividade caracteriza sempre vínculo de emprego.",
        D: "Autônomo não pode ter pessoalidade.",
        E: "Autônomo tem CTPS assinada."
      },
      gabarito: "B",
      explicacao: "AUTÔNOMO: pessoa física que presta serviços por CONTA PRÓPRIA, sem SUBORDINAÇÃO jurídica, com AUTONOMIA na forma de execução, assume RISCOS da atividade. EMPREGADO: subordinação, não assume riscos (ALTERIDADE), pessoalidade. Lei 13.467/17 (Reforma), art. 442-B: contratação de autônomo com ou sem EXCLUSIVIDADE NÃO caracteriza vínculo (se ausentes requisitos art. 3º). CTPS: só empregado. B correta. A, C, D, E incorretas.",
      banca: "FGV",
      ano: 2023,
      cargo: "Auditor Fiscal do Trabalho"
    },
    {
      id: "trabalho-relacao-05",
      enunciado: "Em relação ao trabalho eventual, é INCORRETO afirmar:",
      alternativas: {
        A: "Eventual: trabalho esporádico, sem continuidade, ocasional.",
        B: "Eventual não preenche requisito da não eventualidade.",
        C: "Eventual tem todos os direitos trabalhistas da CLT.",
        D: "Teoria dos fins da empresa: trabalho eventual não se relaciona com atividade-fim do empregador.",
        E: "Diarista (< 3x/semana): considerada eventual (não empregada doméstica)."
      },
      gabarito: "C",
      explicacao: "TRABALHO EVENTUAL: serviço ESPORÁDICO, sem CONTINUIDADE, ocasional. NÃO preenche requisito da NÃO EVENTUALIDADE (art. 3º CLT). TEORIAS: 1) Fins da empresa: eventual não se relaciona com atividade-fim. 2) Descontinuidade: sem continuidade/permanência. DIARISTA doméstica < 3x/semana: EVENTUAL (TST - não empregada). EVENTUAL: NÃO tem direitos CLT (não é empregado). C INCORRETA - eventual NÃO tem direitos CLT. A, B, D, E corretas.",
      banca: "CESPE",
      ano: 2022,
      cargo: "Auditor Fiscal do Trabalho"
    },
    {
      id: "trabalho-relacao-06",
      enunciado: "Quanto ao grupo econômico e à responsabilidade solidária, é correto afirmar:",
      alternativas: {
        A: "Grupo econômico não gera responsabilidade solidária.",
        B: "CLT, art. 2º, §2º: empresas sob direção, controle ou administração de outra (grupo econômico) respondem SOLIDARIAMENTE pelas obrigações trabalhistas. Lei 13.467/17: caracterização exige demonstração de interesse integrado, efetiva comunhão de interesses, atuação conjunta.",
        C: "Basta uma empresa ser sócia da outra para caracterizar grupo econômico.",
        D: "Responsabilidade é subsidiária, não solidária.",
        E: "Reforma Trabalhista aboliu grupo econômico."
      },
      gabarito: "B",
      explicacao: "CLT, art. 2º, §2º (redação Lei 13.467/17 - Reforma): GRUPO ECONÔMICO: empresas sob direção, controle ou administração de outra, ou quando, mesmo guardando autonomia, integram grupo econômico. Reforma: caracterização exige demonstração de INTERESSE INTEGRADO, efetiva COMUNHÃO de interesses, ATUAÇÃO CONJUNTA. RESPONSABILIDADE: SOLIDÁRIA (não subsidiária - qualquer empresa pode ser acionada). B correta. A, C, D, E incorretas.",
      banca: "FCC",
      ano: 2023,
      cargo: "Auditor Fiscal do Trabalho"
    },
    {
      id: "trabalho-relacao-07",
      enunciado: "Sobre o trabalho temporário (Lei 6.019/74), assinale a alternativa INCORRETA:",
      alternativas: {
        A: "Trabalho temporário: prestado por pessoa física a empresa tomadora para atender necessidade de substituição transitória de pessoal ou demanda complementar de serviços.",
        B: "Prazo máximo: 180 dias, prorrogável por mais 90 dias.",
        C: "Vínculo de emprego é com a empresa de trabalho temporário, não com a tomadora.",
        D: "Trabalho temporário é o mesmo que terceirização.",
        E: "Empresa de trabalho temporário deve ser registrada no Ministério do Trabalho."
      },
      gabarito: "D",
      explicacao: "Lei 6.019/74 (alterada Lei 13.429/17): TRABALHO TEMPORÁRIO: pessoa física contratada por empresa de trabalho temporário para prestar serviços a empresa TOMADORA para atender: 1) necessidade de SUBSTITUIÇÃO transitória de pessoal permanente; 2) demanda COMPLEMENTAR de serviços. PRAZO: 180 dias, prorrogável por + 90 dias. VÍNCULO: com empresa de trabalho TEMPORÁRIO (não tomadora). Empresa temporário: registro MTb. DIFERE de TERCEIRIZAÇÃO. D INCORRETA - são institutos diferentes. A, B, C, E corretas.",
      banca: "VUNESP",
      ano: 2022,
      cargo: "Auditor Fiscal do Trabalho"
    },
    {
      id: "trabalho-relacao-08",
      enunciado: "Em relação à terceirização (Lei 6.019/74 e Súmula 331 TST), é correto afirmar:",
      alternativas: {
        A: "Terceirização é proibida no Brasil.",
        B: "Lei 13.429/17: terceirização lícita em qualquer atividade (meio ou fim). Empresa prestadora fornece trabalhadores para tomadora. Súmula 331 TST (anterior à lei): ilícita em atividade-fim. Responsabilidade subsidiária da tomadora por descumprimentos.",
        C: "Terceirização só é lícita em atividade-meio.",
        D: "Tomadora tem responsabilidade solidária.",
        E: "Vínculo de emprego é com a tomadora."
      },
      gabarito: "B",
      explicacao: "TERCEIRIZAÇÃO: Lei 6.019/74 (redação Lei 13.429/17 e 13.467/17): LÍCITA em QUALQUER atividade (meio ou FIM). Empresa PRESTADORA de serviços fornece trabalhadores para TOMADORA. VÍNCULO: com prestadora (não tomadora). RESPONSABILIDADE: SUBSIDIÁRIA da tomadora por descumprimentos (não solidária). Súmula 331 TST (ANTERIOR à lei): ilícita em atividade-fim, mas foi superada pela lei. B correta. A, C, D, E incorretas.",
      banca: "FGV",
      ano: 2023,
      cargo: "Auditor Fiscal do Trabalho"
    },
    {
      id: "trabalho-relacao-09",
      enunciado: "Quanto à pejotização e fraude à relação de emprego, assinale a alternativa correta:",
      alternativas: {
        A: "Pejotização é sempre lícita.",
        B: "Pejotização: fraude quando presentes requisitos art. 3º CLT (pessoa física presta serviços subordinados mediante PJ para fugir encargos). Princípio da primazia da realidade: contrato realidade prevalece sobre forma. Justiça do Trabalho reconhece vínculo se fraude.",
        C: "Forma prevalece sobre realidade no Direito do Trabalho.",
        D: "Pessoa jurídica pode ser empregado.",
        E: "Não há fraude se há contrato PJ."
      },
      gabarito: "B",
      explicacao: "PEJOTIZAÇÃO: trabalhador pessoa física presta serviços com todos os requisitos da relação de emprego (art. 3º CLT), mas mediante PESSOA JURÍDICA para fugir de encargos trabalhistas. FRAUDE: CLT, art. 9º - nulos atos para desvirtuar, impedir ou fraudar direitos. PRINCÍPIO DA PRIMAZIA DA REALIDADE: realidade dos FATOS prevalece sobre FORMA documental. Se presentes requisitos art. 3º: reconhece VÍNCULO DE EMPREGO (pessoa física é o empregado). B correta. A, C, D, E incorretas.",
      banca: "CESPE",
      ano: 2023,
      cargo: "Auditor Fiscal do Trabalho"
    },
    {
      id: "trabalho-relacao-10",
      enunciado: "Sobre o trabalho doméstico (LC 150/2015), é INCORRETO afirmar:",
      alternativas: {
        A: "Doméstico: presta serviços de natureza contínua, subordinada, pessoal e remunerada à pessoa/família no âmbito residencial, por mais de 2 dias por semana.",
        B: "LC 150/2015 ampliou direitos: FGTS, seguro-desemprego, jornada (44h), hora extra, adicional noturno.",
        C: "Diarista (< 3x/semana) é empregada doméstica.",
        D: "Empregador doméstico não é empresa.",
        E: "Doméstico tem direito a férias + 1/3."
      },
      gabarito: "C",
      explicacao: "LC 150/2015: EMPREGADO DOMÉSTICO: pessoa que presta serviços de forma CONTÍNUA, SUBORDINADA, PESSOAL e REMUNERADA à pessoa ou à família, no âmbito residencial destas, por MAIS DE 2 DIAS POR SEMANA. DIARISTA < 3x/semana: NÃO é empregada doméstica (trabalho eventual). Direitos: FGTS, seguro-desemprego, 13º, férias + 1/3, jornada 8h/44h semanais, hora extra, adicional noturno, etc. Empregador: pessoa/família (não empresa). C INCORRETA - diarista < 3x NÃO é doméstica. A, B, D, E corretas.",
      banca: "FCC",
      ano: 2022,
      cargo: "Auditor Fiscal do Trabalho"
    }
  ],

  // TEMA 2: Contrato de Trabalho (10 questões)
  "contrato-de-trabalho": [
    {
      id: "trabalho-contrato-01",
      enunciado: "Sobre o contrato individual de trabalho, é correto afirmar:",
      alternativas: {
        A: "Contrato de trabalho deve sempre ser escrito.",
        B: "CLT, art. 442: contrato individual de trabalho é acordo tácito ou expresso, correspondente à relação de emprego. Pode ser verbal ou escrito, por prazo determinado ou indeterminado. Presunção: prazo indeterminado (regra).",
        C: "Contrato de trabalho só pode ser por prazo determinado.",
        D: "Acordo tácito não caracteriza contrato de trabalho.",
        E: "Presunção é de prazo determinado."
      },
      gabarito: "B",
      explicacao: "CLT, art. 442: CONTRATO INDIVIDUAL DE TRABALHO: acordo TÁCITO ou EXPRESSO correspondente à relação de emprego. FORMA: VERBAL ou ESCRITO (consensual). PRAZO: DETERMINADO ou INDETERMINADO (regra - presunção). Art. 443: indeterminado regra, determinado exceção (condições art. 443, §1º). Princípio da continuidade da relação de emprego. B correta. A, C, D, E incorretas.",
      banca: "CESPE",
      ano: 2023,
      cargo: "Auditor Fiscal do Trabalho"
    },
    {
      id: "trabalho-contrato-02",
      enunciado: "Em relação ao contrato por prazo determinado (CLT, art. 443), assinale a alternativa INCORRETA:",
      alternativas: {
        A: "Prazo determinado: exceção, depende de condições específicas (art. 443, §1º).",
        B: "Hipóteses: serviço cuja natureza ou transitoriedade justifique, atividades empresariais transitórias, contrato de experiência.",
        C: "Prazo máximo: 2 anos (regra), podendo ser prorrogado uma vez.",
        D: "Contrato de experiência pode ter prazo de 120 dias.",
        E: "Prorrogação além de uma vez transforma em prazo indeterminado."
      },
      gabarito: "D",
      explicacao: "CLT, art. 443, §1º: CONTRATO PRAZO DETERMINADO (exceção): a) serviço cuja natureza ou transitoriedade justifique; b) atividades empresariais transitórias; c) contrato de EXPERIÊNCIA. §2º: prazo MÁXIMO 2 ANOS (não pode exceder). §3º: prorrogação permitida 1 VEZ, dentro do limite 2 anos. Se prorrogar MAIS DE 1 VEZ: vira INDETERMINADO. EXPERIÊNCIA: máximo 90 DIAS (não 120), podendo ser prorrogado 1 vez (ex: 45 + 45). D INCORRETA - experiência máx. 90 dias. A, B, C, E corretas.",
      banca: "FCC",
      ano: 2023,
      cargo: "Auditor Fiscal do Trabalho"
    },
    {
      id: "trabalho-contrato-03",
      enunciado: "Quanto ao contrato de experiência, é correto afirmar:",
      alternativas: {
        A: "Contrato de experiência não tem prazo máximo.",
        B: "Contrato de experiência: espécie de contrato por prazo determinado para avaliação mútua. Prazo máximo: 90 dias, podendo ser prorrogado 1 vez (ex: 45 + 45 dias). Se ultrapassar 90 dias ou prorrogar mais de 1 vez: vira indeterminado.",
        C: "Experiência pode durar 120 dias.",
        D: "Não pode ser prorrogado.",
        E: "Não é contrato por prazo determinado."
      },
      gabarito: "B",
      explicacao: "CONTRATO DE EXPERIÊNCIA: ESPÉCIE de contrato por PRAZO DETERMINADO (art. 443, §1º, c). FINALIDADE: avaliação mútua (empregador avalia empregado, empregado avalia empresa). PRAZO MÁXIMO: 90 DIAS. PRORROGAÇÃO: permitida 1 VEZ, dentro do limite 90 dias (ex: 30 + 60, ou 45 + 45). Se ultrapassar 90 dias total OU prorrogar MAIS DE 1 VEZ: vira INDETERMINADO (art. 451). B correta. A, C, D, E incorretas.",
      banca: "VUNESP",
      ano: 2023,
      cargo: "Auditor Fiscal do Trabalho"
    },
    {
      id: "trabalho-contrato-04",
      enunciado: "Sobre a alteração do contrato de trabalho (jus variandi), assinale a alternativa correta:",
      alternativas: {
        A: "Empregador pode alterar unilateralmente qualquer cláusula contratual.",
        B: "CLT, art. 468: alteração só é válida por mútuo consentimento e desde que não resulte, direta ou indiretamente, em prejuízos ao empregado (sob pena de nulidade). Exceções: jus variandi limitado do empregador (pequenas alterações - horário, função similar).",
        C: "Empregado não pode recusar alteração proposta pelo empregador.",
        D: "Alteração que causa prejuízo é válida se houver consentimento.",
        E: "Jus variandi do empregador é ilimitado."
      },
      gabarito: "B",
      explicacao: "CLT, art. 468: alteração contrato só VÁLIDA por MÚTUO CONSENTIMENTO e desde que NÃO resulte, direta ou indiretamente, PREJUÍZOS ao empregado (sob pena de NULIDADE). JUS VARIANDI: poder limitado do empregador de fazer pequenas alterações (ex: ajuste horário, função similar mesmo nível). Alterações substanciais: exigem consentimento + não pode prejudicar. Princípio da inalterabilidade contratual lesiva. B correta. A, C, D, E incorretas.",
      banca: "FGV",
      ano: 2023,
      cargo: "Auditor Fiscal do Trabalho"
    },
    {
      id: "trabalho-contrato-05",
      enunciado: "Em relação à transferência do empregado (CLT, art. 469), é INCORRETO afirmar:",
      alternativas: {
        A: "Transferência é espécie de alteração contratual.",
        B: "Regra: transferência exige anuência do empregado (salvo cargo de confiança ou previsão contratual).",
        C: "Empregador pode transferir unilateralmente qualquer empregado.",
        D: "Transferência provisória por necessidade de serviço: adicional de 25% enquanto durar.",
        E: "Ocupante de cargo de confiança pode ser transferido sem anuência."
      },
      gabarito: "C",
      explicacao: "CLT, art. 469: TRANSFERÊNCIA. REGRA: exige ANUÊNCIA do empregado (princípio da inamovibilidade relativa). EXCEÇÕES (transferência unilateral): 1) empregados ocupantes de cargos de CONFIANÇA; 2) previsão CONTRATUAL (condição implícita ou explícita); 3) extinção do estabelecimento (necessidade). §3º: transferência PROVISÓRIA por real necessidade de serviço: ADICIONAL 25% sobre salário enquanto durar. C INCORRETA - NÃO pode transferir unilateralmente qualquer empregado. A, B, D, E corretas.",
      banca: "CESPE",
      ano: 2022,
      cargo: "Auditor Fiscal do Trabalho"
    },
    {
      id: "trabalho-contrato-06",
      enunciado: "Quanto à suspensão do contrato de trabalho, é correto afirmar:",
      alternativas: {
        A: "Suspensão: cessam temporariamente os efeitos do contrato. Não há prestação de serviços nem pagamento de salário. Exemplos: auxílio-doença após 15 dias, suspensão disciplinar, greve.",
        B: "Na suspensão, empregador paga salário.",
        C: "Suspensão é o mesmo que interrupção.",
        D: "Auxílio-doença sempre é suspensão desde o 1º dia.",
        E: "Suspensão não afeta o contrato de trabalho."
      },
      gabarito: "A",
      explicacao: "SUSPENSÃO DO CONTRATO: cessam TEMPORARIAMENTE os efeitos principais do contrato. Empregado NÃO presta serviços, empregador NÃO paga salário. Contrato persiste. EXEMPLOS: auxílio-doença APÓS 15 DIAS (INSS paga), suspensão disciplinar, greve, licença não remunerada, afastamento para qualificação profissional. DIFERE de INTERRUPÇÃO: na interrupção empregador paga salário mesmo sem trabalho. A correta. B, C, D, E incorretas.",
      banca: "FCC",
      ano: 2023,
      cargo: "Auditor Fiscal do Trabalho"
    },
    {
      id: "trabalho-contrato-07",
      enunciado: "Sobre a interrupção do contrato de trabalho, assinale a alternativa INCORRETA:",
      alternativas: {
        A: "Interrupção: empregado não trabalha, mas empregador paga salário e tempo conta como trabalho.",
        B: "Exemplos: férias, descanso semanal remunerado, feriados, licença-maternidade/paternidade, primeiros 15 dias de auxílio-doença, aborto não criminoso, doação de sangue.",
        C: "Na interrupção, empregador não paga salário.",
        D: "Férias são hipótese de interrupção.",
        E: "Licença-maternidade: 120 dias de interrupção."
      },
      gabarito: "C",
      explicacao: "INTERRUPÇÃO DO CONTRATO: empregado NÃO trabalha, mas empregador PAGA SALÁRIO e tempo conta como de SERVIÇO (para antiguidade, férias, 13º). EXEMPLOS: FÉRIAS, DSR, feriados, primeiros 15 DIAS auxílio-doença (empregador paga), licença-MATERNIDADE (120 dias - empresa paga, compensado depois), licença-PATERNIDADE (5 dias), aborto não criminoso (2 semanas), doação sangue (1 dia/ano), etc. C INCORRETA - na interrupção empregador SIM paga. A, B, D, E corretas.",
      banca: "VUNESP",
      ano: 2022,
      cargo: "Auditor Fiscal do Trabalho"
    },
    {
      id: "trabalho-contrato-08",
      enunciado: "Em relação ao teletrabalho/home office (CLT, art. 75-A a 75-E), é correto afirmar:",
      alternativas: {
        A: "Teletrabalho não está regulamentado na CLT.",
        B: "Teletrabalho (Lei 13.467/17 e 14.442/22): prestação de serviços fora das dependências do empregador, preponderantemente ou não, com uso de tecnologias. Necessário acordo individual escrito. Controle de jornada: facultativo. Se controlada: aplica-se Capítulo II CLT (jornada, horas extras).",
        C: "Teletrabalho sempre exige controle de jornada e horas extras.",
        D: "Não é necessário acordo escrito.",
        E: "Teletrabalho é o mesmo que trabalho externo."
      },
      gabarito: "B",
      explicacao: "CLT, art. 75-A a 75-E (Lei 13.467/17, alterado Lei 14.442/22): TELETRABALHO: prestação de serviços FORA das dependências do empregador, PREPONDERANTEMENTE ou NÃO, com utilização de tecnologias de informação e comunicação. REQUISITOS: acordo individual ESCRITO (art. 75-C). JORNADA: controle é FACULTATIVO. Se NÃO controlar jornada: não paga horas extras. Se CONTROLAR: aplica Capítulo II (jornada, extras). Equipamentos/infraestrutura: previsão contratual. B correta. A, C, D, E incorretas.",
      banca: "FGV",
      ano: 2023,
      cargo: "Auditor Fiscal do Trabalho"
    },
    {
      id: "trabalho-contrato-09",
      enunciado: "Quanto ao contrato de trabalho intermitente (Lei 13.467/17, art. 443, §3º), assinale a alternativa correta:",
      alternativas: {
        A: "Trabalho intermitente não existe na CLT.",
        B: "Trabalho intermitente: prestação de serviços não contínua, com subordinação, alternando períodos de prestação de serviços e inatividade. Convocação com 3 dias de antecedência. Pagamento ao final de cada período. Direitos proporcionais (férias + 1/3, 13º, FGTS, previdência).",
        C: "Intermitente tem salário fixo mensal.",
        D: "Não tem direito a férias.",
        E: "Convocação é imediata, sem antecedência."
      },
      gabarito: "B",
      explicacao: "CLT, art. 443, §3º (Lei 13.467/17 - Reforma): CONTRATO INTERMITENTE: prestação de serviços NÃO CONTÍNUA, com SUBORDINAÇÃO, alternando períodos de prestação de serviços e de INATIVIDADE. CONVOCAÇÃO: com antecedência mínima 3 DIAS CORRIDOS. Empregado pode RECUSAR. PAGAMENTO: ao fim de cada período de prestação (não mensal fixo). DIREITOS: proporcionais - férias + 1/3, 13º, repouso, FGTS, Previdência. B correta. A, C, D, E incorretas.",
      banca: "CESPE",
      ano: 2023,
      cargo: "Auditor Fiscal do Trabalho"
    },
    {
      id: "trabalho-contrato-10",
      enunciado: "Sobre o contrato de trabalho em regime de tempo parcial (CLT, art. 58-A), é INCORRETO afirmar:",
      alternativas: {
        A: "Tempo parcial: duração não superior a 30 horas semanais, sem possibilidade de horas extras, ou 26 horas semanais com até 6 horas extras.",
        B: "Salário proporcional à jornada (comparado com empregados que trabalham tempo integral).",
        C: "Férias: mesmas regras que tempo integral após Reforma Trabalhista (Lei 13.467/17).",
        D: "Tempo parcial sempre proíbe horas extras.",
        E: "Pode ser convertido em tempo integral mediante acordo entre as partes."
      },
      gabarito: "D",
      explicacao: "CLT, art. 58-A (redação Lei 13.467/17): TEMPO PARCIAL: duração não superior a 30 HORAS SEMANAIS, SEM possibilidade de horas EXTRAS, OU até 26 HORAS SEMANAIS, com possibilidade de acréscimo de até 6 HORAS EXTRAS semanais. SALÁRIO: proporcional à jornada. FÉRIAS: Reforma IGUALOU às regras do tempo integral (antes era diferenciado). Conversão: possível de parcial para integral (acordo). D INCORRETA - modalidade 26h PERMITE 6h extras. A, B, C, E corretas.",
      banca: "FCC",
      ano: 2022,
      cargo: "Auditor Fiscal do Trabalho"
    }
  ],

  // TEMA 3: Jornada de Trabalho (10 questões)
  "jornada-de-trabalho": [
    {
      id: "trabalho-jornada-01",
      enunciado: "Sobre a duração normal do trabalho (CLT, art. 58 e CF/88, art. 7º, XIII), é correto afirmar:",
      alternativas: {
        A: "Jornada máxima é de 10 horas diárias.",
        B: "CF/88, art. 7º, XIII e CLT, art. 58: duração normal do trabalho NÃO SUPERIOR a 8 HORAS DIÁRIAS e 44 HORAS SEMANAIS, salvo compensação de horários ou redução de jornada por acordo/convenção coletiva.",
        C: "Não é possível compensação de jornada.",
        D: "Jornada semanal máxima é 40 horas.",
        E: "Acordo individual não pode reduzir jornada."
      },
      gabarito: "B",
      explicacao: "CF/88, art. 7º, XIII: duração do trabalho normal NÃO SUPERIOR a 8 HORAS DIÁRIAS e 44 HORAS SEMANAIS, facultada COMPENSAÇÃO de horários e REDUÇÃO da jornada, mediante acordo ou convenção coletiva. CLT, art. 58: mesma regra. JORNADA MÁXIMA ORDINÁRIA: 8h/dia, 44h/semana. Possível: compensação (ex: sábado compensado), redução (acordo/CCT), prorrogação com horas extras (máx. 2h - art. 59). B correta. A, C, D, E incorretas.",
      banca: "CESPE",
      ano: 2023,
      cargo: "Auditor Fiscal do Trabalho"
    },
    {
      id: "trabalho-jornada-02",
      enunciado: "Em relação às horas extras (CLT, art. 59), assinale a alternativa INCORRETA:",
      alternativas: {
        A: "Horas extras: trabalho além da jornada normal, com adicional mínimo de 50%.",
        B: "Prorrogação máxima: 2 horas diárias mediante acordo individual/coletivo.",
        C: "Adicional constitucional mínimo: 50%. Pode ser maior por norma coletiva.",
        D: "Horas extras habituais integram salário para todos os fins.",
        E: "Não há limite para horas extras."
      },
      gabarito: "E",
      explicacao: "CLT, art. 59: prorrogação da jornada mediante ACORDO INDIVIDUAL/COLETIVO ou CCT, no máximo 2 HORAS DIÁRIAS (limite legal). CF/88, art. 7º, XVI: adicional mínimo 50% sobre hora normal (norma coletiva pode prever maior). Súmula 291 TST: horas extras HABITUAIS INTEGRAM salário para todos os fins (férias, 13º, FGTS, aviso, etc.). E INCORRETA - há limite de 2h/dia (art. 59). A, B, C, D corretas.",
      banca: "FCC",
      ano: 2023,
      cargo: "Auditor Fiscal do Trabalho"
    },
    {
      id: "trabalho-jornada-03",
      enunciado: "Quanto ao adicional noturno (CLT, art. 73 e CF/88, art. 7º, IX), é correto afirmar:",
      alternativas: {
        A: "Adicional noturno não está previsto na Constituição.",
        B: "Trabalho noturno urbano: 22h às 5h. Adicional mínimo: 20% (CLT). Hora noturna: 52min30s (ficta). CF: adicional superior ao diurno. Rural: 21h às 5h (lavoura) ou 20h às 4h (pecuária), adicional 25%.",
        C: "Hora noturna tem 60 minutos.",
        D: "Adicional noturno é de 30%.",
        E: "Trabalho noturno urbano é das 20h às 5h."
      },
      gabarito: "B",
      explicacao: "CF/88, art. 7º, IX: remuneração do trabalho noturno SUPERIOR ao diurno. CLT, art. 73: URBANO - 22h às 5h, adicional mínimo 20%, hora noturna REDUZIDA (52min30s - hora ficta). §1º: se estende além das 5h, adicional persiste. RURAL (Lei 5.889/73): LAVOURA 21h-5h, PECUÁRIA 20h-4h, adicional 25%. B correta. A, C, D, E incorretas.",
      banca: "VUNESP",
      ano: 2023,
      cargo: "Auditor Fiscal do Trabalho"
    },
    {
      id: "trabalho-jornada-04",
      enunciado: "Sobre o intervalo intrajornada (CLT, art. 71), assinale a alternativa correta:",
      alternativas: {
        A: "Intervalo intrajornada não é obrigatório.",
        B: "Jornada > 6 horas: intervalo mínimo 1 hora, máximo 2 horas (para repouso e alimentação). Jornada > 4h até 6h: intervalo mínimo 15 minutos. Até 4h: sem intervalo obrigatório. Não concessão/redução irregular: paga período com adicional 50% (natureza indenizatória - Súmula 437 TST).",
        C: "Jornada de 8 horas exige intervalo de 30 minutos.",
        D: "Intervalo não concedido não gera pagamento.",
        E: "Intervalo máximo é ilimitado."
      },
      gabarito: "B",
      explicacao: "CLT, art. 71: INTERVALO INTRAJORNADA (descanso/alimentação): 1) jornada > 6 HORAS: mín. 1 HORA, máx. 2 HORAS; 2) jornada > 4h ATÉ 6h: mín. 15 MINUTOS; 3) até 4h: sem intervalo obrigatório. §4º (Reforma): redução ou fracionamento possível por acordo/CCT. Não concessão ou redução IRREGULAR: paga período TOTAL com adicional 50% (natureza INDENIZATÓRIA - Súmula 437 TST, após Reforma). B correta. A, C, D, E incorretas.",
      banca: "FGV",
      ano: 2023,
      cargo: "Auditor Fiscal do Trabalho"
    },
    {
      id: "trabalho-jornada-05",
      enunciado: "Em relação ao intervalo interjornada (CLT, art. 66), é INCORRETO afirmar:",
      alternativas: {
        A: "Intervalo interjornada: entre duas jornadas de trabalho.",
        B: "Intervalo mínimo: 11 horas consecutivas entre jornadas.",
        C: "Não respeitar intervalo interjornada: paga as horas subtraídas como extras com adicional 50%.",
        D: "Intervalo interjornada pode ser livremente reduzido por acordo individual.",
        E: "Finalidade: descanso e recuperação do trabalhador."
      },
      gabarito: "D",
      explicacao: "CLT, art. 66: INTERVALO INTERJORNADA: mínimo 11 HORAS CONSECUTIVAS entre duas jornadas de trabalho (entre o fim de uma e início da outra). FINALIDADE: descanso e recuperação. Descumprimento: jurisprudência - paga horas subtraídas como EXTRAS com adicional 50%. Reforma (Lei 13.467/17): NÃO permite redução por acordo individual (norma de saúde/segurança). D INCORRETA - não pode reduzir livremente. A, B, C, E corretas.",
      banca: "CESPE",
      ano: 2022,
      cargo: "Auditor Fiscal do Trabalho"
    },
    {
      id: "trabalho-jornada-06",
      enunciado: "Quanto ao descanso semanal remunerado - DSR (CLT, art. 67 e Lei 605/49), é correto afirmar:",
      alternativas: {
        A: "DSR não é garantia constitucional.",
        B: "CF/88, art. 7º, XV: repouso semanal remunerado, preferencialmente aos domingos. CLT, art. 67: 24 horas consecutivas, preferencialmente domingo. Lei 605/49: pagamento integral, condicionado à assiduidade semanal (não pode faltar injustificadamente). DSR em feriados também remunerado.",
        C: "DSR deve obrigatoriamente ser aos domingos.",
        D: "Falta injustificada não afeta o DSR.",
        E: "DSR não é remunerado."
      },
      gabarito: "B",
      explicacao: "CF/88, art. 7º, XV: repouso semanal remunerado, PREFERENCIALMENTE aos domingos (não obrigatoriamente). CLT, art. 67: 24 HORAS CONSECUTIVAS, preferência domingo. Lei 605/49: DSR REMUNERADO (valor 1 dia normal). REQUISITOS: assiduidade semanal (não faltar injustificadamente), pontualidade. Falta injustificada: perde DSR da semana. Feriados: também remunerados. Trabalho em DSR sem compensação/folga: paga em DOBRO. B correta. A, C, D, E incorretas.",
      banca: "FCC",
      ano: 2023,
      cargo: "Auditor Fiscal do Trabalho"
    },
    {
      id: "trabalho-jornada-07",
      enunciado: "Sobre a jornada de 12x36 horas, assinale a alternativa INCORRETA:",
      alternativas: {
        A: "Jornada 12x36: trabalha 12 horas, folga 36 horas.",
        B: "Após Reforma (Lei 13.467/17), art. 59-A: válida por acordo individual escrito, CCT ou ACT.",
        C: "Remuneração já contempla horas extras noturnas, adicional noturno e DSR.",
        D: "Jornada 12x36 exige sempre acordo coletivo.",
        E: "Comum em vigilância, saúde."
      },
      gabarito: "D",
      explicacao: "CLT, art. 59-A (Lei 13.467/17 - Reforma): jornada 12x36 é VÁLIDA desde que prevista em: 1) ACORDO INDIVIDUAL ESCRITO (novidade da Reforma); 2) CCT; 3) ACT. Remuneração mensal contempla horas extras habituais, adicional noturno (se houver) e DSR. NÃO precisa intervalo intrajornada (pode ter 30min). Comum: vigilância, portaria, saúde. D INCORRETA - Reforma permitiu acordo INDIVIDUAL escrito (não exige mais coletivo obrigatoriamente). A, B, C, E corretas.",
      banca: "VUNESP",
      ano: 2022,
      cargo: "Auditor Fiscal do Trabalho"
    },
    {
      id: "trabalho-jornada-08",
      enunciado: "Em relação ao banco de horas (CLT, art. 59, §2º), é correto afirmar:",
      alternativas: {
        A: "Banco de horas não existe na CLT.",
        B: "Banco de horas: compensação de horas extras em outro dia. Antes da Reforma: só por ACT/CCT. Reforma (Lei 13.467/17): permite banco de horas por acordo individual escrito (compensação em 6 meses). Coletivo: compensação em até 1 ano. Não compensadas: pagamento com adicional 50%.",
        C: "Banco de horas só pode ser por acordo coletivo.",
        D: "Prazo de compensação é sempre de 1 ano.",
        E: "Horas não compensadas são perdidas."
      },
      gabarito: "B",
      explicacao: "CLT, art. 59, §§2º-6º (redação Lei 13.467/17): BANCO DE HORAS: compensação de horas extras em período posterior. ANTES Reforma: só ACT/CCT. APÓS Reforma: §5º permite ACORDO INDIVIDUAL ESCRITO (compensação em até 6 MESES). ACT/CCT: compensação em até 1 ANO. §3º: horas NÃO COMPENSADAS no prazo: pagas como extras com adicional 50%. Rescisão: paga saldo positivo ou negativo. B correta. A, C, D, E incorretas.",
      banca: "FGV",
      ano: 2023,
      cargo: "Auditor Fiscal do Trabalho"
    },
    {
      id: "trabalho-jornada-09",
      enunciado: "Quanto aos trabalhadores excluídos do controle de jornada (CLT, art. 62), assinale a alternativa correta:",
      alternativas: {
        A: "Todos os trabalhadores têm controle de jornada obrigatório.",
        B: "Art. 62: NÃO se aplica controle de jornada (sem horas extras): I) empregados em atividade EXTERNA incompatível com fixação de horário; II) cargos de GESTÃO (requisitos: poderes gestão, salário + 40% do cargo efetivo e superior a 2x limite INSS). Teletrabalho: sem controle também não tem extra (salvo se jornada controlada).",
        C: "Cargo de confiança sempre exclui controle de jornada.",
        D: "Teletrabalho sempre tem controle de jornada.",
        E: "Atividade externa sempre tem horas extras."
      },
      gabarito: "B",
      explicacao: "CLT, art. 62: NÃO se aplica regime de jornada (não paga horas extras): I) empregados em ATIVIDADE EXTERNA incompatível com fixação de horário (se controlável: não se aplica exceção); II) GESTORES - requisitos cumulativos: a) poderes de GESTÃO; b) salário mín. 40% SUPERIOR ao cargo efetivo; c) salário superior a 2x limite máximo benefícios INSS. Art. 75-B: TELETRABALHO sem controle: não paga extra; com controle: paga. B correta. A, C, D, E incorretas.",
      banca: "CESPE",
      ano: 2023,
      cargo: "Auditor Fiscal do Trabalho"
    },
    {
      id: "trabalho-jornada-10",
      enunciado: "Sobre o tempo de deslocamento residência-trabalho (horas in itinere), é INCORRETO afirmar:",
      alternativas: {
        A: "Horas in itinere: tempo de deslocamento residência-trabalho quando em local de difícil acesso ou sem transporte público.",
        B: "Antes da Reforma: horas in itinere eram tempo à disposição, contavam como jornada.",
        C: "Reforma Trabalhista (Lei 13.467/17) manteve as horas in itinere como tempo à disposição e jornada.",
        D: "Após Reforma: art. 58, §2º - tempo de deslocamento NÃO é tempo à disposição (revogou horas in itinere).",
        E: "Reforma afastou a obrigação de pagar horas in itinere."
      },
      gabarito: "C",
      explicacao: "HORAS IN ITINERE: tempo de deslocamento residência-trabalho-residência em local de difícil acesso ou sem transporte público. ANTES Reforma: considerado tempo à DISPOSIÇÃO do empregador (contava na jornada, gerava extras - art. 58, §2º antigo). REFORMA (Lei 13.467/17): REVOGOU art. 58, §2º antigo. Novo §2º: tempo de deslocamento NÃO é tempo à disposição (seja qual for o meio de transporte). Jurisprudência: afastou horas in itinere. C INCORRETA - Reforma NÃO manteve, ABOLIU. A, B, D, E corretas.",
      banca: "FCC",
      ano: 2022,
      cargo: "Auditor Fiscal do Trabalho"
    }
  ]
};
