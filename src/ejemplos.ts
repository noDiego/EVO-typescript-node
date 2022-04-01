import {
    PaymentMethodObjectPaymentMethod,
    PaymentMethodObjectPaymentMethod as PaymentMethodData
}                                                                           from './lib/evoapi/model/paymentMethodObjectPaymentMethod';
import {
    PaymentMethodResponseObjectPaymentMethodResponse,
    PaymentMethodResponseObjectPaymentMethodResponse as PaymentMethodResponse
} from './lib/evoapi/model/paymentMethodResponseObjectPaymentMethodResponse';
import { SaleObjectSale }                                                   from './lib/evoapi/model/saleObjectSale';
import { SaleResponseObjectSaleResponse as SaleResponse }                   from './lib/evoapi/model/saleResponseObjectSaleResponse';
import { BlockCreateObjectBlockCreate as KeepAliveData }                    from './lib/evoapi/model/blockCreateObjectBlockCreate';
import { KeepAliveResponseObjectKeepAliveResponse as KeepAliveResponse }    from './lib/evoapi/model/keepAliveResponseObjectKeepAliveResponse';
import { HttpError }                                                        from './lib/evoapi/api/apis';
import EvoApi                                                               from './evo-api';
import CardReadModeEnum =                                                   PaymentMethodObjectPaymentMethod.CardReadModeEnum;
import ResponseActionsEnum =                                                PaymentMethodResponseObjectPaymentMethodResponse.ResponseActionsEnum;

// Funcion que ejecuta el ejemplo de un Payment. Realizando los pasos Payment-Method y luego Sale
export async function paymentExample(inputData) {

    // Se genera instancia para el uso de la api que ejecutará las instrucciones del codigo generado.
    const evoApi: EvoApi = new EvoApi();

    try {
        console.log('Ejemplo Payment con CardNumber:' + inputData.cardNumber);
        console.log('Iniciando PaymentMethod...');

        // Datos necesarios para ejecutar PaymentMethod
        const paymentMethodData: PaymentMethodData = {
            systemIdentification:   inputData.systemIdentification,
            companyIdentification:  inputData.companyIdentification,
            branchIdentification:   inputData.branchIdentification,
            pOSIdentification:      inputData.pOSIdentification,
            amount:                 inputData.amount,
            cardNumber:             String(inputData.cardNumber),
            cardReadMode:           CardReadModeEnum[inputData.cardReadMode as keyof typeof CardReadModeEnum],
            sequence:               ""
        }

        // Se envian los datos al metodo PaymentMethod de la api
        const paymentMethodRes: PaymentMethodResponse = await evoApi.paymentMethod(paymentMethodData);

        // Dependiendo si la respuesta del PaymentMethod fue exitosa, se prosigue con el siguiente paso que es la ejecución del metodo Sale
        if(paymentMethodRes.responseActions.includes(ResponseActionsEnum.Ok)) {
            console.log('PaymentMethod ResponseAction: OK\n');
            console.log(JSON.stringify(paymentMethodRes)+'\n');
            console.log('Iniciando Sale...');
            console.log(`Usando sequence: ${paymentMethodRes.sequence}`);

            // Datos necesarios para ejecutar Sale. Dentro de estos se agrega el sequence obtenido en la respuesta del PaymentMethod
            const saleData: SaleObjectSale = {
                systemIdentification:   inputData.systemIdentification,
                companyIdentification:  inputData.companyIdentification,
                branchIdentification:   inputData.branchIdentification,
                pOSIdentification:      inputData.pOSIdentification,
                amount:                 inputData.amount,
                cardNumber:             String(inputData.cardNumber),
                cardExp:                inputData.cardExp,
                securityCode:           inputData.securityCode,
                cardReadMode:           CardReadModeEnum[inputData.cardReadMode as keyof typeof CardReadModeEnum],
                sequence:               paymentMethodRes.sequence
            }

            // Se envian los datos al metodo Sale de la api
            const saleRes: SaleResponse = await evoApi.sale(saleData);

            console.log('Sale Finalizado');
            console.log('Respuesta:');

            // Una vez finalizado el proceso, se imprime por pantalla la respuesta del servicio Sale.
            console.log(JSON.stringify(saleRes));

        } else {
            console.log("PaymentMethod ResponseActions NO-OK. Terminando");
            console.log("Message: " + paymentMethodRes.responseMessage);
        }

    } catch (e) {
        // Cualquier error ocurrido en alguno de los metodos ejecutados se logueará con un mensaje y terminará la ejecucion del ejemplo
        errorHandler(e);
    }
}

export async function keepAliveExample() {

    const evoApi: EvoApi                    = new EvoApi();

    const keepAliveBody: KeepAliveData      = new KeepAliveData();
    keepAliveBody.systemIdentification      = 'BciPagos2.0.0';
    keepAliveBody.companyIdentification     = '2000001';
    keepAliveBody.branchIdentification      = '2100001';
    keepAliveBody.pOSIdentification         = '2110004';
    try {
        const response: KeepAliveResponse   = await evoApi.keepAlive(keepAliveBody);
        console.log(`responseMessage: ${response.responseMessage}`);
        console.log(`responseCode: ${response.responseCode}`);
    } catch (e) {
        errorHandler(e);
    }
}

function errorHandler(error) {
    console.error(`Error: ${error.message}`);
    if (error instanceof HttpError) {
        console.error(`Error statusCode: ${error.statusCode}`);
        console.error(`Error Body: ${JSON.stringify(error.body)}`);
    }
}
