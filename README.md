# Mdlinks

Mdlinks facilita la extracción de link que se encuentren dentro de un archivo .md verificando si estos se encuentran funcionando o rotos. 

### Modo de instalación

```
npm install --save https://github.com/CatalinaCampos/SCL007-md-links
```
Si deseas que la instalación sea global, agrega '-g' al final.

### Uso común

Mdlinks solo puede ser usado como módulo

```
mdLinks([path])
```
path corresponde a la ruta del archivo .md o un directorio en el que se encuentre uno.

### Ejemplo

```
const mdlinks = require('mdLinks')
mdlinks([path])
```
Debería un objeto como el siguiente:

```
{
  href: Link consultado
  text: Estado del link (OK / No funcionando)
  file: Ruta donde se encontró el link consultado
}
```
