// input: [{}]
// output: sort [{}]

// 1. iteration array
// 2. get day of week
// 3. Sort students by day of week

const studentsBirthDays = students => {
	return students
		.map(student => ({
			...student,
			dayOfWeek: new Date(student.birthDate).getDay(),
		}))
		.sort((a, b) => a.dayOfWeek - b.dayOfWeek)
}

console.log(
	studentsBirthDays([
		{ name: 'Den', birthDate: '01/15/2010' },
		{ name: 'John', birthDate: '10/10/2010' },
		{ name: 'Ann', birthDate: '12/12/2010' },
		{ name: 'Mike', birthDate: '01/01/2010' },
	])
)
