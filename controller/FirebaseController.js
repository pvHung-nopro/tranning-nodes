import * as firebase from "../config/firebase.js"
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAuth as authAdmin } from 'firebase-admin/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAkE7KSDrC6xrI78AWuEqmygDXbXMVBAKc",
    authDomain: "fir-node-6b31d.firebaseapp.com",
    projectId: "fir-node-6b31d",
    storageBucket: "fir-node-6b31d.appspot.com",
    messagingSenderId: "543016044484",
    appId: "1:543016044484:web:6bc0e49f371c7b0868c691",
    measurementId: "G-BCB40VSQKF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

class FirebaseController {

    async login(req, res) {
        signInWithEmailAndPassword(auth, 'pham.van.hung-b@sun-asterisk.com', '12345678')
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                return res.json({
                        user: user
                    })
                    // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });

    }

    async verify(req, res) {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                return res.json({
                        user: user
                    })
                    // ...
            } else {
                // User is signed out
                return res.json({
                    user: 'no user'
                })
            }
        });
    }

    async removeToken(req, res) {
        const uid = 'qr1iOw0KmvN1YRyD9v0AvpiZFHA3'
        authAdmin()
            .revokeRefreshTokens(uid)
            .then(() => {
                console.log(authAdmin().getUser(uid))
                return authAdmin().getUser(uid);
            })
            .then((userRecord) => {
                return new Date(userRecord.tokensValidAfterTime).getTime() / 1000;
            })
            .then((timestamp) => {
                console.log(`Tokens revoked at: ${timestamp}`);
            });
        return res.json({})
    }
}

export default new FirebaseController