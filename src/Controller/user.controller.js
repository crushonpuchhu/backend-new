import { asynchandller } from "../Utills/asynchandller.js"
import { apierror } from "../Utills/apierror.js"
import {Userdata} from "../models/user.module.js"
import { uploadOnCloudinary } from "../Utills/Cloudinary.js"
import apiresponse from "../Utills/apiresponse.js"

const registerUser= asynchandller( async (req,res)=>{
    // get user details from frontend
    // validation - not empty
    // check if user already exists: username, email
    // check for images, check for avatar
    // upload them to cloudinary, avatar
    // create user object - create entry in db
    // remove password and refresh token field from response
    // check for user creation
    // return res


  const {username,password} = req.body
////
  if (
    [username, password].some((field) => field?.trim() === "")
) {
    throw new apierror(400, "All fields are required")
}
/////
const existedUser = await Userdata.findOne({
    $or: [{ username }]
})
 if(existedUser)
 {
    throw new apierror(409,"user already exites")
 }

/////
///////try to understand again
const avtarlocalpath= req.files?.avtar[0]?.path;
 if(!avtarlocalpath)
 {
    throw new apierror(400," image file must requried")
 }

 const avtar = await uploadOnCloudinary(avtarlocalpath);
 
 if(avtar==null)
 {
      throw new apierror(400,"avtar file is requriied")
 }

 const user= Userdata.create({
    username:username,
    password:password,
    avtar:avtar.url
 })


 const createduser= await Userdata.findById(user._id).select(
    " -password "                                                     ///error in this line 
 )

 console.log(createduser);//get null value 

 if (!createduser) {
    throw new apierror(500, "Something went wrong while registering the user")
}

return res.status(201).json(
    new apiresponse (200, createduser, "User registered Successfully")
)

})

export {registerUser};