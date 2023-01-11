// // # Array

// // ## Introduction
// // ### Exercice 1
// // - Créer un tableau vide
// // - affiche son contenu via un console.log puis affiche son type

// let tableau = [];
// console.log(tableau);
// console.log(typeof tableau);

// // ### Exercice 2
// // - créer un tableau avec un string, un integer un boolean et un tableau
// // - sans une boucle affiche moi un par un les élements du tableau via des console.log

// let tableau = [`Emrick`];
// console.log(tableau);

// // ### Exercice 3
// // 1. Créer un tableau avec 5 éléments, affiche dans la console le 3 eme élément

let tableau = [`Emrick`, `Ulrich`, `Elizabeth`, `Josh`, `Alixay`,];

// let trois = tableau[3];
// console.log(trois);

// // // 2. Affiche dans la console le 1er élément et le dernier élément

// let un = tableau[0];
// console.log(un);

// let lastElement = tableau[tableau.length-1];
// console.log(lastElement); // Output: 5

// // 3. Affiche dans la console le 2eme élémént avec toutes ses lettres en majuscule sauf la derniere 

// let deux = tableau[1];
// console.log(deux);
// let deuxBis = deux.toUpperCase();
// console.log(deuxBis);
// let lastChar = deuxBis.charAt(deuxBis.length - 1);
// console.log(lastChar);

// // Test 1
// let deux = tableau[1];
// console.log(deux);
// let deuxBis = deux.toUpperCase();
// console.log(deuxBis);
// let newChar = "h";
// deuxBis = deuxBis.slice(0, -1) + newChar;
// console.log(deuxBis); 


// // Test 2 (Mode automatique)
// let deux = tableau[1];
// console.log(deux);
// let deuxBis = deux.toUpperCase();
// console.log(deuxBis);
// let lastChar = deuxBis[deuxBis.length - 1];
// console.log(lastChar);
// let lastChar2 = lastChar.toLowerCase();
// console.log(lastChar2);
// deuxBis = deuxBis.slice(0, -1) + lastChar2;
// console.log(deuxBis); 

// // 4. Affiche dans la console le 4eme élément du tableau mais uniquement sa première lettre

// let quatre = tableau[3];
// console.log(quatre);
// let quatreBis = quatre.charAt(0);
// console.log(quatreBis);

// // 5. Affiche dans la console le 5eme élément du tableau mais sans sa première lettre

// // Test uniquement Premiere lettre
// let firstLetter = tableau[4][0];
// console.log(firstLetter);

// // Test uniquement Premiere lettre mais tout le tableau
// let cinq = tableau[4];
// console.log(cinq);
// tableau[4] = tableau[4].substring(1);
// console.log(tableau); // Output: ['bc', 'def', 'ghi']

// let cinq = tableau[4];
// console.log(cinq);
// let cinqBis = cinq.substring(1);
// console.log(cinqBis);

// // 6. Affiche dans la console seulement les 2 premieres lettres du 1er element, la premiere que tu mettras en minuscule et la seconde en majuscule.

let six = tableau[0][0];
console.log(six);

let six1 = tableau[0][1];
console.log(six1);

let six2 = tableau[0];
console.log(six2);

let res = six2.substring(0, 2);
console.log(res);

let newRes = res.toLowerCase();
console.log(newRes);
let newString = newRes.substr(0, newRes.length - 1) + newRes.substr(-1).toUpperCase();
console.log(newString);


// // 7. Affiche dans la console la concaténation du premier élément avec le 3eme élément

let cinq = tableau[0];
console.log(cinq);
let cinq1 = tableau[2];
console.log(cinq1);
let concaténation = `voici ${cinq} et ${cinq1}`;
console.log(concaténation);


// // ## Méthodes 
// // ### Exercice 4
// // - Créer un tableau vide 
// // - Ajoutez 5 prenoms dans le tableau a l'aide d'une methode
// // - Affichez dans la console le contenu de l'array
// // ### Exercice 5
// // - Créer un tableau avec 5 prenoms 
// // - Ajoutez Maxence au debut et Louise a la fin du tableau a l'aide d'une methode
// // - Affichez dans la console le contenu de l'array
// // ### Exercice 6
// // - Créer un tableau avec 5 prenoms 
// // - Supprimez le 1er e dernier prenom du tableau a l'aide d'une methode
// // - Affichez dans la console le contenu de l'array
// // ### Exercice 7
// // - Créer un tableau avec 5 prenoms 
// // - Supprimez les 2 premiers et les 2 dernier prenoms du tableau a l'aide d'une methode
// // - Affichez dans la console le contenu de l'array
// // ### Exercice 8
// // - Créer un tableau avec 5 prenoms 
// // - Remplacez le 2eme prenom du tableau par Ayhan et l'avant dernier prenom du tableau par Elias du tableau a l'aide d'une methode
// // - Affichez dans la console le contenu de l'array
// // ### Exercice 9
// // - Créer un tableau avec 5 prenoms (Ayoub, Jamila, Alex, Natchez, Bene)
// // - Remplacez Jamila par Zulma et Ayoub par Adame du tableau a l'aide d'une methode
// // - Affichez dans la console le contenu de l'array
// // ### Exercice 10
// // - Créer un tableau avec 5 prenoms (Ayoub, Jamila, Alex, Natchez, Bene)
// // - Supprimez  Natchez et Bene du tableau a l'aide d'une methode
// // - Affichez dans la console le contenu de l'array
// // ### Exercice 11
// // - Une classe a 10 etudiants, la classe est vide au debut et a la fin touts les etudiants doivent etre presents. Afficher un message pour chaque etidiant qui vient de rentrer en la classe et afficher touts les etudiants qui sont en classe a la fin.
// // ### Exercice 12
// // - Une classe a 10 etudiants, 12 etudiants rentrent en classe mais les 2 derniers se sont trompés. Vous devez les envoyer dans une autre classe et montrer les etudiants qui se sont trompés et aussi montrer la classe complete avec les 10 autres etudiants.
