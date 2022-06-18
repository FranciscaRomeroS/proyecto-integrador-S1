let url = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre';

for (let i = 1; i < 13; i++){
fetch(url)
    .then(function(response){
    return response.json();
    })
    .then(function(data){
        console.log(data)
        let generos = data.data;
        let contenedor = document.querySelector('.infoparrafo');
        
        contenedor.innerHTML += `<article class="parrafo info">
        <a class="link1" href="./detalle-genero.html?id=${generos[i].id}"> <h2>${generos[i].name}</h2> </a> 
        </article>`
    
        
    })
    .catch(function(error){
        console.log("Error: " + error);
    })}