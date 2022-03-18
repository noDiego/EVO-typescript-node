/**
 * EVO Payment API
 * <h1 style=\"border:4px solid #004785;color:#004785; font-family: \'Open Sans\', sans-serif; font-size: 32px;\">API de Pagos</h1> <br /><br /> <h1 style=\"border:4px solid #004785;color:#004785; font-family: \'Open Sans\', sans-serif; font-size: 24px;\">Descripción del Servicio</h1> <p style=\"color:#004785;\"><b><u>Documentación en formato OpenAPI 3.0</b></u></p> <br/> Contrato especificado según especificaciones https://www.openapis.org/ y https://swagger.io/.<br /><br />  En el site https://editor.swagger.io/ se dispone de un  Viewer, Editor y  Generar de Código ( SDK ) para varios lenguajes de programación; incluyendo JAVA, C#, C++, Perl, Node.js, GO, PHP, Ruby y otros.<br/><br/> Para <b>ver</b> la documentación o <b>generar</b> código de la librería cliente o SDK  se deberá selecciónar en el menú horizontal  la opción <b>File</b>, en el menú vertical que se depliega la opción <b>Import File</b> y luego se deberá selecciónar el archivo del contrato deseado, ya sea  extensión <b>.json</b> o <b>.yaml</b>. <br/><br/> Además se puede generar el código de la librería cliente desde la línea de comandos a través de la herramienta  <b>CLI</b>  de  <b>OpenAPI Generator</b>. Esta presenta generadores de SDK en mayor variedad de lenguajes de programación.  En el site https://openapi-generator.tech/docs/installation se documenta cómo  <b>instalar</b> la herramienta CLI.<br/><br/> Los clientes generados contienen, adicionalmente al código,  la documentación de uso del mismo en <b>README.md</b>, como también en el subdirectorio <b>docs</b> toda la documentación del API o servicio y sus operaciones, con el detalle de los  campos o elementos y su dominio.<br /><br /><br /><br /> <h1 style=\"border:4px solid #004785;color:#004785; font-family: \'Open Sans\', sans-serif; font-size: 24px;\">Notas a tener en cuenta para realizar la Integración</h1><br/> <p style=\"color:#004785;\"><b><u>Conceptos y/ Mecanismos relevantes Soportados por el Protocolo de Integración</u></b></p> <br/><br/> <span>&#8226;</span> <b>Interpretración de las Respuesta</b>,<br /><br/> El único campo que indica si la transacción fue aprobada, rechazada, o tienen algun error, es el elemento de las respuestas llamado <b>ResponseActions</b>, el  cual es un <b>ARRAY</b> de valores. Cada uno de estos indica una acción a realizar. Los elementos <b>ResponseCode</b>  y <b>ResponseMessage</b> son solamente informativos y por lo tanto no deben usarse para tomar acciones y los mismos pueden cambiar en base a la configuración de la Plataforma.<br/><br/> <span>&#8226;</span> <b>Bloque de transacciones</b>, permite Confirmar o Cancelar/Revertir todas las transacciones que forman parte de un bloque. <br/><br/> El POS puede definir un bloque o conjunto de transacciones simplemente indicando en todas ellas el mismo valor en el atributo/elemento/campo opcional llamado <b>Block</b>.<br/>  La operación <b>BlockCancel</b>, permite que el POS pueda solicitar a la plataforma la reversión y/o cancelación de todo el bloque de transacciones .<br/> La operación <b>BlockClose</b>, confirma todas las transacciones que forman parte del bloque especificado.<br/> Si el POS no posee un identificador unívoco de la transacción de venta, al momento de interactuar contra la plataforma podrá obtener uno con la operación  <b>BlockCreate</b>. Si el elemento o campo <b>Block</b>  existe y su contenido es Vacío o Nulo la plataforma realiza un <b>BlockCreate</b> automáticamente.<br /><br/> <span>&#8226;</span> <b>Reversas por Ruptura de Secuencia</b>. Evita la necesidad de persistir datos de la reversa y ahorra una transacción en el flujo.<br/>   El método llamado de ruptura de secuencia es utilizado para detectar los casos en los cuales el POS o Caja no pudo recibir una respuesta del mismo o no pudo procesarla adecuadamente. De esta forma permite a la misma reversar la transacción que no pudo procesar el POS o recibir la respuesta si fuese necesario.     En todo requerimiento el POS debe enviar el campo/elemento Sequence, con el valor recibido en el anterior requerimiento o vacío en el primero.    La plataforma  genera una nueva secuencia solamente cuando el requerimiento realizado es reversible o cuando se produce una ruptura.  Por lo tanto los comandos en los cuales la plataforma  genera una nueva secuencia son <b>Sale</b>, <b>Void</b>, <b>Authorize*</b>, <b>DebtPayment</b>, <b>VoidDebtPayment</b>, <b>Confirm</b>, <b>Close</b> y <b>Cancel</b>.    En caso de que la plataforma reverse el requerimiento previo retornará en la respuesta los siguiente campos o elementos.   <blockquote><b>WasReversePrevious</b>, con valor <b>1</b><br/>   <b>ReversedAnswerKey</b> conteniendo el <b>AnswerKey</b> de la transacción reversada<br/>   <b>ReversedSequence</b> conteniendo el <b>Sequence </b>de la transacción reversada</blockquote>    En caso de que la plataforma no reverse el requerimiento previo retornará los siguientes campos o elementos <blockquote><b>WasReversePrevious</b>, con valor <b>0</b></blockquote> <br/> <span>&#8226;</span> <b>Reversas Tradicionales</b>. El POS debe repetir el mismo requerimiento adicionando el atributo/elemento <b>IsReverse</b> con valor <b>1</b>.  Se debe tener en cuenta que en esta modalidad la plataforma no retorna los siguientes atributos/elementos.    <blockquote>   <b>WasReversePrevious</b><br/>   <b>ReversedAnswerKey</b><br/>   <b>ReversedSequence</b>   </blockquote>    <span>&#8226;</span> <b>Transacción Opcional de Confirmación</b>, ya que el mecanismo anterior permite que cada transacción Reverse o Confirme la anterior.<br/><br/> <span>&#8226;</span> <b>La Plataforma indica siempre las acciones que se deben realizar</b><br/><br/> <span>&#8226;</span><span>&#8226;</span> <b>Solicitar datos adicionales</b> ( <b>RequiredInformation</b> ), indicando no sólo cuáles son, sino también de qué tipo, valor  inicial, patrón de validación, si son mandatorios o no, qué Label se presenta al usuario, qué ayuda se presenta al usuario, etc.<br/> <span>&#8226;</span><span>&#8226;</span> <b>Mostrar Mensajes en Pantalla</b>. <span>&#8226;</span><span>&#8226;</span> <b>Imprimir Tickets</b>, ya sea en papel o capturar digitalmente el mismo, como así también el Layout de los mismos.<br/><br/><br/> <span>&#8226;</span> <b>Compresión de la trama</b> en base a codificación de los campos numéricos, string siempre de longitud variable, uso de sinónimos en los  campos, para que el programador programe usando los nombres largos y en el transporte se usen sus sinónimos cortos. <br/> <br/> <span>&#8226;</span> <b>Seguridad de los Datos Sensibles y de la Transaccion</b>, El elemento <b>Security</b> debera estar presente solo si los datos sensibles <b>CardNumber</b>, <b>ExpDate</b>, <b>PIN</b>, <b>Track1</b>, <b>Track2</b>, <b>SecurityCode</b> y  <b>CardCryptogram</b> deban ser envidos encriptados y por lo tanto este le elemento nos permite indicar el metodo de encriptacion utilizado y los datos adicionales que sean requeridos por la encriptacion. Si por ejemplo fuese el elemento PIN usando DUKPT y el resto de los datos sencible Track1, Track2 y SecurityCode, se deberian enviar  de la siguiente forma: </br>        \"Security” :  [         {           \"Type\": \"PIN\",           \"Values\":  [               {                    \"Name\": \"Method\",                   \"Value\": \"DUKPT\"               },               {                    \"Name\": \"KSN\",                   \"Value\": \"1234567890ABCDEF\"               },               {                    \"Name\": \"CRC32\",                   \"Value\": \"12345\"               },               {                    \"Name\": \"PlainTextLength\",                   \"Value\": \"4\"               },               {                    \"Name\": \"CipherCounter\",                   \"Value\": \"123\"               },               {                    \"Name\": \"ConsecutiveFailedCiphersCounter\",                   \"Value\": \"123\"               },               {                    \"Name\": \"Data\",                   \"Value\": \"01234567890123456\"               }           ]          },         {           \"Type\": \"SensitiveData\",           \"Values\":  [               {                    \"Name\": \"Method\",                   \"Value\": \"DUKPT-eGlobal\"               },               {                    \"Name\": \"KSN\",                   \"Value\": \"1234567890ABCDEF\"               },               {                    \"Name\": \"Track1CRC32\",                   \"Value\": \"12345\"               },               {                    \"Name\": \"Track2CRC32\",                   \"Value\": \"12345\"               },               {                    \"Name\": \"Track1Length\",                   \"Value\": \"79\"               },               {                    \"Name\": \"Track2Length\",                   \"Value\": \"37\"               },               {                    \"Name\": \"SecurityCodeLength\",                   \"Value\": \"3\"               },               {                    \"Name\": \"CipherCounter\",                   \"Value\": \"123\"               },               {                    \"Name\": \"ConsecutiveFailedCiphersCounter\",                   \"Value\": \"123\"               },               {                    \"Name\": \"Data\",                   \"Value\": \"1ahbcd23412345123412b213b1324b1234b2134b2134132b4123b23\"               }           ]          },         {           \"Type\": \"3DSecure\",           \"Values\":  [               {                    \"Name\": \"Method\",                   \"Value\": \"3DS-SNAP\"               },               {                                           \"Name\":  \"TransactionStatus\",                   \"Value\": \"SuccessfullyAuthenticated\"               },               {                                           \"Name\":  \"AuthenticationECI\",                   \"Value\": \"05\"               },               {                                           \"Name\":  \"IsChallengeMandated\",                   \"Value\": \"false\"               },               ...               {                                           \"Name\":  \"AcsReferenceNumber\",                   \"Value\": \"3DS_LOA_ACS_PPFU_020100_00009\"               },               {                    \"Name\":  \"ProcessedAsDataOnly\",                   \"Value\": \"false\"               }           ]          }               ] </br> Para el caso de DUKPT-eGlobal, <b>Track2</b>, <b>SecurityCode</b> y <b>Track1</b> se cifraran formando parte del mismo Bloque, El mismo se debera formar con el Track2 ( reemplazando el signo = por el digito D ) completandolo hasta los 38 digitos con el digito F, luego el  SecurityCode completandolo hasta 10 digitos y por ultimo el Track1 padeado completando el bloque  de los 208 digitos.  </br> Este elemento <b>Security</b> sera utilizado para enviar cualquier dato de autenticacion del pagador por ejemplo 3DSecure, para el caso de que el proveedor de la Autenticacion sea SNAP se deberan contener como valores todos los elementos definidos en el objeto <b>ThreeDSInformation</b>.     </br> Este mecanismo podra utilizarse en el futuro para encriptar otros datos que sean sensibles pero no del medio de pago, si no de las personas. </br> <h1 style=\"border:4px solid #004785;color:#004785; font-family: \'Open Sans\', sans-serif; font-size: 24px;\">Log de Cambios</h1></br> <span>&#8226;</span> <b>Versión 5.6.1</b> <span>&#8226;</span><span>&#8226;</span> Se añade el campo <b>MerchantCategory</b> en las respuestas de todas las transacciones. Sólo se enviará en caso de que la categoría de la compañia exista.</br> <span>&#8226;</span> <b>Versión 5.6.0</b> <span>&#8226;</span><span>&#8226;</span> Los campos <b>ResponseCode</b>, <b>ResponseMessage</b> y <b>ResponseActions</b> son <b>obligatorios</b> en las respuestas de todas las transacciones.</br> <span>&#8226;</span> <b>Versión 5.5.7</b> <span>&#8226;</span><span>&#8226;</span> Se añade el elemento <b>Notification</b>. El mismo se encuentra dentro de <b>SaleResponse</b> y <b>AuthorizeSaleResponse</b>. Notificación a generar alertas vía e-mail.</br> <span>&#8226;</span> <b>Versión 5.5.6</b> <span>&#8226;</span><span>&#8226;</span> Se añaden los elementos <b>CardAppLabel</b>, <b>CardAuthRequestCryptogram</b> y <b>CardAuthResponseCryptogram</b>, para facilitar el analisis de los POS y ReadingDevices, el contenido de dichos elementos se encontraba en Tag de los elementos CardCryptogram y CardCryptogramResponse.</br> <span>&#8226;</span>  <b>Versión 5.5.5</b> <span>&#8226;</span><span>&#8226;</span> Se modifican los elementos <b>AuthorizeSale</b> y <b>AuthorizeSaleResponse</b> para su correcta documentación. Además, se añade el campo <b>ReadingDeviceOperatingFrom</b> el cual indica desde cuando se encuentra operativo o encendido el dispositivo</br> <span>&#8226;</span> <b>Versión 5.5.4</b> <span>&#8226;</span><span>&#8226;</span> Se renombra el atributo <b>ReasonReverse</b> a <b>ReverseReason</b>. Dicho campo permite notificar en las Reversas la razón por la cual fue necesario generarla.</br> <span>&#8226;</span> <b>Versión 5.5.3</b> <span>&#8226;</span><span>&#8226;</span> Se agregan atributos al elemento <b>Configuration</b> para la operación <b>PaymentMethod</b>. Por otra parte, se añade el mismo en todas las operaciones donde no se encontraba documentado. </br><b>• Versión 5.5.2</b> <span>&#8226;</span><span>&#8226;</span> Se Agrega el elemento <b>Payer</b> con los datos del Pagador. Originalmente hasta esta version se envian los mismos en el elemento <b>Customer</b>, pero desde ahora se permite que se informen personas ( fisicas y juridicas ) como cliente comprador y como pagador. Si el elemento <b>Payer</b> no esta presente se tomaran los datos del elemento <b>Customer</b>. Se da soporte al Tipo de Ticket Payer.</br> <span>&#8226;</span> <b>Versión 5.5.1</b> </br> <span>&#8226;</span><span>&#8226;</span> Se completa la documentacion de los Elementos <b>Seller</b> y <b>Customer</b>, agregandose los atributos <b>City</b> y  <b>AbbreviatedName</b>.<br/>   <span>&#8226;</span><span>&#8226;</span> Se unifica la definicion del Elemento  <b>Customer</b> .<br/>   <span>&#8226;</span><span>&#8226;</span> Se agrega el Elemento <b>PaymentFacilitatorID</b> para indicar el Identificador de Facilitador de pagos o Payfac.</br> <span>&#8226;</span> <b>Versión 5.5.0</b> </br> <span>&#8226;</span><span>&#8226;</span> El elemento <b>ResponseActions</b> y <b>PosOrDeviceAction</b> de todas las operaciones deja de ser una lista.<br/>  de elementos en un string y se convierte en un array de string. Cada valor de la lista anterior está representada por un elemento del array.<br/>   <span>&#8226;</span><span>&#8226;</span> Se agregan los campos <b>ForeignIdentifier</b>, <b>SmallImage</b> y <b>LargeImage</b> en el campo <b>Wallets</b> de la operación <b>WalletsResponse</b>.<br/> <span>&#8226;</span><span>&#8226;</span> En el campo <b>PaymentMethods</b> de la operación <b>PaymentMethodsResponse</b> se agregan las properties <b>Imag</b>, <b>SmallImage</b> y <b>LargeImage</b>. Además se adiciona el campo <b>ID</b> en <b>Category</b> y el campo <b>ForeignIdentifier</b> en <b>Type</b>. <br/> <span>&#8226;</span><span>&#8226;</span> Se agrupan los campos relacionados con los datos del cliente y del vendedor en dos únicos campos de tipo objeto denominados <b>Customer</b> y <b>Seller</b>, respectivamente.<br/> <span>&#8226;</span><span>&#8226;</span> El elemento Layout del campo <b>Tickets</b> se convierte en un array de objetos que contiene elementos que permiten describir, dar formato y codificar los datos a imprimir. <br/> <span>&#8226;</span><span>&#8226;</span> Se documenta la operación <b>OrderStatus</b>.</br> <span>&#8226;</span><span>&#8226;</span> Los campos que refieren a tiempo y fecha se convierten en formato date-time. </br> <span>&#8226;</span><span>&#8226;</span> Se agrega el campo <b>ForeignResponseCode</b> en todas las respuestas de las operaciones, como un código de para el sistema externo, es decir, para la aplicación cliente que se comunica con el TEF.</br> <span>&#8226;</span><span>&#8226;</span> Se adiciona el campo <b>CardGetMode</b> que permite indicar por cada elemento que contiene los datos sensibles, si están encriptados y también el algoritmo usado. En caso de no estar especificado se asume PLAIN.</br> <span>&#8226;</span><span>&#8226;</span> Se agrega el campo <b>OrigReference</b> en aquellas operaciones que pueden referenciar a una transacción previa, como <b>Void</b>, <b>Return</b> y <b>GetTransaction</b>.</br> <span>&#8226;</span><span>&#8226;</span> Se cambia la estrutura de la respuesta de la Operacion <b>GetTransacion</b> por errores. </br> <span>&#8226;</span><span>&#8226;</span> Se agregan las acciones Ok, Error y Retry en los campos <b>ResponseActions</b>.</br> <span>&#8226;</span><span>&#8226;</span> En aquellas operaciones financieras en las que se especifica la tarjeta se agrega en el requerimiento el campo <b>Pin</b>y en la respuesta el campo <b>WorkingKeys</b>.</br> <span>&#8226;</span><span>&#8226;</span> Se agrega el campo <b>Security</b> con el objetivo de indicar los datos sensibles de seguridad de una transacción tanto en los requerimientos como en las respuestas de las operaciones disponibles.</br> <span>&#8226;</span><span>&#8226;</span> Se agrega la operacion <b>KeysRenewal</b> Las claves podran ser retornadas en el elemento <b>Security</b> y en caso de obtener como accion de respuesta <b>KeysRenewal</b> se esta indicando que esta nueva operacion debe ser ejecutada.<br/>      <span>&#8226;</span><span>&#8226;</span> Se agrega la opcion <b>Signature</b>  .<br/>     <span>&#8226;</span><span>&#8226;</span> Se agrega el elemento  <b>CategoryCode</b> para especificar el MCC del Vendedor y/o del Cliente  .<br/>     <span>&#8226;</span><span>&#8226;</span> Se agregan los Elementos <b>MerchantID</b>, <b>TerminalID</b>, <b>TraceNumber</b> y <b>SettlementBatchNumber</b> En los requerimientos, en caso que los mismos contengan valor los mismos seran utilizados para enviar al Host Resolutor de la Transaccion.</br>  <span>&#8226;</span><span>&#8226;</span> Se agregan los valores para pagos recurrentes a  los Elementos  <b>CardReadMode</b> y  <b>CardReadModeDescription</b> <span>&#8226;</span> <b>Versión 5.4.0</b> </br> <span>&#8226;</span><span>&#8226;</span> Se cambia la dirección IP por el nombre.</br> <span>&#8226;</span><span>&#8226;</span> Se contemplan los Datos del <b>Vendedor/Seller</b> y del <b>Cliente/Customer</b> en las operaciones  <b>WalletRequest</b>, <b>Sale</b>, <b>AuthorizeSale</b>, <b>DebtPayment</b>,  <b>Deposit</b>,  <b>Settlement</b>,  <b>Capture</b>.</br> <span>&#8226;</span><span>&#8226;</span> Se Agregan los elementos <b>POSGEO</b> y <b>ReadingDeviceGEO</b> para que el dispositivo de lectura y el Punto de venta Notifiquen su coordenadas georefenciales en el momento de que se realiza la transacción.</br> <span>&#8226;</span><span>&#8226;</span> Se unifica y amplía el elemento <b>RequiredInformation</b>  tanto en los requerimientos como en las respuestas</br>  <span>&#8226;</span><span>&#8226;</span> Se cambia el tipo el elemento <b>CurrencyCode</b> a string para permitir cualquieras de la notaciones posibles.</br> <span>&#8226;</span><span>&#8226;</span> Se cambia el  elemento <b>Currency</b> por <b>CurrencyCode</b>  en el elemento <b>Plans</b>.</br> <span>&#8226;</span><span>&#8226;</span> Se contemplan del detalle ( elemento <b>Products</b> ) de la venta en las operaciones  <b>WalletRequest</b>, <b>Sale</b>, <b>Void</b>, <b>Return</b>, <b>AuthorizeSale</b>, <b>DebtPayment</b>,  <b>VoidDebtPayment</b>, <b>Deposit</b>,  <b>Settlement</b>,  <b>Capture</b>.</br> <span>&#8226;</span><span>&#8226;</span> Agregamos la operación <b>DebtInquiry</b> que actua como sinónimo de <b>BalanceInquery</b>, la cual podía ser usada para consulta de Saldo y también de deuda.</br> <span>&#8226;</span><span>&#8226;</span> Se corrigen los tipos de Datos de Varios campos <b>Amount</b> que en lugar de string debían ser number.</br> <span>&#8226;</span><span>&#8226;</span> Se agregan las operaciones <b>QueryCompanies</b> y <b>QueryLineOfBusiness</b> para la consulta de Rubros y Empresas que se pueden utilizar para pagar Servicios/Deuda/Facturas con la operación <b>DebtPayment</b>.</br> <span>&#8226;</span><span>&#8226;</span> Se adiciona el elemento <b>Companies</b> en la Operacion <b>BalanceInquiry</b> para el caso de que existan mas de una Compania para el mismo codigo o identificador de la deuda o factura a pagar y adicionalmente se agrega para ese caso la posibilidad de especificar a que compania corrende el Pago en el elemento <b>DebtCompanyIdentification</b> en la operación <b>DebtPayment</b>.</br> <span>&#8226;</span><span>&#8226;</span> Se adiciona el elemento <b>BaseAmonut</b> en los requerimientos de las operación <b>Return</b>, el elemento <b>Reference</b>  en las operaciones <b>Sale</b>, <b>AuthorizeSale</b>, <b>Void</b>, <b>Return</b>, <b>DebtPayment</b>, <b>VoidDebtPayment</b>, <b>GetTransaction</b> y <b>WalletRequest</b>.  Además, se agregan los elementos <b>TaxFinancialCostAmount</b>, <b>TaxFinancialCostPercentage</b>, <b>FinancialCostAmount</b>, <b>FinancialCostPercentage</b> y <b>RequestAmount</b>  en las respuestas de dichas operaciones.</br> <span>&#8226;</span><span>&#8226;</span> En cada plan que se devuelve a través del <b>PaymentMethodResponse</b> estarán presentes <b>TaxFinancialCostAmount</b>,  <b>TaxFinancialCostPercentage</b>, <b>FinancialCostAmount</b> y <b>FinancialCostPercentage</b>. </br> <span>&#8226;</span><span>&#8226;</span> Se agregan los elementos  <b>CardAppName</b> y <b>CardAppIdentifier</b> en las peticiones de las operaciones <b>Sale</b>, <b>AuthorizeSale</b>,  <b>Void</b>, <b>Return</b>, <b>PaymentMethods</b>, <b>GetCard</b>, <b>Validate</b>, <b>DebtInquiery</b>, <b>BalanceInquiry</b>, <b>DebtPayment</b> y <b>VoidDebtPayment</b>.  Además, se agregan en las respuestas de algunas de ellas.</br> <span>&#8226;</span><span>&#8226;</span> Se cambia la estructura del elemento <b>Tickets</b> de las respuestas donde el elemento <b>Action</b>  hace referencia a las acciones que debe ejecutar el punto de venta, el elemento <b>DeviceAction</b> a las acciones que debe ejecutar el dispositivo y <b>ExecutedAction</b> a las acciones  que ejecutó la plataforma para sus <b>Tickets</b>.</br> <span>&#8226;</span><span>&#8226;</span> Se adicionan los elementos <b>POSOrDeviceAction</b>, <b>OperationMode</b> y <b>OperationModeDescription</b> a la operación <b>Configure</b>.</br> <span>&#8226;</span><span>&#8226;</span> Se agrega el elemento <b>RemainderAmount</b> a la operación <b>GetBlockResponse</b> que hace referencia a la diferencia entre el monto total de la transacción y las devoluciones parciales realizadas.</br> <span>&#8226;</span><span>&#8226;</span> Se corrijen errores en la definición de varios campos, como <b>ReadingDeviceType</b> y <b>CardReadMode</b>.</br> <span>&#8226;</span><span>&#8226;</span> Se reemplaza el campo <b>ApplicationIdentification</b> por <b>SystemIdentification</b> en las operaciones <b>EnableService</b>, <b>Wallets</b>, <b>QueryCompanies</b>,  <b>QueryLineOfBusiness</b> y sus respectivas respuestas. </br> <span>&#8226;</span><span>&#8226;</span> Se agregan el identifidor Tributario en <b>Sale</b>, <b>AuthorizeSale</b>, <b>Void</b>,  <b>Return</b>, <b>DebtPayment</b>, <b>VoidDebtPayment</b> y <b>Debtinquery</b> que permite transacciones con <b>Token</b> ( <b>CredentialToken</b> y  <b>CredentialIssuerToken</b> ). En estas operaciones se elimina de mandatorias al campo <b>BranchIdentification</b> y <b>POSIdentification</b><br/> <span>&#8226;</span><span>&#8226;</span> Se agrega la operación <b>Enrollment</b>, la cual permite transacciones con <b>Token</b> ( <b>CredentialToken</b> y  <b>CredentialIssuerToken</b> ) y pagos recurrentes.</br> <span>&#8226;</span><span>&#8226;</span> El campo <b>ResponseAction</b> deja de ser un enum y se convierte en string. Se indica en la descripción los posibles actions.</br> <span>&#8226;</span><span>&#8226;</span> Se agregan los campos <b>SellerIdentification</b> y <b>SellerIdentificationType</b> en aquellas operaciones en las que se especifican con los datos del vendedor.</br> <span>&#8226;</span><span>&#8226;</span> El campo <b>FacilityPayments</b> deja de ser mandatario en las operaciones <b>Enrollment</b> y <b>Sale</b>. </br> <span>&#8226;</span><span>&#8226;</span> Se elimina la posibilidad de envío en el header HTTP.<br/> <span>&#8226;</span><span>&#8226;</span> Se agregan los campos <b>CashbackAmount</b> y <b>TipAmount</b> en la operación <b>WalletRequest</b>.<br/> <span>&#8226;</span><span>&#8226;</span> Se adiciona en el campo <b>CardReadMode</b> la opción K de Token.<br/> <span>&#8226;</span><span>&#8226;</span> Se corrige el campo <b>Answertype</b> y se modifica por <b>AnswerType</b>.<br/> <span>&#8226;</span><span>&#8226;</span> Se agregan los campos referidos al vendedor en las operaciones <b>Void</b> y <b>Return</b>. <br/> <span>&#8226;</span><span>&#8226;</span> Se crea un primer nivel para cada operación de tipo objeto. <br/>  <span>&#8226;</span><span>&#8226;</span> Se crea el campo <b>InputTokens</b> como un array de objetos que contienen Name y Value como properties en las operaciones <b>Sale</b>, <b>AuthorizeSale</b>, <b>Void</b>, <b>Return</b>, <b>DebtPayment</b>, <b>VoidDebtPayment</b> y <b>DebtInquiry</b>.<br/> <span>&#8226;</span><span>&#8226;</span> Los elementos <b>Action</b>, <b>DeviceAction</b> y <b>ExecutedAction</b> del campo <b>Tickets</b> dejan de ser de tipo string y se convierten en arrays.<br/>     <span>&#8226;</span><span>&#8226;</span> Se agrega el elemento <b>AdditionalInformation</b> en las respuestas de todas las operaciones.<br/>     </br> <span>&#8226;</span> <b>Versión 5.3.0</b> Se amplía la definición de la Operación <b>Configure</b> permitiendo tanto en la respuesta como en el requerimiento los elementos <b>Operations</b>, <b>Tables</b> y <b>Files</b></br></br> Se agregan los elementos <b>VoidSupport</b>, <b>ReturnSupport</b>, <b>WalletUseInVoidTransaction</b> y <b>WalletUseInReturnTransaction</b> en las caracteristicas de un Wallet.<br/><br/> Se agrega el Valor <b>Display</b> en el elemento <b>ResponseActions</b> indicando que se debe mostrar en el Display del Dispositivo o Aplicativo el contenido del elemento <b>DisplayResponseMessage</b>.  En la respuesta de la operación  <b>BalanceInquery</b> se agregan los elementos <b>AmountAvailable</b> y <b>PointsAvailable</b> para indicar los saldos.</br> Se especifica en la documentación que el Cancel puede ser usado para Cancelar un Pago con Wallets en Curso.</br></br> Se agregan elementos en los Requerimientos y en las respuestas opcionales entre los POS* que permiten describir las características del punto de venta, los Device* que permiten especificar las características del Dispositivo de Lectura.<br/>   Se cambió el elemento <b>AnswerIdentification</b> por <b>AnswerKey</b>  para compatibilizar con el servicio de Pagos.<br/><br/>     Se agregaron <b>AccountNumber</b>, <b>AccountType</b> y <b>Balance</b> en las operaciones <b>BalanceInquiry</b> y <b>DebtPayment</b> .<br/><br/>     Se agregaron las Operaciones <b>Confirm</b> y  <b>Cancel</b>, donde la Operación <b>Confirm</b> es usada para confirmar un pago recibido por el POS o Aplicativo del comercio. Existen Wallets en los que la confirmación es automática y se indica en el Elemento  <b>AutoConfirm</b> de la respuesta del comando <b>Wallets</b>. La operación <b>Cancel</b> puede ser utilizada a partir de que la Plataforma retorne la acción <b>PaymentFlowIsCancelable</b> en la respuesta de una operación <b>WalletRequest</b>. El Wallet soporta Cancelación de Requerimiento lo cual está indicado con el Elemento <b>SupportRequestCancel</b> dentro de las propiedades de  los Wallets que son retornados por la Operación <b>Wallets</b>.<br/> Se agregó como carasterística de los Wallets también el elemento <b>SupportValidityOfTheRequest</b> que indica si en el primer requerimiento de la Operación <b>WalletRequest</b> se puede enviar el elemento <b>TransactionTimeout</b> que especifica el tiempo de vida de la intención de pago. Superado ese tiempo no se podrá pagar y el ciclo de reintento será detenido por la plataforma, indicado por las siguientes acciones: <b>Completed</b> y <b>Error</b>.<br/> Se agrega el Elemento <b>Tickets</b> en la respuesta de una Operación <b>WalletRequest</b>. El elemento estará presente si como acción está presente el Valor <b>Tickets</b>, indicando que los mismos deberán ser Impresos, capturados digitalmente, etc. según se indique. <br/><br/> Se permite en la Operación <b>PaymentMethod</b> la búsqueda por el Id o el ForeignIdentification<br/><br/> <span>&#8226;</span> <b>Versión 5.2.6</b> Se cambia el nombre del elemento <b>DateTime</b> por <b>TransactionDateTime</b> en la operación <b>WalletRequest</b>.<br/><br/> <span>&#8226;</span> <b>Versión 5.2.5</b> Se agregan en los Planes el atributo <b>POSOrDeviceActions</b> que permite indecarle al Dispositivo que debe solicitar  PIN para esa transacción y eso lo indica enviando la acción <b>RequestPIN</b>.<br/> <span>&#8226;</span><span>&#8226;</span> Se agrega el <b>ResponseActions</b> <b>Configure</b> que indica que se debe ejecutar una reconfiguración para obtener  parámetros nuevos ya que hay alguna actualización. <span>&#8226;</span><span>&#8226;</span> Se agregan las Operaciones <b>Wallets</b>, <b>WalletRequest</b> y <b>EnableService</b>, las mismas pueden formar parte  de un Block y forman parte de la ruptura de Secuencia.<br/><br/> <span>&#8226;</span> <b>Versión 5.2.4</b> Se agrega el identifidor Tributario en <b>OrderInitial</b>, que permite transacciones con <b>Token</b> ( <b>CredentialToken</b> y  <b>CredentialIssuerToken</b> ).<br/> <span>&#8226;</span><span>&#8226;</span> Se completa el <b>GetCardResponse</b> para que contenga los  elementos <b>PaymentMethod</b> y <b>Plans</b>.<br/> <span>&#8226;</span><span>&#8226;</span> Se completa el <b>PaymentMethodResponse</b> para que contenga los elementos <b>PaymentMethod</b> y <b>Plans</b>.<br/> <span>&#8226;</span><span>&#8226;</span> Se agrega en el <b>GetCard</b>: permite forzar un modo de lectura y permite solicitar los datos leídos al POS <b>CardGetMode</b>. <br/><br/> <span>&#8226;</span><span>&#8226;</span> Se permite el envío de datos del cliente <b>Customer*</b> en las operaciones Financieras.<br/><br/> <span>&#8226;</span> <b>Versión 5.2.3</b> Se cambian los valores posibles para <b>ResponseActionCancel</b> en las operaciones <b>GetBlock</b> y <b>GetTransaction</b>.<br/>   <br/> <span>&#8226;</span> <b>Versión 5.2.2</b> Se agrega el Atributo <b>ReasonReverse</b> que permite notificar en las Reversas la razón por la cual fue necesario  generarla, el atributo <b>ReasonSequenceBreak</b> que permite indicar la razón por la cual se produce la ruptura de secuencia que podrá generar una reversa si  fuese necesario, y el atributo </b>Reason</b> en la operación <b>Cancel</b>.<br/>   <br/> <span>&#8226;</span> <b>Versión 5.2.1</b> Se agrega el Atributo <b>IsReverse</b> en todos las operaciones reversables.<br/>   <br/><br/> <br/><br/> <br/><p style=\"color:Blue;\">&copy;2019-2021 EVO Payments Inc. All rights reserved.</p>The EVO Payments name, logo and related trademarks and service marks, owned<br /> by EVO Payments, are registered and/or used in the<br /> United States and many foreign countries. All other trademarks,<br /> service marks and trade names referenced in this site are the property<br /> of their respective owners.<br /> <br /> <br /> ANY USE, COPYING OR REPRODUCTION OF THE TRADEMARKS, LOGOS, INFORMATION,<br />  IMAGES OR DESIGNS CONTAINED IN THIS SITE IS STRICTLY<br />  PROHIBITED WITHOUT THE PRIOR WRITTEN PERMISSION OF EVO Payments Inc.<br /> <br /> 
 *
 * The version of the OpenAPI document: 5.6.1
 * Contact: integrations@evopayments.mx
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { SaleObjectSaleCustomer } from './saleObjectSaleCustomer';
import { SaleObjectSaleInputTokens } from './saleObjectSaleInputTokens';
import { SaleObjectSalePayer } from './saleObjectSalePayer';
import { SaleObjectSaleSecurity } from './saleObjectSaleSecurity';
import { SaleResponseObjectSaleResponseAdditionalInformation } from './saleResponseObjectSaleResponseAdditionalInformation';
import { SaleResponseObjectSaleResponseCardCategory } from './saleResponseObjectSaleResponseCardCategory';
import { SaleResponseObjectSaleResponseConfiguration } from './saleResponseObjectSaleResponseConfiguration';
import { SaleResponseObjectSaleResponseMerchantCategory } from './saleResponseObjectSaleResponseMerchantCategory';
import { SaleResponseObjectSaleResponsePaymentMethod } from './saleResponseObjectSaleResponsePaymentMethod';
import { SaleResponseObjectSaleResponsePlans } from './saleResponseObjectSaleResponsePlans';
import { SaleResponseObjectSaleResponseProducts } from './saleResponseObjectSaleResponseProducts';
import { SaleResponseObjectSaleResponseRequiredInformation } from './saleResponseObjectSaleResponseRequiredInformation';
import { SaleResponseObjectSaleResponseTickets } from './saleResponseObjectSaleResponseTickets';
import { SaleResponseObjectSaleResponseWorkingKeys } from './saleResponseObjectSaleResponseWorkingKeys';

export class DepositResponseObjectDepositResponse {
    /**
    * Código de Respuesta Interno de la plataforma, el POS debe actuar por lo que indican las acciones especificadas en ResponseActions y no por el código de respuesta informado en este campo o elemento, pero es una buena práctica que sea persistido por el mismo.
    */
    'responseCode': string;
    /**
    * Acciones a realizar por parte del POS y/o PINPAD en base al resultado de la operación que ha sido procesada. Cada uno de estos actions o acciones están concatenadas por comas. Los posibles actions son OK, Approve, Refuse, IssuerCall, Tickets, WithHold, GetCard, UseTerminalToAuthorize, ConfigurationError, SystemError, ResourceError, ProcessError, Completed, Configure, Display, EnableService y Print.
    */
    'responseActions': Array<DepositResponseObjectDepositResponse.ResponseActionsEnum>;
    /**
    * Descripción del resultado del proceso del requerimiento recibido. Esta descripción es generada por la plataforma, no por el Host que termine resolviendo la transacción.
    */
    'responseMessage': string;
    /**
    * ID que identifica la companía desde donde proviene la petición.
    */
    'companyIdentification'?: string;
    /**
    * ID que identifica el sistema desde donde proviene la petición.
    */
    'systemIdentification'?: string;
    /**
    * ID que identifica la sucursal desde donde proviene la petición. Esta sucursal pertenece a una determinada companía.
    */
    'branchIdentification'?: string;
    /**
    * ID que identifica la caja o punto de venta desde donde proviene la petición. Este punto de venta pertenece a una determinada sucursal y companía.
    */
    'pOSIdentification'?: string;
    /**
    * Código de respuesta para el sistema externo, es decir, para la aplicación cliente que se comunica con el TEF.
    */
    'foreignResponseCode'?: string;
    /**
    * Tipo de Operación que se requirió, contendrá el mismo valor que se recibió en el requerimiento, sobre formatos que no soportan elementos complejos o compuestos.
    */
    'requestType'?: string;
    /**
    * Versión del Servicio de la Plataforma con la cual se quiere transaccionar, en caso de no ser especificado será atendido por la última versión del servicio disponible.
    */
    'serviceVersion'?: string;
    /**
    * Retornado en todas las respuesta que el POS/PINPAD debe enviar en el próximo requerimiento. En caso de que el POS no lo envíe, envíe vacío o con un valor que no corresponde se produce “La Ruptura de Secuencia” y la plataforma si la última transacción que realizó el POS no esta confirmada y esta Aprobada genera entonces una reversa de la misma.
    */
    'sequence'?: string;
    /**
    * Datos asociados a la seguridad de la transacción o de elementos sensibles.
    */
    'security'?: Array<SaleObjectSaleSecurity>;
    /**
    * ID que identifica a un grupo de transacciones que serán confirmadas o canceladas
    */
    'block'?: string;
    /**
    * ID generado para la identificación por parte del Plataforma de la información generada en la ejecución de un GetCard o un Payment Method. Será necesario para que un mensaje de Sale, Void, Payment Method o Enrollment identifique el contexto generado y lo utilice para esa operación.
    */
    'requestKey'?: string;
    /**
    * Nueva forma de enviar las llaves disponibles para esta caja.
    */
    'workingKeys'?: Array<SaleResponseObjectSaleResponseWorkingKeys>;
    /**
    * En caso de que se requiera información adicional para poder completar la operación, como podrían ser ciertos datos ingresados por el vendedor para realizar verificaciones especificas (como los últimos 4 digitos), el código de seguridad de la tarjeta o la fecha de vencimiento, este elemento estará presente.
    */
    'requiredInformation'?: Array<SaleResponseObjectSaleResponseRequiredInformation>;
    /**
    * Tipo de Operación que se está requiriendo, solo necesario sobre formatos que no soportan elementos complejos o compuestos.
    */
    'answerType'?: string;
    /**
    * Código de identificación, generado por Plataforma, de la operación realizada\'.
    */
    'answerKey'?: string;
    /**
    * Código público de identificación, generado por Plataforma, de la operación realizada\'.
    */
    'publicAnswerKey'?: string;
    /**
    * Flag indicador de generación de reversa para la última operación reversable.
    */
    'wasReversePrevious'?: DepositResponseObjectDepositResponse.WasReversePreviousEnum;
    /**
    * ID que identifica a la operación que acaba de ser reversada.
    */
    'reversedAnswerKey'?: string;
    /**
    * Secuencia de la transacción que fue reversada.
    */
    'reversedSequence'?: string;
    /**
    * ID del bloque de transacciones que ha sido confirmado de forma automática (es decir, sin recibir un requerimiento de BlockClose). Este escenario se presentará si el Plataforma así se ha configurado para actuar bajo esa circunstancia.
    */
    'committedBlock'?: string;
    /**
    * ID del bloque de transacciones que ha sido cancelado de forma automática (es decir, sin recibir un requerimiento de BlockClose). Este escenario se presentara si el Plataforma así se ha configurado para actuar bajo esa circunstancia.
    */
    'reversedBlock'?: string;
    /**
    * Identificador Unívoco del Mensaje ( UUID v5 ).
    */
    'messageID'?: string;
    /**
    * Dirección IP del Server que atiende el requerimiento.
    */
    'serverAddress'?: string;
    /**
    * Instancia de Server que atiende el requerimiento.
    */
    'serverInstance'?: string;
    /**
    * Nombre del Nodo que atendió el requerimiento.
    */
    'serverNodeName'?: string;
    /**
    * Versión del  Adaptador de Protocolo Entrante que atiende el Requerimiento.
    */
    'adapterInputVersion'?: string;
    /**
    * Dirección IP del Adaptador de Protocolo Entrante que atiende el requerimiento.
    */
    'adapterInputAddress'?: string;
    /**
    * Nombre del Nodo del Adaptador de Protocolo Entrante que atiende el requerimiento.
    */
    'adapterInputNodeName'?: string;
    /**
    * Versión del  Adaptador de Protocolo Saliente que atiende el Requerimiento.
    */
    'adapterOutputVersion'?: string;
    /**
    * Dirección IP  del  Adaptador de Protocolo Saliente que atiende el Requerimiento.
    */
    'adapterOutputAddress'?: string;
    /**
    * Nombre del Nodo  del  Adaptador de Protocolo Saliente que atiende el Requerimiento.
    */
    'adapterOutputNodeName'?: string;
    /**
    * En caso de que se requiera información adicional para poder completar la operación, como podrían ser ciertos datos ingresados por el vendedor para realizar verificaciones especificas (como los últimos 4 digitos), el código de seguridad de la tarjeta o la fecha de vencimiento, este elemento estará presente.
    */
    'additionalInformation'?: Array<SaleResponseObjectSaleResponseAdditionalInformation>;
    /**
    * Información adicional/Mensaje promocional/Leyenda de respuesta a imprimir en el ticket de la operación. Cada línea de este mensaje sera un elemento dentro del array.
    */
    'printerResponseMessage'?: Array<string>;
    /**
    * Información adicional/Mensaje promocional/Leyenda de respuesta a mostrar en pantalla en el ticket de la operación. Cada línea de este mensaje será un elemento dentro del array.
    */
    'displayResponseMessage'?: Array<string>;
    /**
    * código de Moneda - ISO 4217 <https://en.wikipedia.org/wiki/ISO_4217 Se puede utilizar la Codificación Alfabética o Numérica <br />   * Num   - Alpha - Description <br />   * \'032\' - \'ARS\' - Pesos Argentinos <br />   * \'152\' - \'CLP\' - Pesos Chilenos <br/>   * \'484\' - \'MXN\' - Pesos Mexicanos <br/>   * \'840\' - \'USD\' - dólares Americanos <br/>   * \'878\' - \'EUR\' - Euros <br/>   * \'858\' - \'UYU\' - Pesos Uruguayos <br/>   * \'878\' - \'EUR\' - Euros <br/>   * \'986\' - \'BRL\' - Real Brasileño
    */
    'currencyCode'?: DepositResponseObjectDepositResponse.CurrencyCodeEnum;
    /**
    * Descripción del tipo de cambio utilizado en la transacción.
    */
    'currencyDescription'?: string;
    /**
    * Tipo de transacción
    */
    'transactionDescription'?: string;
    /**
    * Modo en que fue realizada la transacción
    */
    'transactionResolutionMode'?: string;
    /**
    * Símbolo monetario del tipo de cambio utilizado en la transacción.
    */
    'currencySymbol'?: string;
    /**
    * Cantidad de cuotas utilizadas para realizar la operación
    */
    'facilityPayments'?: number;
    /**
    * Tipo de plan utilizado para para realizar la operación
    */
    'facilityType'?: number;
    /**
    * Monto final a pagar en cada una de las cuotas en las que se divida la compra
    */
    'valueFacilityPayments'?: number;
    /**
    * Importe o Monto de la Transacción.
    */
    'amount'?: number;
    /**
    * Monto con la que se realizó transacción. Si este valor es recibido, la búsqueda de los planes será limitada con este criterio.
    */
    'alternativeAmount'?: number;
    /**
    * Importe o Monto de la Transacción que efectivamente se cobró.  Si se envía en Void o Return en lugar de Amount, se genera un Ajuste si el Host lo soporta.
    */
    'amountCharged'?: number;
    /**
    * Importe o Monto de la Transacción a aplicar.
    */
    'amountToApply'?: number;
    /**
    * Monto del dinero en efectivo (cashback).
    */
    'cashbackAmount'?: number;
    /**
    * Importe o Monto de la Propina.
    */
    'tipAmount'?: number;
    /**
    * Monto libre de costos financerios e impuestos por el que la venta se realizó. El monto cobrado realmente no es este, dado que no incluye las tasas e impuestos
    */
    'requestAmount'?: number;
    /**
    * Monto Sujeto a Promoción monto de la operación
    */
    'promotedAmount'?: number;
    /**
    * Token asociado a la Credencial Enrolada
    */
    'credentialToken'?: string;
    /**
    * Emisor del Token asociado a la credencial enrolada
    */
    'credentialIssuerToken'?: string;
    /**
    * Tokens.
    */
    'inputTokens'?: Array<SaleObjectSaleInputTokens>;
    /**
    * Tokens.
    */
    'outputTokens'?: Array<SaleObjectSaleInputTokens>;
    /**
    * Monto del recargo impositivo aplicado al costo financiero que la transacción tiene
    */
    'taxFinancialCostAmount'?: number;
    /**
    * Porcentaje de recargo impositivo a aplicar sobre el monto del costo financiero
    */
    'taxFinancialCostPercentage'?: number;
    /**
    * Monto del Costo financiero total generado en base al plan elegido
    */
    'financialCostAmount'?: number;
    /**
    * Porcentaje del costo financiero a aplicar al monto de la transacción
    */
    'financialCostPercentage'?: number;
    /**
    * Código de Resultado retornado por el Host Adquirente.
    */
    'hostResultCode'?: number;
    /**
    * Mensaje Retornado por el Host Adquirente, normalmente asociado al valor de HostResultCode
    */
    'hostMessage'?: string;
    /**
    * Código de autorización retornado por el Host que resuelve la transacción.
    */
    'hostCode'?: string;
    /**
    * Número de identificación del host al cual fue enviada la petición, y por el cual fue finalmente procesada.
    */
    'hostID'?: number;
    /**
    * Identificador del usuario que está realizando la Transacción.
    */
    'userID'?: string;
    /**
    * Nombre del Emisor de la Credencial o Tarjeta que se usó en la transacción.
    */
    'issuerName'?: string;
    /**
    * Fecha y Hora de la transacción retornada por el Host que resuelve la Transacción - RFC3339 https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14
    */
    'hostDateTime'?: Date;
    /**
    * Fecha y hora de transmisión de la operación hacia el host - RFC3339 https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14
    */
    'transmitionDateTime'?: Date;
    /**
    * Código de Resultado retornado por el Host Adquirente.
    */
    'authResultCode'?: string;
    /**
    * Código de procesamiento de la operación enviada al host. Elemento 3 del protocolo de comunicaciones ISO 8583, formato de mensajes utilizado por los hosts para realizar operaciones financieras.
    */
    'authHostProcessCode'?: string;
    /**
    * Elemento 0 del protocolo de comunicaciones ISO 8583, formato de mensajes utilizado por los hosts para realizar operaciones financieras. El valor de este campo es el que devuelve el host en una respuesta a una petición.
    */
    'authHostMsgType'?: string;
    /**
    * Mensaje Retornado por el Host Adquirente, normalmente asociado al valor de AuthResultCode
    */
    'authHostMessage'?: string;
    /**
    * Elemento 0 del protocolo de comunicaciones ISO 8583, formato de mensajes utilizado por los hosts para realizar operaciones financieras. El valor de este campo es el que se envio al host en el envio de una petición.
    */
    'hostMsgType'?: string;
    /**
    * Código de autorización retornado por el Host que resuelve la transacción.
    */
    'authCode'?: string;
    /**
    * Fecha y Hora de la transacción retornada por el Host que resuelve la Transacción - RFC3339 https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14
    */
    'authDateTime'?: Date;
    /**
    * Número Ticket  o Voucher Generado para la Plataforma.
    */
    'authTicket'?: number;
    /**
    * Número de identificación de la transacción, utilizado por la mayoría de los hosts para realizar anulaciones y devoluciones.
    */
    'authRRN'?: string;
    /**
    * Tipo de autenticación
    */
    'transactionAuthenticationType'?: string;
    /**
    * Identificador que genera el Host Adquirente para la Transacción. En algunos podrá ser igual al AuthRRN.
    */
    'identifierForTheAdquirer'?: string;
    /**
    * Identificador que genera el Host o Plataforma que resuelve la transacción.
    */
    'identifierForTheResolutor'?: string;
    /**
    * Identificador de facilitador de pagos o Payfac.
    */
    'paymentFacilitatorID'?: string;
    /**
    * Número de comercio utilizado para realizar la transacción. Este Número es asignado por el host, y parametrizado en la BD, relacionado a cada uno de los planes disponibles.
    */
    'merchantID'?: string;
    /**
    * Identificador de Terminal por el cual se envía la Transacción al Host.
    */
    'terminalID'?: string;
    /**
    * Número de Trace/Secuencia que genera la plataforma para la transacción asociado al TerminalID.
    */
    'terminalTrace'?: number;
    /**
    * Para aquellos host que exista el concepto de lote, es el número de lote al cual pertenece la transacción.
    */
    'settlementBatchNumber'?: number;
    /**
    * Modo de ingreso de los datos de la tarjeta. Los posibles valores significan: C - EMV Chip / B - Banda magnética / L - Contactless Chip / S - Contactless Banda / M - Manual (Tarjeta Presente) / T - Digitada (Tarjeta no Presente) / E - ECOMMERCE (Ventas por Internet)  / F - FALLBACK (Banda por falla en Chip) / K - TOKEN / R - Recurring ( Pagos Recurrentes )
    */
    'cardReadMode'?: DepositResponseObjectDepositResponse.CardReadModeEnum;
    /**
    * Descripción del modo de ingreso con el que fue leída la tarjeta
    */
    'cardReadModeDescription'?: DepositResponseObjectDepositResponse.CardReadModeDescriptionEnum;
    /**
    * Nombre de la Tarjeta que se usó en la transacción, usado para la impresión del voucher.
    */
    'cardDescription'?: string;
    /**
    * Descripción del modo de ingreso utilizado para capturar los datos de la tarjeta.
    */
    'cardTypeDescription'?: string;
    'cardCategory'?: SaleResponseObjectSaleResponseCardCategory;
    /**
    * Número de Tarjeta. En el caso de las respuestas el mismo estará enmascarado.
    */
    'cardNumber'?: string;
    /**
    * Número de tarjeta enmascarado, según indica la parametrización en la base de datos. Se utilizará para imprimir en el cupón.
    */
    'cardNumberMasked'?: string;
    /**
    * Hash de la tarjeta generado por la plataforma.
    */
    'cardHashing'?: string;
    /**
    * Fecha de vencimiento de la tarjeta. Este dato sera necesario si el modo de ingreso fue manual/digitada.
    */
    'cardExp'?: string;
    /**
    * Tags EMV en format TLV recibidos desde el Host.
    */
    'cardCryptogramResponse'?: string;
    /**
    * Disponible solo con Tarjetas Chip (Incluye Contacless Chip), se debe imprimir en los Tickets/Vouchers.
    */
    'cardAppName'?: string;
    /**
    * Disponible solo con Tarjetas Chip (Incluye Contacless Chip), se debe imprimir en los Tickets/Vouchers.
    */
    'cardAppIdentifier'?: string;
    /**
    * Disponible solo con Tarjetas Chip (Incluye Contacless Chip), se debe imprimir en los Tickets/Vouchers.
    */
    'cardAppLabel'?: string;
    /**
    * Disponible solo con Tarjetas Chip (Incluye Contacless Chip), se debe imprimir en los Tickets/Vouchers.
    */
    'cardAuthRequestCryptogram'?: string;
    /**
    * Disponible solo con Tarjetas Chip (Incluye Contacless Chip), se debe imprimir en los Tickets/Vouchers.
    */
    'cardAuthResponseCryptogram'?: string;
    'payer'?: SaleObjectSalePayer;
    'customer'?: SaleObjectSaleCustomer;
    'merchantCategory'?: SaleResponseObjectSaleResponseMerchantCategory;
    /**
    * Detalle de Productos de la Operación.
    */
    'products'?: Array<SaleResponseObjectSaleResponseProducts>;
    'paymentMethod'?: SaleResponseObjectSaleResponsePaymentMethod;
    'plans'?: SaleResponseObjectSaleResponsePlans;
    /**
    * Descripción del plan utilizado para para realizar la operación
    */
    'planDescription'?: string;
    /**
    * Identificador de Versión utilizada por Plataforma en la evaluación del Plan
    */
    'planConfigVersion'?: number;
    /**
    * Elemento Compuesto que indica qué Tickets intervienen en la transacción y si deben ser digitalizados o impresos.
    */
    'tickets'?: Array<SaleResponseObjectSaleResponseTickets>;
    'configuration'?: SaleResponseObjectSaleResponseConfiguration;
    /**
    * Nombre del tarjetahabiente obtenido de la tarjeta.
    */
    'cardHolderName'?: string;
    /**
    * Identificador Unívoco de la Transacción que se quiere Referenciar, usado en Deposit, Void, Return, etc. O sea en las transacciones que hacen referencia a una Transacción previa. El valor fue obtenido en el campo o elemento AnswerKey de la Respuesta de la transacción referenciada. 
    */
    'origAnswerKey'?: string;
    /**
    * Fecha y Hora de la Transacción previa que se está referenciando. - RFC3339 https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14
    */
    'origAuthDateTime'?: Date;
    /**
    * Número de Ticket o Voucher de la Transacción Original Referenciada.
    */
    'origAuthTicket'?: number;
    /**
    * Número de terminal de la Transacción previa que se está referenciando.
    */
    'origAuthTerminalTrace'?: number;
    /**
    * Código de autorización de la transacción original.
    */
    'origAuthCode'?: string;
    /**
    * ID de la marca con la cual la tarjeta fue identificada
    */
    'paymentMethodId'?: number;
    /**
    * Descripción o nombre de la marca con la cual la tarjeta fue identificada
    */
    'paymentMethodDescription'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "responseCode",
            "baseName": "ResponseCode",
            "type": "string"
        },
        {
            "name": "responseActions",
            "baseName": "ResponseActions",
            "type": "Array<DepositResponseObjectDepositResponse.ResponseActionsEnum>"
        },
        {
            "name": "responseMessage",
            "baseName": "ResponseMessage",
            "type": "string"
        },
        {
            "name": "companyIdentification",
            "baseName": "CompanyIdentification",
            "type": "string"
        },
        {
            "name": "systemIdentification",
            "baseName": "SystemIdentification",
            "type": "string"
        },
        {
            "name": "branchIdentification",
            "baseName": "BranchIdentification",
            "type": "string"
        },
        {
            "name": "pOSIdentification",
            "baseName": "POSIdentification",
            "type": "string"
        },
        {
            "name": "foreignResponseCode",
            "baseName": "ForeignResponseCode",
            "type": "string"
        },
        {
            "name": "requestType",
            "baseName": "RequestType",
            "type": "string"
        },
        {
            "name": "serviceVersion",
            "baseName": "ServiceVersion",
            "type": "string"
        },
        {
            "name": "sequence",
            "baseName": "Sequence",
            "type": "string"
        },
        {
            "name": "security",
            "baseName": "Security",
            "type": "Array<SaleObjectSaleSecurity>"
        },
        {
            "name": "block",
            "baseName": "Block",
            "type": "string"
        },
        {
            "name": "requestKey",
            "baseName": "RequestKey",
            "type": "string"
        },
        {
            "name": "workingKeys",
            "baseName": "WorkingKeys",
            "type": "Array<SaleResponseObjectSaleResponseWorkingKeys>"
        },
        {
            "name": "requiredInformation",
            "baseName": "RequiredInformation",
            "type": "Array<SaleResponseObjectSaleResponseRequiredInformation>"
        },
        {
            "name": "answerType",
            "baseName": "AnswerType",
            "type": "string"
        },
        {
            "name": "answerKey",
            "baseName": "AnswerKey",
            "type": "string"
        },
        {
            "name": "publicAnswerKey",
            "baseName": "PublicAnswerKey",
            "type": "string"
        },
        {
            "name": "wasReversePrevious",
            "baseName": "WasReversePrevious",
            "type": "DepositResponseObjectDepositResponse.WasReversePreviousEnum"
        },
        {
            "name": "reversedAnswerKey",
            "baseName": "ReversedAnswerKey",
            "type": "string"
        },
        {
            "name": "reversedSequence",
            "baseName": "ReversedSequence",
            "type": "string"
        },
        {
            "name": "committedBlock",
            "baseName": "CommittedBlock",
            "type": "string"
        },
        {
            "name": "reversedBlock",
            "baseName": "ReversedBlock",
            "type": "string"
        },
        {
            "name": "messageID",
            "baseName": "MessageID",
            "type": "string"
        },
        {
            "name": "serverAddress",
            "baseName": "ServerAddress",
            "type": "string"
        },
        {
            "name": "serverInstance",
            "baseName": "ServerInstance",
            "type": "string"
        },
        {
            "name": "serverNodeName",
            "baseName": "ServerNodeName",
            "type": "string"
        },
        {
            "name": "adapterInputVersion",
            "baseName": "AdapterInputVersion",
            "type": "string"
        },
        {
            "name": "adapterInputAddress",
            "baseName": "AdapterInputAddress",
            "type": "string"
        },
        {
            "name": "adapterInputNodeName",
            "baseName": "AdapterInputNodeName",
            "type": "string"
        },
        {
            "name": "adapterOutputVersion",
            "baseName": "AdapterOutputVersion",
            "type": "string"
        },
        {
            "name": "adapterOutputAddress",
            "baseName": "AdapterOutputAddress",
            "type": "string"
        },
        {
            "name": "adapterOutputNodeName",
            "baseName": "AdapterOutputNodeName",
            "type": "string"
        },
        {
            "name": "additionalInformation",
            "baseName": "AdditionalInformation",
            "type": "Array<SaleResponseObjectSaleResponseAdditionalInformation>"
        },
        {
            "name": "printerResponseMessage",
            "baseName": "PrinterResponseMessage",
            "type": "Array<string>"
        },
        {
            "name": "displayResponseMessage",
            "baseName": "DisplayResponseMessage",
            "type": "Array<string>"
        },
        {
            "name": "currencyCode",
            "baseName": "CurrencyCode",
            "type": "DepositResponseObjectDepositResponse.CurrencyCodeEnum"
        },
        {
            "name": "currencyDescription",
            "baseName": "CurrencyDescription",
            "type": "string"
        },
        {
            "name": "transactionDescription",
            "baseName": "TransactionDescription",
            "type": "string"
        },
        {
            "name": "transactionResolutionMode",
            "baseName": "TransactionResolutionMode",
            "type": "string"
        },
        {
            "name": "currencySymbol",
            "baseName": "CurrencySymbol",
            "type": "string"
        },
        {
            "name": "facilityPayments",
            "baseName": "FacilityPayments",
            "type": "number"
        },
        {
            "name": "facilityType",
            "baseName": "FacilityType",
            "type": "number"
        },
        {
            "name": "valueFacilityPayments",
            "baseName": "ValueFacilityPayments",
            "type": "number"
        },
        {
            "name": "amount",
            "baseName": "Amount",
            "type": "number"
        },
        {
            "name": "alternativeAmount",
            "baseName": "AlternativeAmount",
            "type": "number"
        },
        {
            "name": "amountCharged",
            "baseName": "AmountCharged",
            "type": "number"
        },
        {
            "name": "amountToApply",
            "baseName": "AmountToApply",
            "type": "number"
        },
        {
            "name": "cashbackAmount",
            "baseName": "CashbackAmount",
            "type": "number"
        },
        {
            "name": "tipAmount",
            "baseName": "TipAmount",
            "type": "number"
        },
        {
            "name": "requestAmount",
            "baseName": "RequestAmount",
            "type": "number"
        },
        {
            "name": "promotedAmount",
            "baseName": "PromotedAmount",
            "type": "number"
        },
        {
            "name": "credentialToken",
            "baseName": "CredentialToken",
            "type": "string"
        },
        {
            "name": "credentialIssuerToken",
            "baseName": "CredentialIssuerToken",
            "type": "string"
        },
        {
            "name": "inputTokens",
            "baseName": "InputTokens",
            "type": "Array<SaleObjectSaleInputTokens>"
        },
        {
            "name": "outputTokens",
            "baseName": "OutputTokens",
            "type": "Array<SaleObjectSaleInputTokens>"
        },
        {
            "name": "taxFinancialCostAmount",
            "baseName": "TaxFinancialCostAmount",
            "type": "number"
        },
        {
            "name": "taxFinancialCostPercentage",
            "baseName": "TaxFinancialCostPercentage",
            "type": "number"
        },
        {
            "name": "financialCostAmount",
            "baseName": "FinancialCostAmount",
            "type": "number"
        },
        {
            "name": "financialCostPercentage",
            "baseName": "FinancialCostPercentage",
            "type": "number"
        },
        {
            "name": "hostResultCode",
            "baseName": "HostResultCode",
            "type": "number"
        },
        {
            "name": "hostMessage",
            "baseName": "HostMessage",
            "type": "string"
        },
        {
            "name": "hostCode",
            "baseName": "HostCode",
            "type": "string"
        },
        {
            "name": "hostID",
            "baseName": "HostID",
            "type": "number"
        },
        {
            "name": "userID",
            "baseName": "UserID",
            "type": "string"
        },
        {
            "name": "issuerName",
            "baseName": "IssuerName",
            "type": "string"
        },
        {
            "name": "hostDateTime",
            "baseName": "HostDateTime",
            "type": "Date"
        },
        {
            "name": "transmitionDateTime",
            "baseName": "TransmitionDateTime",
            "type": "Date"
        },
        {
            "name": "authResultCode",
            "baseName": "AuthResultCode",
            "type": "string"
        },
        {
            "name": "authHostProcessCode",
            "baseName": "AuthHostProcessCode",
            "type": "string"
        },
        {
            "name": "authHostMsgType",
            "baseName": "AuthHostMsgType",
            "type": "string"
        },
        {
            "name": "authHostMessage",
            "baseName": "AuthHostMessage",
            "type": "string"
        },
        {
            "name": "hostMsgType",
            "baseName": "HostMsgType",
            "type": "string"
        },
        {
            "name": "authCode",
            "baseName": "AuthCode",
            "type": "string"
        },
        {
            "name": "authDateTime",
            "baseName": "AuthDateTime",
            "type": "Date"
        },
        {
            "name": "authTicket",
            "baseName": "AuthTicket",
            "type": "number"
        },
        {
            "name": "authRRN",
            "baseName": "AuthRRN",
            "type": "string"
        },
        {
            "name": "transactionAuthenticationType",
            "baseName": "TransactionAuthenticationType",
            "type": "string"
        },
        {
            "name": "identifierForTheAdquirer",
            "baseName": "IdentifierForTheAdquirer",
            "type": "string"
        },
        {
            "name": "identifierForTheResolutor",
            "baseName": "IdentifierForTheResolutor",
            "type": "string"
        },
        {
            "name": "paymentFacilitatorID",
            "baseName": "PaymentFacilitatorID",
            "type": "string"
        },
        {
            "name": "merchantID",
            "baseName": "MerchantID",
            "type": "string"
        },
        {
            "name": "terminalID",
            "baseName": "TerminalID",
            "type": "string"
        },
        {
            "name": "terminalTrace",
            "baseName": "TerminalTrace",
            "type": "number"
        },
        {
            "name": "settlementBatchNumber",
            "baseName": "SettlementBatchNumber",
            "type": "number"
        },
        {
            "name": "cardReadMode",
            "baseName": "CardReadMode",
            "type": "DepositResponseObjectDepositResponse.CardReadModeEnum"
        },
        {
            "name": "cardReadModeDescription",
            "baseName": "CardReadModeDescription",
            "type": "DepositResponseObjectDepositResponse.CardReadModeDescriptionEnum"
        },
        {
            "name": "cardDescription",
            "baseName": "CardDescription",
            "type": "string"
        },
        {
            "name": "cardTypeDescription",
            "baseName": "CardTypeDescription",
            "type": "string"
        },
        {
            "name": "cardCategory",
            "baseName": "CardCategory",
            "type": "SaleResponseObjectSaleResponseCardCategory"
        },
        {
            "name": "cardNumber",
            "baseName": "CardNumber",
            "type": "string"
        },
        {
            "name": "cardNumberMasked",
            "baseName": "CardNumberMasked",
            "type": "string"
        },
        {
            "name": "cardHashing",
            "baseName": "CardHashing",
            "type": "string"
        },
        {
            "name": "cardExp",
            "baseName": "CardExp",
            "type": "string"
        },
        {
            "name": "cardCryptogramResponse",
            "baseName": "CardCryptogramResponse",
            "type": "string"
        },
        {
            "name": "cardAppName",
            "baseName": "CardAppName",
            "type": "string"
        },
        {
            "name": "cardAppIdentifier",
            "baseName": "CardAppIdentifier",
            "type": "string"
        },
        {
            "name": "cardAppLabel",
            "baseName": "CardAppLabel",
            "type": "string"
        },
        {
            "name": "cardAuthRequestCryptogram",
            "baseName": "CardAuthRequestCryptogram",
            "type": "string"
        },
        {
            "name": "cardAuthResponseCryptogram",
            "baseName": "CardAuthResponseCryptogram",
            "type": "string"
        },
        {
            "name": "payer",
            "baseName": "Payer",
            "type": "SaleObjectSalePayer"
        },
        {
            "name": "customer",
            "baseName": "Customer",
            "type": "SaleObjectSaleCustomer"
        },
        {
            "name": "merchantCategory",
            "baseName": "MerchantCategory",
            "type": "SaleResponseObjectSaleResponseMerchantCategory"
        },
        {
            "name": "products",
            "baseName": "Products",
            "type": "Array<SaleResponseObjectSaleResponseProducts>"
        },
        {
            "name": "paymentMethod",
            "baseName": "PaymentMethod",
            "type": "SaleResponseObjectSaleResponsePaymentMethod"
        },
        {
            "name": "plans",
            "baseName": "Plans",
            "type": "SaleResponseObjectSaleResponsePlans"
        },
        {
            "name": "planDescription",
            "baseName": "PlanDescription",
            "type": "string"
        },
        {
            "name": "planConfigVersion",
            "baseName": "PlanConfigVersion",
            "type": "number"
        },
        {
            "name": "tickets",
            "baseName": "Tickets",
            "type": "Array<SaleResponseObjectSaleResponseTickets>"
        },
        {
            "name": "configuration",
            "baseName": "Configuration",
            "type": "SaleResponseObjectSaleResponseConfiguration"
        },
        {
            "name": "cardHolderName",
            "baseName": "CardHolderName",
            "type": "string"
        },
        {
            "name": "origAnswerKey",
            "baseName": "OrigAnswerKey",
            "type": "string"
        },
        {
            "name": "origAuthDateTime",
            "baseName": "OrigAuthDateTime",
            "type": "Date"
        },
        {
            "name": "origAuthTicket",
            "baseName": "OrigAuthTicket",
            "type": "number"
        },
        {
            "name": "origAuthTerminalTrace",
            "baseName": "OrigAuthTerminalTrace",
            "type": "number"
        },
        {
            "name": "origAuthCode",
            "baseName": "OrigAuthCode",
            "type": "string"
        },
        {
            "name": "paymentMethodId",
            "baseName": "PaymentMethodId",
            "type": "number"
        },
        {
            "name": "paymentMethodDescription",
            "baseName": "PaymentMethodDescription",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return DepositResponseObjectDepositResponse.attributeTypeMap;
    }
}

