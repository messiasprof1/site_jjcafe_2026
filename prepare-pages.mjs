import fs from 'node:fs';
import path from 'node:path';

// Run after the framework build. Refuse to publish incomplete HTML or a Worker.
const routes = ['', 'sobre', 'cursos', 'cafe', 'contato'];
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
console.log('Saída estática preparada em dist-pages. Ainda requer teste no navegador e homologação.');
