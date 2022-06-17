let qs = location.search;
let qsol = new URLSearchParams(qs);
let id = qsol.get('id');
let titulo = document.querySelector('.tema')
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



