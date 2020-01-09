const cacheVersion = "v1";

const cacheAssets = [
  './index.html',
  './restaurant.html',
  './js/restaurant_info.js',
  './data/restaurants.json',
  './js/main.js',
  './sw.js',
  './js/dbhelper.js',
  './css/styles.css',
  './img/1.jpg',
  './img/2.jpg',
  './img/3.jpg',
  './img/4.jpg',
  './img/5.jpg',
  './img/6.jpg',
  './img/7.jpg',
  './img/8.jpg',
  './img/9.jpg',
  './img/10.jpg'
];

//Install Event
self.addEventListener("install", e => {
  e.waitUntil(
    caches
      .open(cacheVersion)
      .then(cache => {
        cache.addAll(cacheAssets);
      })
      .then(() => self.skipWaiting())
  );
});

// //Activate Event
// self.addEventListener("activate", e => {
//   e.waitUntil(
//     caches.keys().then(cacheVersions => {
//       return Promise.all(
//         cacheVersions.map(cacheName => {
//           if (cacheName !== cacheVersion) {
//             return caches.delete(cacheName);
//           }
//         })
//       );
//     })
//   );
// });

// //Fetch Event
// self.addEventListener("fetch", e => {
//   e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
// });