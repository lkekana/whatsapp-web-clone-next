import Icon from "@/components/icon";
import React from "react";
import "./checkbox.css";

interface CheckboxProps {
  inputProps: React.InputHTMLAttributes<HTMLInputElement>;
}

const Checkbox: React.FC<CheckboxProps> = ({ inputProps }) => {
	return (
		<div className="checkbox">
			<input
				type="checkbox"
				id="checkbox"
				{...inputProps}
				className="checkbox__input"
			/>
			<label htmlFor="checkbox" className="checkbox__label">
				<Icon id="check" className="checkbox__icon" />
			</label>
		</div>
	);
};

export default Checkbox;
