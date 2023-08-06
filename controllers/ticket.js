import Ticket from "../models/Ticket.js"

//creating new Ticket
export const createTicket = async (req,res,next) => {
    const newTicket = new Ticket(req.body)

    try{
        const savedTicket = await newTicket.save()
        res.status(200).json(savedTicket)

    }catch(err){
        next(err)
    }
}

//update ticket
export const updateTicket = async (req,res,next) => {
    try{
        const updatedTicket = await Ticket.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(updatedTicket)

    }catch(err){
        next(err)
    }
}

//get a ticket
export const getTicket = async (req,res,next) => {
    try{
        const ticket = await Ticket.findById(req.params.id)
        res.status(200).json(ticket)

    }catch(err){
        next(err)
    }
}

//delete a ticket
export const deleteTicket = async(req,res,next) => {
    try{
        await Ticket.findByIdAndDelete(req.params.id)
        res.status(200).json("ticket has been deleted successifully")

    }catch(err){
        next(err)
    }
}

//get a specific user tickets
export const userTickets = async(req, res, next) => {
    try {
        const tickets = await Ticket.find({ userId: req.params.userId }).sort({ createdAt: -1 })
        res.status(200).json(tickets)

    } catch (err) {
        next(err)
    }
}


//get all titckets 
export const getAllTickets = async (req,res,next) => {
    try{
        const tickets = await Ticket.find()
        res.status(200).json(tickets)

    }catch(err){
        next(err)
    }
}