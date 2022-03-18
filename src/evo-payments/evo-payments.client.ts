import { PaymentApi } from '../lib/evoapi/api/paymentApi';
import {
    BlockCreateObjectBlockCreate as KeepAliveData,
    HttpBearerAuth,
    KeepAliveObject,
    KeepAliveResponseObjectKeepAliveResponse as KeepAliveResponse,
    PaymentMethodObject,
    PaymentMethodObjectPaymentMethod as PaymentMethodData,
    PaymentMethodResponseObjectPaymentMethodResponse as PaymentMethodResponse, SaleObject, SaleObjectSale, SaleResponseObjectSaleResponse
} from '../lib/evoapi/model/models';
import config from '../config';

const args = require('yargs').argv;

export default class EvoPaymentsClient {

    private paymentApi: PaymentApi = new PaymentApi();

    constructor() {
        this.config();
    }

    public async sale(data: SaleObjectSale): Promise<SaleResponseObjectSaleResponse>{
        const saleObject: SaleObject = { sale: data};
        const response = await this.paymentApi.salePost(saleObject);
        return response.body.saleResponse!;
    }

    public async paymentMethod(data: PaymentMethodData): Promise<PaymentMethodResponse>{
        const paymentMethodObj: PaymentMethodObject = { paymentMethod: data };

        const response = await this.paymentApi.paymentMethodPost(paymentMethodObj);
        return response.body.paymentMethodResponse!;
    }

    public async keepAlive(data: KeepAliveData): Promise<KeepAliveResponse> {
        const keepAliveObject: KeepAliveObject = { keepAlive: data };
        const response = await this.paymentApi.keepAlivePost(keepAliveObject);
        return response.body.keepAliveResponse!;
    }

    private config(){

        //Se genera autenticacion del tipo BearerAuth
        const auth: HttpBearerAuth =new HttpBearerAuth();
        auth.accessToken = config.evoapi.token;
        this.paymentApi.setDefaultAuthentication(auth)

        if (args.hostname) this.paymentApi.basePath = args.hostname;
        else this.paymentApi.basePath = config.evoapi.url;
        console.log(`EvoApi URL: ${this.paymentApi.basePath}`);
    }

}
