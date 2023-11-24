const crypto = require("crypto");

function generateUniqueId() {
  const bytes = crypto.randomBytes(16);
  return bytes.toString("hex");
}

module.exports = {
  generateUniqueId,
};
