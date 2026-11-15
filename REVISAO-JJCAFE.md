# Revisão do código — 14/11/2026

Esta é uma versão de trabalho, sem publicação. Nenhum DNS, MX, alias ou configuração Zoho foi alterado.

## Alterações

- Inicial com proposta mais concreta, caminhos comerciais e cartões com links.
- Menor altura inicial no celular, foco visível, atalho ao conteúdo, menu identificado e hierarquia de títulos dos cartões corrigida.
- Telefone e e-mails acionáveis, SAC no rodapé e contato; botão do curso informa que abre uma conversa.
- Canonical e og:url nas cinco páginas; sitemap e robots com domínio preferencial provisório www.jjcafe.com.br.
- Erros de interface em português; removida a chamada automática de telemetria da barreira de erro React. O módulo legado permanece sem importação pela aplicação; o build/plugin e a hospedagem ainda precisam de inspeção para outras injeções.
- Cabeçalhos aplicados às respostas SSR e de erro, com CSP parcial obrigatória (objetos, base e enquadramento) e CSP ampla em Report-Only. A segunda não bloqueia scripts e não envia relatórios a um servidor. Não considerar proteção XSS completa.
- Cabeçalhos estáticos para Pages, exclusão de .env e preparação de prerender com falha em caso de erro.

## Revisão de segurança e dependências

O código entregue não contém implementação de login, banco ou envio de formulário. O middleware CSRF existente foi preservado. Não foram encontradas credenciais óbvias nas buscas direcionadas feitas no src; não houve revisão de histórico Git, pois o ZIP não o inclui, nem verificação de segredos do painel. O componente genérico chart usa dangerouslySetInnerHTML para estilos; não é usado nas páginas atuais. Se futuramente receber configuração externa, validar nomes, IDs e cores antes de interpolá-los.

O package.json inclui muitas bibliotecas de interface não usadas pelas páginas institucionais e um wrapper Lovable/Nitro beta. Não foram removidas em massa para evitar quebrar os componentes fornecidos. bun.lock original foi preservado e nenhuma versão foi atualizada sem teste. A instalação offline falhou por falta de cache; Bun não está instalado. Assim, auditoria de avisos/CVEs, instalação reproduzível, TypeScript completo, Vitest, build e revisão visual da versão alterada permanecem pendentes. Não há declaração de dependências livres de vulnerabilidades.

Executar em ambiente com Bun confiável: `bun install --frozen-lockfile`, `bun audit`, `bunx tsc --noEmit`, `bun run test` e `bun run build`. Revisar avisos de acordo com versão/exposição; atualizar e testar o lockfile, sem atualização automática indiscriminada. No Node com suporte a TypeScript nativo, `node scripts/check-security.mjs` verifica preservação de respostas ao aplicar cabeçalhos.

## Publicação em Cloudflare Pages

O projeto original é TanStack Start com SSR; não publicar src nem pressupor que dist seja estático. Foi habilitado prerender. Após build bem-sucedido, executar `node scripts/prepare-pages.mjs`. O script aceita somente uma saída com HTML para todas as cinco rotas e canonical; recusa Worker e gera dist-pages com 404 real. Se o wrapper não produzir exportação compatível, a preparação falha: adaptar o preset/plugin com base na versão instalada, não publicar uma saída incompleta. Referência: https://tanstack.com/start/latest/docs/framework/react/guide/static-prerendering.

Em Pages, usar comando de build `bun run build && node scripts/prepare-pages.mjs` e pasta `dist-pages`, somente após validar isso em homologação. Não foram gerados nem testados artefatos de build aqui. Conferir cabeçalhos, hidratação, navegação direta, erro 404, fontes e console. A CSP de observação do servidor não acompanha a exportação estática: para Pages estático, migrar a política ampla para public/_headers em Report-Only durante homologação e ajustar hashes/origens antes de impor. O arquivo atual impõe somente a política parcial compatível.

Confirmar www como host principal antes de indexar. Cadastrar os dois hosts em Custom domains e configurar redirecionamento do secundário preservando caminho/query. Homologação deve estar protegida ou com X-Robots-Tag noindex; não reutilizar indiscriminadamente o robots permissivo de produção em previews.

Exportar zona atual e alterar somente apontamentos web. Preservar integralmente MX, SPF único, DKIM, DMARC e verificações Zoho; não ativar Email Routing. Testar envio/recebimento pelos três endereços depois. HSTS do domínio próprio depende da verificação prévia do HTTPS e subdomínios.

## Pendências de conteúdo e privacidade antes de publicar

Confirmar identidade jurídica/CNPJ, área atendida, horários, locação/comodato, disponibilidade do curso e números/vínculos profissionais. Não foram inventadas condições comerciais.

Ainda falta aprovar e publicar aviso de privacidade com controlador, dados/finalidades/bases legais, retenção, fornecedores e canal de direitos. Mapear coleta real no build final (incluindo Google Fonts, Cloudflare, WhatsApp, Zoho e eventual instrumentação Lovable). Não foi adicionada política genérica com promessas de retenção ou consentimento não confirmadas. Marketing precisa de escolha própria quando depender de consentimento. Não considerar o site liberado para lançamento até resolver essa pendência e validar o build.
