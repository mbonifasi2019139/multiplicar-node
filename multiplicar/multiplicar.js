const fs = require("fs");
const colore = require("colors");

let listarTabla = (base, limite = 10) => {
    console.log("==================================");
    console.log(`======== Tabla de ${base} ========`.green);
    console.log("==================================");

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i} \n`);
    }
};

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        let data = "";

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i} \n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);
            else resolve(`El archivo tabla-${base}.txt ha sido creado`);
        });
    });
};

module.exports = {
    crearArchivo,
    listarTabla,
};