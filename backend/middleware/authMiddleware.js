import jwt from "jsonwebtoken";
import User from "../model/userModel.js";

const protect = async (req, res, next) => {
  let token;

  token = req.cookies.jwt;

  try {
    if (!token) {
      return res.status(401).json({ message: "Not authorized, token failed" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = await User.findById(decoded.userId).select("-password");

    next();
  } catch (error) {
    res.status(401).json({ message: "Not authorized, no token" });
  }
};

export { protect };
