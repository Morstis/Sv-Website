import { USE_EMULATOR as authEmulator } from '@angular/fire/auth';
import { USE_EMULATOR as fireEmulator } from '@angular/fire/firestore';
import { USE_EMULATOR as dbEmulator } from '@angular/fire/database';
import { USE_EMULATOR as funcEmulator } from '@angular/fire/functions';
import { Provider } from '@angular/core';

export const environment = {
  production: false,
  emulators: [
    {
      provide: authEmulator,
      useValue: ['localhost', 9099],
    },
    {
      provide: fireEmulator,
      useValue: ['localhost', 8080],
    },
    {
      provide: dbEmulator,
      useValue: ['localhost', 9000],
    },
    {
      provide: funcEmulator,
      useValue: ['localhost', 5001],
    },
  ] as Provider[],
  firebase: {
    apiKey: 'AIzaSyB622BqWgfEfdUpf6yxaNpJ9meMpq3ixCc',
    authDomain: 'sv-website3.firebaseapp.com',
    databaseURL:
      'https://sv-website3-default-rtdb.europe-west1.firebasedatabase.app',
    projectId: 'sv-website3',
    storageBucket: 'sv-website3.appspot.com',
    messagingSenderId: '725696319111',
    appId: '1:725696319111:web:3fbfba5ff956097ea7f222',
    measurementId: 'G-G90DRZY7PP',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
