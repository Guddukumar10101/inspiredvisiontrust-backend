import dotenv from 'dotenv'
import { Sequelize,DataTypes, } from 'sequelize'
import { sequelize } from '../config/dbconfig.js'
dotenv.config()

const AdminModel=sequelize.define('AdminData',{
    AdminId:{
        type:DataTypes.STRING,
        primaryKey:true
    },

    Admin:{
        type:DataTypes.STRING,
    },
    PassWord:{
        type:DataTypes.STRING
    }
},{
  freezeTableName:true,timestamps:false
})

export {StudentAdmisionModel}