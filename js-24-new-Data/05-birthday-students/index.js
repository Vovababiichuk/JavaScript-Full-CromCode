export const studentsBirthDays = students => {
	return students.reduce((acc, { name, birthDate }) => {
		const date = new Date(birthDate)
		const monthName = new Intl.DateTimeFormat('en', { month: 'short' }).format(
			date
		)

		if (!acc[monthName]) {
			acc[monthName] = []
		}

		acc[monthName].push(name)
		return acc
	}, {})
}

console.log(
	studentsBirthDays([
		{ name: 'Den', birthDate: '01/15/2010' },
		{ name: 'John', birthDate: '10/10/2010' },
		{ name: 'Ann', birthDate: '12/12/2010' },
		{ name: 'Mike', birthDate: '01/01/2010' },
	])
)
