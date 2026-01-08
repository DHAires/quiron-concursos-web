# 🎮 BANCO DE QUESTÕES - RESUMO PARA DESENVOLVEDOR

## ✅ O QUE FOI FEITO

### **Sistema Completo de Banco de Questões**
- ✅ 50 questões de Direito Constitucional (Certo/Errado estilo Cebraspe)
- ✅ Estrutura para 4 áreas × 17 matérias = 850 questões totais
- ✅ Navegação por Área → Matéria → Questões
- ✅ Filtros por dificuldade e busca
- ✅ Banner de integração Godot 4 expansível
- ✅ Documentação completa

---

## 📂 ARQUIVOS PRINCIPAIS

### **1. Banco de Dados**
```
/data/gameQuestions.ts
```
- 50 questões prontas
- Estrutura de 4 áreas e 17 matérias
- Funções auxiliares (getBy...)

### **2. Interface**
```
/components/QuestionBankViewer.tsx
```
- 3 níveis de navegação
- Sistema de filtros
- Questão aleatória
- Preview interativo

### **3. Banner de Integração**
```
/components/GameIntegrationBanner.tsx
```
- Banner expansível com documentação
- Endpoints da API
- Scripts GDScript
- Download de questões

### **4. Documentação**
```
/INTEGRACAO-GODOT4-GAME.md          # Integração completa Godot 4
/data/GUIA-RAPIDO-ADICIONAR-QUESTOES.md  # Como criar questões
/data/TEMPLATE-nova-materia.ts      # Template para novas matérias
/README-BANCO-QUESTOES.md           # Documentação geral
```

---

## 🎮 INTEGRAÇÃO COM GODOT 4

### **📡 ENDPOINTS DA API (Criar no backend)**

```http
# Obter 10 questões de uma área
GET /api/game/questions?area=juridica&count=10

# Obter 30 questões para uma partida (3 fases)
GET /api/game/questions/match?area=juridica

# Obter questão específica
GET /api/game/questions/const_001

# Obter estatísticas
GET /api/game/questions/stats?area=juridica
```

### **💻 SCRIPTS GODOT 4 (GDScript)**

#### **1. Baixar Questões**
```gdscript
# game_questions_manager.gd
extends Node

var http_request: HTTPRequest
var base_url = "https://[dominio]/api/game/questions"

func load_match_questions(area: String):
    var url = base_url + "/match?area=" + area
    http_request.request(url)

func _on_request_completed(result, response_code, headers, body):
    if response_code == 200:
        var json = JSON.new()
        var error = json.parse(body.get_string_from_utf8())
        if error == OK:
            emit_signal("questions_loaded", json.data)
```

#### **2. Sistema de Cartas**
```gdscript
# question_card.gd
extends Control

var current_question = null
var time_left = 30.0

func set_question(question_data):
    current_question = question_data
    question_label.text = question_data.question
    time_left = 30.0

func check_answer(player_answer: bool):
    if current_question.correctAnswer == player_answer:
        # ACERTOU! Mostra explicação por 20s
        show_correct_answer()
    else:
        # ERROU! Gera nova carta
        emit_signal("generate_new_card")
```

---

## 📦 DOWNLOAD DE QUESTÕES

### **Opção 1: JSON Estático (Offline)**
```bash
# Baixar JSON
GET /api/game/questions/export?area=juridica

# Salvar em:
res://data/questions_juridica.json

# Carregar no Godot:
var file = FileAccess.open("res://data/questions_juridica.json", FileAccess.READ)
```

### **Opção 2: API Online (Web)**
```gdscript
# Sempre buscar questões atualizadas
var url = base_url + "/match?area=juridica"
http_request.request(url)
```

---

## 🗂️ ESTRUTURA DA QUESTÃO (JSON)

```json
{
  "id": "const_001",
  "area": "juridica",
  "subject": "Direito Constitucional",
  "question": "A República Federativa do Brasil tem como fundamentos a soberania...",
  "correctAnswer": true,
  "explanation": "CERTO. Art. 1º, I, II e III da CF/88.",
  "difficulty": "facil"
}
```

### **Campos:**
- `id`: string - ID único (ex: const_001)
- `area`: juridica | policial | fiscal-bancaria | conhecimentos-gerais
- `subject`: string - Nome da matéria
- `question`: string - Enunciado (máx. 2 linhas)
- `correctAnswer`: boolean - true=CERTO, false=ERRADO
- `explanation`: string - Explicação (máx. 2 linhas)
- `difficulty`: facil | medio | dificil

---

## 🎮 MECÂNICA DO GAME "A CORRIDA DOS HERÓIS"

### **3 Fases Diretas:**
```
Fase 1: 10 cartas FÁCEIS
├── 30 segundos para responder
├── Acertou: 20 segundos mostrando explicação → próxima carta
└── Errou: gera nova carta até acertar

Fase 2: 10 cartas MÉDIAS
└── Mesma mecânica

Fase 3: 10 cartas DIFÍCEIS
└── Mesma mecânica

Total: 30 questões por partida
```

---

## 📊 STATUS ATUAL

```
╔════════════════════════════════════════════════╗
║  BANCO DE QUESTÕES                             ║
║                                                ║
║  ✅ Direito Constitucional: 50 questões       ║
║  ⏳ 16 matérias pendentes: 800 questões       ║
║                                                ║
║  Total: 50/850 (5.9%)                          ║
║                                                ║
╚════════════════════════════════════════════════╝
```

