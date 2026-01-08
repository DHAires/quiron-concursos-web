import { projectId, publicAnonKey } from './supabase/info';

interface Question {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
  topic: string;
  examInfo?: string;
}

const SUBJECT_SLUG = 'meio-ambiente';
const SUBJECT_ID = '28';

// ============================================================================
// TEMA 1: ECOLOGIA (5 questões)
// ============================================================================

const ecologiaQuestions: Question[] = [
  {
    question: 'Biodiversidade refere-se a:',
    options: [
      'Apenas a variedade de plantas em uma região',
      'A variedade de vida em todos os níveis: genético, de espécies e de ecossistemas',
      'Somente a quantidade de animais em extinção',
      'Exclusivamente micro-organismos do solo'
    ],
    correctAnswer: 1,
    explanation: 'BIODIVERSIDADE (diversidade biológica) é a variedade de vida em TODOS OS NÍVEIS: 1) Diversidade GENÉTICA (variação dentro das espécies), 2) Diversidade de ESPÉCIES (variedade de espécies), 3) Diversidade de ECOSSISTEMAS (variedade de habitats). Brasil é MEGADIVERSO: maior biodiversidade do planeta (20% das espécies). Convenção sobre Diversidade Biológica (CDB, Rio-92). Importância: serviços ecossistêmicos, alimentação, medicamentos, equilíbrio ambiental.',
    difficulty: 'easy',
    topic: 'Ecologia',
    examInfo: 'CESPE - Conceitos fundamentais de ecologia'
  },
  {
    question: 'Em uma cadeia alimentar, os organismos que produzem seu próprio alimento através da fotossíntese são chamados de:',
    options: [
      'Consumidores primários',
      'Decompositores',
      'Produtores',
      'Consumidores secundários'
    ],
    correctAnswer: 2,
    explanation: 'PRODUTORES (autotróficos) são organismos que produzem seu próprio alimento via FOTOSSÍNTESE (plantas, algas) ou quimiossíntese (algumas bactérias). Base da cadeia alimentar. CONSUMIDORES: primários (herbívoros), secundários (carnívoros), terciários. DECOMPOSITORES (fungos, bactérias): reciclam matéria orgânica. Fluxo de energia: Sol → Produtores → Consumidores → Decompositores. Pirâmide ecológica.',
    difficulty: 'easy',
    topic: 'Ecologia',
    examInfo: 'FCC - Cadeias e teias alimentares'
  },
  {
    question: 'O efeito estufa é um fenômeno natural que:',
    options: [
      'É sempre prejudicial ao planeta',
      'Mantém a temperatura da Terra adequada para a vida, mas intensificado pelas atividades humanas causa aquecimento global',
      'Não tem relação com gases atmosféricos',
      'Foi criado pela poluição industrial'
    ],
    correctAnswer: 1,
    explanation: 'EFEITO ESTUFA é fenômeno NATURAL e ESSENCIAL: gases (CO₂, metano, vapor d\'água) retêm calor solar, mantendo temperatura média da Terra ~15°C (sem efeito estufa seria -18°C, inviabilizando vida). PROBLEMA: INTENSIFICAÇÃO antrópica desde Revolução Industrial: queima de combustíveis fósseis, desmatamento aumentam concentração de GEE (Gases de Efeito Estufa), causando AQUECIMENTO GLOBAL. CO₂ atmosférico: 280 ppm (pré-industrial) → 420 ppm (2023).',
    difficulty: 'medium',
    topic: 'Ecologia',
    examInfo: 'FGV - Mudanças climáticas'
  },
  {
    question: 'A sucessão ecológica é o processo de:',
    options: [
      'Extinção de todas as espécies de um ecossistema',
      'Mudanças graduais na composição de espécies de uma comunidade ao longo do tempo até atingir clímax',
      'Migração sazonal de animais',
      'Reprodução de plantas'
    ],
    correctAnswer: 1,
    explanation: 'SUCESSÃO ECOLÓGICA é o processo de mudanças graduais e ordenadas na composição de espécies de uma COMUNIDADE ao longo do tempo. SUCESSÃO PRIMÁRIA: colonização de área sem vida anterior (rocha nua, lava vulcânica) - espécies pioneiras (líquens) → estágios intermediários → CLÍMAX (comunidade estável). SUCESSÃO SECUNDÁRIA: recolonização após perturbação (incêndio, desmatamento) - mais rápida. Exemplo: campo → arbustos → floresta.',
    difficulty: 'hard',
    topic: 'Ecologia',
    examInfo: 'CESPE - Dinâmica de ecossistemas'
  },
  {
    question: 'Espécies endêmicas são aquelas que:',
    options: [
      'Ocorrem em todos os continentes',
      'Existem exclusivamente em uma determinada região geográfica',
      'Estão extintas',
      'São invasoras e prejudiciais'
    ],
    correctAnswer: 1,
    explanation: 'Espécies ENDÊMICAS (ou endêmicos) são aquelas que ocorrem EXCLUSIVAMENTE em determinada região geográfica (ilha, país, bioma), não sendo encontradas naturalmente em nenhum outro lugar. Brasil tem alto endemismo: mico-leão-dourado (Mata Atlântica), arara-azul-de-lear (Caatinga). Ilhas têm alto endemismo (Galápagos, Madagascar). Endemismo aumenta vulnerabilidade: destruição do habitat = extinção. Conservação prioritária para espécies endêmicas ameaçadas.',
    difficulty: 'medium',
    topic: 'Ecologia',
    examInfo: 'VUNESP - Biogeografia e conservação'
  }
];

// ============================================================================
// TEMA 2: BIOMAS BRASILEIROS (5 questões)
// ============================================================================

