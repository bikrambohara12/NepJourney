// import multer from "multer";

// const storage = multer.diskStorage({
//     filename: function(req,file,callback){
//         callback(null,file.originalname)
//     }
// })

// const upload = multer({storage})

// export default upload



import multer from "multer";
import path from "path";

// Define destination folder
const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, "uploads/"); 
    },
    filename: function (req, file, callback) {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1E9);
        const ext = path.extname(file.originalname);
        callback(null, uniqueSuffix + ext);
    }
});

const upload = multer({ storage });

export default upload;



