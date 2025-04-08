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

MovieCategory.renderGroupedMovies = function (groupedMovies) {
  let content = document.querySelector("#content");
  content.innerHTML = ""; // Efface le contenu précédent

  for (let category in groupedMovies) {
    let categorySection = document.createElement("div");
    categorySection.classList.add("category-section");

    let categoryTitle = document.createElement("h2");
    categoryTitle.textContent = category;
    categorySection.appendChild(categoryTitle);

    let moviesHtml = Movie.format(groupedMovies[category]);
    let moviesContainer = document.createElement("div");
    moviesContainer.innerHTML = moviesHtml;
    categorySection.appendChild(moviesContainer);

    content.appendChild(categorySection);
  }
};


export { MovieCategory };