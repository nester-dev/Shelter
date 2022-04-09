// Подключение функционала 
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

const body = document.querySelector("body"),
	lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + "px",
	menuLinks = document.querySelectorAll(".menu__link");

function isWebp() {
	// Проверка поддержки webp
	function testWebP(callback) {
		let webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}
	// Добавление класса _webp или _no-webp для HTML
	testWebP(function (support) {
		let className = support === true ? 'webp' : 'no-webp';
		document.documentElement.classList.add(className);
	});
}

let pets = [
	{
		"name": "Jennifer",
		"img": "../../assets/images/jennifer.png",
		"type": "Dog",
		"breed": "Labrador",
		"description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
		"age": "2 months",
		"inoculations": ["none"],
		"diseases": ["none"],
		"parasites": ["none"]
	},
	{
		"name": "Sophia",
		"img": "../../assets/images/sophia.png",
		"type": "Dog",
		"breed": "Shih tzu",
		"description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
		"age": "1 month",
		"inoculations": ["parvovirus"],
		"diseases": ["none"],
		"parasites": ["none"]
	},
	{
		"name": "Woody",
		"img": "../../assets/images/woody.png",
		"type": "Dog",
		"breed": "Golden Retriever",
		"description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
		"age": "3 years 6 months",
		"inoculations": ["adenovirus", "distemper"],
		"diseases": ["right back leg mobility reduced"],
		"parasites": ["none"]
	},
	{
		"name": "Scarlett",
		"img": "../../assets/images/scarlett.png",
		"type": "Dog",
		"breed": "Jack Russell Terrier",
		"description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
		"age": "3 months",
		"inoculations": ["parainfluenza"],
		"diseases": ["none"],
		"parasites": ["none"]
	},
	{
		"name": "Katrine",
		"img": "../../assets/images/katrine.png",
		"type": "Cat",
		"breed": "British Shorthair",
		"description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
		"age": "6 months",
		"inoculations": ["panleukopenia"],
		"diseases": ["none"],
		"parasites": ["none"]
	},
	{
		"name": "Timmy",
		"img": "../../assets/images/timmy.png",
		"type": "Cat",
		"breed": "British Shorthair",
		"description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
		"age": "2 years 3 months",
		"inoculations": ["calicivirus", "viral rhinotracheitis"],
		"diseases": ["kidney stones"],
		"parasites": ["none"]
	},
	{
		"name": "Freddie",
		"img": "../../assets/images/freddie.png",
		"type": "Cat",
		"breed": "British Shorthair",
		"description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
		"age": "2 months",
		"inoculations": ["rabies"],
		"diseases": ["none"],
		"parasites": ["none"]
	},
	{
		"name": "Charly",
		"img": "../../assets/images/charly.png",
		"type": "Dog",
		"breed": "Jack Russell Terrier",
		"description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
		"age": "8 years",
		"inoculations": ["bordetella bronchiseptica", "leptospirosis"],
		"diseases": ["deafness", "blindness"],
		"parasites": ["lice", "fleas"]
	}
];

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

function addLoadedClass() {
	window.addEventListener("load", function () {
		setTimeout(function () {
			document.documentElement.classList.add('loaded');
		}, 1000);
	});

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
		if (document.querySelector(".slider")) {
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
	}

	if (document.querySelector('.slider-next')) {
		document.querySelector('.slider-next').addEventListener('click', () => {
			count += itemsPerSlide;
			if (count >= sliderItem.length) {
				count = 0;
			}
			rollSlider();
		});
	}

	if (document.querySelector('.slider-prev')) {
		document.querySelector('.slider-prev').addEventListener('click', () => {
			count -= itemsPerSlide;
			if (count < 0) {
				count = sliderItem.length - 1;
			}
			rollSlider();
		});
	}


	function rollSlider() {
		sliderLine.style.transform = 'translate(-' + count / itemsPerSlide * width + 'px)';
	}

	window.addEventListener('resize', init);

	init();
	popup();
}

