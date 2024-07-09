export const studentsBirthDays = (students) => {
  const monthMap = students.reduce((acc, { name, birthDate }) => {
    const date = new Date(birthDate);
    const monthName = new Intl.DateTimeFormat('en', { month: 'short' }).format(date);

    if (!acc[monthName]) {
      acc[monthName] = [];
    }

    acc[monthName].push({ name, birthDate });
    return acc;
  }, {});

  for (const month in monthMap) {
    monthMap[month].sort((a, b) => {
      const dayA = new Date(a.birthDate).getDate();
      const dayB = new Date(b.birthDate).getDate();
      return dayA - dayB;
    });
    monthMap[month] = monthMap[month].map(student => student.name);
  }

  return monthMap;
};

console.log(
  studentsBirthDays([
    { name: 'Tom', birthDate: '01/15/2010' },
    { name: 'Ben', birthDate: '01/17/2008' },
    { name: 'Sam', birthDate: '03/15/2010' },
  ])
);
