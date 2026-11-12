require('dotenv').config()
const sequelize=require('./config/database')
const express = require('express')
const router = require('./route/productRouter')

const app = express()
app.use(express.json())
app.use (router)


const dbTesting =async()=>{
   try {
      await sequelize.authenticate();
      console.log("Connection has been established successfully.");
   } catch (error) {
      console.error("Unable to connect to the database:", error.message);
   }
}

dbTesting()

const PORT = process.env.PORT;
app.listen(PORT , ()=>{console.log(`Server is running on port: ${PORT}`)})