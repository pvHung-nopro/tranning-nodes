import { initializeApp, applicationDefault, cert } from 'firebase-admin/app';
import { getFirestore, Timestamp, FieldValue } from 'firebase-admin/firestore'

initializeApp({
    credential: cert({
        "type": "service_account",
        "project_id": "fir-node-6b31d",
        "private_key_id": "e4dd408837b07992195ad4934e5ac8a80a18a284",
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCV/z541OtY+6Ih\ndUugrAm+1R6xDQlxrBiFP1tqmqZUCmG61U6qX494uYFbBpNdtp+u5frh/BUG911q\nZWglVYCa5oQYNzKV+r8ZSRwI83LFt636H9McN8t4h0LmlHXXRxT3IJg5r2NU2GNU\ngI2cGS2gjjG8/XSpG2k+dpqiYTsxPmCxGX+v06MoQJG3tXfkdgZ3xMVlz5SMfJGI\nDjedEn5fPkefuyOMkEecYs0BB660XYNZ1vmouKQIf3AdkyJ3MqYRgQ7PqazKQLoe\nN9PlOcNqrZDhDPmgXuls/YUqutAJmCOd+KiWSXp+oGPoHSiJau/GLC+jQbCSfj/S\n+dU6A7OnAgMBAAECggEAR5x2/mgkvjRQmOmvhBNuiamlAAFJ33e6sy7m3ZPc0eWs\n9+5roqKB1DC4ZbVTeNu+C9mnd+mKPmutsSSd3qkd/5YLPaZoo7r1LkS9ujZENsn1\nKSO1fdTTcwUctwns4q0AgOWSV4P5B+JRNeAz+3D33B3W+DQHVM8N5XDpbZm/EUhL\ntPyL/vdpKPgA9z030WcuLyQSVg+ohGSLb1gJxn7ZNYbpoD0v5BcN3w7KMXTXkVMu\n99fnLHBX4QI3nKsZu91VGVfcRZCf+vTcGkBFHzVbiWlAcB/NoS8gejF5oisHGtHQ\nmYtWMU/2lA/jAUA2/gX9hn69ygNlf0TIqTWU76QHpQKBgQDOTSVfHGBeD98FrAGe\nTP9Bfv+tkPV1mQkAnSHLcz9Z88pUsIFMGOwSZq0snHbly3K8YMCOeCRGsYxQQmM+\nnqLEH5TJ/rLtqHRJ43/CqEQHlbzl01ze4wHgJCDzZsfh3ZbhpxUEDujEXfLdZwr9\n2ADfmNbnhdIaE2V14QEIQeJKFQKBgQC6Ib5StejAyEVBJ5S3oKThy0WxTou91uAl\nSh3FUky6XuzntjQeBtWp7ZWkL+5VJHmvMSjJd5xaBek9XHOUcNGf5zinfrMYEqrd\nCBk4cjEPDlvEQ1KQBPpIhBY5hr4mkSidBauegGnnm4vHTcn606wSB8i8BJosuCF1\nSoCaXL1hywKBgQCTwRkVB6PVepSG4Wy/TfI7nJPOYdYLhbG26NN9fWtQJ5UwFsJk\nGC1r+HHrU5ysdIwWc002PMHuh9cw3HtsK/3zbZMJIQxRvqabDP9CEXW34PzLthf7\n4qZDPF0FNwXNtQENWLdqkqsPiSIahGSQ7hWiDztL0sJpvp6aUK6GlXlXCQKBgQCN\nzD0Y97pMe4W/AC9cwQY7eccrL4Jn6nWyEsehVnRbmwtx7q2/nkdSAEx624T+2h3V\nqGbBLN0w+8XXWEI4+MXJwrW3bF913GrMnmnQRbY4GSEx4HPageBGNFJWGt9rtDQz\ng2leA8gqiKYw/IL+EhnJVqLHEd5+aPwcRdi5QCOKhwKBgFbPjBQXmMMdvkY1Q1qN\njzNA91V5rPgY+1ZUDWIsfaLFClyYwDjv5cCv5zh4MJdQwirRwhFRsiEp3FHcTv6z\nhU+97SmJdD1b4NTjPaWbS+Ka/7oNshpQNWo+sGEqILF08BDFZDZqj8gqxuuWtCib\nlpTCTPVS8iSq0Q2UyvOcBMKC\n-----END PRIVATE KEY-----\n",
        "client_email": "firebase-adminsdk-hwoey@fir-node-6b31d.iam.gserviceaccount.com",
        "client_id": "107944773205180197774",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-hwoey%40fir-node-6b31d.iam.gserviceaccount.com",
        "apiKey": "AIzaSyAkE7KSDrC6xrI78AWuEqmygDXbXMVBAKc "
    })
});

const db = getFirestore();

export default db;