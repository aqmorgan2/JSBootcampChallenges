/* eslint-disable no-unused-vars */
function multiply(arr) 
{
    ////if there's an entry in the array that is = to 0...
    let newTotal = 1
    
    arr = arr.flat()

  for (let i = 0; i< arr.length; i++)
    {      
      newTotal *= arr[i]
    } return newTotal
console.log(newTotal)
}
  

function includesCopy(arr, searchValue) {

}

function inventory(arr) {

}

function camelCase(str) {

}

function joiner() {

}

module.exports = {
  multiply, includesCopy, inventory, camelCase, joiner,
};
