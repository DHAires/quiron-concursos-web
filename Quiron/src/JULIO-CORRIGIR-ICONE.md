# 🎨 JULIO - CORRIGIR ÍCONE DO APP (5 MINUTOS)

## 🚨 PROBLEMA

Ícone do app está como padrão do Android (azul/verde) em vez do Quiron (centauro vermelho).

---

## ✅ SOLUÇÃO SUPER SIMPLES

### **MÉTODO 1: AUTOMÁTICO (MAIS FÁCIL)**

```bash
# PASSO 1: Instalar ferramenta (só uma vez)
npm install -g @capacitor/assets

# PASSO 2: Gerar ícones automaticamente
npx @capacitor/assets generate --iconBackgroundColor '#b91c1c'

# PASSO 3: Rebuild
npm run build
npx cap sync

# PASSO 4: Android Studio
# Build → Clean Project
# Build → Rebuild Project

# PASSO 5: Desinstalar app antigo
adb uninstall com.quiron.concursos

# PASSO 6: Reinstalar
# Run → Debug 'app'

# PRONTO! ✅
```

---

## 🖼️ SE NÃO TIVER O ÍCONE

O projeto JÁ TEM um ícone SVG em `/public/icon.svg`.

Se precisar converter para PNG:

### **Opção A: Online (Mais Fácil)**
1. Acesse: https://cloudconvert.com/svg-to-png
2. Upload do arquivo `/public/icon.svg`
3. Selecione tamanho: 1024x1024
4. Download
5. Salve como `/public/icon.png`
6. Execute MÉTODO 1 acima

### **Opção B: Photoshop/GIMP**
1. Abrir `/public/icon.svg`
2. Exportar como PNG
3. Tamanho: 1024x1024px
4. Salvar como `/public/icon.png`
5. Execute MÉTODO 1 acima

---

## 🎨 OU USE ESTE ÍCONE

Baixe direto daqui: https://icon.kitchen/

1. Acesse o site
2. Upload de qualquer imagem do Quiron que você tiver
3. Ajustar:
   - Background color: #b91c1c (vermelho)
   - Padding: 10%
   - Shape: Circle ou Square
4. Download
5. Extrair zip
6. Copiar arquivos para `android/app/src/main/res/`
7. Rebuild

---

## 📋 CHECKLIST

```
□ Ferramenta @capacitor/assets instalada
□ Comando generate executado
□ Build feito (npm run build)
□ Sync feito (npx cap sync)
□ Clean Project no Android Studio
□ Rebuild Project no Android Studio
□ App desinstalado antes de reinstalar
□ ÍCONE APARECE CORRETO! ✅
```

---

## 🐛 SE NÃO FUNCIONAR

**Problema:** Ícone continua padrão do Android

**Solução:**
```bash
# 1. Verificar se os arquivos foram gerados
ls android/app/src/main/res/mipmap-*/

# 2. Deve ter ic_launcher.png em cada pasta
# Se NÃO tiver, o generate falhou

# 3. Limpar TUDO
cd android
./gradlew clean
cd ..

# 4. Invalidar cache Android Studio
# File → Invalidate Caches → Invalidate and Restart

# 5. Tentar novamente
npm run build
npx cap sync
npx cap open android
```

---

## 💬 SE PRECISAR DE AJUDA

Me mande:
1. Print do erro (se houver)
2. Output do comando `npx @capacitor/assets generate`
3. Screenshot da pasta `android/app/src/main/res/`

Qualquer problema, eu gero os ícones manualmente para você!

---

**Tempo estimado: 5 minutos**  
**Dificuldade: ⭐ Fácil**
