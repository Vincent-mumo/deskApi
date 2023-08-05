import express from "express"
const router = express.Router()
import { staffLogin, staffRegister } from "../controllers/staffAuth.js"

//registration
router.post("/register",staffRegister)
router.post("/login",staffLogin)

export default router