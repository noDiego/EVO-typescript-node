// Interface utilizada para manejar los datos de entrada para el ejemplo
export interface PaymentInput {
    systemIdentification    : string;       // ID que identifica el sistema desde donde proviene la petición.
    companyIdentification   : string;       // ID que identifica la companía desde donde proviene la petición.
    branchIdentification    : string;       // ID que identifica la sucursal desde donde proviene la petición.
    pOSIdentification       : string;       // ID que identifica la caja o punto de venta desde donde proviene la petición.
    cardNumber              : string;       // Número de la Tarjeta.
    cardExp?                : string;       // Fecha de vencimiento de la tarjeta (necesario si el modo de ingreso fue manual/digitada.)
    securityCode?           : string;       // Código de seguridad de la tarjeta.
    amount                  : number;       // Importe o Monto de la Transacción.
    cardReadMode            : CardReadMode; // Modo de ingreso de los datos de la tarjeta.
    sequence?               : string;       // Retornado en todas las respuestas que el POS/PINPAD debe enviar en el próximo requerimiento.
}


// Modo de ingreso de los datos de la tarjeta
export enum CardReadMode {
    C = 'C',  // EMV Chip
    B = 'B',  // Banda magnética
    M = 'M',  // Manual (Tarjeta Presente)
    L = 'L',  // Contactless Chip
    S = 'S',  // Contactless Banda
    T = 'T',  // Digitada (Tarjeta no Presente)
    E = 'E',  // ECOMMERCE (Ventas por Internet)
    F = 'F',  // FALLBACK (Banda por falla en Chip)
    K = 'K',  // TOKEN
    R = 'R'   // Recurring ( Pagos Recurrentes )
}
