# 🎮 QUIRON CONCURSOS - SETUP ADMOB ANDROID

## ✅ IDs DO ADMOB CONFIGURADOS

```
📱 APP ID: ca-app-pub-6610162198287913~1063558749
🏷️ BANNER: ca-app-pub-6610162198287913/4368718246
📺 INTERSTICIAL: ca-app-pub-6610162198287913/1910075868
🎁 PREMIADO (+5 energia): ca-app-pub-6610162198287913/3087426165
🎬 INTERCALAR PREMIADO (+2 energia): ca-app-pub-6610162198287913/9492535497
```

---

## 🚀 PASSO 1: INSTALAR DEPENDÊNCIAS

Execute no terminal:

```bash
npm install @capacitor-community/admob@5.1.1
npx cap sync
```

---

## 📱 PASSO 2: CONFIGURAR ANDROIDMANIFEST.XML

**Arquivo:** `/android/app/src/main/AndroidManifest.xml`

Adicione DENTRO da tag `<application>`:

```xml
<!-- AdMob App ID -->
<meta-data
    android:name="com.google.android.gms.ads.APPLICATION_ID"
    android:value="ca-app-pub-6610162198287913~1063558749"/>
```

**Exemplo completo:**

```xml
<application
    android:allowBackup="true"
    android:icon="@mipmap/ic_launcher"
    android:label="@string/app_name"
    android:roundIcon="@mipmap/ic_launcher_round"
    android:supportsRtl="true"
    android:theme="@style/AppTheme">

    <!-- ✅ ADICIONE AQUI -->
    <meta-data
        android:name="com.google.android.gms.ads.APPLICATION_ID"
        android:value="ca-app-pub-6610162198287913~1063558749"/>

    <activity
        android:name=".MainActivity"
        ...>
```

---

## 🔧 PASSO 3: CONFIGURAR BUILD.GRADLE

**Arquivo:** `/android/app/build.gradle`

Adicione nas `dependencies`:

```gradle
dependencies {
    implementation 'com.google.android.gms:play-services-ads:22.6.0'
}
```

---

## ⚡ PASSO 4: INICIALIZAR NO APP.TSX

**Arquivo:** `/App.tsx`

Adicione no início do componente:

```typescript
import { useEffect } from 'react';
import { Capacitor } from '@capacitor/core';
import { initializeAdMob, showBanner } from './utils/admob';

function App() {
  useEffect(() => {
    // Inicializa AdMob apenas em plataformas nativas
    if (Capacitor.isNativePlatform()) {
      initializeAdMob()
        .then(() => {
          console.log('✅ AdMob inicializado');
          // Mostra banner no rodapé
          showBanner();
        })
        .catch((error) => {
          console.error('❌ Erro ao inicializar AdMob:', error);
        });
    }
  }, []);

  // ... resto do código
}
```

---

## 🎯 PASSO 5: ADICIONAR BOTÃO DE ENERGIA NO HEADER

**Arquivo:** `/components/layout/Header.tsx`

Importe e adicione o botão:

```typescript
import { AdRewardButton } from '../AdRewardButton';

// Dentro do Header, ao lado do contador de energia:
<div className="flex items-center gap-2">
  {/* Energia atual */}
  <div className="flex items-center gap-1 bg-yellow-500/20 px-3 py-1 rounded-full">
    <Zap className="w-4 h-4 text-yellow-400" />
    <span className="text-yellow-300 font-bold">{userEnergy}</span>
  </div>

  {/* Botão de anúncio premiado */}
  <AdRewardButton
    onEnergyGained={(energy) => {
      // Atualiza energia no contexto/estado global
      setUserEnergy((prev) => prev + energy);
    }}
    variant="outline"
    size="sm"
    showLabel={false}
  />
</div>
```

---

## 📊 PASSO 6: ESTRATÉGIA DE POSICIONAMENTO

### **1. BANNER (Rodapé)** 🏷️

**Onde:** Todas as telas (exceto durante jogo)

```typescript
// Mostra automaticamente no App.tsx
showBanner();

// Esconde durante jogo Godot
hideBanner();
```

---

### **2. INTERSTICIAL (Tela Cheia)** 📺

**Quando:**
- Após completar quiz de questões
- Entre áreas temáticas no Game Épico
- Ao sair do Game Épico
- **Limite:** 1x a cada 5 minutos

