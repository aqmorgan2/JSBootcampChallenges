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
  

function addUnknown() {

}

function evenOrOdd() {

}

function operator() {

}

module.exports = {
  max, addUnknown, evenOrOdd, operator,
};
