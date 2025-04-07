let templateFile = await fetch("./component/NavBar/template.html");
let template = await templateFile.text();

let NavBar = {};

NavBar.format = function ( hHome, hCategory) {
  let html = template;
  html = html.replace("{{hHome}}", hHome);
  html = html.replace("{{hCategory}}", hCategory);
  return html;
};

export { NavBar };
