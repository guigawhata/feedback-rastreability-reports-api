import express from 'express';

import uploadConfig from '@config/upload';

import '../typeorm';
import '@shared/container';

import traceabilitiesRoutes from '@modules/traceabilities/infra/http/routes/rastreabilities.routes';

async function startServer() {
  const app = express();

  app.use(express.json());
  app.use('/files', express.static(uploadConfig.tmpFolder));
  app.use('/traceabilities', traceabilitiesRoutes);

  app.listen(process.env.PORT || 3333, () => {
    // eslint-disable-next-line no-console
    console.log('Server started on port 3333!');
  });
}

startServer();
