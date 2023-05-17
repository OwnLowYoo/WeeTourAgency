import User from "../models/User.js"
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const register = async (req, res) => {
    try {

        //hashing password
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(req.body.password, salt)

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash,
            photo: req.body.photo
        })

        await newUser.save()

        res.status(200).json({success:true, message: 'Successfully created'})
    }catch (err) {
        res.status(500).json({success:false, message: 'Failed to create. Try again'})
    }
};

export const login = async (req, res) => {
    try {
    }catch (err) {}
};
