const CACHE='cha-ching-shell-v1';
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(['./','./index.html','./styles.css','./app-v3.js','./cha-ching-logo.png','./manifest.webmanifest']))));
self.addEventListener('fetch',event=>{if(event.request.method==='GET'&&new URL(event.request.url).origin===location.origin)event.respondWith(caches.match(event.request).then(cached=>cached||fetch(event.request)));});
