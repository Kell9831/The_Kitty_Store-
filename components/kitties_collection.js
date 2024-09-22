import Store from "../services/Store.js";
import "./kitty_card.js";

class KittiesCollection extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: "open" });

    const template = document.querySelector("#kitties-collection-template");
    const content = template.content.cloneNode(true);
    this.root.appendChild(content);

    fetch("../base.css") 
      .then((res) => res.text())
      .then((text) => {
        const style = document.createElement("style");
        style.textContent = text;
        this.root.appendChild(style);
      });

    fetch("components/kitties_collection.css")
      .then((res) => res.text())
      .then((text) => {
        const style = document.createElement("style");
        style.textContent = text;
        this.root.appendChild(style);
      });
  }

  connectedCallback() {
    const kitties = Store.kitties;
    const ul = this.root.querySelector("ul");

    kitties.forEach((kitty, index) => {
      const kittyCard = document.createElement("kitty-card");
      kittyCard.dataset.detail = JSON.stringify(kitty);;
      kittyCard.dataset.index = index;
    
      const li = document.createElement("li");
      li.appendChild(kittyCard);

      ul.appendChild(li);
        
    });

  }
}

customElements.define("kitties-collection", KittiesCollection);
