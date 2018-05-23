
//requireds

const argv =require ('./config/yargs').argv;

const { crearArchivo, listarTabla } = require("./multiplicar/multiplicar");
let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite).then(mensaje => {
            console.log(mensaje);
        });
        break;
    case 'crear':
        crearArchivo(argv.base,argv.limite).then(archivo => {
            
        }).catch(err => {
            console.log(err);
        });
        break;
    default:
        console.log('Comando no reconocido');
}




// let argv2 = process.argv;
// console.log(argv2);
// let parametro=argv[2];
// let base=parametro.split('=')[1];

// console.log(base);

