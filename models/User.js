import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
    username:{type:String,required:true},
    contact:{type:String,required:true},
    address:{type:String,required:true},
    img:{type:String},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
},{timestamps:true})

export default mongoose.model("User",UserSchema)