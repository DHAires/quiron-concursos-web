# 🏃 QUIRON RUNNER 3D - ENDLESS RUNNER + QUIZ

## 🎮 DESCRIÇÃO DO JOGO

**Quiron Runner 3D** é um jogo de corrida infinita 3D onde o Centauro Quíron corre automaticamente respondendo questões de concursos públicos!

---

## ✨ CARACTERÍSTICAS

### **🎯 MECÂNICAS:**
- **Endless Runner:** Corrida infinita automática
- **3 Pistas:** Desvie de obstáculos mudando de pista
- **Quiz Integrado:** Questões aparecem durante a corrida
- **4 Áreas Temáticas:** Jurídica (azul), Policial (vermelho), Gerais (roxo), Fiscal (amarelo)
- **Sistema de Vidas:** 3 vidas (colisão ou erro = -1 vida)
- **Score Progression:** Pontuação aumenta com distância e respostas certas

### **💎 COLETÁVEIS:**
- **Gemas Douradas:** +10 pontos cada
- **Power-ups:** (futuro) escudo, imã, boost

### **📱 CONTROLES:**
- **Desktop:** Setas ← → para trocar de pista
- **Mobile:** Swipe esquerda/direita

---

## 🎨 TECNOLOGIA

**Engine:** Three.js (WebGL)
- ✅ Roda no navegador
- ✅ Funciona em Android/iOS via Capacitor
- ✅ Leve e rápido
- ✅ Gráficos 3D fluidos

---

## ⚡ SISTEMA DE ENERGIA

### **CUSTO:**
- **1 energia** por partida

### **RECOMPENSAS:**
- ✅ Resposta correta: **+50 pontos**
- 💎 Coletar gema: **+10 pontos**
- 🏃 Por segundo: **+1 ponto**

---

## 🎯 FLUXO DO JOGO

```
┌─────────────────────────────────────────────────────────┐
│  1. MENU PRINCIPAL                                      │
│  → Mostra high score                                    │
│  → Botão JOGAR (-1 energia)                             │
│  → Instruções de como jogar                             │
└───────────────┬─────────────────────────────────────────┘
                ↓
┌─────────────────────────────────────────────────────────┐
│  2. JOGO 3D (Canvas Three.js)                           │
│  → Centauro corre automaticamente                       │
│  → Obstáculos aparecem aleatoriamente                   │
│  → Gemas aparecem para coletar                          │
│  → Velocidade aumenta gradualmente                      │
└───────────────┬─────────────────────────────────────────┘
                ↓
┌─────────────────────────────────────────────────────────┐
│  3. QUESTÃO APARECE (a cada 20 pontos)                  │
│  → Jogo pausa                                           │
│  → Modal com questão colorida por área                  │
│  → 4 alternativas para escolher                         │
└───────────────┬─────────────────────────────────────────┘
                ↓
┌─────────────────────────────────────────────────────────┐
│  4. RESPOSTA                                            │
│  ✅ Certa: +50 pontos, continua jogando                 │
│  ❌ Errada: -1 vida, continua jogando                   │
└───────────────┬─────────────────────────────────────────┘
                ↓
┌─────────────────────────────────────────────────────────┐
│  5. GAME OVER (0 vidas ou sair)                         │
│  → Mostra pontuação final                               │
│  → Compara com high score                               │
│  → Opção: Jogar novamente (-1 energia)                  │
│  → Opção: Voltar ao menu                                │
│  → (Futuro) Mostra anúncio intersticial                 │
└─────────────────────────────────────────────────────────┘
```

---

## 📊 HUD (INTERFACE)

### **TOP:**
```
┌───────────────────────────────────────────────────┐
│ [Score: 1,234]              [❤️ ❤️ ❤️]            │
└───────────────────────────────────────────────────┘
```

### **DURANTE QUESTÃO:**
```
╔═══════════════════════════════════════════════════╗
║              QUESTÃO - JURÍDICA (AZUL)            ║
╠═══════════════════════════════════════════════════╣
║                                                   ║
║  Qual princípio rege a Administração Pública?     ║
║                                                   ║
║  [A] Legalidade                                   ║
║  [B] Impessoalidade                               ║
║  [C] Moralidade                                   ║
║  [D] Todos os anteriores                          ║
║                                                   ║
╚═══════════════════════════════════════════════════╝
```

---

## 🎨 VISUAL 3D

### **CENÁRIO:**
- Corredor infinito verde (grama)
- Céu azul com fog ao longe
- Iluminação ambiente + direcional

### **PLAYER:**
- Cubo vermelho (placeholder para modelo 3D do centauro)
- Movimentação suave entre pistas
- Animação de corrida (futuro)

### **OBSTÁCULOS:**
- Cubos marrons (troncos de árvore)
- Aparecem aleatoriamente nas 3 pistas
- Colidir = -1 vida

### **COLETÁVEIS:**
- Esferas douradas brilhantes
- Rotacionam no eixo Y
- Emissão de luz amarela

---

