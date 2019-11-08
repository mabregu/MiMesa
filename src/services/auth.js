import firebase from './firebase'
import * as Facebook from 'expo-facebook';
import * as Google from 'expo-google-app-auth';

async function signInWithFacebook() {
  const appId = Expo.Constants.manifest.extra.facebook.appId;
  const permissions = ['public_profile', 'email'];  // Permissions required, consult Facebook docs
  const { type, token } = await Facebook.logInWithReadPermissionsAsync(appId,{permissions});

  switch (type) {
    case 'success': {
      await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);  // Set persistent auth state
      const credential = firebase.auth.FacebookAuthProvider.credential(token);
      const facebookProfileData = await firebase.auth().signInWithCredential(credential);  // Sign in with Facebook credential
      // Do something with Facebook profile data
      // OR you have subscribed to auth state change, authStateChange handler will process the profile data
      return Promise.resolve({type: 'success'});
    }
    case 'cancel': {
      return Promise.reject({type: 'cancel'});
    }
  }
}

isUserEqual = (googleUser, firebaseUser) => {
  if (firebaseUser) {
    var providerData = firebaseUser.providerData;
    for (var i = 0; i < providerData.length; i++) {
      if (providerData[i].providerId === firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
          providerData[i].uid === googleUser.getBasicProfile().getId()) {
        // We don't need to reauth the Firebase connection.
        return true;
      }
    }
  }
  return false;
}

onSignIn = googleUser => {
  console.log('Google Auth Response');
  // We need to register an Observer on Firebase Auth to make sure auth is initialized.
  var unsubscribe = firebase.auth().onAuthStateChanged(function(firebaseUser) {
    unsubscribe();
    // Check if we are already signed-in Firebase with the correct user.
    if (!this.isUserEqual(googleUser, firebaseUser)) {
      // Build Firebase credential with the Google ID token.
      var credential = firebase.auth.GoogleAuthProvider.credential(
          googleUser.idToken,
          googleUser.accessToken
      );
      // Sign in with credential from the Google user.
      firebase
        .auth()
        .signInWithCredential(credential).then(function(){
          console.log('usuario logueado con google');
        })
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          // ...
      });
    } else {
      console.log('User already signed-in Firebase.');
    }
  }.bind(this));
}

async function signInWithGoogleAsync() {
    try {
      const result = await Google.logInAsync({
        androidClientId:
          "543766226162-t64tg4og7h4dl5mf59vipjio8nkfvgrq.apps.googleusercontent.com",
        scopes: ["profile", "email"]
      })

      if (result.type === "success") {
        this.onSignIn(result)
        return result.accessToken;
        //return Promise.resolve({type: 'success'});
      } else {
        console.log("cancelled")
      }
    } catch (e) {
      console.log("error", e)
    }
  }

export { signInWithFacebook, signInWithGoogleAsync}
