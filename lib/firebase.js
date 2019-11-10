import firebase from "firebase/app";
import "firebase/database";
import "firebase/messaging";
const firebaseConfig = {
    apiKey: "AIzaSyAHPOe43dk6WWKR-59ja5sEDQpDcIeERPo",
    authDomain: "labsharingday11112019.firebaseapp.com",
    databaseURL: "https://labsharingday11112019.firebaseio.com",
    projectId: "labsharingday11112019",
    storageBucket: "labsharingday11112019.appspot.com",
    messagingSenderId: "979510310920",
    appId: "1:979510310920:web:3e693bb7ff80adc5e579bd"
};


let firebaseInstance;
export const getFirebase = () => {
    if (firebaseInstance) {
        return firebaseInstance
    }
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig)
    }

    firebaseInstance = firebase

    return firebase
}