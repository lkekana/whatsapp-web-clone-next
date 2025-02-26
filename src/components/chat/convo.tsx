import Icon from "@/components/icon";
import type { Message } from "@/data/contacts";
import { dateLabelledMessages, formatDateTime } from "@/utils/dateTime";
import {
	getMessageStatus,
	isMessageRead,
	isMessageReceived,
} from "@/utils/messages";
import Image from "next/image";
import React from "react";

interface ConvoProps {
	lastMsgRef: React.RefObject<HTMLDivElement>;
	messages: Message[];
}

// Helper function to parse WhatsApp's message formatting
const parseContent = (content: string): string => {
	// triple backticks for monospaced text (using s flag to span newlines)
	let result = content.replace(/```(.*?)```/g, "<code>$1</code>");

	// asterisks for bold
	result = result.replace(/\*(.*?)\*/g, "<strong>$1</strong>");

	// underscores for italics
	result = result.replace(/_(.*?)_/g, "<em>$1</em>");

	// tildes for strikethrough
	result = result.replace(/~(.*?)~/g, "<del>$1</del>");
	return result;
};

const Convo = ({ lastMsgRef, messages: allMessages }: ConvoProps) => {
	const labelledMessages = dateLabelledMessages(allMessages);
	const messageDates = Object.keys(labelledMessages);
	return messageDates.map((date, dateIndex) => {
		const dayMessages = labelledMessages[date];
		return (
			<div key={date}>
				{/* Day Label */}
				<div className="chat__date-wrapper">
					<span className="chat__date"> {date}</span>
				</div>

				{/* Encryption Message (shown once at the top) */}
				{dateIndex === 0 && (
					<p className="chat__encryption-msg">
						<Icon id="lock" className="chat__encryption-icon" />
						Messages are end-to-end encrypted. No one outside of
						this chat, not even WhatsApp, can read or listen to
						them. Click to learn more.
					</p>
				)}
				<div className="chat__msg-group">
					{dayMessages.map((message, msgIndex) => {
						const assignRef = () =>
							dateIndex === messageDates.length - 1 &&
							msgIndex === dayMessages.length - 1
								? lastMsgRef
								: undefined;
						return (
							// biome-ignore lint/suspicious/noArrayIndexKey: key is unique
							<React.Fragment key={`${date}-${msgIndex}`}>
								{message.images.length > 0 ? (
									<div
										className={`chat__msg chat__img-wrapper ${
											message.sender
												? "chat__msg--rxd"
												: "chat__msg--sent"
										}`}
										ref={assignRef()}
									>
										{/* <Image src={message.image} alt="" className="chat__img" /> */}
										<div className="chat__msg-content">
											{message.images.map(
												(image, index) => (
													<Image
														key={`${image.src}-i${index}`}
														src={image}
														alt=""
														className="chat__img"
													/>
												),
											)}
											<p>
												<span
													// biome-ignore lint/security/noDangerouslySetInnerHtml: edge case
													dangerouslySetInnerHTML={{
														__html: parseContent(
															message.content ||
																"",
														),
													}}
												/>
											</p>
										</div>

										<span className="chat__msg-footer">
											<span>
												{formatDateTime(message.sent)}
											</span>
											{message.sender === null && (
												<Icon
													id={
														isMessageReceived(
															message,
														)
															? "doubleTick"
															: "singleTick"
													}
													aria-label={getMessageStatus(
														message,
													)}
													className={`chat__msg-status-icon ${
														isMessageRead(message)
															? "chat__msg-status-icon--blue"
															: ""
													}`}
												/>
											)}
										</span>

										<button
											type="button"
											aria-label="Message options"
											className="chat__msg-options"
										>
											<Icon
												id="downArrow"
												className="chat__msg-options-icon"
											/>
										</button>
									</div>
								) : message.sender ? (
									<p
										className="chat__msg chat__msg--rxd"
										ref={assignRef()}
									>
										<span
											// biome-ignore lint/security/noDangerouslySetInnerHtml: edge case
											dangerouslySetInnerHTML={{
												__html: parseContent(
													message.content || "",
												),
											}}
										/>

										<span className="chat__msg-filler">
											{" "}
										</span>
										<span className="chat__msg-footer">
											{formatDateTime(message.sent)}
										</span>
										<button
											type="button"
											aria-label="Message options"
											className="chat__msg-options"
										>
											<Icon
												id="downArrow"
												className="chat__msg-options-icon"
											/>
										</button>
									</p>
								) : (
									<p
										className="chat__msg chat__msg--sent"
										ref={assignRef()}
									>
										<span
											// biome-ignore lint/security/noDangerouslySetInnerHtml: edge case
											dangerouslySetInnerHTML={{
												__html: parseContent(
													message.content || "",
												),
											}}
										/>
										<span className="chat__msg-filler">
											{" "}
										</span>
										<span className="chat__msg-footer">
											<span>
												{" "}
												{formatDateTime(
													message.sent,
												)}{" "}
											</span>
											<Icon
												id={
													isMessageReceived(message)
														? "doubleTick"
														: "singleTick"
												}
												aria-label={getMessageStatus(
													message,
												)}
												className={`chat__msg-status-icon ${
													isMessageRead(message)
														? "chat__msg-status-icon--blue"
														: ""
												}`}
											/>
										</span>
										<button
											type="button"
											aria-label="Message options"
											className="chat__msg-options"
										>
											<Icon
												id="downArrow"
												className="chat__msg-options-icon"
											/>
										</button>
									</p>
								)}
							</React.Fragment>
						);
					})}
				</div>
			</div>
		);
	});
};

export default Convo;