---

## 🚀 PRÓXIMOS PASSOS

### **Backend (Você precisa fazer):**
1. Criar endpoints da API REST
2. Implementar validação de respostas
3. Sistema de rate limiting
4. Deploy

### **Godot 4 (Você precisa fazer):**
1. Implementar HTTPRequest
2. Parser JSON
3. Sistema de cartas
4. Timer de 30s
5. Mostrar explicação por 20s
6. Sistema de retry ao errar

### **Conteúdo (Opcional):**
1. Criar mais 800 questões (16 matérias × 50)
2. Seguir template e guia disponíveis

---

## 🔗 LINKS IMPORTANTES

### **📚 Documentação:**
- `/INTEGRACAO-GODOT4-GAME.md` - Integração completa
- `/data/GUIA-RAPIDO-ADICIONAR-QUESTOES.md` - Criar questões
- `/README-BANCO-QUESTOES.md` - README geral

### **🎮 Acessar no App:**
```
Menu ☰ → "📖 Banco de Questões" → Abrir Banner → Ver Documentação
```

---

## 📁 ESTRUTURA DE PASTAS

```
quiron-concursos/
├── data/
│   ├── gameQuestions.ts              # Banco principal
│   ├── TEMPLATE-nova-materia.ts      # Template
│   └── GUIA-RAPIDO-ADICIONAR-QUESTOES.md
│
├── components/
│   ├── QuestionBankViewer.tsx        # Interface
│   └── GameIntegrationBanner.tsx     # Banner expansível
│
└── docs/
    ├── INTEGRACAO-GODOT4-GAME.md     # Integração Godot
    ├── RESUMO-DESENVOLVEDOR.md       # Este arquivo
    └── README-BANCO-QUESTOES.md      # README geral
```

---

## ✅ CHECKLIST RÁPIDO

### **Você já tem:**
- [x] 50 questões de Direito Constitucional
- [x] Estrutura completa (4 áreas × 17 matérias)
- [x] Interface de navegação
- [x] Banner de integração
- [x] Documentação completa
- [x] Templates e guias

### **Você precisa fazer:**
- [ ] Criar endpoints da API REST
- [ ] Implementar scripts Godot 4
- [ ] Testar integração
- [ ] (Opcional) Criar mais 800 questões

---

## 🎯 EXEMPLO DE FLUXO COMPLETO

### **1. Usuário inicia partida:**
```
Godot: "Carregar questões da área Jurídica"
```

### **2. Godot faz request:**
```http
GET /api/game/questions/match?area=juridica

Response:
{
  "fase1": [10 questões fáceis],
  "fase2": [10 questões médias],
  "fase3": [10 questões difíceis]
}
```

### **3. Godot mostra carta:**
```
Carta: "A República Federativa do Brasil tem como fundamentos..."
Timer: 30 segundos
Botões: [CERTO] [ERRADO]
```

### **4a. Acertou:**
```
Mostra explicação: "CERTO. Art. 1º, I, II e III da CF/88."
Aguarda: 20 segundos
Próxima carta
```

### **4b. Errou:**
```
Gera nova carta até acertar
```

### **5. Completou 10 cartas:**
```
Fase 2 começa (questões médias)
```

### **6. Completou 30 cartas:**
```
Game completo! 🎉
```

---

## 🎨 BANNER DE INTEGRAÇÃO NO APP

### **Como acessar:**
1. Abra o app Quiron Concursos
2. Menu ☰ → "📖 Banco de Questões"
3. Clique no **banner roxo** "🎮 Integração Godot 4"
4. Banner expande com:
   - Resumo executivo
   - Endpoints da API
   - Estrutura JSON
   - Scripts GDScript
   - Download de questões
   - Links de documentação

---

## 💡 DICAS IMPORTANTES

### **✅ FAÇA:**
- Use os endpoints documentados
- Siga a estrutura JSON fornecida
- Implemente timer de 30s
- Mostre explicação por 20s
- Sistema de retry ao errar
- Cache local para offline

### **❌ NÃO FAÇA:**
- Modificar estrutura da questão
- Enviar `correctAnswer` no request inicial (validar no servidor)
- Ignorar dificuldade das fases
- Pular explicação ao acertar

---

## 📞 SUPORTE

### **Precisa de ajuda?**
- Leia: `/INTEGRACAO-GODOT4-GAME.md`
- Consulte: Banner de integração no app
- Template: `/data/TEMPLATE-nova-materia.ts`

---

## 🎉 CONCLUSÃO

```
╔═══════════════════════════════════════════════╗
║                                               ║
║  ✅ BANCO: 50 QUESTÕES PRONTAS               ║
║  ✅ INTERFACE: FUNCIONANDO                   ║
║  ✅ DOCUMENTAÇÃO: COMPLETA                   ║
║  ✅ BANNER: EXPANSÍVEL COM TUDO              ║
║                                               ║
║  📡 CRIAR: API REST                          ║
║  🎮 IMPLEMENTAR: SCRIPTS GODOT 4             ║
║  🧪 TESTAR: INTEGRAÇÃO                       ║
║                                               ║
╚═══════════════════════════════════════════════╝
```

**🚀 BOA INTEGRAÇÃO!** 🎮✨

---

**Última atualização:** 2024-12-05  
**Status:** Pronto para integração  
**Próximo passo:** Criar API REST e scripts Godot 4
