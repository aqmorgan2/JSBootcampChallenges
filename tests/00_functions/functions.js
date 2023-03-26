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
  let total = numA + numB + numC + numD + numE
  return total
}

console.log(addUnknown(14, 15, 18))



function evenOrOdd(num1) 
{ console.log(num1)
    const rem = num1 % 2
    if (rem == 0) {
      return 'even'
  } else 
return 'odd'
}
console.log(evenOrOdd(-10))


function operator (num1, num2, num3)
{
 // if (num1 == 0 && num2 == 0 && num3 == 0)
   // {return 'add and subtract and multiply because the numbers are 0, 0, 0'}
    //else if (num1 == 1 && num2 == 1 && num3 == 1)
    //{return 'multiply and divide because the numbers are 1,1,1'}
    //else if (num1 == 2, num2 == 2, num3 == 4)
    //{return 'add and multiply because the numbers are 2,2,4'}
  //else 
    if (num1 + num2 == num3)
    {return 'plus'}
    else if (num1 - num2 == num3)
    {return 'minus'}
    else if (num1 / num2 == num3)
    {return 'divide'}
    else if (num1 * num2 == num3)
    {return 'multiply'}
  return null
  //'NULL: 3rd number is not the sum, difference, product, or dividend of the 1st 2 numbers'
}

console.log(operator(1,2,5))

module.exports = {
  max, addUnknown, evenOrOdd, operator,
};
