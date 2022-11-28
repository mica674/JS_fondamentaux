// Exercice 1
// Déclaration d'un nouvel objet "user1" avec ses propriétés et leurs valeurs
let user1 = {
    lastname : 'Musk',
    firstname : 'Elon',
    age : 51,
    phone : '0422521010',
    birthdate : '1971-06-28',
};

console.log('****** Exercice 1 :');
console.table(user1);

// Exercice 2
user1.phone = '415-222-9670';
console.log('****** Exercice 2 :')
console.log('Téléphone d\'Elon ' + user1.phone);

// Exercice 3
user1.age = null;
console.log('****** Exercice 3 :')
console.table(user1);

// Exercice 4
delete user1.age;
console.log('****** Exercice 4 :')
console.table(user1);

// Exercice 5
let childrenElon = ['Nevada', 'Vivian', 'Griffin', 'Kai', 'Saxon', 'Damian', 'Exa'];

user1.children = childrenElon;

console.log('****** Exercice 5 :')
console.table(user1);

// Exercice 6
function getFullName(){
    return (this.firstname+ ' ' +this.lastname);
};

user1.fnFullName = getFullName;

console.log('****** Exercice 6 :');
console.table(user1);

// Exercice 7
let user2 = {
    lastname : 'O\'neal',
    firsname : 'Shaquille',
    age : '50',
    phone : '0432333436',
    birthdate : '1972-03-06',
    children : ['Shareef', 'Shaqir', 'Taahirah', 'Me\'arah', 'Myles', 'Amirah']
};

let users = [user1, user2];

console.log('****** Exercice 7 :');
console.table(users);

// Exercice 8

// users.forEach((user, index)=>{
//     user.children.forEach((child)=>{
//         let childrenList = '';
//         childrenList = childrenList + ' (' + child + '-'
//     })
// })

// console.log();
