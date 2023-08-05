import express from "express"
const router = express.Router()
import {Login, Register} from "../controllers/auth.js"

//registration
router.post("/register",Register)
router.post("/login",Login)

export default router