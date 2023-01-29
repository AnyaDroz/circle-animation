import React from "react";
import {
	StyledBoldText,
	StyledLightText,
} from "../CircleText/CircleText.styles";

const HOW_MANY_TEXT = 5;
type CircleTextProps = {
	backgroundImageUrl: string;
	text: string;
};

const CircleText = ({ backgroundImageUrl, text }: CircleTextProps) => {
	const addText = (howMany: number) => {
		const result: Array<React.ReactNode> = [];
		for (let i = 0; i < howMany; i++) {
			result.push(
				<>
					<StyledBoldText>{text}</StyledBoldText>
				</>
			);
		}
		return result;
	};
	return <div>{addText(HOW_MANY_TEXT)}</div>;
};

export default CircleText;
