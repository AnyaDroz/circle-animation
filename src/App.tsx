import { useState } from "react";
import logo from "./logo.svg";

import "./App.css";
import CircleText from "./components/CircleText/CircleText";
import {
	StyledControlPanel,
	StyledPageGrid,
} from "./components/ControlPanel/ControlPanel.styles";
function App() {
	const [text, setText] = useState("");
	const [value, setValue] = useState("");
	const [color, setColor] = useState("");

	const handleChange = (event: any) => {
		setText(event.target.value);
	};

	const handleSlider = (event: any) => {
		setValue(event.target.value);
		console.log(value);
	};

	// let colorArray = ["#1111ff", "#dd002c", "#000437", "#a02eba", "#105f0f"];
	// function randomNumber(min: number, max: number) {
	// 	return Math.floor(Math.random() * (max - min + 1) + min);
	// }
	// const clickHandler = (event: any) => {
	// 	let setNumber: number = randomNumber(1, 4);

	// 	let color = colorArray[setNumber];
	// 	console.log(color);
	// 	setColor(color);
	// };
	const clickHandlerBlue = (event: any) => {
		setColor("#1111ff");
	};
	const clickHandlerRed = (event: any) => {
		setColor("#dd002c");
	};

	return (
		<div className="App">
			<StyledPageGrid>
				<StyledControlPanel>
					<div>Enter a word</div>
					<input
						type="text"
						id="message"
						name="message"
						onChange={handleChange}
						value={text}
					/>
					<button onClick={clickHandlerBlue}>Blue</button>
					<button onClick={clickHandlerRed}>Red</button>
					<input onChange={handleSlider} type="range" min="1" max="100" />
				</StyledControlPanel>
				<CircleText
					backgroundImageUrl=""
					text={text}
					fontSize={`${value}px`}
					color={color}
				/>
			</StyledPageGrid>
		</div>
	);
}

export default App;
