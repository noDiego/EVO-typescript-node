import 'reflect-metadata';
import { paymentExample } from './ejemplos';
const args = require('yargs').argv;

// Función inicial que captura argumentos ingresados e inicia ejemplo
async function main() {

    // Genereacion de input para ejemplos usando argumentos ingresados.
    const inputData = {
        cardNumber:             args.cardnumber || '5200210000082992',
        cardExp:                args.cardexp,
        securityCode:           args.securitycode,
        systemIdentification:   args.systemidentification || 'BciPagos1.0.0',
        companyIdentification:  args.companyidentification || '2000001',
        branchIdentification:   args.branchidentification || '2100001',
        pOSIdentification:      args.posidentification || '2110004',
        amount:                 args.amount || '1000',
        cardReadMode:           args.cardreadmode || 'M',
        sequence:               args.sequence || '',
    }

    // Se valida que al menos sea ingresado amount
    if(!args.amount || !args.cardnumber){
        console.log("Debens ingresarse los parametros obligatorios de cardnumber y amount");
        console.log("Ejemplo:");
        console.log("\"npm run start -- --amount=1000 --cardnumber=5200210000082992\"");
        return;
    }

    // Se inicia el ejemplo para Payment enviando los datos ingresados en los argumentos de entrada
    await paymentExample(inputData)

}

main();
