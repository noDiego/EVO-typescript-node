'use strict';

import 'reflect-metadata';
import { PaymentApi, PaymentApiApiKeys } from './lib/evoapi/api/paymentApi';
import { KeepAliveObject } from './lib/evoapi/model/keepAliveObject';
import { KeepAliveResponseObject } from './lib/evoapi/model/keepAliveResponseObject';
import { HttpError } from './lib/evoapi/api/apis';
import { BlockCreateObjectBlockCreate } from './lib/evoapi/model/blockCreateObjectBlockCreate';
import { HttpBearerAuth } from './lib/evoapi/model/models';

const args = require('yargs').argv;
let paymentApi: PaymentApi;

//Parametros inicio ejemplo: --hostname=https://www.google.cl
async function start() {

    //Se setea la configuracion para el PaymentApi
    config();

    //Se Genera instancia para input de keepalive
    const keepAliveObject: KeepAliveObject = new KeepAliveObject();

    //Seteando datos para body
    const keepAliveBody: BlockCreateObjectBlockCreate = new BlockCreateObjectBlockCreate();
    keepAliveBody.systemIdentification = 'BciPagos1.0.0';
    keepAliveBody.companyIdentification = '2000001';
    keepAliveBody.branchIdentification = '2100001';
    keepAliveBody.pOSIdentification = '2110004';
    keepAliveObject.keepAlive = keepAliveBody;

    console.log(`Llamando a KeepAlive...`);
    paymentApi.keepAlivePost(keepAliveObject).then( result => {
        const responseBody: KeepAliveResponseObject = result.body;
        const responseObject: any = result.response;
        console.log(`responseMessage: ${responseBody.keepAliveResponse?.responseMessage}`);
        console.log(`responseCode: ${responseBody.keepAliveResponse?.responseCode}`);
    }, errorHandler
    );

}

function config(){
    paymentApi = new PaymentApi();

    //Se genera autenticacion del tipo BearerAuth
    const auth: HttpBearerAuth =new HttpBearerAuth();
    auth.accessToken = "1e7a1e55-5df4-3d80-959a-b8528f68d785";
    paymentApi.setDefaultAuthentication(auth)

    if (args.hostname) paymentApi.basePath = args.hostname;
    else paymentApi.basePath = "https://testcodi.multipay.mx:30801/token/CL/Payments/Authorize/5.6.1";
    console.log(`Utilizando hostname: ${paymentApi.basePath}`);
}

function errorHandler(error: Error){
    console.error(`Error: ${error.message}`);
    if(error instanceof HttpError) {
        console.error(`Error statusCode: ${error.statusCode}`);
        console.error(`Error Body: ${JSON.stringify(error.body)}`);

    }
}

start();



