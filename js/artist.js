let qs = location.search;
let qsol = new URLSearchParams(qs);
let id = qsol.get("id");

let urlArtistas = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${id}`;
let urlCancionesArtistas = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${id}/albums?limit=5`;
let detalleArtista = document.querySelector(".cajaPadre2");
let cancionesArtista = document.querySelector(".listaAlbumes")

console.log(id);

fetch(urlArtistas)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);

   detalleArtista.innerHTML += `<article class="Artistas">
    <a href="./artist.html">
         <img class="top2" src="${data.picture_medium}" alt="">            
    </a>  
    <h4>${data.name}</h4>
    <ol class="letra">`;
  })

  .catch(function (errores) {
    console.log(errores);
  });

let listaAlbumes = " ";

fetch(urlCancionesArtistas)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);

    for (let i = 0; i < 5; i++) {
      listaAlbumes += `<li>${data.data[i].title}</li>`;
    }

    cancionesArtista.innerHTML += listaAlbumes;
  })

  .catch(function (errores) {
    console.log(errores);
  });