// import * as firebase from 'firebase';
// import { config } from '../config';
//
// firebase.initializeApp(config.firebase);
//
// export const Firebase = firebase;

import * as firebase from 'firebase'  // Should not be used elsewhere in the project

firebase.initializeApp(Expo.Constants.manifest.extra.firebase);

export default firebase;
