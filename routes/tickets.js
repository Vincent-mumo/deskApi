import express from "express";
const router = express.Router();

import { verifyAdmin,  verifyUser } from "../utils/verifyToken.js";
import { deleteTicket, getAllTickets, getTicket, updateTicket } from "../controllers/ticket.js";

//UPDATE
router.put("/:id", verifyUser, updateTicket);

//DELETE
router.delete("/:id", verifyUser, deleteTicket);

//GET
router.get("/:id", verifyUser, getTicket);

//GET ALL
router.get("/", verifyAdmin, getAllTickets);

export default router;