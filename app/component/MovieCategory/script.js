let templateFile = await fetch("./component/MovieCategory/template.html");
let template = await templateFile.text();

let MovieCategory = {};

MovieCategory.format = function () {

  return template;
};

export { MovieCategory };
