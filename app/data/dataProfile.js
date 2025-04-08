let HOST_URL = "https://mmi.unilim.fr/~perceau1/SAE2.03-Perceau";

let DataProfile = {};

DataProfile.read = async function () {

let answer = await fetch(HOST_URL + "/server/script.php?todo=readProfile");
    let profiles = await answer.json();

    return profiles;
};



export { DataProfile };