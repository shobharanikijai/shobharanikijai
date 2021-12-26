var a = 2, b = 5;
var N = 7;
var nTerms = (first, second, num) => {
   var diff = second - first;
   var fact = (num - 1) * diff;
   var term = first + fact;
   return term;
};
console.log('The '+N+'th term is',nTerms(a, b, N));