let HOST_URL = "https://mmi.unilim.fr/~perceau1/SAE2.03-Perceau/SAE2.03-Perceau-rts";


let Data = {};


Data.readCategory = async function () {
  let answer = await fetch(HOST_URL + "/server/script.php?todo=readCategory");
  let categories = await answer.json();
  return categories;
};

export { Data };