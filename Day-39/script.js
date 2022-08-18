const background = document.getElementById("background");
const password = document.getElementById("password");

// each character in password input equals less 2px on background blur, blur = password.input

password.addEventListener("input", () => {
	let passwordLength = password.value.length;
	let blurValue = 20 - passwordLength * 2;

	background.style.filter = `blur(${blurValue}px)`;
});
