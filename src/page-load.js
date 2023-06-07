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

export { createPage };
