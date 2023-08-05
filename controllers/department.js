import Department from "../models/Department.js"

//creating new Department
export const createDepartment = async (req,res,next) => {
    const newDepartment = new Department(req.body)

    try{
        const savedDepartment = await newDepartment.save()
        res.status(200).json(savedDepartment)

    }catch(err){
        next(err)
    }
}

//update department
export const updateDepartment = async (req,res,next) => {
    try{
        const updatedDepartment = await Department.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(updatedDepartment)

    }catch(err){
        next(err)
    }
}

//get a department
export const getDepartment = async (req,res,next) => {
    try{
        const department = await Department.findById(req.params.id)
        res.status(200).json(department)

    }catch(err){
        next(err)
    }
}

//delete a department
export const deleteDepartment = async(req,res,next) => {
    try{
        await Department.findByIdAndDelete(req.params.id)
        res.status(200).json("department  has been deleted successifully")

    }catch(err){
        next(err)
    }
}

//get all departments
export const getAllDepartments = async (req,res,next) => {
    try{
        const departments = await Department.find()
        res.status(200).json(departments)

    }catch(err){
        next(err)
    }
}