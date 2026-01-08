// Questões de Direito do Trabalho - TEMAS 4-6 (30 questões)
// Área Jurídica - Direito do Trabalho

export const questionsTrabalho2 = {
  // TEMA 4: Salário e Remuneração (10 questões)
  "salario-e-remuneracao": [
    {
      id: "trabalho-salario-01",
      enunciado: "Sobre o conceito de salário e remuneração (CLT, art. 457), é correto afirmar:",
      alternativas: {
        A: "Salário e remuneração são sinônimos.",
        B: "Salário: contraprestação paga diretamente pelo EMPREGADOR. Remuneração: salário + gorjetas/outras vantagens pagas por TERCEIROS. Art. 457: remuneração compreende salário (fixo ou variável) + gorjetas. Princípio da integralidade salarial.",
        C: "Gorjetas não integram a remuneração.",
        D: "Remuneração não inclui comissões.",
        E: "Salário só pode ser fixo."
      },
      gabarito: "B",
      explicacao: "CLT, art. 457: SALÁRIO: contraprestação devida e paga diretamente pelo EMPREGADOR ao empregado (fixo, variável ou misto). REMUNERAÇÃO: salário + gorjetas + outras vantagens. §3º: GORJETAS (pagas por terceiros/clientes): integram remuneração, não se confundem com salário. Salário: fixo (mensal/quinzenal), variável (comissão, produção, tarefa) ou misto. B correta. A, C, D, E incorretas.",
      banca: "CESPE",
      ano: 2023,
      cargo: "Auditor Fiscal do Trabalho"
    },
    {
      id: "trabalho-salario-02",
      enunciado: "Em relação ao salário mínimo (CF/88, art. 7º, IV e Lei 14.663/23), assinale a alternativa INCORRETA:",
      alternativas: {
        A: "Salário mínimo: fixado em lei, nacionalmente unificado, reajuste periódico.",
        B: "CF/88: capaz de atender necessidades vitais básicas (moradia, alimentação, educação, saúde, lazer, vestuário, higiene, transporte, previdência).",
        C: "Vedada vinculação ao salário mínimo para qualquer fim.",
        D: "Estados podem fixar piso salarial estadual superior ao nacional.",
        E: "Salário mínimo é igual em todos os estados."
      },
      gabarito: "E",
      explicacao: "CF/88, art. 7º, IV: SALÁRIO MÍNIMO fixado em LEI, nacionalmente UNIFICADO, capaz de atender necessidades vitais básicas (moradia, alimentação, educação, saúde, lazer, vestuário, higiene, transporte, previdência social). Reajuste periódico preserva poder aquisitivo. §único: VEDADA vinculação para qualquer fim (salvo aposentadorias/pensões). CF, art. 7º, V: PISO SALARIAL proporcional à extensão/complexidade - Estados podem fixar piso ESTADUAL superior ao mínimo nacional. E INCORRETA - estados podem ter pisos maiores. A, B, C, D corretas.",
      banca: "FCC",
      ano: 2023,
      cargo: "Auditor Fiscal do Trabalho"
    },
    {
      id: "trabalho-salario-03",
      enunciado: "Quanto às formas de pagamento do salário, é correto afirmar:",
      alternativas: {
        A: "Salário pode ser pago em utilidades (in natura) sem limitação.",
        B: "CLT, art. 458: salário pode ser pago em dinheiro e/ou utilidades. Utilidades: alimentação, habitação, vestuário. Limite: 30% em utilidades para empregados urbanos. Alimentação, habitação, transporte, assistência médica: NÃO integram salário (§2º, Reforma - Lei 13.467/17).",
        C: "Salário só pode ser pago em dinheiro.",
        D: "Utilidades sempre integram o salário.",
        E: "Não há limite para pagamento em utilidades."
      },
      gabarito: "B",
      explicacao: "CLT, art. 458: salário pode ser pago em DINHEIRO e/ou UTILIDADES (in natura). UTILIDADES: alimentação, habitação, vestuário, higiene, transporte. Limite: máx. 30% em utilidades (urbano), 20% alimentação, 25% habitação. §2º (Lei 13.467/17): alimentação, habitação, transporte, assistência médica/odontológica, seguros, previdência privada, educação fornecidos por LIBERALIDADE: NÃO integram salário. B correta. A, C, D, E incorretas.",
      banca: "VUNESP",
      ano: 2023,
      cargo: "Auditor Fiscal do Trabalho"
    },
    {
      id: "trabalho-salario-04",
      enunciado: "Sobre o princípio da irredutibilidade salarial (CF/88, art. 7º, VI), assinale a alternativa correta:",
      alternativas: {
        A: "Salário pode ser reduzido livremente pelo empregador.",
        B: "CF/88, art. 7º, VI: irredutibilidade salarial, SALVO negociação coletiva (ACT/CCT). CLT, art. 468: alteração só se não causar prejuízo. Redução só por ACT/CCT, temporária, justificada (crise econômica). Súmula 277 TST: válida se emergencial e temporária.",
        C: "Irredutibilidade é absoluta.",
        D: "Acordo individual pode reduzir salário.",
        E: "Redução salarial é sempre ilícita."
      },
      gabarito: "B",
      explicacao: "CF/88, art. 7º, VI: IRREDUTIBILIDADE salarial, SALVO o disposto em CONVENÇÃO ou ACORDO COLETIVO (exceção constitucional). CLT, art. 468: alterações só se não prejudicarem. Redução: só por ACT/CCT, deve ser TEMPORÁRIA, justificada (crise, dificuldade econômica), compensada (ex: redução jornada + salário proporcionalmente). Súmula 277 TST: sentença normativa válida se emergencial e temporária. Acordo INDIVIDUAL: não pode reduzir. B correta. A, C, D, E incorretas.",
      banca: "FGV",
      ano: 2023,
      cargo: "Auditor Fiscal do Trabalho"
    },
    {
      id: "trabalho-salario-05",
      enunciado: "Em relação às comissões e percentagens (CLT, art. 466), é INCORRETO afirmar:",
      alternativas: {
        A: "Comissões: salário variável, calculado sobre vendas, produção ou negócios.",
        B: "Empregado comissionista: direito a comissões sobre negócios realizados durante contrato.",
        C: "Comissões são devidas quando negócio é efetivado, ainda que não seja executado.",
        D: "Rescisão: comissões ainda não pagas são devidas.",
        E: "Comissionista não tem direito a salário mínimo mensal."
      },
      gabarito: "E",
      explicacao: "CLT, art. 466: empregado que trabalha mediante COMISSÕES (percentagens): tem direito a comissões sobre NEGÓCIOS EFETIVADOS durante vigência do contrato, AINDA QUE não executados/pagos (bastando efetivação). Art. 467: rescisão - comissões VENCIDAS e não pagas são devidas. Súmula 340 TST: comissionista tem direito a receber, em cada mês, remuneração NÃO INFERIOR ao SALÁRIO MÍNIMO. E INCORRETA - tem direito a mínimo mensal. A, B, C, D corretas.",
      banca: "CESPE",
      ano: 2022,
      cargo: "Auditor Fiscal do Trabalho"
    },
    {
      id: "trabalho-salario-06",
      enunciado: "Quanto ao 13º salário (Lei 4.090/62 e 4.749/65), é correto afirmar:",
      alternativas: {
        A: "13º salário não é garantia constitucional.",
        B: "CF/88, art. 7º, VIII: 13º salário com base na remuneração integral ou aposentadoria. Pago em 2 parcelas: 1ª até 30/11 (metade da remuneração), 2ª até 20/12 (saldo). Cálculo: 1/12 da remuneração por mês trabalhado (fração ≥ 15 dias = mês). Rescisão: 13º proporcional.",
        C: "13º salário é pago em parcela única.",
        D: "Cálculo é sobre salário fixo, não remuneração.",
        E: "Fração inferior a 15 dias conta como mês."
      },
      gabarito: "B",
      explicacao: "CF/88, art. 7º, VIII: DÉCIMO TERCEIRO SALÁRIO com base na remuneração INTEGRAL ou aposentadoria. Lei 4.090/62 e 4.749/65: PARCELAS - 1ª até 30 NOVEMBRO (metade remuneração, pode antecipar em férias), 2ª até 20 DEZEMBRO (saldo). CÁLCULO: 1/12 da remuneração por mês trabalhado (fração ≥ 15 DIAS = mês inteiro; < 15 dias: não conta). Rescisão: 13º proporcional. B correta. A, C, D, E incorretas.",
      banca: "FCC",
      ano: 2023,
      cargo: "Auditor Fiscal do Trabalho"
    },
    {
      id: "trabalho-salario-07",
      enunciado: "Sobre o adicional de insalubridade (CLT, art. 189-192 e NR-15), assinale a alternativa INCORRETA:",
      alternativas: {
        A: "Insalubridade: atividades que expõem a agentes nocivos à saúde acima dos limites de tolerância.",
        B: "Graus: mínimo (10%), médio (20%), máximo (40%) sobre salário mínimo.",
        C: "Perícia obrigatória para caracterização.",
        D: "Base de cálculo: salário mínimo (Súmula 228 TST).",
        E: "Fornecimento de EPI elimina insalubridade se neutralizar o agente."
      },
      gabarito: "D",
      explicacao: "CLT, art. 189-192: INSALUBRIDADE: operações que expõem a agentes NOCIVOS à saúde, acima limites de tolerância (NR-15). GRAUS: MÍNIMO 10%, MÉDIO 20%, MÁXIMO 40%. Art. 195: caracterização por PERÍCIA. BASE CÁLCULO: Súmula 228 TST - salário mínimo (mas STF ADI declarou inconstitucional base em SM - pendente definição). Art. 191: eliminação do risco com fornecimento EPI eficaz: cessa adicional. D INCORRETA após STF - inconstitucional SM como base. A, B, C, E corretas.",
      banca: "VUNESP",
      ano: 2022,
      cargo: "Auditor Fiscal do Trabalho"
    },
    {
      id: "trabalho-salario-08",
      enunciado: "Em relação ao adicional de periculosidade (CLT, art. 193), é correto afirmar:",
      alternativas: {
        A: "Periculosidade: atividades com risco acentuado.",
        B: "Adicional: 30% sobre salário base (não salário mínimo). Hipóteses NR-16: inflamáveis, explosivos, energia elétrica, roubos, radiações ionizantes, motocicleta (Lei 12.997/14). Perícia para caracterização. Incompatível com insalubridade (empregado escolhe um).",
        C: "Adicional de periculosidade é de 40%.",
        D: "Pode cumular com insalubridade.",
        E: "Base de cálculo é o salário mínimo."
      },
      gabarito: "B",
      explicacao: "CLT, art. 193: PERICULOSIDADE: atividades com contato permanente com inflamáveis, explosivos, energia elétrica (NR-16), roubos/violência física (vigilância - Lei 12.740/12), radiações ionizantes, motocicleta (Lei 12.997/14). ADICIONAL: 30% sobre SALÁRIO BASE (não SM). Perícia: caracterização. §2º: empregado sujeito a insalubridade E periculosidade: pode optar por UM (não cumula). B correta. A (incompleta), C, D, E incorretas.",
      banca: "FGV",
      ano: 2023,
      cargo: "Auditor Fiscal do Trabalho"
    },
    {
      id: "trabalho-salario-09",
      enunciado: "Quanto ao princípio da equiparação salarial (CLT, art. 461), assinale a alternativa correta:",
      alternativas: {
        A: "Equiparação salarial não está prevista na CLT.",
        B: "CLT, art. 461 (Reforma - Lei 13.467/17): trabalho de igual valor (mesma função, produtividade, perfeição técnica) para mesmo empregador, mesma localidade: salário igual. Requisitos: mesma função, mesmo empregador, mesma localidade (mesmo município ou região metropolitana), diferença de tempo na função ≤ 4 anos, diferença de tempo no empregador ≤ 2 anos.",
        C: "Basta mesma função para equiparação.",
        D: "Diferença de tempo de serviço não importa.",
        E: "Localidade abrange todo o estado."
      },
      gabarito: "B",
      explicacao: "CLT, art. 461 (redação Lei 13.467/17 - Reforma): EQUIPARAÇÃO SALARIAL - trabalho de IGUAL VALOR (mesma produtividade, perfeição técnica) para mesmo EMPREGADOR, mesma LOCALIDADE. REQUISITOS: 1) mesma FUNÇÃO; 2) mesmo EMPREGADOR; 3) mesma LOCALIDADE (§1º: mesmo município ou região metropolitana); 4) diferença tempo na FUNÇÃO ≤ 4 ANOS; 5) diferença tempo no EMPREGADOR ≤ 2 ANOS; 6) trabalho contemporâneo. Quadro de carreira: afasta equiparação. B correta. A, C, D, E incorretas.",
      banca: "CESPE",
      ano: 2023,
      cargo: "Auditor Fiscal do Trabalho"
    },
    {
      id: "trabalho-salario-10",
      enunciado: "Sobre a proteção ao salário (CLT, art. 462-465), é INCORRETO afirmar:",
      alternativas: {
        A: "Salário deve ser pago em moeda corrente do país.",
        B: "Prazo: pagamento até 5º dia útil do mês subsequente.",
        C: "Descontos permitidos: previdência, imposto de renda, pensão alimentícia, adiantamentos.",
        D: "Proibido desconto a título de dano causado pelo empregado.",
        E: "Mora salarial: correção monetária e juros (Súmula 381 TST)."
      },
      gabarito: "D",
      explicacao: "CLT, art. 462-465: PROTEÇÃO AO SALÁRIO. Art. 459: pagamento até 5º DIA ÚTIL mês subsequente. Art. 462: proibido descontos, SALVO: adiantamentos, dispositivos legais (INSS, IR, pensão alimentícia), ACT/CCT. §1º (Lei 13.467/17): PERMITE desconto por DANO causado pelo empregado se houver DOLO. Art. 463: mora salarial - correção monetária + juros (Súmula 381 TST). Moeda corrente: regra (art. 463). D INCORRETA - Lei 13.467/17 PERMITE desconto por dano se dolo. A, B, C, E corretas.",
      banca: "FCC",
      ano: 2022,
      cargo: "Auditor Fiscal do Trabalho"
    }
  ],

  // TEMA 5: Férias (10 questões)
  "ferias": [
    {
      id: "trabalho-ferias-01",
      enunciado: "Sobre o direito a férias (CLT, art. 129-153 e CF/88, art. 7º, XVII), é correto afirmar:",
      alternativas: {
        A: "Férias não são garantia constitucional.",
        B: "CF/88, art. 7º, XVII: férias anuais remuneradas com, pelo menos, 1/3 a mais que salário normal. CLT: após cada período de 12 meses de vigência do contrato (período aquisitivo), empregado tem direito a férias (período concessivo: 12 meses seguintes).",
        C: "Férias são de 15 dias.",
        D: "Não há adicional de 1/3 constitucional.",
        E: "Período aquisitivo é de 24 meses."
      },
      gabarito: "B",
      explicacao: "CF/88, art. 7º, XVII: FÉRIAS anuais remuneradas com, PELO MENOS, UM TERÇO a mais do que o salário normal. CLT, art. 129-153: após cada período de 12 MESES de vigência do contrato de trabalho (PERÍODO AQUISITIVO), empregado adquire direito a férias. CONCESSÃO: nos 12 meses subsequentes (PERÍODO CONCESSIVO). Duração: depende faltas (art. 130). B correta. A, C, D, E incorretas.",
      banca: "CESPE",
      ano: 2023,
      cargo: "Auditor Fiscal do Trabalho"
    },
    {
      id: "trabalho-ferias-02",
      enunciado: "Em relação à duração das férias (CLT, art. 130 e 130-A), assinale a alternativa INCORRETA:",
      alternativas: {
        A: "Férias de 30 dias corridos se não houver mais de 5 faltas injustificadas no período aquisitivo.",
        B: "6 a 14 faltas: 24 dias. 15 a 23 faltas: 18 dias. 24 a 32 faltas: 12 dias corridos.",
        C: "Mais de 32 faltas injustificadas: perde o direito a férias do período aquisitivo.",
        D: "Regime de tempo parcial (≤ 30h/semana): mesmas regras após Reforma (Lei 13.467/17).",
        E: "Faltas justificadas não reduzem as férias."
      },
      gabarito: "D",
      explicacao: "CLT, art. 130: DURAÇÃO DAS FÉRIAS (faltas INJUSTIFICADAS no período aquisitivo): até 5 faltas = 30 DIAS; 6-14 faltas = 24 dias; 15-23 faltas = 18 dias; 24-32 faltas = 12 dias; MAIS de 32 faltas = PERDE DIREITO às férias daquele período. Art. 130-A (Lei 13.467/17): regime TEMPO PARCIAL (≤ 30h): IGUALOU às mesmas regras do tempo integral (antes era diferenciado por jornada). Faltas JUSTIFICADAS: não reduzem. D INCORRETA - Reforma IGUALOU (antes era diferente). A, B, C, E corretas.",
      banca: "FCC",
      ano: 2023,
      cargo: "Auditor Fiscal do Trabalho"
    },
    {
      id: "trabalho-ferias-03",
      enunciado: "Quanto à época de concessão das férias (CLT, art. 134-136), é correto afirmar:",
      alternativas: {
        A: "Empregado escolhe quando tirar férias.",
        B: "Empregador escolhe época de concessão (dentro do período concessivo de 12 meses após aquisição). Art. 134: comunicar empregado com 30 dias de antecedência. Art. 136: época deve atender interesses do empregador. Estudante menor de 18: pode coincidir com férias escolares.",
        C: "Férias podem ser concedidas a qualquer tempo, sem limite.",
        D: "Comunicação deve ser feita com 15 dias de antecedência.",
        E: "Interesses do empregado prevalecem sobre empregador."
      },
      gabarito: "B",
      explicacao: "CLT, art. 134: época de concessão: conveniência do EMPREGADOR (em regra), dentro dos 12 meses do PERÍODO CONCESSIVO. Art. 135: comunicar empregado com 30 DIAS de ANTECEDÊNCIA. Art. 136: época que melhor atenda aos interesses do empregador. §1º: membros de mesma família podem gozar simultaneamente. §2º: menor de 18 ESTUDANTE: pode fazer coincidir com férias ESCOLARES. B correta. A, C, D, E incorretas.",
      banca: "VUNESP",
      ano: 2023,
      cargo: "Auditor Fiscal do Trabalho"
    },
    {
      id: "trabalho-ferias-04",
      enunciado: "Sobre o fracionamento de férias (CLT, art. 134, §1º - Reforma Lei 13.467/17), assinale a alternativa correta:",
      alternativas: {
        A: "Férias não podem ser fracionadas.",
        B: "Reforma (Lei 13.467/17), art. 134, §1º: férias podem ser fracionadas em até 3 PERÍODOS (antes: 2 períodos excepcionais). Requisitos: um período não pode ser inferior a 14 dias corridos, demais não podem ser inferiores a 5 dias corridos. Menores de 18 e maiores de 50 anos: vedado fracionamento (mantido).",
        C: "Férias podem ser divididas em 5 períodos.",
        D: "Período mínimo é de 10 dias.",
        E: "Maiores de 50 anos podem fracionar."
      },
      gabarito: "B",
      explicacao: "CLT, art. 134, §1º (redação Lei 13.467/17 - Reforma): férias podem ser fracionadas em até 3 PERÍODOS (novidade). REQUISITOS: 1) um período NÃO pode ser inferior a 14 DIAS CORRIDOS; 2) demais NÃO podem ser inferiores a 5 DIAS CORRIDOS cada um. §2º: VEDADO fracionamento para MENORES de 18 e MAIORES de 50 anos (mantida vedação). §3º: vedado início no período de 2 dias que antecede feriado ou DSR. B correta. A, C, D, E incorretas.",
      banca: "FGV",
      ano: 2023,
      cargo: "Auditor Fiscal do Trabalho"
    },
    {
      id: "trabalho-ferias-05",
      enunciado: "Em relação ao pagamento das férias (CLT, art. 145), é INCORRETO afirmar:",
      alternativas: {
        A: "Pagamento: até 2 dias antes do início das férias.",
        B: "Valor: remuneração do período + 1/3 constitucional.",
        C: "Horas extras habituais integram férias (Súmula 151 TST).",
        D: "Pagamento pode ser feito após o retorno das férias.",
        E: "Não pagamento no prazo: dobra a remuneração de férias (art. 137)."
      },
      gabarito: "D",
      explicacao: "CLT, art. 145: PAGAMENTO DAS FÉRIAS deve ser efetuado até 2 DIAS ANTES do início do período de gozo. Valor: remuneração que seria devida nos dias correspondentes + 1/3 CONSTITUCIONAL. Súmula 151 TST: adicional de 1/3 incide sobre horas extras habituais. Art. 137: NÃO concessão de férias no prazo ou NÃO pagamento no prazo: empregador paga em DOBRO a remuneração. D INCORRETA - pagamento é ANTES, não depois. A, B, C, E corretas.",
      banca: "CESPE",
      ano: 2022,
      cargo: "Auditor Fiscal do Trabalho"
    },
    {
      id: "trabalho-ferias-06",
      enunciado: "Quanto ao abono pecuniário de férias (CLT, art. 143), é correto afirmar:",
      alternativas: {
        A: "Abono pecuniário é obrigatório.",
        B: "Abono pecuniário (venda de férias): empregado pode converter 1/3 das férias em abono pecuniário (vender até 10 dias). Faculdade do empregado (direito potestativo). Pedido: até 15 dias antes do término do período aquisitivo. Valor: remuneração devida nos dias + 1/3.",
        C: "Empregado pode vender todas as férias.",
        D: "Empregador pode recusar o abono.",
        E: "Prazo de pedido é de 30 dias antes do fim do aquisitivo."
      },
      gabarito: "B",
      explicacao: "CLT, art. 143: ABONO PECUNIÁRIO ('venda de férias'): empregado pode converter até 1/3 do período de férias a que tiver direito em ABONO PECUNIÁRIO (vender até 10 dias de 30). NATUREZA: faculdade do EMPREGADO (direito potestativo - empregador não pode recusar). Pedido: até 15 DIAS antes do término do PERÍODO AQUISITIVO. Valor: remuneração dos dias correspondentes + 1/3. B correta. A, C, D, E incorretas.",
      banca: "FCC",
      ano: 2023,
      cargo: "Auditor Fiscal do Trabalho"
    },
    {
      id: "trabalho-ferias-07",
      enunciado: "Sobre as férias coletivas (CLT, art. 139-141), assinale a alternativa INCORRETA:",
      alternativas: {
        A: "Férias coletivas: concedidas simultaneamente a todos os empregados ou setores da empresa.",
        B: "Podem ser gozadas em 2 períodos anuais, nenhum inferior a 10 dias corridos.",
        C: "Empregador deve comunicar ao órgão local do MTb e ao sindicato com 15 dias de antecedência.",
        D: "Empregados com menos de 12 meses: gozam férias proporcionais, iniciando novo período aquisitivo.",
        E: "Menores de 18 anos não podem ter férias coletivas."
      },
      gabarito: "E",
      explicacao: "CLT, art. 139-141: FÉRIAS COLETIVAS: concedidas SIMULTANEAMENTE a todos empregados ou determinados estabelecimentos/setores. Art. 139: podem ser gozadas em 2 PERÍODOS anuais (desde que nenhum seja inferior a 10 DIAS CORRIDOS). Art. 139, §2º: comunicação ao MTb e SINDICATO com 15 DIAS de antecedência (afixar avisos). Art. 140: empregados com < 12 meses: gozam férias PROPORCIONAIS, iniciando NOVO período aquisitivo. E INCORRETA - menores SIM podem (não há vedação). A, B, C, D corretas.",
      banca: "VUNESP",
      ano: 2022,
      cargo: "Auditor Fiscal do Trabalho"
    },
    {
      id: "trabalho-ferias-08",
      enunciado: "Em relação à perda do direito a férias (CLT, art. 133), é correto afirmar:",
      alternativas: {
        A: "Empregado nunca perde direito a férias.",
        B: "Art. 133: perde direito a férias do período aquisitivo: I) deixar emprego e não for readmitido em 60 dias; II) permanecer em gozo de licença remunerada por mais de 30 dias; III) deixar de trabalhar com percepção de salário por mais de 30 dias (auxílio-doença/acidente após 6 meses); IV) mais de 32 faltas injustificadas.",
        C: "Licença remunerada sempre mantém férias.",
        D: "Auxílio-doença nunca afeta férias.",
        E: "Readmissão em 90 dias mantém período aquisitivo."
      },
      gabarito: "B",
      explicacao: "CLT, art. 133: NÃO terá direito a férias o empregado que: I) deixar o emprego e não for READMITIDO dentro de 60 DIAS; II) permanecer em gozo de licença REMUNERADA por MAIS de 30 dias; III) deixar de trabalhar, com percepção de salário, por MAIS de 30 dias (ex: auxílio-doença/acidente após 6 MESES - interrompe, inicia novo período); IV) tiver mais de 32 FALTAS INJUSTIFICADAS (art. 130). B correta. A, C, D, E incorretas.",
      banca: "FGV",
      ano: 2023,
      cargo: "Auditor Fiscal do Trabalho"
    },
    {
      id: "trabalho-ferias-09",
      enunciado: "Quanto às férias na rescisão contratual, assinale a alternativa correta:",
      alternativas: {
        A: "Rescisão: empregado não recebe férias.",
        B: "Rescisão: empregado recebe férias VENCIDAS (não gozadas do período concessivo) em DOBRO + 1/3, e férias PROPORCIONAIS (período aquisitivo incompleto) simples + 1/3. Perda das proporcionais: se pedido de demissão antes de 12 meses (art. 146, §ú - revogado tácito por Súmula 261 TST - proporcional é sempre devida).",
        C: "Férias vencidas são pagas em valor simples.",
        D: "Não há férias proporcionais na rescisão.",
        E: "Pedido de demissão sempre perde férias proporcionais."
      },
      gabarito: "B",
      explicacao: "RESCISÃO CONTRATUAL - FÉRIAS: 1) VENCIDAS (não gozadas no período concessivo): pagas em DOBRO + 1/3 (art. 137). 2) PROPORCIONAIS (período aquisitivo incompleto): pagas SIMPLES + 1/3 (avos: 1/12 por mês ou fração ≥ 15 dias). Art. 146, §ú: pedido de demissão antes de completar 12 meses = perde proporcionais (REVOGADO tácito - Súmula 261 TST: proporcionais SEMPRE devidas). Justa causa: perde vencidas e proporcionais. B correta. A, C, D, E incorretas.",
      banca: "CESPE",
      ano: 2023,
      cargo: "Auditor Fiscal do Trabalho"
    },
    {
      id: "trabalho-ferias-10",
      enunciado: "Sobre a prescrição do direito de férias (CLT, art. 149), é INCORRETO afirmar:",
      alternativas: {
        A: "Prescrição total: 5 anos para empregado urbano/rural (após rescisão, até limite 2 anos - CF, art. 7º, XXIX).",
        B: "Prescrição bienal: conta da rescisão (2 anos para ajuizar).",
        C: "Prescrição quinquenal: atinge férias vencidas há mais de 5 anos (durante o contrato).",
        D: "Prescrição do direito de férias é de 10 anos.",
        E: "Súmula 149 TST: prescrição bienal após rescisão, quinquenal para parcelas vencidas."
      },
      gabarito: "D",
      explicacao: "PRESCRIÇÃO - FÉRIAS: CF/88, art. 7º, XXIX: I) BIENAL (2 anos): conta da RESCISÃO do contrato (prazo para ajuizar); II) QUINQUENAL (5 anos): atinge parcelas VENCIDAS há mais de 5 anos (durante vigência contrato). CLT, art. 149: aplicam-se regras gerais de prescrição. Súmula 149 TST: confirmação. Férias não gozadas: exigíveis em dobro (art. 137). D INCORRETA - prescrição é 2 anos (bienal) e 5 anos (quinquenal), não 10. A, B, C, E corretas.",
      banca: "FCC",
      ano: 2022,
      cargo: "Auditor Fiscal do Trabalho"
    }
  ],

  // TEMA 6: FGTS - Fundo de Garantia do Tempo de Serviço (10 questões)
  "fgts": [
    {
      id: "trabalho-fgts-01",
      enunciado: "Sobre o FGTS - Fundo de Garantia do Tempo de Serviço (Lei 8.036/90 e CF/88, art. 7º, III), é correto afirmar:",
      alternativas: {
        A: "FGTS é facultativo para o empregador.",
        B: "CF/88, art. 7º, III: FGTS. Lei 8.036/90: depósito mensal de 8% da remuneração na conta vinculada do trabalhador (Caixa Econômica Federal). Obrigatório para todos os empregados urbanos, rurais, temporários, avulsos, domésticos (LC 150/2015). Diretor não-empregado: facultativo.",
        C: "FGTS é de 10% da remuneração.",
        D: "Doméstico não tem direito a FGTS.",
        E: "Depósito é trimestral."
      },
      gabarito: "B",
      explicacao: "CF/88, art. 7º, III: FGTS. Lei 8.036/90: empregador deposita MENSALMENTE 8% da REMUNERAÇÃO (salário + outras verbas remuneratórias) na conta vinculada do trabalhador na CAIXA. OBRIGATÓRIO: empregados URBANOS, RURAIS, TEMPORÁRIOS, AVULSOS, INTERMITENTES, DOMÉSTICOS (LC 150/2015). Diretor NÃO-EMPREGADO: depósito é FACULTATIVO. Aprendiz: 2%. B correta. A, C, D, E incorretas.",
      banca: "CESPE",
      ano: 2023,
      cargo: "Auditor Fiscal do Trabalho"
    },
    {
      id: "trabalho-fgts-02",
      enunciado: "Em relação às hipóteses de saque do FGTS (Lei 8.036/90, art. 20), assinale a alternativa INCORRETA:",
      alternativas: {
        A: "Despedida sem justa causa, culpa recíproca ou força maior.",
        B: "Rescisão por acordo entre empregado e empregador (Lei 13.467/17): saque de 80%.",
        C: "Aposentadoria, falecimento do trabalhador (dependentes), doenças graves (câncer, AIDS, etc.).",
        D: "Aquisição de casa própria, calamidade pública, suspensão do trabalho avulso por 90 dias.",
        E: "Pedido de demissão permite saque integral do FGTS."
      },
      gabarito: "E",
      explicacao: "Lei 8.036/90, art. 20: HIPÓTESES DE SAQUE: I) despedida SEM JUSTA CAUSA; II) rescisão por ACORDO (Lei 13.467/17): 80%; III) culpa recíproca ou força maior (reconhecida Justiça Trabalho); IV) aposentadoria; V) falecimento (dependentes); VI) idade 70+ anos; VII) doenças graves (câncer, AIDS, estágio terminal); VIII) moradia própria; IX) calamidade pública; X) suspensão trabalho avulso 90+ dias; XI) saque-aniversário. PEDIDO DE DEMISSÃO: NÃO permite saque (saldo permanece). E INCORRETA. A, B, C, D corretas.",
      banca: "FCC",
      ano: 2023,
      cargo: "Auditor Fiscal do Trabalho"
    },
    {
      id: "trabalho-fgts-03",
      enunciado: "Quanto à multa do FGTS na rescisão sem justa causa (Lei 8.036/90, art. 18), é correto afirmar:",
      alternativas: {
        A: "Multa do FGTS é de 20%.",
        B: "Despedida sem justa causa: empregador paga multa de 40% sobre saldo de TODOS os depósitos de FGTS (conta vinculada + correção + juros), revertida ao empregado. Lei Complementar 110/2001: + 10% União (total 50% - contribuição social). Rescisão por acordo (Lei 13.467/17): multa 20%.",
        C: "Rescisão por acordo tem multa de 40%.",
        D: "Multa não é revertida ao empregado.",
        E: "Pedido de demissão tem multa de 40%."
      },
      gabarito: "B",
      explicacao: "Lei 8.036/90, art. 18: despedida SEM JUSTA CAUSA: empregador deposita MULTA de 40% sobre TODOS os depósitos de FGTS realizados durante contrato (saldo conta vinculada + correção + juros), revertidos ao EMPREGADO. LC 110/2001, art. 1º: contribuição social adicional de 10% União (total: empregador paga 50%, sendo 40% ao trabalhador, 10% União). Lei 13.467/17, art. 484-A: rescisão por ACORDO - multa 20%. Pedido demissão/justa causa: sem multa. B correta. A, C, D, E incorretas.",
      banca: "VUNESP",
      ano: 2023,
      cargo: "Auditor Fiscal do Trabalho"
    },
    {
      id: "trabalho-fgts-04",
      enunciado: "Sobre a rescisão por acordo mútuo e o FGTS (CLT, art. 484-A - Lei 13.467/17), assinale a alternativa correta:",
      alternativas: {
        A: "Rescisão por acordo não existe na CLT.",
        B: "Lei 13.467/17, art. 484-A: rescisão por comum acordo entre empregado e empregador. Direitos: metade do aviso prévio (se indenizado), metade da multa do FGTS (20%), saque de 80% do FGTS, demais verbas integrais (férias + 1/3, 13º proporcionais, saldo salário). NÃO tem direito a seguro-desemprego.",
        C: "Rescisão por acordo permite saque integral de FGTS.",
        D: "Rescisão por acordo paga multa de 40%.",
        E: "Empregado tem direito a seguro-desemprego."
      },
      gabarito: "B",
      explicacao: "CLT, art. 484-A (Lei 13.467/17 - Reforma): RESCISÃO POR ACORDO (comum acordo empregado-empregador). DIREITOS: 1) METADE aviso prévio indenizado; 2) METADE multa FGTS (20% sobre saldo); 3) SAQUE de 80% FGTS; 4) demais verbas INTEGRAIS (férias + 1/3, 13º proporcionais, saldo salário). NÃO tem: seguro-desemprego. B correta. A, C, D, E incorretas.",
      banca: "FGV",
      ano: 2023,
      cargo: "Auditor Fiscal do Trabalho"
    },
    {
      id: "trabalho-fgts-05",
      enunciado: "Em relação à correção monetária e aos juros do FGTS, é INCORRETO afirmar:",
      alternativas: {
        A: "Saldo do FGTS é corrigido monetariamente.",
        B: "Correção: TR (Taxa Referencial) + juros de 3% ao ano (capitalização simples).",
        C: "STF (RE 870.947 - repercussão geral): declarou TR inconstitucional para FGTS, mas modulou efeitos (aguarda definição de novo índice).",
        D: "Juros do FGTS são de 6% ao ano.",
        E: "Distribuição de lucro do FGTS: rateado entre cotistas."
      },
      gabarito: "D",
      explicacao: "Lei 8.036/90, art. 13: saldo das contas do FGTS é CORRIGIDO monetariamente pela TR (Taxa Referencial) + JUROS de 3% AO ANO (capitalização simples). Art. 13, §1º: lucro das aplicações: rateado entre titulares. STF, RE 870.947 (repercussão geral 2017): declarou TR INCONSTITUCIONAL para FGTS (reposição inflacionária insuficiente), mas MODULOU efeitos (aguarda definição novo índice pelo CN). D INCORRETA - juros são 3%, não 6%. A, B, C, E corretas.",
      banca: "CESPE",
      ano: 2022,
      cargo: "Auditor Fiscal do Trabalho"
    },
    {
      id: "trabalho-fgts-06",
      enunciado: "Quanto à prescrição dos depósitos do FGTS (Súmula 362 TST), é correto afirmar:",
      alternativas: {
        A: "Prescrição do FGTS é trintenal (30 anos).",
        B: "Súmula 362 TST: prescrição TRINTENAL (30 anos) quanto ao direito de reclamar contra não recolhimento de FGTS. Prescrição BIENAL (2 anos) após rescisão para ajuizar. Se FGTS não depositado durante contrato: 30 anos da lesão. STF (ARE 709212): confirmou prescrição trintenal.",
        C: "Prescrição do FGTS é quinquenal (5 anos).",
        D: "Prescrição não se aplica ao FGTS.",
        E: "Após rescisão, prescrição é de 5 anos."
      },
      gabarito: "B",
      explicacao: "Súmula 362 TST (2015): PRESCRIÇÃO TRINTENAL (30 ANOS) do direito de reclamar contra NÃO RECOLHIMENTO de FGTS. FGTS não depositado: prescrição 30 anos da lesão (cada mês não depositado). Prescrição BIENAL (2 anos) da rescisão para AJUIZAR ação (CF, art. 7º, XXIX). STF, ARE 709212 (repercussão geral): confirmou trintenal. B correta. A (incompleta), C, D, E incorretas.",
      banca: "FCC",
      ano: 2023,
      cargo: "Auditor Fiscal do Trabalho"
    },
    {
      id: "trabalho-fgts-07",
      enunciado: "Sobre o saque-aniversário do FGTS (Lei 13.932/2019), assinale a alternativa INCORRETA:",
      alternativas: {
        A: "Saque-aniversário: modalidade opcional de saque.",
        B: "Permite saque anual de parte do saldo no mês do aniversário do trabalhador.",
        C: "Empregado que opta pelo saque-aniversário perde direito ao saque na demissão sem justa causa.",
        D: "Empregado que opta mantém direito à multa de 40% na rescisão sem justa causa.",
        E: "Opção é irreversível."
      },
      gabarito: "E",
      explicacao: "Lei 13.932/2019: SAQUE-ANIVERSÁRIO: modalidade OPCIONAL. Trabalhador pode sacar ANUALMENTE parte do saldo (percentual conforme faixa + parcela adicional fixa) no mês do ANIVERSÁRIO. CONSEQUÊNCIAS: perde direito ao SAQUE do saldo total na demissão sem justa causa (mas MANTÉM direito à MULTA de 40%). OPÇÃO: pode voltar à sistemática anterior (saque-rescisão), com carência de 2 anos de permanência no saque-aniversário antes de retornar. E INCORRETA - é REVERSÍVEL (com carência). A, B, C, D corretas.",
      banca: "VUNESP",
      ano: 2022,
      cargo: "Auditor Fiscal do Trabalho"
    },
    {
      id: "trabalho-fgts-08",
      enunciado: "Em relação ao FGTS do empregado doméstico (LC 150/2015), é correto afirmar:",
      alternativas: {
        A: "Doméstico não tem direito a FGTS.",
        B: "LC 150/2015: FGTS OBRIGATÓRIO para empregado doméstico (8% mensal). Multa na rescisão sem justa causa: 40% (antes era facultativo). Indenização compensatória: 3,2% por mês (em caso de demissão sem justa causa - depósito antecipado mensal opcional). Direitos iguais aos demais empregados.",
        C: "FGTS de doméstico é facultativo.",
        D: "Multa na rescisão é de 20%.",
        E: "Não há indenização compensatória."
      },
      gabarito: "B",
      explicacao: "LC 150/2015 (Lei dos Domésticos): FGTS OBRIGATÓRIO (8% mensal sobre remuneração). Rescisão sem justa causa: MULTA 40% sobre saldo FGTS. Art. 22: indenização compensatória (seguro contra demissão): 3,2% por mês (empregador pode depositar antecipadamente - se for demitido, não paga 40% à parte, já foi depositando 3,2%/mês). Direitos equiparados aos demais empregados. B correta. A, C, D, E incorretas.",
      banca: "FGV",
      ano: 2023,
      cargo: "Auditor Fiscal do Trabalho"
    },
    {
      id: "trabalho-fgts-09",
      enunciado: "Quanto à fiscalização e à cobrança do FGTS, assinale a alternativa correta:",
      alternativas: {
        A: "Fiscalização do FGTS é feita pela Justiça do Trabalho.",
        B: "Fiscalização: Subsecretaria de Inspeção do Trabalho (SIT) - Ministério do Trabalho. Auditores Fiscais lavram auto de infração. Cobrança: Caixa Econômica Federal (créditos de FGTS não recolhidos - execução fiscal) ou Justiça do Trabalho (após sentença trabalhista reconhecendo débito).",
        C: "Cobrança do FGTS é sempre pela Justiça do Trabalho.",
        D: "Caixa Econômica não participa da fiscalização.",
        E: "Não há auto de infração para FGTS."
      },
      gabarito: "B",
      explicacao: "FISCALIZAÇÃO: Subsecretaria de Inspeção do Trabalho (SIT) do Ministério do Trabalho e Emprego - Auditores Fiscais fiscalizam e lavram AUTO DE INFRAÇÃO (multa administrativa). COBRANÇA: 1) CAIXA ECONÔMICA FEDERAL: cobra FGTS não recolhido (certifica débito - execução FISCAL na Justiça Federal se não pago); 2) JUSTIÇA DO TRABALHO: após sentença reconhecer vínculo/FGTS devido (execução trabalhista). B correta. A, C, D, E incorretas.",
      banca: "CESPE",
      ano: 2023,
      cargo: "Auditor Fiscal do Trabalho"
    },
    {
      id: "trabalho-fgts-10",
      enunciado: "Sobre a utilização dos recursos do FGTS, é INCORRETO afirmar:",
      alternativas: {
        A: "Recursos do FGTS são aplicados em habitação, saneamento e infraestrutura urbana.",
        B: "Aplicações: prioritariamente em programas habitacionais (financiamento casa própria).",
        C: "Gestão: Conselho Curador do FGTS (tripartite - governo, trabalhadores, empregadores).",
        D: "Recursos do FGTS podem ser livremente aplicados em bolsa de valores.",
        E: "Aplicações também em saneamento básico e infraestrutura urbana."
      },
      gabarito: "D",
      explicacao: "Lei 8.036/90, art. 9º: recursos do FGTS são aplicados em: I) HABITAÇÃO (prioritariamente - financiamento casa própria, programas habitacionais - Minha Casa Minha Vida); II) SANEAMENTO básico; III) INFRAESTRUTURA urbana. Gestão: Conselho Curador do FGTS (tripartite - representantes governo, trabalhadores, empregadores). Operador: CAIXA. Aplicações são VINCULADAS (não podem ser livremente aplicadas em bolsa). D INCORRETA - não pode livremente em bolsa. A, B, C, E corretas.",
      banca: "FCC",
      ano: 2022,
      cargo: "Auditor Fiscal do Trabalho"
    }
  ]
};