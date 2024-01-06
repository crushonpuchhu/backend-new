import  express  from "express";
import 'dotenv/config'
import cors from 'cors'

const app=express();

const port = process.env.PORT;
 
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))
app.use(express.json({limit: "306kb"}))
app.use(express.urlencoded({extended: true, limit: "306kb"}))
app.use(express.static("public"))

import router from './routes/user.route.js'

app.use("/api/v1/users",router);
// http://loaclhost:8000/api/v1/user











app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
})

 export default app