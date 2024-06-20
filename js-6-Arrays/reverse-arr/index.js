function reverseArray(arr) {
  if (Array.isArray(arr)) {
    const reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      reversed.push(arr[i]);
    }
    return reversed;
  } else {
    return null;
  }
}

console.log(reverseArray([22, 45, 67, 89]));

// function reverseArray(arr) {
// 	if (Array.isArray(arr)) {
// 		const numbers = [...arr];
// 		return numbers.reverse();
// 	} else {
// 		return null
// 	}
// }
