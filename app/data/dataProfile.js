

// URL où se trouve le répertoire "server" sur mmi.unilim.fr
let HOST_URL = "https://mmi.unilim.fr/~perceau1/SAE2.03-Perceau";

let DataProfile = {};


DataProfile.readProfile = async function () {
  let answer = await fetch(HOST_URL + "/server/script.php?todo=readProfile");
  let profile = await answer.json();
  return profile;
};

DataProfile.readOne = async function (id) {
  let answer = await fetch(HOST_URL + "/server/script.php?todo=readProfile&id=" + id);
  
  let res = await answer.json();
  return res;
};
DataProfile.requestFavoris   = async function (id_user) {
  let res = await fetch(
    `${HOST_URL}/server/script.php?todo=getFavorisUserMovie&id_user=${id_user}`
  );
  return await res.json();
};

DataProfile.addFavoris = async function (id_user, id_movie) {
  const fd = new FormData();
  fd.append("id_user", id_user);
  fd.append("id_movie", id_movie);

  const res = await fetch(`${HOST_URL}/server/script.php?todo=addFavoris`, {
    method: "POST",
    body: fd,
  });

  return await res.json();
};
DataProfile.removeFavoris = async function (id_user, id_movie) {
  const fd = new FormData();
  fd.append("id_user", id_user);
  fd.append("id_movie", id_movie);

  const res = await fetch(`${HOST_URL}/server/script.php?todo=removeFavoris=${id_user, id_movie}`, {
    method: "POST",
    body: fd,
  });

  return await res.json();
};



// On exporte la fonction DataProfile.read
export { DataProfile };
