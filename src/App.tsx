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

	const handleChange = (event: any) => {
		setText(event.target.value);
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
				</StyledControlPanel>
				<CircleText backgroundImageUrl="" text={text} />
			</StyledPageGrid>
		</div>
	);
}

export default App;
