# Publicação definitiva no Cloudflare Pages

Este projeto gera arquivos estáticos com TanStack Start. Não usar o preset Workers, o deploy Nitro nem publicar o diretório src.

## Configuração inicial

- Criar um novo projeto **Pages conectado ao GitHub**, separado do Worker temporário jjcafe-previa.
- Repositório: messiasprof1/site_jjcafe_2026.
- Nome sugerido: jjcafe-site.
- Branch de produção: main.
- Framework preset: None.
- Diretório raiz: raiz do repositório, sem subpasta.
- Comando de build: `npm ci --ignore-scripts && npm run build:pages`.
- Diretório de saída: `dist-pages`.
- Variável de ambiente para produção e previews: `SKIP_DEPENDENCY_INSTALL=true`.
- A versão Node é declarada em .node-version e corresponde à usada na validação local.

O instalador automático fica desabilitado para não escolher o bun.lock legado. O comando usa package-lock.json e npm ci, sem executar scripts de instalação de pacotes. O build e o teste de CSP são executados explicitamente. Não adicionar credenciais: o site atual não precisa de banco, token Cloudflare ou senha Zoho no build.

## Primeira implantação

Manter `JJCAFE_ALLOW_INDEXING` ausente ou com valor false. O build incluirá noindex global. Após a publicação, conferir a URL pages.dev, as seis páginas, fontes, links, carregamento direto, navegação e resposta 404. O build deve falhar se faltarem páginas ou se os hashes de scripts forem incompatíveis com o parser HTML.

## Domínio e lançamento

Antes de alterar a zona, exportar o DNS no painel e guardar os apontamentos web atuais. As consultas públicas anteriores são referência parcial, não substituem a exportação da zona. Preservar MX Zoho, SPF, DKIM, DMARC e verificações.

Cadastrar www.jjcafe.com.br e jjcafe.com.br em Custom domains do Pages e seguir os apontamentos indicados, verificando conflitos apenas nos registros web desses nomes. Confirmar certificados e definir www como host preferencial, redirecionando o domínio sem www com preservação de caminho e query. Não alterar nameservers no Registro.br, não habilitar Email Routing e não substituir registros de e-mail.

Somente após validação do domínio e dos redirecionamentos: definir `JJCAFE_ALLOW_INDEXING=true` em produção e reconstruir. Manter previews com false. O endereço pages.dev também deve redirecionar para o domínio preferencial ou manter noindex por configuração específica antes de liberar indexação global. Não aplicar HSTS com includeSubDomains/preload sem conferir todos os subdomínios.

## Validação posterior

Conferir HTTPS, CSP, canonical, sitemap, robots, 404 e os seis caminhos. Comparar MX/TXT com a zona anterior. Repetir testes de envio e recebimento nos endereços messias@, contato@ e sac@, verificando SPF/DKIM/DMARC nas mensagens.

## Reversão

Se a publicação apresentar falhas, restaurar a implantação anterior ou apenas os apontamentos web guardados. Não reimportar a zona inteira nem modificar os registros Zoho para reverter o site.

Referências: https://developers.cloudflare.com/pages/get-started/git-integration/ e https://developers.cloudflare.com/pages/configuration/build-image/.
