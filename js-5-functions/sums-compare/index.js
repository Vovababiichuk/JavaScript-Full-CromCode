function sum(from, to) {
  // put your code here
	let res = 0;
	for (let i = from; i <= to; i++) {
		res += i;
	}
	return res;
}

function compareSums(firstFrom, firstTo, secondFrom, secondTo) {
  // hint: you should use sum function inside compareSums
  // put your code here
	const sumFirst = sum(firstFrom, firstTo);
	const sumSecond = sum(secondFrom, secondTo);
	return sumFirst > sumSecond;
}

// examples
console.log(sum(5, 10)); // ===> 45
console.log(sum(11, 11)); // ===> 11

console.log(compareSums(5, 10, 5, 10)); // ===> false
console.log(compareSums(5, 15, 3, 5)); // ===> true
console.log(compareSums(-2, 5, 5, 9)); // ===> false
