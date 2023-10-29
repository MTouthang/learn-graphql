import mongoose from "mongoose";
import { config } from "dotenv"
import { Sequelize, DataTypes } from "sequelize";

//Mongo connection 
config()
mongoose.connect(process.env.MONGODBURL)
.then(() => console.log("database connected successfully"))
.catch((err) => console.log("Not able not connect to the database", err))

const widgetSchema = new mongoose.Schema({
  name: {
    type: String
  },
  description: {
    typeof: String
  },
  price:{
    type : Number 
  },
  soldout:{
    type: String
  },
  inventory:{
    type: String 
  },
  store:{
    type: Array
  }
})

const Widgets = mongoose.model("widgets", widgetSchema)

export {Widgets}