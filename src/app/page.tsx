import Sidebar from "@/components/sidebar";
import Home from "./home";

export default function HomePage() {
	return (
		<div className="app">
			<p className="app__mobile-message">
				{" "}
				Only available on desktop 😊.{" "}
			</p>
			<div className="app-content">
				<Sidebar />
				<Home />
			</div>
		</div>
	);
}
