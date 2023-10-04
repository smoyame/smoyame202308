const themeInput = document.querySelector("#toggle--theme");
const smileySVG = document.querySelector(".footer-svg");

const hasDarkMode = window.matchMedia("(prefers-color-scheme: dark)");
const page = document.querySelector("[data-color-scheme]");
const schemeAttribute = "data-color-scheme";
const flavorAttribute = "data-color-flavor";

let defaultScheme;
let altScheme;
let oppositeScheme;

let flavor;
let defaultFlavor;
let scheme;

if (
	(hasDarkMode.matches && sessionStorage.scheme == undefined) ||
	sessionStorage.scheme == "dark"
) {
	defaultScheme = "dark";
	altScheme = "light";
} else if (
	(!hasDarkMode.matches && sessionStorage.scheme == undefined) ||
	sessionStorage.scheme == "light"
) {
	defaultScheme = "light";
	altScheme = "dark";
} else if (sessionStorage.scheme || sessionStorage.scheme !== undefined) {
	defaultScheme = sessionStorage.scheme;
	altScheme = sessionStorage.oppositeScheme;
}

page.setAttribute(schemeAttribute, defaultScheme);

const swapScheme = () => {
	if (page.getAttribute(schemeAttribute) == defaultScheme) {
		oppositeScheme = altScheme;
	} else {
		oppositeScheme = defaultScheme;
	}

	page.setAttribute(schemeAttribute, oppositeScheme);
	sessionStorage.oppositeScheme = sessionStorage.scheme;
	sessionStorage.scheme = oppositeScheme;
};

themeInput.addEventListener("change", swapScheme);


let altFlavors = ["alertness", "vibes", "studious", "confident", "default"];
let place;

if (sessionStorage.flavor !== "undefined" || sessionStorage.flavor == "default") {
	defaultFlavor = sessionStorage.flavor;
	place = (altFlavors.indexOf(sessionStorage.flavor) + 1) % altFlavors.length;
} else {
	defaultFlavor = "default";
	place = 0;
}

page.setAttribute(flavorAttribute, defaultFlavor);

smileySVG.addEventListener("click", () => {
	flavor = altFlavors[place];

	page.setAttribute(flavorAttribute, flavor);
	sessionStorage.setItem("flavor", flavor);

	place = (place + 1) % altFlavors.length;
});

