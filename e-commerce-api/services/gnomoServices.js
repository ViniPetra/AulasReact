const fs = require('fs');
const meusGnomos = fs.readFileSync('gnomos.json', 'utf-8');

exports.buscarGnomos = () =>{
    return JSON.parse(meusGnomos);
}

exports.buscarGnomosPorElemento = (elemento) =>{
    const gnomos = JSON.parse(meusGnomos);
    return gnomos.filter( gnomo => gnomo.elemento.toLowerCase().includes(elemento.toLowerCase()));
}