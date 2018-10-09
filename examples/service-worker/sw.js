var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [     '/',
                        '/styles/main.css',
                        '/scripts/main.js'
                ];

self.addEventListener('install', function(event) {
    //perform install steps

    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            }, function(err) {
                console.log('some error');
            })
    )
})

/**
 * event.waitUntil - takes a promise and uses it to know how long installation takes
 * and wether it succeeded or not
 * If all the files are successfully cached, the worker will be installed
 * If any of the files fails to download, then install step will fail
 * 
 */