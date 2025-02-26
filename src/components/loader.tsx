
import "./loader.css";
import Icon from "@/components/icon";

interface LoaderProps {
	done: boolean;
}

const Loader = ({ done }: LoaderProps) => {
	return (
		<div className="loader">
			<div className="loader__logo-wrapper">
				<Icon id="whatsapp" className="loader__logo" />
			</div>
			<div
				className={`loader__progress ${done ? "loader__progress--done" : ""}`}
			/>
			<h1 className="loader__title"> Whatsapp</h1>
			<p className="loader__desc">
				<Icon id="lock" className="loader__icon" />
				End-to-end encrypted. Built by Karen Okonkwo.
			</p>
		</div>
	);
};

export default Loader;
