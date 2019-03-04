let fs = require('fs');
let markdownLinkExtractor = require('markdown-link-extractor');
const linkPath = require('path');
const fetch = require('node-fetch');

function mdLinks(path, options = { validate: false }) {
    const absolutePath = linkPath.resolve(path);
    //console.log(absolutePath)
    const extension = linkPath.extname(path);
    const prom = new Promise((resolve, reject) => {
        if (fs.statSync(path).isDirectory() === true){
         (Promise.all(fs.readdirSync(path).map(element =>{
                let pathAndElement = linkPath.join(absolutePath, element);
                return mdLinks(pathAndElement)
            })))
            
        }if (extension === '.md') {
            //console.log('holajeje')
            let markdown = fs.readFileSync(absolutePath).toString();
            let links = markdownLinkExtractor(markdown);
            Promise.all(links.map(element => {
                fetch(element).then((response) => {
                    if (response.statusText === "OK") {
                        //console.log(response.statusText)
                        console.log({
                            "href": element,
                            "text": "OK",
                            "file": absolutePath
                        })
                    } else {
                        console.log({
                            "href": element,
                            "text": "No funcionando",
                            "file": absolutePath
                        })
                    }
                }).catch(err => {
                    console.log({
                        "href": element,
                        "text": "No funcionando",
                        "file": absolutePath
                    })
                })
            })).then(resolve);  
        }/* else{
            if (extension != '.md'){
                console.log('no archivo md')
            }
        } */
    })
    return prom;
}

if (require.main === module)
    mdLinks(process.argv[2]).then(console.log).catch(console.error);
module.exports = mdLinks;