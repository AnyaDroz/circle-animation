import React from "react";
import {
	StyledBoldText,
	StyledLightText,
	StyledText,
	StyledTextContainer,
	StyledAltText,
} from "../CircleText/CircleText.styles";

const numberOfWords = 5;

// const fontSize = "100px";
type CircleTextProps = {
	backgroundImageUrl: string;
	text: string;
	fontSize?: any;
	color?: any;
	numberOfRows: number;
};
//not working with string here...

const CircleText = ({
	backgroundImageUrl,
	text,
	fontSize,
	color,
	numberOfRows,
}: CircleTextProps) => {
	{
		const addText = (howMany: number, fontSize: string, color: string) => {
			const result: Array<React.ReactNode> = [];
			for (let i = 0; i < howMany; i++) {
				result.push(
					<>
						<StyledBoldText color={color} fontSize={fontSize}>
							{text}
						</StyledBoldText>
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
						<StyledBoldText color={color} fontSize={fontSize}>
							{text}
						</StyledBoldText>
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