const biomasBrasileirosQuestions: Question[] = [
  {
    question: 'O maior bioma brasileiro, que representa cerca de 49% do território nacional, é:',
    options: [
      'Cerrado',
      'Mata Atlântica',
      'Amazônia',
      'Caatinga'
    ],
    correctAnswer: 2,
    explanation: 'A AMAZÔNIA é o MAIOR bioma brasileiro: ~49% do território nacional (4,2 milhões km²), maior floresta TROPICAL do mundo. Características: alta biodiversidade, floresta densa e úmida, clima equatorial, Bacia Amazônica (maior bacia hidrográfica do mundo). Serviços: regulação climática ("bomba d\'água atmosférica"), estoque de carbono, 10% das espécies do planeta. Ameaças: desmatamento (pecuária, agricultura, mineração), queimadas. Acordo de Paris: meta de desmatamento zero.',
    difficulty: 'easy',
    topic: 'Biomas Brasileiros',
    examInfo: 'CESPE - Geografia dos biomas'
  },
  {
    question: 'O bioma brasileiro conhecido como "berço das águas" por abrigar nascentes de importantes bacias hidrográficas (Tocantins-Araguaia, São Francisco, Paraná) é:',
    options: [
      'Pantanal',
      'Cerrado',
      'Pampa',
      'Amazônia'
    ],
    correctAnswer: 1,
    explanation: 'O CERRADO é chamado "BERÇO DAS ÁGUAS": abriga nascentes de 8 das 12 principais bacias hidrográficas brasileiras (Tocantins-Araguaia, São Francisco, Paraná/Paraguai). 2º maior bioma brasileiro (24% do território, 2 milhões km²). Características: savana tropical, árvores tortuosas, cascas grossas, raízes profundas, duas estações (seca/chuvosa). Biodiversidade: 5% das espécies mundiais, 30% da biodiversidade brasileira, alto endemismo. Ameaças: expansão agrícola (soja, gado), 50% já desmatado.',
    difficulty: 'medium',
    topic: 'Biomas Brasileiros',
    examInfo: 'FCC - Características dos biomas'
  },
  {
    question: 'A Mata Atlântica, um dos biomas mais ameaçados do mundo, atualmente possui apenas cerca de:',
    options: [
      '50% de sua cobertura original',
      '12% de sua cobertura original',
      '75% de sua cobertura original',
      '3% de sua cobertura original'
    ],
    correctAnswer: 1,
    explanation: 'A MATA ATLÂNTICA possui apenas ~12% de sua cobertura ORIGINAL (alguns estudos: 7-12% de remanescentes). Originalmente: 1,3 milhão km² (15% do território), estendia-se pelo litoral do RN ao RS. HOTSPOT de biodiversidade: altíssimo endemismo (plantas, aves, primatas), 35% das espécies brasileiras. História de destruição: ciclos econômicos (pau-brasil, cana, café), urbanização (SP, RJ, BH no bioma). Lei Mata Atlântica (11.428/2006). Conservação urgente.',
    difficulty: 'hard',
    topic: 'Biomas Brasileiros',
    examInfo: 'FGV - Conservação e degradação ambiental'
  },
  {
    question: 'O único bioma exclusivamente brasileiro, adaptado ao clima semiárido, é:',
    options: [
      'Cerrado',
      'Caatinga',
      'Pantanal',
      'Pampa'
    ],
    correctAnswer: 1,
    explanation: 'A CAATINGA é o ÚNICO bioma EXCLUSIVAMENTE BRASILEIRO (100% em território nacional), localizado no Nordeste. Área: 850 mil km² (11% do Brasil). Características: clima SEMIÁRIDO (menor pluviosidade do Brasil, 300-800mm/ano), vegetação XERÓFITA (adaptada à seca: cactos, arbustos espinhosos, perda de folhas na seca). Biodiversidade única: 178 espécies endêmicas. População: 27 milhões de pessoas. Ameaças: desertificação, desmatamento (lenha, carvão), sobrepastoreio.',
    difficulty: 'easy',
    topic: 'Biomas Brasileiros',
    examInfo: 'CESPE - Biomas e adaptações'
  },
  {
    question: 'O Pantanal é considerado:',
    options: [
      'O deserto brasileiro',
      'A maior planície alagável do mundo',
      'Uma floresta densa e úmida',
      'Um bioma montanhoso'
    ],
    correctAnswer: 1,
    explanation: 'O PANTANAL é a MAIOR PLANÍCIE ALAGÁVEL (wetland) do MUNDO: 150-210 mil km² (Brasil: MT e MS; também Paraguai e Bolívia). Características: INUNDAÇÕES SAZONAIS (cheias: dez-mar; secas: abr-set), mosaico de ecossistemas (cerrado, chaco, floresta amazônica). Biodiversidade excepcional: 650 aves, 262 peixes, 1.200 borboletas, jacarés, capivaras, onças, araras. Patrimônio Natural Mundial UNESCO (2000). Ameaças: queimadas (2020: incêndios históricos), agrotóxicos, hidrelétricas.',
    difficulty: 'medium',
    topic: 'Biomas Brasileiros',
    examInfo: 'VUNESP - Ecossistemas aquáticos'
  }
];

// ============================================================================
// TEMA 3: MUDANÇAS CLIMÁTICAS (5 questões)
// ============================================================================

