import { initializeApp, applicationDefault, cert } from 'firebase-admin/app';
import { getFirestore, Timestamp, FieldValue } from 'firebase-admin/firestore'
import serviceAccount from "../key/fir-node-6b31d-e4dd408837b0.json" assert {type: "json"};

initializeApp({
    credential: cert(serviceAccount)
});

const db = getFirestore();

export default db;