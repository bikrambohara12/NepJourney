import jwt from 'jsonwebtoken';

const authUser = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({ success: false, message: "Not authorized, login again" });
    }

    const token_decode = jwt.verify(token, process.env.JWT_SECRET);

    // Instead of modifying req.body, attach userId to req directly
    req.userId = token_decode.id;

    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ success: false, message: error.message });
  }
};

export default authUser;
