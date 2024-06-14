function sortAsc(arr) {
	if (Array.isArray(arr)) {
		let n = arr.length;
		for (let i = 0; i < n - 1; i++) {
			for (let j = 0; j < n - i - 1; j++) {
				if (arr[j] > arr[j + 1]) {
					let temp = arr[j];
					arr[j] = arr[j + 1];
					arr[j + 1] = temp;
				}
			}
		}
		return arr;
	} else {
		return null;
	}
}

console.log(sortAsc([22, 5, 78, 10, 7, 21, 98, 3, -1]));
// [ -1,  3,  5,  7, 10, 21, 22, 78, 98 ]

function sortDesc(arr) {
	if (Array.isArray(arr)) {
		let n = arr.length;
		for (let i = 0; i < n - 1; i++) {
			for (let j = 0; j < n - i - 1; j++) {
				if (arr[j] < arr[j + 1]) {
					let temp = arr[j];
					arr[j] = arr[j + 1];
					arr[j + 1] = temp;
				}
			}
		}
		return arr;
	} else {
		return null;
	}
}

console.log(sortDesc([22, 5, 78, 10, 7, 21, 98, 3, -1]));
// [ 98, 78, 22, 21, 10, 7,  5,  3, -1 ]


