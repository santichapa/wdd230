const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const body = document.querySelector("body");
const root = document.querySelector(":root");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🌙")) {
		root.style.setProperty("--primary-color", "#000");
		root.style.setProperty("--secondary-color", "#5299c3");
		root.style.setProperty("--accent1-color", "#fff");
		root.style.setProperty("--accent2-color", "#f77c73");
		root.style.setProperty("--accent3-color", "#d3d3d3");
		modeButton.textContent = "☀️";
	} else {
		root.style.setProperty("--primary-color", "#fff");
		root.style.setProperty("--secondary-color", "#124d6f");
		root.style.setProperty("--accent1-color", "#333");
		root.style.setProperty("--accent2-color", "#90342e");
		root.style.setProperty("--accent3-color", "#333");
		modeButton.textContent = "🌙";
	}
});