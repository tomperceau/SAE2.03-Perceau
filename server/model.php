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

function getAllMovies() {
    $cnx = new PDO("mysql:host=".HOST.";dbname=".DBNAME, DBLOGIN, DBPWD);
    $sql = "SELECT Movie.id, Movie.name, Movie.image, Movie.min_age, Category.name AS category_name 
            FROM Movie 
            INNER JOIN Category ON Movie.id_category = Category.id";
    $stmt = $cnx->prepare($sql);
    $stmt->execute();
    $res = $stmt->fetchAll(PDO::FETCH_OBJ);
    return $res;
}

function addMovie($name, $year, $length, $description, $director, $id_category, $image, $trailer, $min_age) {

        $cnx = new PDO("mysql:host=".HOST.";dbname=".DBNAME, DBLOGIN, DBPWD);
        $sql = "INSERT INTO Movie (name, year, length, description, director, id_category, image, trailer, min_age) 
                VALUES (:name, :year, :length, :description, :director, :id_category, :image, :trailer, :min_age)";
        $stmt = $cnx->prepare($sql);
        $stmt->bindParam(':name', $name);
        $stmt->bindParam(':year', $year);
        $stmt->bindParam(':length', $length);
        $stmt->bindParam(':description', $description);
        $stmt->bindParam(':director', $director);
        $stmt->bindParam(':id_category', $id_category);
        $stmt->bindParam(':image', $image);
        $stmt->bindParam(':trailer', $trailer);
        $stmt->bindParam(':min_age', $min_age);

        $stmt->execute();

        return $stmt->rowCount(); // Retourne le nombre de lignes affectées
    
}


function getMoviesByCategory($age) {
    $cnx = new PDO("mysql:host=" . HOST . ";dbname=" . DBNAME, DBLOGIN, DBPWD, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
    ]);

    // Requête SQL pour récupérer les films groupés par catégorie
    $sql = "SELECT Category.id AS category_id, Category.name AS category_name, 
                   Movie.id AS movie_id, Movie.name AS movie_name, Movie.image AS movie_image
            FROM Movie 
            INNER JOIN Category ON Movie.id_category = Category.id
            WHERE Movie.min_age <= :age";

    $stmt = $cnx->prepare($sql);
    $stmt->bindParam(':age', $age, PDO::PARAM_INT);
    $stmt->execute();
    $rows = $stmt->fetchAll(PDO::FETCH_OBJ);

    // Regrouper les films par catégorie
    $categories = [];
    foreach ($rows as $row) {
        if (!isset($categories[$row->category_id])) {
            $categories[$row->category_id] = [
                "name" => $row->category_name,
                "movies" => []
            ];
        }
        $categories[$row->category_id]["movies"][] = [
            "id" => $row->movie_id,
            "name" => $row->movie_name,
            "image" => $row->movie_image
        ];
    }

    return array_values($categories); 
}



function getMovieDetail($id){
    // Connexion à la base de données
    $cnx = new PDO("mysql:host=".HOST.";dbname=".DBNAME, DBLOGIN, DBPWD);
    // Requête SQL pour récupérer le menu avec des paramètres
    $sql = "SELECT Movie.id, Movie.name, image, description, director, year, length, Category.name AS category_name, min_age, trailer FROM Movie
    INNER JOIN Category ON Movie.id_category = Category.id WHERE Movie.id = :id";


    // Prépare la requête SQL
    $stmt = $cnx->prepare($sql);
    // Liaison des paramètres :id avec la valeur de $id
    $stmt->bindParam(':id', $id, PDO::PARAM_STR);
    // Exécute la requête SQL
    $stmt->execute();
    // Récupère les résultats de la requête sous forme d'objets
    $res = $stmt->fetchAll(PDO::FETCH_OBJ);
    return $res; // Retourne les résultats
}

    function addProfile($name, $image, $age) {
        $cnx = new PDO("mysql:host=" . HOST . ";dbname=" . DBNAME, DBLOGIN, DBPWD);
        $sql = "INSERT INTO User (name, image, age) VALUES (:name, :image, :age)";
        $stmt = $cnx->prepare($sql);
        $stmt->bindParam(':name', $name);
        $stmt->bindParam(':image', $image);
        $stmt->bindParam(':age', $age);
        $stmt->execute();
      
        return ["success" => true];
      }

      function readProfile() {
        $cnx = new PDO("mysql:host=".HOST.";dbname=".DBNAME, DBLOGIN, DBPWD);
        $sql = "select id, name, image, age from User";
        $stmt = $cnx->prepare($sql);
        $stmt->execute();
        $res = $stmt->fetchAll(PDO::FETCH_OBJ);
        return $res; 
      }
    
    
    function readOneProfile($id) {
        $cnx = new PDO("mysql:host=".HOST.";dbname=".DBNAME, DBLOGIN, DBPWD);
        $sql = "select * from User where id = :id";
        $stmt = $cnx->prepare($sql);
    
        $stmt->bindParam(':id', $id, PDO::PARAM_INT);
        $stmt->execute();
        $res = $stmt->fetchAll(PDO::FETCH_OBJ);
        return $res;
    }

    function updateProfile($id, $name, $image, $age) {
        $cnx = new PDO("mysql:host=" . HOST . ";dbname=" . DBNAME, DBLOGIN, DBPWD);

        $sql = "UPDATE User SET name = :name, image = :image, age = :age WHERE id = :id";

        $stmt = $cnx->prepare($sql);
        $stmt->bindParam(':name', $name);
        $stmt->bindParam(':image', $image);
        $stmt->bindParam(':age', $age);
        $stmt->bindParam(':id', $id);

        $stmt->execute();
        return $stmt->rowCount(); // Retourne 1 si ok, 0 sinon
    }

    function getFavoris($id_user)
    {
        $cnx = new PDO('mysql:host=' . HOST . ';dbname=' . DBNAME, DBLOGIN, DBPWD);
        $sql = 'SELECT id_user, id_movie FROM Favoris WHERE id_user = :id_user';
        $sql = "SELECT * FROM Favoris JOIN Movie ON Favoris.id_movie = Movie.id WHERE Favoris.id_user = :id_user";

        $stmt = $cnx->prepare($sql);
        $stmt->bindParam(':id_user', $id_user, PDO::PARAM_INT);
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_OBJ);
    }

    function addFavoris($user, $movie)
    {
        $cnx = new PDO('mysql:host=' . HOST . ';dbname=' . DBNAME, DBLOGIN, DBPWD);

        $sql = 'INSERT INTO Favoris (id_user, id_movie) 
                VALUES (:id_user, :id_movie)';

        $stmt = $cnx->prepare($sql);

        $stmt->bindParam(':id_user', $user);
        $stmt->bindParam(':id_movie', $movie);

        $stmt->execute();
        $res = $stmt->rowCount();
        return $res;
    }

    function removeFavoris($user, $movie)
    {
        $cnx = new PDO('mysql:host=' . HOST . ';dbname=' . DBNAME, DBLOGIN, DBPWD);
        $sql = 'DELETE FROM Favoris WHERE id_user = :id_user AND id_movie = :id_movie';
        $stmt = $cnx->prepare($sql);
        $stmt->bindParam(':id_user', $user);
        $stmt->bindParam(':id_movie', $movie);
        $stmt->execute();
        return $stmt->rowCount();
    }