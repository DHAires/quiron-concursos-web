# 🎯 QUIRON CONCURSOS - GUIA RÁPIDO DO DESENVOLVEDOR

## 📚 VISÃO GERAL DO BANCO DE QUESTÕES

### **RESUMO EXECUTIVO**
- **Total:** 950 questões
- **Áreas:** 4 (Jurídica, Policial, Fiscal-Bancária, Conhecimentos Gerais)
- **Matérias:** 19
- **Formato:** Certo/Errado (estilo CESPE/CEBRASPE)

---

## 🏛️ ESTRUTURA DO BANCO

### **1. ÁREA JURÍDICA (AZUL) - 250 questões**
```
✅ Direito Constitucional - 50 questões
✅ Direito Administrativo - 50 questões
✅ Direito Penal - 50 questões
✅ Direito Civil - 50 questões
✅ Direito do Trabalho - 50 questões
```

### **2. ÁREA POLICIAL (VERMELHO) - 200 questões**
```
✅ Legislação Penal Especial - 50 questões
✅ Criminologia - 50 questões
✅ Direitos Humanos - 50 questões
✅ Procedimentos Policiais - 50 questões
```

### **3. ÁREA FISCAL-BANCÁRIA (AMARELO) - 250 questões**
```
✅ Direito Tributário - 50 questões
✅ Contabilidade - 50 questões
✅ AFO - 50 questões
✅ Economia - 50 questões
✅ Conhecimentos Bancários - 50 questões
```

### **4. ÁREA CONHECIMENTOS GERAIS (ROXO) - 250 questões**
```
✅ Português - 50 questões
✅ Raciocínio Lógico - 50 questões
✅ Informática - 50 questões
✅ Atualidades - 50 questões
✅ História do Brasil - 50 questões
```

---

## 📂 ARQUIVOS PRINCIPAIS

### **Dados:**
- `/data/gameQuestions.ts` - **TODAS** as 950 questões
- `/data/VISAO-GERAL-BANCO-QUESTOES.md` - Documentação completa
- `/data/GUIA-RAPIDO-ADICIONAR-QUESTOES.md` - Tutorial de adição
- `/data/TEMPLATE-nova-materia.ts` - Template para novas matérias

### **Componentes:**
- `/components/QuestionBankViewer.tsx` - Interface do banco
- `/components/EpicGame.tsx` - Game 3D-quiz
- `/components/Questions.tsx` - Modo de prática
- `/components/QuestionPractice.tsx` - Prática focada

### **Contextos:**
- `/contexts/AppContext.tsx` - Estado global
- `/hooks/useNavigate.ts` - Navegação

---

## 🎮 COMO FUNCIONA O GAME

1. **Usuário acessa:**
   - Dashboard → Game Épico
   - Ou: Dashboard → Banco de Questões

2. **Seleciona:**
   - Área (Jurídica/Policial/Fiscal/Gerais)
   - Matéria (ex: Direito Constitucional)

3. **Game gera:**
   - Questões aleatórias da matéria
   - Cartas 3D interativas
   - Sistema de pontuação

4. **Feedback:**
   - Resposta imediata (Certo/Errado)
   - Explicação detalhada
   - Atualização de estatísticas

---

## ⚡ ADICIONAR NOVAS QUESTÕES (RÁPIDO)

### **Passo 1: Editar `/data/gameQuestions.ts`**

Encontre o array da matéria (ex: `direitoConstitucionalQuestions`) e adicione:

```typescript
{
  id: 'const_051', // Incremente o número
  area: 'juridica', // juridica | policial | fiscal-bancaria | conhecimentos-gerais
  subject: 'Direito Constitucional',
  question: 'Seu enunciado aqui (formato afirmativo).',
  correctAnswer: true, // true = CERTO | false = ERRADO
  explanation: 'Explicação completa e didática.',
  difficulty: 'facil' // facil | medio | dificil
}
```

### **Passo 2: Atualizar contagem**

Em `gameAreas`, atualize o `questionsCount` da matéria:

```typescript
{ 
  id: 'direito-constitucional', 
  name: 'Direito Constitucional', 
  questionsCount: 51, // Atualize aqui
  color: 'bg-blue-500' 
}
```

### **Passo 3: Testar**

1. Abra "Banco de Questões" no menu
2. Acesse a matéria
3. Verifique se a contagem aumentou
4. Teste a nova questão

---

## 🆕 ADICIONAR NOVA MATÉRIA

### **1. Criar array de questões em `/data/gameQuestions.ts`:**

```typescript
export const novaMateria Questions: GameQuestion[] = [
  {
    id: 'nova_001',
    area: 'juridica',
    subject: 'Nova Matéria',
    question: 'Primeira questão...',
    correctAnswer: true,
    explanation: 'Explicação...',
    difficulty: 'facil'
  },
  // ... mais 49 questões
];
```

### **2. Adicionar em `gameAreas`:**

```typescript
{
  id: 'juridica',
  name: 'Jurídica',
  color: 'text-blue-400',
  bgColor: 'bg-blue-600',
  subjects: [
    // ... matérias existentes
    { 
      id: 'nova-materia', 
      name: 'Nova Matéria', 
      questionsCount: 50, 
      color: 'bg-blue-950' 
    }
  ]
}
```

