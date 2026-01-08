# 🎮 INTEGRAÇÃO GODOT - GUIA COMPLETO

## 📦 ESTRUTURA CRIADA

```
/components/
  └── GodotGamePlayer.tsx  ✅ Componente React integrador

/public/
  └── godot-game/          ⏳ AGUARDANDO EXPORT
      ├── index.html
      ├── quiron.wasm
      ├── quiron.pck
      └── quiron.js
```

---

## 🚀 PASSO 1: EXPORTAR GODOT PARA HTML5

### **No Godot 4 Editor:**

1. **Abrir Projeto:**
   ```
   - Godot Engine → Import Project
   - Selecione: quiron-concursos/projeto.godot
   - Clique: "Import & Edit"
   ```

2. **Configurar Export Template:**
   ```
   - Project → Export
   - Clique: "Add..."
   - Selecione: "Web"
   ```

3. **Configurações Importantes:**
   ```
   Export Path: build/web/index.html
   
   ✅ Embed PCK: ON (tudo em um arquivo)
   ✅ Export With Debug: OFF (produção)
   ✅ Custom HTML Shell: (deixe padrão)
   ```

4. **Exportar:**
   ```
   - Clique: "Export Project"
   - Aguarde 2-5 minutos (compila WebAssembly)
   ```

5. **Resultado:**
   ```
   build/web/
   ├── index.html          ✅
   ├── quiron.wasm        ✅ (Engine)
   ├── quiron.pck         ✅ (Game data)
   ├── quiron.js          ✅
   └── quiron.worker.js   ✅
   ```

---

## 🔧 PASSO 2: ADICIONAR COMUNICAÇÃO JAVASCRIPT

### **No script principal do Godot (GDScript):**

Adicione estas funções para comunicação com React:

```gdscript
extends Node

# Variáveis globais
var game_questions = []
var current_area = ""
var user_energy = 0

# Chamado quando o jogo inicia
func _ready():
    print("🎮 Game iniciado! Aguardando dados do React...")
    
    # Registra listeners JavaScript
    if OS.has_feature("web"):
        _setup_js_communication()

# Setup comunicação JavaScript
func _setup_js_communication():
    # Avisa o React que o game está pronto
    JavaScript.eval("""
        if (window.parent) {
            window.parent.postMessage({ type: 'GAME_READY' }, '*');
        }
    """)
    
    # Listener de mensagens do React
    JavaScript.eval("""
        window.addEventListener('message', function(event) {
            if (event.data.type === 'INIT_GAME') {
                // Recebe dados do React
                godot.receive_game_data(
                    JSON.stringify(event.data)
                );
            }
        });
    """)

# Recebe dados do React
func receive_game_data(json_data: String):
    var data = JSON.parse_string(json_data)
    
    if data:
        game_questions = data.questions
        current_area = data.area
        user_energy = data.userEnergy
        
        print("✅ Dados recebidos do React!")
        print("📍 Área: ", current_area)
        print("📚 Questões: ", game_questions.size())
        print("⚡ Energia: ", user_energy)
        
        # Inicia o jogo
        start_game()

# Inicia o jogo com as questões recebidas
func start_game():
    # TODO: Sua lógica de iniciar o game
    print("🎮 Iniciando game com ", game_questions.size(), " questões!")
    
    # Exemplo: carregar primeira questão
    if game_questions.size() > 0:
        load_question(0)

# Carrega uma questão
func load_question(index: int):
    var question = game_questions[index]
    print("❓ Questão ", index + 1, ": ", question.text)
    # TODO: Mostrar questão na UI do game

# Quando o jogo terminar
func game_finished(score: int, correct: int, wrong: int, time: float):
    var result = {
        "score": score,
        "correctAnswers": correct,
        "wrongAnswers": wrong,
        "time": time,
        "maxCombo": 0  # Se tiver sistema de combo
    }
    
    # Envia resultado pro React
    JavaScript.eval("""
        if (window.onGameComplete) {
            window.onGameComplete(%s);
        }
    """ % JSON.stringify(result))
    
    print("🏆 Jogo finalizado! Score: ", score)
```

---

## 📤 PASSO 3: ME ENVIAR O EXPORT

### **Opções de envio:**

**OPÇÃO A: Google Drive**
```
1. Compacta a pasta build/web/
2. Upload para Google Drive
3. Compartilhar link (qualquer pessoa com link)
4. Me envia o link
```

**OPÇÃO B: Dropbox**
```
1. Compacta a pasta build/web/
2. Upload para Dropbox
3. Me envia o link
```

**OPÇÃO C: WeTransfer**
```
1. Acesse wetransfer.com
2. Upload da pasta compactada
3. Me envia o link de download
```

**OPÇÃO D: GitHub**
```
1. Cria pasta export/web/ no repositório
2. Faz commit dos arquivos exportados
3. Me avisa que está pronto
```

---

## ✅ PASSO 4: FINALIZAÇÃO (EU FAÇO)

Quando receber os arquivos:

```
1. ✅ Coloco em /public/godot-game/
2. ✅ Testo a integração
3. ✅ Ajusto comunicação JS se necessário
4. ✅ Implemento sistema de save no Supabase
5. ✅ Integro com ranking e XP
6. ✅ GAME FUNCIONANDO! 🎮
```

---

## 🎯 FLUXO COMPLETO:

```
USUÁRIO CLICA "JOGAR"
    ↓
React busca 30 questões do Supabase
    ↓
Abre GodotGamePlayer (iframe)
    ↓
Godot carrega e avisa "GAME_READY"
    ↓
React envia questões via postMessage
    ↓
Godot recebe e inicia o game
    ↓
Usuário joga (corrida + quiz)
    ↓
Godot envia resultado ao terminar
    ↓
React salva no Supabase
    ↓
Atualiza ranking e XP
    ↓
Mostra tela de resultados
```

---

## 🔧 TROUBLESHOOTING:

### **Erro: "WebAssembly compilation failed"**
```
Solução: Reexporte com templates atualizados
```

### **Erro: "Cannot find .pck file"**
```
Solução: Marque "Embed PCK: ON" na config
```

### **Game não carrega:**
```
Solução: Verifique console do navegador (F12)
Pode ser problema de CORS
```

---

## 📞 PRÓXIMOS PASSOS:

1. **VOCÊ:** Exporta o Godot seguindo PASSO 1 e 2
2. **VOCÊ:** Me envia os arquivos (PASSO 3)
3. **EU:** Finalizo integração (PASSO 4)
4. **NÓS:** Testamos juntos!
5. **RESULTADO:** Game 100% funcional! 🚀

---

## 💡 DÚVIDAS?

Me avise se:
- Tiver erro ao exportar
- Não souber onde adicionar o código GDScript
- Precisar de ajuda com qualquer passo

**ESTOU AQUI PRA AJUDAR!** 🔥
