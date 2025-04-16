let HOST_URL = "https://mmi.unilim.fr/~perceau1/SAE2.03-Perceau/SAE2.03-Perceau-rts";


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
};


DataMovie.requestCategory = async function () {
  let answer = await fetch(HOST_URL + "/server/script.php?todo=readMoviesCategory");
  let categories = await answer.json();
  return categories;
};


DataMovie.addFavoris = async function (id_user, id_movie) {
  let answer = await fetch(
    HOST_URL + "/server/script.php?todo=addFavoris&id_user=" + id_user + "&id_movie=" + id_movie
  );
  let data = await answer.json();
  return data;
};


DataMovie.removeFavoris = async function (id_user, id_movie) {
  let answer = await fetch(
    HOST_URL + "/server/script.php?todo=removeFavoris&id_user=" + id_user + "&id_movie=" + id_movie
  );
  let data = await answer.json();
  return data;
};


DataMovie.UneMovies = async function () {
  let answer = await fetch(
    HOST_URL + "/server/script.php?todo=getUneMovie");
  let movies = await answer.json();
  return movies;
};


export { DataMovie };

