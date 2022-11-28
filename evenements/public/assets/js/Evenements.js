// Exercice 1
// Obtenir le premier bouton du document html
let button = document.getElementsByTagName('button')[0];
// Attente du déclenchement de l'événement "onclick" sur le button
// Afficher "Click" quand l'événement est déclenché
button.onclick = function () { console.log('Click') };

// Autre méthode avec addEventListener
let fnFn = ()=>{console.log('Click');};
button.addEventListener('click', fnFn);


// Exercice 2
// Obtenir la première image du document HTML
let image1 = document.getElementsByTagName('img')[0];
// Fonction pour afficher la source de l'image dans la console
function sourceImgConsole(image) {
    return image.getAttribute('src'); // ou image.currentSrc; ca marche aussi
}
// Au passage du pointeur de la souris sur l'image
// Afficher la source de l'image
fnFn2 = ()=>{ console.log(sourceImgConsole(image1)); };
image1.addEventListener('mouseover', fnFn2);
// Autre méthode avec un "onmouseover"
image1.onmouseover= ()=>{console.log(image1.src)};


// Exercice 3
// touchId prend l'id du bouton obtenu avec la fonction button ligne 3
let touchId = button.id;
let touchValue = button.innerHTML;

// Au clique sur le bouton 
// Afficher touchId et touchValue
button.onclick = function () { console.log(touchId + ' -> ' + touchValue); };

document.addEventListener('keyup', function (event) {
    console.log(event.keyCode + ' -> ' + event.key);
})

// Exercice 4
let getListLi = document.querySelectorAll('li');

// getListLi.addEventListener('click', ()=>{console.log(getListLi.innerHTML);})

getListLi.forEach((li)=>{
    li.addEventListener('click', ()=>{
    console.log(li.innerHTML);
    })
})





// Exercice 5 :
// Déclarer la fonction "submitName" appelée dans le formName en HTML
// Paramètre "formName"
function submitName(formName) {
    // Obtenir la value en cours du input qui a pour nom="userFirstname"
    let firstname = document.formName.userFirstname.value;
    // Obtenir la value en cours du input qui a pour nom="userLastname"
    let lastname = document.formName.userLastname.value;
    // Afficher "firstname lastname" dans la console
    console.log(firstname + ' ' + lastname);
    }

    // Autre méthode avec input (type='submit'):
        // let button = document.getElementById('button');

        // button.addEventListener('click', (e) => {
        //     e.preventDefault();
        //     console.log(firstname + ' ' + lastname);
        // }

    // Exercice 7
    // Obtenir l'index de l'élement sélectionné de "list"
    // du formulaire formName
    // L'affecter à dayOfWeek
    let dayOfWeek = document.formName.list.selectedIndex + 1;
    // Afficher "dayOfWeek" dans la console
    console.log(dayOfWeek);
        // Autre méthode
            let day = document.querySelector('select');

            day.addEventListener('change', (e)=>{
                console.log(day.value); 
                console.log(e.target.value); //les  deux méthodes fonctionnent
            })




// Exercice 6 :
        // // Quand le pointeur passe sur le formulaire formName
        // // Le background devient noir
        // formName.onmouseover = function () { formName.style.background = 'black' };
        // // Quand le pointeur sort de la zone du formulaire formName
        // // Le changement de couleur du background est remise à "none"
        // formName.onmouseleave = function () { formName.style.background = 'none' };

    // Correction
    let allInput = document.querySelectorAll('input[type=text]');

    allInput.forEach((input, index)=>{
        input.addEventListener('focus', ()=>{
            input.style.background = 'red'
        })
        input.addEventListener('blur', ()=>{
            input.style.background = 'green'
        })
        console.log(input);
    })

// Exercice 7 :
// VOIR EXERCICE 5
