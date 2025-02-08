import Icon from "@/components/icon";
import React from "react";
import media from "@/assets/images/women.jpeg";
import formatTime from "@/utils/formatTime";
import type { Messages } from "@/data/contacts";
import Image from "next/image";

interface ConvoProps {
	lastMsgRef: React.RefObject<HTMLDivElement>;
	messages: Messages;
}

const Convo = ({ lastMsgRef, messages: allMessages }: ConvoProps) => {
	const dates = Object.keys(allMessages);

	return dates.map((date, dateIndex) => {
		const messages = allMessages[date];
		return (
			<div key={date}>
				<div className="chat__date-wrapper">
					<span className="chat__date"> {date}</span>
				</div>
				{dateIndex === 0 && (
					<p className="chat__encryption-msg">
						<Icon id="lock" className="chat__encryption-icon" />
						Messages are end-to-end encrypted. No one outside of this chat, not
						even WhatsApp, can read or listen to them. Click to learn more.
					</p>
				)}
				<div className="chat__msg-group">
					{messages.map((message, msgIndex) => {
						const assignRef = () =>
							dateIndex === dates.length - 1 && msgIndex === messages.length - 1
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
										<Image src={media} alt="" className="chat__img" />
										<span className="chat__msg-footer">
											<span>{formatTime(message.time)}</span>
											{!message.sender && (
												<Icon
													id={
														message?.status === "sent"
															? "singleTick"
															: "doubleTick"
													}
													aria-label={message?.status}
													className={`chat__msg-status-icon ${
														message?.status === "read"
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
											{formatTime(message.time)}
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
											<span> {formatTime(message.time)} </span>
											<Icon
												id={
													message?.status === "sent"
														? "singleTick"
														: "doubleTick"
												}
												aria-label={message?.status}
												className={`chat__msg-status-icon ${
													message?.status === "read"
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
