function getIntervalSum(from, to) {
	let sum  = 0;
	for (let i = from; i <= to; i++) {
		if (i % 2 === 0) {
			sum += i;
		}
	}
	return sum;
}

console.log(getIntervalSum(0, 20)); // ===> 110
console.log(getIntervalSum(20, 25)); // ===> 66
console.log(getIntervalSum(120, 160)); // ===> 2940
