  
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
                console.log(chalk.cyan(link) + " " +chalk.black.bgGreen('Página funcionando'))}})
                fetch(link).then((response)=>{
                    if(response.statusText === 404 || response.statusText === 'Not Found'){
                        console.log(chalk.cyan(link)+" "+chalk.black.bgRed('Página fuera de servicio'))}})
                    }})
                
                

fs.readdir(process.argv[2], 'utf8', (err, data)=>{
    data.map(function(file){
        console.log(path.join(process.argv[2], file));
    })
})


