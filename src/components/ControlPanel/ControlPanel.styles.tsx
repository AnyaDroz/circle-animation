import styled from "styled-components";
import { isBoxedPrimitive } from "util/types";

export const StyledControlPanel = styled.div`
	padding: 40px;
	border: 1px solid black;
	height: 100vh;
	grid-column-start: 1;
	grid-column-end: 2;
`;

export const StyledPageGrid = styled.div`
	display: grid;
	grid-template-columns: 30% 70%;
`;
