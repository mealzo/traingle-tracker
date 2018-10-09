function Triangle(side1, side2, side3) {
  this.side1 = side1;
  this.side2 = side2;
  this.side3 = side3;
};
function triangleType(){
  if ((side1===side2) && (side1===side3)){
    return ("You are an equilateral triange!")
  } else if ((side1!==side2) && (side1!==side3) && (side2!==side3)){
    return ("You are a scalene triange!")
  } else {
    return ("You are an isosceles triangle!")
  }
