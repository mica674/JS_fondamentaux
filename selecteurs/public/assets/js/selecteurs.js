// Exercice 1
// Affecter le texte à la variable textToDisplay
let textToDisplay = 'Comment devenir un AS en JS';

// Ajouter du text (textToDisplay) avant la fin (beforeend)
text.insertAdjacentHTML('beforeend', textToDisplay);

// Autre méthode : avec innerHTML
getID = document.getElementById('text');
getID.innerHTML = textToDisplay



// Exercice 2
// Obtenir l'élément qui a pour id='text'
let baliseH1 = document.getElementById('text');
// Affecter le contenu HTML de baliseH1 à textBaliseH1
let textBaliseH1 = baliseH1.innerHTML;
console.log(textBaliseH1);

// Obtenir le premier élément div et l'affecter à classDescript
let classDescript = document.querySelector("div");
// Affecter le contenu HTML de classDescript à textClassDescript
let textClassDescript = classDescript.innerHTML;
console.log(textClassDescript);

// Obtenir tous les éléments de type li de la page HTML
// Affecter à listLi sous forme de tableau
let getListLi = document.getElementsByTagName('li');
console.log(getListLi);
// Pour chaque élément du tableau
// Afficher le contenu HTML
console.log('                  Méthode avec for :');
for (let index = 0; index < getListLi.length; index++) {
    console.log(getListLi[index].innerHTML);
}

// Autre méthode avec foreach
let listLi = document.querySelectorAll('li');
console.log('                  Méthode avec foreach :');
listLi.forEach((li)=>{
    let getContentLi = li.innerHTML;
    console.log(getContentLi);
});



// Exercice 3

let index = 0;
// Pour chaque élément de la liste
// Ajouter du texte "index+1 ' - '" avant le début du contenu HTML (afterbegin)
for (index = 0; index < listLi.length; index++) {
    let listLiText = index+1 + ' - ';
    let addIndexList = listLi[index].insertAdjacentHTML('afterbegin', listLiText);
}

// Avec foreach
listLi.forEach((value, index1)=>{
    let textValue = value.innerHTML;
    console.log(index1+1 + ' - ' + textValue);
})

// Exercice 4
// Obtenir tous les div et les affecter à divFound sous forme de tableau
let divFound = document.getElementsByTagName('div');
// Obtenir l'élément img dans le deuxième div du tableau divFound
let image1 = divFound[1].getElementsByTagName('img');
// Obtenir ce qui se trouve dans l'attribut src de la première image du tableau image1[]
let image1Source = image1[0].currentSrc;

console.log(image1Source);

// Exercice 5
// Obtenir le premier élément span du document HTML
let span = document.getElementsByTagName('span')[0];

// Ajouter une classe 'important' dans span
span.classList.add('important');
// Mettre en gras le texte contenu dans span
// span.style.fontWeight = 'bold';
// Autre méthode avec setAttribute
span.setAttribute('style', 'font-weight:bold');

console.log(span);

// Exercice 6
// Pour chaque élément de la liste listLi
for (let iList = 0; iList < listLi.length; iList++) {
    // Tester si l'élément de la liste vaut "4 - Javascript"
    if (listLi[iList].innerHTML == '4 - Javascript') {
        // Modifier la couleur en rouge
        listLi[iList].style.color = 'red';
        console.log(listLi[iList]);
    } 
    else{
        // Sinon mettre la couleur en blanc
        listLi[iList].style.color = 'white';
        console.log(listLi[iList]);
    }
    
}