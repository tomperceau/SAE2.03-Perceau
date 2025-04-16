let HOST_URL = "https://mmi.unilim.fr/~perceau1/SAE2.03-Perceau/SAE2.03-Perceau-rts";


let DataMovie = {};


DataMovie.addMovie = async function (fdata) {
  let config = {
    method: "POST",
    body: fdata,
  };
  let answer = await fetch(
    HOST_URL + "/server/script.php?todo=addMovie",
    config
  );
  let data = await answer.json();
  return data;
};


export { DataMovie };

