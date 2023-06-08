import { createElement } from "./home";
function createContact() {
  const contact = document.createElement("div");
  contact.id = "contact";

  contact.appendChild(
    createElement(
      "p",
      "We are open from Monday to Saturday from 12:00 to 15:00 and from 18:00 to 23:00."
    )
  );
  contact.appendChild(createElement("p", "We are closed on Sundays."));
  contact.appendChild(
    createElement(
      "p",
      "You can make a reservation by phone or email, or just walk in."
    )
  );
  contact.appendChild(createElement("p", "We accept cash and credit cards."));
  const img = document.createElement("img");
  img.src = "images/pseudo-map.jpg";
  img.alt = "Ai generate picture of italian cook";
  contact.appendChild(img);
  contact.appendChild(createElement("p", "Contact Us:"));
  contact.appendChild(createElement("p", "Via dei Fiori, 12"));
  contact.appendChild(createElement("p", "00123 Roma"));
  contact.appendChild(createElement("p", "Tel: 06 12345678"));
  contact.appendChild(createElement("p", "Email:al.dente@pasta.it"));
  contact.appendChild(createElement("br", ""));
  contact.appendChild(
    createElement(
      "p",
      "We are located in the heart of Roma, near the Piazza Navona. You can easily reach us by public transport or by car."
    )
  );
  contact.appendChild(createElement("br", ""));
  contact.appendChild(
    createElement(
      "p",
      "By bus: Take the bus number 64 or 70 and get off at the stop Corso Vittorio Emanuele II/Navona."
    )
  );
  contact.appendChild(
    createElement(
      "p",
      "By metro: Take the metro line A and get off at the station Spagna. Then walk for about 15 minutes along Via del Corso until you reach Via dei Fiori."
    )
  );
  contact.appendChild(
    createElement(
      "p",
      "By car: You can park your car in the nearby parking garage in Via di Sant'Agostino. The parking fee is €2 per hour."
    )
  );
  return contact;
}

export { createContact };
