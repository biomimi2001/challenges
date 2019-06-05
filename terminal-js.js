// Bienvenue à ce premier challenge.
// Vous afficherez les resultats dans le terminal avec la commande:
// 'node <nom du ficher>'
// Pour que les resultats soient visible dans le terminal, vous utiliserez
// la fonction 'console.log'
// ex: console.log('simplon');
// ex: console.log(fonction());
// ex: console.log(nom de la variable);
// Lorque vous avez validé un exercice, mettez le en commentaire !!




//Additionnez ces deux termes et stockez le résultat dans une variable
//puis l'afficher
const num1 = "4";
const num2 = "5";
let resultat = parseInt (num1) + parseInt (num2);
console.log(resultat);
//TODO



//Variables et opérateurs
//Déclarer deux variables avec comme valeur 4 et 5
//Créez une autre variable contenant l'addition des deux et l'afficher.
let n1= 4;
let n2 = 5;
let result= n1+n2;
console.log(result);


//Les tableaux
//Déclarez un tableau avec 5 villes
//Afficher la ville à l'indice 3
//Ajouter une ville au tableau
//Supprimer la ville à l'indice 2

const villes = ["paris", "maseille", "lyon", "nantes", "rennes"];
//TODO
console.log(villes[3]);
villes.push('lille');
console.log(villes);
villes.splice(2,1);
console.log(villes);



//Les boucles
//
//Boucler sur le tableau 'array1' afin de monter chaque
//éléments au carré et afficher le tableau.

const array1 = [2, 4, 8];
//TODO
for (let i=0 ; i<array1.length ; i++){
  console.log(Math.pow(array1[i],2));
}


// Le tableau suivant indique les notes d'une promo lointaine !
// Calculer la moyenne de cette promo et afficher le resultat
const promo = [12, 13, 17, 3, 14, 18];
var somme= 0
var n=promo.length;
for (let i=0 ; i<promo.length ; i++){
somme =somme+  promo[i];
}
var moyenne = somme/n;
  console.log(moyenne);


// Afficher la date d'aujourd'hui sous la forme:
// "Nous somme le [jour/mois/année] et il est [heure/minute]"
// Afficher ensuite "bonjour" si il est en 7h du matin et 17h
// et "bonsoir" s'il est entre 17h et 00H
var date=new Date;

console.log("Nous sommes le : " + (date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()));
console.log("il est : " + (date.getHours()+":"+(date.getMinutes())));
var heure =date.getHours();

if (7<=heure<=17){
  console.log("bonjour");
}
else if (17<heure<=00){
  console.log("bonsoir");
}





//les conditions
//Déclarez une variable "age" avec la valeur de votre choix.
//En utilisant les conditions 'if' et 'else' affichez :
//peut voter si 'age' est supérieur ou égal à 18
//ne peut pas voter si 'age' est inférieur à 18

//----------------- Fonctions -------------------
var age = 19;
if (age<18){console.log("tu ne peux pas voter");}
else{console.log("tu peux  voter");}

//Créez deux variables initialisées à 3 et 4.
//Créez une fonction qui retourne l'addition de ces deux valeurs.
var var1=3;
var var2=4;
const add = (var1, var2) => {
return var1+var2;
};
console.log( add(var1,var2));




//Créez une fonction qui prend en paramètre la valeur i. La fonction doit
//retourner la valeur i au carré et l'afficher.

const square = (number) => {
  return (Math.pow(number,2));
};
console.log(square(5));


// En utilisant la methode 'map', mettre la chaine de
// caractère en majuscule.
const beatles = ["paul", "john", "ringo", "george"];
console.log(beatles);
//const tabMaj=(beatles.map(escape))
//console.log(tabMaj);
//const maj= (x) => {
// return x.toUpperCase;
//}

console.log(beatles.map(function(x) { return x.toUpperCase(); } ));


//Créez un tableau nommé tab dont le premier
//élément est -2, le deuxième 3 et le troisième 4
//Créez une fonction qui soustrait chaque éléments du tableau au suivant.
const tab = [-2 , 3 , 4];
const tab2 = [];
const soustrait = (tableau) => {
     for (let i=0 ; i<tableau.length-1 ; i++)
     {
       tab2.push(tableau[i+1]-tableau[i]);
     }
     console.log(tab2);
};
console.log(soustrait(tab));






//Créez une fonction qui renvoie la somme de chaque éléments du
//tableau si celui-ci est supérieur à 0.
const array2 = [-2, 4, -5, 3, 6];
let somme2=0;
const addPositiveNumber = (tableau) => {

  	tableau.forEach((nombre) => {
  		if(nombre > 0) {
  			somme2 +=  nombre;
  		}
  	});

  	return somme2;
};
console.log(addPositiveNumber(array2));




//Créez une fonction qui prend un parametre 'r' et qui
//renvoie le périmetre d'un cercle.
const périmetreCercle = (r) => {
  return 2 * Math.PI * r
  //TODO
};
console.log(périmetreCercle(2));
//Créez une fonction qui met la premiere lettre d'un mot en majuscule.
//Le reste du mot doit être en minuscule.
//Le mot est "SimPloN"
const capitalize = (word) => {
  //TODO
};



//Odd or Even
//Créez un fonction qui prend un nombre en parametre et qui renvoie :
//paire si le nombre est pair
//impaire si le nombre est impair
//Tips : jetez un coup d'oeil à l'opérateur '%' dans la doc.
const paire = (n) => {
if( n % 2 ==0)
  console.log("paire");
else
console.log("impare");
};
paire(8);


//Mot inversé
//créez une fonction qui prend en paramètre une chaine de caractère.
//Cette fonction renvoie la chaine de caractère inversée.
//ex: reverseWord('simplon') ==> 'nolpmis'
//Aide : join(), split(), reverse()
const reverseWord = (word) => {

	let resultat = word.split("");
	resultat = resultat.reverse();
	resultat = resultat.join("");

	return resultat;
  //TODO
};
console.log(reverseWord("yasmina"));



//créez une fonction qui renvoie la somme de tableau
const nombres = ["3", "5", "6", "2"];
const sommeTableau = (tableau) => {
	let resultat = 0;

	tableau.forEach((nombre) => {
		
		resultat += parseInt(nombre);
	});

	return resultat;
};

console.log(sommeTableau(nombres));
