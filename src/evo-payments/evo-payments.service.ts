import {
    BlockCreateObjectBlockCreate as KeepAliveData,
    KeepAliveResponseObjectKeepAliveResponse as KeepAliveResponse,
    PaymentMethodObjectPaymentMethod,
    PaymentMethodObjectPaymentMethod as PaymentMethodData,
    PaymentMethodResponseObjectPaymentMethodResponse,
    PaymentMethodResponseObjectPaymentMethodResponse as PaymentMethodResponse,
    SaleObjectSale,
    SaleResponseObjectSaleResponse as SaleResponse,
} from '../lib/evoapi/model/models';
import EvoPaymentsClient from './evo-payments.client';
import { HttpError } from '../lib/evoapi/api/apis';
import CardReadModeEnum = PaymentMethodObjectPaymentMethod.CardReadModeEnum;
import ResponseActionsEnum = PaymentMethodResponseObjectPaymentMethodResponse.ResponseActionsEnum;

export default class EvoPaymentsService {

    private evoPaymentsClient: EvoPaymentsClient = new EvoPaymentsClient();

    public async paymentExample(amount: number, cardNumber: string, cardExp?: string, securityCode?: string) {
        try {
            console.log('Ejemplo Payment con CardNumber:' + cardNumber);
            console.log('Iniciando PaymentMethod...');
            const paymentMethodData: PaymentMethodData = {
                systemIdentification: "BciPagos1.0.0",
                companyIdentification: "2000001",
                branchIdentification: "2100001",
                pOSIdentification: "2110004",
                amount: amount,
                cardNumber: String(cardNumber),
                cardReadMode: CardReadModeEnum.M,
                sequence: ""
            }
            const paymentMethodRes: PaymentMethodResponse = await this.evoPaymentsClient.paymentMethod(paymentMethodData);
            if(paymentMethodRes.responseActions.includes(ResponseActionsEnum.Ok)) {
                console.log('PaymentMethod ResponseAction: OK');
                console.log('Iniciando Sale...');
                console.log(`Sequence: ${paymentMethodRes.sequence}`);
                const saleData: SaleObjectSale = {
                    systemIdentification: "BciPagos1.0.0",
                    companyIdentification: "2000001",
                    branchIdentification: "2100001",
                    pOSIdentification: "2110004",
                    amount: amount,
                    cardNumber: "5206987563423895",
                    cardExp: cardExp,
                    securityCode: securityCode,
                    cardReadMode: CardReadModeEnum.M,
                    sequence: paymentMethodRes.sequence
                }
                const saleRes: SaleResponse = await this.evoPaymentsClient.sale(saleData);

                console.log('Sale Finalizado');
                console.log('Respuesta:');
                console.log(JSON.stringify(saleRes));
            } else {
                console.log("PaymentMethod ResponseActions NO-OK. Terminando");
                console.log("Message: " + paymentMethodRes.responseMessage);
            }

        } catch (e: any) {
            this.errorHandler(e);
        }
    }

    public async keepAliveExample() {
        const keepAliveBody: KeepAliveData = new KeepAliveData();
        keepAliveBody.systemIdentification = 'BciPagos2.0.0';
        keepAliveBody.companyIdentification = '2000001';
        keepAliveBody.branchIdentification = '2100001';
        keepAliveBody.pOSIdentification = '2110004';
        try {
            const response: KeepAliveResponse = await this.evoPaymentsClient.keepAlive(keepAliveBody);
            console.log(`responseMessage: ${response.responseMessage}`);
            console.log(`responseCode: ${response.responseCode}`);
        } catch (e: any) {
            this.errorHandler(e);
        }
    }

    private errorHandler(error: Error) {
        console.error(`Error: ${error.message}`);
        if (error instanceof HttpError) {
            console.error(`Error statusCode: ${error.statusCode}`);
            console.error(`Error Body: ${JSON.stringify(error.body)}`);

        }
    }

}
