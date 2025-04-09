

// URL où se trouve le répertoire "server" sur mmi.unilim.fr
let HOST_URL = "https://mmi.unilim.fr/~perceau1/SAE2.03-Perceau";

let DataProfile = {};


DataProfile.read = async function () {
  let answer = await fetch(HOST_URL + "/server/script.php?todo=readProfile");
  let Profiles = await answer.json();
  return Profiles;
};


// On exporte la fonction DataProfile.read
export { DataProfile };
