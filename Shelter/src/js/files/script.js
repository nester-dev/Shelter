// Подключение функционала 
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

export function hover() {
	const menuLink = document.querySelectorAll(".menu__link");
	console.log(menuLink);
}