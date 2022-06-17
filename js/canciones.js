let qs = location.search;
let qsol = new URLSearchParams(qs);
let id = qsol.get('id');
let titulo = document.querySelector('.tema')
let sectionAlbumes = document.querySelector('.cajaPadre3')
        let portada = document.querySelector('.top2')
        let cantante = document.querySelector('.link1')
        let favorito = document.querySelector('.submit')

const url = `https://api.allorigins.win/raw?url=https://developers.deezer.com/api/track/${id}`
let idGuardar=id
fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data.id);

        titulo.innerText = data.title;
        portada.src = data.album.cover_xl;
        cantante.innerText = data.artist.name;
       
        idGuardar=data.id

        for (let i = 0; i < 5; i++)
        {
            sectionAlbumes.innerHTML += `<article class="Albumes">
            <a href="./album.html">
              <img class="top2" src="./css/img/miley-rosa.jpg" alt="">  
            </a>
            <h3 class="letra">Angels Like You</h3>
            <a class="link1" href="./artist.html">Miley Cyrus</a>
            <br>
            
            <br>
            <form action="./playlist.html" method="GET">
                <button class="submit" type="submit">Agregar a mi Playlist</button>
            </form>
            <br>
            <a class="linkplaylist" href="./playlist.html">Ir a mi Playlist</a>
        </article>`
        }
    })
    .catch(function(error){
        console.log('El error es' + error);
    })
    console.log(idGuardar)
    let favoritos = [];
    let recupStorage = localStorage.getItem('favoritos');

    if(recupStorage != null){
        favoritos =JSON.parse(recupStorage);
    }
    

    if(favoritos.includes(idGuardar)){
            fav.innerText = "Sacar de favoritos"
    }

   favorito.addEventListener('click', function(e){
    e.preventDefault()
    if (favoritos.includes(idGuardar)){
        let indice = favoritos.indexOf(idGuardar);
        favoritos.splice(indice, 1);
        fav.innerText = "Agregar a favoritos"
    }
    else{
        favoritos.push(idGuardar);
        fav.innerText = "Sacar de favoritos";
    }
    
    let favJSON = JSON.stringify(favoritos);
    localStorage.setItem('favoritos', favJSON)
   })



