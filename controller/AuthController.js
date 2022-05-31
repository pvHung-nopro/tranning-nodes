import Str from "../unitl/Str.js";
import bcrypt from 'bcrypt';
import db from "../config/firebase.js";

class AuthController {
    async regiter(req, res, next) {
        const data = req.body;
        console.log(data)
        try {
            const password = await bcrypt.hash(data.password, 10);
            const usersCollectionRef = await db.collection('users').add({
                name: data.name,
                email: data.email,
                passsword: password
            });

            const token = await Str.createBase64()
            console.log(token, usersCollectionRef.id)
            const tokenEntity = await db.collection('tokens').add({
                user_id: usersCollectionRef.id,
                token: token
            })

            return res.status(200).json({
                code: 200,
                user: data,
                token: token
            })
        } catch (e) {
            console.log(e)
            return res.status(500).json({
                code: 500,
                message: 'server error'
            })
        }
    }


    async login(req, res, next) {
        const data = req.data
        try {
            const user = await db.collection('users').get();
        }catch(e){

        }
    }
}

export default new AuthController()