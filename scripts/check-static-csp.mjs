import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import assert from 'node:assert/strict';
import { JSDOM, VirtualConsole } from 'jsdom';

const root='dist-pages';
const headers=fs.readFileSync(path.join(root,'_headers'),'utf8');
for(const route of ['','sobre','cursos','cafe','contato','privacidade']) {
  const html=fs.readFileSync(path.join(root,route,'index.html'),'utf8');
  const parsed=new JSDOM(html);
  for(const script of parsed.window.document.querySelectorAll('script:not([src])')) {
    if(!script.textContent.trim())continue;
    const hash=crypto.createHash('sha256').update(script.textContent,'utf8').digest('base64');
    assert.ok(headers.includes(`'sha256-${hash}'`),`CSP incompatível com o texto interpretado pelo HTML: /${route}`);
  }
  parsed.window.close();
  // Execute only the packaged inline scripts. jsdom does not load module assets
  // here and does not enforce CSP: the parser-derived hashes were checked above.
  const errors=[];
  const virtualConsole=new VirtualConsole();
  virtualConsole.on('jsdomError',error=>errors.push(error.message));
  const executed=new JSDOM(html,{runScripts:'dangerously',url:`https://www.jjcafe.com.br/${route}`,virtualConsole,beforeParse(window){window.scrollTo=()=>{};}});
  assert.deepEqual(errors,[],`Erro de inicialização: /${route}`);
  assert.ok(executed.window.$_TSR?.router,`Estado de inicialização ausente: /${route}`);
  assert.equal(executed.window.$_TSR.router.matches[0].i,'__root__\u0000',`Identificador de rota alterado pelo parser: /${route}`);
  executed.window.close();
}
console.log('Seis páginas: hashes conferidos após o parser HTML e inicialização inline preservada.');
