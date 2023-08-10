import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import helmet from "helmet"
import morgan from "morgan"

//routes
import authRoute from "./routes/auth.js";
import staffAuthRoute from "./routes/staffAuth.js";
import usersRoute from "./routes/users.js";
import staffsRoute from "./routes/staffs.js";
import ticketsRoute from "./routes/tickets.js";
import departmentsRoute from "./routes/departments.js";


//initializing app
const app = express()
dotenv.config()

//connecting to mongodb
const Connect = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log("Connected to mongoDB")
    }catch(error){
        throw error
    }
}

//code to run if mongodb connection is lost
mongoose.connection.on("disconnected",() => {
    console.log("mongoDB disconnected!")
})

//middlewares
app.use(cors({Origin:'https://desk-client.vercel.app'}))
app.use(express.json())
app.use(helmet())
app.use(morgan("common"))
app.use(cookieParser())

//endpoints for accessing the API
app.use("/api/auth", authRoute);
app.use("/api/staffAuth",staffAuthRoute)
app.use("/api/users", usersRoute);
app.use("/api/staffs", staffsRoute );
app.use("/api/tickets", ticketsRoute);
app.use("/api/departments",departmentsRoute)





//error Handling middleware
app.use((err,req,res,next)=> {
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Something went wrong!"
    return res.status(errorStatus).json({
        success:false,
        status:errorStatus,
        message:errorMessage,
        stack:err.stack
    })
})

//initializing server
app.listen(8000,() =>{
    console.log("Server Running")
    Connect()
})