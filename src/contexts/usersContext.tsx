"use client";
import { createContext, useContext, useEffect, useState } from "react";
import contacts, { pinnedUserUUIDs, type Message, type User } from "@/data/contacts";
import { useSocketContext } from "./socketContext";
import type { ReactNode } from "react";
import { isMessageRead } from "@/utils/messages";
import type { StaticImageData } from "next/image";

const UsersContext = createContext<{
	users: User[];
	setUserAsUnread: (userId: string) => void;
	addNewMessage: (userId: string, message: string) => void;
	contactPinned: (userId: string) => boolean;
	readUserMessages: (userId: string) => void;
	numUnreadMessages: (userId: string) => number;
	getMediaOnly: (userId: string) => StaticImageData[];
}>({
	users: [],
	setUserAsUnread: () => {},
	addNewMessage: () => {},
	contactPinned: () => false,
	readUserMessages: () => {},
	numUnreadMessages: () => 0,
	getMediaOnly: () => [],
});

const useUsersContext = () => useContext(UsersContext);

const UsersProvider = ({ children }: { children: ReactNode }) => {
	const socket = useSocketContext();

	const [users, setUsers] = useState<User[]>(contacts);
	console.log("users", users);

	const _updateUserProp = (
		userId: string,
		prop: string,
		value: number | boolean,
	) => {
		setUsers((users) => {
			const usersCopy = [...users];
			const userIndex = users.findIndex((user) => user.id === userId);
			const userObject = usersCopy[userIndex];
			usersCopy[userIndex] = { ...userObject, [prop]: value };
			return usersCopy;
		});
	};

	const setUserAsTyping = (data: { userId: string }) => {
		const { userId } = data;
		_updateUserProp(userId, "typing", true);
	};

	const setUserAsNotTyping = (data: { userId: string }) => {
		const { userId } = data;
		_updateUserProp(userId, "typing", false);
	};

	const fetchMessageResponse = (data: { userId: string; response: string }) => {
		setUsers((users) => {
			const { userId, response } = data;

			const userIndex = users.findIndex((user) => user.id === userId);
			const usersCopy = JSON.parse(JSON.stringify(users));
			const newMsgObject: Message = {
				content: response,
				images: [],
				sender: userId,
				sent: new Date(),
				received: new Date(0),
				read: new Date(0),
			};

			usersCopy[userIndex].messages.TODAY.push(newMsgObject);

			return usersCopy;
		});
	};

	const contactPinned = (userId: string) => {
		const contact = users.find((user) => user.id === userId);
		if (!contact) return false;
		return pinnedUserUUIDs.includes(contact.id);
	};

	const readUserMessages = (userId: string) => {
		setUsers((users) => {
		  const usersCopy = [...users];
		  const userIndex = users.findIndex((user) => user.id === userId);
		  if (userIndex === -1) return users; // User not found
	  
		  const user = usersCopy[userIndex];
		  user.messages = user.messages.map((message) => {
			if (message.sender === user.id) {
			  return {
				...message,
				read: new Date(),
			  };
			}
			return message;
		  });
	  
		  usersCopy[userIndex] = user;
		  return usersCopy;
		});
	  };

	const numUnreadMessages = (userId: string) => {
		const user = users.find((user) => user.id === userId);
		if (!user) return 0;
		let unread = 0;
		for (let i = 0; i < user.messages.length; i++) {
			const message = user.messages[i];
			// ensure we only count unread messages last message we sent (if exists)
			if (message.sender !== user.id) {
				unread = 0;
			}
			else if (message.sender === user.id && !isMessageRead(message)) {
				unread++;
			}
		}
		return unread;
	};

	useEffect(() => {
		if (socket === null) return;
		socket.off("fetch_response");
		socket.off("start_typing");
		socket.off("stop_typing");
		socket.on("fetch_response", fetchMessageResponse);
		socket.on("start_typing", setUserAsTyping);
		socket.on("stop_typing", setUserAsNotTyping);
	}, [socket]);

	const setUserAsUnread = (userId: string) => {
		_updateUserProp(userId, "unread", 0);
	};

	const addNewMessage = (userId: string, message: string) => {
		// if (socket === null) return;
		const userIndex = users.findIndex((user) => user.id === userId);
		const usersCopy = [...users];
		const newMsgObject: Message = {
			content: message,
			images: [],
			sender: null,
			sent: new Date(),
			received: new Date(0),
			read: new Date(0),
		};

		usersCopy[userIndex].messages.push(newMsgObject);
		setUsers(usersCopy);

		// socket.emit("fetch_response", { userId });
	};

	const getMediaOnly = (userId: string) => {
		const user = users.find((user) => user.id === userId);
		if (!user) return [];
		return user.messages.flatMap((message) => message.images);
	};

	return (
		<UsersContext.Provider value={{ users, setUserAsUnread, addNewMessage, contactPinned, readUserMessages, numUnreadMessages, getMediaOnly }}>
			{children}
		</UsersContext.Provider>
	);
};

export { useUsersContext, UsersProvider };
