import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import CircleText from "./components/CircleText/CircleText";
import Toggle from "./components/Toggle/Toggle";
import {
	StyledControlPanel,
	StyledPageGrid,
	StyledInput,
	StyledSliderInput,
} from "./components/ControlPanel/ControlPanel.styles";
function App() {
	const [text, setText] = useState("");
	const [value, setValue] = useState("50");
	const [color, setColor] = useState("");
	const [row, setRow] = useState(20);

	const handleChange = (event: any) => {
		setText(event.target.value);
	};

	const handleSlider = (event: any) => {
		setValue(event.target.value);
	};

	const clickHandlerBlue = (event: any) => {
		setColor("#ffffff");
	};

	const onChange = (event: any) => {
		setColor("#ffffff");
	};

	return (
		<div className="App">
			<StyledPageGrid>
				<CircleText
					fontFamily="PowerGroteskItalic"
					fontFamilyBold="PowerGroteskHeavy"
					backgroundImageUrl=""
					text={text}
					fontSize={`${value}px`}
					color={color}
					numberOfRows={row}
				/>
				<StyledControlPanel>
					<StyledInput
						type="text"
						id="message"
						name="message"
						onChange={handleChange}
						value={text}
					/>
					<Toggle onChange={onChange} />

					<StyledSliderInput
						onChange={handleSlider}
						type="range"
						min="50"
						max="150"
					/>
				</StyledControlPanel>
			</StyledPageGrid>
		</div>
	);
}

export default App;
