# 🎮 COMO EXTRAIR ARQUIVOS DO GODOT

## 🎯 VOCÊ TEM 2 OPÇÕES:

---

## ✅ OPÇÃO 1: USAR 7-ZIP (GRATUITO) - RECOMENDADO

### **Passo 1: Baixar 7-Zip**
```
🔗 https://www.7-zip.org/

1. Clique no link
2. Baixe "Download .exe 64-bit x64"
3. Execute o instalador
4. Next → Next → Install → Finish
```

### **Passo 2: Extrair o ZIP**
```
1. Vá na pasta Downloads
2. Encontre: godot-meu-jogo-web-main.zip (ou godot-meu-jogo-web-main (2).zip)
3. Clique DIREITO no arquivo
4. Escolha: "7-Zip" → "Extract Here"
5. Vai criar uma pasta com os arquivos
```

### **Passo 3: Copiar Arquivos**
```
1. Abra a pasta extraída: godot-meu-jogo-web-main
2. Selecione TODOS os arquivos dentro (Ctrl+A)
3. Copie (Ctrl+C)
4. Vá no VS Code → public/godot-game/
5. Cole (Ctrl+V)
6. PRONTO! ✅
```

---

## ⚡ OPÇÃO 2: SCRIPT AUTOMÁTICO (SEM INSTALAR NADA)

### **Passo 1: Preparar o ZIP**
```
1. Vá na pasta Downloads
2. Copie o arquivo ZIP: godot-meu-jogo-web-main.zip
3. Cole na PASTA RAIZ do projeto Quiron
   (onde está o arquivo package.json)
```

### **Passo 2: Executar o Script**
```
1. Abra o Terminal no VS Code (Ctrl + ')
2. Digite: node extract-godot-files.js
3. Aperte Enter
4. Aguarde (15-30 segundos)
5. PRONTO! ✅
```

O script vai:
- ✅ Encontrar o ZIP automaticamente
- ✅ Extrair os arquivos
- ✅ Copiar para public/godot-game/
- ✅ Verificar se está tudo certo
- ✅ Limpar arquivos temporários

---

## 📊 COMPARAÇÃO:

| Método | Tempo | Dificuldade | Precisa Instalar |
|--------|-------|-------------|------------------|
| 7-Zip | 2 min | Fácil | Sim (gratuito) |
| Script | 30 seg | Super Fácil | Não |

---

## 🔧 TROUBLESHOOTING:

### **"Script não funciona"**
```
✅ Verifique se o ZIP está na pasta raiz do projeto
✅ Ou renomeie para: godot-game.zip
✅ Ou use o 7-Zip (Opção 1)
```

### **"7-Zip não aparece no menu"**
```
✅ Reinicie o Windows após instalar
✅ Ou clique direito → "Abrir com" → "7-Zip File Manager"
```

### **"Arquivos não aparecem no VS Code"**
```
✅ Clique direito na pasta public/godot-game/ → "Reveal in File Explorer"
✅ Verifique se os arquivos estão lá
✅ Recarregue o VS Code (Ctrl+Shift+P → "Reload Window")
```

---

## ✅ COMO SABER SE DEU CERTO:

Depois de extrair, você DEVE ter estes arquivos em `public/godot-game/`:

```
✅ index.html
✅ index.js
✅ index.wasm       (arquivo grande ~5-20MB)
✅ index.pck        (arquivo grande ~1-50MB)
✅ index.png        (opcional)
```

**Se não tiver .wasm e .pck, o game NÃO vai funcionar!**

---

## 🚀 DEPOIS DE EXTRAIR:

```bash
# 1. Execute o app
npm run dev

# 2. Acesse no navegador
http://localhost:5173

# 3. Clique em "Game Épico" no menu

# 4. GAME FUNCIONANDO! 🎮
```

---

## 🎯 QUAL OPÇÃO ESCOLHER?

- **Você quer rapidez?** → Use o SCRIPT (Opção 2)
- **Você vai extrair ZIPs no futuro?** → Instale 7-ZIP (Opção 1)
- **Você tem pressa?** → SCRIPT! (30 segundos)

---

## 📞 PRECISA DE AJUDA?

Me envie:
1. Print da pasta Downloads mostrando o ZIP
2. Print do erro (se aparecer)
3. Qual opção você tentou

---

**ESCOLHA UMA OPÇÃO E VAMOS NESSA! 🚀**
