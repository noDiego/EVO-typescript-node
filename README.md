## Implementacion

- Se generó el cliente utilizando openapi-generator-5.4.0. Y la version 5.6.3 de Evo_PaymentAPI
- Para su uso se copia el directorio "api" y "model" y el archivo api.ts en un directorio lib dentro del proyecto
- El cliente generado requirió agregar al package.json del proyecto las dependencias:
`   "request": "^2.88.2",
    "reflect-metadata": "^0.1.13",`
  Las versiones especificadas fueron las que se probaron y funcionan correctamente.
- Se agrega el import 'reflect-metadata' en el archivo "index" del proyecto creado para consumir el cliente.

## Uso

- Para el uso el del ejemplo primero debe realizarse la instalacion de dependencias con el comando 
  `npm install`
- Para la ejecución del codigo de ejemplo de Payment debe ejecutarse el siguiente comando:
  `npm run start -- --amount=1000`
  (debe incluirse obligatoriamente el parametro `--amount` para definir un monto)
- Pueden incluirse los siguientes parametros opcionales de configuración:  
  `--cardnumber=`
  `--cardexp=`
  `--securitycode=`
  `--systemidentification=`
  `--companyidentification=`
  `--branchidentification=`
  `--posidentification=`
  `--amount=`
  `--cardreadmode=`
  `--sequence=`
  `--hostname=`
  `--token=`
