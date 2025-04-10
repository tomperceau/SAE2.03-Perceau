// URL où se trouve le répertoire "server" sur mmi.unilim.fr
let HOST_URL = "https://mmi.unilim.fr/~perceau1/SAE2.03-Perceau";

let DataMovie = {};

DataMovie.requestMovies = async function () {
    // fetch permet d'envoyer une requête HTTP à l'URL spécifiée. 
    // L'URL est construite en concaténant HOST_URL à "/server/script.php?direction=" et la valeur de la variable dir. 
    // L'URL finale dépend de la valeur de HOST_URL et de dir.
    let answer = await fetch(HOST_URL + "/server/script.php?todo=readmovies");
    // answer est la réponse du serveur à la requête fetch.
    // On utilise ensuite la méthode json() pour extraire de cette réponse les données au format JSON.
    // Ces données (data) sont automatiquement converties en objet JavaScript.
    let movies = await answer.json();
    // Enfin, on retourne ces données.
    return movies;

}

DataMovie.requestMovieDetail = async function (id) {

    let answer = await fetch(HOST_URL + "/server/script.php?todo=readMovieDetail&id=" + id);

    let moviedetail = await answer.json();

    return moviedetail;
}


DataMovie.requestMovieCategory = async function (id_category) {
    let answer = await fetch(HOST_URL + "/server/script.php?todo=readMovieCategory&id_category=" + id_category);
    let category = await answer.json();
    return category;
};

DataMovie.requestMovieByProfil = async function(age){
    let answer = await fetch(HOST_URL + "/server/script.php?todo=movieByProfil=" + age );
    let profil = await answer.json();
    return profil;
}

export { DataMovie };

