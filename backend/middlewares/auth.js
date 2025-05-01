const jwt = require('jsonwebtoken');

const verifyAdminToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1]; // Extract token from "Authorization" header
  if (!token) {
    return res.status(403).json({ success: false, message: 'No token provided' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ success: false, message: 'Failed to authenticate token' });
    }
    req.user = decoded; // Add decoded user info to request object
    next(); // Allow access to the next middleware or route handler
  });
};

module.exports = verifyAdminToken;
