// URL où se trouve le répertoire "server" sur mmi.unilim.fr
let HOST_URL = "https://mmi.unilim.fr/~perceau1/SAE2.03-Perceau";

let DataMovie = {};

DataMovie.requestMovies = async function (age = 99) {
    let answer = await fetch(HOST_URL + `/server/script.php?todo=readMoviesCategory&age=${age}`);
    let movies = await answer.json();
    return movies;
  };

DataMovie.requestMovieDetail = async function (id) {

    let answer = await fetch(HOST_URL + "/server/script.php?todo=readMovieDetail&id=" + id);

    let moviedetail = await answer.json();

    return moviedetail;
}



DataMovie.requestCategory = async function () {
    let answer = await fetch(HOST_URL + "/server/script.php?todo=readMoviesCategory");
    let categories = await answer.json();
    return categories;
  };
  

export { DataMovie };

