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

const SUBJECT_SLUG = 'informatica';
const SUBJECT_ID = '22';

// ============================================================================
// TEMA 1: WINDOWS E LINUX (10 questões)
// ============================================================================

const windowsLinuxQuestions: Question[] = [
  {
    question: 'No Windows 10/11, qual combinação de teclas abre o Gerenciador de Tarefas?',
    options: [
      'Ctrl + Alt + Delete',
      'Ctrl + Shift + Esc',
      'Alt + F4',
      'Windows + X'
    ],
    correctAnswer: 1,
    explanation: 'Ctrl + Shift + Esc abre DIRETAMENTE o Gerenciador de Tarefas. Ctrl + Alt + Delete abre uma tela com opções (incluindo o Gerenciador).',
    difficulty: 'easy',
    topic: 'Windows e Linux',
    examInfo: 'FCC - Atalhos do Windows'
  },
  {
    question: 'No Linux, o comando para listar arquivos e diretórios é:',
    options: [
      'dir',
      'list',
      'ls',
      'show'
    ],
    correctAnswer: 2,
    explanation: '"ls" (list) é o comando padrão para listar arquivos no Linux. "dir" é usado no Windows/DOS.',
    difficulty: 'easy',
    topic: 'Windows e Linux',
    examInfo: 'CESPE - Comandos Linux básicos'
  },
  {
    question: 'No Windows, o sistema de arquivos mais moderno e recomendado é:',
    options: [
      'FAT32',
      'NTFS',
      'EXT4',
      'HFS+'
    ],
    correctAnswer: 1,
    explanation: 'NTFS (New Technology File System) é o sistema nativo do Windows, com suporte a permissões, criptografia e arquivos grandes. FAT32 é antigo e limitado.',
    difficulty: 'medium',
    topic: 'Windows e Linux',
    examInfo: 'FGV - Sistemas de arquivos'
  },
  {
    question: 'No Linux, para executar um comando com privilégios de superusuário (root), usa-se:',
    options: [
      'admin comando',
      'sudo comando',
      'root comando',
      'su comando'
    ],
    correctAnswer: 1,
    explanation: '"sudo" (Superuser DO) permite executar comandos específicos com privilégios de root. É mais seguro que "su" (Switch User) que muda para o usuário root.',
    difficulty: 'medium',
    topic: 'Windows e Linux',
    examInfo: 'CESPE - Administração Linux'
  },
  {
    question: 'No Windows, qual tecla de atalho minimiza todas as janelas e mostra a área de trabalho?',
    options: [
      'Windows + M',
      'Windows + D',
      'Alt + Tab',
      'Ctrl + Esc'
    ],
    correctAnswer: 1,
    explanation: 'Windows + D mostra/oculta a área de trabalho (toggle). Windows + M apenas minimiza (não restaura ao pressionar novamente).',
    difficulty: 'easy',
    topic: 'Windows e Linux',
    examInfo: 'VUNESP - Atalhos Windows'
  },
  {
    question: 'No Linux, o diretório raiz do sistema é representado por:',
    options: [
      'C:\\',
      '~',
      '/',
      '/root'
    ],
    correctAnswer: 2,
    explanation: '"/" é o diretório raiz no Linux. "~" representa o diretório home do usuário. "/root" é o home do superusuário.',
    difficulty: 'easy',
    topic: 'Windows e Linux',
    examInfo: 'FCC - Estrutura de diretórios Linux'
  },
  {
    question: 'No Windows, o utilitário "msconfig" é usado para:',
    options: [
      'Configurar a rede',
      'Gerenciar programas de inicialização',
      'Formatar discos',
      'Configurar impressoras'
    ],
    correctAnswer: 1,
    explanation: '"msconfig" (System Configuration) gerencia programas de inicialização, serviços e opções de boot. Muito usado para diagnóstico de problemas de inicialização.',
    difficulty: 'medium',
    topic: 'Windows e Linux',
    examInfo: 'FGV - Utilitários Windows'
  },
  {
    question: 'No Linux, qual comando exibe o manual de ajuda de outro comando?',
    options: [
      'help',
      'info',
      'man',
      'docs'
    ],
    correctAnswer: 2,
    explanation: '"man" (manual) exibe a documentação completa de comandos. Exemplo: "man ls" mostra o manual do comando ls.',
    difficulty: 'easy',
    topic: 'Windows e Linux',
    examInfo: 'CESPE - Sistema de ajuda Linux'
  },
  {
    question: 'No Windows, o "Modo de Segurança" (Safe Mode) é usado para:',
    options: [
      'Navegar na internet com segurança',
      'Inicializar com drivers e serviços mínimos para diagnóstico',
      'Proteger arquivos com senha',
      'Criar backup do sistema'
    ],
    correctAnswer: 1,
    explanation: 'Safe Mode carrega apenas drivers e serviços essenciais, permitindo diagnosticar e resolver problemas que impedem a inicialização normal.',
    difficulty: 'medium',
    topic: 'Windows e Linux',
    examInfo: 'VUNESP - Resolução de problemas'
  },
  {
    question: 'No Linux, qual comando é usado para alterar permissões de arquivos?',
    options: [
      'chown',
      'chmod',
      'chgrp',
      'perm'
    ],
    correctAnswer: 1,
    explanation: '"chmod" (change mode) altera permissões (r=read, w=write, x=execute). "chown" altera proprietário, "chgrp" altera grupo.',
    difficulty: 'hard',
    topic: 'Windows e Linux',
    examInfo: 'FCC - Permissões Linux'
  }
];

// ============================================================================
// TEMA 2: MICROSOFT OFFICE (10 questões)
// ============================================================================

