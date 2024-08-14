import { precacheAndRoute } from 'workbox-precaching'
precacheAndRoute(self.__WB_MANIFEST)

console.log('sw.js')

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
  const response = await fetch(
    'https://smartbuildings.quantes.equans.be/quantes_restapi/ev/save-subscription',
    {
      method: 'post',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(subscription)
    }
  )

  return response.json()
}

self.addEventListener('activate', async () => {
  console.log('activating')
  const subscription = await self.registration.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: urlBase64ToUint8Array(
      'BAMvmDPwZonZMiMQ0MA-hVzxOBsTsDbdH67VW9RvZTG5cPuHAMwhlsK0D9zdg7Qc5V_CVaNLlrlFfihh6QtogaQ'
    )
  })
  const response = await saveSubscription(subscription)
  console.log(response)
})
self.addEventListener('push', async (e) => {
  const data = e.data.json()
  self.registration.showNotification(data.title, { body: data.msg })
})
