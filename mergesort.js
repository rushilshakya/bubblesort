function split(wholeArray) {
  /* your code here to define the firstHalf and secondHalf arrays */
  let halfLength = Math.floor(wholeArray.length / 2);

  let firstHalf = wholeArray.slice(0, halfLength);
  let secondHalf = wholeArray.slice(halfLength, wholeArray.length);

  return [firstHalf, secondHalf];
}

function merge(array1, array2) {
  let returnArray = [];

  while (array1.length > 0 && array2.length > 0) {
    if (array1[0] > array2[0]) returnArray.push(array2.shift());
    else returnArray.push(array1.shift());
  }

  returnArray =
    array1.length === 0
      ? returnArray.concat(array2)
      : returnArray.concat(array1);

  return returnArray;
}

function mergeSort(array) {
  /* your code here */
  if (array.length <= 1) return array;

  let [left, right] = split(array);
  let mergedArray = merge(mergeSort(left), mergeSort(right));
  return mergedArray;
}
