import React from "react";
import { StyledLabel, StyledInput, StyledSwitch } from "./Toggle.styles";

const Toggle = () => {
	return (
		<StyledLabel>
			<span>Toggle is off</span>
			<StyledInput type="checkbox" />
			<StyledSwitch />
		</StyledLabel>
	);
};

export default Toggle;
