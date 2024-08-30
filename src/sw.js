import { precacheAndRoute } from 'workbox-precaching'
precacheAndRoute(self.__WB_MANIFEST)

self.addEventListener('pushsubscriptionchange', async () => {
  console.log('push subscription change')
})

self.addEventListener('notificationclick', async () => {
  console.log('push subscription change')
})

self.addEventListener('push', async (e) => {
  const data = e.data.json()
  self.registration.showNotification(data.title, {
    body: data.msg,
    icon: '/public/img/maskable_icon_x192.png',
    image: '/public/img/maskable_icon_x192.png',
    badge: '/public/img/maskable_icon_x192.png'
  }) //icon et badge à rajouter
})
self.addEventListener('updatefound', () => {
  console.log('new service worker found test2')
})
