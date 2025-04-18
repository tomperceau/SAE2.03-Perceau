Un fichier README.md qui explique, pour chaque itération:
- si vous avez dû faire des modifications sur la base, en donnant une
justification de vos choix concernant l’organisation des tables, les
associations, les types de données, longueurs, clefs primaires, etc
- vous pouvez aussi expliquer les cardinalités sur Looping et les
requêtes SQL que vous avez utilisées dans votre code PHP
une capture d’écran de la vue Looping


Itération 1 : Consulter la liste des films proposés par la plateforme.

Importation de la base contenant la table Movie et la table Category.
La table Movie a une clé primaire (id du film) et d'autres informations (name / year / length ...).
La table Category a une clé primaire ( id de la catégorie ) e t une autre information ( name ).

Requete sql :

"SELECT Movie.id, Movie.name, Movie.image, Movie.min_age, Category.name AS category_name 
            FROM Movie 
            INNER JOIN Category ON Movie.id_category = Category.id";


Itération 2 : Ajouter des films dans la base de données.


Ajouts de films avec les paramètres de la table ( name / year / length ...).

Requete sql :

"INSERT INTO Movie (name, year, length, description, director, id_category, image, trailer, min_age) 
                VALUES (:name, :year, :length, :description, :director, :id_category, :image, :trailer, :min_age)";


Itération 3 : Consulter les informations détaillées d'un film ainsi.

Récupération des paramètres de la table Movie pour afficher tous les
détails des films.

Requete sql :

"SELECT Movie.id, Movie.name, image, description, director, year, length, Category.name AS category_name, min_age, trailer FROM Movie
    INNER JOIN Category ON Movie.id_category = Category.id WHERE Movie.id = :id";

Itération 4 : Afficher les films en les regroupant par catégorie.

Utilisation du paramètre id_category dans la table Movie qui est une
clé étrangère pour la relier avec l'id de la table Category pour grouper les films par category



"SELECT Category.id AS category_id, Category.name AS category_name, 
                   Movie.id AS movie_id, Movie.name AS movie_name, Movie.image AS movie_image
            FROM Movie 
            INNER JOIN Category ON Movie.id_category = Category.id
            WHERE Movie.min_age <= :age";

Itération 5 : Avoir un formulaire pour ajouter des profils utilisateurs.

Création d'une table User ayant pour paramètres :
- l'id (id) comme clé primaire (INT)
- le nom (name) du profil (VARCHAR(255))
- le nom (image) du fichier de l'avatar (VARCHAR(255))
- l'age (age) pour filtrer les films suivant l'age de l'utilisateur (INT)

Cette table permet de stocker les informations d'un user 
(profil) pour filtrer les films par rapport à l'age de l'utilisateur.

Requete sql :

"INSERT INTO User (name, image, age) VALUES (:name, :image, :age)";

Itération 6 : Pouvoir choisir un profil utilisateur.

Lecture des informations des profils à partir de la base de données

Requetes sql :

lire tout les profils :
"select id, name, image, age from User";
lire un seul profil:
"select * from User where id = :id";

Itération 7 : Filtrer les contenus selon l'age du profil sélectionné.

Filtrage des films par rapport à l'age de l'utilisateur. Mise en relation des paramètres min_age et age des tables Movie et Profil. ajout de  WHERE Movie.min_age <= :age"; 

"SELECT Category.id AS category_id, Category.name AS category_name, 
                   Movie.id AS movie_id, Movie.name AS movie_name, Movie.image AS movie_image
            FROM Movie 
            INNER JOIN Category ON Movie.id_category = Category.id
            WHERE Movie.min_age <= :age"; 

Itération 8 : Pouvoir modifier un profil utilisateur.

Modifier un profil grâce à son id

Voici ma requete sql :



Itération 9 : Pouvoir ajouter des films à une liste de favoris par
profil utilisateurs.

Création de la table Favoris ayant pour paramètres deux clés étrangères :
- id_movie clé étrangère venant de Movie
- id_profil clé étrangère venant de User

Elle permet d'ajouter des films favoris différents pour chaque profils

Itération 10 : Pouvoir retirer un film de sa liste de favoris.

Supprimer des films favoris de la base de données.

'DELETE FROM Favoris 
        WHERE id_user = :id_user AND id_movie = :id_movie';

Itération 11 : Avoir des films mis en avant.

Modification de la table Movie pour l'ajout du paramètre "une"
(tinyint(1)) permettant de récupérer les informations d'un film en lui donnant la valeur 1.
Cela permet d'afficher le film en question dans la categorie à la une.

"SELECT id,name,image,description FROM Movie WHERE une = 1";

Looping :

J'ai relié les tables catgory et Movie par le verbe Catégoriser car :
- Une categories peut catégoriser 0 ou plusieurs films : (0,n)
- Un film peut être catégorisé par une seule catégorie : (1,1)

J'ai relié les tables Movie et User par l'association Favoriser qui a pour paramètres id_movie et id_user car :
- un film peut etre mis en favoris par 0 ou plusieurs profils : (0,n)
- un profil peut avoir en favoris de 0 ou plusieurs films : (0,n)
