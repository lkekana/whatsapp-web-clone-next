import type { Message } from "@/data/contacts";

export const formatTime = (timeString: string) => {
	const splitTimeString = timeString.split(":");
	return `${splitTimeString[0]}:${splitTimeString[1]}`;
};

export const formatDateTime = (date: Date) => {
	const hours = date.getHours().toString().padStart(2, "0");
	const minutes = date.getMinutes().toString().padStart(2, "0");
	return `${hours}:${minutes}`;
};

export const dateLabel = (date: Date) => {
	const today = new Date();
	const yesterday = new Date(today);
	yesterday.setDate(yesterday.getDate() - 1);

	if (date.toDateString() === today.toDateString()) {
		return "TODAY";
	}
	if (date.toDateString() === yesterday.toDateString()) {
		return "YESTERDAY";
	}
	// return dates like "04/06/2021"
	return date.toLocaleDateString("en-GB");
};

export const dateLabelledMessages = (
	messages: Message[],
): Record<string, Message[]> => {
	const result: Record<string, Message[]> = {};
	const sortedMessages = messages.sort(
		(a, b) => a.sent.getTime() - b.sent.getTime(),
	);
	for (const message of sortedMessages) {
		const label = dateLabel(message.sent);
		if (!result[label]) {
			result[label] = [];
		}
		result[label].push(message);
	}
	return result;
};
