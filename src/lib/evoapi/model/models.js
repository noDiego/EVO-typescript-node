"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
exports.__esModule = true;
exports.VoidAuth = exports.OAuth = exports.ApiKeyAuth = exports.HttpBearerAuth = exports.HttpBasicAuth = exports.ObjectSerializer = void 0;
__exportStar(require("./authorizeSaleObject"), exports);
__exportStar(require("./authorizeSaleObjectAuthorizeSale"), exports);
__exportStar(require("./authorizeSaleResponseObject"), exports);
__exportStar(require("./balanceInquiryObject"), exports);
__exportStar(require("./balanceInquiryObjectBalanceInquiry"), exports);
__exportStar(require("./balanceInquiryResponseObject"), exports);
__exportStar(require("./blockCancelObject"), exports);
__exportStar(require("./blockCancelObjectBlockCancel"), exports);
__exportStar(require("./blockCancelResponseObject"), exports);
__exportStar(require("./blockCancelResponseObjectBlockCancelResponse"), exports);
__exportStar(require("./blockCloseObject"), exports);
__exportStar(require("./blockCloseObjectBlockClose"), exports);
__exportStar(require("./blockCloseResponseObject"), exports);
__exportStar(require("./blockCloseResponseObjectBlockCloseResponse"), exports);
__exportStar(require("./blockCreateObject"), exports);
__exportStar(require("./blockCreateObjectBlockCreate"), exports);
__exportStar(require("./blockCreateResponseObject"), exports);
__exportStar(require("./blockCreateResponseObjectBlockCreateResponse"), exports);
__exportStar(require("./cancelObject"), exports);
__exportStar(require("./cancelObjectCancel"), exports);
__exportStar(require("./cancelResponseObject"), exports);
__exportStar(require("./cancelResponseObjectCancelResponse"), exports);
__exportStar(require("./captureObject"), exports);
__exportStar(require("./captureObjectCapture"), exports);
__exportStar(require("./captureResponseObject"), exports);
__exportStar(require("./closeObject"), exports);
__exportStar(require("./closeObjectClose"), exports);
__exportStar(require("./closeResponseObject"), exports);
__exportStar(require("./closeResponseObjectCloseResponse"), exports);
__exportStar(require("./configureObject"), exports);
__exportStar(require("./configureObjectConfigure"), exports);
__exportStar(require("./configureObjectConfigureFiles"), exports);
__exportStar(require("./configureObjectConfigureOperations"), exports);
__exportStar(require("./configureObjectConfigureTables"), exports);
__exportStar(require("./configureResponseObject"), exports);
__exportStar(require("./configureResponseObjectConfigureResponse"), exports);
__exportStar(require("./confirmObject"), exports);
__exportStar(require("./confirmObjectConfirm"), exports);
__exportStar(require("./confirmResponseObject"), exports);
__exportStar(require("./confirmResponseObjectConfirmResponse"), exports);
__exportStar(require("./debtInquiryObject"), exports);
__exportStar(require("./debtInquiryObjectDebtInquiry"), exports);
__exportStar(require("./debtInquiryResponseObject"), exports);
__exportStar(require("./debtInquiryResponseObjectDebtInquiryResponse"), exports);
__exportStar(require("./debtInquiryResponseObjectDebtInquiryResponseAccountSummary"), exports);
__exportStar(require("./debtInquiryResponseObjectDebtInquiryResponseAccountSummaryAccountStatus"), exports);
__exportStar(require("./debtInquiryResponseObjectDebtInquiryResponseCompanies"), exports);
__exportStar(require("./debtPaymentObject"), exports);
__exportStar(require("./debtPaymentObjectDebtPayment"), exports);
__exportStar(require("./debtPaymentObjectDebtPaymentRequiredInformation"), exports);
__exportStar(require("./debtPaymentResponseObject"), exports);
__exportStar(require("./debtPaymentResponseObjectDebtPaymentResponse"), exports);
__exportStar(require("./depositObject"), exports);
__exportStar(require("./depositObjectDeposit"), exports);
__exportStar(require("./depositResponseObject"), exports);
__exportStar(require("./depositResponseObjectDepositResponse"), exports);
__exportStar(require("./enableServiceObject"), exports);
__exportStar(require("./enableServiceObjectEnableService"), exports);
__exportStar(require("./enableServiceResponseObject"), exports);
__exportStar(require("./enableServiceResponseObjectEnableServiceResponse"), exports);
__exportStar(require("./enrollmentObject"), exports);
__exportStar(require("./enrollmentObjectEnrollment"), exports);
__exportStar(require("./enrollmentObjectEnrollmentRecurrence"), exports);
__exportStar(require("./enrollmentResponseObject"), exports);
__exportStar(require("./enrollmentResponseObjectEnrollmentResponse"), exports);
__exportStar(require("./getBlockObject"), exports);
__exportStar(require("./getBlockObjectGetBlock"), exports);
__exportStar(require("./getBlockObjectGetBlockTransactionsRequired"), exports);
__exportStar(require("./getBlockResponseObject"), exports);
__exportStar(require("./getBlockResponseObjectGetBlockResponse"), exports);
__exportStar(require("./getCardObject"), exports);
__exportStar(require("./getCardObjectGetCard"), exports);
__exportStar(require("./getCardResponseObject"), exports);
__exportStar(require("./getCardResponseObjectGetCardResponse"), exports);
__exportStar(require("./getTransactionObject"), exports);
__exportStar(require("./getTransactionObjectGetTransaction"), exports);
__exportStar(require("./getTransactionResponseObject"), exports);
__exportStar(require("./getTransactionResponseObjectGetTransactionResponse"), exports);
__exportStar(require("./getTransactionResponseObjectGetTransactionResponsePayer"), exports);
__exportStar(require("./getTransactionResponseObjectGetTransactionResponseTransaction"), exports);
__exportStar(require("./keepAliveObject"), exports);
__exportStar(require("./keepAliveResponseObject"), exports);
__exportStar(require("./keepAliveResponseObjectKeepAliveResponse"), exports);
__exportStar(require("./keysRenewalObject"), exports);
__exportStar(require("./keysRenewalObjectKeysRenewal"), exports);
__exportStar(require("./keysRenewalResponseObject"), exports);
__exportStar(require("./keysRenewalResponseObjectKeysRenewalResponse"), exports);
__exportStar(require("./orderFinalObject"), exports);
__exportStar(require("./orderFinalObjectOrderFinal"), exports);
__exportStar(require("./orderFinalResponseObject"), exports);
__exportStar(require("./orderFinalResponseObjectOrderFinalResponse"), exports);
__exportStar(require("./orderGetObject"), exports);
__exportStar(require("./orderGetObjectOrderGet"), exports);
__exportStar(require("./orderGetResponseObject"), exports);
__exportStar(require("./orderGetResponseObjectOrderGetResponse"), exports);
__exportStar(require("./orderInitialObject"), exports);
__exportStar(require("./orderInitialObjectOrderInitial"), exports);
__exportStar(require("./orderInitialResponseObject"), exports);
__exportStar(require("./orderInitialResponseObjectOrderInitialResponse"), exports);
__exportStar(require("./orderStatusObject"), exports);
__exportStar(require("./orderStatusObjectOrderStatus"), exports);
__exportStar(require("./orderStatusResponseObject"), exports);
__exportStar(require("./orderStatusResponseObjectOrderStatusResponse"), exports);
__exportStar(require("./paymentMethodObject"), exports);
__exportStar(require("./paymentMethodObjectPaymentMethod"), exports);
__exportStar(require("./paymentMethodResponseObject"), exports);
__exportStar(require("./paymentMethodResponseObjectPaymentMethodResponse"), exports);
__exportStar(require("./paymentMethodResponseObjectPaymentMethodResponseConfiguration"), exports);
__exportStar(require("./paymentMethodResponseObjectPaymentMethodResponseConfigurationCompany"), exports);
__exportStar(require("./paymentMethodsObject"), exports);
__exportStar(require("./paymentMethodsObjectPaymentMethods"), exports);
__exportStar(require("./paymentMethodsResponseObject"), exports);
__exportStar(require("./paymentMethodsResponseObjectPaymentMethodsResponse"), exports);
__exportStar(require("./paymentMethodsResponseObjectPaymentMethodsResponseCategory"), exports);
__exportStar(require("./paymentMethodsResponseObjectPaymentMethodsResponsePaymentMethods"), exports);
__exportStar(require("./paymentMethodsResponseObjectPaymentMethodsResponseType"), exports);
__exportStar(require("./queryCompaniesObject"), exports);
__exportStar(require("./queryCompaniesObjectQueryCompanies"), exports);
__exportStar(require("./queryCompaniesResponseObject"), exports);
__exportStar(require("./queryCompaniesResponseObjectQueryCompaniesResponse"), exports);
__exportStar(require("./queryCompaniesResponseObjectQueryCompaniesResponseAdditionalInformation"), exports);
__exportStar(require("./queryCompaniesResponseObjectQueryCompaniesResponseCompanies"), exports);
__exportStar(require("./queryLineOfBusinessObject"), exports);
__exportStar(require("./queryLineOfBusinessObjectQueryLineOfBusiness"), exports);
__exportStar(require("./queryLineOfBusinessResponseObject"), exports);
__exportStar(require("./queryLineOfBusinessResponseObjectQueryLineOfBusinessResponse"), exports);
__exportStar(require("./queryLineOfBusinessResponseObjectQueryLineOfBusinessResponseLineOfBusiness"), exports);
__exportStar(require("./returnObject"), exports);
__exportStar(require("./returnObjectReturn"), exports);
__exportStar(require("./returnResponseObject"), exports);
__exportStar(require("./saleObject"), exports);
__exportStar(require("./saleObjectSale"), exports);
__exportStar(require("./saleObjectSaleCustomer"), exports);
__exportStar(require("./saleObjectSaleInputTokens"), exports);
__exportStar(require("./saleObjectSalePayer"), exports);
__exportStar(require("./saleObjectSaleProducts"), exports);
__exportStar(require("./saleObjectSaleRequiredInformation"), exports);
__exportStar(require("./saleObjectSaleSecurity"), exports);
__exportStar(require("./saleObjectSaleSeller"), exports);
__exportStar(require("./saleObjectSaleValues"), exports);
__exportStar(require("./saleResponseObject"), exports);
__exportStar(require("./saleResponseObjectSaleResponse"), exports);
__exportStar(require("./saleResponseObjectSaleResponseAdditionalInformation"), exports);
__exportStar(require("./saleResponseObjectSaleResponseCardCategory"), exports);
__exportStar(require("./saleResponseObjectSaleResponseConfiguration"), exports);
__exportStar(require("./saleResponseObjectSaleResponseConfigurationBranch"), exports);
__exportStar(require("./saleResponseObjectSaleResponseConfigurationCompany"), exports);
__exportStar(require("./saleResponseObjectSaleResponseLayout"), exports);
__exportStar(require("./saleResponseObjectSaleResponseMerchantCategory"), exports);
__exportStar(require("./saleResponseObjectSaleResponseNotification"), exports);
__exportStar(require("./saleResponseObjectSaleResponseNotificationControlUseRule"), exports);
__exportStar(require("./saleResponseObjectSaleResponseNotificationDistributionList"), exports);
__exportStar(require("./saleResponseObjectSaleResponsePaymentMethod"), exports);
__exportStar(require("./saleResponseObjectSaleResponsePaymentMethodCategory"), exports);
__exportStar(require("./saleResponseObjectSaleResponsePaymentMethodDebitAccount"), exports);
__exportStar(require("./saleResponseObjectSaleResponsePaymentMethodIssuers"), exports);
__exportStar(require("./saleResponseObjectSaleResponsePaymentMethodType"), exports);
__exportStar(require("./saleResponseObjectSaleResponsePlans"), exports);
__exportStar(require("./saleResponseObjectSaleResponsePlansCashback"), exports);
__exportStar(require("./saleResponseObjectSaleResponsePlansDeferral"), exports);
__exportStar(require("./saleResponseObjectSaleResponseProducts"), exports);
__exportStar(require("./saleResponseObjectSaleResponseRequiredInformation"), exports);
__exportStar(require("./saleResponseObjectSaleResponseTickets"), exports);
__exportStar(require("./saleResponseObjectSaleResponseWorkingKeys"), exports);
__exportStar(require("./settlementObject"), exports);
__exportStar(require("./settlementObjectSettlement"), exports);
__exportStar(require("./settlementResponseObject"), exports);
__exportStar(require("./validateObject"), exports);
__exportStar(require("./validateObjectValidate"), exports);
__exportStar(require("./validateResponseObject"), exports);
__exportStar(require("./validateResponseObjectValidateResponse"), exports);
__exportStar(require("./voidDebtPaymentObject"), exports);
__exportStar(require("./voidDebtPaymentObjectVoidDebtPayment"), exports);
__exportStar(require("./voidDebtPaymentObjectVoidDebtPaymentProducts"), exports);
__exportStar(require("./voidDebtPaymentResponseObject"), exports);
__exportStar(require("./voidObject"), exports);
__exportStar(require("./voidObjectVoid"), exports);
__exportStar(require("./voidResponseObject"), exports);
__exportStar(require("./voidResponseObjectVoidResponse"), exports);
__exportStar(require("./walletRequestObject"), exports);
__exportStar(require("./walletRequestObjectWalletRequest"), exports);
__exportStar(require("./walletRequestResponseObject"), exports);
__exportStar(require("./walletRequestResponseObjectWalletRequestResponse"), exports);
__exportStar(require("./walletsObject"), exports);
__exportStar(require("./walletsObjectWallets"), exports);
__exportStar(require("./walletsResponseObject"), exports);
__exportStar(require("./walletsResponseObjectWalletsResponse"), exports);
__exportStar(require("./walletsResponseObjectWalletsResponseWallets"), exports);
var authorizeSaleObject_1 = require("./authorizeSaleObject");
var authorizeSaleObjectAuthorizeSale_1 = require("./authorizeSaleObjectAuthorizeSale");
var authorizeSaleResponseObject_1 = require("./authorizeSaleResponseObject");
var balanceInquiryObject_1 = require("./balanceInquiryObject");
var balanceInquiryObjectBalanceInquiry_1 = require("./balanceInquiryObjectBalanceInquiry");
var balanceInquiryResponseObject_1 = require("./balanceInquiryResponseObject");
var blockCancelObject_1 = require("./blockCancelObject");
var blockCancelObjectBlockCancel_1 = require("./blockCancelObjectBlockCancel");
var blockCancelResponseObject_1 = require("./blockCancelResponseObject");
var blockCancelResponseObjectBlockCancelResponse_1 = require("./blockCancelResponseObjectBlockCancelResponse");
var blockCloseObject_1 = require("./blockCloseObject");
var blockCloseObjectBlockClose_1 = require("./blockCloseObjectBlockClose");
var blockCloseResponseObject_1 = require("./blockCloseResponseObject");
var blockCloseResponseObjectBlockCloseResponse_1 = require("./blockCloseResponseObjectBlockCloseResponse");
var blockCreateObject_1 = require("./blockCreateObject");
var blockCreateObjectBlockCreate_1 = require("./blockCreateObjectBlockCreate");
var blockCreateResponseObject_1 = require("./blockCreateResponseObject");
var blockCreateResponseObjectBlockCreateResponse_1 = require("./blockCreateResponseObjectBlockCreateResponse");
var cancelObject_1 = require("./cancelObject");
var cancelObjectCancel_1 = require("./cancelObjectCancel");
var cancelResponseObject_1 = require("./cancelResponseObject");
var cancelResponseObjectCancelResponse_1 = require("./cancelResponseObjectCancelResponse");
var captureObject_1 = require("./captureObject");
var captureObjectCapture_1 = require("./captureObjectCapture");
var captureResponseObject_1 = require("./captureResponseObject");
var closeObject_1 = require("./closeObject");
var closeObjectClose_1 = require("./closeObjectClose");
var closeResponseObject_1 = require("./closeResponseObject");
var closeResponseObjectCloseResponse_1 = require("./closeResponseObjectCloseResponse");
var configureObject_1 = require("./configureObject");
var configureObjectConfigure_1 = require("./configureObjectConfigure");
var configureObjectConfigureFiles_1 = require("./configureObjectConfigureFiles");
var configureObjectConfigureOperations_1 = require("./configureObjectConfigureOperations");
var configureObjectConfigureTables_1 = require("./configureObjectConfigureTables");
var configureResponseObject_1 = require("./configureResponseObject");
var configureResponseObjectConfigureResponse_1 = require("./configureResponseObjectConfigureResponse");
var confirmObject_1 = require("./confirmObject");
var confirmObjectConfirm_1 = require("./confirmObjectConfirm");
var confirmResponseObject_1 = require("./confirmResponseObject");
var confirmResponseObjectConfirmResponse_1 = require("./confirmResponseObjectConfirmResponse");
var debtInquiryObject_1 = require("./debtInquiryObject");
var debtInquiryObjectDebtInquiry_1 = require("./debtInquiryObjectDebtInquiry");
var debtInquiryResponseObject_1 = require("./debtInquiryResponseObject");
var debtInquiryResponseObjectDebtInquiryResponse_1 = require("./debtInquiryResponseObjectDebtInquiryResponse");
var debtInquiryResponseObjectDebtInquiryResponseAccountSummary_1 = require("./debtInquiryResponseObjectDebtInquiryResponseAccountSummary");
var debtInquiryResponseObjectDebtInquiryResponseAccountSummaryAccountStatus_1 = require("./debtInquiryResponseObjectDebtInquiryResponseAccountSummaryAccountStatus");
var debtInquiryResponseObjectDebtInquiryResponseCompanies_1 = require("./debtInquiryResponseObjectDebtInquiryResponseCompanies");
var debtPaymentObject_1 = require("./debtPaymentObject");
var debtPaymentObjectDebtPayment_1 = require("./debtPaymentObjectDebtPayment");
var debtPaymentObjectDebtPaymentRequiredInformation_1 = require("./debtPaymentObjectDebtPaymentRequiredInformation");
var debtPaymentResponseObject_1 = require("./debtPaymentResponseObject");
var debtPaymentResponseObjectDebtPaymentResponse_1 = require("./debtPaymentResponseObjectDebtPaymentResponse");
var depositObject_1 = require("./depositObject");
var depositObjectDeposit_1 = require("./depositObjectDeposit");
var depositResponseObject_1 = require("./depositResponseObject");
var depositResponseObjectDepositResponse_1 = require("./depositResponseObjectDepositResponse");
var enableServiceObject_1 = require("./enableServiceObject");
var enableServiceObjectEnableService_1 = require("./enableServiceObjectEnableService");
var enableServiceResponseObject_1 = require("./enableServiceResponseObject");
var enableServiceResponseObjectEnableServiceResponse_1 = require("./enableServiceResponseObjectEnableServiceResponse");
var enrollmentObject_1 = require("./enrollmentObject");
var enrollmentObjectEnrollment_1 = require("./enrollmentObjectEnrollment");
var enrollmentObjectEnrollmentRecurrence_1 = require("./enrollmentObjectEnrollmentRecurrence");
var enrollmentResponseObject_1 = require("./enrollmentResponseObject");
var enrollmentResponseObjectEnrollmentResponse_1 = require("./enrollmentResponseObjectEnrollmentResponse");
var getBlockObject_1 = require("./getBlockObject");
var getBlockObjectGetBlock_1 = require("./getBlockObjectGetBlock");
var getBlockObjectGetBlockTransactionsRequired_1 = require("./getBlockObjectGetBlockTransactionsRequired");
var getBlockResponseObject_1 = require("./getBlockResponseObject");
var getBlockResponseObjectGetBlockResponse_1 = require("./getBlockResponseObjectGetBlockResponse");
var getCardObject_1 = require("./getCardObject");
var getCardObjectGetCard_1 = require("./getCardObjectGetCard");
var getCardResponseObject_1 = require("./getCardResponseObject");
var getCardResponseObjectGetCardResponse_1 = require("./getCardResponseObjectGetCardResponse");
var getTransactionObject_1 = require("./getTransactionObject");
var getTransactionObjectGetTransaction_1 = require("./getTransactionObjectGetTransaction");
var getTransactionResponseObject_1 = require("./getTransactionResponseObject");
var getTransactionResponseObjectGetTransactionResponse_1 = require("./getTransactionResponseObjectGetTransactionResponse");
var getTransactionResponseObjectGetTransactionResponsePayer_1 = require("./getTransactionResponseObjectGetTransactionResponsePayer");
var getTransactionResponseObjectGetTransactionResponseTransaction_1 = require("./getTransactionResponseObjectGetTransactionResponseTransaction");
var keepAliveObject_1 = require("./keepAliveObject");
var keepAliveResponseObject_1 = require("./keepAliveResponseObject");
var keepAliveResponseObjectKeepAliveResponse_1 = require("./keepAliveResponseObjectKeepAliveResponse");
var keysRenewalObject_1 = require("./keysRenewalObject");
var keysRenewalObjectKeysRenewal_1 = require("./keysRenewalObjectKeysRenewal");
var keysRenewalResponseObject_1 = require("./keysRenewalResponseObject");
var keysRenewalResponseObjectKeysRenewalResponse_1 = require("./keysRenewalResponseObjectKeysRenewalResponse");
var orderFinalObject_1 = require("./orderFinalObject");
var orderFinalObjectOrderFinal_1 = require("./orderFinalObjectOrderFinal");
var orderFinalResponseObject_1 = require("./orderFinalResponseObject");
var orderFinalResponseObjectOrderFinalResponse_1 = require("./orderFinalResponseObjectOrderFinalResponse");
var orderGetObject_1 = require("./orderGetObject");
var orderGetObjectOrderGet_1 = require("./orderGetObjectOrderGet");
var orderGetResponseObject_1 = require("./orderGetResponseObject");
var orderGetResponseObjectOrderGetResponse_1 = require("./orderGetResponseObjectOrderGetResponse");
var orderInitialObject_1 = require("./orderInitialObject");
var orderInitialObjectOrderInitial_1 = require("./orderInitialObjectOrderInitial");
var orderInitialResponseObject_1 = require("./orderInitialResponseObject");
var orderInitialResponseObjectOrderInitialResponse_1 = require("./orderInitialResponseObjectOrderInitialResponse");
var orderStatusObject_1 = require("./orderStatusObject");
var orderStatusObjectOrderStatus_1 = require("./orderStatusObjectOrderStatus");
var orderStatusResponseObject_1 = require("./orderStatusResponseObject");
var orderStatusResponseObjectOrderStatusResponse_1 = require("./orderStatusResponseObjectOrderStatusResponse");
var paymentMethodObject_1 = require("./paymentMethodObject");
var paymentMethodObjectPaymentMethod_1 = require("./paymentMethodObjectPaymentMethod");
var paymentMethodResponseObject_1 = require("./paymentMethodResponseObject");
var paymentMethodResponseObjectPaymentMethodResponse_1 = require("./paymentMethodResponseObjectPaymentMethodResponse");
var paymentMethodResponseObjectPaymentMethodResponseConfiguration_1 = require("./paymentMethodResponseObjectPaymentMethodResponseConfiguration");
var paymentMethodResponseObjectPaymentMethodResponseConfigurationCompany_1 = require("./paymentMethodResponseObjectPaymentMethodResponseConfigurationCompany");
var paymentMethodsObject_1 = require("./paymentMethodsObject");
var paymentMethodsObjectPaymentMethods_1 = require("./paymentMethodsObjectPaymentMethods");
var paymentMethodsResponseObject_1 = require("./paymentMethodsResponseObject");
var paymentMethodsResponseObjectPaymentMethodsResponse_1 = require("./paymentMethodsResponseObjectPaymentMethodsResponse");
var paymentMethodsResponseObjectPaymentMethodsResponseCategory_1 = require("./paymentMethodsResponseObjectPaymentMethodsResponseCategory");
var paymentMethodsResponseObjectPaymentMethodsResponsePaymentMethods_1 = require("./paymentMethodsResponseObjectPaymentMethodsResponsePaymentMethods");
var paymentMethodsResponseObjectPaymentMethodsResponseType_1 = require("./paymentMethodsResponseObjectPaymentMethodsResponseType");
var queryCompaniesObject_1 = require("./queryCompaniesObject");
var queryCompaniesObjectQueryCompanies_1 = require("./queryCompaniesObjectQueryCompanies");
var queryCompaniesResponseObject_1 = require("./queryCompaniesResponseObject");
var queryCompaniesResponseObjectQueryCompaniesResponse_1 = require("./queryCompaniesResponseObjectQueryCompaniesResponse");
var queryCompaniesResponseObjectQueryCompaniesResponseAdditionalInformation_1 = require("./queryCompaniesResponseObjectQueryCompaniesResponseAdditionalInformation");
var queryCompaniesResponseObjectQueryCompaniesResponseCompanies_1 = require("./queryCompaniesResponseObjectQueryCompaniesResponseCompanies");
var queryLineOfBusinessObject_1 = require("./queryLineOfBusinessObject");
var queryLineOfBusinessObjectQueryLineOfBusiness_1 = require("./queryLineOfBusinessObjectQueryLineOfBusiness");
var queryLineOfBusinessResponseObject_1 = require("./queryLineOfBusinessResponseObject");
var queryLineOfBusinessResponseObjectQueryLineOfBusinessResponse_1 = require("./queryLineOfBusinessResponseObjectQueryLineOfBusinessResponse");
var queryLineOfBusinessResponseObjectQueryLineOfBusinessResponseLineOfBusiness_1 = require("./queryLineOfBusinessResponseObjectQueryLineOfBusinessResponseLineOfBusiness");
var returnObject_1 = require("./returnObject");
var returnObjectReturn_1 = require("./returnObjectReturn");
var returnResponseObject_1 = require("./returnResponseObject");
var saleObject_1 = require("./saleObject");
var saleObjectSale_1 = require("./saleObjectSale");
var saleObjectSaleCustomer_1 = require("./saleObjectSaleCustomer");
var saleObjectSaleInputTokens_1 = require("./saleObjectSaleInputTokens");
var saleObjectSalePayer_1 = require("./saleObjectSalePayer");
var saleObjectSaleProducts_1 = require("./saleObjectSaleProducts");
var saleObjectSaleRequiredInformation_1 = require("./saleObjectSaleRequiredInformation");
var saleObjectSaleSecurity_1 = require("./saleObjectSaleSecurity");
var saleObjectSaleSeller_1 = require("./saleObjectSaleSeller");
var saleObjectSaleValues_1 = require("./saleObjectSaleValues");
var saleResponseObject_1 = require("./saleResponseObject");
var saleResponseObjectSaleResponse_1 = require("./saleResponseObjectSaleResponse");
var saleResponseObjectSaleResponseAdditionalInformation_1 = require("./saleResponseObjectSaleResponseAdditionalInformation");
var saleResponseObjectSaleResponseCardCategory_1 = require("./saleResponseObjectSaleResponseCardCategory");
var saleResponseObjectSaleResponseConfiguration_1 = require("./saleResponseObjectSaleResponseConfiguration");
var saleResponseObjectSaleResponseConfigurationBranch_1 = require("./saleResponseObjectSaleResponseConfigurationBranch");
var saleResponseObjectSaleResponseConfigurationCompany_1 = require("./saleResponseObjectSaleResponseConfigurationCompany");
var saleResponseObjectSaleResponseLayout_1 = require("./saleResponseObjectSaleResponseLayout");
var saleResponseObjectSaleResponseMerchantCategory_1 = require("./saleResponseObjectSaleResponseMerchantCategory");
var saleResponseObjectSaleResponseNotification_1 = require("./saleResponseObjectSaleResponseNotification");
var saleResponseObjectSaleResponseNotificationControlUseRule_1 = require("./saleResponseObjectSaleResponseNotificationControlUseRule");
var saleResponseObjectSaleResponseNotificationDistributionList_1 = require("./saleResponseObjectSaleResponseNotificationDistributionList");
var saleResponseObjectSaleResponsePaymentMethod_1 = require("./saleResponseObjectSaleResponsePaymentMethod");
var saleResponseObjectSaleResponsePaymentMethodCategory_1 = require("./saleResponseObjectSaleResponsePaymentMethodCategory");
var saleResponseObjectSaleResponsePaymentMethodDebitAccount_1 = require("./saleResponseObjectSaleResponsePaymentMethodDebitAccount");
var saleResponseObjectSaleResponsePaymentMethodIssuers_1 = require("./saleResponseObjectSaleResponsePaymentMethodIssuers");
var saleResponseObjectSaleResponsePaymentMethodType_1 = require("./saleResponseObjectSaleResponsePaymentMethodType");
var saleResponseObjectSaleResponsePlans_1 = require("./saleResponseObjectSaleResponsePlans");
var saleResponseObjectSaleResponsePlansCashback_1 = require("./saleResponseObjectSaleResponsePlansCashback");
var saleResponseObjectSaleResponsePlansDeferral_1 = require("./saleResponseObjectSaleResponsePlansDeferral");
var saleResponseObjectSaleResponseProducts_1 = require("./saleResponseObjectSaleResponseProducts");
var saleResponseObjectSaleResponseRequiredInformation_1 = require("./saleResponseObjectSaleResponseRequiredInformation");
var saleResponseObjectSaleResponseTickets_1 = require("./saleResponseObjectSaleResponseTickets");
var saleResponseObjectSaleResponseWorkingKeys_1 = require("./saleResponseObjectSaleResponseWorkingKeys");
var settlementObject_1 = require("./settlementObject");
var settlementObjectSettlement_1 = require("./settlementObjectSettlement");
var settlementResponseObject_1 = require("./settlementResponseObject");
var validateObject_1 = require("./validateObject");
var validateObjectValidate_1 = require("./validateObjectValidate");
var validateResponseObject_1 = require("./validateResponseObject");
var validateResponseObjectValidateResponse_1 = require("./validateResponseObjectValidateResponse");
var voidDebtPaymentObject_1 = require("./voidDebtPaymentObject");
var voidDebtPaymentObjectVoidDebtPayment_1 = require("./voidDebtPaymentObjectVoidDebtPayment");
var voidDebtPaymentObjectVoidDebtPaymentProducts_1 = require("./voidDebtPaymentObjectVoidDebtPaymentProducts");
var voidDebtPaymentResponseObject_1 = require("./voidDebtPaymentResponseObject");
var voidObject_1 = require("./voidObject");
var voidObjectVoid_1 = require("./voidObjectVoid");
var voidResponseObject_1 = require("./voidResponseObject");
var voidResponseObjectVoidResponse_1 = require("./voidResponseObjectVoidResponse");
var walletRequestObject_1 = require("./walletRequestObject");
var walletRequestObjectWalletRequest_1 = require("./walletRequestObjectWalletRequest");
var walletRequestResponseObject_1 = require("./walletRequestResponseObject");
var walletRequestResponseObjectWalletRequestResponse_1 = require("./walletRequestResponseObjectWalletRequestResponse");
var walletsObject_1 = require("./walletsObject");
var walletsObjectWallets_1 = require("./walletsObjectWallets");
var walletsResponseObject_1 = require("./walletsResponseObject");
var walletsResponseObjectWalletsResponse_1 = require("./walletsResponseObjectWalletsResponse");
var walletsResponseObjectWalletsResponseWallets_1 = require("./walletsResponseObjectWalletsResponseWallets");
/* tslint:disable:no-unused-variable */
var primitives = [
    "string",
    "boolean",
    "double",
    "integer",
    "long",
    "float",
    "number",
    "any"
];
var enumsMap = {
    "AuthorizeSaleObjectAuthorizeSale.ReasonReverseEnum": authorizeSaleObjectAuthorizeSale_1.AuthorizeSaleObjectAuthorizeSale.ReasonReverseEnum,
    "AuthorizeSaleObjectAuthorizeSale.ReasonSequenceBreakEnum": authorizeSaleObjectAuthorizeSale_1.AuthorizeSaleObjectAuthorizeSale.ReasonSequenceBreakEnum,
    "AuthorizeSaleObjectAuthorizeSale.CurrencyCodeEnum": authorizeSaleObjectAuthorizeSale_1.AuthorizeSaleObjectAuthorizeSale.CurrencyCodeEnum,
    "AuthorizeSaleObjectAuthorizeSale.CardReadModeEnum": authorizeSaleObjectAuthorizeSale_1.AuthorizeSaleObjectAuthorizeSale.CardReadModeEnum,
    "BalanceInquiryObjectBalanceInquiry.ReasonSequenceBreakEnum": balanceInquiryObjectBalanceInquiry_1.BalanceInquiryObjectBalanceInquiry.ReasonSequenceBreakEnum,
    "BalanceInquiryObjectBalanceInquiry.CardReadModeEnum": balanceInquiryObjectBalanceInquiry_1.BalanceInquiryObjectBalanceInquiry.CardReadModeEnum,
    "BlockCancelObjectBlockCancel.ReasonSequenceBreakEnum": blockCancelObjectBlockCancel_1.BlockCancelObjectBlockCancel.ReasonSequenceBreakEnum,
    "BlockCancelResponseObjectBlockCancelResponse.ResponseActionsEnum": blockCancelResponseObjectBlockCancelResponse_1.BlockCancelResponseObjectBlockCancelResponse.ResponseActionsEnum,
    "BlockCancelResponseObjectBlockCancelResponse.WasReversePreviousEnum": blockCancelResponseObjectBlockCancelResponse_1.BlockCancelResponseObjectBlockCancelResponse.WasReversePreviousEnum,
    "BlockCancelResponseObjectBlockCancelResponse.WasClosedPreviousBlockEnum": blockCancelResponseObjectBlockCancelResponse_1.BlockCancelResponseObjectBlockCancelResponse.WasClosedPreviousBlockEnum,
    "BlockCloseObjectBlockClose.ReasonSequenceBreakEnum": blockCloseObjectBlockClose_1.BlockCloseObjectBlockClose.ReasonSequenceBreakEnum,
    "BlockCloseResponseObjectBlockCloseResponse.ResponseActionsEnum": blockCloseResponseObjectBlockCloseResponse_1.BlockCloseResponseObjectBlockCloseResponse.ResponseActionsEnum,
    "BlockCloseResponseObjectBlockCloseResponse.WasReversePreviousEnum": blockCloseResponseObjectBlockCloseResponse_1.BlockCloseResponseObjectBlockCloseResponse.WasReversePreviousEnum,
    "BlockCloseResponseObjectBlockCloseResponse.WasClosedPreviousBlockEnum": blockCloseResponseObjectBlockCloseResponse_1.BlockCloseResponseObjectBlockCloseResponse.WasClosedPreviousBlockEnum,
    "BlockCreateObjectBlockCreate.ReasonSequenceBreakEnum": blockCreateObjectBlockCreate_1.BlockCreateObjectBlockCreate.ReasonSequenceBreakEnum,
    "BlockCreateResponseObjectBlockCreateResponse.ResponseActionsEnum": blockCreateResponseObjectBlockCreateResponse_1.BlockCreateResponseObjectBlockCreateResponse.ResponseActionsEnum,
    "BlockCreateResponseObjectBlockCreateResponse.WasReversePreviousEnum": blockCreateResponseObjectBlockCreateResponse_1.BlockCreateResponseObjectBlockCreateResponse.WasReversePreviousEnum,
    "CancelObjectCancel.ReasonEnum": cancelObjectCancel_1.CancelObjectCancel.ReasonEnum,
    "CancelResponseObjectCancelResponse.ResponseActionsEnum": cancelResponseObjectCancelResponse_1.CancelResponseObjectCancelResponse.ResponseActionsEnum,
    "CancelResponseObjectCancelResponse.WasReversePreviousEnum": cancelResponseObjectCancelResponse_1.CancelResponseObjectCancelResponse.WasReversePreviousEnum,
    "CaptureObjectCapture.ReverseReasonEnum": captureObjectCapture_1.CaptureObjectCapture.ReverseReasonEnum,
    "CaptureObjectCapture.ReasonSequenceBreakEnum": captureObjectCapture_1.CaptureObjectCapture.ReasonSequenceBreakEnum,
    "CaptureObjectCapture.CardReadModeEnum": captureObjectCapture_1.CaptureObjectCapture.CardReadModeEnum,
    "CloseObjectClose.ReasonSequenceBreakEnum": closeObjectClose_1.CloseObjectClose.ReasonSequenceBreakEnum,
    "CloseResponseObjectCloseResponse.ResponseActionsEnum": closeResponseObjectCloseResponse_1.CloseResponseObjectCloseResponse.ResponseActionsEnum,
    "CloseResponseObjectCloseResponse.WasReversePreviousEnum": closeResponseObjectCloseResponse_1.CloseResponseObjectCloseResponse.WasReversePreviousEnum,
    "CloseResponseObjectCloseResponse.CardReadModeEnum": closeResponseObjectCloseResponse_1.CloseResponseObjectCloseResponse.CardReadModeEnum,
    "CloseResponseObjectCloseResponse.CardReadModeDescriptionEnum": closeResponseObjectCloseResponse_1.CloseResponseObjectCloseResponse.CardReadModeDescriptionEnum,
    "ConfigureObjectConfigure.ReasonSequenceBreakEnum": configureObjectConfigure_1.ConfigureObjectConfigure.ReasonSequenceBreakEnum,
    "ConfigureObjectConfigure.POSOrDeviceActionsEnum": configureObjectConfigure_1.ConfigureObjectConfigure.POSOrDeviceActionsEnum,
    "ConfigureResponseObjectConfigureResponse.ResponseActionsEnum": configureResponseObjectConfigureResponse_1.ConfigureResponseObjectConfigureResponse.ResponseActionsEnum,
    "ConfigureResponseObjectConfigureResponse.WasReversePreviousEnum": configureResponseObjectConfigureResponse_1.ConfigureResponseObjectConfigureResponse.WasReversePreviousEnum,
    "ConfigureResponseObjectConfigureResponse.WasClosedPreviousBlockEnum": configureResponseObjectConfigureResponse_1.ConfigureResponseObjectConfigureResponse.WasClosedPreviousBlockEnum,
    "ConfirmObjectConfirm.ReasonSequenceBreakEnum": confirmObjectConfirm_1.ConfirmObjectConfirm.ReasonSequenceBreakEnum,
    "ConfirmResponseObjectConfirmResponse.ResponseActionsEnum": confirmResponseObjectConfirmResponse_1.ConfirmResponseObjectConfirmResponse.ResponseActionsEnum,
    "ConfirmResponseObjectConfirmResponse.WasReversePreviousEnum": confirmResponseObjectConfirmResponse_1.ConfirmResponseObjectConfirmResponse.WasReversePreviousEnum,
    "DebtInquiryObjectDebtInquiry.ReasonSequenceBreakEnum": debtInquiryObjectDebtInquiry_1.DebtInquiryObjectDebtInquiry.ReasonSequenceBreakEnum,
    "DebtInquiryObjectDebtInquiry.CardReadModeEnum": debtInquiryObjectDebtInquiry_1.DebtInquiryObjectDebtInquiry.CardReadModeEnum,
    "DebtInquiryResponseObjectDebtInquiryResponse.ResponseActionsEnum": debtInquiryResponseObjectDebtInquiryResponse_1.DebtInquiryResponseObjectDebtInquiryResponse.ResponseActionsEnum,
    "DebtInquiryResponseObjectDebtInquiryResponse.WasReversePreviousEnum": debtInquiryResponseObjectDebtInquiryResponse_1.DebtInquiryResponseObjectDebtInquiryResponse.WasReversePreviousEnum,
    "DebtInquiryResponseObjectDebtInquiryResponse.CurrencyCodeEnum": debtInquiryResponseObjectDebtInquiryResponse_1.DebtInquiryResponseObjectDebtInquiryResponse.CurrencyCodeEnum,
    "DebtInquiryResponseObjectDebtInquiryResponse.CardReadModeEnum": debtInquiryResponseObjectDebtInquiryResponse_1.DebtInquiryResponseObjectDebtInquiryResponse.CardReadModeEnum,
    "DebtInquiryResponseObjectDebtInquiryResponse.CardReadModeDescriptionEnum": debtInquiryResponseObjectDebtInquiryResponse_1.DebtInquiryResponseObjectDebtInquiryResponse.CardReadModeDescriptionEnum,
    "DebtInquiryResponseObjectDebtInquiryResponse.FallbackForcedEnum": debtInquiryResponseObjectDebtInquiryResponse_1.DebtInquiryResponseObjectDebtInquiryResponse.FallbackForcedEnum,
    "DebtInquiryResponseObjectDebtInquiryResponse.WasClosedPreviousBlockEnum": debtInquiryResponseObjectDebtInquiryResponse_1.DebtInquiryResponseObjectDebtInquiryResponse.WasClosedPreviousBlockEnum,
    "DebtInquiryResponseObjectDebtInquiryResponseAccountSummaryAccountStatus.CurrencyCodeEnum": debtInquiryResponseObjectDebtInquiryResponseAccountSummaryAccountStatus_1.DebtInquiryResponseObjectDebtInquiryResponseAccountSummaryAccountStatus.CurrencyCodeEnum,
    "DebtPaymentObjectDebtPayment.ReverseReasonEnum": debtPaymentObjectDebtPayment_1.DebtPaymentObjectDebtPayment.ReverseReasonEnum,
    "DebtPaymentObjectDebtPayment.ReasonSequenceBreakEnum": debtPaymentObjectDebtPayment_1.DebtPaymentObjectDebtPayment.ReasonSequenceBreakEnum,
    "DebtPaymentObjectDebtPayment.CardReadModeEnum": debtPaymentObjectDebtPayment_1.DebtPaymentObjectDebtPayment.CardReadModeEnum,
    "DebtPaymentObjectDebtPaymentRequiredInformation.TypeEnum": debtPaymentObjectDebtPaymentRequiredInformation_1.DebtPaymentObjectDebtPaymentRequiredInformation.TypeEnum,
    "DebtPaymentObjectDebtPaymentRequiredInformation.InterpretForEnum": debtPaymentObjectDebtPaymentRequiredInformation_1.DebtPaymentObjectDebtPaymentRequiredInformation.InterpretForEnum,
    "DebtPaymentObjectDebtPaymentRequiredInformation.ItIsDefinedEnum": debtPaymentObjectDebtPaymentRequiredInformation_1.DebtPaymentObjectDebtPaymentRequiredInformation.ItIsDefinedEnum,
    "DebtPaymentObjectDebtPaymentRequiredInformation.ValidationExpressionTypeEnum": debtPaymentObjectDebtPaymentRequiredInformation_1.DebtPaymentObjectDebtPaymentRequiredInformation.ValidationExpressionTypeEnum,
    "DebtPaymentObjectDebtPaymentRequiredInformation.MandatoryEnum": debtPaymentObjectDebtPaymentRequiredInformation_1.DebtPaymentObjectDebtPaymentRequiredInformation.MandatoryEnum,
    "DebtPaymentResponseObjectDebtPaymentResponse.ResponseActionsEnum": debtPaymentResponseObjectDebtPaymentResponse_1.DebtPaymentResponseObjectDebtPaymentResponse.ResponseActionsEnum,
    "DebtPaymentResponseObjectDebtPaymentResponse.WasReversePreviousEnum": debtPaymentResponseObjectDebtPaymentResponse_1.DebtPaymentResponseObjectDebtPaymentResponse.WasReversePreviousEnum,
    "DepositObjectDeposit.ReverseReasonEnum": depositObjectDeposit_1.DepositObjectDeposit.ReverseReasonEnum,
    "DepositObjectDeposit.ReasonSequenceBreakEnum": depositObjectDeposit_1.DepositObjectDeposit.ReasonSequenceBreakEnum,
    "DepositObjectDeposit.CardReadModeEnum": depositObjectDeposit_1.DepositObjectDeposit.CardReadModeEnum,
    "DepositResponseObjectDepositResponse.ResponseActionsEnum": depositResponseObjectDepositResponse_1.DepositResponseObjectDepositResponse.ResponseActionsEnum,
    "DepositResponseObjectDepositResponse.WasReversePreviousEnum": depositResponseObjectDepositResponse_1.DepositResponseObjectDepositResponse.WasReversePreviousEnum,
    "DepositResponseObjectDepositResponse.CurrencyCodeEnum": depositResponseObjectDepositResponse_1.DepositResponseObjectDepositResponse.CurrencyCodeEnum,
    "DepositResponseObjectDepositResponse.CardReadModeEnum": depositResponseObjectDepositResponse_1.DepositResponseObjectDepositResponse.CardReadModeEnum,
    "DepositResponseObjectDepositResponse.CardReadModeDescriptionEnum": depositResponseObjectDepositResponse_1.DepositResponseObjectDepositResponse.CardReadModeDescriptionEnum,
    "EnableServiceResponseObjectEnableServiceResponse.ResponseActionsEnum": enableServiceResponseObjectEnableServiceResponse_1.EnableServiceResponseObjectEnableServiceResponse.ResponseActionsEnum,
    "EnableServiceResponseObjectEnableServiceResponse.WasReversePreviousEnum": enableServiceResponseObjectEnableServiceResponse_1.EnableServiceResponseObjectEnableServiceResponse.WasReversePreviousEnum,
    "EnableServiceResponseObjectEnableServiceResponse.WasClosedPreviousBlockEnum": enableServiceResponseObjectEnableServiceResponse_1.EnableServiceResponseObjectEnableServiceResponse.WasClosedPreviousBlockEnum,
    "EnrollmentObjectEnrollment.CardReadModeEnum": enrollmentObjectEnrollment_1.EnrollmentObjectEnrollment.CardReadModeEnum,
    "EnrollmentObjectEnrollment.CurrencyCodeEnum": enrollmentObjectEnrollment_1.EnrollmentObjectEnrollment.CurrencyCodeEnum,
    "EnrollmentObjectEnrollment.ReverseReasonEnum": enrollmentObjectEnrollment_1.EnrollmentObjectEnrollment.ReverseReasonEnum,
    "EnrollmentObjectEnrollment.ReasonSequenceBreakEnum": enrollmentObjectEnrollment_1.EnrollmentObjectEnrollment.ReasonSequenceBreakEnum,
    "EnrollmentObjectEnrollmentRecurrence.IntervalTypeEnum": enrollmentObjectEnrollmentRecurrence_1.EnrollmentObjectEnrollmentRecurrence.IntervalTypeEnum,
    "EnrollmentResponseObjectEnrollmentResponse.ResponseActionsEnum": enrollmentResponseObjectEnrollmentResponse_1.EnrollmentResponseObjectEnrollmentResponse.ResponseActionsEnum,
    "EnrollmentResponseObjectEnrollmentResponse.WasReversePreviousEnum": enrollmentResponseObjectEnrollmentResponse_1.EnrollmentResponseObjectEnrollmentResponse.WasReversePreviousEnum,
    "EnrollmentResponseObjectEnrollmentResponse.CurrencyCodeEnum": enrollmentResponseObjectEnrollmentResponse_1.EnrollmentResponseObjectEnrollmentResponse.CurrencyCodeEnum,
    "EnrollmentResponseObjectEnrollmentResponse.CardReadModeEnum": enrollmentResponseObjectEnrollmentResponse_1.EnrollmentResponseObjectEnrollmentResponse.CardReadModeEnum,
    "EnrollmentResponseObjectEnrollmentResponse.CardReadModeDescriptionEnum": enrollmentResponseObjectEnrollmentResponse_1.EnrollmentResponseObjectEnrollmentResponse.CardReadModeDescriptionEnum,
    "GetBlockObjectGetBlock.ReasonSequenceBreakEnum": getBlockObjectGetBlock_1.GetBlockObjectGetBlock.ReasonSequenceBreakEnum,
    "GetBlockObjectGetBlockTransactionsRequired.TransactionTypeEnum": getBlockObjectGetBlockTransactionsRequired_1.GetBlockObjectGetBlockTransactionsRequired.TransactionTypeEnum,
    "GetBlockObjectGetBlockTransactionsRequired.StateEnum": getBlockObjectGetBlockTransactionsRequired_1.GetBlockObjectGetBlockTransactionsRequired.StateEnum,
    "GetBlockResponseObjectGetBlockResponse.ResponseActionsEnum": getBlockResponseObjectGetBlockResponse_1.GetBlockResponseObjectGetBlockResponse.ResponseActionsEnum,
    "GetBlockResponseObjectGetBlockResponse.WasReversePreviousEnum": getBlockResponseObjectGetBlockResponse_1.GetBlockResponseObjectGetBlockResponse.WasReversePreviousEnum,
    "GetBlockResponseObjectGetBlockResponse.WasClosedPreviousBlockEnum": getBlockResponseObjectGetBlockResponse_1.GetBlockResponseObjectGetBlockResponse.WasClosedPreviousBlockEnum,
    "GetCardObjectGetCard.ReasonSequenceBreakEnum": getCardObjectGetCard_1.GetCardObjectGetCard.ReasonSequenceBreakEnum,
    "GetCardObjectGetCard.CurrencyCodeEnum": getCardObjectGetCard_1.GetCardObjectGetCard.CurrencyCodeEnum,
    "GetCardObjectGetCard.CardReadModeEnum": getCardObjectGetCard_1.GetCardObjectGetCard.CardReadModeEnum,
    "GetCardResponseObjectGetCardResponse.ResponseActionsEnum": getCardResponseObjectGetCardResponse_1.GetCardResponseObjectGetCardResponse.ResponseActionsEnum,
    "GetCardResponseObjectGetCardResponse.WasReversePreviousEnum": getCardResponseObjectGetCardResponse_1.GetCardResponseObjectGetCardResponse.WasReversePreviousEnum,
    "GetCardResponseObjectGetCardResponse.CardReadModeEnum": getCardResponseObjectGetCardResponse_1.GetCardResponseObjectGetCardResponse.CardReadModeEnum,
    "GetCardResponseObjectGetCardResponse.CardReadModeDescriptionEnum": getCardResponseObjectGetCardResponse_1.GetCardResponseObjectGetCardResponse.CardReadModeDescriptionEnum,
    "GetTransactionObjectGetTransaction.ReasonSequenceBreakEnum": getTransactionObjectGetTransaction_1.GetTransactionObjectGetTransaction.ReasonSequenceBreakEnum,
    "GetTransactionResponseObjectGetTransactionResponse.ResponseActionsEnum": getTransactionResponseObjectGetTransactionResponse_1.GetTransactionResponseObjectGetTransactionResponse.ResponseActionsEnum,
    "GetTransactionResponseObjectGetTransactionResponse.WasReversePreviousEnum": getTransactionResponseObjectGetTransactionResponse_1.GetTransactionResponseObjectGetTransactionResponse.WasReversePreviousEnum,
    "GetTransactionResponseObjectGetTransactionResponse.WasClosedPreviousBlockEnum": getTransactionResponseObjectGetTransactionResponse_1.GetTransactionResponseObjectGetTransactionResponse.WasClosedPreviousBlockEnum,
    "GetTransactionResponseObjectGetTransactionResponsePayer.IdentificationTypeEnum": getTransactionResponseObjectGetTransactionResponsePayer_1.GetTransactionResponseObjectGetTransactionResponsePayer.IdentificationTypeEnum,
    "GetTransactionResponseObjectGetTransactionResponsePayer.DocumentTypeEnum": getTransactionResponseObjectGetTransactionResponsePayer_1.GetTransactionResponseObjectGetTransactionResponsePayer.DocumentTypeEnum,
    "GetTransactionResponseObjectGetTransactionResponsePayer.CurrencyCodeEnum": getTransactionResponseObjectGetTransactionResponsePayer_1.GetTransactionResponseObjectGetTransactionResponsePayer.CurrencyCodeEnum,
    "GetTransactionResponseObjectGetTransactionResponseTransaction.ResponseActionsEnum": getTransactionResponseObjectGetTransactionResponseTransaction_1.GetTransactionResponseObjectGetTransactionResponseTransaction.ResponseActionsEnum,
    "GetTransactionResponseObjectGetTransactionResponseTransaction.CardReadModeEnum": getTransactionResponseObjectGetTransactionResponseTransaction_1.GetTransactionResponseObjectGetTransactionResponseTransaction.CardReadModeEnum,
    "KeepAliveResponseObjectKeepAliveResponse.ResponseActionsEnum": keepAliveResponseObjectKeepAliveResponse_1.KeepAliveResponseObjectKeepAliveResponse.ResponseActionsEnum,
    "KeepAliveResponseObjectKeepAliveResponse.WasReversePreviousEnum": keepAliveResponseObjectKeepAliveResponse_1.KeepAliveResponseObjectKeepAliveResponse.WasReversePreviousEnum,
    "KeepAliveResponseObjectKeepAliveResponse.WasClosedPreviousBlockEnum": keepAliveResponseObjectKeepAliveResponse_1.KeepAliveResponseObjectKeepAliveResponse.WasClosedPreviousBlockEnum,
    "KeysRenewalResponseObjectKeysRenewalResponse.ResponseActionsEnum": keysRenewalResponseObjectKeysRenewalResponse_1.KeysRenewalResponseObjectKeysRenewalResponse.ResponseActionsEnum,
    "KeysRenewalResponseObjectKeysRenewalResponse.WasReversePreviousEnum": keysRenewalResponseObjectKeysRenewalResponse_1.KeysRenewalResponseObjectKeysRenewalResponse.WasReversePreviousEnum,
    "OrderFinalResponseObjectOrderFinalResponse.ResponseActionsEnum": orderFinalResponseObjectOrderFinalResponse_1.OrderFinalResponseObjectOrderFinalResponse.ResponseActionsEnum,
    "OrderGetResponseObjectOrderGetResponse.ResponseActionsEnum": orderGetResponseObjectOrderGetResponse_1.OrderGetResponseObjectOrderGetResponse.ResponseActionsEnum,
    "OrderGetResponseObjectOrderGetResponse.CurrencyCodeEnum": orderGetResponseObjectOrderGetResponse_1.OrderGetResponseObjectOrderGetResponse.CurrencyCodeEnum,
    "OrderInitialObjectOrderInitial.CurrencyCodeEnum": orderInitialObjectOrderInitial_1.OrderInitialObjectOrderInitial.CurrencyCodeEnum,
    "OrderInitialResponseObjectOrderInitialResponse.ResponseActionsEnum": orderInitialResponseObjectOrderInitialResponse_1.OrderInitialResponseObjectOrderInitialResponse.ResponseActionsEnum,
    "OrderStatusObjectOrderStatus.ReverseReasonEnum": orderStatusObjectOrderStatus_1.OrderStatusObjectOrderStatus.ReverseReasonEnum,
    "OrderStatusObjectOrderStatus.ReasonSequenceBreakEnum": orderStatusObjectOrderStatus_1.OrderStatusObjectOrderStatus.ReasonSequenceBreakEnum,
    "OrderStatusObjectOrderStatus.CurrencyCodeEnum": orderStatusObjectOrderStatus_1.OrderStatusObjectOrderStatus.CurrencyCodeEnum,
    "OrderStatusObjectOrderStatus.CardReadModeEnum": orderStatusObjectOrderStatus_1.OrderStatusObjectOrderStatus.CardReadModeEnum,
    "OrderStatusResponseObjectOrderStatusResponse.ResponseActionsEnum": orderStatusResponseObjectOrderStatusResponse_1.OrderStatusResponseObjectOrderStatusResponse.ResponseActionsEnum,
    "OrderStatusResponseObjectOrderStatusResponse.WasReversePreviousEnum": orderStatusResponseObjectOrderStatusResponse_1.OrderStatusResponseObjectOrderStatusResponse.WasReversePreviousEnum,
    "OrderStatusResponseObjectOrderStatusResponse.CurrencyCodeEnum": orderStatusResponseObjectOrderStatusResponse_1.OrderStatusResponseObjectOrderStatusResponse.CurrencyCodeEnum,
    "OrderStatusResponseObjectOrderStatusResponse.CardReadModeEnum": orderStatusResponseObjectOrderStatusResponse_1.OrderStatusResponseObjectOrderStatusResponse.CardReadModeEnum,
    "OrderStatusResponseObjectOrderStatusResponse.CardReadModeDescriptionEnum": orderStatusResponseObjectOrderStatusResponse_1.OrderStatusResponseObjectOrderStatusResponse.CardReadModeDescriptionEnum,
    "PaymentMethodObjectPaymentMethod.CurrencyCodeEnum": paymentMethodObjectPaymentMethod_1.PaymentMethodObjectPaymentMethod.CurrencyCodeEnum,
    "PaymentMethodObjectPaymentMethod.CardReadModeEnum": paymentMethodObjectPaymentMethod_1.PaymentMethodObjectPaymentMethod.CardReadModeEnum,
    "PaymentMethodObjectPaymentMethod.OrigTransactionTypeEnum": paymentMethodObjectPaymentMethod_1.PaymentMethodObjectPaymentMethod.OrigTransactionTypeEnum,
    "PaymentMethodResponseObjectPaymentMethodResponse.ResponseActionsEnum": paymentMethodResponseObjectPaymentMethodResponse_1.PaymentMethodResponseObjectPaymentMethodResponse.ResponseActionsEnum,
    "PaymentMethodResponseObjectPaymentMethodResponse.WasReversePreviousEnum": paymentMethodResponseObjectPaymentMethodResponse_1.PaymentMethodResponseObjectPaymentMethodResponse.WasReversePreviousEnum,
    "PaymentMethodResponseObjectPaymentMethodResponse.CardReadModeEnum": paymentMethodResponseObjectPaymentMethodResponse_1.PaymentMethodResponseObjectPaymentMethodResponse.CardReadModeEnum,
    "PaymentMethodResponseObjectPaymentMethodResponse.CardReadModeDescriptionEnum": paymentMethodResponseObjectPaymentMethodResponse_1.PaymentMethodResponseObjectPaymentMethodResponse.CardReadModeDescriptionEnum,
    "PaymentMethodsResponseObjectPaymentMethodsResponse.ResponseActionsEnum": paymentMethodsResponseObjectPaymentMethodsResponse_1.PaymentMethodsResponseObjectPaymentMethodsResponse.ResponseActionsEnum,
    "QueryCompaniesResponseObjectQueryCompaniesResponse.ResponseActionsEnum": queryCompaniesResponseObjectQueryCompaniesResponse_1.QueryCompaniesResponseObjectQueryCompaniesResponse.ResponseActionsEnum,
    "QueryCompaniesResponseObjectQueryCompaniesResponse.WasReversePreviousEnum": queryCompaniesResponseObjectQueryCompaniesResponse_1.QueryCompaniesResponseObjectQueryCompaniesResponse.WasReversePreviousEnum,
    "QueryCompaniesResponseObjectQueryCompaniesResponse.WasClosedPreviousBlockEnum": queryCompaniesResponseObjectQueryCompaniesResponse_1.QueryCompaniesResponseObjectQueryCompaniesResponse.WasClosedPreviousBlockEnum,
    "QueryCompaniesResponseObjectQueryCompaniesResponseAdditionalInformation.TypeEnum": queryCompaniesResponseObjectQueryCompaniesResponseAdditionalInformation_1.QueryCompaniesResponseObjectQueryCompaniesResponseAdditionalInformation.TypeEnum,
    "QueryCompaniesResponseObjectQueryCompaniesResponseAdditionalInformation.InterpretForEnum": queryCompaniesResponseObjectQueryCompaniesResponseAdditionalInformation_1.QueryCompaniesResponseObjectQueryCompaniesResponseAdditionalInformation.InterpretForEnum,
    "QueryCompaniesResponseObjectQueryCompaniesResponseAdditionalInformation.ValidationExpressionTypeEnum": queryCompaniesResponseObjectQueryCompaniesResponseAdditionalInformation_1.QueryCompaniesResponseObjectQueryCompaniesResponseAdditionalInformation.ValidationExpressionTypeEnum,
    "QueryCompaniesResponseObjectQueryCompaniesResponseAdditionalInformation.MandatoryEnum": queryCompaniesResponseObjectQueryCompaniesResponseAdditionalInformation_1.QueryCompaniesResponseObjectQueryCompaniesResponseAdditionalInformation.MandatoryEnum,
    "QueryCompaniesResponseObjectQueryCompaniesResponseCompanies.EnableRecurringPaymentEnum": queryCompaniesResponseObjectQueryCompaniesResponseCompanies_1.QueryCompaniesResponseObjectQueryCompaniesResponseCompanies.EnableRecurringPaymentEnum,
    "QueryLineOfBusinessResponseObjectQueryLineOfBusinessResponse.ResponseActionsEnum": queryLineOfBusinessResponseObjectQueryLineOfBusinessResponse_1.QueryLineOfBusinessResponseObjectQueryLineOfBusinessResponse.ResponseActionsEnum,
    "QueryLineOfBusinessResponseObjectQueryLineOfBusinessResponse.WasReversePreviousEnum": queryLineOfBusinessResponseObjectQueryLineOfBusinessResponse_1.QueryLineOfBusinessResponseObjectQueryLineOfBusinessResponse.WasReversePreviousEnum,
    "QueryLineOfBusinessResponseObjectQueryLineOfBusinessResponse.WasClosedPreviousBlockEnum": queryLineOfBusinessResponseObjectQueryLineOfBusinessResponse_1.QueryLineOfBusinessResponseObjectQueryLineOfBusinessResponse.WasClosedPreviousBlockEnum,
    "ReturnObjectReturn.ReverseReasonEnum": returnObjectReturn_1.ReturnObjectReturn.ReverseReasonEnum,
    "ReturnObjectReturn.ReasonSequenceBreakEnum": returnObjectReturn_1.ReturnObjectReturn.ReasonSequenceBreakEnum,
    "ReturnObjectReturn.CurrencyCodeEnum": returnObjectReturn_1.ReturnObjectReturn.CurrencyCodeEnum,
    "ReturnObjectReturn.CardReadModeEnum": returnObjectReturn_1.ReturnObjectReturn.CardReadModeEnum,
    "SaleObjectSale.ReverseReasonEnum": saleObjectSale_1.SaleObjectSale.ReverseReasonEnum,
    "SaleObjectSale.ReasonSequenceBreakEnum": saleObjectSale_1.SaleObjectSale.ReasonSequenceBreakEnum,
    "SaleObjectSale.CurrencyCodeEnum": saleObjectSale_1.SaleObjectSale.CurrencyCodeEnum,
    "SaleObjectSale.CardReadModeEnum": saleObjectSale_1.SaleObjectSale.CardReadModeEnum,
    "SaleObjectSaleCustomer.IdentificationTypeEnum": saleObjectSaleCustomer_1.SaleObjectSaleCustomer.IdentificationTypeEnum,
    "SaleObjectSaleCustomer.DocumentTypeEnum": saleObjectSaleCustomer_1.SaleObjectSaleCustomer.DocumentTypeEnum,
    "SaleObjectSalePayer.IdentificationTypeEnum": saleObjectSalePayer_1.SaleObjectSalePayer.IdentificationTypeEnum,
    "SaleObjectSalePayer.DocumentTypeEnum": saleObjectSalePayer_1.SaleObjectSalePayer.DocumentTypeEnum,
    "SaleObjectSaleRequiredInformation.TypeEnum": saleObjectSaleRequiredInformation_1.SaleObjectSaleRequiredInformation.TypeEnum,
    "SaleObjectSaleRequiredInformation.InterpretForEnum": saleObjectSaleRequiredInformation_1.SaleObjectSaleRequiredInformation.InterpretForEnum,
    "SaleObjectSaleRequiredInformation.ItIsDefinedEnum": saleObjectSaleRequiredInformation_1.SaleObjectSaleRequiredInformation.ItIsDefinedEnum,
    "SaleObjectSaleRequiredInformation.ValidationExpressionTypeEnum": saleObjectSaleRequiredInformation_1.SaleObjectSaleRequiredInformation.ValidationExpressionTypeEnum,
    "SaleObjectSaleRequiredInformation.MandatoryEnum": saleObjectSaleRequiredInformation_1.SaleObjectSaleRequiredInformation.MandatoryEnum,
    "SaleObjectSaleSeller.IdentificationTypeEnum": saleObjectSaleSeller_1.SaleObjectSaleSeller.IdentificationTypeEnum,
    "SaleObjectSaleSeller.DocumentTypeEnum": saleObjectSaleSeller_1.SaleObjectSaleSeller.DocumentTypeEnum,
    "SaleResponseObjectSaleResponse.ResponseActionsEnum": saleResponseObjectSaleResponse_1.SaleResponseObjectSaleResponse.ResponseActionsEnum,
    "SaleResponseObjectSaleResponse.WasReversePreviousEnum": saleResponseObjectSaleResponse_1.SaleResponseObjectSaleResponse.WasReversePreviousEnum,
    "SaleResponseObjectSaleResponse.CurrencyCodeEnum": saleResponseObjectSaleResponse_1.SaleResponseObjectSaleResponse.CurrencyCodeEnum,
    "SaleResponseObjectSaleResponse.CardReadModeEnum": saleResponseObjectSaleResponse_1.SaleResponseObjectSaleResponse.CardReadModeEnum,
    "SaleResponseObjectSaleResponse.CardReadModeDescriptionEnum": saleResponseObjectSaleResponse_1.SaleResponseObjectSaleResponse.CardReadModeDescriptionEnum,
    "SaleResponseObjectSaleResponseAdditionalInformation.TypeEnum": saleResponseObjectSaleResponseAdditionalInformation_1.SaleResponseObjectSaleResponseAdditionalInformation.TypeEnum,
    "SaleResponseObjectSaleResponseAdditionalInformation.InterpretForEnum": saleResponseObjectSaleResponseAdditionalInformation_1.SaleResponseObjectSaleResponseAdditionalInformation.InterpretForEnum,
    "SaleResponseObjectSaleResponseLayout.AttributeEnum": saleResponseObjectSaleResponseLayout_1.SaleResponseObjectSaleResponseLayout.AttributeEnum,
    "SaleResponseObjectSaleResponseLayout.ContentTypeEnum": saleResponseObjectSaleResponseLayout_1.SaleResponseObjectSaleResponseLayout.ContentTypeEnum,
    "SaleResponseObjectSaleResponseLayout.EncodeTypeEnum": saleResponseObjectSaleResponseLayout_1.SaleResponseObjectSaleResponseLayout.EncodeTypeEnum,
    "SaleResponseObjectSaleResponsePlans.CurrencyCodeEnum": saleResponseObjectSaleResponsePlans_1.SaleResponseObjectSaleResponsePlans.CurrencyCodeEnum,
    "SaleResponseObjectSaleResponsePlans.POSOrDeviceActionsEnum": saleResponseObjectSaleResponsePlans_1.SaleResponseObjectSaleResponsePlans.POSOrDeviceActionsEnum,
    "SaleResponseObjectSaleResponseRequiredInformation.TypeEnum": saleResponseObjectSaleResponseRequiredInformation_1.SaleResponseObjectSaleResponseRequiredInformation.TypeEnum,
    "SaleResponseObjectSaleResponseRequiredInformation.InterpretForEnum": saleResponseObjectSaleResponseRequiredInformation_1.SaleResponseObjectSaleResponseRequiredInformation.InterpretForEnum,
    "SaleResponseObjectSaleResponseRequiredInformation.ItIsDefinedEnum": saleResponseObjectSaleResponseRequiredInformation_1.SaleResponseObjectSaleResponseRequiredInformation.ItIsDefinedEnum,
    "SaleResponseObjectSaleResponseRequiredInformation.ValidationExpressionTypeEnum": saleResponseObjectSaleResponseRequiredInformation_1.SaleResponseObjectSaleResponseRequiredInformation.ValidationExpressionTypeEnum,
    "SaleResponseObjectSaleResponseRequiredInformation.MandatoryEnum": saleResponseObjectSaleResponseRequiredInformation_1.SaleResponseObjectSaleResponseRequiredInformation.MandatoryEnum,
    "SaleResponseObjectSaleResponseTickets.TypeEnum": saleResponseObjectSaleResponseTickets_1.SaleResponseObjectSaleResponseTickets.TypeEnum,
    "SaleResponseObjectSaleResponseTickets.ActionEnum": saleResponseObjectSaleResponseTickets_1.SaleResponseObjectSaleResponseTickets.ActionEnum,
    "SaleResponseObjectSaleResponseTickets.DeviceActionEnum": saleResponseObjectSaleResponseTickets_1.SaleResponseObjectSaleResponseTickets.DeviceActionEnum,
    "SaleResponseObjectSaleResponseTickets.ExecutedActionEnum": saleResponseObjectSaleResponseTickets_1.SaleResponseObjectSaleResponseTickets.ExecutedActionEnum,
    "SettlementObjectSettlement.ReverseReasonEnum": settlementObjectSettlement_1.SettlementObjectSettlement.ReverseReasonEnum,
    "SettlementObjectSettlement.ReasonSequenceBreakEnum": settlementObjectSettlement_1.SettlementObjectSettlement.ReasonSequenceBreakEnum,
    "SettlementObjectSettlement.CardReadModeEnum": settlementObjectSettlement_1.SettlementObjectSettlement.CardReadModeEnum,
    "ValidateObjectValidate.ReasonSequenceBreakEnum": validateObjectValidate_1.ValidateObjectValidate.ReasonSequenceBreakEnum,
    "ValidateObjectValidate.CardReadModeEnum": validateObjectValidate_1.ValidateObjectValidate.CardReadModeEnum,
    "ValidateResponseObjectValidateResponse.ResponseActionsEnum": validateResponseObjectValidateResponse_1.ValidateResponseObjectValidateResponse.ResponseActionsEnum,
    "ValidateResponseObjectValidateResponse.WasReversePreviousEnum": validateResponseObjectValidateResponse_1.ValidateResponseObjectValidateResponse.WasReversePreviousEnum,
    "ValidateResponseObjectValidateResponse.CurrencyCodeEnum": validateResponseObjectValidateResponse_1.ValidateResponseObjectValidateResponse.CurrencyCodeEnum,
    "ValidateResponseObjectValidateResponse.CardReadModeEnum": validateResponseObjectValidateResponse_1.ValidateResponseObjectValidateResponse.CardReadModeEnum,
    "ValidateResponseObjectValidateResponse.CardReadModeDescriptionEnum": validateResponseObjectValidateResponse_1.ValidateResponseObjectValidateResponse.CardReadModeDescriptionEnum,
    "VoidDebtPaymentObjectVoidDebtPayment.ReverseReasonEnum": voidDebtPaymentObjectVoidDebtPayment_1.VoidDebtPaymentObjectVoidDebtPayment.ReverseReasonEnum,
    "VoidDebtPaymentObjectVoidDebtPayment.ReasonSequenceBreakEnum": voidDebtPaymentObjectVoidDebtPayment_1.VoidDebtPaymentObjectVoidDebtPayment.ReasonSequenceBreakEnum,
    "VoidDebtPaymentObjectVoidDebtPayment.CardReadModeEnum": voidDebtPaymentObjectVoidDebtPayment_1.VoidDebtPaymentObjectVoidDebtPayment.CardReadModeEnum,
    "VoidObjectVoid.ReverseReasonEnum": voidObjectVoid_1.VoidObjectVoid.ReverseReasonEnum,
    "VoidObjectVoid.ReasonSequenceBreakEnum": voidObjectVoid_1.VoidObjectVoid.ReasonSequenceBreakEnum,
    "VoidObjectVoid.CurrencyCodeEnum": voidObjectVoid_1.VoidObjectVoid.CurrencyCodeEnum,
    "VoidObjectVoid.CardReadModeEnum": voidObjectVoid_1.VoidObjectVoid.CardReadModeEnum,
    "VoidResponseObjectVoidResponse.ResponseActionsEnum": voidResponseObjectVoidResponse_1.VoidResponseObjectVoidResponse.ResponseActionsEnum,
    "VoidResponseObjectVoidResponse.WasReversePreviousEnum": voidResponseObjectVoidResponse_1.VoidResponseObjectVoidResponse.WasReversePreviousEnum,
    "VoidResponseObjectVoidResponse.CurrencyCodeEnum": voidResponseObjectVoidResponse_1.VoidResponseObjectVoidResponse.CurrencyCodeEnum,
    "VoidResponseObjectVoidResponse.CardReadModeEnum": voidResponseObjectVoidResponse_1.VoidResponseObjectVoidResponse.CardReadModeEnum,
    "VoidResponseObjectVoidResponse.CardReadModeDescriptionEnum": voidResponseObjectVoidResponse_1.VoidResponseObjectVoidResponse.CardReadModeDescriptionEnum,
    "WalletRequestObjectWalletRequest.CurrencyCodeEnum": walletRequestObjectWalletRequest_1.WalletRequestObjectWalletRequest.CurrencyCodeEnum,
    "WalletRequestResponseObjectWalletRequestResponse.ResponseActionsEnum": walletRequestResponseObjectWalletRequestResponse_1.WalletRequestResponseObjectWalletRequestResponse.ResponseActionsEnum,
    "WalletRequestResponseObjectWalletRequestResponse.WasReversePreviousEnum": walletRequestResponseObjectWalletRequestResponse_1.WalletRequestResponseObjectWalletRequestResponse.WasReversePreviousEnum,
    "WalletRequestResponseObjectWalletRequestResponse.WasClosedPreviousBlockEnum": walletRequestResponseObjectWalletRequestResponse_1.WalletRequestResponseObjectWalletRequestResponse.WasClosedPreviousBlockEnum,
    "WalletRequestResponseObjectWalletRequestResponse.WalletRequestTokenTypeEnum": walletRequestResponseObjectWalletRequestResponse_1.WalletRequestResponseObjectWalletRequestResponse.WalletRequestTokenTypeEnum,
    "WalletsResponseObjectWalletsResponse.ResponseActionsEnum": walletsResponseObjectWalletsResponse_1.WalletsResponseObjectWalletsResponse.ResponseActionsEnum,
    "WalletsResponseObjectWalletsResponse.WasReversePreviousEnum": walletsResponseObjectWalletsResponse_1.WalletsResponseObjectWalletsResponse.WasReversePreviousEnum,
    "WalletsResponseObjectWalletsResponse.WasClosedPreviousBlockEnum": walletsResponseObjectWalletsResponse_1.WalletsResponseObjectWalletsResponse.WasClosedPreviousBlockEnum,
    "WalletsResponseObjectWalletsResponseWallets.TokenTypeEnum": walletsResponseObjectWalletsResponseWallets_1.WalletsResponseObjectWalletsResponseWallets.TokenTypeEnum
};
var typeMap = {
    "AuthorizeSaleObject": authorizeSaleObject_1.AuthorizeSaleObject,
    "AuthorizeSaleObjectAuthorizeSale": authorizeSaleObjectAuthorizeSale_1.AuthorizeSaleObjectAuthorizeSale,
    "AuthorizeSaleResponseObject": authorizeSaleResponseObject_1.AuthorizeSaleResponseObject,
    "BalanceInquiryObject": balanceInquiryObject_1.BalanceInquiryObject,
    "BalanceInquiryObjectBalanceInquiry": balanceInquiryObjectBalanceInquiry_1.BalanceInquiryObjectBalanceInquiry,
    "BalanceInquiryResponseObject": balanceInquiryResponseObject_1.BalanceInquiryResponseObject,
    "BlockCancelObject": blockCancelObject_1.BlockCancelObject,
    "BlockCancelObjectBlockCancel": blockCancelObjectBlockCancel_1.BlockCancelObjectBlockCancel,
    "BlockCancelResponseObject": blockCancelResponseObject_1.BlockCancelResponseObject,
    "BlockCancelResponseObjectBlockCancelResponse": blockCancelResponseObjectBlockCancelResponse_1.BlockCancelResponseObjectBlockCancelResponse,
    "BlockCloseObject": blockCloseObject_1.BlockCloseObject,
    "BlockCloseObjectBlockClose": blockCloseObjectBlockClose_1.BlockCloseObjectBlockClose,
    "BlockCloseResponseObject": blockCloseResponseObject_1.BlockCloseResponseObject,
    "BlockCloseResponseObjectBlockCloseResponse": blockCloseResponseObjectBlockCloseResponse_1.BlockCloseResponseObjectBlockCloseResponse,
    "BlockCreateObject": blockCreateObject_1.BlockCreateObject,
    "BlockCreateObjectBlockCreate": blockCreateObjectBlockCreate_1.BlockCreateObjectBlockCreate,
    "BlockCreateResponseObject": blockCreateResponseObject_1.BlockCreateResponseObject,
    "BlockCreateResponseObjectBlockCreateResponse": blockCreateResponseObjectBlockCreateResponse_1.BlockCreateResponseObjectBlockCreateResponse,
    "CancelObject": cancelObject_1.CancelObject,
    "CancelObjectCancel": cancelObjectCancel_1.CancelObjectCancel,
    "CancelResponseObject": cancelResponseObject_1.CancelResponseObject,
    "CancelResponseObjectCancelResponse": cancelResponseObjectCancelResponse_1.CancelResponseObjectCancelResponse,
    "CaptureObject": captureObject_1.CaptureObject,
    "CaptureObjectCapture": captureObjectCapture_1.CaptureObjectCapture,
    "CaptureResponseObject": captureResponseObject_1.CaptureResponseObject,
    "CloseObject": closeObject_1.CloseObject,
    "CloseObjectClose": closeObjectClose_1.CloseObjectClose,
    "CloseResponseObject": closeResponseObject_1.CloseResponseObject,
    "CloseResponseObjectCloseResponse": closeResponseObjectCloseResponse_1.CloseResponseObjectCloseResponse,
    "ConfigureObject": configureObject_1.ConfigureObject,
    "ConfigureObjectConfigure": configureObjectConfigure_1.ConfigureObjectConfigure,
    "ConfigureObjectConfigureFiles": configureObjectConfigureFiles_1.ConfigureObjectConfigureFiles,
    "ConfigureObjectConfigureOperations": configureObjectConfigureOperations_1.ConfigureObjectConfigureOperations,
    "ConfigureObjectConfigureTables": configureObjectConfigureTables_1.ConfigureObjectConfigureTables,
    "ConfigureResponseObject": configureResponseObject_1.ConfigureResponseObject,
    "ConfigureResponseObjectConfigureResponse": configureResponseObjectConfigureResponse_1.ConfigureResponseObjectConfigureResponse,
    "ConfirmObject": confirmObject_1.ConfirmObject,
    "ConfirmObjectConfirm": confirmObjectConfirm_1.ConfirmObjectConfirm,
    "ConfirmResponseObject": confirmResponseObject_1.ConfirmResponseObject,
    "ConfirmResponseObjectConfirmResponse": confirmResponseObjectConfirmResponse_1.ConfirmResponseObjectConfirmResponse,
    "DebtInquiryObject": debtInquiryObject_1.DebtInquiryObject,
    "DebtInquiryObjectDebtInquiry": debtInquiryObjectDebtInquiry_1.DebtInquiryObjectDebtInquiry,
    "DebtInquiryResponseObject": debtInquiryResponseObject_1.DebtInquiryResponseObject,
    "DebtInquiryResponseObjectDebtInquiryResponse": debtInquiryResponseObjectDebtInquiryResponse_1.DebtInquiryResponseObjectDebtInquiryResponse,
    "DebtInquiryResponseObjectDebtInquiryResponseAccountSummary": debtInquiryResponseObjectDebtInquiryResponseAccountSummary_1.DebtInquiryResponseObjectDebtInquiryResponseAccountSummary,
    "DebtInquiryResponseObjectDebtInquiryResponseAccountSummaryAccountStatus": debtInquiryResponseObjectDebtInquiryResponseAccountSummaryAccountStatus_1.DebtInquiryResponseObjectDebtInquiryResponseAccountSummaryAccountStatus,
    "DebtInquiryResponseObjectDebtInquiryResponseCompanies": debtInquiryResponseObjectDebtInquiryResponseCompanies_1.DebtInquiryResponseObjectDebtInquiryResponseCompanies,
    "DebtPaymentObject": debtPaymentObject_1.DebtPaymentObject,
    "DebtPaymentObjectDebtPayment": debtPaymentObjectDebtPayment_1.DebtPaymentObjectDebtPayment,
    "DebtPaymentObjectDebtPaymentRequiredInformation": debtPaymentObjectDebtPaymentRequiredInformation_1.DebtPaymentObjectDebtPaymentRequiredInformation,
    "DebtPaymentResponseObject": debtPaymentResponseObject_1.DebtPaymentResponseObject,
    "DebtPaymentResponseObjectDebtPaymentResponse": debtPaymentResponseObjectDebtPaymentResponse_1.DebtPaymentResponseObjectDebtPaymentResponse,
    "DepositObject": depositObject_1.DepositObject,
    "DepositObjectDeposit": depositObjectDeposit_1.DepositObjectDeposit,
    "DepositResponseObject": depositResponseObject_1.DepositResponseObject,
    "DepositResponseObjectDepositResponse": depositResponseObjectDepositResponse_1.DepositResponseObjectDepositResponse,
    "EnableServiceObject": enableServiceObject_1.EnableServiceObject,
    "EnableServiceObjectEnableService": enableServiceObjectEnableService_1.EnableServiceObjectEnableService,
    "EnableServiceResponseObject": enableServiceResponseObject_1.EnableServiceResponseObject,
    "EnableServiceResponseObjectEnableServiceResponse": enableServiceResponseObjectEnableServiceResponse_1.EnableServiceResponseObjectEnableServiceResponse,
    "EnrollmentObject": enrollmentObject_1.EnrollmentObject,
    "EnrollmentObjectEnrollment": enrollmentObjectEnrollment_1.EnrollmentObjectEnrollment,
    "EnrollmentObjectEnrollmentRecurrence": enrollmentObjectEnrollmentRecurrence_1.EnrollmentObjectEnrollmentRecurrence,
    "EnrollmentResponseObject": enrollmentResponseObject_1.EnrollmentResponseObject,
    "EnrollmentResponseObjectEnrollmentResponse": enrollmentResponseObjectEnrollmentResponse_1.EnrollmentResponseObjectEnrollmentResponse,
    "GetBlockObject": getBlockObject_1.GetBlockObject,
    "GetBlockObjectGetBlock": getBlockObjectGetBlock_1.GetBlockObjectGetBlock,
    "GetBlockObjectGetBlockTransactionsRequired": getBlockObjectGetBlockTransactionsRequired_1.GetBlockObjectGetBlockTransactionsRequired,
    "GetBlockResponseObject": getBlockResponseObject_1.GetBlockResponseObject,
    "GetBlockResponseObjectGetBlockResponse": getBlockResponseObjectGetBlockResponse_1.GetBlockResponseObjectGetBlockResponse,
    "GetCardObject": getCardObject_1.GetCardObject,
    "GetCardObjectGetCard": getCardObjectGetCard_1.GetCardObjectGetCard,
    "GetCardResponseObject": getCardResponseObject_1.GetCardResponseObject,
    "GetCardResponseObjectGetCardResponse": getCardResponseObjectGetCardResponse_1.GetCardResponseObjectGetCardResponse,
    "GetTransactionObject": getTransactionObject_1.GetTransactionObject,
    "GetTransactionObjectGetTransaction": getTransactionObjectGetTransaction_1.GetTransactionObjectGetTransaction,
    "GetTransactionResponseObject": getTransactionResponseObject_1.GetTransactionResponseObject,
    "GetTransactionResponseObjectGetTransactionResponse": getTransactionResponseObjectGetTransactionResponse_1.GetTransactionResponseObjectGetTransactionResponse,
    "GetTransactionResponseObjectGetTransactionResponsePayer": getTransactionResponseObjectGetTransactionResponsePayer_1.GetTransactionResponseObjectGetTransactionResponsePayer,
    "GetTransactionResponseObjectGetTransactionResponseTransaction": getTransactionResponseObjectGetTransactionResponseTransaction_1.GetTransactionResponseObjectGetTransactionResponseTransaction,
    "KeepAliveObject": keepAliveObject_1.KeepAliveObject,
    "KeepAliveResponseObject": keepAliveResponseObject_1.KeepAliveResponseObject,
    "KeepAliveResponseObjectKeepAliveResponse": keepAliveResponseObjectKeepAliveResponse_1.KeepAliveResponseObjectKeepAliveResponse,
    "KeysRenewalObject": keysRenewalObject_1.KeysRenewalObject,
    "KeysRenewalObjectKeysRenewal": keysRenewalObjectKeysRenewal_1.KeysRenewalObjectKeysRenewal,
    "KeysRenewalResponseObject": keysRenewalResponseObject_1.KeysRenewalResponseObject,
    "KeysRenewalResponseObjectKeysRenewalResponse": keysRenewalResponseObjectKeysRenewalResponse_1.KeysRenewalResponseObjectKeysRenewalResponse,
    "OrderFinalObject": orderFinalObject_1.OrderFinalObject,
    "OrderFinalObjectOrderFinal": orderFinalObjectOrderFinal_1.OrderFinalObjectOrderFinal,
    "OrderFinalResponseObject": orderFinalResponseObject_1.OrderFinalResponseObject,
    "OrderFinalResponseObjectOrderFinalResponse": orderFinalResponseObjectOrderFinalResponse_1.OrderFinalResponseObjectOrderFinalResponse,
    "OrderGetObject": orderGetObject_1.OrderGetObject,
    "OrderGetObjectOrderGet": orderGetObjectOrderGet_1.OrderGetObjectOrderGet,
    "OrderGetResponseObject": orderGetResponseObject_1.OrderGetResponseObject,
    "OrderGetResponseObjectOrderGetResponse": orderGetResponseObjectOrderGetResponse_1.OrderGetResponseObjectOrderGetResponse,
    "OrderInitialObject": orderInitialObject_1.OrderInitialObject,
    "OrderInitialObjectOrderInitial": orderInitialObjectOrderInitial_1.OrderInitialObjectOrderInitial,
    "OrderInitialResponseObject": orderInitialResponseObject_1.OrderInitialResponseObject,
    "OrderInitialResponseObjectOrderInitialResponse": orderInitialResponseObjectOrderInitialResponse_1.OrderInitialResponseObjectOrderInitialResponse,
    "OrderStatusObject": orderStatusObject_1.OrderStatusObject,
    "OrderStatusObjectOrderStatus": orderStatusObjectOrderStatus_1.OrderStatusObjectOrderStatus,
    "OrderStatusResponseObject": orderStatusResponseObject_1.OrderStatusResponseObject,
    "OrderStatusResponseObjectOrderStatusResponse": orderStatusResponseObjectOrderStatusResponse_1.OrderStatusResponseObjectOrderStatusResponse,
    "PaymentMethodObject": paymentMethodObject_1.PaymentMethodObject,
    "PaymentMethodObjectPaymentMethod": paymentMethodObjectPaymentMethod_1.PaymentMethodObjectPaymentMethod,
    "PaymentMethodResponseObject": paymentMethodResponseObject_1.PaymentMethodResponseObject,
    "PaymentMethodResponseObjectPaymentMethodResponse": paymentMethodResponseObjectPaymentMethodResponse_1.PaymentMethodResponseObjectPaymentMethodResponse,
    "PaymentMethodResponseObjectPaymentMethodResponseConfiguration": paymentMethodResponseObjectPaymentMethodResponseConfiguration_1.PaymentMethodResponseObjectPaymentMethodResponseConfiguration,
    "PaymentMethodResponseObjectPaymentMethodResponseConfigurationCompany": paymentMethodResponseObjectPaymentMethodResponseConfigurationCompany_1.PaymentMethodResponseObjectPaymentMethodResponseConfigurationCompany,
    "PaymentMethodsObject": paymentMethodsObject_1.PaymentMethodsObject,
    "PaymentMethodsObjectPaymentMethods": paymentMethodsObjectPaymentMethods_1.PaymentMethodsObjectPaymentMethods,
    "PaymentMethodsResponseObject": paymentMethodsResponseObject_1.PaymentMethodsResponseObject,
    "PaymentMethodsResponseObjectPaymentMethodsResponse": paymentMethodsResponseObjectPaymentMethodsResponse_1.PaymentMethodsResponseObjectPaymentMethodsResponse,
    "PaymentMethodsResponseObjectPaymentMethodsResponseCategory": paymentMethodsResponseObjectPaymentMethodsResponseCategory_1.PaymentMethodsResponseObjectPaymentMethodsResponseCategory,
    "PaymentMethodsResponseObjectPaymentMethodsResponsePaymentMethods": paymentMethodsResponseObjectPaymentMethodsResponsePaymentMethods_1.PaymentMethodsResponseObjectPaymentMethodsResponsePaymentMethods,
    "PaymentMethodsResponseObjectPaymentMethodsResponseType": paymentMethodsResponseObjectPaymentMethodsResponseType_1.PaymentMethodsResponseObjectPaymentMethodsResponseType,
    "QueryCompaniesObject": queryCompaniesObject_1.QueryCompaniesObject,
    "QueryCompaniesObjectQueryCompanies": queryCompaniesObjectQueryCompanies_1.QueryCompaniesObjectQueryCompanies,
    "QueryCompaniesResponseObject": queryCompaniesResponseObject_1.QueryCompaniesResponseObject,
    "QueryCompaniesResponseObjectQueryCompaniesResponse": queryCompaniesResponseObjectQueryCompaniesResponse_1.QueryCompaniesResponseObjectQueryCompaniesResponse,
    "QueryCompaniesResponseObjectQueryCompaniesResponseAdditionalInformation": queryCompaniesResponseObjectQueryCompaniesResponseAdditionalInformation_1.QueryCompaniesResponseObjectQueryCompaniesResponseAdditionalInformation,
    "QueryCompaniesResponseObjectQueryCompaniesResponseCompanies": queryCompaniesResponseObjectQueryCompaniesResponseCompanies_1.QueryCompaniesResponseObjectQueryCompaniesResponseCompanies,
    "QueryLineOfBusinessObject": queryLineOfBusinessObject_1.QueryLineOfBusinessObject,
    "QueryLineOfBusinessObjectQueryLineOfBusiness": queryLineOfBusinessObjectQueryLineOfBusiness_1.QueryLineOfBusinessObjectQueryLineOfBusiness,
    "QueryLineOfBusinessResponseObject": queryLineOfBusinessResponseObject_1.QueryLineOfBusinessResponseObject,
    "QueryLineOfBusinessResponseObjectQueryLineOfBusinessResponse": queryLineOfBusinessResponseObjectQueryLineOfBusinessResponse_1.QueryLineOfBusinessResponseObjectQueryLineOfBusinessResponse,
    "QueryLineOfBusinessResponseObjectQueryLineOfBusinessResponseLineOfBusiness": queryLineOfBusinessResponseObjectQueryLineOfBusinessResponseLineOfBusiness_1.QueryLineOfBusinessResponseObjectQueryLineOfBusinessResponseLineOfBusiness,
    "ReturnObject": returnObject_1.ReturnObject,
    "ReturnObjectReturn": returnObjectReturn_1.ReturnObjectReturn,
    "ReturnResponseObject": returnResponseObject_1.ReturnResponseObject,
    "SaleObject": saleObject_1.SaleObject,
    "SaleObjectSale": saleObjectSale_1.SaleObjectSale,
    "SaleObjectSaleCustomer": saleObjectSaleCustomer_1.SaleObjectSaleCustomer,
    "SaleObjectSaleInputTokens": saleObjectSaleInputTokens_1.SaleObjectSaleInputTokens,
    "SaleObjectSalePayer": saleObjectSalePayer_1.SaleObjectSalePayer,
    "SaleObjectSaleProducts": saleObjectSaleProducts_1.SaleObjectSaleProducts,
    "SaleObjectSaleRequiredInformation": saleObjectSaleRequiredInformation_1.SaleObjectSaleRequiredInformation,
    "SaleObjectSaleSecurity": saleObjectSaleSecurity_1.SaleObjectSaleSecurity,
    "SaleObjectSaleSeller": saleObjectSaleSeller_1.SaleObjectSaleSeller,
    "SaleObjectSaleValues": saleObjectSaleValues_1.SaleObjectSaleValues,
    "SaleResponseObject": saleResponseObject_1.SaleResponseObject,
    "SaleResponseObjectSaleResponse": saleResponseObjectSaleResponse_1.SaleResponseObjectSaleResponse,
    "SaleResponseObjectSaleResponseAdditionalInformation": saleResponseObjectSaleResponseAdditionalInformation_1.SaleResponseObjectSaleResponseAdditionalInformation,
    "SaleResponseObjectSaleResponseCardCategory": saleResponseObjectSaleResponseCardCategory_1.SaleResponseObjectSaleResponseCardCategory,
    "SaleResponseObjectSaleResponseConfiguration": saleResponseObjectSaleResponseConfiguration_1.SaleResponseObjectSaleResponseConfiguration,
    "SaleResponseObjectSaleResponseConfigurationBranch": saleResponseObjectSaleResponseConfigurationBranch_1.SaleResponseObjectSaleResponseConfigurationBranch,
    "SaleResponseObjectSaleResponseConfigurationCompany": saleResponseObjectSaleResponseConfigurationCompany_1.SaleResponseObjectSaleResponseConfigurationCompany,
    "SaleResponseObjectSaleResponseLayout": saleResponseObjectSaleResponseLayout_1.SaleResponseObjectSaleResponseLayout,
    "SaleResponseObjectSaleResponseMerchantCategory": saleResponseObjectSaleResponseMerchantCategory_1.SaleResponseObjectSaleResponseMerchantCategory,
    "SaleResponseObjectSaleResponseNotification": saleResponseObjectSaleResponseNotification_1.SaleResponseObjectSaleResponseNotification,
    "SaleResponseObjectSaleResponseNotificationControlUseRule": saleResponseObjectSaleResponseNotificationControlUseRule_1.SaleResponseObjectSaleResponseNotificationControlUseRule,
    "SaleResponseObjectSaleResponseNotificationDistributionList": saleResponseObjectSaleResponseNotificationDistributionList_1.SaleResponseObjectSaleResponseNotificationDistributionList,
    "SaleResponseObjectSaleResponsePaymentMethod": saleResponseObjectSaleResponsePaymentMethod_1.SaleResponseObjectSaleResponsePaymentMethod,
    "SaleResponseObjectSaleResponsePaymentMethodCategory": saleResponseObjectSaleResponsePaymentMethodCategory_1.SaleResponseObjectSaleResponsePaymentMethodCategory,
    "SaleResponseObjectSaleResponsePaymentMethodDebitAccount": saleResponseObjectSaleResponsePaymentMethodDebitAccount_1.SaleResponseObjectSaleResponsePaymentMethodDebitAccount,
    "SaleResponseObjectSaleResponsePaymentMethodIssuers": saleResponseObjectSaleResponsePaymentMethodIssuers_1.SaleResponseObjectSaleResponsePaymentMethodIssuers,
    "SaleResponseObjectSaleResponsePaymentMethodType": saleResponseObjectSaleResponsePaymentMethodType_1.SaleResponseObjectSaleResponsePaymentMethodType,
    "SaleResponseObjectSaleResponsePlans": saleResponseObjectSaleResponsePlans_1.SaleResponseObjectSaleResponsePlans,
    "SaleResponseObjectSaleResponsePlansCashback": saleResponseObjectSaleResponsePlansCashback_1.SaleResponseObjectSaleResponsePlansCashback,
    "SaleResponseObjectSaleResponsePlansDeferral": saleResponseObjectSaleResponsePlansDeferral_1.SaleResponseObjectSaleResponsePlansDeferral,
    "SaleResponseObjectSaleResponseProducts": saleResponseObjectSaleResponseProducts_1.SaleResponseObjectSaleResponseProducts,
    "SaleResponseObjectSaleResponseRequiredInformation": saleResponseObjectSaleResponseRequiredInformation_1.SaleResponseObjectSaleResponseRequiredInformation,
    "SaleResponseObjectSaleResponseTickets": saleResponseObjectSaleResponseTickets_1.SaleResponseObjectSaleResponseTickets,
    "SaleResponseObjectSaleResponseWorkingKeys": saleResponseObjectSaleResponseWorkingKeys_1.SaleResponseObjectSaleResponseWorkingKeys,
    "SettlementObject": settlementObject_1.SettlementObject,
    "SettlementObjectSettlement": settlementObjectSettlement_1.SettlementObjectSettlement,
    "SettlementResponseObject": settlementResponseObject_1.SettlementResponseObject,
    "ValidateObject": validateObject_1.ValidateObject,
    "ValidateObjectValidate": validateObjectValidate_1.ValidateObjectValidate,
    "ValidateResponseObject": validateResponseObject_1.ValidateResponseObject,
    "ValidateResponseObjectValidateResponse": validateResponseObjectValidateResponse_1.ValidateResponseObjectValidateResponse,
    "VoidDebtPaymentObject": voidDebtPaymentObject_1.VoidDebtPaymentObject,
    "VoidDebtPaymentObjectVoidDebtPayment": voidDebtPaymentObjectVoidDebtPayment_1.VoidDebtPaymentObjectVoidDebtPayment,
    "VoidDebtPaymentObjectVoidDebtPaymentProducts": voidDebtPaymentObjectVoidDebtPaymentProducts_1.VoidDebtPaymentObjectVoidDebtPaymentProducts,
    "VoidDebtPaymentResponseObject": voidDebtPaymentResponseObject_1.VoidDebtPaymentResponseObject,
    "VoidObject": voidObject_1.VoidObject,
    "VoidObjectVoid": voidObjectVoid_1.VoidObjectVoid,
    "VoidResponseObject": voidResponseObject_1.VoidResponseObject,
    "VoidResponseObjectVoidResponse": voidResponseObjectVoidResponse_1.VoidResponseObjectVoidResponse,
    "WalletRequestObject": walletRequestObject_1.WalletRequestObject,
    "WalletRequestObjectWalletRequest": walletRequestObjectWalletRequest_1.WalletRequestObjectWalletRequest,
    "WalletRequestResponseObject": walletRequestResponseObject_1.WalletRequestResponseObject,
    "WalletRequestResponseObjectWalletRequestResponse": walletRequestResponseObjectWalletRequestResponse_1.WalletRequestResponseObjectWalletRequestResponse,
    "WalletsObject": walletsObject_1.WalletsObject,
    "WalletsObjectWallets": walletsObjectWallets_1.WalletsObjectWallets,
    "WalletsResponseObject": walletsResponseObject_1.WalletsResponseObject,
    "WalletsResponseObjectWalletsResponse": walletsResponseObjectWalletsResponse_1.WalletsResponseObjectWalletsResponse,
    "WalletsResponseObjectWalletsResponseWallets": walletsResponseObjectWalletsResponseWallets_1.WalletsResponseObjectWalletsResponseWallets
};
var ObjectSerializer = /** @class */ (function () {
    function ObjectSerializer() {
    }
    ObjectSerializer.findCorrectType = function (data, expectedType) {
        if (data == undefined) {
            return expectedType;
        }
        else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        }
        else if (expectedType === "Date") {
            return expectedType;
        }
        else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }
            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }
            // Check the discriminator
            var discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            }
            else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if (typeMap[discriminatorType]) {
                        return discriminatorType; // use the type given in the discriminator
                    }
                    else {
                        return expectedType; // discriminator did not map to a type
                    }
                }
                else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    };
    ObjectSerializer.serialize = function (data, type) {
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            var subType = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            var transformedData = [];
            for (var index = 0; index < data.length; index++) {
                var datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        }
        else if (type === "Date") {
            return data.toISOString();
        }
        else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }
            // Get the actual type of this object
            type = this.findCorrectType(data, type);
            // get the map for the correct type.
            var attributeTypes = typeMap[type].getAttributeTypeMap();
            var instance = {};
            for (var index = 0; index < attributeTypes.length; index++) {
                var attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    };
    ObjectSerializer.deserialize = function (data, type) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            var subType = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            var transformedData = [];
            for (var index = 0; index < data.length; index++) {
                var datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        }
        else if (type === "Date") {
            return new Date(data);
        }
        else {
            if (enumsMap[type]) { // is Enum
                return data;
            }
            if (!typeMap[type]) { // dont know the type
                return data;
            }
            var instance = new typeMap[type]();
            var attributeTypes = typeMap[type].getAttributeTypeMap();
            for (var index = 0; index < attributeTypes.length; index++) {
                var attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    };
    return ObjectSerializer;
}());
exports.ObjectSerializer = ObjectSerializer;
var HttpBasicAuth = /** @class */ (function () {
    function HttpBasicAuth() {
        this.username = '';
        this.password = '';
    }
    HttpBasicAuth.prototype.applyToRequest = function (requestOptions) {
        requestOptions.auth = {
            username: this.username, password: this.password
        };
    };
    return HttpBasicAuth;
}());
exports.HttpBasicAuth = HttpBasicAuth;
var HttpBearerAuth = /** @class */ (function () {
    function HttpBearerAuth() {
        this.accessToken = '';
    }
    HttpBearerAuth.prototype.applyToRequest = function (requestOptions) {
        if (requestOptions && requestOptions.headers) {
            var accessToken = typeof this.accessToken === 'function'
                ? this.accessToken()
                : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    };
    return HttpBearerAuth;
}());
exports.HttpBearerAuth = HttpBearerAuth;
var ApiKeyAuth = /** @class */ (function () {
    function ApiKeyAuth(location, paramName) {
        this.location = location;
        this.paramName = paramName;
        this.apiKey = '';
    }
    ApiKeyAuth.prototype.applyToRequest = function (requestOptions) {
        if (this.location == "query") {
            requestOptions.qs[this.paramName] = this.apiKey;
        }
        else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        }
        else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    };
    return ApiKeyAuth;
}());
exports.ApiKeyAuth = ApiKeyAuth;
var OAuth = /** @class */ (function () {
    function OAuth() {
        this.accessToken = '';
    }
    OAuth.prototype.applyToRequest = function (requestOptions) {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    };
    return OAuth;
}());
exports.OAuth = OAuth;
var VoidAuth = /** @class */ (function () {
    function VoidAuth() {
        this.username = '';
        this.password = '';
    }
    VoidAuth.prototype.applyToRequest = function (_) {
        // Do nothing
    };
    return VoidAuth;
}());
exports.VoidAuth = VoidAuth;
