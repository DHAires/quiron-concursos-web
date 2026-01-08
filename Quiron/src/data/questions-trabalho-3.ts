// Questões de Direito do Trabalho - TEMAS 7-9 (30 questões)
// Área Jurídica - Direito do Trabalho

export const questionsTrabalho3 = {
  // TEMA 7: Aviso Prévio (10 questões)
  "aviso-previo": [
    {
      id: "trabalho-aviso-01",
      enunciado: "Sobre o aviso prévio (CLT, art. 487-491 e CF/88, art. 7º, XXI), é correto afirmar:",
      alternativas: {
        A: "Aviso prévio não é garantia constitucional.",
        B: "CF/88, art. 7º, XXI: aviso prévio proporcional ao tempo de serviço, mínimo 30 dias (Lei 12.506/2011). CLT: comunicação prévia da rescisão contratual (empregador ou empregado). Prazo: 30 dias (base) + 3 dias por ano de serviço no mesmo empregador (máx. 90 dias - total máximo).",
        C: "Aviso prévio é sempre de 30 dias.",
        D: "Aviso prévio não é proporcional ao tempo de serviço.",
        E: "Prazo máximo é de 60 dias."
      },
      gabarito: "B",
      explicacao: "CF/88, art. 7º, XXI: aviso prévio PROPORCIONAL ao tempo de serviço, mínimo 30 DIAS. Lei 12.506/2011: regulamentou proporcionalidade - 30 dias BASE + 3 DIAS por ANO de serviço no mesmo empregador, até máximo 90 DIAS (total: 90 dias após 20 anos). CLT, art. 487-491: comunicação prévia da rescisão. Falta de aviso: indenização. B correta. A, C, D, E incorretas.",
      banca: "CESPE",
      ano: 2023,
      cargo: "Auditor Fiscal do Trabalho"
    },
    {
      id: "trabalho-aviso-02",
      enunciado: "Em relação ao aviso prévio trabalhado (CLT, art. 488), assinale a alternativa INCORRETA:",
      alternativas: {
        A: "Aviso prévio trabalhado: empregado continua trabalhando durante o prazo.",
        B: "Empregado tem direito a redução de 2 horas diárias ou 7 dias corridos no final do aviso (opção do empregado).",
        C: "Redução de jornada é opção do empregador.",
        D: "Finalidade da redução: busca novo emprego.",
        E: "Período do aviso conta como tempo de serviço."
      },
      gabarito: "C",
      explicacao: "CLT, art. 488: AVISO PRÉVIO TRABALHADO (concedido pelo empregador ao empregado). §único: empregado pode REDUZIR jornada em 2 HORAS DIÁRIAS ou FALTAR 7 DIAS CORRIDOS ao final do aviso. OPÇÃO: do EMPREGADO (não empregador). Salário: integral (sem desconto). Finalidade: buscar novo emprego. Aviso conta como TEMPO DE SERVIÇO para todos os efeitos. C INCORRETA - opção é do empregado. A, B, D, E corretas.",
      banca: "FCC",
      ano: 2023,
      cargo: "Auditor Fiscal do Trabalho"
    },
    {
      id: "trabalho-aviso-03",
      enunciado: "Quanto ao aviso prévio indenizado, é correto afirmar:",
      alternativas: {
        A: "Aviso prévio indenizado: empregado não trabalha durante o prazo.",
        B: "Empregador dispensa empregado imediatamente, pagando valor equivalente ao período (salário + reflexos). Período conta como tempo de serviço (integra tempo para 13º, férias, FGTS). Súmula 305 TST: termo final do contrato é após o aviso (projeção).",
        C: "Período não conta como tempo de serviço.",
        D: "Aviso indenizado não gera reflexos.",
        E: "Empregado deve trabalhar durante o aviso indenizado."
      },
      gabarito: "B",
      explicacao: "AVISO PRÉVIO INDENIZADO: empregador dispensa empregado IMEDIATAMENTE, sem trabalho durante o prazo, PAGANDO valor equivalente (salário do período + reflexos - 13º, férias, FGTS). Período do aviso CONTA como TEMPO DE SERVIÇO para todos os fins (art. 487, §1º). Súmula 305 TST: pagamento de salários até data prevista para término do aviso (termo final do contrato é APÓS aviso - projeção). B correta. A (incompleta), C, D, E incorretas.",
      banca: "VUNESP",
      ano: 2023,
      cargo: "Auditor Fiscal do Trabalho"
    },
    {
      id: "trabalho-aviso-04",
      enunciado: "Sobre o aviso prévio no pedido de demissão, assinale a alternativa correta:",
      alternativas: {
        A: "Empregado que pede demissão não precisa dar aviso prévio.",
        B: "Empregado que pede demissão deve dar aviso prévio ao empregador (mesmos prazos - 30 dias + proporcional). Se não cumprir: empregador pode descontar salários correspondentes ao período (art. 487, §2º). Exceção: novo emprego comprovado dispensa cumprimento.",
        C: "Empregador não pode descontar falta de aviso.",
        D: "Prazo do empregado é de 15 dias.",
        E: "Empregado não pode ser dispensado do aviso."
      },
      gabarito: "B",
      explicacao: "CLT, art. 487, §2º: empregado que pede DEMISSÃO deve dar AVISO PRÉVIO ao empregador (mesmos prazos: 30 dias + proporcional - Lei 12.506/2011). Se NÃO cumprir: empregador pode DESCONTAR salários correspondentes ao período não trabalhado. §1º: se empregado conseguir NOVO EMPREGO, pode ser dispensado de cumprir (jurisprudência). Empregador pode dispensar cumprimento (liberar empregado). B correta. A, C, D, E incorretas.",
      banca: "FGV",
      ano: 2023,
      cargo: "Auditor Fiscal do Trabalho"
    },
    {
      id: "trabalho-aviso-05",
      enunciado: "Em relação à reconsideração do aviso prévio, é INCORRETO afirmar:",
      alternativas: {
        A: "Aviso prévio pode ser reconsiderado pelas partes.",
        B: "CLT, art. 489: aviso não impede que uma das partes reconheça a inexistência de motivo relevante para rescisão (reconsideração).",
        C: "Reconsideração exige concordância de ambas as partes (empregador e empregado).",
        D: "Reconsideração unilateral é válida.",
        E: "Reconsideração anula a rescisão."
      },
      gabarito: "D",
      explicacao: "CLT, art. 489: RECONSIDERAÇÃO do aviso prévio: parte que concedeu o aviso pode RECONSIDERAR (voltar atrás), desde que a outra parte CONCORDE. Reconsideração: exige CONCORDÂNCIA de AMBAS as partes (não é unilateral). Efeito: anula rescisão, contrato continua. Jurisprudência: reconsideração é bilateral (mútuo consenso). D INCORRETA - reconsideração NÃO é unilateral. A, B, C, E corretas.",
      banca: "CESPE",
      ano: 2022,
      cargo: "Auditor Fiscal do Trabalho"
    },
    {
      id: "trabalho-aviso-06",
      enunciado: "Quanto à justa causa durante o aviso prévio, é correto afirmar:",
      alternativas: {
        A: "Justa causa durante aviso prévio não é possível.",
        B: "CLT, art. 490-491: prática de falta grave durante aviso prévio dado pelo empregador: empregador pode rescindir por justa causa, sem pagamento do restante do aviso. Falta grave praticada pelo empregador: empregado pode se considerar dispensado e exigir indenização (rescisão indireta).",
        C: "Empregador deve pagar o aviso mesmo com justa causa.",
        D: "Empregado não pode rescindir durante aviso por falta grave do empregador.",
        E: "Justa causa só é possível antes do aviso."
      },
      gabarito: "B",
      explicacao: "CLT, art. 490: durante AVISO PRÉVIO dado pelo empregador, se empregado praticar FALTA GRAVE (art. 482), empregador pode rescindir por JUSTA CAUSA, sem pagar o restante do aviso. Art. 491: se empregador pratica falta grave durante aviso, empregado pode se considerar DISPENSADO e PLEITEAR indenização (rescisão indireta - art. 483). B correta. A, C, D, E incorretas.",
      banca: "FCC",
      ano: 2023,
      cargo: "Auditor Fiscal do Trabalho"
    },
    {
      id: "trabalho-aviso-07",
      enunciado: "Sobre a integração do aviso prévio indenizado no tempo de serviço (Súmula 305 TST), assinale a alternativa INCORRETA:",
      alternativas: {
        A: "Aviso prévio indenizado integra o tempo de serviço para todos os efeitos legais.",
        B: "Súmula 305 TST: término do contrato é após o aviso (projeção), mesmo indenizado.",
        C: "Integração afeta cálculo de 13º, férias, FGTS.",
        D: "Aviso indenizado não integra o tempo de serviço.",
        E: "Pode alterar prazo de prescrição e outros direitos."
      },
      gabarito: "D",
      explicacao: "CLT, art. 487, §1º: AVISO PRÉVIO (trabalhado ou INDENIZADO) INTEGRA o TEMPO DE SERVIÇO para TODOS OS EFEITOS LEGAIS. Súmula 305 TST: pagamento de salários até data prevista para término do aviso indenizado - termo final do contrato é APÓS o aviso (projeção). Efeitos: integra cálculo 13º, férias, FGTS, aposentadoria, prescrição. D INCORRETA - aviso indenizado SIM integra. A, B, C, E corretas.",
      banca: "VUNESP",
      ano: 2022,
      cargo: "Auditor Fiscal do Trabalho"
    },
    {
      id: "trabalho-aviso-08",
      enunciado: "Em relação ao aviso prévio proporcional (Lei 12.506/2011), é correto afirmar:",
      alternativas: {
        A: "Proporcionalidade: 3 dias por ano de serviço, até máximo 60 dias.",
        B: "Lei 12.506/2011: aviso prévio de 30 DIAS (base) + 3 DIAS por ANO de serviço no mesmo empregador, limitado a 60 DIAS adicionais (total máximo: 90 DIAS). Ex: 20 anos = 30 + 60 = 90 dias. 1 ano = 30 + 3 = 33 dias.",
        C: "Proporcionalidade é de 5 dias por ano.",
        D: "Limite adicional é de 90 dias.",
        E: "Lei não se aplica a pedidos de demissão."
      },
      gabarito: "B",
      explicacao: "Lei 12.506/2011: AVISO PRÉVIO PROPORCIONAL ao tempo de serviço. CÁLCULO: 30 DIAS (base) + 3 DIAS por ANO completo de serviço no mesmo empregador. LIMITE: adicional máximo de 60 DIAS (total máximo 90 DIAS - 30 base + 60 adicional = após 20 anos). Exemplos: 1 ano = 33 dias; 10 anos = 60 dias; 20+ anos = 90 dias. Aplica-se a EMPREGADO E EMPREGADOR (pedidos de demissão também). B correta. A, C, D, E incorretas.",
      banca: "FGV",
      ano: 2023,
      cargo: "Auditor Fiscal do Trabalho"
    },
    {
      id: "trabalho-aviso-09",
      enunciado: "Quanto ao aviso prévio em contratos por prazo determinado, assinale a alternativa correta:",
      alternativas: {
        A: "Contrato por prazo determinado sempre tem aviso prévio.",
        B: "Contratos por prazo determinado (inclusive experiência): NÃO têm aviso prévio, salvo se contiver cláusula assecuratória do direito recíproco de rescisão antecipada. Com cláusula: aplicam-se regras do prazo indeterminado (aviso prévio + indenizações). Sem cláusula: indenização de metade dos salários até o termo.",
        C: "Rescisão antecipada sem cláusula não gera indenização.",
        D: "Cláusula assecuratória sempre existe em prazo determinado.",
        E: "Contrato de experiência sempre tem aviso prévio."
      },
      gabarito: "B",
      explicacao: "CONTRATO PRAZO DETERMINADO (art. 481): regra - NÃO tem aviso prévio (termo certo). RESCISÃO ANTECIPADA: 1) COM cláusula ASSECURATÓRIA do direito recíproco de rescisão: aplicam-se regras do prazo INDETERMINADO (aviso prévio, indenizações); 2) SEM cláusula: empregador paga METADE dos salários até termo final, empregado paga prejuízos. EXPERIÊNCIA: mesma regra. B correta. A, C, D, E incorretas.",
      banca: "CESPE",
      ano: 2023,
      cargo: "Auditor Fiscal do Trabalho"
    },
    {
      id: "trabalho-aviso-10",
      enunciado: "Sobre o descumprimento do aviso prévio pelo empregador, é INCORRETO afirmar:",
      alternativas: {
        A: "Falta de aviso prévio pelo empregador gera indenização.",
        B: "Empregador que não concede aviso prévio: paga valor correspondente (salário do período + reflexos).",
        C: "Período integra tempo de serviço mesmo sem cumprimento.",
        D: "Empregador pode dispensar sem aviso sem qualquer pagamento.",
        E: "Indenização substitui o aviso não concedido."
      },
      gabarito: "D",
      explicacao: "CLT, art. 487, §1º: FALTA DE AVISO PRÉVIO pelo empregador: obriga PAGAMENTO de salário correspondente ao PRAZO do aviso (INDENIZAÇÃO). Período do aviso INTEGRA tempo de serviço (mesmo indenizado). Súmula 305 TST: término contrato é após aviso. Empregador NÃO pode dispensar sem aviso SEM pagamento (deve pagar indenização correspondente - 30 dias + proporcional). D INCORRETA - deve pagar indenização. A, B, C, E corretas.",
      banca: "FCC",
      ano: 2022,
      cargo: "Auditor Fiscal do Trabalho"
    }
  ],

  // TEMA 8: Rescisão Contratual (10 questões)
  "rescisao-contratual": [
    {
      id: "trabalho-rescisao-01",
      enunciado: "Sobre as modalidades de rescisão do contrato de trabalho, é correto afirmar:",
      alternativas: {
        A: "Só existe rescisão por justa causa.",
        B: "Modalidades: I) sem justa causa (empregador dispensa sem motivo); II) justa causa (empregado comete falta grave - art. 482); III) pedido de demissão (empregado pede); IV) rescisão indireta (justa causa do empregador - art. 483); V) culpa recíproca; VI) acordo (Lei 13.467/17); VII) força maior; VIII) término de prazo determinado.",
        C: "Rescisão só pode ser sem justa causa.",
        D: "Não existe rescisão por acordo.",
        E: "Força maior não é modalidade de rescisão."
      },
      gabarito: "B",
      explicacao: "MODALIDADES DE RESCISÃO: I) SEM JUSTA CAUSA (empregador dispensa imotivadamente - mais direitos ao empregado); II) JUSTA CAUSA (empregado comete falta grave - art. 482); III) PEDIDO DE DEMISSÃO (empregado pede); IV) RESCISÃO INDIRETA (justa causa patronal - art. 483); V) CULPA RECÍPROCA (ambos faltam); VI) ACORDO (Lei 13.467/17 - art. 484-A); VII) FORÇA MAIOR (art. 501-502); VIII) término prazo determinado. B correta. A, C, D, E incorretas.",
      banca: "CESPE",
      ano: 2023,
      cargo: "Auditor Fiscal do Trabalho"
    },
    {
      id: "trabalho-rescisao-02",
      enunciado: "Em relação à justa causa do empregado (CLT, art. 482), assinale a alternativa INCORRETA:",
      alternativas: {
        A: "Justa causa: ato faltoso grave que quebra confiança, tornando insustentável a relação.",
        B: "Hipóteses art. 482: ato de improbidade, incontinência/mau procedimento, negociação habitual, condenação criminal transitada, desídia, embriaguez, violação de segredo, ato de indisciplina/insubordinação, abandono de emprego, ofensas físicas, lesão à honra, jogos de azar, atos atentatórios à segurança nacional.",
        C: "Justa causa dispensa imediatidade, atualidade e proporcionalidade.",
        D: "Empregado dispensado por justa causa perde praticamente todos os direitos.",
        E: "Abandono de emprego: ausência injustificada por mais de 30 dias (presunção)."
      },
      gabarito: "C",
      explicacao: "CLT, art. 482: JUSTA CAUSA - ato faltoso GRAVE. HIPÓTESES (rol exemplificativo): improbidade, incontinência, negociação habitual, condenação criminal, desídia (negligência), embriaguez habitual, violação segredo, indisciplina/insubordinação, ABANDONO DE EMPREGO (> 30 dias ausência - presunção), ofensas físicas, lesão honra, jogos azar, atos contra segurança nacional, perda habilitação profissional. REQUISITOS: IMEDIATIDADE (punição logo após falta), ATUALIDADE (falta recente), PROPORCIONALIDADE (gravidade x punição), non bis in idem (não punir 2x). C INCORRETA - justa causa EXIGE esses requisitos. A, B, D, E corretas.",
      banca: "FCC",
      ano: 2023,
      cargo: "Auditor Fiscal do Trabalho"
    },
    {
      id: "trabalho-rescisao-03",
      enunciado: "Quanto à rescisão indireta (CLT, art. 483), é correto afirmar:",
      alternativas: {
        A: "Rescisão indireta não existe na CLT.",
        B: "Rescisão indireta: justa causa do EMPREGADOR (art. 483). Empregado pode considerar rescindido contrato e pleitear indenização quando empregador: exigir serviços superiores às forças/proibidos/contrários aos bons costumes, tratar com rigor excessivo, correr perigo manifesto de mal considerável, descumprir obrigações contratuais, praticar atos lesivos à honra, agredir fisicamente. Empregado: direitos iguais à dispensa sem justa causa.",
        C: "Empregador que pratica falta grave não gera direitos ao empregado.",
        D: "Rescisão indireta é o mesmo que pedido de demissão.",
        E: "Empregado não pode pleitear indenizações."
      },
      gabarito: "B",
      explicacao: "CLT, art. 483: RESCISÃO INDIRETA (justa causa do EMPREGADOR). Empregado pode RESCINDIR contrato e pleitear indenização se empregador: a) exigir serviços superiores forças/proibidos/contrários bons costumes; b) tratar com rigor excessivo; c) correr perigo manifesto de mal considerável; d) NÃO CUMPRIR obrigações contratuais; e) praticar contra empregado/família atos lesivos à honra; f) agredir fisicamente. Empregado: direitos da dispensa SEM JUSTA CAUSA. Necessita reconhecimento judicial. B correta. A, C, D, E incorretas.",
      banca: "VUNESP",
      ano: 2023,
      cargo: "Auditor Fiscal do Trabalho"
    },
    {
      id: "trabalho-rescisao-04",
      enunciado: "Sobre as verbas rescisórias na dispensa sem justa causa, assinale a alternativa correta:",
      alternativas: {
        A: "Dispensa sem justa causa não gera direitos ao empregado.",
        B: "Dispensa sem justa causa: empregado tem direito a: saldo de salário, aviso prévio (trabalhado/indenizado), 13º proporcional, férias vencidas + 1/3, férias proporcionais + 1/3, saque FGTS, multa 40% FGTS, seguro-desemprego (se preencher requisitos). Mais vantajosa para empregado.",
        C: "Empregado não tem direito a férias proporcionais.",
        D: "Não há multa de FGTS.",
        E: "Seguro-desemprego não se aplica."
      },
      gabarito: "B",
      explicacao: "DISPENSA SEM JUSTA CAUSA (empregador dispensa imotivadamente): VERBAS RESCISÓRIAS - 1) saldo de SALÁRIO; 2) AVISO PRÉVIO (trabalhado ou indenizado); 3) 13º PROPORCIONAL; 4) FÉRIAS VENCIDAS + 1/3; 5) FÉRIAS PROPORCIONAIS + 1/3; 6) saque FGTS; 7) MULTA 40% FGTS; 8) SEGURO-DESEMPREGO (se requisitos). Modalidade MAIS VANTAJOSA para empregado. B correta. A, C, D, E incorretas.",
      banca: "FGV",
      ano: 2023,
      cargo: "Auditor Fiscal do Trabalho"
    },
    {
      id: "trabalho-rescisao-05",
      enunciado: "Em relação às verbas rescisórias no pedido de demissão, é INCORRETO afirmar:",
      alternativas: {
        A: "Pedido de demissão: empregado pede para sair.",
        B: "Verbas: saldo de salário, 13º proporcional, férias vencidas + 1/3, férias proporcionais + 1/3.",
        C: "Empregado NÃO tem direito a: aviso prévio indenizado, saque FGTS, multa 40% FGTS, seguro-desemprego.",
        D: "Empregado pode sacar o FGTS e receber multa de 40%.",
        E: "Empregado deve dar aviso prévio ao empregador."
      },
      gabarito: "D",
      explicacao: "PEDIDO DE DEMISSÃO (empregado pede para sair): VERBAS - 1) saldo SALÁRIO; 2) 13º PROPORCIONAL; 3) FÉRIAS VENCIDAS + 1/3; 4) FÉRIAS PROPORCIONAIS + 1/3. NÃO tem: aviso prévio indenizado (deve DAR ao empregador), saque FGTS (saldo permanece), multa 40% FGTS, seguro-desemprego. Modalidade MENOS vantajosa. D INCORRETA - NÃO saca FGTS nem recebe multa. A, B, C, E corretas.",
      banca: "CESPE",
      ano: 2022,
      cargo: "Auditor Fiscal do Trabalho"
    },
    {
      id: "trabalho-rescisao-06",
      enunciado: "Quanto às verbas rescisórias na justa causa, é correto afirmar:",
      alternativas: {
        A: "Justa causa: empregado recebe todas as verbas normais.",
        B: "Justa causa (empregado comete falta grave): verbas reduzidas - apenas saldo de salário e férias vencidas + 1/3 (se houver). NÃO tem: aviso prévio, 13º proporcional, férias proporcionais, saque FGTS, multa 40%, seguro-desemprego. Modalidade mais gravosa ao empregado.",
        C: "Empregado dispensado por justa causa recebe 13º proporcional.",
        D: "Empregado tem direito à multa de 40% do FGTS.",
        E: "Empregado pode sacar o FGTS."
      },
      gabarito: "B",
      explicacao: "JUSTA CAUSA (empregado comete falta grave - art. 482): VERBAS RESCISÓRIAS REDUZIDAS - somente: 1) saldo de SALÁRIO; 2) FÉRIAS VENCIDAS + 1/3 (se houver - já adquiridas). NÃO tem: aviso prévio, 13º proporcional, férias proporcionais, saque FGTS (saldo permanece bloqueado), multa 40% FGTS, seguro-desemprego. Modalidade MAIS GRAVOSA (punitiva). B correta. A, C, D, E incorretas.",
      banca: "FCC",
      ano: 2023,
      cargo: "Auditor Fiscal do Trabalho"
    },
    {
      id: "trabalho-rescisao-07",
      enunciado: "Sobre a rescisão por culpa recíproca (CLT, art. 484), assinale a alternativa INCORRETA:",
      alternativas: {
        A: "Culpa recíproca: empregado e empregador cometem faltas graves.",
        B: "Verbas: metade do aviso prévio, metade do 13º proporcional, férias proporcionais integrais + 1/3, saldo salário, saque de 80% FGTS, multa de 20% FGTS.",
        C: "Empregado recebe 100% do aviso prévio.",
        D: "Deve ser reconhecida pela Justiça do Trabalho.",
        E: "Súmula 14 TST: direitos reduzidos pela metade (exceto férias)."
      },
      gabarito: "C",
      explicacao: "CLT, art. 484: CULPA RECÍPROCA: empregado E empregador cometem faltas graves. Reconhecimento: JUSTIÇA DO TRABALHO (não é automático). VERBAS (Súmula 14 TST): METADE do aviso prévio, METADE do 13º proporcional, férias proporcionais INTEGRAIS + 1/3, saldo salário, saque 80% FGTS, multa 20% FGTS. Direitos pela METADE (exceto férias). C INCORRETA - aviso é pela METADE. A, B, D, E corretas.",
      banca: "VUNESP",
      ano: 2022,
      cargo: "Auditor Fiscal do Trabalho"
    },
    {
      id: "trabalho-rescisao-08",
      enunciado: "Em relação ao seguro-desemprego, é correto afirmar:",
      alternativas: {
        A: "Seguro-desemprego é pago em qualquer rescisão.",
        B: "Seguro-desemprego (Lei 7.998/90 e 13.134/2015): benefício temporário pago ao trabalhador dispensado SEM JUSTA CAUSA. Requisitos: ter recebido salários nos últimos 12-24 meses (variável conforme solicitação), não ter renda própria, não estar recebendo benefício previdenciário. Parcelas: 3 a 5 meses (conforme tempo trabalhado).",
        C: "Pago em pedido de demissão.",
        D: "Pago indefinidamente.",
        E: "Não há requisitos para recebimento."
      },
      gabarito: "B",
      explicacao: "Lei 7.998/90 e 13.134/2015: SEGURO-DESEMPREGO: benefício temporário a trabalhador dispensado SEM JUSTA CAUSA. REQUISITOS: 1) recebimento salários: 1ª solicitação mín. 12 meses nos últimos 18; 2ª solicitação mín. 9 meses nos últimos 12; 3ª+ solicitação mín. 6 meses; 2) não ter renda própria; 3) não receber benefício previdenciário. PARCELAS: 3 a 5 meses (conforme tempo). NÃO pago: justa causa, pedido demissão, acordo. B correta. A, C, D, E incorretas.",
      banca: "FGV",
      ano: 2023,
      cargo: "Auditor Fiscal do Trabalho"
    },
    {
      id: "trabalho-rescisao-09",
      enunciado: "Quanto ao prazo para pagamento das verbas rescisórias (CLT, art. 477, §6º), assinale a alternativa correta:",
      alternativas: {
        A: "Verbas rescisórias podem ser pagas a qualquer tempo.",
        B: "CLT, art. 477, §6º (Lei 13.467/17 - Reforma): pagamento das verbas rescisórias até 10 DIAS CORRIDOS contados do término do contrato (antes: 1 dia se aviso trabalhado, 10 dias se indenizado). Mora: multa de 1 salário ao empregado (art. 477, §8º - mantido).",
        C: "Prazo é de 30 dias após rescisão.",
        D: "Não há multa por atraso.",
        E: "Antes da Reforma, prazo era sempre de 10 dias."
      },
      gabarito: "B",
      explicacao: "CLT, art. 477, §6º (redação Lei 13.467/17 - Reforma): PRAZO para pagamento verbas rescisórias: até 10 DIAS CORRIDOS contados do TÉRMINO do contrato (unificou prazos). ANTES Reforma: 1 dia útil se aviso trabalhado, 10 dias se indenizado. §8º: mora no pagamento - MULTA de 1 SALÁRIO do empregado a favor do empregado (mantida pela Reforma). B correta. A, C, D, E incorretas.",
      banca: "CESPE",
      ano: 2023,
      cargo: "Auditor Fiscal do Trabalho"
    },
    {
      id: "trabalho-rescisao-10",
      enunciado: "Sobre a homologação da rescisão contratual, é INCORRETO afirmar:",
      alternativas: {
        A: "Antes da Reforma (Lei 13.467/17): contratos com mais de 1 ano exigiam homologação no sindicato ou MTb.",
        B: "Reforma Trabalhista (Lei 13.467/17): EXTINGUIU obrigatoriedade de homologação sindical/MTb (revogou art. 477, §1º).",
        C: "Após Reforma: empregador pode pagar diretamente ao empregado, sem homologação.",
        D: "Homologação sindical ainda é obrigatória após a Reforma.",
        E: "Extinção visa desburocratização."
      },
      gabarito: "D",
      explicacao: "HOMOLOGAÇÃO RESCISÓRIA: ANTES Lei 13.467/17 - contratos > 1 ANO exigiam HOMOLOGAÇÃO no SINDICATO ou MTb (art. 477, §1º). Reforma (Lei 13.467/17): REVOGOU obrigatoriedade de homologação - empregador pode pagar diretamente ao empregado. Finalidade: DESBUROCRATIZAÇÃO. Sindicato pode assistir voluntariamente. D INCORRETA - homologação NÃO é mais obrigatória após Reforma. A, B, C, E corretas.",
      banca: "FCC",
      ano: 2022,
      cargo: "Auditor Fiscal do Trabalho"
    }
  ],

  // TEMA 9: Estabilidade (10 questões)
  "estabilidade": [
    {
      id: "trabalho-estab-01",
      enunciado: "Sobre o conceito de estabilidade no emprego, é correto afirmar:",
      alternativas: {
        A: "Estabilidade é garantia de emprego vitalício.",
        B: "Estabilidade: garantia temporária ou permanente contra despedida arbitrária ou sem justa causa. ESTABILIDADE DEFINITIVA (decenal - art. 492 CLT): extinta pela CF/88 (art. 7º, I + III - FGTS substituiu). Subsistem apenas ESTABILIDADES PROVISÓRIAS (temporárias) previstas em lei.",
        C: "Estabilidade decenal ainda existe.",
        D: "Não existem mais estabilidades no Brasil.",
        E: "FGTS não substituiu estabilidade."
      },
      gabarito: "B",
      explicacao: "ESTABILIDADE: garantia contra despedida arbitrária/sem justa causa. ESTABILIDADE DEFINITIVA (DECENAL - CLT, art. 492 - após 10 anos): EXTINTA pela CF/88, art. 7º, I (proteção contra despedida arbitrária nos termos de lei complementar - ainda não editada) + III (FGTS em substituição). ESTABILIDADES PROVISÓRIAS (temporárias): subsistem (gestante, acidentado, cipeiro, dirigente sindical, pré-aposentadoria, etc.). B correta. A, C, D, E incorretas.",
      banca: "CESPE",
      ano: 2023,
      cargo: "Auditor Fiscal do Trabalho"
    },
    {
      id: "trabalho-estab-02",
      enunciado: "Em relação à estabilidade da gestante (CF/88, art. 10, II, b ADCT), assinale a alternativa INCORRETA:",
      alternativas: {
        A: "Gestante: estabilidade desde confirmação da gravidez até 5 meses após o parto.",
        B: "Empregador não pode dispensar sem justa causa durante estabilidade.",
        C: "Empregador que desconhece gravidez pode dispensar sem indenização.",
        D: "Súmula 244 TST: estabilidade independe de conhecimento do empregador.",
        E: "Contrato de experiência: Súmula 244, III - gestante tem estabilidade."
      },
      gabarito: "C",
      explicacao: "CF/88, art. 10, II, b ADCT: GESTANTE - ESTABILIDADE desde CONFIRMAÇÃO da gravidez até 5 MESES APÓS o parto. Empregador NÃO pode dispensar sem justa causa. Súmula 244 TST: I) estabilidade INDEPENDE de conhecimento do empregador (se grávida, tem direito); II) confirmação durante aviso prévio (mesmo indenizado): direito à estabilidade; III) contrato de EXPERIÊNCIA/determinado: direito à estabilidade até termo + indenização até 5 meses após parto. C INCORRETA - desconhecimento NÃO exime (Súm. 244). A, B, D, E corretas.",
      banca: "FCC",
      ano: 2023,
      cargo: "Auditor Fiscal do Trabalho"
    },
    {
      id: "trabalho-estab-03",
      enunciado: "Quanto à estabilidade do acidentado (Lei 8.213/91, art. 118), é correto afirmar:",
      alternativas: {
        A: "Acidentado não tem estabilidade.",
        B: "Lei 8.213/91, art. 118: empregado que sofreu ACIDENTE DE TRABALHO tem garantia de emprego (estabilidade) de 12 MESES após CESSAÇÃO do auxílio-doença acidentário (B91). Não se aplica a auxílio-doença comum (B31). Súmula 378 TST: estabilidade mesmo sem percepção de auxílio, se há afastamento > 15 dias.",
        C: "Estabilidade é de 6 meses.",
        D: "Auxílio-doença comum gera estabilidade.",
        E: "Não há estabilidade se não recebeu auxílio."
      },
      gabarito: "B",
      explicacao: "Lei 8.213/91, art. 118: ACIDENTADO - estabilidade de 12 MESES após CESSAÇÃO do AUXÍLIO-DOENÇA ACIDENTÁRIO (B91). Requisito: acidente de TRABALHO (ou doença ocupacional). NÃO se aplica a auxílio comum (B31). Súmula 378 TST, I: estabilidade MESMO SEM percepção de auxílio-doença, se houve afastamento > 15 dias (presume gravidade). II) não se aplica a pedido de demissão. B correta. A, C, D, E incorretas.",
      banca: "VUNESP",
      ano: 2023,
      cargo: "Auditor Fiscal do Trabalho"
    },
    {
      id: "trabalho-estab-04",
      enunciado: "Sobre a estabilidade do dirigente sindical (CF/88, art. 8º, VIII e CLT, art. 543), assinale a alternativa correta:",
      alternativas: {
        A: "Dirigente sindical não tem estabilidade.",
        B: "CF/88, art. 8º, VIII: vedada dispensa do empregado SINDICALIZADO ou ASSOCIAÇÃO PROFISSIONAL desde REGISTRO de candidatura a cargo de direção/representação, até 1 ANO APÓS fim do mandato, salvo justa causa. CLT, art. 543: até 7 titulares + 7 suplentes. Limite: máximo de 7.",
        C: "Estabilidade é de 2 anos após mandato.",
        D: "Só titulares têm estabilidade, suplentes não.",
        E: "Estabilidade se inicia com a eleição."
      },
      gabarito: "B",
      explicacao: "CF/88, art. 8º, VIII: DIRIGENTE SINDICAL - vedada dispensa desde REGISTRO da candidatura até 1 ANO APÓS fim do MANDATO, salvo justa causa. CLT, art. 543: até 7 TITULARES do conselho fiscal/diretoria + igual número de SUPLENTES (total: 14). Súmula 369 TST: suplente só tem estabilidade se assumir a função. OJ 365 TST: estabilidade se inicia no REGISTRO da candidatura. B correta. A, C, D, E incorretas.",
      banca: "FGV",
      ano: 2023,
      cargo: "Auditor Fiscal do Trabalho"
    },
    {
      id: "trabalho-estab-05",
      enunciado: "Em relação à estabilidade do cipeiro (NR-5 e Súmula 339 TST), é INCORRETO afirmar:",
      alternativas: {
        A: "CIPA: Comissão Interna de Prevenção de Acidentes.",
        B: "Cipeiro (membro eleito): estabilidade desde registro de candidatura até 1 ano após fim do mandato.",
        C: "Súmula 339 TST: suplente não tem estabilidade.",
        D: "Estabilidade independe do número de membros da CIPA.",
        E: "Cipeiro indicado pelo empregador não tem estabilidade (só eleito pelos empregados)."
      },
      gabarito: "D",
      explicacao: "NR-5: CIPA - Comissão Interna de Prevenção de Acidentes. ESTABILIDADE: membros ELEITOS pelos empregados (representantes dos empregados) - desde REGISTRO da candidatura até 1 ANO após fim do mandato. Súmula 339 TST: SUPLENTE da CIPA NÃO goza de estabilidade (só titulares). Indicados pelo EMPREGADOR: sem estabilidade. Súmula 676 TST: estabilidade limitada ao número de membros exigido por lei conforme porte da empresa. D INCORRETA - depende do número (Súm. 676). A, B, C, E corretas.",
      banca: "CESPE",
      ano: 2022,
      cargo: "Auditor Fiscal do Trabalho"
    },
    {
      id: "trabalho-estab-06",
      enunciado: "Quanto à estabilidade pré-aposentadoria (CCT), é correto afirmar:",
      alternativas: {
        A: "Estabilidade pré-aposentadoria está na CLT.",
        B: "Estabilidade pré-aposentadoria: NÃO está prevista em lei federal. Pode ser prevista em CONVENÇÕES/ACORDOS COLETIVOS ou regulamento empresarial (norma interna). Comum: empregado a X anos/meses de aposentadoria não pode ser dispensado sem justa causa. Origem: negociação coletiva (categoria).",
        C: "É garantia legal para todos os empregados.",
        D: "Não pode ser prevista em ACT/CCT.",
        E: "Está na Constituição Federal."
      },
      gabarito: "B",
      explicacao: "ESTABILIDADE PRÉ-APOSENTADORIA: NÃO está prevista em LEI FEDERAL (CLT ou CF). Origem: CONVENÇÕES/ACORDOS COLETIVOS (ACT/CCT) ou REGULAMENTO EMPRESARIAL (norma interna da empresa). Conteúdo comum: empregado a X anos/meses da aposentadoria não pode ser dispensado sem justa causa (ex: 2 anos antes de se aposentar). Benefício: negociação coletiva (categoria). B correta. A, C, D, E incorretas.",
      banca: "FCC",
      ano: 2023,
      cargo: "Auditor Fiscal do Trabalho"
    },
    {
      id: "trabalho-estab-07",
      enunciado: "Sobre as consequências da dispensa durante a estabilidade, assinale a alternativa INCORRETA:",
      alternativas: {
        A: "Dispensa durante estabilidade provisória: nula (não produz efeitos).",
        B: "Empregado pode optar entre: reintegração ao emprego ou indenização (salários do período estável + outras verbas).",
        C: "Reintegração: preferência (Súmula 396 TST - dirigente sindical).",
        D: "Empregador pode sempre dispensar mediante indenização, sem possibilidade de reintegração.",
        E: "Justa causa afasta a estabilidade."
      },
      gabarito: "D",
      explicacao: "DISPENSA durante ESTABILIDADE: NULA (não produz efeitos). CONSEQUÊNCIAS: 1) REINTEGRAÇÃO ao emprego (regra - empregado volta a trabalhar); 2) INDENIZAÇÃO do período estável (se reintegração impossível ou empregado preferir - salários + verbas do período). Súmula 396 TST (dirigente sindical): PREFERÊNCIA pela reintegração. JUSTA CAUSA: afasta estabilidade (pode dispensar). D INCORRETA - empregador NÃO pode sempre dispensar só com indenização (reintegração é regra). A, B, C, E corretas.",
      banca: "VUNESP",
      ano: 2022,
      cargo: "Auditor Fiscal do Trabalho"
    },
    {
      id: "trabalho-estab-08",
      enunciado: "Em relação à estabilidade em contratos por prazo determinado, é correto afirmar:",
      alternativas: {
        A: "Contratos por prazo determinado nunca têm estabilidade.",
        B: "Súmula 244, III TST (gestante) e jurisprudência: estabilidades PROVISÓRIAS (gestante, acidentado) aplicam-se a contratos por PRAZO DETERMINADO. Gestante: direito até termo + indenização até 5 meses após parto. Acidentado: indenização do período estável. Término natural: sem estabilidade além do termo.",
        C: "Gestante em contrato determinado não tem estabilidade.",
        D: "Acidentado em experiência não tem estabilidade.",
        E: "Estabilidade se estende além do termo do contrato sempre."
      },
      gabarito: "B",
      explicacao: "ESTABILIDADE em PRAZO DETERMINADO: Súmula 244, III TST: GESTANTE em contrato de EXPERIÊNCIA/determinado tem direito à estabilidade. Indenização: salários até termo + indenização até 5 meses após parto. ACIDENTADO: jurisprudência - direito à indenização do período estável (se término do contrato durante estabilidade). Término NATURAL no prazo: sem estabilidade além do termo (mas indenizações devidas se dentro do período estável). B correta. A, C, D, E incorretas.",
      banca: "FGV",
      ano: 2023,
      cargo: "Auditor Fiscal do Trabalho"
    },
    {
      id: "trabalho-estab-09",
      enunciado: "Quanto à estabilidade do empregado eleito diretor de cooperativa (Lei 5.764/71, art. 55), assinale a alternativa correta:",
      alternativas: {
        A: "Diretor de cooperativa não tem estabilidade.",
        B: "Lei 5.764/71, art. 55: empregado de empresa que seja ELEITO DIRETOR de COOPERATIVA de empregados da empresa tem garantia de emprego (estabilidade) durante mandato. Finalidade: proteção da atividade sindical/associativa. Não se confunde com dirigente sindical.",
        C: "Estabilidade é só para dirigente sindical, não para cooperativa.",
        D: "Lei não prevê estabilidade para diretor de cooperativa.",
        E: "Estabilidade dura 1 ano após o mandato."
      },
      gabarito: "B",
      explicacao: "Lei 5.764/71, art. 55: DIRETOR DE COOPERATIVA - empregado de empresa que seja ELEITO diretor de COOPERATIVA de empregados dessa empresa: garantia de emprego DURANTE o MANDATO. Proteção semelhante à do dirigente sindical (mas legislação específica). NÃO se confunde com estabilidade sindical (CF, art. 8º, VIII). B correta. A, C, D, E incorretas.",
      banca: "CESPE",
      ano: 2023,
      cargo: "Auditor Fiscal do Trabalho"
    },
    {
      id: "trabalho-estab-10",
      enunciado: "Sobre a estabilidade do representante dos empregados (Lei 10.101/2000, art. 3º), é INCORRETO afirmar:",
      alternativas: {
        A: "Empresas com mais de 200 empregados: eleição de representante dos empregados.",
        B: "Representante eleito: estabilidade desde registro de candidatura até 1 ano após fim do mandato.",
        C: "Representante é eleito pelos empregados para tratar de PLR e outros assuntos.",
        D: "Estabilidade se aplica a empresas de qualquer porte.",
        E: "Finalidade: proteção da atividade representativa."
      },
      gabarito: "D",
      explicacao: "Lei 10.101/2000 (PLR), art. 3º: empresas com MAIS DE 200 EMPREGADOS - eleição de REPRESENTANTE DOS EMPREGADOS (comissão de empregados para negociar PLR e outros). §1º: estabilidade desde REGISTRO da candidatura até 1 ANO após FIM do mandato. Proteção: atividade representativa (negociação coletiva descentralizada). D INCORRETA - só empresas com MAIS DE 200 empregados (não qualquer porte). A, B, C, E corretas.",
      banca: "FCC",
      ano: 2022,
      cargo: "Auditor Fiscal do Trabalho"
    }
  ]
};
