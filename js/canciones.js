let qs = location.search;
let qsol = new URLSearchParams(qs);
let id = qsol.get('id');
let titulo = document.querySelector('.tema')
let sectionAlbumes = document.querySelector('.cajaPadre3')
       

const url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${id}`;
let idGuardar=id
fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        console.log(data.title)


        for (let i = 0; i < 5; i++)
        {
            sectionAlbumes.innerHTML = `<article class="Albumes">
            <a href="./album.html">
              <img class="top2" src="${data.album.cover}" alt="">  
            </a>
            <h3 class="letra">${data.title}</h3>
            <a class="link1" href="./artist.html">${data.artist.name}</a>
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
    let submit = document.querySelector('.submit')
    let recupStorage = localStorage.getItem('favoritos');

    if(recupStorage != null){
        favoritos =JSON.parse(recupStorage);
    }
    

    if(favoritos.includes(idGuardar)){
            fav.innerText = "Sacar de Mi playlist"
    }

   submit.addEventListener('click', function(e){
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



