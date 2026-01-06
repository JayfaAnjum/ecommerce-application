const ErrorHandler = require("../utils/errorHandler");
const User = require("../models/userModel");
const catchAsyncError = require("./catchAsyncError");
const jwt = require("jsonwebtoken");

exports.isAuthenticatedUser = catchAsyncError(async (req, res, next) => {
  let token;

  // 1️⃣ From cookies
  if (req.cookies?.token) {
    token = req.cookies.token;
  }

  // 2️⃣ From Authorization header
  if (!token && req.headers.authorization?.startsWith("Bearer ")) {
    token = req.headers.authorization.split(" ")[1];
  }

  // ❌ No token
  if (!token) {
    return next(
      new ErrorHandler("Login first to handle this resource", 401)
    );
  }

  // ✅ Verify token
  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  // ✅ Check user exists
  const user = await User.findById(decoded.id);

  if (!user) {
    return next(
      new ErrorHandler("User no longer exists", 401)
    );
  }

  req.user = user;
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
