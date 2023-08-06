import express from "express";
const router = express.Router();

import { verifyAdmin,  verifyUser } from "../utils/verifyToken.js";
import { createTicket, deleteTicket, getAllTickets, getTicket, updateTicket, userTickets } from "../controllers/ticket.js";

//create new
router.post("/",createTicket)

//UPDATE
router.put("/:id", updateTicket);

//DELETE
router.delete("/:id",  deleteTicket);

//GET a specific user tickets
router.get("/:userId", userTickets);


//GET ALL
router.get("/",  getAllTickets);

export default router;