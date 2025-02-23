"use client";
import React, { useState } from "react";
import Icon from "@/components/icon";
import "./optionsbutton.css";

interface OptionsBtnProps {
	className?: string;
	iconId: string;
	iconClassName?: string;
	ariaLabel: string;
	options?: string[];
	position?: "left" | "right";
	showPressed?: boolean;
	// biome-ignore lint/suspicious/noExplicitAny: props
	[key: string]: any;
}

const OptionsBtn = ({
	className,
	iconId,
	iconClassName,
	ariaLabel,
	options = [],
	position = "left",
	showPressed = true,
	...props
}: OptionsBtnProps) => {
	const [showOptions, setShowOptions] = useState(false);

	return (
		<div className="pos-rel">
			<button
				aria-label={ariaLabel}
				className={`options-btn ${
					showOptions && showPressed ? "options-btn--pressed" : ""
				} ${className || ""}`}
				onClick={() => setShowOptions(!showOptions)}
				{...props}
			>
				<Icon id={iconId} className={iconClassName} />
			</button>
			<ul
				className={`options-btn__options ${
					showOptions ? "options-btn__options--active" : ""
				} ${position === "right" ? "options-btn__options--right" : ""}`}
			>
				{options.map((option, index) => (
					<li className="options-btn__option" key={option}>
						{option}
					</li>
				))}
			</ul>
		</div>
	);
};

export default OptionsBtn;
