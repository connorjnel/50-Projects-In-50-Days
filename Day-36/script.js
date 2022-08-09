const container = document.getElementById("container");

const colors1 = ["#ff595e", "#ffca3a", "#8ac926", "#1982c4", "#6a4c93"];
const colors2 = ["#ffbe0b", "#fb5607", "#ff006e", "#8338ec", "#3a86ff"];
const colors3 = ["#af3800", "#fe621d", "#fd5200", "#00cfc1", "#00ffe7"];

const btnColor1 = document.getElementById("color1");
const btnColor2 = document.getElementById("color2");
const btnColor3 = document.getElementById("color3");

let colors = ["#ff595e", "#ffca3a", "#8ac926", "#1982c4", "#6a4c93"];

const SQUARES = 1950;

btnColor1.addEventListener("click", () => {
	colors = colors1;
});

btnColor2.addEventListener("click", () => {
	colors = colors2;
});

btnColor3.addEventListener("click", () => {
	colors = colors3;
});

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

function getRandomColor(color) {
	return colors[Math.floor(Math.random() * colors.length)];
}
