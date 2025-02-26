import Sidebar from "@/components/sidebar";
import Chat from "../../chat"; // assuming Chat component is migrated

export type PageProps<T extends { [key: string]: string }> = {
	params: Promise<T>;
	searchParams: Promise<{
	  [key: string]: string | string[] | undefined;
	}>;
  };

interface ChatPageProps<T = { id: string }> {
	params: Promise<T>;
	searchParams: Promise<{
		[key: string]: string | string[] | undefined;
	}>;
}

export default async function ChatPage({ params }: ChatPageProps) {
	const { id } = await Promise.resolve(params);
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
