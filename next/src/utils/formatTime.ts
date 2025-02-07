const formatTime = (timeString: string) => {
	const splitTimeString = timeString.split(":");
	return `${splitTimeString[0]}:${splitTimeString[1]}`;
};

export default formatTime;