function validator(string) {
  const opencurlies = string.match(/{/).length;
  const closecurlies = string.match(/}/).length;
  const openbrackets = string.match(/[[]/).length;
  const closebrackets = string.match(/]/).length;
  const openparens = string.match(/[(]/).length;
  const closeparens = 1 * (string.match(/[)]/).length);
  
  if(opencurlies === closecurlies && openbrackets === closebrackets && openparens === closeparens) return true;

  return false;
}

module.exports = { validator };

let bunchaBrackets = '{} [] ()';

console.log(validator(bunchaBrackets));





