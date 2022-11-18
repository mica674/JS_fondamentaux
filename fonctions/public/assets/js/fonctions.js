// Exercice 1
function helloWorld(){
    return 'Bonjour tout le monde'
};

console.log(helloWorld());

// Exercice 2
let firstnameS = 'Steve'

function helloYou(firstname){
    return `Bonjour ${firstname}`
};

console.log(helloYou(firstnameS));

// Exercice 3
function average(nb1, nb2){
    let avg;
    avg = (nb1 + nb2)/2
    return avg;
};

console.log(`Petite phrase pour afficher le résultat : ${average(6,9)}`)

// Exercice 4
let arg = 'Wesh bien ?';
let fonction_flechee = (argument) => (`Résultat : ${argument}. Nombre de caractères : ${argument.length}`);

console.log(fonction_flechee(arg));

// Exercice 5
function howAreYou(name){
    return `Bonjour, ${name} ! Comment vas-tu ?`;
};

console.log(howAreYou('Thierry'));

// Exercice 6
let n1 = 6;
let n2 = 9;

let average3 = (nb1, nb2) => ((nb1+nb2)/2);

console.log(`Calcul de ouf pour la moyenne de n1 et n2 : (n1+n2)/2 = ${average3(6,9)} 
où n1 = ${n1} et n2 = ${n2}`);

