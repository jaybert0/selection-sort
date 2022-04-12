function selectionSort(arr) {
  const newArr=[];
  while (arr.length>0) {
    min=Math.min(...arr)
    let index = arr.indexOf(min)
    console.log(index)
    newArr.push(min)
    arr.splice(index, 1)

  }
  // type your code here
  return newArr;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSort([3, -1, 5, 2]));

  console.log("");

  // BENCHMARK HERE, and print the average runtime
  const longInput = [];

  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.random());
  }
}

module.exports = selectionSort;

// Please add your pseudocode to this file
// And a written explanation of your solution
