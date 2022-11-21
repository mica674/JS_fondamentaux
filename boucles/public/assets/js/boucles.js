// Exercice 1
for (let index = 2020; index <= 2030; index++) {
    console.log(index);
}

// Exercice 2
for (let index = 0; index <= 100; index++) {
    if (index%7 === 0) {
        console.log(index + ' est un multiple de 7');
    }    
    else{
        console.log(index);
    };
};

// Exercice 3
const languages = ['Javascript', 'Python', 'PHP', 'Java', 'SQL' ];

for (let index = 0; index < languages.length; index++) {
    console.log(languages[index]);  
};

// Exercice 4
const days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
for (let index = 1; index < days.length+1; index++) {
    console.log(index + ': ' + days[index-1]);
};

// Exercice 5
let day = Math.random()*365+1;
day = parseInt(day);

// let i = 0;
// while (i < day) {
//     i++;
//     console.log('Jour ' + day + ' de l\'année');
// };    
// if (i = day) {
//         console.log('Jour ' + day + ' atteint');
//     };

for (let index = 0; index <= day; index++) {
    if (index < day) {
        console.log('Jour ' + day + ' de l\'année');
    }
    else if (index = day){
        console.log('Jour ' + day + ' atteint');
    }
};

// Exercice 6
let firstNumber = parseInt(Math.random()*10+1);
let secondNumber = parseInt(Math.random()*10+1);

if (firstNumber !== 1) {
    console.log('firstNumber vaut : ' + firstNumber);
    console.log('secondNumber vaut : ' + secondNumber);
    
    secondNumber = firstNumber*secondNumber;
    
     while ((secondNumber) < 250) {
        console.log('Le résultat vaut : ' + secondNumber);
        secondNumber = firstNumber*secondNumber;
     };
}

else {
console.log('firstNumber vaut : ' + firstNumber);
console.log('secondNumber vaut : ' + secondNumber);
console.log('Le résultat ne peut pas évoluer avec un firstNumber = 1');   
}
