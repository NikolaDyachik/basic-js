const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(array) {
  let res = [];
  let name;
  if (!Array.isArray(array)) {
    return false;
  }
  for (const i of array) {
    if (typeof i === "string") {
      name = i.trim().toUpperCase().slice(0, 1);
      res.push(name);
    }
  }
  if (res.length === 0) {
    return false;
  }
  return res.sort().join("");
}

module.exports = {
  createDreamTeam,
};
