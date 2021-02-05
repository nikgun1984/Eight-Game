import React, { useState } from "react";
import answers from "./answers";
import "./EightBall.css";

const EightBall = (props) => {
	const changeAttr = () => {
		const randAns = Math.floor(Math.random() * answers.length);
		const answer = answers[randAns];
		setColor(answer.color);
		setMessage(answer.msg);
		if (answer.color === "red") {
			setRedCount(redCount + 1);
		} else if (answer.color === "green") {
			setGreenCount(greenCount + 1);
		} else if (answer.color === "goldenrod") {
			setGoldenrodCount(goldenrodCount + 1);
		}
	};

	const resetState = () => {
		setColor("black");
		setMessage("Think of a Question");
		setRedCount(0);
		setGoldenrodCount(0);
		setGreenCount(0);
	};

	const [color, setColor] = useState("black");
	const [message, setMessage] = useState("Think of a Question");
	const [redCount, setRedCount] = useState(0);
	const [goldenrodCount, setGoldenrodCount] = useState(0);
	const [greenCount, setGreenCount] = useState(0);
	return (
		<>
			<div
				className="EightBall"
				style={{ backgroundColor: color }}
				onClick={changeAttr}
			>
				<p>{message}</p>
			</div>
			<p className="Eightball-Count" style={{ backgroundColor: "green" }}>
				Green Color Frequency: {greenCount}
			</p>
			<p className="Eightball-Count" style={{ backgroundColor: "goldenrod" }}>
				Goldenrod Color Frequency: {goldenrodCount}
			</p>
			<p className="Eightball-Count" style={{ backgroundColor: "red" }}>
				Red Color Frequency: {redCount}
			</p>
			<button className="EightBall-Reset" onClick={resetState}>
				Reset
			</button>
		</>
	);
};

export default EightBall;
