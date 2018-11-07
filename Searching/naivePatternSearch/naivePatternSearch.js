/**
 *
 * @param {string} txt The text in which pattern has to be searched
 * @param {string} pat Pattern to search in string
 * @returns {number} The total count of given pattern occurence in the text
 */
function naiveSearch(txt, pat) {
  let count = 0;
  // Loop over string
  for (let i = 0; i < txt.length; i++) {
    // loop over pattern
    for (let j = 0; j < pat.length; j++) {
      // checks characters doesn't match and break
      if (pat[j] !== txt[i + j]) {
        break;
      }
      // if characters match increase the count
      if (j === pat.length - 1) {
        count++;
      }
    }
  }
  // return count
  return count;
}

module.exports = naiveSearch;
