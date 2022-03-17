## Implementacion

- Se generó el cliente utilizando openapi-generator-5.4.0.
- Para su uso se copia el directorio "api" y "model" y el archivo api.ts en un directorio lib dentro del proyecto
- El cliente generado requiere agregar al package.json del proyecto las dependencias:
    "request": "^2.88.2",
    "reflect-metadata": "^0.1.13",
  Las versiones especificadas fueron las que se probaron y funcionan correctamente.
- Se agrega el import 'reflect-metadata' en el archivo "main" del proyecto creado para consumir el cliente.

## Uso

- Para la ejecución del codigo de ejemplo debe ejecutarse el siguiente comando:
  "npm run start"
- Puede agregarse el parametro hostname para especificar un host distinto de la siguiente manera. 
 "npm run start -- --hostname=http://www.page.com"

