const CACHE='cha-ching-shell-v2';
self.addEventListener('install',event=>{self.skipWaiting();event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(['./','./index.html','./styles.css','./app-v3.js','./cha-ching-logo.png','./manifest.webmanifest'])))});
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim())));
// Network-first keeps the installed PWA current; the cached shell is only a fallback offline.
self.addEventListener('fetch',event=>{if(event.request.method==='GET'&&new URL(event.request.url).origin===location.origin)event.respondWith(fetch(event.request).then(response=>{const copy=response.clone();caches.open(CACHE).then(cache=>cache.put(event.request,copy));return response}).catch(()=>caches.match(event.request)));});