const microsoftOfficeQuestions: Question[] = [
  {
    question: 'No Microsoft Word, qual tecla de atalho seleciona todo o texto do documento?',
    options: [
      'Ctrl + A',
      'Ctrl + T',
      'Ctrl + S',
      'Alt + A'
    ],
    correctAnswer: 0,
    explanation: 'Ctrl + A (All) seleciona todo o conteúdo do documento. É um atalho universal em diversos programas.',
    difficulty: 'easy',
    topic: 'Microsoft Office (Word, Excel, PowerPoint)',
    examInfo: 'FCC - Atalhos Word'
  },
  {
    question: 'No Excel, a função SOMA(A1:A10) calcula:',
    options: [
      'A média dos valores de A1 a A10',
      'O total da soma dos valores de A1 a A10',
      'O maior valor entre A1 e A10',
      'A quantidade de células de A1 a A10'
    ],
    correctAnswer: 1,
    explanation: 'SOMA() adiciona todos os valores do intervalo especificado. A1:A10 representa as células de A1 até A10.',
    difficulty: 'easy',
    topic: 'Microsoft Office (Word, Excel, PowerPoint)',
    examInfo: 'CESPE - Funções básicas Excel'
  },
  {
    question: 'No PowerPoint, qual modo de exibição permite organizar os slides em miniatura?',
    options: [
      'Modo Normal',
      'Modo de Apresentação',
      'Classificação de Slides',
      'Modo de Leitura'
    ],
    correctAnswer: 2,
    explanation: 'O modo "Classificação de Slides" (Slide Sorter) exibe miniaturas de todos os slides, facilitando a reorganização e visão geral da apresentação.',
    difficulty: 'medium',
    topic: 'Microsoft Office (Word, Excel, PowerPoint)',
    examInfo: 'FGV - PowerPoint'
  },
  {
    question: 'No Word, para criar uma lista numerada automaticamente, usa-se:',
    options: [
      'Ctrl + Shift + L',
      'Ctrl + Shift + N',
      'Botão de lista numerada na faixa de opções',
      'Alt + N'
    ],
    correctAnswer: 2,
    explanation: 'O botão de lista numerada (ícone 1. 2. 3.) na guia Início cria listas numeradas. Também pode-se digitar "1." e pressionar espaço para ativar automaticamente.',
    difficulty: 'easy',
    topic: 'Microsoft Office (Word, Excel, PowerPoint)',
    examInfo: 'VUNESP - Formatação Word'
  },
  {
    question: 'No Excel, a referência absoluta $A$1 significa que:',
    options: [
      'A célula será copiada para qualquer lugar',
      'A referência não mudará ao copiar a fórmula',
      'A célula está protegida',
      'O valor é fixo e não pode ser alterado'
    ],
    correctAnswer: 1,
    explanation: 'O símbolo $ trava a referência. $A$1 mantém sempre A1, independente de onde a fórmula for copiada. Sem $, a referência é relativa e se ajusta.',
    difficulty: 'hard',
    topic: 'Microsoft Office (Word, Excel, PowerPoint)',
    examInfo: 'CESPE - Referências Excel'
  },
  {
    question: 'No Word, o recurso "Controlar Alterações" permite:',
    options: [
      'Desfazer alterações feitas no documento',
      'Registrar e exibir modificações feitas por diferentes usuários',
      'Proteger o documento com senha',
      'Salvar versões anteriores automaticamente'
    ],
    correctAnswer: 1,
    explanation: 'Controlar Alterações (Track Changes) marca e registra todas as modificações, adições e exclusões, mostrando quem fez cada alteração. Útil para revisão colaborativa.',
    difficulty: 'medium',
    topic: 'Microsoft Office (Word, Excel, PowerPoint)',
    examInfo: 'FCC - Colaboração Word'
  },
  {
    question: 'No Excel, qual função retorna a média de um conjunto de valores?',
    options: [
      'MÉDIA()',
      'MED()',
      'AVG()',
      'AVERAGE()'
    ],
    correctAnswer: 0,
    explanation: 'MÉDIA() ou AVERAGE() (em inglês) calcula a média aritmética. No Excel em português, usa-se MÉDIA().',
    difficulty: 'easy',
    topic: 'Microsoft Office (Word, Excel, PowerPoint)',
    examInfo: 'VUNESP - Funções estatísticas'
  },
  {
    question: 'No PowerPoint, a tecla F5 serve para:',
    options: [
      'Salvar a apresentação',
      'Iniciar a apresentação desde o primeiro slide',
      'Inserir um novo slide',
      'Abrir o menu de ajuda'
    ],
    correctAnswer: 1,
    explanation: 'F5 inicia a apresentação desde o início. Shift + F5 inicia do slide atual.',
    difficulty: 'easy',
    topic: 'Microsoft Office (Word, Excel, PowerPoint)',
    examInfo: 'FGV - Atalhos PowerPoint'
  },
  {
    question: 'No Word, o que é "Mala Direta" (Mail Merge)?',
    options: [
      'Enviar e-mails em massa',
      'Criar documentos personalizados a partir de uma lista de dados',
      'Organizar correspondências recebidas',
      'Arquivar mensagens antigas'
    ],
    correctAnswer: 1,
    explanation: 'Mala Direta combina um documento modelo com uma fonte de dados (ex: Excel), gerando documentos personalizados (cartas, etiquetas, envelopes) para cada registro.',
    difficulty: 'hard',
    topic: 'Microsoft Office (Word, Excel, PowerPoint)',
    examInfo: 'CESPE - Recursos avançados Word'
  },
  {
    question: 'No Excel, qual símbolo inicia uma fórmula?',
    options: [
      '@',
      '#',
      '=',
      '+'
    ],
    correctAnswer: 2,
    explanation: 'Todas as fórmulas no Excel começam com o sinal de igual (=). Exemplo: =SOMA(A1:A10), =A1+B1.',
    difficulty: 'easy',
    topic: 'Microsoft Office (Word, Excel, PowerPoint)',
    examInfo: 'FCC - Fundamentos Excel'
  }
];

// ============================================================================
// TEMA 3: INTERNET E NAVEGADORES (10 questões)
// ============================================================================

