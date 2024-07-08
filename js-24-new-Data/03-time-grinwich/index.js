const getGreenwichTime = (date) => {
	return date.toUTCString()
}

getGreenwichTime(new Date())