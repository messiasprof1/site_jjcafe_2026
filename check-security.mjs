import assert from 'node:assert/strict';
import { withSecurityHeaders } from '../src/lib/security-headers.ts';
for (const status of [200, 404, 500, 302]) {
  const response = new Response('conteúdo', { status, headers: { 'X-Original': 'preservado', ...(status === 302 ? { Location: '/contato' } : {}) } });
  const secured = withSecurityHeaders(response);
  assert.equal(secured.status, status);
  assert.equal(secured.headers.get('X-Original'), 'preservado');
  assert.equal(secured.headers.get('X-Frame-Options'), 'DENY');
  assert.ok(secured.headers.get('Content-Security-Policy').includes("frame-ancestors 'none'"));
  assert.ok(secured.headers.has('Content-Security-Policy-Report-Only'));
  assert.equal(await secured.text(), 'conteúdo');
  if (status === 302) assert.equal(secured.headers.get('Location'), '/contato');
}
console.log('Cabeçalhos: corpo, status e redirecionamento preservados em 4 cenários.');
