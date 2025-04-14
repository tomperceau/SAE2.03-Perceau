let templateFile = await fetch("./component/Movie/template.html");
let template = await templateFile.text();

let Movie = {};

Movie.format = function (movies) {
  let html = "";
  for (let i = 0; i < movies.length; i++) {
    let movie = movies[i];
    let movieHtml = template;
    movieHtml = movieHtml.replace("{{titre}}", movie.name);
    movieHtml = movieHtml.replace("{{image}}", movie.image);
    movieHtml = movieHtml.replace("{{handler}}",`C.handlerDetail(${movie.id})`);
    movieHtml = movieHtml.replace("{{handlerFavoris}}", `event.stopPropagation(); C.handlerFavoris(${movie.id})`);
    movieHtml = movieHtml.replace("{{handlerremoveFavoris}}", `event.stopPropagation(); C.handlerdelFavoris(${movie.id})`);


    html += movieHtml
};

  return html;
};

export { Movie };
