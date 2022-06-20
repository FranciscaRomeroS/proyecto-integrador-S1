
let qs = location.search;
let qsol = new URLSearchParams(qs);
let id = qsol.get('id');

let titulo = document.querySelector('.tema')
let sectionAlbumes = document.querySelector('.cajaPadre3')
let cancionesArtistas = document.querySelector('.listaCanciones')
       
let urlAlbum = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${id}`;
let urlCancionesAlbum = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${id}/tracks`;


console.log(id);

fetch(urlAlbum)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);

   sectionAlbumes.innerHTML += `<article class="Albumes">
   <a href="./album.html">
      <img class="top2" src="${data.cover_medium}" alt=""> 
   </a>
   <h4 class="letra">${data.title}</h4>
   <a class="link1" href="./artist.html">${data.artist.name}</a>
   <a class="link1" href="./genero.html">${data.genres.data[0].name}</a>
   <p class="letra">${data.release_date}</p>
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

    for (let i = 0; i < data.data.lenght; i++) {
      listaCanciones += `<li><a href="./canciones.html?id=${data.data[i].id}">${data.data[i].title}</a></li>`;
    }

    cancionesArtistas.innerHTML = listaCanciones;

  })

  .catch(function (errores) {
    console.log(errores);
  });
