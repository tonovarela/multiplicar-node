const fs = require('fs');
const colors=require('colors');


let listarTabla = async (base, limite = 10) => {
    let data = '';

    if (!Number(base)) {
        throw new Error(`El limite introducido ${base} no es un numero`);
    }
    if (!Number(limite)) {
        throw new Error(`El limite introducido ${limite} no es un numero`);
    }
    for (let i = 1; i <= limite; i++) {
        data += ` ${base} * ${i} = ${base * i}\n`;
    }
    console.log('======================='.green);
    console.log(`==Tabla de ${base} `.green);
    console.log('======================='.green);
    return data;

}

crearArchivo = async (base, limite = 10) => {
    let data = '';

    if (!Number(base)) {
        throw new Error(`El limite introducido ${base} no es un numero`);
    }
    if (!Number(limite)) {
        throw new Error(`El limite introducido ${limite} no es un numero`);
    }
    for (let i = 1; i <= limite; i++) {
        data += ` ${base} * ${i} = ${base * i}\n`;
    }
    fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
        if (err) throw new err;
        console.log("el archivo se ha guardado".yellow);
    });

};

module.exports = {
    crearArchivo,
    listarTabla
}

