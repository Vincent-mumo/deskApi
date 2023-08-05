import express from "express";
const router = express.Router();

import { verifyAdmin,  } from "../utils/verifyToken.js";
import { deleteDepartment, getAllDepartments, getDepartment, updateDepartment } from "../controllers/department.js";

//UPDATE
router.put("/:id", verifyAdmin, updateDepartment);

//DELETE
router.delete("/:id", verifyAdmin, deleteDepartment);

//GET
router.get("/:id", verifyAdmin, getDepartment);

//GET ALL
router.get("/", verifyAdmin, getAllDepartments);

export default router;