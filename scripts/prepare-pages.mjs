import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

// Run after the framework build. Refuse to publish incomplete HTML or a Worker.
const routes = ['', 'sobre', 'cursos', 'cafe', 'contato', 'privacidade'];
const candidates = ['.output/public', 'dist/client'];
const source = candidates.find(dir => routes.every(route => fs.existsSync(path.join(dir, route, 'index.html'))));
if (!source) throw new Error('Exportação estática incompleta. Verifique o prerender; nenhum pacote Pages foi preparado.');
if (fs.existsSync('dist-pages')) throw new Error('dist-pages já existe. Arquive a saída anterior antes de repetir.');
for (const route of routes) {
  const html = fs.readFileSync(path.join(source, route, 'index.html'), 'utf8');
  if (!html.includes('<h1') || !html.includes('rel="canonical"')) throw new Error(`HTML incompleto em /${route}`);
}
if (fs.existsSync(path.join(source, '_worker.js'))) throw new Error('Saída contém Worker; revisar configuração antes de usar Pages estático.');
fs.cpSync(source, 'dist-pages', { recursive: true });
for (const name of ['_headers', 'robots.txt', 'sitemap.xml']) fs.copyFileSync(path.join('public', name), path.join('dist-pages', name));
fs.writeFileSync('dist-pages/404.html', '<!doctype html><html lang="pt-BR"><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="robots" content="noindex"><title>Página não encontrada | JJ Café</title><main><h1>Página não encontrada</h1><p>Confira o endereço ou <a href="/">volte ao início</a>.</p></main></html>');
// Hash only the inline scripts actually emitted by the build. Regenerate on every build.
const hashes = new Set();
for (const route of routes) {
  const htmlPath = path.join('dist-pages', route, 'index.html');
  // HTML parsing replaces literal NULs with U+FFFD before CSP checks. Escape the
  // serialized route IDs as JavaScript unicode escapes to preserve their value.
  // Also match the HTML parser's newline normalization before hashing scripts.
  const html = fs.readFileSync(htmlPath, 'utf8').replace(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi,
    (_, attrs, code) => `<script${attrs}>${code.replace(/\u0000/g, '\\u0000').replace(/\r\n?/g, '\n')}</script>`);
  fs.writeFileSync(htmlPath, html);
  for (const match of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)) {
    if (/\bsrc\s*=/.test(match[1]) || !match[2].trim()) continue;
    hashes.add(`'sha256-${crypto.createHash('sha256').update(match[2], 'utf8').digest('base64')}'`);
  }
}
const csp = ["default-src 'self'", `script-src 'self' ${[...hashes].join(' ')}`, "style-src 'self' https://fonts.googleapis.com", "font-src 'self' https://fonts.gstatic.com", "img-src 'self' data:", "connect-src 'self'", "object-src 'none'", "base-uri 'self'", "frame-ancestors 'none'", "form-action 'none'", 'upgrade-insecure-requests'].join('; ');
if (Buffer.byteLength(csp, 'utf8') > 1900) throw new Error('CSP excedeu o limite previsto. Revisar política antes de publicar.');
const headers = fs.readFileSync('dist-pages/_headers', 'utf8').replace(/^\s+Content-Security-Policy:.*$/m, `  Content-Security-Policy: ${csp}`);
fs.writeFileSync('dist-pages/_headers', headers);
// Keep new projects and review builds out of search results until the domain
// and redirects are validated. Enable indexing explicitly for the launch build.
if (process.env.JJCAFE_ALLOW_INDEXING !== 'true') {
  fs.appendFileSync('dist-pages/_headers', '  X-Robots-Tag: noindex, nofollow\n');
}
console.log('Saída estática preparada em dist-pages. Ainda requer teste no navegador e homologação.');
