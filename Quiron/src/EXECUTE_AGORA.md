# 🚀 EXECUTE AGORA - ATIVE O ADMOB!

## ⚡ AÇÃO IMEDIATA - COPIE E COLE NO TERMINAL

---

## 📦 PASSO 1: INSTALAR DEPENDÊNCIAS (5 MIN)

Abra o terminal na pasta do projeto e execute:

```bash
npm install
```

**Aguarde terminar...** ⏳

Você verá:
```
✔ Instalando dependências...
✔ @capacitor-community/admob@5.1.1 instalado
✔ Todas as dependências instaladas
```

---

## 🔄 PASSO 2: SINCRONIZAR ANDROID (2 MIN)

```bash
npx cap sync android
```

**Aguarde terminar...** ⏳

Você verá:
```
✔ Copiando arquivos web...
✔ Atualizando plugins...
✔ Sincronização completa!
```

---

## 🌐 PASSO 3: TESTAR NO NAVEGADOR (OPCIONAL)

```bash
npm run dev
```

Acesse: **http://localhost:5173**

**Verifique:**
- ✅ App abre normalmente
- ✅ Header mostra contador de energia: **10 ⚡**
- ✅ Console do navegador mostra: `🌐 Modo web - AdMob desabilitado`

**Isso significa que a integração está OK!** ✅

Pressione **Ctrl+C** para parar o servidor.

---

## 📱 PASSO 4: TESTAR NO ANDROID (30 MIN)

### **4.1. Build do projeto**

```bash
npm run build
```

**Aguarde terminar...** ⏳ (1-2 minutos)

---

### **4.2. Abrir Android Studio**

```bash
npx cap open android
```

O Android Studio vai abrir automaticamente! 🎉

---

### **4.3. Configurar dispositivo**

**OPÇÃO A - Celular Físico (RECOMENDADO):**
1. Conecte o celular via USB
2. Ative "Depuração USB" nas configurações do celular
3. No Android Studio, selecione seu celular no dropdown superior

**OPÇÃO B - Emulador:**
1. No Android Studio: Tools → Device Manager
2. Crie um emulador Android (Pixel 5, API 33)
3. Inicie o emulador

---

### **4.4. Executar o app**

No Android Studio:
1. Clique no botão **▶️ Run** (ou pressione Shift+F10)
2. Aguarde compilação (primeira vez demora 3-5 minutos)
3. App instala e abre no dispositivo

---

### **4.5. VERIFICAR INTEGRAÇÃO ✅**

**No app aberto no celular:**

1. **Header:**
   - ✅ Contador de energia aparece: **10 ⚡**
   - ✅ Botão com raio dourado aparece ao lado (⚡+)

2. **Banner:**
   - ✅ Banner de teste aparece no rodapé
   - ✅ Escrito "Test Ad" (anúncio de teste)

3. **Teste o botão de anúncio premiado:**
   - Clique no botão ⚡+ no header
   - Anúncio de teste carrega
   - Assista até aparecer botão de fechar (X)
   - Feche o anúncio
   - Toast aparece: **"⚡ Você ganhou 5 energias!"**
   - Contador atualiza: **10 → 15 ⚡**

4. **Teste transições:**
   - Entre no menu Game Épico
   - Banner DESAPARECE (para não atrapalhar)
   - Saia do jogo
   - Banner REAPARECE

---

## 🎉 SE TUDO FUNCIONOU:

**PARABÉNS! INTEGRAÇÃO 100% COMPLETA!** ✅

Você pode agora:

### **OPÇÃO 1: CONTINUAR TESTANDO**
- Teste mais anúncios
- Responda questões para ver intercalar premiado
- Explore o app

### **OPÇÃO 2: PREPARAR PARA PUBLICAÇÃO**

1. **Desative anúncios de teste:**
   - Abra `/config/admob.ts`
   - Mude: `USE_TEST_ADS: false`

2. **Build release:**
   ```bash
   npm run build:release:android
   ```

