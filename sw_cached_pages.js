const cacheName = 'v2';
const cacheAssets = [
    'index.html',
    'style/style.css',
    'js/app.js',
    'images/apple--background-connection-399161.jpg',
    'images/canvasdots.gif',
    'images/classgame.gif',
    'images/codepen.png',
    'images/favicon.png',
    'images/github.png',
    'images/linkedin.png',
    'images/memgame.gif',
    'images/Thomas.png'
];

// INSTALL EVENT

self.addEventListener('install', event => {
    console.log('Service Worker: Installed');
    event.waitUntil(
        caches
            .open(cacheName)
            .then(cache => {
                console.log('Service Worker: Caching Files');
                cache.addAll(cacheAssets);
            })
            .then(() => self.skipWaiting())
    );
});

// ACTIVATE EVENT

self.addEventListener('activate', event => {
    console.log('Service Worker: Activated');
    //REMOVE OLD CACHE VERSIONS
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if(cache !== cacheName) {
                        console.log('Service Worker: Cleared Old Cache');
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
});

// FETCH EVENT
self.addEventListener('fetch', event => {
    console.log('Sevice Worker: Fetching');
    event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
})