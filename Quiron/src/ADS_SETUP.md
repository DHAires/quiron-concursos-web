# 🎯 Configuração de Anúncios - Quiron Concursos

## 📋 **ÍNDICE**
1. [Google AdSense](#google-adsense)
2. [Banners de Promoção de App](#banners-de-promoção-de-app)
3. [Localizações dos Anúncios](#localizações-dos-anúncios)
4. [Personalização](#personalização)

---

## 💰 **GOOGLE ADSENSE**

### **1. Criar Conta no Google AdSense**

1. Acesse: https://www.google.com/adsense
2. Faça login com sua conta Google
3. Complete o cadastro e aguarde aprovação
4. Após aprovação, você receberá seu **Publisher ID** (formato: `ca-pub-XXXXXXXXXXXXXXXX`)

### **2. Configurar seu Publisher ID**

Edite os seguintes arquivos e substitua o ID:

#### **📄 /index.html** (linha 99)
```html
<!-- ANTES -->
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-0000000000000000"

<!-- DEPOIS -->
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-SEU_ID_AQUI"
```

#### **📄 /components/GoogleAdSense.tsx** (linha 20)
```tsx
// ANTES
data-ad-client="ca-pub-0000000000000000"

// DEPOIS
data-ad-client="ca-pub-SEU_ID_AQUI"
```

### **3. Criar Unidades de Anúncio**

No painel do AdSense, crie **5 unidades de anúncio** diferentes:

| Tipo | Formato | Onde Usar | Slot ID |
|------|---------|-----------|---------|
| **Banner Horizontal** | 728x90 ou responsivo | Topo/rodapé | `AdBannerHorizontal` |
| **Banner Vertical** | 300x600 ou responsivo | Sidebar | `AdBannerVertical` |
| **Banner Responsivo** | Auto | Conteúdo principal | `AdBannerResponsive` |
| **Banner Quadrado** | 300x250 | Feed/artigos | `AdBannerSquare` |
| **Banner In-Feed** | Fluid | Entre posts | `AdBannerInFeed` |

### **4. Substituir Slot IDs**

Em `/components/GoogleAdSense.tsx`, substitua os slots:

```tsx
// BANNER HORIZONTAL (linha 30)
adSlot="1234567890" // ← SUBSTITUIR pelo Slot ID real

// BANNER VERTICAL (linha 38)
adSlot="0987654321" // ← SUBSTITUIR pelo Slot ID real

// BANNER RESPONSIVO (linha 46)
adSlot="1357924680" // ← SUBSTITUIR pelo Slot ID real

// BANNER QUADRADO (linha 54)
adSlot="2468013579" // ← SUBSTITUIR pelo Slot ID real

// BANNER IN-FEED (linha 62)
adSlot="9876543210" // ← SUBSTITUIR pelo Slot ID real
```

---

## 📱 **BANNERS DE PROMOÇÃO DE APP**

### **Configurar Links das Lojas**

Edite `/components/AppPromoBanner.tsx`:

```tsx
// GOOGLE PLAY STORE (linha 86)
<a
  href="#" // ← SUBSTITUIR pela URL do Google Play
  target="_blank"
  rel="noopener noreferrer"
>

// APPLE APP STORE (linha 99)
<a
  href="#" // ← SUBSTITUIR pela URL da App Store
  target="_blank"
  rel="noopener noreferrer"
>
```

**Exemplo de URLs:**
```
Google Play:
https://play.google.com/store/apps/details?id=com.quironconcursos.app

Apple Store:
https://apps.apple.com/br/app/quiron-concursos/id123456789
```

---

## 📍 **LOCALIZAÇÕES DOS ANÚNCIOS**

### **Dashboard Principal** (`/App.tsx`)

```
┌─────────────────────────────────┐
│  Prometheus IA Banner           │
├─────────────────────────────────┤
│  Analytics                      │
├─────────────────────────────────┤
│  🎯 AdSense Banner 1            │ ← Topo
├─────────────────────────────────┤
│  Áreas Temáticas                │
├─────────────────────────────────┤
│  📱 App Promo Banner            │ ← Promoção App
├─────────────────────────────────┤
│  🎯 AdSense Banner 2            │ ← Meio
├─────────────────────────────────┤
│  Premium Banner                 │
└─────────────────────────────────┘
```

### **Mobile** (Flutuante)

```
┌─────────────────────────────────┐
│                                 │
│  Conteúdo normal...             │
│                                 │
│                                 │
└─────────────────────────────────┘
        ┌───────────────┐
        │ 📱 App Banner │  ← Flutuante inferior
        └───────────────┘
```

---

## 🎨 **PERSONALIZAÇÃO**

### **Remover Anúncios de uma Página**

Para remover ads de páginas específicas, comente as linhas em `/App.tsx`:

```tsx
{/* Remover este bloco para desativar ads */}
{/* <div className="mb-8">
  <AdBannerResponsive className="min-h-[100px]" />
</div> */}
```

### **Adicionar Ads em Outras Páginas**

Importe e use em qualquer componente:

```tsx
import { AdBannerResponsive } from './GoogleAdSense';

// No componente
<div className="my-8">
  <AdBannerResponsive />
</div>
```

### **Desativar Banner de App Mobile**

Em `/App.tsx`, comente a linha:

```tsx
{/* <MobileAppBanner /> */}
```

### **Alterar Frequência de Ads**

Edite o espaçamento em `/App.tsx`:

```tsx
// Mais frequente (a cada 4 componentes)
<Analytics />
<AdBannerResponsive />  ← Ad 1
<ThematicAreas />
<AdBannerResponsive />  ← Ad 2
<Questions />
<AdBannerResponsive />  ← Ad 3

// Menos frequente (a cada 8 componentes)
<Analytics />
<ThematicAreas />
<Questions />
<Forum />
<AdBannerResponsive />  ← Ad único
```

---

## ⚡ **OTIMIZAÇÕES**

### **1. Lazy Loading dos Ads**

Os ads já estão configurados para carregar de forma assíncrona.

### **2. Performance**

- Os scripts do AdSense usam `async` para não bloquear o carregamento
- CSP (Content Security Policy) já configurado no `index.html`
- Preconnect ao Google Ads para melhor performance

### **3. Responsividade**

Todos os ads são **totalmente responsivos** e se adaptam automaticamente:
- Desktop: banners maiores
- Tablet: banners médios
- Mobile: banners compactos

---

## 📊 **MONITORAMENTO**

### **Verificar se os Ads Estão Funcionando**

1. **Console do Navegador:**
   - Abra DevTools (F12)
   - Procure por erros relacionados a `adsbygoogle`
   - Deve aparecer: `adsbygoogle.push() called`

2. **Inspeção Visual:**
   - Áreas com `min-h-[100px]` devem conter anúncios
   - Anúncios podem aparecer como vazios até aprovação do AdSense

3. **Google AdSense Dashboard:**
   - Acesse https://www.google.com/adsense
   - Veja relatórios de impressões e cliques
   - Monitore receita em tempo real

---

## 🚨 **PROBLEMAS COMUNS**

### **Anúncios não aparecem**

✅ **Soluções:**
1. Verifique se o Publisher ID está correto
2. Aguarde 24-48h após criar conta (AdSense precisa aprovar)
3. Certifique-se que o site está publicado (não funciona em localhost)
4. Verifique se não há AdBlocker ativo
5. Veja o console por erros de CSP

### **Anúncios aparecem em branco**

Isso é normal durante o processo de aprovação. O Google AdSense precisa:
- Revisar seu site
- Verificar conteúdo
- Aprovar políticas

Isso pode levar até **2 semanas**.

### **Error: adsbygoogle.push() error**

Verifique se:
1. O script do AdSense está no `<head>` do HTML
2. O Publisher ID é válido
3. O site está em HTTPS (obrigatório para AdSense)

---

## 💡 **DICAS DE MONETIZAÇÃO**

### **Melhores Posições para Ads**

1. **🥇 Topo da Página** - 70% dos cliques
2. **🥈 Dentro do Conteúdo** - 20% dos cliques  
3. **🥉 Sidebar** - 10% dos cliques

### **Frequência Ideal**

- ✅ **1 ad a cada 500-800 palavras** de conteúdo
- ✅ **Máximo 3 ads por página** para melhor UX
- ❌ **Evite mais de 5 ads** - prejudica experiência

### **Formatos que Convertem Mais**

1. **Responsivo Auto** - Melhor performance
2. **In-Feed** - Alta taxa de clique
3. **Rectangle (300x250)** - Clássico eficiente

---

## 📞 **SUPORTE**

**Google AdSense Help:**
- https://support.google.com/adsense

**Documentação Oficial:**
- https://developers.google.com/adsense

**Políticas do AdSense:**
- https://support.google.com/adsense/answer/48182

---

## ✅ **CHECKLIST FINAL**

- [ ] Conta Google AdSense criada e aprovada
- [ ] Publisher ID configurado em `/index.html`
- [ ] Publisher ID configurado em `/components/GoogleAdSense.tsx`
- [ ] 5 unidades de anúncio criadas no painel
- [ ] Slot IDs substituídos no código
- [ ] Links das lojas (Google Play/App Store) configurados
- [ ] Site publicado em HTTPS
- [ ] Ads testados no navegador
- [ ] Dashboard AdSense monitorado

---

## 🎉 **PRONTO!**

Seus anúncios estão configurados! Agora é só:

1. Publicar o site
2. Aguardar aprovação do AdSense (24-48h)
3. Começar a monetizar! 💰

**Boa sorte com sua monetização!** 🚀
