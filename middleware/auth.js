// simple example of auth using JWT token, which will be passed to all protected routes, and will be used in routes
// **********************************************************************

// const jwt = require("jsonwebtoken");

// const config = process.env;

// const verifyToken = (req, res, next) => {
//   const token =
//     req.body.token || req.query.token || req.headers["x-access-token"];

//   if (!token) {
//     return res
//       .status(403)
//       .send(
//         "A token is required to perform this operation, Try after logging in"
//       );
//   }
//   try {
//     const decoded = jwt.verify(token, config.TOKEN_KEY);
//     req.user = decoded;
//   } catch (err) {
//     return res.status(401).send("Invalid Token, Try logging in again");
//   }
//   return next();
// };

// just and illustration

const sampleAuthFunction = (req, res, next) => {
  next();
};
module.exports = sampleAuthFunction;