const internetNavegadoresQuestions: Question[] = [
  {
    question: 'O protocolo usado para transferência de páginas web é:',
    options: [
      'FTP',
      'HTTP',
      'SMTP',
      'POP3'
    ],
    correctAnswer: 1,
    explanation: 'HTTP (HyperText Transfer Protocol) é o protocolo para transferência de páginas web. HTTPS é a versão segura (criptografada).',
    difficulty: 'easy',
    topic: 'Internet e Navegadores',
    examInfo: 'CESPE - Protocolos Internet'
  },
  {
    question: 'Nos navegadores, o modo de navegação anônima/privativa:',
    options: [
      'Torna o usuário completamente anônimo na internet',
      'Não salva histórico, cookies e dados de formulários localmente',
      'Criptografa toda a conexão',
      'Impede rastreamento por sites'
    ],
    correctAnswer: 1,
    explanation: 'Navegação privativa não salva dados LOCALMENTE (histórico, cookies), mas não torna anônimo. O provedor, sites e administradores de rede ainda podem rastrear.',
    difficulty: 'medium',
    topic: 'Internet e Navegadores',
    examInfo: 'FGV - Privacidade online'
  },
  {
    question: 'O que é um Cookie de navegação?',
    options: [
      'Um vírus que infecta o navegador',
      'Um pequeno arquivo de texto armazenado pelo site no computador do usuário',
      'Um tipo de firewall',
      'Um protocolo de segurança'
    ],
    correctAnswer: 1,
    explanation: 'Cookies são pequenos arquivos que sites armazenam no navegador para lembrar preferências, sessões de login, itens de carrinho, etc. Podem ser usados para rastreamento.',
    difficulty: 'easy',
    topic: 'Internet e Navegadores',
    examInfo: 'FCC - Conceitos web'
  },
  {
    question: 'A sigla URL significa:',
    options: [
      'Universal Resource Locator',
      'Uniform Resource Locator',
      'Unified Resource Link',
      'Universal Request Link'
    ],
    correctAnswer: 1,
    explanation: 'URL (Uniform Resource Locator) é o endereço completo de um recurso na internet. Exemplo: https://www.exemplo.com.br/pagina',
    difficulty: 'medium',
    topic: 'Internet e Navegadores',
    examInfo: 'VUNESP - Terminologia web'
  },
  {
    question: 'O protocolo HTTPS é mais seguro que HTTP porque:',
    options: [
      'É mais rápido',
      'Usa criptografia SSL/TLS',
      'Não pode ser rastreado',
      'É gratuito'
    ],
    correctAnswer: 1,
    explanation: 'HTTPS (HTTP Secure) usa criptografia SSL/TLS para proteger dados transmitidos entre navegador e servidor, impedindo interceptação e leitura por terceiros.',
    difficulty: 'medium',
    topic: 'Internet e Navegadores',
    examInfo: 'CESPE - Segurança web'
  },
  {
    question: 'No Google Chrome, qual atalho abre uma nova aba?',
    options: [
      'Ctrl + T',
      'Ctrl + N',
      'Ctrl + W',
      'Ctrl + Tab'
    ],
    correctAnswer: 0,
    explanation: 'Ctrl + T abre nova aba (Tab). Ctrl + N abre nova janela. Ctrl + W fecha aba. Ctrl + Tab alterna entre abas.',
    difficulty: 'easy',
    topic: 'Internet e Navegadores',
    examInfo: 'FCC - Atalhos navegadores'
  },
  {
    question: 'O que é Phishing?',
    options: [
      'Um tipo de antivírus',
      'Técnica de golpe para roubar dados pessoais através de sites/e-mails falsos',
      'Um navegador seguro',
      'Um protocolo de internet'
    ],
    correctAnswer: 1,
    explanation: 'Phishing é golpe onde criminosos se passam por empresas/pessoas confiáveis (bancos, e-commerce) para enganar vítimas e roubar senhas, dados bancários, etc.',
    difficulty: 'medium',
    topic: 'Internet e Navegadores',
    examInfo: 'FGV - Segurança digital'
  },
  {
    question: 'O que significa o cadeado verde/ícone de cadeado na barra de endereços?',
    options: [
      'O site é governamental',
      'O site possui certificado digital e usa HTTPS',
      'O site não tem vírus',
      'O site é gratuito'
    ],
    correctAnswer: 1,
    explanation: 'O cadeado indica que a conexão é segura (HTTPS) e o site possui certificado digital válido. NÃO garante que o site seja legítimo ou confiável.',
    difficulty: 'medium',
    topic: 'Internet e Navegadores',
    examInfo: 'CESPE - Certificados digitais'
  },
  {
    question: 'DNS (Domain Name System) é responsável por:',
    options: [
      'Proteger contra vírus',
      'Traduzir nomes de domínio em endereços IP',
      'Enviar e-mails',
      'Armazenar sites'
    ],
    correctAnswer: 1,
    explanation: 'DNS converte nomes legíveis (www.google.com) em endereços IP numéricos (142.250.185.78) que computadores usam para localizar servidores.',
    difficulty: 'hard',
    topic: 'Internet e Navegadores',
    examInfo: 'VUNESP - Infraestrutura Internet'
  },
  {
    question: 'No contexto web, o que é um "Favorito" ou "Bookmark"?',
    options: [
      'Uma página visitada recentemente',
      'Um endereço salvo para acesso rápido',
      'Uma aba aberta',
      'Um arquivo baixado'
    ],
    correctAnswer: 1,
    explanation: 'Favoritos/Bookmarks são URLs salvos pelo usuário no navegador para acesso rápido a sites frequentes, sem precisar digitar o endereço completo.',
    difficulty: 'easy',
    topic: 'Internet e Navegadores',
    examInfo: 'FCC - Recursos de navegadores'
  }
];

// ============================================================================
// TEMA 4: E-MAIL E WEBMAIL (10 questões)
// ============================================================================

