# 🔐 BUILD E ASSINATURA DO APK/AAB - GUIA COMPLETO

## 📋 VISÃO GERAL

Para publicar na Play Store, você precisa:
1. **Keystore** (certificado para assinar o app)
2. **Build de Release** (versão otimizada)
3. **AAB ou APK assinado** (arquivo final)

---

## 🔑 PASSO 1: GERAR KEYSTORE (Certificado)

### ⚠️ ATENÇÃO CRÍTICA:
**NUNCA PERCA O KEYSTORE!** Se perder, não poderá mais atualizar o app na Play Store.

**Backup obrigatório em:**
- [ ] Pen drive externo
- [ ] Cloud (Google Drive, Dropbox)
- [ ] Cofre de senhas (LastPass, 1Password)

---

### A. Gerar Keystore via Terminal

```bash
# Navegue até a pasta do projeto:
cd /caminho/para/quiron-concursos

# Crie pasta para armazenar keystore:
mkdir -p android/keystores

# Gere o keystore:
keytool -genkeypair \
  -v \
  -storetype PKCS12 \
  -keystore android/keystores/quiron-release.jks \
  -alias quiron \
  -keyalg RSA \
  -keysize 2048 \
  -validity 10000
```

**Será solicitado:**
```
Enter keystore password: ********** (CRIE UMA SENHA FORTE!)
Re-enter new password: **********
What is your first and last name?
  [Unknown]: Seu Nome ou Razão Social
What is the name of your organizational unit?
  [Unknown]: Desenvolvimento
What is the name of your organization?
  [Unknown]: Quiron Concursos Ltda
What is the name of your City or Locality?
  [Unknown]: São Paulo
What is the name of your State or Province?
  [Unknown]: SP
What is the two-letter country code for this unit?
  [Unknown]: BR
Is CN=..., OU=..., O=..., L=..., ST=..., C=BR correct?
  [no]: yes
```

✅ **Keystore criado em:** `android/keystores/quiron-release.jks`

---

### B. Salvar Senhas com Segurança

**NUNCA COMMITE AS SENHAS NO GIT!**

Crie arquivo `android/keystore.properties` (já está no .gitignore):

```properties
storePassword=SUA_SENHA_KEYSTORE_AQUI
keyPassword=SUA_SENHA_KEY_AQUI
keyAlias=quiron
storeFile=keystores/quiron-release.jks
```

**Exemplo:**
```properties
storePassword=Quiron@2026!Seguro
keyPassword=Quiron@2026!Seguro
keyAlias=quiron
storeFile=keystores/quiron-release.jks
```

---

## 🛠️ PASSO 2: CONFIGURAR BUILD DE RELEASE

O arquivo `android/app/build.gradle` já está configurado (linhas 43-52), mas verifique:

```gradle
android {
    ...
    signingConfigs {
        release {
            if (project.hasProperty('QUIRON_RELEASE_STORE_FILE')) {
                storeFile file(QUIRON_RELEASE_STORE_FILE)
                storePassword QUIRON_RELEASE_STORE_PASSWORD
                keyAlias QUIRON_RELEASE_KEY_ALIAS
                keyPassword QUIRON_RELEASE_KEY_PASSWORD
            }
        }
    }
    
    buildTypes {
        release {
            signingConfig signingConfigs.release
            minifyEnabled true
            proguardFiles getDefaultProguardFile('proguard-android-optimize.txt'), 'proguard-rules.pro'
        }
    }
}
```

---

### Configurar Variáveis de Ambiente

**OPÇÃO A: Arquivo local (mais fácil)**

Crie `android/gradle.properties` (também no .gitignore):

```properties
QUIRON_RELEASE_STORE_FILE=keystores/quiron-release.jks
QUIRON_RELEASE_STORE_PASSWORD=SUA_SENHA_AQUI
QUIRON_RELEASE_KEY_ALIAS=quiron
QUIRON_RELEASE_KEY_PASSWORD=SUA_SENHA_AQUI
```

**OPÇÃO B: Variáveis de ambiente do sistema (mais seguro)**

