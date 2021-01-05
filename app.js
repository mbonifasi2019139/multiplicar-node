// requires
const { crearArchivo, listarTabla } = require("./multiplicar/multiplicar.js");
const colors = require("colors/safe");
const argv = require("./conf/yargs.js").argv;

let comando = argv._[0];

switch (comando) {
    case "listar":
        listarTabla(argv.base, argv.limite);
        break;
    case "crear":
        crearArchivo(argv.base, argv.limite)
            .then((archivo) => {
                console.log(`Archivo creado ${colors.rainbow(archivo)}`);
            })
            .catch((e) => {
                console.log(e);
            });
        break;
    default:
        console.log("Comando no reconocido");
        break;
}