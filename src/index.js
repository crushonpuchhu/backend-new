import app from './app.js';
import 'dotenv/config'
import DatabaseConnect from "./DB/indexdb.js";








 
  DatabaseConnect();
 








// const asyncHandler = (requestHandler) => {
//   return (req, res, next) => {
//       Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
//   }
// }


// export { asyncHandler }