const mudancasClimaticasQuestions: Question[] = [
  {
    question: 'O Acordo de Paris (2015) estabelece como meta global:',
    options: [
      'Eliminar totalmente as emissões de CO₂ até 2020',
      'Manter o aumento da temperatura média global abaixo de 2°C, preferencialmente 1,5°C, em relação aos níveis pré-industriais',
      'Proibir o uso de combustíveis fósseis imediatamente',
      'Reduzir a população mundial'
    ],
    correctAnswer: 1,
    explanation: 'ACORDO DE PARIS (COP21, 2015, vigor em 2016): Principal acordo climático global, substitui Protocolo de Kyoto. META: manter aquecimento global ABAIXO de 2°C, preferencialmente LIMITAR a 1,5°C (em relação à era pré-industrial). Mecanismos: NDCs (Contribuições Nacionalmente Determinadas - metas voluntárias de cada país), revisão a cada 5 anos (efeito catraca), financiamento climático. 195 países signatários. EUA saiu (Trump) e retornou (Biden). Urgência: IPCC alerta que ultrapassar 1,5°C terá consequências catastróficas.',
    difficulty: 'medium',
    topic: 'Mudanças Climáticas',
    examInfo: 'CESPE - Acordos internacionais ambientais'
  },
  {
    question: 'Os principais gases de efeito estufa (GEE) são:',
    options: [
      'Oxigênio e nitrogênio',
      'Dióxido de carbono (CO₂), metano (CH₄), óxido nitroso (N₂O) e gases fluorados',
      'Apenas vapor d\'água',
      'Ozônio estratosférico'
    ],
    correctAnswer: 1,
    explanation: 'Principais GASES DE EFEITO ESTUFA (GEE): 1) DIÓXIDO DE CARBONO - CO₂ (75% das emissões antrópicas, queima de combustíveis fósseis, desmatamento), 2) METANO - CH₄ (16%, pecuária, arrozais, aterros, potencial de aquecimento 25x maior que CO₂), 3) ÓXIDO NITROSO - N₂O (6%, fertilizantes, indústria, 298x mais potente que CO₂), 4) Gases FLUORADOS (HFCs, PFCs, SF₆ - refrigeração, indústria, milhares de vezes mais potentes). GWP (Potencial de Aquecimento Global) mede intensidade.',
    difficulty: 'medium',
    topic: 'Mudanças Climáticas',
    examInfo: 'FCC - Química atmosférica'
  },
  {
    question: 'O Painel Intergovernamental sobre Mudanças Climáticas (IPCC) é:',
    options: [
      'Uma organização empresarial',
      'Um órgão científico da ONU que avalia informações sobre mudanças climáticas',
      'Um partido político verde',
      'Uma empresa de energia renovável'
    ],
    correctAnswer: 1,
    explanation: 'O IPCC (Intergovernmental Panel on Climate Change) é órgão CIENTÍFICO da ONU criado em 1988 (OMM + PNUMA). Função: avaliar de forma abrangente informações científicas, técnicas e socioeconômicas sobre MUDANÇAS CLIMÁTICAS, impactos e opções de mitigação/adaptação. NÃO faz pesquisas próprias: compila e avalia milhares de estudos científicos. Relatórios de Avaliação (ARs): AR6 (2021-2023) alerta: aquecimento inequívoco, causa antrópica, urgência de ação. Nobel da Paz 2007 (com Al Gore).',
    difficulty: 'hard',
    topic: 'Mudanças Climáticas',
    examInfo: 'FGV - Instituições ambientais internacionais'
  },
  {
    question: 'O Protocolo de Kyoto (1997) estabeleceu:',
    options: [
      'Metas obrigatórias de redução de emissões de GEE apenas para países desenvolvidos',
      'Proibição total de uso de petróleo',
      'Fim da produção industrial',
      'Metas iguais para todos os países'
    ],
    correctAnswer: 0,
    explanation: 'PROTOCOLO DE KYOTO (1997, vigor 2005): Primeiro tratado internacional com METAS OBRIGATÓRIAS de redução de emissões de GEE. Princípio das RESPONSABILIDADES COMUNS, porém DIFERENCIADAS: apenas países DESENVOLVIDOS (Anexo I) tinham metas obrigatórias de redução (média 5,2% em relação a 1990, período 2008-2012). Países em desenvolvimento (incluindo Brasil, China, Índia): sem metas obrigatórias. Mecanismos: comércio de emissões, MDL, implementação conjunta. Limitações levaram ao Acordo de Paris.',
    difficulty: 'hard',
    topic: 'Mudanças Climáticas',
    examInfo: 'CESPE - História da governança climática'
  },
  {
    question: 'O derretimento das calotas polares e geleiras contribui para:',
    options: [
      'Diminuição do nível do mar',
      'Aumento do nível do mar, afetando cidades costeiras e ilhas',
      'Resfriamento global',
      'Aumento da biodiversidade'
    ],
    correctAnswer: 1,
    explanation: 'O DERRETIMENTO de calotas polares (Groenlândia, Antártica) e geleiras contribui para ELEVAÇÃO DO NÍVEL DO MAR: já subiu ~20cm desde 1900, com aceleração (3,3mm/ano atualmente). Causas: 1) Expansão térmica da água (aquecimento), 2) Derretimento de gelo terrestre (Groenlândia, Antártica, geleiras montanhosas). Consequências: inundação de cidades costeiras, ilhas (Maldivas, Tuvalu ameaçadas), erosão, intrusão salina, refugiados climáticos. IPCC: pode subir até 1 metro até 2100 em cenário pessimista.',
    difficulty: 'easy',
    topic: 'Mudanças Climáticas',
    examInfo: 'VUNESP - Impactos das mudanças climáticas'
  }
];

// ============================================================================
// TEMA 4: DESMATAMENTO (5 questões)
// ============================================================================

const desmatamentoQuestions: Question[] = [
  {
    question: 'As principais causas do desmatamento na Amazônia brasileira são:',
    options: [
      'Causas naturais como secas e incêndios espontâneos',
      'Pecuária extensiva, agricultura (soja), extração ilegal de madeira e mineração',
      'Crescimento de cidades indígenas',
      'Reflorestamento excessivo'
    ],
    correctAnswer: 1,
    explanation: 'CAUSAS DO DESMATAMENTO NA AMAZÔNIA: 1) PECUÁRIA EXTENSIVA (principal causa: ~65-70% do desmatamento, conversão de floresta em pasto), 2) AGRICULTURA (soja, especialmente em MT e PA), 3) Extração ILEGAL DE MADEIRA (exploração seletiva, depois queimadas), 4) MINERAÇÃO (garimpo ilegal de ouro, cassiterita), 5) Infraestrutura (rodovias, hidrelétricas). Grilagem de terras públicas. Pico histórico: 27.772 km² em 2004; redução até 2012; aumento recente 2019-2022. INPE monitora via satélite (PRODES, DETER).',
    difficulty: 'medium',
    topic: 'Desmatamento',
    examInfo: 'CESPE - Problemas ambientais brasileiros'
  },
  {
    question: 'O desmatamento contribui para as mudanças climáticas porque:',
    options: [
      'Aumenta a biodiversidade',
      'Libera CO₂ armazenado nas árvores e reduz a absorção de carbono pela fotossíntese',
      'Diminui a temperatura global',
      'Não tem relação com o clima'
    ],
    correctAnswer: 1,
    explanation: 'DESMATAMENTO E CLIMA: Duplo impacto. 1) EMISSÃO: Queima/decomposição de árvores LIBERA CO₂ armazenado na biomassa (florestas = sumidouros de carbono). Brasil: desmatamento e mudança de uso do solo = 44% das emissões nacionais de GEE (2020). 2) REDUÇÃO DE ABSORÇÃO: Menos árvores = menos fotossíntese = menos remoção de CO₂ atmosférico. Amazônia: estoque de 150-200 bilhões de toneladas de carbono. Desmatamento é 2ª maior causa de emissões globais (~10%), atrás de combustíveis fósseis.',
    difficulty: 'medium',
    topic: 'Desmatamento',
    examInfo: 'FCC - Relação desmatamento-clima'
  },
  {
    question: 'O sistema de monitoramento do desmatamento da Amazônia por satélite é realizado pelo:',
    options: [
      'IBGE',
      'INPE (Instituto Nacional de Pesquisas Espaciais)',
      'IBAMA apenas',
      'NASA exclusivamente'
    ],
    correctAnswer: 1,
    explanation: 'O INPE (Instituto Nacional de Pesquisas Espaciais) realiza o monitoramento por satélite do desmatamento na Amazônia através de sistemas: 1) PRODES (Projeto de Monitoramento do Desflorestamento na Amazônia Legal): taxa anual oficial de desmatamento, imagens Landsat, corte raso >6,25ha, divulgado anualmente. 2) DETER (Detecção de Desmatamento em Tempo Real): alertas diários/semanais para fiscalização rápida. 3) TerraClass, DEGRAD. Dados públicos, transparência. Brasil: referência mundial em monitoramento ambiental por satélite.',
    difficulty: 'easy',
    topic: 'Desmatamento',
    examInfo: 'FGV - Monitoramento ambiental'
  },
  {
    question: 'As queimadas na Amazônia são predominantemente:',
    options: [
      'Fenômenos naturais sem intervenção humana',
      'Criminosas, usadas para desmatar, limpar pastos e avançar sobre áreas de preservação',
      'Acidentais causadas por raios',
      'Benéficas para a floresta'
    ],
    correctAnswer: 1,
    explanation: 'QUEIMADAS NA AMAZÔNIA são predominantemente ANTRÓPICAS (causadas pelo homem), NÃO naturais (floresta tropical úmida não tem incêndios naturais frequentes). Motivos: 1) Limpeza de área após DESMATAMENTO (derrubada → queimada → pasto/agricultura), 2) Renovação de PASTOS degradados, 3) Grilagem (queimar para intimidar, expulsar, reivindicar terra pública). "Dia do Fogo" (2019): queimadas coordenadas criminosas. Impactos: poluição (fumaça em cidades), emissões de CO₂, degradação de floresta remanescente, saúde pública.',
    difficulty: 'medium',
    topic: 'Desmatamento',
    examInfo: 'CESPE - Queimadas e crimes ambientais'
  },
  {
    question: 'O conceito de "desmatamento zero" significa:',
    options: [
      'Proibir qualquer tipo de agricultura',
      'Eliminar o desmatamento ilegal e permitir apenas desmatamento legal autorizado dentro de limites sustentáveis',
      'Desmatar todas as florestas',
      'Plantar apenas eucalipto'
    ],
    correctAnswer: 1,
    explanation: '"DESMATAMENTO ZERO" (ou "desmatamento ilegal zero") é meta de ELIMINAR desmatamento ILEGAL e reduzir drasticamente o legal. Não significa ausência total de supressão vegetal (há desmatamento legal autorizado em propriedades privadas respeitando Código Florestal: 20-80% Reserva Legal na Amazônia, APPs). Objetivo: conter destruição de florestas nativas, especialmente Amazônia e Cerrado. Compromissos: Acordo de Paris (Brasil: zerar desmatamento ilegal até 2030), Declaração de Glasgow sobre Florestas (COP26, 2021: zerar até 2030). Compatibilizar conservação com produção sustentável.',
    difficulty: 'hard',
    topic: 'Desmatamento',
    examInfo: 'VUNESP - Políticas de conservação'
  }
];

