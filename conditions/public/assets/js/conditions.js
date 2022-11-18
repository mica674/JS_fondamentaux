// Exercice 1
let age = 30;

if(age>18){console.log('Vous êtes majeur')}
else{console.log('Vous êtes mineur')};

// Exercice 2
let num = 26;

if(num%2 == 0){console.log('Le nombre est pair')}
else{console.log('le nombre est impair')};

// Exercice 3
let mark = 5;

switch (mark){
    case 4:
        console.log('Moyen');
        break;
    case 5:
        console.log('Moyen');
        break;
    case 6:
        console.log('Assez Bien');
        break;
    case 7:
        console.log('Assez Bien');
        break;
    case 8:
        console.log('Bien');
        break;
    case 9:
        console.log('Bien');
        break;
    case 10:
        console.log('Excellent');
        break;
    default:
        console.log('Mauvais');
};

// Exercice 4
let day = 3;

switch(day){
    case 1:
        console.log('Lundi');
        break;
    case 2:
        console.log('Mardi');
        break;
    case 3:
        console.log('Mercredi');
        break;
    case 4:
        console.log('Jeudi');
        break;
    case 5:
        console.log('Vendredi');
        break;
    case 6:
        console.log('Samedi');
        break;
    case 7:
        console.log('Dimanche');
        break;
};

// Exercice 5
let value = '5';

if(typeof(value) == 'string'){
    console.log('La valeur entrée est une chaîne');
    value = parseInt(value);
};
if(typeof(value) == 'number'){
    console.log('La valeur entrée est un nombre');
    value = true;
}
if(typeof(value) == 'boolean'){
    console.log('la valeur entrée est un booléen');
}