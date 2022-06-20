/* Obtener QS */
let qs = location.search;
let qsol = new URLSearchParams(qs);
let id = qsol.get('id');

let imgCancion = document.querySelector('#imgCancion')
let tituloCancion = document.querySelector('#tituloCancion')
let nombreArtista   = document.querySelector('#nombreArtista')
let submit = document.getElementById('btnPlaylist'); 

const url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${id}`;
let idGuardar=id
fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        console.log(data.title)

        imgCancion.src = data.album.cover_medium;
        tituloCancion.innerText = data.title;
        nombreArtista.innerText = data.artist.name;
        



    })
    .catch(function(error){
        console.log(error);
    })
    
    let playlist = [];
    let recuperoStorage = localStorage.getItem('playlist');

    if(recuperoStorage != null){
        playlist = JSON.parse(recuperoStorage);
    }
    
    

    if(playlist.includes(id)) {
        submit.innerText = "Quitar de la Playlist";
    }
    submit.addEventListener(`click`,function(e){
        e.preventDefault()
        if(playlist.includes(id)){
            let indice = playlist.indexOf(id);
            playlist.splice(indice, 1)
            submit.innerText = "Agregar a mi Playlist"
        } else {
            playlist.push(id);
            submit.innerText = "Quitar de mi Playlist";
        }
        let subJSON = JSON. stringify(playlist);
        localStorage.setItem('playlist', subJSON)

    });