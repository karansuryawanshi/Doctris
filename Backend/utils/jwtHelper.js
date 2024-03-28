const jwt = require("jsonwebtoken");

const secretKey = "suryawanshikaran";
exports = {};
exports.createToken = (_id) => {
  console.log("Secret Key is", secretKey);
  return jwt.sign({ _id }, secretKey, { expiresIn: "3d" });
};
exports.verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, secretKey);
    return decoded;
  } catch (error) {
    return error;
  }
};

module.exports = exports;
