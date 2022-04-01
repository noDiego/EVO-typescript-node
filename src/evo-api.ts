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

// Esta clase utiliza las funciones disponibilizadas por el codigo generado con openapi-generator para generar los request y llamados hacia los
// servicios
export default class EvoApi {

    private paymentApi: PaymentApi = new PaymentApi();

    constructor() {
        this.config();
    }

    // Metodo que ejecuta POST hacia servicio de SALE, recibe como parametro los datos minimos necesarios para su ejecución
    public async sale(data: SaleObjectSale): Promise<SaleResponseObjectSaleResponse>{
        const saleObject: SaleObject = { sale: data};
        const response = await this.paymentApi.salePost(saleObject);
        return response.body.saleResponse!;
    }

    // Metodo que ejecuta POST hacia servicio de PAYMENTMETHOD, recibe como parametro los datos minimos necesarios para su ejecución
    public async paymentMethod(data: PaymentMethodData): Promise<PaymentMethodResponse>{
        const paymentMethodObj: PaymentMethodObject = { paymentMethod: data };
        const response = await this.paymentApi.paymentMethodPost(paymentMethodObj);
        return response.body.paymentMethodResponse!;
    }

    // Metodo que ejecuta POST hacia servicio de KEEPALIVE, recibe como parametro los datos minimos necesarios para su ejecución
    public async keepAlive(data: KeepAliveData): Promise<KeepAliveResponse> {
        const keepAliveObject: KeepAliveObject = { keepAlive: data };
        const response = await this.paymentApi.keepAlivePost(keepAliveObject);
        return response.body.keepAliveResponse!;
    }

    // Genera la configuracion inicial para poder establecer la conexion con el servidor de multipay
    private config(){

        // Se genera y establece una autenticacion del tipo BearerAuth, utilizando el token configurado
        const auth: HttpBearerAuth =new HttpBearerAuth();
        auth.accessToken = config.evoapi.token;
        this.paymentApi.setDefaultAuthentication(auth)

        // Se establece la url del host al que se enviaran las solicitudes
        this.paymentApi.basePath = config.evoapi.url;
        console.log(`EvoApi URL: ${this.paymentApi.basePath}\n`);
    }

}
