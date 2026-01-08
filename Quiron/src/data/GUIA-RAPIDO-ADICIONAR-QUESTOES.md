# 📚 GUIA RÁPIDO - ADICIONAR NOVAS QUESTÕES

## 🎯 ESTRUTURA DAS ÁREAS E MATÉRIAS

### 🔵 ÁREA JURÍDICA (Azul)
- ✅ Direito Constitucional (50 questões) - **PRONTO**
- ⏳ Direito Administrativo (0 questões)
- ⏳ Direito Penal (0 questões)
- ⏳ Direito Civil (0 questões)
- ⏳ Direito Processual (0 questões)

### 🔴 ÁREA POLICIAL (Vermelho)
- ⏳ Legislação Penal Especial (0 questões)
- ⏳ Criminologia (0 questões)
- ⏳ Direitos Humanos (0 questões)
- ⏳ Procedimentos Policiais (0 questões)

### 🟡 ÁREA FISCAL-BANCÁRIA (Amarelo)
- ⏳ Direito Tributário (0 questões)
- ⏳ Contabilidade (0 questões)
- ⏳ AFO (Adm. Financeira e Orçamentária) (0 questões)
- ⏳ Economia (0 questões)

### 🟣 ÁREA CONHECIMENTOS GERAIS (Roxo)
- ⏳ Língua Portuguesa (0 questões)
- ⏳ Raciocínio Lógico (0 questões)
- ⏳ Informática (0 questões)
- ⏳ Atualidades (0 questões)

---

## 🚀 PASSO A PASSO PARA ADICIONAR NOVA MATÉRIA

### **PASSO 1: Copiar Template**
```bash
# Copiar o arquivo template
cp /data/TEMPLATE-nova-materia.ts /data/[nome-da-materia].ts
```

### **PASSO 2: Editar o Arquivo**
Abra `/data/[nome-da-materia].ts` e substitua:

```typescript
// Exemplo para Direito Administrativo:
export const direitoAdministrativoQuestions: GameQuestion[] = [
  {
    id: 'admin_001',  // Prefixo único para a matéria
    area: 'juridica',  // juridica | policial | fiscal-bancaria | conhecimentos-gerais
    subject: 'Direito Administrativo',
    question: 'A administração pública está sujeita ao princípio da legalidade.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 37, caput da CF/88 - princípio da legalidade.',
    difficulty: 'facil'
  },
  // ... adicionar mais 49 questões
];
```

### **PASSO 3: Criar 50 Questões**
Organize em **10 temas** com **5 questões cada**:

#### **Distribuição de Dificuldade:**
- 🟢 **Fácil:** 15-20 questões (30-40%)
- 🟡 **Médio:** 20-25 questões (40-50%)
- 🔴 **Difícil:** 5-10 questões (10-20%)

#### **Distribuição de Respostas:**
- ✅ **CERTO:** 30-38 questões (60-75%)
- ❌ **ERRADO:** 12-20 questões (25-40%)

### **PASSO 4: Importar em gameQuestions.ts**
Edite `/data/gameQuestions.ts`:

```typescript
// No topo do arquivo:
import { direitoAdministrativoQuestions } from './direitoAdministrativo';

// No array allGameQuestions:
export const allGameQuestions: GameQuestion[] = [
  ...direitoConstitucionalQuestions,
  ...direitoAdministrativoQuestions,  // <- Adicionar aqui
  // ... outras matérias
];
```

### **PASSO 5: Atualizar Contador em gameAreas**
Em `/data/gameQuestions.ts`, atualize o `questionsCount`:

```typescript
subjects: [
  { 
    id: 'direito-administrativo', 
    name: 'Direito Administrativo', 
    questionsCount: 50,  // <- Mudar de 0 para 50
    color: 'bg-blue-600' 
  },
  // ...
]
```

### **PASSO 6: Atualizar QuestionBankViewer**
Edite `/components/QuestionBankViewer.tsx`:

```typescript
// No topo, importar as questões:
import { 
  direitoConstitucionalQuestions, 
  direitoAdministrativoQuestions,  // <- Adicionar
  GameQuestion, 
  gameAreas 
} from '../data/gameQuestions';

// Na função getSubjectQuestions:
const getSubjectQuestions = (): GameQuestion[] => {
  if (!selectedSubject) return [];
  
  if (selectedSubject.id === 'direito-constitucional') {
    return direitoConstitucionalQuestions;
  }
  
  if (selectedSubject.id === 'direito-administrativo') {
    return direitoAdministrativoQuestions;  // <- Adicionar
  }
  
  // ... outras matérias
  
  return [];
};
```

### **PASSO 7: Testar!**
1. Abra o app
2. Vá em **Banco de Questões**
3. Selecione a **Área**
4. Selecione a **Matéria**
5. Veja as 50 questões!

---

## 📋 CHECKLIST DE QUALIDADE

### ✅ Antes de Adicionar:
- [ ] 50 questões criadas
- [ ] IDs únicos e sequenciais (ex: admin_001 a admin_050)
- [ ] Todas têm `area`, `subject`, `question`, `correctAnswer`, `explanation`, `difficulty`
- [ ] Enunciados curtos (máx. 2 linhas)
- [ ] Explicações curtas (máx. 2 linhas)
- [ ] Distribuição balanceada de dificuldade
- [ ] Distribuição balanceada de respostas (CERTO/ERRADO)
- [ ] 10 temas cobertos (5 questões cada)

