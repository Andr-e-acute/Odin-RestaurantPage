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
    const contact=document.createElement("div")
    contact.id=("contact")

    contact.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__.createElement)('p',"We are open from Monday to Saturday from 12:00 to 15:00 and from 18:00 to 23:00."))
    contact.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__.createElement)('p',"We are closed on Sundays."))
    contact.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__.createElement)('p',"You can make a reservation by phone or email, or just walk in."))
    contact.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__.createElement)('p',"We accept cash and credit cards."))
    const img =document.createElement("img");
    img.src="images/pseudo-map.jpg"
    img.alt="Ai generate picture of italian cook"
    contact.appendChild(img)
    contact.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__.createElement)('p',"Contact Us:"))
    contact.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__.createElement)('p',"Via dei Fiori, 12"))
    contact.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__.createElement)('p',"00123 Roma"))
    contact.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__.createElement)('p',"Tel: 06 12345678"))
    contact.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__.createElement)('p',"Email:al.dente@pasta.it"))
    contact.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__.createElement)('br',""))
    contact.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__.createElement)('p',"We are located in the heart of Roma, near the Piazza Navona. You can easily reach us by public transport or by car."))
    contact.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__.createElement)('br',""))
    contact.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__.createElement)('p',"By bus: Take the bus number 64 or 70 and get off at the stop Corso Vittorio Emanuele II/Navona."))
    contact.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__.createElement)('p',"By metro: Take the metro line A and get off at the station Spagna. Then walk for about 15 minutes along Via del Corso until you reach Via dei Fiori."))
    contact.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__.createElement)('p',"By car: You can park your car in the nearby parking garage in Via di Sant'Agostino. The parking fee is €2 per hour."))
    return contact
}





// Contact Us
// Al Dente
// Via dei Fiori, 12
// 00123 Roma
// Tel: 06 12345678
// Email: &#97;&#108;&#46;&#x64;&#x65;&#x6e;&#x74;&#x65;&#x40;&#x70;&#97;&#x73;&#116;&#97;&#46;&#105;&#116;
// We are open from Monday to Saturday from 12:00 to 15:00 and from 18:00 to 23:00. We are closed on Sundays.
// You can make a reservation by phone or email, or just walk in.
// We accept cash and credit cards.
// How to Find Us
// a how to find us map in a realistic fictional city for Al Dente
// We are located in the heart of Roma, near the Piazza Navona. You can easily reach us by public transport or by car.
// By bus: Take the bus number 64 or 70 and get off at the stop Corso Vittorio Emanuele II/Navona.
// By metro: Take the metro line A and get off at the station Spagna. Then walk for about 15 minutes along Via del Corso until you reach Via dei Fiori.
// By car: You can park your car in the nearby parking garage in Via di Sant'Agostino. The parking fee is €2 per hour.


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
function createHome(){
    const home=document.createElement("div")
    home.id=("home")

    home.appendChild(createElement('p',"The perfect pasta every time."))
    home.appendChild(createElement('p',"Welcome to Al Dente,"))
    home.appendChild(createElement('p',"the best place to enjoy authentic Italian pasta."))
    const img =document.createElement("img");
    img.src="images/chef.jpg"
    img.alt="Ai generate picture of italian cook"
    home.appendChild(img)
    home.appendChild(createElement('p',"Order online or visit us!"))
    return home
}

function createElement(type,textContent){
    const p =document.createElement(type)
    p.textContent=textContent
    return p
}

