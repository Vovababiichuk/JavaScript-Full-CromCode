
function checker(arr) {
	if (Array.isArray(arr)) {
		let min = arr[0];
		let max = arr[0];

		for (let i = 0; i < arr.length; i++) {
			if (arr[i] < min) {
				min = arr[i];
			}
			if (arr[i] > max) {
				max = arr[i];
			}
		}
		return min + max > 1000;
	} else {
		return null;
	}
}

console.log(checker([34, 56, 20, 78, 99, 465]));

// function checker(arr) {
// 	if (Array.isArray(arr)) {
// 		const minElem = Math.min(...arr);
// 		const maxElem = Math.max(...arr);
// 		const result = minElem + maxElem;
// 		if (result > 1000) {
// 			return true;
// 		} else {
// 			return false;
// 		}
// 	} else {
// 		return null;
// 	}
// }