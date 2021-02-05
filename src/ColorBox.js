import "./ColorBox.css";

const ColorBox = ({ color, change }) => {
	return (
		<div className="ColorBox" style={{ backgroundColor: color }}>
			{change}
		</div>
	);
};

export default ColorBox;
