const checkSum = arr => {
	if (Array.isArray(arr)) {
		let sum = 0;
		for (let i of arr) {
			sum += i;
		}
		return sum > 100 ? true : false;
	} else {
		return null;
	}
};

console.log(checkSum([10, 10, 10])); // ===> false
console.log(checkSum([10, 99, 1])); // ===> true
console.log(checkSum([-6, -3, 200])); // ===> true
