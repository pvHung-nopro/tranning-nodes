import express from "express";
import http, { request } from "http";
import cors from "cors";
import bodyParser from 'body-parser'
import AuthController from "./controller/AuthController.js";
import FirebaseController from "./controller/FirebaseController.js";
// import "firebase/auth";


const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


const router = express.Router()
app.post("/register", AuthController.regiter)
app.post("/login", AuthController.login)

app.post('/login-firebase', FirebaseController.login);
app.post('/verify-firebase', FirebaseController.verify);
app.post('/remove-token-firebase', FirebaseController.removeToken)

const port = process.env.PORT || "3000";
app.set("port", port);
server.listen(port, () => {
    console.log(`Listening on port:: http://localhost:${port}/`);
})