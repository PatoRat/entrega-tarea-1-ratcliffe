# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.


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
