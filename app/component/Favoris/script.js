import { Movie } from "../Movie/script.js";

let Favoris = {};

Favoris.format = function (favoris) {
  if (!favoris || favoris.length === 0) {
    return "<p>Aucun Favoris</p>";
  }

  return Movie.format(favoris, true);
};

export { Favoris };