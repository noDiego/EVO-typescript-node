import localVarRequest from 'request';

export * from './authorizeSaleObject';
export * from './authorizeSaleObjectAuthorizeSale';
export * from './authorizeSaleResponseObject';
export * from './balanceInquiryObject';
export * from './balanceInquiryObjectBalanceInquiry';
export * from './balanceInquiryResponseObject';
export * from './blockCancelObject';
export * from './blockCancelObjectBlockCancel';
export * from './blockCancelResponseObject';
export * from './blockCancelResponseObjectBlockCancelResponse';
export * from './blockCloseObject';
export * from './blockCloseObjectBlockClose';
export * from './blockCloseResponseObject';
export * from './blockCloseResponseObjectBlockCloseResponse';
export * from './blockCreateObject';
export * from './blockCreateObjectBlockCreate';
export * from './blockCreateResponseObject';
export * from './blockCreateResponseObjectBlockCreateResponse';
export * from './cancelObject';
export * from './cancelObjectCancel';
export * from './cancelResponseObject';
export * from './cancelResponseObjectCancelResponse';
export * from './captureObject';
export * from './captureObjectCapture';
export * from './captureResponseObject';
export * from './closeObject';
export * from './closeObjectClose';
export * from './closeResponseObject';
export * from './closeResponseObjectCloseResponse';
export * from './configureObject';
export * from './configureObjectConfigure';
export * from './configureObjectConfigureFiles';
export * from './configureObjectConfigureOperations';
export * from './configureObjectConfigureTables';
export * from './configureResponseObject';
export * from './configureResponseObjectConfigureResponse';
export * from './confirmObject';
export * from './confirmObjectConfirm';
export * from './confirmResponseObject';
export * from './confirmResponseObjectConfirmResponse';
export * from './debtInquiryObject';
export * from './debtInquiryObjectDebtInquiry';
export * from './debtInquiryResponseObject';
export * from './debtInquiryResponseObjectDebtInquiryResponse';
export * from './debtInquiryResponseObjectDebtInquiryResponseAccountSummary';
export * from './debtInquiryResponseObjectDebtInquiryResponseAccountSummaryAccountStatus';
export * from './debtInquiryResponseObjectDebtInquiryResponseCompanies';
export * from './debtPaymentObject';
export * from './debtPaymentObjectDebtPayment';
export * from './debtPaymentObjectDebtPaymentRequiredInformation';
export * from './debtPaymentResponseObject';
export * from './debtPaymentResponseObjectDebtPaymentResponse';
export * from './depositObject';
export * from './depositObjectDeposit';
export * from './depositResponseObject';
export * from './depositResponseObjectDepositResponse';
export * from './enableServiceObject';
export * from './enableServiceObjectEnableService';
export * from './enableServiceResponseObject';
export * from './enableServiceResponseObjectEnableServiceResponse';
export * from './enrollmentObject';
export * from './enrollmentObjectEnrollment';
export * from './enrollmentObjectEnrollmentRecurrence';
export * from './enrollmentResponseObject';
export * from './enrollmentResponseObjectEnrollmentResponse';
export * from './getBlockObject';
export * from './getBlockObjectGetBlock';
export * from './getBlockObjectGetBlockTransactionsRequired';
export * from './getBlockResponseObject';
export * from './getBlockResponseObjectGetBlockResponse';
export * from './getCardObject';
export * from './getCardObjectGetCard';
export * from './getCardResponseObject';
export * from './getCardResponseObjectGetCardResponse';
export * from './getTransactionObject';
export * from './getTransactionObjectGetTransaction';
export * from './getTransactionResponseObject';
export * from './getTransactionResponseObjectGetTransactionResponse';
export * from './getTransactionResponseObjectGetTransactionResponsePayer';
export * from './getTransactionResponseObjectGetTransactionResponseTransaction';
export * from './keepAliveObject';
export * from './keepAliveResponseObject';
export * from './keepAliveResponseObjectKeepAliveResponse';
export * from './keysRenewalObject';
export * from './keysRenewalObjectKeysRenewal';
export * from './keysRenewalResponseObject';
export * from './keysRenewalResponseObjectKeysRenewalResponse';
export * from './orderFinalObject';
export * from './orderFinalObjectOrderFinal';
export * from './orderFinalResponseObject';
export * from './orderFinalResponseObjectOrderFinalResponse';
export * from './orderGetObject';
export * from './orderGetObjectOrderGet';
export * from './orderGetResponseObject';
export * from './orderGetResponseObjectOrderGetResponse';
export * from './orderInitialObject';
export * from './orderInitialObjectOrderInitial';
export * from './orderInitialResponseObject';
export * from './orderInitialResponseObjectOrderInitialResponse';
export * from './orderStatusObject';
export * from './orderStatusObjectOrderStatus';
export * from './orderStatusResponseObject';
export * from './orderStatusResponseObjectOrderStatusResponse';
export * from './paymentMethodObject';
export * from './paymentMethodObjectPaymentMethod';
export * from './paymentMethodResponseObject';
export * from './paymentMethodResponseObjectPaymentMethodResponse';
export * from './paymentMethodResponseObjectPaymentMethodResponseConfiguration';
export * from './paymentMethodResponseObjectPaymentMethodResponseConfigurationCompany';
export * from './paymentMethodsObject';
export * from './paymentMethodsObjectPaymentMethods';
export * from './paymentMethodsResponseObject';
export * from './paymentMethodsResponseObjectPaymentMethodsResponse';
export * from './paymentMethodsResponseObjectPaymentMethodsResponseCategory';
export * from './paymentMethodsResponseObjectPaymentMethodsResponsePaymentMethods';
export * from './paymentMethodsResponseObjectPaymentMethodsResponseType';
export * from './queryCompaniesObject';
export * from './queryCompaniesObjectQueryCompanies';
export * from './queryCompaniesResponseObject';
export * from './queryCompaniesResponseObjectQueryCompaniesResponse';
export * from './queryCompaniesResponseObjectQueryCompaniesResponseAdditionalInformation';
export * from './queryCompaniesResponseObjectQueryCompaniesResponseCompanies';
export * from './queryLineOfBusinessObject';
export * from './queryLineOfBusinessObjectQueryLineOfBusiness';
export * from './queryLineOfBusinessResponseObject';
export * from './queryLineOfBusinessResponseObjectQueryLineOfBusinessResponse';
export * from './queryLineOfBusinessResponseObjectQueryLineOfBusinessResponseLineOfBusiness';
export * from './returnObject';
export * from './returnObjectReturn';
export * from './returnResponseObject';
export * from './saleObject';
export * from './saleObjectSale';
export * from './saleObjectSaleCustomer';
export * from './saleObjectSaleInputTokens';
export * from './saleObjectSalePayer';
export * from './saleObjectSaleProducts';
export * from './saleObjectSaleRequiredInformation';
export * from './saleObjectSaleSecurity';
export * from './saleObjectSaleSeller';
export * from './saleObjectSaleValues';
export * from './saleResponseObject';
export * from './saleResponseObjectSaleResponse';
export * from './saleResponseObjectSaleResponseAdditionalInformation';
export * from './saleResponseObjectSaleResponseCardCategory';
export * from './saleResponseObjectSaleResponseConfiguration';
export * from './saleResponseObjectSaleResponseConfigurationBranch';
export * from './saleResponseObjectSaleResponseConfigurationCompany';
export * from './saleResponseObjectSaleResponseLayout';
export * from './saleResponseObjectSaleResponseMerchantCategory';
export * from './saleResponseObjectSaleResponseNotification';
export * from './saleResponseObjectSaleResponseNotificationControlUseRule';
export * from './saleResponseObjectSaleResponseNotificationDistributionList';
export * from './saleResponseObjectSaleResponsePaymentMethod';
export * from './saleResponseObjectSaleResponsePaymentMethodCategory';
export * from './saleResponseObjectSaleResponsePaymentMethodDebitAccount';
export * from './saleResponseObjectSaleResponsePaymentMethodIssuers';
export * from './saleResponseObjectSaleResponsePaymentMethodType';
export * from './saleResponseObjectSaleResponsePlans';
export * from './saleResponseObjectSaleResponsePlansCashback';
export * from './saleResponseObjectSaleResponsePlansDeferral';
export * from './saleResponseObjectSaleResponseProducts';
export * from './saleResponseObjectSaleResponseRequiredInformation';
export * from './saleResponseObjectSaleResponseTickets';
export * from './saleResponseObjectSaleResponseWorkingKeys';
export * from './settlementObject';
export * from './settlementObjectSettlement';
export * from './settlementResponseObject';
export * from './validateObject';
export * from './validateObjectValidate';
export * from './validateResponseObject';
export * from './validateResponseObjectValidateResponse';
export * from './voidDebtPaymentObject';
export * from './voidDebtPaymentObjectVoidDebtPayment';
export * from './voidDebtPaymentObjectVoidDebtPaymentProducts';
export * from './voidDebtPaymentResponseObject';
export * from './voidObject';
export * from './voidObjectVoid';
export * from './voidResponseObject';
export * from './voidResponseObjectVoidResponse';
export * from './walletRequestObject';
export * from './walletRequestObjectWalletRequest';
export * from './walletRequestResponseObject';
export * from './walletRequestResponseObjectWalletRequestResponse';
export * from './walletsObject';
export * from './walletsObjectWallets';
export * from './walletsResponseObject';
export * from './walletsResponseObjectWalletsResponse';
export * from './walletsResponseObjectWalletsResponseWallets';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { AuthorizeSaleObject } from './authorizeSaleObject';
import { AuthorizeSaleObjectAuthorizeSale } from './authorizeSaleObjectAuthorizeSale';
import { AuthorizeSaleResponseObject } from './authorizeSaleResponseObject';
import { BalanceInquiryObject } from './balanceInquiryObject';
import { BalanceInquiryObjectBalanceInquiry } from './balanceInquiryObjectBalanceInquiry';
import { BalanceInquiryResponseObject } from './balanceInquiryResponseObject';
import { BlockCancelObject } from './blockCancelObject';
import { BlockCancelObjectBlockCancel } from './blockCancelObjectBlockCancel';
import { BlockCancelResponseObject } from './blockCancelResponseObject';
import { BlockCancelResponseObjectBlockCancelResponse } from './blockCancelResponseObjectBlockCancelResponse';
import { BlockCloseObject } from './blockCloseObject';
import { BlockCloseObjectBlockClose } from './blockCloseObjectBlockClose';
import { BlockCloseResponseObject } from './blockCloseResponseObject';
import { BlockCloseResponseObjectBlockCloseResponse } from './blockCloseResponseObjectBlockCloseResponse';
import { BlockCreateObject } from './blockCreateObject';
import { BlockCreateObjectBlockCreate } from './blockCreateObjectBlockCreate';
import { BlockCreateResponseObject } from './blockCreateResponseObject';
import { BlockCreateResponseObjectBlockCreateResponse } from './blockCreateResponseObjectBlockCreateResponse';
import { CancelObject } from './cancelObject';
import { CancelObjectCancel } from './cancelObjectCancel';
import { CancelResponseObject } from './cancelResponseObject';
import { CancelResponseObjectCancelResponse } from './cancelResponseObjectCancelResponse';
import { CaptureObject } from './captureObject';
import { CaptureObjectCapture } from './captureObjectCapture';
import { CaptureResponseObject } from './captureResponseObject';
import { CloseObject } from './closeObject';
import { CloseObjectClose } from './closeObjectClose';
import { CloseResponseObject } from './closeResponseObject';
import { CloseResponseObjectCloseResponse } from './closeResponseObjectCloseResponse';
import { ConfigureObject } from './configureObject';
import { ConfigureObjectConfigure } from './configureObjectConfigure';
import { ConfigureObjectConfigureFiles } from './configureObjectConfigureFiles';
import { ConfigureObjectConfigureOperations } from './configureObjectConfigureOperations';
import { ConfigureObjectConfigureTables } from './configureObjectConfigureTables';
import { ConfigureResponseObject } from './configureResponseObject';
import { ConfigureResponseObjectConfigureResponse } from './configureResponseObjectConfigureResponse';
import { ConfirmObject } from './confirmObject';
import { ConfirmObjectConfirm } from './confirmObjectConfirm';
import { ConfirmResponseObject } from './confirmResponseObject';
import { ConfirmResponseObjectConfirmResponse } from './confirmResponseObjectConfirmResponse';
import { DebtInquiryObject } from './debtInquiryObject';
import { DebtInquiryObjectDebtInquiry } from './debtInquiryObjectDebtInquiry';
import { DebtInquiryResponseObject } from './debtInquiryResponseObject';
import { DebtInquiryResponseObjectDebtInquiryResponse } from './debtInquiryResponseObjectDebtInquiryResponse';
import { DebtInquiryResponseObjectDebtInquiryResponseAccountSummary } from './debtInquiryResponseObjectDebtInquiryResponseAccountSummary';
import { DebtInquiryResponseObjectDebtInquiryResponseAccountSummaryAccountStatus } from './debtInquiryResponseObjectDebtInquiryResponseAccountSummaryAccountStatus';
import { DebtInquiryResponseObjectDebtInquiryResponseCompanies } from './debtInquiryResponseObjectDebtInquiryResponseCompanies';
import { DebtPaymentObject } from './debtPaymentObject';
import { DebtPaymentObjectDebtPayment } from './debtPaymentObjectDebtPayment';
import { DebtPaymentObjectDebtPaymentRequiredInformation } from './debtPaymentObjectDebtPaymentRequiredInformation';
import { DebtPaymentResponseObject } from './debtPaymentResponseObject';
import { DebtPaymentResponseObjectDebtPaymentResponse } from './debtPaymentResponseObjectDebtPaymentResponse';
import { DepositObject } from './depositObject';
import { DepositObjectDeposit } from './depositObjectDeposit';
import { DepositResponseObject } from './depositResponseObject';
import { DepositResponseObjectDepositResponse } from './depositResponseObjectDepositResponse';
import { EnableServiceObject } from './enableServiceObject';
import { EnableServiceObjectEnableService } from './enableServiceObjectEnableService';
import { EnableServiceResponseObject } from './enableServiceResponseObject';
import { EnableServiceResponseObjectEnableServiceResponse } from './enableServiceResponseObjectEnableServiceResponse';
import { EnrollmentObject } from './enrollmentObject';
import { EnrollmentObjectEnrollment } from './enrollmentObjectEnrollment';
import { EnrollmentObjectEnrollmentRecurrence } from './enrollmentObjectEnrollmentRecurrence';
import { EnrollmentResponseObject } from './enrollmentResponseObject';
import { EnrollmentResponseObjectEnrollmentResponse } from './enrollmentResponseObjectEnrollmentResponse';
import { GetBlockObject } from './getBlockObject';
import { GetBlockObjectGetBlock } from './getBlockObjectGetBlock';
import { GetBlockObjectGetBlockTransactionsRequired } from './getBlockObjectGetBlockTransactionsRequired';
import { GetBlockResponseObject } from './getBlockResponseObject';
import { GetBlockResponseObjectGetBlockResponse } from './getBlockResponseObjectGetBlockResponse';
import { GetCardObject } from './getCardObject';
import { GetCardObjectGetCard } from './getCardObjectGetCard';
import { GetCardResponseObject } from './getCardResponseObject';
import { GetCardResponseObjectGetCardResponse } from './getCardResponseObjectGetCardResponse';
import { GetTransactionObject } from './getTransactionObject';
import { GetTransactionObjectGetTransaction } from './getTransactionObjectGetTransaction';
import { GetTransactionResponseObject } from './getTransactionResponseObject';
import { GetTransactionResponseObjectGetTransactionResponse } from './getTransactionResponseObjectGetTransactionResponse';
import { GetTransactionResponseObjectGetTransactionResponsePayer } from './getTransactionResponseObjectGetTransactionResponsePayer';
import { GetTransactionResponseObjectGetTransactionResponseTransaction } from './getTransactionResponseObjectGetTransactionResponseTransaction';
import { KeepAliveObject } from './keepAliveObject';
import { KeepAliveResponseObject } from './keepAliveResponseObject';
import { KeepAliveResponseObjectKeepAliveResponse } from './keepAliveResponseObjectKeepAliveResponse';
import { KeysRenewalObject } from './keysRenewalObject';
import { KeysRenewalObjectKeysRenewal } from './keysRenewalObjectKeysRenewal';
import { KeysRenewalResponseObject } from './keysRenewalResponseObject';
import { KeysRenewalResponseObjectKeysRenewalResponse } from './keysRenewalResponseObjectKeysRenewalResponse';
import { OrderFinalObject } from './orderFinalObject';
import { OrderFinalObjectOrderFinal } from './orderFinalObjectOrderFinal';
import { OrderFinalResponseObject } from './orderFinalResponseObject';
import { OrderFinalResponseObjectOrderFinalResponse } from './orderFinalResponseObjectOrderFinalResponse';
import { OrderGetObject } from './orderGetObject';
import { OrderGetObjectOrderGet } from './orderGetObjectOrderGet';
import { OrderGetResponseObject } from './orderGetResponseObject';
import { OrderGetResponseObjectOrderGetResponse } from './orderGetResponseObjectOrderGetResponse';
import { OrderInitialObject } from './orderInitialObject';
import { OrderInitialObjectOrderInitial } from './orderInitialObjectOrderInitial';
import { OrderInitialResponseObject } from './orderInitialResponseObject';
import { OrderInitialResponseObjectOrderInitialResponse } from './orderInitialResponseObjectOrderInitialResponse';
import { OrderStatusObject } from './orderStatusObject';
import { OrderStatusObjectOrderStatus } from './orderStatusObjectOrderStatus';
import { OrderStatusResponseObject } from './orderStatusResponseObject';
import { OrderStatusResponseObjectOrderStatusResponse } from './orderStatusResponseObjectOrderStatusResponse';
import { PaymentMethodObject } from './paymentMethodObject';
import { PaymentMethodObjectPaymentMethod } from './paymentMethodObjectPaymentMethod';
import { PaymentMethodResponseObject } from './paymentMethodResponseObject';
import { PaymentMethodResponseObjectPaymentMethodResponse } from './paymentMethodResponseObjectPaymentMethodResponse';
import { PaymentMethodResponseObjectPaymentMethodResponseConfiguration } from './paymentMethodResponseObjectPaymentMethodResponseConfiguration';
import { PaymentMethodResponseObjectPaymentMethodResponseConfigurationCompany } from './paymentMethodResponseObjectPaymentMethodResponseConfigurationCompany';
import { PaymentMethodsObject } from './paymentMethodsObject';
import { PaymentMethodsObjectPaymentMethods } from './paymentMethodsObjectPaymentMethods';
import { PaymentMethodsResponseObject } from './paymentMethodsResponseObject';
import { PaymentMethodsResponseObjectPaymentMethodsResponse } from './paymentMethodsResponseObjectPaymentMethodsResponse';
import { PaymentMethodsResponseObjectPaymentMethodsResponseCategory } from './paymentMethodsResponseObjectPaymentMethodsResponseCategory';
import { PaymentMethodsResponseObjectPaymentMethodsResponsePaymentMethods } from './paymentMethodsResponseObjectPaymentMethodsResponsePaymentMethods';
import { PaymentMethodsResponseObjectPaymentMethodsResponseType } from './paymentMethodsResponseObjectPaymentMethodsResponseType';
import { QueryCompaniesObject } from './queryCompaniesObject';
import { QueryCompaniesObjectQueryCompanies } from './queryCompaniesObjectQueryCompanies';
import { QueryCompaniesResponseObject } from './queryCompaniesResponseObject';
import { QueryCompaniesResponseObjectQueryCompaniesResponse } from './queryCompaniesResponseObjectQueryCompaniesResponse';
import { QueryCompaniesResponseObjectQueryCompaniesResponseAdditionalInformation } from './queryCompaniesResponseObjectQueryCompaniesResponseAdditionalInformation';
import { QueryCompaniesResponseObjectQueryCompaniesResponseCompanies } from './queryCompaniesResponseObjectQueryCompaniesResponseCompanies';
import { QueryLineOfBusinessObject } from './queryLineOfBusinessObject';
import { QueryLineOfBusinessObjectQueryLineOfBusiness } from './queryLineOfBusinessObjectQueryLineOfBusiness';
import { QueryLineOfBusinessResponseObject } from './queryLineOfBusinessResponseObject';
import { QueryLineOfBusinessResponseObjectQueryLineOfBusinessResponse } from './queryLineOfBusinessResponseObjectQueryLineOfBusinessResponse';
import { QueryLineOfBusinessResponseObjectQueryLineOfBusinessResponseLineOfBusiness } from './queryLineOfBusinessResponseObjectQueryLineOfBusinessResponseLineOfBusiness';
import { ReturnObject } from './returnObject';
import { ReturnObjectReturn } from './returnObjectReturn';
import { ReturnResponseObject } from './returnResponseObject';
import { SaleObject } from './saleObject';
import { SaleObjectSale } from './saleObjectSale';
import { SaleObjectSaleCustomer } from './saleObjectSaleCustomer';
import { SaleObjectSaleInputTokens } from './saleObjectSaleInputTokens';
import { SaleObjectSalePayer } from './saleObjectSalePayer';
import { SaleObjectSaleProducts } from './saleObjectSaleProducts';
import { SaleObjectSaleRequiredInformation } from './saleObjectSaleRequiredInformation';
import { SaleObjectSaleSecurity } from './saleObjectSaleSecurity';
import { SaleObjectSaleSeller } from './saleObjectSaleSeller';
import { SaleObjectSaleValues } from './saleObjectSaleValues';
import { SaleResponseObject } from './saleResponseObject';
import { SaleResponseObjectSaleResponse } from './saleResponseObjectSaleResponse';
import { SaleResponseObjectSaleResponseAdditionalInformation } from './saleResponseObjectSaleResponseAdditionalInformation';
import { SaleResponseObjectSaleResponseCardCategory } from './saleResponseObjectSaleResponseCardCategory';
import { SaleResponseObjectSaleResponseConfiguration } from './saleResponseObjectSaleResponseConfiguration';
import { SaleResponseObjectSaleResponseConfigurationBranch } from './saleResponseObjectSaleResponseConfigurationBranch';
import { SaleResponseObjectSaleResponseConfigurationCompany } from './saleResponseObjectSaleResponseConfigurationCompany';
import { SaleResponseObjectSaleResponseLayout } from './saleResponseObjectSaleResponseLayout';
import { SaleResponseObjectSaleResponseMerchantCategory } from './saleResponseObjectSaleResponseMerchantCategory';
import { SaleResponseObjectSaleResponseNotification } from './saleResponseObjectSaleResponseNotification';
import { SaleResponseObjectSaleResponseNotificationControlUseRule } from './saleResponseObjectSaleResponseNotificationControlUseRule';
import { SaleResponseObjectSaleResponseNotificationDistributionList } from './saleResponseObjectSaleResponseNotificationDistributionList';
import { SaleResponseObjectSaleResponsePaymentMethod } from './saleResponseObjectSaleResponsePaymentMethod';
import { SaleResponseObjectSaleResponsePaymentMethodCategory } from './saleResponseObjectSaleResponsePaymentMethodCategory';
import { SaleResponseObjectSaleResponsePaymentMethodDebitAccount } from './saleResponseObjectSaleResponsePaymentMethodDebitAccount';
import { SaleResponseObjectSaleResponsePaymentMethodIssuers } from './saleResponseObjectSaleResponsePaymentMethodIssuers';
import { SaleResponseObjectSaleResponsePaymentMethodType } from './saleResponseObjectSaleResponsePaymentMethodType';
import { SaleResponseObjectSaleResponsePlans } from './saleResponseObjectSaleResponsePlans';
import { SaleResponseObjectSaleResponsePlansCashback } from './saleResponseObjectSaleResponsePlansCashback';
import { SaleResponseObjectSaleResponsePlansDeferral } from './saleResponseObjectSaleResponsePlansDeferral';
import { SaleResponseObjectSaleResponseProducts } from './saleResponseObjectSaleResponseProducts';
import { SaleResponseObjectSaleResponseRequiredInformation } from './saleResponseObjectSaleResponseRequiredInformation';
import { SaleResponseObjectSaleResponseTickets } from './saleResponseObjectSaleResponseTickets';
import { SaleResponseObjectSaleResponseWorkingKeys } from './saleResponseObjectSaleResponseWorkingKeys';
import { SettlementObject } from './settlementObject';
import { SettlementObjectSettlement } from './settlementObjectSettlement';
import { SettlementResponseObject } from './settlementResponseObject';
import { ValidateObject } from './validateObject';
import { ValidateObjectValidate } from './validateObjectValidate';
import { ValidateResponseObject } from './validateResponseObject';
import { ValidateResponseObjectValidateResponse } from './validateResponseObjectValidateResponse';
import { VoidDebtPaymentObject } from './voidDebtPaymentObject';
import { VoidDebtPaymentObjectVoidDebtPayment } from './voidDebtPaymentObjectVoidDebtPayment';
import { VoidDebtPaymentObjectVoidDebtPaymentProducts } from './voidDebtPaymentObjectVoidDebtPaymentProducts';
import { VoidDebtPaymentResponseObject } from './voidDebtPaymentResponseObject';
import { VoidObject } from './voidObject';
import { VoidObjectVoid } from './voidObjectVoid';
import { VoidResponseObject } from './voidResponseObject';
import { VoidResponseObjectVoidResponse } from './voidResponseObjectVoidResponse';
import { WalletRequestObject } from './walletRequestObject';
import { WalletRequestObjectWalletRequest } from './walletRequestObjectWalletRequest';
import { WalletRequestResponseObject } from './walletRequestResponseObject';
import { WalletRequestResponseObjectWalletRequestResponse } from './walletRequestResponseObjectWalletRequestResponse';
import { WalletsObject } from './walletsObject';
import { WalletsObjectWallets } from './walletsObjectWallets';
import { WalletsResponseObject } from './walletsResponseObject';
import { WalletsResponseObjectWalletsResponse } from './walletsResponseObjectWalletsResponse';
import { WalletsResponseObjectWalletsResponseWallets } from './walletsResponseObjectWalletsResponseWallets';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
        "AuthorizeSaleObjectAuthorizeSale.ReasonReverseEnum": AuthorizeSaleObjectAuthorizeSale.ReasonReverseEnum,
        "AuthorizeSaleObjectAuthorizeSale.ReasonSequenceBreakEnum": AuthorizeSaleObjectAuthorizeSale.ReasonSequenceBreakEnum,
        "AuthorizeSaleObjectAuthorizeSale.CurrencyCodeEnum": AuthorizeSaleObjectAuthorizeSale.CurrencyCodeEnum,
        "AuthorizeSaleObjectAuthorizeSale.CardReadModeEnum": AuthorizeSaleObjectAuthorizeSale.CardReadModeEnum,
        "BalanceInquiryObjectBalanceInquiry.ReasonSequenceBreakEnum": BalanceInquiryObjectBalanceInquiry.ReasonSequenceBreakEnum,
        "BalanceInquiryObjectBalanceInquiry.CardReadModeEnum": BalanceInquiryObjectBalanceInquiry.CardReadModeEnum,
        "BlockCancelObjectBlockCancel.ReasonSequenceBreakEnum": BlockCancelObjectBlockCancel.ReasonSequenceBreakEnum,
        "BlockCancelResponseObjectBlockCancelResponse.ResponseActionsEnum": BlockCancelResponseObjectBlockCancelResponse.ResponseActionsEnum,
        "BlockCancelResponseObjectBlockCancelResponse.WasReversePreviousEnum": BlockCancelResponseObjectBlockCancelResponse.WasReversePreviousEnum,
        "BlockCancelResponseObjectBlockCancelResponse.WasClosedPreviousBlockEnum": BlockCancelResponseObjectBlockCancelResponse.WasClosedPreviousBlockEnum,
        "BlockCloseObjectBlockClose.ReasonSequenceBreakEnum": BlockCloseObjectBlockClose.ReasonSequenceBreakEnum,
        "BlockCloseResponseObjectBlockCloseResponse.ResponseActionsEnum": BlockCloseResponseObjectBlockCloseResponse.ResponseActionsEnum,
        "BlockCloseResponseObjectBlockCloseResponse.WasReversePreviousEnum": BlockCloseResponseObjectBlockCloseResponse.WasReversePreviousEnum,
        "BlockCloseResponseObjectBlockCloseResponse.WasClosedPreviousBlockEnum": BlockCloseResponseObjectBlockCloseResponse.WasClosedPreviousBlockEnum,
        "BlockCreateObjectBlockCreate.ReasonSequenceBreakEnum": BlockCreateObjectBlockCreate.ReasonSequenceBreakEnum,
        "BlockCreateResponseObjectBlockCreateResponse.ResponseActionsEnum": BlockCreateResponseObjectBlockCreateResponse.ResponseActionsEnum,
        "BlockCreateResponseObjectBlockCreateResponse.WasReversePreviousEnum": BlockCreateResponseObjectBlockCreateResponse.WasReversePreviousEnum,
        "CancelObjectCancel.ReasonEnum": CancelObjectCancel.ReasonEnum,
        "CancelResponseObjectCancelResponse.ResponseActionsEnum": CancelResponseObjectCancelResponse.ResponseActionsEnum,
        "CancelResponseObjectCancelResponse.WasReversePreviousEnum": CancelResponseObjectCancelResponse.WasReversePreviousEnum,
        "CaptureObjectCapture.ReverseReasonEnum": CaptureObjectCapture.ReverseReasonEnum,
        "CaptureObjectCapture.ReasonSequenceBreakEnum": CaptureObjectCapture.ReasonSequenceBreakEnum,
        "CaptureObjectCapture.CardReadModeEnum": CaptureObjectCapture.CardReadModeEnum,
        "CloseObjectClose.ReasonSequenceBreakEnum": CloseObjectClose.ReasonSequenceBreakEnum,
        "CloseResponseObjectCloseResponse.ResponseActionsEnum": CloseResponseObjectCloseResponse.ResponseActionsEnum,
        "CloseResponseObjectCloseResponse.WasReversePreviousEnum": CloseResponseObjectCloseResponse.WasReversePreviousEnum,
        "CloseResponseObjectCloseResponse.CardReadModeEnum": CloseResponseObjectCloseResponse.CardReadModeEnum,
        "CloseResponseObjectCloseResponse.CardReadModeDescriptionEnum": CloseResponseObjectCloseResponse.CardReadModeDescriptionEnum,
        "ConfigureObjectConfigure.ReasonSequenceBreakEnum": ConfigureObjectConfigure.ReasonSequenceBreakEnum,
        "ConfigureObjectConfigure.POSOrDeviceActionsEnum": ConfigureObjectConfigure.POSOrDeviceActionsEnum,
        "ConfigureResponseObjectConfigureResponse.ResponseActionsEnum": ConfigureResponseObjectConfigureResponse.ResponseActionsEnum,
        "ConfigureResponseObjectConfigureResponse.WasReversePreviousEnum": ConfigureResponseObjectConfigureResponse.WasReversePreviousEnum,
        "ConfigureResponseObjectConfigureResponse.WasClosedPreviousBlockEnum": ConfigureResponseObjectConfigureResponse.WasClosedPreviousBlockEnum,
        "ConfirmObjectConfirm.ReasonSequenceBreakEnum": ConfirmObjectConfirm.ReasonSequenceBreakEnum,
        "ConfirmResponseObjectConfirmResponse.ResponseActionsEnum": ConfirmResponseObjectConfirmResponse.ResponseActionsEnum,
        "ConfirmResponseObjectConfirmResponse.WasReversePreviousEnum": ConfirmResponseObjectConfirmResponse.WasReversePreviousEnum,
        "DebtInquiryObjectDebtInquiry.ReasonSequenceBreakEnum": DebtInquiryObjectDebtInquiry.ReasonSequenceBreakEnum,
        "DebtInquiryObjectDebtInquiry.CardReadModeEnum": DebtInquiryObjectDebtInquiry.CardReadModeEnum,
        "DebtInquiryResponseObjectDebtInquiryResponse.ResponseActionsEnum": DebtInquiryResponseObjectDebtInquiryResponse.ResponseActionsEnum,
        "DebtInquiryResponseObjectDebtInquiryResponse.WasReversePreviousEnum": DebtInquiryResponseObjectDebtInquiryResponse.WasReversePreviousEnum,
        "DebtInquiryResponseObjectDebtInquiryResponse.CurrencyCodeEnum": DebtInquiryResponseObjectDebtInquiryResponse.CurrencyCodeEnum,
        "DebtInquiryResponseObjectDebtInquiryResponse.CardReadModeEnum": DebtInquiryResponseObjectDebtInquiryResponse.CardReadModeEnum,
        "DebtInquiryResponseObjectDebtInquiryResponse.CardReadModeDescriptionEnum": DebtInquiryResponseObjectDebtInquiryResponse.CardReadModeDescriptionEnum,
        "DebtInquiryResponseObjectDebtInquiryResponse.FallbackForcedEnum": DebtInquiryResponseObjectDebtInquiryResponse.FallbackForcedEnum,
        "DebtInquiryResponseObjectDebtInquiryResponse.WasClosedPreviousBlockEnum": DebtInquiryResponseObjectDebtInquiryResponse.WasClosedPreviousBlockEnum,
        "DebtInquiryResponseObjectDebtInquiryResponseAccountSummaryAccountStatus.CurrencyCodeEnum": DebtInquiryResponseObjectDebtInquiryResponseAccountSummaryAccountStatus.CurrencyCodeEnum,
        "DebtPaymentObjectDebtPayment.ReverseReasonEnum": DebtPaymentObjectDebtPayment.ReverseReasonEnum,
        "DebtPaymentObjectDebtPayment.ReasonSequenceBreakEnum": DebtPaymentObjectDebtPayment.ReasonSequenceBreakEnum,
        "DebtPaymentObjectDebtPayment.CardReadModeEnum": DebtPaymentObjectDebtPayment.CardReadModeEnum,
        "DebtPaymentObjectDebtPaymentRequiredInformation.TypeEnum": DebtPaymentObjectDebtPaymentRequiredInformation.TypeEnum,
        "DebtPaymentObjectDebtPaymentRequiredInformation.InterpretForEnum": DebtPaymentObjectDebtPaymentRequiredInformation.InterpretForEnum,
        "DebtPaymentObjectDebtPaymentRequiredInformation.ItIsDefinedEnum": DebtPaymentObjectDebtPaymentRequiredInformation.ItIsDefinedEnum,
        "DebtPaymentObjectDebtPaymentRequiredInformation.ValidationExpressionTypeEnum": DebtPaymentObjectDebtPaymentRequiredInformation.ValidationExpressionTypeEnum,
        "DebtPaymentObjectDebtPaymentRequiredInformation.MandatoryEnum": DebtPaymentObjectDebtPaymentRequiredInformation.MandatoryEnum,
        "DebtPaymentResponseObjectDebtPaymentResponse.ResponseActionsEnum": DebtPaymentResponseObjectDebtPaymentResponse.ResponseActionsEnum,
        "DebtPaymentResponseObjectDebtPaymentResponse.WasReversePreviousEnum": DebtPaymentResponseObjectDebtPaymentResponse.WasReversePreviousEnum,
        "DepositObjectDeposit.ReverseReasonEnum": DepositObjectDeposit.ReverseReasonEnum,
        "DepositObjectDeposit.ReasonSequenceBreakEnum": DepositObjectDeposit.ReasonSequenceBreakEnum,
        "DepositObjectDeposit.CardReadModeEnum": DepositObjectDeposit.CardReadModeEnum,
        "DepositResponseObjectDepositResponse.ResponseActionsEnum": DepositResponseObjectDepositResponse.ResponseActionsEnum,
        "DepositResponseObjectDepositResponse.WasReversePreviousEnum": DepositResponseObjectDepositResponse.WasReversePreviousEnum,
        "DepositResponseObjectDepositResponse.CurrencyCodeEnum": DepositResponseObjectDepositResponse.CurrencyCodeEnum,
        "DepositResponseObjectDepositResponse.CardReadModeEnum": DepositResponseObjectDepositResponse.CardReadModeEnum,
        "DepositResponseObjectDepositResponse.CardReadModeDescriptionEnum": DepositResponseObjectDepositResponse.CardReadModeDescriptionEnum,
        "EnableServiceResponseObjectEnableServiceResponse.ResponseActionsEnum": EnableServiceResponseObjectEnableServiceResponse.ResponseActionsEnum,
        "EnableServiceResponseObjectEnableServiceResponse.WasReversePreviousEnum": EnableServiceResponseObjectEnableServiceResponse.WasReversePreviousEnum,
        "EnableServiceResponseObjectEnableServiceResponse.WasClosedPreviousBlockEnum": EnableServiceResponseObjectEnableServiceResponse.WasClosedPreviousBlockEnum,
        "EnrollmentObjectEnrollment.CardReadModeEnum": EnrollmentObjectEnrollment.CardReadModeEnum,
        "EnrollmentObjectEnrollment.CurrencyCodeEnum": EnrollmentObjectEnrollment.CurrencyCodeEnum,
        "EnrollmentObjectEnrollment.ReverseReasonEnum": EnrollmentObjectEnrollment.ReverseReasonEnum,
        "EnrollmentObjectEnrollment.ReasonSequenceBreakEnum": EnrollmentObjectEnrollment.ReasonSequenceBreakEnum,
        "EnrollmentObjectEnrollmentRecurrence.IntervalTypeEnum": EnrollmentObjectEnrollmentRecurrence.IntervalTypeEnum,
        "EnrollmentResponseObjectEnrollmentResponse.ResponseActionsEnum": EnrollmentResponseObjectEnrollmentResponse.ResponseActionsEnum,
        "EnrollmentResponseObjectEnrollmentResponse.WasReversePreviousEnum": EnrollmentResponseObjectEnrollmentResponse.WasReversePreviousEnum,
        "EnrollmentResponseObjectEnrollmentResponse.CurrencyCodeEnum": EnrollmentResponseObjectEnrollmentResponse.CurrencyCodeEnum,
        "EnrollmentResponseObjectEnrollmentResponse.CardReadModeEnum": EnrollmentResponseObjectEnrollmentResponse.CardReadModeEnum,
        "EnrollmentResponseObjectEnrollmentResponse.CardReadModeDescriptionEnum": EnrollmentResponseObjectEnrollmentResponse.CardReadModeDescriptionEnum,
        "GetBlockObjectGetBlock.ReasonSequenceBreakEnum": GetBlockObjectGetBlock.ReasonSequenceBreakEnum,
        "GetBlockObjectGetBlockTransactionsRequired.TransactionTypeEnum": GetBlockObjectGetBlockTransactionsRequired.TransactionTypeEnum,
        "GetBlockObjectGetBlockTransactionsRequired.StateEnum": GetBlockObjectGetBlockTransactionsRequired.StateEnum,
        "GetBlockResponseObjectGetBlockResponse.ResponseActionsEnum": GetBlockResponseObjectGetBlockResponse.ResponseActionsEnum,
        "GetBlockResponseObjectGetBlockResponse.WasReversePreviousEnum": GetBlockResponseObjectGetBlockResponse.WasReversePreviousEnum,
        "GetBlockResponseObjectGetBlockResponse.WasClosedPreviousBlockEnum": GetBlockResponseObjectGetBlockResponse.WasClosedPreviousBlockEnum,
        "GetCardObjectGetCard.ReasonSequenceBreakEnum": GetCardObjectGetCard.ReasonSequenceBreakEnum,
        "GetCardObjectGetCard.CurrencyCodeEnum": GetCardObjectGetCard.CurrencyCodeEnum,
        "GetCardObjectGetCard.CardReadModeEnum": GetCardObjectGetCard.CardReadModeEnum,
        "GetCardResponseObjectGetCardResponse.ResponseActionsEnum": GetCardResponseObjectGetCardResponse.ResponseActionsEnum,
        "GetCardResponseObjectGetCardResponse.WasReversePreviousEnum": GetCardResponseObjectGetCardResponse.WasReversePreviousEnum,
        "GetCardResponseObjectGetCardResponse.CardReadModeEnum": GetCardResponseObjectGetCardResponse.CardReadModeEnum,
        "GetCardResponseObjectGetCardResponse.CardReadModeDescriptionEnum": GetCardResponseObjectGetCardResponse.CardReadModeDescriptionEnum,
        "GetTransactionObjectGetTransaction.ReasonSequenceBreakEnum": GetTransactionObjectGetTransaction.ReasonSequenceBreakEnum,
        "GetTransactionResponseObjectGetTransactionResponse.ResponseActionsEnum": GetTransactionResponseObjectGetTransactionResponse.ResponseActionsEnum,
        "GetTransactionResponseObjectGetTransactionResponse.WasReversePreviousEnum": GetTransactionResponseObjectGetTransactionResponse.WasReversePreviousEnum,
        "GetTransactionResponseObjectGetTransactionResponse.WasClosedPreviousBlockEnum": GetTransactionResponseObjectGetTransactionResponse.WasClosedPreviousBlockEnum,
        "GetTransactionResponseObjectGetTransactionResponsePayer.IdentificationTypeEnum": GetTransactionResponseObjectGetTransactionResponsePayer.IdentificationTypeEnum,
        "GetTransactionResponseObjectGetTransactionResponsePayer.DocumentTypeEnum": GetTransactionResponseObjectGetTransactionResponsePayer.DocumentTypeEnum,
        "GetTransactionResponseObjectGetTransactionResponsePayer.CurrencyCodeEnum": GetTransactionResponseObjectGetTransactionResponsePayer.CurrencyCodeEnum,
        "GetTransactionResponseObjectGetTransactionResponseTransaction.ResponseActionsEnum": GetTransactionResponseObjectGetTransactionResponseTransaction.ResponseActionsEnum,
        "GetTransactionResponseObjectGetTransactionResponseTransaction.CardReadModeEnum": GetTransactionResponseObjectGetTransactionResponseTransaction.CardReadModeEnum,
        "KeepAliveResponseObjectKeepAliveResponse.ResponseActionsEnum": KeepAliveResponseObjectKeepAliveResponse.ResponseActionsEnum,
        "KeepAliveResponseObjectKeepAliveResponse.WasReversePreviousEnum": KeepAliveResponseObjectKeepAliveResponse.WasReversePreviousEnum,
        "KeepAliveResponseObjectKeepAliveResponse.WasClosedPreviousBlockEnum": KeepAliveResponseObjectKeepAliveResponse.WasClosedPreviousBlockEnum,
        "KeysRenewalResponseObjectKeysRenewalResponse.ResponseActionsEnum": KeysRenewalResponseObjectKeysRenewalResponse.ResponseActionsEnum,
        "KeysRenewalResponseObjectKeysRenewalResponse.WasReversePreviousEnum": KeysRenewalResponseObjectKeysRenewalResponse.WasReversePreviousEnum,
        "OrderFinalResponseObjectOrderFinalResponse.ResponseActionsEnum": OrderFinalResponseObjectOrderFinalResponse.ResponseActionsEnum,
        "OrderGetResponseObjectOrderGetResponse.ResponseActionsEnum": OrderGetResponseObjectOrderGetResponse.ResponseActionsEnum,
        "OrderGetResponseObjectOrderGetResponse.CurrencyCodeEnum": OrderGetResponseObjectOrderGetResponse.CurrencyCodeEnum,
        "OrderInitialObjectOrderInitial.CurrencyCodeEnum": OrderInitialObjectOrderInitial.CurrencyCodeEnum,
        "OrderInitialResponseObjectOrderInitialResponse.ResponseActionsEnum": OrderInitialResponseObjectOrderInitialResponse.ResponseActionsEnum,
        "OrderStatusObjectOrderStatus.ReverseReasonEnum": OrderStatusObjectOrderStatus.ReverseReasonEnum,
        "OrderStatusObjectOrderStatus.ReasonSequenceBreakEnum": OrderStatusObjectOrderStatus.ReasonSequenceBreakEnum,
        "OrderStatusObjectOrderStatus.CurrencyCodeEnum": OrderStatusObjectOrderStatus.CurrencyCodeEnum,
        "OrderStatusObjectOrderStatus.CardReadModeEnum": OrderStatusObjectOrderStatus.CardReadModeEnum,
        "OrderStatusResponseObjectOrderStatusResponse.ResponseActionsEnum": OrderStatusResponseObjectOrderStatusResponse.ResponseActionsEnum,
        "OrderStatusResponseObjectOrderStatusResponse.WasReversePreviousEnum": OrderStatusResponseObjectOrderStatusResponse.WasReversePreviousEnum,
        "OrderStatusResponseObjectOrderStatusResponse.CurrencyCodeEnum": OrderStatusResponseObjectOrderStatusResponse.CurrencyCodeEnum,
        "OrderStatusResponseObjectOrderStatusResponse.CardReadModeEnum": OrderStatusResponseObjectOrderStatusResponse.CardReadModeEnum,
        "OrderStatusResponseObjectOrderStatusResponse.CardReadModeDescriptionEnum": OrderStatusResponseObjectOrderStatusResponse.CardReadModeDescriptionEnum,
        "PaymentMethodObjectPaymentMethod.CurrencyCodeEnum": PaymentMethodObjectPaymentMethod.CurrencyCodeEnum,
        "PaymentMethodObjectPaymentMethod.CardReadModeEnum": PaymentMethodObjectPaymentMethod.CardReadModeEnum,
        "PaymentMethodObjectPaymentMethod.OrigTransactionTypeEnum": PaymentMethodObjectPaymentMethod.OrigTransactionTypeEnum,
        "PaymentMethodResponseObjectPaymentMethodResponse.ResponseActionsEnum": PaymentMethodResponseObjectPaymentMethodResponse.ResponseActionsEnum,
        "PaymentMethodResponseObjectPaymentMethodResponse.WasReversePreviousEnum": PaymentMethodResponseObjectPaymentMethodResponse.WasReversePreviousEnum,
        "PaymentMethodResponseObjectPaymentMethodResponse.CardReadModeEnum": PaymentMethodResponseObjectPaymentMethodResponse.CardReadModeEnum,
        "PaymentMethodResponseObjectPaymentMethodResponse.CardReadModeDescriptionEnum": PaymentMethodResponseObjectPaymentMethodResponse.CardReadModeDescriptionEnum,
        "PaymentMethodsResponseObjectPaymentMethodsResponse.ResponseActionsEnum": PaymentMethodsResponseObjectPaymentMethodsResponse.ResponseActionsEnum,
        "QueryCompaniesResponseObjectQueryCompaniesResponse.ResponseActionsEnum": QueryCompaniesResponseObjectQueryCompaniesResponse.ResponseActionsEnum,
        "QueryCompaniesResponseObjectQueryCompaniesResponse.WasReversePreviousEnum": QueryCompaniesResponseObjectQueryCompaniesResponse.WasReversePreviousEnum,
        "QueryCompaniesResponseObjectQueryCompaniesResponse.WasClosedPreviousBlockEnum": QueryCompaniesResponseObjectQueryCompaniesResponse.WasClosedPreviousBlockEnum,
        "QueryCompaniesResponseObjectQueryCompaniesResponseAdditionalInformation.TypeEnum": QueryCompaniesResponseObjectQueryCompaniesResponseAdditionalInformation.TypeEnum,
        "QueryCompaniesResponseObjectQueryCompaniesResponseAdditionalInformation.InterpretForEnum": QueryCompaniesResponseObjectQueryCompaniesResponseAdditionalInformation.InterpretForEnum,
        "QueryCompaniesResponseObjectQueryCompaniesResponseAdditionalInformation.ValidationExpressionTypeEnum": QueryCompaniesResponseObjectQueryCompaniesResponseAdditionalInformation.ValidationExpressionTypeEnum,
        "QueryCompaniesResponseObjectQueryCompaniesResponseAdditionalInformation.MandatoryEnum": QueryCompaniesResponseObjectQueryCompaniesResponseAdditionalInformation.MandatoryEnum,
        "QueryCompaniesResponseObjectQueryCompaniesResponseCompanies.EnableRecurringPaymentEnum": QueryCompaniesResponseObjectQueryCompaniesResponseCompanies.EnableRecurringPaymentEnum,
        "QueryLineOfBusinessResponseObjectQueryLineOfBusinessResponse.ResponseActionsEnum": QueryLineOfBusinessResponseObjectQueryLineOfBusinessResponse.ResponseActionsEnum,
        "QueryLineOfBusinessResponseObjectQueryLineOfBusinessResponse.WasReversePreviousEnum": QueryLineOfBusinessResponseObjectQueryLineOfBusinessResponse.WasReversePreviousEnum,
        "QueryLineOfBusinessResponseObjectQueryLineOfBusinessResponse.WasClosedPreviousBlockEnum": QueryLineOfBusinessResponseObjectQueryLineOfBusinessResponse.WasClosedPreviousBlockEnum,
        "ReturnObjectReturn.ReverseReasonEnum": ReturnObjectReturn.ReverseReasonEnum,
        "ReturnObjectReturn.ReasonSequenceBreakEnum": ReturnObjectReturn.ReasonSequenceBreakEnum,
        "ReturnObjectReturn.CurrencyCodeEnum": ReturnObjectReturn.CurrencyCodeEnum,
        "ReturnObjectReturn.CardReadModeEnum": ReturnObjectReturn.CardReadModeEnum,
        "SaleObjectSale.ReverseReasonEnum": SaleObjectSale.ReverseReasonEnum,
        "SaleObjectSale.ReasonSequenceBreakEnum": SaleObjectSale.ReasonSequenceBreakEnum,
        "SaleObjectSale.CurrencyCodeEnum": SaleObjectSale.CurrencyCodeEnum,
        "SaleObjectSale.CardReadModeEnum": SaleObjectSale.CardReadModeEnum,
        "SaleObjectSaleCustomer.IdentificationTypeEnum": SaleObjectSaleCustomer.IdentificationTypeEnum,
        "SaleObjectSaleCustomer.DocumentTypeEnum": SaleObjectSaleCustomer.DocumentTypeEnum,
        "SaleObjectSalePayer.IdentificationTypeEnum": SaleObjectSalePayer.IdentificationTypeEnum,
        "SaleObjectSalePayer.DocumentTypeEnum": SaleObjectSalePayer.DocumentTypeEnum,
        "SaleObjectSaleRequiredInformation.TypeEnum": SaleObjectSaleRequiredInformation.TypeEnum,
        "SaleObjectSaleRequiredInformation.InterpretForEnum": SaleObjectSaleRequiredInformation.InterpretForEnum,
        "SaleObjectSaleRequiredInformation.ItIsDefinedEnum": SaleObjectSaleRequiredInformation.ItIsDefinedEnum,
        "SaleObjectSaleRequiredInformation.ValidationExpressionTypeEnum": SaleObjectSaleRequiredInformation.ValidationExpressionTypeEnum,
        "SaleObjectSaleRequiredInformation.MandatoryEnum": SaleObjectSaleRequiredInformation.MandatoryEnum,
        "SaleObjectSaleSeller.IdentificationTypeEnum": SaleObjectSaleSeller.IdentificationTypeEnum,
        "SaleObjectSaleSeller.DocumentTypeEnum": SaleObjectSaleSeller.DocumentTypeEnum,
        "SaleResponseObjectSaleResponse.ResponseActionsEnum": SaleResponseObjectSaleResponse.ResponseActionsEnum,
        "SaleResponseObjectSaleResponse.WasReversePreviousEnum": SaleResponseObjectSaleResponse.WasReversePreviousEnum,
        "SaleResponseObjectSaleResponse.CurrencyCodeEnum": SaleResponseObjectSaleResponse.CurrencyCodeEnum,
        "SaleResponseObjectSaleResponse.CardReadModeEnum": SaleResponseObjectSaleResponse.CardReadModeEnum,
        "SaleResponseObjectSaleResponse.CardReadModeDescriptionEnum": SaleResponseObjectSaleResponse.CardReadModeDescriptionEnum,
        "SaleResponseObjectSaleResponseAdditionalInformation.TypeEnum": SaleResponseObjectSaleResponseAdditionalInformation.TypeEnum,
        "SaleResponseObjectSaleResponseAdditionalInformation.InterpretForEnum": SaleResponseObjectSaleResponseAdditionalInformation.InterpretForEnum,
        "SaleResponseObjectSaleResponseLayout.AttributeEnum": SaleResponseObjectSaleResponseLayout.AttributeEnum,
        "SaleResponseObjectSaleResponseLayout.ContentTypeEnum": SaleResponseObjectSaleResponseLayout.ContentTypeEnum,
        "SaleResponseObjectSaleResponseLayout.EncodeTypeEnum": SaleResponseObjectSaleResponseLayout.EncodeTypeEnum,
        "SaleResponseObjectSaleResponsePlans.CurrencyCodeEnum": SaleResponseObjectSaleResponsePlans.CurrencyCodeEnum,
        "SaleResponseObjectSaleResponsePlans.POSOrDeviceActionsEnum": SaleResponseObjectSaleResponsePlans.POSOrDeviceActionsEnum,
        "SaleResponseObjectSaleResponseRequiredInformation.TypeEnum": SaleResponseObjectSaleResponseRequiredInformation.TypeEnum,
        "SaleResponseObjectSaleResponseRequiredInformation.InterpretForEnum": SaleResponseObjectSaleResponseRequiredInformation.InterpretForEnum,
        "SaleResponseObjectSaleResponseRequiredInformation.ItIsDefinedEnum": SaleResponseObjectSaleResponseRequiredInformation.ItIsDefinedEnum,
        "SaleResponseObjectSaleResponseRequiredInformation.ValidationExpressionTypeEnum": SaleResponseObjectSaleResponseRequiredInformation.ValidationExpressionTypeEnum,
        "SaleResponseObjectSaleResponseRequiredInformation.MandatoryEnum": SaleResponseObjectSaleResponseRequiredInformation.MandatoryEnum,
        "SaleResponseObjectSaleResponseTickets.TypeEnum": SaleResponseObjectSaleResponseTickets.TypeEnum,
        "SaleResponseObjectSaleResponseTickets.ActionEnum": SaleResponseObjectSaleResponseTickets.ActionEnum,
        "SaleResponseObjectSaleResponseTickets.DeviceActionEnum": SaleResponseObjectSaleResponseTickets.DeviceActionEnum,
        "SaleResponseObjectSaleResponseTickets.ExecutedActionEnum": SaleResponseObjectSaleResponseTickets.ExecutedActionEnum,
        "SettlementObjectSettlement.ReverseReasonEnum": SettlementObjectSettlement.ReverseReasonEnum,
        "SettlementObjectSettlement.ReasonSequenceBreakEnum": SettlementObjectSettlement.ReasonSequenceBreakEnum,
        "SettlementObjectSettlement.CardReadModeEnum": SettlementObjectSettlement.CardReadModeEnum,
        "ValidateObjectValidate.ReasonSequenceBreakEnum": ValidateObjectValidate.ReasonSequenceBreakEnum,
        "ValidateObjectValidate.CardReadModeEnum": ValidateObjectValidate.CardReadModeEnum,
        "ValidateResponseObjectValidateResponse.ResponseActionsEnum": ValidateResponseObjectValidateResponse.ResponseActionsEnum,
        "ValidateResponseObjectValidateResponse.WasReversePreviousEnum": ValidateResponseObjectValidateResponse.WasReversePreviousEnum,
        "ValidateResponseObjectValidateResponse.CurrencyCodeEnum": ValidateResponseObjectValidateResponse.CurrencyCodeEnum,
        "ValidateResponseObjectValidateResponse.CardReadModeEnum": ValidateResponseObjectValidateResponse.CardReadModeEnum,
        "ValidateResponseObjectValidateResponse.CardReadModeDescriptionEnum": ValidateResponseObjectValidateResponse.CardReadModeDescriptionEnum,
        "VoidDebtPaymentObjectVoidDebtPayment.ReverseReasonEnum": VoidDebtPaymentObjectVoidDebtPayment.ReverseReasonEnum,
        "VoidDebtPaymentObjectVoidDebtPayment.ReasonSequenceBreakEnum": VoidDebtPaymentObjectVoidDebtPayment.ReasonSequenceBreakEnum,
        "VoidDebtPaymentObjectVoidDebtPayment.CardReadModeEnum": VoidDebtPaymentObjectVoidDebtPayment.CardReadModeEnum,
        "VoidObjectVoid.ReverseReasonEnum": VoidObjectVoid.ReverseReasonEnum,
        "VoidObjectVoid.ReasonSequenceBreakEnum": VoidObjectVoid.ReasonSequenceBreakEnum,
        "VoidObjectVoid.CurrencyCodeEnum": VoidObjectVoid.CurrencyCodeEnum,
        "VoidObjectVoid.CardReadModeEnum": VoidObjectVoid.CardReadModeEnum,
        "VoidResponseObjectVoidResponse.ResponseActionsEnum": VoidResponseObjectVoidResponse.ResponseActionsEnum,
        "VoidResponseObjectVoidResponse.WasReversePreviousEnum": VoidResponseObjectVoidResponse.WasReversePreviousEnum,
        "VoidResponseObjectVoidResponse.CurrencyCodeEnum": VoidResponseObjectVoidResponse.CurrencyCodeEnum,
        "VoidResponseObjectVoidResponse.CardReadModeEnum": VoidResponseObjectVoidResponse.CardReadModeEnum,
        "VoidResponseObjectVoidResponse.CardReadModeDescriptionEnum": VoidResponseObjectVoidResponse.CardReadModeDescriptionEnum,
        "WalletRequestObjectWalletRequest.CurrencyCodeEnum": WalletRequestObjectWalletRequest.CurrencyCodeEnum,
        "WalletRequestResponseObjectWalletRequestResponse.ResponseActionsEnum": WalletRequestResponseObjectWalletRequestResponse.ResponseActionsEnum,
        "WalletRequestResponseObjectWalletRequestResponse.WasReversePreviousEnum": WalletRequestResponseObjectWalletRequestResponse.WasReversePreviousEnum,
        "WalletRequestResponseObjectWalletRequestResponse.WasClosedPreviousBlockEnum": WalletRequestResponseObjectWalletRequestResponse.WasClosedPreviousBlockEnum,
        "WalletRequestResponseObjectWalletRequestResponse.WalletRequestTokenTypeEnum": WalletRequestResponseObjectWalletRequestResponse.WalletRequestTokenTypeEnum,
        "WalletsResponseObjectWalletsResponse.ResponseActionsEnum": WalletsResponseObjectWalletsResponse.ResponseActionsEnum,
        "WalletsResponseObjectWalletsResponse.WasReversePreviousEnum": WalletsResponseObjectWalletsResponse.WasReversePreviousEnum,
        "WalletsResponseObjectWalletsResponse.WasClosedPreviousBlockEnum": WalletsResponseObjectWalletsResponse.WasClosedPreviousBlockEnum,
        "WalletsResponseObjectWalletsResponseWallets.TokenTypeEnum": WalletsResponseObjectWalletsResponseWallets.TokenTypeEnum,
}

