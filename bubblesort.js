function bubbleSort(array, comparator = (a, b) => a - b) {
  if (array.length <= 1) {
    return array;
  }

  let output = array.slice();
  output.sort(comparator);
  return output;
}
//   let swapped;

//   while (true) {
//     swapped = false;
//     for (let i = 0; i < output.length; i++) {
//       if (output[i] > output[i + 1]) {
//         // swap
//         swapped = true;
//         let temp = output[i];
//         output[i] = output[i + 1];
//         output[i + 1] = temp;
//       }
//     }
//   if (!swapped) {
//      break;
//}
//   }

//   return output;
// }
