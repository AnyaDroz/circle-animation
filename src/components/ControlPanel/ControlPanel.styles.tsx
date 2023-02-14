import styled from "styled-components";

export const StyledControlPanel = styled.div`
	display: flex;
`;

export const StyledPageGrid = styled.div`
	display: grid;

	height: 100vh;
	background: linear-gradient(180deg, #3125bf 0%, #af7c30 100%);
`;

export const StyledInput = styled.input`
	margin: 20px;
	border: none;
	height: 60px;
	width: 50%;
	font-size: 50px;
	font-family: "PowerGroteskItalic";

	:checked {
		color: red;
	}
`;