### ✅ Após Adicionar:
- [ ] Importado em `gameQuestions.ts`
- [ ] Adicionado ao `allGameQuestions`
- [ ] `questionsCount` atualizado
- [ ] Importado no `QuestionBankViewer.tsx`
- [ ] Case adicionado em `getSubjectQuestions()`
- [ ] Testado no app
- [ ] Todas as questões aparecem
- [ ] Filtros funcionam
- [ ] Questão aleatória funciona

---

## 🎨 PADRÃO DE IDS E PREFIXOS

### Área Jurídica:
- `const_` - Direito Constitucional ✅
- `admin_` - Direito Administrativo
- `penal_` - Direito Penal
- `civil_` - Direito Civil
- `proc_` - Direito Processual

### Área Policial:
- `lpe_` - Legislação Penal Especial
- `crim_` - Criminologia
- `dh_` - Direitos Humanos
- `pp_` - Procedimentos Policiais

### Área Fiscal-Bancária:
- `trib_` - Direito Tributário
- `cont_` - Contabilidade
- `afo_` - AFO
- `econ_` - Economia

### Área Conhecimentos Gerais:
- `port_` - Língua Portuguesa
- `rl_` - Raciocínio Lógico
- `info_` - Informática
- `atua_` - Atualidades

---

## 💡 DICAS DE CRIAÇÃO

### ✍️ Enunciados:
- Máximo 2 linhas
- Claro e objetivo
- Estilo Cebraspe (afirmações diretas)
- Sem pegadinhas óbvias

### 📝 Explicações:
- Começa com **CERTO** ou **ERRADO**
- Referência legal quando possível
- Máximo 2 linhas
- Direta ao ponto

### 🎯 Dificuldade:
- **Fácil:** Lei seca, conceitos básicos
- **Médio:** Aplicação, interpretação
- **Difícil:** Jurisprudência, exceções, casos complexos

### ✅ Respostas:
- Balancear CERTO e ERRADO
- Não criar padrões previsíveis
- Misturar em cada tema

---

## 📊 EXEMPLO COMPLETO

```typescript
// /data/direitoAdministrativo.ts
import { GameQuestion } from './gameQuestions';

export const direitoAdministrativoQuestions: GameQuestion[] = [
  // TEMA 1: PRINCÍPIOS ADMINISTRATIVOS (5 questões)
  {
    id: 'admin_001',
    area: 'juridica',
    subject: 'Direito Administrativo',
    question: 'O princípio da legalidade exige que o administrador público atue conforme a lei.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 37, caput da CF/88 - vinculação à legalidade.',
    difficulty: 'facil'
  },
  {
    id: 'admin_002',
    area: 'juridica',
    subject: 'Direito Administrativo',
    question: 'O princípio da moralidade se confunde com a moral comum.',
    correctAnswer: false,
    explanation: 'ERRADO. Moralidade administrativa é específica, distinta da moral comum.',
    difficulty: 'medio'
  },
  // ... mais 3 questões do tema 1
  
  // TEMA 2: ATOS ADMINISTRATIVOS (5 questões)
  {
    id: 'admin_006',
    area: 'juridica',
    subject: 'Direito Administrativo',
    question: 'Atos administrativos são sempre dotados de imperatividade.',
    correctAnswer: false,
    explanation: 'ERRADO. Apenas atos que impõem obrigações têm imperatividade.',
    difficulty: 'dificil'
  },
  // ... mais 4 questões do tema 2
  
  // ... TEMAS 3 a 10 (mais 40 questões)
];
```

---

## 🎯 META FINAL

**17 MATÉRIAS × 50 QUESTÕES = 850 QUESTÕES TOTAIS**

- 🔵 Jurídica: 5 matérias × 50 = 250 questões
- 🔴 Policial: 4 matérias × 50 = 200 questões
- 🟡 Fiscal-Bancária: 4 matérias × 50 = 200 questões
- 🟣 Conhecimentos Gerais: 4 matérias × 50 = 200 questões

---

## 🚦 PRÓXIMAS MATÉRIAS SUGERIDAS

### Prioridade Alta (Mais cobradas):
1. ⭐ **Direito Administrativo** (Jurídica)
2. ⭐ **Língua Portuguesa** (Conhecimentos Gerais)
3. ⭐ **Raciocínio Lógico** (Conhecimentos Gerais)
4. ⭐ **Direito Penal** (Jurídica/Policial)

### Prioridade Média:
5. **Legislação Penal Especial** (Policial)
6. **Direito Tributário** (Fiscal-Bancária)
7. **Informática** (Conhecimentos Gerais)
8. **Contabilidade** (Fiscal-Bancária)

### Prioridade Baixa:
9. Direito Civil
10. Direito Processual
11. AFO
12. Economia
13. Criminologia
14. Direitos Humanos
15. Procedimentos Policiais
16. Atualidades

---

**🎉 ESTÁ PRONTO PARA COMEÇAR!**

Use o template em `/data/TEMPLATE-nova-materia.ts` e siga este guia!
