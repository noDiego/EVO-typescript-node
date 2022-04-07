import {
    BlockCreateObjectBlockCreate as KeepAliveData,
    HttpBearerAuth,
    KeepAliveObject,
    KeepAliveResponseObjectKeepAliveResponse as KeepAliveResponse,
    PaymentMethodObject,
    PaymentMethodObjectPaymentMethod as PaymentMethodData,
    PaymentMethodResponseObjectPaymentMethodResponse as PaymentMethodResponse,
    SaleObject, SaleObjectSale, SaleResponseObjectSaleResponse
}                       from './lib/evoapi/model/models';
import { PaymentApi }   from './lib/evoapi/api/paymentApi';
import config           from './config';
import { PaymentInput } from './interfaces/paymentInput';

// Esta clase utiliza las funciones disponibilizadas por el codigo generado con openapi-generator para generar los request y llamados hacia los
// servicios
export default class PagosApi {

    // Esto genera una instancia del PaymentApi que permitirá ejecutar las llamadas a los servicios
    private paymentApi: PaymentApi                  = new PaymentApi();

    constructor() {
        this.config();
    }

    /**
     * Ejecuta POST hacia servicio de SALE, el cual permite enviar una compra/autorización
     * @param inputData datos de entrada ingresados por usuario
     * @param sequence parametro sequence obtenido del servicio PaymentMethods
     * @returns estructura de respuesta de servicio Sale
     */
    public async sale(inputData: PaymentInput, sequence?: string): Promise<SaleResponseObjectSaleResponse>{
        const saleData: SaleObjectSale = {
            systemIdentification:   inputData.systemIdentification,
            companyIdentification:  inputData.companyIdentification,
            branchIdentification:   inputData.branchIdentification,
            pOSIdentification:      inputData.pOSIdentification,
            amount:                 inputData.amount,
            cardNumber:             String(inputData.cardNumber),
            cardExp:                inputData.cardExp,
            securityCode:           inputData.securityCode,
            cardReadMode:           SaleObjectSale.CardReadModeEnum[inputData.cardReadMode],
            sequence:               sequence? sequence : inputData.sequence
        }
        const saleObject: SaleObject                = { sale: saleData };
        const response                              = await this.paymentApi.salePost(saleObject);
        return response.body.saleResponse!;
    }

    /**
     * Metodo que ejecuta POST hacia servicio de PAYMENTMETHOD, el cual consulta los "planes" financieros para un Medio de Pago.
     * @param inputData datos de entrada ingresados por usuario
     * @returns estructura de respuesta de servicio PaymentMethod
     */
    public async paymentMethod(inputData: PaymentInput): Promise<PaymentMethodResponse>{
        // Se arman la estructura necesaria para el input del servicio utilizando los datos de entrada del ejemplo.
        const paymentMethodData: PaymentMethodData = {
            systemIdentification:   inputData.systemIdentification,
            companyIdentification:  inputData.companyIdentification,
            branchIdentification:   inputData.branchIdentification,
            pOSIdentification:      inputData.pOSIdentification,
            amount:                 inputData.amount,
            cardNumber:             String(inputData.cardNumber),
            cardReadMode:           PaymentMethodData.CardReadModeEnum[inputData.cardReadMode],
            sequence:               inputData.sequence
        }
        const paymentMethodObj: PaymentMethodObject = { paymentMethod: paymentMethodData };
        const response                              = await this.paymentApi.paymentMethodPost(paymentMethodObj);
        return response.body.paymentMethodResponse!;
    }

    /**
     * Metodo que ejecuta POST hacia servicio de KEEPALIVE
     * @param inputData datos de entrada ingresados por usuario
     * @returns estructura de respuesta de servicio KeepAlive
     */
    public async keepAlive(inputData: PaymentInput): Promise<KeepAliveResponse> {

        const keepAliveBody: KeepAliveData      = new KeepAliveData();
        keepAliveBody.systemIdentification      = inputData.systemIdentification;
        keepAliveBody.companyIdentification     = inputData.companyIdentification;
        keepAliveBody.branchIdentification      = inputData.branchIdentification;
        keepAliveBody.pOSIdentification         = inputData.pOSIdentification;

        const keepAliveObject: KeepAliveObject      = { keepAlive: keepAliveBody };
        const response                              = await this.paymentApi.keepAlivePost(keepAliveObject);
        return response.body.keepAliveResponse!;
    }

    // Genera la configuracion inicial para poder establecer la conexion con el servidor de multipay
    private config(){

        // Se genera y establece una autenticacion del tipo BearerAuth, utilizando el token configurado
        const auth: HttpBearerAuth                  = new HttpBearerAuth();
        auth.accessToken                            = config.evoapi.token;
        this.paymentApi.setDefaultAuthentication(auth)

        // Se establece la url del host al que se enviaran las solicitudes
        this.paymentApi.basePath                    = config.evoapi.url;
        console.log(`EvoApi URL: ${this.paymentApi.basePath}\n`);
    }

}
