function squareArray(arr) {
	let newArr = [];
	if (Array.isArray(arr)) {
		for (let i of arr) {
			newArr.push(i ** 2);
		}
	} else {
		return null
	}
	return newArr;
}

console.log(squareArray([1, 10, 9, 11])); // ==> [1, 100, 81, 121]
console.log(squareArray([10, 0, -4])); // ==> [100, 0, 16]
console.log(squareArray([1])); // ==> [1]
