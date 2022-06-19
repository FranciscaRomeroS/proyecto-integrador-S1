let qs = location.search;
let qsol = new URLSearchParams(qs);
let id = qsol.get('id');
let titulo = document.querySelector('.tema')
let sectionAlbumes = document.querySelector('.cajaPadre3')
let cancionesArtistas = document.querySelector('.listaCanciones')
       
let urlAlbum = `https://cors-anywhere.herokuapp.com/https://developers.deezer.com/api/album${id}`;
let urlCancionesAlbum = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${id}/top?limit=9`;


console.log(id);

fetch(urlAlbum)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);

   sectionAlbumes.innerHTML += `<article class="Albumes">
   <a href="./album.html">
      <img class="top2" src="${data.album.cover}" alt=""> 
   </a>
   <h4 class="letra">${data.album.title}</h4>
   <a class="link1" href="./artist.html">${data.artist.name}</a>
   <a class="link1" href="./genero.html">${data.album.gender}</a>
   <p class="letra">${data.album.relase_date}</p>
   <ol class="letra">
       
   </ol>
</article>`;
  })

  .catch(function (errores) {
    console.log(errores);
  });

let listaCanciones = ''
fetch(urlCancionesAlbum)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);

    for (let i = 0; i < listaCanciones.length; i++) {
      listaCanciones += `<li>${canciones.album.id[i]}</li>`;
    }

    cancionesArtista.innerHTML += listaCanciones;

  })

  .catch(function (errores) {
    console.log(errores);
  });