### **3. Atualizar `/components/QuestionBankViewer.tsx`:**

Na função `getSubjectQuestions()`, adicione:

```typescript
if (selectedSubject.id === 'nova-materia') {
  return novaMateriaQuestions;
}
```

### **4. Importar no início do arquivo:**

```typescript
import { 
  // ... imports existentes
  novaMateriaQuestions
} from '../data/gameQuestions';
```

---

## 🧪 CHECKLIST DE QUALIDADE

Antes de commitar novas questões, verifique:

- [ ] ✅ ID único (não repetido)
- [ ] ✅ Área correta (juridica/policial/fiscal-bancaria/conhecimentos-gerais)
- [ ] ✅ Enunciado claro e afirmativo
- [ ] ✅ Resposta booleana (true/false)
- [ ] ✅ Explicação completa (mínimo 50 caracteres)
- [ ] ✅ Dificuldade definida (facil/medio/dificil)
- [ ] ✅ Ortografia correta
- [ ] ✅ Baseado em legislação atualizada
- [ ] ✅ Testado no componente

---

## 📊 ESTATÍSTICAS ATUAIS

### **Por Área:**
- Jurídica: 250 questões (26%)
- Policial: 200 questões (21%)
- Fiscal-Bancária: 250 questões (26%)
- Conhecimentos Gerais: 250 questões (26%)

### **Por Dificuldade:**
- Fácil: ~350 (37%)
- Médio: ~450 (47%)
- Difícil: ~150 (16%)

### **Meta:**
- ✅ **950/950 questões** (100% completo)
- 📈 **Expansão Fase 2:** +600 questões planejadas

---

## 🔧 COMANDOS ÚTEIS

### **Buscar questões duplicadas:**
```bash
# Contar questões por área
grep -o "area: 'juridica'" data/gameQuestions.ts | wc -l
```

### **Validar IDs únicos:**
```bash
# Listar todos os IDs
grep "id: '" data/gameQuestions.ts
```

### **Contar questões por matéria:**
```bash
# Exemplo: Direito Constitucional
grep -A1 "subject: 'Direito Constitucional'" data/gameQuestions.ts | wc -l
```

---

## 🚀 ROADMAP - PRÓXIMAS MATÉRIAS

### **Fase 2 (Planejado):**

**Área Jurídica:**
- [ ] Direito Processual Civil (50q)
- [ ] Direito Processual Penal (50q)
- [ ] Direito Eleitoral (50q)

**Área Policial:**
- [ ] Medicina Legal (50q)
- [ ] Balística (50q)
- [ ] Investigação Criminal (50q)

**Área Fiscal:**
- [ ] Matemática Financeira (50q)
- [ ] Auditoria (50q)

**Área Gerais:**
- [ ] Geografia (50q)
- [ ] Inglês (50q)
- [ ] Ética (50q)

---

## 💡 DICAS DE QUALIDADE

### **Boas Práticas:**
✅ Enunciados objetivos (1-2 linhas)
✅ Explicações completas (3-5 linhas)
✅ Base legal citada (Art. X da Lei Y)
✅ Linguagem clara e direta
✅ Distribuição equilibrada de dificuldades

### **Evitar:**
❌ Questões ambíguas
❌ Enunciados muito longos
❌ Explicações vagas
❌ Informações desatualizadas
❌ Temas muito específicos

---

## 🎯 INTEGRAÇÃO COM O SISTEMA

### **Sistema de Energia:**
- Cada questão no Game = 1 energia
- Banco de Questões = grátis (modo estudo)
- Freemium: energia limitada
- Premium: energia ilimitada

### **Estatísticas Rastreadas:**
- Questões respondidas
- Taxa de acerto por matéria
- Tempo médio de resposta
- Dificuldades mais erradas
- Progresso por área

### **Ranking:**
- Pontos por acerto
- Bônus por dificuldade
- Penalidade por erro
- Multiplicadores especiais

---

## 📞 SUPORTE

**Documentação Completa:**
- 📄 `/data/VISAO-GERAL-BANCO-QUESTOES.md`
- 📘 `/data/GUIA-RAPIDO-ADICIONAR-QUESTOES.md`
- 📋 `/data/TEMPLATE-nova-materia.ts`

**Dúvidas Frequentes:**
1. Como adicionar questão? → Ver seção "ADICIONAR NOVAS QUESTÕES"
2. Como criar matéria? → Ver seção "ADICIONAR NOVA MATÉRIA"
3. Como testar? → Acessar "Banco de Questões" no menu
4. Formato errado? → Consultar exemplos em `/data/gameQuestions.ts`

---

## ✅ STATUS DO PROJETO

**Banco de Questões:** ✅ 100% Completo (950/950)
**Interface:** ✅ Funcional
**Game 3D:** ✅ Integrado
**Sistema de Energia:** ✅ Ativo
**Ranking:** ✅ Operacional
**Fórum:** ✅ Com tópicos auto-inicializados
**Prometheus Chat:** ✅ IA revolucionária ativa

---

**Última atualização:** Dezembro 2024  
**Versão:** 1.0.0  
**Desenvolvedor:** Quiron Concursos Team 🏛️
