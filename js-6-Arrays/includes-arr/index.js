const includes = (arr, num) => {
	for (let i = 0; i < arr.length; i++) {
		if (num === arr[i]) {
			return true
		}
	}
	return false
};

console.log(includes([1, 4, 8, 3], 3)); // ==> true
console.log(includes([1, 4, 8, 3], 5)); // ==> false
console.log(includes([1, 4, 8, 3], 8)); // ==> false
console.log(includes([1, 4, 8, 3], 10)); // ==> false
