import mongoose from "mongoose"

const TicketSchema = new mongoose.Schema({
    userId:{type:String,required:true},
    department:{type:String,required:true},
    subject:{type:String,required:true},
    status:{type:String,default:"Pending"},
    notes:{type:String,default:"Admin will respond with notes associated wconcerning your ticket"}
},{timestamps:true})

export default mongoose.model("Ticket",TicketSchema)