const jwt = require("jsonwebtoken");
const JWT_SECRET = "Karanisgooboy";

const fetchuser = (req, res, next) => {
  // get the user from jwt token and add idto request object
  const token = req.header("auth-token");
  if (!token) {
    res.status(401).send({ error: "please authenticate using valid token" });
  }

  try {
    const data = jwt.verify(token, JWT_SECRET);
    console.log("********** Token ****************", token);
    req.user = data.user;
    next();
  } catch (error) {
    res.status(401).send({ error: "some error" });
  }
};
module.exports = fetchuser;
