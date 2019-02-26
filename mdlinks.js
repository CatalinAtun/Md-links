// función que dice el status de la página

function run(){ 
    fs.readdir(process.argv[2], function cb(err, data){ // readdir tira en un array las carpetas que hay
      console.log((data))
    })
    }
    run();


    // ------------------------------------------------------------------------------
    const chalk = require('chalk');

    let fs = require('fs');
    let markdownLinkExtractor = require('markdown-link-extractor');
    let markdown = fs.readFileSync('README.md').toString();
    let links = markdownLinkExtractor(markdown);
    
    const path = require('path');
    const extension = path.extname(process.argv[2]);
    const fetch = require('node-fetch');
    
    links.forEach(function (link) {
        if(extension === '.md'){
                fetch(link).then((response)=>{    
            if(response.statusText === "OK"){
                console.log(link) + " " +'Página funcionando'}})
                fetch(link).then((response)=>{
                if(response.statusText === 404 || response.statusText === 'Not Found'){
                    console.log(link)+" "+'Página fuera de servicio'}})
                }})