import Sidebar from "@/components/sidebar";
import Chat from "../../chat"; // assuming Chat component is migrated

interface ChatPageProps {
	params: { id: string };
}

export default async function ChatPage({ params }: ChatPageProps) {
	const { id } = await params;
	return (
		<div className="app">
			<p className="app__mobile-message">
				{" "}
				Only available on desktop 😊.{" "}
			</p>
			<div className="app-content">
				<Sidebar />
				<Chat userId={id} />
			</div>
		</div>
	);
}
