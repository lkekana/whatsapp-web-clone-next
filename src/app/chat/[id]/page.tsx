import React from "react";
import Chat from "../../chat"; // assuming Chat component is migrated
import Sidebar from "@/components/sidebar";

interface ChatPageProps {
	params: { id: string };
}

export default function ChatPage({ params }: ChatPageProps) {
	const { id } = params as { id: string };
	return (
		<div className="app">
			<p className="app__mobile-message"> Only available on desktop 😊. </p>
			<div className="app-content">
				<Sidebar />
				<Chat userId={Number.parseInt(id, 10)} />
			</div>
		</div>
	);
}
