// Подключение функционала 
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

const body = document.querySelector("body"),
	lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + "px",
	menuLinks = document.querySelectorAll(".menu__link");

function addLoadedClass() {
	window.addEventListener("load", function () {
		setTimeout(function () {
			document.documentElement.classList.add('loaded');
		}, 1000);
	});

}

function bodyLock(delay) {
	setTimeout(function () {
		body.style.paddingRight = lockPaddingValue;
		body.classList.add('lock');
	}, delay);

}
function bodyUnlock(delay) {
	setTimeout(function () {
		body.style.paddingRight = '0px';
		body.classList.remove('lock');
	}, delay);
}

function bodyUnlockToogle(delay) {
	if (body.classList.contains('lock')) {
		bodyUnlock(delay);
	} else {
		bodyLock();
	}
}

function popup() {
	const popupLinks = document.querySelectorAll(".popup-link"),
		popup = document.querySelector(".popup"),
		closeIcon = document.querySelectorAll(".popup__close");
	const delay = 700;



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
					bodyUnlock(delay);
					e.preventDefault();
				}
			});
		});
	}

	popupClose();
}


function burger() {
	const menuIcon = document.querySelector(".icon-menu"),
		menuBody = document.querySelector(".menu__body"),
		overlay = document.querySelector(".overlay");

	const delay = 300;

	const menuClose = () => {
		document.documentElement.classList.remove("menu-open");
		moveLogo();
		menuBody.classList.remove("menu__body_active");
		overlay.classList.remove("overlay_active");
		bodyUnlockToogle(delay);
	};

	menuIcon.addEventListener('click', () => {
		document.documentElement.classList.toggle("menu-open");
		moveLogo();
		menuBody.classList.toggle("menu__body_active");
		overlay.classList.toggle("overlay_active");
		bodyUnlockToogle(delay);
	});

	overlay.addEventListener('click', menuClose);

	window.addEventListener('resize', () => {
		if (window.innerWidth < 768) {
			menuLinks.forEach(item => {
				item.addEventListener('click', menuClose);
			});
		}
	});


}

function moveLogo(delay) {
	const logo = document.querySelector(".header__logo"),
		html = document.documentElement;
	setTimeout(function () {
		if (html.classList.contains("menu-open") && window.innerWidth < 768) {
			document.querySelector('.menu__body').prepend(logo);
			logo.classList.add("header__logo_replace");
		} else {
			document.querySelector(".header__container").prepend(logo);
			logo.classList.remove("header__logo_replace");
		}
	}, delay);
}

function slider() {
	const sliderItem = document.querySelectorAll('.slider-item'),
		sliderLine = document.querySelector(".slider-line");

	let itemsPerSlide;
	if (window.innerWidth > 1082) {
		itemsPerSlide = 3;
	} else if (window.innerWidth > 712) {
		itemsPerSlide = 2;
	} else if (window.innerWidth < 712) {
		itemsPerSlide = 1;
	}

	let count = 0;
	let width;

	function init() {
		width = document.querySelector(".slider").offsetWidth;
		sliderLine.style.width = width * sliderItem.length + 'px';
		sliderItem.forEach((item, index) => {
			if (itemsPerSlide == 1) {
				sliderItem[index].style.marginRight = (width - (270 * itemsPerSlide)) / 2 + 'px';
				sliderItem[index].style.marginLeft = (width - (270 * itemsPerSlide)) / 2 + 'px';
			} else {
				if ((index + 1) % itemsPerSlide !== 0) {
					sliderItem[index].style.marginRight = (width - (270 * itemsPerSlide)) / (itemsPerSlide - 1) + 'px';
				}
			}
		});
		rollSlider();
	}

	document.querySelector('.slider-next').addEventListener('click', () => {
		count += itemsPerSlide;
		if (count >= sliderItem.length) {
			count = 0;
		}
		rollSlider();
	});

	document.querySelector('.slider-prev').addEventListener('click', () => {
		count -= itemsPerSlide;
		if (count < 0) {
			count = sliderItem.length - 1;
		}
		rollSlider();
	});

	function rollSlider() {
		sliderLine.style.transform = 'translate(-' + count / itemsPerSlide * width + 'px)';
	}

	window.addEventListener('resize', init);


	init();
}

addLoadedClass();
burger();
slider();
popup();
