"use client";
import "./sidebar.css";
import avatar from "@/assets/images/profile-picture-girl-1.jpeg";
import Alert from "@/components/alert";
import Contact from "@/components/contact";
import Icon from "@/components/icon";
import OptionsBtn from "@/components/optionsbutton";
import { useUsersContext } from "@/contexts/usersContext";
import Image from "next/image";

// const CONTACT_HEIGHT = 72;

const Sidebar = () => {
	const { users: contacts } = useUsersContext();
	// const contactsRef = useRef<HTMLDivElement>(null);
	// const pathname = usePathname();

	// useEffect(() => {
	// 	console.log(contacts);
	// 	if (contactsRef.current) {
	// 		if (pathname.startsWith("/chat")) {
	// 			// extract the id from /chat/:id
	// 			const contactId = pathname.split("/")[2];
	// 			const index = contacts.findIndex((contact) => contact.id === contactId);
	// 			if (index !== -1) {
	// 				contactsRef.current.scrollTop = index * CONTACT_HEIGHT;
	// 			}
	// 		}
	// 	}
	// }, [contacts, pathname]);

	return (
		<aside className="sidebar">
			<header className="header">
				<div className="sidebar__avatar-wrapper">
					<Image
						src={avatar}
						alt="Karen Okonkwo"
						className="avatar"
					/>
				</div>
				<div className="sidebar__actions">
					<button
						type="button"
						className="sidebar__action"
						aria-label="Status"
					>
						<Icon
							id="status"
							className="sidebar__action-icon sidebar__action-icon--status"
						/>
					</button>
					<button
						type="button"
						className="sidebar__action"
						aria-label="New chat"
					>
						<Icon id="chat" className="sidebar__action-icon" />
					</button>
					<OptionsBtn
						className="sidebar__action"
						ariaLabel="Menu"
						iconId="menu"
						iconClassName="sidebar__action-icon"
						options={[
							"New group",
							"Create a room",
							"Profile",
							"Archived",
							"Starred",
							"Settings",
							"Log out",
						]}
					/>
				</div>
			</header>
			<Alert />
			<div className="search-wrapper">
				<div className="search-icons">
					<Icon id="search" className="search-icon" />
					<button type="button" className="search__back-btn">
						<Icon id="back" />
					</button>
				</div>
				<input
					className="search"
					placeholder="Search or start a new chat"
				/>
			</div>
			{/* <div className="sidebar__contacts" ref={contactsRef}> */}
			<div className="sidebar__contacts">
				{contacts.map((contact) => (
					<Contact key={contact.id} contact={contact} />
				))}
			</div>
		</aside>
	);
};

export default Sidebar;
