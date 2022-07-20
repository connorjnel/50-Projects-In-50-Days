const starMe = document.querySelector(".starMe");
const times = document.querySelector("#times");

let clickTime = 0;
let timesClicked = 0;

starMe.addEventListener("click", (e) => {
	if (clickTime === 0) {
		clickTime = new Date().getTime();
	} else {
		if (new Date().getTime() - clickTime < 800) {
			createStar(e);
			clickTime = 0;
		} else {
			clickTime = new Date().getTime();
		}
	}
});

const createStar = (e) => {
	const star = document.createElement("i");
	star.classList.add("fas");
	star.classList.add("fa-star");

	const x = e.clientX;
	const y = e.clientY;

	const leftOffset = e.target.offsetLeft;
	const topOffset = e.target.offsetTop;

	const xInside = x - leftOffset;
	const yInside = y - topOffset;

	star.style.top = `${yInside}px`;
	star.style.left = `${xInside}px`;

	starMe.appendChild(star);

	times.innerHTML = ++timesClicked;

	setTimeout(() => star.remove(), 1000);
};
