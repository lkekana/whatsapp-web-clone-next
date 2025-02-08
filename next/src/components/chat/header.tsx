import React from "react";
import Icon from "@/components/icon";
import OptionsBtn from "@/components/optionsbutton";
import type { User } from "@/data/contacts";
import Image from "next/image";

interface HeaderProps {
	user: User;
	openProfileSidebar: () => void;
	openSearchSidebar: () => void;
}

const Header = ({
	user,
	openProfileSidebar,
	openSearchSidebar,
}: HeaderProps) => {
	return (
		<header className="header chat__header">
			<div
				className="chat__avatar-wrapper"
				onClick={openProfileSidebar}
				onKeyUp={(e) => {
					if (e.key === "Enter" || e.key === " ") {
						openProfileSidebar();
					}
				}}
			>
				<Image src={user.profile_picture} alt={user?.name} className="avatar" />
			</div>

			<div
				className="chat__contact-wrapper"
				onClick={openProfileSidebar}
				onKeyUp={(e) => {
					if (e.key === "Enter" || e.key === " ") {
						openProfileSidebar();
					}
				}}
			>
				<h2 className="chat__contact-name"> {user?.name}</h2>
				<p className="chat__contact-desc">
					{user.typing ? "typing..." : "online"}
				</p>
			</div>
			<div className="chat__actions">
				<button
					type="button"
					className="chat__action"
					aria-label="Search"
					onClick={openSearchSidebar}
				>
					<Icon
						id="search"
						className="chat__action-icon chat__action-icon--search"
					/>
				</button>
				<OptionsBtn
					className="chat__action"
					ariaLabel="Menu"
					iconId="menu"
					iconClassName="chat__action-icon"
					options={[
						"Contact Info",
						"Select Messages",
						"Mute notifications",
						"Clear messages",
						"Delete chat",
					]}
				/>
			</div>
		</header>
	);
};

export default Header;