// ============================================================================
// TEMA 5: RECURSOS HÍDRICOS (5 questões)
// ============================================================================

const recursosHidricosQuestions: Question[] = [
  {
    question: 'O Brasil possui aproximadamente quantos por cento das reservas de água doce do mundo:',
    options: [
      '5%',
      '12%',
      '25%',
      '50%'
    ],
    correctAnswer: 1,
    explanation: 'O Brasil possui aproximadamente 12% das reservas de ÁGUA DOCE do mundo (algumas fontes: 12-14%), sendo um dos países com maior disponibilidade hídrica. Bacia Amazônica: ~20% da água doce mundial. Distribuição DESIGUAL: 81% na Região Norte (Amazônia, baixa densidade populacional), apenas 3% no Nordeste semiárido. Aquífero Guarani: uma das maiores reservas subterrâneas (1,2 milhão km²). Paradoxo: abundância hídrica, mas crises de abastecimento (poluição, gestão inadequada, concentração populacional).',
    difficulty: 'easy',
    topic: 'Recursos Hídricos',
    examInfo: 'CESPE - Geografia dos recursos hídricos'
  },
  {
    question: 'A Política Nacional de Recursos Hídricos (Lei 9.433/97), conhecida como "Lei das Águas", estabelece que:',
    options: [
      'A água é um recurso ilimitado e gratuito',
      'A água é um bem de domínio público, recurso natural limitado, dotado de valor econômico',
      'Apenas empresas podem usar água',
      'Não há controle sobre o uso da água'
    ],
    correctAnswer: 1,
    explanation: 'Lei 9.433/97 (LEI DAS ÁGUAS) - Política Nacional de Recursos Hídricos. FUNDAMENTOS (Art. 1º): 1) Água é bem de DOMÍNIO PÚBLICO, 2) Recurso natural LIMITADO, dotado de VALOR ECONÔMICO, 3) Prioridade: consumo humano e dessedentação animal em escassez, 4) Gestão: usos múltiplos, 5) Bacia hidrográfica = unidade de gestão, 6) Gestão DESCENTRALIZADA com participação (Poder Público, usuários, comunidades). Instrumentos: Planos de Bacia, enquadramento, outorga, cobrança pelo uso, Sistema de Informações. SNGRH (Sistema Nacional).',
    difficulty: 'hard',
    topic: 'Recursos Hídricos',
    examInfo: 'FCC - Legislação de recursos hídricos'
  },
  {
    question: 'O principal uso consuntivo de água no Brasil é:',
    options: [
      'Abastecimento urbano',
      'Indústria',
      'Irrigação na agricultura',
      'Mineração'
    ],
    correctAnswer: 2,
    explanation: 'IRRIGAÇÃO AGRÍCOLA é o principal uso CONSUNTIVO de água no Brasil: ~67-70% do consumo total (água retirada e não devolvida aos corpos hídricos). Seguida por: abastecimento urbano (~15%), indústria (~7-9%), abastecimento animal, mineração. Uso NÃO-CONSUNTIVO: geração hidrelétrica (retorna água, mas altera vazão e qualidade). Eficiência: desperdício na irrigação (métodos ineficientes: inundação, pivôs). Conflitos pelo uso da água: irrigação x abastecimento urbano x geração elétrica. Necessidade: tecnologias de economia.',
    difficulty: 'medium',
    topic: 'Recursos Hídricos',
    examInfo: 'FGV - Usos da água'
  },
  {
    question: 'Bacia hidrográfica é definida como:',
    options: [
      'Apenas o leito de um rio',
      'Área de drenagem de um rio principal e seus afluentes, delimitada por divisores de água (montanhas, serras)',
      'Somente a nascente de um rio',
      'O oceano'
    ],
    correctAnswer: 1,
    explanation: 'BACIA HIDROGRÁFICA (ou bacia de drenagem) é a área total de DRENAGEM de um rio principal e todos os seus AFLUENTES, delimitada por DIVISORES DE ÁGUA (elevações do relevo: montanhas, serras, chapadas). Água da chuva escoa superficialmente para o rio principal. Unidade natural de gestão de recursos hídricos (Lei 9.433/97). Brasil: 12 Regiões Hidrográficas. Maiores bacias: Amazônica (maior do mundo, 6 milhões km²), Tocantins-Araguaia, São Francisco, Paraná, Paraguai. Gestão por Comitês de Bacia.',
    difficulty: 'easy',
    topic: 'Recursos Hídricos',
    examInfo: 'CESPE - Conceitos hidrológicos'
  },
  {
    question: 'A transposição do Rio São Francisco tem como objetivo principal:',
    options: [
      'Gerar energia elétrica',
      'Levar água para abastecimento humano e dessedentação animal em regiões semiáridas do Nordeste',
      'Irrigação de grandes latifúndios exportadores',
      'Navegação comercial'
    ],
    correctAnswer: 1,
    explanation: 'TRANSPOSIÇÃO DO RIO SÃO FRANCISCO (Projeto de Integração): obra de infraestrutura hídrica para levar água do Rio São Francisco (captação em PE) para regiões semiáridas do Nordeste Setentrional (Ceará, Paraíba, Rio Grande do Norte, Pernambuco - 12 milhões de habitantes). Dois eixos: Leste e Norte, 477 km de canais. OBJETIVO OFICIAL: abastecimento humano e dessedentação animal em região com seca crônica. CONTROVÉRSIAS: impactos ambientais, custos elevados, benefício real (parte da água para irrigação de grandes propriedades), vazão reduzida do São Francisco (hidrelétricas, degradação). Inauguração parcial: 2017-2020.',
    difficulty: 'hard',
    topic: 'Recursos Hídricos',
    examInfo: 'VUNESP - Infraestrutura hídrica e controvérsias'
  }
];

