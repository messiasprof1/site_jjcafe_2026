const reportOnlyPolicy = [
  "default-src 'self'", "base-uri 'self'", "object-src 'none'",
  "frame-ancestors 'none'", "form-action 'self'", "script-src 'self'",
  "style-src 'self' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com", "img-src 'self' data:",
  "connect-src 'self'",
].join("; ");

// Report-only intentionally allows SSR inline hydration until hashes/nonces are validated.
export function withSecurityHeaders(response: Response): Response {
  const headers = new Headers(response.headers);
  headers.set("X-Content-Type-Options", "nosniff");
  headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  headers.set("X-Frame-Options", "DENY");
  headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
  headers.set("Content-Security-Policy", "object-src 'none'; base-uri 'self'; frame-ancestors 'none'");
  headers.set("Content-Security-Policy-Report-Only", reportOnlyPolicy);
  return new Response(response.body, { status: response.status, statusText: response.statusText, headers });
}
