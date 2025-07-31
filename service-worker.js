const CACHE_NAME = "qr-cache-v1";
const URLS_TO_CACHE = [
  "/qr-code-generator/",
  "/qr-code-generator/index.html",
  "/qr-code-generator/manifest.json",
  "/qr-code-generator/service-worker.js",
  "/qr-code-generator/icon.png",
  "https://cdn.jsdelivr.net/npm/qrcodejs@1.0.0/qrcode.min.js"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(URLS_TO_CACHE))
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});