// ============================================================================
// TEMA 6: ENERGIA RENOVÁVEL (5 questões)
// ============================================================================

const energiaRenovavelQuestions: Question[] = [
  {
    question: 'São consideradas fontes de energia renovável:',
    options: [
      'Petróleo, carvão e gás natural',
      'Solar, eólica, hidráulica, biomassa e geotérmica',
      'Apenas energia nuclear',
      'Combustíveis fósseis'
    ],
    correctAnswer: 1,
    explanation: 'Fontes de energia RENOVÁVEL são aquelas que se REGENERAM naturalmente em escala temporal humana, sendo praticamente inesgotáveis: 1) SOLAR (fotovoltaica, térmica), 2) EÓLICA (ventos), 3) HIDRÁULICA/HÍDRICA (fluxo de água), 4) BIOMASSA (cana, madeira, resíduos orgânicos), 5) GEOTÉRMICA (calor interno da Terra), 6) MARÉS/ONDAS. Vantagens: baixa emissão de GEE (energia limpa), sustentabilidade. Contraponto: combustíveis FÓSSEIS (petróleo, carvão, gás) são NÃO-RENOVÁVEIS (formação geológica milhões de anos).',
    difficulty: 'easy',
    topic: 'Energia Renovável',
    examInfo: 'FCC - Fontes de energia'
  },
  {
    question: 'A matriz elétrica brasileira é predominantemente baseada em:',
    options: [
      'Energia solar',
      'Energia hidrelétrica (hidráulica)',
      'Energia nuclear',
      'Carvão mineral'
    ],
    correctAnswer: 1,
    explanation: 'A matriz elétrica brasileira é predominantemente HIDRELÉTRICA: ~65-70% da geração de eletricidade (dado varia conforme hidrologia). Brasil tem grande potencial hidráulico: rios caudalosos, desníveis topográficos. Principais usinas: Itaipu (binacional, 2ª maior do mundo), Belo Monte, Tucuruí, Jirau, Santo Antônio. VANTAGENS: renovável, baixa emissão de GEE (operação). DESVANTAGENS: impactos ambientais (inundação, deslocamento de populações, barragens), dependência de chuvas (crises hídricas: 2001, 2014-2015, 2021). Diversificação: crescimento de eólica (~12%), biomassa (~8%), solar.',
    difficulty: 'easy',
    topic: 'Energia Renovável',
    examInfo: 'CESPE - Matriz energética brasileira'
  },
  {
    question: 'A energia solar fotovoltaica converte:',
    options: [
      'Luz solar diretamente em eletricidade através de células fotovoltaicas',
      'Calor em movimento mecânico',
      'Vento em eletricidade',
      'Água em vapor'
    ],
    correctAnswer: 0,
    explanation: 'Energia solar FOTOVOLTAICA converte LUZ SOLAR diretamente em ELETRICIDADE através de CÉLULAS FOTOVOLTAICAS (painéis solares, geralmente silício). Efeito fotovoltaico: fótons da luz liberam elétrons, gerando corrente elétrica. Diferente de energia solar TÉRMICA (aquece água/fluidos). CRESCIMENTO MUNDIAL: custos caíram 90% (2010-2020), China líder em produção de painéis. Brasil: crescimento acelerado (GD - Geração Distribuída residencial/comercial, usinas de grande porte), favorecido por alta insolação (Nordeste: maior potencial). Vantagens: limpa, modular, baixa manutenção.',
    difficulty: 'medium',
    topic: 'Energia Renovável',
    examInfo: 'FGV - Tecnologias de energia renovável'
  },
  {
    question: 'O Brasil é um dos líderes mundiais em produção de energia eólica, com destaque para a região:',
    options: [
      'Sul',
      'Sudeste',
      'Nordeste',
      'Centro-Oeste'
    ],
    correctAnswer: 2,
    explanation: 'O NORDESTE concentra ~85-90% da capacidade instalada de energia EÓLICA no Brasil. Estados líderes: Bahia, Rio Grande do Norte, Ceará, Piauí. Fatores: ventos constantes e intensos (alísios), litoral extenso, relevo favorável (chapadas, serras). Brasil: 10ª posição mundial em capacidade eólica (2022), 2ª fonte na matriz elétrica (~12%, ultrapassou biomassa). Crescimento acelerado (leilões de energia, custos competitivos). Complexos eólicos onshore (em terra, predominante) e offshore (mar, em desenvolvimento). Vantagens: complementaridade com hidrelétrica (ventos fortes em período seco).',
    difficulty: 'medium',
    topic: 'Energia Renovável',
    examInfo: 'CESPE - Geografia da energia no Brasil'
  },
  {
    question: 'O etanol brasileiro é produzido principalmente a partir de:',
    options: [
      'Milho',
      'Cana-de-açúcar',
      'Trigo',
      'Soja'
    ],
    correctAnswer: 1,
    explanation: 'O etanol brasileiro é produzido principalmente a partir da CANA-DE-AÇÚCAR (etanol de 1ª geração). Brasil: 2º maior produtor mundial de etanol (atrás dos EUA, que usa milho), líder em uso automotivo. Programa Proálcool (1975): resposta à crise do petróleo, incentivou produção. Vantagens: biocombustível RENOVÁVEL, reduz emissões de GEE (~70% vs gasolina, considerando ciclo completo), geração de empregos. Críticas: monocultura, pressão sobre alimentos, uso de terra. Etanol 2G (celulose, bagaço): desenvolvimento. Flex-fuel: carros bicombustíveis (etanol/gasolina) predominam no Brasil.',
    difficulty: 'easy',
    topic: 'Energia Renovável',
    examInfo: 'VUNESP - Biocombustíveis'
  }
];

// ============================================================================
// TEMA 7: DESENVOLVIMENTO SUSTENTÁVEL (5 questões)
// ============================================================================

