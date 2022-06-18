let qs = location.search;
let qsObjetoLiteral = new URLSearchParams(qs);
let nombreQS = qsObjetoLiteral.get('idGeneros');

let detalleGenero = document.querySelector('.cajaPadre3');
let proxy = 'https://cors-anywhere.herokuapp.com/'
let url = `https://developers.deezer.com/api/genre${nombreQS}`

console.log(nombreQS);

fetch(proxy + url)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
    let title = document.querySelector('h2');
    let imagen = docuement.querySelector('.top2');
    title.innerHTML = data.name;
    imagen.src = data.picture_big;
})
.catch(function(error){
    console.log(error);
})
let urlArtistas = `https://developers.deezer.com/api/genre${nombreQS}/artists`
let detalleGeneroArt = docuemnt.querySelector('.Albumes');

fetch(proxy + urlArtistas)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
    let track = data.data
    console.log(track);

    for(let i = 1; i < 6; i ++){
        detalleGeneroArt.innerHTML +=` <article class="Albumes"> 
            
        <a href="./album.html">
          <img class="top2" src="${track[i].picture_big}" alt="">  
        </a>
       <a class="link1" href="./album.html"> <h4>${track[i].name}</h4></a> 
    </article>`
    }
})
.catch(function(error){
    console.log(error);
})

