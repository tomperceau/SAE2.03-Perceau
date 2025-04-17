let templateFile = await fetch("./component/UneMovie/template.html");
let template = await templateFile.text();

let UneMovie = {};

UneMovie.format = function (movies) {
  if (!movies || movies.length === 0) {
    return "<p>Aucun film mis à la une pour le moment.</p>";
  }

  let cardsHtml = "";
  for (let movie of movies) {
    let cardHtml = `
      <div class="movie-une__card" onclick="C.handlerDetail(${movie.id})">
        <img src="https://mmi.unilim.fr/~perceau1/SAE2.03-Perceau/SAE2.03-Perceau-rts/server/images/${movie.image}" alt="affiche" />
        <div class="movie-une__card-overlay">
          <div class="movie-une__card-content">
            <p class="movie-une__card-titre">${movie.name}</p>
            <p class="movie-une__card-desc">${movie.description}</p>
          </div>
        </div>
      </div>`;
    cardsHtml += cardHtml;
  }

  const uniqueId = `carousel-${Date.now()}`;

  let finalHtml = template
    .replaceAll("{{id}}", uniqueId)
    .replace("{{movie-cards}}", cardsHtml);

  console.log("Generated carousel ID:", uniqueId); // Ajoute ce log pour voir l'ID généré

  return finalHtml;
};

export { UneMovie };
