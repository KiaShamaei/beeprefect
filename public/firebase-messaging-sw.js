// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing the generated config
var firebaseConfig = {
    apiKey: "AIzaSyD4Xqjo7UV0yJVFf-LM4TkVyxyU8xEnBoA",
    authDomain: "testtara-935f2.firebaseapp.com",
    projectId: "testtara-935f2",
    storageBucket: "testtara-935f2.appspot.com",
    messagingSenderId: "618935729110",
    appId: "1:618935729110:web:cf71228ba0fc052312c277"
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});