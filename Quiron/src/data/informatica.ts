// INFORMÁTICA - 50 QUESTÕES
// Área Conhecimentos Gerais - Quiron Concursos
// Questões essenciais para concursos públicos

import { GameQuestion } from './gameQuestions';

export const informaticaQuestions: GameQuestion[] = [
  // ========================================
  // CONCEITOS BÁSICOS E HARDWARE
  // ========================================
  {
    id: 'info-001',
    area: 'conhecimentos-gerais',
    subject: 'Informática',
    question: 'A CPU (Unidade Central de Processamento) é responsável por executar instruções e processar dados.',
    correctAnswer: true,
    explanation: 'CERTO. A CPU é o "cérebro" do computador, responsável por executar instruções, realizar cálculos e processar dados dos programas.',
    difficulty: 'facil'
  },
  {
    id: 'info-002',
    area: 'conhecimentos-gerais',
    subject: 'Informática',
    question: 'A memória RAM é uma memória volátil, perdendo seus dados quando o computador é desligado.',
    correctAnswer: true,
    explanation: 'CERTO. RAM (Random Access Memory) é volátil: dados são perdidos sem energia. ROM é não-volátil (mantém dados).',
    difficulty: 'facil'
  },
  {
    id: 'info-003',
    area: 'conhecimentos-gerais',
    subject: 'Informática',
    question: 'O HD (Hard Disk) é um dispositivo de armazenamento volátil.',
    correctAnswer: false,
    explanation: 'ERRADO. HD é NÃO-volátil (mantém dados sem energia). É armazenamento permanente, ao contrário da RAM que é volátil.',
    difficulty: 'facil'
  },
  {
    id: 'info-004',
    area: 'conhecimentos-gerais',
    subject: 'Informática',
    question: 'SSD (Solid State Drive) é mais rápido que HD tradicional por não possuir partes móveis.',
    correctAnswer: true,
    explanation: 'CERTO. SSD usa memória flash (sem peças mecânicas), sendo muito mais rápido que HD (disco magnético com partes móveis).',
    difficulty: 'facil'
  },
  {
    id: 'info-005',
    area: 'conhecimentos-gerais',
    subject: 'Informática',
    question: '1 Gigabyte (GB) equivale a aproximadamente 1024 Megabytes (MB).',
    correctAnswer: true,
    explanation: 'CERTO. Unidades: 1 KB = 1024 bytes, 1 MB = 1024 KB, 1 GB = 1024 MB, 1 TB = 1024 GB (sistema binário).',
    difficulty: 'facil'
  },

  // ========================================
  // SISTEMAS OPERACIONAIS
  // ========================================
  {
    id: 'info-006',
    area: 'conhecimentos-gerais',
    subject: 'Informática',
    question: 'O sistema operacional é responsável por gerenciar hardware, software e recursos do computador.',
    correctAnswer: true,
    explanation: 'CERTO. SO (Windows, Linux, macOS) gerencia memória, processos, arquivos, dispositivos e interface com usuário.',
    difficulty: 'facil'
  },
  {
    id: 'info-007',
    area: 'conhecimentos-gerais',
    subject: 'Informática',
    question: 'Linux é um sistema operacional de código aberto e gratuito.',
    correctAnswer: true,
    explanation: 'CERTO. Linux é open source (código aberto), gratuito, com diversas distribuições (Ubuntu, Debian, Fedora, etc).',
    difficulty: 'facil'
  },
  {
    id: 'info-008',
    area: 'conhecimentos-gerais',
    subject: 'Informática',
    question: 'No Windows, a extensão ".exe" indica um arquivo executável de programa.',
    correctAnswer: true,
    explanation: 'CERTO. .EXE = executable (executável). Outros: .DOC/.DOCX (Word), .PDF (Adobe), .TXT (texto), .JPG (imagem).',
    difficulty: 'facil'
  },
  {
    id: 'info-009',
    area: 'conhecimentos-gerais',
    subject: 'Informática',
    question: 'O atalho "Ctrl + C" é usado para copiar texto ou arquivo selecionado.',
    correctAnswer: true,
    explanation: 'CERTO. Ctrl+C = copiar, Ctrl+X = recortar, Ctrl+V = colar, Ctrl+Z = desfazer. Atalhos universais em Windows/Linux.',
    difficulty: 'facil'
  },
  {
    id: 'info-010',
    area: 'conhecimentos-gerais',
    subject: 'Informática',
    question: 'No Windows, a tecla "Print Screen" captura a tela inteira.',
    correctAnswer: true,
    explanation: 'CERTO. Print Screen (PrtScn) captura tela inteira. Alt+Print Screen captura janela ativa. Windows+Shift+S abre ferramenta de recorte.',
    difficulty: 'facil'
  },

  // ========================================
  // MICROSOFT WORD
  // ========================================
  {
    id: 'info-011',
    area: 'conhecimentos-gerais',
    subject: 'Informática',
    question: 'No Word, o atalho "Ctrl + B" serve para salvar o documento.',
    correctAnswer: true,
    explanation: 'CERTO. Ctrl+B = salvar (Save). Ctrl+O = abrir, Ctrl+N = negrito (bold), Ctrl+P = imprimir, Ctrl+Z = desfazer.',
    difficulty: 'facil'
  },
  {
    id: 'info-012',
    area: 'conhecimentos-gerais',
    subject: 'Informática',
    question: 'No Word, é possível inserir quebra de página usando "Ctrl + Enter".',
    correctAnswer: true,
    explanation: 'CERTO. Ctrl+Enter insere quebra de página, forçando início de nova página. Shift+Enter = quebra de linha.',
    difficulty: 'medio'
  },
  {
    id: 'info-013',
    area: 'conhecimentos-gerais',
    subject: 'Informática',
    question: 'No Word, cabeçalho e rodapé aparecem em todas as páginas do documento.',
    correctAnswer: true,
    explanation: 'CERTO. Cabeçalho (topo) e rodapé (base) repetem-se em todas as páginas, sendo úteis para numeração, títulos, logotipos.',
    difficulty: 'facil'
  },
  {
    id: 'info-014',
    area: 'conhecimentos-gerais',
    subject: 'Informática',
    question: 'No Word, a ferramenta "Localizar e Substituir" permite trocar todas as ocorrências de uma palavra por outra.',
    correctAnswer: true,
    explanation: 'CERTO. Ctrl+U (ou Ctrl+H em inglês) abre "Localizar e Substituir", permitindo busca e substituição em massa.',
    difficulty: 'facil'
  },
  {
    id: 'info-015',
    area: 'conhecimentos-gerais',
    subject: 'Informática',
    question: 'No Word, marcadores e numeração são recursos para criar listas.',
    correctAnswer: true,
    explanation: 'CERTO. Marcadores (bullets) criam listas não ordenadas (•). Numeração cria listas ordenadas (1, 2, 3). Útil para organização.',
    difficulty: 'facil'
  },

  // ========================================
  // MICROSOFT EXCEL
  // ========================================
  {
    id: 'info-016',
    area: 'conhecimentos-gerais',
    subject: 'Informática',
    question: 'No Excel, a função "=SOMA(A1:A10)" soma todos os valores do intervalo A1 até A10.',
    correctAnswer: true,
    explanation: 'CERTO. SOMA() adiciona valores. A1:A10 é intervalo (range). Outras funções: MÉDIA, MÁXIMO, MÍNIMO, CONT.NÚM.',
    difficulty: 'facil'
  },
  {
    id: 'info-017',
    area: 'conhecimentos-gerais',
    subject: 'Informática',
    question: 'No Excel, "$A$1" é uma referência absoluta que não muda ao copiar a fórmula.',
    correctAnswer: true,
    explanation: 'CERTO. $A$1 = absoluta (fixa). A1 = relativa (muda ao copiar). $A1 = coluna fixa. A$1 = linha fixa.',
    difficulty: 'medio'
  },
  {
    id: 'info-018',
    area: 'conhecimentos-gerais',
    subject: 'Informática',
    question: 'No Excel, a função "=SE(A1>10; SIM; NÃO)" retorna "SIM" se A1 for maior que 10.',
    correctAnswer: true,
    explanation: 'CERTO. Função SE (IF): testa condição. Sintaxe: =SE(teste; valor_se_verdadeiro; valor_se_falso). Lógica condicional.',
    difficulty: 'medio'
  },
  {
    id: 'info-019',
    area: 'conhecimentos-gerais',
    subject: 'Informática',
    question: 'No Excel, gráficos podem ser criados a partir de dados de planilhas.',
    correctAnswer: true,
    explanation: 'CERTO. Excel permite criar gráficos (colunas, linhas, pizza, barras, dispersão) para visualizar dados das células.',
    difficulty: 'facil'
  },
  {
    id: 'info-020',
    area: 'conhecimentos-gerais',
    subject: 'Informática',
    question: 'No Excel, a função "=PROCV" busca valores em uma tabela verticalmente.',
    correctAnswer: true,
    explanation: 'CERTO. PROCV (VLOOKUP) busca valor na primeira coluna e retorna valor de outra coluna da mesma linha. Essencial para buscas.',
    difficulty: 'medio'
  },

  // ========================================
  // INTERNET E NAVEGADORES
  // ========================================
  {
    id: 'info-021',
    area: 'conhecimentos-gerais',
    subject: 'Informática',
    question: 'HTTP e HTTPS são protocolos de transferência de páginas web, sendo HTTPS mais seguro por usar criptografia.',
    correctAnswer: true,
    explanation: 'CERTO. HTTP = Hypertext Transfer Protocol. HTTPS = HTTP Secure (com SSL/TLS). HTTPS criptografa dados, protegendo senhas e informações.',
    difficulty: 'facil'
  },
  {
    id: 'info-022',
    area: 'conhecimentos-gerais',
    subject: 'Informática',
    question: 'URL (Uniform Resource Locator) é o endereço completo de um site na internet.',
    correctAnswer: true,
    explanation: 'CERTO. URL é o endereço web: https://www.site.com.br/pagina. Contém protocolo, domínio e caminho.',
    difficulty: 'facil'
  },
  {
    id: 'info-023',
    area: 'conhecimentos-gerais',
    subject: 'Informática',
    question: 'Cookies são pequenos arquivos armazenados no navegador para lembrar preferências e login de sites.',
    correctAnswer: true,
    explanation: 'CERTO. Cookies armazenam dados (login, carrinho, preferências). Sites usam para reconhecer visitantes. Podem ser excluídos.',
    difficulty: 'facil'
  },
  {
    id: 'info-024',
    area: 'conhecimentos-gerais',
    subject: 'Informática',
    question: 'O modo anônimo/privado do navegador não deixa rastros no histórico local, mas não garante anonimato total na internet.',
    correctAnswer: true,
    explanation: 'CERTO. Modo privado não salva histórico/cookies localmente, mas seu provedor (ISP) e sites ainda veem sua atividade. Não é VPN.',
    difficulty: 'medio'
  },
  {
    id: 'info-025',
    area: 'conhecimentos-gerais',
    subject: 'Informática',
    question: 'Download é o ato de receber/baixar arquivos da internet. Upload é enviar arquivos.',
    correctAnswer: true,
    explanation: 'CERTO. Download = receber (internet → seu PC). Upload = enviar (seu PC → internet). Medidos em Mbps (megabits por segundo).',
    difficulty: 'facil'
  },

  // ========================================
  // E-MAIL E COMUNICAÇÃO
  // ========================================
  {
    id: 'info-026',
    area: 'conhecimentos-gerais',
    subject: 'Informática',
    question: 'No e-mail, "Cc" (com cópia) envia cópia visível a outros destinatários. "Cco" (cópia oculta) envia cópia invisível.',
    correctAnswer: true,
    explanation: 'CERTO. Cc = Carbon Copy (cópia visível a todos). Cco/Bcc = Blind Carbon Copy (destinatários não veem uns aos outros).',
    difficulty: 'facil'
  },
  {
    id: 'info-027',
    area: 'conhecimentos-gerais',
    subject: 'Informática',
    question: 'Spam é o nome dado a e-mails indesejados e não solicitados, geralmente publicitários.',
    correctAnswer: true,
    explanation: 'CERTO. Spam = lixo eletrônico, e-mails em massa não solicitados. Phishing = fraude por e-mail (roubo de dados).',
    difficulty: 'facil'
  },
  {
    id: 'info-028',
    area: 'conhecimentos-gerais',
    subject: 'Informática',
    question: 'Anexos de e-mail podem conter vírus, sendo importante verificar remetente antes de abrir.',
    correctAnswer: true,
    explanation: 'CERTO. Anexos (.exe, .zip, documentos com macros) podem ter malware. Nunca abra anexos de remetentes desconhecidos.',
    difficulty: 'facil'
  },
  {
    id: 'info-029',
    area: 'conhecimentos-gerais',
    subject: 'Informática',
    question: 'SMTP é o protocolo usado para enviar e-mails. POP3 e IMAP são protocolos para receber.',
    correctAnswer: true,
    explanation: 'CERTO. SMTP = Simple Mail Transfer Protocol (envio). POP3 = download e exclusão do servidor. IMAP = sincroniza sem excluir.',
    difficulty: 'medio'
  },
  {
    id: 'info-030',
    area: 'conhecimentos-gerais',
    subject: 'Informática',
    question: 'WhatsApp, Telegram e Signal são aplicativos de mensagens instantâneas com criptografia.',
    correctAnswer: true,
    explanation: 'CERTO. Apps de mensagens modernas usam criptografia de ponta a ponta (E2E), protegendo conversas de interceptação.',
    difficulty: 'facil'
  },

  // ========================================
  // SEGURANÇA DA INFORMAÇÃO
  // ========================================
  {
    id: 'info-031',
    area: 'conhecimentos-gerais',
    subject: 'Informática',
    question: 'Firewall é um sistema de segurança que controla tráfego de rede, bloqueando acessos não autorizados.',
    correctAnswer: true,
    explanation: 'CERTO. Firewall (parede de fogo) filtra pacotes de dados, bloqueando conexões suspeitas. Pode ser software ou hardware.',
    difficulty: 'facil'
  },
  {
    id: 'info-032',
    area: 'conhecimentos-gerais',
    subject: 'Informática',
    question: 'Antivírus detecta, previne e remove malwares (vírus, trojans, worms, ransomware).',
    correctAnswer: true,
    explanation: 'CERTO. Antivírus protege contra malware usando assinaturas, heurística e análise comportamental. Deve ser atualizado regularmente.',
    difficulty: 'facil'
  },
  {
    id: 'info-033',
    area: 'conhecimentos-gerais',
    subject: 'Informática',
    question: 'Ransomware é um malware que criptografa arquivos e exige resgate (pagamento) para liberá-los.',
    correctAnswer: true,
    explanation: 'CERTO. Ransomware sequestra dados, criptografando-os. Exige pagamento (geralmente em criptomoedas) para devolver acesso. Backup previne.',
    difficulty: 'facil'
  },
  {
    id: 'info-034',
    area: 'conhecimentos-gerais',
    subject: 'Informática',
    question: 'Phishing é uma técnica de fraude que usa e-mails falsos para roubar senhas e dados pessoais.',
    correctAnswer: true,
    explanation: 'CERTO. Phishing imita sites/e-mails legítimos para enganar vítimas e roubar credenciais. Desconfie de links suspeitos e urgências.',
    difficulty: 'facil'
  },
  {
    id: 'info-035',
    area: 'conhecimentos-gerais',
    subject: 'Informática',
    question: 'Autenticação de dois fatores (2FA) adiciona camada extra de segurança além da senha.',
    correctAnswer: true,
    explanation: 'CERTO. 2FA exige senha + código (SMS, app autenticador, biometria). Mesmo que senha vaze, invasor não acessa sem segundo fator.',
    difficulty: 'facil'
  },

  // ========================================
  // CLOUD COMPUTING E SERVIÇOS
  // ========================================
  {
    id: 'info-036',
    area: 'conhecimentos-gerais',
    subject: 'Informática',
    question: 'Cloud Computing (computação em nuvem) permite armazenar e acessar dados pela internet.',
    correctAnswer: true,
    explanation: 'CERTO. Nuvem armazena dados em servidores remotos (Google Drive, OneDrive, Dropbox, iCloud), acessíveis de qualquer lugar.',
    difficulty: 'facil'
  },
  {
    id: 'info-037',
    area: 'conhecimentos-gerais',
    subject: 'Informática',
    question: 'Google Drive, OneDrive e Dropbox são serviços de armazenamento em nuvem.',
    correctAnswer: true,
    explanation: 'CERTO. Serviços de cloud storage permitem backup, sincronização e compartilhamento de arquivos online.',
    difficulty: 'facil'
  },
  {
    id: 'info-038',
    area: 'conhecimentos-gerais',
    subject: 'Informática',
    question: 'VPN (Rede Privada Virtual) criptografa conexão e oculta endereço IP, aumentando privacidade.',
    correctAnswer: true,
    explanation: 'CERTO. VPN cria túnel criptografado, mascarando IP e localização. Útil para segurança em Wi-Fi público e acesso a conteúdo regional.',
    difficulty: 'medio'
  },
  {
    id: 'info-039',
    area: 'conhecimentos-gerais',
    subject: 'Informática',
    question: 'Backup é cópia de segurança de dados, essencial para recuperação em caso de perda ou ataque.',
    correctAnswer: true,
    explanation: 'CERTO. Backup protege contra falhas de hardware, exclusão acidental, ransomware. Regra 3-2-1: 3 cópias, 2 mídias, 1 offsite.',
    difficulty: 'facil'
  },
  {
    id: 'info-040',
    area: 'conhecimentos-gerais',
    subject: 'Informática',
    question: 'SaaS (Software as a Service) é modelo onde software é acessado pela internet, sem instalação local.',
    correctAnswer: true,
    explanation: 'CERTO. SaaS: Google Docs, Office 365, Salesforce. Software roda na nuvem, acessado por navegador. Assinatura mensal/anual.',
    difficulty: 'medio'
  },

  // ========================================
  // REDES E CONECTIVIDADE
  // ========================================
  {
    id: 'info-041',
    area: 'conhecimentos-gerais',
    subject: 'Informática',
    question: 'Wi-Fi é tecnologia de rede sem fio que permite conexão à internet sem cabos.',
    correctAnswer: true,
    explanation: 'CERTO. Wi-Fi usa ondas de rádio para transmitir dados. Padrões: 802.11n (até 300Mbps), 802.11ac (até 1Gbps), 802.11ax (Wi-Fi 6).',
    difficulty: 'facil'
  },
  {
    id: 'info-042',
    area: 'conhecimentos-gerais',
    subject: 'Informática',
    question: 'Endereço IP identifica dispositivos em uma rede. IPv4 usa formato 192.168.0.1.',
    correctAnswer: true,
    explanation: 'CERTO. IP = Internet Protocol. IPv4: 32 bits (ex: 192.168.1.1). IPv6: 128 bits (ex: 2001:0db8::1). IP identifica origem/destino.',
    difficulty: 'facil'
  },
  {
    id: 'info-043',
    area: 'conhecimentos-gerais',
    subject: 'Informática',
    question: 'DNS (Domain Name System) converte nomes de domínio (www.site.com) em endereços IP.',
    correctAnswer: true,
    explanation: 'CERTO. DNS é "agenda telefônica da internet", traduzindo nomes legíveis (google.com) em IPs numéricos (142.250.185.46).',
    difficulty: 'medio'
  },
  {
    id: 'info-044',
    area: 'conhecimentos-gerais',
    subject: 'Informática',
    question: 'Bluetooth é tecnologia de comunicação sem fio de curto alcance (até 10m geralmente).',
    correctAnswer: true,
    explanation: 'CERTO. Bluetooth conecta dispositivos próximos: fones, teclado, mouse, celular. Baixo consumo de energia, alcance limitado.',
    difficulty: 'facil'
  },
  {
    id: 'info-045',
    area: 'conhecimentos-gerais',
    subject: 'Informática',
    question: 'Roteador é equipamento que distribui conexão de internet para vários dispositivos em rede.',
    correctAnswer: true,
    explanation: 'CERTO. Roteador direciona pacotes entre redes, conectando múltiplos dispositivos à internet. Geralmente inclui Wi-Fi e portas Ethernet.',
    difficulty: 'facil'
  },

  // ========================================
  // CONCEITOS MODERNOS E TENDÊNCIAS
  // ========================================
  {
    id: 'info-046',
    area: 'conhecimentos-gerais',
    subject: 'Informática',
    question: 'Inteligência Artificial (IA) permite que máquinas aprendam e tomem decisões sem programação explícita.',
    correctAnswer: true,
    explanation: 'CERTO. IA (Machine Learning, Deep Learning) ensina computadores a aprender com dados. Exemplos: ChatGPT, reconhecimento facial, Alexa.',
    difficulty: 'facil'
  },
  {
    id: 'info-047',
    area: 'conhecimentos-gerais',
    subject: 'Informática',
    question: 'Blockchain é tecnologia de registro distribuído usada em criptomoedas como Bitcoin.',
    correctAnswer: true,
    explanation: 'CERTO. Blockchain é "livro-razão" descentralizado, imutável e transparente. Base do Bitcoin, Ethereum e contratos inteligentes.',
    difficulty: 'medio'
  },
  {
    id: 'info-048',
    area: 'conhecimentos-gerais',
    subject: 'Informática',
    question: 'IoT (Internet das Coisas) conecta objetos físicos à internet (geladeiras, lâmpadas, carros).',
    correctAnswer: true,
    explanation: 'CERTO. IoT: dispositivos físicos com sensores e conectividade. Exemplos: smartwatch, Alexa, câmeras, termostatos inteligentes.',
    difficulty: 'facil'
  },
  {
    id: 'info-049',
    area: 'conhecimentos-gerais',
    subject: 'Informática',
    question: 'Big Data refere-se ao processamento e análise de grandes volumes de dados para extrair informações.',
    correctAnswer: true,
    explanation: 'CERTO. Big Data: 3 Vs (Volume, Velocidade, Variedade). Análise de dados massivos para insights (marketing, saúde, finanças).',
    difficulty: 'facil'
  },
  {
    id: 'info-050',
    area: 'conhecimentos-gerais',
    subject: 'Informática',
    question: 'QR Code é código de barras 2D que armazena informações, lido por câmera de celular.',
    correctAnswer: true,
    explanation: 'CERTO. QR (Quick Response) Code armazena URLs, textos, contatos. Usado em PIX, cardápios digitais, pagamentos, autenticação.',
    difficulty: 'facil'
  }
];
