<?php
/**
 * Ce fichier contient toutes les fonctions qui réalisent des opérations
 * sur la base de données, telles que les requêtes SQL pour insérer, 
 * mettre à jour, supprimer ou récupérer des données.
 */

/**
 * Définition des constantes de connexion à la base de données.
 *
 * HOST : Nom d'hôte du serveur de base de données, ici "localhost".
 * DBNAME : Nom de la base de données
 * DBLOGIN : Nom d'utilisateur pour se connecter à la base de données.
 * DBPWD : Mot de passe pour se connecter à la base de données.
 */
define("HOST", "localhost");
define("DBNAME", "perceau1");
define("DBLOGIN", "perceau1");
define("DBPWD", "perceau1");
// hello

function getAllMovies(){
    // Connexion à la base de données
    $cnx = new PDO("mysql:host=".HOST.";dbname=".DBNAME, DBLOGIN, DBPWD);
    // Requête SQL pour récupérer le menu avec des paramètres
    $sql = "select id, name, image from Movie";
    // Prépare la requête SQL
    $stmt = $cnx->prepare($sql);
    // Exécute la requête SQL
    $stmt->execute();
    // Récupère les résultats de la requête sous forme d'objets
    $res = $stmt->fetchAll(PDO::FETCH_OBJ);
    return $res; // Retourne les résultats
}

function addMovie($n, $y, $l, $d, $di, $c, $i, $t, $ma){
    $cnx = new PDO("mysql:host=".HOST.";dbname=".DBNAME, DBLOGIN, DBPWD); 
    $sql = "INSERT INTO Movie (name, year, length, description, director, id_category, image, trailer, min_age) 
            VALUES ( :name, :year, :length, :description, :director, :id_category, :image, :trailer, :min_age)";
    $stmt = $cnx->prepare($sql);
    $stmt->bindParam(':name', $n);
    $stmt->bindParam(':year', $y);
    $stmt->bindParam(':length', $l);
    $stmt->bindParam(':description', $d);
    $stmt->bindParam(':director', $di);
    $stmt->bindParam(':id_category', $c);
    $stmt->bindParam(':image', $i);
    $stmt->bindParam(':trailer', $t);
    $stmt->bindParam(':min_age', $ma);

    $stmt->execute();

    $res = $stmt->rowCount(); 
    return $res;
}

// function addMovie($titre, $real, $annee, $duree, $des, $cat, $img, $url, $age) {
//     $cnx = new PDO("mysql:host=" . HOST . ";dbname=" . DBNAME, DBLOGIN, DBPWD);

//     $sql = "REPLACE INTO Movie (name, director, year, length, description, id_category, image, trailer, min_age) 
//             VALUES (:titre, :realisateur, :annee, :duree, :desc, :categorie, :image, :url, :age)";

//     $stmt = $cnx->prepare($sql);

//     $stmt->bindParam(':titre', $titre);
//     $stmt->bindParam(':realisateur', $real);
//     $stmt->bindParam(':annee', $annee);
//     $stmt->bindParam(':duree', $duree);
//     $stmt->bindParam(':desc', $des);
//     $stmt->bindParam(':categorie', $cat);
//     $stmt->bindParam(':image', $img);
//     $stmt->bindParam(':url', $url);
//     $stmt->bindParam(':age', $age);

//     $stmt->execute();
//     $res = $stmt->rowCount();
//     return $res; // Retourne le nombre de lignes affectées par l'opération
// }


