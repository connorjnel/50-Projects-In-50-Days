const container = document.getElementById("container");
const colors = ["#ff595e", "#ffca3a", "#8ac926", "#1982c4", "#6a4c93"];
const SQUARES = 1950;

for (let i = 0; i < SQUARES; i++) {
	const square = document.createElement("div");
	square.classList.add("square");

	container.appendChild(square);

	square.addEventListener("mouseover", () => setColor(square));
	square.addEventListener("mouseout", () => removeColor(square));
}

function setColor(element) {
	const color = getRandomColor();
	element.style.background = color;
	element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
	element.style.background = "#1d1d1d";
	element.style.boxShadow = "0 0 2px black";
}

function getRandomColor() {
	return colors[Math.floor(Math.random() * colors.length)];
}