const desenvolvimentoSustentavelQuestions: Question[] = [
  {
    question: 'Desenvolvimento sustentável é definido como:',
    options: [
      'Crescimento econômico ilimitado',
      'Desenvolvimento que atende às necessidades do presente sem comprometer a capacidade das futuras gerações de atenderem suas próprias necessidades',
      'Exploração máxima dos recursos naturais',
      'Apenas proteção ambiental sem desenvolvimento'
    ],
    correctAnswer: 1,
    explanation: 'DESENVOLVIMENTO SUSTENTÁVEL: conceito consolidado no Relatório Brundtland "Nosso Futuro Comum" (ONU, 1987). Definição clássica: "Desenvolvimento que atende às necessidades do PRESENTE sem comprometer a capacidade das FUTURAS GERAÇÕES de atenderem suas próprias necessidades". Três pilares (Triple Bottom Line): 1) AMBIENTAL (conservação, recursos), 2) SOCIAL (equidade, qualidade de vida), 3) ECONÔMICO (crescimento, eficiência). Equilíbrio entre crescimento econômico, justiça social e proteção ambiental. Popularizado na Rio-92 (ECO-92).',
    difficulty: 'easy',
    topic: 'Desenvolvimento Sustentável',
    examInfo: 'FCC - Conceitos de sustentabilidade'
  },
  {
    question: 'A Agenda 2030 da ONU estabelece:',
    options: [
      '5 metas globais',
      '17 Objetivos de Desenvolvimento Sustentável (ODS) e 169 metas',
      '50 objetivos econômicos',
      '3 princípios ambientais'
    ],
    correctAnswer: 1,
    explanation: 'AGENDA 2030 para o Desenvolvimento Sustentável (ONU, 2015): plano de ação global com 17 OBJETIVOS DE DESENVOLVIMENTO SUSTENTÁVEL (ODS) e 169 METAS a serem alcançados até 2030. ODS cobrem dimensões: 1) SOCIAL (erradicar pobreza/fome, saúde, educação, igualdade gênero), 2) AMBIENTAL (água, energia limpa, clima, oceanos, biodiversidade), 3) ECONÔMICA (trabalho, indústria, redução desigualdades). Universais (todos os países). Lema: "Não deixar ninguém para trás". Acompanhamento: indicadores, relatórios voluntários nacionais. Sucessora dos ODM (2000-2015).',
    difficulty: 'medium',
    topic: 'Desenvolvimento Sustentável',
    examInfo: 'CESPE - Agenda 2030 e ODS'
  },
  {
    question: 'Os 3 Rs da sustentabilidade referem-se a:',
    options: [
      'Riqueza, Renda e Recursos',
      'Reduzir, Reutilizar e Reciclar',
      'Rios, Reservas e Reflorestamento',
      'República, Regime e Regulação'
    ],
    correctAnswer: 1,
    explanation: 'Os 3 Rs da sustentabilidade (política de gestão de resíduos): 1) REDUZIR: diminuir geração de resíduos/lixo, consumo consciente, evitar desperdício (prioridade máxima), 2) REUTILIZAR: dar novo uso a produtos/embalagens antes de descartar (prolongar vida útil), 3) RECICLAR: transformar resíduos em novos produtos (economia circular, reduz extração de matérias-primas). HIERARQUIA de gestão: prevenção > redução > reutilização > reciclagem > recuperação energética > disposição final (aterro). Alguns modelos adicionam: Repensar, Recusar, Reparar (5-7 Rs).',
    difficulty: 'easy',
    topic: 'Desenvolvimento Sustentável',
    examInfo: 'FGV - Gestão de resíduos sólidos'
  },
  {
    question: 'A Política Nacional de Resíduos Sólidos (Lei 12.305/2010) instituiu:',
    options: [
      'A responsabilidade compartilhada pelo ciclo de vida dos produtos e a logística reversa',
      'Apenas a criação de mais aterros sanitários',
      'A queima de lixo como solução',
      'O fim da reciclagem'
    ],
    correctAnswer: 0,
    explanation: 'Lei 12.305/2010 (Política Nacional de Resíduos Sólidos - PNRS): Marco legal brasileiro. Princípios/instrumentos: 1) RESPONSABILIDADE COMPARTILHADA pelo ciclo de vida (fabricantes, importadores, distribuidores, comerciantes, consumidores, poder público), 2) LOGÍSTICA REVERSA (retorno de produtos pós-consumo à indústria: embalagens, eletrônicos, pneus, lâmpadas, agrotóxicos), 3) Hierarquia: não-geração, redução, reutilização, reciclagem, tratamento, disposição final, 4) Acordo setorial, 5) FIM DOS LIXÕES (prazo: 2014, não cumprido). Planos de gestão obrigatórios.',
    difficulty: 'hard',
    topic: 'Desenvolvimento Sustentável',
    examInfo: 'CESPE - Legislação de resíduos sólidos'
  },
  {
    question: 'Economia circular é um modelo que:',
    options: [
      'Baseia-se no descarte linear de produtos',
      'Propõe manter produtos, materiais e recursos em uso pelo maior tempo possível, reduzindo desperdício e criando ciclos fechados',
      'Incentiva o consumo ilimitado',
      'Elimina totalmente a produção industrial'
    ],
    correctAnswer: 1,
    explanation: 'ECONOMIA CIRCULAR: modelo econômico que contrapõe a economia LINEAR (extrair-produzir-descartar). Princípios: 1) DESIGN para durabilidade, reparo, desmontagem, 2) MANTER produtos, componentes e materiais em USO MÁXIMO (reutilização, remanufatura, reciclagem), 3) REGENERAR sistemas naturais, 4) ELIMINAR resíduos e poluição (resíduos = recursos). Ciclos: técnico (produtos duráveis: metais, plásticos) e biológico (biodegradáveis retornam à natureza). Benefícios: redução de extração, emissões, custos; geração de empregos verdes; inovação. Ellen MacArthur Foundation: referência.',
    difficulty: 'hard',
    topic: 'Desenvolvimento Sustentável',
    examInfo: 'VUNESP - Novos modelos econômicos'
  }
];

// ============================================================================
// TEMA 8: LEGISLAÇÃO AMBIENTAL (5 questões)
// ============================================================================

