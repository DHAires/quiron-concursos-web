# 🎮 QUIRON QUIZ 3D - REACT THREE FIBER

## 🌟 O QUE É ESTE JOGO?

Um **quiz 3D épico** feito com **React Three Fiber** (R3F) onde cartas de questões voam em direção ao jogador em um ambiente espacial mitológico!

---

## 📁 ESTRUTURA DE ARQUIVOS

```
/config/
  └── r3fGameConfig.ts          ⚙️ CONFIGURAÇÕES (FÁCIL DE MUDAR!)

/components/r3f/
  ├── QuironR3FGame.tsx          🎮 Jogo principal
  ├── QuestionCard3D.tsx         🃏 Carta 3D
  └── GameEnvironment.tsx        🌌 Ambiente 3D

/hooks/
  └── useR3FGameLoop.ts          🔄 Lógica do jogo
```

---

## ⚙️ COMO CUSTOMIZAR (SEM SABER 3D!)

### 1️⃣ **MUDAR CORES**

📝 **Arquivo:** `/config/r3fGameConfig.ts`

```typescript
export const AREA_COLORS = {
  juridica: '#3498db',    // ← Mude para outra cor hex
  policial: '#e74c3c',
  gerais: '#9b59b6',
  fiscal: '#f39c12',
};
```

### 2️⃣ **MUDAR VELOCIDADE**

📝 **Arquivo:** `/config/r3fGameConfig.ts`

```typescript
export const GAMEPLAY_CONFIG = {
  cardSpeed: 3,              // ← Aumente = mais rápido (1-10)
  cardSpawnInterval: 4,      // ← Diminua = cartas mais frequentes
  // ...
};
```

### 3️⃣ **MUDAR PONTUAÇÃO**

📝 **Arquivo:** `/config/r3fGameConfig.ts`

```typescript
export const GAMEPLAY_CONFIG = {
  scorePerCorrect: 100,      // ← Pontos por acerto
  scorePerWrong: -20,        // ← Pontos perdidos por erro
  // ...
};
```

### 4️⃣ **MUDAR VIDAS**

📝 **Arquivo:** `/config/r3fGameConfig.ts`

```typescript
export const GAMEPLAY_CONFIG = {
  maxLives: 3,               // ← Vidas iniciais
  // ...
};
```

### 5️⃣ **MUDAR TAMANHO DAS CARTAS**

📝 **Arquivo:** `/config/r3fGameConfig.ts`

```typescript
export const GAMEPLAY_CONFIG = {
  cardWidth: 3,              // ← Largura (metros)
  cardHeight: 4,             // ← Altura (metros)
  cardDepth: 0.1,            // ← Espessura (metros)
  // ...
};
```

### 6️⃣ **MUDAR ILUMINAÇÃO**

📝 **Arquivo:** `/config/r3fGameConfig.ts`

```typescript
export const VISUAL_CONFIG = {
  ambientIntensity: 0.3,     // ← Luz ambiente (0-1)
  directionalIntensity: 1,   // ← Luz direcional (0-2)
  bloomIntensity: 1.5,       // ← Brilho/bloom (0-3)
  // ...
};
```

### 7️⃣ **MUDAR COR DE FUNDO**

📝 **Arquivo:** `/config/r3fGameConfig.ts`

```typescript
export const VISUAL_CONFIG = {
  backgroundColor: '#0a0a1e', // ← Cor do céu (hex)
  fogColor: '#0a0a1e',        // ← Cor da névoa (hex)
  // ...
};
```

---

## 🎨 CUSTOMIZAÇÕES AVANÇADAS

### 🔸 **ADICIONAR NOVA ÁREA TEMÁTICA**

**1. Adicione a cor:**

```typescript
// /config/r3fGameConfig.ts
export const AREA_COLORS = {
  juridica: '#3498db',
  policial: '#e74c3c',
  gerais: '#9b59b6',
  fiscal: '#f39c12',
  minhaArea: '#00ff00', // ← NOVA ÁREA!
};
```

**2. Atualize o tipo:**

```typescript
// /config/r3fGameConfig.ts
export type GameArea = keyof typeof AREA_COLORS; // ← Já atualiza automaticamente!
```

**3. Adicione questões:**

```typescript
// /components/r3f/QuironR3FGame.tsx
const questions: Question[] = [
  {
    id: '1',
    question: 'Pergunta da minha área?',
    answers: ['A', 'B', 'C', 'D'],
    correctAnswer: 0,
    area: 'minhaArea', // ← USA A NOVA ÁREA!
  },
];
```

### 🔸 **MUDAR EMOJI DAS ÁREAS**

📝 **Arquivo:** `/components/r3f/QuestionCard3D.tsx`

```typescript
function getAreaEmoji(area: GameArea): string {
  const emojis = {
    juridica: '⚖️',     // ← Mude aqui
    policial: '🚔',
    gerais: '📚',
    fiscal: '💰',
  };
  
  return emojis[area] || '❓';
}
```

### 🔸 **AJUSTAR PERFORMANCE PARA MOBILE**

📝 **Arquivo:** `/config/r3fGameConfig.ts`

