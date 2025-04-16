let HOST_URL = "https://mmi.unilim.fr/~perceau1/SAE2.03-Perceau/SAE2.03-Perceau-rts";

let DataProfile = {};


DataProfile.add = async function (formData) {
  let answer = await fetch(HOST_URL + "/server/script.php?todo=addProfile", {
    method: "POST",
    body: formData,
  });
  let response = await answer.json();
  return response;
};


DataProfile.update = async function (formdata) {
  let config = {
    method: "POST",
    body: formdata,
  };
  let answer = await fetch(
    HOST_URL + "/server/script.php?todo=updateProfile",
    config);
  let data = await answer.json();
  return data;
};


DataProfile.readProfile = async function () {
  let answer = await fetch(
    HOST_URL + "/server/script.php?todo=readProfile"
  );
  let data = await answer.json();
  return data;
};


export { DataProfile };