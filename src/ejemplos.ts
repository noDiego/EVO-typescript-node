import { SaleResponseObjectSaleResponse as SaleResponse } from './lib/evoapi/model/saleResponseObjectSaleResponse';
import { KeepAliveResponseObjectKeepAliveResponse as KeepAliveResponse } from './lib/evoapi/model/keepAliveResponseObjectKeepAliveResponse';
import { HttpError } from './lib/evoapi/api/apis';
import PagosApi from './pagosApi';
import { PaymentInput } from './interfaces/paymentInput';
import {
    PaymentMethodResponseObjectPaymentMethodResponse as PaymentMethodResponse
} from './lib/evoapi/model/paymentMethodResponseObjectPaymentMethodResponse';

/**
 * Ejecuta el ejemplo de un Payment. Realizando los pasos Payment-Method y luego Sale
 * @param inputData datos de entrada ingresados por usuario
 */
export async function paymentExample(inputData: PaymentInput): Promise<void> {

    // Se genera instancia para el uso de la api que ejecutará las instrucciones del codigo generado.
    const evoApi: PagosApi                              = new PagosApi();

    try {
        console.log('Ejemplo Payment con CardNumber:' + inputData.cardNumber);
        console.log('Iniciando PaymentMethod...');

        // Se envian los datos al metodo PaymentMethod de la api
        const paymentMethodRes: PaymentMethodResponse   = await evoApi.paymentMethod(inputData);

        // Se evalua si la respuesta del PaymentMethod fue exitosa, de ser asi se prosigue con el siguiente paso que es la ejecución del metodo Sale
        if( paymentMethodRes.responseActions.includes( PaymentMethodResponse.ResponseActionsEnum.Ok ) ) {
            console.log('PaymentMethod ResponseAction: OK\n');
            console.log(JSON.stringify(paymentMethodRes)+'\n');
            console.log('Iniciando Sale...');

            // Se envian los datos de entrada al metodo Sale de la api junto con el sequence obtenido
            console.log(`Usando sequence: ${paymentMethodRes.sequence}`);
            const saleRes: SaleResponse = await evoApi.sale(inputData, paymentMethodRes.sequence);

            // Una vez finalizado el proceso, se imprime por pantalla la respuesta del servicio Sale.
            console.log('Sale Finalizado');
            console.log('Respuesta:');
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

/**
 * Funcion que ejecuta el ejemplo del servicio KeepAlive. Imprime un Mensaje que informa si está disponible el Servicio Authorize.
 * @param inputData datos de entrada ingresados por usuario
 */
export async function keepAliveExample(inputData) {

    // Se genera instancia para el uso de la api que ejecutará las instrucciones del codigo generado.
    const evoApi: PagosApi                  = new PagosApi();

    try {
        const response: KeepAliveResponse   = await evoApi.keepAlive(inputData);
        console.log(`responseMessage: ${response.responseMessage}`);
        console.log(`responseCode: ${response.responseCode}`);
    } catch (e) {
        // Cualquier error ocurrido en alguno de los metodos ejecutados se logueará con un mensaje y terminará la ejecucion del ejemplo
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