const emailWebmailQuestions: Question[] = [
  {
    question: 'O protocolo usado para ENVIAR e-mails é:',
    options: [
      'POP3',
      'IMAP',
      'SMTP',
      'HTTP'
    ],
    correctAnswer: 2,
    explanation: 'SMTP (Simple Mail Transfer Protocol) é usado para ENVIAR e-mails. POP3 e IMAP são para RECEBER.',
    difficulty: 'medium',
    topic: 'E-mail e Webmail',
    examInfo: 'CESPE - Protocolos de e-mail'
  },
  {
    question: 'A diferença entre POP3 e IMAP é que:',
    options: [
      'POP3 é mais seguro que IMAP',
      'IMAP mantém e-mails no servidor, POP3 geralmente baixa e remove',
      'POP3 é para envio, IMAP para recebimento',
      'Não há diferença'
    ],
    correctAnswer: 1,
    explanation: 'IMAP sincroniza e mantém mensagens no servidor (acesso em múltiplos dispositivos). POP3 tradicionalmente baixa e remove do servidor (acesso em um único dispositivo).',
    difficulty: 'hard',
    topic: 'E-mail e Webmail',
    examInfo: 'FCC - Protocolos comparação'
  },
  {
    question: 'No campo "Cco" (Cópia Oculta/BCC), os destinatários:',
    options: [
      'Recebem o e-mail mas não veem outros destinatários',
      'Não recebem o e-mail',
      'Recebem uma cópia em texto simples',
      'São visíveis para todos'
    ],
    correctAnswer: 0,
    explanation: 'Cco (BCC - Blind Carbon Copy) oculta os endereços dos destinatários uns dos outros. Útil para proteger privacidade em envios para múltiplas pessoas.',
    difficulty: 'medium',
    topic: 'E-mail e Webmail',
    examInfo: 'FGV - Campos de e-mail'
  },
  {
    question: 'O que é SPAM?',
    options: [
      'E-mail com vírus',
      'E-mail não solicitado em massa (propaganda)',
      'E-mail importante',
      'Falha no servidor de e-mail'
    ],
    correctAnswer: 1,
    explanation: 'SPAM são e-mails não solicitados enviados em massa, geralmente propaganda. Filtros anti-spam detectam e movem para pasta separada.',
    difficulty: 'easy',
    topic: 'E-mail e Webmail',
    examInfo: 'VUNESP - Segurança e-mail'
  },
  {
    question: 'O símbolo "@" no endereço de e-mail significa:',
    options: [
      'And (e)',
      'At (em/arroba)',
      'Address (endereço)',
      'Automatic (automático)'
    ],
    correctAnswer: 1,
    explanation: '"@" (arroba) significa "at" (em), separando o nome do usuário do domínio. Exemplo: usuario@dominio.com.br',
    difficulty: 'easy',
    topic: 'E-mail e Webmail',
    examInfo: 'FCC - Conceitos básicos'
  },
  {
    question: 'Qual é uma boa prática ao receber e-mail suspeito com anexo?',
    options: [
      'Abrir o anexo para ver o que é',
      'Encaminhar para todos os contatos',
      'NÃO abrir anexos de remetentes desconhecidos',
      'Responder perguntando quem é'
    ],
    correctAnswer: 2,
    explanation: 'NUNCA abrir anexos de e-mails suspeitos ou remetentes desconhecidos. Podem conter vírus, ransomware, trojans. Deletar ou marcar como spam.',
    difficulty: 'easy',
    topic: 'E-mail e Webmail',
    examInfo: 'CESPE - Segurança digital'
  },
  {
    question: 'O que é Webmail?',
    options: [
      'E-mail enviado pela web',
      'Serviço de e-mail acessado através de navegador',
      'E-mail com links',
      'E-mail corporativo'
    ],
    correctAnswer: 1,
    explanation: 'Webmail permite acessar e-mails via navegador web (Gmail, Outlook.com, Yahoo Mail), sem necessidade de programas específicos como Outlook ou Thunderbird.',
    difficulty: 'easy',
    topic: 'E-mail e Webmail',
    examInfo: 'FGV - Tipos de acesso'
  },
  {
    question: 'No Gmail, a função "Arquivar" uma mensagem:',
    options: [
      'Deleta permanentemente',
      'Move para lixeira',
      'Remove da caixa de entrada mas mantém na conta',
      'Envia para o remetente'
    ],
    correctAnswer: 2,
    explanation: 'Arquivar remove da caixa de entrada mas NÃO deleta. E-mail fica acessível em "Todos os e-mails" e em labels/marcadores aplicados.',
    difficulty: 'medium',
    topic: 'E-mail e Webmail',
    examInfo: 'VUNESP - Gmail recursos'
  },
  {
    question: 'A assinatura digital em e-mails serve para:',
    options: [
      'Decorar o e-mail',
      'Garantir autenticidade do remetente e integridade da mensagem',
      'Adicionar imagens',
      'Aumentar o tamanho do e-mail'
    ],
    correctAnswer: 1,
    explanation: 'Assinatura digital usa criptografia para comprovar que o e-mail foi realmente enviado pelo remetente declarado e não foi alterado no caminho.',
    difficulty: 'hard',
    topic: 'E-mail e Webmail',
    examInfo: 'FCC - Certificação digital'
  },
  {
    question: 'Qual porta padrão do SMTP?',
    options: [
      '25',
      '80',
      '110',
      '443'
    ],
    correctAnswer: 0,
    explanation: 'Porta 25 é padrão SMTP (envio). Portas alternativas: 587 (TLS) e 465 (SSL). Porta 110 é POP3, 443 é HTTPS.',
    difficulty: 'hard',
    topic: 'E-mail e Webmail',
    examInfo: 'CESPE - Portas protocolos'
  }
];

// ============================================================================
// TEMA 5: SEGURANÇA DA INFORMAÇÃO (10 questões)
// ============================================================================

const segurancaInformacaoQuestions: Question[] = [
  {
    question: 'Qual tipo de malware sequestra dados e exige pagamento para liberá-los?',
    options: [
      'Vírus',
      'Trojan',
      'Ransomware',
      'Spyware'
    ],
    correctAnswer: 2,
    explanation: 'Ransomware criptografa arquivos da vítima e exige resgate (ransom) para descriptografar. Muito perigoso, pode paralisar empresas inteiras.',
    difficulty: 'medium',
    topic: 'Segurança da Informação',
    examInfo: 'FGV - Tipos de malware'
  },
  {
    question: 'O que é Firewall?',
    options: [
      'Um antivírus',
      'Sistema que monitora e controla tráfego de rede baseado em regras',
      'Um backup',
      'Uma senha forte'
    ],
    correctAnswer: 1,
    explanation: 'Firewall filtra tráfego de rede, bloqueando conexões não autorizadas e permitindo apenas comunicações aprovadas. Pode ser hardware ou software.',
    difficulty: 'easy',
    topic: 'Segurança da Informação',
    examInfo: 'CESPE - Segurança de rede'
  },
  {
    question: 'Uma senha forte deve conter:',
    options: [
      'Apenas números',
      'Nome e data de nascimento',
      'Combinação de letras maiúsculas, minúsculas, números e símbolos',
      'Uma palavra do dicionário'
    ],
    correctAnswer: 2,
    explanation: 'Senhas fortes combinam letras (maiúsculas e minúsculas), números e símbolos, com pelo menos 8-12 caracteres. Evitar informações pessoais e palavras comuns.',
    difficulty: 'easy',
    topic: 'Segurança da Informação',
    examInfo: 'FCC - Boas práticas de senha'
  },
  {
    question: 'O que é Autenticação de Dois Fatores (2FA)?',
    options: [
      'Usar duas senhas diferentes',
      'Fazer login em dois dispositivos',
      'Verificação em duas etapas (senha + código/token adicional)',
      'Ter dois antivírus'
    ],
    correctAnswer: 2,
    explanation: '2FA exige dois métodos de verificação: algo que você sabe (senha) + algo que você tem (celular com código SMS, app autenticador) ou algo que você é (biometria).',
    difficulty: 'medium',
    topic: 'Segurança da Informação',
    examInfo: 'FGV - Autenticação avançada'
  },
  {
    question: 'O que é um Trojan (Cavalo de Troia)?',
    options: [
      'Malware que se disfarça de programa legítimo',
      'Um tipo de firewall',
      'Um antivírus',
      'Uma técnica de backup'
    ],
    correctAnswer: 0,
    explanation: 'Trojan se disfarça de software útil mas executa ações maliciosas (roubo de dados, backdoor). Nome vem do cavalo de Troia da mitologia grega.',
    difficulty: 'medium',
    topic: 'Segurança da Informação',
    examInfo: 'VUNESP - Malware'
  },
  {
    question: 'O que é um ataque DDoS?',
    options: [
      'Roubo de senhas',
      'Sobrecarga de servidor com tráfego massivo para tirá-lo do ar',
      'Vírus que deleta arquivos',
      'Invasão de redes sociais'
    ],
    correctAnswer: 1,
    explanation: 'DDoS (Distributed Denial of Service) usa múltiplos computadores (botnet) para sobrecarregar um servidor com requisições, tornando-o inacessível.',
    difficulty: 'hard',
    topic: 'Segurança da Informação',
    examInfo: 'CESPE - Ataques de rede'
  },
  {
    question: 'O que significa LGPD?',
    options: [
      'Lei Geral de Proteção Digital',
      'Lei Geral de Proteção de Dados',
      'Lei de Garantia de Privacidade Digital',
      'Lei de Gestão de Processos Digitais'
    ],
    correctAnswer: 1,
    explanation: 'LGPD (Lei nº 13.709/2018) regula tratamento de dados pessoais no Brasil, garantindo privacidade e proteção. Empresas devem seguir regras rígidas sob pena de multas.',
    difficulty: 'medium',
    topic: 'Segurança da Informação',
    examInfo: 'FCC - Legislação brasileira'
  },
  {
    question: 'Qual tipo de malware se replica automaticamente pela rede?',
    options: [
      'Vírus',
      'Worm',
      'Spyware',
      'Adware'
    ],
    correctAnswer: 1,
    explanation: 'Worm se propaga automaticamente pela rede, sem precisar de arquivo hospedeiro (diferente de vírus). Pode se espalhar rapidamente e consumir recursos.',
    difficulty: 'medium',
    topic: 'Segurança da Informação',
    examInfo: 'FGV - Classificação de ameaças'
  },
  {
    question: 'O que é Engenharia Social?',
    options: [
      'Ciência que estuda redes sociais',
      'Técnica de manipulação psicológica para obter informações confidenciais',
      'Software de segurança',
      'Tipo de criptografia'
    ],
    correctAnswer: 1,
    explanation: 'Engenharia social manipula pessoas para revelar informações sigilosas (senhas, dados). Exemplos: se passar por técnico, criar senso de urgência, ganhar confiança.',
    difficulty: 'hard',
    topic: 'Segurança da Informação',
    examInfo: 'CESPE - Ameaças humanas'
  },
  {
    question: 'Certificado SSL/TLS serve para:',
    options: [
      'Aumentar velocidade da internet',
      'Criptografar comunicação entre navegador e servidor',
      'Bloquear propagandas',
      'Armazenar senhas'
    ],
    correctAnswer: 1,
    explanation: 'SSL/TLS criptografa dados transmitidos (senhas, cartões) entre navegador e site, impedindo interceptação. Sites com certificado usam HTTPS.',
    difficulty: 'medium',
    topic: 'Segurança da Informação',
    examInfo: 'VUNESP - Criptografia web'
  }
];

