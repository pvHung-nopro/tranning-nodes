import express from "express";
import http, { request } from "http";
import cors from "cors";
import bodyParser from 'body-parser'
import AuthController from "./controller/AuthController.js";
import bcrypt from 'bcrypt';
// import "firebase/auth";


const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


const router = express.Router()
app.post("/register", AuthController.regiter)
app.post("login", AuthController.login)

const port = process.env.PORT || "3000";
app.set("port", port);
server.listen(port, () => {
    console.log(`Listening on port:: http://localhost:${port}/`);
})

