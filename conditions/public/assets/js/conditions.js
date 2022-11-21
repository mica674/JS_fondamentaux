// Exercice 1
// Déclarer variable let et affecter 30
let age = 30;

// Si age >= 18 afficher 'Vous êtes majeur'  sinon afficher 'Vous êtes mineur' dans la console
if (age >== 18) { console.log('Vous êtes majeur'); }
else { console.log('Vous êtes mineur'); }

// Exercice 2
let num = 26;

if (num % 2 === 0) { console.log('Le nombre est pair') }
else { console.log('le nombre est impair') };

// Exercice 3
let mark = 5;

if (typeof (mark) == 'number' && mark>=0 && mark<=10){
    switch (mark) {
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
}
else{console.log('Mets un nombre entre 0 et 10 stp encul&')}

// Exercice 4
let day = 3;
let dayOfWeek;

switch (day) {
    case 1:
        dayOfWeek = 'Lundi';
        break;
    case 2:
        dayOfWeek = 'Mardi';
        break;
    case 3:
        dayOfWeek = 'Mercredi';
        break;
    case 4:
        dayOfWeek = 'Jeudi';
        break;
    case 5:
        dayOfWeek = 'Vendredi';
        break;
    case 6:
        dayOfWeek = 'Samedi';
        break;
    case 7:
        dayOfWeek = 'Dimanche';
        break;
    default:
        dayOfWeek = 'Fail';
};
console.log(dayOfWeek);

// Exercice
let value = '5';

if (typeof (value) == 'string') {
    console.log('La valeur entrée est une chaîne');
    value = parseInt(value);
};
if (typeof (value) == 'number') {
    console.log('La valeur entrée est un nombre');
    value = true;
};
if (typeof (value) == 'boolean') {
    console.log('la valeur entrée est un booléen');
};