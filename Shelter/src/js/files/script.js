// Подключение функционала 
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

function popup() {
	const popupLinks = document.querySelectorAll(".popup-link"),
		popup = document.querySelector(".popup"),
		closeIcon = document.querySelectorAll(".popup__close"),
		body = document.querySelector("body");
	const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + "px";


	popupLinks.forEach((item, index) => {
		item.addEventListener("click", function (e) {
			popup.classList.add("popup-open");
			bodyLock();
			e.preventDefault();
		});
	});

	function popupClose() {
		popup.addEventListener('click', function (e) {
			closeIcon.forEach(item => {
				if (e.target == item || !e.target.closest(".popup__content")) {
					popup.classList.remove("popup-open");
					bodyUnlock();
					e.preventDefault();
				}
			});
		});
	}

	function bodyLock() {
		body.style.paddingRight = lockPaddingValue;
		body.style.overflow = 'hidden';
		body.classList.add('lock');
	}
	function bodyUnlock() {
		setTimeout(function () {
			body.style.paddingRight = '0px';
			body.style.overflow = 'auto';
			body.classList.remove('lock');
		}, 700);
	}

	popupClose();
}





popup();
