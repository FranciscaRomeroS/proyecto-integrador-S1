let qs = location.search; 
let qstoObjetoLiteral = new URLSearchParams(qs); 
let id = qstoObjetoLiteral.get("id"); 
let seccionCantantes = document.querySelector(".cajaPadre3");


const url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/${id}`
const url2 = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/${id}/artists`


fetch(url)
  .then(function (response) {
    
    return response.json(); 
  })
  .then(function (data) {
    
    console.log(data);

    
    let title = document.querySelector("h4");
    let image = document.querySelector(".top2");

    

    title.innerText = `El genero es: ${data.name}`; 
    image.src = data.picture;
  })

  .catch(function (errores) {
    console.log(errores);
  });

fetch(url2)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    let generoArtista = data.data;
    console.log(generoArtista);

    for (let i = 0; i < 5; i++) {
      

      seccionCantantes.innerHTML += `<article class="Albumes"> 
      <a href="./album.html?id=${generoArtista[i].id}">
        <img class="top2" src="${generoArtista[i].picture_medium}" alt="">  
      </a>
     <a class="link1" href="./album.html?id=${generoArtista[i].id}"> <h4>${generoArtista[i].name}</h4></a> 
  </article>`;
    }
  })

  .catch(function (errores) {
    console.log(errores);
  });