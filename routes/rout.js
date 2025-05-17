import express from 'express'
import {getAdmisionData, getAdmisionDataById,insertAdmisionData} from "../controllers/StudentAdmisionController.js"
const router=express.Router()

router
.post('/admision',insertAdmisionData)
.get('/AllStudents',getAdmisionData)
.get('/StudentAdmisionDataById/:id',getAdmisionDataById)
export {router}
