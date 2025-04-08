import { Movie } from "../Movie/script.js";

let templateFile = await fetch("./component/MovieCategory/template.html");
let template = await templateFile.text();

let MovieCategory = {};

MovieCategory.format = function () {
  let html = template;

  // Remplace {{Category}} par l'appel à la fonction JavaScript
  html = html.replace("{{Category}}", "C.filterByCategory(this.value)");

  return html;
};


export { MovieCategory };