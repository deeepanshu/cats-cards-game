import express from 'express';
import expressLoader from '@services/express';
import '@services/redis';

const app = express();
const port = 3000;

expressLoader(app);

app.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});