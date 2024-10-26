import express from 'express';
import { collectDefaultMetrics, register } from 'prom-client';

collectDefaultMetrics();

const app = express();

app.get('/metrics', async (_req, res) => {
  try {
    res.set('Content-Type', register.contentType);
    res.end(await register.metrics());
  } catch (err) {
    res.status(500).end(err);
  }
});

app.get('/', async(_req, res) => {
  res.send('Hola Mundo')
  res.end()
})

app.listen(4001, '0.0.0.0');