let proxi = `https://api.allorigins.win/raw?url=endpointAPI`;
let endpoint = `https://api.deezer.com/track/3135556`;
let url = proxi+endpoint;

fetch(url)
    .then(function(response){
        return response.json();
    }).then(function(data){
        console.log(data);
    })
        
