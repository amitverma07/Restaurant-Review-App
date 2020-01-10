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
  './chopsticks.png',
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
      // .catch(error => {
      //   console.log("Some Error Occured" + error)
      // })
  );
});

//Activate Event
self.addEventListener("activate", e => {
  console.log("hi");
  e.waitUntil(
    caches.keys().then(cacheVersions => {
      return Promise.all(
        cacheVersions.map(cacheName => {
          if (cacheName !== cacheVersion) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

//Fetch Event
// self.addEventListener("fetch", e => {
//   console.log("heee");
//   e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
// });

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.open(cacheVersion).then(function (cache) {
      return cache.match(event.request).then(function (response) {
        return response || fetch(event.request).then(function (response) {
          cache.put(event.request, response.clone());
          return response;
        });
      });
    })
  );
});