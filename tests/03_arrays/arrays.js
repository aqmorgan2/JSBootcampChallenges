/* eslint-disable no-unused-vars */
function multiply(arr) 
{
    ////if there's an entry in the array that is = to 0...
    let newTotal = 1
    
    arr = arr.flat()
    console.log(arr.flat())
  for (let i = 0; i< arr.length; i++)
    {      
      newTotal *= arr[i]
    } return newTotal
console.log(newTotal, arr)
}
  

function includesCopy(arr, searchValue) {
  
  let findArr = []

    for (let i = 0; i< arr.length; i++)
  {
    findArr.push(arr[i])

    if (arr.includes(i) == findArr) 
    {return true}
    else return false
  }
console.log(includesCopy(arr[i]), 0)
}

function inventory(arrI, ) {

  let returnArr = []
  for (let g = 0; g< arr.length; g++)
  {
    
  }
}

function camelCase(str) {
const camelCaseVar = ''

for (let i = 0; i< arr.length; i = i+2)
{
  const firstLetter = ''
  camelCaseVar += str.toUpperCase()
}

}

function joiner(arr1, insertStr = ',') {

  let newArr = ""

  for (i=0; i <= arr1.length - 1; i ++)
  {
  newArr = newArr + arr1[i] + insertStr
  } console.log(newArr) 
  
console.log(joiner['a','b','c'], '+')
}

module.exports = {
  multiply, includesCopy, inventory, camelCase, joiner,
};
