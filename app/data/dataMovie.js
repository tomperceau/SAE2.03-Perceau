// URL où se trouve le répertoire "server" sur mmi.unilim.fr
let HOST_URL = "https://mmi.unilim.fr/~perceau1/SAE2.03-Perceau/";//"http://mmi.unilim.fr/~????"; // CHANGE THIS TO MATCH YOUR CONFIG

let DataMovie = {};

 /**
     * Fetches data from the server based on the specified day.
     *
     * @param {string} week - The week parameter to be sent to the server.
     * @param {string} day - The day parameter to be sent to the server.
     * @returns The response from the server.
     * 
     * DataMovie.request permet de récupérer des données depuis le serveur.
     * Elle prend en paramètre une semaine (1, 2, ..., 52) et un jour (lundi mardi...)
     * renvoie les données contenues dans la réponse du serveur (data).
     */
 DataMovie.request = async function(){
    // fetch permet d'envoyer une requête HTTP à l'URL spécifiée. 
    // L'URL est construite en concaténant HOST_URL à "/server/script.php?direction=" et la valeur de la variable dir. 
    // L'URL finale dépend de la valeur de HOST_URL et de dir.
    let answer = await fetch(HOST_URL + "/server/script.php?todo=readmovies");
    // answer est la réponse du serveur à la requête fetch.
    // On utilise ensuite la méthode json() pour extraire de cette réponse les données au format JSON.
    // Ces données (data) sont automatiquement converties en objet JavaScript.
    let data = await answer.json();
    // Enfin, on retourne ces données.
    return data;
}

export {DataMovie};