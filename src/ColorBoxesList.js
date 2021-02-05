import ColorBox from "./ColorBox";
import { colors, randIdex } from "./defaultProperties";
import "./ColorBoxesList.css";
import { useState } from "react";

const ColorBoxesList = (props) => {
	const [boxes, setBoxes] = useState(
		Array.from({ length: colors.length }, () => randIdex(colors))
	);
	const [isChanged, setChanged] = useState(null);

	const updateBox = function () {
		const randIdx = Math.floor(Math.random() * colors.length);
		setBoxes((boxes) => {
			const coloredBoxes = [...boxes];
			coloredBoxes[randIdx] = randIdex(boxes);
			setChanged(randIdx);
			return coloredBoxes;
		});
	};
	const colorBoxes = boxes.map((color, i) => (
		<ColorBox
			key={i}
			color={color}
			change={
				isChanged === i ? <em style={{ color: "black" }}>Changed!!!</em> : color
			}
		/>
	));

	return (
		<div className="ColorBoxesList">
			<div id="grid">
				{colorBoxes}
				<button className="ColorBoxesList-Button" onClick={updateBox}>
					Change
				</button>
			</div>
		</div>
	);
};

export default ColorBoxesList;
