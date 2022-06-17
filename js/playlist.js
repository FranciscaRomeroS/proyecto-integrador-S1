let recupStorage = localStorage.getItem('favoritos');
let favoritos= JSON.parse(recupStorage);

console.log(favoritos.leght);

let section = document.querySelector('.playlist');

let cancionesFav= '';

if(favoritos == null || favoritos.length === 0){
    section.innerHTML = '<p>No agregaste a tu playlist</p>'
}
else{
    for(let i=0; i < favoritos.length; i++){
        let URL = `https://api.allorigins.win/raw?url=https://developers.deezer.com/api/track/${favoritos}` 
    
        fetch(URL)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            console.log(data)
            cancionesFav +=
            
        }
        )
    }
}