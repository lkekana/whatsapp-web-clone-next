"use client";
import { createContext, useContext, useEffect, useState } from "react";
import contacts, {type Message, type User} from "@/data/contacts";
import { useSocketContext } from "./socketContext";
import type { ReactNode } from "react";


const UsersContext = createContext<{
  users: User[];
  setUserAsUnread: (userId: number) => void;
  addNewMessage: (userId: number, message: string) => void;
}>({
	  users: [],
  setUserAsUnread: () => {},
  addNewMessage: () => {},
});

const useUsersContext = () => useContext(UsersContext);


const UsersProvider = ({ children }: { children: ReactNode }) => {
	const socket = useSocketContext();

	const [users, setUsers] = useState<User[]>(contacts);
	console.log("users", users);

	const _updateUserProp = (userId: number, prop: string, value: number | boolean) => {
		setUsers((users) => {
			const usersCopy = [...users];
			const userIndex = users.findIndex((user) => user.id === userId);
			const userObject = usersCopy[userIndex];
			usersCopy[userIndex] = { ...userObject, [prop]: value };
			return usersCopy;
		});
	};

	const setUserAsTyping = (data: { userId: number; }) => {
		const { userId } = data;
		_updateUserProp(userId, "typing", true);
	};

	const setUserAsNotTyping = (data: { userId: number; }) => {
		const { userId } = data;
		_updateUserProp(userId, "typing", false);
	};

	const fetchMessageResponse = (data: { userId: number; response: string; }) => {
		setUsers((users) => {
			const { userId, response } = data;

			const userIndex = users.findIndex((user) => user.id === userId);
			const usersCopy = JSON.parse(JSON.stringify(users));
			const newMsgObject: Message = {
				content: response,
				sender: userId,
				time: new Date().toLocaleTimeString(),
				status: null,
			};

			usersCopy[userIndex].messages.TODAY.push(newMsgObject);

			return usersCopy;
		});
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

	const setUserAsUnread = (userId: number) => {
		_updateUserProp(userId, "unread", 0);
	};

	const addNewMessage = (userId: number, message: string) => {
		if (socket === null) return;
		const userIndex = users.findIndex((user) => user.id === userId);
		const usersCopy = [...users];
		const newMsgObject = {
			content: message,
			sender: null,
			time: new Date().toLocaleTimeString(),
			status: "delivered",
		};

		usersCopy[userIndex].messages.TODAY.push(newMsgObject);
		setUsers(usersCopy);

		socket.emit("fetch_response", { userId });
	};

	return (
		<UsersContext.Provider value={{ users, setUserAsUnread, addNewMessage }}>
			{children}
		</UsersContext.Provider>
	);
};

export { useUsersContext, UsersProvider };
