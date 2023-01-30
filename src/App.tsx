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
	const handleChange = (event: any) => {
		setText(event.target.value);
	};

	const handleSlider = (event: any) => {
		setValue(event.target.value);
		console.log(value);
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

					<input onChange={handleSlider} type="range" min="1" max="100" />
				</StyledControlPanel>
				<CircleText
					backgroundImageUrl=""
					text={text}
					fontSize={`${value}px`}
					color="black"
				/>
			</StyledPageGrid>
		</div>
	);
}

export default App;
