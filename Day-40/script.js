// Boxes need to shift background position by 125px increments, background position has x and y , x first then y
// first row is 4 boxes, values start at -125px and add -125px so box 1 = -125px 0px, box 2 = -250px 0px etc
// row 2 the first has 0px for x, and -125px for y, need to insert boxes using js, button adds spin effect, add big class to boxes

const boxes = document.getElementById("boxes");
const button = document.getElementById("btn");

function createBoxes() {
	for (let i = 0; i < 4; i++) {
		for (let j = 0; j < 4; j++) {
			const box = document.createElement("div");
			box.classList.add("box");
			box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`;
			boxes.appendChild(box);
		}
	}
}

button.addEventListener("click", () => {
	boxes.classList.toggle("big");
});

createBoxes();
