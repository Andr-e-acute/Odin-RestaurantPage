/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createContact: () => (/* binding */ createContact)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");

function createContact() {
  const contact = document.createElement("div");
  contact.id = "contact";

  contact.appendChild(
    (0,_home__WEBPACK_IMPORTED_MODULE_0__.createElement)(
      "p",
      "We are open from Monday to Saturday from 12:00 to 15:00 and from 18:00 to 23:00."
    )
  );
  contact.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", "We are closed on Sundays."));
  contact.appendChild(
    (0,_home__WEBPACK_IMPORTED_MODULE_0__.createElement)(
      "p",
      "You can make a reservation by phone or email, or just walk in."
    )
  );
  contact.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", "We accept cash and credit cards."));
  const img = document.createElement("img");
  img.src = "images/pseudo-map.jpg";
  img.alt = "Ai generate picture of italian cook";
  contact.appendChild(img);
  contact.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", "Contact Us:"));
  contact.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", "Via dei Fiori, 12"));
  contact.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", "00123 Roma"));
  contact.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", "Tel: 06 12345678"));
  contact.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", "Email:al.dente@pasta.it"));
  contact.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", ""));
  contact.appendChild(
    (0,_home__WEBPACK_IMPORTED_MODULE_0__.createElement)(
      "p",
      "We are located in the heart of Roma, near the Piazza Navona. You can easily reach us by public transport or by car."
    )
  );
  contact.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", ""));
  contact.appendChild(
    (0,_home__WEBPACK_IMPORTED_MODULE_0__.createElement)(
      "p",
      "By bus: Take the bus number 64 or 70 and get off at the stop Corso Vittorio Emanuele II/Navona."
    )
  );
  contact.appendChild(
    (0,_home__WEBPACK_IMPORTED_MODULE_0__.createElement)(
      "p",
      "By metro: Take the metro line A and get off at the station Spagna. Then walk for about 15 minutes along Via del Corso until you reach Via dei Fiori."
    )
  );
  contact.appendChild(
    (0,_home__WEBPACK_IMPORTED_MODULE_0__.createElement)(
      "p",
      "By car: You can park your car in the nearby parking garage in Via di Sant'Agostino. The parking fee is €2 per hour."
    )
  );
  return contact;
}




/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createElement: () => (/* binding */ createElement),
/* harmony export */   createHome: () => (/* binding */ createHome)
/* harmony export */ });
function createHome() {
  const home = document.createElement("div");
  home.id = "home";
  home.appendChild(createElement("p", "The perfect pasta every time."));
  home.appendChild(createElement("p", "Welcome to Al Dente,"));
  home.appendChild(
    createElement("p", "the best place to enjoy authentic Italian pasta.")
  );
  const img = document.createElement("img");
  img.src = "images/chef.jpg";
  img.alt = "Ai generate picture of italian cook";
  home.appendChild(img);
  home.appendChild(createElement("p", "Order online or visit us!"));
  return home;
}

function createElement(type, textContent) {
  const p = document.createElement(type);
  p.textContent = textContent;
  return p;
}



/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createMenu: () => (/* binding */ createMenu)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");


function createMenu() {
  const menu = document.createElement("div");
  menu.id = "menu";
  menu.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", "Our Menu"));

  const dishesContainer = document.createElement("div");
  dishesContainer.id = "dishesContainer";

  menuItems.forEach((element) => {
    const categoryContainer = document.createElement("div");
    categoryContainer.id = `${element.category.toLowerCase()}`;
    categoryContainer.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", element.category));

    element.items.forEach((dish) => {
      const food = document.createElement("div");
      food.classList.add("foodContainer");
      food.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", dish.name));
      food.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", dish.prize));
      food.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", dish.description));
      categoryContainer.appendChild(food);
    });

    dishesContainer.appendChild(categoryContainer);
    menu.appendChild(dishesContainer);
  });
  return menu;
}


