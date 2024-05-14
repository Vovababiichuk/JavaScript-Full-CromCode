function uniqueCount(arr) {
	if (Array.isArray(arr)) {
		let newArr = [];
		for (let i of arr) {
			if (!newArr.includes(i)) {
				newArr.push(i);
			}
		}
		return newArr.length;
	} else {
		return null;
	}
}

console.log(uniqueCount([1, 4, 1, 8, 3, 4, 8, 8]));