function paggination() {
	const content = document.querySelector(".paggination__content"),
		firstPage = document.querySelector(".nav__item_first-page"),
		previousPage = document.querySelector(".nav__item_previous"),
		nextPage = document.querySelector(".nav__item_next"),
		lastPage = document.querySelector(".nav__item_last-page"),
		currentPage = document.querySelector(".current-page"),
		paginationBar = document.querySelector(".paggination__nav");
	let petsArr = [];

	pets.forEach(element => {
		for (let i = 0; i < 6; i++) {
			petsArr.push(element);
		}
	});

	let cardsOnPage;
	if (window.innerWidth > 1296) {
		cardsOnPage = 8;
	} else if (window.innerWidth > 640 && window.innerWidth < 1297) {
		cardsOnPage = 6;
	} else if (window.innerWidth < 640) {
		cardsOnPage = 3;
	}

	let page = 1;
	let count = 1;
	let pageCount = Math.ceil(petsArr.length / cardsOnPage);
	let contentIndex = {};

	function shuffle(array) {
		for (let i = array.length - 1; i > 0; i--) {
			let j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
	}

	shuffle(petsArr);

	function createPetCard(index) {
		let petCard = document.createElement("div");
		petCard.classList.add("pet-card", "popup-link");
		let petImage = document.createElement("img");
		petImage.classList.add("pet-card__img");
		petImage.setAttribute("src", `img/pet-cards/${petsArr[index].name.toLowerCase()}.png`);
		let petName = document.createElement('h3');
		petName.classList.add("pet-card__name");
		petName.innerHTML = petsArr[index].name;
		let petCardButton = document.createElement("a");
		petCardButton.classList.add("button", "button_light");
		petCardButton.setAttribute('href', "#");
		petCardButton.innerHTML = "Learn more";
		petCard.appendChild(petImage);
		petCard.appendChild(petName);
		petCard.appendChild(petCardButton);
		return petCard;
	}

	function init() {
		for (let x = 0; x < pageCount; x++) {
			let wrapper = document.createElement('div');
			if (x == 0) {
				wrapper.classList.add("paggination__wrapper", "visible");
			} else {
				wrapper.classList.add("paggination__wrapper");
			}
			let petsUsed = [];
			for (let i = 0; i < cardsOnPage; i++) {
				for (let y = 0; y < petsArr.length; y++) {
					if (petsUsed.length == cardsOnPage) {
						break;
					}
					if (!petsUsed.includes(petsArr[y].name)) {
						petsUsed.push(petsArr[y].name);
						wrapper.appendChild(createPetCard(y));
						petsArr.splice(y, 1);
					}
				}
			}
			contentIndex[count] = wrapper;
			count++;
		}
		content.appendChild(contentIndex[1]);
	}

	function removeClassVisible(item) {
		item.classList.remove("visible");
	}

	function incPage() {
		if (page < pageCount) {
			page++;
		}
		if (page != 1) {
			firstPage.classList.remove("disabled");
			previousPage.classList.remove("disabled");
		}
		if (page == pageCount) {
			nextPage.classList.add("disabled");
			lastPage.classList.add("disabled");
		}
	}

	function decPage() {
		if (page > 1) {
			page--;
		}
		if (page != lastPage) {
			lastPage.classList.remove("disabled");
			nextPage.classList.remove("disabled");
		}
		if (page == 1) {
			previousPage.classList.add("disabled");
			firstPage.classList.add("disabled");
		}
	}

	function changeContent(index) {
		setTimeout(() => {
			let newContent = contentIndex[index];
			let contentWrapper = document.querySelector(".paggination__wrapper");
			content.appendChild(newContent);
			contentWrapper.classList.remove("remove");
			currentPage.innerHTML = page;
			content.removeChild(contentWrapper);
			setTimeout(() => {
				document.querySelector(".paggination__wrapper").classList.add("visible");
			}, 100);
			popup();
		}, 100);

	}

	if (paginationBar) {
		paginationBar.addEventListener('click', e => {
			if (e.target == nextPage && !nextPage.classList.contains("disabled")) {
				let contentWrapper = document.querySelector(".paggination__wrapper");
				contentWrapper.classList.add("remove");
				removeClassVisible(contentWrapper);
				incPage();
				changeContent(page);
			}
			if (e.target == previousPage && !previousPage.classList.contains("disabled")) {
				let contentWrapper = document.querySelector(".paggination__wrapper");
				removeClassVisible(contentWrapper);
				decPage();
				changeContent(page);
			}
			if (e.target == lastPage && !lastPage.classList.contains("disabled")) {
				let contentWrapper = document.querySelector(".paggination__wrapper");
				contentWrapper.classList.add("remove");
				removeClassVisible(contentWrapper);
				page = pageCount;
				incPage();
				changeContent(page);
			}
			if (e.target == firstPage && !firstPage.classList.contains("disabled")) {
				let contentWrapper = document.querySelector(".paggination__wrapper");
				removeClassVisible(contentWrapper);
				page = 1;
				decPage();
				changeContent(page);
			}
		});
	}
	init();
	popup();
}


isWebp();
burger();
addLoadedClass();
slider();
paggination();

