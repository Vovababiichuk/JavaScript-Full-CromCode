const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
export const dayOfWeek = (date, days) => {
	const day = new Date(date).getDate();
	const dateInFuture = new Date(date).setDate(day + days);
	console.log(weekDays[new Date(dateInFuture).getDay()]);
}

dayOfWeek(new Date(2024, 0, 1), 14)