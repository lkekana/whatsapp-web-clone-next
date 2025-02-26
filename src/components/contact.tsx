import Icon from "@/components/icon";
import { useUsersContext } from "@/contexts/usersContext";
import type { User, } from "@/data/contacts";
import { formatDateTime } from "@/utils/dateTime";
import Image from "next/image";
import Link from "next/link";
import "./sidebar.css";
import {
	isMessageRead,
	isMessageReceived,
	isMessageSent,
} from "@/utils/messages";
import { usePathname } from "next/navigation";

interface ContactProps {
	contact: User;
}

const Contact = ({ contact }: ContactProps) => {
	const {
		contactPinned,
		readUserMessages,
		numUnreadMessages,
	} = useUsersContext();

	const getLastMessage = (contact: User) => {
		// const messageDates = Object.keys(contact.messages);
		// const recentMessageDate = messageDates[messageDates.length - 1];
		// const messages = [...contact.messages[recentMessageDate]];
		// const lastMessage = messages.pop();
		// return lastMessage;
		const messages = contact.messages.sort(
			(a, b) => a.sent.getTime() - b.sent.getTime(),
		);
		return messages[messages.length - 1];
	};
	const unreadMessages = numUnreadMessages(contact.id);

	const lastMessage = getLastMessage(contact);
	const isActive = usePathname() === `/chat/${contact.id}`;

	return (
		<Link
			href={`/chat/${contact.id}`}
			onClick={() => readUserMessages(contact.id)}
		>
			<div
				className={`sidebar-contact ${isActive ? "sidebar-contact--active" : ""}`}
			>
				<div className="sidebar-contact__avatar-wrapper">
					<Image
						src={contact.profile_picture}
						alt={contact.profile_picture.src}
						className="avatar"
					/>
				</div>
				<div className="sidebar-contact__content">
					<div className="sidebar-contact__top-content">
						<h2 className="sidebar-contact__name">
							{" "}
							{contact.name}{" "}
						</h2>
						<span className="sidebar-contact__time">
							{lastMessage
								? formatDateTime(lastMessage.sent)
								: "No messages"}
						</span>
					</div>
					<div className="sidebar-contact__bottom-content">
						<p className="sidebar-contact__message-wrapper">
							{lastMessage.sender !== contact.id && (
								<Icon
									id={
										isMessageReceived(lastMessage)
											? "doubleTick"
											: "singleTick"
									}
									aria-label={isMessageSent(lastMessage)}
									className={`sidebar-contact__message-icon ${
										isMessageRead(lastMessage)
											? "sidebar-contact__message-icon--blue"
											: ""
									}`}
								/>
							)}
							<span
								className={`sidebar-contact__message ${
									unreadMessages > 0
										? "sidebar-contact__message--unread"
										: ""
								}`}
							>
								{contact.typing ? (
									<i> typing...</i>
								) : (
									lastMessage?.content
								)}
							</span>
						</p>
						<div className="sidebar-contact__icons">
							{contactPinned(contact.id) && (
								<Icon
									id="pinned"
									className="sidebar-contact__icon"
								/>
							)}
							{unreadMessages > 0 && (
								<span className="sidebar-contact__unread">
									{unreadMessages}
								</span>
							)}
							<button
								type="button"
								aria-label="sidebar-contact__btn"
							>
								<Icon
									id="downArrow"
									className="sidebar-contact__icon sidebar-contact__icon--dropdown"
								/>
							</button>
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default Contact;
