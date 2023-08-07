import mongoose from "mongoose"

const TicketSchema = new mongoose.Schema({
    userId:{type:String,required:true},
    department:{type:String,required:true},
    subject:{type:String,required:true},
    responsible:{type:String},
    status:{type:String,default:"Pending"},
    desc:{type:String},
    type:{type:String,default:"new"},
    adminNotes:{type:String}
},{timestamps:true})

export default mongoose.model("Ticket",TicketSchema)