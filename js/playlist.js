let recuperoStorage = localStorage.getItem('.titulo');
let titulo = JSON.parse(recuperoStorage);
let section = document.querySelector('.Albumes');
let cancionesPlaylist = '';

if(titulo == null || titulo.length == 0){
    section.innerHTML = '<p> No agregaste a tu playlist</p>';
} else{
    for(let i = 0; i < titulo.length; i ++) {
        let url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${titulo[i]}`;
        fetch (url)
        .then(function(response){
            return response.json()
        })
        .then(function(data){
            cancionesPlaylist += `<article class="Albumes">
            <a href="./album.html">
               <img class="top2" src="${data.album.cover}" alt=""> 
            </a>
            <h3 class="letra">${data.title}</h3>
            <a class="link1" href="./artist.html">${data.artist.name}</a>
            <br>
            
            <br>
            <form action="./playlist.html" method="GET">
                <button type="submit">Agregar a mi Playlist</button>
            </form>
            <br>
            
        </article>`;

        section.innerHTML = cancionesPlaylist;
        })
        .catch(function(error){
            console.log(error);
        });

       
    }
}