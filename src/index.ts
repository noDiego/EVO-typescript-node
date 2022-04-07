import 'reflect-metadata';
import { paymentExample } from './ejemplos';
import { CardReadMode, PaymentInput } from './interfaces/paymentInput';

const args = require('yargs').argv;

// Función inicial que captura argumentos ingresados e inicia ejemplo
async function main() {

    // Genereacion de input para ejemplos usando argumentos ingresados.
    const inputData: PaymentInput = {
        cardNumber:             args.cardnumber || '5200210000082992',          // Número de la Tarjeta.
        cardExp:                args.cardexp,                                   // Fecha de vencimiento de la tarjeta (necesario si el modo de ingreso fue manual/digitada.)
        securityCode:           args.securitycode,                              // Código de seguridad de la tarjeta
        systemIdentification:   args.systemidentification || 'BciPagos1.0.0',   // ID que identifica el sistema desde donde proviene la petición.
        companyIdentification:  args.companyidentification || '2000001',        // ID que identifica la companía desde donde proviene la petición.
        branchIdentification:   args.branchidentification || '2100001',         // ID que identifica la sucursal desde donde proviene la petición.
        pOSIdentification:      args.posidentification || '2110004',            // ID que identifica la caja o punto de venta desde donde proviene la petición.
        amount:                 args.amount || '1000',                          // Importe o Monto de la Transacción.
        cardReadMode:           args.cardreadmode || CardReadMode.M,            // Modo de ingreso de los datos de la tarjeta.
        sequence:               args.sequence || '',                            // Retornado en todas las respuestas que el POS/PINPAD debe enviar en el próximo requerimiento.
    }

    // Se valida que al menos sea ingresado amount
    if(!args.amount || !args.cardnumber){
        console.log("Deben ingresarse los parametros obligatorios de cardnumber y amount");
        console.log("Ejemplo:");
        console.log("\"npm run start -- --amount=1000 --cardnumber=5200210000082992\"");
        return;
    }

    // Se inicia el ejemplo para Payment enviando los datos ingresados en los argumentos de entrada
    await paymentExample(inputData)

}

main();
