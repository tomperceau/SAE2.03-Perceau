let templateFile = await fetch("./component/Category/template.html");
let template = await templateFile.text();

let Category = {};



const colorMap = {
  "Action": "#e74c3c",
  "Comédie": "#f1c40f",
  "Drame": "#3498db",
  "Science-fiction": "#9b59b6",
  "Animation": "#e91e63",
  "Thriller": "#34495e",
  "Horreur": "#2ecc71",
  "Aventure": "#1abc9c",
  "Fantaisie": "#00cec9",
  "Documentaire": "#16a085"
};

Category.format = function (categories) {
  if (!Array.isArray(categories)) {
    console.error("Les catégories reçues ne sont pas un tableau :", categories);
    return "";
  }
  
  let categoryHtml = template;
  const uniqueId = `carousel-categories`;
  categoryHtml = categoryHtml.replaceAll("{{id}}", uniqueId);
  
  let cards = "";
  for (let cat of categories) {
    let color = colorMap[cat.name] || "#333";
    cards += `
      <div class="category-card" style="background-color: ${color}">
        <h3>${cat.name}</h3>
      </div>
    `;
  }
  
  categoryHtml = categoryHtml.replace("{{category}}", cards);
  return categoryHtml;
};
export { Category };