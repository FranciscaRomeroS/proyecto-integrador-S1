/* Obtener QS */
let qs = location.search;
let qsol = new URLSearchParams(qs);
let id = qsol.get('id');

//Selecciono el DOM
let imgAlbum = document.querySelector('#imgCancion')
let tituloCancion = document.querySelector('#tituloCancion')
let nombreArtista  = document.querySelector('#artistsCancion')
let player = document.querySelector('.player')

//info de la Api
const url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${id}`;

//fetch 
fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);

        imgAlbum = data.album.cover_medium;
        tituloCancion.innerText = data.title;
        artistaCancion.innerText = data.artist.name;
        player.src = data.preview;
    })
    .catch(function(error){
        console.log(error);
    })
    
    let playlist = [];
    let recuperoStorage = localStorage.getItem('playlist');

    if(recuperoStorage != null){
        playlist = JSON.parse(recuperoStorage);
    }
    
    let fav = document.querySelector('.fav')
    

    if(playlist.includes(id)) {
        submit.innerText = "Quitar de la Playlist";
    }
    fav.addEventListener(`click`,function(e){
        e.preventDefault()

        if(playlist.includes(id)){
            let indice = playlist.indexOf(id);
            playlist.splice(indice, 1)
            fav.innerText = "Agregar a mi Playlist"
        } else {
            playlist.push(id);
            submit.innerText = "Quitar de mi Playlist";
        }
        let playlistToString = JSON.stringify(playlist);
        localStorage.setItem('playlist', playlistToString)

    });