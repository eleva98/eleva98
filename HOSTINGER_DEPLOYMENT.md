# Guia de Implantação na Hostinger - Solução para Erro "Esta Página Não Existe"

## Resumo das Alterações

Este projeto foi configurado para funcionar como uma Single Page Application (SPA) em hospedagem na Hostinger. A solução implementada resolve o erro "Esta página não existe" que aparecia ao recarregar páginas diretas como `/sobre`, `/servicos` ou `/contato`.

## O que foi implementado

### 1. **Arquivo .htaccess** (Principal)
- **Localização:** `public/.htaccess`
- **Função:** Redireciona todas as requisições de rotas não encontradas para `index.html`
- **Como funciona:** O servidor Apache (usado pela Hostinger) verifica se o arquivo/pasta existe:
  - Se existir, serve normalmente
  - Se não existir (como `/sobre`), redireciona para `index.html`
  - O React Router no arquivo `src/App.tsx` então detecta a URL e carrega a página correta

```apache
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^ index.html [QSA,L]
```

### 2. **Script JavaScript em index.html** (Fallback)
- **Localização:** `index.html` (linhas 240-272)
- **Função:** Detecta e redireciona erros 404 automaticamente
- **Benefício:** Funciona mesmo se o .htaccess não estiver configurado corretamente

### 3. **Arquivo _redirects** (Netlify/Vercel)
- **Localização:** `public/_redirects`
- **Função:** Configuração para plataformas alternativas (Netlify/Vercel)
- **Não é necessário para Hostinger**, mas mantém compatibilidade

### 4. **Arquivo vercel.json** (Vercel)
- **Localização:** `vercel.json`
- **Função:** Configuração para Vercel
- **Não é necessário para Hostinger**, mas mantém compatibilidade

## Instruções de Implantação na Hostinger

### Passo 1: Preparar os arquivos
1. Execute `npm run build` no seu computador
2. A pasta `dist/` será criada com todos os arquivos prontos para implantação

### Passo 2: Fazer upload na Hostinger
1. Acesse o cPanel da sua Hostinger
2. Abra o **File Manager** (Gerenciador de Arquivos)
3. Navegue até a pasta `public_html` (ou a pasta raiz do seu domínio)
4. Faça upload de **todos os arquivos** da pasta `dist/` incluindo:
   - `index.html`
   - `.htaccess` (arquivo oculto - pode ser necessário habilitar a visualização de arquivos ocultos)
   - Pasta `assets/` completa
   - Todos os arquivos de imagem

### Passo 3: Verificar se o .htaccess foi enviado
1. No File Manager do cPanel, habilite "Show Hidden Files" (Mostrar Arquivos Ocultos)
2. Confirme que o arquivo `.htaccess` está presente na pasta `public_html`
3. Se não estiver, faça upload manualmente

### Passo 4: Testar
1. Acesse seu site normalmente: `https://seuedominio.com`
2. Clique em um link de navegação (como "Sobre" ou "Contato")
3. **Recarregue a página** (F5 ou Ctrl+R)
4. A página deve carregar normalmente **sem erro 404**

## Solução de Problemas

### Problema: Ainda aparece "Esta página não existe"

**Solução 1: Verificar .htaccess**
- Confirme que o arquivo `.htaccess` está em `public_html`
- Se não estiver, crie manualmente no cPanel:
  1. Abra Text Editor no cPanel
  2. Cole o conteúdo abaixo
  3. Salve como `.htaccess` em `public_html`

**Solução 2: Limpar cache**
- Limpe o cache do navegador (Ctrl+Shift+Del)
- Aguarde alguns minutos para propagação de DNS

**Solução 3: Contatar suporte Hostinger**
- Verifique se `mod_rewrite` está habilitado no servidor Apache
- Solicite ao suporte para verificar a configuração

### Problema: Estilos CSS desapareceram
- Isso indica erro no caminho dos arquivos
- Verifique se a pasta `assets/` foi enviada corretamente
- Confirme que não há pastas extras (como `dist/`) no upload

### Problema: Imagens não carregam
- As imagens devem estar em `public_html/`
- Verificar se os caminhos em `index.html` estão corretos
- Usar caminhos relativos quando possível

## Atualizar o Site

Para atualizar o site no futuro:

1. Faça suas alterações no código local
2. Execute `npm run build`
3. Faça upload dos arquivos novamente:
   - Via cPanel File Manager (mais lento)
   - Via FTP (mais rápido - configure credenciais no cPanel)
   - Via Git (se suportado pela Hostinger)

## Mantendo o Design e SEO

Todas as alterações foram implementadas **sem modificar**:
- Design e layout visual
- Textos e conteúdo
- Tags de SEO e meta tags
- Estrutura de dados Schema.org
- Funcionalidades originais

A solução é **transparente** para o usuário final e apenas resolve o problema técnico de roteamento.

## Detalhes Técnicos

### Como o React Router funciona agora

1. Usuário acessa `/sobre`
2. Servidor (Apache com .htaccess) verifica se `/sobre` existe
3. Como não existe, redireciona para `index.html`
4. `index.html` carrega o React
5. React Router (em `src/App.tsx`) lê a URL atual (`/sobre`)
6. Renderiza a página correta baseado na URL

### O script JavaScript

O script em `index.html` detecta erros 404 e:
- Armazena a URL solicitada
- Redireciona para `index.html`
- O React Router então carrega a página correta
- Restaura a URL original na barra de endereços

## Suporte

Para dúvidas ou problemas:
1. Consulte a documentação do React Router
2. Entre em contato com o suporte da Hostinger
3. Verifique os logs de erro no cPanel

---
**Última atualização:** Novembro 2024
**Status:** Pronto para produção
