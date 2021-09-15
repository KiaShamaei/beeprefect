import firebase from "firebase/app"


import 'firebase/messaging';

 const firebaseConfig = {
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

export const getToken = (setTokenFound) => {
    return messaging.getToken({vapidKey: 'BHPMECTp2w-qGux4s1AEGLrXdnQi96LEWg_mclTfS4Rjmr3bzpfxNRUJzRbarfST7qQEn__SDUsgl0rIbKpT63Y'}).then((currentToken) => {
      if (currentToken) {
        console.log('current token for client: ', currentToken);
        setTokenFound(true);
        // Track the token -> client mapping, by sending to backend server
        // show on the UI that permission is secured
      } else {
        console.log('No registration token available. Request permission to generate one.');
        setTokenFound(false);
        // shows on the UI that permission is required 
      }
    }).catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
      // catch error while creating client token
    });
  }
  
  export const onMessageListener = () =>
    new Promise((resolve) => {
      messaging.onMessage((payload) => {
        resolve(payload);
      });
  });