// URL où se trouve le répertoire "server" sur mmi.unilim.fr
let HOST_URL = "https://mmi.unilim.fr/~perceau1/SAE2.03-Perceau";

let DataMovies = {}; // Déclaration de l'objet avant de l'utiliser

DataMovies.addmovies = async function (fdata) {
    let config = {
        method: "POST",
        body: fdata
    };
    let answer = await fetch(HOST_URL + "/server/script.php?todo=addmovies", config);
    let movies = await answer.json();
    return movies;
};

export { DataMovies };

