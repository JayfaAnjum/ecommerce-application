const ErrorHandler = require("../utils/errorHandler");
const User = require("../models/userModel");
const catchAsyncError = require("./catchAsyncError");
const jwt = require("jsonwebtoken");

exports.isAuthenticatedUser = catchAsyncError(async (req, res, next) => {
  let token;

  // 1️⃣ From cookies (Docker / same-site)
  if (req.cookies && req.cookies.token) {
    token = req.cookies.token;
  }

  // 2️⃣ From Authorization header (Vercel / production)
  if (!token && req.headers.authorization) {
    if (req.headers.authorization.startsWith("Bearer ")) {
      token = req.headers.authorization.split(" ")[1];
    }
  }

  // ❌ No token found
  if (!token) {
    return next(
      new ErrorHandler("Login first to handle this resource", 401)
    );
  }

  // ✅ Verify token
  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  req.user = await User.findById(decoded.id);

  next();
});

exports.authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new ErrorHandler(`Role ${req.user.role} is not allowed`, 403)
      );
    }
    next();
  };
};
