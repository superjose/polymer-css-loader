/**
 * Checks whether the query contains ?skip or not.
 */

function skip (query) {
  return /\B(\?|&)skip\b/gi.test(query);
}

/**
 * If it contains "include", returns true.
 * @param {*} query The query that goes after the .css|.sass|.less
 * extension 
 */
function include(query) {
  return /\B(\?|&)include\b/gi.test(query);
}

module.exports = { skip, include };

