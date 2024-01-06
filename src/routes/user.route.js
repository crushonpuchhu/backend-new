import { Router } from "express";
import { upload } from "../Midelware/multer.middleware.js";
import { registerUser } from "../Controller/user.controller.js";
const router = Router();


router.route("/register").post(upload.fields([
    
    {name:"avtar",
     maxCount:1
    },
    {
        name:"password",
    }
]),registerUser);

router.route("/data").get((req,res)=>{
    res.status(201).json({name:"mittal"})
})

export default router



// http://loaclhost:8000/api/v1/user/register