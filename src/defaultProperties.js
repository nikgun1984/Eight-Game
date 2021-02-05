const getRandomColor = () => {
	const letters = "0123456789ABCDEF";
	let color = "#";
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
};

const colors = [];

for (let i = 0; i < 16; i++) {
	colors.push(getRandomColor());
}

const randIdex = (arr) => {
	const randInt = Math.floor(Math.random() * colors.length);
	return arr[randInt];
};

export { colors, randIdex };
