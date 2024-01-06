import {v2 as cloudinary} from 'cloudinary';
import 'dotenv/config'       
import fs from 'fs'  
          
cloudinary.config({ 
  cloud_name: 'dhisfnuj0', 
  api_key: `${process.env.api_key}`, 
  api_secret: `${process.env.api_secret}` 
});


 async function uploadOnCloudinary(localfilePath)
{
    try {
        if(!localfilePath)return null
        const response = await  cloudinary.uploader.upload(localfilePath,{resource_type:'auto'})
        fs.unlinkSync(localfilePath);
      
        return response;
    } catch (error) {
            fs.unlinkSync(localfilePath);
            return null;
    }

}

export {uploadOnCloudinary}