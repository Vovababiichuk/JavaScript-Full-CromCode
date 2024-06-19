function removeDuplicates(arr) {
  if (Array.isArray(arr)) {
    let newArr = [];
    for (let i of arr) {
      if (!newArr.includes(i)) {
        newArr.push(i);
      }
    }
    return newArr;
  } else {
    return null;
  }
}

console.log(removeDuplicates([22, 4, 65, 65, 65, 22, 67, 4, 5, 87, 67]));
console.log(removeDuplicates([22, -4, 65, 65, -65, 22, 67, -4, 5, 87, 67, 0, 0]));
