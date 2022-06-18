let qs = location.search;
let qsol = new URLSearchParams(qs);
let id = qsol.get('id');
let titulo = document.querySelector('.tema')
let sectionArtistas = document.querySelector('.cajaPadre2')
       

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
            sectionArtistas.innerHTML = `<article class="Artistas">
                <a href="./artist.html">
                     <img class="top2" src="${data.}" alt="">            
                </a>  
                <h4>${data.artist.name}</h4>
                <ol class="letra">
                    <li>${data.}</li>
                    <hr>
                    <li>${data.}</li>
                    <hr>
                    <li>${data.}</li>
                    <hr>
                    <li>${data.}</li>
                    <hr>
                    <li>${data.}</li>
                    <hr>
                </ol>
                    
            </article>`
            
        }
    })
    .catch(function(error){
        console.log(error);
    })