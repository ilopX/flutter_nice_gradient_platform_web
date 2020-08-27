'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "237bb0873d00e59733eece1ef4ecf46f",
".git/config": "70cb4a3008f9b9ab7ec63d678561e250",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "e88c44620e6622ac16584f5e39d8e7a1",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1ac3d2970010df9496618f4abbc2b75f",
".git/logs/refs/heads/master": "1ac3d2970010df9496618f4abbc2b75f",
".git/logs/refs/remotes/origin/master": "4d4a3e8ada08ff387399f44306a97682",
".git/objects/00/394fcd1a761d0dc20408a04ea79af451161f0d": "247dd0e298219a23990c9e413fd7f4a8",
".git/objects/00/73182457e2170ecb3723857eb4788cd2dd58a9": "99f3ee652a296b4b6c00390398b8b405",
".git/objects/02/1b619178ed14fd289f52f2543065b41f4d9520": "407d6eef762f92595d8e4135ef608d16",
".git/objects/03/6db71ff34b774e4467d61268603e482827c0fc": "feb4791483a05dfe819090c6250cb0b8",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/11/eee871934c260ff558f2ae2fea814e111f1064": "3bc1897fa97b3996d2c894ad7f5560d3",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/19/1d56d35ebeaedf4e314d79b76a93d85dbf181e": "6815e2ce68bb1d234bd3464975f74e90",
".git/objects/1b/bcd4a7791ad1e321d7a889ebbfc42c4db6519f": "73a84a110e79ef8958916f855f929d92",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/20/c494ea9d66ba9d1affe2033fc6d7bebf872635": "31f1b235b5f1f980b5a9f79d2e5335e8",
".git/objects/2a/a0cbca73bae7bc8a8a485ebf8a68ea71a10bf6": "cb22eb6ce1348ea9cf2012a48b25f8f8",
".git/objects/32/ad211e6a5e6a092774963ee43c63977c8cd4e6": "8c10e688ed4340026d29a8572b4fd472",
".git/objects/34/b8d41941fee8b30340294686fb8c7d9f021416": "2e49ee0c789c1c47efe6b1c152c8ba9a",
".git/objects/44/effa70e01c80c63b66a3c4637a8e7d4f2ae701": "00f6ee9eafde3063fb3a3ddb3fb72c6e",
".git/objects/46/a3e07f76e6679c4ff906865a8bcbc17f0ec302": "03e9a09a66cf9d11e93d50500639d976",
".git/objects/46/b3b99387e33ae81940d9a486ba4e0e9fe5b5e6": "73a7f6c4ed3d848f6bad362ed9febed6",
".git/objects/4f/96baeac95e058b6c8fd8062059ea6a920dc584": "080eef1a7b6de509f3854cc766032420",
".git/objects/52/0db953c6a50cb40b482a03908b96404fd90b87": "01aa77d6f0f138ab73f64b2545fdaf38",
".git/objects/5a/a3655b1783e720f6ded52e9829197766b82a51": "aa6706a1bbdf08f8827719ac72dad06d",
".git/objects/69/38eaaa9b626b20f0f7a90103f1551b1bf7ead8": "830c8256bd371367b4ee9672004e2220",
".git/objects/72/bf43af09778c8ffc022e184b80e365154b1cea": "9da9e528dee9723141f591d2ba9b3af3",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/82/42c5f2fa544ebbd28768f11a7544c1379f8792": "885353b611cef4d2aba2d429d666c511",
".git/objects/86/e32172132184a2b51adec6ed837f9352de367e": "49e747e935a81b3bd0ef357d8c656e85",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/44028b53e25b756da5d52d0a17ffe896efb90b": "9fa9b18417f6a49ef66353b6a9fe0084",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/012917dab71a26d535ff8c614582477a123a6d": "22939eff7a0cb1fc6bb53c9bf363b949",
".git/objects/8f/f6dc262e39ac80b0070b0af901e8696f21b075": "5e14a6bed5b7fee887c1505dcb22da95",
".git/objects/9a/ff45fa802e8c8b411af9a6fb59a6b325d20a1a": "158085bb60a173349a8261e65f6ac339",
".git/objects/a0/c14606fce029ab9fa343df80ff2d823c483c22": "65fb0fafd748e5ebaa41fe56f1204c54",
".git/objects/ab/f444613efac533e083e7313d9527e845b50c78": "53a98a297b096972a1836c000d892757",
".git/objects/ae/bc94b149972338ee43f9c982df99882fccb805": "75d24d966a0cfcf082e9fa589b8b00b6",
".git/objects/b1/be7ed3d3971ae00b76c563de2438de7325354d": "de38fa85a16db7f994fa5507619411a4",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/c6/52fac82d91c54c86a19a096303549b5fcc58de": "cfa88464414c87dabf3cf0887697f1a8",
".git/objects/ce/3e8922386e59a8cb4dd28314d3e4d564b88103": "51bcff3c818cff160f7d6c98801a5b7e",
".git/objects/dd/4698b9ef048245f33936c941fc7e3ff158798e": "d890fb00ac6c2e7901ec32a6b9ca211e",
".git/objects/e3/4797d3338142b8f3f82a0109ead28e3e134ea7": "dc2291601992fec542e7a738f4396e94",
".git/objects/e3/dc913ff08e108502af5797f22f620ddf839ba9": "0fa874c4ef93ebf004991c38efdbf1fa",
".git/objects/e4/1d7cbc4e9b76e816f201359344254d5f549825": "ef141e844af259b73d5cc27a50d8d6aa",
".git/objects/e9/f1292881b39b99564284de414502464c6da21d": "d4e0a90acd1ba32e69c07e009bf913ea",
".git/objects/ea/33f93c9aee1f43a614c9890a26ca974c44818d": "7602ed0b8c4c74d4b6bd94d8736810a5",
".git/objects/ee/179e064855df3ec7a3bbbf42a74fff0a0b49b2": "a72030d176612783bb1c9e0dee7f2672",
".git/objects/f7/5ea3fe2f02b9af409898b7bd96328addea3895": "1fb7c02e9d20d8a8112d25fbed8f3ede",
".git/objects/fc/406a33d095c96a774f4f2a8bc5511dbb5aea66": "7bb8401fa298377c1a3c144e04fd1420",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/objects/ff/82c6e9011f47ed5d25fb8718b9b693a59d065b": "e8eff3ca8bfe5efcfa03ebffb406d93d",
".git/refs/heads/master": "620fb8cc64c8f19001a01c2687892661",
".git/refs/remotes/origin/master": "620fb8cc64c8f19001a01c2687892661",
"assets/AssetManifest.json": "c1b92cf41e38b3817cb44cd3d81365f4",
"assets/assets/GitHub_Logo.png": "e67c18f949f6b4bd881cebde3d63cf43",
"assets/assets/Segoe_UI.ttf": "0e7e9a9b5c4abaadef7bc8f4e4574084",
"assets/assets/Shadow.png": "3498498128c4a7229c23a52d3587c2b1",
"assets/assets/ShadowFront.png": "2c8457c03286bd95ebef9f5545f50d19",
"assets/FontManifest.json": "f5b4650e35b03e829a0f946ff793081b",
"assets/fonts/MaterialIcons-Regular.otf": "a68d2a28c526b3b070aefca4bac93d25",
"assets/NOTICES": "7fcc68b69bb834b4d35a509df4cfb090",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "76c152472765e90fbf1039cf60a3f1e5",
"/": "76c152472765e90fbf1039cf60a3f1e5",
"main.dart.js": "db3e75fcff70d458896caec595c9b165",
"manifest.json": "9e7b34fd7c291ca2523123ef20497930"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      // Provide a 'reload' param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'reload'});
        return response || fetch(modifiedRequest).then((response) => {
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
    return self.skipWaiting();
  }

  if (event.message === 'downloadOffline') {
    downloadOffline();
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
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
