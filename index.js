// Add your functions here
function map(array, callBack) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    newArray.push(callBack(element));
  }
  return newArray;
}
