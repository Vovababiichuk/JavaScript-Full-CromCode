const getSubArray = (arr, numberOfElements) => {
	let newArr = [];
	for (let i = 0; i < numberOfElements; i++) {
		newArr.push(arr[i]);
	}
	return newArr;
};

console.log(getSubArray([11, 4, 8, 3], 2));
// Output: [11, 4]

console.log(getSubArray([1, 2, 3, 4, 5], 3));
// Output: [1, 2, 3]
