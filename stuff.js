function adder(a,b) {
  return `The sum of the 2 number is ${a+b}`;
}

var pi = 3.142

function checkWheterEven(a) {
  if (a % 2 === 0) {
    return 'Even';
  } else {
    return "Odd";
  }
  return "Not a number";
}
module.exports.adder = adder;
module.exports.checkWheterEven = checkWheterEven;
module.exports.pi = pi;
