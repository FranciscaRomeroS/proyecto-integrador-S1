let qs = location.search;
let qsto = new URLSearchParams(qs);
let id = qsto.get('id');



fetch(url)
    .then(function (response) {
        return response.json()

    }).then(function (data) {
        console.log(data);

        let title = document.querySelector('letra');
        
    
    })
    .catch(function(error){
        console.log("Error: " + error);
    })
