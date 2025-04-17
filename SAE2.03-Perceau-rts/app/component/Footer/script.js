let templateFile = await fetch("./component/Footer/template.html");
let template = await templateFile.text();

let Footer = {};

Footer.render = function () {
  return template;
};

export { Footer };