import Staff from "../models/Staff.js"
import bcrypt from "bcryptjs"
import {createError} from "../utils/error.js"
import jwt from "jsonwebtoken"

//registration process
export const staffRegister = async (req,res,next) => {
    try{
        //generating salt and hashing the password
        const salt = bcrypt.genSaltSync(10)
        const hashedPassword = bcrypt.hashSync(req.body.password,salt)

        //creating user in DB
        const newStaff = new Staff({
            ...req.body,password:hashedPassword
        })

        //saving password into db
        const savedStaff = await newStaff.save()
        res.status(200).json(savedStaff)

    }catch(err){
        next(err)
    }
}

//login process
export const staffLogin = async (req,res,next) => {
    try{
        //finding user in db
        const staff = await Staff.findOne({email:req.body.email})
        if(!staff) return next(createError(404,"User not found!"))

        //checking if password is correct
        const isPasswordCorrect = await bcrypt.compare(req.body.password,staff.password)
        if(!isPasswordCorrect) return next(createError(400,"Wrong password"))

        //generating access token
        const token = jwt.sign({id:staff._id,isAdmin:staff.isAdmin},process.env.JWT)

        //destructuring to extract the password and isAdmin properties from the server response
        const {password,isAdmin,...otherDetails} = staff._doc

        res.cookie("access_token",token,{httpOnly:true}).status(200).json({details:{...otherDetails},isAdmin})

    }catch(err){
        next(err)
    }
}