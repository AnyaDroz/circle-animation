import styled from "styled-components";

type StyledTextProps = {
	fontSize: string;
	color: string;
	fontFamily: string;
};

export const StyledLightText = styled.span<StyledTextProps>(
	({ fontSize, color, fontFamily }) => `
	font-family: ${fontFamily};
	font-weight: 200;
	line-height: 0.7;
	font-size: ${fontSize};
	
	color: ${color};
`
);

export const StyledBoldText = styled.span<StyledTextProps>(
	({ color, fontSize, fontFamily }) => `
	font-family: ${fontFamily};
	font-weight: 600;
	line-height: 0.7;
	font-size: ${fontSize};
	
	color: ${color};
`
);

export const StyledText = styled.div`
	position: relative;
	left: -50%;
	animation: move 10s ease-in-out infinite;

	@keyframes move {
		0% {
			left: 0%;
		}
		50% {
			left: -50%;
		}
		100% {
			left: 0%;
		}
	}
`;
export const StyledAltText = styled.div`
	position: relative;

	left: -20%;
	animation: movetwo 8s ease-in-out infinite;

	@keyframes movetwo {
		0% {
			left: -20%;
		}
		50% {
			left: 0%;
		}
		100% {
			left: -20%;
		}
	}
`;

export const StyledTextContainer = styled.div`
	height: 500px;
	top: 50px;
	position: relative;
	display: flex;
	overflow: hidden;
	flex-direction: column;
	clip-path: circle(250px);
`;
