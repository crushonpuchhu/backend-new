import mongoose ,{Schema} from "mongoose";
import bcrypt from "bcrypt"

const userData = new Schema({
    username:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    avtar:{
        require:true,
        type:String
    }
},{timestamps:true});



userData.pre("save", async function (next){
    if(!this.isModified("password")) return next()
     this.password = await bcrypt.hash(this.password,10)
    next();
})

userData.methods.isPasswordCorrect= async function (password)
{
    return await bcrypt.compare(password,this.password);
}











export const Userdata = mongoose.model("Userdata",userData);