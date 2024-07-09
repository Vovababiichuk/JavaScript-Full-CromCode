export const getDiff = (startDate, endDate) => {
	const diffInMs = Math.abs(startDate - endDate);

	const msInSecond = 1000;
	const msInMinute = msInSecond * 60;
	const msInHour = msInMinute * 60;
	const msInDay = msInHour * 24;

	const days = Math.floor(diffInMs / msInDay);
	const hours = Math.floor((diffInMs % msInDay) / msInHour);
	const minutes = Math.floor((diffInMs % msInHour) / msInMinute);
	const seconds = Math.floor((diffInMs % msInMinute) / msInSecond);

	return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

console.log(getDiff(new Date(2024, 0, 1), new Date(2024, 1, 5)));
