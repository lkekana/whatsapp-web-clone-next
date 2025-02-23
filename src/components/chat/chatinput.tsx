import type React from "react";
import Icon from "@/components/icon";

const attachButtons = [
	{ icon: "attachRooms", label: "Choose room" },
	{ icon: "attachContacts", label: "Choose contact" },
	{ icon: "attachDocument", label: "Choose document" },
	{ icon: "attachCamera", label: "Use camera" },
	{ icon: "attachImage", label: "Choose image" },
];

interface ChatInputProps {
	showAttach: boolean;
	setShowAttach: React.Dispatch<React.SetStateAction<boolean>>;
	showEmojis: boolean;
	setShowEmojis: React.Dispatch<React.SetStateAction<boolean>>;
	newMessage: string;
	setNewMessage: React.Dispatch<React.SetStateAction<string>>;
	submitNewMessage: () => void;
}

const ChatInput = ({
	showAttach,
	setShowAttach,
	showEmojis,
	setShowEmojis,
	newMessage,
	setNewMessage,
	submitNewMessage,
}: ChatInputProps) => {
	const detectEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter" || e.keyCode === 13) {
			submitNewMessage();
		}
	};

	return (
		<div className="chat__input-wrapper">
			{showEmojis && (
				<button
					type="button"
					aria-label="Close emojis"
					onClick={() => setShowEmojis(false)}
				>
					<Icon id="cancel" className="chat__input-icon" />
				</button>
			)}
			<button
				type="button"
				aria-label="Emojis"
				onClick={() => setShowEmojis(true)}
			>
				<Icon
					id="smiley"
					className={`chat__input-icon ${
						showEmojis ? "chat__input-icon--highlight" : ""
					}`}
				/>
			</button>
			{showEmojis && (
				<>
					<button type="button" aria-label="Choose GIF">
						<Icon id="gif" className="chat__input-icon" />
					</button>
					<button type="button" aria-label="Choose sticker">
						<Icon id="sticker" className="chat__input-icon" />
					</button>
				</>
			)}
			<div className="pos-rel">
				<button
					type="button"
					aria-label="Attach"
					onClick={() => setShowAttach(!showAttach)}
				>
					<Icon
						id="attach"
						className={`chat__input-icon ${
							showAttach ? "chat__input-icon--pressed" : ""
						}`}
					/>
				</button>

				<div
					className={`chat__attach ${showAttach ? "chat__attach--active" : ""}`}
				>
					{attachButtons.map((btn) => (
						<button
							type="button"
							className="chat__attach-btn"
							aria-label={btn.label}
							key={btn.label}
						>
							<Icon id={btn.icon} className="chat__attach-icon" />
						</button>
					))}
				</div>
			</div>
			<input
				className="chat__input"
				placeholder="Type a message"
				value={newMessage}
				onChange={(e) => setNewMessage(e.target.value)}
				onKeyDown={detectEnterPress}
			/>
			{newMessage ? (
				<button
					type="button"
					aria-label="Send message"
					onClick={submitNewMessage}
				>
					<Icon id="send" className="chat__input-icon" />
				</button>
			) : (
				<button type="button" aria-label="Record voice note">
					<Icon id="microphone" className="chat__input-icon" />
				</button>
			)}
		</div>
	);
};

export default ChatInput;
