const fs = require("fs");
const path = require("path");

const dirname = path.dirname(__filename);
const basename = path.basename(__filename);

module.exports = fs.readdirSync(dirname).reduce((acc, fname) => {
  if (basename === fname) return acc;

  fname = fname.replace(".js", "");
  rname = fname === "home" ? "" : fname;

  return { ...acc, [rname]: require(`./${fname}`) };
}, {});