3. **Assine o APK** (se ainda não configurou keystore)

4. **Upload na Play Store:**
   - Acesse Google Play Console
   - Crie novo release
   - Upload do APK/AAB
   - Publique

5. **Aguarde aprovação:**
   - Google aprova em 24-48h
   - AdMob processa app
   - Anúncios reais aparecem em 1-24h

---

## 🐛 PROBLEMAS COMUNS

### **"npm install" dá erro**

```bash
# Limpe cache
npm cache clean --force

# Tente novamente
npm install
```

---

### **"npx cap sync" dá erro**

```bash
# Reinstale Capacitor CLI
npm install -g @capacitor/cli

# Tente novamente
npx cap sync android
```

---

### **"Android Studio não abre"**

1. Certifique-se que Android Studio está instalado
2. Download: https://developer.android.com/studio
3. Ou use comando manual:
   ```bash
   cd android
   ./gradlew assembleDebug
   ```

---

### **"Anúncios não aparecem no app"**

**Verifique:**
1. Internet está conectada?
2. `USE_TEST_ADS: true` em `/config/admob.ts`?
3. APP_ID correto no AndroidManifest.xml?
4. Aguarde até 1 minuto após abrir app

**Solução:**
```bash
# Re-sincronize
npx cap sync android

# Limpe e rebuilde
cd android
./gradlew clean
cd ..
npm run build
npx cap sync android
```

---

### **"Botão de energia não aparece"**

**Causa:** Você está no navegador (modo web)

**Solução:** Botão só aparece em plataformas nativas (Android/iOS)

---

## 📊 CONSOLE DO ANDROID STUDIO

**Para ver logs detalhados:**

1. No Android Studio: View → Tool Windows → Logcat
2. Filtre por: `quiron`
3. Você verá:
   ```
   🎮 Inicializando AdMob...
   ✅ AdMob inicializado com sucesso
   ⚡ Energia atualizada: +5 (Total: 15)
   ```

---

## ✅ CHECKLIST DE TESTE

Marque conforme testa:

- [ ] `npm install` executado sem erros
- [ ] `npx cap sync android` executado sem erros
- [ ] App compila no Android Studio
- [ ] App instala no dispositivo
- [ ] Contador de energia aparece (10 ⚡)
- [ ] Botão ⚡+ aparece no header
- [ ] Banner aparece no rodapé
- [ ] Clicar em ⚡+ carrega anúncio
- [ ] Assistir anúncio recompensa +5 energia
- [ ] Contador atualiza corretamente
- [ ] Banner desaparece no Game Épico
- [ ] Logs aparecem no console

**TUDO OK?** 🎉 Você está pronto para publicar!

---

## 🚀 PRÓXIMO PASSO

**Quando estiver satisfeito com os testes:**

1. Mude `USE_TEST_ADS: false` em `/config/admob.ts`
2. Build release: `npm run build:release:android`
3. Publique na Play Store
4. Aguarde 2-3 dias
5. **COMECE A GANHAR DINHEIRO!** 💰

---

## 📚 DOCUMENTAÇÃO

- **Setup completo:** `/ADMOB_ANDROID_SETUP.md`
- **Configuração:** `/ADMOB_CONFIGURACAO_COMPLETA.md`
- **Instalação:** `/ADMOB_INSTALACAO_FINAL.md`
- **Resumo:** `/ADMOB_RESUMO_EXECUTIVO.md`

---

# 🎯 COMANDO RÁPIDO (TUDO DE UMA VEZ)

Se quiser executar tudo automaticamente:

```bash
npm install && npx cap sync android && npm run build && npx cap open android
```

**Isso vai:**
1. ✅ Instalar dependências
2. ✅ Sincronizar Android
3. ✅ Fazer build
4. ✅ Abrir Android Studio

**Depois é só clicar em RUN!** ▶️

---

**BOA SORTE E BOM DINHEIRO!** 💰🚀⚡
