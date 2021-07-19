const CACHE_NAME = "v1_cache_app_count_vue";
const urlsToCache = [
  "./",
  "./img/icon64.png",
  "./img/icon128.png",
  "./img/icon256.png",
  "./img/icon512.png",
  "./img/icon1024.png",
  "./js/vue.js",
  "./js/manifest.json",
  "https://cdn.jsdelivr.net/npm/vue@2.5.16/dist/vue.js",
  "./js/createApp.js",
  "./css/css.css",
  "https://necolas.github.io/normalize.css/8.0.1/normalize.css",
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) =>
      cache
        .addAll(urlsToCache)
        .then(() => self.skipWaiting())
        .catch((err) => console.log(err))
    )
  );
});

self.addEventListener("activate", (e) => {
  const cachewhitelist = [CACHE_NAME];
  e.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cachewhitelist.indexOf(cacheName) === -1) {
              return cache.delete(cacheName);
            }
          })
        );
      })
      .then(
          () => self.clients.claim()
          )
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request.url).then((res) => {
      if (res) {
        return res;
      }
      return fetch(e.request);
    })
  );
});