## 📈 PROGRESSÃO

### **DIFICULDADE:**
- Velocidade aumenta +0.0001 por frame
- Mais obstáculos aparecem ao longo do tempo
- Questões ficam mais difíceis (futuro)

### **PONTUAÇÃO:**
```
Distância percorrida: +1 ponto/segundo
Coletar gema: +10 pontos
Resposta certa: +50 pontos
```

### **HIGH SCORE:**
- Salvo no localStorage
- Exibido no menu principal
- Animação especial ao quebrar recorde

---

## 🔮 FUTURAS MELHORIAS

### **CURTO PRAZO:**
1. ✅ Integrar questões reais do banco de dados
2. ✅ Integrar AdMob (intersticial ao morrer)
3. ✅ Power-ups (escudo, imã de moedas, boost)
4. ✅ Modelo 3D do Centauro Quíron
5. ✅ Animações de corrida

### **MÉDIO PRAZO:**
6. ⏳ Diferentes ambientes (cidade, floresta, deserto)
7. ⏳ Multiplayer assíncrono (ranking em tempo real)
8. ⏳ Missões diárias
9. ⏳ Conquistas/Achievements
10. ⏳ Loja in-game (skins, power-ups)

### **LONGO PRAZO:**
11. 🔮 Boss fights (questões muito difíceis)
12. 🔮 Torneios semanais
13. 🔮 Sistema de clãs
14. 🔮 Modo história

---

## 💻 CÓDIGO

### **ARQUIVOS CRIADOS:**

```
/components/RunnerGame3D.tsx
  → Componente React principal
  → Classe RunnerGame (Three.js engine)
  → Estados: menu, playing, question, gameover
  → HUD e interfaces
```

### **DEPENDÊNCIAS:**

```json
{
  "three": "^0.160.0",
  "@types/three": "^0.160.0"
}
```

### **INTEGRAÇÃO:**

```typescript
// App.tsx
case "runner3d":
  return (
    <RunnerGame3D
      onBack={navigateToDashboard}
      userEnergy={userEnergy}
      onEnergyUsed={() => setUserEnergy(prev => prev - 1)}
      onScoreSubmit={(score) => saveToRanking(score)}
    />
  );
```

---

## 🚀 COMO TESTAR

### **1. INSTALAR:**
```bash
npm install
```

### **2. EXECUTAR:**
```bash
npm run dev
```

### **3. NAVEGAR:**
- Abra o app
- Entre no Dashboard
- Abra o menu (☰)
- Clique em "Runner 3D"

### **4. JOGAR:**
- Clique em "JOGAR (-1 ⚡)"
- Use setas ← → para desviar
- Colete gemas douradas
- Responda questões quando aparecerem

---

## 🎮 EXEMPLOS DE GAMEPLAY

### **SCENARIO 1: INICIANTE**
```
Energia: 10 → 9
Partida 1:
  → Coletou 5 gemas: +50 pontos
  → Respondeu 2 questões corretas: +100 pontos
  → Colidiu com obstáculo 3x: GAME OVER
  → Score final: 158 pontos
```

### **SCENARIO 2: EXPERIENTE**
```
Energia: 9 → 8
Partida 2:
  → Coletou 20 gemas: +200 pontos
  → Respondeu 8 questões corretas: +400 pontos
  → Sobreviveu 180 segundos: +180 pontos
  → Colidiu após esgotamento mental: GAME OVER
  → Score final: 1.247 pontos
  → NOVO RECORDE! 🏆
```

---

## 📊 MÉTRICAS DE SUCESSO

### **ENGAJAMENTO:**
- Tempo médio de sessão: **5-10 minutos**
- Partidas por dia/usuário: **3-5**
- Taxa de retorno D1: **> 60%**

### **MONETIZAÇÃO:**
- Intersticial ao morrer (cooldown 5min)
- Botão "reviver" com anúncio premiado (+1 vida)
- Compra de energia na loja

### **LEARNING:**
- Questões respondidas/dia: **20-40**
- Taxa de acerto: **aumenta com prática**
- Áreas com mais dificuldade: **insights para estudo**

---

## 🎯 OBJETIVO EDUCACIONAL

O Runner 3D combina **diversão + aprendizado**:

1. **Gamificação:** Estudar vira jogo
2. **Repetição espaçada:** Questões aparecem periodicamente
3. **Feedback imediato:** Sabe se errou na hora
4. **Motivação:** High score + ranking
5. **Retenção:** Viciante e educativo

---

## 🏆 CONCLUSÃO

**Quiron Runner 3D** é o game perfeito para:
- ✅ Estudar se divertindo
- ✅ Competir com outros concurseiros
- ✅ Ganhar pontos e ranking
- ✅ Aumentar engajamento no app
- ✅ Monetizar com AdMob

**Status:** ✅ **PRONTO PARA TESTE!**

Execute agora:
```bash
npm install && npm run dev
```

Abra o menu → **Runner 3D** → **JOGAR!** 🎮⚡🏃