Linux/Mac:
```bash
export QUIRON_RELEASE_STORE_FILE=keystores/quiron-release.jks
export QUIRON_RELEASE_STORE_PASSWORD="SUA_SENHA"
export QUIRON_RELEASE_KEY_ALIAS=quiron
export QUIRON_RELEASE_KEY_PASSWORD="SUA_SENHA"
```

Windows (PowerShell):
```powershell
$env:QUIRON_RELEASE_STORE_FILE="keystores/quiron-release.jks"
$env:QUIRON_RELEASE_STORE_PASSWORD="SUA_SENHA"
$env:QUIRON_RELEASE_KEY_ALIAS="quiron"
$env:QUIRON_RELEASE_KEY_PASSWORD="SUA_SENHA"
```

---

## 📦 PASSO 3: BUILD DO APP

### A. Preparar Código

```bash
# 1. Limpar builds anteriores
rm -rf android/app/build

# 2. Build do frontend React
npm run build

# 3. Sincronizar com Capacitor
npx cap sync android

# 4. (Opcional) Atualizar versão
# Edite android/app/build.gradle:
#   versionCode 2
#   versionName "1.0.1"
```

---

### B. Gerar AAB (Android App Bundle) - RECOMENDADO

**Play Store prefere AAB** (menor tamanho, otimizado)

```bash
cd android

# Build de release:
./gradlew bundleRelease

# AAB gerado em:
# android/app/build/outputs/bundle/release/app-release.aab
```

✅ **Arquivo final:** `app-release.aab` (~10-30 MB)

---

### C. Gerar APK (Alternative)

Se preferir APK (útil para testes):

```bash
cd android

# Build de release:
./gradlew assembleRelease

# APK gerado em:
# android/app/build/outputs/apk/release/app-release.apk
```

✅ **Arquivo final:** `app-release.apk` (~20-50 MB)

---

## ✅ PASSO 4: VERIFICAR ASSINATURA

Antes de enviar, confirme que o arquivo está assinado:

```bash
# Para AAB:
jarsigner -verify -verbose -certs android/app/build/outputs/bundle/release/app-release.aab

# Para APK:
jarsigner -verify -verbose -certs android/app/build/outputs/apk/release/app-release.apk
```

**Saída esperada:**
```
jar verified.
...
CN=Seu Nome, OU=Desenvolvimento, O=Quiron Concursos Ltda, L=São Paulo, ST=SP, C=BR
```

---

## 🚀 PASSO 5: UPLOAD NA PLAY STORE

### A. Criar App no Console

1. **Acesse:** https://play.google.com/console
2. **Criar app:**
   - Nome: Quiron Concursos
   - Idioma padrão: Português (Brasil)
   - App/Jogo: App
   - Gratuito/Pago: Gratuito (com compras no app)

---

### B. Preencher Informações Obrigatórias

**Antes de enviar AAB, complete:**

#### 1. Listagem da Loja
- [ ] Título, descrição, ícone, screenshots (ver `PLAY_STORE_TEXTOS.md`)
- [ ] Política de privacidade URL
- [ ] Categoria: Educação
- [ ] E-mail de contato

#### 2. Classificação de Conteúdo
- [ ] Preencher questionário
- [ ] Resultado esperado: PEGI 3 ou 7+ (educacional)

#### 3. Público-alvo
- [ ] Faixa etária: 13+
- [ ] Não direcionado a crianças

#### 4. Segurança de Dados
- [ ] Declarar coleta de dados (email, progresso, uso)
- [ ] Indicar criptografia
- [ ] Mencionar parceiros (AdMob, Firebase, Supabase)

---

### C. Fazer Upload do AAB

1. **Produção → Releases → Criar nova release**

2. **Upload do AAB:**
   - Arraste `app-release.aab`
   - Aguarde processamento (2-5 min)

3. **Nome da release:**
   ```
   Versão 1.0.0 - Lançamento Inicial
   ```

4. **Notas da versão** (ver `PLAY_STORE_TEXTOS.md`):
   ```
   🎉 LANÇAMENTO DO QUIRON CONCURSOS!
   
   ✨ Novidades:
   • 🎮 Game 3D épico
   • 🤖 Chat IA Prometheus
   • 📚 Banco de questões
   ...
   ```

