import type { Message } from "@/data/contacts";

export const isMessageSent = (message: Message) => {
	return message.sent.getTime() > 0;
};

export const isMessageReceived = (message: Message) => {
	return message.received.getTime() > 0;
};

export const isMessageRead = (message: Message) => {
	return message.read.getTime() > 0;
};

export const getMessageStatus = (message: Message) => {
	if (isMessageRead(message)) {
		return "read";
	}
	if (isMessageReceived(message)) {
		return "received";
	}
	if (isMessageSent(message)) {
		return "sent";
	}
	return "pending";
};
