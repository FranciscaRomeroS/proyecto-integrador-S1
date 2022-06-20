let proxi = `https://cors-anywhere.herokuapp.com/`; /* Te intercambia por otra la direccion */
let endpoint = `https://api.deezer.com/chart`; /* la ruta que proporciona la info a renderizar */
let url = proxi+endpoint; /* las dos unidas tienen que ir en el fetch */


fetch(url) /* recibe un paramero que es la ruta desde donde obtenemos la info, retrona una promesa */

    .then(function (response) { /* recibe una funcion (callback) la cual recibe a la respuesta (retorno) como parametro */
        return response.json() /* con .json convertimos la info en un objeto literal */

    })
    .then(function (data) { /* recibe una funcion (callback) que tiene como parametro los datos que recibira el primer then,convencion data */
        console.log(data);
    
        let tracks = data.artists.data;
        let albums = data.albums.data;
        let canciones = data.tracks.data;
        console.log(canciones);
        


        //para capturar el elemento (que lo llamo en contendor)

        let sectionArtistas = document.querySelector('.cajaPadre2');
        let sectionAlbums = document.querySelector('.cajaPadre3');
        let sectionCanciones = document.querySelector('.cajaPadre4');

        //adentro del contenedor quiero agregarle la infromacion, como es un array, lo hago a tarves del for

        for (let i = 0; i < 5; i++) {
            sectionArtistas.innerHTML += `<article class="Artistas">
                                        <a href="./artist.html?id=${tracks[i].id}"> 
                                            <img class="top2" src="${tracks[i].picture_medium}" alt="">            
                                        </a>
                                        <a class="letra" href="./artist.html">
                                    <h4>${tracks[i].name}</h4>
                                        </a>  
                                    </article>`;
            
        }

        for (let i = 0; i <5; i++) {
            sectionAlbums.innerHTML += `<article class="Albumes">
            <a href="./album.html?id=302127">
            <img class="top2" src="${albums[i].cover_medium}" alt="">  
            </a>
            <a class="letra" href="./album.html">
                <h4>${albums[i].title}</h4>
            </a>
        </article>`;
        } 

        for (let i = 0; i<5; i++){
            sectionCanciones.innerHTML += `<article class="Canciones">
            <a href="./canciones.html?id=${canciones[i].id}">
                  <img class="top2" src="${canciones[i].album.cover_medium}" alt="">
            </a>
            <a class="letra" href="./canciones.html?id=${canciones[i].id}">
                <h4>${canciones[i].title}</h4>
            </a>
           
   
        </article>`
        }

    })
    /* atrapara los errores en cualquiera de las intancias del fetch*/
    .catch (function (error) {
 console.log("Error: " + error);
    })

