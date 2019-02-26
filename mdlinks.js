// función que dice el status de la página

const fetch = require('node-fetch');

function status(link){ 
fetch(link).then((response)=>{
    console.log(response.statusText)
})
}
status();

const path = require('path');
const extension = path.extname(process.argv[2]) // extname extrae la ext. del archivo que le damos

function readFiles(){
    if(extension === '.md') return true; // condición de parada
    return false;
  }
 console.log(readFiles());
