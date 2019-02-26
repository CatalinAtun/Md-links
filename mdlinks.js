// función que dice el status de la página

const fetch = require('node-fetch');

function status(link){ 
fetch(link).then((response)=>{
    console.log(response.statusText)
})
}
status();