```typescript
import { showInterstitial } from './utils/admob';

// Exemplo: Ao finalizar quiz
function handleQuizComplete() {
  saveResults();
  
  // Mostra intersticial (respeita cooldown automático)
  showInterstitial();
  
  navigateToResults();
}
```

---

### **3. PREMIADO VOLUNTÁRIO (+5 energia)** 🎁

**Onde:**
- Botão no header (sempre visível)
- Modal "Sem Energia"
- Página da Loja
- **Limite:** 10x por dia

```typescript
import { AdRewardButton, NoEnergyModal } from './components/AdRewardButton';

// Modal quando sem energia
<NoEnergyModal
  isOpen={userEnergy === 0}
  onClose={() => setShowModal(false)}
  currentEnergy={userEnergy}
  onEnergyGained={(energy) => {
    setUserEnergy((prev) => prev + energy);
  }}
/>
```

---

### **4. INTERCALAR PREMIADO (+2 energia)** 🎬

**Quando:**
- Após 5 questões no Game Épico
- Ao completar área temática
- Bônus surpresa automático
- **Limite:** 5x por dia

```typescript
import { showInterstitialRewarded } from './utils/admob';

// Exemplo: Após 5 questões
if (questionsAnswered % 5 === 0) {
  showInterstitialRewarded((energy) => {
    toast.success(`🎁 Bônus: +${energy} energia!`);
    setUserEnergy((prev) => prev + energy);
  });
}
```

---

## 🧪 PASSO 7: TESTAR COM ADS DE TESTE

**Arquivo:** `/config/admob.ts`

Durante desenvolvimento, ative IDs de teste:

```typescript
export const ADMOB_CONFIG = {
  // ...
  USE_TEST_ADS: true, // ✅ Mude para true em desenvolvimento
};
```

**⚠️ IMPORTANTE:** Mude para `false` antes de publicar na Play Store!

---

## 📱 PASSO 8: BUILD E TESTE NO ANDROID

```bash
# Build e sincroniza
npm run build
npx cap sync android

# Abre no Android Studio
npx cap open android
```

No Android Studio:
1. ✅ Conecte um dispositivo físico (ou emulador)
2. ✅ Clique em "Run" (▶️)
3. ✅ Teste os anúncios no app

---

## ✅ CHECKLIST FINAL

Antes de publicar:

- [ ] `USE_TEST_ADS: false` em `/config/admob.ts`
- [ ] APP_ID configurado no `AndroidManifest.xml`
- [ ] Dependência `play-services-ads` no `build.gradle`
- [ ] Banner aparece no rodapé
- [ ] Botão de energia aparece no header
- [ ] Intersticial respeita cooldown de 5 min
- [ ] Anúncios premiados funcionam corretamente
- [ ] Modal de "Sem Energia" exibe CTA
- [ ] Testado em dispositivo físico

---

## 🎯 PRÓXIMOS PASSOS

1. ✅ **Configurar AdMob** → COMPLETO!
2. ⏳ **Testar em Android** → Execute `npx cap open android`
3. ⏳ **Build release** → Execute `npm run build:release:android`
4. ⏳ **Upload na Play Store** → Siga `/PUBLICAR-PLAY-STORE.md`

---

## 🐛 PROBLEMAS COMUNS

### **"AdMob não inicializa"**
- Verifique se APP_ID está no `AndroidManifest.xml`
- Confirme que `play-services-ads` está no `build.gradle`
- Execute `npx cap sync android`

### **"Anúncios não aparecem"**
- Use `USE_TEST_ADS: true` durante testes
- Aguarde até 1 hora após criar blocos no AdMob
- Verifique conexão com internet

### **"Erro de política do AdMob"**
- Aguarde aprovação dos blocos (pode levar até 24h)
- Certifique-se que app não viola políticas
- Adicione política de privacidade ao app

---

## 📚 DOCUMENTAÇÃO

- [AdMob Capacitor Plugin](https://github.com/capacitor-community/admob)
- [Google AdMob Policies](https://support.google.com/admob/answer/6128543)
- [Capacitor Android Setup](https://capacitorjs.com/docs/android)

---

**🎉 ADMOB CONFIGURADO COM SUCESSO!**

Agora seu app está pronto para monetizar! 🚀💰
