/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
function factorial(num) {
 let endNum = 6
let total = 1

for (let i = 1; i <= endNum; i++)
  {
    total = total * (i)   
  } return console.log(total)

}
console.log('===============')

// do not use built in slice method.
function slicer(originalstring, startIdx, endIdx)
{
let newStr = ''
for (let i = startIdx; i< endIdx; i ++)
{
  newStr += originalString[i]
}
return newStr
}



function stringReverse(str) {
  let strV = 'aeiou vowels';

  console.log('the original string was ')

  let spot = strV.length
   
  //console.log('This string is ', spot , ' characters long')


  for (let revIndex = 0; revIndex <= strV.length; revIndex++)
  {
    //this is the line I still need to modify
    let arr1 = (strV.length - 1) - revIndex
    --spot
    
 console.log(strV[arr1])
  } 
  console.log('the orginal string was ', strV)
}

//add the evens
function addTheEvens(num) {
  let num1 = 111
  let total = 0 
  
    for (let ear = 0; ear <= num1; ear += 2)
  {
  total += ear;
  console.log(total)
  } 
  
}

module.exports = {
  factorial, stringReverse, slicer, addTheEvens,
};
