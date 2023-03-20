/* eslint-disable arrow-body-style */
/* eslint-disable consistent-return */
function max (num1 = 0, num2 = 0, num3 = 0) {
  if ((num1 > num2) && (num1 > num3))
  {
    return num1
  }else if((num3 > num2) && (num3 > num1))
        {
        return num3
        }
        else return num2
  }
  console.log(max(-40, -1, -15))
  

function addUnknown(numA = 0, numB = 0, numC = 0, numD = 0, numE = 0) 
{
  total = numA + numB + numC + numD + numE
  return total
}

console.log(addUnknown(14, 15, 18))



function evenOrOdd(num1) 
{
    const rem = num1 % 2
    if (rem == 0) {
        console.log (num1, ' is even')
  } else console.log(num1, ' is odd')
return rem
}
console.log(evenOrOdd(-10))


function operator() {

}

module.exports = {
  max, addUnknown, evenOrOdd, operator,
};
