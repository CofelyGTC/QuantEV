import { precacheAndRoute } from 'workbox-precaching'

if (!('serviceWorker' in navigator)) {
  throw new Error('No support for service worker!')
}

if (!('Notification' in window)) {
  throw new Error('No support for notification API')
}

if (!('PushManager' in window)) {
  throw new Error('No support for Push API')
}

console.log('sw.js')
precacheAndRoute(self.__WB_MANIFEST)

const urlBase64ToUint8Array = (base64String) => {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4)
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/')

  const rawData = atob(base64)
  const outputArray = new Uint8Array(rawData.length)

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i)
  }

  return outputArray
}
const saveSubscription = async (subscription) => {
  const response = await fetch('http://localhost:5000/ev/save-subscription', {
    method: 'post',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(subscription)
  })

  return response.json()
}

self.addEventListener('install', () => {
  console.log('V1 installing…')
})
self.addEventListener('activate', async () => {
  console.log('activating')
  const subscription = await self.registration.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: urlBase64ToUint8Array(
      'BOvnqL442Gd98q4vRgr02YywNFmHC3JPsbgFVX5OS5T_d4XGNP4LAG8XicMfhR-SC0KK4GcvTkrwzCXfKOQXJ4w'
    )
  })
  const response = await saveSubscription(subscription)
  console.log(response)
})
self.addEventListener('push', (e) => {
  self.registration.showNotification('Wohoo!!', { body: e.data.text() })
})
/*
=======================================

Public Key:
BMRmm9IxVhFc9mFCD0-gtJ5_DYJdE_7aP4_ONFj6t-ddd6yjxE0lGfslTZffPjxsJQ41hXeAa9SAjLlJfd9kDtE

Private Key:
Dx_OZRebeJX3kxqRt7JQxgwkHhndZpYCMOTewXESyZg

=======================================
*/
