'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "1ac57eb0214a8f5216f1da7dd479b33f",
"favicon.ico": "92d7f701e9d3dd30feace03492a961a6",
"index.html": "14724dea23cbd9e3122111f119ecdeb5",
"/": "14724dea23cbd9e3122111f119ecdeb5",
"main.dart.js": "223f6d70aaa55df5b1fe5ff1a0c089d9",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "88a3183c25005f26ba8f22a9404e736a",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96313fe22a538e24d87db6272ff326aa",
"manifest.json": "53db43a24122326bbbd29e0b80e1c72e",
"assets/AssetManifest.json": "ffefe6eb13faa7c8fb6eba3cfc84c4f4",
"assets/NOTICES": "456d9492a2eae9f192d117b8313df5fb",
"assets/FontManifest.json": "f818e6b1ec985c980b90b998239f7f42",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/icons8-flutter-2.svg": "cf1f6c63aaadb708c8eca342e1da83d6",
"assets/assets/images/icons8-flutter-48.png": "bc20ac3c833cdfbb9230c8a0dc483d46",
"assets/assets/images/IMG_20220118_123057_863.jpg": "6102dcbefc8e8ad05aff3cbb7673f2e5",
"assets/assets/images/icons8-flutter.svg": "5c3a6308a335872a831a9f836f0e236c",
"assets/assets/images/bg.jpeg": "c6449162dc3940daa640a43101cfd66c",
"assets/assets/education/icons8-school-64%2520(1).png": "29309b9bcf45fc04d433c1ecbb41acb0",
"assets/assets/education/icons8-university-campus-64.png": "0ebcc47bed206826bb800de256344363",
"assets/assets/education/icons8-storytelling-100.png": "30f33dcb69ca8cead5c21a3d6bc47523",
"assets/assets/books/personMBA.jpeg": "f11f8450634034d9e3851c8ca7495086",
"assets/assets/books/Ikigai.jpeg": "e326b92ced0cac7932bf9cc3b6f31259",
"assets/assets/books/rich_dad_pd.jpeg": "2b1097e67c640da61b5a9491e8f1ac95",
"assets/assets/icons/124021.png": "88aa93c7d7d0b4f3bb45a0c7ad8f9a4b",
"assets/assets/icons/github.svg": "9226aa209923e38c0a6ddcb236e2bc68",
"assets/assets/icons/download.svg": "628700a3031424d215a441fab2da1731",
"assets/assets/icons/icons8-instagram.svg": "df8cd470675ff07c2ff57bf6b32909ca",
"assets/assets/icons/check.svg": "4220c82511cc1dfb40b8bba7d25c5f55",
"assets/assets/icons/icons8-instagram%2520(1).svg": "f3d37c65706a48ddd01c1b108fc30f99",
"assets/assets/icons/1217174_instagram_icon.svg": "c9c3606ca3d8eb40782d90046b707adc",
"assets/assets/icons/dribble.svg": "d392567c5678d42472d2c7b766268101",
"assets/assets/icons/linkedin.svg": "5b2195ddf9e879047dd8a163c4194920",
"assets/assets/icons/twitter.svg": "a4a0163fef48a4247a305528c07bc4fa",
"assets/assets/icons/2515843_black%2520and%2520white_dark%2520grey_instagram_icon.png": "ae15ae826d6c2651defa84699eb02446",
"assets/assets/icons/behance.svg": "35ad2d47e647d0b168e7707b2984c6b5",
"assets/assets/skills/icons8-javascript-480.png": "2e5de0a7d635b437db088d43f847d39c",
"assets/assets/skills/icons8-c++-480.png": "8949bfc86fc10ef1505994eb643e940b",
"assets/assets/skills/icons8-html-5-480.png": "8d87b2b36282f6830ab5e8a84b6cc227",
"assets/assets/skills/icons8-firebase-480.png": "d139ba1e59d9bcc1ed86617547dd51ee",
"assets/assets/skills/icons8-css3-480.png": "5c4e16ceb77211d7b286e351e272328d",
"assets/assets/skills/icons8-dart-480.png": "65c2aa86d62a098b21702842034e016d",
"assets/assets/skills/icons8-java-480.png": "194f3da9e4addbb03e9fd1f091e647fe",
"assets/assets/skills/pngegg.png": "b4dd4c5e18b3c0a0c35018f37c2b2f94",
"assets/assets/skills/icons8-mysql-logo-480.png": "ff6c703edb31fdd5d20738fe337d23c0",
"assets/assets/skills/icons8-flutter-480.png": "47e4c5ea380dc3b9241ee7b4f8b65c20",
"assets/assets/skills/icons8-linux-96.png": "27d6093d6a9649618ea1ef5cf16e4b26",
"assets/assets/DancingScript-VariableFont_wght.ttf": "796bdaef35c72bb17246391811a5d7c1",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
