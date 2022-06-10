let proxi = `https://api.allorigins.win/raw?url=`;
let endpoint = `https://api.deezer.com/chart`;
let url = proxi+endpoint;

fetch(url)
    .then(function (response) {
        return response.json()

    })

    .then(function (data) {
        console.log(data);
        let tracks = data.artists.data;


        //para capturar el elemento (que lo llamo en contendor)

        let sectionArtistas = document.querySelector('.cajaPadre2');

        //adentro del contenedor quiero agregarle la infromacion, como es un array, lo hago a tarves del for

        for (let i = 0; i < tracks.length; i++) {
            sectionArtistas.innerHTML += `<article class="Artistas">
                                        <a href="./artist.html">
                                            <img class="top2" src="${tracks[i].picture_medium}" alt="">            
                                        </a>
                                        <a class="letra" href="./artist.html">
                                    <h4>${tracks[i].name}</h4>
                                        </a>  
                                    </article>`;
            
        }
    })

    .catch (function (error) {
console.log("Error: " + error);
    })