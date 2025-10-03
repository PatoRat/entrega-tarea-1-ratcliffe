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

Para que la app Expo sepa a qué backend conectarse, usamos un **script que detecta la IP local de la PC** y genera el archivo `src/config.ts` automáticamente.  
De esta forma **no se suben IPs personales al repositorio** y cada persona que ejecute el proyecto obtiene la configuración correcta en su máquina sin editar nada.

### ¿Cómo funciona?

- Antes de iniciar Expo, se ejecuta `scripts/set-ip.js`.
- Importante cambiar en el main la constante:
  ```js
  const COMO_ARRANCA_MI_IP = "10.0.";
  // En mi caso empezaba con 10.0 ...
- El script obtiene la primera IP local disponible de la PC.
- Con esa IP arma la URL `http://<IP_LOCAL>:3000`.
- Escribe esa URL en `src/config.ts` como:
  ```ts
  export const URL_BACKEND = 'http://<TU_IP_PERSONAL>:3000';
- El archivo `src/config.ts` se crea con el expo start, y no se pushea para no revelar dirección IP