let recupStorage = localStorage.getItem('favoritos');
let favoritos= JSON.parse(recupStorage);

console.log(favoritos);

let section = document.querySelector('.Albumes');

let cancionesFav= '';

if(favoritos == null || favoritos.length === 0){
    section.innerHTML = '<p>No agregaste nada a tu playlist</p>';
}
else{
    for(let i=0; i < favoritos.length; i++){
        let URL = `https://api.allorigins.win/raw?url=https://developers.deezer.com/api/track/${favoritos[i]}` 
    
        fetch(URL)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            console.log(data)
            cancionesFav +=` <article class="Albumes">
                                <a href="./album.html">
                                 <img class="top2" src="${data.id.cover_xl}" alt="">  
                                     </a>
                                <h3 class="letra">${data.title}</h3>
                                <a class="link1" href="./artist.html?id=${data.id}">Miley Cyrus</a>
                                 <br>
                                 <br>
                                <form action="./playlist.html" method="GET">
                                 <button class="submit" type="submit">Agregar a mi Playlist</button>
                                 </form>
                                 <br>
                                <a class="linkplaylist" href="./playlist.html">Ir a mi Playlist</a>
                            </article>`
        
        section.innerHTML = cancionesFav;
            
        }).catch(function(error){
            console.log(error);
        });
    }}