const legislacaoAmbientalQuestions: Question[] = [
  {
    question: 'A Política Nacional do Meio Ambiente (Lei 6.938/81) estabeleceu:',
    options: [
      'Apenas multas para poluição',
      'Objetivos, princípios e instrumentos da política ambiental brasileira, incluindo EIA/RIMA, licenciamento e SISNAMA',
      'Proibição total de indústrias',
      'Fim da proteção ambiental'
    ],
    correctAnswer: 1,
    explanation: 'Lei 6.938/81 (Política Nacional do Meio Ambiente - PNMA): LEI AMBIENTAL FUNDAMENTAL do Brasil (antes da CF/88). Objetivo: preservação, melhoria, recuperação da qualidade ambiental propícia à vida. Princípios: desenvolvimento sustentável, poluidor-pagador, prevenção, participação. INSTRUMENTOS: 1) Padrões de qualidade, 2) Zoneamento ambiental, 3) EIA/RIMA (Estudo/Relatório de Impacto Ambiental), 4) LICENCIAMENTO AMBIENTAL, 5) SISNAMA (Sistema Nacional do Meio Ambiente: órgãos federal/estadual/municipal, destaque IBAMA, ICMBio), 6) CONAMA (Conselho Nacional). Responsabilidade objetiva por dano ambiental.',
    difficulty: 'hard',
    topic: 'Legislação Ambiental',
    examInfo: 'CESPE - Política ambiental brasileira'
  },
  {
    question: 'O Código Florestal Brasileiro (Lei 12.651/2012) estabelece, entre outros:',
    options: [
      'Desmatamento total permitido',
      'Áreas de Preservação Permanente (APP) e Reserva Legal em propriedades rurais',
      'Apenas plantio de soja',
      'Fim das florestas nativas'
    ],
    correctAnswer: 1,
    explanation: 'Lei 12.651/2012 (NOVO CÓDIGO FLORESTAL): regula proteção da vegetação nativa. Principais instrumentos: 1) APP (Áreas de Preservação Permanente): áreas protegidas, cobertas ou não por vegetação nativa, função ambiental (margens de rios, nascentes, topos de morro, encostas íngremes, manguezais). Não pode desmatar. Largura varia (rio: 30-500m conforme largura), 2) RESERVA LEGAL: % da propriedade com vegetação nativa que deve ser preservada (Amazônia: 80%, Cerrado: 35%, outros: 20%). 3) CAR (Cadastro Ambiental Rural): registro de propriedades. Anistia para pequenos (controversa). Polêmicas: retrocessos vs pragmatismo.',
    difficulty: 'medium',
    topic: 'Legislação Ambiental',
    examInfo: 'FCC - Código Florestal'
  },
  {
    question: 'O licenciamento ambiental é um processo administrativo que:',
    options: [
      'É opcional para empresas',
      'Avalia e autoriza a localização, instalação, ampliação e operação de empreendimentos potencialmente poluidores',
      'Apenas pune infrações',
      'Não tem relação com meio ambiente'
    ],
    correctAnswer: 1,
    explanation: 'LICENCIAMENTO AMBIENTAL (Lei 6.938/81, Resoluções CONAMA 237/97, 01/86): processo administrativo que AVALIA viabilidade ambiental e AUTORIZA localização, instalação, ampliação, operação de empreendimentos/atividades POTENCIALMENTE POLUIDORES ou degradadores. ETAPAS: 1) LP (Licença Prévia - viabilidade, concepção), 2) LI (Licença de Instalação - construção), 3) LO (Licença de Operação - funcionamento, renovável). Competência: federal (IBAMA - significativo impacto nacional/regional), estadual, municipal. EIA/RIMA obrigatório para atividades de significativo impacto. Participação: audiências públicas.',
    difficulty: 'hard',
    topic: 'Legislação Ambiental',
    examInfo: 'FGV - Instrumentos de gestão ambiental'
  },
  {
    question: 'O SNUC (Sistema Nacional de Unidades de Conservação, Lei 9.985/2000) divide as unidades de conservação em:',
    options: [
      'Apenas Parques Nacionais',
      'Proteção Integral (uso indireto) e Uso Sustentável (uso direto compatível com conservação)',
      'Todas permitem caça e pesca',
      'Não há categorias'
    ],
    correctAnswer: 1,
    explanation: 'SNUC (Lei 9.985/2000 - Sistema Nacional de Unidades de Conservação): organiza UCs brasileiras em DOIS GRUPOS: 1) PROTEÇÃO INTEGRAL (objetivo: preservar natureza, uso indireto): Estação Ecológica, Reserva Biológica, PARQUE NACIONAL/Estadual/Municipal (visitação), Monumento Natural, Refúgio de Vida Silvestre. 2) USO SUSTENTÁVEL (compatibilizar conservação com uso sustentável): APA (Área de Proteção Ambiental), ARIE, Floresta Nacional, Reserva Extrativista, Reserva de Fauna, RDS (Reserva de Desenvolvimento Sustentável), RPPN (particular). Brasil: 2.572 UCs (federal, estadual, municipal), ~30% do território terrestre/marinho protegido.',
    difficulty: 'hard',
    topic: 'Legislação Ambiental',
    examInfo: 'CESPE - Unidades de conservação'
  },
  {
    question: 'A Lei de Crimes Ambientais (Lei 9.605/98) estabelece sanções:',
    options: [
      'Apenas administrativas',
      'Penais (reclusão, detenção, multas) e administrativas para condutas lesivas ao meio ambiente',
      'Somente para pessoas físicas',
      'Não prevê punições'
    ],
    correctAnswer: 1,
    explanation: 'Lei 9.605/98 (LEI DE CRIMES AMBIENTAIS): dispõe sobre sanções PENAIS (criminais) e ADMINISTRATIVAS para condutas/atividades LESIVAS AO MEIO AMBIENTE. Responsabilização: pessoa FÍSICA e JURÍDICA (empresa pode ser responsabilizada criminalmente, inovação). CRIMES: contra fauna (caça, matar animais, pesca proibida), flora (desmatamento, incêndio, extração ilegal), poluição, ordenamento urbano/patrimônio cultural, administração ambiental. PENAS: reclusão, detenção, multas, prestação de serviços, interdição, perda de bens. Possibilidade: transação penal, suspensão condicional. Reparação do dano: atenua pena.',
    difficulty: 'medium',
    topic: 'Legislação Ambiental',
    examInfo: 'VUNESP - Direito ambiental penal'
  }
];

// ============================================================================
// TEMA 9: CONFERÊNCIAS AMBIENTAIS (5 questões)
// ============================================================================

