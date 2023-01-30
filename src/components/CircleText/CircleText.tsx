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
// const fontSize = "100px";
type CircleTextProps = {
	backgroundImageUrl: string;
	text: string;
	fontSize?: any;
	color?: any;
};
//not working with string here...

const CircleText = ({
	backgroundImageUrl,
	text,
	fontSize,
	color,
}: CircleTextProps) => {
	{
		const addText = (howMany: number, fontSize: string, color: string) => {
			const result: Array<React.ReactNode> = [];
			for (let i = 0; i < howMany; i++) {
				result.push(
					<>
						<StyledBoldText>{text}</StyledBoldText>
						<StyledLightText color={color} fontSize={fontSize}>
							{text}
						</StyledLightText>
					</>
				);
			}
			return result;
		};
		const addAltText = (howMany: number, fontSize: string, color: string) => {
			const result: Array<React.ReactNode> = [];
			for (let i = 0; i < howMany; i++) {
				result.push(
					<>
						<StyledLightText color={color} fontSize={fontSize}>
							{text}
						</StyledLightText>
						<StyledBoldText>{text}</StyledBoldText>
					</>
				);
			}
			return result;
		};

		const addRows = (howMany: number, fontSize: string, color: string) => {
			const result: Array<React.ReactNode> = [];
			for (let i = 0; i < howMany; i++) {
				result.push(
					<>
						<StyledText>{addText(numberOfWords, fontSize, color)}</StyledText>
						<StyledAltText>
							{addAltText(numberOfWords, fontSize, color)}
						</StyledAltText>
					</>
				);
			}
			return result;
		};
		return (
			<>
				<StyledTextContainer>
					{addRows(numberOfRows, fontSize, color)}
				</StyledTextContainer>
			</>
		);
	}
};

export default CircleText;
