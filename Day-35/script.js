const container = document.getElementById("imgs");
const images = document.querySelectorAll("img");
const btnLeft = document.getElementById("left");
const btnRight = document.getElementById("right");

// My solution
// Solution works but not scalable at all, depends on having 4 images, focused too much on absolute value for translate and not on scaling by multiplying index value by 500 which is more scalable, also could not get the auto rotate to work

// let value = 0;

// btnRight.addEventListener("click", (e) => {
// 	if (value > -1500) {
// 		value -= 500;
// 		console.log(value);
// 		container.style = `transform: translateX(${value}px);`;
// 	} else {
// 		value = 0;
// 		container.style = `transform: translateX(${value}px);`;
// 	}
// });

// btnLeft.addEventListener("click", (e) => {
// 	if (value < 0) {
// 		value += 500;
// 		console.log(value);
// 		container.style = `transform: translateX(${value}px);`;
// 	} else {
// 		value = -1500;
// 		container.style = `transform: translateX(${value}px);`;
// 	}
// });

// Course solution

let idx = 0;

let interval = setInterval(run, 2000);

function run() {
	idx++;
	changeImage();
}

function changeImage() {
	if (idx > images.length - 1) {
		idx = 0;
	} else if (idx < 0) {
		idx = images.length - 1;
	}

	container.style.transform = `translateX(${-idx * 500}px)`;
}

function resetInterval() {
	clearInterval(interval);
	interval = setInterval(run, 2000);
}

btnRight.addEventListener("click", () => {
	idx++;
	changeImage();
	resetInterval();
});

btnLeft.addEventListener("click", () => {
	idx--;
	changeImage();
	resetInterval();
});