// ============================================================================
// TEMA 6: BACKUP E ARMAZENAMENTO (10 questões)
// ============================================================================

const backupArmazenamentoQuestions: Question[] = [
  {
    question: 'O que é Backup?',
    options: [
      'Apagar arquivos antigos',
      'Cópia de segurança dos dados',
      'Atualizar software',
      'Limpar o disco'
    ],
    correctAnswer: 1,
    explanation: 'Backup é cópia de segurança dos dados armazenada em local separado, permitindo recuperação em caso de perda, falha, ataque ransomware, etc.',
    difficulty: 'easy',
    topic: 'Backup e Armazenamento',
    examInfo: 'FCC - Conceitos básicos'
  },
  {
    question: 'Qual é a regra "3-2-1" de backup?',
    options: [
      '3 backups, 2 locais, 1 vez por mês',
      '3 cópias, 2 mídias diferentes, 1 externa/offsite',
      '3 servidores, 2 países, 1 nuvem',
      '3 arquivos, 2 pastas, 1 disco'
    ],
    correctAnswer: 1,
    explanation: 'Regra 3-2-1: manter 3 cópias dos dados (original + 2 backups), em 2 tipos de mídia diferentes, com 1 cópia externa (fora do local).',
    difficulty: 'hard',
    topic: 'Backup e Armazenamento',
    examInfo: 'CESPE - Boas práticas backup'
  },
  {
    question: 'SSD é mais rápido que HD tradicional porque:',
    options: [
      'Usa memória flash (sem partes móveis)',
      'É maior',
      'É mais barato',
      'Consome mais energia'
    ],
    correctAnswer: 0,
    explanation: 'SSD (Solid State Drive) usa memória flash, sem partes mecânicas móveis. Muito mais rápido que HD (Hard Disk) que usa discos magnéticos giratórios.',
    difficulty: 'medium',
    topic: 'Backup e Armazenamento',
    examInfo: 'FGV - Tecnologias de armazenamento'
  },
  {
    question: 'Qual tipo de backup copia APENAS arquivos alterados desde o último backup completo?',
    options: [
      'Backup completo',
      'Backup incremental',
      'Backup diferencial',
      'Backup espelhado'
    ],
    correctAnswer: 2,
    explanation: 'Backup DIFERENCIAL copia arquivos modificados desde o último backup COMPLETO. Incremental copia modificados desde o último backup (qualquer tipo).',
    difficulty: 'hard',
    topic: 'Backup e Armazenamento',
    examInfo: 'VUNESP - Tipos de backup'
  },
  {
    question: 'O que é Armazenamento em Nuvem (Cloud Storage)?',
    options: [
      'HD externo',
      'Pen drive',
      'Armazenamento de dados em servidores remotos via internet',
      'Disco local do computador'
    ],
    correctAnswer: 2,
    explanation: 'Cloud Storage armazena dados em servidores remotos acessíveis pela internet. Exemplos: Google Drive, OneDrive, Dropbox, iCloud.',
    difficulty: 'easy',
    topic: 'Backup e Armazenamento',
    examInfo: 'FCC - Computação em nuvem'
  },
  {
    question: 'RAID 1 (espelhamento) significa:',
    options: [
      'Dados divididos em múltiplos discos',
      'Dados duplicados em 2 discos idênticos',
      'Um disco de backup',
      'Disco mais rápido'
    ],
    correctAnswer: 1,
    explanation: 'RAID 1 espelha dados em 2 discos simultâneos. Se um falhar, o outro mantém os dados. Oferece redundância mas não aumenta espaço.',
    difficulty: 'hard',
    topic: 'Backup e Armazenamento',
    examInfo: 'CESPE - Sistemas RAID'
  },
  {
    question: 'O que é formatação de disco?',
    options: [
      'Aumentar capacidade do disco',
      'Preparar disco para uso, criando sistema de arquivos (apaga dados)',
      'Desfragmentar arquivos',
      'Verificar erros'
    ],
    correctAnswer: 1,
    explanation: 'Formatar prepara disco para armazenar dados, criando estrutura do sistema de arquivos (NTFS, FAT32, EXT4). APAGA todos os dados existentes.',
    difficulty: 'medium',
    topic: 'Backup e Armazenamento',
    examInfo: 'FGV - Gerenciamento de disco'
  },
  {
    question: 'Qual unidade de medida é maior?',
    options: [
      '1 Gigabyte (GB)',
      '1 Terabyte (TB)',
      '1 Megabyte (MB)',
      '1 Kilobyte (KB)'
    ],
    correctAnswer: 1,
    explanation: 'Ordem crescente: KB < MB < GB < TB < PB. 1 TB = 1024 GB = 1.048.576 MB.',
    difficulty: 'easy',
    topic: 'Backup e Armazenamento',
    examInfo: 'VUNESP - Unidades de medida'
  },
  {
    question: 'O que é desfragmentação de disco?',
    options: [
      'Apagar arquivos',
      'Reorganizar fragmentos de arquivos para melhorar performance',
      'Criar backup',
      'Formatar disco'
    ],
    correctAnswer: 1,
    explanation: 'Desfragmentação reorganiza dados fragmentados no HD, colocando partes de arquivos juntas, melhorando velocidade de leitura. Não necessário em SSDs.',
    difficulty: 'medium',
    topic: 'Backup e Armazenamento',
    examInfo: 'FCC - Manutenção de disco'
  },
  {
    question: 'Backup incremental vs diferencial: qual ocupa MENOS espaço?',
    options: [
      'Incremental',
      'Diferencial',
      'Ambos ocupam o mesmo',
      'Depende do dia da semana'
    ],
    correctAnswer: 0,
    explanation: 'Incremental ocupa menos espaço (copia apenas o que mudou desde o último backup de qualquer tipo). Diferencial cresce com o tempo (copia tudo desde o último completo).',
    difficulty: 'hard',
    topic: 'Backup e Armazenamento',
    examInfo: 'CESPE - Comparação estratégias'
  }
];

