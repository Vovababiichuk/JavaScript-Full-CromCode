const increaseEvenEl = (arr, delta) => {
	if (Array.isArray(arr)) {
		let newArr = [];
		for (let i of arr) {
			if (i % 2 === 0) {
				newArr.push(i+ delta);
			} else {
				newArr.push(i);
			}
		}
		return newArr;
	} else {
		return null;
	}
};

console.log(increaseEvenEl([2, 5, 6, 8, 11, 9, 4], 20)); // ===> [22, 5, 26, 28, 11, 9, 24]
console.log(increaseEvenEl([7, 11, 1], 10)); // ===> [7, 11, 1]
console.log(increaseEvenEl([], 120)); // ===> []
