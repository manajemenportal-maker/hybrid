const CACHE='lms-pwa-v26';
const CORE=['./','index.html','styles.css','app.js','manifest.webmanifest','assets/icon.svg'];
self.addEventListener('install',event=>event.waitUntil(
  caches.open(CACHE).then(cache=>cache.addAll(CORE)).then(()=>self.skipWaiting())
));
self.addEventListener('activate',event=>event.waitUntil(
  caches.keys().then(keys=>Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim())
));
self.addEventListener('fetch',event=>{
  const request=event.request;
  if(request.method!=='GET')return;
  const url=new URL(request.url);
  if(url.origin!==self.location.origin)return;
  const isCritical=request.mode==='navigate'||/\/(?:index\.html|styles\.css|app\.js|sw\.js)$/.test(url.pathname);
  if(isCritical){
    event.respondWith(fetch(request).then(response=>{
      if(response.ok){const copy=response.clone();event.waitUntil(caches.open(CACHE).then(cache=>cache.put(request,copy)));}
      return response;
    }).catch(()=>caches.match(request,{ignoreSearch:true}).then(hit=>hit||caches.match('index.html'))));
    return;
  }
  event.respondWith(caches.match(request,{ignoreSearch:true}).then(hit=>hit||fetch(request).then(response=>{
    if(response.ok){const copy=response.clone();event.waitUntil(caches.open(CACHE).then(cache=>cache.put(request,copy)));}
    return response;
  })));
});
