import  express from 'express'
import cors from 'cors'
import { Sequelize,DataTypes, } from 'sequelize'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import {ivcoachingdbconnection,sequelize} from './config/dbconfig.js'
import { StudentAdmisionModel } from'./models/StudentAdmisionModel.js'
import { router } from './routes/rout.js'


dotenv.config()
const app=express()
app.use(bodyParser.json())
app.use(cors())


//   }


app.use("/",router)

app.listen(()=>{
  console.log(`server is listining on port`)
  ivcoachingdbconnection();
  StudentAdmisionModel.sync({})
})