// ============================================================================
// TEMA 7: REDES DE COMPUTADORES (10 questões)
// ============================================================================

const redesComputadoresQuestions: Question[] = [
  {
    question: 'O que é um endereço IP?',
    options: [
      'Identificador único de dispositivo na rede',
      'Senha de internet',
      'Nome do computador',
      'Tipo de cabo'
    ],
    correctAnswer: 0,
    explanation: 'IP (Internet Protocol) é endereço numérico único que identifica dispositivos na rede. IPv4: 192.168.0.1; IPv6: 2001:0db8:85a3::1.',
    difficulty: 'easy',
    topic: 'Redes de Computadores',
    examInfo: 'CESPE - Fundamentos TCP/IP'
  },
  {
    question: 'A diferença entre IP público e IP privado é:',
    options: [
      'IP público é mais rápido',
      'IP público é acessível pela internet, privado apenas na rede local',
      'IP privado é mais seguro',
      'Não há diferença'
    ],
    correctAnswer: 1,
    explanation: 'IP público é visível na internet (fornecido pelo provedor). IP privado é usado apenas na rede local (192.168.x.x, 10.x.x.x, 172.16-31.x.x).',
    difficulty: 'medium',
    topic: 'Redes de Computadores',
    examInfo: 'FCC - Endereçamento IP'
  },
  {
    question: 'O que é uma LAN (Local Area Network)?',
    options: [
      'Rede de longa distância',
      'Rede local (residência, escritório, escola)',
      'Rede sem fio',
      'Rede social'
    ],
    correctAnswer: 1,
    explanation: 'LAN é rede local que conecta dispositivos em área limitada (casa, prédio). WAN (Wide Area Network) cobre grandes distâncias (internet).',
    difficulty: 'easy',
    topic: 'Redes de Computadores',
    examInfo: 'FGV - Tipos de rede'
  },
  {
    question: 'Qual dispositivo conecta múltiplos dispositivos em uma rede e encaminha dados?',
    options: [
      'Hub',
      'Switch',
      'Modem',
      'Repetidor'
    ],
    correctAnswer: 1,
    explanation: 'Switch conecta dispositivos na LAN e encaminha dados de forma inteligente (apenas para destino). Hub replica para todos (obsoleto). Router conecta redes diferentes.',
    difficulty: 'medium',
    topic: 'Redes de Computadores',
    examInfo: 'VUNESP - Equipamentos de rede'
  },
  {
    question: 'O que é Wi-Fi?',
    options: [
      'Marca de internet',
      'Tecnologia de rede sem fio baseada no padrão IEEE 802.11',
      'Tipo de cabo',
      'Programa de computador'
    ],
    correctAnswer: 1,
    explanation: 'Wi-Fi é tecnologia de rede sem fio (wireless) baseada no padrão 802.11. Permite conexão à internet/rede local sem cabos.',
    difficulty: 'easy',
    topic: 'Redes de Computadores',
    examInfo: 'FCC - Redes sem fio'
  },
  {
    question: 'O protocolo TCP (Transmission Control Protocol) garante:',
    options: [
      'Apenas velocidade máxima',
      'Entrega confiável e ordenada dos dados',
      'Criptografia automática',
      'Menor latência'
    ],
    correctAnswer: 1,
    explanation: 'TCP é protocolo orientado a conexão que garante entrega confiável, ordenada e sem erros. UDP é mais rápido mas não confiável (não verifica entrega).',
    difficulty: 'hard',
    topic: 'Redes de Computadores',
    examInfo: 'CESPE - Protocolos de transporte'
  },
  {
    question: 'Qual é a função de um Roteador (Router)?',
    options: [
      'Conectar computadores na mesma rede',
      'Conectar redes diferentes e encaminhar pacotes entre elas',
      'Amplificar sinal',
      'Armazenar dados'
    ],
    correctAnswer: 1,
    explanation: 'Roteador conecta diferentes redes (LAN com internet/WAN) e decide a melhor rota para enviar dados. Geralmente inclui firewall e NAT.',
    difficulty: 'medium',
    topic: 'Redes de Computadores',
    examInfo: 'FGV - Função de equipamentos'
  },
  {
    question: 'O que é VPN (Virtual Private Network)?',
    options: [
      'Rede social privada',
      'Conexão criptografada que cria túnel seguro na internet',
      'Tipo de firewall',
      'Rede sem senha'
    ],
    correctAnswer: 1,
    explanation: 'VPN cria túnel criptografado na internet, permitindo acesso remoto seguro a redes privadas e ocultando endereço IP real do usuário.',
    difficulty: 'medium',
    topic: 'Redes de Computadores',
    examInfo: 'VUNESP - Segurança de rede'
  },
  {
    question: 'Qual padrão de segurança Wi-Fi é mais seguro atualmente?',
    options: [
      'WEP',
      'WPA',
      'WPA2',
      'WPA3'
    ],
    correctAnswer: 3,
    explanation: 'WPA3 é o mais recente e seguro. WEP é obsoleto e inseguro. WPA2 ainda é amplamente usado e seguro. Ordem de segurança: WPA3 > WPA2 > WPA > WEP.',
    difficulty: 'hard',
    topic: 'Redes de Computadores',
    examInfo: 'FCC - Segurança Wi-Fi'
  },
  {
    question: 'O que significa a sigla MAC Address?',
    options: [
      'Macintosh Address',
      'Media Access Control Address',
      'Maximum Access Code',
      'Main Application Connection'
    ],
    correctAnswer: 1,
    explanation: 'MAC Address (Media Access Control) é identificador físico único gravado na placa de rede de cada dispositivo. Formato: 00:1A:2B:3C:4D:5E.',
    difficulty: 'hard',
    topic: 'Redes de Computadores',
    examInfo: 'CESPE - Endereçamento físico'
  }
];

