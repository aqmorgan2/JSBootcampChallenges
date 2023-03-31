function doubler(arrOfNums) {
  //let arrOfNums = [2,4,6,8]

 const doublerArr = arrOfNums.map(num => {
  return num * 2

 }) 
 return doublerArr
 
 console.log(doubler)
}

function mapCap(newArr) {

  const capArr = newArr.map(userStrings => {
    console.log(userStrings)
    return userStrings.toUpperCase()
  //  return userObj.firstname.toUppercase()
  })
  return capArr

  console.log(mapCap)
}

 // for (i =0; i <= Array.length - i; i ++)
 // { 
  //  const capped  = mapCap()
   // if(NAME OF ARRAY[i].OBJECT === 'ocean')
 //   {
     // const capped  = mapCap.OBJECT.toUpperCase()
  //  }


 //   }



function canRideTheRide(canRide) {
//// use the .map() function...
///return a string if it is false and if true
const rideArray = canRide.map( rideList => {
  if (rideList.age < 17)
  {
  console.log('Sorry, ' + rideList.name + ' cannot ride the ride')
  } else console.log(rideList.name + ' can ride the ride')
  return rideList.age < 17
}) 
console.log(rideArray)
}

//console.log(rideArray)


//const rideArr += canRide.map( canRide.age >= 18)
// console.log(rideArr)
// return rideArr
//}

function indAndVal(origArray) {
// use "   const ______ = ORIGARRAY.filter ( array name, index)"
//const Arr1 = origArray.filter( indexandValue => {
 // console.log(indexandValue)
  //return origArray.
const arrReturned = origArray.map ((indexList, index) => {
  console.log(indexList, index)
  return indexList.push(index)

})

}


function filterEvens(numArr) {
//if  array % 2 = 0,,, THEN .... return a list of the even numbers only
let oceCre = []

 if (numArr % 2 == 0 )
  {
   oceCre = numArr.map(num  => {
      console.log(num)
    }) 
  } return oceCre
   // return oceCre.push
  //}
  //console.log(oceCre)
 //}) 
 //return oceCre
//numArr.filter(

//if (oceCre % 2 === 0)
//{
//oceCre === numArr
//console.log(oceCre)
//}
//return filterEvens
//})
console.log(filterEvens)
}

function gmailSearch() {
// call filter on this one
//
//const 

}

function getCart() {
//skip or try 
}

function findGreater(foundGreater) {

}

module.exports = {
  doubler,
  mapCap,
  canRideTheRide,
  indAndVal,
  filterEvens,
  gmailSearch,
  getCart,
  findGreater,
};
