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


 const fs = require('fs');

function run(){ 
    fs.readdir(process.argv[2], function cb(err, data){ // readdir tira en un array las carpetas que hay
      console.log((data))
    })
    }
    run();

    let fs = require('fs');
    let markdownLinkExtractor = require('markdown-link-extractor');
    
    let markdown = fs.readFileSync('README.md').toString();
    
    let links = markdownLinkExtractor(markdown);
    
    links.forEach(function (link) {
        console.log(link);
    });