function findDivCount(a, b, n) {
	let quantity = 0;
	for (let i = a; i <= b; i++) {
		if (i % n === 0) {
			quantity++;
		}
	}
	return quantity;
}

console.log(findDivCount(2, 8, 4));
console.log(findDivCount(20, 80, 3));
console.log(findDivCount(0, 12, 8));
