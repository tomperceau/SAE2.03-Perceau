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


  function readMovieCategoryController() {
    $category = getMovieCategory();
    return $category ? $category : false;
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
  $datenaissance = $_REQUEST['datenaissance'] ?? null;
  
  if (empty($name) || empty($image) || empty($datenaissance)) {
    return "Erreur : Tous les champs doivent être remplis.";
  }
  $ok = addProfile($name, $image,$datenaissance);
  if ($ok!=0){
    return "L'utilisateur a été ajouté avec succès !";
  } 
  else{
    return "Erreur lors de l'ajout de l'utilisateur  !";
  }
      }


      function readProfileController() {
        $profiles = readProfile();
        return $profiles;
    }



    