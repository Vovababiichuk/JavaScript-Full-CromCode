function getSpecialNumbers(from, to) {
	let arr = [];
	for (let i = from; i <= to; i++) {
		if (i % 3 === 0) {
			arr.push(i);
		}
	}
	return arr;
}

console.log(getSpecialNumbers(1, 10)); // ==> [3, 6, 9]
console.log(getSpecialNumbers(-10, 10)); // ==> [-9, -6, -3, 0, 3, 6, 9]
console.log(getSpecialNumbers(1, 2)); // ==> [ ]
