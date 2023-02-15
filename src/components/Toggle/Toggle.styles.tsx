import styled from "styled-components";

export const StyledLabel = styled.label`
	display: flex;
	align-items: center;
	gap: 10px;
	cursor: pointer;
`;

export const StyledSwitch = styled.div`
	position: relative;
	width: 60px;
	height: 32px;

	border: white 1px solid;
	border-radius: 32px;
	padding: 4px;
	transition: 300ms all;

	&:before {
		transition: 300ms all;
		content: "";
		position: absolute;
		width: 28px;
		height: 28px;
		border-radius: 35px;
		top: 50%;
		left: 4px;
		background: white;
		transform: translate(0, -50%);
	}
`;

export const StyledInput = styled.input`
	display: none;

	&:checked + ${StyledSwitch} {
		&:before {
			transform: translate(32px, -50%);
		}
	}
`;
