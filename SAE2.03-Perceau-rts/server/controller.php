<?php


require("model.php");

function readMoviesController(){
    $movies = getAllMovies();
    return $movies;
}


function readMovieDetailController(){

  $id = $_REQUEST['id'] ?? null;
  
  if (empty($id)) {
    return "Erreur : Tous les champs doivent être remplis.";
  }
  
  return getMovieDetail($id);
}


function readMoviesByCategoryController() {
  $age = isset($_REQUEST['age']) ? intval($_REQUEST['age']) : 0; // Récupère l'âge ou 0 par défaut
  $categories = getMoviesByCategory($age); // Appelle la fonction du modèle avec l'âge
  return $categories ? $categories : false;
}

function readCategoryController() {
  $categories = getCategory();
  return $categories;
}

function addController() {

      $name = $_REQUEST['name'] ?? null;
      $year = $_REQUEST['year'] ?? null;
      $length = $_REQUEST['length'] ?? null;
      $description = $_REQUEST['description'] ?? null;
      $director = $_REQUEST['director'] ?? null;
      $id_category = $_REQUEST['id_category'] ?? null;
      $image = $_REQUEST['image'] ?? null;
      $trailer = $_REQUEST['trailer'] ?? null;
      $min_age = $_REQUEST['min_age'] ?? null;
      if (empty($name) || empty($year) || empty($length) || empty($description) || empty($director) || empty($id_category) || empty($image) || empty($trailer) || empty($min_age)) {

        return "Erreur : Tous les champs doivent être remplis.";
      }
      $ok = addMovie($name, $year, $length, $description, $director, $id_category, $image, $trailer, $min_age);

      if ($ok != 0) {
          return "Film ajouté à la base de donnée";
      } else {
         return  "Erreur lors de l'ajout du film";
      }
}


function addProfileController(){

  $name = $_REQUEST['name'] ?? null;
  $image = $_REQUEST['image'] ?? null;
  $age = $_REQUEST['age'] ?? null;
  
  if (empty($name) || empty($image) || empty($age)) {
    return "Erreur : Tous les champs doivent être remplis.";
  }
  $ok = addProfile($name, $image,$age);
  if ($ok!=0){
    return "L'utilisateur a été ajouté avec succès !";
  } 
  else{
    return "Erreur lors de l'ajout de l'utilisateur  !";
  }
      }


      function readProfileController(){
        if (!isset($_REQUEST['id'])) {
          $profiles = readProfile(); 
        }
        else{
          $id = $_REQUEST['id'];
          $profiles = readOneProfile($id);
        }
       
        return $profiles;
      }



  function updateProfileController() {
    $id = $_REQUEST['id'] ?? null;
    $name = $_REQUEST['name'] ?? null;
    $image = $_REQUEST['image'] ?? null;
    $age = $_REQUEST['age'] ?? null;

    if (empty($id) || empty($name) || empty($age)) {
        return "Erreur : Tous les champs obligatoires doivent être remplis.";
    }

    $ok = updateProfile($id, $name, $image, $age);
    return $ok ? "Le profil a été modifié avec succès." : "Erreur lors de la modification du profil.";
}


function addFavorisController() {
  $id_user = $_REQUEST['id_user'] ?? null;
  $id_movie = $_REQUEST['id_movie'] ?? null;

  if (isFavoris($id_movie, $id_user)) {
      return ["error" => "Ce film est déjà dans les favoris."];
  }

  $result = addFavoris($id_movie, $id_user);
  if ($result) {
      return ["success" => "Film ajouté aux favoris."];
  } else {
      return ["error" => "Impossible d'ajouter le film aux favoris."];
  }
}


function getFavorisController() {
  $id_user = $_REQUEST['id_user'] ?? null;
  $favoris = getFavoris($id_user);
  return $favoris ? $favoris : [];
}

function removeFavorisController() {
  $id_user = $_REQUEST['id_user'] ?? null;
  $id_movie = $_REQUEST['id_movie'] ?? null;
  $result = removeFavoris($id_movie, $id_user);
  if ($result) {
      return ["success" => "Film supprimé des favoris."];
  } else {
      return ["error" => "Impossible de supprimer le film des favoris."];
  }
}


function readUneMovieController()
{
$data = getUneMovie();
return $data ? $data : [];
}


