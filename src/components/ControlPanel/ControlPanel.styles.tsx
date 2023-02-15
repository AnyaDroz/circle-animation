import styled from "styled-components";

export const StyledControlPanel = styled.div`
	display: flex;
	justify-content: space-between;
`;

type StyledPageGridProps = {
	color: string;
};

export const StyledPageGrid = styled.span<StyledPageGridProps>(
	({ color }) => `
	display: grid;
	height: 100vh;
	background: ${color}
`
);

export const StyledInput = styled.input`
	margin: auto;
	border: none;
	height: 60px;
	width: 50%;
	font-size: 50px;
	font-family: "PowerGroteskItalic";
`;

export const StyledSliderInput = styled.input`
	margin: auto;
	-webkit-appearance: none;
	width: 250px;
	height: 5px;
	background: #ffffff;
	outline: none;
	border-radius: 50px;
	-webkit-transition: 0.2s;
	transition: opacity 0.2s;
	transform: rotate(-7.6deg);
	::-moz-range-thumb {
		width: 25px;
		height: 25px;
		cursor: pointer;
	}
	::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		width: 20px;
		height: 20px;
		background: #ffffff;
		cursor: pointer;
		border-radius: 50px;
	}
`;
