// séléction des class et id en js.
const quote =  document.querySelector(".box");


//Utilisation de l'API fetch pour récupérer des données depuis une API
fetch('https://api.quotable.io/random') //? Fetch va récupérer (trad. litt. du mot fetch) des données en utilisant comme source, l'URL qu'on lui a passé.


  .then(response => response.json()) //?then sert à synchroniser l'instruction suivante avec la réalisation de la première. Ici, on lui demande de passer la réponse.

  .then(data => {
    console.log(`${data.content} —${data.author}`)
})
