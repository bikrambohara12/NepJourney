import jwt from 'jsonwebtoken'


// admin authentication middleware
const authAdmin = async(req,res,next) =>{
    try {
        
        const {atoken} = req.headers
        if (!atoken) {
            return res.json({success:false,message:"not Authorized login Again"})
        }
        const token_decode = jwt.verify(atoken,process.env.JWT_SECRET)

        if (token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
            return res.json({success:false,message:"not Authorized login Again"})   
        }
//         if (
//     !token_decode ||
//     token_decode.email !== process.env.ADMIN_EMAIL ||
//     token_decode.role !== "admin"
// ) {
//     return res.json({success:false,message:"not Authorized login Again"})
// }
        next()

    } catch (error) {
         console.log(error)
     res.json({success:false,message:error.message})        
    }

}

export default authAdmin










// import jwt from 'jsonwebtoken';

// // admin authentication middleware
// const authAdmin = async (req, res, next) => {
//     try {
//         const { atoken } = req.headers;

//         if (!atoken) {
//             return res.json({ success: false, message: "Not authorized login again" });
//         }

//         const token_decode = jwt.verify(atoken, process.env.JWT_SECRET);

//         if ( !token_decode || token_decode.role !== "admin" ||   token_decode.email !== process.env.ADMIN_EMAIL
//         ) {
//             return res.json({ success: false, message: "Not authorized login again" });
//         }

//         next();
//     } catch (error) {
//         console.log("Auth Error:", error.message);
//         return res.json({ success: false, message: "Not authorized login again" });
//     }
// };

// export default authAdmin;