// ============================================================================
// TEMA 8: HARDWARE E SOFTWARE (10 questões)
// ============================================================================

const hardwareSoftwareQuestions: Question[] = [
  {
    question: 'CPU significa:',
    options: [
      'Central Processing Unit (Unidade Central de Processamento)',
      'Computer Personal Unit',
      'Central Program Utility',
      'Cyber Protection Unit'
    ],
    correctAnswer: 0,
    explanation: 'CPU (processador) é o "cérebro" do computador, responsável por executar instruções de programas e processar dados.',
    difficulty: 'easy',
    topic: 'Hardware e Software',
    examInfo: 'FCC - Componentes básicos'
  },
  {
    question: 'A diferença entre RAM e ROM é:',
    options: [
      'RAM é permanente, ROM é temporária',
      'RAM é temporária (volátil), ROM é permanente',
      'Não há diferença',
      'RAM é mais lenta'
    ],
    correctAnswer: 1,
    explanation: 'RAM (Random Access Memory) é memória volátil (perde dados ao desligar). ROM (Read Only Memory) é não-volátil, armazena firmware/BIOS.',
    difficulty: 'medium',
    topic: 'Hardware e Software',
    examInfo: 'CESPE - Memórias'
  },
  {
    question: 'Qual componente é responsável pelo processamento gráfico em jogos?',
    options: [
      'CPU',
      'RAM',
      'GPU/Placa de Vídeo',
      'HD'
    ],
    correctAnswer: 2,
    explanation: 'GPU (Graphics Processing Unit) ou placa de vídeo é especializada em processar gráficos, essencial para jogos e aplicações visuais pesadas.',
    difficulty: 'easy',
    topic: 'Hardware e Software',
    examInfo: 'FGV - Hardware especializado'
  },
  {
    question: 'O que é Software de código aberto (Open Source)?',
    options: [
      'Software gratuito',
      'Software cujo código-fonte é disponível publicamente para modificação',
      'Software sem licença',
      'Software ilegal'
    ],
    correctAnswer: 1,
    explanation: 'Open Source permite acesso ao código-fonte para estudo, modificação e distribuição. Exemplos: Linux, LibreOffice, Firefox. Pode ser gratuito ou pago.',
    difficulty: 'medium',
    topic: 'Hardware e Software',
    examInfo: 'VUNESP - Licenciamento'
  },
  {
    question: 'Qual é a função da Fonte de Alimentação no computador?',
    options: [
      'Armazenar dados',
      'Processar informações',
      'Converter corrente alternada (AC) em corrente contínua (DC) para componentes',
      'Conectar à internet'
    ],
    correctAnswer: 2,
    explanation: 'Fonte de alimentação (PSU - Power Supply Unit) converte 110V/220V AC da tomada em voltagens DC (3.3V, 5V, 12V) que componentes usam.',
    difficulty: 'medium',
    topic: 'Hardware e Software',
    examInfo: 'FCC - Componentes de suporte'
  },
  {
    question: 'O que é BIOS/UEFI?',
    options: [
      'Sistema operacional',
      'Firmware que inicializa hardware e carrega o sistema operacional',
      'Programa de e-mail',
      'Tipo de processador'
    ],
    correctAnswer: 1,
    explanation: 'BIOS/UEFI é firmware armazenado na placa-mãe que inicializa hardware durante o boot e carrega o sistema operacional. UEFI é sucessor mais moderno do BIOS.',
    difficulty: 'hard',
    topic: 'Hardware e Software',
    examInfo: 'CESPE - Firmware e boot'
  },
  {
    question: 'Software proprietário é aquele que:',
    options: [
      'É gratuito',
      'Tem código-fonte fechado e é controlado por proprietário/empresa',
      'Não funciona',
      'É ilegal'
    ],
    correctAnswer: 1,
    explanation: 'Software proprietário tem código-fonte fechado, licença restritiva e é controlado pelo proprietário. Exemplos: Windows, Photoshop, Office.',
    difficulty: 'medium',
    topic: 'Hardware e Software',
    examInfo: 'FGV - Tipos de licença'
  },
  {
    question: 'Qual componente armazena permanentemente o sistema operacional e arquivos?',
    options: [
      'RAM',
      'CPU',
      'HD/SSD',
      'GPU'
    ],
    correctAnswer: 2,
    explanation: 'HD (Hard Disk) ou SSD (Solid State Drive) são armazenamento permanente (não-volátil). RAM é temporária e perde dados ao desligar.',
    difficulty: 'easy',
    topic: 'Hardware e Software',
    examInfo: 'VUNESP - Armazenamento'
  },
  {
    question: 'O que é Driver?',
    options: [
      'Programa que permite o sistema operacional se comunicar com hardware',
      'Tipo de processador',
      'Cabo de conexão',
      'Usuário do computador'
    ],
    correctAnswer: 0,
    explanation: 'Driver é software que faz a ponte entre sistema operacional e hardware (impressora, placa de vídeo, etc.), traduzindo comandos.',
    difficulty: 'medium',
    topic: 'Hardware e Software',
    examInfo: 'FCC - Software de sistema'
  },
  {
    question: 'Qual é a função da Placa-Mãe (Motherboard)?',
    options: [
      'Processar dados',
      'Conectar e permitir comunicação entre todos os componentes do computador',
      'Armazenar arquivos',
      'Exibir imagens'
    ],
    correctAnswer: 1,
    explanation: 'Placa-mãe é circuito principal que conecta e permite comunicação entre CPU, RAM, HD, placa de vídeo e demais componentes através de barramentos.',
    difficulty: 'easy',
    topic: 'Hardware e Software',
    examInfo: 'CESPE - Arquitetura de computadores'
  }
];

// ============================================================================
// TEMA 9: CLOUD COMPUTING (10 questões)
// ============================================================================

