export const studentsBirthDays = students => {
	const monthMap = students.reduce((acc, { name, birthDate }) => {
		const date = new Date(birthDate)
		const monthName = new Intl.DateTimeFormat('en', { month: 'short' }).format(
			date
		)

		if (!acc[monthName]) {
			acc[monthName] = []
		}

		acc[monthName].push({ name, birthDate })
		return acc
	}, {})

	for (const month in monthMap) {
		monthMap[month].sort((a, b) => {
			const year = new Date(a.birthDate).getFullYear()
			const year2 = new Date(b.birthDate).getFullYear()
			return year2 - year
		})
		monthMap[month] = monthMap[month].map(student => student.name)
	}

	return monthMap
}

console.log(
	studentsBirthDays([
		{ name: 'Tom', birthDate: '01/15/2010' },
		{ name: 'Ben', birthDate: '01/17/2008' },
		{ name: 'Sam', birthDate: '03/15/2010' },
	])
)
