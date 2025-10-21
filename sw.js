const CACHE_NAME = 'planner-pwa-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/style-planner.css',
  '/app.js',
  '/manifest.json',
  // Tambahkan path ikon Anda di sini:
  '/images/icon-192x192.png',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css',
  'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Playfair+Display:wght@700&display=swap'
];

// Event: INSTALL - Caching aset statis
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache and added core assets');
        return cache.addAll(urlsToCache);
      })
  );
});

// Event: FETCH - Mengambil aset dari cache atau jaringan
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Jika aset ditemukan di cache, kembalikan dari cache
        if (response) {
          return response;
        }
        // Jika tidak, ambil dari jaringan
        return fetch(event.request);
      })
  );
});

// Event: ACTIVATE - Menghapus cache lama
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName); // Hapus cache lama
          }
        })
      );
    })
  );
});