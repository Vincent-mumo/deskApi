import mongoose from "mongoose"

const StaffSchema = new mongoose.Schema({
    username:{type:String,required:true},
    contact:{type:String,required:true,unique:true},
    department:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    img:{type:String},
    password:{type:String,required:true}
},{timestamps:true})

export default mongoose.model("Staff",StaffSchema)