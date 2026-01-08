# 🔍 SISTEMA DE AUDITORIA DE QUESTÕES - QUIRON CONCURSOS

## ✅ STATUS: 100% IMPLEMENTADO!

---

## 🎯 OBJETIVO

Ferramenta completa para **varredura, detecção e correção** de questões com problemas (gabaritos trocados, explicações erradas, etc).

---

## 🚀 COMO ACESSAR

### **Atalho de Teclado:**
```
Ctrl + Shift + Q
```

Pressione `Ctrl + Shift + Q` em **qualquer lugar** do app para abrir a auditoria.

---

## 📊 FUNCIONALIDADES

### **1. VARREDURA AUTOMÁTICA** 🔎
- Carrega **TODAS** as questões de todas as 4 áreas
- Exibe total de questões no banco
- Estatísticas em tempo real

### **2. BUSCA AVANÇADA** 🔍
- Buscar por texto da questão
- Buscar por matéria
- Buscar na explicação
- Filtrar por área (Jurídica, Policial, etc)
- Mostrar apenas questões com problemas

### **3. MARCAR PROBLEMAS** 🚩
4 tipos de problemas:
- **Gabarito Errado** (vermelho)
- **Explicação Errada** (laranja)
- **Texto Errado** (amarelo)
- **Questão Duplicada** (roxo)

Cada marcação permite adicionar **notas explicativas**.

### **4. EDITAR QUESTÕES** ✏️
- Corrigir texto da questão
- **Inverter gabarito** (Certo ↔ Errado)
- Corrigir explicação
- Alterar dificuldade

### **5. EXPORTAR RELATÓRIO** 📥
- Gera arquivo JSON com:
  - Timestamp da auditoria
  - Estatísticas completas
  - Lista de questões com problemas
  - Notas de cada problema

---

## 🎨 INTERFACE

### **Painel Principal:**
```
┌────────────────────────────────────────────────┐
│  [←] 🔍 Auditoria de Questões                  │
│  Verificar e corrigir gabaritos                │
│                                                │
│  [🔄 Recarregar]  [📥 Exportar]                │
├────────────────────────────────────────────────┤
│  📊 ESTATÍSTICAS:                              │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐          │
│  │ 150  │ │  2   │ │  0   │ │ 1.3% │          │
│  │Total │ │Probl.│ │Corr. │ │ Erro │          │
│  └──────┘ └──────┘ └──────┘ └──────┘          │
├────────────────────────────────────────────────┤
│  🔎 FILTROS:                                    │
│  [🔍 Buscar...]  [Área ▼]  [Só Problemas]     │
├────────────────────────────────────────────────┤
│  📝 QUESTÕES:                                  │
│                                                │
│  ┌──────────────────────────────────────────┐  │
│  │ [juridica] [Direito Const.] [médio]     │  │
│  │ [✏️ Editar] [🚩 Reportar]                 │  │
│  │                                          │  │
│  │ Os crimes cibernéticos (crimes digitais)│  │
│  │ são investigados no Brasil...            │  │
│  │                                          │  │
│  │ Gabarito: CERTO ✅                       │  │
│  │                                          │  │
│  │ ? Explicação:                            │  │
│  │ Crimes cibernéticos são investigados...  │  │
│  └──────────────────────────────────────────┘  │
│                                                │
│  ┌──────────────────────────────────────────┐  │
│  │ [policial] [Direito Penal] [difícil]    │  │
│  │ [⚠️ Gabarito Errado]                     │  │ ← MARCADA
│  │ [✏️ Editar] [✓ Marcar Corrigida]         │  │
│  │                                          │  │
│  │ No Brasil, a investigação de crimes é... │  │
│  │                                          │  │
│  │ Gabarito: ERRADO ❌                      │  │
│  │                                          │  │
│  │ 📝 Notas: Gabarito deveria ser CERTO    │  │
│  └──────────────────────────────────────────┘  │
└────────────────────────────────────────────────┘
```

---

## 📋 PASSO A PASSO - CORRIGIR GABARITOS

### **CENÁRIO: Encontrou 2 questões com gabarito trocado**

#### **Passo 1: Abrir Auditoria**
```
1. Pressione Ctrl + Shift + Q
2. Aguarde carregamento (pode demorar ~5s)
3. Veja total de questões carregadas
```

#### **Passo 2: Encontrar as Questões**
```
Opção A - Busca manual:
1. Role a lista de questões
2. Procure visualmente

Opção B - Busca por texto:
1. Digite parte do enunciado na busca
2. Ex: "crimes cibernéticos"
3. Questão aparece filtrada

Opção C - Filtro por área:
1. Selecione área (ex: "Policial")
2. Veja apenas questões daquela área
```

#### **Passo 3: Marcar como Problema**
```
1. Clique no botão [🚩 Reportar]
2. Escolha tipo: "Gabarito Errado"
3. (Opcional) Adicione nota explicativa:
   "O gabarito correto deveria ser CERTO, pois..."
4. Nota salva localmente
```

