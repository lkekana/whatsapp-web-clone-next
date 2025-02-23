"use client";
import type React from "react";
import { useEffect, useRef, useState } from "react";
import "./chat.css";
import EmojiTray from "@/components/chat/emojitray";
import ChatInput from "@/components/chat/chatinput";
import Header from "@/components/chat/header";
import ChatSidebar from "@/components/chat/chatsidebar";
import Icon from "@/components/icon";
import Search from "@/components/chat/search";
import Profile from "@/components/chat/profile";
import Convo from "@/components/chat/convo";
import { useUsersContext } from "@/contexts/usersContext";
import type { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useRouter } from "next/navigation";

interface ChatProps {
	userId: number;
}

const Chat = ({ userId }: ChatProps) => {
	const { users, setUserAsUnread, addNewMessage } = useUsersContext();
	const user = users.find((u) => u.id === userId);

	const lastMsgRef = useRef<HTMLDivElement>(null);
	const [showAttach, setShowAttach] = useState(false);
	const [showEmojis, setShowEmojis] = useState(false);
	const [showProfileSidebar, setShowProfileSidebar] = useState(false);
	const [showSearchSidebar, setShowSearchSidebar] = useState(false);
	const [newMessage, setNewMessage] = useState("");
	const router = useRouter();

	// biome-ignore lint/correctness/useExhaustiveDependencies: enough deps for me
	useEffect(() => {
		if (!user) {
			router.push("/");
		} else {
			scrollToLastMsg();
			setUserAsUnread(user.id);
		}
	}, []);

	// biome-ignore lint/correctness/useExhaustiveDependencies: enough deps for me
	useEffect(() => {
		user && scrollToLastMsg();
	}, [users]);

	const openSidebar = (cb: (value: boolean) => void) => {
		// close any open sidebar first
		setShowProfileSidebar(false);
		setShowSearchSidebar(false);

		// call callback fn
		cb(true);
	};

	const scrollToLastMsg = () => {
		lastMsgRef.current?.scrollIntoView();
	};

	const submitNewMessage = () => {
		addNewMessage(userId, newMessage);
		setNewMessage("");
		scrollToLastMsg();
	};

	return (
		<div className="chat">
			<div className="chat__body">
				<div className="chat__bg" />

				{user && (
					<Header
						user={user}
						openProfileSidebar={() => openSidebar(setShowProfileSidebar)}
						openSearchSidebar={() => openSidebar(setShowSearchSidebar)}
					/>
				)}
				<div className="chat__content">
					{user && (
						<Convo
							lastMsgRef={lastMsgRef as React.RefObject<HTMLDivElement>}
							messages={user.messages}
						/>
					)}
				</div>
				<footer className="chat__footer">
					<button
						type="button"
						className="chat__scroll-btn"
						aria-label="scroll down"
						onClick={scrollToLastMsg}
					>
						<Icon id="downArrow" />
					</button>
					<EmojiTray
						showEmojis={showEmojis}
						newMessage={newMessage}
						setNewMessage={setNewMessage}
					/>
					<ChatInput
						showEmojis={showEmojis}
						setShowEmojis={setShowEmojis}
						showAttach={showAttach}
						setShowAttach={setShowAttach}
						newMessage={newMessage}
						setNewMessage={setNewMessage}
						submitNewMessage={submitNewMessage}
					/>
				</footer>
			</div>
			<ChatSidebar
				heading="Search Messages"
				active={showSearchSidebar}
				closeSidebar={() => setShowSearchSidebar(false)}
			>
				<Search />
			</ChatSidebar>

			<ChatSidebar
				heading="Contact Info"
				active={showProfileSidebar}
				closeSidebar={() => setShowProfileSidebar(false)}
			>
				{user && <Profile user={user} />}
			</ChatSidebar>
		</div>
	);
};

export default Chat;
