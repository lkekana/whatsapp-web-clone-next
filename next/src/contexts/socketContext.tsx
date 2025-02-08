"use client";
import type React from "react";
import { createContext, useContext, useEffect, useState } from "react";
import io from "socket.io-client";
import type { Socket } from "socket.io-client";

const SocketContext = createContext<Socket | null>(null);

const useSocketContext = () => useContext(SocketContext);

const SocketProvider = ({ children }: { children: React.ReactNode }) => {
	const [socket, setSocket] = useState<Socket | null>(null);

	useEffect(() => {
		const SOCKET_URL = window.location.origin.includes("localhost")
			? "http://localhost:5000"
			: "https://whatsapp-web-clone-backend.herokuapp.com/";
		const socketIo = io(SOCKET_URL);
		setSocket(socketIo);

		return () => {
			socketIo.disconnect();
		};
	}, []);

	if (!socket) {
		// return <div>Loading socket…</div>;
		return null;
	}

	return (
		<SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
	);
};

export { useSocketContext, SocketProvider };