const cloudComputingQuestions: Question[] = [
  {
    question: 'O que é Cloud Computing (Computação em Nuvem)?',
    options: [
      'Backup em HD externo',
      'Fornecimento de recursos computacionais via internet sob demanda',
      'Aplicativo de meteorologia',
      'Rede social'
    ],
    correctAnswer: 1,
    explanation: 'Cloud Computing oferece serviços de TI (servidores, armazenamento, bancos de dados, software) pela internet, pagos por uso, escaláveis e sob demanda.',
    difficulty: 'easy',
    topic: 'Cloud Computing',
    examInfo: 'FCC - Conceitos fundamentais'
  },
  {
    question: 'Quais são os três modelos principais de serviço em nuvem?',
    options: [
      'Básico, Intermediário, Avançado',
      'IaaS, PaaS, SaaS',
      'Público, Privado, Híbrido',
      'Small, Medium, Large'
    ],
    correctAnswer: 1,
    explanation: 'IaaS (Infrastructure), PaaS (Platform), SaaS (Software) as a Service. IaaS = infraestrutura, PaaS = plataforma, SaaS = software pronto.',
    difficulty: 'hard',
    topic: 'Cloud Computing',
    examInfo: 'CESPE - Modelos de serviço'
  },
  {
    question: 'Um exemplo de SaaS (Software as a Service) é:',
    options: [
      'Amazon EC2',
      'Google App Engine',
      'Gmail / Microsoft 365',
      'VMware'
    ],
    correctAnswer: 2,
    explanation: 'SaaS oferece software pronto via navegador: Gmail, Office 365, Salesforce, Dropbox. IaaS: AWS EC2, Azure VMs. PaaS: Google App Engine, Heroku.',
    difficulty: 'medium',
    topic: 'Cloud Computing',
    examInfo: 'FGV - Exemplos práticos'
  },
  {
    question: 'Nuvem pública vs nuvem privada: a principal diferença é:',
    options: [
      'Pública é gratuita',
      'Pública é compartilhada entre clientes, privada é exclusiva de uma organização',
      'Privada é mais lenta',
      'Não há diferença'
    ],
    correctAnswer: 1,
    explanation: 'Nuvem PÚBLICA é compartilhada (AWS, Azure, GCP). Nuvem PRIVADA é infraestrutura exclusiva de uma empresa. Nuvem HÍBRIDA combina ambas.',
    difficulty: 'medium',
    topic: 'Cloud Computing',
    examInfo: 'VUNESP - Tipos de implantação'
  },
  {
    question: 'Qual é uma VANTAGEM da computação em nuvem?',
    options: [
      'Necessita mais hardware local',
      'Escalabilidade e pagamento por uso',
      'Sempre offline',
      'Requer equipe grande de TI'
    ],
    correctAnswer: 1,
    explanation: 'Vantagens: escalabilidade (aumenta/diminui recursos), pagamento por uso (sem investimento inicial alto), acessível de qualquer lugar, atualizações automáticas.',
    difficulty: 'easy',
    topic: 'Cloud Computing',
    examInfo: 'FCC - Benefícios'
  },
  {
    question: 'O que é Elasticidade na nuvem?',
    options: [
      'Flexibilidade do cabo de rede',
      'Capacidade de aumentar ou reduzir recursos automaticamente conforme demanda',
      'Backup automático',
      'Velocidade da internet'
    ],
    correctAnswer: 1,
    explanation: 'Elasticidade permite ajuste automático de recursos (CPU, memória, storage) baseado na demanda, otimizando custos e performance.',
    difficulty: 'hard',
    topic: 'Cloud Computing',
    examInfo: 'CESPE - Características da nuvem'
  },
  {
    question: 'Google Drive, OneDrive e Dropbox são exemplos de:',
    options: [
      'Sistemas operacionais',
      'Navegadores',
      'Serviços de armazenamento em nuvem',
      'Antivírus'
    ],
    correctAnswer: 2,
    explanation: 'São serviços de cloud storage (armazenamento em nuvem), permitindo guardar e sincronizar arquivos online acessíveis de qualquer dispositivo.',
    difficulty: 'easy',
    topic: 'Cloud Computing',
    examInfo: 'FGV - Aplicações práticas'
  },
  {
    question: 'Qual é um DESAFIO/RISCO da computação em nuvem?',
    options: [
      'Escalabilidade',
      'Economia de custos',
      'Dependência de conexão internet e preocupações com segurança/privacidade',
      'Facilidade de uso'
    ],
    correctAnswer: 2,
    explanation: 'Desafios: dependência de internet estável, preocupações com segurança/privacidade dos dados, vendor lock-in (dificuldade de migrar entre provedores).',
    difficulty: 'medium',
    topic: 'Cloud Computing',
    examInfo: 'VUNESP - Riscos e limitações'
  },
  {
    question: 'O que significa "Multitenancy" (Multilocação) na nuvem?',
    options: [
      'Múltiplos usuários',
      'Múltiplos clientes compartilham mesma infraestrutura mantendo isolamento',
      'Múltiplos servidores',
      'Múltiplos pagamentos'
    ],
    correctAnswer: 1,
    explanation: 'Multitenancy permite que múltiplos clientes (tenants) usem a mesma infraestrutura física/software com dados e configurações isolados, otimizando recursos.',
    difficulty: 'hard',
    topic: 'Cloud Computing',
    examInfo: 'FCC - Arquitetura de nuvem'
  },
  {
    question: 'Principais provedores de nuvem pública incluem:',
    options: [
      'Amazon AWS, Microsoft Azure, Google Cloud Platform',
      'Facebook, Instagram, Twitter',
      'Windows, Linux, macOS',
      'Chrome, Firefox, Safari'
    ],
    correctAnswer: 0,
    explanation: 'Os "Big Three" da nuvem são AWS (Amazon), Azure (Microsoft) e GCP (Google). Outros: IBM Cloud, Oracle Cloud, Alibaba Cloud.',
    difficulty: 'easy',
    topic: 'Cloud Computing',
    examInfo: 'CESPE - Mercado de cloud'
  }
];

// ============================================================================
// FUNÇÃO PARA SEED DE TODAS AS QUESTÕES DE INFORMÁTICA
// ============================================================================

export const seedAllInformaticaQuestions = async () => {
  const allQuestions = [
    ...windowsLinuxQuestions,
    ...microsoftOfficeQuestions,
    ...internetNavegadoresQuestions,
    ...emailWebmailQuestions,
    ...segurancaInformacaoQuestions,
    ...backupArmazenamentoQuestions,
    ...redesComputadoresQuestions,
    ...hardwareSoftwareQuestions,
    ...cloudComputingQuestions
  ];

  console.log(`📝 Preparando ${allQuestions.length} questões de Informática para importação em lote...`);

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