#### **Passo 4: Editar e Corrigir**
```
1. Clique no botão [✏️ Editar]
2. Veja formulário de edição
3. Altere campo "Resposta Correta":
   - De: "Falso (Errado)"
   - Para: "Verdadeiro (Certo)"
4. Clique [💾 Salvar]
5. Toast: "Questão atualizada!"
```

#### **Passo 5: Repetir para 2ª Questão**
```
1. Busque a segunda questão
2. Marque problema
3. Edite
4. Salve
```

#### **Passo 6: Exportar Relatório**
```
1. Clique [📥 Exportar]
2. Arquivo JSON baixado:
   "audit_report_2026-01-07.json"
3. Contém:
   - Lista das 2 questões problemáticas
   - ID de cada uma
   - Notas explicativas
   - Timestamp
```

#### **Passo 7: Aplicar no Backend** ⚠️
```
IMPORTANTE: As edições são locais!

Para persistir no banco de dados:
1. Abra AdminGameManager (Ctrl+Shift+A)
2. Vá em "Editar Questões"
3. Localize cada questão por ID
4. Aplique as correções manualmente
5. Salve no backend

OU:

1. Use o relatório JSON exportado
2. Crie script para atualizar em massa
3. Aplique via API
```

---

## 🔍 EXEMPLO REAL - VARREDURA COMPLETA

### **Encontrar TODAS as questões com problemas:**

```bash
# 1. Abrir auditoria
Ctrl + Shift + Q

# 2. Aguardar carregar (150 questões)
✅ Carregadas 150 questões

# 3. Revisar área por área
Filtro: "Jurídica" → Revisar 40 questões
Filtro: "Policial" → Revisar 35 questões
Filtro: "Fiscal" → Revisar 35 questões
Filtro: "Gerais" → Revisar 40 questões

# 4. Marcar problemas encontrados
Questão ID: xyz-123 → Gabarito Errado
Questão ID: abc-456 → Explicação Errada
Questão ID: def-789 → Gabarito Errado

# 5. Verificar estatísticas
Total: 150
Com Problemas: 3
Taxa de Erro: 2.0%

# 6. Filtrar apenas problemas
Clique: [Só Problemas]
Veja: Apenas as 3 questões marcadas

# 7. Exportar relatório
Clique: [📥 Exportar]
Arquivo: audit_report_2026-01-07.json

# 8. Revisar JSON
{
  "timestamp": "2026-01-07T10:30:00Z",
  "stats": {
    "total": 150,
    "flagged": 3,
    "fixed": 0,
    "byArea": {...},
    "byIssue": {
      "gabarito_errado": 2,
      "explicacao_errada": 1
    }
  },
  "flaggedQuestions": [
    {
      "id": "xyz-123",
      "area": "policial",
      "subject": "Direito Penal",
      "issue": "gabarito_errado",
      "notes": "Deveria ser CERTO",
      "question": "Os crimes cibernéticos...",
      "correctAnswer": false
    },
    // ...
  ]
}
```

---

## ⚙️ FILTROS DISPONÍVEIS

### **1. Busca Textual**
```
Busca em:
- Texto da questão
- Nome da matéria
- Explicação

Exemplo:
"Polícia Federal" → Encontra todas mencionando PF
"crimes" → Encontra todas sobre crimes
"Direito Constitucional" → Filtra por matéria
```

### **2. Filtro por Área**
```
Opções:
- Todas as Áreas (padrão)
- Jurídica (azul)
- Policial (vermelho)
- Fiscal-Bancária (amarelo)
- Conhecimentos Gerais (roxo)
```

### **3. Filtro "Só Problemas"**
```
Ativado: Mostra apenas questões marcadas
Desativado: Mostra todas
```

---

## 📊 ESTATÍSTICAS EXIBIDAS

### **Painel de Stats:**
```
┌──────────────────┐
│ Total            │  ← Questões no banco
│ 150              │
└──────────────────┘

┌──────────────────┐
│ Com Problemas    │  ← Marcadas com flag
│ 2 (vermelho)     │
└──────────────────┘

┌──────────────────┐
│ Corrigidas       │  ← Desmarcadas (fixadas)
│ 0 (verde)        │
└──────────────────┘

┌──────────────────┐
│ Taxa de Erro     │  ← (Problemas / Total) * 100
│ 1.3% (amarelo)   │
└──────────────────┘
```

### **Breakdown por Área:**
```javascript
{
  "juridica": 40,
  "policial": 35,
  "fiscal-bancaria": 35,
  "conhecimentos-gerais": 40
}
```

### **Breakdown por Tipo:**
```javascript
{
  "gabarito_errado": 2,
  "explicacao_errada": 0,
  "texto_errado": 0,
  "duplicada": 0
}
```

---

## 🚨 TIPOS DE PROBLEMAS

### **1. Gabarito Errado** 🔴
```
Quando: A resposta marcada como correta está errada
Exemplo: 
  Questão: "A Polícia Federal investiga crimes federais"
  Gabarito atual: ERRADO ❌
  Gabarito correto: CERTO ✅
```

### **2. Explicação Errada** 🟠
```
Quando: O gabarito está certo, mas a explicação está incorreta
Exemplo:
  Gabarito: CERTO ✅ (correto)
  Explicação: "Porque a PF não investiga crimes federais"
  ↑ Explicação contradiz gabarito correto
```

