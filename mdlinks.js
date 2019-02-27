const chalk = require('chalk');
let fs = require('fs');
let markdownLinkExtractor = require('markdown-link-extractor');
let markdown = fs.readFileSync('README.md').toString();
let links = markdownLinkExtractor(markdown);  
const linkPath = require('path');
const fetch = require('node-fetch');


function mdLinks(path, options){ 
    const absolutePath = linkPath.resolve(path);
    const extension = linkPath.extname(path);

    const prom = new Promise((resolve)=>{
    if(extension === '.md'){
        resolve(links.forEach(function (link) {
            fetch(link).then((response)=>{ 
                    if(response.statusText === "OK"){
                    console.log({
                        "Link": link,
                        "Validation": "OK",
                        "Ruta": absolutePath
                    })
                }else{
                    console.log({
                        "Link": link,
                        "Validation": "No funcionando",
                        "Ruta": absolutePath
                    })}}).catch(err=>{
                        console.log({
                            "Link": link,
                            "Validation": "No funcionando",
                            "Ruta": absolutePath
                        })
                    })
                }))}
                else{
                    console.log("No es un archivo md")
                }
            })
                    prom.then(console.log("Links encontrados: "))
        }
        
    if(require.main === module) 
        mdLinks(process.argv[2])

    module.exports = mdLinks;