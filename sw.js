// Service Worker — AquaConseil (PWA hors-ligne)
// Incrémente CACHE à chaque mise à jour pour forcer le rafraîchissement.
const CACHE = 'aquaconseil-v1';

const APP_SHELL = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icon-192.png',
  './icon-512.png',
  './icon-512-mask.png',
  './favicon.png'
];

// Installation : pré-cache de la coquille applicative
self.addEventListener('install', e => {
  e.waitUntil((async () => {
    const c = await caches.open(CACHE);
    // tolère l'échec unitaire d'une ressource (ne bloque pas l'installation)
    await Promise.all(APP_SHELL.map(u => c.add(u).catch(() => {})));
    self.skipWaiting();
  })());
});

// Activation : purge des anciens caches
self.addEventListener('activate', e => {
  e.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)));
    self.clients.claim();
  })());
});

// Stratégie :
//  - navigation → réseau (page fraîche) puis repli hors-ligne sur le cache
//  - reste → cache d'abord, sinon réseau (et mise en cache au passage)
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;

  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(new Request(req.url, { cache: 'reload' }))
        .catch(() => caches.match(req).then(r => r || caches.match('./index.html')))
    );
    return;
  }

  e.respondWith((async () => {
    const cached = await caches.match(req);
    if (cached) return cached;
    try {
      const resp = await fetch(req);
      if (resp && (resp.ok || resp.type === 'opaque')) {
        const c = await caches.open(CACHE);
        c.put(req, resp.clone());
      }
      return resp;
    } catch (err) {
      return cached || Response.error();
    }
  })());
});
