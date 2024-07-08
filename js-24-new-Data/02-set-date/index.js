const weekDays = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'St', 'Su'];
export const dayOfWeek = (date, days) => {
	const day = new Date(date).getDate();
	const dateInFuture = new Date(date).setDate(day + days);
	return weekDays[new Date(dateInFuture).getDay()];
}

console.log(dayOfWeek(new Date(2024, 0, 1), 14));