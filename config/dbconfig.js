
import dotenv from 'dotenv'
import { Sequelize,DataTypes, } from 'sequelize'
dotenv.config()

const INSPIRED_VISION_DATABASE="u681718804_Ivworlds_db"
const USER="u681718804_Guddu"
const HOST="193.203.184.29"
const PASSWORD="Guddu@950258"
const PORT=8081

const sequelize= new Sequelize(
  INSPIRED_VISION_DATABASE,
  USER,
  PASSWORD,{
      host:HOST,
      dialect:'mysql'}
  )


async function  ivcoachingdbconnection (){
   try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
   
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  } 
}

export  {ivcoachingdbconnection,sequelize}