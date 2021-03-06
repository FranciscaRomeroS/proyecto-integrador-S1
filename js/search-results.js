let qs = location.search;
let qsol = new URLSearchParams(qs);
let artistName = queryStringObjLiteral.get("name");
let id = qsol.get("id");

let urlArtistas = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${artistName}`;
let urlGenero = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/${id}`
let seccionDetalleArtista = document.querySelector(".Artistas");
let seccionCancionesArtista = document.querySelector(".Canciones");
let seccionGeneros = document.querySelector(".Genero");
let seccionSpinner = document.querySelector('.Spinner');
let finGenero = false; 
let finArtista = false;



fetch(urlArtistas)
  .then(function (response) {
    console.log(response); 
    finArtista = true; 
    if (finGenero == true)
    seccionSpinner.style.display = "none";
    if (response.status === 200) {   
      console.log(response)
      seccionDetalleArtista.innerHTML += `<article class="Artistas">
      <a href="./artist.html">
      <img class="top2" src="${data.picture_medium}" alt=""> 
              </a>
      <a class="letra" href="./artist.html">
           <h4>${data.name}</h4>
      </a>
    </article>`;
} else {
                                       
}         

  })
  .then(function (data) {

     
    if (data.name) {
      seccionDetalleArtista.innerHTML = `<article class="parrafo info">
      <a class="link1" href="./detalle-genero.html?id=${generos[i].id}"> <h2>${generos[i].name}</h2> </a> 
      </article>` ;
  
    } else { 
         alert('No hay resultados para tu busqueda') 
         }})

fetch(urlGenero)
.then(function (response) {
    return response.json();
  })
  .then(function (data) {
   console.log(data);
   finGenero = true; 
   if (finArtista == true)
   seccionSpinner.style.display = "none";
   if (data.name) {
    seccionGeneros.innerHTML = `<article class="parrafo info">
    <a class="link1" href="./detalle-genero.html?id=${generos[i].id}"> <h2>${generos[i].name}</h2> </a> 
    </article> ` 
    
} else {
    alert('No hay resultados para tu busqueda')
   }
  })

  .catch(function (errores) {
    console.log(errores);
  });