import { createPage } from "./page-load";
import { createHome } from "./home";
import { createMenu } from "./menu";
import { createContact } from "./contact";
// createPage empty Page with header footer background
createPage();

// tab switching logic
const tabs = document.querySelectorAll("nav button");
tabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    setActive(e.target);
    
  });
});
function setActive(clickedButton) {
  clickedButton.classList.add("active");
  chooseContent(clickedButton.dataset.target);
  tabs.forEach((tab) => {
    if (tab !== clickedButton) {
      tab.classList = "";
    }
  });
}
function chooseContent(choice) {
    // reset and append content here oder for every file?
  switch (choice) {
    case "Home":
      createHome();
      break;
    case "Menu":
      createMenu();
      break;
    case "Contact":
      createContact();
      break;
    default:
      break;
  }
}