{/* <p>
Welcome to Al Dente,<br />
the best place to enjoy authentic Italian pasta
</p>
<img src="images/chef.jpg" alt="Ai generate pic of italina cook" />
<p>Order online or visit us!</p> */}

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
    menu.appendChild(dishesContainer)
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
    // todo do I use the Id anywhere
    button.id = `${element.toLowerCase()}-button`;
    button.dataset.target=`${element}`
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
  link.textContent="GitHubPage"
  footer.appendChild(p);
  footer.appendChild(link)
  return footer;
}
function createPage() {
  const content = document.querySelector("#content");
  // reset page to blank do i need it?
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
    // the right place would be page-load/? need to try it out later.....
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
    // reset and append content here oder for every file itself?
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFDdEM7QUFDQTtBQUNBOztBQUVBLHdCQUF3QixvREFBYTtBQUNyQyx3QkFBd0Isb0RBQWE7QUFDckMsd0JBQXdCLG9EQUFhO0FBQ3JDLHdCQUF3QixvREFBYTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixvREFBYTtBQUNyQyx3QkFBd0Isb0RBQWE7QUFDckMsd0JBQXdCLG9EQUFhO0FBQ3JDLHdCQUF3QixvREFBYTtBQUNyQyx3QkFBd0Isb0RBQWE7QUFDckMsd0JBQXdCLG9EQUFhO0FBQ3JDLHdCQUF3QixvREFBYTtBQUNyQyx3QkFBd0Isb0RBQWE7QUFDckMsd0JBQXdCLG9EQUFhO0FBQ3JDLHdCQUF3QixvREFBYTtBQUNyQyx3QkFBd0Isb0RBQWE7QUFDckM7QUFDQTs7OztBQUl5Qjs7QUFFekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsTUFBTSxLQUFLLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxLQUFLLE1BQU07QUFDckc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDN0NBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2lDO0FBQ2pDLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMxQnVDOztBQUV2QztBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsb0RBQWE7O0FBRWhDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDhCQUE4QiwrQkFBK0I7QUFDN0Qsa0NBQWtDLG9EQUFhOztBQUUvQztBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsb0RBQWE7QUFDcEMsdUJBQXVCLG9EQUFhO0FBQ3BDLHVCQUF1QixvREFBYTtBQUNwQztBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ3NCOztBQUV0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7OztBQ3JIQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHNCQUFzQjtBQUN6Qyw2QkFBNkIsUUFBUTtBQUNyQztBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFc0I7Ozs7Ozs7VUMzQ3RCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNOeUM7QUFDTDtBQUNBO0FBQ007O0FBRTFDO0FBQ0Esc0RBQVU7QUFDVjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQXVCLGlEQUFVO0FBQ2pDO0FBQ0E7QUFDQSx1QkFBdUIsaURBQVU7QUFDakM7QUFDQTtBQUNBLHVCQUF1Qix1REFBYTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50cGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudHBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnRwYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50cGFnZS8uL3NyYy9wYWdlLWxvYWQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50cGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudHBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuL2hvbWVcIlxuZnVuY3Rpb24gY3JlYXRlQ29udGFjdCgpIHtcbiAgICBjb25zdCBjb250YWN0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBjb250YWN0LmlkPShcImNvbnRhY3RcIilcblxuICAgIGNvbnRhY3QuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCgncCcsXCJXZSBhcmUgb3BlbiBmcm9tIE1vbmRheSB0byBTYXR1cmRheSBmcm9tIDEyOjAwIHRvIDE1OjAwIGFuZCBmcm9tIDE4OjAwIHRvIDIzOjAwLlwiKSlcbiAgICBjb250YWN0LmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoJ3AnLFwiV2UgYXJlIGNsb3NlZCBvbiBTdW5kYXlzLlwiKSlcbiAgICBjb250YWN0LmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoJ3AnLFwiWW91IGNhbiBtYWtlIGEgcmVzZXJ2YXRpb24gYnkgcGhvbmUgb3IgZW1haWwsIG9yIGp1c3Qgd2FsayBpbi5cIikpXG4gICAgY29udGFjdC5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KCdwJyxcIldlIGFjY2VwdCBjYXNoIGFuZCBjcmVkaXQgY2FyZHMuXCIpKVxuICAgIGNvbnN0IGltZyA9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBpbWcuc3JjPVwiaW1hZ2VzL3BzZXVkby1tYXAuanBnXCJcbiAgICBpbWcuYWx0PVwiQWkgZ2VuZXJhdGUgcGljdHVyZSBvZiBpdGFsaWFuIGNvb2tcIlxuICAgIGNvbnRhY3QuYXBwZW5kQ2hpbGQoaW1nKVxuICAgIGNvbnRhY3QuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCgncCcsXCJDb250YWN0IFVzOlwiKSlcbiAgICBjb250YWN0LmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoJ3AnLFwiVmlhIGRlaSBGaW9yaSwgMTJcIikpXG4gICAgY29udGFjdC5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KCdwJyxcIjAwMTIzIFJvbWFcIikpXG4gICAgY29udGFjdC5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KCdwJyxcIlRlbDogMDYgMTIzNDU2NzhcIikpXG4gICAgY29udGFjdC5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KCdwJyxcIkVtYWlsOmFsLmRlbnRlQHBhc3RhLml0XCIpKVxuICAgIGNvbnRhY3QuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCgnYnInLFwiXCIpKVxuICAgIGNvbnRhY3QuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCgncCcsXCJXZSBhcmUgbG9jYXRlZCBpbiB0aGUgaGVhcnQgb2YgUm9tYSwgbmVhciB0aGUgUGlhenphIE5hdm9uYS4gWW91IGNhbiBlYXNpbHkgcmVhY2ggdXMgYnkgcHVibGljIHRyYW5zcG9ydCBvciBieSBjYXIuXCIpKVxuICAgIGNvbnRhY3QuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCgnYnInLFwiXCIpKVxuICAgIGNvbnRhY3QuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCgncCcsXCJCeSBidXM6IFRha2UgdGhlIGJ1cyBudW1iZXIgNjQgb3IgNzAgYW5kIGdldCBvZmYgYXQgdGhlIHN0b3AgQ29yc28gVml0dG9yaW8gRW1hbnVlbGUgSUkvTmF2b25hLlwiKSlcbiAgICBjb250YWN0LmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoJ3AnLFwiQnkgbWV0cm86IFRha2UgdGhlIG1ldHJvIGxpbmUgQSBhbmQgZ2V0IG9mZiBhdCB0aGUgc3RhdGlvbiBTcGFnbmEuIFRoZW4gd2FsayBmb3IgYWJvdXQgMTUgbWludXRlcyBhbG9uZyBWaWEgZGVsIENvcnNvIHVudGlsIHlvdSByZWFjaCBWaWEgZGVpIEZpb3JpLlwiKSlcbiAgICBjb250YWN0LmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoJ3AnLFwiQnkgY2FyOiBZb3UgY2FuIHBhcmsgeW91ciBjYXIgaW4gdGhlIG5lYXJieSBwYXJraW5nIGdhcmFnZSBpbiBWaWEgZGkgU2FudCdBZ29zdGluby4gVGhlIHBhcmtpbmcgZmVlIGlzIOKCrDIgcGVyIGhvdXIuXCIpKVxuICAgIHJldHVybiBjb250YWN0XG59XG5cblxuXG5leHBvcnQgeyBjcmVhdGVDb250YWN0IH07XG5cbi8vIENvbnRhY3QgVXNcbi8vIEFsIERlbnRlXG4vLyBWaWEgZGVpIEZpb3JpLCAxMlxuLy8gMDAxMjMgUm9tYVxuLy8gVGVsOiAwNiAxMjM0NTY3OFxuLy8gRW1haWw6ICYjOTc7JiMxMDg7JiM0NjsmI3g2NDsmI3g2NTsmI3g2ZTsmI3g3NDsmI3g2NTsmI3g0MDsmI3g3MDsmIzk3OyYjeDczOyYjMTE2OyYjOTc7JiM0NjsmIzEwNTsmIzExNjtcbi8vIFdlIGFyZSBvcGVuIGZyb20gTW9uZGF5IHRvIFNhdHVyZGF5IGZyb20gMTI6MDAgdG8gMTU6MDAgYW5kIGZyb20gMTg6MDAgdG8gMjM6MDAuIFdlIGFyZSBjbG9zZWQgb24gU3VuZGF5cy5cbi8vIFlvdSBjYW4gbWFrZSBhIHJlc2VydmF0aW9uIGJ5IHBob25lIG9yIGVtYWlsLCBvciBqdXN0IHdhbGsgaW4uXG4vLyBXZSBhY2NlcHQgY2FzaCBhbmQgY3JlZGl0IGNhcmRzLlxuLy8gSG93IHRvIEZpbmQgVXNcbi8vIGEgaG93IHRvIGZpbmQgdXMgbWFwIGluIGEgcmVhbGlzdGljIGZpY3Rpb25hbCBjaXR5IGZvciBBbCBEZW50ZVxuLy8gV2UgYXJlIGxvY2F0ZWQgaW4gdGhlIGhlYXJ0IG9mIFJvbWEsIG5lYXIgdGhlIFBpYXp6YSBOYXZvbmEuIFlvdSBjYW4gZWFzaWx5IHJlYWNoIHVzIGJ5IHB1YmxpYyB0cmFuc3BvcnQgb3IgYnkgY2FyLlxuLy8gQnkgYnVzOiBUYWtlIHRoZSBidXMgbnVtYmVyIDY0IG9yIDcwIGFuZCBnZXQgb2ZmIGF0IHRoZSBzdG9wIENvcnNvIFZpdHRvcmlvIEVtYW51ZWxlIElJL05hdm9uYS5cbi8vIEJ5IG1ldHJvOiBUYWtlIHRoZSBtZXRybyBsaW5lIEEgYW5kIGdldCBvZmYgYXQgdGhlIHN0YXRpb24gU3BhZ25hLiBUaGVuIHdhbGsgZm9yIGFib3V0IDE1IG1pbnV0ZXMgYWxvbmcgVmlhIGRlbCBDb3JzbyB1bnRpbCB5b3UgcmVhY2ggVmlhIGRlaSBGaW9yaS5cbi8vIEJ5IGNhcjogWW91IGNhbiBwYXJrIHlvdXIgY2FyIGluIHRoZSBuZWFyYnkgcGFya2luZyBnYXJhZ2UgaW4gVmlhIGRpIFNhbnQnQWdvc3Rpbm8uIFRoZSBwYXJraW5nIGZlZSBpcyDigqwyIHBlciBob3VyLlxuIiwiZnVuY3Rpb24gY3JlYXRlSG9tZSgpe1xuICAgIGNvbnN0IGhvbWU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGhvbWUuaWQ9KFwiaG9tZVwiKVxuXG4gICAgaG9tZS5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KCdwJyxcIlRoZSBwZXJmZWN0IHBhc3RhIGV2ZXJ5IHRpbWUuXCIpKVxuICAgIGhvbWUuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCgncCcsXCJXZWxjb21lIHRvIEFsIERlbnRlLFwiKSlcbiAgICBob21lLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoJ3AnLFwidGhlIGJlc3QgcGxhY2UgdG8gZW5qb3kgYXV0aGVudGljIEl0YWxpYW4gcGFzdGEuXCIpKVxuICAgIGNvbnN0IGltZyA9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBpbWcuc3JjPVwiaW1hZ2VzL2NoZWYuanBnXCJcbiAgICBpbWcuYWx0PVwiQWkgZ2VuZXJhdGUgcGljdHVyZSBvZiBpdGFsaWFuIGNvb2tcIlxuICAgIGhvbWUuYXBwZW5kQ2hpbGQoaW1nKVxuICAgIGhvbWUuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCgncCcsXCJPcmRlciBvbmxpbmUgb3IgdmlzaXQgdXMhXCIpKVxuICAgIHJldHVybiBob21lXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodHlwZSx0ZXh0Q29udGVudCl7XG4gICAgY29uc3QgcCA9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKVxuICAgIHAudGV4dENvbnRlbnQ9dGV4dENvbnRlbnRcbiAgICByZXR1cm4gcFxufVxuZXhwb3J0e2NyZWF0ZUhvbWUsIGNyZWF0ZUVsZW1lbnR9XG57LyogPHA+XG5XZWxjb21lIHRvIEFsIERlbnRlLDxiciAvPlxudGhlIGJlc3QgcGxhY2UgdG8gZW5qb3kgYXV0aGVudGljIEl0YWxpYW4gcGFzdGFcbjwvcD5cbjxpbWcgc3JjPVwiaW1hZ2VzL2NoZWYuanBnXCIgYWx0PVwiQWkgZ2VuZXJhdGUgcGljIG9mIGl0YWxpbmEgY29va1wiIC8+XG48cD5PcmRlciBvbmxpbmUgb3IgdmlzaXQgdXMhPC9wPiAqL30iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4vaG9tZVwiO1xuXG5mdW5jdGlvbiBjcmVhdGVNZW51KCkge1xuICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWVudS5pZCA9IFwibWVudVwiO1xuICBtZW51LmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoXCJoMlwiLCBcIk91ciBNZW51XCIpKTtcblxuICBjb25zdCBkaXNoZXNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkaXNoZXNDb250YWluZXIuaWQgPSBcImRpc2hlc0NvbnRhaW5lclwiO1xuXG4gIG1lbnVJdGVtcy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgY2F0ZWdvcnlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNhdGVnb3J5Q29udGFpbmVyLmlkID0gYCR7ZWxlbWVudC5jYXRlZ29yeS50b0xvd2VyQ2FzZSgpfWA7XG4gICAgY2F0ZWdvcnlDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudChcImgzXCIsIGVsZW1lbnQuY2F0ZWdvcnkpKTtcblxuICAgIGVsZW1lbnQuaXRlbXMuZm9yRWFjaCgoZGlzaCkgPT4ge1xuICAgICAgY29uc3QgZm9vZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBmb29kLmNsYXNzTGlzdC5hZGQoXCJmb29kQ29udGFpbmVyXCIpO1xuICAgICAgZm9vZC5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KFwiaDRcIiwgZGlzaC5uYW1lKSk7XG4gICAgICBmb29kLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgZGlzaC5wcml6ZSkpO1xuICAgICAgZm9vZC5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KFwicFwiLCBkaXNoLmRlc2NyaXB0aW9uKSk7XG4gICAgICBjYXRlZ29yeUNvbnRhaW5lci5hcHBlbmRDaGlsZChmb29kKTtcbiAgICB9KTtcblxuICAgIGRpc2hlc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjYXRlZ29yeUNvbnRhaW5lcik7XG4gICAgbWVudS5hcHBlbmRDaGlsZChkaXNoZXNDb250YWluZXIpXG4gIH0pO1xuICByZXR1cm4gbWVudTtcbn1cbmV4cG9ydCB7IGNyZWF0ZU1lbnUgfTtcblxuLy8gTWVudVxuY29uc3QgbWVudUl0ZW1zID0gW1xuICB7XG4gICAgY2F0ZWdvcnk6IFwiQW50aXBhc3RpXCIsXG4gICAgaXRlbXM6IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJCcnVzY2hldHRhIGFsIHBvbW9kb3JvOlwiLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICBcIlRvYXN0ZWQgYnJlYWQgdG9wcGVkIHdpdGggZnJlc2ggdG9tYXRvZXMsIGJhc2lsIGFuZCBnYXJsaWMuXCIsXG4gICAgICAgIHByaXplOiBcIuKCrDVcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwiQ2FwcmVzZTpcIixcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgXCJGcmVzaCBtb3p6YXJlbGxhLCB0b21hdG9lcyBhbmQgYmFzaWwgZHJpenpsZWQgd2l0aCBvbGl2ZSBvaWwgYW5kIGJhbHNhbWljIHZpbmVnYXIuXCIsXG4gICAgICAgIHByaXplOiBcIuKCrDdcIixcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGNhdGVnb3J5OiBcIlByaW1pXCIsXG4gICAgaXRlbXM6IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJTcGFnaGV0dGkgY2FyYm9uYXJhOlwiLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICBcIlNwYWdoZXR0aSB0b3NzZWQgd2l0aCBlZ2dzLCBiYWNvbiwgY2hlZXNlIGFuZCBibGFjayBwZXBwZXIuXCIsXG4gICAgICAgIHByaXplOiBcIuKCrDEwXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiBcIkZldHR1Y2NpbmUgYWxmcmVkbzpcIixcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgXCJGZXR0dWNjaW5lIGluIGEgY3JlYW15IHNhdWNlIHdpdGggYnV0dGVyIGFuZCBwYXJtZXNhbiBjaGVlc2UuXCIsXG4gICAgICAgIHByaXplOiBcIuKCrDlcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwiUGFzdGEgYWxsYSBub3JtYTpcIixcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgXCJQZW5uZSB3aXRoIHJvYXN0ZWQgYXViZXJnaW5lLCB0b21hdG8gc2F1Y2UgYW5kIHJpY290dGEgY2hlZXNlLlwiLFxuICAgICAgICBwcml6ZTogXCLigqw5XCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiBcIkxhc2FnbmE6XCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgIFwiTGF5ZXJzIG9mIHBhc3RhLCBtZWF0IHNhdWNlLCBiw6ljaGFtZWwgYW5kIGNoZWVzZSBiYWtlZCBpbiB0aGUgb3Zlbi5cIixcbiAgICAgICAgcHJpemU6IFwi4oKsMTFcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwiQ2FjaW8gZSBwZXBlOlwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJTcGFnaGV0dGkgd2l0aCBjaGVlc2UgYW5kIHBlcHBlci5cIixcbiAgICAgICAgcHJpemU6IFwi4oKsN1wiLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgY2F0ZWdvcnk6IFwiU2Vjb25kaVwiLFxuICAgIGl0ZW1zOiBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwiUG9sbG8gYWxsYSBjYWNjaWF0b3JhOlwiLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICBcIkNoaWNrZW4gYnJhaXNlZCB3aXRoIHRvbWF0b2VzLCBtdXNocm9vbXMsIG9saXZlcyBhbmQgaGVyYnMuXCIsXG4gICAgICAgIHByaXplOiBcIuKCrDE0XCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiBcIk1lbGFuemFuZSBhbGxhIHBhcm1pZ2lhbmE6XCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgIFwiQmFrZWQgYXViZXJnaW5lIHdpdGggdG9tYXRvIHNhdWNlLCBtb3p6YXJlbGxhIGFuZCBwYXJtZXNhbiBjaGVlc2UuXCIsXG4gICAgICAgIHByaXplOiBcIuKCrDEzXCIsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBjYXRlZ29yeTogXCJDb250b3JuaVwiLFxuICAgIGl0ZW1zOiBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwiSW5zYWxhdGEgbWlzdGE6XCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgIFwiTWl4ZWQgc2FsYWQgd2l0aCBsZXR0dWNlLCB0b21hdG9lcywgY3VjdW1iZXJzIGFuZCBjYXJyb3RzLlwiLFxuICAgICAgICBwcml6ZTogXCLigqw0XCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiBcIlBhdGF0ZSBhbCBmb3JubzpcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiUm9hc3RlZCBwb3RhdG9lcyB3aXRoIHJvc2VtYXJ5IGFuZCBnYXJsaWMuXCIsXG4gICAgICAgIHByaXplOiBcIuKCrDVcIixcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbl07XG4iLCJmdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XG4gIGNvbnN0IG5hdkVsZW1lbnRzID0gW1wiSG9tZVwiLCBcIk1lbnVcIiwgXCJDb250YWN0XCJdO1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuICBoZWFkZXIuaWQgPSBcImhlYWRlclwiO1xuXG4gIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGxvZ28udGV4dENvbnRlbnQgPSBcIkFsIERlbnRlXCI7XG5cbiAgY29uc3QgbmF2YmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcbiAgbmF2RWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGJ1dHRvbmApO1xuICAgIC8vIHRvZG8gZG8gSSB1c2UgdGhlIElkIGFueXdoZXJlXG4gICAgYnV0dG9uLmlkID0gYCR7ZWxlbWVudC50b0xvd2VyQ2FzZSgpfS1idXR0b25gO1xuICAgIGJ1dHRvbi5kYXRhc2V0LnRhcmdldD1gJHtlbGVtZW50fWBcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSBlbGVtZW50O1xuICAgIG5hdmJhci5hcHBlbmRDaGlsZChidXR0b24pO1xuICB9KTtcblxuICBoZWFkZXIuYXBwZW5kQ2hpbGQobG9nbyk7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChuYXZiYXIpO1xuICByZXR1cm4gaGVhZGVyO1xufVxuZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCkge1xuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xuICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHAudGV4dENvbnRlbnQgPSBcIkNvcHlyaWdodCDCqSAyMDIzXCI7XG4gIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgbGluay5ocmVmID0gXCJodHRwczovL2dpdGh1Yi5jb20vQW5kci1lLWFjdXRlL09kaW4tUmVzdGF1cmFudFBhZ2VcIjtcbiAgbGluay50ZXh0Q29udGVudD1cIkdpdEh1YlBhZ2VcIlxuICBmb290ZXIuYXBwZW5kQ2hpbGQocCk7XG4gIGZvb3Rlci5hcHBlbmRDaGlsZChsaW5rKVxuICByZXR1cm4gZm9vdGVyO1xufVxuZnVuY3Rpb24gY3JlYXRlUGFnZSgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbiAgLy8gcmVzZXQgcGFnZSB0byBibGFuayBkbyBpIG5lZWQgaXQ/XG4gIGNvbnRlbnQudGV4dENvbnRlbnQgPSBcIlwiO1xuXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlSGVhZGVyKCkpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVGb290ZXIoKSk7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZVBhZ2UgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgY3JlYXRlUGFnZSB9IGZyb20gXCIuL3BhZ2UtbG9hZFwiO1xuaW1wb3J0IHsgY3JlYXRlSG9tZSB9IGZyb20gXCIuL2hvbWVcIjtcbmltcG9ydCB7IGNyZWF0ZU1lbnUgfSBmcm9tIFwiLi9tZW51XCI7XG5pbXBvcnQgeyBjcmVhdGVDb250YWN0IH0gZnJvbSBcIi4vY29udGFjdFwiO1xuXG4vLyBjcmVhdGVQYWdlIGVtcHR5IFBhZ2Ugd2l0aCBoZWFkZXIgZm9vdGVyIGJhY2tncm91bmRcbmNyZWF0ZVBhZ2UoKTtcbmNvbnN0IG1haW4gPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpXG5cblxuLy8gdGFiIHN3aXRjaGluZyBsb2dpY1xuY29uc3QgdGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJuYXYgYnV0dG9uXCIpO1xuLy8gZmlyc3QgdGltZSBsb2FkIHNldCBob21lLXBhZ2UgYWN0aXZlXG4gICAgLy8gdGhlIHJpZ2h0IHBsYWNlIHdvdWxkIGJlIHBhZ2UtbG9hZC8/IG5lZWQgdG8gdHJ5IGl0IG91dCBsYXRlci4uLi4uXG5zZXRBY3RpdmUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZW51LWJ1dHRvblwiKSlcblxudGFicy5mb3JFYWNoKCh0YWIpID0+IHtcbiAgdGFiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIHNldEFjdGl2ZShlLnRhcmdldCk7XG4gICAgXG4gIH0pO1xufSk7XG5mdW5jdGlvbiBzZXRBY3RpdmUoY2xpY2tlZEJ1dHRvbikge1xuY29uc29sZS5sb2coY2xpY2tlZEJ1dHRvbilcbiAgY2xpY2tlZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgIFxuICBjaG9vc2VDb250ZW50KGNsaWNrZWRCdXR0b24uZGF0YXNldC50YXJnZXQpO1xuXG4gIHRhYnMuZm9yRWFjaCgodGFiKSA9PiB7XG4gICAgaWYgKHRhYiAhPT0gY2xpY2tlZEJ1dHRvbikge1xuICAgICAgdGFiLmNsYXNzTGlzdCA9IFwiXCI7XG4gICAgfVxuICB9KTtcbn1cbmZ1bmN0aW9uIGNob29zZUNvbnRlbnQoY2hvaWNlKSB7XG4gICAgLy8gcmVzZXQgYW5kIGFwcGVuZCBjb250ZW50IGhlcmUgb2RlciBmb3IgZXZlcnkgZmlsZSBpdHNlbGY/XG4gICAgIG1haW4udGV4dENvbnRlbnQ9XCJcIjtcblxuICBzd2l0Y2ggKGNob2ljZSkge1xuICAgIGNhc2UgXCJIb21lXCI6XG4gICAgICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZUhvbWUoKSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiTWVudVwiOlxuICAgICAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVNZW51KCkpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIkNvbnRhY3RcIjpcbiAgICAgIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlQ29udGFjdCgpKTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBicmVhaztcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9