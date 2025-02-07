import { createContext, useContext } from "react";
import io from "socket.io-client";
import type { Socket } from "socket.io-client";

const SOCKET_URL = window.location.origin.includes("localhost")
	? "http://localhost:5000"
	: "https://whatsapp-web-clone-backend.herokuapp.com/";

const socket = io(SOCKET_URL);


const SocketContext = createContext<Socket | null>(null);

const useSocketContext = () => useContext(SocketContext);

const SocketProvider = ({ children }: { children: React.ReactNode }) => {
	return (
		<SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
	);
};

export { useSocketContext, SocketProvider };
