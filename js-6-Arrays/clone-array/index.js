function cloneArr(arr) {
	if (Array.isArray(arr)) {
		return [...arr];
	} else {
		return null;
	}
}

console.log(cloneArr([33, 54, 67, 23]));