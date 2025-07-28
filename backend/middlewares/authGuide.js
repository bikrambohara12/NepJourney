
import jwt from 'jsonwebtoken';

// guide authentication middleware

const authGuide = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    const dtoken = authHeader?.split(" ")[1];

    if (!dtoken) {
      return res.status(401).json({ success: false, message: "Not authorized, login again" });
    }

    const token_decode = jwt.verify(dtoken, process.env.JWT_SECRET);
    req.guideId = token_decode.id;
    // const guideId = req.guideId;

    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ success: false, message: "Unauthorized: Invalid token" });
  }
};

export default authGuide;
