// new Date(0) // Thu Jan 01 1970 03:00:00 GMT+0300 (Eastern European Standard Time)
// Date.now() // 1720456422014 - стільки мілісікунд пройшло з цієї дати (1970....)
// typeof new Date() // object

const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// const getDayOfWeek = (date, days) => {
// 	const day = new Date(date).getDate();
// 	const dateInFuture = new Date(date).setDate(day + days);

// 	return weekDays[new Date(dateInFuture).getDay()];
// }

// const res = getDayOfWeek(new Date(2024, 0, 1), 14)
// console.log(res);

// const date = new Date();
// date.setDate(date.getDate() + 2);
// console.log(date);

//! ====================================================

const formatter = new Intl.DateTimeFormat('en', {
	hour: '2-digit',
	minute: '2-digit',
	hour12: false
})

const getTime = date => formatter.format(date)

console.log(getTime(new Date()))

//! =====================================================

