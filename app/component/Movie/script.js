let templateFile = await fetch("./component/Movie/template.html");
let template = await templateFile.text();

let Movie = {};

Movie.format = function (movies) {
  let html = "";
  movies.forEach ((movie) => {
    let moviesHtml = template;
    moviesHtml = moviesHtml.replace("{{titre}}", movie.name);
    moviesHtml = moviesHtml.replace("{{image}}", movie.image);
    html += moviesHtml

});

  return html;
};

export { Movie };
