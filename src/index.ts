import 'reflect-metadata';
import EvoPaymentsService from './evo-payments/evo-payments.service';
import { hostname } from 'os';
const args = require('yargs').argv;
//Parametros inicio ejemplo: --hostname=https://www.google.cl
async function start() {

    const cardNumber: string = args.cardnumber || '5200210000082992';
    const cardExp: string = args.cardexp;
    const securityCode: string = args.securitycode;
    const amount: number = args.amount;

    if(!args.cardnumber || !args.amount){
        console.log("Debens ingresarse los parametros obligatorios de cardnumber y amount");
        console.log("Ejemplo:");
        console.log("\"npm run start -- --cardnumber=5200210000082992 --amount=1000\"");
        return;
    }

    const evoService: EvoPaymentsService = new EvoPaymentsService();
    await evoService.paymentExample(amount, cardNumber, cardExp, securityCode);

}

start();

//     "CardNumber": "5200210000082992",
//     "CardExp": "2111",
//     "SecurityCode": "159",
