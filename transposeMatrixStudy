// let array = [
// [1, 2, 3],
// [4, 5, 6],
// [7, 8, 9]
// ];

let array =[[1,2,3],[4,5,6]]
// let array = [
//   [1, 2],
//   [3, 4]
// ];
 
let foo = (arr) => {
  for (let i = 0; i < arr.length ; i++) {
    for (let j = 0; j < i; j++) {
 
      
            const tmp = arr[i][j];
            arr[i][j] = arr[j][i];
            arr[j][i] = tmp;
      
 
    }
  }
  return arr;
};

console.log(foo(array));



let transposeMatrix = (matrix) => {
  let result = [];
  for (let i = 0; i < matrix[0].length; i++) {
    result.push([]);
    for (let j = 0; j < matrix.length; j++) {
      result[i].push(matrix[j][i]);
    }
  }
  return result;
};