export namespace DepositResponseObjectDepositResponse {
    export enum ResponseActionsEnum {
        Ok = <any> 'OK',
        Approve = <any> 'Approve',
        Refuse = <any> 'Refuse',
        IssuerCall = <any> 'IssuerCall',
        WithHold = <any> 'WithHold',
        GetCard = <any> 'GetCard',
        UseTerminalToAuthorize = <any> 'UseTerminalToAuthorize',
        ConfigurationError = <any> 'ConfigurationError',
        SystemError = <any> 'SystemError',
        ResourceError = <any> 'ResourceError',
        ProcessError = <any> 'ProcessError',
        EnableService = <any> 'EnableService',
        Completed = <any> 'Completed',
        Configure = <any> 'Configure',
        Tickets = <any> 'Tickets',
        Display = <any> 'Display',
        Print = <any> 'Print',
        Error = <any> 'Error',
        Retry = <any> 'Retry',
        KeysRenewal = <any> 'KeysRenewal'
    }
    export enum WasReversePreviousEnum {
        NUMBER_0 = <any> 0,
        NUMBER_1 = <any> 1
    }
    export enum CurrencyCodeEnum {
        _152 = <any> '152',
        _484 = <any> '484',
        _878 = <any> '878',
        _840 = <any> '840',
        _858 = <any> '858',
        _986 = <any> '986',
        Clp = <any> 'CLP',
        Mxn = <any> 'MXN',
        Eur = <any> 'EUR',
        Usd = <any> 'USD',
        Uyu = <any> 'UYU',
        Brl = <any> 'BRL'
    }
    export enum CardReadModeEnum {
        C = <any> 'C',
        B = <any> 'B',
        M = <any> 'M',
        L = <any> 'L',
        S = <any> 'S',
        T = <any> 'T',
        E = <any> 'E',
        F = <any> 'F',
        K = <any> 'K',
        R = <any> 'R'
    }
    export enum CardReadModeDescriptionEnum {
        EmvChip = <any> 'EMV CHIP',
        MagneticStripe = <any> 'MAGNETIC STRIPE',
        Manual = <any> 'MANUAL',
        Contactless = <any> 'CONTACTLESS',
        ContactlessStripe = <any> 'CONTACTLESS STRIPE',
        Typed = <any> 'TYPED',
        Ecommerce = <any> 'ECOMMERCE',
        Fallback = <any> 'FALLBACK',
        Recurring = <any> 'RECURRING'
    }
}