const conferenciasAmbientaisQuestions: Question[] = [
  {
    question: 'A Conferência das Nações Unidas sobre o Meio Ambiente Humano, considerada a primeira grande conferência ambiental da ONU, ocorreu em:',
    options: [
      'Rio de Janeiro (1992)',
      'Estocolmo (1972)',
      'Kyoto (1997)',
      'Paris (2015)'
    ],
    correctAnswer: 1,
    explanation: 'Conferência de ESTOCOLMO (Suécia, 1972 - Conferência das Nações Unidas sobre o Meio Ambiente Humano) foi a PRIMEIRA grande conferência AMBIENTAL da ONU. Marco histórico: inseriu meio ambiente na agenda internacional. Resultados: 1) Declaração de Estocolmo (26 princípios), 2) Plano de Ação (109 recomendações), 3) Criação do PNUMA (Programa das Nações Unidas para o Meio Ambiente). Contexto: preocupações com poluição industrial, crescimento populacional, limites do crescimento. Debate: países desenvolvidos (conservação) x países em desenvolvimento (direito ao desenvolvimento).',
    difficulty: 'medium',
    topic: 'Conferências Ambientais',
    examInfo: 'FCC - História da governança ambiental'
  },
  {
    question: 'A Rio-92 (ECO-92), Conferência das Nações Unidas sobre Meio Ambiente e Desenvolvimento realizada no Rio de Janeiro em 1992, resultou em:',
    options: [
      'Apenas discussões sem documentos',
      'Agenda 21, Convenção do Clima, Convenção da Biodiversidade, Declaração do Rio e Princípios sobre Florestas',
      'Fim da ONU',
      'Apenas acordos comerciais'
    ],
    correctAnswer: 1,
    explanation: 'RIO-92 (ECO-92, Cúpula da Terra): MAIOR conferência ambiental do século XX (Rio de Janeiro, 1992). Consolidou DESENVOLVIMENTO SUSTENTÁVEL. RESULTADOS: 1) AGENDA 21 (programa de ação global), 2) Convenção-Quadro das Nações Unidas sobre MUDANÇA DO CLIMA (UNFCCC - base para Kyoto e Paris), 3) Convenção sobre DIVERSIDADE BIOLÓGICA (CDB), 4) Declaração do RIO sobre Meio Ambiente e Desenvolvimento (27 princípios), 5) Declaração de Princípios sobre FLORESTAS. Participação: 179 países, 108 chefes de Estado. Evento paralelo: Fórum Global (ONGs).',
    difficulty: 'easy',
    topic: 'Conferências Ambientais',
    examInfo: 'CESPE - Rio-92 e desenvolvimento sustentável'
  },
  {
    question: 'A Rio+20, realizada em 2012 no Rio de Janeiro, teve como temas centrais:',
    options: [
      'Apenas energia nuclear',
      'Economia verde no contexto do desenvolvimento sustentável e erradicação da pobreza, e governança para o desenvolvimento sustentável',
      'Proibição de indústrias',
      'Apenas turismo'
    ],
    correctAnswer: 1,
    explanation: 'RIO+20 (Conferência das Nações Unidas sobre Desenvolvimento Sustentável, Rio de Janeiro, 2012): 20 anos após Rio-92. TEMAS: 1) ECONOMIA VERDE no contexto do desenvolvimento sustentável e erradicação da pobreza, 2) Quadro institucional para GOVERNANÇA do desenvolvimento sustentável. Documento final: "O Futuro que Queremos" (283 parágrafos). Iniciativas: processo para criação dos ODS (culminou na Agenda 2030/2015). Críticas: falta de compromissos vinculantes, resultados aquém das expectativas. Participação: 193 países, 100 chefas/es de Estado.',
    difficulty: 'hard',
    topic: 'Conferências Ambientais',
    examInfo: 'FGV - Governança ambiental global'
  },
  {
    question: 'As COPs (Conferências das Partes) são reuniões anuais relacionadas a:',
    options: [
      'Comércio internacional apenas',
      'Convenções internacionais, especialmente a Convenção do Clima (UNFCCC) para negociar ações contra mudanças climáticas',
      'Apenas esportes olímpicos',
      'Não têm relação com meio ambiente'
    ],
    correctAnswer: 1,
    explanation: 'COPs (Conferences of the Parties - Conferências das Partes) são reuniões ANUAIS dos países signatários de CONVENÇÕES INTERNACIONAIS, especialmente: 1) COP do CLIMA (UNFCCC - Convenção-Quadro sobre Mudança do Clima, desde 1995): negocia ações, metas, financiamento contra mudanças climáticas. COPs históricas: COP3 (Kyoto, 1997 - Protocolo), COP21 (Paris, 2015 - Acordo), COP26 (Glasgow, 2021), COP27 (Egito, 2022), COP28 (Dubai, 2023). 2) COP da Biodiversidade (CDB). Participação: países, observadores (ONGs, setor privado, academia).',
    difficulty: 'medium',
    topic: 'Conferências Ambientais',
    examInfo: 'CESPE - COPs e acordos climáticos'
  },
  {
    question: 'A COP26, realizada em Glasgow (2021), teve como destaque:',
    options: [
      'Fim de todos os acordos ambientais',
      'Compromissos de redução de metano, fim do desmatamento até 2030, e redução gradual do uso de carvão',
      'Aumento das emissões',
      'Nenhuma decisão importante'
    ],
    correctAnswer: 1,
    explanation: 'COP26 (Glasgow, Escócia, 2021): conferência climática adiada pela COVID-19. Presidência: Reino Unido. DESTAQUES: 1) Pacto de Glasgow pelo Clima: pela primeira vez menciona explicitamente REDUÇÃO GRADUAL do uso de CARVÃO (coal phase-down, termo amenizado por pressão Índia/China), 2) Declaração sobre FLORESTAS: 141 países comprometeram-se a zerar DESMATAMENTO até 2030, 3) Global Methane Pledge: reduzir emissões de METANO 30% até 2030 (EUA, UE, Brasil aderiu), 4) Financiamento climático, 5) Mercado de carbono (Art. 6 Paris). Meta 1,5°C ainda possível mas difícil.',
    difficulty: 'hard',
    topic: 'Conferências Ambientais',
    examInfo: 'VUNESP - Atualidades ambientais'
  }
];

// ============================================================================
// FUNÇÃO PARA SEED DE TODAS AS QUESTÕES DE MEIO AMBIENTE
// ============================================================================

export const seedAllMeioAmbienteQuestions = async () => {
  const allQuestions = [
    ...ecologiaQuestions,
    ...biomasBrasileirosQuestions,
    ...mudancasClimaticasQuestions,
    ...desmatamentoQuestions,
    ...recursosHidricosQuestions,
    ...energiaRenovavelQuestions,
    ...desenvolvimentoSustentavelQuestions,
    ...legislacaoAmbientalQuestions,
    ...conferenciasAmbientaisQuestions
  ];

  console.log(`🌳 Preparando ${allQuestions.length} questões de Meio Ambiente para importação em lote...`);

  const questionsToSeed = allQuestions.map((q) => ({
    subject_slug: SUBJECT_SLUG,
    subject_id: SUBJECT_ID,
    topic_slug: topicNameToSlug(q.topic),
    topic_name: q.topic,
    question: q.question,
    options: q.options,
    correct_answer: q.correctAnswer,
    explanation: q.explanation,
    difficulty: q.difficulty,
    exam_info: q.examInfo || 'Questão baseada em concursos públicos nacionais'
  }));

  try {
    const response = await fetch(
      `https://${projectId}.supabase.co/functions/v1/make-server-50734795/questions/bulk`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${publicAnonKey}`
        },
        body: JSON.stringify({ questions: questionsToSeed })
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Erro HTTP ${response.status}: ${errorText}`);
    }

    const result = await response.json();
    console.log('✅ Resposta do servidor:', result);
    return result;
  } catch (error) {
    console.error('❌ Erro ao enviar questões em lote:', error);
    throw error;
  }
};

// Função auxiliar para converter nome do tópico em slug
function topicNameToSlug(name: string): string {
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}
