import express from 'express';

const app = express();

app.get('/', (_req, res) => {
  res.json({ status: 'ok', from: 'APP-TS', time: new Date().toISOString() });
});

export default app;