```typescript
export const PERFORMANCE_CONFIG = {
  mobile: {
    shadowMapSize: 1024,    // ← Diminua para melhor performance
    antialias: false,       // ← false = mais rápido
    pixelRatio: 1.5,        // ← Diminua = menos pixels
  },
};
```

---

## 🎯 COMO FUNCIONA (ARQUITETURA)

### **FLUXO DO JOGO:**

```
1. Jogador clica "JOGAR 3D"
   ↓
2. Canvas 3D é criado (React Three Fiber)
   ↓
3. Hook useR3FGameLoop inicia
   ↓
4. Cartas nascem longe (z = -30)
   ↓
5. useFrame move cartas (z aumenta)
   ↓
6. Carta chega perto (z = -2)
   ↓
7. Carta para e mostra questão
   ↓
8. Jogador responde
   ↓
9. Carta some, próxima aparece
   ↓
10. Repete até acabar questões ou vidas
```

### **COMPONENTES:**

```
QuironR3FGame (Principal)
  ├─ Canvas (R3F)
  │   ├─ PerspectiveCamera (Câmera 1ª pessoa)
  │   ├─ GameEnvironment (Luzes, estrelas, fog)
  │   ├─ QuestionCard3D (x N cartas)
  │   └─ EffectComposer (Bloom, post-processing)
  │
  └─ HUD (Interface 2D sobre 3D)
      ├─ Pontuação
      ├─ Vidas
      ├─ Timer
      └─ Questão atual
```

---

## 📚 CONCEITOS 3D EXPLICADOS

### **COORDENADAS 3D:**

```
position={[x, y, z]}

x = esquerda/direita
  -10 ←----------→ +10
  
y = baixo/cima
   0 (chão) ↑ 10 (teto)
   
z = longe/perto
  -30 (longe) → 0 (jogador) → +10 (atrás)
```

### **CÂMERA:**

```typescript
<PerspectiveCamera
  position={[0, 1.7, 0]}  // x, y(altura olho), z
  fov={75}                // Campo de visão (graus)
/>
```

- **FOV baixo (30):** Zoom in (tudo maior)
- **FOV alto (120):** Zoom out (tudo menor)

### **ILUMINAÇÃO:**

```typescript
// Luz que vem de uma direção
<directionalLight position={[10, 10, 5]} />

// Luz que ilumina tudo igualmente
<ambientLight intensity={0.5} />

// Lâmpada (ilumina em todas direções)
<pointLight position={[0, 5, 0]} />
```

### **MATERIAIS:**

```typescript
<meshStandardMaterial
  color="#3498db"           // Cor base
  metalness={0.8}           // Quão metálico (0-1)
  roughness={0.2}           // Quão áspero (0-1)
  emissive="#3498db"        // Cor que brilha sozinha
  emissiveIntensity={0.5}   // Força do brilho
/>
```

- **Metalness 1 + Roughness 0:** Espelho cromado
- **Metalness 0 + Roughness 1:** Plástico fosco

---

## 🐛 TROUBLESHOOTING

### **Jogo está lento (FPS baixo):**

1. Diminua `starsCount` em `GAMEPLAY_CONFIG`
2. Desative `antialias` no `PERFORMANCE_CONFIG.mobile`
3. Diminua `shadowMapSize`
4. Remova `EffectComposer` (bloom)

### **Cartas não aparecem:**

1. Verifique se `questions` array tem itens
2. Verifique console do navegador por erros
3. Certifique-se que `area` das questões existe em `AREA_COLORS`

### **Erro "Module not found":**

Instale dependências:

```bash
npm install three @react-three/fiber @react-three/drei @react-three/postprocessing
```

---

## 📦 DEPENDÊNCIAS

```json
{
  "three": "^0.160.0",
  "@react-three/fiber": "^8.15.0",
  "@react-three/drei": "^9.92.0",
  "@react-three/postprocessing": "^2.16.0"
}
```

---

## 🚀 PRÓXIMOS PASSOS

### **Fácil:**
- ✅ Mudar cores
- ✅ Mudar velocidade
- ✅ Adicionar mais questões
- ✅ Mudar pontuação

### **Médio:**
- 🟡 Adicionar sons (SFX)
- 🟡 Adicionar música de fundo
- 🟡 Criar power-ups
- 🟡 Adicionar partículas customizadas

### **Avançado:**
- 🔴 Criar shaders customizados
- 🔴 Adicionar física (Cannon.js)
- 🔴 Criar animações complexas
- 🔴 Multiplayer

---

## ❓ PRECISA DE AJUDA?

**Para mudanças simples:** Veja a seção "COMO CUSTOMIZAR"  
**Para mudanças médias:** Leia os comentários no código  
**Para mudanças avançadas:** Me chame! 😊

---

## 🎓 APRENDER MAIS

### **React Three Fiber:**
- 📖 Docs: https://docs.pmnd.rs/react-three-fiber
- 📺 YouTube: Search "React Three Fiber tutorial"
- 🎮 Exemplos: https://codesandbox.io/examples/package/@react-three/fiber

### **Three.js:**
- 📖 Docs: https://threejs.org/docs/
- 📚 Journey: https://threejs-journey.com/

### **Drei (Helpers):**
- 📖 Docs: https://github.com/pmndrs/drei

---

**Feito com ❤️ para Quiron Concursos**  
**Powered by React Three Fiber 🚀**
