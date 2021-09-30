// 1) Récupèrer TOUTES les petites images dans la barre latérale pour leur mettre un événement click 
// ne pas utiliser document.getElementById parce qu'on ne veut pas utiliser la grande img dans id="imagePrincipale"
// querySelectorAll est l'outil permettant de donner un chemin css

var listeImages = document.querySelectorAll('#barre-laterale img');
console.log(listeImages); 
// liste des image sous forme de tableau
// 0: img#image1
// 1: img#image2
// 2: img#image3
// 3: img#image4
// 4: img#image5
// 5: img#image6
// 6: img#image7
// 7: img#image8
// 8: img#image9
// 9: img#image10

// Mettre un évènement sur les img
// Comme il est impossible de mettre un évènement ou changer le css sur un tableau il faut créer un boucle
// 2) Boucle pour appliquer un événement click sur TOUTES les images récupérées
// for of pour récupérer directement l'image concernée
// A chaque tour de boucle l'évènement click s'applique sur l'élément en cours ET à chaque img
// La variable  img est l'élément en cours
for(var img of listeImages) {
    img.addEventListener('click', function() {

        // this représente l'élément html qui a reçu l'événement
        // ici this représente l'img qui vient d'être cliquée
        console.log(this.id); // pour savoir l'id de img en cours (possible avec tous les attributs .id)

        var nouveauSrc = 'img/' + this.id + '.jpg';
        // revient à dire : var nouveauSrc = 'img/' + this + '.jpg'; "img/image1.jpg" ici this = image1
        // pas mettre d'espace dans les chaine de caracteres
        // cette chaîne de caractères représente un src

        // Mettre ce src sur la grande img par son id
        document.getElementById('imagePrincipale').src = nouveauSrc;
    });
}

