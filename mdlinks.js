//const chalk = require('chalk');
let fs = require('fs');
let markdownLinkExtractor = require('markdown-link-extractor');
let markdown = fs.readFileSync('README.md').toString();
let links = markdownLinkExtractor(markdown);  
const path = require('path');
const extension = path.extname(process.argv[2]);
const fetch = require('node-fetch');

let absolutePath = path.resolve(process.argv[2]); //absolutePath sustituye a process.argv[2]

const prom = new Promise((resolve, reject)=>{
    if(extension === '.md'){
        resolve(links.forEach(function (link) {
            fetch(link).then((response)=>{    
                if(response.statusText === "OK"){
                    console.log({
                        "Link": link,
                        "Validation": "OK",
                        "Ruta": "ruta"
                    })
                }else{
                    console.log({
                        "Link": link,
                        "Validation": "No funcionando",
                        "Ruta": "ruta"
                    })}}).catch(err=>{
                        console.log({
                            "Link": link,
                            "Validation": "No funcionando",
                            "Ruta": "ruta"
                        })
                    })
                }))}})
                    
                    console.log(prom)