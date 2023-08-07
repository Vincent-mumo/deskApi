import Staff from "../models/Staff.js"

//update staff
export const updateStaff = async (req,res,next) => {
    try{
        const updatedStaff = await Staff.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(updatedStaff)

    }catch(err){
        next(err)
    }
}

//get a staff
export const getStaff = async (req,res,next) => {
    try{
        const staff = await Staff.findById(req.params.id)
        res.status(200).json(staff)

    }catch(err){
        next(err)
    }
}

//delete a staff
export const deleteStaff = async(req,res,next) => {
    try{
        await Staff.findByIdAndDelete(req.params.id)
        res.status(200).json("staff has been deleted successifully")

    }catch(err){
        next(err)
    }
}

//get all staffs
export const getAllStaff = async (req,res,next) => {
    try{
        const staffs = await Staff.find()
        res.status(200).json(staffs)

    }catch(err){
        next(err)
    }
}

//count employees based on gender 
export const genderCount = async(req, res, next) => {
    try {
        const maleCount = await Staff.countDocuments({ gender: "male" })
        const femaleCount = await Staff.countDocuments({ gender: "female" })

        res.status(200).json([
            { gender: "male", count: maleCount },
            { gender: "female", count: femaleCount }
        ])

    } catch (err) {
        next(err)
    }
}