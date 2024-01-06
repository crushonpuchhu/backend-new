import mongoose from "mongoose";
import 'dotenv/config'
import DB_NAME from "../constarant.js";

 
 export default async function DatabaseConnect()
{      
    try {
        const connect = mongoose.connect(`${process.env.DB_LINK}/${DB_NAME}`);
        const respose= await connect
        console.log("-------DATABASE CONNECT------");
        
        
    } catch (error) {
         console.log("error hai:-",error);
    }
       

}
