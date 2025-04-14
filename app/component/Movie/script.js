let templateFile = await fetch("./component/Movie/template.html");
let template = await templateFile.text();

let Movie = {};

Movie.format = function (movies, isFavorisPage = false) {
  let html = "";
  for (let i = 0; i < movies.length; i++) {
    let movie = movies[i];
    let movieHtml = template;
    movieHtml = movieHtml.replace("{{titre}}", movie.name);
    movieHtml = movieHtml.replace("{{image}}", movie.image);
    movieHtml = movieHtml.replace("{{handler}}",`C.handlerDetail(${movie.id})`);
    movieHtml = movieHtml.replace("{{handlerFavoris}}", `event.stopPropagation(); C.handlerFavoris(${movie.id})`);
    movieHtml = movieHtml.replace("{{handlerremoveFavoris}}", `event.stopPropagation(); C.handlerdelFavoris(${movie.id})`);

    if (isFavorisPage) {
      movieHtml = movieHtml.replace("{{classButton}}", "removeFavoris_button");
      movieHtml = movieHtml.replace("{{handlerButton}}", `C.removeFavoris(${movie.id})`);
      movieHtml = movieHtml.replace("{{iconPath}}", "M6 18L18 6M6 6l12 12");
    } else {
      movieHtml = movieHtml.replace("{{classButton}}", "addFavoris_button");
      movieHtml = movieHtml.replace("{{handlerButton}}", `C.addFavoris(${movie.id})`);
      movieHtml = movieHtml.replace("{{iconPath}}", "M12.1 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.65 11.54l-1.45 1.31z"); // Icône de cœur
    }

    html += movieHtml
};

  return html;
};

export { Movie };
