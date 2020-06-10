// Add your functions here
function map(array, callBack) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    newArray.push(callBack(element));
  }
  return newArray;
}


function reduce(array, callBack, startingPoint) {
  let val;
  if (startingPoint !== undefined) {
    val = startingPoint;
    for (const element of array) {
      val = callBack(val, element);
    }
  } else {
    val = array[0];
    array = array.slice(1);
    for (const element of array) {
      val = callBack(val, element);
    }
  }
  return val;
}