import Store from "./services/Store.js";
import "./components/kitties_collection.js";
// Don't forget to import web components

document.addEventListener("DOMContentLoaded", () => {
  const main = document.querySelector("main");
  const kittiesCollection = document.createElement("kitties-collection");
  main.appendChild(kittiesCollection);
});

// Do not change this!
window.app = {};
app.store = Store;