let typeMap: {[index: string]: any} = {
    "AuthorizeSaleObject": AuthorizeSaleObject,
    "AuthorizeSaleObjectAuthorizeSale": AuthorizeSaleObjectAuthorizeSale,
    "AuthorizeSaleResponseObject": AuthorizeSaleResponseObject,
    "BalanceInquiryObject": BalanceInquiryObject,
    "BalanceInquiryObjectBalanceInquiry": BalanceInquiryObjectBalanceInquiry,
    "BalanceInquiryResponseObject": BalanceInquiryResponseObject,
    "BlockCancelObject": BlockCancelObject,
    "BlockCancelObjectBlockCancel": BlockCancelObjectBlockCancel,
    "BlockCancelResponseObject": BlockCancelResponseObject,
    "BlockCancelResponseObjectBlockCancelResponse": BlockCancelResponseObjectBlockCancelResponse,
    "BlockCloseObject": BlockCloseObject,
    "BlockCloseObjectBlockClose": BlockCloseObjectBlockClose,
    "BlockCloseResponseObject": BlockCloseResponseObject,
    "BlockCloseResponseObjectBlockCloseResponse": BlockCloseResponseObjectBlockCloseResponse,
    "BlockCreateObject": BlockCreateObject,
    "BlockCreateObjectBlockCreate": BlockCreateObjectBlockCreate,
    "BlockCreateResponseObject": BlockCreateResponseObject,
    "BlockCreateResponseObjectBlockCreateResponse": BlockCreateResponseObjectBlockCreateResponse,
    "CancelObject": CancelObject,
    "CancelObjectCancel": CancelObjectCancel,
    "CancelResponseObject": CancelResponseObject,
    "CancelResponseObjectCancelResponse": CancelResponseObjectCancelResponse,
    "CaptureObject": CaptureObject,
    "CaptureObjectCapture": CaptureObjectCapture,
    "CaptureResponseObject": CaptureResponseObject,
    "CloseObject": CloseObject,
    "CloseObjectClose": CloseObjectClose,
    "CloseResponseObject": CloseResponseObject,
    "CloseResponseObjectCloseResponse": CloseResponseObjectCloseResponse,
    "ConfigureObject": ConfigureObject,
    "ConfigureObjectConfigure": ConfigureObjectConfigure,
    "ConfigureObjectConfigureFiles": ConfigureObjectConfigureFiles,
    "ConfigureObjectConfigureOperations": ConfigureObjectConfigureOperations,
    "ConfigureObjectConfigureTables": ConfigureObjectConfigureTables,
    "ConfigureResponseObject": ConfigureResponseObject,
    "ConfigureResponseObjectConfigureResponse": ConfigureResponseObjectConfigureResponse,
    "ConfirmObject": ConfirmObject,
    "ConfirmObjectConfirm": ConfirmObjectConfirm,
    "ConfirmResponseObject": ConfirmResponseObject,
    "ConfirmResponseObjectConfirmResponse": ConfirmResponseObjectConfirmResponse,
    "DebtInquiryObject": DebtInquiryObject,
    "DebtInquiryObjectDebtInquiry": DebtInquiryObjectDebtInquiry,
    "DebtInquiryResponseObject": DebtInquiryResponseObject,
    "DebtInquiryResponseObjectDebtInquiryResponse": DebtInquiryResponseObjectDebtInquiryResponse,
    "DebtInquiryResponseObjectDebtInquiryResponseAccountSummary": DebtInquiryResponseObjectDebtInquiryResponseAccountSummary,
    "DebtInquiryResponseObjectDebtInquiryResponseAccountSummaryAccountStatus": DebtInquiryResponseObjectDebtInquiryResponseAccountSummaryAccountStatus,
    "DebtInquiryResponseObjectDebtInquiryResponseCompanies": DebtInquiryResponseObjectDebtInquiryResponseCompanies,
    "DebtPaymentObject": DebtPaymentObject,
    "DebtPaymentObjectDebtPayment": DebtPaymentObjectDebtPayment,
    "DebtPaymentObjectDebtPaymentRequiredInformation": DebtPaymentObjectDebtPaymentRequiredInformation,
    "DebtPaymentResponseObject": DebtPaymentResponseObject,
    "DebtPaymentResponseObjectDebtPaymentResponse": DebtPaymentResponseObjectDebtPaymentResponse,
    "DepositObject": DepositObject,
    "DepositObjectDeposit": DepositObjectDeposit,
    "DepositResponseObject": DepositResponseObject,
    "DepositResponseObjectDepositResponse": DepositResponseObjectDepositResponse,
    "EnableServiceObject": EnableServiceObject,
    "EnableServiceObjectEnableService": EnableServiceObjectEnableService,
    "EnableServiceResponseObject": EnableServiceResponseObject,
    "EnableServiceResponseObjectEnableServiceResponse": EnableServiceResponseObjectEnableServiceResponse,
    "EnrollmentObject": EnrollmentObject,
    "EnrollmentObjectEnrollment": EnrollmentObjectEnrollment,
    "EnrollmentObjectEnrollmentRecurrence": EnrollmentObjectEnrollmentRecurrence,
    "EnrollmentResponseObject": EnrollmentResponseObject,
    "EnrollmentResponseObjectEnrollmentResponse": EnrollmentResponseObjectEnrollmentResponse,
    "GetBlockObject": GetBlockObject,
    "GetBlockObjectGetBlock": GetBlockObjectGetBlock,
    "GetBlockObjectGetBlockTransactionsRequired": GetBlockObjectGetBlockTransactionsRequired,
    "GetBlockResponseObject": GetBlockResponseObject,
    "GetBlockResponseObjectGetBlockResponse": GetBlockResponseObjectGetBlockResponse,
    "GetCardObject": GetCardObject,
    "GetCardObjectGetCard": GetCardObjectGetCard,
    "GetCardResponseObject": GetCardResponseObject,
    "GetCardResponseObjectGetCardResponse": GetCardResponseObjectGetCardResponse,
    "GetTransactionObject": GetTransactionObject,
    "GetTransactionObjectGetTransaction": GetTransactionObjectGetTransaction,
    "GetTransactionResponseObject": GetTransactionResponseObject,
    "GetTransactionResponseObjectGetTransactionResponse": GetTransactionResponseObjectGetTransactionResponse,
    "GetTransactionResponseObjectGetTransactionResponsePayer": GetTransactionResponseObjectGetTransactionResponsePayer,
    "GetTransactionResponseObjectGetTransactionResponseTransaction": GetTransactionResponseObjectGetTransactionResponseTransaction,
    "KeepAliveObject": KeepAliveObject,
    "KeepAliveResponseObject": KeepAliveResponseObject,
    "KeepAliveResponseObjectKeepAliveResponse": KeepAliveResponseObjectKeepAliveResponse,
    "KeysRenewalObject": KeysRenewalObject,
    "KeysRenewalObjectKeysRenewal": KeysRenewalObjectKeysRenewal,
    "KeysRenewalResponseObject": KeysRenewalResponseObject,
    "KeysRenewalResponseObjectKeysRenewalResponse": KeysRenewalResponseObjectKeysRenewalResponse,
    "OrderFinalObject": OrderFinalObject,
    "OrderFinalObjectOrderFinal": OrderFinalObjectOrderFinal,
    "OrderFinalResponseObject": OrderFinalResponseObject,
    "OrderFinalResponseObjectOrderFinalResponse": OrderFinalResponseObjectOrderFinalResponse,
    "OrderGetObject": OrderGetObject,
    "OrderGetObjectOrderGet": OrderGetObjectOrderGet,
    "OrderGetResponseObject": OrderGetResponseObject,
    "OrderGetResponseObjectOrderGetResponse": OrderGetResponseObjectOrderGetResponse,
    "OrderInitialObject": OrderInitialObject,
    "OrderInitialObjectOrderInitial": OrderInitialObjectOrderInitial,
    "OrderInitialResponseObject": OrderInitialResponseObject,
    "OrderInitialResponseObjectOrderInitialResponse": OrderInitialResponseObjectOrderInitialResponse,
    "OrderStatusObject": OrderStatusObject,
    "OrderStatusObjectOrderStatus": OrderStatusObjectOrderStatus,
    "OrderStatusResponseObject": OrderStatusResponseObject,
    "OrderStatusResponseObjectOrderStatusResponse": OrderStatusResponseObjectOrderStatusResponse,
    "PaymentMethodObject": PaymentMethodObject,
    "PaymentMethodObjectPaymentMethod": PaymentMethodObjectPaymentMethod,
    "PaymentMethodResponseObject": PaymentMethodResponseObject,
    "PaymentMethodResponseObjectPaymentMethodResponse": PaymentMethodResponseObjectPaymentMethodResponse,
    "PaymentMethodResponseObjectPaymentMethodResponseConfiguration": PaymentMethodResponseObjectPaymentMethodResponseConfiguration,
    "PaymentMethodResponseObjectPaymentMethodResponseConfigurationCompany": PaymentMethodResponseObjectPaymentMethodResponseConfigurationCompany,
    "PaymentMethodsObject": PaymentMethodsObject,
    "PaymentMethodsObjectPaymentMethods": PaymentMethodsObjectPaymentMethods,
    "PaymentMethodsResponseObject": PaymentMethodsResponseObject,
    "PaymentMethodsResponseObjectPaymentMethodsResponse": PaymentMethodsResponseObjectPaymentMethodsResponse,
    "PaymentMethodsResponseObjectPaymentMethodsResponseCategory": PaymentMethodsResponseObjectPaymentMethodsResponseCategory,
    "PaymentMethodsResponseObjectPaymentMethodsResponsePaymentMethods": PaymentMethodsResponseObjectPaymentMethodsResponsePaymentMethods,
    "PaymentMethodsResponseObjectPaymentMethodsResponseType": PaymentMethodsResponseObjectPaymentMethodsResponseType,
    "QueryCompaniesObject": QueryCompaniesObject,
    "QueryCompaniesObjectQueryCompanies": QueryCompaniesObjectQueryCompanies,
    "QueryCompaniesResponseObject": QueryCompaniesResponseObject,
    "QueryCompaniesResponseObjectQueryCompaniesResponse": QueryCompaniesResponseObjectQueryCompaniesResponse,
    "QueryCompaniesResponseObjectQueryCompaniesResponseAdditionalInformation": QueryCompaniesResponseObjectQueryCompaniesResponseAdditionalInformation,
    "QueryCompaniesResponseObjectQueryCompaniesResponseCompanies": QueryCompaniesResponseObjectQueryCompaniesResponseCompanies,
    "QueryLineOfBusinessObject": QueryLineOfBusinessObject,
    "QueryLineOfBusinessObjectQueryLineOfBusiness": QueryLineOfBusinessObjectQueryLineOfBusiness,
    "QueryLineOfBusinessResponseObject": QueryLineOfBusinessResponseObject,
    "QueryLineOfBusinessResponseObjectQueryLineOfBusinessResponse": QueryLineOfBusinessResponseObjectQueryLineOfBusinessResponse,
    "QueryLineOfBusinessResponseObjectQueryLineOfBusinessResponseLineOfBusiness": QueryLineOfBusinessResponseObjectQueryLineOfBusinessResponseLineOfBusiness,
    "ReturnObject": ReturnObject,
    "ReturnObjectReturn": ReturnObjectReturn,
    "ReturnResponseObject": ReturnResponseObject,
    "SaleObject": SaleObject,
    "SaleObjectSale": SaleObjectSale,
    "SaleObjectSaleCustomer": SaleObjectSaleCustomer,
    "SaleObjectSaleInputTokens": SaleObjectSaleInputTokens,
    "SaleObjectSalePayer": SaleObjectSalePayer,
    "SaleObjectSaleProducts": SaleObjectSaleProducts,
    "SaleObjectSaleRequiredInformation": SaleObjectSaleRequiredInformation,
    "SaleObjectSaleSecurity": SaleObjectSaleSecurity,
    "SaleObjectSaleSeller": SaleObjectSaleSeller,
    "SaleObjectSaleValues": SaleObjectSaleValues,
    "SaleResponseObject": SaleResponseObject,
    "SaleResponseObjectSaleResponse": SaleResponseObjectSaleResponse,
    "SaleResponseObjectSaleResponseAdditionalInformation": SaleResponseObjectSaleResponseAdditionalInformation,
    "SaleResponseObjectSaleResponseCardCategory": SaleResponseObjectSaleResponseCardCategory,
    "SaleResponseObjectSaleResponseConfiguration": SaleResponseObjectSaleResponseConfiguration,
    "SaleResponseObjectSaleResponseConfigurationBranch": SaleResponseObjectSaleResponseConfigurationBranch,
    "SaleResponseObjectSaleResponseConfigurationCompany": SaleResponseObjectSaleResponseConfigurationCompany,
    "SaleResponseObjectSaleResponseLayout": SaleResponseObjectSaleResponseLayout,
    "SaleResponseObjectSaleResponseMerchantCategory": SaleResponseObjectSaleResponseMerchantCategory,
    "SaleResponseObjectSaleResponseNotification": SaleResponseObjectSaleResponseNotification,
    "SaleResponseObjectSaleResponseNotificationControlUseRule": SaleResponseObjectSaleResponseNotificationControlUseRule,
    "SaleResponseObjectSaleResponseNotificationDistributionList": SaleResponseObjectSaleResponseNotificationDistributionList,
    "SaleResponseObjectSaleResponsePaymentMethod": SaleResponseObjectSaleResponsePaymentMethod,
    "SaleResponseObjectSaleResponsePaymentMethodCategory": SaleResponseObjectSaleResponsePaymentMethodCategory,
    "SaleResponseObjectSaleResponsePaymentMethodDebitAccount": SaleResponseObjectSaleResponsePaymentMethodDebitAccount,
    "SaleResponseObjectSaleResponsePaymentMethodIssuers": SaleResponseObjectSaleResponsePaymentMethodIssuers,
    "SaleResponseObjectSaleResponsePaymentMethodType": SaleResponseObjectSaleResponsePaymentMethodType,
    "SaleResponseObjectSaleResponsePlans": SaleResponseObjectSaleResponsePlans,
    "SaleResponseObjectSaleResponsePlansCashback": SaleResponseObjectSaleResponsePlansCashback,
    "SaleResponseObjectSaleResponsePlansDeferral": SaleResponseObjectSaleResponsePlansDeferral,
    "SaleResponseObjectSaleResponseProducts": SaleResponseObjectSaleResponseProducts,
    "SaleResponseObjectSaleResponseRequiredInformation": SaleResponseObjectSaleResponseRequiredInformation,
    "SaleResponseObjectSaleResponseTickets": SaleResponseObjectSaleResponseTickets,
    "SaleResponseObjectSaleResponseWorkingKeys": SaleResponseObjectSaleResponseWorkingKeys,
    "SettlementObject": SettlementObject,
    "SettlementObjectSettlement": SettlementObjectSettlement,
    "SettlementResponseObject": SettlementResponseObject,
    "ValidateObject": ValidateObject,
    "ValidateObjectValidate": ValidateObjectValidate,
    "ValidateResponseObject": ValidateResponseObject,
    "ValidateResponseObjectValidateResponse": ValidateResponseObjectValidateResponse,
    "VoidDebtPaymentObject": VoidDebtPaymentObject,
    "VoidDebtPaymentObjectVoidDebtPayment": VoidDebtPaymentObjectVoidDebtPayment,
    "VoidDebtPaymentObjectVoidDebtPaymentProducts": VoidDebtPaymentObjectVoidDebtPaymentProducts,
    "VoidDebtPaymentResponseObject": VoidDebtPaymentResponseObject,
    "VoidObject": VoidObject,
    "VoidObjectVoid": VoidObjectVoid,
    "VoidResponseObject": VoidResponseObject,
    "VoidResponseObjectVoidResponse": VoidResponseObjectVoidResponse,
    "WalletRequestObject": WalletRequestObject,
    "WalletRequestObjectWalletRequest": WalletRequestObjectWalletRequest,
    "WalletRequestResponseObject": WalletRequestResponseObject,
    "WalletRequestResponseObjectWalletRequestResponse": WalletRequestResponseObjectWalletRequestResponse,
    "WalletsObject": WalletsObject,
    "WalletsObjectWallets": WalletsObjectWallets,
    "WalletsResponseObject": WalletsResponseObject,
    "WalletsResponseObjectWalletsResponse": WalletsResponseObjectWalletsResponse,
    "WalletsResponseObjectWalletsResponseWallets": WalletsResponseObjectWalletsResponseWallets,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
