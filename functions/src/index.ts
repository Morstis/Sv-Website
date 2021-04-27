import * as functions from 'firebase-functions';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions
  .region('europe-west1')
  .https.onRequest((request, response) => {
    functions.logger.info('Hello logs!', { structuredData: true });
    response.send('Hello from Firebase!');
  });

const expressApp = require('../dist/Sv-Website3/server/main').app();

exports.ssr = functions
  .region('us-central1')
  .runWith({})
  .https.onRequest(expressApp);
