import styled, { StyledComponent } from "styled-components";

type StyledLightTextProps = {
	fontSize: string;
	color: string;
};

export const StyledLightText = styled.span<StyledLightTextProps>(
	({ fontSize, color }) => `
	font-family: Arial;
	font-weight: 200;
	line-height: 0.7;
	font-size: ${fontSize};
	text-transform: uppercase;
	color: ${color};
`
);

export const StyledBoldText = styled.span`
	font-family: Arial;
	font-weight: 600;
	line-height: 0.7;
	font-size: 100px;
	text-transform: uppercase;
`;

export const StyledText = styled.div`
	position: relative;
	left: 0px;
	animation: move 8s ease-in-out infinite;
	@keyframes move {
		0% {
			left: 200px;
		}
		50% {
			left: 0px;
		}
		100% {
			left: 200px;
		}
	}
`;
export const StyledAltText = styled.div`
	position: relative;
	left: 0px;
	animation: movetwo 8s ease-in-out infinite;

	@keyframes movetwo {
		0% {
			left: 0px;
		}
		50% {
			left: 200px;
		}
		100% {
			left: 0px;
		}
	}
`;

export const StyledTextContainer = styled.div`
	height: 500px;
	margin-top: 25%;
	position: relative;
	display: flex-box;
	flex-direction: column;
	clip-path: circle(250px);
	overflow: none;
	grid-column-start: 2;
	grid-column-end: 3;
`;
