import React from "react";
import { StyledLabel, StyledInput, StyledSwitch } from "./Toggle.styles";

const Toggle = ({ onChange, checked }: any) => {
	return (
		<StyledLabel>
			<StyledInput checked={checked} onChange={onChange} type="checkbox" />
			<StyledSwitch />
		</StyledLabel>
	);
};

export default Toggle;