// Menu
const menuItems = [
  {
    category: "Antipasti",
    items: [
      {
        name: "Bruschetta al pomodoro:",
        description:
          "Toasted bread topped with fresh tomatoes, basil and garlic.",
        prize: "€5",
      },
      {
        name: "Caprese:",
        description:
          "Fresh mozzarella, tomatoes and basil drizzled with olive oil and balsamic vinegar.",
        prize: "€7",
      },
    ],
  },
  {
    category: "Primi",
    items: [
      {
        name: "Spaghetti carbonara:",
        description:
          "Spaghetti tossed with eggs, bacon, cheese and black pepper.",
        prize: "€10",
      },
      {
        name: "Fettuccine alfredo:",
        description:
          "Fettuccine in a creamy sauce with butter and parmesan cheese.",
        prize: "€9",
      },
      {
        name: "Pasta alla norma:",
        description:
          "Penne with roasted aubergine, tomato sauce and ricotta cheese.",
        prize: "€9",
      },
      {
        name: "Lasagna:",
        description:
          "Layers of pasta, meat sauce, béchamel and cheese baked in the oven.",
        prize: "€11",
      },
      {
        name: "Cacio e pepe:",
        description: "Spaghetti with cheese and pepper.",
        prize: "€7",
      },
    ],
  },
  {
    category: "Secondi",
    items: [
      {
        name: "Pollo alla cacciatora:",
        description:
          "Chicken braised with tomatoes, mushrooms, olives and herbs.",
        prize: "€14",
      },
      {
        name: "Melanzane alla parmigiana:",
        description:
          "Baked aubergine with tomato sauce, mozzarella and parmesan cheese.",
        prize: "€13",
      },
    ],
  },
  {
    category: "Contorni",
    items: [
      {
        name: "Insalata mista:",
        description:
          "Mixed salad with lettuce, tomatoes, cucumbers and carrots.",
        prize: "€4",
      },
      {
        name: "Patate al forno:",
        description: "Roasted potatoes with rosemary and garlic.",
        prize: "€5",
      },
    ],
  },
];


/***/ }),

/***/ "./src/page-load.js":
/*!**************************!*\
  !*** ./src/page-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createPage: () => (/* binding */ createPage)
/* harmony export */ });
function createHeader() {
  const navElements = ["Home", "Menu", "Contact"];
  const header = document.createElement("header");
  header.id = "header";

  const logo = document.createElement("h1");
  logo.textContent = "Al Dente";

  const navbar = document.createElement("nav");
  navElements.forEach((element) => {
    const button = document.createElement(`button`);
    button.id = `${element.toLowerCase()}-button`;
    button.dataset.target = `${element}`;
    button.textContent = element;
    navbar.appendChild(button);
  });

  header.appendChild(logo);
  header.appendChild(navbar);
  return header;
}
function createFooter() {
  const footer = document.createElement("footer");
  const p = document.createElement("p");
  p.textContent = "Copyright © 2023";
  const link = document.createElement("a");
  link.href = "https://github.com/Andr-e-acute/Odin-RestaurantPage";
  link.textContent = "GitHubPage";
  footer.appendChild(p);
  footer.appendChild(link);
  return footer;
}
function createPage() {
  const content = document.querySelector("#content");
  // reset page to blank
  content.textContent = "";
  content.appendChild(createHeader());
  content.appendChild(document.createElement("main"));
  content.appendChild(createFooter());
}




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _page_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-load */ "./src/page-load.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ "./src/contact.js");





// createPage empty Page with header footer background
(0,_page_load__WEBPACK_IMPORTED_MODULE_0__.createPage)();
const main =document.querySelector("main")


// tab switching logic
const tabs = document.querySelectorAll("nav button");
// first time load set home-page active
setActive(document.querySelector("#menu-button"))

tabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    setActive(e.target);
    
  });
});
function setActive(clickedButton) {
console.log(clickedButton)
  clickedButton.classList.add("active");
       
  chooseContent(clickedButton.dataset.target);

  tabs.forEach((tab) => {
    if (tab !== clickedButton) {
      tab.classList = "";
    }
  });
}
function chooseContent(choice) {
    // reset and append 
     main.textContent="";

  switch (choice) {
    case "Home":
      main.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_1__.createHome)());
      break;
    case "Menu":
      main.appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_2__.createMenu)());
      break;
    case "Contact":
      main.appendChild((0,_contact__WEBPACK_IMPORTED_MODULE_3__.createContact)());
      break;
    default:
      break;
  }
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFDdkM7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSxvREFBYTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixvREFBYTtBQUNuQztBQUNBLElBQUksb0RBQWE7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0Isb0RBQWE7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0Isb0RBQWE7QUFDbkMsc0JBQXNCLG9EQUFhO0FBQ25DLHNCQUFzQixvREFBYTtBQUNuQyxzQkFBc0Isb0RBQWE7QUFDbkMsc0JBQXNCLG9EQUFhO0FBQ25DLHNCQUFzQixvREFBYTtBQUNuQztBQUNBLElBQUksb0RBQWE7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0Isb0RBQWE7QUFDbkM7QUFDQSxJQUFJLG9EQUFhO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLG9EQUFhO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLG9EQUFhO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFeUI7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6RHpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3FDOzs7Ozs7Ozs7Ozs7Ozs7O0FDckJFOztBQUV2QztBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsb0RBQWE7O0FBRWhDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDhCQUE4QiwrQkFBK0I7QUFDN0Qsa0NBQWtDLG9EQUFhOztBQUUvQztBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsb0RBQWE7QUFDcEMsdUJBQXVCLG9EQUFhO0FBQ3BDLHVCQUF1QixvREFBYTtBQUNwQztBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ3NCOztBQUV0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7OztBQ3JIQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixzQkFBc0I7QUFDekMsK0JBQStCLFFBQVE7QUFDdkM7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFc0I7Ozs7Ozs7VUN6Q3RCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNOeUM7QUFDTDtBQUNBO0FBQ007O0FBRTFDO0FBQ0Esc0RBQVU7QUFDVjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUF1QixpREFBVTtBQUNqQztBQUNBO0FBQ0EsdUJBQXVCLGlEQUFVO0FBQ2pDO0FBQ0E7QUFDQSx1QkFBdUIsdURBQWE7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tcmVzdGF1cmFudHBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnRwYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50cGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudHBhZ2UvLi9zcmMvcGFnZS1sb2FkLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnRwYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi9ob21lXCI7XG5mdW5jdGlvbiBjcmVhdGVDb250YWN0KCkge1xuICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFjdC5pZCA9IFwiY29udGFjdFwiO1xuXG4gIGNvbnRhY3QuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlRWxlbWVudChcbiAgICAgIFwicFwiLFxuICAgICAgXCJXZSBhcmUgb3BlbiBmcm9tIE1vbmRheSB0byBTYXR1cmRheSBmcm9tIDEyOjAwIHRvIDE1OjAwIGFuZCBmcm9tIDE4OjAwIHRvIDIzOjAwLlwiXG4gICAgKVxuICApO1xuICBjb250YWN0LmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFwiV2UgYXJlIGNsb3NlZCBvbiBTdW5kYXlzLlwiKSk7XG4gIGNvbnRhY3QuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlRWxlbWVudChcbiAgICAgIFwicFwiLFxuICAgICAgXCJZb3UgY2FuIG1ha2UgYSByZXNlcnZhdGlvbiBieSBwaG9uZSBvciBlbWFpbCwgb3IganVzdCB3YWxrIGluLlwiXG4gICAgKVxuICApO1xuICBjb250YWN0LmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFwiV2UgYWNjZXB0IGNhc2ggYW5kIGNyZWRpdCBjYXJkcy5cIikpO1xuICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBpbWcuc3JjID0gXCJpbWFnZXMvcHNldWRvLW1hcC5qcGdcIjtcbiAgaW1nLmFsdCA9IFwiQWkgZ2VuZXJhdGUgcGljdHVyZSBvZiBpdGFsaWFuIGNvb2tcIjtcbiAgY29udGFjdC5hcHBlbmRDaGlsZChpbWcpO1xuICBjb250YWN0LmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFwiQ29udGFjdCBVczpcIikpO1xuICBjb250YWN0LmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFwiVmlhIGRlaSBGaW9yaSwgMTJcIikpO1xuICBjb250YWN0LmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFwiMDAxMjMgUm9tYVwiKSk7XG4gIGNvbnRhY3QuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudChcInBcIiwgXCJUZWw6IDA2IDEyMzQ1Njc4XCIpKTtcbiAgY29udGFjdC5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KFwicFwiLCBcIkVtYWlsOmFsLmRlbnRlQHBhc3RhLml0XCIpKTtcbiAgY29udGFjdC5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KFwiYnJcIiwgXCJcIikpO1xuICBjb250YWN0LmFwcGVuZENoaWxkKFxuICAgIGNyZWF0ZUVsZW1lbnQoXG4gICAgICBcInBcIixcbiAgICAgIFwiV2UgYXJlIGxvY2F0ZWQgaW4gdGhlIGhlYXJ0IG9mIFJvbWEsIG5lYXIgdGhlIFBpYXp6YSBOYXZvbmEuIFlvdSBjYW4gZWFzaWx5IHJlYWNoIHVzIGJ5IHB1YmxpYyB0cmFuc3BvcnQgb3IgYnkgY2FyLlwiXG4gICAgKVxuICApO1xuICBjb250YWN0LmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoXCJiclwiLCBcIlwiKSk7XG4gIGNvbnRhY3QuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlRWxlbWVudChcbiAgICAgIFwicFwiLFxuICAgICAgXCJCeSBidXM6IFRha2UgdGhlIGJ1cyBudW1iZXIgNjQgb3IgNzAgYW5kIGdldCBvZmYgYXQgdGhlIHN0b3AgQ29yc28gVml0dG9yaW8gRW1hbnVlbGUgSUkvTmF2b25hLlwiXG4gICAgKVxuICApO1xuICBjb250YWN0LmFwcGVuZENoaWxkKFxuICAgIGNyZWF0ZUVsZW1lbnQoXG4gICAgICBcInBcIixcbiAgICAgIFwiQnkgbWV0cm86IFRha2UgdGhlIG1ldHJvIGxpbmUgQSBhbmQgZ2V0IG9mZiBhdCB0aGUgc3RhdGlvbiBTcGFnbmEuIFRoZW4gd2FsayBmb3IgYWJvdXQgMTUgbWludXRlcyBhbG9uZyBWaWEgZGVsIENvcnNvIHVudGlsIHlvdSByZWFjaCBWaWEgZGVpIEZpb3JpLlwiXG4gICAgKVxuICApO1xuICBjb250YWN0LmFwcGVuZENoaWxkKFxuICAgIGNyZWF0ZUVsZW1lbnQoXG4gICAgICBcInBcIixcbiAgICAgIFwiQnkgY2FyOiBZb3UgY2FuIHBhcmsgeW91ciBjYXIgaW4gdGhlIG5lYXJieSBwYXJraW5nIGdhcmFnZSBpbiBWaWEgZGkgU2FudCdBZ29zdGluby4gVGhlIHBhcmtpbmcgZmVlIGlzIOKCrDIgcGVyIGhvdXIuXCJcbiAgICApXG4gICk7XG4gIHJldHVybiBjb250YWN0O1xufVxuXG5leHBvcnQgeyBjcmVhdGVDb250YWN0IH07XG4iLCJmdW5jdGlvbiBjcmVhdGVIb21lKCkge1xuICBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaG9tZS5pZCA9IFwiaG9tZVwiO1xuICBob21lLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFwiVGhlIHBlcmZlY3QgcGFzdGEgZXZlcnkgdGltZS5cIikpO1xuICBob21lLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFwiV2VsY29tZSB0byBBbCBEZW50ZSxcIikpO1xuICBob21lLmFwcGVuZENoaWxkKFxuICAgIGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFwidGhlIGJlc3QgcGxhY2UgdG8gZW5qb3kgYXV0aGVudGljIEl0YWxpYW4gcGFzdGEuXCIpXG4gICk7XG4gIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGltZy5zcmMgPSBcImltYWdlcy9jaGVmLmpwZ1wiO1xuICBpbWcuYWx0ID0gXCJBaSBnZW5lcmF0ZSBwaWN0dXJlIG9mIGl0YWxpYW4gY29va1wiO1xuICBob21lLmFwcGVuZENoaWxkKGltZyk7XG4gIGhvbWUuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudChcInBcIiwgXCJPcmRlciBvbmxpbmUgb3IgdmlzaXQgdXMhXCIpKTtcbiAgcmV0dXJuIGhvbWU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodHlwZSwgdGV4dENvbnRlbnQpIHtcbiAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gIHAudGV4dENvbnRlbnQgPSB0ZXh0Q29udGVudDtcbiAgcmV0dXJuIHA7XG59XG5leHBvcnQgeyBjcmVhdGVIb21lLCBjcmVhdGVFbGVtZW50IH07XG4iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4vaG9tZVwiO1xuXG5mdW5jdGlvbiBjcmVhdGVNZW51KCkge1xuICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWVudS5pZCA9IFwibWVudVwiO1xuICBtZW51LmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoXCJoMlwiLCBcIk91ciBNZW51XCIpKTtcblxuICBjb25zdCBkaXNoZXNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkaXNoZXNDb250YWluZXIuaWQgPSBcImRpc2hlc0NvbnRhaW5lclwiO1xuXG4gIG1lbnVJdGVtcy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgY2F0ZWdvcnlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNhdGVnb3J5Q29udGFpbmVyLmlkID0gYCR7ZWxlbWVudC5jYXRlZ29yeS50b0xvd2VyQ2FzZSgpfWA7XG4gICAgY2F0ZWdvcnlDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudChcImgzXCIsIGVsZW1lbnQuY2F0ZWdvcnkpKTtcblxuICAgIGVsZW1lbnQuaXRlbXMuZm9yRWFjaCgoZGlzaCkgPT4ge1xuICAgICAgY29uc3QgZm9vZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBmb29kLmNsYXNzTGlzdC5hZGQoXCJmb29kQ29udGFpbmVyXCIpO1xuICAgICAgZm9vZC5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KFwiaDRcIiwgZGlzaC5uYW1lKSk7XG4gICAgICBmb29kLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgZGlzaC5wcml6ZSkpO1xuICAgICAgZm9vZC5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KFwicFwiLCBkaXNoLmRlc2NyaXB0aW9uKSk7XG4gICAgICBjYXRlZ29yeUNvbnRhaW5lci5hcHBlbmRDaGlsZChmb29kKTtcbiAgICB9KTtcblxuICAgIGRpc2hlc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjYXRlZ29yeUNvbnRhaW5lcik7XG4gICAgbWVudS5hcHBlbmRDaGlsZChkaXNoZXNDb250YWluZXIpO1xuICB9KTtcbiAgcmV0dXJuIG1lbnU7XG59XG5leHBvcnQgeyBjcmVhdGVNZW51IH07XG5cbi8vIE1lbnVcbmNvbnN0IG1lbnVJdGVtcyA9IFtcbiAge1xuICAgIGNhdGVnb3J5OiBcIkFudGlwYXN0aVwiLFxuICAgIGl0ZW1zOiBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwiQnJ1c2NoZXR0YSBhbCBwb21vZG9ybzpcIixcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgXCJUb2FzdGVkIGJyZWFkIHRvcHBlZCB3aXRoIGZyZXNoIHRvbWF0b2VzLCBiYXNpbCBhbmQgZ2FybGljLlwiLFxuICAgICAgICBwcml6ZTogXCLigqw1XCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiBcIkNhcHJlc2U6XCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgIFwiRnJlc2ggbW96emFyZWxsYSwgdG9tYXRvZXMgYW5kIGJhc2lsIGRyaXp6bGVkIHdpdGggb2xpdmUgb2lsIGFuZCBiYWxzYW1pYyB2aW5lZ2FyLlwiLFxuICAgICAgICBwcml6ZTogXCLigqw3XCIsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBjYXRlZ29yeTogXCJQcmltaVwiLFxuICAgIGl0ZW1zOiBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwiU3BhZ2hldHRpIGNhcmJvbmFyYTpcIixcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgXCJTcGFnaGV0dGkgdG9zc2VkIHdpdGggZWdncywgYmFjb24sIGNoZWVzZSBhbmQgYmxhY2sgcGVwcGVyLlwiLFxuICAgICAgICBwcml6ZTogXCLigqwxMFwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJGZXR0dWNjaW5lIGFsZnJlZG86XCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgIFwiRmV0dHVjY2luZSBpbiBhIGNyZWFteSBzYXVjZSB3aXRoIGJ1dHRlciBhbmQgcGFybWVzYW4gY2hlZXNlLlwiLFxuICAgICAgICBwcml6ZTogXCLigqw5XCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiBcIlBhc3RhIGFsbGEgbm9ybWE6XCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgIFwiUGVubmUgd2l0aCByb2FzdGVkIGF1YmVyZ2luZSwgdG9tYXRvIHNhdWNlIGFuZCByaWNvdHRhIGNoZWVzZS5cIixcbiAgICAgICAgcHJpemU6IFwi4oKsOVwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJMYXNhZ25hOlwiLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICBcIkxheWVycyBvZiBwYXN0YSwgbWVhdCBzYXVjZSwgYsOpY2hhbWVsIGFuZCBjaGVlc2UgYmFrZWQgaW4gdGhlIG92ZW4uXCIsXG4gICAgICAgIHByaXplOiBcIuKCrDExXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiBcIkNhY2lvIGUgcGVwZTpcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiU3BhZ2hldHRpIHdpdGggY2hlZXNlIGFuZCBwZXBwZXIuXCIsXG4gICAgICAgIHByaXplOiBcIuKCrDdcIixcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGNhdGVnb3J5OiBcIlNlY29uZGlcIixcbiAgICBpdGVtczogW1xuICAgICAge1xuICAgICAgICBuYW1lOiBcIlBvbGxvIGFsbGEgY2FjY2lhdG9yYTpcIixcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgXCJDaGlja2VuIGJyYWlzZWQgd2l0aCB0b21hdG9lcywgbXVzaHJvb21zLCBvbGl2ZXMgYW5kIGhlcmJzLlwiLFxuICAgICAgICBwcml6ZTogXCLigqwxNFwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJNZWxhbnphbmUgYWxsYSBwYXJtaWdpYW5hOlwiLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICBcIkJha2VkIGF1YmVyZ2luZSB3aXRoIHRvbWF0byBzYXVjZSwgbW96emFyZWxsYSBhbmQgcGFybWVzYW4gY2hlZXNlLlwiLFxuICAgICAgICBwcml6ZTogXCLigqwxM1wiLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgY2F0ZWdvcnk6IFwiQ29udG9ybmlcIixcbiAgICBpdGVtczogW1xuICAgICAge1xuICAgICAgICBuYW1lOiBcIkluc2FsYXRhIG1pc3RhOlwiLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICBcIk1peGVkIHNhbGFkIHdpdGggbGV0dHVjZSwgdG9tYXRvZXMsIGN1Y3VtYmVycyBhbmQgY2Fycm90cy5cIixcbiAgICAgICAgcHJpemU6IFwi4oKsNFwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJQYXRhdGUgYWwgZm9ybm86XCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlJvYXN0ZWQgcG90YXRvZXMgd2l0aCByb3NlbWFyeSBhbmQgZ2FybGljLlwiLFxuICAgICAgICBwcml6ZTogXCLigqw1XCIsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG5dO1xuIiwiZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xuICBjb25zdCBuYXZFbGVtZW50cyA9IFtcIkhvbWVcIiwgXCJNZW51XCIsIFwiQ29udGFjdFwiXTtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbiAgaGVhZGVyLmlkID0gXCJoZWFkZXJcIjtcblxuICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBsb2dvLnRleHRDb250ZW50ID0gXCJBbCBEZW50ZVwiO1xuXG4gIGNvbnN0IG5hdmJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XG4gIG5hdkVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBidXR0b25gKTtcbiAgICBidXR0b24uaWQgPSBgJHtlbGVtZW50LnRvTG93ZXJDYXNlKCl9LWJ1dHRvbmA7XG4gICAgYnV0dG9uLmRhdGFzZXQudGFyZ2V0ID0gYCR7ZWxlbWVudH1gO1xuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IGVsZW1lbnQ7XG4gICAgbmF2YmFyLmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gIH0pO1xuXG4gIGhlYWRlci5hcHBlbmRDaGlsZChsb2dvKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKG5hdmJhcik7XG4gIHJldHVybiBoZWFkZXI7XG59XG5mdW5jdGlvbiBjcmVhdGVGb290ZXIoKSB7XG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XG4gIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgcC50ZXh0Q29udGVudCA9IFwiQ29weXJpZ2h0IMKpIDIwMjNcIjtcbiAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICBsaW5rLmhyZWYgPSBcImh0dHBzOi8vZ2l0aHViLmNvbS9BbmRyLWUtYWN1dGUvT2Rpbi1SZXN0YXVyYW50UGFnZVwiO1xuICBsaW5rLnRleHRDb250ZW50ID0gXCJHaXRIdWJQYWdlXCI7XG4gIGZvb3Rlci5hcHBlbmRDaGlsZChwKTtcbiAgZm9vdGVyLmFwcGVuZENoaWxkKGxpbmspO1xuICByZXR1cm4gZm9vdGVyO1xufVxuZnVuY3Rpb24gY3JlYXRlUGFnZSgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbiAgLy8gcmVzZXQgcGFnZSB0byBibGFua1xuICBjb250ZW50LnRleHRDb250ZW50ID0gXCJcIjtcbiAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXIoKSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIikpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUZvb3RlcigpKTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlUGFnZSB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBjcmVhdGVQYWdlIH0gZnJvbSBcIi4vcGFnZS1sb2FkXCI7XG5pbXBvcnQgeyBjcmVhdGVIb21lIH0gZnJvbSBcIi4vaG9tZVwiO1xuaW1wb3J0IHsgY3JlYXRlTWVudSB9IGZyb20gXCIuL21lbnVcIjtcbmltcG9ydCB7IGNyZWF0ZUNvbnRhY3QgfSBmcm9tIFwiLi9jb250YWN0XCI7XG5cbi8vIGNyZWF0ZVBhZ2UgZW1wdHkgUGFnZSB3aXRoIGhlYWRlciBmb290ZXIgYmFja2dyb3VuZFxuY3JlYXRlUGFnZSgpO1xuY29uc3QgbWFpbiA9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIilcblxuXG4vLyB0YWIgc3dpdGNoaW5nIGxvZ2ljXG5jb25zdCB0YWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIm5hdiBidXR0b25cIik7XG4vLyBmaXJzdCB0aW1lIGxvYWQgc2V0IGhvbWUtcGFnZSBhY3RpdmVcbnNldEFjdGl2ZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21lbnUtYnV0dG9uXCIpKVxuXG50YWJzLmZvckVhY2goKHRhYikgPT4ge1xuICB0YWIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgc2V0QWN0aXZlKGUudGFyZ2V0KTtcbiAgICBcbiAgfSk7XG59KTtcbmZ1bmN0aW9uIHNldEFjdGl2ZShjbGlja2VkQnV0dG9uKSB7XG5jb25zb2xlLmxvZyhjbGlja2VkQnV0dG9uKVxuICBjbGlja2VkQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgXG4gIGNob29zZUNvbnRlbnQoY2xpY2tlZEJ1dHRvbi5kYXRhc2V0LnRhcmdldCk7XG5cbiAgdGFicy5mb3JFYWNoKCh0YWIpID0+IHtcbiAgICBpZiAodGFiICE9PSBjbGlja2VkQnV0dG9uKSB7XG4gICAgICB0YWIuY2xhc3NMaXN0ID0gXCJcIjtcbiAgICB9XG4gIH0pO1xufVxuZnVuY3Rpb24gY2hvb3NlQ29udGVudChjaG9pY2UpIHtcbiAgICAvLyByZXNldCBhbmQgYXBwZW5kIFxuICAgICBtYWluLnRleHRDb250ZW50PVwiXCI7XG5cbiAgc3dpdGNoIChjaG9pY2UpIHtcbiAgICBjYXNlIFwiSG9tZVwiOlxuICAgICAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVIb21lKCkpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIk1lbnVcIjpcbiAgICAgIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlTWVudSgpKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJDb250YWN0XCI6XG4gICAgICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZUNvbnRhY3QoKSk7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgYnJlYWs7XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==