import { Movie } from "../Movie/script.js";

let templateFile = await fetch("./component/MovieCategory/template.html");
let template = await templateFile.text();

let MovieCategory = {};

MovieCategory.format = function (category) {
  let categoryHtml = template;

  // Remplace le nom de la catégorie
  categoryHtml = categoryHtml.replace("{{name}}", category.name);

  // Remplace l'ID unique pour le carrousel
  const uniqueId = `carousel-${category.name.replace(/\s+/g, "-").toLowerCase()}`;
  categoryHtml = categoryHtml.replaceAll("{{id}}", uniqueId);

  // Génère le HTML pour les films
  let moviesListHtml = "";
  for (let movie of category.movies) {
    moviesListHtml += Movie.format([movie]);
  }
  // Remplace les films dans le template
  categoryHtml = categoryHtml.replace("{{movie}}", moviesListHtml);

  return categoryHtml;
};

export { MovieCategory };