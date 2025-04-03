let templateFile = await fetch("./component/Movie/template.html");
let template = await templateFile.text();

let Movie = {};

Movie.format = function (image, titre) {
  let html = template;
  html = html.replace("{{image}}", image);
  html = html.replace("{{titre}}", titre);
  
  return html;
};

export { Movie };
