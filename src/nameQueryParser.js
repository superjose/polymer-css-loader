/**
 * A simple function that allows the user to specify a distinct
 * name for the element registration.
 * This takes the whole query and looks for a name parameter. 
 * It then parses it so it uses to value to call: element.register('the-value')
 * 
 * Returns:
 * If there's no query => [name] (Gets replaced by interpolateName)
 * Otherwise => The value of the query.
 * 
 */

module.exports = function (query) {
  const str = query;
  const nameStart = str.indexOf('name=');
  // If there is no query, return the actual
  // name of the file.
  if (nameStart === -1) {
    return '[name]';
  }

  // Checks if there is an additional query 
  // or is just the full string.
  const additionalQuery = str.indexOf('&');

  
  const nameEnd = additionalQuery === -1 
                ?  str.length 
                : additionalQuery;

  // This will be the name of the registered element.
  return str.substring(nameStart + 5, nameEnd)
}