'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "7fc22f3a6c7667c45d041c42658d95e4",
"version.json": "e088d5021519117ef6459133d7bbf861",
"splash/img/light-2x.png": "aad20da3da0d736669c529803c211688",
"splash/img/dark-4x.png": "712fdbc9fed522e460006df0073a3b16",
"splash/img/light-3x.png": "8785db3d78873da7dae7dd89b76bb329",
"splash/img/dark-3x.png": "8785db3d78873da7dae7dd89b76bb329",
"splash/img/light-4x.png": "712fdbc9fed522e460006df0073a3b16",
"splash/img/dark-2x.png": "aad20da3da0d736669c529803c211688",
"splash/img/dark-1x.png": "a3a535c1867c7e7863bf8065f535d139",
"splash/img/light-1x.png": "a3a535c1867c7e7863bf8065f535d139",
"index.html": "a5d4e90b33b1e8076262490933c942af",
"/": "a5d4e90b33b1e8076262490933c942af",
"main.dart.js": "e7b27ec28aa55a9e6dbae976af3057fa",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"favicon.png": "198c005fa210b66b605ccaab207bf10b",
"icons/Icon-192.png": "e01dbb637c0c80a3fdf1d6babd39a49e",
"icons/Icon-maskable-192.png": "e01dbb637c0c80a3fdf1d6babd39a49e",
"icons/Icon-maskable-512.png": "712fdbc9fed522e460006df0073a3b16",
"icons/Icon-512.png": "712fdbc9fed522e460006df0073a3b16",
"manifest.json": "ae430241cc243b69b51e043511d2a6d1",
"assets/AssetManifest.json": "8f1ca1f8e1f7ed0cd06f699e76547b7b",
"assets/NOTICES": "22b3708172a27e9416fde5f23ff50c1b",
"assets/FontManifest.json": "f43b3c59d8263a34297b19eb48b8253b",
"assets/AssetManifest.bin.json": "b658e2728dda204df7f5048f5afad78a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "825e75415ebd366b740bb49659d7a5c6",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "cee3f7bdfb3eccfe7ae0407c1dde01ac",
"assets/fonts/MaterialIcons-Regular.otf": "6ab8ad88ab6bf5d19c6d2cd3e065dda4",
"assets/assets/json/pekerjaan.json": "10c8e5f0a02d6a0cb7749060c193517e",
"assets/assets/json/kesehatan.json": "ddbd1d0fd73277f6ce50b40a3c10c3ba",
"assets/assets/json/tujuan_menikah.json": "4a28bfb430642461d5731c58b615b0df",
"assets/assets/json/keluarga_orang_tua.json": "3fcd19d01da96595ae210e3df8407d76",
"assets/assets/json/anak.json": "33f5d9bc0371b58d64ae66a6f9da6812",
"assets/assets/json/keuangan.json": "3c81d187d71841e9445cb95960aefa74",
"assets/assets/json/tempat_tinggal.json": "59c7ef6cbe948f84c5a0a72ac7268066",
"assets/assets/json/pemahaman_karakter.json": "25328f30aec88c4384bc6a3319e4d7a9",
"assets/assets/json/pembagian_tanggung_jawab.json": "f7ad69c2362801aa7b08c47c59c2f973",
"assets/assets/json/kebiasaan.json": "02019270a8113af1f55918efa7022fe0",
"assets/assets/json/tugas_rumah.json": "bb886722bccf665b0d5e5953c4c4ff61",
"assets/assets/json/seks.json": "cfc1e2ab4ca825aca2567caded76ea0e",
"assets/assets/json/konsep_wedding.json": "30a2748863b91dcbf991f4b172131fd9",
"assets/assets/json/keyakinan_agama.json": "991702b8da460b051938f45b4883f9c0",
"assets/assets/json/rencana_masa_depan.json": "ebe43092cc60598b26d842d9419fdd78",
"assets/assets/json/batasan_toleransi.json": "ad20eb9df3e45d183aae43247c3590ad",
"assets/assets/fonts/LoveLikeThis.otf": "66efd7888d8cd420118635930536c4d4",
"assets/assets/fonts/WastedVindey.ttf": "24361a4e963fa4ff083fd6f05798ffdb",
"assets/assets/fonts/LoveLikeThis.ttf": "ea0153336c084ccbdeb5ac43435b451d",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "9fe690d47b904d72c7d020bd303adf16",
"canvaskit/canvaskit.js.symbols": "27361387bc24144b46a745f1afe92b50",
"canvaskit/skwasm.wasm": "1c93738510f202d9ff44d36a4760126b",
"canvaskit/chromium/canvaskit.js.symbols": "f7c5e5502d577306fb6d530b1864ff86",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "c054c2c892172308ca5a0bd1d7a7754b",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "a37f2b0af4995714de856e21e882325c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
