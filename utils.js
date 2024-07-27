const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");

dotenv.config();

const generateToken = (user) => {
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    process.env.SERVER_JWT_SECRET,{ expiresIn: "24hrs" }
  );
};

const isAuthorized = (req, res, next) => {
  const authorization = req.headers.authorization;
  if(authorization){
    const token = authorization.slice(7, authorization.length); // Bearer XXXXXX get rid of the bearer part it will return the token part.
    jwt.verify(
      token,
      process.env.JWT_SECRET,
      (err, decode) => {
        if(err){
          res.status(401).send({ message: "Invalid Token" });
        }else{
          req.user = decode;
          next();
        }});
  } else {
    res.status(401).send({ message: "Invalid Admin Token" });
  }
};

const isAdmin = (req, res, next) => {
  if(req.user && req.user.isAdmin) {
    return next();
  } else {
    res.status(401).send({ message: "Invalid Admin Token" });
  }
};

module.exports = { 
  generateToken, 
  isAuthorized,
  isAdmin 
};
