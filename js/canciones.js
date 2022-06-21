/* Obtener QS */
let qs = location.search;
let qsol = new URLSearchParams(qs);
let id = qsol.get('id');

//Selecciono el DOM
let imgCancion = document.querySelector('#imgCancion')
let tituloCancion = document.querySelector('#tituloCancion')
let nombreArtista   = document.querySelector('#nombreArtista')
let submit = document.getElementById('btnPlaylist'); 
let player = document.querySelector('#player')




//info de la Api
const url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${id}`;

//fetch 
fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);

        imgCancion.src = data.album.cover_medium;
        tituloCancion.innerText = data.title;
        nombreArtista.innerText = data.artist.name;
        player.src = data.preview
        




    })
    .catch(function(error){
        console.log(error);
    })
    
    let favoritos = [];

    let recuperoStorage = localStorage.getItem('favoritos');

    if (recuperoStorage != null) {
        favoritos = JSON.parse(recuperoStorage);
    }
    
    let fav = document.querySelector('.fav');
    

    if(favoritos.includes(id)) {
        fav.innerText = "Quitar de la Playlist";
    }

    fav.addEventListener('click', function(e){
        e.preventDefault()

        if (favoritos.includes(id)) {
            let indice = favoritos.indexOf(id);
            favoritos.splice(indice, 1)
            fav.innerText = "Agregar a mi Playlist"

        } else {
            favoritos.push(id);{
                fav.innerText = "Quitar de mi Playlist"
            }
        }
        let favsToString = JSON.stringify(favoritos);
        localStorage.setItem('favoritos', favsToString)

    });