const panels = document.querySelectorAll(".panel"); // Select all panel elements

// Run through node list of panels
panels.forEach((panel) => {
	// Listen for click event
	panel.addEventListener("click", () => {
		// Run function that removes classes, use function for this as its only running on single object
		removeActiveClasses();
		// Add active class
		panel.classList.add("active");
	});
});

function removeActiveClasses() {
	panels.forEach((panel) => {
		panel.classList.remove("active");
	});
}
