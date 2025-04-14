

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





// On exporte la fonction DataProfile.read
export { DataProfile };
