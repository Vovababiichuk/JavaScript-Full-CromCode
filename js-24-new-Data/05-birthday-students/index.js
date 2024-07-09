export const studentsBirthDays = students => {
  return students.sort((a, b) => {
    const dayOfWeekA = new Date(a.birthDate).getDay();
    const dayOfWeekB = new Date(b.birthDate).getDay();
    return dayOfWeekB - dayOfWeekA;
  });
};

console.log(
  studentsBirthDays([
    { name: 'Den', birthDate: '01/15/2010' },
    { name: 'John', birthDate: '10/10/2010' },
    { name: 'Ann', birthDate: '12/12/2010' },
    { name: 'Mike', birthDate: '01/01/2010' },
  ]),
);
