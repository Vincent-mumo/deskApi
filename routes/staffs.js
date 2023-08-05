import express from "express";
const router = express.Router();

import { verifyAdmin,  verifyUser } from "../utils/verifyToken.js";
import {deleteStaff, getAllStaff, getStaff, updateStaff} from "../controllers/staff.js";

//UPDATE
router.put("/:id", verifyUser, updateStaff);

//DELETE
router.delete("/:id", verifyUser, deleteStaff);

//GET
router.get("/:id", verifyUser, getStaff);

//GET ALL
router.get("/", verifyAdmin, getAllStaff);

export default router;