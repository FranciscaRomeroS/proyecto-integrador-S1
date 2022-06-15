let qs = location.search;
let qsol = new URLSearchParams(qs);
let id = qsol.get('id')

const url = `https://api.allorigins.win/raw?url=https://api.deezer.com/track/${id}`
let idAGuardar=id

fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);

        let titulo = document.querySelector('.letra')
        let foto = document.querySelector('.top2')

        titulo.innerText = data.title;
    

        let infoCanciones = document.querySelector('.letra');
        


    })
    .catch(function(error) {
        console.log( 'El error fue '+ error);
    })

 


        
