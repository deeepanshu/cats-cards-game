import express from 'express';
import expressApp from '@services/express';
import '@services/redis';

const app = express();
const port = 3000;

expressApp(app);

app.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});