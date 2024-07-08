const weekDays = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'St', 'Su'];

export const dayOfWeek = (date, days) => {
    const dateInFuture = new Date(date.getTime() + days * 24 * 60 * 60 * 1000);
    return weekDays[dateInFuture.getDay()];
}

console.log(dayOfWeek(new Date(2024, 0, 1), 14));
