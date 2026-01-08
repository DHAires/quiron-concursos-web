# 🎯 BOTÕES DE ATALHO - LEGISLAÇÃO PENAL

## ✅ FUNÇÕES JÁ CRIADAS!

Acabei de adicionar as funções necessárias no arquivo `/components/Questions.tsx`:

1. ✅ `handleDeleteLegislacaoPenal()` - Limpa apenas Legislação Penal
2. ✅ `handleSeedLegislacaoPenalOnly()` - Importa apenas Legislação Penal
3. ✅ Estados: `isSeedingLegislacaoPenal` e `isDeletingLegislacaoPenal`

---

## 🚀 COMO USAR OS BOTÕES

Agora você precisa adicionar os botões na interface do usuário. Procure por uma seção onde existam botões similares (como "Legislação Penal Especial") e adicione os novos botões.

### **CÓDIGO DOS BOTÕES:**

```tsx
{/* 🚔 LEGISLAÇÃO PENAL - ATALHO RÁPIDO */}
<div className="mt-8 p-6 bg-gradient-to-r from-red-900/30 to-orange-900/30 rounded-2xl border border-red-500/30">
  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
    🚔 LEGISLAÇÃO PENAL - Atalho Rápido
    <span className="px-2 py-1 bg-green-500/20 text-green-300 text-xs rounded">ATUALIZADO!</span>
  </h3>
  <p className="text-sm text-gray-400 mb-4">
    Gerencie apenas as questões de Legislação Penal (Código Penal, Crimes contra a Pessoa e Patrimônio, Lei de Drogas, etc.)
  </p>
  <div className="flex flex-wrap gap-3">
    {/* Botão Limpar */}
    <button
      onClick={handleDeleteLegislacaoPenal}
      disabled={isDeletingLegislacaoPenal}
      className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-xl font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 shadow-lg hover:shadow-red-500/50"
    >
      {isDeletingLegislacaoPenal ? (
        <>
          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
          Limpando...
        </>
      ) : (
        <>
          🗑️ Limpar Legislação Penal
        </>
      )}
    </button>

    {/* Botão Importar */}
    <button
      onClick={handleSeedLegislacaoPenalOnly}
      disabled={isSeedingLegislacaoPenal}
      className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-xl font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 shadow-lg hover:shadow-green-500/50"
    >
      {isSeedingLegislacaoPenal ? (
        <>
          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
          Importando...
        </>
      ) : (
        <>
          📥 Importar Legislação Penal (65 questões)
        </>
      )}
    </button>
  </div>
  
  <div className="mt-4 p-4 bg-blue-900/20 rounded-xl border border-blue-500/30">
    <p className="text-sm text-blue-300">
      💡 <strong>Dica:</strong> Use "Limpar" primeiro, depois "Importar" para atualizar com as 20 novas questões de Crimes contra a Pessoa e Patrimônio!
    </p>
  </div>
</div>
```

---

## 📍 ONDE ADICIONAR OS BOTÕES?

### Opção 1: Procure por "Legislação Penal Especial"

Procure no arquivo `/components/Questions.tsx` pela seção que tem os botões de "Legislação Penal Especial" e adicione os novos botões ACIMA ou ABAIXO dessa seção.

### Opção 2: No final do componente (antes do `</div>` final)

Adicione a seção de botões antes do fechamento do container principal.

### Opção 3: Procure por padrão similar

```tsx
// Procure por algo assim:
<button
  onClick={handleDeleteLegislacaoPenalEspecial}
  ...
>
  🗑️ Limpar Legislação Penal Especial
</button>
```

E adicione o novo código logo ACIMA ou ABAIXO.

---

## 🎯 TESTE RÁPIDO

Depois de adicionar os botões:

1. Abra o app
2. Vá em **Menu → Banco de Questões**
3. Role até encontrar a nova seção **"🚔 LEGISLAÇÃO PENAL - Atalho Rápido"**
4. Clique em **"🗑️ Limpar Legislação Penal"**
5. Aguarde a confirmação
6. Clique em **"📥 Importar Legislação Penal (65 questões)"**
7. Aguarde a mensagem de sucesso ✅

---

## ✨ O QUE VAI ACONTECER?

Quando você clicar em "Importar", vai aparecer:

```
✅ Questões de Legislação Penal importadas com sucesso!

🚔 LEGISLAÇÃO PENAL (65 questões - ATUALIZADO! 🔥):

• Código Penal - Parte Geral (5)
• Crimes contra a Pessoa (15 - EXPANDIDO!)
• Crimes contra o Patrimônio (15 - EXPANDIDO!)
• Crimes contra a Administração (5)
• Lei de Drogas (5)
• Crimes Hediondos (5)
• Organização Criminosa (5)
• Violência Doméstica (5)
• Crimes de Trânsito (5)

TOTAL: 65 QUESTÕES! 🎯🔥

Questões comentadas de concursos: CESPE, FCC, FGV, VUNESP!

Agora você pode praticar! 🚀
```

---

## 🔧 ALTERNATIVA RÁPIDA (POPULAR TUDO)

Se preferir não adicionar os botões agora, você pode simplesmente:

1. Ir em **Menu → Banco de Questões**
2. Clicar em **"🔄 Popular Banco de Dados"** (no final da página)
3. Aguardar a importação de TODAS as questões (incluindo as 20 novas!)

Isso vai reimportar tudo, incluindo as novas questões. ✅

---

Pronto! As funções estão criadas e prontas para uso! 🎉🔥