### **3. Texto Errado** 🟡
```
Quando: Erro de português, digitação ou formulação
Exemplo:
  "Os crimes cibernéticos sao invesitgados..."
  ↑ "sao" deveria ser "são"
  ↑ "invesitgados" deveria ser "investigados"
```

### **4. Questão Duplicada** 🟣
```
Quando: Mesma questão aparece 2+ vezes no banco
Exemplo:
  ID: xyz-123 → "A PF investiga crimes federais"
  ID: abc-789 → "A PF investiga crimes federais"
  ↑ Questões idênticas
```

---

## 💾 PERSISTÊNCIA DE DADOS

### **⚠️ IMPORTANTE:**

**As edições são LOCAIS (navegador)!**

```
❌ NÃO SALVA automaticamente no backend
✅ Salva temporariamente no estado do componente
```

### **Para persistir no banco:**

```javascript
// Opção 1: Manual (AdminGameManager)
1. Ctrl + Shift + A
2. Editar questões uma por uma
3. Salvar cada alteração

// Opção 2: Programático (futuro)
// Criar endpoint PUT /game/questions/:id
// Chamar do QuestionAudit ao clicar "Salvar"
```

### **Relatório JSON:**

```json
{
  "timestamp": "2026-01-07T10:30:00.000Z",
  "stats": {
    "total": 150,
    "flagged": 2,
    "fixed": 0,
    "byArea": {
      "juridica": 40,
      "policial": 35,
      "fiscal-bancaria": 35,
      "conhecimentos-gerais": 40
    },
    "byIssue": {
      "gabarito_errado": 2
    }
  },
  "flaggedQuestions": [
    {
      "id": "policial-crimes-digitais-001",
      "area": "policial",
      "subject": "Direito Penal",
      "issue": "gabarito_errado",
      "notes": "Gabarito deveria ser CERTO. A PF realmente investiga crimes cibernéticos conforme lei X.",
      "question": "Os crimes cibernéticos (crimes digitais) são investigados no Brasil principalmente pela...",
      "correctAnswer": false
    },
    {
      "id": "policial-investigacao-002",
      "area": "policial",
      "subject": "Direito Processual Penal",
      "issue": "gabarito_errado",
      "notes": "Resposta correta é Polícia Militar, não Polícia Civil como marcado.",
      "question": "No Brasil, a investigação de crimes é atribuição principal da...",
      "correctAnswer": true
    }
  ]
}
```

---

## 🔧 ATALHOS E DICAS

### **Atalhos de Teclado:**
```
Ctrl + Shift + Q  → Abrir auditoria
Ctrl + Shift + A  → Abrir admin panel
Esc               → Fechar modal (futuro)
```

### **Dicas de Uso:**
```
✅ Marque problemas conforme encontra
✅ Adicione notas detalhadas
✅ Exporte relatório ao final
✅ Use filtro "Só Problemas" para revisar
✅ Busque por palavras-chave suspeitas
```

### **Workflow Recomendado:**
```
1. Abrir auditoria
2. Revisar área por área
3. Marcar problemas encontrados
4. Exportar relatório
5. Aplicar correções no backend
6. Recarregar para verificar
```

---

## 📈 PRÓXIMAS MELHORIAS (FUTURO)

### **Backend Integration:**
- [ ] Endpoint PUT para salvar edições
- [ ] Persistir flags no banco
- [ ] Histórico de alterações
- [ ] Versionamento de questões

### **Features Avançadas:**
- [ ] Detecção automática de duplicadas
- [ ] IA para validar gabaritos
- [ ] Comparação com questões oficiais
- [ ] Sistema de review colaborativo

### **UX:**
- [ ] Edição inline (sem modal)
- [ ] Drag & drop para reordenar
- [ ] Preview lado a lado
- [ ] Modo escuro/claro

---

## ✅ CHECKLIST DE AUDITORIA

### **Antes de começar:**
- [ ] Backup do banco de dados
- [ ] Abrir auditoria (Ctrl+Shift+Q)
- [ ] Aguardar carregamento completo

### **Durante:**
- [ ] Revisar todas as áreas
- [ ] Marcar problemas encontrados
- [ ] Adicionar notas explicativas
- [ ] Testar gabaritos suspeitos

### **Depois:**
- [ ] Exportar relatório JSON
- [ ] Aplicar correções no backend
- [ ] Validar correções
- [ ] Documentar mudanças

---

## 🎉 CONCLUSÃO

**Sistema de auditoria 100% funcional!**

Agora você pode:
- ✅ Varrer todas as questões
- ✅ Encontrar gabaritos errados
- ✅ Marcar problemas
- ✅ Editar questões
- ✅ Exportar relatórios
- ✅ Manter qualidade do banco

**Tempo médio de auditoria completa:** 30-60 minutos para 150 questões

---

**Criado em:** 07/01/2026  
**Versão:** 1.0.0  
**Atalho:** Ctrl + Shift + Q  
**Status:** Production Ready 🚀
