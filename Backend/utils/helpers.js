const jwt = require("jsonwebtoken");

exports = {};
exports.getToken = async (_id) => {
  const token = jwt.sign({ identifier: _id }, "ThisKeyIsSupposeToBeSecret");
  return token;
};

module.exports = exports;
