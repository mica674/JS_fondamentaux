// Exercice 1
function helloWorld(){
    return 'Bonjour tout le monde'
};

console.log(helloWorld());

// Exercice 2
function helloYou(firstname){
    return  firstname
};

let firstnameS = helloYou('Steph');
console.log(`Bonjour ${firstnameS}`);

// Exercice 3
function average(firstNumber, secondNumber){
    let avg = Number(firstNumber) + Number(secondNumber);
    return avg/2;
};

console.log(average('6',9));

// Exercice 4
let fonction_flechee = (string) => (string + '(' + string.length + ')');

console.log(fonction_flechee('chaine'));

// Exercice 5
// howAreYou  = (name) =>  `Bonjour, ${name} ! Comment vas-tu ?`;
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
