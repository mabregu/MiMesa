import * as firebase from 'firebase'  // Should not be used elsewhere in the project

firebase.initializeApp(Expo.Constants.manifest.extra.firebase);
export const firebaseAuth = firebase.auth()
export const firebaseDatabase = firebase.database();

export default firebase;
