process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const args = require('yargs').argv;

//Constantes para configuracion de url y token de servicios multipay
export default {
    evoapi: {
        url: args.hostname || "https://testcodi.multipay.mx:30801/token/CL/Payments/Authorize/5.6.3",
        token: args.token || "1e7a1e55-5df4-3d80-959a-b8528f68d785"
    }
};
