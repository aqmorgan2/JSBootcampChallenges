/* eslint-disable no-restricted-syntax */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
function deleteProp(obj, prop) {
  delete obj[prop]
  console.log(obj)
  return obj
}

function numObjectProps(obj) {
  const keys = Object.keys(obj)
  return keys.length
}

function shoppingCart(cart) {
  let total = 0
  for (let i = 0; i < cart.length; i++) {
    const cartItem = cart[i]
    total += cartItem.amount
  }
  return total
}

function compareObjects(obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false}

    for (const key in obj1) {
      if (obj1[key] !== obj2[key]) {
        return false
      }
    }
    return true
  }

module.exports = {
  compareObjects, deleteProp, numObjectProps, shoppingCart,
};
