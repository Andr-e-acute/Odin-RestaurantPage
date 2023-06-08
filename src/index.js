import { createPage } from "./page-load";
import { createHome } from "./home";
import { createMenu } from "./menu";
import { createContact } from "./contact";

// createPage empty Page with header footer background
createPage();
const main =document.querySelector("main")


// tab switching logic
const tabs = document.querySelectorAll("nav button");
// first time load set home-page active
setActive(document.querySelector("#home-button"))

tabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    setActive(e.target);
    
  });
});
function setActive(clickedButton) {
// console.log(clickedButton)
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
      main.appendChild(createHome());
      break;
    case "Menu":
      main.appendChild(createMenu());
      break;
    case "Contact":
      main.appendChild(createContact());
      break;
    default:
      break;
  }
}
