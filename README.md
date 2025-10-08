# Welcome to your Expo app: Galeria 👋

- Lo importante a saber:

## Configuración automática de la URL del backend

Para que la app Expo sepa a qué backend conectarse, usamos un **metodo que detecta la IP local de la PC**
De esta forma **no se suben IPs personales al repositorio** y cada persona que ejecute el proyecto obtiene la configuración correcta en su máquina sin editar nada. Pero eso depende del Sistema Operativo

### ¿Cómo funciona?

- Antes de iniciar Expo, se verifica que este conectado el dispositivo (por ejemplo con USB) con:
`adb devices` y luego de chequearlo, ejecutamos:
`adb reverse tcp:3000 tcp:3000` y
`adb reverse tcp:8081 tcp:8081`
- Luego ya si ejecutamos:
`npm run start` para el Expo, y ya debería funcionar.
- Pueden leer el comentario hecho en `config.ts`, pero se los dejo acá por las dudas también:
  ```ts
  export const URL_BACKEND = "http://localhost:3000";
  
  /*
  Tengo activado la herramienta de desarrollador en Android y hago la conexion por USB primero, para
  hacer el tunel:
  adb devices (chequeo que haya device)
  adb reverse tcp:3000 tcp:3000
  adb reverse tcp:8081 tcp:8081
  adb reverse --list (para verificar que se haya hecho el puente)
  Pero en caso de que ustedes necesiten, cambien la IP de localhost por la suya.
  */
- Otros datos interesantes:
  ```ts
  /*
  expo start → inicia Metro en localhost con un puerto por defecto (19000 para Expo Go, o el que especifiques con --port).

  --localhost → fuerza que solo escuche en localhost y no en la red local. Esto suele usarse si no querés que otros dispositivos de la red puedan conectarse al bundler.

  Otros modos posibles son:

  --tunnel → hace un túnel a través de Expo para que cualquier dispositivo pueda conectarse desde fuera de tu red local.

  --lan → permite que dispositivos en la misma red local accedan al bundler usando tu IP.
  */
