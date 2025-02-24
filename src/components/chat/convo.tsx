import Icon from "@/components/icon";
import React from "react";
import {formatDateTime, dateLabelledMessages} from "@/utils/dateTime";
import Image from "next/image";
import type { Message } from "@/data/contacts";
import { isMessageRead, isMessageSent, getMessageStatus, isMessageReceived } from "@/utils/messages";

interface ConvoProps {
	lastMsgRef: React.RefObject<HTMLDivElement>;
	messages: Message[];
}

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
						Messages are end-to-end encrypted. No one outside of this chat, not
						even WhatsApp, can read or listen to them. Click to learn more.
					</p>
				)}
				<div className="chat__msg-group">
					{dayMessages.map((message, msgIndex) => {
						const assignRef = () =>
							dateIndex === messageDates.length - 1 && msgIndex === dayMessages.length - 1
								? lastMsgRef
								: undefined;
						return (
							// biome-ignore lint/suspicious/noArrayIndexKey: key is unique
							<React.Fragment key={`${date}-${msgIndex}`}>
								{message.image ? (
									<div
										className={`chat__msg chat__img-wrapper ${
											message.sender ? "chat__msg--rxd" : "chat__msg--sent"
										}`}
										ref={assignRef()}
									>
										<Image src={message.image} alt="" className="chat__img" />
										<span className="chat__msg-footer">
											<span>{formatDateTime(message.sent)}</span>
											{!message.sender && (
												<Icon
													id={
														isMessageReceived(message) ? "doubleTick" : "singleTick"
													}
													aria-label={getMessageStatus(message)}
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
											<Icon id="downArrow" className="chat__msg-options-icon" />
										</button>
									</div>
								) : message.sender ? (
									<p className="chat__msg chat__msg--rxd" ref={assignRef()}>
										<span>{message.content}</span>
										<span className="chat__msg-filler"> </span>
										<span className="chat__msg-footer">
											{formatDateTime(message.sent)}
										</span>
										<button
											type="button"
											aria-label="Message options"
											className="chat__msg-options"
										>
											<Icon id="downArrow" className="chat__msg-options-icon" />
										</button>
									</p>
								) : (
									<p className="chat__msg chat__msg--sent" ref={assignRef()}>
										<span>{message.content}</span>
										<span className="chat__msg-filler"> </span>
										<span className="chat__msg-footer">
											<span> {formatDateTime(message.sent)} </span>
											<Icon
												id={
													isMessageReceived(message) ? "doubleTick" : "singleTick"
												}
												aria-label={getMessageStatus(message)}
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
											<Icon id="downArrow" className="chat__msg-options-icon" />
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
