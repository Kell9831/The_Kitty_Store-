export default class KittyCard extends HTMLElement {
   
    constructor() {
      super();
      this.root = this.attachShadow({ mode: "open" });
      const template = document.querySelector("#kitty-card-template");
      const content = template.content.cloneNode(true);
  
      this.dataTitle = null;
      this.root.appendChild(content);
  
      fetch("../base.css") 
      .then((res) => res.text())
      .then((text) => {
        const style = document.createElement("style");
        style.textContent = text;
        this.root.appendChild(style);
      });
      
      fetch("components/kitty_card.css")
        .then((res) => res.text())
        .then((text) => {
          const style = document.createElement("style");
          style.textContent = text;
          this.root.appendChild(style);
        });
  
    }

    connectedCallback() {
        const baseURL = "https://www.cryptokitties.co/images/";
        // Parse the kitty details from the dataset
        const kittyData = JSON.parse(this.dataset.detail);
        
        // Update the card with the kitty details
        this.root.querySelector("h2").innerText = kittyData.name;
        this.root.querySelector("img").src = `${baseURL}${kittyData.thumbnail}`;
        this.root.querySelector("p").innerText = `$${kittyData.price}`;

       //to add even or odd styles to the kittens name
        const index = parseInt(this.dataset.index);
        const h2 = this.root.querySelector("h2");
        console.log(h2)

        if (index % 2 === 0) {
            h2.classList.add("even")
          } else {
            h2.classList.add("odd") 
          }
      }
   
  }
  customElements.define("kitty-card", KittyCard);