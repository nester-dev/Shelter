// Подключение функционала 
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

const body = document.querySelector("body"),
	lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + "px";

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
//========================================================================================================================================================

let pets = [
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

function createPetCard(index, array) {
	let petCard = document.createElement("div");
	petCard.classList.add("pet-card", "popup-link");
	let petImage = document.createElement("img");
	petImage.classList.add("pet-card__img");
	petImage.setAttribute("src", `img/pet-cards/${array[index].name.toLowerCase()}.png`);
	let petName = document.createElement('h3');
	petName.classList.add("pet-card__name");
	petName.innerHTML = array[index].name;
	let petCardButton = document.createElement("a");
	petCardButton.classList.add("button", "button_light");
	petCardButton.setAttribute('href', "#");
	petCardButton.innerHTML = "Learn more";
	petCard.appendChild(petImage);
	petCard.appendChild(petName);
	petCard.appendChild(petCardButton);
	return petCard;
}

function shuffle(array) {
	for (let i = array.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
}

//==================================================================POPUP======================================================================================
function popup() {
	const popupLinks = document.querySelectorAll(".popup-link"),
		popup = document.querySelector(".popup"),
		closeIcon = document.querySelectorAll(".popup__close"),
		popupImage = document.querySelector(".popup__img"),
		petName = document.querySelector(".descr__name"),
		petBreed = document.querySelector(".descr__breed"),
		petText = document.querySelector(".descr__text"),
		petDescr = document.querySelectorAll('[data-info]');
	const delay = 700;


	popupLinks.forEach(item => {
		item.addEventListener("click", function (e) {
			let name = item.querySelector(".pet-card__name").textContent;
			petName.innerHTML = name;
			popupImage.setAttribute("src", `img/pet-cards/${name.toLowerCase()}.png`);
			petBreed.innerHTML = `${pets[findPetInfo(name)]["type"]} - ${pets[findPetInfo(name)]["breed"]}`;
			petText.innerHTML = pets[findPetInfo(name)]["description"];
			petDescr.forEach(element => {
				switch (element.dataset.info) {
					case "age":
						element.lastChild.textContent = `: ${pets[findPetInfo(name)]["age"]}`;
						break;
					case "inoculations":
						element.lastChild.textContent = `: ${pets[findPetInfo(name)]["inoculations"]}`;
						break;
					case "diseases":
						element.lastChild.textContent = `: ${pets[findPetInfo(name)]["diseases"]}`;
						break;
					case "inocparasitesulations":
						element.lastChild.textContent = `: ${pets[findPetInfo(name)]["parasites"]}`;
						break;
				}
			});
			popup.classList.add("popup-open");
			bodyLock();
			e.preventDefault();
		});
	});

	function findPetInfo(name) {
		let index = 0;
		pets.forEach((item, itemIndex) => {
			if (item["name"] == name) {
				index = itemIndex;
			}
		});
		return index;
	}

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
//===============================================================BURGER=========================================================================================

function burger() {
	const menuIcon = document.querySelector(".icon-menu"),
		menuBody = document.querySelector(".menu__body"),
		overlay = document.querySelector(".overlay"),
		menuLinks = document.querySelectorAll(".menu__link");

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
	if (window.innerWidth < 768) {
		menuLinks.forEach(item => {
			item.addEventListener('click', menuClose);
		});
	}


}
//========================================================================================================================================================

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
//===============================================================SLIDER=========================================================================================

function slider() {
	const slider = document.querySelector(".slider");

	let sliderPets = pets;

	let itemsPerSlide;
	if (window.innerWidth > 1060) {
		itemsPerSlide = 3;
	} else if (window.innerWidth > 766) {
		itemsPerSlide = 2;
	} else if (window.innerWidth < 767) {
		itemsPerSlide = 1;
	}

	window.addEventListener('resize', () => {
		if (window.innerWidth > 1060) {
			itemsPerSlide = 3;
		} else if (window.innerWidth > 766) {
			itemsPerSlide = 2;
		} else if (window.innerWidth < 767) {
			itemsPerSlide = 1;
		}
		slider.removeChild(document.querySelector(".slider-line"));
		initSliderLine();
	});
	let existCards = [];

	function initSliderLine() {
		shuffle(sliderPets);
		existCards = [];
		let newSliderLine = document.createElement("div");
		newSliderLine.classList.add("slider-line");
		for (let y = 0; y < sliderPets.length; y++) {
			if (existCards.length == itemsPerSlide) {
				break;
			}
			if (!existCards.includes(sliderPets[y].name)) {
				existCards.push(sliderPets[y].name);
				newSliderLine.appendChild(createPetCard(y, sliderPets));
			}
		}
		slider.appendChild(newSliderLine);
		popup();
	}


	function createNewLine() {
		let newSliderLine = document.createElement("div");
		newSliderLine.classList.add("slider-line");
		let newPetArr = [];
		for (let y = 0; newPetArr.length < itemsPerSlide; y++) {
			let index = Math.floor(Math.random() * sliderPets.length);
			if (!newPetArr.includes(sliderPets[index].name) && !existCards.includes(sliderPets[index].name)) {
				newPetArr.push(sliderPets[index].name);
				newSliderLine.appendChild(createPetCard(index, sliderPets));
			}
		}
		existCards = newPetArr;
		return newSliderLine;
	}

	if (document.querySelector('.slider-next')) {
		document.querySelector('.slider-next').addEventListener('click', () => {
			rollSliderNext();
		});
	}

	if (document.querySelector('.slider-prev')) {
		document.querySelector('.slider-prev').addEventListener('click', () => {
			rollSliderPrev();
		});
	}

	function rollSliderPrev() {
		let newSliderLine = createNewLine();
		setTimeout(() => {
			newSliderLine.classList.add('slider-line_left');
			let existSliderLine = document.querySelector('.slider-line');
			existSliderLine.classList.add("slider-line_right");
			setTimeout(() => {
				slider.insertBefore(newSliderLine, existSliderLine);
				slider.removeChild(existSliderLine);
				setTimeout(() => {
					document.querySelector(".slider-line").classList.remove("slider-line_left");
				}, 100);
				popup();
			}, 100);
		}, 100);

	}

	function rollSliderNext() {
		let newSliderLine = createNewLine();
		setTimeout(() => {
			newSliderLine.classList.add('slider-line_right');
			let existSliderLine = document.querySelector('.slider-line');
			existSliderLine.classList.add("slider-line_left");
			setTimeout(() => {
				slider.appendChild(newSliderLine);
				slider.removeChild(existSliderLine);
				setTimeout(() => {
					document.querySelector(".slider-line").classList.remove("slider-line_right");
				}, 100);
				popup();
			}, 100);
		}, 100);

	}

	initSliderLine();
	popup();
}

//=================================================================PAGINATION=======================================================================================
function paggination() {
	const content = document.querySelector(".paggination__content"),
		firstPage = document.querySelector(".nav__item_first-page"),
		previousPage = document.querySelector(".nav__item_previous"),
		nextPage = document.querySelector(".nav__item_next"),
		lastPage = document.querySelector(".nav__item_last-page"),
		currentPage = document.querySelector(".current-page"),
		paginationBar = document.querySelector(".paggination__nav");


	let cardsOnPage;
	if (window.innerWidth > 1296) {
		cardsOnPage = 8;
	} else if (window.innerWidth > 640 && window.innerWidth < 1297) {
		cardsOnPage = 6;
	} else if (window.innerWidth < 640) {
		cardsOnPage = 3;
	}

	let page = 1;
	let count;
	let pageCount;
	let contentIndex;

	window.addEventListener('resize', () => {
		content.removeChild(document.querySelector(".paggination__wrapper"));
		init();
	});

	function init() {
		let petsArr = pets;
		console.log(petsArr);

		let newArr = [];
		for (let i = 0; i < 6; i++) {
			shuffle(petsArr);
			for (let x = 0; x < petsArr.length; x++) {
				newArr.push(petsArr[x]);
			}
		}
		console.log(newArr);
		contentIndex = {};
		count = 1;
		if (window.innerWidth > 1279) {
			cardsOnPage = 8;
			pageCount = Math.ceil(newArr.length / cardsOnPage);
		} else if (window.innerWidth > 639) {
			cardsOnPage = 6;
			pageCount = Math.ceil(newArr.length / cardsOnPage);
		} else if (window.innerWidth < 640) {
			cardsOnPage = 3;
			pageCount = Math.ceil(newArr.length / cardsOnPage);
		}
		for (let x = 0; x < pageCount; x++) {
			let wrapper = document.createElement('div');
			if (x == 0) {
				wrapper.classList.add("paggination__wrapper", "visible");
			} else {
				wrapper.classList.add("paggination__wrapper");
			}
			for (let i = 0; i < cardsOnPage; i++) {
				wrapper.appendChild(createPetCard(0, newArr));
				newArr.splice(0, 1);
			}
			contentIndex[count] = wrapper;
			count++;
		}
		content.appendChild(contentIndex[1]);
		popup();
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
}
//========================================================================================================================================================

isWebp();
burger();
addLoadedClass();
if (document.querySelector(".slider")) {
	slider();
}
if (document.querySelector(".paggination")) {
	paggination();
}

