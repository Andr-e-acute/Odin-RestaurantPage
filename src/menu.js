import { createElement } from "./home";

function createMenu() {
  const menu = document.createElement("div");
  menu.id = "menu";
  menu.appendChild(createElement("h2", "Our Menu"));

  const dishesContainer = document.createElement("div");
  dishesContainer.id = "dishesContainer";

  menuItems.forEach((element) => {
    const categoryContainer = document.createElement("div");
    categoryContainer.id = `${element.category.toLowerCase()}`;
    categoryContainer.appendChild(createElement("h3", element.category));

    element.items.forEach((dish) => {
      const food = document.createElement("div");
      food.classList.add("foodContainer");
      food.appendChild(createElement("h4", dish.name));
      food.appendChild(createElement("div", dish.prize));
      food.appendChild(createElement("p", dish.description));
      categoryContainer.appendChild(food);
    });

    dishesContainer.appendChild(categoryContainer);
    menu.appendChild(dishesContainer);
  });
  return menu;
}
export { createMenu };

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
