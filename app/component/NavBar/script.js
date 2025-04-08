let templateFile = await fetch("./component/NavBar/template.html");
let template = await templateFile.text();

const templateFile2 = await fetch("./component/NavBar/template2.html");
const template2 = await templateFile2.text();


let NavBar = {};

NavBar.format = function ( hHome, profiles, activeProfileId ) {
  let html = template;


  let optionsHTML = "";
  
  for (let profile of profiles) {
    let option = template2;
    option = option.replace("{{name}}", profile.name);
    option = option.replace("{{id}}", profile.id);

    if (profile.id == activeProfileId) {
      option = option.replace(">", " selected>");
    }

    optionsHTML += option;
  }

  html = html.replace("{{hHome}}", hHome);
  html = html.replace("{{profiles}}", optionsHTML);


  return html;
};



export { NavBar };
