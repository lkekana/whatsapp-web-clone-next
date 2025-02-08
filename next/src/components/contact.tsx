import React from "react";
import Icon from "@/components/icon";
import Link from "next/link";
import formatTime from "@/utils/formatTime";
import { useUsersContext } from "@/contexts/usersContext";
import type { User } from "@/data/contacts";
import Image from "next/image";
import "./sidebar.css";

interface ContactProps {
	contact: User;
}

const Contact = ({ contact }: ContactProps) => {
	const { setUserAsUnread } = useUsersContext();
	const getLastMessage = (contact: User) => {
		const messageDates = Object.keys(contact.messages);
		const recentMessageDate = messageDates[messageDates.length - 1];
		const messages = [...contact.messages[recentMessageDate]];
		const lastMessage = messages.pop();
		return lastMessage;
	};

	const lastMessage = getLastMessage(contact);

	return (
		<Link
            href={`/chat/${contact.id}`}
            onClick={() => setUserAsUnread(contact.id)}
            legacyBehavior
        >
			<a href={`/chat/${contact.id}`} className="sidebar-contact">
			<div className="sidebar-contact__avatar-wrapper">
				<Image src={contact.profile_picture} alt={contact.profile_picture.src} className="avatar" />
			</div>
			<div className="sidebar-contact__content">
				<div className="sidebar-contact__top-content">
					<h2 className="sidebar-contact__name"> {contact.name} </h2>
					<span className="sidebar-contact__time">
					{lastMessage ? formatTime(lastMessage.time) : "No messages"}
					</span>
				</div>
				<div className="sidebar-contact__bottom-content">
					<p className="sidebar-contact__message-wrapper">
						{lastMessage?.status && (
							<Icon
								id={
									lastMessage?.status === "sent" ? "singleTick" : "doubleTick"
								}
								aria-label={lastMessage?.status}
								className={`sidebar-contact__message-icon ${
									lastMessage?.status === "read"
										? "sidebar-contact__message-icon--blue"
										: ""
								}`}
							/>
						)}
						<span
							className={`sidebar-contact__message ${
								!!contact.unread ? "sidebar-contact__message--unread" : ""
							}`}
						>
							{contact.typing ? <i> typing...</i> : lastMessage?.content}
						</span>
					</p>
					<div className="sidebar-contact__icons">
						{contact.pinned && (
							<Icon id="pinned" className="sidebar-contact__icon" />
						)}
						{!!contact.unread && (
							<span className="sidebar-contact__unread">{contact.unread}</span>
						)}
						<button type="button" aria-label="sidebar-contact__btn">
							<Icon
								id="downArrow"
								className="sidebar-contact__icon sidebar-contact__icon--dropdown"
							/>
						</button>
					</div>
				</div>
			</div>
			</a>
		</Link>
	);
};

export default Contact;
