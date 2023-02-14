import React from "react";
import {
	StyledBoldText,
	StyledLightText,
	StyledText,
	StyledTextContainer,
	StyledAltText,
} from "../CircleText/CircleText.styles";

const numberOfWords = 10;

// const fontSize = "100px";
type CircleTextProps = {
	backgroundImageUrl: string;
	text: string;
	fontSize?: any;
	color?: any;
	numberOfRows: number;
	fontFamily?: any;
	fontFamilyBold?: any;
};
//not working with string here...

const CircleText = ({
	backgroundImageUrl,
	text,
	fontSize,
	color,
	numberOfRows,
	fontFamily,
	fontFamilyBold,
}: CircleTextProps) => {
	{
		const addText = (
			howMany: number,
			fontSize: string,
			color: string,
			fontFamily: string,
			fontFamilyBold: string
		) => {
			const result: Array<React.ReactNode> = [];
			for (let i = 0; i < howMany; i++) {
				result.push(
					<>
						<StyledBoldText
							color={color}
							fontSize={fontSize}
							fontFamily={fontFamilyBold}
						>
							{text}
						</StyledBoldText>
						<StyledLightText
							fontFamily={fontFamily}
							color={color}
							fontSize={fontSize}
						>
							{text}
						</StyledLightText>
					</>
				);
			}
			return result;
		};
		const addAltText = (
			howMany: number,
			fontSize: string,
			color: string,
			fontFamily: string,
			fontFamilyBold: string
		) => {
			const result: Array<React.ReactNode> = [];
			for (let i = 0; i < howMany; i++) {
				result.push(
					<>
						<StyledLightText
							color={color}
							fontSize={fontSize}
							fontFamily={fontFamily}
						>
							{text}
						</StyledLightText>
						<StyledBoldText
							fontFamily={fontFamilyBold}
							color={color}
							fontSize={fontSize}
						>
							{text}
						</StyledBoldText>
					</>
				);
			}
			return result;
		};

		const addRows = (
			howMany: number,
			fontSize: string,
			color: string,
			fontFamily: string,
			fontFamilyBold: string
		) => {
			const result: Array<React.ReactNode> = [];
			for (let i = 0; i < howMany; i++) {
				result.push(
					<>
						<StyledText>
							{addText(
								numberOfWords,
								fontSize,
								color,
								fontFamily,
								fontFamilyBold
							)}
						</StyledText>
						<StyledAltText>
							{addAltText(
								numberOfWords,
								fontSize,
								color,
								fontFamily,
								fontFamilyBold
							)}
						</StyledAltText>
					</>
				);
			}
			return result;
		};
		return (
			<>
				<StyledTextContainer>
					{addRows(numberOfRows, fontSize, color, fontFamily, fontFamilyBold)}
				</StyledTextContainer>
			</>
		);
	}
};

export default CircleText;
