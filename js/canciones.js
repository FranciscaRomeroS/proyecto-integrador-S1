let qs = location.search;
let qsol = new URLSearchParams(qs);
let id = qsol.get('id');
let titulo = document.querySelector('.tema')
let sectionAlbumes = document.querySelector('.cajaPadre3')
        let portada = document.querySelector('.top2')
        let cantante = document.querySelector('.link1')
        let favorito = document.querySelector('.submit')

const url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/tracks${id}`;
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
              <img class="top2" src="${data.id.md5_image}" alt="">  
            </a>
            <h3 class="letra">${data.id.title}</h3>
            <a class="link1" href="./artist.html">${data.id.artist}</a>
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
        console.log(error);
    })
    console.log(idGuardar)
    
    let favoritos = [];
    let recupStorage = localStorage.getItem('favoritos');

    if(recupStorage != null){
        favoritos =JSON.parse(recupStorage);
    }
    

    if(favoritos.includes(idGuardar)){
            fav.innerText = "Sacar de Mi playlist"
    }

   favoritos.addEventListener('click', function(e){
    e.preventDefault()
    if (favoritos.includes(idGuardar)){
        let indice = favoritos.indexOf(idGuardar);
        favoritos.splice(indice, 1);
        fav.innerText = "Agregar a Mi playlist"
    }
    else{
        favoritos.push(idGuardar);
        fav.innerText = "Sacar de Mi playlist";
    }
    
    let favJSON = JSON.stringify(favoritos);
    localStorage.setItem('favoritos', favJSON)
   })



