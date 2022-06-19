let  = document.querySelector(".search-results")

let info = location.search

let objlit = new URLSearchParams(info)
    
    let resultados = objlit.get("cancion")
    console.log(resultados);
    let url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${resultados}`
    
    fetch(url)
    
    .then(function(response){
        return response.json();
    })
    .then(function(datos) {
        let imp = datos.data
    
        console.log(imp);
        if (imp.length > 0) { 
            Resultados.innerHTML = `<h1 id="duki">Resultados de Busqueda para: ${resultados}</h1>` 
            for (let i = 0; i <= imp.length; i++) {
    
                pindonga.innerHTML += `<a class="elgrillo" 
                href="./detalle-cancion.html?id=${imp[i].id}">${imp[i].title}</a>`
              }
        }
        else{  resultados.innerHTML +=`<h1>No se encontraron resultado de busqueda para:${resultados}</h1>`     
    
    }})
    .catch(function(error){
        console.log("Error: " + error);
    })