if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/quantes_restapi/ev/sw.js', { scope: '/quantes_restapi/ev/' })})}