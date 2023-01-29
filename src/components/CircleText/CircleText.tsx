import React from "react";
import {
	StyledBoldText,
	StyledLightText,
	StyledText,
	StyledTextContainer,
	StyledAltText,
} from "../CircleText/CircleText.styles";

const numberOfWords = 5;
const numberOfRows = 4;
const fontSize = "100px";
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
					<StyledLightText fontSize={fontSize}>{text}</StyledLightText>
				</>
			);
		}
		return result;
	};
	const addAltText = (howMany: number) => {
		const result: Array<React.ReactNode> = [];
		for (let i = 0; i < howMany; i++) {
			result.push(
				<>
					<StyledLightText fontSize={fontSize}>{text}</StyledLightText>
					<StyledBoldText>{text}</StyledBoldText>
				</>
			);
		}
		return result;
	};

	const addRows = (howMany: number) => {
		const result: Array<React.ReactNode> = [];
		for (let i = 0; i < howMany; i++) {
			result.push(
				<>
					<StyledText>{addText(numberOfWords)}</StyledText>
					<StyledAltText>{addAltText(numberOfWords)}</StyledAltText>
				</>
			);
		}
		return result;
	};
	return (
		<>
			<StyledTextContainer>{addRows(numberOfRows)}</StyledTextContainer>
		</>
	);
};

export default CircleText;
