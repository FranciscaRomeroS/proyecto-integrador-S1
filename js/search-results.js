let queryString = location.search;
let queryStringObjLiteral = new URLSearchParams(queryString);
let artistName = queryStringObjLiteral.get("name");
let id = queryStringObjLiteral.get("id");

let urlArtistas = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${artistName}`;
let urlGenero = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/${id}`
let seccionDetalleArtista = document.querySelector("#seccionDetalleArtista");
let seccionCancionesArtista = document.querySelector(".listaArtista");
let seccionGeneros= document.querySelector("#generos");


//uso este endpoint para que me traiga de la api el nombre del artista
fetch(urlArtistas)
  .then(function (response) {
    console.log(response); //imprime el estado de la promesa (estados de codigo)
   
    if (response.status === 200) {   //si el estado de la peticion es 200, que haga devuelva la respuesta en json 
        return response.json() ;
} else {
    seccionDetalleArtista.innerHTML +=  //sino que muestre el spinner, porque quiere decir que no se cargo
`
    <article>
    <img class="imgalbum" src="./img/spinner.gif"/>    
    </article>
    `
}         

    
  })
  .then(function (data) {

    //hago un if y pido una condicion: si data.name es true (es decir, existe el nombre que se esta escribiendo), que se ejecute todo lo posterior
    if (data.name) {
        
        //le pongo solo = y no += asi cada vez que escribo algo nuevo se borra el anterior
      seccionDetalleArtista.innerHTML = `
      <article class="articuloDetalleArtista">
      <a href="./detalle-artista.html?id=${data.id}"><h1 class="tamanofuenteh1"> El artista es: ${data.name} </h1></a>
       
          <div class="divImagen">
          <img src="${data.picture_medium}" alt="" class="imgalbum">
          </div>
          <h2 class="tamanofuenteh2">Top 5 Albums</h2>
      </article>
  `
  ;
    } else { //pero si no existe ese nombre, que se ejecute un alert que diga que no hay resultados para tu busqueda
        alert('No hay resultados para tu busqueda')
    }

     //uso este endpoint para que me traiga los 5 albumes del artista
    fetch(
      `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${data.id}/albums?limit=5`
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        for (let i = 0; i < 5; i++) {
          contenidoDeLista += `<li>${data.data[i].title}</li>`;
        }

        seccionCancionesArtista.innerHTML += contenidoDeLista;
      })

      .catch(function (errores) {
        console.log(errores);
      });
  })
  .catch(function (errores) {
    console.log(errores);
  });

let contenidoDeLista = " ";

//uso este endpoint para que me traiga el genero al que pertenece el artista
fetch(urlGenero)
.then(function (response) {
    return response.json();
  })
  .then(function (data) {
   console.log(data);

   if (data.name) {
    seccionGeneros.innerHTML = `
    <article class="articuloDetalleArtista">
    <a href="./detallle-genero.html?id=${data.id}"><h3 class="tamanofuenteh3">Pertenece al genero: ${data.name}</h3></a>
    <div class="divImagen">
    <img class="imgalbum" id="imgalbumGenero" src="${data.picture_medium}" alt="">
    </div>
 
    </article>
 ` 
    
} else {
    alert('No hay resultados para tu busqueda')
}


   

  })

  .catch(function (errores) {
    console.log(errores);
  });