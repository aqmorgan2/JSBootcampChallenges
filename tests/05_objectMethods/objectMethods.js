/* eslint-disable no-return-assign */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

const greet = {
  
    firstName: 'Arusha',
    lastName: 'Morgan',
    
    sayHello() {
      return 'Hello, I am ' + greet.firstName
    }
  }

  console.log(greet)
  console.log(greet.sayHello(), greet.firstName)


  //console.log(this.greet(firstName), ' is my name')
 


let calc = {
  total: 0,
  adding: 1,
  subtracting: 1,
  multiplying: 1,
  dividing: 1,
  clear: 0,

  add () {
    total += adding
      return calc.total
  },

  subtract () {
    total -= subtracting
    return calc.total
  },

  multiply: 1,
  divide: 1,
};

calc.adding = 3
console.log(calc.add)

let totalAns = 0
 totalAns += calc.adding
 console.log(totalAns)
 
 totalAns -= calc.subtracting
 console.log(totalAns)
 
 totalAns *= calc.multiply
 console.log(totalAns)

totalAns /= calc.divide
 console.log(totalAns)

 calc.clear

module.exports = { greet, calc };
