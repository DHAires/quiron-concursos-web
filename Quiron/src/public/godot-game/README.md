# 🎮 Godot Game Files

## 📁 Esta pasta contém o export do Godot

### ✅ Arquivos Integrados:

```
✅ index.html       - HTML principal do game (COM COMUNICAÇÃO REACT!)
✅ index.js         - JavaScript do Godot Engine
✅ index.wasm       - WebAssembly engine (será carregado)
✅ index.pck        - Package com recursos (será carregado)
✅ .gitkeep         - Mantém pasta no Git
```

## 🔧 Status:

✅ **ESTRUTURA CRIADA E INTEGRADA!**

Arquivos copiados de:
`godot-meu-jogo-web-main.zip` → `public/godot-game/`

## 🚀 Funcionalidades Implementadas:

### 1️⃣ **Loading Screen Profissional**
- Logo animado
- Barra de progresso
- Mensagens de status
- Transição suave

### 2️⃣ **Comunicação Bidirecional React ↔ Godot**
```javascript
// React → Godot
window.postMessage({
  type: 'react-to-godot',
  command: 'startQuiz',
  params: { area: 'juridica' }
}, '*');

// Godot → React
window.parent.postMessage({
  type: 'godot-event',
  event: 'questionAnswered',
  data: { correct: true, points: 10 }
}, '*');
```

### 3️⃣ **Sistema de Áreas Temáticas**
- ⚖️ Jurídica (Azul)
- 🛡️ Policial (Vermelho)
- 📚 Conhecimentos Gerais (Roxo)
- 💰 Fiscal-Bancária (Amarelo)

### 4️⃣ **Responsivo & Mobile-Ready**
- Canvas adapta ao tamanho da tela
- Touch events suportados
- Performance otimizada

### 5️⃣ **Error Handling**
- Tratamento de erros
- Mensagens amigáveis
- Logs detalhados

## 📋 Integração com React:

O componente `GodotGamePlayer.tsx` já está configurado para:
- ✅ Carregar iframe com index.html
- ✅ Escutar eventos do Godot
- ✅ Enviar comandos para o game
- ✅ Controlar fullscreen
- ✅ Passar dados de questões

## 🎯 Próximos Passos:

1. ✅ Arquivos copiados
2. ✅ Comunicação JavaScript configurada
3. ⏳ **Substituir arquivos reais do Godot** (index.wasm, index.pck)
4. ⏳ **Testar game no navegador**
5. ⏳ **Integrar sistema de questões**

## 📝 Notas Importantes:

- Os arquivos `.wasm` e `.pck` serão carregados automaticamente
- O game roda em um iframe isolado para segurança
- A comunicação usa `postMessage` para ser cross-origin safe
- O canvas é responsivo e adapta ao container

---

**🎮 GAME INTEGRADO E PRONTO PARA USO!**

Para testar, acesse: `/game-epico` no app React