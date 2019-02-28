let fs = require('fs');
let markdownLinkExtractor = require('markdown-link-extractor');
let markdown = fs.readFileSync('README.md').toString();
let links = markdownLinkExtractor(markdown);  
const linkPath = require('path');
const fetch = require('node-fetch');

function mdLinks(path, options = {validate: false}){ 
    const absolutePath = linkPath.resolve(path);
    const extension = linkPath.extname(path);
    const prom = new Promise((resolve)=>{
    if(extension === '.md'){
        resolve(links.forEach(function (link) {
            fetch(link).then((response)=>{ 
                    if(response.statusText === "OK"){
                    console.log({
                        "href": link,
                        "text": "OK",
                        "file": absolutePath
                    })
                }else{
                    console.log({
                        "href": link,
                        "text": "No funcionando",
                        "file": absolutePath
                    })}}).catch(err=>{
                        console.log({
                            "href": link,
                            "text": "No funcionando",
                            "file": absolutePath
                        })
                    })
                }))
            }else{ 
                fs.lstat(path, (err, data)=>{
                    //console.error(path);
                    if(data.isDirectory() === true){
                        fs.readdir(path, (err, dirContent)=>{
                            const absolute = dirContent.map(element => linkPath.resolve(path, element))
                            console.log(absolute)
                            absolute.map(element =>{
                                return mdLinks(element)
                            })
                        })
                    }  
                })
                }
            })
                    prom.then(console.log(" "))
        }

    if(require.main === module) 
        mdLinks(process.argv[2])
    module.exports = mdLinks;