5. **Revisar e iniciar implantação:**
   - Clique "Revisar release"
   - Clique "Iniciar implantação para produção"

---

### D. Aguardar Revisão do Google

**Tempo médio:** 3-7 dias

**Status possíveis:**
- ⏳ **Em análise** - Google revisando
- ✅ **Aprovado** - App publicado!
- ❌ **Rejeitado** - Veja motivo e corrija

---

## 🔄 ATUALIZAÇÕES FUTURAS

Para lançar versão 1.0.1, 1.1.0, etc:

```bash
# 1. Edite android/app/build.gradle:
versionCode 2          # Sempre incrementar (1, 2, 3...)
versionName "1.0.1"    # Versão legível

# 2. Build:
npm run build
npx cap sync android
cd android
./gradlew bundleRelease

# 3. Upload novo AAB no Play Console
```

---

## 🐛 TROUBLESHOOTING

### ❌ Erro: "Failed to read key from keystore"

**Solução:**
- Verifique senha em `keystore.properties`
- Tente regenerar keystore

---

### ❌ Erro: "AAPT: error: resource android:attr/lStar not found"

**Solução:**
```gradle
// Em android/app/build.gradle, atualize:
compileSdkVersion 34
targetSdkVersion 34
```

---

### ❌ Erro: "Duplicate class found"

**Solução:**
```bash
cd android
./gradlew clean
./gradlew bundleRelease
```

---

### ❌ Build muito lento (>10 min)

**Solução - Habilitar daemon Gradle:**
```bash
# Crie android/gradle.properties e adicione:
org.gradle.daemon=true
org.gradle.parallel=true
org.gradle.configureondemand=true
```

---

### ❌ APK/AAB muito grande (>100MB)

**Soluções:**
1. **Remover assets não usados**
2. **Habilitar ProGuard** (já configurado)
3. **Usar AAB ao invés de APK** (Google otimiza automaticamente)
4. **Comprimir imagens:**
   ```bash
   npm install -g imagemin-cli
   imagemin assets/*.png --out-dir=assets-optimized/
   ```

---

## 📊 TAMANHOS ESPERADOS

| Tipo | Tamanho | Observação |
|------|---------|------------|
| **AAB** | 10-30 MB | Recomendado pela Google |
| **APK** | 20-50 MB | Maior que AAB |
| **Download Play Store** | 15-40 MB | Google otimiza por device |

---

## ✅ CHECKLIST PRÉ-PUBLICAÇÃO

### Código
- [ ] Versão atualizada em `build.gradle`
- [ ] Testado em dispositivo real
- [ ] AdMob configurado
- [ ] Backend funcionando
- [ ] Sem erros no logcat

### Assinatura
- [ ] Keystore gerado
- [ ] Senhas salvas em local seguro
- [ ] Backup do keystore feito (3 locais)
- [ ] AAB/APK assinado corretamente

### Play Store
- [ ] Textos preenchidos
- [ ] Imagens enviadas (ícone, banner, screenshots)
- [ ] Política de privacidade hospedada
- [ ] Classificação de conteúdo preenchida
- [ ] Segurança de dados declarada

### Monetização
- [ ] AdMob IDs corretos
- [ ] Produtos IAP configurados (Premium)
- [ ] Preços definidos

---

## 🎯 COMANDOS RÁPIDOS

### Build completo (limpo):
```bash
npm run build && \
npx cap sync android && \
cd android && \
./gradlew clean && \
./gradlew bundleRelease
```

### Verificar assinatura:
```bash
jarsigner -verify -verbose android/app/build/outputs/bundle/release/app-release.aab
```

### Ver logs durante build:
```bash
cd android
./gradlew bundleRelease --info
```

---

## 📞 SUPORTE

**Problemas com build?**
- Veja logs em: `android/app/build/outputs/logs/`
- Stack Overflow: pesquise erro específico
- GitHub Issues do Capacitor: https://github.com/ionic-team/capacitor/issues

**Problemas com Play Store?**
- Centro de Ajuda: https://support.google.com/googleplay/android-developer
- Política de Programa: https://play.google.com/about/developer-content-policy/

---

**BOA SORTE NA PUBLICAÇÃO! 🚀**
