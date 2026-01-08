# 📄 POLÍTICAS DE PRIVACIDADE E TERMOS - INSTRUÇÕES

## ✅ O QUE FOI CRIADO

### 1️⃣ Componentes React (Dentro do App)
Localizados em `/components/`:
- ✅ `PrivacyPolicy.tsx` - Política de Privacidade completa
- ✅ `TermsOfUse.tsx` - Termos de Uso completos
- ✅ `AdPartners.tsx` - Lista de parceiros de anúncios

**Rotas internas do app:**
- `/privacy-policy`
- `/terms-of-use`
- `/ad-partners`

### 2️⃣ Páginas HTML Standalone (Para Website)
Localizados em `/public/`:
- ✅ `privacy-policy.html`
- ✅ `terms-of-use.html`
- ✅ `ad-partners.html`

---

## 🌐 COMO HOSPEDAR EM www.quironconcursos.com.br

### OPÇÃO A: Hospedagem Simples (Recomendado)

1. **Copie os 3 arquivos HTML** de `/public/` para a raiz do seu site:
   ```
   www.quironconcursos.com.br/privacy-policy.html
   www.quironconcursos.com.br/terms-of-use.html
   www.quironconcursos.com.br/ad-partners.html
   ```

2. **Configure URLs amigáveis** (opcional via `.htaccess` ou servidor):
   ```apache
   # .htaccess (Apache)
   RewriteEngine On
   RewriteRule ^privacy-policy$ privacy-policy.html [L]
   RewriteRule ^terms-of-use$ terms-of-use.html [L]
   RewriteRule ^ad-partners$ ad-partners.html [L]
   ```

3. **Teste os links:**
   - https://www.quironconcursos.com.br/privacy-policy
   - https://www.quironconcursos.com.br/terms-of-use
   - https://www.quironconcursos.com.br/ad-partners

---

### OPÇÃO B: Integração no WordPress

Se seu site usa WordPress:

1. **Criar páginas no WP Admin:**
   - Páginas → Adicionar Nova
   - Cole o conteúdo dos arquivos HTML
   - Configure slug: `privacy-policy`, `terms-of-use`, `ad-partners`

2. **Ou use plugin HTML direto:**
   - Install "Insert HTML Snippet"
   - Cole o código HTML completo

---

## 📱 LINKS PARA GOOGLE PLAY STORE

### Ao publicar o app, você precisa fornecer:

**Campo obrigatório: Privacy Policy URL**
```
https://www.quironconcursos.com.br/privacy-policy
```

**Descrição do App (incluir):**
```
Ao usar o Quiron Concursos, você concorda com nossos Termos de Uso e Política de Privacidade, disponíveis em www.quironconcursos.com.br
```

---

## 🔧 PERSONALIZAÇÃO NECESSÁRIA

### ⚠️ DADOS FICTÍCIOS - SUBSTITUIR:

Nos 3 documentos, substitua:

1. **CNPJ:**
   ```
   CNPJ: 00.000.000/0001-00
   → CNPJ: XX.XXX.XXX/XXXX-XX (seu CNPJ real)
   ```

2. **Endereço:**
   ```
   Rua Exemplo, 123 - Sala 456
   São Paulo, SP - CEP 01234-567
   → Endereço real da empresa
   ```

3. **Telefone:**
   ```
   +55 (11) 99999-9999
   → Telefone real de suporte
   ```

4. **E-mails (criar caixas reais):**
   ```
   - privacidade@quironconcursos.com.br
   - dpo@quironconcursos.com.br
   - contato@quironconcursos.com.br
   - juridico@quironconcursos.com.br
   - reembolso@quironconcursos.com.br
   ```

5. **Nome do Encarregado de Dados (DPO):**
   ```
   Encarregado de Dados (DPO): João Silva
   → Nome real do responsável
   ```

---

## ✅ CONFORMIDADE LEGAL

### Os documentos incluem:

✅ **LGPD (Brasil)** - Lei 13.709/2018
- Direitos do titular (acesso, retificação, exclusão)
- Base legal para processamento
- Encarregado de Dados (DPO)
- Prazo de resposta: 15 dias úteis

✅ **GDPR (Europa)** - Regulation EU 2016/679
- Consentimento explícito
- Portabilidade de dados
- Direito ao esquecimento
- Transferência internacional

✅ **Google Play Policies**
- Divulgação de coleta de dados
- Parceiros de anúncios listados
- Opt-out de personalização

✅ **CDC (Código de Defesa do Consumidor)**
- Direito de arrependimento (7 dias)
- Política de reembolso clara
- Transparência em pagamentos

---

## 📋 CHECKLIST FINAL

Antes de publicar na Play Store:

- [ ] Hospedei os 3 arquivos HTML em www.quironconcursos.com.br
- [ ] Testei todos os links e estão funcionando
- [ ] Substituí CNPJ fictício pelo real
- [ ] Atualizei endereço e telefone reais
- [ ] Criei e-mails de contato (privacidade@, dpo@, contato@)
- [ ] Nomeei o Encarregado de Dados (DPO)
- [ ] Adicionei URL da Política de Privacidade no Google Play Console
- [ ] Revisei documentos com advogado (RECOMENDADO!)

---

## ⚖️ RECOMENDAÇÃO LEGAL

**⚠️ IMPORTANTE:** Estes documentos são templates completos e profissionais, mas:

1. **Consulte um advogado** especializado em Direito Digital/LGPD
2. **Revise cláusulas** específicas do seu negócio
3. **Registre no INPI** a marca "Quiron Concursos" se ainda não fez
4. **Mantenha atualizado** conforme mudanças no app

---

## 🆘 SUPORTE

Se precisar de ajustes nos documentos:
- Posso personalizar qualquer seção
- Adicionar/remover parceiros
- Ajustar prazos ou políticas específicas

**Agora você pode publicar no Google Play Store com segurança legal! 🚀**
