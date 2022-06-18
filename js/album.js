let qs = location.search;
let qsol = new URLSearchParams(qs);
let id = qsol.get('id');
let titulo = document.querySelector('.tema')
let sectionAlbumes = document.querySelector('.cajaPadre3')
       

const url = `https://cors-anywhere.herokuapp.com/https://developers.deezer.com/api/album ${id}`;
let idGuardar=id
fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        


        for (let i = 0; i < 5; i++)
        {
            sectionAlbumes.innerHTML = `<article class="Albumes">
            <a href="./album.html">
               <img class="top2" src="${data.album.cover}" alt=""> 
            </a>
            <h4 class="letra">${data.album.title}</h4>
            <a class="link1" href="./artist.html">${data.artist.name}</a>
            <a class="link1" href="./genero.html">${data.album.gender}</a>
            <p class="letra">${data.album.relase_date}</p>
            <ol class="letra">
                <li>${data.album.length}</li>
                <hr>
                <li></li>
                <hr>
                <li></li>
                <hr>
                <li></li>
                <hr>
                <li>/li>
                <hr>
                <li></li>
                <hr>
                <li></li>
                <hr>
                <li></li>
                <hr>
                <li></li>
                <hr>
                <li></li>
                <hr>
                <li></li>
                <hr>
                <li></li>
                <hr>
            </ol>
        </article>`
        }
    })
    .catch(function(error){
        console.log(error);
    })